import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata = buildMetadata({
  title: `Contact — ${SITE.name}`,
  description: "Get in touch with the callNest team.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <Section>
      <h1 className="headline font-display text-3xl font-bold sm:text-4xl">
        Contact us
      </h1>
      <p className="mt-2 max-w-2xl text-ink-600">
        We answer real humans. Most replies go out within one working day.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <Mail className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="mt-3 font-semibold">Email</h2>
          <p className="mt-1 text-sm text-ink-600">For anything and everything.</p>
          <a
            href={`mailto:${SITE.emails.support}`}
            className="mt-3 inline-block text-sm text-brand-500 hover:text-brand-600"
          >
            {SITE.emails.support}
          </a>
        </Card>
        <Card>
          <MessageCircle className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="mt-3 font-semibold">WhatsApp</h2>
          <p className="mt-1 text-sm text-ink-600">
            Quick questions, screenshots welcome.
          </p>
          <a
            href={SITE.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-brand-500 hover:text-brand-600"
          >
            Open WhatsApp chat
          </a>
          <p className="mt-2 text-[11px] text-ink-600">
            (Number is a placeholder until launch.)
          </p>
        </Card>
        <Card>
          <MapPin className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="mt-3 font-semibold">Address</h2>
          <p className="mt-1 text-sm text-ink-600">
            Pooniya Labs
            <br />
            Bengaluru, Karnataka, India
          </p>
        </Card>
      </div>
    </Section>
  );
}
