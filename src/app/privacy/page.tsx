import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Privacy — ${SITE.name}`,
  description:
    "Plain-language privacy policy for callNest. DPDP-aligned, written for Indian small businesses.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <Section className="prose-section">
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Privacy
      </h1>
      <p className="mt-2 text-ink-600">
        Last updated: 8 May 2026 · Effective: 8 May 2026. Aligned with India&apos;s
        Digital Personal Data Protection Act, 2023.
      </p>

      <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/5 p-4 text-sm text-ink-900">
        <strong>Short version.</strong> Most of your data — call log,
        contacts, notes, tags — never leaves your phone. The only things that
        go off-device are: your email (sign-in), an opt-in anonymised crash
        and analytics signal, and a push token for reminders. You can turn
        analytics off, sign out, and delete your account any time.
      </div>

      <div className="mt-8 space-y-6 text-sm text-ink-900">
        <Block title="1. Data we process on your device">
          <ul className="list-disc space-y-1 pl-5 text-ink-600">
            <li>
              <strong>Call log</strong> — read locally to list, tag, and score
              inquiry calls. Never uploaded.
            </li>
            <li>
              <strong>Contacts</strong> — read to match callers; written only
              when you enable auto-save into a callNest contact group.
            </li>
            <li>
              <strong>Notes, tags, follow-ups, lead scores</strong> — stored in
              an encrypted on-device database.
            </li>
            <li>
              <strong>Backups</strong> — if enabled, an encrypted snapshot is
              uploaded to your own Google Drive&apos;s app folder. We have no
              access to it.
            </li>
          </ul>
        </Block>

        <Block title="2. Data that leaves your device">
          <ul className="list-disc space-y-1 pl-5 text-ink-600">
            <li>
              <strong>Email + auth token</strong> — stored at our auth provider,
              Supabase, to identify your account on sign-in.
            </li>
            <li>
              <strong>FCM push token</strong> — a device token from Firebase
              Cloud Messaging, kept against your account so reminders can be
              delivered.
            </li>
            <li>
              <strong>Crash reports & analytics (opt-in, off by default)</strong>
              {" "}— if you enable &ldquo;Help improve callNest&rdquo;,
              anonymised crash traces (Sentry) and screen-level usage events
              (PostHog) are sent. Phone numbers, contacts, notes, and call
              content are never sent.
            </li>
            <li>
              <strong>AI features (BYOK)</strong> — when you use AI features
              (e.g. weekly digest), the relevant text is sent directly from
              your phone to Anthropic with your own API key. We never see it.
            </li>
          </ul>
        </Block>

        <Block title="3. What we do not do">
          <ul className="list-disc space-y-1 pl-5 text-ink-600">
            <li>We do not record or transcribe calls.</li>
            <li>We do not sell or rent your data.</li>
            <li>We do not upload your call log, contacts or notes.</li>
            <li>
              We do not run ads or third-party trackers beyond the opt-in
              analytics named above.
            </li>
          </ul>
        </Block>

        <Block title="4. Permissions, explained">
          <p className="text-ink-600">
            See the{" "}
            <a className="text-brand-500 underline" href="/permissions/">
              full permissions table
            </a>{" "}
            for why each Android permission is requested and what we don&apos;t
            do with it.
          </p>
        </Block>

        <Block title="5. Retention">
          On-device data lives until you delete the app or clear its data.
          Server-side data (email, push token) is retained while your account
          is active. Account deletion clears server-side data within 30 days.
        </Block>

        <Block title="6. Your rights (DPDP)">
          <ul className="list-disc space-y-1 pl-5 text-ink-600">
            <li>
              <strong>Access</strong> — export your data anytime via Settings →
              Backup or Excel/CSV/PDF export.
            </li>
            <li>
              <strong>Correction & deletion</strong> — edit or delete any record
              on-device. Account deletion via the email below.
            </li>
            <li>
              <strong>Withdraw consent</strong> — turn off &ldquo;Help improve
              callNest&rdquo; in Settings.
            </li>
            <li>
              <strong>Grievance officer</strong> — see contact below; we
              acknowledge within 7 days.
            </li>
          </ul>
        </Block>

        <Block title="7. Security">
          On-device data is in an encrypted Room database. Sensitive secrets
          (e.g. your Anthropic API key) use{" "}
          <code>EncryptedSharedPreferences</code> (Android Keystore-backed
          AES-256-GCM). Network traffic uses TLS 1.2+.
        </Block>

        <Block title="8. Website analytics">
          callnest.pooniya.com uses Google Analytics 4 only when a
          measurement ID is configured. IP addresses are anonymised; no
          cross-site tracking.
        </Block>

        <Block title="9. Children">
          callNest is not directed at children under 18 and we do not
          knowingly collect data from them.
        </Block>

        <Block title="10. Contact & grievance officer">
          <p className="text-ink-600">
            Grievance Officer: <strong>Mahendra Puniya</strong>
            <br />
            Email:{" "}
            <a className="text-brand-500" href={`mailto:${SITE.emails.support}`}>
              {SITE.emails.support}
            </a>
            <br />
            Address: Primathon, India.
          </p>
        </Block>
      </div>
    </Section>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold">{title}</h2>
      <div className="mt-2 text-ink-600">{children}</div>
    </section>
  );
}
