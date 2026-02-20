# Coding Conventions

**Analysis Date:** 2026-02-20

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `FadeIn.tsx`, `PhoneClickTracker.tsx`, `Breadcrumb.tsx`)
- Pages: kebab-case matching URL structure (e.g., `roof-inspections-amarillo/page.tsx`)
- Utilities/constants: camelCase with descriptive names (e.g., `constants.ts`, `utils.ts`, `site-builder.js`)
- Classes in JavaScript: PascalCase (e.g., `SiteBuilder`, `ComprehensiveAnalyzer`, `PageGenerator`)

**Functions:**
- Exported React components: PascalCase (e.g., `export function FadeIn()`, `export function Breadcrumb()`)
- Helper/utility functions: camelCase (e.g., `generatePageTemplate()`, `extractContext()`, `analyzeGaps()`)
- Private methods: camelCase with descriptive names (e.g., `updateProgress()`, `writeFile()`)

**Variables:**
- Constants: UPPER_SNAKE_CASE when static/immutable or camelCase for business data objects
- React state: camelCase (e.g., `isOpen`, `isMounted`, `displayValue`)
- Data objects: camelCase with nested lowercase (e.g., `cityData`, `serviceData`)
- TypeScript interfaces: PascalCase with 'Props' suffix (e.g., `FadeInProps`, `BreadcrumbProps`)

**Types:**
- Interfaces: PascalCase (e.g., `BreadcrumbItem`, `BreadcrumbProps`, `CityData`, `ServiceData`)
- Type aliases: PascalCase (e.g., `ClassValue`)

## Code Style

**Formatting:**
- No explicit formatter configured (no ESLint, Prettier config files detected)
- Uses TypeScript strict mode (`strict: true` in `tsconfig.json`)
- Trailing slashes enforced via Next.js config (`trailingSlash: true`)
- Indentation: 2 spaces (observed in all .tsx and .js files)

**Linting:**
- Next.js ESLint is available via `npm run lint`
- No custom ESLint rules configured
- Import order is not strictly enforced but follows pattern: React/Next.js imports → component imports → utility imports

**Key Configuration Files:**
- `tsconfig.json`: ES2017 target, strict type checking, path alias `@/*` maps to root
- `next.config.ts`: static export (`output: "export"`), unoptimized images (for static export), trailing slashes enabled
- `tailwind.config.ts`: extends theme with brand colors (gold, brown, gray palette)

## Import Organization

**Order:**
1. React and Next.js imports (`'use client'` directive at top for client components)
2. Built-in Node/browser APIs
3. Third-party library imports (framer-motion, radix-ui, clsx, etc.)
4. Local component imports using `@/` path alias
5. Relative imports (rare, usually for internal component files)

**Example:**
```typescript
'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { cn } from '@/lib/utils';
```

**Path Aliases:**
- `@/*` resolves to repository root (e.g., `@/components/FadeIn` → `/sites/5-star-roofing/components/FadeIn.tsx`)

## Error Handling

**Patterns:**
- Try-catch blocks used in generators and analyzers for file I/O and async operations
- Error handling in site builder: wrapped in try-catch with progress callbacks
- Progress callbacks used to communicate state and errors to UI
- No explicit error throwing in components; graceful degradation instead (e.g., `return null` if not mounted)
- Fallback values for optional props (e.g., `delay = 0`, `duration = 0.5` in `FadeIn`)

**Example (from site-builder.js):**
```javascript
try {
  // Step 1: Extract context
  this.state.context = await this.contextExtractor.extractFromDomain(domain);
} catch (error) {
  this.updateProgress(progressCallback, 'error', {
    status: 'Error extracting context',
    error: error.message
  });
  throw error;
}
```

## Logging

**Framework:** No external logging library (console not used in components)

**Patterns:**
- Site builder uses progress callbacks for status updates instead of console.log
- Example: `this.updateProgress(progressCallback, 'analyzing', { status: '...' })`
- No debug logging in React components
- File operations in generators report success/error via callback pattern

## Comments

**When to Comment:**
- File headers documenting purpose and responsibilities (e.g., "Page Generator - Create actual page files...")
- Complex logic explanations (e.g., animation timing, schema generation)
- JSDoc blocks for public methods in classes
- Inline comments for non-obvious implementations (e.g., hydration prevention in `FadeIn`)

**JSDoc/TSDoc:**
- Used in site-builder classes (`@param`, `@returns` annotations)
- Simple TypeScript interfaces document prop types without extra comments
- Example:
```typescript
/**
 * Component that tracks phone link clicks and sends them to Google Analytics
 * This component doesn't render anything visible - it just sets up the tracking
 */
export function PhoneClickTracker() { ... }
```

## Function Design

