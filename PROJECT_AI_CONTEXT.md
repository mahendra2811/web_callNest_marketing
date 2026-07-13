# callNest Marketing Site (callNest-web) — AI Project Context

> **Purpose of this file**: Give any AI (Claude, ChatGPT, Gemini) or human reader a complete understanding of this project in one read. Also serves as my personal interview-prep cheat sheet.

---

## 1. Quick Snapshot (TL;DR)

- **Project ID**: `callnest-web`
- **Title**: callNest — Marketing Site
- **Tagline**: *"Every call is a lead. Don't lose one."*
- **Category**: Web · Marketing · Static
- **Status**: Live (Cloudflare Pages, auto-deploy on `main`)
- **Year**: 2026
- **Role**: Solo Developer
- **Duration**: 2026-Q2
- **Local path**: `a_web/callNest-web/`
- **GitHub**: https://github.com/mahendra2811/web_callNest_marketing
- **Live URL**: https://callnest.app
- **Featured**: Yes

## 2. One-Sentence Description
Fully static (`output: "export"`) Next.js 15 marketing site for the callNest Android app — hosts the signed APK, changelog, FAQ, permissions/privacy/terms pages, with an automated release-sync pipeline that links to the Android repo.

## 3. Long Description
This is the public face of callNest — a fully static Next.js 15 (App Router) site that exists for one job: convince small-business owners to download the sideloaded callNest APK with confidence. Twelve routes including `/changelog`, `/faq`, `/permissions`, `/privacy`, `/terms`. Forms are mailto-only (no backend, no API routes — pure `output: "export"`). The release pipeline is the clever bit: `npm run sync-release` reads from a `~/Releases/` handoff folder (populated by the Android repo's release build), patches `versions-stable.json` (which the app itself polls for self-update) and `releases.ts` with new version + sha256 + size. Cloudflare Pages auto-deploys on push to `main`. `prefers-reduced-motion` respected throughout. Framer Motion for tasteful entrance animations; Inter + Space Grotesk typography.

## 4. Tech Stack
- **Framework**: Next.js 15 (App Router, `output: "export"`)
- **Language**: TypeScript
- **Styling**: Tailwind v3 (CSS variables)
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Fonts**: Inter + Space Grotesk
- **Hosting**: Cloudflare Pages (auto-deploy on push)

## 5. Key Highlights
- 12 routes incl. `/changelog`, `/faq`, `/permissions`, `/privacy`, `/terms`
- Fully static export — no backend, no API routes (forms = mailto:)
- **APK release pipeline** (`npm run sync-release`) auto-patches:
  - `versions-stable.json` (consumed by the app's self-updater)
  - `releases.ts` (drives the /changelog page)
  - sha256 + size of each APK
- `prefers-reduced-motion` respected
- Cloudflare Pages auto-deploy on `main`
- Lightweight: <100 KB initial JS budget

## 6. Problem → Solution
- **Problem**: Sideloaded apps need a download page + signed-APK distribution outside Play Store, with the user trusting that "this random APK on the internet" is safe.
- **Solution**: Static Next.js site with transparency-first content (permissions explainer, privacy policy, source-code link), deterministic release-sync from local Android repo, hosted SHA256s for verification.

## 7. Architecture
```
callNest-web/
├── app/                   # App Router pages (static export)
│   ├── page.tsx           # landing
│   ├── changelog/
│   ├── faq/
│   ├── permissions/
│   ├── privacy/
│   └── terms/
├── components/            # Shared UI
├── lib/releases.ts        # release metadata (patched by sync script)
├── public/
│   ├── versions-stable.json  # app self-update manifest
│   ├── callnest-vX.Y.Z.apk   # signed APKs
│   └── og.png
├── scripts/sync-release.ts   # the magic script
└── next.config.ts            # output: "export"
```

`sync-release` script: reads `~/Releases/` → copies APK to `public/` → computes sha256 → updates `versions-stable.json` + `lib/releases.ts` → commits + pushes.

## 8. Important File Paths
- README: `a_web/callNest-web/README.md`
- Claude memory: `a_web/callNest-web/CLAUDE.md`
- OG image: `a_web/callNest-web/public/og.png`
- Favicons: `public/favicon-512.png`, `favicon-192.png`, `favicon-180.png`

## 9. Tags
`nextjs`, `static-export`, `marketing`, `apk-distribution`, `cloudflare-pages`, `tailwind`, `framer-motion`

---

## 10. Interview Questions I Should Be Ready For

### Next.js / Static Export
1. What does `output: "export"` do in Next.js 15? What App Router features become unavailable?
2. How do you handle dynamic routes (e.g., `/changelog/[version]`) with static export?
3. Why static export instead of SSR or ISR?
4. How does Cloudflare Pages differ from Vercel for hosting Next.js?
5. Why no API routes? How are forms handled?

### APK Distribution
6. Walk me through the APK release-sync pipeline end-to-end.
7. How is sha256 useful here? Who verifies it?
8. How does `versions-stable.json` integrate with the Android app's self-update flow?
9. What's the security risk of self-signed APKs hosted outside Play Store? How do you mitigate?
10. How would you support multiple release channels (stable / beta / canary)?

### Performance / SEO
11. What's the Core Web Vitals strategy for a static marketing site?
12. How does font loading affect LCP? What's your strategy for Inter + Space Grotesk?
13. How would you add a sitemap + robots.txt for a static export?
14. How does `prefers-reduced-motion` work, and where do you respect it?
15. How would you reduce JS bundle for a marketing site that mostly doesn't need it?

### CI/CD
16. How does Cloudflare Pages auto-deploy work? What's in the build step?
17. How would you set up a preview environment for PRs?
18. How would you trigger a release without manual `sync-release`? (GitHub Actions on tag push)

### Privacy / Compliance
19. What's a minimal privacy policy for an app that does zero tracking?
20. Why publish a permissions explainer page? What does it solve?
21. How would you add an in-page consent banner only if needed (you don't)?

### Edge Cases
22. What happens if the APK file is missing on Cloudflare's CDN edge? How would users discover that?
23. How would you A/B test landing copy on a static site? (Client-side experimentation via Cloudflare Workers)

---

## 11. Extra Talking Points (Things to Bring Up Voluntarily)

- **Why static over SSR**: A marketing site changes once a week max. Static = cheaper, faster, no cold-start, no infra.
- **Why Cloudflare Pages, not Vercel**: Free unlimited bandwidth, no cold starts, no vendor lock-in for the static-export model. Vercel's edge advantages don't matter for pure HTML/CSS/JS.
- **The release-sync pipeline is the prized feature**: Manual APK uploads = error-prone. One script = guaranteed-consistent versions.json + changelog + sha256.
- **Transparency-first content**: I wrote dedicated `/permissions` and `/privacy` pages because sideloading freaks people out. Reading why CallLog is needed turns 30% bounce into 90% download.
- **Why mailto forms instead of an API**: Zero infra, zero spam, zero compliance. The audience is small enough that direct email works.
- **Future**: GitHub Actions to auto-release on Android repo tag push; in-page download counter via Cloudflare Analytics; multi-channel (stable/beta) selector.
- **What I'd change**: Move to OpenNext on Cloudflare so I could use API routes for newsletter signup, but stay static for the rest.

---

## 12. If I Need to Revisit This Project Later
Read in this order:
1. `README.md` — setup commands + sync-release usage
2. `CLAUDE.md` — project memory
3. `next.config.ts` — confirms `output: "export"`
4. `scripts/sync-release.ts` — the release pipeline
5. `public/versions-stable.json` — what the app polls
6. `lib/releases.ts` — what the changelog page renders

To develop:
```bash
cd a_web/callNest-web
npm install
npm run dev          # local dev at :3000
npm run build        # static build
npm run sync-release # patch release metadata from ~/Releases/
```

To deploy: push to `main` — Cloudflare Pages picks it up.
