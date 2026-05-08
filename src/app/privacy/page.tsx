import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Privacy — ${SITE.name}`,
  description: "Plain-language privacy policy for callNest.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <Section className="prose-section">
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Privacy
      </h1>
      <p className="mt-2 text-ink-600">
        Last updated: 8 May 2026. Plain English. No legalese.
      </p>

      <div className="mt-8 space-y-6 text-sm text-ink-900">
        <Block title="What stays on your device">
          Call-log entries, contacts you tag, notes, scores and reminders are
          stored in an encrypted local database on your phone. callNest works
          end-to-end without any cloud account.
        </Block>
        <Block title="Optional cloud backup">
          If you turn on backup, your data is encrypted on-device, then
          uploaded to our backup server. Only you, with your phone or email
          login, can restore it. You can wipe the backup at any time from
          Settings.
        </Block>
        <Block title="What we do NOT do">
          callNest does not record audio. callNest does not show ads. callNest
          does not share or sell your contacts. The Android app contains no
          third-party trackers.
        </Block>
        <Block title="Website analytics">
          This website (callnest.pooniya.com) uses Google Analytics 4 only when
          a measurement ID is configured. No personally identifying
          information is collected. No cross-site tracking.
        </Block>
        <Block title="Contact">
          Questions? Email{" "}
          <a className="text-brand-500" href={`mailto:${SITE.emails.support}`}>
            {SITE.emails.support}
          </a>
          .
        </Block>
      </div>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold">{title}</h2>
      <p className="mt-2 text-ink-600">{children}</p>
    </section>
  );
}
