# Entity Guidelines

Source of truth for business identity across all pages. Reference this in every phase that touches business name, NAP, or schema.

## Canonical Business Name

**Site entity name:** 5 Star Roofing
- Use exactly this string in all schema, meta tags, OG tags, footer, header
- Never: "5 FIVE Star", "Five Star", "5-Star", "5 Star Commercial Roofing" (legal name only on invoices)
- The `name` field in `lib/constants.ts` BUSINESS_INFO is the code-level source of truth

**Legal name:** 5 Star Commercial Roofing (for legal/invoice contexts only, not public-facing)

**GBP name:** "5 FIVE Star Commercial and Residential Roofing" (Google changed it — mismatch with site, out of scope to fix)

## NAP (Name, Address, Phone)

Single source of truth: `sites/5-star-roofing/lib/constants.ts`

| Field | Value |
|-------|-------|
| Phone | (806) 622-6041 |
| Phone (raw) | 8066226041 |
| Email | admin@5starroofingpros.com |
| Street | 2909 S Western St |
| City | Amarillo |
| State | TX |
| Zip | 79109 |
| Hours (weekday) | 9:00 AM - 5:00 PM |
| Hours (weekend) | 9:00 AM - 5:00 PM |

Every page's schema must match these values exactly. No variations.

## Voice & Positioning

- **Positioning:** Amarillo-first, residential-primary
- **Voice:** Professional local expert, storm-response focused
- **Primary market:** Amarillo, Canyon, Panhandle
- **Secondary markets:** Midland, Odessa, Lubbock (below the fold, "Also Serving")
- **Experience claim:** "Over 10 years" (from constants.ts)

## Service Areas

| Tier | Cities |
|------|--------|
| Primary | Amarillo |
| West Texas | Midland, Odessa |
| Panhandle | Canyon, Borger, Pampa, Dumas, Hereford |

## Copyright

2026 on every page. Update annually.

## Verification Commands

```bash
# Check entity name consistency in built output
grep -r '"5 Star Roofing"' sites/5-star-roofing/out/ | wc -l
grep -r "5 FIVE Star" sites/5-star-roofing/out/ | wc -l  # Must be ZERO
grep -r "Five Star" sites/5-star-roofing/out/ | wc -l     # Must be ZERO (except in contexts like "five star service" prose)

# Check NAP in schema
grep -r '"(806) 622-6041"' sites/5-star-roofing/out/ | wc -l
grep -r '"admin@5starroofingpros.com"' sites/5-star-roofing/out/ | wc -l
```

---
*Created: 2026-02-20*
*Source: lib/constants.ts, PROJECT.md, DESIGN-QUALITY-STANDARDS.md*
