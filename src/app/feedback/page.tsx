import { Section } from "@/components/ui/Section";
import { MailForm } from "@/components/ui/MailForm";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Feedback — ${SITE.name}`,
  description: "Send product feedback, ideas and feature requests.",
  path: "/feedback/",
});

export default function FeedbackPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Send feedback
      </h1>
      <p className="mt-2 max-w-2xl text-ink-600">
        Tell us what works, what does not, and what you wish callNest could do.
      </p>
      <MailForm
        to={SITE.emails.feedback}
        subject={`Feedback: ${SITE.name}`}
        fields={[
          { name: "name", label: "Your name" },
          { name: "email", label: "Email", type: "email" },
          { name: "device", label: "Device" },
          { name: "android", label: "Android version" },
          { name: "appver", label: "App version" },
          { name: "message", label: "Your feedback", type: "textarea", required: true },
        ]}
      />
    </Section>
  );
}
