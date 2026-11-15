# Case-study imagery: VendorHub redraw + 911 project rename & feature board

**Date:** 2026-11-15
**Status:** approved by the user, 2026-11-15
**Branch:** `feat/site-chatbot`

## Intent and why

The manager asked for "better photos for uae vendor and 922 … a screen shot of the 911
showing main features. Then use ai enhance the image. And put it under different name."

Two case studies on the GenAILabs marketing site carry imagery that undersells the work:

- **`/case-study/vendorhub`** (the UAE vendor app). Its four screen PNGs are 329–338 px
  wide and are rendered at roughly 360 CSS px in a `25vw` slot, so they are displayed at
  about half the resolution a retina screen needs. They look soft on every modern display.
- **`/case-study/dispatch-training`** (the 911 dispatcher training platform). Its hero is a
  raw browser screenshot that is roughly 70 % empty space with the scenario title and
  trainee name blurred out for privacy. It reads as an unfinished product, not a delivery.

The underlying goal is credibility: these pages exist to win work, and right now the
imagery argues against the quality of the engineering being described.

## Goals

- VendorHub app screens render crisply at 2–3× device pixel ratio.
- The 911 project leads with a graphic that communicates what was actually built, instead
  of a mostly empty blurred screenshot.
- The 911 project is presented under a project name rather than the placeholder label
  "Dispatch Training Platform".
- Image generation is repeatable: when copy or the name changes, the images regenerate
  from source rather than being hand-edited.

## Non-goals

- Redesigning either case-study page's layout, copy or sections.
- Touching any other case study.
- Changing the VendorHub app's actual visual design. The redraw reproduces the existing
  design; it does not improve it.
- A general-purpose mockup system. Two one-off generators are enough.

## Anti-goals

Things that would make this a failure even if it technically shipped:

- **Fabricated UI text.** Any image that presents invented numbers, labels or content as
  though it were the real product. This rules out AI upscaling of the VendorHub PNGs:
  at 331 px wide, upscalers rewrite 8 px glyphs (`AED 2,500`, booth labels `A1`/`B3`/`C7`)
  into convincing nonsense.
- **A fake product name presented as the client's brand.** The client's product name is not
  finalised and is not ours to invent. See "Naming" below.
- **Images that are prettier but less honest** than the blurred screenshots they replace.

## Constraints

Verified against the repo on 2026-11-15:

| Constraint | Evidence |
|---|---|
| No VendorHub source: no Figma file, no running app. Only the four PNGs and the 1600×800 hero composite. | User, this conversation |
| VendorHub screens are 329–338 × 691–693 px | `file public/figma/vendorhub/*.png` |
| Both image slots use `object-cover` | `work-grid.tsx:384`, `image-lightbox.tsx:26` |
| `/case-study/dispatch-training` is `noindex` and excluded from the sitemap | `app/sitemap.ts:7` |
| No inbound links to the dispatch route outside the repo | It is pre-launch and unindexed |
| `sharp` resolves in this project | `node -e "require.resolve('sharp')"` |
| No Playwright/Puppeteer in `node_modules/.bin` | `ls node_modules/.bin` |
| gstack `/browse` can render `file://` HTML at `--scale 1–3` and screenshot by selector | `~/.claude/skills/gstack/browse/SKILL.md:565,573,586` |
| The page currently states the name is a placeholder: "Product name not finalized, so a generic title is used" | `dispatch-training-case-study-page.tsx:22` |
| Existing precedent for code-rendered marketing images | `gen-insight-posters.mjs` (SVG → `sharp` → 1600×900 WebP) |

## Approaches considered

**1. AI image generation / AI upscale.** Prompt an image model, or run the existing PNGs
through Real-ESRGAN / Topaz / Magnific at 3×. Fastest. Rejected: image models garble UI
text, and upscalers hallucinate small glyphs. Both land squarely on the first anti-goal.
This is the literal reading of the manager's "use ai enhance the image", and it is the one
part of his instruction this design does not follow — see "Deviation" below.

