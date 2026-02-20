# Phase 2: URL Canonicalization - Research

**Researched:** 2026-02-20
**Domain:** Netlify 301 redirects, Next.js static export, URL deduplication
**Confidence:** HIGH

## Summary

The site has 246 `page.tsx` files generating static HTML. Of these, approximately 30 are near-duplicate URL variants targeting the same keywords as their canonical counterparts. The duplication falls into three clear patterns: (1) `-texas`/`-tx` geographic suffix variants of canonical `{service}-{city}` URLs, (2) `-in-{city}` prepositional variants targeting identical keywords, and (3) alternate slug orderings (e.g., `roof-repair-services-in-amarillo` vs `roof-repair-amarillo`). The existing `netlify.toml` already contains 36 `force=true` 301 redirects covering about half the variants, but has a critical flaw: it redirects TO `-tx` suffixed URLs (e.g., `/hail-damage-repair-amarillo-tx/`) rather than AWAY from them, contradicting the `InternalLinks` component which generates suffix-free canonical URLs (`/hail-damage-repair-amarillo/`).

The work is straightforward: rewrite the existing netlify.toml redirect targets to point at the true canonical URLs (matching the `InternalLinks` pattern of `/{service}-{city}/`), add missing redirects for uncovered variants, update internal links in affected page.tsx files to point at canonical URLs, then delete the duplicate page.tsx directories after redirects are deployed and verified live. No new packages are needed. No architectural changes required.

**Primary recommendation:** Adopt the `InternalLinks` component's `/{service}-{city}/` pattern as the canonical URL standard. Redirect all `-texas`, `-tx`, `-in-{city}`, and alternate-slug variants to their canonical counterpart. Deploy redirects first, verify live, then delete duplicate `page.tsx` files in a separate commit.

## Standard Stack

### Core

No new libraries needed. This phase is pure configuration and file management.

| Tool | Purpose | Why |
|------|---------|-----|
| `netlify.toml` | 301 redirect rules | Netlify's native redirect engine; `force=true` overrides static files; no build changes needed |
| `grep`/`find` | Internal link audit | Identify pages linking to redirect source URLs that need href updates |
| Next.js static export | Page deletion | Remove `app/{variant}/page.tsx` directories; rebuild produces fewer HTML files |

### Supporting

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `curl -I` | Verify live redirects | After deployment, confirm 301 status code and correct `Location` header for each redirect |
| `public/sitemap.xml` | Sitemap cleanup | After page deletion, regenerate to exclude redirected URLs |

### Alternatives Considered

None. This is standard Netlify redirect configuration.

## Architecture Patterns

### Pattern 1: Canonical URL Convention

**What:** Every service-city page uses the pattern `/{service}-{city}/` with no geographic suffix. This matches the `InternalLinks` component's URL generation logic at line 178: `href={/${currentService}-${citySlug}/}`.

**When to use:** Always. Every redirect target must follow this pattern.

**Canonical pattern examples:**
```
/hail-damage-repair-amarillo/     (NOT /hail-damage-repair-amarillo-tx/)
/commercial-roofing-midland/      (NOT /commercial-roofing-midland-texas/)
/residential-roofing-lubbock/     (NOT /residential-roofing-lubbock-texas/)
/roof-inspections-amarillo/       (NOT /roof-inspection-amarillo-texas/)
/storm-damage-repair-amarillo/    (NOT /storm-damage-roof-repair-in-amarillo/)
```

**Exception: Location hub pages** use `{city}-texas-roofing` or `{city}-tx-roofing` as canonical when no suffix-free counterpart exists (these are the ONLY page for that city):
```
/borger-texas-roofing/    (canonical - unique page)
/bushland-tx-roofing/     (canonical - unique page)
/claude-tx-roofing/       (canonical - unique page)
```

### Pattern 2: Netlify Redirect with Force

**What:** Each redirect uses `force = true` to override the static HTML file that Next.js builds for the variant page. Without `force = true`, Netlify serves the actual file and ignores the redirect.

**Format:**
```toml
# Both with and without trailing slash to cover all request patterns
[[redirects]]
  from = "/hail-damage-repair-amarillo-tx"
  to = "/hail-damage-repair-amarillo/"
  status = 301
  force = true

[[redirects]]
  from = "/hail-damage-repair-amarillo-tx/"
  to = "/hail-damage-repair-amarillo/"
  status = 301
  force = true
```

