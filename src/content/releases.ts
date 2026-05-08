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
    version: "1.0.0",
    date: "2026-05-08",
    size: "21 MB",
    sha256: "7bf3eb60b72b91fd8699d901ce96b045dace7efd05fec5e649830f3317032cf3",
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
