# Bug Taxonomy — 5star Self-Healing Test System

Synthesized from OpenBrain entries 7719-7763 and the friction report (2026-05-13). These are real bugs that have shipped or almost shipped on this site. Every new test added to `regression.spec.ts` should be tagged with the class it belongs to.

The point of this file: when a new bug surfaces, look here first. If it fits an existing class, write a test in that class&apos;s pattern. If it doesn&apos;t, add a new class and document it.

---

## Class 1 — Content presence / integrity

Things that render as empty, undefined, placeholder text, or with critical content missing.

**Real examples:**
- Lubbock page body wiped to near-empty by an over-aggressive regex sweep (OpenBrain 7757)
- Empty `<h3>` orphan on residential-roofing page (caught 2026-05-13 during this morning&apos;s session)
- `{{VERIFY:}}` placeholders rendered live on three pages (OpenBrain 7732)
- FAQ section flattened by YAML whitespace-collapse regex (OpenBrain 7742)

**Test pattern:**
```ts
await page.goto(url);
const mainText = await page.locator('main').textContent();
expect(mainText.length).toBeGreaterThan(MIN_BODY_LENGTH);  // e.g. 1500 chars
expect(mainText).not.toContain('{{VERIFY');
expect(mainText).not.toContain('undefined');
const emptyHeadings = await page.locator('h1:empty, h2:empty, h3:empty').count();
expect(emptyHeadings).toBe(0);
```

---

## Class 2 — Visual / layout

Layout, hero, sticky elements, mobile-vs-desktop differences. The "it compiles but looks broken" category.

**Real examples:**
- Hero NOT bleeding edge-to-edge on commercial-roofing + residential-roofing (caught 2026-05-13)
- `.hero-overlay` utility drifting to black across ~26 pages (OpenBrain 7719)
- Hero overlay legibility diverging between mobile and desktop (OpenBrain 7725)
- "Related Resources" auto-linker block injected at top of page instead of bottom (caught 2026-05-13)
- Horizontal scroll on mobile from oversized clamp() minimums (friction report)

**Test pattern:**
```ts
// Hero must be full-bleed: width equals viewport width
const hero = page.locator('section.hero, [data-hero]').first();
const heroBox = await hero.boundingBox();
const vp = page.viewportSize();
expect(heroBox.width).toBeCloseTo(vp.width, 0);

// No horizontal scroll
const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
```

---

## Class 3 — Schema / SEO

JSON-LD structured data, canonical URLs, OG images, sitemap presence.

**Real examples:**
- 143 pages with fabricated `aggregateRating` `reviewCount: "25"` (OpenBrain 7756)
- Canonical URL hardcoded to wrong page slug
- OG image missing or pointed at a 404
- noindex flag leaking to production
- FAQ schema present but body has no matching FAQ section

**Test pattern:**
```ts
const jsonLdScripts = await page.locator('script[type="application/ld+json"]').allTextContents();
const schemas = jsonLdScripts.map(s => JSON.parse(s));

// No fabricated aggregateRating
for (const s of schemas) {
  expect(JSON.stringify(s)).not.toMatch(/"reviewCount":\s*"?25"?/);
}

// Canonical matches current URL
const canonical = await page.locator('link[rel=canonical]').getAttribute('href');
expect(canonical).toContain(new URL(page.url()).pathname);

// OG image is set and resolves
const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
expect(ogImage).toMatch(/^https?:\/\//);
```

---

## Class 4 — Cross-page consistency

The "are all pages styled with the new styling? — yes — actually no" class. Things that must hold across pages of the same template.

**Real examples:**
- "All city pages have the new template" — turned out 2-3 still on the old style (caught 2026-05-13)
- Brand color violations (pink/red where amber/orange expected) on 2 of N pages (OpenBrain 7736)
- Some pages missing the StickyContactBar that all city pages should have
- Some pages have HighLevelForm-at-top that the new template doesn&apos;t use

**Test pattern:**
```ts
const cityPages = ['/big-spring-tx-roofing/', '/odessa-tx-roofing/', '/canyon-texas-roofing/', '/midland-tx-roofing/' /* ... */];
for (const url of cityPages) {
  await page.goto(url);
  // Every city page must have these:
  await expect(page.locator('section.hero')).toBeVisible();
  await expect(page.locator('[data-sticky-contact]')).toHaveCount({ min: 1 });
  await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();
  // Every city page must NOT have these (old template):
  await expect(page.locator('form[data-highlevel-form]')).toHaveCount(0);
}
```

---

## Class 5 — Interaction

Things that need a click/tap to verify.

**Real examples:**
- Mobile menu doesn&apos;t open (friction report)
- Accordion FAQ items don&apos;t expand
- Phone link not tel:
- Sticky CTA tap targets overlap on small screens

**Test pattern:**
```ts
// Mobile menu opens
await page.setViewportSize({ width: 375, height: 812 });
await page.goto(url);
const menuTrigger = page.locator('[aria-label*="menu" i], button[aria-controls*="nav"]').first();
await menuTrigger.click();
await expect(page.locator('[role="dialog"], [data-mobile-nav]').first()).toBeVisible();

// All phone links are tel:
const phoneTexts = await page.locator('a:has-text("(806)")').all();
for (const link of phoneTexts) {
  expect(await link.getAttribute('href')).toMatch(/^tel:/);
}
```

---

## Class 6 — Content policy (cross-check the precheck)

Belt + suspenders. The precheck script catches these at commit time; these tests catch them at runtime against the deployed/dev site.

**Real examples:**
- Forbidden service-claim phrases that snuck past pattern-based precheck via semantic variants (OpenBrain 7733)
- Fabricated testimonials reintroduced from old component templates (OpenBrain 7758)

**Test pattern:**
```ts
const FORBIDDEN = [
  /emergency response/i,
  /same.day (response|inspection|service)/i,
  /respond(s|ed)? (quickly|fast|within)/i,
  /24\/?7/,
  /stopped the leak/i,
  /within the hour/i,
];
const bodyText = await page.locator('body').textContent();
for (const re of FORBIDDEN) {
  expect(bodyText).not.toMatch(re);
}
```
