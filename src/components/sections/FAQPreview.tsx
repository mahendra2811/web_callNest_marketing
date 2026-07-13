import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS_HOME } from "@/content/faqs";

export function FAQPreview() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-4">
        <h2 className="headline font-display text-2xl font-bold sm:text-3xl">
          Frequently asked
        </h2>
        <Link
          href="/faq/"
          className="text-sm text-brand-500 hover:text-brand-600"
        >
          See all FAQs
        </Link>
      </div>
      <div className="mt-6">
        <Accordion items={FAQS_HOME} />
      </div>
    </Section>
  );
}
