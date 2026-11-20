import { Section } from "@/components/ui/Section";
import { BETA } from "@/content/beta";
import { buildMetadata } from "@/lib/seo";
import { BetaDownload } from "./BetaDownload";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildMetadata({
  title: `${BETA.name} for Android`,
  description: BETA.description,
  path: "/beta/",
});

export default function BetaPage() {
  return (
    <Section>
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#f4f5ed] via-white to-[#e4eee0] p-6 sm:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_250px]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold tracking-[.16em] text-brand-700"><span className="h-2 w-2 rounded-full bg-brand-500" /> BETA VERSION</div>
            <h1 className="headline mt-5 font-display text-4xl font-bold sm:text-5xl">{BETA.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-600">{BETA.description}</p>
            <p className="mt-3 max-w-2xl text-sm text-ink-600">Explore upcoming CallNest improvements. Beta installs separately from Google Play and keeps its own app data.</p>
            <BetaDownload />
          </div>
          <div className="relative mx-auto w-52 rounded-[2rem] bg-white p-5 shadow-neu md:w-56">
            <Image src="/assets/logo/callnest-mark.png" alt="CallNest app icon" width={192} height={192} className="rounded-3xl" priority />
            <span className="absolute -right-3 -top-3 rounded-full border-4 border-white bg-[#294b3c] px-3 py-1 text-xs font-extrabold tracking-widest text-white">BETA</span>
            <p className="mt-3 text-center font-display text-sm font-bold text-ink-900">CallNest · Beta</p>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {["Try upcoming improvements", "Keep your Play app installed", "Use a separate Beta data space"].map((item, index) => <article key={item} className="rounded-2xl border border-ink-600/10 bg-white p-5"><span className="text-xs font-bold text-brand-600">0{index + 1}</span><h2 className="mt-2 font-semibold text-ink-900">{item}</h2></article>)}
      </div>
      <p className="mt-8 text-xs leading-6 text-ink-600">Beta builds may change and can contain unfinished features. Back up important information before testing. The Beta app requires Android {BETA.minAndroid}+ and package ID <code>{BETA.applicationId}</code>.</p>
      <p className="mt-3 text-xs text-ink-600">Read the <Link className="underline" href={BETA.privacyPath}>CallNest Beta privacy notice</Link>.</p>
    </Section>
  );
}
