import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Download } from "lucide-react";

export const metadata = buildMetadata({
  title: `Get ${SITE.name} on Google Play`,
  description: `Find ${SITE.name} on Google Play for Android ${SITE.minAndroid}+.`,
  path: "/download/",
});

export default function DownloadPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Get {SITE.name} on Google Play
      </h1>
      <p className="mt-2 max-w-2xl text-ink-600">
        Visit Google Play to install callNest on your Android phone.
      </p>
      <div className="mt-6">
        <LinkButton href={SITE.playStoreUrl}>
          <Download className="h-4 w-4" /> Get it on Google Play
        </LinkButton>
      </div>
      <p className="mt-4 text-sm text-ink-600">Requires Android {SITE.minAndroid} or later.</p>
    </Section>
  );
}
