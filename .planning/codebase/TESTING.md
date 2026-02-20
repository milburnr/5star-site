# Testing Patterns

**Analysis Date:** 2026-02-20

## Test Framework

**Status:** Not Configured

**Current State:**
- No Jest, Vitest, or other test framework installed
- No test files (.test.ts, .spec.ts) present in source
- No test configuration files (jest.config.js, vitest.config.ts) in repository

**Available Testing Commands:**
```bash
# From sites/5-star-roofing/
npm run lint              # Next.js ESLint only (not unit tests)
```

**Manual Testing:**
- Site builder has manual test files: `tools/site-builder/test*.js` for specific scenarios
- Example: `test-fcs-automated.js` for automated builds, `test-design-extraction.js` for design extraction
- These are one-off test scripts, not part of automated test suite

## Testing Strategy

**Approach:** Limited automated testing; relies on manual testing and build validation

**Site Builder Testing:**
- **Design Extraction:** `test-design-extraction.js` validates color extraction from reference sites
- **Page Generation:** `test-fcs-automated.js` validates complete build pipeline
- **Mockup Deployment:** `test-mockup-deployment.js` validates generated site structure
- Run command: `node <test-file.js>` from `tools/site-builder/`

**5 Star Roofing Site Testing:**
- **Build validation:** `npm run build` generates static HTML to `out/` directory
- **Lighthouse audit:** `.lighthouserc.json` configured for performance/SEO checks
- **Manual: Visual inspection of pages (268 pages across hub-and-spoke model)
- **Deployment testing:** Build must produce valid Next.js static export (trailing slashes, proper links)

**Example: Site Builder Manual Test**
```javascript
// tools/site-builder/test-fcs-automated.js
// Validates:
// 1. Design extraction (colors, fonts)
// 2. Content extraction (business info, services)
// 3. Page generation (creates Next.js pages)
// 4. Build execution (compiles without errors)

const SiteBuilder = require('./lib/site-builder');
const builder = new SiteBuilder({ outputDir: './test/output-fcs' });
await builder.buildFromDomain('https://example.com');
```

## Architecture Testing (Manual)

**Components:**
- **FadeIn:** Hydration handling tested manually (should render plain div on server, animate on client)
- **MobileMenu:** Portal rendering, backdrop dismissal tested manually
- **Breadcrumb:** Schema generation validated by inspecting JSON-LD in page source
- **AnimatedCounter:** Intersection Observer (useInView) validated by scrolling to element

**Schema Markup:**
- `Breadcrumb` component generates `BreadcrumbList` JSON-LD
- Pages include `LocalBusiness`, `Service`, `FAQ` schema
- Schema validation: manual inspection in browser DevTools or schema validation tools

**Example: Testing Breadcrumb Schema**
```typescript
// app/roof-inspections-amarillo/page.tsx
<Breadcrumb items={[
  { name: "Home", url: "/" },
  { name: "Roof Inspections", url: "/roof-inspections/" },
  { name: "Amarillo", url: "/roof-inspections-amarillo/" }
]} />

// Generates in page source:
// <script type="application/ld+json">
// {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   "itemListElement": [...]
// }
// </script>
```

## Site Builder Testing (Tools)

**Test Files Location:** `tools/site-builder/test*.js`

**Available Tests:**
1. `test-dashboard-automated.js` - Dashboard UI validation
2. `test-design-extraction.js` - Color/design extraction from reference
3. `test-fcs-automated.js` - Full build from FCS site
4. `test-fcs-verified.js` - Verified test output
5. `test-mockup-deployment.js` - Deployment structure validation
6. `verify-test-setup.js` - Environment verification

**Running Tests:**
```bash
cd tools/site-builder
node test-fcs-automated.js        # Full automated build test
node test-design-extraction.js    # Design extraction test
node verify-test-setup.js         # Setup validation
```

**Test Output:**
- Generated sites stored in `tools/site-builder/test/output-*` directories
- Test output includes: page files, component files, build artifacts
- Manual inspection of generated HTML/CSS for correctness

## Page Generation Validation

**Process:**
1. Content is extracted from existing site or generated from business info
2. Page templates are built in `PageGenerator` (`lib/generators/page-generator.js`)
3. Files are written to output directory
4. Build validation: `npm run build` must complete without errors

**Validation Steps (Manual):**
```bash
# From generated site directory
npm install
npm run build          # Should create out/ directory with 268+ HTML files
npm start             # Preview production build
npm run lint          # ESLint check (optional errors allowed)
```

