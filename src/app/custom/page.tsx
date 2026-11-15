import { ArrowRight, Check, Mail } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { CUSTOM_AUDIENCES, CUSTOM_CAPABILITIES, CUSTOM_PROBLEMS } from "@/content/custom";
import { SITE } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: `Custom callNest for your business`,
    description: "A paid call and inquiry management app tailored to your business requirements.",
    path: "/custom/",
  }),
  robots: { index: false, follow: true },
};

const subject = encodeURIComponent("Custom callNest enquiry");
const body = encodeURIComponent("Hello,\n\nI would like to discuss a custom callNest app.\n\nBusiness / organization:\nWhat we need help with:\nNumber of users or devices:\n");
const contact = `mailto:${SITE.emails.support}?subject=${subject}&body=${body}`;

export default function CustomPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-500">Paid · Built around your requirements</span>
            <h1 className="headline mt-5 font-display text-4xl font-bold sm:text-5xl">Your calls. Your workflow. Your callNest.</h1>
            <p className="mt-5 max-w-xl text-lg text-ink-600">A custom version of callNest for businesses that want to organize inquiries, follow up with customers and shape the app around the way they work.</p>
            <div className="mt-7"><LinkButton href={contact}><Mail className="h-4 w-4" /> Discuss your requirements</LinkButton></div>
            <p className="mt-3 text-sm text-ink-600">Pricing, scope and availability are discussed for each project.</p>
          </div>
          <div className="rounded-3xl border border-brand-500/20 bg-surface-0 p-6 shadow-neu dark:shadow-neu-dark sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">A fuller picture of your inquiries</p>
            <h2 className="mt-3 font-display text-2xl font-bold">Start with the history already on your phone</h2>
            <p className="mt-3 text-sm leading-6 text-ink-600">With call-log permission, the custom version can use existing call history available on the device. The Google Play version captures supported calls after setup and does not import earlier calls.</p>
            <p className="mt-4 text-sm text-ink-600">This is a separately distributed paid offering. It does not record call audio.</p>
          </div>
        </div>
      </Section>
      <Section className="!py-10">
        <p className="text-sm font-semibold text-brand-500">The problems we help solve</p>
        <h2 className="headline mt-2 font-display text-3xl font-bold">Turn scattered calls into a clearer workflow</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {CUSTOM_PROBLEMS.map((item, index) => <article key={item.problem} className="rounded-2xl border border-ink-600/10 bg-surface-0 p-6 shadow-neu dark:shadow-neu-dark"><span className="text-sm font-semibold text-brand-500">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold">{item.problem}</h3><p className="mt-2 text-sm leading-6 text-ink-600">{item.solution}</p></article>)}
        </div>
      </Section>
      <Section className="!py-10">
        <h2 className="headline font-display text-3xl font-bold">What the custom app can do</h2>
        <p className="mt-2 max-w-2xl text-ink-600">Start with callNest’s existing capabilities, then discuss the changes your business needs.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">{CUSTOM_CAPABILITIES.map((item) => <div key={item.title} className="flex gap-3 rounded-2xl border border-ink-600/10 bg-surface-0 p-5"><Check className="mt-1 h-5 w-5 shrink-0 text-accent-500" aria-hidden /><div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-ink-600">{item.body}</p></div></div>)}</div>
        <p className="mt-4 text-sm text-ink-600">Features depend on the agreed scope, device compatibility and permissions. Custom work is assessed before it is promised.</p>
      </Section>
      <Section className="!py-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-500">A look at the custom app</p>
            <h2 className="headline mt-2 font-display text-3xl font-bold">Organize new contacts as they come in</h2>
            <p className="mt-3 max-w-xl text-ink-600">The auto-save settings let you configure how supported new callers are saved. Available options depend on the build, your device and permissions.</p>
          </div>
          <Image src="/assets/screenshots/real/callnest-auto-save-1080x1920.png" alt="callNest custom app auto-save settings" width={1080} height={1920} sizes="(min-width: 768px) 300px, 70vw" className="mx-auto h-auto w-full max-w-[280px] rounded-3xl shadow-neu dark:shadow-neu-dark" />
        </div>
      </Section>
      <Section className="!py-10">
        <h2 className="headline font-display text-3xl font-bold">Who it is for</h2>
        <p className="mt-2 text-ink-600">From a busy owner to a larger organization, the starting point is your requirement.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">{CUSTOM_AUDIENCES.map((item) => <article key={item.title} className="rounded-2xl border border-ink-600/10 bg-surface-0 p-6"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-ink-600">{item.body}</p></article>)}</div>
        <p className="mt-4 text-sm text-ink-600">Team-wide sharing, integrations and centralized management can be discussed as requirements; their availability is subject to project scope.</p>
      </Section>
      <Section className="!pt-10">
        <div className="rounded-3xl bg-brand-500 p-8 text-white sm:p-10"><h2 className="font-display text-3xl font-bold">Tell us what your business needs</h2><p className="mt-3 max-w-2xl text-white/90">Share your current process, the problems you want to solve and how many people will use the app. We can discuss a suitable scope and price.</p><a href={contact} className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-brand-600">Start a conversation <ArrowRight className="h-4 w-4" /></a></div>
      </Section>
    </>
  );
}
