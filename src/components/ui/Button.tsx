import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
const styles: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-neu dark:shadow-neu-dark",
  secondary:
    "bg-surface-0 text-ink-900 border border-ink-600/20 hover:border-brand-500/50 shadow-neu dark:shadow-neu-dark",
  ghost: "text-ink-900 hover:text-brand-500",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 disabled:opacity-50";

type CommonProps = { variant?: Variant; className?: string };

export function Button({
  variant = "primary",
  className = "",
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      {...rest}
      className={`${base} ${styles[variant]} ${className}`}
    />
  );
}

export function LinkButton({
  variant = "primary",
  className = "",
  href,
  children,
  ...rest
}: CommonProps & { href: string; children: React.ReactNode } & Omit<
    ComponentProps<typeof Link>,
    "href"
  >) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
