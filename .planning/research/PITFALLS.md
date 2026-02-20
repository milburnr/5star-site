# Pitfalls Research

**Domain:** Local service SEO — multi-city roofing contractor site optimization
**Researched:** 2026-02-20
**Confidence:** HIGH (multiple verified sources; site-specific patterns confirmed by direct code inspection)

---

## Critical Pitfalls

### Pitfall 1: Self-Canonicalizing Near-Duplicate Variant Pages

**What goes wrong:**
The site currently has 25+ pages with `-texas` and `-tx` URL suffixes (e.g., `/commercial-roofing-midland-texas/` alongside `/commercial-roofing-midland/`) where each page self-canonicalizes to its own URL rather than pointing to the primary. This creates two live, indexable pages competing for identical intent with nearly identical content. Google does not consolidate authority between them — it simply chooses one to rank (usually neither, because both are seen as thin/duplicate), and both pages dilute each other.

**Why it happens:**
These pages were generated as keyword variants to capture queries like "commercial roofing Midland Texas" vs. "commercial roofing Midland TX." The intent was good (capturing variant queries) but the execution left both pages indexable with their own canonicals instead of using the `-texas`/`-tx` variant pages as canonical redirects to the primary.

**How to avoid:**
For each variant pair, keep ONE as the primary URL (the shorter, cleaner one) and either:
- 301 redirect the variant to the primary, OR
- Set the variant page's canonical to point to the primary

Do NOT self-canonicalize variant pages. Only one URL per service+city combination should be independently indexable. Review current netlify.toml — the hail damage variants ARE handled with 301s, but commercial roofing and residential roofing variants are not.

**Warning signs:**
- Running a site crawl (Screaming Frog / Ahrefs) shows two pages with 90%+ content similarity targeting the same city
- Google Search Console shows two URLs indexing for the same query, both with low impressions
- `commercial-roofing-midland` and `commercial-roofing-midland-texas` both appear in GSC with near-identical average positions

**Phase to address:**
Pre-optimization audit phase — must be resolved before ANY new content changes to avoid consolidating the wrong page.

---

### Pitfall 2: Fabricated AggregateRating Schema Triggering Manual Actions

**What goes wrong:**
212 of the site's pages include `AggregateRating` schema with static, hard-coded review counts (`"reviewCount": "127"`, `"84"`, `"156"`) that are plainly fabricated — the same numbers appear across dozens of unrelated city pages, and the `ratingValue` is uniformly `"5.0"`. Google's spam policies explicitly prohibit structured data that does not match real content on the page. This is among the highest-risk patterns for receiving a manual action (rich snippet penalty) under Google's December 2025 and August 2025 Spam Updates, which specifically targeted misleading markup.

**Why it happens:**
Schema was generated programmatically to create rich snippets in search results. The temptation is to add review counts to improve CTR. However, Google requires that `AggregateRating` schema reflects actual reviews displayed on the page. If the page shows no reviews, the schema is deceptive.

**How to avoid:**
Remove `AggregateRating` from all pages that do not display actual, visible reviews. The only valid use is on a page with a genuine review section that lists real reviews. If the business has Google reviews, the proper path is to link to the Google Business Profile — not to fabricate review schema per-page.

Alternatively: keep aggregate rating schema ONLY on the homepage or a single reviews page where actual testimonials are displayed and count matches schema value.

**Warning signs:**
- Google Search Console shows a manual action notification under "Security & Manual Actions"
- Rich snippets disappear from search results for all pages simultaneously
- Google Search Console "Enhancements" section shows errors for Review Snippets
- Google's Rich Results Test flags the markup as invalid or deceptive

**Phase to address:**
Emergency pre-optimization fix — this is a live compliance risk that should be addressed before making other changes. The August 2025 and December 2025 Spam Updates are actively targeting this exact pattern.

---

### Pitfall 3: NAP Entity Inconsistency Across Schema (admin@ vs info@ email)

**What goes wrong:**
The site has a documented NAP inconsistency: `constants.ts` declares the business email as `admin@5starroofingpros.com`, but the majority of page schemas use `info@5starroofingpros.com`. Google's entity resolution treats NAP data as identity signals. When schema data conflicts with the Google Business Profile and citation data, Google reduces confidence in the entity, which suppresses local pack and map rankings. This is distinct from a "penalty" — it's an entity confidence problem that silently caps rankings.

**Why it happens:**
Pages were generated at different times with different email values. The inconsistency was introduced during bulk page generation and never audited. It's an easy mistake to miss because it doesn't cause a visible error — the site works fine, pages load, but Google sees two different entities.

