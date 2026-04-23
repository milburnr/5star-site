# Image Manifest — Hero Mapping

**Purpose:** the authoritative map of *which page uses which image slug*, *which template file consumes it*, and *what aspect ratio / dimensions it must land at*. Consumed by **Phase 13** to wire generated images into templates.

**Prompts live in:** `IMAGE-PROMPTS.md` (Nano Banana 2 format)
**Target R2 path:** `images/heroes/[slug].[ext]` where ext ∈ {avif, webp, jpg}
**Canonical dimensions:** 2560 × 1440 px, 16:9, AVIF primary

---

## Brand-Wide Heroes (8)

| Slug | Page URL(s) | Template file | Notes |
|---|---|---|---|
| `home-hero` | `/` | `app/page.tsx` | Replaces current homepage hero background. Wire via `.hero-home` class in `globals.css:102-107`. |
| `services-hero` | `/services/` | `app/services/page.tsx` | New hero section added in Phase 12 task 12.1. Wire as CSS background-image on the new `<section>`. |
| `hero-commercial` | `/commercial-roofing/` | `app/commercial-roofing/page.tsx` (or hub file) | Commercial hub page hero. |
| `hero-residential` | `/residential-roofing/` | `app/residential-roofing/page.tsx` | Residential hub page hero. |
| `hero-hail-damage` | `/hail-damage-repair-amarillo/`, any `/hail-*-[city]/` variant | Hail damage templates | Dominant hail page + all hail spoke pages. |
| `hero-storm` | `/storm-damage-repair-amarillo/`, any `/storm-*-[city]/` variant | Storm damage templates | Dominant storm page + spokes. |
| `hero-inspection` | `/roof-inspection/`, `/free-inspection/`, any inspection-themed page | Inspection templates | Includes two people (homeowner + contractor, no safety gear). |
| `hero-metal-roof` | `/metal-roofing/` | `app/metal-roofing/page.tsx` | Standing-seam metal roof hero. |

---

## City-Specific Heroes (24)

