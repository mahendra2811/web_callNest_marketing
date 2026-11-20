"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { BETA } from "@/content/beta";

type Release = { applicationId: string; versionName: string; versionCode: number; url: string; sha256: string; size: number; minSdk: number };

function isBetaRelease(value: unknown): value is Release {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return item.applicationId === BETA.applicationId &&
    typeof item.versionName === "string" && item.versionName.length > 0 &&
    typeof item.versionCode === "number" && Number.isSafeInteger(item.versionCode) && item.versionCode > 0 &&
    typeof item.url === "string" && /^https:\/\/callnest\.pooniya\.com\/apk\/callnest-beta-[0-9A-Za-z.-]+-[0-9]+\.apk$/.test(item.url) &&
    typeof item.size === "number" && Number.isSafeInteger(item.size) && item.size > 0 &&
    typeof item.minSdk === "number" && Number.isSafeInteger(item.minSdk) && item.minSdk >= BETA.minAndroid &&
    typeof item.sha256 === "string" && /^[a-f0-9]{64}$/.test(item.sha256);
}

export function BetaDownload() {
  const [release, setRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(BETA.manifestPath, { signal: controller.signal, cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Beta release unavailable");
        return response.json() as Promise<unknown>;
      })
      .then((data) => { if (isBetaRelease(data)) setRelease(data); })
      .catch(() => {})
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  if (loading) return <p className="mt-6 text-sm text-ink-600" role="status">Checking for a Beta release…</p>;
  if (!release) return <p className="mt-6 text-sm text-ink-600" role="status">A Beta download is not available yet.</p>;

  return (
    <div className="mt-6">
      <p className="mb-3 text-sm text-ink-600">Version {release.versionName} · {(release.size / (1024 * 1024)).toFixed(1)} MB · Android {release.minSdk}+</p>
      <a
        href={release.url.replace("https://callnest.pooniya.com", "")}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-neu transition hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        <Download className="h-4 w-4" /> Download Beta for Android
      </a>
      <p className="mt-3 break-all text-xs text-ink-600">SHA-256: {release.sha256}</p>
    </div>
  );
}
