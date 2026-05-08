import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/content/site";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image
        src="/assets/logo/callnest-mark.png"
        alt={`${SITE.name} logo`}
        width={size}
        height={size}
        priority
        className="h-9 w-9 object-contain"
      />
      <span className="font-display text-lg font-bold tracking-tight">
        {SITE.name}
      </span>
    </Link>
  );
}