One hero slug per city. The slug applies to the city hub page AND every service-spoke under that city (e.g., `amarillo-hero` is used by `/amarillo-texas-roofing/` AND `/roof-repair-amarillo/` AND `/hail-damage-repair-amarillo/`'s city header AND so on).

| Slug | Primary page URL | Also used by | Template |
|---|---|---|---|
| `amarillo-hero` | `/amarillo-texas-roofing/` | `/roof-repair-amarillo/`, `/roof-replacement-amarillo/`, `/commercial-roofing-amarillo/`, all other `*-amarillo/` spokes | City + spoke templates |
| `borger-hero` | `/borger-tx-roofing/` (or equivalent) | all `*-borger/` spokes | City + spoke templates |
| `canyon-hero` | `/canyon-tx-roofing/` | all `*-canyon/` spokes | City + spoke templates |
| `channing-hero` | `/channing-tx-roofing/` | all `*-channing/` spokes | City + spoke templates |
| `clarendon-hero` | `/clarendon-tx-roofing/` | all `*-clarendon/` spokes | City + spoke templates |
| `dalhart-hero` | `/dalhart-tx-roofing/` | all `*-dalhart/` spokes | City + spoke templates |
| `dumas-hero` | `/dumas-tx-roofing/` | all `*-dumas/` spokes | City + spoke templates |
| `earth-hero` | `/earth-tx-roofing/` | all `*-earth/` spokes | City + spoke templates |
| `hereford-hero` | `/hereford-tx-roofing/` | all `*-hereford/` spokes | City + spoke templates |
| `levelland-hero` | `/levelland-tx-roofing/` | all `*-levelland/` spokes | City + spoke templates |
| `lubbock-hero` | `/lubbock-tx-roofing/` | all `*-lubbock/` spokes | City + spoke templates |
| `memphis-hero` | `/memphis-tx-roofing/` | all `*-memphis/` spokes | City + spoke templates |
| `midland-hero` | `/midland-tx-roofing/` | all `*-midland/` spokes | City + spoke templates |
| `morton-hero` | `/morton-tx-roofing/` | all `*-morton/` spokes | City + spoke templates |
| `odessa-hero` | `/odessa-tx-roofing/` | all `*-odessa/` spokes | City + spoke templates |
| `pampa-hero` | `/pampa-tx-roofing/` | all `*-pampa/` spokes | City + spoke templates |
| `perryton-hero` | `/perryton-tx-roofing/` | all `*-perryton/` spokes | City + spoke templates |
| `plainview-hero` | `/plainview-tx-roofing/` | all `*-plainview/` spokes | City + spoke templates |
| `quitaque-hero` | `/quitaque-tx-roofing/` | all `*-quitaque/` spokes | City + spoke templates |
| `san-angelo-hero` | `/san-angelo-tx-roofing/` | all `*-san-angelo/` spokes | City + spoke templates |
| `sanderson-hero` | `/sanderson-tx-roofing/` | all `*-sanderson/` spokes | City + spoke templates |
| `stinnett-hero` | `/stinnett-tx-roofing/` | all `*-stinnett/` spokes | City + spoke templates |
| `wichita-falls-hero` | `/wichita-falls-tx-roofing/` | all `*-wichita-falls/` spokes | City + spoke templates |
| `wolfforth-hero` | `/wolfforth-tx-roofing/` | all `*-wolfforth/` spokes | City + spoke templates |

**Source of truth for city slugs:** `hero-manifest.json` at repo root lists all 24 cities with their current `r2Path` and `urls`. Phase 13 will replace each entry in-place.

**Exact URL confirmation:** the `Primary page URL` column above uses the `[city]-tx-roofing/` convention that matches Phase 6 hub pages. Executor must `grep -r "[city]" app/` to find the actual hub file name before wiring (some city pages use a different naming convention).

---

## Pages that DO NOT need new heroes

These pages already have good imagery or are not hero-driven:

- `/contact/` — currently uses a rich real roof photo that works well. **Leave alone.**
- `/gallery/` — gallery grid, no hero. **Leave alone.**
- `/about/` — owner's preference, not currently audited. **Leave alone unless Rich says otherwise.**
- `/blog/` and `/blog/[slug]/` — blog posts use their own featured images.
- `/reviews/` — testimonial-driven, no hero needed.
- `/sitemap/`, `/privacy/`, `/terms/` — utility pages.

---

## Dimensions & export rules

All 32 slugs land at:
- **Master:** 2560 × 1440 px, 16:9
- **AVIF** (primary delivery) — quality 50, target 120-180 KB
- **WebP** (fallback) — quality 82, target 200-300 KB
- **JPG** (legacy fallback) — quality 82, target 300-450 KB

Template markup must include both `width` and `height` attributes (or `aspect-ratio: 16/9` inline style) to prevent CLS on lazy swap.

Example template wiring:
```tsx
<section
  className="hero hero-services"
  style={{
    backgroundImage: "url('https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/services-hero.avif')",
    aspectRatio: "16 / 9",
  }}
>
  {/* hero content */}
</section>
```

Or as an `<img>`:
```tsx
<img
  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/services-hero.avif"
  width={2560}
  height={1440}
  alt="West Texas roofing crew walking toward a luxury limestone ranch home at sunrise"
  className="absolute inset-0 w-full h-full object-cover"
  loading="eager"
  fetchPriority="high"
/>
```

---

## Phase 13 execution checklist

Phase 13 consumes this manifest and IMAGE-PROMPTS.md. Checklist:

- [ ] All 32 prompts generated in Nano Banana 2 (4 variants each)
- [ ] All 32 winners pass the Acceptance checklist in IMAGE-PROMPTS.md
- [ ] All 32 winners exported to AVIF + WebP + JPG at 2560 × 1440
- [ ] All 32 sets uploaded to R2 at `images/heroes/[slug].[ext]`
- [ ] `hero-manifest.json` updated for 24 cities with new `r2Path` + `urls`
- [ ] Homepage `.hero-home` wired to `home-hero`
- [ ] `/services/` hero wired to `services-hero`
- [ ] `/commercial-roofing/`, `/residential-roofing/`, `/metal-roofing/` wired to their respective heroes
- [ ] Hail / storm / inspection templates wired
- [ ] All new hero markup has explicit `width`+`height` or `aspect-ratio` (CLS guardrail)
- [ ] Alt text written for every hero (one sentence each, descriptive, no keyword stuffing)
- [ ] Playwright screenshot diff at 1440px for home + services + commercial + residential + 1 city page (confirm new image renders)
- [ ] Lighthouse CLS delta measured — must stay < 0.05 on each checked URL
