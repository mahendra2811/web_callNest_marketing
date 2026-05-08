# callNest Web — Project Memory

Static, frontend-only marketing site for **callNest** (Android sideload app that turns inquiry calls into a lead pipeline).

## Stack

- Next.js 15 App Router, `output: "export"` — fully static, no server runtime
- TypeScript strict, Tailwind v3 (CSS variables for theming)
- Framer Motion (respect `prefers-reduced-motion`)
- `lucide-react` icons, Inter + Space Grotesk via `next/font`
- **No backend.** No API routes, no DB, no CMS. Forms use `mailto:`.

## Layout

```
src/
  app/                Routes: /, /features, /download, /faq, /changelog, /contact,
                      /bug-report, /feedback, /permissions, /privacy, /terms,
                      plus sitemap.ts, robots.ts, not-found.tsx
  components/
    layout/           Header, Footer
    sections/         Hero, Problem, HowItWorks, FeaturesGrid, Screenshots,
                      WhyCallNest, FAQPreview, FinalCTA
    ui/               Button, Card, PhoneMockup, Accordion, ThemeToggle, ...
  content/            site.ts, features.ts, releases.ts, faqs.ts, permissions.ts
  lib/                analytics.tsx, seo.ts
public/
  apk/                Signed APK drop folder (see public/apk/README.md)
  assets/{logo,screenshots,icons}
scripts/
  gen-assets.mjs      Regenerate favicons, OG image, screenshot placeholders
  sync-release.mjs    Pull latest signed APK from ~/Releases/ and update
                      public/apk/, public/versions-stable.json, releases.ts
```

## Commands

```bash
npm run dev          # local dev server
npm run build        # static export to ./out
npm run lint         # next lint
npm run typecheck    # tsc --noEmit
npm run sync-release # copy ~/Releases/CallNest-*.apk → public/apk + patch metadata
npm run release      # sync-release + build (one-shot before deploy)
node scripts/gen-assets.mjs   # regen favicons / OG / screenshot placeholders
```

## Release workflow (every Android release)

This repo and the Android repo at `/home/primathon/Documents/p_projet/a_APP/4. callVault`
are linked by the local filesystem — `~/Releases/` is the handoff folder.

```bash
# 1. In the Android repo, build the signed APK
cd /home/primathon/Documents/p_projet/a_APP/4. callVault
./scripts/release.sh                   # current version
# OR:
./scripts/release.sh --bump-patch      # 1.0.0 → 1.0.1, versionCode++

# 2. Back in this web repo, pull the artifact in
cd /home/primathon/Documents/p_projet/a_web/callNest-web
npm run sync-release
# This copies CallNest-<ver>.apk → public/apk/callnest-latest.apk,
# rewrites public/versions-stable.json with the public URL,
# and patches src/content/releases.ts (size, sha256, date).

# 3. Commit + push (Cloudflare Pages auto-deploys)
git add public/apk/callnest-latest.apk public/versions-stable.json src/content/releases.ts
git commit -m "release: callNest v<ver> (sha256 <hash8>…)"
git push
```

### Adding a new version entry

`sync-release.mjs` only patches the entry in `releases.ts` whose `version`
matches the APK's `versionName`. **Before bumping the Android version, prepend
a new entry** to `RELEASES` in `src/content/releases.ts` with placeholder
`size`/`sha256`/`date` and a real `added`/`changed`/`fixed` list. Then run
`npm run sync-release` to fill in the metadata.

### Override the release source

```bash
CALLNEST_RELEASES_DIR=/some/other/path npm run sync-release
# or
npm run sync-release -- --apk /tmp/CallNest-1.2.3.apk
```

## Conventions

- **Static-only.** Never add `route handlers`, `server actions`, server-only data
  fetching, or any feature that breaks `output: "export"`. If a feature seems to
  need a backend, surface it as a `mailto:` flow or call it out before coding.
- **Content lives in `src/content/*.ts`** — edit those files for FAQ, features,
  releases, permissions, site metadata. Don't hardcode copy in components.
- **Section components** (`components/sections/*`) are page-level blocks composed
  from `components/ui/*` primitives. Keep new marketing blocks in this pattern.
- **Theming** uses CSS variables in `src/app/globals.css` + Tailwind. Don't add
  hex colors inline — extend tokens.
- **Animations** must check `prefers-reduced-motion` before running anything
  non-trivial. Keep transitions subtle.
- **SEO**: `src/lib/seo.ts` builds metadata. New routes should export `metadata`
  via that helper, not ad-hoc objects.
- **Analytics**: route through `src/lib/analytics.tsx` — don't drop new
  third-party snippets directly into `layout.tsx`.

## Don't

- Don't introduce dynamic rendering, ISR, or middleware — `output: "export"`
  forbids it and the build will fail at deploy time.
- Don't commit anything from `.next/`, `/out/`, `node_modules/`, or `.env*`
  files (already in `.gitignore`).
- Don't drop a real signed APK into `public/apk/` in commits — that folder is
  for local builds only.
