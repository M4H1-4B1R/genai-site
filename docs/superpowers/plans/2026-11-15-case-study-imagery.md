# Case-Study Imagery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the soft VendorHub app screens and the mostly-empty blurred 911 hero screenshot with code-rendered images exported at 3×, and rename the 911 project to Callsign.

**Architecture:** Every image is authored as an HTML file under `tools/mockups/`, rendered by the gstack `/browse` headless browser at `--scale 3`, and screenshotted to `public/figma/`. Source HTML is committed so images regenerate when copy or the name changes. No new npm dependency: `/browse` is already installed and `sharp` already resolves.

**Tech Stack:** Next.js 16.3.8, React 19.2, TypeScript strict, Tailwind v4 (CSS-first), gstack `/browse`, `sharp` (post-processing only).

**Spec:** `docs/superpowers/specs/2026-11-15-case-study-imagery-design.md`

## Global Constraints

- No new npm dependencies. `/browse` and `sharp` only.
- `/browse` `--scale` is capped at 1–3 by gstack policy. 3 is the maximum export factor.
- The project name is **`Callsign`**, and it is temporary. It lives in exactly one exported constant in `components/dispatch-training-case-study-page.tsx`; every other mention references that constant.
- The route slug stays `/case-study/dispatch-training`. No route move, no `lib/redirects.ts` change, no `app/sitemap.ts` change.
- **Do not modify `components/work-grid.tsx`.** Its dispatch entry is an unrelated uncommitted working-tree change.
- No hero board text may render below **11 px at the 640 px breakpoint**, which is a floor of **52 px** in the 1600 px export.
- Every exported image's outer background is **`#0f1417`**, matching the slot background in `image-lightbox.tsx`, so `object-contain` letterboxing is invisible.
- VendorHub screen content is reproduced faithfully from the existing PNGs — they are real app images. Avatars become monogram circles (the only sanctioned substitution). Row count grows to fill dead space.
- Keep existing accessibility patterns: explicit `type` on buttons, `aria-hidden` on decorative elements, meaningful `alt`.
- No test runner exists (`AGENTS.md`). Verification is `file` on exports, a visual read of each PNG, then `npm run lint`, `npx tsc --noEmit`, `npm run build`.

## Review Focus

Failure modes the spec implies that no single task's deliverable naturally exercises. Each line's check is added to the task that owns the code.

1. **Mobile legibility of the board.** At 390 px the hero is `max-[640px]:h-[240px]`; a contained 1600×900 board renders ~342×192 (scale 0.21). Feature names must still read. — Task 2.
2. **Letterbox seam on `object-contain`.** `ImageLightbox` adds `p-4` in contain mode; an export whose background differs from `#0f1417` shows a visible rectangle. — Tasks 1 and 3.
3. **Gallery aspect mismatch.** The VendorHub gallery slot is `aspect-[1/2]`; an export at the phone's native 1:2.164 letterboxes and exposes the baked-in backdrop's edges. Exports must be exactly 1:2. — Task 3.
4. **Page weight.** Four 1170×2532 PNGs plus a rebuilt hero can add several MB to a marketing page and regress LCP. Each exported file must be under 400 KB. — Task 5.
5. **Stale alt text and headings after the rename.** Three hard-coded "Dispatch Training Platform" strings at lines 262, 281 and 485, one of them inside a template literal. — Task 2.

---

### Task 1: Mockup pipeline and the Callsign feature board

**Files:**
- Create: `tools/mockups/README.md`
- Create: `tools/mockups/callsign-board.html`
- Create (output): `public/figma/callsign-features.png`

**Interfaces:**
- Consumes: nothing.
- Produces: `public/figma/callsign-features.png` at exactly 1600×900, consumed by Task 2. The regeneration command recorded in `tools/mockups/README.md` is reused verbatim by Tasks 3 and 4.

- [ ] **Step 1: Write `tools/mockups/callsign-board.html`**

A standalone HTML document with its own `<!doctype html>`, charset and viewport metas. Root element `.board`, exactly `1600×900`, `background:#0f1417`, fonts Space Grotesk and Space Mono loaded from Google Fonts to match `app/layout.tsx`.

Layout B from the spec: a left column (38 % width, right border `#1c2328`) holding the eyebrow `CLIENT PROJECT`, the title `Callsign`, the sentence "A two-sided web platform for training 911 dispatchers. Built, deployed and maintained by GenAILabs.", the tag pills `Next.js` / `Node` / `Tailwind`, and the line `3 ROLES · 12+ ADMIN SECTIONS`. A right column holding six numbered rows, `01`–`06` in orange `#ff5a1f`, separated by `1px solid #161c20`:

```
01  Trainee platform
02  Training system
03  Agency admin panel
04  Superadmin panel
05  Security & performance
06  SEO, GEO & maintenance
```

