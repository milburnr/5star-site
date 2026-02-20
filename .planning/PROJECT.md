# 5 Star Roofing — SEO Ranking & Lead Generation Overhaul

## What This Is

An SEO-focused overhaul of 5starroofingpros.com, a 268-page Next.js static site for a roofing contractor based in Amarillo, TX serving West Texas. The site exists and looks good but is barely ranking (~position 39 avg) and getting only 2-3 clicks/month. This project fixes the structural SEO issues preventing the site from generating leads without changing the visual design or breaking existing functionality.

## Core Value

Get the site ranking in top 10 for target keywords and generating 100+ organic clicks/month (up from ~2), translating to real phone calls and leads for the business.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ 268-page hub-and-spoke site architecture — existing
- ✓ Schema.org markup (LocalBusiness, Service, FAQ, Breadcrumb) — existing via `lib/schema-templates.ts`
- ✓ City pages with genuinely unique content (Amarillo, Midland, Lubbock) — existing
- ✓ Google Analytics 4 + phone click tracking — existing
- ✓ Static export to Netlify — existing
- ✓ Responsive design with Tailwind CSS — existing
- ✓ Framer Motion animations — existing
- ✓ Google Indexing API submission script — existing

### Active

<!-- Current scope. Building toward these. -->

- [ ] Homepage H1 and hero rewritten to be Amarillo-first (not "West Texas")
- [ ] Unified entity name ("5 Star Roofing") across all metadata, schema, footer, headers
- [ ] Residential-first positioning (lead with residential services, commercial secondary)
- [ ] Homepage focused on Amarillo/Canyon/Panhandle core market
- [ ] City hub pages strengthened (Midland, Odessa, Lubbock as standalone hubs, not homepage overflow)
- [ ] Weak city pages improved (Canyon and similar thin pages need depth, FAQs, local data)
- [ ] Consistent FAQ sections across all page types (6-7 per page)
- [ ] All meta descriptions complete and optimized (fix truncated ones)
- [ ] Meta title consistency with unified brand name
- [ ] Internal linking audit and improvements
- [ ] Full SEO audit across all 268 pages for content quality issues
- [ ] Regression testing — site builds successfully, no visual/functional regressions
- [ ] Resubmit to Google Indexing API after changes

### Out of Scope

- Visual redesign — look/feel stays as-is
- New page types or site architecture changes
- Adding new cities or service areas
- Backend/server changes (stays static export)
- Google Business Profile changes (that's off-site)
- Content management system changes
- New JavaScript functionality or features
- Aggressive/unsubstantiable claims cleanup (flag only, don't rewrite marketing copy)

## Context

- Site was rebuilt a few months ago, has had time to be indexed but isn't ranking competitively
- Google Search Console shows lots of broad impressions but avg position ~39 — "eligible everywhere, competitive nowhere"
- Only ~25 organic sessions and 2 phone clicks in last 28 days
- Competition in Amarillo proper is high; business spreads across West Texas for storm chasing
- GBP name is "5 FIVE Star Commercial and Residential Roofing" (Google changed it) — mismatch with site
- Business legal name is "5 Star Commercial Roofing" but actual work is mostly residential
- Business has real project photos organized by city — available for use
- City pages (Amarillo, Midland, Lubbock) already have strong unique content; weaker secondary pages (Canyon) need improvement
- ChatGPT analysis identified: H1/title mismatch, multi-city dilution, entity inconsistency, aggressive claims

## Constraints

- **No visual changes**: Look, feel, animations, and layout must stay the same
- **No broken builds**: Site must build successfully (268 pages) after every change
- **Regression testing**: QC every change — no regressions in functionality
- **Static export**: Must remain `output: "export"` — no server-side rendering
- **Existing architecture**: Hub-and-spoke URL structure stays; no URL changes that would break existing index

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use "5 Star Roofing" as canonical site entity name | Shorter, covers both commercial and residential, matches broader search intent. Legal name stays on invoices | — Pending |
| Residential-first positioning | Matches actual business reality (most work is residential), bigger market | — Pending |
| Amarillo-first homepage strategy | Dominate home market first, let city pages handle other markets | — Pending |
| Don't change URLs | Preserve existing Google index, avoid redirect complexity | — Pending |

---
*Last updated: 2026-02-20 after initialization*