**Why both trailing slash variants?** `next.config.ts` has `trailingSlash: true` so canonical URLs always end with `/`. But external links or bookmarks may omit the slash. Both patterns must redirect.

### Pattern 3: Deploy-Verify-Delete Sequence

**What:** Never delete a `page.tsx` file until its redirect is confirmed live.

**Sequence:**
1. Add all redirects to `netlify.toml` (redirect rules work even while static files exist, due to `force = true`)
2. Update internal links in page content to point at canonical URLs
3. Deploy to Netlify
4. Verify every redirect returns 301 with correct `Location` header
5. Delete duplicate `app/{variant}/page.tsx` directories
6. Rebuild and redeploy (fewer pages in build output)
7. Regenerate sitemap excluding deleted pages
8. Resubmit sitemap to Google

### Anti-Patterns to Avoid

- **Deleting page.tsx before verifying redirect is live:** If the redirect has a typo and the page is gone, visitors get a 404. Keep the file as a safety net until the redirect is confirmed.
- **Redirecting TO a `-tx`/`-texas` URL:** This is the current bug. The canonical target should NEVER have a geographic suffix. Always redirect TO the suffix-free URL.
- **Redirect chains:** Never redirect A -> B -> C. Every variant must redirect directly to the final canonical. The current `netlify.toml` has a chain risk: `/hail-damage-roof-repair-in-amarillo/` -> `/hail-damage-repair-amarillo-tx/` (current), and then if we redirect `/hail-damage-repair-amarillo-tx/` -> `/hail-damage-repair-amarillo/`, that creates a 2-hop chain. Fix by updating ALL sources to point directly at the final canonical.
- **Forgetting to update internal links:** If page A contains `<a href="/residential-roofing-amarillo-tx/">`, the redirect will work for users, but Google sees the link equity going through a 301 hop. Update hrefs in source code to point directly at the canonical URL.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| 301 redirects | Next.js middleware or rewrites | `netlify.toml` `[[redirects]]` | Static export has no server; Netlify handles redirects at CDN edge before the file is served |
| Redirect verification | Manual browser testing | `curl -sI $URL \| grep -E "HTTP\|Location"` in a bash loop | Must verify all ~60 redirect rules systematically |
| Finding internal link references | Manual file reading | `grep -r "variant-slug" app/ --include="*.tsx"` | 246 files to check; must be automated |

**Key insight:** All redirects are CDN-level config, not application code. Next.js static export cannot handle redirects at all -- there is no server. Netlify.toml is the only mechanism.

## Common Pitfalls

### Pitfall 1: Existing Redirect Targets Are Wrong

**What goes wrong:** The current `netlify.toml` redirects hail damage variants TO `/hail-damage-repair-amarillo-tx/` but the `InternalLinks` component generates `/hail-damage-repair-amarillo/` (no `-tx`). Both the `-tx` page and the suffix-free page exist, creating two live pages competing for the same keyword.

**Why it happens:** The initial redirect consolidation chose the `-tx` suffix URL as canonical without checking the `InternalLinks` component's URL generation pattern.

**How to avoid:** Rewrite ALL hail-damage redirect targets from `-tx` to suffix-free. The canonical URL for Amarillo hail damage is `/hail-damage-repair-amarillo/`, not `/hail-damage-repair-amarillo-tx/`.

**Warning signs:** Two live pages with near-identical title tags for the same city+service.

### Pitfall 2: Internal Links Pointing at Redirect Sources

**What goes wrong:** After setting up redirects, 84+ pages still contain `<a href="...">` links pointing at the old variant URLs. Google follows these links, hits a 301, then lands on the canonical. The redirect works but leaks PageRank.

**Why it happens:** Hard-coded hrefs in page.tsx files reference variant URLs.

**How to avoid:** Run a grep sweep across all `app/**/*.tsx` files for every redirect source URL. Update each href to point at the canonical.

**Warning signs:** `grep -r "variant-slug" app/ --include="*.tsx"` returns matches after redirect deployment.

