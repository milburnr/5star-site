# Project Research Summary

**Project:** 5 Star Roofing — Local SEO Optimization Sprint
**Domain:** Multi-city local service SEO — roofing contractor, West Texas
**Researched:** 2026-02-20
**Confidence:** HIGH

## Executive Summary

This is a technical SEO optimization sprint on an existing 268-page Next.js 15 static site, not a greenfield build. The core stack is locked in and healthy (PageSpeed 95+, static export, Tailwind, Framer Motion). The problem is not the technology — it is the content and schema architecture sitting on top of it. Three critical compliance violations are actively suppressing rankings right now: fabricated `AggregateRating` schema across 212 pages (live manual-action risk under Google's 2025 Spam Updates), NAP/entity name inconsistency between the site and Google Business Profile, and keyword cannibalization from 25+ near-duplicate URL variants competing against their own canonical pages. These must be resolved before any other work has any effect.

The recommended approach follows a strict phase order: fix compliance and entity issues first, consolidate duplicate URLs second, then strengthen architecture and content. This order is non-negotiable — improvements to content or schema on pages that Google is already demoting due to spam signals will not move rankings. The research consistently supports a 4-tier hub-and-spoke information architecture with parallel service and city hierarchies, bi-directional linking, and one canonical page per service-city combination. The site already has most of this structure in place; the work is cleanup and gap-filling, not rebuilding.

The highest-leverage opportunities beyond compliance fixes are: adding missing service hub pages (9 services currently have spoke pages that link up to 404 hub URLs), refocusing the homepage on Amarillo exclusively, and differentiating thin secondary city pages. Texas is the #1 state for roofing search volume (447,900 searches in March 2025 alone), and hail damage content specifically is the market-defining service cluster for this region. Strengthening that cluster is the highest-ROI content investment after the compliance fixes land.

---

## Key Findings

### Recommended Stack

The existing stack requires no changes. The optimization work uses tooling layered on top of the production Next.js 15 site. Key additions are `schema-dts` (Google-authored TypeScript types for Schema.org, dev-only, zero runtime cost) to prevent future schema spec errors, `next-sitemap` to replace the custom `generate-sitemap.js` with priority/changefreq control and robots.txt generation, and `linkinator` for automated broken link detection against the `out/` directory post-build. All schema generation should remain as JSON-LD in `<script type="application/ld+json">` tags — never microdata or RDFa. Internal link analysis can be done with a custom `cheerio` script using already-installed dependencies.

**Core technologies:**
- `schema-dts@1.1.5`: TypeScript types for Schema.org JSON-LD — catches spec violations at compile time; Google-authored; zero runtime cost
- `next-sitemap@4.2.3`: Post-build sitemap + robots.txt — replaces custom script; supports per-URL priorities; handles static `output: "export"` correctly
- `linkinator@7.5.3`: Broken link detection — crawls `out/` directory; CLI + Node.js API; integrates into CI
- `@adobe/structured-data-validator@1.6.0`: Runtime schema validation — batch-validates all 268 pages in a script; no Google Rich Results Test API exists
- `googleapis` (already installed): GSC API for baseline impressions/clicks/position before and after each phase
- `@lhci/cli` (already installed): Lighthouse CI for regression testing after deployments

**Do NOT add:**
- `next-seo` — redundant with App Router's native `generateMetadata()`
- `react-helmet` — Pages Router pattern; irrelevant to App Router
- `react-schemaorg` — runtime overhead; `schema-dts` is types-only

### Expected Features

The research identifies two distinct categories: blocking compliance fixes (must do first or nothing else matters) and high-impact differentiators (do after compliance is clean).

**Must fix first (blocking — suppressing rankings now):**
- Fix fabricated `AggregateRating` schema — remove from all 212 pages without real on-page reviews; active manual-action risk
- Fix entity name inconsistency — "5 Star Commercial Roofing" vs "5 FIVE Star Commercial and Residential Roofing" on GBP; one canonical name everywhere
- Fix NAP email inconsistency — `admin@5starroofingpros.com` vs `info@5starroofingpros.com` across 268 page schemas
- Fix `@type` from `LocalBusiness` to `["LocalBusiness", "RoofingContractor"]` — more specific type for category matching
- Fix 113 meta description double-comma issues and truncated titles
- Consolidate 25+ URL variants (`-texas`/`-tx` suffixes) with 301 redirects to canonical URLs

**Should add after compliance is clean (high impact):**
- `WebSite` entity schema on homepage with `sameAs` links to GBP, BBB, Facebook
- `Person` schema for business owner on About page — E-E-A-T signal
- Answer-first content structure (H2s framed as homeowner questions)
- Trust badges above the fold: GAF certification, BBB accreditation, TX license number
- Before/after project galleries with city-specific context
- Hail damage content cluster strengthening (insurance process, storm-season freshness)
- Thin secondary city pages enriched to 800-1200 words (Canyon, Borger, Pampa, Dumas, Hereford)
- Missing service hub pages: `/hail-damage-repair/`, `/roof-repair/`, `/roof-replacement/`, `/storm-damage-repair/`, `/metal-roofing/`, `/wind-damage-repair/`, `/tpo-roofing/`, `/roof-inspections/`, `/asphalt-shingle-roofing/`

**Defer to v2 (after rankings improve):**
- `ImageObject` schema on project galleries — needs gallery infrastructure first
- Cost/pricing transparency content pages — address after core pages rank
- Video content (job walkthroughs, testimonials) — high effort, low priority until 100+ clicks/month
- Interactive service area map
- Storm-season content refresh automation

### Architecture Approach

The site already has the correct hub-and-spoke skeleton. The work is fixing four specific structural failures: (1) 7 Amarillo hail damage pages competing against each other for the same query cluster instead of consolidating to one canonical; (2) the homepage diluting Amarillo authority by naming Midland and Odessa equally in the hero; (3) 9 service types have spoke pages linking up via breadcrumb to hub pages that do not exist, generating 404s and wasting PageRank uplift; (4) the `InternalLinks` component links sideways and cross-service correctly but never links UP the hierarchy to service hubs or city hubs.

**Major components:**
1. **Homepage** — Must be Amarillo-only; currently mentions 3 cities equally; fix H1/hero and add explicit links to `/amarillo-texas-roofing/` and `/hail-damage-repair/`
2. **Service Hub Pages (Tier 1A)** — 9 missing pages need to be created; each links down to all 14 city variants of that service; receives authority from breadcrumb uplinks on all spokes
3. **City Hub Pages (Tier 1B)** — 14 city hub pages exist but need naming consistency and complete spoke link sections; each consolidates all service×city spokes for that city
4. **Service×City Spoke Pages (Tier 2)** — 140+ pages in the canonical matrix; each must link UP to both service hub and city hub, not just sideways; `InternalLinks` component needs hub uplink section added
5. **Netlify.toml Redirects** — The execution layer for URL consolidation; all 301s go here; must be deployed BEFORE duplicate pages are removed
6. **Schema Layer (`lib/schema-templates.ts`)** — Needs `RoofingContractor` type fix, `AggregateRating` removal, email standardization, `WebSite` entity addition; `schema-dts` types added as guardrails

**Key pattern — parallel hierarchies:** Do NOT restructure URLs into nested hierarchies. The existing flat spoke URLs (`/commercial-roofing-amarillo/`) are correct. Both the service hub and city hub link INTO the same spoke page from above. The spoke page is the intersection.

### Critical Pitfalls

1. **Fabricated AggregateRating schema** — Remove immediately from all pages without real on-page reviews. This is the highest-priority action in the entire project. Recovery from a manual action takes 2-6 months even after the fix. The August 2025 and December 2025 Spam Updates are actively targeting this exact pattern.

2. **NAP entity inconsistency** — Standardize every schema, footer, header, OG tag, and meta to one canonical business name. The GBP name is the authoritative source — match the site to it. Entity confidence suppression from mismatches silently caps rankings without a visible error.

3. **Self-canonicalizing URL variants** — The `-texas`/`-tx` suffix pages must 301 redirect to their primary counterparts. Simply having canonical tags is insufficient if both pages self-canonicalize. Order strictly: add redirect to netlify.toml → deploy → verify → then delete the duplicate page.tsx file.

4. **Doorway page pattern on thin secondary city pages** — Google's August 2025 Spam Update explicitly targets city pages where only the city name is swapped. Secondary cities (Borger, Pampa, Dumas, etc.) need at minimum 3 genuinely city-specific content elements: local weather data, neighborhood names, and city-specific FAQs. Generic local references are not sufficient.

5. **Breaking Cloudflare R2 image URLs** — All hero and content images are hardcoded as R2 URLs across hundreds of page.tsx files. Treat R2 URLs as immutable during all optimization work. Establish a baseline image audit before Phase 1 and re-run after every deployment.

6. **Making too many changes simultaneously** — Deploy phases separately with 1-2 week GSC monitoring windows. Bulk deployments make it impossible to diagnose ranking cause-and-effect. Export GSC baseline (impressions, clicks, position per page) before any changes.

---

## Implications for Roadmap

Based on the combined research, the phase structure is driven by two hard constraints: (1) compliance fixes must precede all other work because Google spam signals suppress the entire domain, not just individual pages; (2) URL consolidation must precede content improvements because improving content on a page that will later be redirected away is wasted effort.

### Phase 1: Emergency Compliance and Entity Fixes

**Rationale:** Three live compliance risks actively suppressing rankings across all 268 pages. These have zero upside from ignoring and serious penalty risk from continued exposure. Must deploy as a standalone phase with no content changes mixed in, so GSC can confirm the fixes registered cleanly.

**Delivers:** Elimination of manual-action risk; entity trust foundation for all subsequent schema work; clean baseline to measure from.

**Addresses:** Fabricated AggregateRating removal, NAP email standardization, business name canonicalization across all schema.

**Avoids:** Pitfall 2 (AggregateRating manual action), Pitfall 3 (NAP entity inconsistency), Pitfall 10 (bulk simultaneous changes).

**Research flag:** Standard patterns — no additional research needed. Changes are audit-and-fix, not design decisions.

---

### Phase 2: Technical SEO and URL Canonicalization

**Rationale:** URL consolidation must happen before any content work. Consolidating 7 Amarillo hail pages into 1 immediately multiplies ranking signals without writing a word of new content. This phase also fixes the technical debt (canonical trailing slash, title tag format, meta description rebuild) that suppresses CTR independent of content quality.

**Delivers:** Clean URL topology; 301 redirects consolidating 25+ variant pages into canonical URLs; fixed title tags and meta descriptions across all 268 pages; homepage canonical corrected; sitemap regenerated.

**Addresses:** URL variant consolidation (hail damage, commercial roofing, residential roofing suffixes), 113 meta description fixes, over-optimized title tags, homepage canonical trailing slash.

**Uses:** `next-sitemap` replacing custom sitemap script; netlify.toml redirect blocks.

**Avoids:** Pitfall 1 (self-canonicalizing variant pages), Pitfall 6 (canonical trailing slash), Pitfall 7 (over-optimized titles), Pitfall 8 (URL changes without full redirect coverage).

**Research flag:** Standard patterns — well-documented redirect and canonical patterns; no additional research needed.

---

### Phase 3: Schema Architecture Upgrade

**Rationale:** With entity identity clean (Phase 1) and URL topology clean (Phase 2), schema changes now land on a stable foundation. Schema changes in isolation are low-risk and high-reward — a single change to `schema-templates.ts` propagates across all 268 pages automatically.

**Delivers:** `RoofingContractor` type on all pages; `WebSite` entity schema on homepage with `sameAs` links; `Person` schema for owner on About page; `schema-dts` types installed as compile-time guardrails; schema validated against all 268 pages with `@adobe/structured-data-validator` CI script.

**Addresses:** `@type` fix to `RoofingContractor`, `WebSite` entity schema, `Person` schema (E-E-A-T), `sameAs` linking, schema type safety.

**Uses:** `schema-dts@1.1.5`, `@adobe/structured-data-validator@1.6.0`.

**Avoids:** Pitfall 2 (re-introducing schema violations), performance trap (deploying schema changes across 268 pages without validation).

**Research flag:** Standard patterns — Google Search Central docs are authoritative and clear. No additional research needed. Validate against Rich Results Test for representative pages before deploying site-wide.

---

### Phase 4: Information Architecture — Hub Pages and Internal Linking

**Rationale:** Nine service types currently have spokes that link up via breadcrumbs to hub pages that do not exist (404s). This wastes the PageRank uplift a hub would provide and creates broken breadcrumb trails. The `InternalLinks` component change in this phase propagates hub uplinks to all 268 pages automatically — one component edit with maximum reach.

**Delivers:** 9 new service hub pages created in priority order (hail-damage-repair, roof-repair, roof-replacement, storm-damage-repair, metal-roofing, wind-damage-repair, tpo-roofing, roof-inspections, asphalt-shingle-roofing); `InternalLinks` component updated to add hub uplinks section; breadcrumb chains fully resolved with no 404s.

**Addresses:** Missing Tier 1A service hub pages, InternalLinks hub uplink gap, broken breadcrumb chains, homepage Amarillo-only refocus.

**Implements:** 4-tier hub-and-spoke architecture pattern; bi-directional linking pattern; semantic cocoon model (spokes reinforced from both service and city parent directions).

**Avoids:** Anti-pattern 3 (spoke pages without hub links), anti-pattern 2 (listing all cities on homepage), Pitfall 9 (adding new pages without cannibalization check).

**Research flag:** Standard patterns for hub page structure. Each new hub page should be validated for keyword cannibalization against existing pages before publishing.

---

### Phase 5: Content Differentiation — Primary Cities

**Rationale:** With the architecture clean and authority flowing correctly, content improvements now have a functioning PageRank scaffold to build on. Start with Amarillo (53 pages — primary market), then Midland/Odessa (Permian Basin secondary market), then Lubbock. Secondary cities (Borger, Pampa, etc.) are addressed last — they have the highest doorway risk and lowest traffic potential.

**Delivers:** Amarillo pages enriched with local specifics (hail frequency data, neighborhood names, Potter County regulations, local project examples); answer-first H2 structure across all service pages; trust badges (GAF certification, BBB, TX license) above the fold on homepage and key service pages; before/after galleries activated with city and material context.

**Addresses:** Thin city pages, answer-first content structure, trust badges, before/after galleries, hail damage content cluster strengthening.

**Avoids:** Pitfall 4 (doorway page pattern — must add 3+ genuinely city-specific elements, not just city name mentions).

**Research flag:** Needs human input on actual project photo inventory and real hail event data per city. Content differentiation quality cannot be fully scripted — requires real local knowledge.

---

### Phase 6: Secondary Cities and Long-Tail Content

**Rationale:** After primary city pages rank and demonstrate the content model, apply the same pattern to secondary cities. Consolidate or enrich thin pages (Borger, Pampa, Dumas, Hereford, Canyon, Levelland, Andrews, Monahans, Perryton, Snyder, Big Spring) — either add genuine local content or redirect to a regional service-area page.

**Delivers:** Secondary city pages either enriched or consolidated; `ImageObject` schema added to gallery pages; cost/pricing context pages for high-intent queries; sitemap updated and resubmitted.

**Addresses:** `ImageObject` schema, cost/pricing transparency content, secondary city thin page resolution.

**Avoids:** Pitfall 4 (doorway pages at scale), performance trap (sitemap with >20% excluded pages).

**Research flag:** Decision about consolidate-vs-enrich for each secondary city requires GSC data from Phase 5 to make correctly. Run GSC impression audit on secondary city pages before deciding which approach to take per city.

---

### Phase Ordering Rationale

- **Phases 1-2 are non-negotiable in order.** Compliance before content. URL topology before content improvements. This is the single most important constraint from the pitfalls research.
- **Phase 3 (schema) can overlap with Phase 2** if teams are parallel, but schema entity changes require the NAP standardization from Phase 1 to be complete first.
- **Phase 4 (hub pages) must follow Phase 2** because new hub pages could introduce new canonical issues if URL consolidation is still incomplete.
- **Phases 5-6 depend on Phases 1-4** because content on pages with schema violations, duplicate URLs, or broken hub links is wasted effort.
- **GSC monitoring windows** of 1-2 weeks between phases are mandatory — not optional. This is the only way to isolate cause-and-effect in ranking movements.

### Research Flags

Phases likely needing deeper research or human input during planning:
- **Phase 5:** City content differentiation requires real local data (actual hail frequency by city, local project photo inventory, neighborhood names) — this cannot be fully researched; it requires input from the client or direct research into West Texas geographic data.
- **Phase 6:** Consolidate-vs-enrich decision for secondary cities should be informed by GSC impression data from Phase 5 — do not pre-decide in planning.

Phases with standard patterns (research complete, no further research needed):
- **Phase 1:** Schema compliance fixes are clearly defined by Google's own documentation
- **Phase 2:** 301 redirect and canonical tag patterns are well-established
- **Phase 3:** Schema type hierarchy and `schema-dts` usage patterns are documented and verified
- **Phase 4:** Hub page structure and `InternalLinks` component modification are straightforward given existing codebase patterns

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | npm package versions verified; Next.js 15 static export compatibility confirmed; `schema-dts` verified as Google-authored |
| Features | HIGH | Blocking issues confirmed via direct code inspection; Google guidelines confirmed via official Search Central docs; AggregateRating violation confirmed against live schema code |
| Architecture | HIGH | Site structure directly audited; cannibalization patterns confirmed via `app/` directory inspection; hub-spoke pattern confirmed by multiple authoritative SEO sources |
| Pitfalls | HIGH | Critical pitfalls confirmed via direct code inspection + official Google spam policy documentation; recovery costs verified against industry post-mortems |

**Overall confidence:** HIGH

### Gaps to Address

- **Actual GSC data:** No access to live Google Search Console data was available during research. The baseline impression/click/position export per page should be the first action before Phase 1 deploys — this is the measurement foundation everything depends on.
- **GBP authoritative name:** The canonical business name for NAP standardization must be confirmed against the live Google Business Profile (not assumed from the site). The GBP is the authoritative record; the site must match it, not the other way around.
- **Real review count:** If `AggregateRating` schema is to be retained on any page (e.g., a dedicated reviews page), the `reviewCount` and `ratingValue` values must come from a verified source (Google Business Profile review count, for example). The current fabricated numbers cannot be used.
- **R2 image baseline:** An image audit against the live R2 bucket should be run before Phase 1 to establish which URLs are valid. This audit is referenced as a prerequisite in the pitfalls research but requires executing against the actual R2 bucket.
- **Secondary city client presence:** The consolidate-vs-enrich decision for secondary cities (Borger, Pampa, etc.) depends on whether the client has actual completed projects in those cities. This is a business question, not an SEO question.

---

## Sources

### Primary (HIGH confidence)
- Google Search Central: LocalBusiness Structured Data (December 2025 update) — schema required/recommended properties
- Google Search Central: Review Snippet guidelines — AggregateRating on-page requirement
- Google Search Central: March 2024 Core Update + Spam Policies — doorway page and near-duplicate content guidance
- schema.org/RoofingContractor — type hierarchy confirmation
- GitHub: google/schema-dts — zero-dependency policy, TypeScript discriminated union types
- Direct code inspection: `sites/5-star-roofing/app/` — cannibalization patterns, schema email inconsistency, AggregateRating values confirmed first-hand
- npm registry: package versions verified for schema-dts, next-sitemap, linkinator, @adobe/structured-data-validator

### Secondary (MEDIUM confidence)
- Frontend Horizon: 2025 SEO Playbook for Roofers — hub-spoke linking, schema types
- Search Engine Journal: Targeting Multiple Cities Without Hurting SEO — parallel hierarchy model
- Bruce Clay: Hub-and-Spoke Taxonomy Design — topical authority patterns
- Boulder SEO Marketing: Local SEO 2026 Guide — monitoring tools, GBP alignment
- WebFX: Roofing SEO Guide — conversion and content patterns
- LocalMighty: Local SEO Checklist for Roofing Contractors — feature baseline for top-ranking contractors
- SEO For Home Service: Top Roofing Keywords by State 2025 — Texas search volume data (447,900 searches in March 2025)
- Koanthic: Internal Linking Strategy 2026 — link equity distribution, over-linking risks

### Tertiary (MEDIUM confidence, single sources)
- Ciphers Digital: Hub, Wheel and Spoke Local SEO Strategy — 4-tier architecture model
- ContentWorks: Content Clusters for Roofers — service cluster structure
- YourLocalSiteDesign: How Reviews + Badges Double Calls on Roofing Websites — trust badge placement

---

*Research completed: 2026-02-20*
*Ready for roadmap: yes*