**Size:**
- Components: 50-150 lines typical (e.g., `FadeIn.tsx` = 63 lines, `MobileMenu.tsx` = 115 lines)
- Utility functions: 10-40 lines
- Class methods: 20-100 lines depending on complexity
- Generators: 100-500+ lines for template building

**Parameters:**
- Use TypeScript interfaces for props: `FadeInProps`, `BreadcrumbProps`
- Destructure props in function parameters: `({ children, delay = 0 }: FadeInProps)`
- Default values provided for optional props
- No positional-only parameters; all configuration via objects/interfaces

**Return Values:**
- React components return JSX (React.ReactNode)
- Utility functions return single values or objects
- Class methods return promises when async (e.g., `async generatePage(): Promise<string>`)
- Generators return file paths as strings: `Promise<string>`

**Example:**
```typescript
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
}: FadeInProps) {
  // Function body: 25 lines
  return <motion.div ...>{children}</motion.div>;
}
```

## Module Design

**Exports:**
- Named exports for reusable components: `export function ComponentName() { }`
- Barrel files in `components/ui/` use `export { Button, buttonVariants }` pattern
- Classes exported as default: `module.exports = ClassName` in Node.js files
- Constants exported as named exports: `export const BUSINESS_INFO = { }`

**Barrel Files:**
- `components/ui/index.ts`: aggregates UI component exports
- `components/index.ts`: (not used in 5-star site; local imports only)

**Example (button component):**
```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...);
export { Button, buttonVariants }
```

## Styling Patterns

**Tailwind Usage:**
- All component classes defined in `app/globals.css` under `@layer components`
- Never use inline Tailwind strings outside of @layer
- Use `cn()` utility to merge Tailwind classes: `className={cn(buttonVariants({ variant, size, className }))}`
- Custom component classes: `.btn-primary`, `.container-custom`, `.card`, `.service-card`, `.section`

**Brand Colors:**
- Defined in `tailwind.config.ts` as `brand.gold`, `brand.brown`, etc.
- Light variants: `brand.gold-light`, `brand.gold-bright`, `brand.gold-vibrant`
- Gray palette: `gray.primary`, `gray.text`, `gray.footer`
- Use semantic class names: `text-brand-gold-light`, `hover:bg-brand-gold-bright`

**Example:**
```typescript
// In globals.css
.btn-primary {
  @apply bg-brand-gold text-white px-6 py-3 rounded-md font-semibold
    hover:bg-brand-gold-vibrant transition-all duration-300;
}

// In component
<button className={cn('btn-primary', className)}>{children}</button>
```

## Client/Server Components

**'use client' Directive:**
- Used in interactive components: `FadeIn.tsx`, `MobileMenu.tsx`, `AnimatedCounter.tsx`, `PhoneClickTracker.tsx`
- Next.js 15 App Router pattern
- Always at top of file

**Server Components (default):**
- Page files: `app/[route]/page.tsx`
- Components that only render schema/metadata (e.g., `Breadcrumb.tsx` has no 'use client' but includes JSON-LD)

**Hydration Handling:**
- `useState(false)` + `useEffect(setTrue)` pattern to prevent hydration mismatches
- Example: `FadeIn` and `MobileMenu` use `isMounted` state
- Render plain div on server, animate only after mount: `if (!isMounted) return <div>{children}</div>;`

## Type Safety

**TypeScript Settings:**
- Strict mode enabled: `"strict": true`
- `noEmit: true` (Next.js handles compilation)
- `moduleResolution: "bundler"`
- `isolatedModules: true` (required for Next.js)

**Prop Type Definition:**
- Always define props interface: `interface ComponentProps { ... }`
- Use `React.ReactNode` for children: `children: ReactNode`
- Optional props have `?`: `delay?: number`
- Union types for variants: `direction?: 'up' | 'down' | 'left' | 'right' | 'none'`

**Example:**
```typescript
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}
```

## Next.js Specific

**Metadata Export:**
- Use `Metadata` type from Next.js: `export const metadata: Metadata = { ... }`
- Includes canonical URLs, title, description
- Example: `alternates: { canonical: 'https://5starroofingpros.com/[page]/' }`

**Script Loading Strategy:**
- `strategy="lazyOnload"` for Analytics, HighLevel widgets to avoid blocking
- Scripts run after initial page load

**Image Handling:**
- `unoptimized: true` in next.config (static export requirement)
- Use `<img>` tags with explicit width/height for LCP optimization
- No `next/image` component (incompatible with static export)

## Business Logic Constants

**Location:** `lib/constants.ts`

**Pattern:**
```typescript
export const BUSINESS_INFO = {
  name: string,
  phone: string,
  email: string,
  address: { street, city, state, zip, full },
  hours: { weekday, weekend },
  serviceAreas: { primary, westTexas, panhandle }
}

export const NAV_ITEMS = [
  { label: string, href: string, submenu?: [] }
]
```

---

*Convention analysis: 2026-02-20*