**How to avoid:**
Audit ALL schema across all 268 pages and standardize to one email. Use the value in `constants.ts` as the single source of truth. Automate this: any schema generation should import from `BUSINESS_INFO` rather than hardcoding strings.

Also verify this matches: the Google Business Profile email, any major citation directories (Yelp, BBB, Houzz), and the contact page. All must match exactly.

**Warning signs:**
- BrightLocal or Whitespark citation audit shows email mismatches
- Google Business Profile shows different email than website schema
- Local pack rankings are lower than organic rankings for same queries (entity confidence suppression pattern)

**Phase to address:**
Entity audit phase — resolve before content changes so any improvements to content land on a clean entity foundation.

---

### Pitfall 4: Doorway Page Pattern — City+Service Matrix With Thin Unique Differentiation

**What goes wrong:**
Google's August 2025 Spam Update and March 2024 Core Update both specifically targeted "doorway-style" city pages — pages where only city names and minor local references differ but the informational substance is identical. The site has 268 pages across a service × city matrix. Even with city-specific FAQ answers and local landmarks, if the structural template is too similar across pages, Google may classify them as doorways and demote the entire domain.

The risk is highest for secondary cities (Borger, Perryton, Snyder, Levelland, Andrews, Monahans) where the business likely has minimal actual presence. Google's 2025 diversity adjustment in local search already makes it harder for a single roofer to appear for both the map pack and organic results — thin city pages for low-presence cities compound this.

**Why it happens:**
Multi-city roofing sites NEED city pages for local SEO. The mistake is not having city pages — it's having city pages that are functionally identical except for the city name in headings, URLs, and a few local references. The threshold Google uses is whether a searcher landing on `/commercial-roofing-borger/` would feel they got genuinely local, helpful information vs. a generic roofing page with "Borger" swapped in.

**How to avoid:**
For primary service cities (Amarillo, Midland, Odessa, Lubbock): full unique content — local weather data, neighborhood references, specific project types, local regulations.

For secondary cities (Borger, Pampa, Dumas, Hereford, Canyon, Levelland, Andrews, Monahans, Perryton, Snyder, Big Spring): either (a) consolidate to a service-area page covering the region, or (b) add genuinely unique content — local contact (service phone, area manager name), real project photos from that area, city-specific climate/building code notes.

Do NOT simply add a few more city-name mentions or a local landmark. The content must serve a searcher who typed "roofing [city]" and expects information relevant to that city.

**Warning signs:**
- Screaming Frog content similarity scores above 80% between city pages for same service
- Secondary city pages show 0 impressions in GSC despite being indexed
- Pages are indexed but receive no organic clicks over 90 days
- Google Search Console shows these pages being "excluded" or "Crawled - currently not indexed"

**Phase to address:**
Content differentiation phase — before adding new content, audit which city pages are genuinely differentiated and which are thin doorways. Consolidate or enrich, don't just add more pages.

---

### Pitfall 5: Breaking Cloudflare R2 Image URLs During Optimization

**What goes wrong:**
All hero images and page content images are hosted on Cloudflare R2 at `https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/...`. If any optimization work renames, reorganizes, or references images differently, broken image links result. Broken images on 268 pages would cause: immediate visual degradation (user experience), increased bounce rates (negative ranking signal), Google crawl errors, and loss of Google Images indexing for geo-tagged project photos that currently provide local relevance signals.

This is especially risky because the R2 public bucket URL is hardcoded as string literals across hundreds of page.tsx files — there is no centralized image reference. A find-and-replace error could silently break dozens of pages.

**Why it happens:**
Static exports with CDN-hosted images don't have build-time validation of remote URLs. Next.js with `unoptimized: true` will export the HTML with whatever URL is in the src attribute — no error if the image 404s. Optimization phases involving content updates often involve touching page files that contain these hardcoded URLs.

**How to avoid:**
Before any file edits: run a baseline image audit (`curl` check or Screaming Frog spider) to document all current R2 image URLs and their HTTP status. Treat R2 URLs as read-only during optimization. Never rename or reorganize R2 objects.

When editing page files: use search before edit to confirm the exact R2 URL string is preserved. Never do bulk find-and-replace on page files without explicitly scoping to exclude the R2 URL domain.

After each phase: re-run image audit and compare to baseline. Any new 404s must be fixed before proceeding.

