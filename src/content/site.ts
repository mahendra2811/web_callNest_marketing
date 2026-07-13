export const SITE = {
  name: "callNest",
  url: "https://callnest.pooniya.com",
  tagline: "Every call is a lead. Don't lose one.",
  description:
    "Auto-save, tag, score and follow-up every inquiry call your business gets.",
  currentVersion: "1.0.0",
  minAndroid: "8.0",
  apkPath: "/apk/callnest-latest.apk",
  emails: {
    support: "mahendrapuniya92@gmail.com",
    bugs: "mahendrapuniya92@gmail.com",
    feedback: "mahendrapuniya92@gmail.com",
  },
  social: {
    whatsapp: "https://wa.me/91234567890",
  },
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
} as const;
