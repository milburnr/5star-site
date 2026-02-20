# Feature Research

**Domain:** Local service business SEO — roofing contractor, West Texas
**Researched:** 2026-02-20
**Confidence:** MEDIUM-HIGH (WebSearch verified with multiple industry sources; no Context7 applicable for SEO)

---

## Context: What the Site Already Has

Before mapping the feature landscape, understanding the existing baseline avoids recommending things that are already in place:

**Already present:**
- 268-page hub-and-spoke architecture (location x service matrix)
- LocalBusiness schema, FAQPage schema, BreadcrumbList schema, ServiceArea schema
- GA4 + phone click tracking
- Static export to Netlify (PageSpeed 95+)
- FAQ sections (accordion) on most pages
- InternalLinks component for cross-linking
- Framer Motion animations
- AggregateRating in schema (reviewCount: 84, ratingValue: 5.0)

**Known gaps at project start:**
- Entity name inconsistency ("5 Star Commercial Roofing" vs "5 FIVE Star Commercial and Residential Roofing" on GBP)
- Homepage targets too many cities instead of leading with Amarillo
- Some thin city/secondary pages (Canyon, Borger, Pampa, etc.)
- Incomplete or truncated meta descriptions
- Schema `@type` is `LocalBusiness` — not the specific `RoofingContractor` subtype
- No `RoofingContractor` or `HomeAndConstructionBusiness` type in schema
- No `Person` schema for team/owner E-E-A-T signals
- No `AggregateRating` schema tied to actual on-page review content (violates Google guidelines if reviews aren't displayed on-page)
- No `ImageObject` schema on project photos
- No `WebSite` entity schema

---

## Feature Landscape

### Table Stakes (Google Will Not Rank You Without These)

Features that are assumed to exist. Missing any of these keeps you stuck around position 39.

| Feature | Why Required | Complexity | Current State | Notes |
|---------|-------------|------------|---------------|-------|
| **Consistent NAP across site and schema** | Google entity trust — mismatched name, address, or phone confuses Google's entity graph and suppresses map pack visibility | LOW | BROKEN — entity name varies ("5 Star Commercial Roofing" vs "5 FIVE Star Commercial and Residential Roofing") | Fix every `<script>` tag, footer, header, meta, and OG tag to use one canonical name |
| **Single H1 per page matching primary keyword** | Direct ranking signal — H1 must match the page's target keyword (e.g., "Roof Repair Amarillo TX") | LOW | Partially done — some H1/title mismatches reported | Audit all 268 pages |
| **Optimized title tags (under 60 chars)** | Title tag is Google's primary relevance signal for the page; truncated titles signal poor optimization | LOW | Incomplete — some truncated at >60 chars | Format: `[Service] in [City], TX | 5 Star Roofing` |
| **Meta descriptions (140-155 chars, unique per page)** | Improves CTR from search results; Google may write its own if missing, often unfavorably | LOW | BROKEN — 113 double-comma issues found in audit, some truncated | Write unique descriptions starting with action verb |
| **Mobile-responsive design** | Google mobile-first indexing — non-mobile pages get demoted | LOW | Done (Tailwind CSS, responsive) | Monitor with CWV tools; no regression needed |
| **Core Web Vitals passing (LCP <2.5s, INP <200ms, CLS <0.1)** | Google's Page Experience signal (~10-15% of ranking weight). INP replaced FID in 2024 | LOW | Currently 95+ PageSpeed — likely passing | Verify INP specifically; static export helps |
| **Unique content per city page (800-1200 words min)** | Thin or duplicate city pages trigger content devaluation; Google's algorithms actively penalize near-duplicate doorway pages | MEDIUM | Partial — Amarillo/Midland/Lubbock strong; Canyon/Borger/Pampa thin | Each city page needs local specifics: weather, ZIP codes, landmarks, unique FAQs |
| **FAQ sections on every service page** | E-E-A-T signal; enables FAQ rich results; AI Overviews pull from FAQ content | LOW | Present on most pages | Ensure all pages have 6-7 relevant FAQs with FAQPage schema |
| **BreadcrumbList schema on all pages** | Enables breadcrumb rich results in SERP; improves crawlability | LOW | Present (via Breadcrumb component) | Verify it renders in static HTML output, not just React |
| **Sitemap submitted and current** | Google needs to know all 268 pages exist | LOW | Done (generate-sitemap.js) | Re-run after any page additions |
| **No broken images** | Broken images hurt user experience signals and trigger soft 404 behavior | LOW | Needs audit — all images on Cloudflare R2 | Run automated audit for 404 images |
| **Descriptive alt text on all images** | Image accessibility and image search visibility | LOW | Partially done — needs keyword-rich alt text audit | Include service type and city in alt text |
| **Clean URL structure with trailing slashes** | Canonical URL consistency; trailing slash enforcement prevents duplicate content | LOW | Done (`trailingSlash: true` in next.config.ts) | Verify all internal links use trailing slashes |
| **Internal links from hub to all spokes and back** | Distributes PageRank; prevents orphan pages; signals topical authority | MEDIUM | Partially done (InternalLinks component) | Audit for orphan pages; ensure every spoke links back to hub |

**Dependency:** NAP consistency fix must happen before any other schema or GBP work — it's the identity foundation everything else builds on.

---

### Differentiators (Competitive Advantage in Local Search)

Features that distinguish top-ranking contractors from position 5-15. These are what separate position 39 from position 1-5.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **`RoofingContractor` schema type (not generic `LocalBusiness`)** | Tells Google exactly what you are — the specific `@type` matters for category matching in local pack and AI Overviews; most competitors use generic types | LOW | Change `"@type": "LocalBusiness"` to `["LocalBusiness", "RoofingContractor"]` in all schema; this is a schema.org official type at `https://schema.org/RoofingContractor` |
| **`WebSite` entity schema on homepage** | Establishes sitewide identity; tied to Knowledge Panel; AI systems use this to understand the brand entity | LOW | Add once to homepage layout; include `sameAs` links to GBP, BBB, Facebook, etc. |
| **`Person` schema for owner/team** | E-E-A-T signal — Google rewards identifiable humans behind contractor businesses; separates you from faceless operations | LOW | Add owner bio + schema on About page; link Person schema to LocalBusiness via `employee` property |
| **`ImageObject` schema on project photos** | Enriches images with metadata; improves image search visibility; geo-tagged photos signal local relevance to Google | MEDIUM | Add to gallery pages and project case studies; include `contentLocation` for geo-tagging |
| **Before/after project galleries with city-specific context** | Documented real work creates unique, locally-relevant content that generic sites can never match; builds E-E-A-T; each project is a micro-case-study | MEDIUM | Client has project photos organized by city — use them. Add city, material type, square footage context. This is a major differentiator |
| **Hail damage / storm response content cluster** | Texas is #1 state for roofing searches (447,900 searches in March 2025 alone). Storm-driven queries like "hail damage roof repair Amarillo" spike immediately after events; dedicated content captures surge traffic | MEDIUM | Create/strengthen hail damage pages; include insurance claim process content; link to these from homepage and city hubs |
| **Manufacturer certification trust badges (GAF, CertainTeed)** | E-E-A-T and conversion signal — GAF Master Elite is top 2% of contractors nationwide; BBB accreditation signals legitimacy; these directly lift CTR | LOW | Display prominently above the fold on homepage and service pages; verify schema-eligible certifications |
| **License number and insurance displayed on-site** | Texas contractor licensing info on-site signals legitimacy; reduces bounce rate from skeptical homeowners; E-E-A-T trust signal | LOW | Display TX contractor license number in footer and on About page |
| **Answer-first content structure** | Directly optimized for AI Overviews and featured snippets — H2s framed as homeowner questions with immediate answers; avoids long intros | LOW | Audit existing content structure; rewrite H2s as questions; lead with answers before elaborating |
| **Cornerstones + supporting cluster structure** | Topical authority signal — a pillar page (e.g., "Roof Replacement in Amarillo") supported by cluster pages (cost, process, materials, timeline) shows Google comprehensive expertise | HIGH | Currently have hub pages but clusters are shallow; strengthen with supporting FAQ-style subpages |
| **Storm-season content freshness** | Google rewards content freshness for high-urgency local searches; updating content after hail events captures the traffic surge | MEDIUM | Add "Last Updated" dates; refresh hail/storm pages after significant weather events in West Texas |
| **Cost/pricing transparency content** | Homeowners search "how much does roof replacement cost in Amarillo TX" — pages with actual pricing ranges (not "call for quote") rank better for commercial intent queries | MEDIUM | Add pricing context to service pages (range, factors, what affects cost); avoid committing to exact prices |
| **Geo-tagged project photos with city context** | Google Business Profile now surfaces geo-tagged photos as ranking signals; photos with EXIF or schema location data reinforce local presence | MEDIUM | When adding project images, include city name in filename, alt text, and ImageObject schema `contentLocation` |
| **Video content (project walkthroughs, testimonials)** | Video signals engagement and expertise; short drone flyovers or job-site walkthroughs embedded on city/service pages lift dwell time | HIGH | Complex to implement at scale; prioritize for top 3-5 highest-volume pages (Amarillo homepage, roof replacement) |

**Dependencies:**
```
RoofingContractor schema type
    └──requires──> NAP consistency fix (must have consistent entity name first)

WebSite entity schema
    └──enhances──> RoofingContractor schema (ties sitewide identity together)
    └──requires──> sameAs links to GBP, BBB, social profiles

ImageObject schema
    └──requires──> Project gallery pages with real photos

Before/after galleries
    └──enhances──> ImageObject schema (gives schema something real to describe)
    └──enhances──> City pages (unique content anchor)

Hail damage content cluster
    └──enhances──> City hub pages (storm-specific pages link up to city hubs)

Answer-first content structure
    └──enhances──> FAQ schema (FAQ answers align with answer-first H2 structure)

Person schema
    └──requires──> About page with owner/team bio content
```

---

### Anti-Features (Things That Actively Hurt Rankings)

These are commonly done on roofing contractor sites and directly suppress rankings.

| Anti-Feature | Why Requested | Why Problematic | Alternative |
|--------------|---------------|-----------------|-------------|
| **Generic `LocalBusiness` schema type (not `RoofingContractor`)** | Seems sufficient | Google uses `@type` to match business category to search queries; generic type weakens category relevance in local pack | Use `["LocalBusiness", "RoofingContractor"]` as the `@type` |
| **AggregateRating schema without on-page review display** | Adds star ratings to search results | Violates Google's structured data guidelines — reviews must be visibly displayed on the page where schema appears; can result in manual actions | Only use AggregateRating if you display actual customer reviews on the page; or remove the schema until reviews are displayed |
| **Near-duplicate city pages (only city name swapped)** | Easy to generate at scale | Google's "helpful content" system actively demotes doorway pages; triggers content devaluation across the whole site, not just thin pages | Each city page needs unique local details: weather events, local landmarks, neighborhood names, specific project examples from that city |
| **Homepage hero targeting all cities simultaneously** | Seems to maximize reach | Dilutes relevance signal for Amarillo (primary market); Google can't determine what city this business primarily serves; "eligible everywhere, competitive nowhere" | Lead with Amarillo; let city pages carry other markets |
| **Keyword stuffing in titles, H1s, or alt text** | Instinct to maximize keyword presence | Triggers spam filters; Google's 2025 core updates specifically target over-optimization | Natural keyword usage; one primary keyword per page, supporting secondary keywords in H2s |
| **Multiple pages targeting the same service-city combination** | Creating more pages seems like more coverage | Keyword cannibalization — Google sees two pages competing for the same query and gives neither strong ranking signal | One canonical page per service-city combination; use 301 redirects if duplicates exist |
| **Self-published testimonials with Review schema (not from third parties)** | Adds star ratings to search results | Google explicitly prohibits self-serving review markup; Google reviews, Yelp reviews, etc. cannot be marked up as on-site reviews | Use AggregateRating only with actually-displayed, user-generated reviews; use trust badges instead for certifications |
| **Unoptimized large images (>100KB each)** | Better photos seem better | Slows page load; hurts Core Web Vitals scores; negates PageSpeed advantages the site currently has | AVIF/WebP format, lazy loading, serve from R2 CDN — already doing this but audit for any new additions |
| **Aggressive "best in West Texas" claims without evidence** | Marketing instinct | Google's E-E-A-T evaluates trustworthiness; unsupported superlative claims signal low quality; homeowners also bounce from hyperbolic copy | Replace with specific, verifiable claims: certifications, project counts, years in business, manufacturer partnerships |
| **Over-claimed service areas (cities 3+ hours away)** | Maximize service area on GBP | Google can suspend GBP for service areas that aren't realistic; reduces map pack visibility for realistic service areas | Define service areas to cities reachable within ~60-90 minutes from Amarillo |
| **Purchased or low-quality backlinks** | Seems like easy authority | Toxic backlinks can trigger manual penalties; Google's 2025 updates reward brand mentions over link quantity | Focus on legitimate local citations, manufacturer partner directories, chamber of commerce listings |

---

## Feature Dependencies (Full Map)

```
[NAP/Entity Consistency]
    └──required by──> All schema markup (schema must use consistent name)
    └──required by──> GBP rankings (GBP name must match site)

[RoofingContractor @type schema]
    └──requires──> [NAP/Entity Consistency]
    └──enhances──> Local pack category matching

[WebSite Entity Schema]
    └──requires──> [NAP/Entity Consistency]
    └──enhances──> Knowledge Panel appearance
    └──enhances──> AI Overview citations

[Person Schema (owner/team)]
    └──requires──> About page with owner bio
    └──enhances──> E-E-A-T trust signals
    └──enhances──> [WebSite Entity Schema] (via sameAs)

[ImageObject Schema]
    └──requires──> [Before/after galleries] (needs real photos to describe)
    └──enhances──> Image search visibility
    └──enhances──> Local relevance signals

[Before/After Project Galleries]
    └──enhances──> [City page unique content] (provides proof of local work)
    └──enhances──> [ImageObject Schema]
    └──enhances──> E-E-A-T (documented real work)

[Answer-First Content Structure]
    └──enhances──> [FAQ Schema] (H2 questions align with FAQ schema)
    └──enhances──> AI Overview eligibility

[Hail Damage Content Cluster]
    └──enhances──> [City hub pages] (storm pages link up to city hubs)
    └──requires──> [City page unique content] (can't cluster off thin pages)

[On-page Reviews Display]
    └──required by──> [AggregateRating Schema] (must display reviews to use schema)

[City page unique content (800-1200 words)]
    └──required by──> [Hail Damage Content Cluster]
    └──required by──> [ImageObject Schema] (need real local content to attach to)

[Trust Badges (GAF, BBB, license)]
    └──enhances──> E-E-A-T
    └──enhances──> Conversion rate from organic traffic
    └──conflicts──> [AggregateRating Schema without reviews] (don't fake it — display real trust signals)
```

---

## MVP Definition

### Fix First (Blocking — Must Do Before Anything Else)

These are blocking issues: they suppress the entire site's ability to rank, regardless of other improvements.

- [ ] **Fix entity name** — Pick one name, apply everywhere in schema, footer, meta, OG tags. "5 Star Roofing" is the recommended canonical. Entity mismatch is the single largest trust signal failure.
- [ ] **Fix AggregateRating schema** — Either display real reviews on the page (then schema is fine) or remove `aggregateRating` from the schema until reviews are displayed. Current state violates Google guidelines.
- [ ] **Fix `@type` to `RoofingContractor`** — Change `"@type": "LocalBusiness"` to `["LocalBusiness", "RoofingContractor"]` across all schema. One-line fix in schema-templates.ts with high category relevance payoff.
- [ ] **Fix meta descriptions** — 113 double-comma issues found; truncated descriptions; missing descriptions. Write unique 140-155 char descriptions for every page.
- [ ] **Rewrite homepage H1 and hero to be Amarillo-first** — Current multi-city dilution is "eligible everywhere, competitive nowhere."

### Add After Blocking Issues Fixed (High Impact)

- [ ] **Strengthen thin city pages** — Canyon, Borger, Pampa, Dumas, Hereford need 800-1200 words of unique local content. Each needs its own weather history, landmark references, unique FAQs.
- [ ] **Add `WebSite` entity schema to homepage** — Establishes sitewide identity; include `sameAs` to GBP, BBB, Facebook.
- [ ] **Add `Person` schema for business owner** — Add to About page; tie to LocalBusiness via `employee` property.
- [ ] **Add answer-first content structure** — Reframe H2s as homeowner questions across all service pages.
- [ ] **Add trust badges above the fold** — GAF certification, BBB accreditation, TX license number, years in business.
- [ ] **Activate before/after gallery pages** — Use existing project photos; add city, material, and context.
- [ ] **Hail damage content strengthening** — Ensure hail damage pages are strong, insurance-process-aware, storm-season updated.

### Future Consideration (After Rankings Improve)

- [ ] **`ImageObject` schema on galleries** — High impact but requires gallery infrastructure to exist first.
- [ ] **Cost/pricing transparency pages** — "How much does roof replacement cost in Amarillo TX" is high-intent; add after core pages rank.
- [ ] **Video content** — Job walkthroughs, testimonials. High effort; address after organic traffic reaches 100+ clicks/month.
- [ ] **Storm-season content refresh automation** — Update hail/storm pages after weather events; tactical, not structural.
- [ ] **Interactive service area map** — Shows completed projects; differentiator but requires tech work outside scope.

---

## Feature Prioritization Matrix

| Feature | SEO Value | Implementation Cost | Priority |
|---------|-----------|---------------------|----------|
| Fix entity name (NAP consistency) | HIGH | LOW | P1 |
| Fix AggregateRating schema (or remove) | HIGH | LOW | P1 |
| Fix `@type` to `RoofingContractor` | HIGH | LOW | P1 |
| Fix meta descriptions (all 268 pages) | HIGH | MEDIUM | P1 |
| Amarillo-first homepage H1/hero | HIGH | LOW | P1 |
| Thin city pages → 800-1200 words | HIGH | HIGH | P1 |
| WebSite entity schema | MEDIUM | LOW | P2 |
| Person schema (owner E-E-A-T) | MEDIUM | LOW | P2 |
| Answer-first content structure | HIGH | MEDIUM | P2 |
| Trust badges above fold | MEDIUM | LOW | P2 |
| Before/after galleries | HIGH | MEDIUM | P2 |
| Hail damage content strengthening | HIGH | MEDIUM | P2 |
| ImageObject schema | MEDIUM | MEDIUM | P3 |
| Cost/pricing content pages | MEDIUM | MEDIUM | P3 |
| Video content | MEDIUM | HIGH | P3 |
| Storm-season content refresh | LOW | LOW | P3 |

**Priority key:**
- P1: Must have for rankings to improve at all
- P2: Should have within this project cycle
- P3: Future consideration, after P1/P2 deliver results

---

## Competitor Feature Analysis

Based on what top-ranking local roofing contractors typically have (MEDIUM confidence — inferred from industry research, not direct SERP audit of Amarillo competitors):

| Feature | Typical Position 1-3 Competitor | 5 Star Roofing Current | Gap |
|---------|----------------------------------|------------------------|-----|
| `RoofingContractor` schema type | Yes | No (uses `LocalBusiness`) | FIX |
| WebSite entity schema | Yes | No | ADD |
| On-page reviews with AggregateRating | Yes | Has schema but no on-page reviews | FIX or REMOVE schema |
| Amarillo-focused homepage | Yes (for Amarillo-based businesses) | No (multi-city dilution) | FIX |
| Consistent entity name everywhere | Yes | No | FIX |
| Trust badges (GAF, BBB) | Yes | Unknown — needs audit | ADD |
| Before/after project galleries | Yes (most top performers) | Partial | STRENGTHEN |
| Answer-first H2 structure | Emerging standard | Not consistently applied | ADD |
| Person/team schema | Occasionally | No | ADD |
| Hail damage specific pages | Yes (Texas-specific market) | Exists but may be thin | STRENGTHEN |
| 800+ word city pages | Yes | Mixed — some thin | FIX thin pages |

---

## Sources

- [Local SEO for Roofing Contractors Complete 2026 Guide — LocalMighty](https://www.localmighty.com/blog/local-seo-checklist-for-roofing-contractors/)
- [The Complete 2025 SEO Playbook for Roofing Companies — FrontendHorizon](https://www.frontendhorizon.com/blog/2025-seo-for-roofers)
- [Schema Markup for Contractor Websites — ESEOSpace](https://eseospace.com/blog/schema-markup-for-contractor-websites/)
- [RoofingContractor — Schema.org Type](https://schema.org/RoofingContractor)
- [Review Snippet Structured Data — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Local SEO Guide for Roofing Companies in 2025 — INSIDEA](https://insidea.com/blog/marketing/roofing-companies/ultimate-local-seo-guide/)
- [Roofing SEO: A Complete Guide to Getting More Leads — WebFX](https://www.webfx.com/blog/home-services/roofing-seo-guide/)
- [How Reviews + Badges Double Calls on Roofing Websites — YourLocalSiteDesign](https://www.yourlocalsitedesign.com/post/roofing-reviews-and-badges-double-calls)
- [Content Length Best Practices For Roofing Websites — Brand Vision](https://www.brandvm.com/post/content-length-best-practices-for-roofing-websites)
- [Local SEO in 2026: The Ultimate Guide — Boulder SEO Marketing](https://boulderseomarketing.com/local-seo-a-comprehensive-guide/)
- [NAP Consistency in Local SEO — STechLocal](https://learning-hub.stechlocal.com/seo-basics-beyond/understanding-nap-in-local-seo/)
- [Top Roofing Keywords by State 2025 — SEO For Home Service](https://seoforhomeservice.com/roofing/top-roofing-keywords-by-state-2025/)
- [How Will AI Mode Impact Local SEO — Search Engine Journal](https://www.searchenginejournal.com/how-will-ai-mode-impact-local-seo/561002/)

---

*Feature research for: Local roofing contractor SEO on-page optimization*
*Researched: 2026-02-20*
*Confidence: MEDIUM-HIGH — WebSearch verified across multiple industry-specific sources; AggregateRating guideline confirmed via Google Search Central official docs*
