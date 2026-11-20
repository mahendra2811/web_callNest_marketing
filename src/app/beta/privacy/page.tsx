import { Section } from "@/components/ui/Section";
import { BETA } from "@/content/beta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CallNest Beta Privacy Notice",
  description: "Privacy information for the account-free CallNest Beta Android app.",
  path: BETA.privacyPath,
});

export default function BetaPrivacyPage() {
  return <Section className="prose-section">
    <h1 className="headline font-display text-3xl font-bold sm:text-4xl">CallNest Beta Privacy Notice</h1>
    <p className="mt-3 text-sm text-ink-600">For Android package <code>{BETA.applicationId}</code>. This notice describes the current Beta app; available behavior can change between builds.</p>
    <div className="mt-8 space-y-6 text-sm leading-7 text-ink-900">
      <section><h2 className="font-semibold">Information on your device</h2><p>CallNest Beta can read Android call-log entries and contacts when you grant the corresponding permissions. It uses this information to show call history, organize inquiries, create contact entries at your request or according to your settings, and provide related app features. The app does not record call audio. Call history available to import is limited to what Android still exposes on your device.</p></section>
      <section><h2 className="font-semibold">Local data and backup</h2><p>Calls, notes, tags, settings and related app records are stored in the Beta app’s private local storage. This Beta does not require an account and does not provide Google Drive backup. Use the local backup and export features available in the app. Uninstalling the Beta can remove its private data. The Beta package has separate storage from the Google Play app.</p></section>
      <section><h2 className="font-semibold">Permissions and optional access</h2><p>Call-log, contacts, notification-listener, overlay, notification and other Android permissions are used only for the related features. You can change permissions in Android settings; features that need a revoked permission may stop working. Biometric unlock is handled by Android on your device.</p></section>
      <section><h2 className="font-semibold">Network services</h2><p>The app may use network access for features you choose, such as downloading updates or using configured AI and diagnostic services. Firebase Messaging is included for notifications. Firebase Analytics collection is disabled in this Beta build. Diagnostic reporting behavior follows the current in-app consent setting and may change; review the app’s privacy/help screens for the behavior of your installed version. Do not send us call details unless you choose to include them in a support request.</p></section>
      <section><h2 className="font-semibold">Retention and your choices</h2><p>You can review, export or delete local records using the app’s available controls. Android permissions can be withdrawn at any time. Beta builds may contain errors; back up important information before installing or updating.</p></section>
      <section><h2 className="font-semibold">Contact</h2><p>For privacy questions, email <a className="text-brand-500 underline" href="mailto:mahendrapuniya92@gmail.com">mahendrapuniya92@gmail.com</a>. For app support, contact <a className="text-brand-500 underline" href="mailto:app.callnest@gmail.com">app.callnest@gmail.com</a>.</p></section>
    </div>
  </Section>;
}
