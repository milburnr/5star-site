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

**Entity & Positioning:**
- [ ] Unified entity name ("5 Star Roofing") across all metadata, schema, footer, headers, OG tags
- [ ] Residential-first positioning (lead with residential, commercial secondary)
- [ ] Consistent brand voice across all 268 pages

**Homepage:**
- [ ] H1 and hero rewritten to be Amarillo-first (not "West Texas")
- [ ] Homepage focused on Amarillo/Canyon/Panhandle core market
- [ ] Midland/Odessa/Lubbock relegated to "Also Serving" — not hero-level

**Content & On-Page SEO (all 268 pages):**
- [ ] Full SEO audit: titles, H1s, meta descriptions, H2s, content quality
- [ ] All meta descriptions complete, unique, optimized (fix truncated ones)
- [ ] Meta title consistency with unified brand name
- [ ] Hub-and-spoke topical authority: cover all keywords, prevent cannibalization
- [ ] Rich content: tables, comparison charts, inline images where contextually relevant
- [ ] Consistent FAQ sections across all page types (6-7 per page)
- [ ] Inline images of hail-damaged shingles, accessories, completed work when referenced
- [ ] City pages strengthened (Canyon and similar thin pages need depth, FAQs, local data)
- [ ] Midland, Odessa, Lubbock as standalone hubs with unique depth
- [ ] Cover all roofing types: asphalt shingles, metal roofs, flat membrane/TPO/EPDM
- [ ] Residential AND commercial keywords targeted per city

**Schema Markup:**
- [ ] FAQ schema on every page with FAQ content
- [ ] Breadcrumb schema on every page
- [ ] LocalBusiness schema on every page (consistent NAP)
- [ ] Service schema on all service pages
- [ ] Verify schema renders in static HTML output (not just in React)

**Images:**
- [ ] All images served from Cloudflare R2 (NO images uploaded to GitHub)
- [ ] No broken images across any page
- [ ] No duplicate images on same page
- [ ] Hero images use AI-generated images where available
- [ ] Completed job photos used in relevant service/city pages
- [ ] All images have descriptive, keyword-rich alt text
- [ ] Images contextually relevant to immediate surrounding content

**Internal Linking:**
- [ ] Internal linking audit and optimization
- [ ] Hub pages link to all spokes; spokes link back to hub and to related spokes
- [ ] Cross-city linking for same services
- [ ] Cross-service linking for same cities
- [ ] No orphan pages, no dead-end pages

**Technical SEO:**
- [ ] Performance stays 95+ PageSpeed (no regressions)
- [ ] Site builds successfully (all 268 pages)
- [ ] Sitemap regenerated after changes
- [ ] Resubmit to Google Indexing API after changes

### Out of Scope

- Visual redesign — look/feel, animations, layout stay as-is
- Adding new cities or service areas beyond what exists
- Backend/server changes (stays static export)
- Google Business Profile changes (that's off-site)
- Content management system changes
- New JavaScript features or interactive functionality

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
- **Images on Cloudflare R2**: All images are hosted on R2, NOT in the git repo. Never upload images to GitHub. Reference R2 URLs only.
- **Performance budget**: PageSpeed score must stay 95+ on desktop, 98+ mobile
- **No half-measures**: Fix everything found. No "good enough for now" — treat this as the only pass

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use "5 Star Roofing" as canonical site entity name | Shorter, covers both commercial and residential, matches broader search intent. Legal name stays on invoices | — Pending |
| Residential-first positioning | Matches actual business reality (most work is residential), bigger market | — Pending |
| Amarillo-first homepage strategy | Dominate home market first, let city pages handle other markets | — Pending |
| Don't change URLs | Preserve existing Google index, avoid redirect complexity | — Pending |

---
*Last updated: 2026-02-20 after initialization*
