import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function FinalCTA() {
  return (
    <Section>
      <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 p-8 text-white shadow-neu dark:shadow-neu-dark sm:p-12">
        <h2 className="headline font-display text-3xl font-bold sm:text-4xl">
          Stop losing leads to a paper diary.
        </h2>
        <p className="mt-3 max-w-xl text-white/85">
          Install callNest on your Android phone and turn today&apos;s calls into
          tomorrow&apos;s customers.
        </p>
        <div className="mt-6">
          <LinkButton
            href="/download/"
            variant="secondary"
            className="text-ink-900"
          >
            <Download className="h-4 w-4" /> Download the APK
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
