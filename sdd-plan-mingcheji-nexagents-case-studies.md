# SDD Plan: Mingcheji + NexAgents Case Study Pages

## Context

The site has a single case-study route at `app/case-study/page.tsx` that renders `components/case-study-page.tsx` (the Kaya placeholder, all "[Verified fact]" placeholders). The work-hub featured card links to `/case-study` for Kaya.

This plan adds two NEW case study pages by copying the Kaya placeholder component and filling in real details from the provided case study briefs:

- Mingcheji (website + mobile app, pilot on preview site)
- NexAgents (app.nexagents.cloud, live in production since 3 Oct 2026)

Each task creates:
1. A new page component in `components/` (copy of `case-study-page.tsx` with all placeholders replaced)
2. A new route file in `app/case-study/<slug>/page.tsx` following the existing route pattern (imports header, page component, contact, footer)

## Global Constraints

- Copy `components/case-study-page.tsx` verbatim as the starting scaffold; replace every `[Verified fact]`, `[Project Name]`, `[Clear challenge statement]`, `[Factual contribution description]`, `[Deployment detail]`, `[Metric / fact]`, `[Source / context]`, `PROJECT-SPECIFIC SYSTEM / UI / ARCHITECTURE VISUAL`, etc. with real values from the case brief. Do NOT leave any placeholder brackets.
- "verified facts only" — every metric, fact, and source must come from the provided case brief. Do not invent numbers, dates, client names, or sources.
- Follow existing code patterns: `"use client"` only where state/effects/browser APIs needed; server components by default; path alias `@/*` → repo root; `next/link` for internal links; `next/image` for local images under `public/`.
- Styling: Tailwind utilities matching `case-study-page.tsx` (dark/orange visual language, `--color-ink`, `--color-deep`, `--color-panel`, `--color-line`, `--color-muted`, `--color-text`, `--color-orange`); `cn` from `@/lib/utils`; arbitrary values like `text-[clamp(...)]`, `max-[640px]:` breakpoints.
- Buttons have explicit `type`; decorative elements `aria-hidden`; `aria-expanded`/`aria-controls` on expandable controls.
- No test runner exists; validate with `npm run lint` and `npx tsc --noEmit`, then `npm run build`.
- Each route file exports `metadata` and a default component in the shell pattern (`<SiteHeader />`, page component, `<Contact />`, `<SiteFooter />` wrapped in `<div className="min-w-[320px] overflow-clip bg-ink">`).
- The implementer never dispatches subagents.

## Case Study Data — Mingcheji

Project: Mingcheji (website + mobile app)
Slug: mingcheji
Status: Pilot — running on a preview site, not yet in production
Related work: none

What the client needed:
Buyers outside China had no easy way to check a Chinese car's history, find parts that fit it, or browse listings. The data that exists is in Chinese, priced in yuan (CNY) and written for China's own formats. The client needed one global platform in six languages (English, Arabic, Russian, Spanish, Portuguese, Chinese) with prices in USD.

What we (GenAILabs) built — Built by us:
- Full redesign of the website to the new Figma designs, including Arabic right-to-left
- A new backend API: sign-in (Google, optional password), accounts, free part checks, Stripe pay-first orders, coupons, an order queue
- Access to the vehicle data provider (GlobalVIN, via the China Vehicle History backend)
- Car Parts: VIN or part-number lookup, a car's full parts catalogue, OEM prices in USD

What we (GenAILabs) built — Already in place:
- An earlier front-end demo (Chinese/English, ¥ prices, hard-coded cars), now fully replaced
- Car Search and the history report pages, on sample data until the live data is connected

Tools used:
- Website: Next.js 16, React 19, Tailwind CSS 4, next-intl (6 languages)
- Backend: Node.js, TypeScript, Express 5, PostgreSQL, Kysely, pg-boss (job queue), Zod
- Payments and sign-in: Stripe Checkout, Google sign-in
- Data: GlobalVIN vehicle and spare-parts APIs; che168 listings via Apify (chosen for Car Search)
- Hosting and monitoring: Vercel (website), Render (API preview), Sentry

Results:
- Car Parts works end to end: sign-in, free checks, payment, the order queue and a translated whole-car parts catalogue.
- Six languages on every page, with full Arabic right-to-left layout.
- No lookup is paid for twice: results are stored, and a search that finds nothing gives a 60-day coupon.

Risk and data handling:
- Reports show only data the provider returns. Sections with no source get a "no data" state; nothing is estimated or invented.
- API keys stay on the server; full VINs from listings never reach the browser; dealer phone numbers are never stored or shown.

Maintenance and scale — How it works:
- Changes without a release: Prices, limits, coupon rules and call costs are settings, stored with history and picked up within 30 seconds
- External API protection: At most about 5 GlobalVIN calls run at once (paid orders first); a circuit breaker pauses calls when GlobalVIN fails, and a daily budget stops spending past a cap
- Self-repair: Background jobs pick up missed payment events, retry deliveries for up to 24 hours, and release checks left unanswered by a stopped process
- Fewer repeat calls: A bought car's report is read from our database, never fetched again

