import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RELEASES } from "@/content/releases";
import { SITE } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Download, Smartphone, ShieldCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: `Download ${SITE.name}`,
  description: `Download the latest signed APK of ${SITE.name}. Android ${SITE.minAndroid}+.`,
  path: "/download/",
});

export default function DownloadPage() {
  const latest = RELEASES[0];
  const older = RELEASES.slice(1);
  return (
    <>
      <Section>
        <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
          Download {SITE.name}
        </h1>
        <p className="mt-2 max-w-2xl text-ink-600">
          Sideloaded for Android. Signed APK with a published SHA-256
          checksum. Free, no ads.
        </p>

        <Card className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-ink-600">
                Latest version
              </div>
              <div className="mt-1 text-2xl font-bold">v{latest.version}</div>
              <div className="mt-1 text-sm text-ink-600">
                Released {latest.date} · {latest.size} · Android{" "}
                {SITE.minAndroid}+
              </div>
              <div className="mt-2 break-all text-xs text-ink-600">
                SHA-256: <span className="font-mono">{latest.sha256}</span>
              </div>
            </div>
            <LinkButton href={latest.downloadUrl}>
              <Download className="h-4 w-4" /> Download APK
            </LinkButton>
          </div>
        </Card>
      </Section>

      <Section>
        <h2 className="headline font-display text-2xl font-bold">
          How to install
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              Icon: Download,
              title: "1. Download the APK",
              body: "Tap the download button above on your Android phone.",
            },
            {
              Icon: ShieldCheck,
              title: "2. Allow this source",
              body: "When prompted, allow your browser to install unknown apps.",
            },
            {
              Icon: Smartphone,
              title: "3. Open and finish setup",
              body: "Grant the listed permissions and you are ready to go.",
            },
          ].map(({ Icon, title, body }) => (
            <li
              key={title}
              className="rounded-2xl bg-surface-0 p-5 shadow-neu dark:shadow-neu-dark border border-ink-600/10"
            >
              <Icon className="h-5 w-5 text-brand-500" aria-hidden />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-ink-600">{body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-ink-600">
          Requires Android {SITE.minAndroid} or later.
        </p>
      </Section>

      <Section>
        <h2 className="headline font-display text-2xl font-bold">
          Older versions
        </h2>
        {older.length === 0 ? (
          <p className="mt-2 text-sm text-ink-600">
            No older versions yet. Check back after the next release.
          </p>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-600/10 bg-surface-0">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase tracking-wider text-ink-600">
                <tr>
                  <th className="px-4 py-3">Version</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">SHA-256</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {older.map((r) => (
                  <tr key={r.version} className="border-t border-ink-600/10">
                    <td className="px-4 py-3 font-medium">v{r.version}</td>
                    <td className="px-4 py-3 text-ink-600">{r.date}</td>
                    <td className="px-4 py-3 text-ink-600">{r.size}</td>
                    <td className="px-4 py-3 font-mono text-xs text-ink-600">
                      {r.sha256}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        className="text-brand-500 hover:text-brand-600"
                        href={r.downloadUrl}
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </>
  );
}