**2. Compose without resampling.** Build a scene where each phone sits at ≤1:1 of its
native pixels (~165 CSS px wide) surrounded by code-drawn frames, callouts and background.
Everything stays sharp, nothing is invented. Rejected as the primary path: the phones end
up small enough that the four-up "screen by screen" gallery stops working. Retained as the
fallback if the redraw proves too costly.

**3. Redraw the UI as HTML, export at 3× (chosen).** The VendorHub screens are flat UI —
teal, white cards, system type. Rebuild them as HTML/CSS reading content off the existing
PNGs, then screenshot at 3×. Infinitely sharp, editable forever, and the same pipeline
produces the 911 feature board. Cost: roughly four screens of markup plus generated
photography for the two screens that contain market photos.

**Chosen: 3**, with 2 as the documented fallback.

### Deviation from the original instruction

The manager asked for AI enhancement. This design uses AI only for *photographic* content
(the market photos inside two VendorHub screens), never for UI pixels or text. If he
specifically wants the upscaler route, that reverses approach 1 above and should be an
explicit decision — the cost is fabricated text on a client case study.

## Decisions taken in conversation

| Decision | Choice | Who |
|---|---|---|
| VendorHub path | Redraw as HTML, export 3× | User |
| 911 board layout | **B — editorial spine**: name and context in a left column, six numbered feature rows on the right | User (terminal + browser click `choice:"spine"`) |
| VendorHub framing | **C — framed + backdrop**: phone bezel, plus a baked-in orange→teal radial gradient and warm rim light | User |
| Avatars in Messages screen | Monogram circles, not AI portraits | User |
| Project name | `ClearLine` — a deliberately temporary placeholder, to be swapped when the client settles the real name | Claude (user asked for "a clean and professional made up name now") |
| Scope of the rename | Display name only; the route slug stays `/case-study/dispatch-training` | Claude |
| VendorHub PNG provenance | Real app images. Redraw must reproduce their content faithfully. | User |
| AI photography of named real places | Acceptable | User |
| `work-grid.tsx` dispatch entry | Not part of this work; do not touch | User |

## Design

### Naming

Rename the project from "Dispatch Training Platform" to **ClearLine**, presented as a
**GenAILabs project codename**, not as the client's product brand. The snapshot line at
`dispatch-training-case-study-page.tsx:22` changes from "Product name not finalized, so a
generic title is used" to wording that says the client's product name is not public and
this case study refers to the project by its internal name. This keeps the page honest
while giving the manager the named project he asked for.

**The name is explicitly temporary** — the user expects to swap it for the client's real
name later. That drives two decisions:

1. **The route slug does not change.** `/case-study/dispatch-training` stays. It is
   `noindex`, absent from the sitemap, and pre-launch, so nobody reaches it by URL.
   Renaming the slug now would cost a redirect now and a second redirect when the real
   name lands. One rename later beats two.
2. **The name lives in one constant** at the top of the component, referenced everywhere
   else, so the future swap is a one-line change rather than a hunt through the file.

Files touched by the rename: `components/dispatch-training-case-study-page.tsx` (the new
constant, plus the three hard-coded "Dispatch Training Platform" strings at lines 262, 281
and 485) and `app/case-study/dispatch-training/page.tsx` (`metadata.title` only). No route
move, no `lib/redirects.ts` change, no `app/sitemap.ts` change, and — per the user —
no `components/work-grid.tsx` change.

Name diligence: a web search of the dispatch-training vertical found no product called
ClearLine. Incumbents are Vector Solutions, PowerPhone, PowerDMS, Lexipol, Equature,
Priority Dispatch (AI SkillLab) and Eventide. This was not a trademark search.

### The 911 feature board

Content comes verbatim from the six `contributions` entries already in the component
(trainee platform, training system, agency admin panel, superadmin panel, security &
performance, SEO/GEO & maintenance). Nothing is invented.

Layout B, as approved:

