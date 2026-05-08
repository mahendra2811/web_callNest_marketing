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
