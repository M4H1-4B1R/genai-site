<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- Next.js **16.3.8** + React **19.2** (App Router). Before using any framework API, check the matching doc in `node_modules/next/dist/docs/` (e.g. `01-app/`) — do not rely on training-data Next.js knowledge.
- Tailwind CSS **v4** (CSS-first, no `tailwind.config`). Theme lives in `app/globals.css` via `@import "tailwindcss"` plus custom CSS vars (`--ink`, `--orange`, …). Classes like `site-shell`, `eyebrow`, `button-primary`, `cta-section` are **plain CSS in globals.css**, not Tailwind utilities — extend them there.

## Commands

- `npm run dev` / `npm run build` / `npm run lint`
- No test suite exists. For typechecking use `npx tsc --noEmit` (no script defined).

## Structure

- Single-page marketing site: `app/page.tsx` composes section components from `components/*.tsx` (hero, work-showcase, capabilities, …). All are Server Components — no `"use client"` anywhere yet; add it deliberately if you introduce interactivity.
- Path alias `@/*` → repo root.
- `components/shared/` holds cross-section pieces (e.g. `marquee.tsx`).

## shadcn setup

- `components.json` uses style **`base-nova`** with `rsc: true`; new UI components go in `components/ui/` and are built on **`@base-ui/react`** primitives — not Radix. Icons: `lucide-react`.
- `cn` is the `cn` npm package, re-exported from `lib/utils.ts` — import from `@/lib/utils`.

## Other

- `CLAUDE.md` just contains `@AGENTS.md` — keep all agent guidance here only.
