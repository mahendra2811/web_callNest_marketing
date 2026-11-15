export type FAQ = { q: string; a: string };

export const FAQS_HOME: FAQ[] = [
  {
    q: "Is callNest free?",
    a: "Yes. No subscription, no ads, no in-app purchases.",
  },
  {
    q: "Where can I get callNest?",
    a: "Find callNest on Google Play using the link on this website.",
  },
  {
    q: "How do I install callNest?",
    a: "Open the Google Play listing, install the app, and follow the setup instructions.",
  },
  {
    q: "Where is my data stored?",
    a: "On your device, in an encrypted local database. Cloud backup is optional and off by default.",
  },
  {
    q: "Do you record my calls?",
    a: "No. callNest does not record call audio.",
  },
  {
    q: "Will it slow down my phone?",
    a: "No. callNest runs lightweight background work and is tuned for Xiaomi/Realme/Oppo battery managers.",
  },
];

export const FAQS_EXTRA: FAQ[] = [
  {
    q: "Which permissions does callNest ask for?",
    a: "Permissions depend on your Android version and how the app is configured. The app explains its requests during setup.",
  },
  {
    q: "My OEM kills background apps. Will callNest still work?",
    a: "Yes, with one extra step. Whitelist callNest in your phone's battery saver and disable any auto-launch restrictions. We document this for Xiaomi, Realme and Oppo.",
  },
  {
    q: "How do I export my leads?",
    a: "Open the inbox, apply any filter, tap Export and pick CSV, Excel or PDF. Share straight to WhatsApp, email or Drive.",
  },
  {
    q: "How do I delete all my data?",
    a: "Settings, Data, Delete everything. This wipes the local database and any cloud backup tied to your account.",
  },
  {
    q: "I am switching phones. How do I move my data?",
    a: "Turn on cloud backup on the old phone. Install callNest on the new phone, sign in, restore. Or export to CSV and import on the new device.",
  },
  {
    q: "How do I contact support?",
    a: "Email mahendrapuniya92@gmail.com or use the WhatsApp link on the Contact page. Bug reports have a dedicated form that pre-fills your device details.",
  },
];

export const FAQS_ALL: FAQ[] = [...FAQS_HOME, ...FAQS_EXTRA];
