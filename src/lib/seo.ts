import type { Metadata } from "next";
import { SITE } from "@/content/site";

export function buildMetadata(opts: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${SITE.url}${opts.path ?? "/"}`;
  const description = opts.description ?? SITE.description;
  const title = opts.title;
  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE.name,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
