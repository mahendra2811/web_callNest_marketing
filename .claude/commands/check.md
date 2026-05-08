---
description: Run lint + typecheck + static build to validate changes
allowed-tools: Bash(npm run lint), Bash(npm run typecheck), Bash(npm run build)
---

Run the full validation suite for this static Next.js site, in order:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build` (must succeed under `output: "export"`)

If any step fails, stop and report the failing step with the exact error. Do not attempt fixes unless asked.