Names only — no descriptive tails. Feature-name font size **≥52px**; title ≥96px.

- [ ] **Step 2: Export the board**

Invoke the `/browse` skill and run:

```
goto file:///home/abir/repos/genai-site/tools/mockups/callsign-board.html
viewport 1600x900 --scale 3
screenshot /home/abir/repos/genai-site/public/figma/callsign-features.png --selector .board
```

Then downscale the 4800×2700 capture to exactly 1600×900 with `sharp`.

- [ ] **Step 3: Verify dimensions and background**

Run: `file public/figma/callsign-features.png`
Expected: `PNG image data, 1600 x 900`

Then Read the PNG. Confirm: all six rows present and legible, no clipped text, outer background is `#0f1417` (Review Focus 2).

- [ ] **Step 4: Write `tools/mockups/README.md`**

Record the three `/browse` commands, the `sharp` downscale, the `#0f1417` background rule and the 52 px type floor, so any image regenerates without re-deriving them.

- [ ] **Step 5: Commit**

```bash
git add tools/mockups/README.md tools/mockups/callsign-board.html public/figma/callsign-features.png
git commit -m "feat: add Callsign feature board image and mockup pipeline"
```

---

### Task 2: Callsign rename and hero wiring

**Files:**
- Modify: `components/dispatch-training-case-study-page.tsx` (lines 22, 262, 277–285, 485)
- Modify: `app/case-study/dispatch-training/page.tsx:10`

**Interfaces:**
- Consumes: `public/figma/callsign-features.png` from Task 1.
- Produces: exported `const PROJECT_NAME = "Callsign"` from `components/dispatch-training-case-study-page.tsx`, the single source for the name.

- [ ] **Step 1: Add the name constant**

At the top of `components/dispatch-training-case-study-page.tsx`, above `heroTags`:

```tsx
// Temporary codename — swap for the client's product name when it is decided.
export const PROJECT_NAME = "Callsign";
```

- [ ] **Step 2: Replace the three hard-coded name strings**

Lines 262 (the `<h1>`), 281 (the hero `alt`) and 485 (the gallery `alt`, inside a template literal) all read "Dispatch Training Platform". Each becomes an interpolation of `PROJECT_NAME`. Line 485's template literal keeps its `${screen.title.toLowerCase()}` tail.

- [ ] **Step 3: Rewrite the placeholder snapshot line**

`snapshot[0].value` at line 22 currently reads "A web platform for training 911 dispatchers. Product name not finalized, so a generic title is used". Replace with wording that says the client's product name is not public and this case study refers to the project by the internal name Callsign. The claim must stay true: Callsign is ours, not the client's brand.

- [ ] **Step 4: Point the hero at the board and stop cropping it**

In the hero block at lines 277–285, change the `ImageLightbox` `src` to `/figma/callsign-features.png`, add `fit="contain"`, and update the caption pill below it — it currently reads "Trainee screen · design not final", which no longer describes a feature board.

- [ ] **Step 5: Verify the rename is complete**

Run: `grep -rn "Dispatch Training Platform" app components`
Expected: no matches (Review Focus 5).

- [ ] **Step 6: Update the route metadata title**

`app/case-study/dispatch-training/page.tsx:10` reads `"Dispatch Training Platform Case Study | GenAILabs"`. Use `Callsign`. Import `PROJECT_NAME` rather than retyping it.

- [ ] **Step 7: Verify lint, types and build**

Run: `npm run lint && npx tsc --noEmit && npm run build`
Expected: all three pass.

- [ ] **Step 8: Verify mobile legibility**

Start `npm run dev`, then via `/browse`: `viewport 390x844`, `goto http://localhost:3000/case-study/dispatch-training`, `screenshot`. Read the PNG. Confirm the six feature names are readable at rest, without opening the lightbox (Review Focus 1).

- [ ] **Step 9: Commit**

```bash
git add components/dispatch-training-case-study-page.tsx app/case-study/dispatch-training/page.tsx
git commit -m "feat: rename dispatch project to Callsign and lead with the feature board"
```

---

### Task 3: VendorHub phone chrome and the Messages screen

**Files:**
- Create: `tools/mockups/phone.css`
- Create: `tools/mockups/vendorhub-messages.html`
- Overwrite (output): `public/figma/vendorhub/messages.png`

**Interfaces:**
- Consumes: the `/browse` + `sharp` commands recorded in `tools/mockups/README.md` (Task 1).
- Produces: `tools/mockups/phone.css`, exporting the classes `.canvas` (1:2 backdrop), `.phone` (bezel) and `.screen` (390×844 viewport), reused unchanged by Task 4.

- [ ] **Step 1: Write `tools/mockups/phone.css` — treatment C**