### Pitfall 3: Netlify Redirect Ordering

**What goes wrong:** Netlify processes redirects top-to-bottom and uses the first match. The catch-all `/* -> /index.html` at the bottom (status 200) would intercept unmatched URLs. All 301 redirects MUST appear above the catch-all.

**Why it happens:** Someone adds new redirects at the end of the file after the catch-all.

**How to avoid:** Keep all `[[redirects]]` with `status = 301` in the clearly marked section ABOVE the `/* -> /index.html` catch-all. The current file already has this structure -- maintain it.

### Pitfall 4: Forgetting Both Trailing Slash Variants

**What goes wrong:** A redirect from `/foo-bar` to `/canonical/` works, but `/foo-bar/` (with trailing slash) is not redirected and serves the static page.

**Why it happens:** Netlify treats `/foo` and `/foo/` as separate paths.

**How to avoid:** Always add TWO redirect rules per variant: one without trailing slash, one with. The current `netlify.toml` already follows this pattern.

### Pitfall 5: Sitemap Contains Redirected URLs

**What goes wrong:** After redirects go live, `sitemap.xml` still lists the old variant URLs. Google crawls them, sees 301s, and gets confused about which URL is canonical.

**Why it happens:** Sitemap is generated from the `out/` directory which still contains HTML files for variants (until page.tsx files are deleted).

**How to avoid:** Regenerate sitemap AFTER deleting duplicate page.tsx files and rebuilding. Verify sitemap contains only canonical URLs.

## Code Examples

### Netlify.toml Redirect Block (corrected targets)

```toml
# Amarillo Hail Damage - Consolidate to /hail-damage-repair-amarillo/
# (CHANGED from /hail-damage-repair-amarillo-tx/ to match InternalLinks pattern)
[[redirects]]
  from = "/hail-damage-repair-amarillo-tx"
  to = "/hail-damage-repair-amarillo/"
  status = 301
  force = true

[[redirects]]
  from = "/hail-damage-repair-amarillo-tx/"
  to = "/hail-damage-repair-amarillo/"
  status = 301
  force = true

[[redirects]]
  from = "/hail-damage-roof-repair-in-amarillo"
  to = "/hail-damage-repair-amarillo/"
  status = 301
  force = true

[[redirects]]
  from = "/hail-damage-roof-repair-in-amarillo/"
  to = "/hail-damage-repair-amarillo/"
  status = 301
  force = true
```

### Redirect Verification Script

```bash
#!/bin/bash
# Verify all 301 redirects are working correctly
SITE="https://5starroofingpros.com"

declare -a REDIRECTS=(
  "/hail-damage-repair-amarillo-tx/|/hail-damage-repair-amarillo/"
  "/hail-damage-roof-repair-in-amarillo/|/hail-damage-repair-amarillo/"
  # ... add all redirect pairs
)

for pair in "${REDIRECTS[@]}"; do
  FROM="${pair%%|*}"
  EXPECTED="${pair##*|}"
  ACTUAL=$(curl -sI "${SITE}${FROM}" | grep -i "location:" | sed 's/location: //i' | tr -d '\r')
  if [[ "$ACTUAL" == *"$EXPECTED"* ]]; then
    echo "OK: $FROM -> $EXPECTED"
  else
    echo "FAIL: $FROM -> expected $EXPECTED, got $ACTUAL"
  fi
done
```

### Internal Link Audit Command

```bash
# Find all pages linking to a redirect source URL
grep -r "hail-damage-repair-amarillo-tx" app/ --include="*.tsx" -l
# Fix: Replace with canonical URL in each match
```

## Complete Duplicate Inventory

### GROUP 1: Hail Damage Amarillo (6 variants -> 1 canonical)

| Canonical | `/hail-damage-repair-amarillo/` |
|-----------|------|
| Variant | In netlify.toml? | Has page.tsx? |
| `/hail-damage-repair-amarillo-tx/` | YES (as TARGET - must change to SOURCE) | YES |
| `/hail-damage-roof-repair-in-amarillo/` | YES (wrong target - points to -tx) | YES |
| `/hail-damage-roof-repair-amarillo-texas/` | YES (wrong target - points to -tx) | YES |
| `/hail-damage-roofs-in-amarillo/` | YES (wrong target - points to -tx) | YES |
| `/roof-hail-damage-repair-services-in-amarillo-tx/` | YES (wrong target - points to -tx) | YES |
| `/hail-damage-roof-replacement-in-amarillo/` | **NO - MISSING** | YES |