```
┌─────────────────────────────────────────────────────────────┐
│ CLIENT PROJECT              │ 01  Trainee platform          │
│                             │ 02  Training system           │
│ DispatchSim                 │ 03  Agency admin panel        │
│                             │ 04  Superadmin panel          │
│ A two-sided web platform    │ 05  Security & performance    │
│ for training 911 dispatch-  │ 06  SEO, GEO & maintenance    │
│ ers. Built, deployed and    │                               │
│ maintained by GenAILabs.    │                               │
│                             │                               │
│ [Next.js][Node][Tailwind]   │                               │
│ 3 ROLES · 12+ ADMIN SECTIONS│                               │
└─────────────────────────────────────────────────────────────┘
```

**Aspect-ratio constraint.** The hero slot is `h-[360px]` with `flex-1` at `sizes="32vw"`
— roughly 460×360 (≈1.28:1) on a 1440 px viewport — and it crops with `object-cover`
(`image-lightbox.tsx:26`). A 16:9 board would lose about 45 % of its width there, cutting
the feature rows in half.

Fix: change the dispatch hero's `ImageLightbox` to `fit="contain"`. The prop already
exists and the VendorHub gallery uses it (`vendorhub-case-study-page.tsx:384`). One
1600×900 export then shows whole in both the hero and the lightbox.

The work-grid card variant is **dropped**: the user confirmed the uncommitted dispatch
entry in `work-grid.tsx` is not part of this work, so that export has no consumer.

Type must be sized for the *rendered* size, not the export size. **Mobile is the binding
case** (my call, added after builder check): the hero container is `max-[640px]:h-[240px]`
(`dispatch-training-case-study-page.tsx:278`), so on a 390 px viewport a contained
1600×900 board renders at roughly 342×192 — a scale factor of 0.21, the worst of the three.

Sizing rule: **no text on the hero board may render below 11 px at the 640 px breakpoint**,
which puts a floor of 52 px on the feature names in the 1600 px export. At that size they
render ~15 px on a 1440 px desktop, so one export serves every case. The board carries the
six feature *names* only — the short descriptive tails are dropped, since there is no
longer a wider variant to hold them and they will not survive the mobile size floor.

Tap-to-open-lightbox is not the mobile answer — the board must read at rest.

### VendorHub screens

Four screens redrawn: `home`, `event`, `floor-plan`, `messages`. Treatment C for each —
phone bezel, radial gradient backdrop (site orange `#ff5a1f` into the app's teal
`#0f7a63`), warm rim light. Exported at 3× from a 390×844 logical viewport → 1170×2532.

Two corrections to the current content while redrawing:

- **Dead space.** The Messages screen currently shows four rows with roughly 40 % of the
  screen empty. The redraw carries six to seven rows.
- **Avatars.** The current rows use photographic portraits that cannot be reused at 3×
  (15 px faces do not upscale). Replaced with monogram circles, per the user's decision.

The `home` and `event` screens contain market photography. These are the only generated
pixels in this work, and they sit inside card thumbnails, not as UI chrome.

**Sourcing ladder** (my call, added after builder check — no image-generation dependency
exists in this repo, and the `imagic` MCP server failed to connect this session):

1. Figma MCP `generate_image`, if reachable.
2. Licensed stock.
3. Non-photographic treatment — a flat gradient card with a category icon — which requires
   a small change to the card layout in the redraw.

The photos carry captions naming specific real places ("Ripe Market · Umm Suqeim",
"Al Ain Date Festival"). Attaching a generated photo to a named real location is the same
class of problem as anti-goal #1. This is not mine to wave through — see open questions.

The 1600×800 `vendorhub-hero.png` composite is rebuilt from the same four redrawn screens
so the hero and the gallery agree.

### Pipeline

One HTML file per image, rendered and screenshotted via the gstack `/browse` skill:

```
$B goto file:///…/tools/mockups/<name>.html
$B viewport <W>x<H> --scale 3
$B screenshot public/figma/<out>.png --selector .board
```

No new dependency: `/browse` is already installed and `sharp` already resolves for any
post-processing (WebP conversion, exact-size crops). `gen-insight-posters.mjs` is the
existing precedent for committing a generator alongside its output.

Source HTML is committed under `tools/mockups/` so every image can be regenerated when the
name or the copy changes. Outputs:

