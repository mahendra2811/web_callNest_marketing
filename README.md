# callNest — marketing website

Static, frontend-only Next.js 15 site for **callNest**, a sideloaded Android app that turns every inquiry call into a structured lead pipeline.

> Tagline: **Every call is a lead. Don't lose one.**

## Stack

- Next.js 15 App Router (`output: "export"`, fully static)
- TypeScript, Tailwind v3 with CSS variables
- Framer Motion (subtle, respects `prefers-reduced-motion`)
- `lucide-react` icons, Inter + Space Grotesk via `next/font`
- No backend, no API routes, no database, no CMS. Forms use `mailto:`.

## Local development

```bash
npm install
npm run dev
# build static site into ./out
npm run build
```

## Project structure

```
src/
  app/                12 routes incl. sitemap + robots
  components/
    layout/           Header, Footer
    ui/               Button, Card, PhoneMockup, Accordion, ThemeToggle, ...
    sections/         Hero, Problem, HowItWorks, FeaturesGrid, Screenshots, WhyCallNest, FAQPreview, FinalCTA
  content/            site.ts, features.ts, releases.ts, faqs.ts, permissions.ts
  lib/                analytics.tsx, seo.ts
public/
  assets/{logo,screenshots,icons}
  apk/                Drop the signed APK here (see public/apk/README.md)
scripts/
  gen-assets.mjs      Regenerate favicons, OG image, screenshot placeholders
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA4_ID` | GA4 Measurement ID. Leave empty to disable analytics. |

## Owner TODOs (production checklist)

1. Drop the signed production APK at `public/apk/callnest-latest.apk`.
2. Update `src/content/releases.ts` with the real **size** and **SHA-256**.
3. Fill the WhatsApp number in `src/content/site.ts` (`social.whatsapp`).
4. Replace placeholder screenshots in `public/assets/screenshots/` with real ones (`screenshot-01.png` … `screenshot-05.png`, 720×1480).
5. Set `NEXT_PUBLIC_GA4_ID` in your hosting environment (optional).
6. Optional: regenerate favicons and OG with `node scripts/gen-assets.mjs` after replacing the mark.

## Asset notes

- The primary mark lives at `public/assets/logo/callnest-mark.png` (transparent background).
- The OG card (`public/og.png`) is composed at build-time by `scripts/gen-assets.mjs`. Re-run after design tweaks.
- Placeholder screenshots are programmatic SVG renders. Replace with real screen captures before launch.

See `DEPLOY.md` for deployment instructions.
