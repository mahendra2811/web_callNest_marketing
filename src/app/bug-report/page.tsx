import { Section } from "@/components/ui/Section";
import { MailForm } from "@/components/ui/MailForm";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Report a bug — ${SITE.name}`,
  description: "Send a structured bug report straight to the callNest team.",
  path: "/bug-report/",
});

export default function BugReportPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Report a bug
      </h1>
      <p className="mt-2 max-w-2xl text-ink-600">
        The more detail, the faster we can fix it. Submitting opens your email
        app with everything pre-filled.
      </p>
      <MailForm
        to={SITE.emails.bugs}
        subject={`Bug report: ${SITE.name}`}
        fields={[
          { name: "name", label: "Your name", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "device", label: "Device (e.g. Redmi Note 12)", required: true },
          { name: "android", label: "Android version", required: true },
          { name: "appver", label: `App version (e.g. ${SITE.currentVersion})`, required: true },
          { name: "steps", label: "Steps to reproduce", type: "textarea", required: true },
          { name: "expected", label: "Expected vs actual", type: "textarea", required: true },
        ]}
      />
    </Section>
  );
}
