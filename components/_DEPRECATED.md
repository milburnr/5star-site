# Deprecated components

## AnimatedCounter

**Removed:** 2026-05-12
**Reason:** Fabricated stats, template gimmick. Site-wide audit found ~50
counter usages rendering invented numbers (350+ projects, $2.5M property
protected, 95-99% approval rate, 600 Midland homes, etc.) that failed the
claims-allowlist verification gate.

**Do not recreate without verified data in `clients/5star/claims-allowlist.md`.**

If you need to display a real, verified number in the future:

1. Add the claim to the allowlist with a source citation
2. Hardcode the number as static text — no animation, no counter
3. If you need a count-up animation, justify it against the art bible
   (§4 "What separates this from a WordPress template" — restraint over
   templated gimmicks)

The stat-tile pattern itself is also retired. Trust signals belong in
the text-only strip:

```
Free Inspections · Licensed & Insured · Serving West Texas Since 2014 · Residential & Commercial
```

— or in the verified ReviewsSection (Google Places API).
