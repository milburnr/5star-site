# 5Star Roofing QA Fix Plan

**Date:** 2026-02-08
**Current Score:** 72/100
**Target Score:** 90+
**Pages:** 259 total, 183 thin

---

## Priority Order

### Phase 1: Critical Technical (DO FIRST)
**Goal:** Fix blocking issues before content work

- [ ] Fix 3 pages missing schema
- [ ] Fix Performance (currently 78, target 90+)
  - Add width/height to 20 images missing dimensions
  - Verify AVIF/WebP serving correctly
- [ ] Fix any remaining broken images

**Estimated:** 2-3 hours
**Deploy after:** Yes (technical fixes only)

---

### Phase 2: Image Contextual Audit
**Goal:** Ensure right images on right pages

1. Run image pipeline on Acculynx photos (7,348)
2. Build image inventory with AI descriptions
3. Map current images to pages
4. Identify mismatches (shingle photo on metal page, etc.)
5. Create replacement list

**Estimated:** 4-6 hours
**Deploy after:** Batch with content fixes

---

### Phase 3: Content Expansion (BIGGEST LIFT)
**Goal:** Bring thin pages to 500+ words

**Tier 1 - Pillar Pages (Highest Priority)**
These are the main money pages:
- hail-damage-repair-amarillo-tx → Target 2,000+ words
- commercial-roofing → Target 2,000+ words
- residential-roofing → Target 2,000+ words

**Tier 2 - City Landing Pages**
Cities with highest search volume first:
- Amarillo pages (14 pages)
- Midland pages (14 pages)
- Odessa pages (14 pages)
- Lubbock pages (14 pages)

Each needs:
- Unique local content (weather, landmarks, demographics)
- City-specific service descriptions
- Target: 800-1,200 words each

**Tier 3 - Secondary City Pages**
- Canyon, Pampa, Borger, Dumas, Perryton, etc.
- Target: 600-800 words each

**Tier 4 - Tertiary Pages**
- Andrews, Big Spring, Levelland, Monahans, Snyder
- Consider: Consolidate or remove? Low search volume cities.

**Estimated:** 20-40 hours (depending on AI vs manual)
**Deploy after:** Full batch complete

---

### Phase 4: Image Replacements
**Goal:** Fix contextual mismatches identified in Phase 2

- Replace inappropriate images with correct ones
- Ensure before/after pairs are different
- Use Acculynx real photos where available

**Estimated:** 4-6 hours
**Deploy after:** Batch with final content

---

### Phase 5: Final Verification

- [ ] Re-run audit.js → Score 90+
- [ ] Lighthouse all pillar pages → 90+ performance
- [ ] Visual spot-check 10 random pages
- [ ] Test all forms
- [ ] Test phone links

**Deploy after:** Pass all checks

---

## Decision Needed: Tertiary Cities

We have ~35 pages for small cities (Andrews, Big Spring, Levelland, Monahans, Snyder). Options:

**A) Expand them** (most work, highest coverage)
- Add unique content per city
- Keep all pages indexed

**B) Consolidate** (moderate work, focused)
- Create "West Texas Service Area" page
- noindex individual tiny city pages
- Link from consolidated page

**C) Remove** (least work, lose coverage)
- Delete tiny city pages
- Focus on Amarillo/Midland/Odessa/Lubbock only

**Recommendation:** Option B - keeps SEO value, reduces thin page penalty, less content work.

---

## Estimated Timeline

| Phase | Hours | When Complete |
|-------|-------|---------------|
| 1. Technical | 2-3h | Ready for deploy |
| 2. Image Audit | 4-6h | Data ready |
| 3. Content (Tier 1-2) | 15-20h | Major pages done |
| 4. Content (Tier 3-4) | 10-15h | All pages done |
| 5. Image Replacement | 4-6h | Images fixed |
| 6. Final QA | 2-3h | Ship it |

**Total:** 40-55 hours of work

---

## Batching Rules

1. **No deploys until Phase 1 complete**
2. **One deploy after Phase 1** (technical only)
3. **No deploys during content work** (batch all)
4. **One deploy after Phase 3-4-5 complete** (full content + images)
5. **Final deploy after Phase 6 passes**

**Maximum deploys for this project: 3**

---

*Created: 2026-02-08*
*Last updated: 2026-02-08*
