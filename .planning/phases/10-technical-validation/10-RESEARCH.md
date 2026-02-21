# Phase 10: Technical Validation & Relaunch - Research

**Researched:** 2026-02-20
**Domain:** Build verification, SEO validation, sitemap generation, Google Indexing API, PageSpeed testing
**Confidence:** HIGH

## Summary

Phase 10 is the final quality gate for the entire 9-phase SEO overhaul. It requires running every existing validation script, regenerating the sitemap, performing a comprehensive broken link audit, and resubmitting all pages to Google's Indexing API. The good news: virtually all tooling already exists in the project. The validation scripts (`validate-schema.js`, `audit-meta.js`, `audit-images.js`, `audit-alt-text.js`) are mature, battle-tested across prior phases, and produce clear PASS/FAIL exit codes. The sitemap generator and Google Indexing API submission script are both operational. Lighthouse CI is configured via `@lhci/cli` with a `.lighthouserc.json` file.

The primary challenge is coordination: running all checks in sequence, documenting results, and handling any failures that surface from changes accumulated across Phases 1-9. There is a mismatch between page counts (216 `page.tsx` files vs. 201 sitemap URLs vs. 217 built `index.html` files in `out/`) that must be reconciled. The sitemap generator uses a simple priority scheme (1.0 for homepage, 0.6 for everything else) that should be enhanced with differentiated priorities for hub vs. spoke pages.

**Primary recommendation:** Execute all 6 quality gate checks using existing scripts, fix any failures, regenerate sitemap with improved priorities, and submit to Google Indexing API. No new tooling needed -- this phase is about execution and verification.

## Standard Stack

### Core (Already Installed)

| Library | Version | Purpose | Status |
|---------|---------|---------|--------|
| `@lhci/cli` | ^0.15.1 | Lighthouse CI for PageSpeed testing | devDependency, configured |
| `googleapis` | ^170.1.0 | Google Indexing API submission | dependency, configured |
| Node.js built-ins (`fs`, `path`, `https`) | N/A | All validation scripts use these | No external deps needed |

### Existing Scripts Inventory

| Script | Location | What It Does | Exit Code |
|--------|----------|--------------|-----------|
| `validate-schema.js` | `scripts/validate-schema.js` | 7-rule schema validation on built HTML in `out/` | 0=PASS, 1=FAIL |
| `audit-meta.js` | `scripts/audit-meta.js` | 13-check meta title/description audit on source `app/` | 0=PASS, 1=FAIL |
| `audit-images.js` | `scripts/audit-images.js` | Image URL resolution, R2 compliance, duplicate check on `out/` | 0=PASS, 1=FAIL |
| `audit-alt-text.js` | `scripts/audit-alt-text.js` | Alt text quality audit on built HTML in `out/` | 0=PASS, 1=FAIL |
| `generate-sitemap.js` | `generate-sitemap.js` (root) | Scans `app/` for `page.tsx`, generates `public/sitemap.xml` | N/A |
| `submit-to-indexing-api.js` | `submit-to-indexing-api.js` (root) | Submits URLs to Google Indexing API | 0=success |

### No New Dependencies Required

All tools are already in place. No `npm install` needed for this phase.

## Architecture Patterns

### Validation Execution Order

The scripts have implicit dependencies. Respect this order:

```
1. npm run build                      # Must succeed first (generates out/)
2. node scripts/validate-schema.js    # Reads from out/
3. node scripts/audit-meta.js         # Reads from app/ (source)
4. node scripts/audit-images.js       # Reads from out/, makes HTTP HEAD requests
5. node scripts/audit-alt-text.js     # Reads from out/
6. [Internal link check]              # Reads from out/ (SCRIPT DOES NOT EXIST YET)
7. lhci autorun                       # Serves out/ locally, runs Lighthouse
8. node generate-sitemap.js           # Reads from app/, writes public/sitemap.xml
9. npm run build                      # Rebuild to include updated sitemap
10. node submit-to-indexing-api.js    # Reads from app/, submits to Google API
```

### Script Input/Output Summary

