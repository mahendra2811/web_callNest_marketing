export type Permission = {
  key: string;
  why: string;
  dont: string;
};

export const PERMISSIONS: Permission[] = [
  {
    key: "READ_CALL_LOG",
    why: "Read incoming, outgoing and missed calls so we can build your lead pipeline.",
    dont: "We never read SMS, app usage or anything outside the call log.",
  },
  {
    key: "READ_CONTACTS",
    why: "Match callers to existing contacts so the inbox shows real names.",
    dont: "We never upload your full address book to any server.",
  },
  {
    key: "WRITE_CONTACTS",
    why: "Auto-save new inquiry numbers into the dedicated callNest Inquiries group.",
    dont: "We never modify or delete your existing contacts.",
  },
  {
    key: "POST_NOTIFICATIONS",
    why: "Show follow-up reminders and post-call action prompts at the right time.",
    dont: "We do not send marketing or push ads. Notifications are local-only.",
  },
  {
    key: "SYSTEM_ALERT_WINDOW",
    why: "Draw the in-call floating bubble and the post-call popup over other apps.",
    dont: "We do not show overlays at random or capture screen content.",
  },
  {
    key: "FOREGROUND_SERVICE",
    why: "Keep the call watcher alive so calls are captured even when the app is closed.",
    dont: "The service does only call-log work. It does not track location.",
  },
  {
    key: "Battery exemption",
    why: "Stop aggressive OEM battery managers from killing the call watcher.",
    dont: "We do not drain your battery. The service wakes only on call events.",
  },
];
