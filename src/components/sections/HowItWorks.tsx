import { Section } from "@/components/ui/Section";
import { Download, Phone, ListChecks } from "lucide-react";

const STEPS = [
  {
    Icon: Download,
    title: "Install in 60 seconds",
    body: "Download the signed APK, allow install from this source, done.",
  },
  {
    Icon: Phone,
    title: "Take calls like always",
    body: "callNest captures every call in the background. No new habits.",
  },
  {
    Icon: ListChecks,
    title: "Tag, follow-up, close",
    body: "Mark hot leads, set reminders, export sheets to your team.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <h2 className="headline font-display text-2xl font-bold sm:text-3xl">
        How it works
      </h2>
      <p className="mt-2 text-ink-600">Three steps. No training needed.</p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className="rounded-2xl bg-surface-0 p-5 shadow-neu dark:shadow-neu-dark border border-ink-600/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-500">
                {i + 1}
              </span>
              <s.Icon className="h-5 w-5 text-accent-500" aria-hidden />
            </div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-ink-600">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
