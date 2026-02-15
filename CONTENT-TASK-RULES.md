# Content Optimization Task Rules

**For subagents working on 5Star page content optimization.**

---

## YOUR TASK

You are optimizing ONE page for SEO. Follow these rules exactly.

---

## INPUTS YOU RECEIVE

1. **Page path:** e.g., `/hail-damage-repair-amarillo-tx`
2. **Primary keyword:** e.g., "hail damage repair amarillo"
3. **H2 keywords:** List of 4-6 H2 headings to use
4. **Page type:** pillar | city-service | blog

---

## RULES FOR EVERY PAGE

### Title Tag
- Include primary keyword near the beginning
- Keep under 60 characters
- Format: `{Primary Keyword} | 5 Star Roofing`
- Example: `Hail Damage Repair Amarillo TX | 5 Star Roofing`

### Meta Description
- Include primary keyword
- Keep 150-160 characters
- Include call to action
- Example: "Expert hail damage repair in Amarillo TX. Free inspections, insurance documentation. Call 5 Star Roofing at (806) 622-6041."

### H1 Tag
- ONE H1 per page
- Include primary keyword
- Can be slightly different from title
- Example: `Hail Damage Roof Repair in Amarillo, Texas`

### H2 Headings
- Use the provided H2 keywords EXACTLY
- Each H2 section should be 150-300 words
- H2s create the page structure

### Content Requirements

**Minimum word counts by page type:**
- Pillar page: 1,500+ words
- City service page (Tier 1): 1,000+ words
- City service page (Tier 2/3): 800+ words
- Blog post: 1,000+ words

**First paragraph:**
- Include primary keyword in first 100 words
- State what the page is about
- Mention location

**Body content:**
- Natural keyword usage (don't stuff)
- Answer user questions
- Include specific local details for city pages
- Use related keywords throughout

**UPPA Compliance (Insurance content):**
- ✅ "We document damage for your claim"
- ✅ "Free inspection for insurance purposes"
- ❌ NEVER say "we negotiate with insurance"
- ❌ NEVER say "we handle your claim"
- ❌ NEVER say "we'll get you maximum payout"

### Internal Links
- Link to 3-5 related pages
- Use descriptive anchor text
- Link to pillar page from cluster pages
- Link to related services

### Images
- Every page needs at least 1 relevant image
- All images must have alt text with keyword
- Use OptimizedImage component for responsive images

### Schema
- Every page needs schema markup
- Service pages: Service schema
- City pages: LocalBusiness + Service schema
- Blog: Article schema

---

## PAGE TYPES

### Pillar Page
- Broad topic overview
- Links to all cluster pages
- Comprehensive coverage
- Example: /commercial-roofing

### City Service Page
- Specific service in specific city
- Links back to pillar
- Local details (landmarks, weather, demographics)
- Example: /hail-damage-repair-amarillo-tx

### Blog Post
- Informational content
- Answers common questions
- Links to relevant service pages
- Example: /blog/signs-of-hail-damage-roof

---

## OUTPUT FORMAT

When you complete a page, report:

```
PAGE COMPLETED: /path-to-page
Primary keyword: [keyword]
Word count: [count]
H2s used: [list]
Internal links added: [list]
Status: DONE | NEEDS_REVIEW
Notes: [any issues]
```

---

## FILE LOCATIONS

- Site: `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/`
- Pages: `app/[page-name]/page.tsx`
- Components: `components/`
- Images: `public/images/`

---

## DO NOT

- Change the page URL/slug
- Remove existing schema (only add/improve)
- Use duplicate H2s across city pages without location name
- Make claims about insurance negotiation
- Use placeholder content
- Leave word count under minimum
- Forget to include the city name in H2s for location pages

---

## EXAMPLE TASK

**Input:**
```
Page: /hail-damage-repair-amarillo-tx
Primary: hail damage repair amarillo
H2s:
1. Signs of Hail Damage in Amarillo
2. Amarillo Hail Damage Repair Cost
3. Documenting Storm Damage in Amarillo
4. Amarillo Roof Inspection After Hail
5. Repair vs Replace in Amarillo
Type: city-service (Tier 1)
```

**Your job:**
1. Open `app/hail-damage-repair-amarillo-tx/page.tsx`
2. Update metadata (title, description)
3. Ensure H1 has primary keyword
4. Replace/expand content using H2 structure
5. Add internal links
6. Verify schema exists
7. Report completion

---

*These rules ensure consistency across all pages.*