Maintenance and scale — Code quality:
- Automated checks (types, lint, unit and contract tests) run in CI; errors go to Sentry; metrics are exposed for Prometheus

Maintenance and scale — Scaling path:
- One codebase, with Postgres holding all durable data (including the job queue). One small server handles early traffic; to grow, more API copies are added and background work moves to its own worker process (already supported)

Maintenance and scale — Hosting:
- Preview on Render today; production target is a VPS with Docker (proxy, API, worker, Postgres, backups), not built yet

Hero tags for Mingcheji: AI Product Engineering, Forward-Deployed Services

## Case Study Data — NexAgents

Project: NexAgents (app.nexagents.cloud)
Slug: nexagents
Status: Live in production (last deployed 3 Oct 2026)
Related work: none

What the client needed:
A team wanted to use AI agents at work, but faced three gaps: agents that answer well only some of the time, no control over who may use which models, tools, passwords and company data, and costs that add up because every message resends large prompts.

What we (GenAILabs) built — Built by us:
- Production deployment and an automated deployer (tagged releases, CI check first, rollback, GitHub reports)
- Per-person model access and an admin console for models, budgets and usage per person and per agent
- Agent builder: employees build their own agents; @team splits a task across several
- Data stores (Google Search Console, GA4, LinkedIn) granted to each agent separately, with spending caps
- Token cost reduction and metering on every request

What we (GenAILabs) built — Already in place:
- The open-source qm agent platform (forked July 2026): Slack and web chat, per-person sandbox, memory, files, keychain, schedules, skills, web apps

Tools used:
- Platform: Node.js, TypeScript, Fastify, PostgreSQL, pg-boss
- Chat: Slack (Bolt, Socket Mode), web chat
- AI: Claude Agent SDK; harnesses Pi, OpenCode, Codex and Claude Code; MCP connectors (e.g. Google, Huntora)
- Data: Apify (LinkedIn), Google Analytics 4, Google Search Console
- Hosting: Docker on a VPS, Caddy (HTTPS)

Results:
- −74% input tokens on a measured turn (52.6k → 13.8k), from a stable cacheable prompt, trimmed tool output and tools loaded only when needed.
- Prompt cache now works between messages: it was hitting 0%; after the fix, 87% of a turn's first step (14.6k of 16.9k tokens) is read from cache, about 6× cheaper.
- Safer releases: every change is reviewed before merge and tested live in Slack.

Risk and data handling:
- Each person's keys and logins stay in their own keychain and are never shared.
- Paid data sources have a spending cap per data store; schedules stay off until approved.

Maintenance and scale — Today's setup:
- One VPS (11 GB RAM, 193 GB disk) running Docker: four app services (core, portal, web UI, admin) behind Caddy, and Postgres holding all state

Maintenance and scale — Releases:
- Each release: tag the running version, back up the database, rebuild, verify. Rollback = redeploy the previous tag. The automated deployer does this on each tagged release, with a health check, automatic rollback, 4 kept backups and alerts through GitHub

Maintenance and scale — Changes without a release:
- Admins manage people, models, Slack setup and AI provider order in the admin console

Maintenance and scale — Known limits:
- The Google sign-in app is in test mode: at most 100 users can connect Google services, and they must reconnect every 7 days.

Hero tags for NexAgents: Agentic Layer Engineering, Forward-Deployed Services

## Tasks

### Task 1: Create Mingcheji case study page component + route

Create `components/mingcheji-case-study-page.tsx` by copying `components/case-study-page.tsx` and replacing all placeholders with the Mingcheji case data above. Create `app/case-study/mingcheji/page.tsx` following the existing `app/case-study/page.tsx` route pattern, importing `MingchejiCaseStudyPage`. Fill every section: hero, snapshot, challenge, contributions, system/solution, flywheel impulse, outcomes/evidence, testimonial (use ServicesProofSlider as in Kaya), capabilities, related work, CTA. Use real values only — no placeholder brackets. The "System / architecture visual" should reference an actual schematic; since none exists, mark it as a schematic placeholder note but keep real descriptive text (no `[...]` brackets). After creating, run `npm run lint` and `npx tsc --noEmit` on the new files.

### Task 2: Create NexAgents case study page component + route

Create `components/nexagents-case-study-page.tsx` by copying `components/case-study-page.tsx` and replacing all placeholders with the NexAgents case data above. Create `app/case-study/nexagents/page.tsx` following the existing `app/case-study/page.tsx` route pattern, importing `NexagentsCaseStudyPage`. Fill every section with real values only — no placeholder brackets. After creating, run `npm run lint` and `npx tsc --noEmit` on the new files.

## Spec

None beyond this plan and the existing `components/case-study-page.tsx` scaffold.
