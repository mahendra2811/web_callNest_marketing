"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV = [
  { href: "/features/", label: "Features" },
  { href: "/download/", label: "Download" },
  { href: "/changelog/", label: "Changelog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-ink-600/10 bg-surface-50/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-xl px-3 py-2 text-sm text-ink-600 hover:text-ink-900 hover:bg-surface-0"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/download/"
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 shadow-neu dark:shadow-neu-dark"
          >
            <Download className="h-4 w-4" /> Get app
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-600/20 bg-surface-0"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink-600/10 bg-surface-0">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-ink-900 hover:bg-surface-50"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/download/"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-4 py-3 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" /> Get app
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
