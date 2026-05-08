import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Screenshots } from "@/components/sections/Screenshots";
import { WhyCallNest } from "@/components/sections/WhyCallNest";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  operatingSystem: "Android",
  applicationCategory: "BusinessApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  downloadUrl: `${SITE.url}/download/`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-home" data={jsonLd} />
      <Hero />
      <Problem />
      <HowItWorks />
      <FeaturesGrid />
      <Screenshots />
      <WhyCallNest />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
