export type FeatureGroup = "Capture" | "Organize" | "Act" | "Protect";

export type Feature = {
  id: string;
  group: FeatureGroup;
  icon: string; // lucide-react icon name
  title: string;
  short: string;
  long: string;
};

export const FEATURES: Feature[] = [
  {
    id: "auto-capture",
    group: "Capture",
    icon: "PhoneIncoming",
    title: "Keep track of inquiries",
    short:
      "Capture supported calls and organize your business inquiries.",
    long: "The Play version captures supported calls after setup; it does not import earlier call history. Incoming calls require the call-screening role, and outgoing calls must be started in callNest.",
  },
  {
    id: "auto-save",
    group: "Capture",
    icon: "UserPlus",
    title: "Auto-save unknown numbers",
    short:
      "New inquiry numbers become contacts in a dedicated callNest Inquiries group.",
    long: "Unknown callers are auto-saved into a separate contact group so your phonebook stays clean. Names can be filled in later from the inbox, in one tap.",
  },
  {
    id: "lead-score",
    group: "Organize",
    icon: "Gauge",
    title: "Smart lead score (0-100)",
    short: "Ranks each caller by recency, frequency, and your tags.",
    long: "A simple, transparent score so you call the hottest leads first. Repeat callers, recent activity and your own Hot tag all push the score up.",
  },
  {
    id: "tags-notes",
    group: "Organize",
    icon: "Tag",
    title: "Tag, note, bookmark",
    short: "One-tap labels like Hot, Quoted, Follow-up tomorrow.",
    long: "Add a tag, type a quick note, or bookmark a call to revisit later. Custom tag colours make the inbox readable at a glance.",
  },
  {
    id: "floating-bubble",
    group: "Act",
    icon: "MessageCircle",
    title: "In-call floating bubble",
    short: "See caller history and notes while the call is still ringing.",
    long: "A small overlay shows the caller's last visit, score and notes the moment the phone rings. You stop apologising for forgetting context.",
  },
  {
    id: "post-call",
    group: "Act",
    icon: "BellRing",
    title: "Post-call popup",
    short: "Tag the call the moment it ends, before context fades.",
    long: "Right after a call, callNest pops up a quick action sheet. Tag, note or schedule a follow-up in seconds, without opening the app.",
  },
  {
    id: "reminders",
    group: "Act",
    icon: "AlarmClock",
    title: "Follow-up reminders",
    short: "Schedule a callback, get a notification at the right time.",
    long: "Pick a date and time. callNest fires a reliable local notification so promised callbacks actually happen.",
  },
  {
    id: "export",
    group: "Organize",
    icon: "FileSpreadsheet",
    title: "Excel / CSV / PDF export",
    short: "Hand a clean lead sheet to your team in seconds.",
    long: "Export filtered leads to Excel, CSV or PDF. Share over WhatsApp or email straight from the export sheet.",
  },
  {
    id: "search",
    group: "Organize",
    icon: "Search",
    title: "Powerful search and filters",
    short: "By tag, date range, score, contact, keyword in notes.",
    long: "Combine filters to find that one call from last Tuesday. Saved filters keep your daily workflow one tap away.",
  },
  {
    id: "bulk",
    group: "Act",
    icon: "ListChecks",
    title: "Bulk actions",
    short: "Manage selected calls together.",
    long: "Select multiple calls to manage your call list.",
  },
  {
    id: "app-lock",
    group: "Protect",
    icon: "Lock",
    title: "App lock (PIN / biometric)",
    short: "Customer data stays private even if the phone doesn't.",
    long: "Lock the app behind a PIN, fingerprint or face unlock. Auto-lock kicks in after a chosen idle time.",
  },
  {
    id: "local-first",
    group: "Protect",
    icon: "Database",
    title: "Local-first storage",
    short: "Keep call details and notes on your device.",
    long: "Your call details and notes are stored on your phone.",
  },
  {
    id: "cloud-backup",
    group: "Protect",
    icon: "CloudUpload",
    title: "Optional cloud backup",
    short: "Backup options depend on your app configuration.",
    long: "Check the backup settings in the app for the options available to you.",
  },
  {
    id: "self-update",
    group: "Capture",
    icon: "RefreshCcw",
    title: "Self-update",
    short: "Keep callNest up to date through Google Play.",
    long: "Check Google Play for available updates to callNest.",
  },
  {
    id: "bilingual",
    group: "Capture",
    icon: "Languages",
    title: "Bilingual",
    short: "Full Hindi and English UI.",
    long: "Switch the entire interface between Hindi and English from settings. All labels, alerts and exports respect the choice.",
  },
  {
    id: "battery",
    group: "Protect",
    icon: "BatteryCharging",
    title: "Battery-friendly",
    short:
      "Designed to survive Xiaomi / Realme / Oppo battery managers.",
    long: "Background behavior depends on your phone and battery settings.",
  },
];