| Output | Size | Replaces |
|---|---|---|
| `public/figma/clearline-features.png` | 1600×900 | hero image |
| `public/figma/vendorhub/{home,event,floor-plan,messages}.png` | 1170×2532 | the four soft PNGs |
| `public/figma/vendorhub-hero.png` | 1600×800 | rebuilt composite |

The three existing `dispatch-training-*.png` screenshots **stay** in the "screen by screen"
gallery, honestly captioned as blurred real screens. They are the page's only evidence that
the product exists; the feature board replaces only the hero and the card. This is a
proposal, not something the user decided — see open questions.

## What is left to the builder

- Exact type scale, spacing and grid inside each generated image, within the approved
  layouts.
- Whether outputs are PNG or WebP. WebP is smaller; `public/figma/` is currently all PNG.
- Monogram colour assignment.
- Whether `tools/mockups/` holds one HTML file per screen or one file with named sections.
- The wording of the replacement snapshot line about the name.

## Open questions for the user

Raised by the builder check and verified against the repo on 2026-11-15. **All six are
settled**; their answers are recorded in the decisions table above.

(4) **No client sign-off is required.** The user confirmed the work ships normally: build,
lint, typecheck, build, land. Nothing is staged behind an unmerged branch on this account.

**Resolved:** (1) the VendorHub PNGs are real app images, so the redraw reproduces their
content faithfully — the honesty concern is retired; (2) `ClearLine` is an accepted
temporary placeholder, display-name only; (3) AI photography of named real places is
acceptable; (5) the `work-grid.tsx` entry is out of scope; (6) the three blurred
screenshots stay in the gallery, as proposed.

One note carried forward from (1): `home.png` shows the line "No download badges on phone"
in its footer. Since these are real app images, the redraw reproduces it. It reads like a
leftover authoring note in the app itself and is worth raising with the client — but
silently dropping it would mean the case study no longer matches the product.

1. **Are the four VendorHub PNGs a depiction of the real app, or invented mockups?**
   Evidence says invented: `home.png` carries the text "No download badges on phone" in its
   bottom-right corner — an authoring instruction that leaked into the render — plus a 9:41
   status bar, a baked-in bezel, idealised marketing copy and tidy sample data. All five
   files landed in one commit, `52d502d` "add: vendor hub images" (11 Nov), with no source.
   Contrast `dispatch-training-trainee.png`, which is unmistakably a real capture.

   This can invert the whole approach. The design assumes the PNG content is product truth
   that the redraw must preserve faithfully. If that content was invented, redrawing it at
   3× makes fabricated UI *more* convincing and lands harder on anti-goal #1 than the soft
   originals do. If the mockups were approved by the client as a depiction of the app, the
   plan stands as written. **Nothing gets built until this is settled.**

2. **Is `DispatchSim` approved, and by whom — the manager or the client?** Not just a
   filename: it becomes a public URL, a `metadata.title`, the h1, and a card title on the
   public `/work` page. The "GenAILabs project codename, not the client's brand" framing is
   itself a positioning decision someone has to sign off.

3. **Is AI photography of named real UAE places acceptable?** See the sourcing ladder above.
   If not, the screens need generic imagery or the captions have to change.

4. **Is client sign-off a gate on merging, or only on publishing?** Both are live client
   engagements whose pages say the design is not finalised. This work publishes a
   higher-fidelity reproduction of a client's UI plus a public codename for a project whose
   name is explicitly not public. If approval gates merging, the work gets staged on an
   unmerged branch rather than landed — a different plan shape.

5. **Is the uncommitted `work-grid.tsx` dispatch entry part of this work?** That entry is a
   working-tree change on `feat/site-chatbot`, in no commit. If it is reverted or rewritten
   elsewhere, `dispatchsim-features-wide.png` has no consumer and the rename edits conflict.

6. **Do the three blurred screenshots stay in the gallery?** The design keeps them. Removing
   them makes the page prettier and strips its only product evidence.

## Verification

No test runner in this project (`AGENTS.md`). Validate with:

```bash
npm run lint
npx tsc --noEmit
npm run build      # required: route change
```

Then check both pages in `npm run dev` at 1440 and 390 px wide, and confirm the old
`/case-study/dispatch-training` URL redirects.
