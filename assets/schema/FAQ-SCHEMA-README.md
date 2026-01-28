# FAQ Schema Template Guide

## Overview
This guide explains how to use the FAQ schema templates for 5 Star Roofing pages. FAQ (Frequently Asked Questions) schema helps search engines understand and display your Q&A content, improving SEO and user engagement.

## Files Included

### 1. `faq-schema-template.json`
A minimal, reusable template with 5 question/answer pairs and placeholder variables.

**Use this for:**
- Quick creation of new FAQ schemas
- Service pages (roofing types, repair services, inspections)
- Location-specific roofing pages
- Any page requiring FAQ structured data

**Structure:**
- `@context`: Set to `https://schema.org`
- `@type`: Always `FAQPage`
- `mainEntity`: Array of Question objects
- Each Question has `name` (the question) and `acceptedAnswer` with `text` (the answer)

### 2. `faq-schema-examples.json`
Real-world examples with actual 5 Star Roofing content for five service types:
- Asphalt Shingle Roofing
- Roof Repair
- Roof Inspection
- Metal Roofing
- Commercial Roofing

**Use this for:**
- Reference and inspiration
- Copy-paste when creating similar pages
- Understanding domain-specific Q&A patterns

## How to Create FAQ Schema for a New Page

### Step 1: Choose Your Template
Start with `faq-schema-template.json` or adapt an example from `faq-schema-examples.json`.

### Step 2: Replace Placeholders
Replace these variables with actual content:
- `{{QUESTION_1}}` → Your first question
- `{{ANSWER_1}}` → Your first answer
- `{{QUESTION_2}}` through `{{QUESTION_5}}` → Additional questions and answers

Example replacement:
```json
{
  "@type": "Question",
  "name": "What roofing materials do you recommend?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "We recommend Class 4 impact-resistant architectural shingles for Amarillo's hail-prone climate. Metal roofing is another excellent option offering 50+ year durability."
  }
}
```

### Step 3: Integration
Include the FAQ schema in your page's `<head>` tag as JSON-LD:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
</script>
```

Or integrate it into your Next.js page component using existing patterns in the project.

## Best Practices

### Question Format
- Use clear, natural language questions
- Start with question words (What, How, Why, Do, Can, Should, etc.)
- Keep questions concise (5-15 words ideal)
- Focus on customer pain points and common concerns

### Answer Format
- Provide comprehensive, detailed answers (2-4 sentences)
- Include specific details: product names, measurements, timeframes, costs
- Use natural language that matches your service descriptions
- Avoid promotional tone; focus on education and value
- Include local references (city names, regional climate factors)

### Question Selection
Target these common roofing topics:
- **Product Questions**: "What are the best [material] for [region]?"
- **Cost Questions**: "How much does [service] cost?"
- **Durability Questions**: "How long does [roofing type] last?"
- **Process Questions**: "How does [service type] work?"
- **Benefit Questions**: "Do [material/service] qualify for [discount/benefit]?"
- **Emergency Questions**: "What if [problem occurs]?"

### Quantity Guidelines
- **Minimum**: 3 questions per page
- **Optimal**: 4-5 questions per page
- **Maximum**: 8-10 questions per page
- More is better for SEO, but only if relevant to the page topic

## Service-Specific Topics

### Asphalt Shingle Roofing
- Best shingles for climate
- Lifespan and durability
- Insurance discounts
- Cost and pricing
- Maintenance requirements
- Climate considerations
- Class ratings (3, 4, impact-resistant)

### Roof Repair
- Signs of damage
- Hail damage specifics
- Insurance coverage
- Emergency response timeframe
- Partial vs. full replacement
- Warranty information
- Weather impact

### Roof Inspection
- Inspection frequency
- What inspections include
- Cost of inspections
- Inspection timeline
- Insurance documentation
- Hidden damage detection
- Maintenance recommendations

### Metal Roofing
- Advantages and benefits
- Rust and corrosion resistance
- Noise concerns
- Installation over existing roofs
- Color and style options
- Lifespan
- Energy efficiency

### Commercial Roofing
- Material differences (TPO, PVC, EPDM)
- Flat roof durability
- Emergency services
- Green/sustainable options
- Maintenance schedules
- Warranty coverage
- Installation complexity

## SEO Impact

FAQ schema provides these SEO benefits:
- **Rich Snippets**: Questions may appear directly in Google Search results
- **Featured Snippets**: Better chance of appearing in "Position Zero"
- **Click-Through Rate**: FAQ snippets increase clicks and user engagement
- **Voice Search**: Improves results for voice-based queries
- **Structured Data**: Helps Google understand page content better

## Validation

Always validate your schema using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Structured Data Testing Tool](https://www.google.com/webmasters/markup-helper/u/0/)

## Common Mistakes to Avoid

1. **Vague Questions**: "What do you do?" → Use specific "How much does commercial roofing cost?"
2. **Short Answers**: Answers should be complete (2-4 sentences minimum)
3. **Typos and Grammar**: Proofread all questions and answers
4. **Inconsistent Formatting**: Follow the template structure exactly
5. **Mismatched Answers**: Ensure answers actually respond to questions
6. **Local Generic**: Don't use generic national answers; include local details
7. **Outdated Information**: Review annually and update seasonal/pricing info
8. **Missing Context**: For location pages, include city/region references

## Examples by Page Type

### Location Service Page (e.g., "Roofing in Amarillo")
Include location-specific questions:
- "Why does Amarillo need hail-resistant roofing?"
- "What are Amarillo's typical roofing costs?"
- "How severe are Amarillo's hail storms?"

### Product/Material Page (e.g., "Asphalt Shingle Roofing")
Focus on material properties:
- "What makes Class 4 shingles different?"
- "How long do premium shingles last?"
- "Are they worth the investment?"

### Service Page (e.g., "Roof Repair")
Address process and outcomes:
- "How do you diagnose roof problems?"
- "What's your typical repair timeline?"
- "How do you file insurance claims?"

## Maintenance

- Review and update FAQ schemas quarterly
- After major service or product changes
- When seasonal topics become relevant
- When new customer questions emerge
- When competitor pages show new approaches

## Questions?

Refer to the examples in `faq-schema-examples.json` or check the original page implementations in `/new-site/out/` directories.
