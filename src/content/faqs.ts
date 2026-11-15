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
    q: "Does callNest show calls from before installation?",
    a: "No. The Google Play version starts capturing supported calls after setup. Incoming calls require the call-screening role; outgoing calls need to be started from callNest.",
  },
  {
    q: "Where is my data stored?",
    a: "Call details and notes are stored on your device. Check the app for the backup options available to you.",
  },
  {
    q: "Do you record my calls?",
    a: "No. callNest does not record call audio.",
  },
  {
    q: "Will it slow down my phone?",
    a: "callNest uses background work to support its features. Performance and battery use depend on your phone and settings.",
  },
];

export const FAQS_EXTRA: FAQ[] = [
  {
    q: "Which permissions does callNest ask for?",
    a: "Permissions depend on your Android version and how the app is configured. The app explains its requests during setup.",
  },
  {
    q: "My OEM kills background apps. Will callNest still work?",
    a: "Battery settings can affect background capture. Check your phone’s battery and auto-launch settings if callNest is not working as expected.",
  },
  {
    q: "How do I export my leads?",
    a: "Open the inbox, apply any filter, tap Export and pick CSV, Excel or PDF. Share straight to WhatsApp, email or Drive.",
  },
  {
    q: "How do I delete all my data?",
    a: "To remove local app data, use Settings → Reset all data or uninstall the app. See the account deletion page for account and backup details.",
  },
  {
    q: "I am switching phones. How do I move my data?",
    a: "Check Backup & Restore in the app for available options. Keep any exported backup safe and follow the restore instructions on your new phone.",
  },
  {
    q: "How do I contact support?",
    a: "Email mahendrapuniya92@gmail.com or use the bug report form on this website.",
  },
];

export const FAQS_ALL: FAQ[] = [...FAQS_HOME, ...FAQS_EXTRA];
