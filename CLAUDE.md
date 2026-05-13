# 5 Star Roofing — site repo

Live Next.js site for 5 Star Commercial Roofing (Amarillo TX). Production-deployed. Read this before editing pages, components, or content.

## Pre-commit & Content Policy

This repo has a **pre-commit hook** at `.git/hooks/pre-commit` that runs `/Volumes/External-2TB/Projects/content-ops/engine/precheck_forbidden_phrases.sh` against the whole repo. It blocks commits containing forbidden service-claim phrases.

**Canonical forbidden-claims list:** `/Volumes/External-2TB/Projects/content-ops/clients/5star/claims-allowlist.md` — READ THIS before writing any marketing copy, FAQ, hero subtitle, or trust tile.

Common forbidden patterns (not exhaustive — check the allowlist):
- Service-time claims: `emergency response`, `same-day`, `respond quickly`, `24/7`, `around the clock`, `prompt response`, `rapid response`, `fast response`, `within the hour`, `don't wait` (with service framing)
- Action claims: `stopped the leak`, `leak-stopping`, `tarping`, `board-up`, `temporary leak repair`
- Fabricated content: testimonials/reviews with attributed names, specific project addresses, aggregate stat tiles ("500+ Satisfied Customers", "$50M+ Insurance Claims"), `AggregateRating` JSON-LD with invented review counts

**Why these are forbidden:** 5star is positioned AGAINST storm-chasers. The brand differentiates by being a local, scheduled, quality contractor — NOT an emergency-dispatch service. Time-bound service promises are brand-violating regardless of context.

### Pre-flight (do this BEFORE staging a commit)
```bash
/Volumes/External-2TB/Projects/content-ops/engine/precheck_forbidden_phrases.sh $(pwd)
```
The hook is a backstop. Run the precheck yourself first so you find violations while you can still rewrite the surrounding sentence, not when the commit fails.

### When you find a forbidden phrase
- REMOVE the claim, or REWRITE the surrounding sentence without it
- DO NOT use `{{VERIFY:}}` placeholders (the precheck blocks those too)
- DO NOT bypass with `--no-verify` unless Rich explicitly approves
- Brand-positive replacements that ARE allowed: "Hail Alley Specialists", "Amarillo-based", anti-storm-chaser framing, verified geographic/category specialties

### Verified facts and numbers
Only use numerics/certifications/stats listed in the allowlist&apos;s VERIFIED sections. If a number isn&apos;t there, you don&apos;t use it. The fact-check agent enforces. Rich maintains the allowlist.

## Site is live — verify before push

This site is in production. Non-trivial page changes need a browser check before push:
- City-page rewrites, hero/layout changes, new sections → `npm run dev` and view mobile + desktop
- Bulk edits (5+ files touching rendered content) → screenshot check before commit
- TypeScript passing is necessary but NOT sufficient. Compiles ≠ renders correctly.

## Page template

The canonical city-page template is `app/big-spring-tx-roofing/page.tsx`. Use it as the model when rewriting other city pages — Breadcrumb → StickyContactBar → hero section → container-custom with TL;DR / byline / intro / services grid / neighborhoods / storm events / challenges / FAQ accordion / CTA / nearby cities → schema JSON-LD → RelatedArticles.

Do NOT add `HighLevelForm` to city pages — the new template doesn&apos;t use it.

Hero pattern: `<section className="hero">` belongs OUTSIDE `container-custom` so it bleeds edge-to-edge. Service hub pages (commercial-roofing, residential-roofing) use `InteriorHeroSection` and the same outside-the-container rule applies.

## Package manager

Uses **npm** (`package-lock.json`). Do NOT mix in pnpm — the wider 5star ecosystem has had silent deploy breakage from lockfile mixing.

## Image source

Inline images and heroes come from the R2 catalog (`pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev`). The content-ops engine reads `image-db-progress.json` to match topics to photos. Don&apos;t hardcode image paths from other sources without verifying they exist in R2.
