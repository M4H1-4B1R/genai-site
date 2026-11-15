# Mockup image generation

Marketing images for the case-study pages are authored here as HTML and rendered to PNG by
the gstack `/browse` headless browser. The HTML is the source of truth: when copy, a name
or a price changes, edit the HTML and re-export rather than touching the PNG.

No npm dependency is added for this. `/browse` ships with gstack and `sharp` already
resolves in this project.

## Regenerating an image

```bash
B=$(/home/abir/.claude/skills/gstack/browse/bin/find-browse)

# 1. Set the viewport to the image's logical size, at 3x for supersampled text.
$B viewport <W>x<H> --scale 3

# 2. Load the source file. Must live under the repo (browse is scoped to cwd/$TMPDIR).
$B goto file://$PWD/tools/mockups/<name>.html

# 3. Wait for the Google Fonts request, or the capture lands in a fallback face.
$B wait --networkidle

# 4. Capture the root element. The selector is POSITIONAL, not --selector.
$B screenshot .board /tmp/<name>-3x.png

# 5. Downscale the 3x capture to the final size.
node -e "
const sharp=require('sharp');
sharp(process.argv[1]).resize(<W>,<H>,{fit:'fill'}).png({compressionLevel:9,palette:true})
  .toFile('public/figma/<out>.png').then(i=>console.log(i.width+'x'+i.height, i.size));
" /tmp/<name>-3x.png
```

Rendering at 3× and downscaling to 1× is supersampling: the final PNG is 1× but its text
is antialiased from nine subpixels. `--scale` is capped at 3 by gstack policy.

## Rules every mockup follows

- **Outer background is `#0f1417`.** It must match the slot background in
  `components/shared/image-lightbox.tsx`, or `object-contain` letterboxing shows a visible
  rectangle around the image.
- **Minimum type size on the ClearLine board is 52 px** in the 1600 px export. The hero is
  `max-[640px]:h-[240px]`, so a contained board renders at roughly 0.21 scale on a phone;
  anything under 52 px drops below 11 px there and stops being readable.
- **Phone screens export at exactly 1:2** (1280×2560). The VendorHub gallery slot is
  `aspect-[1/2]`; a native 1:2.164 phone aspect would letterbox and expose the backdrop's
  edges.
- **Every export stays under 400 KB** so the case-study pages don't regress LCP.
- Load Space Grotesk and Space Mono from Google Fonts to match `app/layout.tsx`, and always
  declare a system fallback — an offline render silently substitutes the fallback face.

## Encoding

Step 5 writes WebP, not PNG. Measured on this image set, palette PNG beat *lossless* WebP
on the flat UI screens, but lossy WebP beat both by a wide margin with no visible loss:
the four VendorHub screens went from 1303 KB as PNG to 559 KB. Use `quality: 92` for flat
UI and `quality: 85` where a screen carries photography.

```js
.webp({ quality: 92, effort: 6 })   // flat UI: board, floor-plan, messages
.webp({ quality: 85, effort: 6 })   // photo-bearing: home, event
```

`vendorhub-hero.png` is the one exception and stays PNG, because
`components/work-grid.tsx` also points at it; changing its extension would break the `/work`
page. It is 247 KB, inside the budget, so there is nothing to gain by converting it.

## Files

| Source | Export | Used by |
|---|---|---|
| `clearline-board.html` | `public/figma/clearline-features.webp` (1600×900) | `/case-study/dispatch-training` hero |
| `vendorhub-home.html` | `public/figma/vendorhub/home.webp` (1280×2560) | `/case-study/vendorhub` gallery |
| `vendorhub-event.html` | `public/figma/vendorhub/event.webp` (1280×2560) | `/case-study/vendorhub` gallery |
| `vendorhub-floor-plan.html` | `public/figma/vendorhub/floor-plan.webp` (1280×2560) | `/case-study/vendorhub` gallery |
| `vendorhub-messages.html` | `public/figma/vendorhub/messages.webp` (1280×2560) | `/case-study/vendorhub` gallery |
| `vendorhub-hero.html` | `public/figma/vendorhub-hero.png` (1600×800) | `/case-study/vendorhub` hero, `/work` card |

`vendorhub-hero.html` has no screen markup of its own: it CSS-crops the phone out of the
four exported screens (the phone sits at 68,63 and measures 1144×2433 in a 1280×2560
export), so re-exporting a screen and then the hero keeps them in sync.

`public/figma/vendorhub/photos/` holds the photography, cropped out of the original app
screenshots and upscaled 4× with Lanczos. Each photo keeps the app's own baked-in overlay
text — badges, card titles, the event hero's title and date — so the HTML must not redraw
those labels, and must render the photos at natural aspect (`height:auto`); cover-cropping
clips them.
