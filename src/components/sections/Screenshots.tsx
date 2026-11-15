import Image from "next/image";
import { Section } from "@/components/ui/Section";

const SHOTS = [
  { src: "/assets/screenshots/real/callnest-more-hub-1080x1920.png", alt: "callNest tools including follow-ups, contacts, export and tags", title: "Your tools in one place" },
  { src: "/assets/screenshots/real/callnest-real-time-1080x1920.png", alt: "callNest settings for the floating bubble and post-call popup", title: "Capture details during and after a call" },
  { src: "/assets/screenshots/real/callnest-insights-overview-1080x1920.png", alt: "callNest call statistics with daily volume and call types", title: "See your call activity" },
  { src: "/assets/screenshots/real/callnest-insights-patterns-1080x1920.png", alt: "callNest charts showing call activity by time and day", title: "Find your busiest times" },
];

export function Screenshots() {
  return (
    <Section>
      <h2 className="headline font-display text-2xl font-bold sm:text-3xl">
        See callNest in action
      </h2>
      <p className="mt-2 max-w-2xl text-ink-600">
        Explore the tools that help you organize inquiries and understand your call activity.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
        {SHOTS.map((shot) => (
          <figure key={shot.src} className="min-w-0">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1080}
              height={1920}
              sizes="(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw"
              className="h-auto w-full rounded-2xl shadow-neu dark:shadow-neu-dark"
            />
            <figcaption className="mt-3 text-sm font-semibold">{shot.title}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-5 text-xs text-ink-600">Screen appearance and available features may vary by device, setup and app version.</p>
    </Section>
  );
}