| Script | Reads From | Writes To | Requires Build? |
|--------|-----------|-----------|-----------------|
| `validate-schema.js` | `out/` (built HTML) | stdout | YES |
| `audit-meta.js` | `app/` (source TSX) | stdout | NO |
| `audit-images.js` | `out/` (built HTML) | stdout | YES, plus network |
| `audit-alt-text.js` | `out/` (built HTML) | stdout | YES |
| `generate-sitemap.js` | `app/` (source TSX) | `public/sitemap.xml` | NO |
| `submit-to-indexing-api.js` | `app/` (source TSX) | Google API | NO (uses --dry-run) |

### Page Count Reconciliation

Current state (needs investigation during execution):

| Source | Count | Notes |
|--------|-------|-------|
| `page.tsx` files in `app/` | 216 | Source of truth for routes |
| URLs in `public/sitemap.xml` | 201 | Stale -- missing ~15 pages |
| `index.html` files in `out/` | 217 | Includes 404 page (+1 from page count) |

The sitemap is **15 pages behind** the source. The sitemap generator must be re-run after all Phase 1-9 changes (page additions, deletions) are finalized. The `out/` count of 217 = 216 pages + 1 for `404.html` (which also generates `404/index.html`).

### Lighthouse CI Configuration

Current `.lighthouserc.json` tests 5 URLs:
- Homepage (`/index.html`)
- Services hub (`/services/index.html`)
- Spoke page (`/roof-repair-amarillo/index.html`)
- Commercial hub (`/commercial-roofing/index.html`)
- Residential hub (`/residential-roofing/index.html`)

Current assertions are lenient:
- Performance: warn at 0.6 (60) -- **should be tightened to 0.90 for this phase**
- SEO: warn at 0.95 -- good

The success criteria requires 95+ desktop PageSpeed. The LHCI config should be updated to assert `minScore: 0.95` for performance on desktop. Note: LHCI `collect.settings.preset` can be set to `"desktop"` to run desktop-mode tests.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Schema validation | Custom grep commands | `scripts/validate-schema.js` | Already has 7 rules, handles edge cases |
| Meta audit | Manual spot checks | `scripts/audit-meta.js` | 13 automated checks with PASS/FAIL |
| Image URL audit | grep for "r2.dev" | `scripts/audit-images.js` | Does HTTP HEAD checks, finds broken URLs |
| PageSpeed testing | Manual Chrome DevTools | `lhci autorun` | Automated, repeatable, CI-friendly |
| Sitemap generation | Manual XML editing | `generate-sitemap.js` | Scans app/ directory automatically |
| Indexing submission | Manual Google Search Console | `submit-to-indexing-api.js` | Batch submission with rate limiting |

**Key insight:** This phase is pure execution of existing tooling. The only net-new script needed is an internal link checker.

## Common Pitfalls

### Pitfall 1: Running Validation on Stale Build

**What goes wrong:** Scripts that read from `out/` produce misleading results if the build is from a prior phase.
**Why it happens:** `out/` persists between builds and may contain stale HTML from before Phase 9 changes.
**How to avoid:** Always run `npm run build` fresh at the start of Phase 10. Delete `out/` first if uncertain: `rm -rf out && npm run build`.
**Warning signs:** Page counts in validation output don't match expected 216.

### Pitfall 2: Sitemap Regeneration Before Final Build

**What goes wrong:** Sitemap gets generated, then more changes are made, sitemap becomes stale again.
**Why it happens:** Sitemap reads from `app/` source, not `out/`. If pages are added/removed after sitemap generation, it's wrong.
**How to avoid:** Generate sitemap AFTER all code changes are finalized, then do a final rebuild to include the updated sitemap in `out/`.
**Warning signs:** URL count in sitemap doesn't match `page.tsx` count.

### Pitfall 3: Google Indexing API Rate Limits

