import { type ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl bg-surface-0 p-6 shadow-neu dark:shadow-neu-dark border border-ink-600/10 ${className}`}
    >
      {children}
    </div>
  );
}