### GROUP 2: Hail Damage Lubbock (2 variants -> 1 canonical)

| Canonical | `/hail-damage-repair-lubbock/` |
|-----------|------|
| `/hail-damage-repair-lubbock-tx/` | YES (as TARGET - must change to SOURCE) | YES |
| `/hail-damage-roof-repair-lubbock-texas/` | YES (wrong target - points to -tx) | YES |

### GROUP 3: Hail Damage Midland (2 variants -> 1 canonical)

| Canonical | `/hail-damage-repair-midland/` |
|-----------|------|
| `/hail-damage-repair-midland-tx/` | YES (as TARGET - must change to SOURCE) | YES |
| `/hail-damage-roof-repair-midland-texas/` | YES (wrong target - points to -tx) | YES |

### GROUP 4: Hail Damage Odessa (2 variants -> 1 canonical)

| Canonical | `/hail-damage-repair-odessa/` |
|-----------|------|
| `/hail-damage-repair-odessa-tx/` | YES (as TARGET - must change to SOURCE) | YES |
| `/hail-damage-roof-repair-odessa-texas/` | YES (wrong target - points to -tx) | YES |

### GROUP 5: Residential Roofing Amarillo (3 variants -> 1 canonical)

| Canonical | `/residential-roofing-amarillo/` |
|-----------|------|
| `/residential-roofing-amarillo-texas/` | YES | YES |
| `/residential-roofing-amarillo-tx/` | YES | YES |
| `/residential-roofing-in-amarillo/` | YES | YES |

### GROUP 6-8: Residential Roofing Lubbock/Midland/Odessa (1 variant each)

| Canonical | Variant | In netlify.toml? | Has page.tsx? |
|-----------|---------|-------------------|---------------|
| `/residential-roofing-lubbock/` | `/residential-roofing-lubbock-texas/` | **NO - MISSING** | YES |
| `/residential-roofing-midland/` | `/residential-roofing-midland-texas/` | **NO - MISSING** | YES |
| `/residential-roofing-odessa/` | `/residential-roofing-odessa-texas/` | **NO - MISSING** | YES |

### GROUP 9-12: Commercial Roofing (already redirected, targets correct)

| Canonical | Variant | Status |
|-----------|---------|--------|
| `/commercial-roofing-amarillo/` | `/commercial-roofing-amarillo-tx/` | In netlify.toml, correct target |
| `/commercial-roofing-lubbock/` | `/commercial-roofing-lubbock-texas/` | In netlify.toml, correct target |
| `/commercial-roofing-midland/` | `/commercial-roofing-midland-texas/` | In netlify.toml, correct target |
| `/commercial-roofing-odessa/` | `/commercial-roofing-odessa-texas/` | In netlify.toml, correct target |

### GROUP 13: Roof Inspections Amarillo (2 variants -> 1 canonical)

| Canonical | `/roof-inspections-amarillo/` |
|-----------|------|
| `/roof-inspection-amarillo-texas/` | **NO - MISSING** | YES |
| `/roof-inspections-in-amarillo/` | **NO - MISSING** | YES |

### GROUP 14: Canyon Roofing (already redirected, correct)

| `/canyon-texas-roofing/` | `/canyon-tx-roofing/` | In netlify.toml, correct |

### GROUP 15: Storm/Wind Damage Amarillo

Current netlify.toml redirects:
- `/roof-storm-damage-in-amarillo/` -> `/storm-damage-roof-repair-in-amarillo/` (should redirect to `/storm-damage-repair-amarillo/`)
- `/roof-wind-damage-in-amarillo/` -> `/wind-damage-roof-repair-in-amarillo/` (should redirect to `/wind-damage-repair-amarillo/`)

Both targets are themselves `-in-amarillo` variants. These create redirect chains:
- `/roof-storm-damage-in-amarillo/` -> `/storm-damage-roof-repair-in-amarillo/` (which should also redirect to `/storm-damage-repair-amarillo/`)