**What Gets Validated:**
- Page structure: imports, exports, metadata
- Schema markup: JSON-LD in page source
- Breadcrumbs: proper nesting and URLs
- Internal links: valid relative/absolute URLs
- Image tags: proper src, alt, width, height attributes
- No TypeScript compilation errors
- No missing dependencies

## Browser/Device Testing

**Manual Testing Required For:**
- Mobile menu responsive behavior (desktop/tablet/mobile)
- Animation performance (scroll animations, fade-ins)
- Phone click tracking (Google Analytics events)
- Form submissions (HighLevel widget interaction)
- Lighthouse metrics (PageSpeed, SEO, Accessibility scores)

**Lighthouse Automation:**
- `.lighthouserc.json` configured for automated Lighthouse checks
- Can run: `lhci autorun` to generate reports
- Metrics tracked: Performance, Accessibility, Best Practices, SEO

## Type Checking (Build-Time)

**Process:**
- TypeScript compiler runs during `npm run build`
- `strict: true` in tsconfig.json enforces type safety
- Next.js type checking: `noEmit: true` with `skipLibCheck: true`

**Validation:**
```bash
npm run build    # Type checking happens as part of build
```

**What Gets Checked:**
- All `.tsx` files for type errors
- Component prop interfaces match usage
- Import/export type safety
- React hook rules (via ESLint with Next.js plugin)

## Code Quality Tools

**Available:**
- **ESLint:** `npm run lint` (Next.js ESLint recommended rules)
- **Lighthouse:** `.lighthouserc.json` configured for performance audits
- **TypeScript:** Type checking during build

**Not Configured:**
- Unit test framework (Jest, Vitest)
- E2E testing framework (Playwright, Cypress)
- Code coverage tools
- Pre-commit hooks

## Recommended Testing Structure (If Added)

**Proposed Test File Location:**
```
sites/5-star-roofing/
├── __tests__/
│   ├── components/
│   │   ├── FadeIn.test.tsx
│   │   ├── Breadcrumb.test.tsx
│   │   └── MobileMenu.test.tsx
│   ├── lib/
│   │   └── utils.test.ts
│   └── pages/
│       └── home.test.tsx
├── jest.config.js
└── setupTests.ts
```

**Recommended Jest Configuration:**
```javascript
// jest.config.js
module.exports = {
  preset: 'next/jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testMatch: ['**/__tests__/**/*.test.{ts,tsx}']
}
```

**Test Commands (If Added):**
```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm test -- --coverage     # Coverage report
```

## Component Testing Patterns (If Implemented)

**Example: Testing FadeIn Component**
```typescript
import { render, screen } from '@testing-library/react';
import { FadeIn } from '@/components/FadeIn';

describe('FadeIn', () => {
  it('renders children', () => {
    render(<FadeIn>Test content</FadeIn>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <FadeIn className="custom-class">Content</FadeIn>
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('renders plain div on server (hydration safe)', () => {
    const { container } = render(<FadeIn>Content</FadeIn>);
    // Before mount, should render div not motion.div
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
```

**Example: Testing Breadcrumb Schema**
```typescript
import { render } from '@testing-library/react';
import { Breadcrumb } from '@/components/Breadcrumb';

describe('Breadcrumb', () => {
  it('generates correct schema markup', () => {
    const { container } = render(
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" }
      ]} />
    );

    const schema = JSON.parse(
      container.querySelector('script[type="application/ld+json"]')?.textContent || '{}'
    );

    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].name).toBe('Home');
  });
});
```

## Continuous Integration

**Current State:** Not configured

**Platform:** GitHub (git repo detected)

**Possible CI Setup (If Added):**
- GitHub Actions workflow for:
  - ESLint checks (`npm run lint`)
  - TypeScript type checking (npm run build)
  - Lighthouse audits
  - Deployment preview builds

**Example GitHub Actions Workflow:**
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test  # If tests are added
```

## Known Testing Gaps

**Areas Not Currently Tested:**
- Component rendering (no unit tests)
- Component interactions (mobile menu open/close logic)
- Hook behavior (usePhoneClickTracking, animation hooks)
- Form submissions (HighLevel form integration)
- Google Analytics tracking events
- URL validation and link integrity
- Accessibility compliance (no automated a11y tests)
- Responsive design (no visual regression tests)
- Image optimization validation
- SEO metadata accuracy (schema, titles, descriptions)

**Why:** Site builder focuses on rapid generation and manual validation. Testing framework adds overhead for a static site generator tool focused on one-time builds rather than continuous feature development.

---

*Testing analysis: 2026-02-20*
