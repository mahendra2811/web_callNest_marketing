---
description: Scaffold a new marketing section component following project conventions
argument-hint: <SectionName>
---

Create a new section component for the callNest marketing site.

Section name: $ARGUMENTS

Requirements:

1. Create `src/components/sections/$ARGUMENTS.tsx` as a client component only if it needs interactivity — otherwise keep it server-rendered.
2. Compose from existing `src/components/ui/*` primitives (Button, Card, etc.). Do not duplicate primitive styles.
3. Pull copy from `src/content/site.ts` (or another `content/*.ts` file). If new content is needed, add it there and import — never hardcode strings in the component.
4. Use Tailwind utility classes plus CSS variables from `src/app/globals.css`. No inline hex colors.
5. If you add motion, gate it on `prefers-reduced-motion`.
6. Wire the section into the relevant page under `src/app/`.
7. Run `/check` after to confirm lint, typecheck, and the static build still pass.
