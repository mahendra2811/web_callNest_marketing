#!/usr/bin/env node
// Sync the latest signed APK from the Android repo into this web repo.
//
// Reads:    ~/Releases/CallNest-<version>.apk  +  ~/Releases/versions-stable.json
//             (both produced by callVault/scripts/release.sh)
// Writes:   public/apk/callnest-latest.apk
//           public/versions-stable.json   (url rewritten to callnest.pooniya.com)
//           src/content/releases.ts       (size + sha256 + date for the matching version)
//
// Usage:    npm run sync-release
//           npm run sync-release -- --apk /path/to/CallNest-1.2.3.apk
//
// Idempotent. Safe to re-run after every Android release build.

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, copyFileSync, statSync, readdirSync, existsSync } from "node:fs";
import { resolve, join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const releasesDir = process.env.CALLNEST_RELEASES_DIR ?? join(homedir(), "Releases");

const args = process.argv.slice(2);
const apkArgIdx = args.indexOf("--apk");
const apkOverride = apkArgIdx >= 0 ? args[apkArgIdx + 1] : null;

function findLatestApk() {
  if (apkOverride) return apkOverride;
  if (!existsSync(releasesDir)) {
    fail(`Releases dir not found: ${releasesDir}\nRun ./scripts/release.sh in the Android repo first.`);
  }
  const apks = readdirSync(releasesDir)
    .filter((f) => /^CallNest-.+\.apk$/.test(f))
    .map((f) => ({ f, path: join(releasesDir, f), mtime: statSync(join(releasesDir, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  if (apks.length === 0) fail(`No CallNest-*.apk found in ${releasesDir}.`);
  return apks[0].path;
}

function sha256(path) {
  const buf = readFileSync(path);
  return createHash("sha256").update(buf).digest("hex");
}

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

function ok(msg) {
  console.log(`  ${msg}`);
}

const apkPath = findLatestApk();
if (!existsSync(apkPath)) fail(`APK not found: ${apkPath}`);

// --- Read sibling versions-stable.json for versionName / versionCode / minSdk / releaseNotes ---
const manifestSrc = join(releasesDir, "versions-stable.json");
let manifest = {};
if (existsSync(manifestSrc)) {
  manifest = JSON.parse(readFileSync(manifestSrc, "utf8"));
}

const apkSize = statSync(apkPath).size;
const apkSha = sha256(apkPath);
const versionName = manifest.versionName ?? basename(apkPath).replace(/^CallNest-(.+)\.apk$/, "$1");
const versionCode = manifest.versionCode ?? 1;
const minSdk = manifest.minSdk ?? 26;
const today = new Date().toISOString().slice(0, 10);

console.log(`callNest release sync`);
console.log(`  apk        ${apkPath}`);
console.log(`  version    ${versionName} (code ${versionCode})`);
console.log(`  size       ${apkSize.toLocaleString()} bytes (${(apkSize / 1024 / 1024).toFixed(1)} MB)`);
console.log(`  sha256     ${apkSha}`);

// --- Copy APK ---
const apkDst = join(repoRoot, "public/apk/callnest-latest.apk");
copyFileSync(apkPath, apkDst);
ok(`copied → ${apkDst}`);

// --- Write versions-stable.json with web-correct URL ---
const webManifest = {
  versionCode,
  versionName,
  url: "https://callnest.pooniya.com/apk/callnest-latest.apk",
  size: apkSize,
  sha256: apkSha,
  minSdk,
  minSupportedVersionCode: manifest.minSupportedVersionCode ?? 1,
  releaseNotes: manifest.releaseNotes ?? `callNest ${versionName}`,
};
const webManifestPath = join(repoRoot, "public/versions-stable.json");
writeFileSync(webManifestPath, JSON.stringify(webManifest, null, 2) + "\n");
ok(`wrote   → ${webManifestPath}`);

// --- Update src/content/releases.ts (only the size + sha256 + date for the matching version) ---
const releasesTsPath = join(repoRoot, "src/content/releases.ts");
let src = readFileSync(releasesTsPath, "utf8");

const versionRe = new RegExp(
  String.raw`(\{\s*version:\s*"${versionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}",[\s\S]*?\})`
);
const m = src.match(versionRe);
if (!m) {
  console.warn(`  ⚠  no entry for v${versionName} in releases.ts — leaving untouched.`);
  console.warn(`     Add an entry manually if this is a new version.`);
} else {
  const sizeMb = `${(apkSize / 1024 / 1024).toFixed(1)} MB`;
  let block = m[1];
  block = block.replace(/(date:\s*)"[^"]*"/, `$1"${today}"`);
  block = block.replace(/(size:\s*)"[^"]*"/, `$1"${sizeMb}"`);
  block = block.replace(/(sha256:\s*)"[^"]*"/, `$1"${apkSha}"`);
  src = src.replace(versionRe, block);
  writeFileSync(releasesTsPath, src);
  ok(`patched → ${releasesTsPath} (v${versionName} → size=${sizeMb}, sha256=${apkSha.slice(0, 12)}…, date=${today})`);
}

console.log("\n✓ done. Next:");
console.log("    git add public/apk/callnest-latest.apk public/versions-stable.json src/content/releases.ts");
console.log(`    git commit -m "release: callNest v${versionName} (sha256 ${apkSha.slice(0, 8)}…)"`);
console.log("    git push");
