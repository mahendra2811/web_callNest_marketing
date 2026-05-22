export type Release = {
  version: string;
  date: string;
  size: string;
  sha256: string;
  added: string[];
  changed: string[];
  fixed: string[];
  downloadUrl: string;
};

export const RELEASES: Release[] = [
  {
    version: "1.0.6",
    date: "2026-05-22",
    size: "21.2 MB",
    sha256: "5922f005c948f92f0ea8090f1e785917fa80db4e51f1b75986c0c63075ecdaf8",
    added: [],
    changed: [],
    fixed: [],
    downloadUrl: "/apk/callnest-latest.apk",
  },
  {
    version: "1.0.5",
    date: "2026-05-22",
    size: "21.3 MB",
    sha256: "884f961038c03107e14d515a109d40d09b0f5ed5aec1642a67e3b9d9bec14c81",
    added: [
      "Carrier caller-ID name capture — a new CallScreeningService records the carrier-supplied name during the ring; unsaved Calls rows now show it with a subtle 'Caller ID' chip",
      "Saved inquiries use the caller-ID name as the contact's first name — OS Contacts shows 'Rahul callNest-s1 +91… callNest' instead of just 'callNest-s1 +91… callNest'",
      "New Settings → Privacy toggle: 'Capture carrier caller-ID names' (OFF by default). Turning it on requests the system Call-Screening role.",
    ],
    changed: [],
    fixed: [],
    downloadUrl: "/apk/callnest-latest.apk",
  },
  {
    version: "1.0.4",
    date: "2026-05-21",
    size: "21.3 MB",
    sha256: "8e1bda188aa87bbb084615cbe6e3f705d4efd5ef310a4cde114540a4b6f06699",
    added: [],
    changed: [
      "Internal rebuild — stability improvements and documentation updates",
    ],
    fixed: [],
    downloadUrl: "/apk/callnest-latest.apk",
  },
  {
    version: "1.0.2",
    date: "2026-05-17",
    size: "21.3 MB",
    sha256: "591674d166ef2c498c499dd4b503dd8846cb8b0dc221ee775bdb70070b75c35f",
    added: [
      "Auto-save SIM filter — 3-way segmented selector: Both / SIM 1 / SIM 2 (default Both)",
      "Call detail: WhatsApp + WhatsApp Business as two distinct icons with W / WB labels",
      "WhatsApp Business custom icon with the signature '+' mark, matching the official logo",
      "Stats: Peak hour callout card (your busiest 1-hour window)",
      "Stats: Saved vs Unsaved horizontal stacked bar with percentages",
      "Stats: Quick-stats 2×2 grid (total talk time, avg duration, missed rate, unsaved rate)",
    ],
    changed: [
      "Pull-to-refresh polish — separate isRefreshing flag on Stats and Insights so content doesn't jump on cold start or range changes",
      "Filter chip text now properly vertically centered (was riding high)",
      "WhatsApp deep links force-route through the correct package (com.whatsapp / com.whatsapp.w4b) — users with both apps land in the intended inbox",
    ],
    fixed: [
      "Filter chip vertical alignment — chip box now fills the surface and text aligns to centre",
    ],
    downloadUrl: "/apk/callnest-latest.apk",
  },
  {
    version: "1.0.1",
    date: "2026-05-14",
    size: "21.3 MB",
    sha256: "6c342198e31453617fd401e7e33ea115d67e466010b5995820517b90f9357f94",
    added: [
      "Insights tab — today snapshot, 7-day trend, lead-quality bar, day-of-week chart, top callers",
      "Spotlight-style search — live results across Contacts, Calls, Notes",
      "Pull-to-refresh on Calls, Inquiries, Insights, Stats and My Contacts",
      "Quick-filter chip strip above the call list (All / Saved / Unsaved / Missed / Today / Follow-ups / Hot leads)",
      "Horizontal inline filter panel — replaces the modal bottom sheet",
      "Saved/Unsaved badge on every call row",
      "Per-SIM auto-save include toggle",
      "WhatsApp + WhatsApp Business buttons on the post-call popup",
      "Run-debug.sh helper script (auto-detects package id)",
    ],
    changed: [
      "Auto-saved name no longer reads \"callNest +91X callNest\" — prefix defaults to empty",
      "Auto-save is manual for v1.x — toggle marked Coming soon, Save-now lives in Inquiries",
      "Daily summary notification now shows real counts (calls · missed · unsaved · follow-ups due)",
      "Bottom nav simplified to Calls · Insights · Inquiries · More",
      "Pipeline + Lead-scoring UI removed (kept fixed-weight scoring under the hood)",
      "In-app update flow removed — Check-for-updates opens this site",
    ],
    fixed: [
      "Excel export was producing 0 KB files / crashing with NoClassDefFoundError on org.apache.poi.ss.util.SheetUtil — reverted to in-memory XSSFWorkbook + MediaStore IS_PENDING dance",
      "Inquiries tab no longer shows empty — sources unsaved numbers directly",
      "Auto-save now triggers a sync immediately after a call ends, not on the 15-minute periodic worker",
      "WRITE_CONTACTS now requested at onboarding and at toggle-on time",
      "Onboarding only shows on first launch — DataStore race fixed",
      "Stats Export PDF actually exports (no more \"Sprint 9\" stub)",
      "Filter panel reliably opens — replaced flaky modal bottom sheet",
    ],
    downloadUrl: "/apk/callnest-latest.apk",
  },
  {
    version: "1.0.0",
    date: "2026-05-08",
    size: "21.3 MB",
    sha256: "a7094ad853473cd2073599b92b34be207af57d81aa207125a0dfab1e2dcd4c1d",
    added: [
      "Auto-capture every call",
      "Auto-save unknown numbers",
      "Smart lead score (0-100)",
      "Tag, note, bookmark",
      "In-call floating bubble",
      "Post-call popup",
      "Follow-up reminders",
      "Excel / CSV / PDF export",
      "Powerful search and filters",
      "Bulk actions",
      "App lock (PIN / biometric)",
      "Local-first storage",
      "Optional cloud backup",
      "Self-update",
      "Bilingual",
      "Battery-friendly",
    ],
    changed: [],
    fixed: [],
    downloadUrl: "/apk/callnest-latest.apk",
  },
];
