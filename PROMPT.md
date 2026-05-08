# callNest — Landing Website Mega Prompt

> You are an expert frontend engineer + product designer. Build the **complete, production-ready** marketing website for an Android app called **callNest** based **only** on this document. No human follow-up will be available. Make every reasonable decision yourself. Ship a polished, deployable site.

---

## 1. Project meta

- **Project root**: `/home/primathon/Documents/p_projet/a_web/callNest-web`
- **Live URL (target)**: `https://callnest.pooniya.com`
- **Parent domain**: `pooniya.com` (already owned). callNest is a subdomain.
- **Type**: Frontend-only static website. No backend, no server, no DB.
- **Hosting target (recommended, pick one and document in README)**:
  1. **Cloudflare Pages** (recommended — free, fast CDN, easy custom domain via CNAME)
  2. Vercel
  3. Netlify
  4. GitHub Pages
  Site MUST be deployable as plain static files (`out/` or `dist/`).
- **Analytics**: Leave a clearly-marked placeholder for **Google Analytics 4** (`G-XXXXXXXXXX`) in `<head>` via a single env var or a single constant. Owner will fill it in later. Do NOT hardcode a tracking ID.

---

## 2. Tech stack (locked)

- **Framework**: Next.js 15 (App Router) with `output: 'export'` for fully static export. TypeScript.
- **Styling**: Tailwind CSS v4 + CSS variables for theme tokens.
- **Animations**: Framer Motion (subtle only — fade/slide/scale, no parallax circus).
- **Icons**: `lucide-react` for UI icons. Feature icons can be inline SVG.
- **Fonts**: Inter (body) + Space Grotesk or Manrope (display) via `next/font`.
- **No CMS, no database, no auth, no API routes.** All content lives in typed TS data files under `src/content/`.
- **Forms (bug report / contact)**: Frontend only. Use a `mailto:` link with prefilled subject+body, OR open user's email client. Optionally, leave a clearly-commented `// TODO: hook to Formspree/Web3Forms` block. Do NOT invent a backend.

---

## 3. App context (what callNest does)

callNest is a **sideloaded Android app** for Indian small-business owners (shops, clinics, tutors, service providers) who receive 20–100 inquiry calls per day from unknown numbers. It captures every call, auto-saves unsaved inquiry numbers as contacts, and turns a chaotic call log into a structured lead pipeline.

