# Release Checklist — Web Side

This repo's slice of the release procedure. The full checklist (build, sign,
tag, push) lives in the Android repo at
`/home/primathon/Documents/p_projet/a_APP/4. callVault/RELEASE-CHECKLIST.md`.

The web repo's job per release:

1. **Receive** the freshly-built signed APK from the Android repo (via
   `npm run sync-release`).
2. **Update** `src/content/releases.ts` with the new entry so the Changelog
   page renders it.
3. **Commit** APK + manifest + releases.ts to `main`.
4. **Push** — Cloudflare Pages auto-deploys.

## Step-by-step

```bash
cd /home/primathon/Documents/p_projet/a_web/callNest-web

# 1. Pull the signed APK + manifest from ~/Releases (output of release.sh
#    in the Android repo).
npm run sync-release

# 2. If the script warns "no entry for v<version> in releases.ts", prepend
#    a new entry. Template:
#
#    {
#      version: "1.0.1",
#      date: "2026-05-14",
#      size: "21.3 MB",
#      sha256: "<full hex>",
#      added: [],
#      changed: [],
#      fixed: [],
#      downloadUrl: "/apk/callnest-latest.apk",
#    },
#
#    Then re-run `npm run sync-release` to fill in size + sha256.

# 3. Verify build is still green.
npm run build

# 4. Commit + push.
git add public/apk/callnest-latest.apk \
        public/versions-stable.json \
        src/content/releases.ts \
        RELEASE-CHECKLIST.md
git commit -m "release: callNest v<version> (sha256 <first8>…)"
git push origin main
```

## What testers see

After the push:

- https://callnest.pooniya.com auto-deploys via Cloudflare Pages (~2 min).
- The download page (`/download`) reads `releases.ts` and shows the new
  version chip, file size, sha256, and a "Download APK" button that
  resolves to `https://callnest.pooniya.com/apk/callnest-latest.apk`.
- The changelog page (`/changelog`) lists every release entry from
  `releases.ts` in reverse chronological order.

## Why we commit the APK to the repo (overriding CLAUDE.md)

The original CLAUDE.md note said "don't commit APKs". The tester-distribution
flow trumped that — testers need a single stable URL
(`/apk/callnest-latest.apk`) that doesn't require GitHub auth or anything
beyond a browser. Each release adds ~21 MB to the repo. Acceptable for now;
if the repo gets too heavy we'll move to GitHub Releases + a CDN redirect.

## Rollback

If a release is broken:

```bash
git log -3                    # find the previous "release: callNest v…" commit
git revert <bad-commit-sha>
git push origin main
```

Cloudflare redeploys to the previous APK + manifest within ~2 minutes.
