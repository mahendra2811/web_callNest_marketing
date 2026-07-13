import { Section } from "@/components/ui/Section";
import { ShieldCheck, Zap, Smartphone } from "lucide-react";

const ITEMS = [
  {
    Icon: ShieldCheck,
    title: "Local-first, private by default",
    body: "Your data stays on your device. Cloud backup is opt-in and encrypted.",
  },
  {
    Icon: Zap,
    title: "Built for Indian phones",
    body: "Survives Xiaomi, Realme and Oppo battery managers without tricks.",
  },
  {
    Icon: Smartphone,
    title: "Zero CRM training",
    body: "If you can answer a phone call, you can run callNest.",
  },
];

export function WhyCallNest() {
  return (
    <Section>
      <h2 className="headline font-display text-2xl font-bold sm:text-3xl">
        Why callNest
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {ITEMS.map(({ Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl bg-surface-0 p-5 shadow-neu dark:shadow-neu-dark border border-ink-600/10"
          >
            <Icon className="h-6 w-6 text-brand-500" aria-hidden />
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-ink-600">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
