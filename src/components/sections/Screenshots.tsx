import { Section } from "@/components/ui/Section";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const SHOTS = [
  { src: "/assets/screenshots/screenshot-01.png", alt: "Inbox view" },
  { src: "/assets/screenshots/screenshot-02.png", alt: "Lead score" },
  { src: "/assets/screenshots/screenshot-03.png", alt: "Tags and notes" },
  { src: "/assets/screenshots/screenshot-04.png", alt: "Reminders" },
  { src: "/assets/screenshots/screenshot-05.png", alt: "Export sheet" },
];

export function Screenshots() {
  return (
    <Section>
      <h2 className="headline font-display text-2xl font-bold sm:text-3xl">
        See it on your phone
      </h2>
      <p className="mt-2 text-ink-600">
        Designed for one-handed use during a busy day.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {SHOTS.map((s) => (
          <PhoneMockup key={s.src} src={s.src} alt={s.alt} />
        ))}
      </div>
    </Section>
  );
}
