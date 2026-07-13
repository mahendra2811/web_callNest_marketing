import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[name] ?? Lucide.Circle;
  return <C aria-hidden {...props} />;
}
