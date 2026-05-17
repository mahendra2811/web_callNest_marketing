# Tester Distribution — Call Nest

Single source of truth for **where the latest APK lives, how to push it to
testers, and the exact WhatsApp template to use.** Companion doc to
`RELEASE-CHECKLIST.md` — read that first if you haven't built the APK yet.

---

## 1. Where every artefact lives (per release)

After running `./scripts/release.sh` in the Android repo and
`npm run sync-release` in this repo, the v1.0.X version lives at:

| Artefact | Path / URL |
|---|---|
| Signed APK on dev machine | `~/Releases/CallNest-<version>.apk` |
| APK committed to web repo | `/home/primathon/Documents/p_projet/a_web/callNest-web/public/apk/callnest-latest.apk` |
| Public download URL (testers) | https://callnest.pooniya.com/download |
| Direct APK URL | https://callnest.pooniya.com/apk/callnest-latest.apk |
| Update manifest (self-update later) | https://callnest.pooniya.com/versions-stable.json |
| Changelog (engineering) | `app_callVault/CHANGELOG.md` |
| Changelog (rendered on website) | `callNest-web/src/content/releases.ts` |
| Release procedure | `RELEASE-CHECKLIST.md` (in both repos) |
| Tag in git | `v<version>` in app_callVault |

The web repo is what testers actually hit. Every release commits a new APK
+ updated `releases.ts` + updated `versions-stable.json` to `main`;
Cloudflare Pages auto-deploys in ~2 minutes.

---

## 2. WhatsApp broadcast template

Copy-paste this into your WhatsApp broadcast list. Only the **bold parts**
change each release:

```
📱 *Call Nest v<VERSION> is ready*

👉 https://callnest.pooniya.com/download

*New in this build:*
• <highlight 1>
• <highlight 2>
• <highlight 3>

If anything's broken, screenshot/record and ping me back. 🙏

_First time installing?_ When Chrome asks "Allow this source?", tap Allow once — Android remembers.
```

### Filled template for v1.0.1 (2026-05-14)

```
📱 *Call Nest v1.0.1 is ready*

👉 https://callnest.pooniya.com/download

*New in this build:*
• Brand-new Search (Spotlight-style — try the 🔍 icon)
• Insights tab with today's snapshot + 7-day trends
• Pull-to-refresh on every tab
• Excel + PDF export fixed

If anything's broken, screenshot/record and ping me back. 🙏

_First time installing?_ When Chrome asks "Allow this source?", tap Allow once — Android remembers.
```

### Where to find the highlights for any future release

The `Added` / `Changed` / `Fixed` arrays in
`callNest-web/src/content/releases.ts` for that version. Pick the 2–4
most user-visible items.

---

## 3. Send-to-tester flow (under 1 minute)

```
1. Open WhatsApp Web → your "callNest testers" broadcast list
2. Paste the template above (with version + highlights filled in)
3. Send
4. Done — no APK attachment needed, link is enough
```

That's it. Testers tap the link, the website's Download button gives them
the signed APK with the version baked into the filename
(`callnest-latest.apk`, redirected from the URL), Android shows the
"Update" prompt if they already had the previous version.

### Why not attach the APK directly to WhatsApp?

- WhatsApp sometimes flags `.apk` attachments as "may harm your device" —
  link-to-website doesn't.
- Each release would mean re-attaching a different 21 MB file. Link is
  stable.
- Tester sees the version chip, file size, sha256, and full changelog on
  the download page — instantly knows what changed.

### Fallback: direct APK on WhatsApp

Only for testers who report the website doesn't load (rare; usually a
specific Indian ISP / Wi-Fi). Send them the file from
`~/Releases/CallNest-<version>.apk` as a WhatsApp attachment. The
versioned filename means they can see it's a new build at a glance.

---

## 4. First-time tester onboarding

The very first install from a new "source" (Chrome / WhatsApp / Gmail)
needs **"Allow install from this source"** enabled. Android prompts
once; tester taps Allow; remembered forever for that source app.

Tell each brand-new tester this. After the first install, every
subsequent version is a one-tap "Update" with no permission re-grant
because the keystore signature matches.

### Optional: 30-second screen recording

If you onboard more than 2-3 testers, record a short video showing the
"Allow this source" toggle on a fresh phone and pin it to the broadcast
list. Re-use forever.

---

## 5. Per-release checklist (one-pager)

```
□ Run ./scripts/release.sh --bump-patch in app_callVault
□ Run npm run sync-release in callNest-web
□ Prepend v<version> entry to src/content/releases.ts (template in RELEASE-CHECKLIST.md)
□ Re-run npm run sync-release to fill size + sha256
□ npm run build  → verify clean
□ Commit + push web repo (Cloudflare auto-deploys)
□ Commit + push app repo, tag v<version>, push tag
□ Send WhatsApp template (this doc, §2) to testers
□ Watch for tester feedback in next 24h
```

Full version in `RELEASE-CHECKLIST.md` in both repos.

---

## 6. Where to find this doc next time

This file is referenced from:

- `/home/primathon/Documents/p_projet/a_web/callNest-web/CLAUDE.md` →
  "## Release flow" section
- `/home/primathon/Documents/p_projet/a_APP/4. callVault/CLAUDE.md` →
  "## Tester distribution" section

If a future Claude session needs to ship a release or talk to testers,
they'll find a pointer in the CLAUDE.md they auto-load.
