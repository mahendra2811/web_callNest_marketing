import { Section } from "@/components/ui/Section";
import { PhoneMissed, ClipboardX, Hourglass } from "lucide-react";

const ITEMS = [
  {
    Icon: PhoneMissed,
    title: "Missed calls = missed sales",
    body: "Twenty unsaved numbers a day. Half forgotten by night.",
  },
  {
    Icon: ClipboardX,
    title: "Notebooks don't scale",
    body: "Paper diaries and sticky notes break the moment two people answer.",
  },
  {
    Icon: Hourglass,
    title: "Follow-ups slip",
    body: "Hot leads go cold because nobody remembered to call back.",
  },
];

export function Problem() {
  return (
    <Section>
      <h2 className="headline font-display text-2xl font-bold sm:text-3xl">
        The problem with how SMBs handle calls today
      </h2>
      <p className="mt-2 max-w-2xl text-ink-600">
        Twenty to a hundred inquiry calls a day. No CRM. No system. Just memory.
      </p>
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