**Tagline ideas (pick the strongest, don't ask)**:
- "Every call is a lead. Don't lose one."
- "Turn missed calls into managed leads."
- "Your call log, finally organised."

**Primary user**: Indian SMB owner / solo entrepreneur. Hindi-English mix audience. Copy stays in clean English (the app itself is bilingual; the website is English-only for v1).

**Distribution**: Sideloaded APK (NOT on Play Store). Users download `.apk` directly from this website and install it.

---

## 4. Feature list — write a short, punchy section for each

Each feature gets: **icon + 3–6 word title + one-line description (≤ 18 words)**. No long paragraphs. No marketing fluff. Concrete verbs.

1. **Auto-capture every call** — Reads your call log and saves every inquiry, even the ones you missed.
2. **Auto-save unknown numbers** — New inquiry numbers become contacts in a dedicated `callNest Inquiries` group.
3. **Smart lead score (0–100)** — Ranks each caller by recency, frequency, and your tags.
4. **Tag, note, bookmark** — One-tap labels like "Hot", "Quoted", "Follow-up tomorrow".
5. **In-call floating bubble** — See caller history and notes while the call is still ringing.
6. **Post-call popup** — Tag the call the moment it ends, before context fades.
7. **Follow-up reminders** — Schedule a callback, get a notification at the right time.
8. **Excel / CSV / PDF export** — Hand a clean lead sheet to your team in seconds.
9. **Powerful search & filters** — By tag, date range, score, contact, keyword in notes.
10. **Bulk actions** — Tag, export, or follow-up dozens of calls at once.
11. **App lock (PIN / biometric)** — Customer data stays private even if the phone doesn't.
12. **Local-first storage** — Your data lives on your device. No mandatory cloud account.
13. **Optional cloud backup** — Encrypted, opt-in, sign in with phone or email.
14. **Self-update** — App checks for new versions and updates itself. No Play Store needed.
15. **Bilingual** — Full Hindi + English UI.
16. **Battery-friendly** — Designed to survive Xiaomi / Realme / Oppo battery managers.

> Write each as a card. Use a `lucide-react` icon per card. Keep cards uniform in height.

---

## 5. Pages to build

All pages share a consistent header (logo + nav + "Download APK" CTA) and footer.

### 5.1 `/` — Home (single long landing page, sectioned)

Sections in this order:

1. **Hero** — logo, headline, subhead, primary CTA "Download APK" (latest version), secondary CTA "See features". Phone mockup with screenshots on the right (or below on mobile). Show current version + APK size + "Android 8.0+".
2. **Problem strip** — three pain points: missed leads, messy call log, no follow-up system.
3. **How it works** — 3 steps: Install → Grant permissions → Get organized. Numbered, illustrated.
4. **Features grid** — all 16 features from §4 as cards (4 cols desktop, 2 tablet, 1 mobile).
5. **Screenshots gallery** — 4–6 phone mockups with captions. Use placeholders if real screenshots not provided.
6. **Why callNest** — 3 differentiators: "Local-first. No subscription. Made for Indian SMBs."
7. **FAQ** — 6 questions (see §7).
8. **Final CTA** — Big "Download callNest" + version label + checksum line.
9. **Footer**.

### 5.2 `/download` — Download page

- Latest version card: version number, release date, file size, SHA-256 checksum, "Download APK" button (links to `/apk/callnest-latest.apk`).
- Step-by-step install guide for sideloaded APK (Enable "Install from unknown sources" → Open APK → Install → Grant permissions).
- Old versions table (read from `src/content/releases.ts`).
- Notes about Android version support (min Android 8.0 / API 26).

### 5.3 `/features` — Detailed features page

Same 16 features, but with 2–3 sentences each and a small illustration / screenshot per feature. Grouped under: **Capture · Organize · Act · Protect**.

### 5.4 `/changelog` — Release notes

Renders from `src/content/releases.ts`. Each entry: version, date, "Added / Changed / Fixed" lists.

### 5.5 `/privacy` — Privacy policy

Frontend-only static page. Cover: data stays on device; permissions used (call log, contacts, notifications, storage); optional cloud backup is opt-in and encrypted; no ads, no third-party trackers in app; analytics on website only via GA4. Plain language, no legalese template dump.

### 5.6 `/terms` — Terms of use

Short, plain English. Sideloaded software, "as is", user responsible for compliance with local laws on call recording (NOTE: callNest does NOT record calls; only logs metadata + user notes).

### 5.7 `/permissions` — Why callNest asks for each permission

Table: Permission · Why we need it · What we DON'T do with it.

Cover: `READ_CALL_LOG`, `READ_CONTACTS`, `WRITE_CONTACTS`, `POST_NOTIFICATIONS`, `SYSTEM_ALERT_WINDOW` (in-call bubble), `FOREGROUND_SERVICE`, battery optimisation exemption.

### 5.8 `/bug-report` — Bug report (frontend only)

Form fields: Name (optional), Email (optional), Device model, Android version, App version, Steps to reproduce, Expected vs actual.

On submit → opens user's email client via `mailto:bugs@pooniya.com` with all fields prefilled in the body. Show a "Copied to clipboard" fallback if `mailto` fails. **No backend call.**

### 5.9 `/feedback` — Feature request / feedback

Same `mailto:` pattern → `feedback@pooniya.com`.

### 5.10 `/contact` — Contact

Email, optional WhatsApp link (placeholder `wa.me/91XXXXXXXXXX`), business address line. No form.

### 5.11 `/faq` — FAQ

Expanded version of the 6 home FAQs + 6 more. Accordion UI.

### 5.12 `/404` — Not found

Branded, with a "Back to home" CTA and a small joke about a missed call.

---

## 6. Asset handling

- Create folder: `public/assets/`
- Inside it, create: `logo/`, `screenshots/`, `icons/`, `apk/`.
- **Copy the app logo** from this absolute path into `public/assets/logo/`:
  - Source: `/home/primathon/Documents/p_projet/a_APP/4. callVault/app/src/main/res/drawable/ic_callnest_logo.png` → save as `public/assets/logo/callnest-logo.png`
  - Also copy `/home/primathon/Documents/p_projet/a_APP/4. callVault/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png` → `public/assets/logo/callnest-mark.png`
- Generate a **transparent-background** version of the logo (use the foreground PNG above — it already has transparency). Use this as the primary logo throughout the site.
- Generate a **favicon set** (16, 32, 180-apple, 192, 512, `favicon.ico`) from the mark.
- Generate an **OpenGraph image** (1200×630) at `public/assets/og.png` — logo + tagline on brand-coloured background.
- Generate **manifest.webmanifest**.
- For phone-screenshot mockups, create reusable React component `<PhoneMockup src="..." />` that renders an SVG phone frame around any image. If real screenshots aren't available, ship 5 high-quality placeholder PNGs (gradient + label) named `screenshot-01.png` … `screenshot-05.png`.
- APK file goes at `public/apk/callnest-latest.apk`. **You will not have the real APK.** Create the folder and add a `README.md` inside it explaining the owner must drop the latest signed APK there with that exact filename. Also generate an empty placeholder `callnest-latest.apk.placeholder` so the folder isn't empty.

---

## 7. FAQ content (use verbatim)

1. **Is callNest free?** — Yes. No subscription, no ads, no in-app purchases.
2. **Why isn't it on the Play Store?** — Reading the call log requires permissions Play Store restricts for non-default-dialer apps. callNest is distributed directly so it can do its job.
3. **Is it safe to install?** — Yes. The APK is signed. SHA-256 checksum is published on the download page. Verify it before installing.
4. **Where is my data stored?** — On your device, in an encrypted local database. Cloud backup is optional and off by default.
5. **Do you record my calls?** — No. callNest never records audio. It only reads the call-log metadata Android already stores.
6. **Will it slow down my phone?** — No. callNest runs lightweight background work and is tuned for Xiaomi/Realme/Oppo battery managers.

Add 6 more sensible FAQs on `/faq` (permissions, OEM battery settings, exporting data, deleting data, switching phones, contacting support).

---

## 8. Visual / brand direction

- **Style**: Modern, clean, slightly **neumorphic** accents (the app uses a Neo* component system — soft shadows, rounded corners, subtle inner highlights). Don't overdo it on the website — use it as accent, not theme.
- **Palette** (define in `tailwind.config.ts` and CSS vars):
  - `--brand-500: #2563EB` (deep, trustworthy blue)
  - `--brand-600: #1D4ED8`
  - `--accent-500: #14B8A6` (teal — for CTAs and success states)
  - `--ink-900: #0B1220` (text)
  - `--ink-600: #475569` (muted text)
  - `--surface-50: #F8FAFC` (page bg)
  - `--surface-0: #FFFFFF` (card)
  - Dark mode: invert surfaces, keep brand. Toggle in header.
- **Logo background**: NEVER use a coloured square behind the logo. Always render on transparent bg. The logo mark is round-ish; let it breathe.
- **Typography**: Display font for H1/H2, Inter for everything else. Tight tracking on headings.
- **Imagery**: Phone mockups, isometric icons, no stock-photo people.
- **Motion**: Section fade-up on scroll (Framer Motion `whileInView`). One small hover lift on cards. Nothing else.
- **Accessibility**: WCAG AA contrast. All interactive elements keyboard-reachable. Real `<button>` and `<a>`. `prefers-reduced-motion` respected.
- **Performance budget**: Lighthouse mobile ≥ 95 across the board. No external script tags except the (placeholder) GA4 snippet. All images `next/image` with explicit dimensions. No layout shift.

---

## 9. SEO / metadata

- Per-page `<title>` and `<meta description>`.
- OpenGraph + Twitter card on every page.
- `sitemap.xml` and `robots.txt` generated at build.
- JSON-LD `SoftwareApplication` schema on `/` with name, OS=Android, applicationCategory=BusinessApplication, offers free, downloadUrl pointing to `/download`.
- Canonical URLs use `https://callnest.pooniya.com`.

---

## 10. Project structure (target)

```
callNest-web/
├── PROMPT.md                  ← this file
├── README.md                  ← deployment + content-update guide (you write this)
├── DEPLOY.md                  ← Cloudflare Pages step-by-step (you write this)
├── package.json
├── next.config.ts             ← output: 'export'
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx           ← home
│   │   ├── download/page.tsx
│   │   ├── features/page.tsx
│   │   ├── changelog/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── permissions/page.tsx
│   │   ├── bug-report/page.tsx
│   │   ├── feedback/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/Header.tsx
│   │   ├── layout/Footer.tsx
│   │   ├── ui/Button.tsx
│   │   ├── ui/Card.tsx
│   │   ├── ui/PhoneMockup.tsx
│   │   ├── ui/Accordion.tsx
│   │   ├── ui/ThemeToggle.tsx
│   │   ├── sections/Hero.tsx
│   │   ├── sections/Problem.tsx
│   │   ├── sections/HowItWorks.tsx
│   │   ├── sections/FeaturesGrid.tsx
│   │   ├── sections/Screenshots.tsx
│   │   ├── sections/WhyCallNest.tsx
│   │   ├── sections/FAQPreview.tsx
│   │   └── sections/FinalCTA.tsx
│   ├── content/
│   │   ├── features.ts        ← 16 features, typed
│   │   ├── faqs.ts
│   │   ├── releases.ts        ← changelog data
│   │   ├── permissions.ts
│   │   └── site.ts            ← name, urls, contact emails, current version
│   ├── lib/
│   │   ├── analytics.ts       ← GA4 placeholder
│   │   └── seo.ts
│   └── styles/
└── public/
    ├── assets/
    │   ├── logo/
    │   ├── screenshots/
    │   └── icons/
    ├── apk/
    │   ├── README.md
    │   └── callnest-latest.apk.placeholder
    ├── favicon.ico
    ├── manifest.webmanifest
    ├── og.png
    ├── robots.txt              ← also generated, this is fallback
    └── sitemap.xml             ← also generated, this is fallback
```

---

## 11. Content data files — required schemas

All content sits in `src/content/` so the owner can update copy without touching components.

```ts
// site.ts
export const SITE = {
  name: "callNest",
  url: "https://callnest.pooniya.com",
  tagline: "Every call is a lead. Don't lose one.",
  description: "Auto-save, tag, score and follow-up every inquiry call your business gets.",
  currentVersion: "1.0.0",
  minAndroid: "8.0",
  apkPath: "/apk/callnest-latest.apk",
  emails: {
    support: "support@pooniya.com",
    bugs: "bugs@pooniya.com",
    feedback: "feedback@pooniya.com",
  },
  social: { whatsapp: "https://wa.me/91XXXXXXXXXX" },
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
} as const;
```

```ts
// features.ts — 16 entries
export type Feature = { id: string; group: "Capture"|"Organize"|"Act"|"Protect"; icon: string; title: string; short: string; long: string; };
```

```ts
// releases.ts
export type Release = { version: string; date: string; size: string; sha256: string; added: string[]; changed: string[]; fixed: string[]; downloadUrl: string; };
```

Seed `releases.ts` with one entry: `1.0.0`, today's date, size `"~12 MB"`, sha256 `"PENDING"`, added = the 16 feature titles.

---

## 12. Deployment (you must document this in `DEPLOY.md`)

1. `npm install`
2. `npm run build` → produces `out/` (because of `output: 'export'`)
3. Push repo to GitHub.
4. Cloudflare Pages → Connect to repo → Build command `npm run build` → Output dir `out`.
5. In Cloudflare DNS for `pooniya.com`, add CNAME `callnest` → the `*.pages.dev` target Cloudflare gives. Enable proxy.
6. In Cloudflare Pages → Custom domains → add `callnest.pooniya.com`.
7. Set env var `NEXT_PUBLIC_GA4_ID` once GA is configured.
8. Drop signed APK at `public/apk/callnest-latest.apk` and update `releases.ts` (version, sha256, size). Commit. Auto-deploys.

Also document the same flow for **Vercel** and **Netlify** as one-paragraph alternatives.

---

## 13. Acceptance criteria (the site is done when ALL are true)

- [ ] `npm run build` succeeds with zero errors and zero warnings.
- [ ] `npm run lint` and `tsc --noEmit` are clean.
- [ ] All 12 routes render. No broken links. No `<a>` to `#`.
- [ ] Logo renders on transparent background everywhere; no coloured square behind it.
- [ ] Lighthouse (mobile, throttled): Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Dark mode works on every page.
- [ ] All copy is final. No Lorem ipsum. No "Coming soon" except the WhatsApp placeholder number which is clearly marked.
- [ ] All 16 features appear on `/` and `/features` and match `src/content/features.ts`.
- [ ] `/download` shows version from `releases.ts` and links to `/apk/callnest-latest.apk`.
- [ ] `/bug-report` and `/feedback` open the user's email client with prefilled bodies. No fetch calls.
- [ ] GA4 snippet is present but inert when `NEXT_PUBLIC_GA4_ID` is empty.
- [ ] Favicon, manifest, OG image, sitemap, robots all present.
- [ ] `README.md` and `DEPLOY.md` are written and accurate.

---

## 14. Non-goals (do NOT do these)

- No backend, no API routes, no serverless functions.
- No user accounts, no login, no forms that POST anywhere.
- No comparison tables vs competitors.
- No testimonials section with fake quotes. (If owner adds real ones later, leave a commented-out placeholder section.)
- No newsletter signup.
- No cookie banner. (Site uses GA4 with IP anonymisation only; if EU users become a concern, owner adds a banner later.)
- No A/B testing, no chat widget, no popup modals on load.

---

## 15. Tone of voice

Direct. Confident. Useful. Sentences under 16 words wherever possible. No exclamation marks except in the hero CTA at most once. Speak to a busy shop owner, not a startup investor. Indian English spelling ("organised", "while" not "whilst").

---

**Build the entire site end-to-end from this document. When done, print a one-page summary of what you built, the routes, and any decisions you took that weren't pre-specified here.**