**Warning signs:**
- Next.js build completes with no errors but manual page inspection shows broken images
- Google Search Console "Crawl Errors" section shows new 404s after optimization work
- Screaming Frog image audit shows new 404 image responses after a deployment
- Hero sections display broken image icons instead of backgrounds

**Phase to address:**
Every phase — establish image URL audit as part of deployment checklist from the start.

---

## Moderate Pitfalls

### Pitfall 6: Canonical URL Format Inconsistency (Trailing Slash vs. None)

**What goes wrong:**
Next.js is configured with `trailingSlash: true`, so all URLs should end with `/`. However, if any canonical meta tag, schema `@id`, or sitemap entry omits the trailing slash, Google treats it as a different URL and may split link equity between `/page` and `/page/`. On a 268-page site, even a handful of inconsistent canonicals dilutes the signal.

Current observation: the homepage canonical is `https://5starroofingpros.com` (no trailing slash) while all inner pages have trailing slashes. The homepage canonical should be `https://5starroofingpros.com/`.

**Prevention:**
Audit all canonical URLs in page metadata and all `@id` values in schema. Standardize: all URLs end with `/`. Update the homepage canonical. Run Netlify redirects to enforce trailing slashes at the server level (already configured but verify).

**Phase to address:**
Technical SEO audit phase.

---

### Pitfall 7: Over-Optimization of Title Tags With Keyword Stuffing

**What goes wrong:**
Several page titles use the pattern: `[Service] [City] TX | [Keyword] | [Another Keyword]` — e.g., "Roof Repair Amarillo TX | Expert Service | Free Inspection". While keyword-rich titles are valuable, titles with 3+ pipe-separated keyword segments can trigger Google's over-optimization signals. Google also truncates titles beyond ~60 characters in SERPs, so keyword stuffing past that length provides no SERP benefit while risking algorithmic suppression.

**Prevention:**
Title format: `[Primary Keyword] [City] | [Unique Value Prop]` — one brand differentiator, not a keyword list. Keep under 60 characters. Avoid repeating the city name or service name more than once in the title.

**Phase to address:**
Title tag optimization phase.

---

### Pitfall 8: Changing URLs Without Full Redirect Coverage

**What goes wrong:**
If the optimization work involves restructuring any URLs (e.g., consolidating `/commercial-roofing-midland-texas/` into `/commercial-roofing-midland/` via redirect), every internal link pointing to the old URL must also be updated. 301 redirects preserve ~99% of ranking signals but every redirect chain costs a small amount of link equity. A chain of 2+ redirects (e.g., `/old-url/` → `/mid-url/` → `/final-url/`) reduces equity transfer by ~15% per hop.

More critically: if a URL is removed (noindexed or deleted) without a 301 redirect, any existing backlinks to that URL deliver zero equity.

**Prevention:**
Before removing or consolidating any URL:
1. Check GSC for any backlinks to that URL
2. Check for the URL in the sitemap
3. Add 301 redirect in netlify.toml BEFORE the page is removed
4. Update all internal links to point directly to the destination URL (not through the redirect)

**Phase to address:**
URL consolidation/cleanup phase.

---

### Pitfall 9: Adding New Content Without Checking Keyword Cannibalization

**What goes wrong:**
With 268 existing pages, adding new content for SEO improvements risks creating new pages that compete with existing pages for the same queries. For example, if the optimization plan adds a new `/roof-repair-amarillo-tx/` page to target the "TX" variant query while `/roof-repair-amarillo/` already exists, both pages now compete. Google will pick one to rank (often the weaker one) and the effort is wasted or counterproductive.

**Prevention:**
Before creating any new page:
1. Search GSC for the target keyword — which existing page is currently receiving impressions for it?
2. Check if that existing page should instead be optimized rather than a new page created
3. Run a content gap analysis: new pages should target queries where NO existing page currently appears in the top 100

**Phase to address:**
Content planning phase — apply this check to every new page proposal.

---

### Pitfall 10: Making Too Many Changes Simultaneously

**What goes wrong:**
When SEO changes are made in bulk (schema overhaul + title tags + new content + internal links + URL changes all in one deployment), it becomes impossible to diagnose which change caused a ranking movement — positive or negative. If rankings drop after a bulk deployment, there's no way to isolate the cause without rolling back everything.

**Prevention:**
Stage changes in phases with 1-2 week monitoring windows between phases. For this site:
- Phase 1: Emergency fixes (fake reviews schema, email inconsistency) — no content changes
- Phase 2: URL consolidation (redirect variants) — no content changes
- Phase 3: Title/meta improvements — measure impact before moving to content
- Phase 4: Content depth improvements — one city at a time, starting with primary city (Amarillo)
- Monitor GSC after each phase before proceeding

