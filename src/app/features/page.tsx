import { Section } from "@/components/ui/Section";
import { FEATURES, type FeatureGroup } from "@/content/features";
import { Icon } from "@/components/ui/Icon";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Features — ${SITE.name}`,
  description: "All sixteen features of callNest, grouped by Capture, Organize, Act and Protect.",
  path: "/features/",
});

const GROUPS: FeatureGroup[] = ["Capture", "Organize", "Act", "Protect"];

export default function FeaturesPage() {
  return (
    <>
      <Section>
        <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
          Features
        </h1>
        <p className="mt-2 max-w-2xl text-ink-600">
          Sixteen features built around four jobs: Capture every call,
          Organize the pipeline, Act on the right leads, and Protect customer
          data.
        </p>
      </Section>

      {GROUPS.map((group) => {
        const items = FEATURES.filter((f) => f.group === group);
        return (
          <Section key={group} className="!py-8">
            <h2 className="headline font-display text-2xl font-bold">
              {group}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((f) => (
                <div
                  key={f.id}
                  className="rounded-2xl bg-surface-0 p-5 shadow-neu dark:shadow-neu-dark border border-ink-600/10"
                >
                  <span className="inline-flex rounded-full bg-brand-500/10 p-2 text-brand-500">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{f.short}</p>
                  <p className="mt-2 text-sm text-ink-600">{f.long}</p>
                </div>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