- `.canvas` — export canvas, exactly **1280×2560** (1:2, Review Focus 3). Background: `radial-gradient(130% 90% at 50% 0%, rgba(255,90,31,.18) 0%, rgba(15,122,99,.10) 38%, #0f1417 72%)`. The gradient must reach `#0f1417` at every edge (Review Focus 2).
- `.phone` — centred, 1050 px wide, black bezel, rounded corners, `box-shadow` drop shadow plus a warm rim light `0 0 0 1px rgba(255,90,31,.22)`. At least 60 px of backdrop on every side.
- `.screen` — 390×844 logical viewport scaled to fill `.phone`, background `#f4f5f3`.
- `.monogram` — circular avatar, white bold initials on a solid fill.

- [ ] **Step 2: Write `tools/mockups/vendorhub-messages.html`**

Reproduce the existing `public/figma/vendorhub/messages.png` faithfully: 9:41 status bar, `Messages` heading, the filter chips `All · 12` / `Unread · 3` / `Ripe Market` / `Al Quoz`, and the bottom tab bar `Home / Events / Applicants / Messages / Company` with Messages active in teal `#0f7a63`.

The four existing rows keep their exact text — `Noor's Ceramics · A4`, `Karak Corner · B3`, `Bloom & Co · C7`, `Desert Brew · B1` — with their messages, timestamps and unread badges, and the first row keeps its teal selected background. Photographic avatars become `.monogram` circles.

The screen is ~40 % empty below those four rows; add two further rows in the same visual language to fill it. Their content is invented, so keep it generic — no new named real places or prices.

- [ ] **Step 3: Export and verify**

Export per `tools/mockups/README.md`, targeting `--selector .canvas`, downscaling to exactly 1280×2560.

Run: `file public/figma/vendorhub/messages.png`
Expected: `PNG image data, 1280 x 2560`

Then Read the PNG. Confirm: text is crisp at full size, the backdrop reaches `#0f1417` at all four edges, monograms replaced every photo, and the four original rows match the old PNG's wording.

- [ ] **Step 4: Verify it sits correctly in the gallery slot**

With `npm run dev` running, `/browse` to `http://localhost:3000/case-study/vendorhub` at `viewport 1440x900`, screenshot, and Read it. Confirm no visible letterbox band around the Messages tile (Review Focus 2 and 3).

- [ ] **Step 5: Commit**

```bash
git add tools/mockups/phone.css tools/mockups/vendorhub-messages.html public/figma/vendorhub/messages.png
git commit -m "feat: redraw VendorHub Messages screen at 3x"
```

---

### Task 4: The remaining three VendorHub screens

**Files:**
- Create: `tools/mockups/vendorhub-home.html`, `tools/mockups/vendorhub-event.html`, `tools/mockups/vendorhub-floor-plan.html`
- Create: `public/figma/vendorhub/photos/` (generated market photography)
- Overwrite (output): `public/figma/vendorhub/{home,event,floor-plan}.png`

**Interfaces:**
- Consumes: `.canvas` / `.phone` / `.screen` / `.monogram` from `tools/mockups/phone.css` (Task 3), unchanged.
- Produces: three 1280×2560 PNGs at the paths already referenced by `components/vendorhub-case-study-page.tsx:144–147`. No component change.

- [ ] **Step 1: Source the market photography**

Four photos are needed: the `Ripe Market · Umm Suqeim` and `Al Ain Date Festival` cards on the home screen, and the hero plus thumbnail strip on the event screen. Sourcing ladder from the spec, in order: Figma MCP `generate_image`; licensed stock; a flat gradient card with a category icon. Save under `public/figma/vendorhub/photos/`.

Stop and report if all three rungs fail — rung 3 changes the card layout and is a visible design change, not a silent fallback.

- [ ] **Step 2: Write the three HTML files**

Each reuses `phone.css` unchanged and reproduces its source PNG faithfully:

- `vendorhub-home.html` — `Vendor Hub` brand row with `عربي` and `Log in`; headline "Every market booth in the UAE, one application away."; the sub-line about browsing events and applying; the `I'm a vendor` / `I run events` buttons; emirate chips `All UAE` / `Dubai` / `Abu Dhabi` / `Sharjah`; `Upcoming events` with `142 listed`; the two event cards with their exact badges, dates, counts and `AED 2,000 from`; and the footer row `Terms · Privacy · Help and support` plus the line **"No download badges on phone"**, reproduced verbatim — it is in the real app.
- `vendorhub-event.html` — `Ripe Market · Umm Suqeim`, `3–5 Oct 2026 · Fri–Sun · 4–11 pm`, the `Featured` and `DXB` badges, the thumbnail strip, the `91` match ring with "Strong match for Noor's Ceramics", the organiser row `Souq Makers Events · 4.8 · 12 events run · KYC verified` with its `Eligible` pill, the four stat tiles (`BOOTHS 6 / 48 left`, `PRICE AED 1,200–3,400`, `FOOTFALL ~25,000`, `APPLY BY 20 Sep`), the About paragraph, and the sticky footer `AED 2,000 from · 6 booths left` with `Pick a booth`.
- `vendorhub-floor-plan.html` — `Ripe Market · Hall A`, `48 booths · 6 available · 3–5 Oct`, the `Map` / `List` / `Available` / `Area` controls with zoom, the booth grid with its exact labels (`A1`–`A6`, `B1`–`B6`, `C1`–`C10`, `D1`–`D12`) and states, the legend `Available / Held / Sold / Premium`, the hint line about pinch-to-zoom, and the A4 detail card: `3 × 3 m / 9 m²`, `AED 2,500` with `2,000 + 500 premium`, `Entrance row · power`, `Total with 5 % VAT AED 2,625`, the cancellation terms, and `Apply for A4`.