Additional Amarillo variants needing redirects (NOT in netlify.toml):
| Variant | Canonical |
|---------|-----------|
| `/storm-damage-roof-repair-in-amarillo/` | `/storm-damage-repair-amarillo/` |
| `/wind-damage-roof-repair-in-amarillo/` | `/wind-damage-repair-amarillo/` |
| `/roof-replacement-in-amarillo/` | `/roof-replacement-amarillo/` |
| `/roof-repair-services-in-amarillo/` | `/roof-repair-amarillo/` |
| `/roofing-repair-services-in-amarillo/` | `/roof-repair-amarillo/` |
| `/residential-roof-repair-in-amarillo/` | `/residential-roofing-amarillo/` |
| `/residential-roof-replacement-in-amarillo/` | `/roof-replacement-amarillo/` |
| `/commercial-roof-repair-in-amarillo/` | `/commercial-roofing-amarillo/` |
| `/damaged-roof-replacement-in-amarillo/` | `/roof-replacement-amarillo/` |

### GROUP 16: Emergency Roof Repair Odessa (already redirected, correct)

| `/emergency-roof-repair-odessa/` | `/emergency-roof-repair-odessa-texas/` | In netlify.toml, correct, no page.tsx |

### Unique `-texas`/`-tx`/`-in-` Pages (NOT duplicates -- canonical as-is)

These pages have NO suffix-free counterpart. They are the only page for their topic and should NOT be redirected. They are correctly canonical:

| Page | Why canonical |
|------|-------------|
| `/borger-texas-roofing/` | Only general roofing page for Borger |
| `/dumas-texas-roofing/` | Only general roofing page for Dumas |
| `/hereford-texas-roofing/` | Only general roofing page for Hereford |
| `/pampa-texas-roofing/` | Only general roofing page for Pampa |
| `/perryton-texas-roofing/` | Only general roofing page for Perryton |
| `/plainview-texas-roofing/` | Only general roofing page for Plainview |
| `/bushland-tx-roofing/` | Only page for Bushland |
| `/claude-tx-roofing/` | Only page for Claude |
| `/vega-tx-roofing/` | Only page for Vega |
| `/wildorado-tx-roofing/` | Only page for Wildorado |
| `/lubbock-tx-roofing/` | General Lubbock roofing hub (unique content) |
| `/midland-tx-roofing/` | General Midland roofing hub (unique content) |
| `/odessa-tx-roofing/` | General Odessa roofing hub (unique content) |
| `/flat-roof-repair-midland-texas/` | Only flat roof repair page for Midland |
| `/metal-roof-installation-odessa-texas/` | Only metal roof installation page for Odessa (distinct from `/metal-roofing-odessa/`) |
| `/roofing-services-lubbock-tx/` | Distinct from `/lubbock-tx-roofing/` (different keyword intent) |
| `/amarillo-texas-roofing/` | General Amarillo hub page (unique content) |
| `/roofing-amarillo-tx/` | Different keyword intent from other Amarillo pages |
| `/amarillo-weather-impact-on-roofing/` | Unique informational content |
| `/roofing-methods-in-amarillo/` | Unique informational content |

Note: Some of these (e.g., `roofing-amarillo-tx` vs `amarillo-texas-roofing`) may target similar keywords and could be candidates for future consolidation in a URL-06 keyword cannibalization audit. But they are not simple URL variants like `-texas`/`-tx` suffixes -- they are distinct pages with different content structures. Phase 2 focuses on clear duplicate variants only.

### Amarillo-Specific "Unique Niche" Pages (NOT duplicates)

These Amarillo pages target specific sub-services not covered by the standard `{service}-{city}` matrix:

| Page | Unique topic |
|------|-------------|
| `/asphalt-flat-roof-repair-in-amarillo/` | Flat roof BUR/asphalt specific |
| `/asphalt-roofing-in-amarillo/` | General asphalt (overlaps `/asphalt-shingle-roofing-amarillo/` -- potential future consolidation) |
| `/pvc-roof-repair-in-amarillo/` | PVC-specific repair |
| `/pvc-roof-replacement-in-amarillo/` | PVC-specific replacement |
| `/pvc-roofing-contractors-in-amarillo/` | PVC-specific general |
| `/heavy-rain-damage-roof-repair-in-amarillo/` | Rain damage specific |
| `/roof-heavy-rain-damage-in-amarillo/` | Rain damage (likely duplicate of above -- needs URL-06 audit) |
| `/roof-rot-damage-in-amarillo/` | Wood rot specific |
| `/roof-snow-and-ice-damage-in-amarillo/` | Snow/ice specific |
| `/roofers-in-amarillo/` | Generic "roofers" keyword |
| `/roofing-companies-in-amarillo-tx/` | Generic "roofing companies" keyword |
| `/expert-roofing-services-in-amarillo/` | Likely duplicate of `/roofing-services-in-amarillo-tx/` -- needs URL-06 audit |
| `/amarillos-best-roofer/` | Generic "best roofer" keyword |
| `/amarillo-homes-roofing-services/` | Residential-focused general page |

These are out of scope for Phase 2 (clear URL variants only). They should be reviewed in the URL-06 keyword cannibalization audit.

## Summary of Work Required

### Netlify.toml Changes

1. **Rewrite 8 existing redirect targets** (hail damage groups 1-4): Change target from `-tx` to suffix-free canonical
2. **Rewrite 2 existing redirect targets** (storm/wind damage group 15): Change target to canonical `{service}-{city}` pattern
3. **Add ~20 new redirect entries** for missing variants:
   - `/hail-damage-roof-replacement-in-amarillo/` -> `/hail-damage-repair-amarillo/`
   - `/residential-roofing-lubbock-texas/` -> `/residential-roofing-lubbock/`
   - `/residential-roofing-midland-texas/` -> `/residential-roofing-midland/`
   - `/residential-roofing-odessa-texas/` -> `/residential-roofing-odessa/`
   - `/roof-inspection-amarillo-texas/` -> `/roof-inspections-amarillo/`
   - `/roof-inspections-in-amarillo/` -> `/roof-inspections-amarillo/`
   - `/storm-damage-roof-repair-in-amarillo/` -> `/storm-damage-repair-amarillo/`
   - `/wind-damage-roof-repair-in-amarillo/` -> `/wind-damage-repair-amarillo/`
   - `/roof-replacement-in-amarillo/` -> `/roof-replacement-amarillo/`
   - `/roof-repair-services-in-amarillo/` -> `/roof-repair-amarillo/`
   - `/roofing-repair-services-in-amarillo/` -> `/roof-repair-amarillo/`
   - `/residential-roof-repair-in-amarillo/` -> `/residential-roofing-amarillo/`
   - `/residential-roof-replacement-in-amarillo/` -> `/roof-replacement-amarillo/`
   - `/commercial-roof-repair-in-amarillo/` -> `/commercial-roofing-amarillo/`
   - `/damaged-roof-replacement-in-amarillo/` -> `/roof-replacement-amarillo/`
   (Each needs 2 entries: with and without trailing slash)

### Internal Link Updates

84+ pages contain hard-coded hrefs pointing at variant URLs. These must be updated to point at canonical URLs. The `InternalLinks` component already generates correct URLs -- only hard-coded inline links in page content need fixing.

### Page.tsx Deletions (after verification)

