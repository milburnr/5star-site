# Phase 13: AI Hero Image Wiring Summary

Wired 30 AI-generated hero images (from R2) into the 5 Star Roofing site across homepage, hub pages, and city location pages.

## Pages Updated with New AI Heroes

### Homepage
- `/` -- `home-hero.jpg` via `.hero-home` CSS class in `globals.css`

### Brand-Wide Hub Pages
- `/commercial-roofing/` -- `hero-commercial.jpg` (inline `<img>`)
- `/residential-roofing/` -- `hero-residential.jpg` (inline `<img>`)
- `/metal-roofing/` -- `hero-metal-roof.jpg` (inline `<img>`)
- `/hail-damage-repair-amarillo/` -- `hero-hail-damage.jpg` (inline style backgroundImage)
- `/storm-damage-repair-amarillo/` -- `hero-storm.jpg` (inline style backgroundImage)

### City Hub Pages (12 pages with hero sections)
- `/amarillo-texas-roofing/` -- `amarillo-hero.jpg`
- `/borger-texas-roofing/` -- `borger-hero.jpg`
- `/canyon-texas-roofing/` -- `canyon-hero.jpg`
- `/dumas-texas-roofing/` -- `dumas-hero.jpg`
- `/hereford-texas-roofing/` -- `hereford-hero.jpg`
- `/levelland-tx-roofing/` -- `levelland-hero.jpg`
- `/lubbock-tx-roofing/` -- `lubbock-hero.jpg`
- `/midland-tx-roofing/` -- `midland-hero.jpg`
- `/odessa-tx-roofing/` -- `odessa-hero.jpg`
- `/pampa-texas-roofing/` -- `pampa-hero.jpg`
- `/perryton-texas-roofing/` -- `perryton-hero.jpg`
- `/plainview-texas-roofing/` -- `plainview-hero.jpg`

### Spoke Pages
- `/roof-repair-amarillo/` -- `amarillo-hero.jpg` (hero-location CSS variable pattern)

## Skipped (and Why)

- **services-hero** -- not generated; `/services/` page left as-is with its existing placeholder image
- **wolfforth-hero** -- not generated; wolfforth pages untouched
- **hero-inspection** -- no dedicated `/roof-inspection/` or `/free-inspection/` page exists
- **11 cities without hub pages** (channing, clarendon, dalhart, earth, memphis, morton, quitaque, san-angelo, sanderson, stinnett, wichita-falls) -- manifest updated but no page template to wire into; these cities only have service-spoke pages that don't use city hero backgrounds

## How City Pages Load Heroes

**Hardcoded, not manifest-driven.** Each city page has an inline `backgroundImage` style pointing directly at an R2 URL. The `hero-manifest.json` is a reference document -- it is not imported or consumed at build time. All updates were direct URL replacements in individual page files.

## Additional Changes

- `.hero-location` CSS overlay reduced from 0.85/0.6/0.4 opacity to 0.4/0.25/0.15 -- the new AI sunset images are warm enough without a heavy gradient

## Build Status

`npx next build` passes with zero errors. All 268 pages render successfully.

## Commits

| Hash | Message |
|------|---------|
| `ff8e1e1e` | feat(13): update hero-manifest.json with 23 new AI-generated hero slugs |
| `ea3485c0` | feat(13): wire home-hero AI image to homepage |
| `165d6d5a` | feat(13): wire brand-wide AI heroes to hub pages |
| `a6e13a3a` | feat(13): wire city AI heroes to location page templates |
| `6e08fb32` | refactor(13): reduce hero-location overlay opacity for AI images |
