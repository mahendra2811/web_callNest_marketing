import { Section } from "@/components/ui/Section";
import { RELEASES } from "@/content/releases";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Changelog — ${SITE.name}`,
  description: "Release history and version notes for callNest.",
  path: "/changelog/",
});

export default function ChangelogPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Changelog
      </h1>
      <p className="mt-2 text-ink-600">Every version, every change.</p>

      <div className="mt-8 space-y-6">
        {RELEASES.map((r) => (
          <article
            key={r.version}
            className="rounded-3xl bg-surface-0 p-6 shadow-neu dark:shadow-neu-dark border border-ink-600/10"
          >
            <header className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-xl font-bold">v{r.version}</h2>
              <span className="text-sm text-ink-600">
                {r.date} · {r.size}
              </span>
            </header>
            {r.added.length > 0 && (
              <Group title="Added" items={r.added} tone="brand" />
            )}
            {r.changed.length > 0 && (
              <Group title="Changed" items={r.changed} tone="accent" />
            )}
            {r.fixed.length > 0 && (
              <Group title="Fixed" items={r.fixed} tone="muted" />
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Group({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "brand" | "accent" | "muted";
}) {
  const dot = {
    brand: "bg-brand-500",
    accent: "bg-accent-500",
    muted: "bg-ink-600",
  }[tone];
  return (
    <div className="mt-4">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-600">
        {title}
      </h3>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${dot}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