Approximately 27 `page.tsx` directories to delete after redirects are verified live:
- `app/hail-damage-repair-amarillo-tx/`
- `app/hail-damage-roof-repair-in-amarillo/`
- `app/hail-damage-roof-repair-amarillo-texas/`
- `app/hail-damage-roofs-in-amarillo/`
- `app/roof-hail-damage-repair-services-in-amarillo-tx/`
- `app/hail-damage-roof-replacement-in-amarillo/`
- `app/hail-damage-repair-lubbock-tx/`
- `app/hail-damage-roof-repair-lubbock-texas/`
- `app/hail-damage-repair-midland-tx/`
- `app/hail-damage-roof-repair-midland-texas/`
- `app/hail-damage-repair-odessa-tx/`
- `app/hail-damage-roof-repair-odessa-texas/`
- `app/residential-roofing-amarillo-texas/`
- `app/residential-roofing-amarillo-tx/`
- `app/residential-roofing-in-amarillo/`
- `app/residential-roofing-lubbock-texas/`
- `app/residential-roofing-midland-texas/`
- `app/residential-roofing-odessa-texas/`
- `app/commercial-roofing-amarillo-tx/`
- `app/commercial-roofing-lubbock-texas/`
- `app/commercial-roofing-midland-texas/`
- `app/commercial-roofing-odessa-texas/`
- `app/roof-inspection-amarillo-texas/`
- `app/roof-inspections-in-amarillo/`
- `app/canyon-tx-roofing/`
- `app/roof-storm-damage-in-amarillo/`
- `app/roof-wind-damage-in-amarillo/`
- `app/storm-damage-roof-repair-in-amarillo/`
- `app/wind-damage-roof-repair-in-amarillo/`
- `app/roof-replacement-in-amarillo/`
- `app/roof-repair-services-in-amarillo/`
- `app/roofing-repair-services-in-amarillo/`
- `app/residential-roof-repair-in-amarillo/`
- `app/residential-roof-replacement-in-amarillo/`
- `app/commercial-roof-repair-in-amarillo/`
- `app/damaged-roof-replacement-in-amarillo/`

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Canonical meta tags only | 301 redirects + canonical tags | Google often ignores canonical hints; 301 is a directive, not a hint |
| Keep all variant pages live | Consolidate to one canonical | Eliminates keyword self-competition; concentrates link equity |
| Delete pages before redirecting | Deploy redirect first, verify, then delete | Prevents 404 errors during transition |

## Open Questions

1. **Keyword cannibalization beyond clear URL variants**
   - What we know: Pages like `/roofers-in-amarillo/`, `/roofing-companies-in-amarillo-tx/`, `/expert-roofing-services-in-amarillo/`, `/amarillos-best-roofer/` all target generic "roofers in Amarillo" keywords but are NOT simple URL variants
   - What's unclear: Which of these pages should be consolidated vs kept as separate keyword targets
   - Recommendation: Handle in URL-06 (keyword cannibalization audit) after the clear variant redirects are deployed. Requires GSC data to make informed decisions about which pages Google values.

2. **Content preservation from variant pages**
   - What we know: Some variant pages may have unique content worth preserving (e.g., `/hail-damage-roof-replacement-in-amarillo/` focuses on replacement specifically, not just repair)
   - What's unclear: Whether any unique content from variants should be merged into the canonical page before deletion
   - Recommendation: Review each variant's content before deletion. If it has genuinely unique sections not covered by the canonical page, merge the best content into the canonical page before deleting the variant.

3. **Redirect limit on Netlify**
   - What we know: Netlify supports up to 1,000 redirect/rewrite rules in `netlify.toml`
   - What's unclear: N/A -- we are well under the limit with ~80 rules total
   - Recommendation: No concern. Current 36 + ~40 new = ~76 rules, well under 1,000.

## Sources

### Primary (HIGH confidence)
- Direct code inspection: `sites/5-star-roofing/app/` directory listing -- all 246 page.tsx files catalogued
- Direct code inspection: `sites/5-star-roofing/netlify.toml` -- all 36 existing redirect rules reviewed
- Direct code inspection: `sites/5-star-roofing/components/InternalLinks.tsx` -- URL generation pattern confirmed at line 178
- Direct code inspection: `sites/5-star-roofing/next.config.ts` -- `trailingSlash: true` confirmed
- Netlify docs: Redirects and rewrites -- `force` flag behavior, processing order, trailing slash handling

### Secondary (MEDIUM confidence)
- Google Search Central: 301 redirects as canonical signal -- 301 is a strong directive vs canonical tag hint
- Phase 1 research (`01-RESEARCH.md` from prior phase) -- compliance fixes confirmed complete

## Metadata

**Confidence breakdown:**
- Duplicate inventory: HIGH -- every page.tsx directory catalogued, every netlify.toml rule reviewed, title tags compared
- Canonical URL convention: HIGH -- derived from InternalLinks component source code (single source of truth)
- Redirect mechanics: HIGH -- Netlify force=true behavior is well-documented and already in use on this site
- Scope boundary (what to include vs defer): MEDIUM -- some borderline cases (generic Amarillo keyword pages) deferred to URL-06

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable -- no external dependencies that change)
