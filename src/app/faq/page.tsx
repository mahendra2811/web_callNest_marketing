import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS_ALL } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `FAQ — ${SITE.name}`,
  description: "Twelve answers covering installation, permissions, data, and support.",
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Frequently asked questions
      </h1>
      <p className="mt-2 max-w-2xl text-ink-600">
        If your question is not here, email{" "}
        <a className="text-brand-500" href={`mailto:${SITE.emails.support}`}>
          {SITE.emails.support}
        </a>
        .
      </p>
      <div className="mt-8">
        <Accordion items={FAQS_ALL} />
      </div>
    </Section>
  );
}
