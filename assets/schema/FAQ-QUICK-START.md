# FAQ Schema Quick Start Guide

## 3-Minute Setup

### 1. Copy the Template
Start with `faq-schema-template.json` which has 5 placeholder Q&A pairs.

### 2. Replace Placeholders
Replace `{{QUESTION_X}}` and `{{ANSWER_X}}` with your actual content:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What roofing services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer residential and commercial roofing services including new installations, repairs, inspections, and storm damage restoration for all roofing materials."
      }
    },
    // ... more Q&A pairs
  ]
}
```

### 3. Add to Your Page
Include in your HTML `<head>`:
```html
<script type="application/ld+json">
<!-- Paste your completed FAQ schema here -->
</script>
```

## Service-Specific Templates

Need specific content? Use examples from `faq-schema-examples.json`:

| Service | File Location | Common Questions |
|---------|---------------|------------------|
| Asphalt Shingles | examples.json → asphalt-shingle-roofing-example | Best shingles? Lifespan? Cost? Insurance discounts? |
| Roof Repair | examples.json → roof-repair-example | How to tell if repair needed? Hail damage? Insurance? |
| Roof Inspection | examples.json → roof-inspection-example | How often? What's included? Cost? Documentation? |
| Metal Roofing | examples.json → metal-roofing-example | Advantages? Rust concerns? Noise? Colors? |
| Commercial | examples.json → commercial-roofing-example | TPO vs PVC vs EPDM? Maintenance? Green options? |

## Formatting Tips

### Questions (name field)
- Keep 5-15 words
- Start with question word (What, How, Why, Can, Do, Should, etc.)
- Examples:
  - "What are Class 4 impact-resistant shingles?"
  - "How much does roof repair cost in Amarillo?"
  - "Why choose metal roofing over asphalt?"

### Answers (text field)
- Write 2-4 sentences
- Include specific details (materials, costs, timeframes)
- Local references are good
- Natural language, not promotional
- Examples:
  - "Class 4 asphalt shingles cost $6-$8/sq ft and qualify for 10-35% insurance discounts in Texas. They withstand up to 130 mph winds and resist hail up to 2 inches in diameter."
  - "Our roof inspections include examination of shingles, flashing, decking, gutters, and attic ventilation. We provide a written report with photos and recommendations, typically completed within 2 hours."

## Best Q&A Topics by Page Type

### Location Pages (Amarillo, Lubbock, etc.)
1. "Why does [city] need [specific roofing material]?"
2. "How much does roofing cost in [city]?"
3. "What weather challenges affect roofs in [city]?"
4. "Do you serve [city]?"
5. "What are typical roof issues in [city]?"

### Service Pages (Asphalt Roofing, Metal Roofing, etc.)
1. "What are the advantages of [service/material]?"
2. "How long does [service/material] last?"
3. "How much does [service/material] cost?"
4. "Is [service/material] good for [climate/building type]?"
5. "[Specific concern: durability, maintenance, appearance]?"

### Problem Pages (Hail Damage, Leaks, Storm Damage)
1. "How do I know if my roof has [problem]?"
2. "What does [problem] repair include?"
3. "How quickly can you repair [problem]?"
4. "Will insurance cover [problem]?"
5. "How much does [problem] repair cost?"

## Validation Checklist

- [ ] All placeholders replaced with real content
- [ ] Questions are clear and specific
- [ ] Answers are detailed (2-4 sentences)
- [ ] Spelling and grammar correct
- [ ] No generic/template language remaining
- [ ] Local details included where appropriate
- [ ] URLs/phone numbers accurate if included
- [ ] JSON is valid (use [jsonlint.com](https://www.jsonlint.com/))
- [ ] 3-10 Q&A pairs per page
- [ ] All `name` and `text` fields filled

## Common Variations

### For More/Fewer Questions
The template includes 5 Q&A pairs. To modify:
- **Add questions**: Copy a Question object block and increment the number
- **Remove questions**: Delete a Question object block entirely

### For Different Service Types
Look at `faq-schema-examples.json` for patterns specific to:
- Individual materials (asphalt, metal, slate, tile)
- Service types (repair, inspection, replacement, maintenance)
- Commercial vs. residential
- Emergency vs. routine services
- Insurance-related topics

## SEO Impact Examples

Well-written FAQ schema can result in:
- **Google Rich Snippets**: Your questions appear directly in search results
- **Featured Snippets**: Higher visibility in "Position Zero"
- **Voice Search**: Better results for Alexa, Google Home, Siri queries
- **Local Search**: Improved local SEO for service areas

## Files Reference

```
new-site/assets/schema/
├── faq-schema-template.json          ← START HERE (blank template)
├── faq-schema-examples.json          ← Reference examples
├── FAQ-SCHEMA-README.md              ← Full documentation
├── FAQ-QUICK-START.md                ← This file
├── brand-schema.json                 ← Organization schema
├── location-schema-template.json     ← Location pages
└── city-schema-template.json         ← City pages
```

## Need Help?

1. **See examples**: Open `faq-schema-examples.json` for real-world patterns
2. **Understand fields**: Read `FAQ-SCHEMA-README.md` detailed guide
3. **Validate JSON**: Paste your schema at [jsonlint.com](https://www.jsonlint.com/)
4. **Check SEO**: Test at [Google Rich Results](https://search.google.com/test/rich-results)

## When to Update FAQ Schema

- After adding new services
- When seasonal topics change
- After major company updates
- When customer questions change
- Quarterly review for accuracy
- When competitor content shifts

---

**Pro Tip**: Copy examples from `faq-schema-examples.json` that match your service, replace city/product names, and you're done!