**Phase to address:**
All phases — build into project plan as a constraint.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcoding business info (email, phone) in page files instead of importing from constants.ts | Faster page generation | Entity inconsistencies compound across 268 files; one business info change requires touching every file | Never — always import from constants.ts |
| Self-canonicalizing variant pages (-texas/-tx) instead of redirecting | Captures variant keyword impressions | Both pages in variant pair are classified as thin/duplicate; neither ranks well | Never — one canonical URL per intent |
| Fabricated AggregateRating schema | Potential rich snippet display | Manual action risk under Google Spam policies; rich snippet ban affects all 268 pages | Never — only use when real reviews are displayed on-page |
| Bulk page generation with city-name substitution, minimal unique content | Fast coverage of 14-city matrix | August 2025 Spam Update targets doorway patterns; secondary city pages may be excluded from index | Acceptable only for hub pages that link to richer location-specific content |
| Static review counts in schema that don't match real review count | Appears to have many reviews | Google's entity graph compares schema claims to GBP review count; mismatch degrades entity trust | Never — use real count or omit |

---

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Cloudflare R2 images | Changing R2 object names or paths during optimization, breaking hundreds of hardcoded URLs | Treat R2 image URLs as immutable; never rename; add new images instead of replacing |
| Google Business Profile | GBP name, address, phone not matching website schema exactly | Sync constants.ts values to match GBP exactly; check GBP for the authoritative version of business name |
| Netlify 301 redirects | Adding redirects in netlify.toml AFTER a page is already live and indexed without a redirect | Add redirect first, then remove/noindex the old page; verify redirect is live before next crawl |
| Next.js static export | Expecting server-side redirect logic; forgetting that `trailingSlash: true` doesn't affect external links or schema URLs | All schema `@id` and canonical values must manually include trailing slashes |
| Google Search Console Indexing API | Submitting all 268 pages daily; Google's documented use is only for JobPosting/BroadcastEvent | Use sparingly; submit only new/changed pages; don't re-submit unchanged pages |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Making changes without GSC baseline | Can't tell if optimization helped or hurt | Export GSC data for all pages (queries, impressions, position) before ANY changes | Day 1 of optimization without baseline |
| Deploying schema changes across all 268 pages simultaneously | If a schema error is introduced, all pages break simultaneously; Google may revoke rich snippet eligibility for the entire domain | Test schema changes on 5 representative pages; validate with Rich Results Test; then deploy site-wide | Any bulk schema deployment |
| 268-page sitemap with thin/excluded pages | Crawl budget spent on low-value pages that Google excludes anyway; Googlebot ignores the site more broadly | Audit sitemap: include only indexable, non-thin pages; noindex or redirect thin variants before submitting sitemap | When >20% of sitemap pages are "Excluded" in GSC |
| Internal link anchor text over-optimization | All internal links to `/roof-repair-amarillo/` use exact-match anchor "roof repair amarillo" | Vary anchor text; use brand + location, descriptive phrases, and exact match in roughly equal proportion | When site-wide internal linking pattern is uniform |

---

## "Looks Done But Isn't" Checklist

