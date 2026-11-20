import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-600/10 bg-surface-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div><Logo /><p className="mt-2 max-w-xs text-sm text-ink-600">A little more clarity for your business calls.</p></div>
        <nav aria-label="Support and legal" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-ink-600">
          <a href={`mailto:${SITE.emails.support}`} className="hover:text-ink-900">Contact</a>
          <Link href="/permissions/" className="hover:text-ink-900">Permissions</Link>
          <Link href="/privacy/" className="hover:text-ink-900">Privacy</Link>
          <Link href="/beta/" className="hover:text-ink-900">CallNest Beta</Link>
          <Link href="/beta/privacy/" className="hover:text-ink-900">Beta privacy</Link>
          <Link href="/terms/" className="hover:text-ink-900">Terms</Link>
          <Link href="/delete-account/" className="hover:text-ink-900">Delete account</Link>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl border-t border-ink-600/10 px-5 py-5 text-xs text-ink-600">© {new Date().getFullYear()} {SITE.name}. Made for busy business owners.</div>
    </footer>
  );
}
