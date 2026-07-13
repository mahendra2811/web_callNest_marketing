import Script from "next/script";
import { SITE } from "@/content/site";

export function Analytics() {
  if (!SITE.ga4Id) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.ga4Id}');`}
      </Script>
    </>
  );
}
