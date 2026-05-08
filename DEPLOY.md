# Deployment

The site is a static export (`output: "export"`). Everything ships from the `out/` folder produced by `npm run build`. Any static host works. Cloudflare Pages is the recommended path.

## Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In Cloudflare → Pages, **Create a project** and connect the repository.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output: `out`
   - Node version: `20`
4. Environment variables (Production):
   - `NEXT_PUBLIC_GA4_ID` = your GA4 Measurement ID (optional). Leave unset to disable analytics.
5. Add the custom domain `callnest.pooniya.com` and follow Cloudflare's DNS instructions:
   - Add a `CNAME` record `callnest` → `<your-project>.pages.dev` (proxied).
6. Drop the signed APK at `public/apk/callnest-latest.apk`, update `src/content/releases.ts` (size + sha256), commit, and let Pages rebuild.
7. Verify `/sitemap.xml`, `/robots.txt`, `/og.png` and `/favicon.ico` resolve.

## Vercel

Connect the repo, leave the default Next.js preset (Vercel runs `next build` and supports the `output: "export"` automatically — your site is served from the `out/` artifact). Set `NEXT_PUBLIC_GA4_ID` in Project Settings → Environment Variables. Point `callnest.pooniya.com` at Vercel via the suggested CNAME, then drop the APK and ship.

## Netlify

Create a new site from this repository. Build command `npm run build`, publish directory `out`. Add `NEXT_PUBLIC_GA4_ID` in Site → Environment. Map `callnest.pooniya.com` to the Netlify CNAME, then drop the APK and redeploy.
