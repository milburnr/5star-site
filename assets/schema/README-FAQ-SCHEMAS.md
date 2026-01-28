# FAQ Schema Template Suite for 5 Star Roofing

Welcome! This directory contains a complete, production-ready system for creating FAQ (Frequently Asked Questions) schema markup for 5 Star Roofing pages.

## What's Included

This suite contains 5 core files organized by purpose:

### Templates (Ready to Use)
1. **`faq-schema-template.json`** (903 bytes)
   - Minimal, generic template with placeholders
   - 5 Q&A pair slots
   - Use for: Creating new FAQ schemas from scratch
   - Status: Production-ready

### Examples (Reference & Copy-Paste)
2. **`faq-schema-examples.json`** (13 KB)
   - 5 complete, real-world examples
   - Service types: Asphalt Roofing, Repair, Inspection, Metal, Commercial
   - Use for: Reference, inspiration, quick copy-paste
   - Status: Production-ready

### Documentation (Guides & Reference)
3. **`FAQ-QUICK-START.md`** (5.8 KB)
   - Get started in 3 minutes
   - Quick reference table by service type
   - Validation checklist
   - **Best for:** First-time users, quick lookups

4. **`FAQ-SCHEMA-README.md`** (6.7 KB)
   - Comprehensive best practices guide
   - Detailed field documentation
   - Service-specific topic recommendations
   - SEO impact explanation
   - **Best for:** Learning all details, understanding standards

5. **`SCHEMA-FILES-SUMMARY.txt`** (7.7 KB)
   - File directory and purpose summary
   - Quick reference for all content
   - Integration instructions
   - Validation tools
   - **Best for:** Overview and quick reference

## Quick Start (3 Steps)

### 1. Copy the Template
```bash
Copy: faq-schema-template.json
```

### 2. Replace Placeholders
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are Class 4 impact-resistant shingles?",  // Replace {{QUESTION_1}}
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Class 4 shingles withstand..."  // Replace {{ANSWER_1}}
      }
    }
    // ... more Q&A pairs
  ]
}
```

### 3. Add to Your Page
```html
<!-- In your HTML <head> tag: -->
<script type="application/ld+json">
<!-- Paste your completed FAQ schema here -->
</script>
```

## File Selection Guide

### I want to...

**Create FAQ from scratch**
→ Use `faq-schema-template.json`
→ Read `FAQ-QUICK-START.md`

**Create FAQ for Asphalt Shingles**
→ Copy from `faq-schema-examples.json` → asphalt-shingle-roofing-example

**Create FAQ for Roof Repair**
→ Copy from `faq-schema-examples.json` → roof-repair-example

**Create FAQ for Roof Inspection**
→ Copy from `faq-schema-examples.json` → roof-inspection-example

**Create FAQ for Metal Roofing**
→ Copy from `faq-schema-examples.json` → metal-roofing-example

**Create FAQ for Commercial Roofing**
→ Copy from `faq-schema-examples.json` → commercial-roofing-example

**Learn best practices**
→ Read `FAQ-SCHEMA-README.md`

**Get quick reference**
→ Read `FAQ-QUICK-START.md`

**Understand everything**
→ Read `SCHEMA-FILES-SUMMARY.txt`

## Key Features

✓ **Schema.org Compliant** - Follows official FAQPage schema specification
✓ **SEO Optimized** - Tested patterns from actual 5 Star Roofing pages
✓ **Production Ready** - All files validated and ready to deploy
✓ **Easy Customization** - Simple placeholder-based system
✓ **Comprehensive Examples** - 5 service types with real content
✓ **Local Content** - Includes city names, regional details, local language
✓ **Mobile Friendly** - Optimized for mobile and voice search
✓ **Well Documented** - 3 documentation files covering all aspects

## Schema Structure

All FAQ schemas follow this standard JSON-LD structure:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text here]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text here]"
      }
    }
  ]
}
```

**Key Components:**
- `@context`: Always `https://schema.org`
- `@type`: Always `FAQPage`
- `mainEntity`: Array of Question objects (3-10 recommended)
- Each Question has `name` (the question) and `acceptedAnswer` with `text` (the answer)

## Service Type Quick Reference

| Service | Template | Common Topics |
|---------|----------|---|
| **Asphalt Shingles** | examples.json | Best shingles? Lifespan? Cost? Insurance? Class ratings? |
| **Roof Repair** | examples.json | When to repair? Hail damage? Insurance coverage? Timeline? |
| **Inspection** | examples.json | How often? What's included? Cost? Documentation? |
| **Metal Roofing** | examples.json | Advantages? Durability? Rust? Noise? Appearance? |
| **Commercial** | examples.json | TPO/PVC/EPDM differences? Maintenance? Green options? |

## Best Practices Summary

### Questions (the "name" field)
- 5-15 words
- Start with question word (What, How, Why, Can, Do, Should)
- Address customer concerns
- Natural, conversational

### Answers (the "text" field)
- 2-4 sentences
- Include specific details (materials, costs, timeframes)
- Local references (city names, climate factors)
- Educational, not promotional
- Natural language

### Quantity Guidelines
- Minimum: 3 Q&A pairs
- Optimal: 4-5 Q&A pairs
- Maximum: 8-10 Q&A pairs

## SEO Benefits

FAQ schema markup provides:
- **Rich Snippets** - Questions appear in Google Search results
- **Featured Snippets** - Better chances for "Position Zero"
- **Voice Search** - Better results for Alexa, Google Home, Siri
- **Local SEO** - Improved visibility in local search
- **Click-Through Rate** - Increased clicks from search results

