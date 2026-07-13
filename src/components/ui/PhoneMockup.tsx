import Image from "next/image";

export function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[240px] sm:w-[260px] aspect-[9/19] rounded-[2.4rem] bg-ink-900 p-2 shadow-neu dark:shadow-neu-dark ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-900" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-surface-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="260px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