- [ ] **Schema email consistency:** All 268 pages must use `admin@5starroofingpros.com` — verify no page still uses `info@5starroofingpros.com`
- [ ] **AggregateRating removal:** All pages without real on-page reviews must have AggregateRating schema removed — verify with Rich Results Test on 10 sample pages
- [ ] **Variant page canonicals:** All `-texas`/`-tx` variant pages must either 301 redirect or point canonical to primary URL — verify netlify.toml covers every pair
- [ ] **Homepage canonical:** Must include trailing slash `https://5starroofingpros.com/` not `https://5starroofingpros.com`
- [ ] **Sitemap currency:** After any URL consolidation, sitemap.xml must be regenerated and resubmitted via GSC
- [ ] **R2 images post-deploy:** After any batch file edit, run broken image check on 10 representative pages before declaring phase complete
- [ ] **Internal links updated:** After any URL change via redirect, check that internal links point to new URL directly (not through redirect)
- [ ] **GSC index coverage:** After 2-3 weeks post-deployment, check that variant pages now show as "Redirected" not "Indexed" in GSC

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Manual action from fake AggregateRating schema | HIGH (2-6 months to recover even after fix) | Remove all fake schema, submit reconsideration request in GSC, document the removal; recovery requires a new core update cycle |
| Broken R2 images post-deployment | LOW-MEDIUM (fix same day = minimal ranking impact) | Restore original R2 URLs; use netlify.toml rewrite rules to alias new paths to old R2 paths as emergency measure |
| Ranking drops from bulk simultaneous changes | MEDIUM (2-4 weeks to isolate) | Use GSC to identify which pages dropped; roll back last deployment; re-deploy changes one phase at a time |
| Near-duplicate variant pages incorrectly consolidated (301 to wrong canonical) | MEDIUM (1-2 weeks) | Update redirect to correct destination; resubmit correct URL to GSC indexing; wait for recrawl |
| Entity inconsistency (NAP mismatch) | LOW-MEDIUM (4-8 weeks) | Standardize all schema to one email/NAP; update GBP; submit sitemap; inconsistency resolution takes multiple crawl cycles |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Fabricated AggregateRating schema | Phase 1: Emergency compliance fixes | Rich Results Test on 10 pages shows no review markup; GSC Enhancements tab shows no review snippet errors |
| NAP entity inconsistency (email) | Phase 1: Entity audit | Grep all page files for `"email"` — only one value appears |
| Self-canonicalizing variant pages | Phase 2: URL canonicalization | Screaming Frog crawl shows 0 pages with near-duplicate content; all -texas/-tx pages show as 301 redirected |
| Homepage canonical missing trailing slash | Phase 2: Technical SEO audit | Fetch homepage in GSC; canonical shown is `https://5starroofingpros.com/` |
| Doorway page pattern (thin city pages) | Phase 3: Content differentiation | Secondary city pages have at least 3 unique content elements not present on other city pages for same service |
| Cloudflare R2 broken images | Every phase deployment | Screaming Frog image crawl shows 0 new 404 image errors compared to pre-phase baseline |
| Over-optimized title tags | Phase 2: Technical SEO audit | All title tags under 60 characters; no title contains more than 2 keywords |
| Bulk simultaneous changes | All phases | Each phase deployed separately with GSC monitoring window before next phase |
| Keyword cannibalization from new pages | Phase 3 and beyond | Before each new page creation, GSC query report confirms no existing page ranks for target query |
| URL change without redirect coverage | Phase 2: URL consolidation | Every removed URL returns 301 in Screaming Frog crawl; GSC shows removed pages as "Redirected" |

---

## Sources

- [The Effect of Duplicate Content on SEO for Multi-Location Brands | Rio SEO](https://www.rioseo.com/blog/the-effect-of-duplicate-content-on-seo-for-multi-location-brands/) — MEDIUM confidence (multiple verified by Google guidance)
- [When Is Duplicate Content Acceptable For Local SEO? Google Explains](https://www.searchenginejournal.com/when-is-duplicate-content-acceptable-for-local-seo-google-explains/519562/) — HIGH confidence (Google's John Mueller directly addressed)
- [Google's August 2025 Spam Update Explained](https://thesearchstudios.com/googles-august-2025-spam-update-explained/) — MEDIUM confidence (post-update industry analysis)
- [What web creators should know about our March 2024 core update and new spam policies](https://developers.google.com/search/blog/2024/03/core-update-spam-policies) — HIGH confidence (Google official)
- [Multi-Location SEO: Rank Every Store Without Keyword Conflicts](https://www.omnifunnelmarketing.com/blog/local-seo-multi-location-businesses-rank-without-keyword-cannibalization) — MEDIUM confidence
- [NAP Consistency: How to Fix Inconsistent NAP for Better Local SEO Rankings](https://faithamaole.com/how-to-fix-inconsistent-nap-citations-for-ranking/) — MEDIUM confidence (multiple corroborating sources agree)
- [Common Schema Markup Errors That Kill Your SEO Rankings](https://robertcelt95.medium.com/common-schema-markup-errors-that-kill-your-seo-rankings-cc64a83480af) — MEDIUM confidence
- [When Schema Markup Backfires: Over-Optimisation Mistakes to Avoid](https://www.gtechme.com/insights/schema-markup-over-optimization-mistakes/) — MEDIUM confidence
- [Google December 2025 Core Update](https://www.dataslayer.ai/blog/google-core-update-december-2025-what-changed-and-how-to-fix-your-rankings) — MEDIUM confidence
- [Broken Image Links and SEO Impact](https://climbconquer.com/seo/technical-seo/broken-images/) — MEDIUM confidence
- Direct code inspection: `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/app/` — HIGH confidence (first-party observation)

---
*Pitfalls research for: 5 Star Roofing — multi-city local service SEO optimization*
*Researched: 2026-02-20*