**What goes wrong:** API returns 429 errors when submitting too many URLs too fast.
**Why it happens:** Google limits to ~200 URLs/day for the Indexing API.
**How to avoid:** The script already has `DELAY_BETWEEN_REQUESTS = 100ms` and `BATCH_SIZE = 10`. With 216 pages, this fits within the 200/day limit. Run `--dry-run` first to verify URL list, then submit. If >200 pages, may need to split across two days.
**Warning signs:** Script reports failures with 429 status codes.

### Pitfall 4: Lighthouse CI Fails Due to Missing Chrome

**What goes wrong:** `lhci autorun` can't find Chrome/Chromium.
**Why it happens:** LHCI needs a Chrome installation. On some systems, it uses puppeteer's bundled Chromium.
**How to avoid:** The `.netlify/plugins/node_modules/puppeteer/` exists, suggesting Chromium may already be installed. If LHCI fails, install Chrome or set `CHROME_PATH` environment variable.
**Warning signs:** "No Chrome installations found" error.

### Pitfall 5: Internal Link Check Has No Existing Script

**What goes wrong:** Planning assumes an internal link check script exists, but there is none.
**Why it happens:** The 6-check quality gate mentions "All `href="/..."` resolve to real pages in `out/`" but no script automates this.
**How to avoid:** Write a simple internal link checker that: (a) finds all `href="/..."` in built HTML, (b) checks that `out/{path}/index.html` exists for each. This is straightforward Node.js -- ~50 lines.
**Warning signs:** Manual grep attempts miss edge cases (query strings, anchors, external links).

### Pitfall 6: Sitemap Priority/Changefreq Too Simple

**What goes wrong:** All non-homepage pages get identical priority (0.6) and changefreq (monthly).
**Why it happens:** The current `generate-sitemap.js` uses a trivial priority scheme.
**How to avoid:** Enhance to differentiate: homepage=1.0, hub pages=0.8, service-city spoke pages=0.6, content/about pages=0.4.
**Warning signs:** Google treats all pages with equal crawl priority.

## Code Examples

### Running the Full Validation Suite

```bash
# Step 1: Fresh build
cd /Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing
rm -rf out .next
npm run build

# Step 2: Schema validation
node scripts/validate-schema.js

# Step 3: Meta audit
node scripts/audit-meta.js

# Step 4: Image audit (requires network for HTTP HEAD checks)
node scripts/audit-images.js

# Step 5: Alt text audit
node scripts/audit-alt-text.js

# Step 6: PageSpeed via Lighthouse CI
npx lhci autorun

# Step 7: Regenerate sitemap
node generate-sitemap.js

# Step 8: Rebuild with new sitemap
npm run build

# Step 9: Submit to Google (dry run first)
node submit-to-indexing-api.js --dry-run
node submit-to-indexing-api.js
```

### Internal Link Checker Pattern (New Script Needed)

```javascript
#!/usr/bin/env node
/**
 * Internal link integrity checker.
 * Scans built HTML in out/ for all internal href="/..." links
 * and verifies each resolves to a real page.
 *
 * Exit code: 0 = PASS, 1 = FAIL
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findHtmlFiles(full));
    else if (entry.name.endsWith('.html')) results.push(full);
  }
  return results;
}

const htmlFiles = findHtmlFiles(OUT_DIR);
const broken = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const hrefRegex = /href="(\/[^"]*?)"/g;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    let href = match[1];
    // Strip query string and hash
    href = href.split('?')[0].split('#')[0];
    // Skip external, tel:, mailto:
    if (!href.startsWith('/')) continue;
    // Check if target exists in out/
    const targetPath = href.endsWith('/')
      ? path.join(OUT_DIR, href, 'index.html')
      : path.join(OUT_DIR, href);
    if (!fs.existsSync(targetPath)) {
      const rel = path.relative(OUT_DIR, file);
      broken.push({ source: rel, href: match[1] });
    }
  }
}

console.log(`Scanned ${htmlFiles.length} pages`);
if (broken.length === 0) {
  console.log('PASS: All internal links resolve');
  process.exit(0);
} else {
  console.log(`FAIL: ${broken.length} broken internal links`);
  const unique = [...new Set(broken.map(b => b.href))];
  for (const href of unique) {
    const sources = broken.filter(b => b.href === href).map(b => b.source);
    console.log(`  ${href} (referenced by ${sources.length} pages)`);
  }
  process.exit(1);
}
```

