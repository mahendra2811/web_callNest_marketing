import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PhoneOff } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="text-center">
      <PhoneOff className="mx-auto h-10 w-10 text-brand-500" aria-hidden />
      <h1 className="mt-4 headline font-display text-4xl font-bold">404</h1>
      <p className="mt-2 text-ink-600">
        Looks like this page hung up on you. Don&apos;t worry, callNest
        would&apos;ve saved its number anyway.
      </p>
      <div className="mt-6 inline-flex">
        <LinkButton href="/">Back to home</LinkButton>
      </div>
    </Section>
  );
}
