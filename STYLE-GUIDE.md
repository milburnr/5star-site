# 5 Star Roofing - Style Guide

## 🎨 Design System Overview

All styles are centralized for easy global updates. Never use inline styles or random Tailwind classes for common patterns.

---

## 📍 Where to Make Changes

### Colors & Fonts
**File:** `tailwind.config.ts`

```typescript
colors: {
  brand: {
    gold: "#E4C66E",           // Primary brand color
    "gold-light": "#F7E291",   // Light backgrounds
    "gold-bright": "#EEC835",  // Hover states
    "gold-vibrant": "#F1B609", // Active states
    brown: "#815D01",          // Primary text/links
    "brown-dark": "#A57F0F",   // Dark accents
  },
}
```

To change site-wide colors: Just update these hex values.

### Component Styles
**File:** `app/globals.css`

All reusable component classes are defined here. See section below for complete list.

---

## 🧩 Reusable Component Classes

### Buttons
```html
<a href="#" class="btn-primary">Primary Button</a>
<a href="#" class="btn-secondary">Secondary Button</a>
```

### Cards
```html
<!-- Basic card -->
<div class="card">Content</div>

<!-- Card with hover effect -->
<div class="card-hover">Content</div>

<!-- Service card (complete) -->
<div class="service-card">
  <img src="..." class="card-image" />
  <div class="card-body">
    <h3 class="service-card-title">Title</h3>
    <p class="service-card-text">Description</p>
    <span class="service-card-link">Learn More →</span>
  </div>
</div>
```

### Sections
```html
<section class="section">
  <h2 class="section-title">Section Title</h2>
  <p class="section-subtitle">Subtitle text</p>
  <!-- Content -->
</section>
```

### CTA Sections
```html
<section class="cta-section">
  <h2 class="cta-title">Call to Action</h2>
  <p class="cta-text">Description text</p>
  <!-- Buttons -->
</section>
```

### Hero Sections
```html
<section class="hero" style="background-image: url(...)">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Hero Title</h1>
    <p class="hero-subtitle">Subtitle</p>
    <!-- Buttons -->
  </div>
</section>
```

### Content Blocks
```html
<div class="content-block">
  <h2 class="content-block-title">Title</h2>
  <p>Content...</p>
</div>
```

### Feature Boxes
```html
<div class="feature-box">
  <div class="feature-icon">🎯</div>
  <h3 class="feature-title">Feature Name</h3>
  <p class="feature-text">Description</p>
</div>
```

### Process Steps
```html
<div class="process-step">
  <div class="step-number">1</div>
  <div class="step-content">
    <h3 class="step-title">Step Title</h3>
    <p class="step-text">Step description</p>
  </div>
</div>
```

### Lists with Checkmarks
```html
<div class="check-list">
  <div class="check-item">
    <span class="check-icon">✓</span>
    <span>List item text</span>
  </div>
</div>
```

---

## ✨ Animation Classes

Ready for scroll animations (requires small JS to add `.visible` class):

```html
<!-- Fade in on scroll -->
<div class="fade-in">Content</div>

<!-- Slide up on scroll -->
<div class="slide-up">Content</div>
```

---

## 🎯 Usage Rules

### DO:
✅ Use predefined classes from globals.css
✅ Update colors in tailwind.config.ts
✅ Keep styling consistent across pages
✅ Add new utility classes to globals.css when needed

### DON'T:
❌ Use inline styles (style="...")
❌ Repeat the same Tailwind class combinations
❌ Hard-code colors as hex values in JSX
❌ Create one-off designs that break consistency

---

## 🔧 Adding New Styles

When you need a new reusable pattern:

1. Add it to `globals.css` under `@layer components`
2. Use Tailwind's `@apply` directive
3. Name it semantically (e.g., `.testimonial-card`, not `.blue-box`)
4. Document it here

---

## 📱 Responsive Design

All components are mobile-first:
- Base styles = mobile
- Add `md:` prefix for tablet+
- Add `lg:` prefix for desktop

Example:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## 🎨 Brand Guidelines

### Typography
- Headings: Semibold weight
- Body: Gray text (#7A7A7A)
- Primary font: System fonts (inherits from Tailwind)

### Color Usage
- **Gold (#E4C66E):** Primary CTAs, accents, highlights
- **Brown (#815D01):** Headings, links, secondary elements
- **White:** Backgrounds, button text
- **Gray:** Body text, subtle backgrounds

### Button Usage
- **Primary (Gold):** Main actions (Call, Get Quote, Submit)
- **Secondary (Gray):** Alternative actions (Learn More, View)

---

## 🚀 Quick Reference

**Change colors:** `tailwind.config.ts`
**Change component styles:** `app/globals.css`
**Add animations:** Use `.fade-in` or `.slide-up` classes
**All pages use:** `.container-custom` for max-width container

---

Last Updated: October 19, 2025