### Enhanced Sitemap Generator Pattern

The current generator assigns all non-homepage pages priority 0.6. For better crawl signals, differentiate by page type:

```javascript
// Priority logic enhancement for generate-sitemap.js
function getPriority(route) {
  if (route === '/') return '1.0';
  // Hub pages
  if (['/services', '/commercial-roofing', '/residential-roofing',
       '/service-areas'].includes(route)) return '0.9';
  // City hub pages
  if (route.match(/^\/[a-z]+-te?x(as)?-roofing$/)) return '0.8';
  // Service-city spoke pages (the bulk of pages)
  return '0.7';
}

function getChangefreq(route) {
  if (route === '/') return 'weekly';
  if (route.includes('service') || route.includes('roofing')) return 'monthly';
  return 'monthly';
}
```

### Lighthouse CI Desktop Configuration

The current `.lighthouserc.json` should be updated to enforce 95+ performance on desktop:

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./out",
      "url": [
        "http://localhost/index.html",
        "http://localhost/services/index.html",
        "http://localhost/roof-repair-amarillo/index.html",
        "http://localhost/commercial-roofing-midland/index.html"
      ],
      "settings": {
        "preset": "desktop"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.95}],
        "categories:seo": ["error", {"minScore": 0.95}],
        "categories:accessibility": ["warn", {"minScore": 0.90}],
        "categories:best-practices": ["warn", {"minScore": 0.90}]
      }
    }
  }
}
```

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Manual PageSpeed checks in Chrome DevTools | LHCI automated with `.lighthouserc.json` | Repeatable, CI-friendly |
| Manual sitemap editing | `generate-sitemap.js` auto-generates from `app/` | Can't miss pages |
| Manual Google Search Console URL submission | `submit-to-indexing-api.js` batch submission | 216 pages in ~25 seconds |
| grep for schema issues | `validate-schema.js` with 7 structured rules | Catches entity name variants, missing schemas |

## Open Questions

1. **Page count reconciliation**
   - What we know: 216 page.tsx, 201 sitemap URLs, 217 built index.html
   - What's unclear: Which 15 pages are missing from sitemap? Were pages added in Phases 1-9 that weren't sitemap-regenerated?
   - Recommendation: Re-run `node generate-sitemap.js` and diff output against current sitemap to identify gaps

2. **Lighthouse CI Chrome availability**
   - What we know: `@lhci/cli` is installed as devDependency; `.netlify/plugins/` has puppeteer
   - What's unclear: Whether `lhci autorun` will find a usable Chrome/Chromium on this machine
   - Recommendation: Test `npx lhci autorun` early in Plan 10-01; if it fails, fall back to manual PageSpeed Insights API or install Chrome

3. **Google Indexing API daily limit**
   - What we know: Limit is typically 200 URLs/day; we have 216 pages
   - What's unclear: Whether the service account has an elevated quota
   - Recommendation: Submit 200 on day 1, remaining 16 on day 2 if needed; or check quota via API

## Sources

### Primary (HIGH confidence)
- Direct file inspection of all scripts in `scripts/` directory
- Direct file inspection of `generate-sitemap.js`, `submit-to-indexing-api.js`
- Direct file inspection of `package.json`, `.lighthouserc.json`, `next.config.ts`, `netlify.toml`
- Direct file inspection of `public/sitemap.xml` (1209 lines, 201 URLs)
- Direct file count of `app/**/page.tsx` (216 files) and `out/**/index.html` (217 files)

### Secondary (MEDIUM confidence)
- Google Indexing API rate limit of 200/day -- based on widely documented limits

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - all tools already exist and are inspected
- Architecture: HIGH - execution order derived from script input/output analysis
- Pitfalls: HIGH - derived from actual code inspection (e.g., missing internal link checker)
- Sitemap enhancement: MEDIUM - priority values are SEO best practice, not measured

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable -- all scripts are local, no external API changes expected)
