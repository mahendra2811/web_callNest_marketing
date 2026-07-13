import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/content/site";

const COLS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/features/", label: "Features" },
      { href: "/download/", label: "Download" },
      { href: "/changelog/", label: "Changelog" },
      { href: "/permissions/", label: "Permissions" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq/", label: "FAQ" },
      { href: "/bug-report/", label: "Report a bug" },
      { href: "/feedback/", label: "Send feedback" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy/", label: "Privacy" },
      { href: "/terms/", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-600/10 bg-surface-0">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-ink-600">
              {SITE.tagline}
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold">{c.title}</h4>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-600 hover:text-ink-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-600/10 pt-6 text-xs text-ink-600 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>
            Made for Indian SMBs.{" "}
            <a href={`mailto:${SITE.emails.support}`} className="hover:text-ink-900">
              {SITE.emails.support}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
