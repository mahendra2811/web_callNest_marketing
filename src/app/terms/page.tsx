import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Terms — ${SITE.name}`,
  description: "Terms of use for callNest.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Terms of use
      </h1>
      <p className="mt-2 text-ink-600">Last updated: 8 May 2026.</p>

      <div className="mt-8 space-y-6 text-sm">
        <Block title="As-is software">
          callNest is a sideloaded Android app provided as-is. We do our best
          to make it reliable, but we cannot guarantee uninterrupted service
          on every device or Android version.
        </Block>
        <Block title="No call recording">
          callNest does not record calls. It only reads call-log metadata that
          Android already stores on your device.
        </Block>
        <Block title="Your responsibility">
          You are responsible for the data you store, the contacts you tag and
          the way you communicate with your customers. Comply with applicable
          local laws.
        </Block>
        <Block title="Limitation of liability">
          To the extent permitted by law, {SITE.name} and its authors are not
          liable for indirect or consequential damages from using the app.
        </Block>
        <Block title="Contact">
          For any questions, email{" "}
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
