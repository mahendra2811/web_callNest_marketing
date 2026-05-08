# Deployment — `callnest.pooniya.com`

Static export only. `npm run build` writes `out/`; any static host serves it. Cloudflare Pages recommended (free, fast CDN, parent domain `pooniya.com` already on Cloudflare).

---

## One-time setup (Cloudflare Pages)

### A. Push to GitHub

```bash
cd /home/primathon/Documents/p_projet/a_web/callNest-web
git init -b main
git add .
git commit -m "Initial commit: callNest marketing site"
gh repo create callnest-web --public --source=. --push    # if you use gh CLI
# OR set remote manually:
# git remote add origin git@github.com:<you>/callnest-web.git
# git push -u origin main
```

### B. Cloudflare Pages → connect repo

1. <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the `callnest-web` repo. Click **Begin setup**.
3. Build settings:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: *(leave blank)*
   - **Environment variables (Production)**:
     - `NODE_VERSION = 20`
     - `NEXT_PUBLIC_GA4_ID = G-XXXXXXXXXX` *(optional — leave empty to disable analytics)*
4. **Save and Deploy**. First build takes ~2 min. You get a `*.pages.dev` URL.

### C. Custom domain `callnest.pooniya.com`

1. In the new Pages project → **Custom domains** → **Set up a custom domain** → enter `callnest.pooniya.com`.
2. Cloudflare auto-creates a CNAME on `pooniya.com` (since the parent zone is on Cloudflare) — accept it. If `pooniya.com` lives elsewhere, add this DNS record on that provider:
   ```
   Type:  CNAME
   Name:  callnest
   Value: <your-project>.pages.dev
   TTL:   Auto
   ```
3. SSL provisions automatically in 1–2 min. Verify <https://callnest.pooniya.com> resolves.

---

## Post-deploy checklist

- [ ] Drop signed APK at `public/apk/callnest-latest.apk` *(see APK build section below)*.
- [ ] Edit `src/content/releases.ts`: replace `"PENDING"` sha256 + the size string. Commit.
- [ ] Push → Cloudflare auto-rebuilds in ~2 min.
- [ ] Verify these all return 200:
  - `https://callnest.pooniya.com/`
  - `/download` (button links to `/apk/callnest-latest.apk`)
  - `/apk/callnest-latest.apk` (downloads)
  - `/sitemap.xml`, `/robots.txt`, `/og.png`, `/favicon.ico`
- [ ] Replace placeholder screenshots in `public/assets/screenshots/screenshot-0[1-5].png`.
- [ ] Fill `social.whatsapp` in `src/content/site.ts`.
- [ ] Set `NEXT_PUBLIC_GA4_ID` in Pages → Settings → Environment variables once GA is configured.

---

## APK build (in the Android repo)

```bash
cd /home/primathon/Documents/p_projet/a_APP/4. callVault
./scripts/release.sh                # builds current versionName
# ./scripts/release.sh --bump-patch  # 1.0.0 → 1.0.1
```

Output:
- `~/Releases/CallNest-<version>.apk` — copy to `public/apk/callnest-latest.apk` here.
- `~/Releases/versions-stable.json` — has `versionCode`, `sha256`, `size`. Paste those into `src/content/releases.ts`.

---

## Vercel (alternate)

Connect the repo, default Next.js preset, set `NEXT_PUBLIC_GA4_ID` in Project Settings → Environment Variables, add `callnest.pooniya.com` under Domains and follow the CNAME hint.

## Netlify (alternate)

Build command `npm run build`, publish dir `out`. Add `NEXT_PUBLIC_GA4_ID` under Site → Environment. Map `callnest.pooniya.com` to the Netlify CNAME.
