import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Privacy Policy — ${SITE.name}`,
  description: "Learn how callNest handles your information, permissions, and privacy choices.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <Section className="prose-section">
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">callNest Privacy Policy</h1>
      <div className="mt-2 text-ink-600">
        <p><strong>Effective date:</strong> [Insert effective date]</p>
        <p><strong>Last updated:</strong> [Insert date]</p>
        <p><strong>Developer:</strong> Mahendra</p>
        <p><strong>Contact:</strong> <Email address="mahendrapuniya92@gmail.com" /> (privacy) · <Email address="app.callnest@gmail.com" /> (support)</p>
      </div>
      <p className="mt-6 text-ink-600">callNest helps you organize business inquiries and follow up on calls. This policy explains the information the Google Play version of callNest accesses, how it is used, the service providers involved, and the choices available to you.</p>

      <div className="mt-8 space-y-6 text-sm text-ink-900">
        <Block title="1. Your choice and permission">
          <p>We access information for the purposes explained in this policy and, where required, after requesting your permission or consent. Android may ask you separately to grant permissions. You can decline or later change permissions in your device settings, although the related features may not work without them.</p>
          <p>Optional usage analytics and diagnostic reporting are intended to be enabled only if you turn on the applicable setting. You can change your choice in Settings. Where consent is required by applicable law, you may withdraw it; withdrawing consent does not affect processing that occurred before withdrawal or processing otherwise permitted by law.</p>
          <p>We do not sell your personal data. We do not use your contacts, call information or notes for advertising. We may process information when required to provide a requested feature, protect accounts and the service, respond to a request, or comply with applicable law, subject to the choices and rights available under that law.</p>
        </Block>
        <Block title="2. Information you provide">
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Account information:</strong> Your email address, password and authentication information are used to create your account, sign you in, verify your email and help you recover access. Authentication is handled by our service provider; we do not need to know your password to provide support. Never share your password or verification code with anyone.</li>
            <li><strong>Profile information:</strong> You may choose to provide a name, business name or phone number in your account profile. A phone number is optional and is not described as verified unless the app explicitly verifies it.</li>
            <li><strong>Your records:</strong> Notes, tags, reminders, bookmarks, message templates and other information you enter are used to provide the corresponding app features.</li>
            <li><strong>Support requests:</strong> If you contact us, we use your message, contact details and any information you choose to provide to respond and resolve your request. Please avoid sending passwords, verification codes or sensitive customer information.</li>
          </ul>
        </Block>
        <Block title="3. Call and contact information on your device">
          <p>With the necessary Android permissions or roles, callNest processes information such as phone numbers, contact names, call direction, call time, duration and call outcome to show inquiries, match contacts, support follow-ups and display call insights. What information is available depends on your device, Android version, permissions and selected system roles.</p>
          <p>In the current Google Play version, callNest uses live call-related events rather than importing your full historical call log. Some calls or details may not be available. The app can read contacts to match callers, and can create or update contacts when you use a contact-saving feature or enable auto-save and grant the relevant permission.</p>
          <p>CallNest stores call-related records, contact metadata, notes, tags and follow-ups on your device for use by the app. These records are not currently restored from a cloud account when you sign in on another device. You may export data through the features available in the app; an exported file is subject to the security and sharing settings of its destination.</p>
          <p>You are responsible for having an appropriate basis to process the personal information of people whose details you add or manage in callNest.</p>
        </Block>
        <Block title="4. How we use and share information">
          <p>We use the information described above to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Create and secure accounts, verify email addresses and respond to password-recovery requests.</li>
            <li>Provide the app&apos;s call, contact, follow-up, reminder, search, export and account features.</li>
            <li>Maintain security, investigate abuse, troubleshoot problems and respond to support requests.</li>
            <li>Understand and improve the app if you enable optional analytics and diagnostic reporting.</li>
            <li>Meet legal obligations and respond to lawful requests when applicable.</li>
          </ul>
          <p>We use service providers to operate specific features:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Supabase:</strong> account authentication and related server-side account services.</li>
            <li><strong>Email delivery provider:</strong> the configured email service, including Gmail where used, to send verification and recovery messages to your email address.</li>
            <li><strong>Firebase Cloud Messaging:</strong> device messaging services, including a device token associated with your account where configured, to support app notifications.</li>
            <li><strong>PostHog:</strong> optional usage analytics when enabled. This can include app interactions, screen views, a pseudonymous account identifier and technical information.</li>
            <li><strong>Sentry:</strong> optional diagnostic and crash reporting when enabled. Reports may include technical device, app and error information.</li>
          </ul>
          <p>These providers process information to provide their services under their own terms and privacy practices. They may process information outside your country; applicable legal safeguards and requirements will apply. We may also disclose information to authorities when required by law or when otherwise lawfully necessary.</p>
        </Block>
        <Block title="5. Device permissions and optional features">
          <p>Depending on your device and the features you select, callNest may request access to contacts, phone state, notifications, display over other apps, or Android roles related to call screening or phone handling. Follow-up reminders and background call-related features may also need notification, alarm, foreground-service or battery settings. The app should explain the relevant purpose when asking for access.</p>
          <p>You can manage these permissions in Android settings. If you disable a permission or role, the related feature may be limited or stop working. Notifications, overlays and automated contact saving should be used only after you choose the relevant settings and grant any necessary access.</p>
        </Block>
        <Block title="6. Storage, retention and deletion">
          <p>Your app records are primarily stored on the device. They may be removed when you clear app data, uninstall the app, delete an account, or switch accounts on the same device. Signing in again with the same email does not currently guarantee recovery of locally stored records. Export important information before changing accounts or devices when an appropriate export feature is available.</p>
          <p>Account and related server information is retained while needed to operate the account, provide support, meet security and legal obligations, or resolve disputes. You can request account deletion through the app&apos;s account settings or externally by emailing <Email address="mahendrapuniya92@gmail.com" /> or visiting <strong>[Insert publicly accessible account-deletion request URL]</strong>. The external option must allow a request without reinstalling the app.</p>
          <p>The app is designed to offer an account reactivation period before permanent deletion. <strong>[Insert the actual confirmed period and deletion schedule after testing the deployed backend.]</strong> We will explain any applicable retention, the deletion process and its expected timing when you make a request. Some records may need to be retained for a lawful purpose, such as compliance, security or resolving disputes, for no longer than necessary for that purpose. Files you exported or shared to another app or location must be managed at that destination.</p>
          <p>To request access, correction or deletion of information we hold, or to raise a privacy concern, contact <Email address="mahendrapuniya92@gmail.com" />. We may need reasonable information to verify your identity before acting on a request. Available rights depend on applicable law.</p>
        </Block>
        <Block title="7. Security">
          <p>We use measures intended to protect information, including access controls for account services and secure connections where supported. No method of storage or transmission can guarantee complete security. Keep your device and account credentials secure, use a strong password and review the permissions you grant. Please contact us if you believe your account has been compromised.</p>
        </Block>
        <Block title="8. Children">
          <p>callNest is intended for business use and is not directed at children. If you believe a child has provided personal information to us in a way that is not permitted by applicable law, please contact us so we can review the request.</p>
        </Block>
        <Block title="9. Future features">
          <p>Some app screens may describe planned features as <strong>Coming soon</strong>. Such labels are informational and do not mean a feature is available or that its data processing is active. If we introduce features such as AI analysis or multi-device synchronization, we will explain their data handling, update this policy, and request any permissions or consent required before use.</p>
        </Block>
        <Block title="10. Changes to this policy">
          <p>We may update this policy as the app, service providers or legal requirements change. The revised policy will be published at this page with an updated date. We will provide additional notice or request consent when required by applicable law.</p>
        </Block>
        <Block title="11. Governing law and dispute resolution">
          <p>This policy is governed by the laws of India, subject to any mandatory law that applies to you. Subject to applicable law, the parties agree that courts of competent jurisdiction in Jodhpur, Rajasthan, India, shall have exclusive jurisdiction over disputes arising out of this policy. Nothing in this clause limits rights or remedies that cannot lawfully be excluded, including any right to approach a consumer forum, regulator or other competent authority.</p>
        </Block>
        <Block title="12. Contact and privacy concerns">
          <p><strong>Developer:</strong> Mahendra<br /><strong>Privacy email:</strong> <Email address="mahendrapuniya92@gmail.com" /><br /><strong>Support email:</strong> <Email address="app.callnest@gmail.com" /><br /><strong>Account deletion:</strong> <Email address="mahendrapuniya92@gmail.com" /> · [Insert public request URL]<br /><strong>Business contact address:</strong> [Insert appropriate business address]</p>
          <p>For privacy questions or grievances, please write to the contact above. We will review and respond in accordance with applicable law.</p>
        </Block>
      </div>
    </Section>
  );
}

function Email({ address }: { address: string }) {
  return <a className="text-brand-500 underline" href={`mailto:${address}`}>{address}</a>;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold">{title}</h2>
      <div className="mt-2 space-y-3 text-ink-600">{children}</div>
    </section>
  );
}
