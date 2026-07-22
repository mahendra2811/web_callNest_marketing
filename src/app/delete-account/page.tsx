import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Delete your account — ${SITE.name}`,
  description:
    "How to delete your callNest account and the data associated with it — in the app or by email.",
  path: "/delete-account/",
});

export default function DeleteAccountPage() {
  return (
    <Section className="prose-section">
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Delete your account
      </h1>
      <p className="mt-2 text-ink-600">
        This page describes how to delete your callNest account (app package{" "}
        <code>com.pooniya.callnest</code>, developer Mahendra Puniya) and what
        happens to your data when you do.
      </p>

      <div className="mt-8 space-y-6 text-sm text-ink-900">
        <section>
          <h2 className="font-display text-lg font-bold">
            Option 1 — delete in the app (fastest)
          </h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-ink-600">
            <li>Open callNest and go to <strong>More → Account</strong>.</li>
            <li>Tap <strong>Delete account</strong>.</li>
            <li>Confirm. You are signed out and your account is removed.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold">
            Option 2 — request deletion by email
          </h2>
          <p className="mt-2 text-ink-600">
            Can&apos;t access the app? Email{" "}
            <a className="text-brand-500" href={`mailto:${SITE.emails.support}`}>
              {SITE.emails.support}
            </a>{" "}
            from the address you signed up with, subject{" "}
            <em>&ldquo;Delete my callNest account&rdquo;</em>. We verify the
            request and complete deletion within <strong>30 days</strong>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold">What gets deleted</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-600">
            <li>Your account record (email address, authentication data).</li>
            <li>Push-notification tokens registered for your devices.</li>
            <li>
              Any opt-in crash/analytics identifiers linked to your account.
            </li>
          </ul>
          <p className="mt-2 text-ink-600">
            Server-side deletion is completed within 30 days of the request.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold">
            What stays on your phone
          </h2>
          <p className="mt-2 text-ink-600">
            callNest is local-first: your call history, contacts, notes, tags,
            and lead scores live only on your device and are{" "}
            <strong>not</strong> touched by account deletion. To remove them,
            use <strong>Settings → Reset all data</strong> in the app, or
            simply uninstall it. Backup files you exported remain in your
            phone&apos;s storage until you delete them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold">Questions</h2>
          <p className="mt-2 text-ink-600">
            Grievance Officer: <strong>Mahendra Puniya</strong> ·{" "}
            <a className="text-brand-500" href={`mailto:${SITE.emails.support}`}>
              {SITE.emails.support}
            </a>
            . We acknowledge requests within 7 days. See also our{" "}
            <a className="text-brand-500 underline" href="/privacy/">
              privacy policy
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
