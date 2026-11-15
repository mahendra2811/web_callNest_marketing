import { LinkButton } from "@/components/ui/Button";
import Image from "next/image";
import { SITE } from "@/content/site";
import { Download, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-500/10 via-transparent to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:py-20 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-600/20 bg-surface-0 px-3 py-1 text-xs text-ink-600 shadow-neu dark:shadow-neu-dark">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-500" /> For Indian SMB owners
          </span>
          <h1 className="headline mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-base text-ink-600 sm:text-lg">
            Organize business inquiries, add notes, score leads and keep track
            of follow-ups on your Android phone.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href={SITE.playStoreUrl} variant="primary">
              <Download className="h-4 w-4" /> Get it on Google Play
            </LinkButton>
            <LinkButton href="/features/" variant="secondary">
              See features
            </LinkButton>
          </div>
          <p className="mt-3 text-xs text-ink-600">
            Android {SITE.minAndroid}+
          </p>
        </div>
        <div className="relative">
          <Image
            src="/assets/screenshots/real/callnest-more-hub-1080x1920.png"
            alt="callNest app showing inquiry, follow-up and export tools"
            width={1080}
            height={1920}
            sizes="(min-width: 768px) 300px, 70vw"
            priority
            className="mx-auto h-auto w-full max-w-[280px] rounded-3xl shadow-neu dark:shadow-neu-dark"
          />
        </div>
      </div>
    </section>
  );
}