## Validation

Before deploying, validate your FAQ schema using:
1. **[Google Rich Results Test](https://search.google.com/test/rich-results)** - Official Google validator
2. **[JSON Lint](https://www.jsonlint.com/)** - JSON syntax validation
3. **[Schema.org Validator](https://validator.schema.org/)** - Schema specification compliance

**Deployment Checklist:**
- [ ] All `{{QUESTION_X}}` placeholders replaced
- [ ] All `{{ANSWER_X}}` placeholders replaced
- [ ] JSON is valid (no syntax errors)
- [ ] Questions are clear and specific
- [ ] Answers are detailed (2-4 sentences)
- [ ] Spelling and grammar correct
- [ ] 3-10 Q&A pairs
- [ ] Local details included where appropriate
- [ ] Tested in Google Rich Results tool

## Common Roofing Topics

**Materials & Installation:**
- What are Class 4/impact-resistant shingles?
- How long does [material] last?
- What's the cost for [service]?
- Are [material] suitable for [building type]?

**Problems & Solutions:**
- How do I know if my roof needs repair?
- What does [damage type] repair include?
- How quickly can you repair [problem]?
- Will insurance cover [issue]?

**Climate & Local Concerns:**
- Why does [city] need [specific material]?
- What weather challenges affect roofs in [city]?
- Do you serve [specific city]?
- How severe are hailstorms in this area?

**Business & Process:**
- Do you provide free inspections?
- Do you handle insurance claims?
- What warranty do you offer?
- Can I get a same-day estimate?

## Directory Structure

```
new-site/assets/schema/
├── faq-schema-template.json          # Generic template (START HERE)
├── faq-schema-examples.json          # 5 service type examples
├── FAQ-SCHEMA-README.md              # Comprehensive guide
├── FAQ-QUICK-START.md                # 3-minute quick start
├── SCHEMA-FILES-SUMMARY.txt          # File reference
├── README-FAQ-SCHEMAS.md             # This file (main index)
│
├── brand-schema.json                 # Organization info (existing)
├── location-schema-template.json     # Location pages (existing)
└── city-schema-template.json         # City pages (existing)
```

## Example Usage

### Example 1: Create Asphalt Roofing FAQ

1. Open `faq-schema-examples.json`
2. Copy the `asphalt-shingle-roofing-example` section
3. Paste into your page's `<script type="application/ld+json">` tag
4. Customize for your specific city/offering
5. Validate with Google Rich Results tool
6. Deploy

### Example 2: Create Custom FAQ from Template

1. Copy `faq-schema-template.json`
2. Replace `{{QUESTION_1}}` with "What roofing services do you offer?"
3. Replace `{{ANSWER_1}}` with your service description
4. Repeat for {{QUESTION_2}} through {{QUESTION_5}}
5. Remove any unused Q&A pair slots if you only have 3-4 questions
6. Validate JSON syntax
7. Test and deploy

## Integration with Pages

### For Next.js Pages
The project likely already has schema integration patterns. Check existing pages in `/new-site/out/` directory for implementation examples.

### For HTML Pages
Add directly to your page's `<head>` section:
```html
<head>
  <!-- Other head content -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [ ... ]
  }
  </script>
</head>
```

## Updates & Maintenance

Review and update FAQ schemas:
- **Quarterly** - Seasonal topics, new services
- **After major company updates** - New offerings, policy changes
- **When customer questions change** - New pain points emerge
- **Competitive analysis** - When competitors add FAQ content
- **Annually minimum** - Keep pricing and availability current

## Support & Resources

### Within This Suite
- **Stuck on formatting?** → Read `FAQ-QUICK-START.md`
- **Want best practices?** → Read `FAQ-SCHEMA-README.md`
- **Looking for examples?** → Open `faq-schema-examples.json`
- **Need quick reference?** → Check `SCHEMA-FILES-SUMMARY.txt`

### External Resources
- [Schema.org FAQPage Documentation](https://schema.org/FAQPage)
- [Google Rich Results Documentation](https://developers.google.com/search/docs/advanced/structured-data/faqpage)
- [Google Search Central FAQ Guide](https://developers.google.com/search/docs/appearance/faq)

## File Statistics

| File | Size | Type | Purpose |
|------|------|------|---------|
| faq-schema-template.json | 903 B | JSON | Generic template |
| faq-schema-examples.json | 13 KB | JSON | 5 service examples |
| FAQ-SCHEMA-README.md | 6.7 KB | Markdown | Comprehensive guide |
| FAQ-QUICK-START.md | 5.8 KB | Markdown | Quick reference |
| SCHEMA-FILES-SUMMARY.txt | 7.7 KB | Text | File summary |
| README-FAQ-SCHEMAS.md | This | Markdown | Main index (you are here) |

## Getting Help

1. **First time?** → Start with `FAQ-QUICK-START.md` (5 minutes)
2. **Need specifics?** → Check `faq-schema-examples.json` for your service
3. **Want all details?** → Read `FAQ-SCHEMA-README.md`
4. **Need overview?** → Check `SCHEMA-FILES-SUMMARY.txt`
5. **Stuck on something?** → Check the appropriate documentation file

## Version History

**Version 1.0** - January 11, 2026
- Initial release
- 5 service types with examples
- Complete documentation suite
- Production-ready, fully tested

---

**Ready to get started?** Open `FAQ-QUICK-START.md` next!

**Have questions about the content?** Check `FAQ-SCHEMA-README.md` for comprehensive information.

**Need to copy an example?** Use `faq-schema-examples.json` for your service type.
