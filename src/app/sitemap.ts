import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

const PATHS = [
  "/",
  "/download/",
  "/beta/",
  "/beta/privacy/",
  "/features/",
  "/changelog/",
  "/privacy/",
  "/delete-account/",
  "/terms/",
  "/permissions/",
  "/bug-report/",
  "/feedback/",
  "/contact/",
  "/faq/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));
}
