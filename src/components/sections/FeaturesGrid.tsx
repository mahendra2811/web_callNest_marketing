import { Section } from "@/components/ui/Section";
import { FEATURES } from "@/content/features";
import { Icon } from "@/components/ui/Icon";

export function FeaturesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <Section>
      <h2 className="headline font-display text-2xl font-bold sm:text-3xl">
        Everything a busy shop owner needs
      </h2>
      <p className="mt-2 text-ink-600">
        Sixteen features grouped under Capture, Organize, Act and Protect.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div
            key={f.id}
            className="group rounded-2xl bg-surface-0 p-5 shadow-neu dark:shadow-neu-dark border border-ink-600/10 transition hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand-500/10 p-2 text-brand-500">
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-ink-600">
                {f.group}
              </span>
            </div>
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-ink-600">
              {compact ? f.short : f.short}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
