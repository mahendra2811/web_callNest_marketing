import Image from "next/image";
import { ArrowDown, ArrowRight, BarChart3, BellRing, Check, ContactRound, Download, FileSpreadsheet, MessageCircle, PhoneIncoming, ShieldCheck, Sparkles, Tags } from "lucide-react";
import { AppTour } from "@/components/home/AppTour";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";

const benefits = [
  { icon: ContactRound, tone: "mint", title: "Save new inquiries", text: "Automatically save supported new callers to your contacts, with a prefix and caller name when available." },
  { icon: MessageCircle, tone: "peach", title: "Remember the details", text: "Add notes and tags to customer calls, so you have context for your next conversation." },
  { icon: BellRing, tone: "lavender", title: "Follow up on time", text: "Set a reminder for the calls that need your attention and keep your next steps in view." },
  { icon: FileSpreadsheet, tone: "yellow", title: "Take your data with you", text: "Export available call details to Excel, CSV or PDF when you need to review or share them." },
  { icon: BarChart3, tone: "blue", title: "Understand your calls", text: "See call activity and spot the days and times when your phone is busiest." },
  { icon: Tags, tone: "rose", title: "Find the right inquiry", text: "Use tags, search and filters to bring relevant customer conversations back into focus." },
];

const faqs = [
  { q: "What calls can callNest capture?", a: "The Google Play version captures supported calls after setup. Incoming calls require the call-screening role; outgoing calls need to be started from callNest. Earlier calls are not imported." },
  { q: "Can callNest save a new caller automatically?", a: "Yes, you can enable auto-save for supported calls and grant the required contacts permissions. Caller names depend on the information available on your device." },
  { q: "Does callNest record call audio?", a: "No. callNest does not record call audio." },
  { q: "Where is my information stored?", a: "Call details and notes are stored on your device. Check the app for the backup options available to you." },
  { q: "Is callNest free?", a: "The current Google Play version is free, with no ads or in-app purchases." },
];

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: SITE.name, operatingSystem: "Android", applicationCategory: "BusinessApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, downloadUrl: SITE.playStoreUrl, description: SITE.description };

export default function HomePage() {
  return <div className="cn-home">
    <JsonLd id="ld-home" data={jsonLd} />
    <section className="cn-hero">
      <div className="cn-wrap cn-hero-grid">
        <div className="cn-hero-copy">
          <p className="cn-eyebrow"><span className="cn-eyebrow-dot" /> MADE FOR BUSINESSES THAT RUN ON CALLS</p>
          <h1>Your calls have <em>potential.</em><br />Keep it in sight.</h1>
          <p className="cn-hero-desc">Meet the simple call companion that helps you save new inquiries, remember the details, and follow up with confidence.</p>
          <div className="cn-actions"><a className="cn-button cn-button-dark" href={SITE.playStoreUrl}><Download size={18} aria-hidden="true" /> Get it on Google Play <ArrowRight size={17} aria-hidden="true" /></a><a className="cn-text-link" href="#how-it-works">See how it works <ArrowDown size={16} aria-hidden="true" /></a></div>
          <div className="cn-hero-note"><ShieldCheck size={17} aria-hidden="true" /> Android {SITE.minAndroid}+ <span /> No call audio recording</div>
        </div>
        <div className="cn-hero-art">
          <div className="cn-orbit cn-orbit-one" /><div className="cn-orbit cn-orbit-two" />
          <Image src="/assets/screenshots/real/callnest-more-hub-1080x1920.png" alt="callNest app showing follow-ups, contacts, export and automation tools" width={1080} height={1920} sizes="(min-width: 768px) 270px, 55vw" priority className="cn-hero-image" />
          <div className="cn-floating cn-floating-one"><span className="cn-icon cn-icon-mint"><PhoneIncoming size={19} aria-hidden="true" /></span><span><strong>New inquiry</strong><small>Keep the conversation going</small></span></div>
          <div className="cn-floating cn-floating-two"><span className="cn-icon cn-icon-peach"><BellRing size={19} aria-hidden="true" /></span><span><strong>Follow-up ready</strong><small>Make every reminder count</small></span></div>
        </div>
      </div>
      <div className="cn-wrap"><div className="cn-trust"><span><Check size={15} /> Simple to use</span><span><Check size={15} /> Made for Android</span><span><Check size={15} /> Built for busy days</span></div></div>
    </section>

    <section className="cn-section cn-wrap" id="features">
      <div className="cn-section-heading"><div><p className="cn-label"><Sparkles size={15} /> MADE FOR YOUR EVERYDAY</p><h2>Less chasing.<br /><em>More connecting.</em></h2></div><p>From the first call to the next conversation, keep the important things together.</p></div>
      <div className="cn-benefits">{benefits.map(({ icon: Icon, tone, title, text }, index) => <article className="cn-benefit" key={title}><div className="cn-benefit-top"><span className={`cn-icon cn-icon-${tone}`}><Icon size={22} aria-hidden="true" /></span><span className="cn-card-num">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="cn-disclaimer">Call capture and caller names depend on setup, permissions and your device. The Play version starts with supported calls after setup.</p>
    </section>

    <section className="cn-tour-section" id="app-tour"><div className="cn-wrap"><div className="cn-section-heading"><div><p className="cn-label"><span className="cn-label-dot" /> A CLOSER LOOK</p><h2>Made for real life.<br /><em>Not extra work.</em></h2></div><p>A simple home for your customer conversations. Tap through to see callNest in action.</p></div><AppTour /><p className="cn-disclaimer">Screens and available features may vary by device and app version.</p></div></section>

    <section className="cn-section cn-wrap" id="how-it-works"><div className="cn-section-heading"><div><p className="cn-label"><span className="cn-label-dot" /> GETTING STARTED</p><h2>Ready in <em>three steps.</em></h2></div><p>Get set up, then let callNest help you keep your inquiries organized.</p></div><div className="cn-steps"><article><span>01</span><h3>Get the app</h3><p>Find callNest on Google Play and install it on your Android phone.</p></article><article><span>02</span><h3>Set it up</h3><p>Follow the setup steps and allow the permissions needed for the features you choose.</p></article><article><span>03</span><h3>Stay organized</h3><p>Save supported new inquiries, add details and plan your follow-ups.</p></article></div></section>

    <section className="cn-faq-section" id="faq"><div className="cn-wrap cn-faq-grid"><div><p className="cn-label"><span className="cn-label-dot" /> GOOD TO KNOW</p><h2>Questions?<br /><em>We’ve got you.</em></h2><p className="cn-faq-intro">A few helpful details before you get started.</p><a className="cn-text-link" href={`mailto:${SITE.emails.support}`}>Contact support <ArrowRight size={16} /></a></div><div className="cn-faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span aria-hidden="true">+</span></summary><p>{faq.a}</p></details>)}</div></div></section>

    <section className="cn-wrap cn-final-wrap"><div className="cn-final"><div><p className="cn-final-label">YOUR NEXT CUSTOMER IS CALLING</p><h2>Make every conversation<br /><em>easier to remember.</em></h2><p>Give your business calls a little more organization with callNest.</p></div><a className="cn-button cn-button-light" href={SITE.playStoreUrl}><Download size={18} /> Get it on Google Play <ArrowRight size={17} /></a></div></section>
  </div>;
}
