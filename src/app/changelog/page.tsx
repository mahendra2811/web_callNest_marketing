import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Updates — ${SITE.name}`,
  description: "Find the latest callNest updates on Google Play.",
  path: "/changelog/",
});

export default function ChangelogPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">callNest updates</h1>
      <p className="mt-3 max-w-2xl text-ink-600">For the latest Google Play version and release notes, visit the callNest listing.</p>
      <div className="mt-6"><LinkButton href={SITE.playStoreUrl}>View on Google Play</LinkButton></div>
    </Section>
  );
}
