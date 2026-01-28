# Page Consolidation Plan - 5 Star Roofing

Generated: 2026-01-26

## Problem
Multiple pages targeting the same keywords with identical/similar titles = cannibalization.
Google splits ranking authority across duplicates, so none rank well.

## Strategy
1. Keep ONE primary page per keyword target
2. 301 redirect duplicates to the primary
3. Ensure primary page has unique, optimized title & meta

---

## Pages to Consolidate

### Amarillo Hail Damage (4 pages → 1)
**KEEP:** `/hail-damage-repair-amarillo/` (cleanest URL)
**REDIRECT:**
- `/hail-damage-repair-amarillo-tx/` → `/hail-damage-repair-amarillo/`
- `/hail-damage-roof-repair-amarillo-texas/` → `/hail-damage-repair-amarillo/`
- `/hail-damage-roof-repair-in-amarillo/` → `/hail-damage-repair-amarillo/`
- `/roof-hail-damage-repair-services-in-amarillo-tx/` → `/hail-damage-repair-amarillo/`

### Lubbock Hail Damage (2 pages → 1)
**KEEP:** `/hail-damage-repair-lubbock/`
**REDIRECT:**
- `/hail-damage-repair-lubbock-tx/` → `/hail-damage-repair-lubbock/`
- `/hail-damage-roof-repair-lubbock-texas/` → `/hail-damage-repair-lubbock/`

### Midland Hail Damage (2 pages → 1)
**KEEP:** `/hail-damage-repair-midland/`
**REDIRECT:**
- `/hail-damage-repair-midland-tx/` → `/hail-damage-repair-midland/`
- `/hail-damage-roof-repair-midland-texas/` → `/hail-damage-repair-midland/`

### Odessa Hail Damage (2 pages → 1)
**KEEP:** `/hail-damage-repair-odessa/`
**REDIRECT:**
- `/hail-damage-repair-odessa-tx/` → `/hail-damage-repair-odessa/`
- `/hail-damage-roof-repair-odessa-texas/` → `/hail-damage-repair-odessa/`

### Residential Roofing Amarillo (4 pages → 1)
**KEEP:** `/residential-roofing-amarillo/`
**REDIRECT:**
- `/residential-roofing-amarillo-texas/` → `/residential-roofing-amarillo/`
- `/residential-roofing-amarillo-tx/` → `/residential-roofing-amarillo/`
- `/residential-roofing-in-amarillo/` → `/residential-roofing-amarillo/`

### Commercial Roofing City Duplicates
**Amarillo:** Keep `/commercial-roofing-amarillo/`, redirect `-tx` variant
**Lubbock:** Keep `/commercial-roofing-lubbock/`, redirect `-texas` variant
**Midland:** Keep `/commercial-roofing-midland/`, redirect `-texas` variant
**Odessa:** Keep `/commercial-roofing-odessa/`, redirect `-texas` variant

### Storm/Wind Damage Amarillo
**Storm:** Keep `/storm-damage-roof-repair-in-amarillo/`, redirect `/roof-storm-damage-in-amarillo/`
**Wind:** Keep `/wind-damage-roof-repair-in-amarillo/`, redirect `/roof-wind-damage-in-amarillo/`

### Emergency Repair Odessa
**Keep:** `/emergency-roof-repair-odessa/`
**Redirect:** `/emergency-roof-repair-odessa-texas/` → `/emergency-roof-repair-odessa/`

---

## Implementation

### Option A: Netlify Redirects (Recommended)
Add to `netlify.toml` or `_redirects` file:
```
/hail-damage-repair-amarillo-tx/* /hail-damage-repair-amarillo/:splat 301
/hail-damage-roof-repair-amarillo-texas/* /hail-damage-repair-amarillo/:splat 301
...
```

### Option B: Delete Pages + Redirects
1. Remove duplicate page files from `/app/`
2. Add redirects for old URLs
3. Regenerate sitemap

---

## Title Optimization (Next Step)
After consolidation, optimize remaining 200+ pages to have:
- Unique titles under 60 chars
- Compelling meta descriptions under 160 chars
- Clear keyword targeting without overlap
