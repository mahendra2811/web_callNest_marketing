"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink-600/10 rounded-3xl bg-surface-0 shadow-neu dark:shadow-neu-dark border border-ink-600/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-3xl"
            >
              <span>{item.q}</span>
              <ChevronDown
                aria-hidden
                className={`h-4 w-4 shrink-0 text-ink-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-ink-600">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
