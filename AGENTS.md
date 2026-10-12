<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- Next.js **16.3.8** + React **19.2** (App Router), TypeScript `strict`. Before using any framework API, check the matching doc in `node_modules/next/dist/docs/` (e.g. `01-app/`) — do not rely on training-data Next.js knowledge.
- Tailwind CSS **v4**, CSS-first — no `tailwind.config`. Everything lives in `app/globals.css`.
- shadcn/ui, style **`base-nova`**, `rsc: true`, built on **`@base-ui/react`** (not Radix — component APIs differ). Icons: `lucide-react`. Add components with `npx shadcn@latest add <component>` → `components/ui/`.
- `cn` is the `cn` npm package, re-exported from `lib/utils.ts` — import from `@/lib/utils`.
- Path alias `@/*` → repo root.

## Commands

```bash
npm run dev          # http://localhost:3000
npm run lint         # ESLint (eslint-config-next: core-web-vitals + typescript)
npx tsc --noEmit     # typecheck (no script defined)
npm run build        # production build — run for route, metadata, or rendering changes
```

No test runner or test suite. Validate with lint + typecheck, then build / manual check in `npm run dev`.

## Architecture

GenAILabs marketing site. Every route under `app/` is a thin shell; content lives in `components/`:

```tsx
<div className="min-w-[320px] overflow-clip bg-ink">  {/* replaces old .site-shell; overflow-clip keeps sticky hero working */}
  <SiteHeader />
  <XxxPage />          {/* route-specific component, e.g. components/product-engineering-page.tsx */}
  <Contact />
  <SiteFooter />
</div>
```

- Routes: `/` (`app/page.tsx` composes section components: hero, work-showcase, capabilities, …), `/services` (hub → `services-hub.tsx`), `/services/{ai-product-engineering,agentic-layer-engineering,forward-deployed-services}`, `/work` (`work-hub-page.tsx`), `/case-study` (`case-study-page.tsx`, placeholder template linked from the featured card on `/work`).
- Keep the wrapper/header/contact/footer composition in the route; put page body in a `components/*-page.tsx`. Reuse existing pieces (nav, contact, marquee, FAQ accordion, proof slider) rather than duplicating markup.
- Site-wide metadata (OG/Twitter, `metadataBase` from `VERCEL_PROJECT_PRODUCTION_URL`) and fonts live only in `app/layout.tsx`; pages may export their own `metadata` (see `app/work/page.tsx`).
- Server Components by default. `"use client"` only for state/effects/browser APIs — existing client components: `mobile-menu`, `services-dropdown`, `faq-accordion`, `hero-lines`, `services-proof-slider`, `engagement-model`, `work-grid`.
- `components/shared/` = cross-page pieces (`marquee.tsx`, `client-logos.tsx`); `components/ui/` = shadcn primitives (only `button.tsx`).
- Supplied design assets go in `public/figma/`; use `next/image` for local images.

## Styling

- `app/globals.css` holds everything: `@theme` tokens (`--color-ink`, `--color-deep`, `--color-panel`, `--color-line`, `--color-muted`, `--color-text`, `--color-orange`; fonts `--font-sans`/`--font-mono` → Space Grotesk/Space Mono), raw `:root` vars (`--ink`, `--orange`, …), `@utility` classes (`button`, `button-primary`, `button-outline`, `button-muted`, `eyebrow`), and plain-CSS section classes (`cta-section`, `services-cta`, `cta-panel`, services-page styles). Add new tokens to `@theme`; reuse these classes before writing new ones.
- Components otherwise use Tailwind utilities with arbitrary values (`max-[640px]:`, `text-[clamp(...)]`, hex colors) — match that.
- Responsive breakpoints: `max-width: 900px` and `640px` (desktop-first `max-*` overrides).
- `@keyframes marquee` lives in globals.css for `animate-[marquee_...]` in `marquee.tsx`; animated tracks need `motion-reduce:animate-none`.
- Fonts loaded via `next/font` in `app/layout.tsx`: Space Grotesk + Space Mono (design), Geist + Geist Mono (vars available). Keep the dark/orange visual language.
- Accessibility patterns to keep: buttons have explicit `type`; expandable controls set `aria-expanded`/`aria-controls`; decorative elements `aria-hidden`.

## Agent files

- `CLAUDE.md` only imports this file; `.github/copilot-instructions.md` mirrors it for Copilot. Keep guidance here and update the Copilot file when conventions change.
