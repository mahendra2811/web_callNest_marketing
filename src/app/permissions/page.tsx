import { Section } from "@/components/ui/Section";
import { PERMISSIONS } from "@/content/permissions";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Permissions — ${SITE.name}`,
  description: "Why callNest asks for each Android permission, and what we never do.",
  path: "/permissions/",
});

export default function PermissionsPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Permissions, in plain English
      </h1>
      <p className="mt-2 max-w-2xl text-ink-600">
        Each permission below is listed with why we need it and what we never
        do with it.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-600/10 bg-surface-0">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase tracking-wider text-ink-600">
            <tr>
              <th className="px-4 py-3">Permission</th>
              <th className="px-4 py-3">Why we need it</th>
              <th className="px-4 py-3">What we DO NOT do</th>
            </tr>
          </thead>
          <tbody>
            {PERMISSIONS.map((p) => (
              <tr key={p.key} className="border-t border-ink-600/10 align-top">
                <td className="px-4 py-3 font-mono text-xs">{p.key}</td>
                <td className="px-4 py-3 text-ink-600">{p.why}</td>
                <td className="px-4 py-3 text-ink-600">{p.dont}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-ink-600">
        Questions? Email{" "}
        <a className="text-brand-500" href={`mailto:${SITE.emails.support}`}>
          {SITE.emails.support}
        </a>
        .
      </p>
    </Section>
  );
}
