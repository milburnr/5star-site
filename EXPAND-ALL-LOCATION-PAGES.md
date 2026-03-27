# Expand ALL Location Pages to Lubbock Quality

**Task:** Expand all weak/thin location pages from current word count → 1200+ words

**Quality target:** `app/lubbock-tx-roofing/page.tsx` (gold standard)

**Skill:** `/Volumes/External-2TB/Projects/service-site-builder/skills/location-page-expansion/SKILL.md`

---

## Pages to Expand (from your audit)

### Priority 1: Primary Market Hub (Amarillo)
- `/amarillo-texas-roofing/` - Currently 1,049 words → expand to 1,200+
  - **Weakest primary market page - fix this first**

### Priority 2: Smaller Market City Hubs (5 pages)
- `/big-spring-tx/` - 737 words → 1,200+
- `/levelland-tx/` - 784 words → 1,200+
- `/snyder-tx/` - 742 words → 1,200+
- `/andrews-tx/` - 753 words → 1,200+
- `/monahans-tx/` - 768 words → 1,200+

### Priority 3: Service×City Cross Pages (19 pages)
All the metal-roofing and TPO pages at 600-800 words → 1,200+

### Priority 4: Critical Fix
- `/wind-damage-repair-perryton/` - 470 words → 1,200+ (ONLY page under 600)

---

## Your Process (for EACH page)

### Step 1: Research the City

For each city, find:

1. **5-7 Neighborhoods**
   - Google Maps + Zillow
   - Real neighborhood names, home styles, build dates

2. **3-5 Storm Events with EXACT dates**
   - NOAA Storm Events Database: https://www.ncdc.noaa.gov/stormevents/
   - Filter: Texas county for that city, Hail/Wind, 2018-present
   - Must have exact dates (Month DD, YYYY)

3. **Demographics**
   - Census.gov (population trends)
   - Median home age, why people live there

### Step 2: Add 5 Sections to Page (500 words)

Add these sections to the existing page content:

1. **Neighborhood Breakdown** (150 words)
   ```markdown
   ## Neighborhoods We Serve in [City]
   
   ### [Neighborhood 1]
   [2-3 sentences about homes, build dates, roofing characteristics]
   
   ### [Neighborhood 2]
   ...
   
   [5-7 neighborhoods total]
   ```

2. **Storm History** (100 words)
   ```markdown
   ## Recent Hail Events in [City]
   
   **[Month DD, YYYY]** - [Storm description with hail size, areas hit, damage scale]
   
   **[Month DD, YYYY]** - [Second event...]
   
   [3-5 events with REAL dates from NOAA]
   ```

3. **Local Context** (100 words)
   ```markdown
   ## Understanding [City] Homeowners
   
   [Population trends, median home age, demographics, why people live there]
   ```

4. **Local Challenges** (75 words)
   ```markdown
   ## Unique Roofing Challenges in [City]
   
   **[Challenge 1]**: [Why it matters for roofs]
   **[Challenge 2]**: [Why it matters]
   **[Challenge 3]**: [Why it matters]
   ```

5. **Location FAQ** (75 words)
   ```markdown
   ## [City] Roofing FAQs
   
   **Q: [City-specific question]**
   A: [Answer with local data]
   
   [3 questions total, all specific to this city]
   ```

---

## Critical Rules (from skill)

✅ **DO:**
- Use REAL data (NOAA, Census, Zillow, Google Maps)
- Storm events must have EXACT dates
- Use REAL neighborhood names
- Every city gets unique content (no templates)

❌ **DON'T:**
- Invent storm events or dates
- Create fake testimonials
- Claim past jobs in these locations
- Copy content from other pages
- Use generic content that could apply anywhere

---

## Work Order

**Start with Priority 1 (Amarillo) first** - it's the weakest primary market page and most important to fix.

Then do Priority 2 (smaller market hubs).

Then Priority 3 (service×city cross pages).

Then Priority 4 (Perryton wind damage page).

---

## Acceptance Criteria

For EACH expanded page:
- [ ] 1,000-1,200 words total
- [ ] 5-7 real neighborhoods mentioned by name
- [ ] 3-5 storm events with EXACT dates (NOAA verified)
- [ ] Demographics included (Census data)
- [ ] Local challenges explained
- [ ] 3 location-specific FAQ questions
- [ ] NO fake testimonials or unverifiable claims
- [ ] Natural, conversational tone

---

## When Complete

After all pages expanded:
- Build the site (`npm run build`)
- Report which pages were expanded
- Note any research challenges or missing data

---

## Example Quality Check

Look at `/lubbock-tx-roofing/page.tsx` - that's your target.

Every expanded page should have similar depth:
- Real neighborhood names (Shadow Hills, Tech Terrace)
- Specific storm dates and details
- Local housing context
- Genuine local expertise signals

---

**Start with Amarillo first, then work through the priorities.**
