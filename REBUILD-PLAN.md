# 5Star Roofing Site Rebuild Plan

**Goal:** Transform from template farm → ranking and lead gen machine

## Current State (Problems)

### Images
- 17 pages with broken images (no `src` attribute)
- Generic/repetitive hero images across site
- Stock photos instead of real work

### Content
- 69 thin pages (hero + CTA only, no real content)
- Emergency roof repair pushed front-and-center (client doesn't want this work)
- No local differentiation between city pages

### Assets Available
- **7,348 real job photos** from Acculynx
- **98 job sites** across 29 Texas cities
- Before/after shots for many jobs
- Mix of hero-worthy shots and detail/damage close-ups

---

## Phase 1: Image Processing & Audit

### 1.1 Process Acculynx Photos
- [ ] Run through image pipeline (640w, 768w, 1280w sizes)
- [ ] Fix EXIF orientation (no sideways/upside down)
- [ ] Separate landscape vs portrait
- [ ] Output to organized folder structure

### 1.2 Image Quality Audit
- [ ] Flag hero-worthy "after" photos (quality + composition)
- [ ] Flag content-appropriate images (damage close-ups, details)
- [ ] Flag unusable images (blurry, irrelevant, bad composition)
- [ ] Create mapping: city → available quality images

### 1.3 Fix Broken Images
- [ ] Fix 17 pages with missing `src` attributes
- [ ] Match appropriate images to each page topic

---

## Phase 2: Content Strategy

### 2.1 Emergency Roof Repair Decision
**Question for Rich:** Delete these pages or just demote?

Current emergency pages:
- /emergency-roof-repair-amarillo (and 14 other cities)
- /storm-damage-roof-repair-in-amarillo
- Various storm/emergency content blocks

Options:
1. **Delete entirely** - Remove pages, redirects to parent service pages
2. **Demote** - Keep pages but noindex, remove from nav
3. **Merge** - Fold into general roof repair pages

### 2.2 Service Priority
What services SHOULD be front and center?
- Residential roofing?
- Commercial roofing?
- Specific materials (metal, TPO, shingles)?
- Hail damage repair? (big in Texas Panhandle)

### 2.3 Thin Page Content Plan
69 pages need real content. Strategy:
- Local weather/climate relevance
- Specific service details (process, materials, timeline)
- Job examples from that city (with real photos)
- FAQs relevant to the service
- Trust signals (warranties, insurance help)

---

## Phase 3: Page-by-Page Rebuild

### Tier 1: Main Service Pages (Amarillo hub)
High-quality, comprehensive content:
- /residential-roofing-amarillo-tx
- /commercial-roofing-amarillo-tx
- /roof-replacement-amarillo
- /roof-repair-amarillo
- /hail-damage-repair-amarillo-tx

### Tier 2: Secondary Cities (Major markets)
Good content, city-specific photos:
- Lubbock, Midland, Odessa pages
- Use job photos from those cities

### Tier 3: Smaller Cities
Solid content, may share some elements:
- Borger, Canyon, Dumas, Pampa, etc.
- Use local job photos where available

### Tier 4: Service Variants
Ensure differentiation, not duplicates:
- Metal roofing vs TPO vs shingles pages
- Inspection pages
- Material-specific pages

---

## Phase 4: Technical Cleanup

- [ ] Remove emergency content from global elements (nav, CTAs)
- [ ] Update homepage messaging (keep hero, change copy if needed)
- [ ] Fix link contrast issues site-wide (gold-on-gold problem)
- [ ] Verify all images have proper alt text
- [ ] Re-run Lighthouse audits

---

## Questions for Rich Before Starting

1. **Emergency pages:** Delete, demote, or merge?
2. **Priority services:** What should be front and center instead?
3. **Homepage copy:** Any changes needed (keeping hero image)?
4. **Timeline:** Any hard deadlines or steady progress OK?

---

## Estimated Effort

| Phase | Effort | Notes |
|-------|--------|-------|
| Image Processing | 2-3 hours | Automated pipeline |
| Image Audit | 4-6 hours | Manual review needed |
| Broken Image Fixes | 2-3 hours | 17 pages |
| Content Strategy | 1-2 hours | Decisions with Rich |
| Thin Page Content | 2-3 days | 69 pages, AI-assisted |
| Technical Cleanup | 2-3 hours | CSS, nav, etc. |

**Total: ~4-5 days of focused work**

---

*Created: 2026-02-08*
