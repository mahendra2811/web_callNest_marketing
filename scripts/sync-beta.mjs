#!/usr/bin/env node
// Prepare only the local Beta website assets. Never deploy or update stable files.
// Requires a signed APK, its release metadata, an independently configured
// release certificate SHA-256, apksigner and apkanalyzer on PATH.
// Example: npm run sync-beta -- --apk /path/CallNest-Beta-1.2.3.apk \
//   --metadata /path/CallNest-Beta-1.2.3.json --cert-sha256 <release-cert-sha256>
import { createHash, randomBytes } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const expectedPackage = "com.pooniya.callnestbeta";
const betaApkBaseUrl = "https://callnest.pooniya.com/apk/";
const manifestDestination = join(root, "public/versions-beta.json");
const args = process.argv.slice(2);

function fail(message) { throw new Error(message); }
function readOptions(values) {
  const options = {};
  for (let i = 0; i < values.length; i += 2) {
    const flag = values[i];
    const value = values[i + 1];
    if (!["--apk", "--metadata", "--cert-sha256"].includes(flag) || !value || value.startsWith("--") || options[flag]) {
      fail("Expected --apk <file> --metadata <file> --cert-sha256 <configured-release-certificate>.");
    }
    options[flag] = value;
  }
  if (!options["--apk"] || !options["--metadata"] || !options["--cert-sha256"]) {
    fail("An APK, release metadata, and independently configured release certificate SHA-256 are required.");
  }
  return options;
}
function digest(bytes) { return createHash("sha256").update(bytes).digest("hex"); }
function normalizedFingerprint(value) { return value.replace(/:/g, "").toLowerCase(); }
function command(program, args) {
  try {
    return execFileSync(program, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch (error) {
    fail(`${program} could not verify the APK. Install Android SDK tools and make sure they are on PATH. ${error.message}`);
  }
}

try {
  const options = readOptions(args);
  const expectedCert = normalizedFingerprint(options["--cert-sha256"]);
  if (!/^[a-f0-9]{64}$/.test(expectedCert)) fail("The expected release certificate fingerprint must be SHA-256.");
  const apkPath = resolve(options["--apk"]);
  const metadata = JSON.parse(readFileSync(resolve(options["--metadata"]), "utf8"));
  const initialApk = readFileSync(apkPath);
  const sha256 = digest(initialApk);
  if (metadata.applicationId !== expectedPackage || metadata.sha256 !== sha256 || metadata.size !== initialApk.length) {
    fail("The APK hash, size or application ID does not match its release metadata.");
  }
  const actualPackage = command("apkanalyzer", ["manifest", "application-id", apkPath]);
  const versionName = command("apkanalyzer", ["manifest", "version-name", apkPath]);
  const versionCodeText = command("apkanalyzer", ["manifest", "version-code", apkPath]);
  const minSdkText = command("apkanalyzer", ["manifest", "min-sdk", apkPath]);
  const debuggable = command("apkanalyzer", ["manifest", "debuggable", apkPath]);
  const versionCode = Number(versionCodeText);
  const minSdk = Number(minSdkText);
  if (debuggable !== "false") fail("The Beta release APK must not be debuggable.");
  if (actualPackage !== expectedPackage || !Number.isSafeInteger(versionCode) || versionCode < 1 ||
      !Number.isSafeInteger(minSdk) || minSdk < 1 ||
      versionCode !== metadata.versionCode || versionName !== metadata.versionName) {
    fail("The APK package or version does not match the Beta release metadata.");
  }
  const verification = command("apksigner", ["verify", "--verbose", "--print-certs", apkPath]);
  const signerDigests = [...verification.matchAll(/^Signer #\d+ certificate SHA-256 digest:\s*([a-fA-F0-9:]+)\s*$/gm)]
    .map((match) => normalizedFingerprint(match[1]));
  if (signerDigests.length !== 1 || signerDigests[0] !== expectedCert) {
    fail("The verified APK must have exactly one signer matching the configured Beta release certificate.");
  }
  if (digest(readFileSync(apkPath)) !== sha256) fail("The APK changed during verification; no Beta files were written.");
  if (existsSync(manifestDestination)) {
    const previous = JSON.parse(readFileSync(manifestDestination, "utf8"));
    if (Number.isSafeInteger(previous.versionCode) && versionCode <= previous.versionCode) {
      fail(`Beta versionCode must increase beyond the published ${previous.versionCode}.`);
    }
    if (previous.certificateSha256 && normalizedFingerprint(previous.certificateSha256) !== expectedCert) {
      fail("The Beta signing certificate changed. Rotate the release key through a separately reviewed migration.");
    }
  }
  const apkFileName = `callnest-beta-${versionName}-${versionCode}.apk`;
  const apkDestination = join(root, "public/apk", apkFileName);
  if (existsSync(apkDestination)) fail(`Refusing to overwrite immutable artifact ${apkFileName}.`);
  const manifest = {
    applicationId: expectedPackage,
    versionCode,
    versionName,
    url: `${betaApkBaseUrl}${apkFileName}`,
    size: initialApk.length,
    sha256,
    certificateSha256: expectedCert,
    minSdk,
  };
  // Stage only after all verification passes; the manifest is published last.
  const suffix = randomBytes(8).toString("hex");
  const apkTemp = `${apkDestination}.${suffix}.tmp`;
  const manifestTemp = `${manifestDestination}.${suffix}.tmp`;
  try {
    writeFileSync(apkTemp, initialApk, { flag: "wx" });
    writeFileSync(manifestTemp, `${JSON.stringify(manifest, null, 2)}\n`, { flag: "wx" });
    renameSync(apkTemp, apkDestination);
    renameSync(manifestTemp, manifestDestination);
  } finally {
    rmSync(apkTemp, { force: true });
    rmSync(manifestTemp, { force: true });
  }
  console.log(`Prepared Beta ${versionName} (code ${versionCode}) in public/. Nothing was published.`);
} catch (error) {
  console.error(`Beta sync failed: ${error.message}`);
  process.exitCode = 1;
}
