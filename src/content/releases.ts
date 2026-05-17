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