- [ ] **Step 3: Export and verify all three**

Export each per `tools/mockups/README.md`.

Run: `file public/figma/vendorhub/{home,event,floor-plan}.png`
Expected: each `PNG image data, 1280 x 2560`

Read all three. Confirm every label, price and booth code matches its source PNG — a wrong figure here is a factual error on a client case study.

- [ ] **Step 4: Commit**

```bash
git add tools/mockups/vendorhub-*.html public/figma/vendorhub/
git commit -m "feat: redraw remaining VendorHub screens at 3x"
```

---

### Task 5: Hero composite and whole-page verification

**Files:**
- Create: `tools/mockups/vendorhub-hero.html`
- Overwrite (output): `public/figma/vendorhub-hero.png`

**Interfaces:**
- Consumes: the four screen HTML files and `phone.css` from Tasks 3 and 4.
- Produces: `public/figma/vendorhub-hero.png` at exactly 1600×800, the path already used at `vendorhub-case-study-page.tsx:268`.

- [ ] **Step 1: Write `tools/mockups/vendorhub-hero.html`**

A 1600×800 canvas composing the same four screens side by side, in the current order — home, event, floor-plan, messages — on the shared backdrop, reusing `phone.css`. Match the existing composite's staggered vertical offsets so the hero keeps its present rhythm.

- [ ] **Step 2: Export and verify**

Run: `file public/figma/vendorhub-hero.png`
Expected: `PNG image data, 1600 x 800`

- [ ] **Step 3: Enforce the page-weight budget**

Run: `ls -l public/figma/callsign-features.png public/figma/vendorhub-hero.png public/figma/vendorhub/*.png`
Expected: every file under 400 KB (Review Focus 4).

Any file over budget gets re-encoded with `sharp` — raise PNG compression first, and convert to WebP if that is not enough. A WebP conversion also renames the `src` in `components/vendorhub-case-study-page.tsx:144–147` and `:268`, which is why this check runs before the final build.

- [ ] **Step 4: Full verification**

Run: `npm run lint && npx tsc --noEmit && npm run build`
Expected: all three pass.

- [ ] **Step 5: Visual check of both pages**

With `npm run dev` running, `/browse` to `/case-study/vendorhub` and `/case-study/dispatch-training` at `viewport 1440x900` and `viewport 390x844`. Read all four screenshots. Confirm: no soft or stretched images, no letterbox seams, the board readable on mobile, and the dispatch gallery still showing the three original blurred screenshots with their captions intact.

- [ ] **Step 6: Commit**

```bash
git add tools/mockups/vendorhub-hero.html public/figma/vendorhub-hero.png
git commit -m "feat: rebuild VendorHub hero composite from redrawn screens"
```

---

## Self-Review

**Spec coverage.** Every spec section maps to a task: pipeline and board → Task 1; naming, the single constant, `fit="contain"`, the dropped wide export → Task 2; treatment C, monograms, dead-space rows → Task 3; the four screens and the photo ladder → Task 4; hero composite and verification → Task 5. The spec's "left to the builder" items (type scale within the approved layouts, PNG vs WebP, monogram colours, file organisation) are left open on purpose; PNG vs WebP is forced by the Task 5 size budget.

**Not covered, deliberately.** `work-grid.tsx` (out of scope per the user), the route slug and redirects (not changing), the three blurred dispatch screenshots (staying as-is).

**Type consistency.** `PROJECT_NAME` is defined in Task 2 Step 1 and used in Steps 2 and 6. `.canvas` / `.phone` / `.screen` / `.monogram` are defined in Task 3 Step 1 and reused unchanged in Tasks 4 and 5. Export dimensions are 1280×2560 for every screen and 1600×800 for the hero, consistently.

**Proportion.** The plan is roughly the length of the spec. Code blocks are confined to the one constant whose exact text matters, the gradient value, and the shell commands.
