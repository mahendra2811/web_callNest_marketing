import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd());
const pub = path.join(root, "public");
const mark = path.join(pub, "assets/logo/callnest-mark.png");

async function favicons() {
  const sizes = [16, 32, 180, 192, 512];
  for (const s of sizes) {
    await sharp(mark)
      .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(pub, `favicon-${s}.png`));
  }
  // favicon.ico = 32 png copy (browsers accept png-in-ico via .ico ext rarely; use 32 png renamed)
  await sharp(mark).resize(32, 32).png().toFile(path.join(pub, "favicon.ico"));
  console.log("favicons done");
}

async function og() {
  const w = 1200,
    h = 630;
  const bg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2563EB"/>
        <stop offset="100%" stop-color="#1D4ED8"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <text x="80" y="360" font-family="Inter,system-ui,sans-serif" font-size="80" font-weight="800" fill="#fff">callNest</text>
    <text x="80" y="440" font-family="Inter,system-ui,sans-serif" font-size="36" font-weight="500" fill="#E0E7FF">Every call is a lead. Don&#39;t lose one.</text>
    <text x="80" y="560" font-family="Inter,system-ui,sans-serif" font-size="22" fill="#C7D2FE">callnest.pooniya.com</text>
  </svg>`;
  const logo = await sharp(mark).resize(220, 220).png().toBuffer();
  await sharp(Buffer.from(bg))
    .composite([{ input: logo, top: 60, left: w - 320 }])
    .png()
    .toFile(path.join(pub, "og.png"));
  console.log("og done");
}

async function screenshots() {
  const labels = [
    ["Inbox", "Every call captured", "#2563EB", "#14B8A6"],
    ["Lead Score", "Hot leads first", "#1D4ED8", "#22D3EE"],
    ["Tags and Notes", "One-tap labels", "#0EA5E9", "#14B8A6"],
    ["Reminders", "Never miss follow-up", "#7C3AED", "#2563EB"],
    ["Export", "CSV / Excel / PDF", "#0F766E", "#14B8A6"],
  ];
  const w = 720,
    h = 1480;
  for (let i = 0; i < labels.length; i++) {
    const [title, sub, c1, c2] = labels[i];
    const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="${c1}"/>
      <rect x="40" y="120" width="${w - 80}" height="${h - 240}" rx="48" fill="#0B1220" opacity="0.92"/>
      <rect x="80" y="200" width="${w - 160}" height="80" rx="20" fill="url(#g)"/>
      <text x="100" y="252" font-family="Inter,system-ui,sans-serif" font-size="34" font-weight="700" fill="#fff">${title}</text>
      <text x="80" y="340" font-family="Inter,system-ui,sans-serif" font-size="22" fill="#94A3B8">${sub}</text>
      ${Array.from({ length: 6 })
        .map(
          (_, k) =>
            `<rect x="80" y="${400 + k * 130}" width="${w - 160}" height="100" rx="20" fill="#1E293B"/>
             <circle cx="140" cy="${450 + k * 130}" r="28" fill="${c2}"/>
             <rect x="190" y="${430 + k * 130}" width="320" height="18" rx="6" fill="#475569"/>
             <rect x="190" y="${460 + k * 130}" width="220" height="14" rx="6" fill="#334155"/>`
        )
        .join("")}
      <text x="${w / 2}" y="${h - 80}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="22" fill="#fff" opacity="0.7">callNest</text>
    </svg>`;
    await sharp(Buffer.from(svg))
      .png()
      .toFile(path.join(pub, `assets/screenshots/screenshot-0${i + 1}.png`));
  }
  console.log("screenshots done");
}

async function manifest() {
  const m = {
    name: "callNest",
    short_name: "callNest",
    description: "Every call is a lead. Don't lose one.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#2563EB",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  await fs.writeFile(path.join(pub, "manifest.webmanifest"), JSON.stringify(m, null, 2));
  console.log("manifest done");
}

await favicons();
await og();
await screenshots();
await manifest();
