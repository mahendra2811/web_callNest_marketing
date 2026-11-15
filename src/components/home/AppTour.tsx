"use client";

import Image from "next/image";
import { useState } from "react";
import { BarChart3, Layers3, MessageSquareText } from "lucide-react";

const screens = [
  { title: "Your everyday toolkit", description: "Find follow-ups, contacts, exports and more in one place.", icon: Layers3, src: "/assets/screenshots/real/callnest-more-hub-1080x1920.png", alt: "callNest menu with follow-ups, contacts, export and tags" },
  { title: "Notes when you need them", description: "Use the floating bubble and post-call popup to keep details close.", icon: MessageSquareText, src: "/assets/screenshots/real/callnest-real-time-1080x1920.png", alt: "callNest settings for the in-call bubble and post-call popup" },
  { title: "See the bigger picture", description: "Explore call activity, busy days and trends at a glance.", icon: BarChart3, src: "/assets/screenshots/real/callnest-insights-patterns-1080x1920.png", alt: "callNest statistics showing call patterns and busiest days" },
];

export function AppTour() {
  const [active, setActive] = useState(0);
  const selected = screens[active];
  return (
    <div className="cn-tour">
      <div className="cn-tour-options" aria-label="Choose an app screen">
        {screens.map((screen, index) => {
          const Icon = screen.icon;
          return <button type="button" key={screen.title} onClick={() => setActive(index)} aria-pressed={active === index} className={`cn-tour-option ${active === index ? "is-active" : ""}`}>
            <span className={`cn-icon cn-icon-${index + 1}`}><Icon size={21} aria-hidden="true" /></span>
            <span><strong>{screen.title}</strong><span>{screen.description}</span></span>
          </button>;
        })}
      </div>
      <div className="cn-tour-visual" aria-live="polite">
        <Image src={selected.src} alt={selected.alt} width={1080} height={1920} sizes="(min-width: 768px) 290px, 60vw" className="cn-tour-image" />
      </div>
    </div>
  );
}
