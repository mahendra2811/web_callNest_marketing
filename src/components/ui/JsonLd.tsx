import Script from "next/script";

export function JsonLd({ id, data }: { id: string; data: unknown }) {
  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data).replace(/</g, "\\u003c")}
    </Script>
  );
}
