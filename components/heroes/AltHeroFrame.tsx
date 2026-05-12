import { ArrowRight } from "lucide-react";
import { MobileMenu } from "@/components/MobileMenu";
import { Breadcrumb } from "@/components/Breadcrumb";
import cityHeroMapJson from "@/public/images/heroes/city-hero-map.json";

export type BreadcrumbItem = { name: string; url: string };

/**
 * Map of city slug → basename for pre-optimized hero variants in
 * /public/images/heroes/cities/. Consumers pass `city="lubbock"` and we
 * resolve to the AVIF + WebP set at 600/900/1200/1920.
 */
const CITY_HERO_MAP: Record<string, string> = cityHeroMapJson as Record<string, string>;

/** Builds the HeroImageSet for a given city slug. Returns null if unknown. */
function cityHeroSet(citySlug: string): HeroImageSet | null {
  const base = CITY_HERO_MAP[citySlug];
  if (!base) return null;
  const dir = "/images/heroes/cities";
  return {
    sources: [600, 900, 1200, 1920].map((w) => ({
      width: w,
      avif: `${dir}/${base}-${w}.avif`,
      webp: `${dir}/${base}-${w}.webp`,
    })),
    fallback: `${dir}/${base}-1200.webp`,
  };
}

/**
 * AltHeroFrame — shared full-bleed editorial hero used by the four variants:
 *   - HomeHero          (display: WEST TEXAS, right rule: AMARILLO, TX)
 *   - LocationHero      (display: [CITY] + sub: [STATE])
 *   - ServiceHero       (display: [SERVICE] + optional sub)
 *   - ServiceLocationHero (display: [CITY] + sub: [SERVICE])
 *
 * Display type is decorative — aria-hidden="true". The real H1 lives in
 * `props.h1` which renders inside the content section below the display type.
 *
 * Single source of truth for the layout + CSS. Variant wrappers pass only
 * content props.
 */

/**
 * Responsive image-set descriptor — when provided, the hero uses
 * CSS `image-set()` with AVIF preferred, WebP fallback, sized by
 * viewport width via a 1024px media query. Keeps mobile LCP small
 * (~46KB WebP / ~39KB AVIF at 600w) without hurting desktop quality.
 */
export type HeroImageSet = {
  /** Per-size files. Both `avif` and `webp` paths recommended for each width. */
  sources: Array<{ width: number; avif?: string; webp?: string }>;
  /** Plain-URL fallback for browsers without image-set() (very old). */
  fallback: string;
};

export type AltHeroFrameProps = {
  /**
   * Optional city slug (e.g. "lubbock", "san-angelo"). When provided and the
   * slug exists in /public/images/heroes/city-hero-map.json, the hero uses
   * the city-specific AVIF + WebP set at widths 600/900/1200/1920 — overriding
   * `heroImageSrc` and `heroImageSrcSet`. Unknown slugs fall through to the
   * defaults below; homepage callers can simply omit this.
   */
  city?: string;
  /** Background image — same-origin, pre-optimized AVIF/WebP+JPG ideal. */
  heroImageSrc: string;
  /**
   * Optional responsive image-set. When provided, overrides
   * `heroImageSrc` for the actual background-image rule and uses the
   * sized AVIF/WebP set instead. `heroImageSrc` is still used for the
   * `<link rel="preload">` hint, so pass the typical-viewport size
   * (usually the 1200w WebP).
   */
  heroImageSrcSet?: HeroImageSet;
  /** Primary display text (decorative). Pass a string or an array of lines. */
  displayText: string | string[];
  /** Optional secondary display line below the primary; ~55-60% size. */
  subDisplay?: string;
  /** Vertical rule text on the left edge — typically the service area. */
  leftRuleLines: readonly string[];
  /** Vertical rule text on the right edge — typically the city/state. */
  rightRule: string;
  /** Small uppercase eyebrow line above the H1. */
  eyebrow: string;
  /** The real H1 — semantic heading for SEO and a11y. */
  h1: string;
  /** CTA button label. */
  ctaText: string;
  /** CTA button href. Defaults to /contact/. */
  ctaHref?: string;
  /**
   * Scale factor for the decorative display headline.
   * 1.0 = full homepage size. Interior pages (location, service,
   * service+location) should pass ~0.55-0.6 so the hero leaves room
   * for content sections below.
   */
  displayScale?: number;
  /**
   * Optional breadcrumb trail. When provided, renders an absolutely
   * positioned breadcrumb overlay at the top of the hero (above the nav
   * baseline visually but stacked below it for click priority). Uses the
   * Breadcrumb component's `on-photo` tone + `bare` mode. Pages without a
   * hero photo should keep their body-rendered <Breadcrumb> instead.
   */
  breadcrumbItems?: BreadcrumbItem[];
  /**
   * Where the page-level <main> content begins below the hero. Optional —
   * used by variant pages to inject a content section under the hero.
   */
  children?: React.ReactNode;
};

// Cormorant Garamond is now loaded via next/font in app/layout.tsx with
// `display: 'optional'`, exposed via the --font-cormorant CSS variable.
// The previous render-blocking <link rel="stylesheet"> from
// fonts.googleapis.com was a documented PSI regression — see the comment
// block in app/layout.tsx for context.

export function AltHeroFrame({
  city,
  heroImageSrc,
  heroImageSrcSet,
  displayText,
  subDisplay,
  leftRuleLines,
  rightRule,
  eyebrow,
  h1,
  ctaText,
  ctaHref = "/contact/",
  displayScale = 1,
  breadcrumbItems,
  children,
}: AltHeroFrameProps) {
  const displayLines = Array.isArray(displayText)
    ? displayText
    : [displayText];

  // City lookup wins when the slug matches the map. Otherwise the caller's
  // explicit heroImageSrc / heroImageSrcSet stand — and homepage / unknown
  // cities keep the existing default behavior.
  const citySet = city ? cityHeroSet(city) : null;
  const resolvedSrcSet = citySet ?? heroImageSrcSet;
  const resolvedSrc = citySet ? citySet.fallback : heroImageSrc;

  // Build an imagesrcset for the preload so the browser fetches the SAME
  // file the CSS background-image rule will use (AVIF preferred, sized to
  // viewport). Without this, the preload pulls the WebP 1200w while CSS
  // applies the AVIF 900w — duplicate downloads, wasted bytes, slower LCP.
  // See https://web.dev/articles/preload-responsive-images
  const preloadAttrs = buildResponsivePreloadAttrs(resolvedSrcSet, resolvedSrc);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <link
        rel="preload"
        as="image"
        href={preloadAttrs.href}
        {...(preloadAttrs.imagesrcset
          ? { imageSrcSet: preloadAttrs.imagesrcset, imageSizes: preloadAttrs.imagesizes }
          : {})}
        {...(preloadAttrs.type ? { type: preloadAttrs.type } : {})}
        fetchPriority="high"
      />
      <link rel="preload" as="image" href="/logo.png" />

      <style
        dangerouslySetInnerHTML={{ __html: ALT_HERO_CSS(resolvedSrc, resolvedSrcSet) }}
      />

      <section
        className="alt-home-hero"
        aria-labelledby="alt-hero-h1"
        style={{ ["--hero-display-scale" as string]: String(displayScale) }}
      >
        <nav className="alt-home-nav" aria-label="Primary">
          <a className="alt-brand" href="/" aria-label="5 Star Residential and Commercial Roofing — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="alt-brand-logo"
              src="/logo.png"
              alt="5 Star Residential and Commercial Roofing"
              width={222}
              height={96}
            />
          </a>

          <div className="alt-desktop-links">
            <a className="alt-nav-link" href="/">Home</a>

            <div className="alt-nav-dropdown">
              <a className="alt-nav-link alt-nav-dropdown-trigger" href="/services/">
                Services
                <svg className="alt-nav-dropdown-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="alt-nav-dropdown-panel" role="menu">
                <a href="/residential-roofing/" role="menuitem">Residential Roofing</a>
                <a href="/commercial-roofing/" role="menuitem">Commercial Roofing</a>
                <a href="/hail-damage-repair-amarillo/" role="menuitem">Hail Damage Repair</a>
                <a href="/roof-replacement-amarillo/" role="menuitem">Roof Replacement</a>
                <a className="alt-nav-dropdown-all" href="/services/" role="menuitem">All Services →</a>
              </div>
            </div>

            <div className="alt-nav-dropdown">
              <a className="alt-nav-link alt-nav-dropdown-trigger" href="/service-areas/">
                Areas
                <svg className="alt-nav-dropdown-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="alt-nav-dropdown-panel" role="menu">
                <a href="/amarillo-texas-roofing/" role="menuitem">Amarillo</a>
                <a href="/lubbock-tx-roofing/" role="menuitem">Lubbock</a>
                <a href="/midland-tx-roofing/" role="menuitem">Midland</a>
                <a href="/odessa-tx-roofing/" role="menuitem">Odessa</a>
                <a href="/canyon-texas-roofing/" role="menuitem">Canyon</a>
                <a className="alt-nav-dropdown-all" href="/service-areas/" role="menuitem">All Areas →</a>
              </div>
            </div>

            <a className="alt-nav-link" href="/gallery/">Gallery</a>
            <a className="alt-nav-link" href="/blog/">Blog</a>
            <a className="alt-nav-link" href="/reviews/">Reviews</a>
            <a className="alt-nav-link" href="/about/">About</a>
            <a className="alt-nav-pill" href="/contact/">Contact</a>
          </div>

          <MobileMenu />
        </nav>

        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="alt-hero-breadcrumb">
            <Breadcrumb items={breadcrumbItems} bare tone="on-photo" />
          </div>
        )}

        {/* Decorative display type — aria-hidden so screen readers skip it
            and reach the real H1 below. */}
        <div className="alt-headline" aria-hidden="true">
          {displayLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          {subDisplay && (
            <span className="alt-headline-sub">{subDisplay}</span>
          )}
        </div>

        {/* Left side rail: rotated text + decorative hairline beneath it,
            grouped so the line stays anchored to the text. Animated as one
            unit (slide-up on load; scroll-parallax handled in Phase 4). */}
        <div className="alt-side-wrap alt-side-wrap--left" aria-hidden="true">
          <div className="alt-side-copy">
            {leftRuleLines.map((line, i) => (
              <span key={i} className="alt-side-copy-line">
                {line}
              </span>
            ))}
          </div>
          <span className="alt-side-rule" />
        </div>

        {/* Right side rail: city / state vertical text + matching hairline. */}
        <div className="alt-side-wrap alt-side-wrap--right" aria-hidden="true">
          <div className="alt-right-place">{rightRule}</div>
          <span className="alt-side-rule" />
        </div>

        <div className="alt-intro">
          <p className="alt-intro-eyebrow">{eyebrow}</p>
          <h1 id="alt-hero-h1" className="alt-intro-h1">
            {h1}
          </h1>
          <div className="rule" aria-hidden="true" />
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="alt-corner-logo"
          src="/logo.png"
          alt=""
          aria-hidden="true"
          width={222}
          height={96}
        />

        <a className="alt-cta" href={ctaHref}>
          <span>{ctaText}</span>
          <span className="alt-cta-icon" aria-hidden="true">
            <ArrowRight size={22} strokeWidth={2.4} />
          </span>
        </a>
      </section>

      {children}
    </>
  );
}

/**
 * Build a `background-image` CSS expression that prefers AVIF, falls back
 * to WebP, and finally a plain URL. Mobile (<=1024px) gets a smaller
 * image-set; desktop uses larger sizes.
 */
/**
 * Build attrs for a responsive `<link rel="preload" as="image">` so the
 * browser fetches the SAME file CSS background-image will render. Prefers
 * AVIF (smaller, matches CSS's first image-set choice). Sizes via a 1024px
 * media query that mirrors the CSS breakpoint.
 */
function buildResponsivePreloadAttrs(
  srcSet: HeroImageSet | undefined,
  fallback: string,
): { href: string; imagesrcset?: string; imagesizes?: string; type?: string } {
  if (!srcSet || srcSet.sources.length === 0) {
    return { href: fallback };
  }
  // Prefer AVIF; fall back to WebP. Pick the format with the most entries
  // so the imagesrcset is dense enough for the browser to pick well.
  const sorted = [...srcSet.sources].sort((a, b) => a.width - b.width);
  const hasAvif = sorted.some((s) => s.avif);
  const format: "avif" | "webp" = hasAvif ? "avif" : "webp";
  const entries = sorted
    .map((s) => (format === "avif" ? s.avif : s.webp))
    .map((u, i) => (u ? `${u} ${sorted[i].width}w` : null))
    .filter((x): x is string => Boolean(x));
  if (entries.length === 0) return { href: fallback };
  // sizes: below 1024px viewport renders the mobile hero at 100vw; above,
  // it's also full-bleed (it's a 100vw hero), but the mobile/desktop CSS
  // picks the 900w/1200w respectively. Using `100vw` lets the browser pick
  // the closest match in `imagesrcset`.
  const imagesizes = "100vw";
  // href is a sensible single fallback (matches the first entry).
  const href = sorted[0][format] ?? fallback;
  const type = format === "avif" ? "image/avif" : "image/webp";
  return { href, imagesrcset: entries.join(", "), imagesizes, type };
}

function buildBackgroundImageExpr(srcSet: HeroImageSet | undefined, fallback: string): {
  desktop: string;
  mobile: string;
} {
  if (!srcSet || srcSet.sources.length === 0) {
    const url = `url("${fallback}")`;
    return { desktop: url, mobile: url };
  }
  const sorted = [...srcSet.sources].sort((a, b) => a.width - b.width);
  const mobilePick = sorted.find((s) => s.width >= 900) ?? sorted[sorted.length - 1];
  const desktopPick = sorted.find((s) => s.width >= 1200) ?? sorted[sorted.length - 1];

  const pickExpr = (pick: { avif?: string; webp?: string }) => {
    const items: string[] = [];
    if (pick.avif) items.push(`url("${pick.avif}") type("image/avif")`);
    if (pick.webp) items.push(`url("${pick.webp}") type("image/webp")`);
    if (items.length === 0) return `url("${srcSet.fallback}")`;
    return `image-set(${items.join(", ")})`;
  };

  return {
    desktop: pickExpr(desktopPick),
    mobile: pickExpr(mobilePick),
  };
}

const ALT_HERO_CSS = (heroImageSrc: string, heroImageSrcSet?: HeroImageSet) => {
  const bg = buildBackgroundImageExpr(heroImageSrcSet, heroImageSrc);
  return `
  html:has(.alt-home-hero),
  body:has(.alt-home-hero) {
    overflow-x: hidden;
  }

  body:has(.alt-home-hero) > header,
  body:has(.alt-home-hero) > footer {
    display: none;
  }

  body:has(.alt-home-hero) button[aria-label="Open Next.js Dev Tools"],
  body:has(.alt-home-hero) button[aria-label="Select to open the chat widget"],
  body:has(.alt-home-hero) nextjs-portal,
  body:has(.alt-home-hero) [data-nextjs-dev-tools-button],
  body:has(.alt-home-hero) #lc-chat-widget,
  body:has(.alt-home-hero) .chat-widget,
  body:has(.alt-home-hero) .lc-chat-widget,
  body:has(.alt-home-hero) div[class*="chat-widget"],
  body:has(.alt-home-hero) [class*="lc_text-widget"],
  body:has(.alt-home-hero) iframe[src*="leadconnectorhq"],
  body:has(.alt-home-hero) iframe[src*="chat-widget"],
  body:has(.alt-home-hero) iframe[id*="lc_"],
  body:has(.alt-home-hero) div[id^="lc_"],
  body:has(.alt-home-hero) [class*="StickyContactBar"] {
    display: none !important;
  }

  /* NOTE: previously this rule set body background to #050403 to blend with
     the dark editorial hero. That broke 155 interior pages (74% of routes)
     where InteriorHeroSection also injects .alt-home-hero — body text in
     <main> with no explicit section bg fell through to the near-black body
     yielding ~2:1 contrast on body copy. The hero itself is 100svh and
     paints its own #120b06 background, so removing this rule does NOT
     affect the home hero look; it just lets the body default to the
     cream amber-50 set in globals.css for all content below the hero. */
  .alt-home-hero {
    --gold: #d8a64d;
    --gold-bright: #f1b84f;
    --ivory: #f2eadb;
    --ink: #050403;
    position: relative;
    min-height: 100svh;
    overflow: hidden;
    isolation: isolate;
    color: var(--ivory);
    background-color: #120b06;
    background-image: ${bg.desktop};
    background-size: cover;
    background-position: 52% 50%;
    font-family: Georgia, "Times New Roman", serif;
  }

  /* Asymmetric overlay: heavier on the left where all the text lives
     (WEST TEXAS / side rule / eyebrow / H1 / CTA), light on the right
     so the sunset and sun glow carry through. Subtle top-right vignette
     keeps the nav readable without putting a dark band over the sky. */
  .alt-home-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(circle at 86% 34%, rgba(255, 174, 45, 0.10), transparent 22%),
      radial-gradient(ellipse 60% 50% at 92% 6%, rgba(0, 0, 0, 0.36), transparent 70%),
      linear-gradient(90deg,
        rgba(0, 0, 0, 0.66) 0%,
        rgba(0, 0, 0, 0.40) 30%,
        rgba(0, 0, 0, 0.10) 60%,
        rgba(0, 0, 0, 0.04) 80%,
        rgba(0, 0, 0, 0.02) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.0) 35%, rgba(0, 0, 0, 0.34) 100%);
  }

  .alt-home-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(ellipse at 30% 50%, transparent 60%, rgba(0, 0, 0, 0.18) 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.16), transparent 32%);
  }

  .alt-home-nav {
    position: absolute;
    top: clamp(20px, 2.4vw, 3vw);
    left: clamp(22px, 2.8vw, 3.5vw);
    right: clamp(22px, 2.8vw, 3.5vw);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins", system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: clamp(0.78rem, 0.78vw, 0.95rem);
    font-weight: 500;
  }

  .alt-brand {
    display: inline-flex;
    align-items: center;
    gap: 22px;
    color: var(--ivory);
    text-decoration: none;
  }

  .alt-brand-logo {
    height: clamp(40px, 3.4vw, 52px);
    width: auto;
    display: block;
    filter: drop-shadow(0 4px 18px rgba(0, 0, 0, 0.55));
    transition: filter 200ms ease;
  }

  .alt-brand:hover .alt-brand-logo {
    filter: drop-shadow(0 0 18px rgba(241, 184, 79, 0.45));
  }

  .alt-corner-logo {
    position: absolute;
    right: clamp(58px, 5vw, 96px);
    bottom: clamp(168px, 22vh, 248px);
    z-index: 2;
    height: clamp(36px, 2.8vw, 48px);
    width: auto;
    opacity: 0.72;
    filter: drop-shadow(0 6px 22px rgba(0, 0, 0, 0.55));
  }

  .alt-desktop-links {
    display: flex;
    align-items: center;
    gap: clamp(18px, 1.8vw, 32px);
  }

  .alt-desktop-links a,
  .alt-brand {
    color: #F7E291;
    text-decoration: none;
    transition: color 200ms ease, transform 200ms ease;
  }

  .alt-desktop-links a:hover,
  .alt-brand:hover {
    color: var(--gold-bright);
  }

  .alt-desktop-links .alt-nav-link {
    position: relative;
    padding: 4px 0;
  }

  .alt-desktop-links .alt-nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 1px;
    background: var(--gold-bright);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 240ms ease;
  }

  .alt-desktop-links .alt-nav-link:hover::after {
    transform: scaleX(1);
  }

  .alt-desktop-links .alt-nav-pill {
    padding: 0.55em 1.25em;
    border-radius: 999px;
    background: rgba(129, 93, 1, 0.92);
    color: #fff;
    font-weight: 600;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }

  .alt-desktop-links .alt-nav-pill:hover {
    background: rgba(165, 127, 15, 0.96);
    color: #fff;
  }

  .alt-nav-dropdown {
    position: relative;
  }

  .alt-nav-dropdown-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .alt-nav-dropdown-chev {
    width: 12px;
    height: 12px;
    transition: transform 200ms ease;
  }

  .alt-nav-dropdown:hover .alt-nav-dropdown-chev {
    transform: rotate(180deg);
  }

  .alt-nav-dropdown-panel {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 10px;
    min-width: 220px;
    padding: 8px 0;
    background: rgba(28, 16, 8, 0.96);
    border: 1px solid rgba(238, 200, 53, 0.22);
    border-radius: 8px;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: opacity 180ms ease, transform 180ms ease, visibility 180ms;
  }

  .alt-nav-dropdown:hover .alt-nav-dropdown-panel,
  .alt-nav-dropdown:focus-within .alt-nav-dropdown-panel {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .alt-nav-dropdown-panel a {
    display: block;
    padding: 8px 16px;
    font-size: 0.9em;
    letter-spacing: 0.02em;
    text-transform: none;
    font-weight: 500;
  }

  .alt-nav-dropdown-panel a.alt-nav-dropdown-all {
    border-top: 1px solid rgba(238, 200, 53, 0.18);
    margin-top: 6px;
    padding-top: 10px;
    font-weight: 600;
  }

  .alt-mobile-menu {
    display: none;
  }

  /* Breadcrumb overlay — sits just below the floating nav, anchored to the
     hero edge. Uses on-photo tone (white text + drop-shadow). Subtle gradient
     scrim improves legibility without dominating the hero. */
  .alt-hero-breadcrumb {
    position: absolute;
    top: clamp(78px, 7.4vw, 100px);
    left: clamp(22px, 2.8vw, 3.5vw);
    right: clamp(22px, 2.8vw, 3.5vw);
    z-index: 2;
    pointer-events: auto;
    padding: 8px 0 12px;
    font-family: "Poppins", system-ui, -apple-system, "Segoe UI", sans-serif;
  }

  .alt-headline {
    position: absolute;
    top: clamp(74px, 7vw, 9vw);
    left: clamp(30px, 6.7vw, 9vw);
    z-index: 2;
    margin: 0;
    color: #D6B274;
    font-family: var(--font-cormorant), "Cormorant Garamond", "Bodoni 72 Display", Didot, "Times New Roman", serif;
    /* --hero-display-scale defaults to 1 on the homepage. Interior pages
       (location, service, service+location) pass 0.55-0.6 via inline style. */
    font-size: calc(clamp(6rem, min(18vw, 32vh), 22vw) * var(--hero-display-scale, 1));
    font-weight: 300;
    line-height: 0.82;
    letter-spacing: -0.018em;
    text-transform: uppercase;
    opacity: 0.56;
    text-shadow: 0 8px 32px rgba(0, 0, 0, 0.36);
    /* Mask reveal: a left-to-right wipe, scaled by display size so wider
       headlines take slightly longer. Opacity stays at 0.56 — only the
       clip-path is animated. */
    animation: alt-headline-wipe 1400ms 240ms cubic-bezier(0.7, 0, 0.18, 1) both;
  }

  @keyframes alt-headline-wipe {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0 0 0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .alt-headline {
      animation: none;
      clip-path: none;
    }
  }

  .alt-headline span {
    display: block;
  }

  .alt-headline-sub {
    font-size: 0.58em;
    font-weight: 300;
    opacity: 0.72;
    letter-spacing: -0.01em;
    margin-top: 0.05em;
    /* Drifts up + fades in slightly after the main headline wipe completes
       (which finishes around 240+1400=1640ms). */
    animation: alt-headline-sub-rise 800ms 1600ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes alt-headline-sub-rise {
    from { transform: translateY(14px); opacity: 0; }
    to   { transform: translateY(0); opacity: 0.72; }
  }

  @media (prefers-reduced-motion: reduce) {
    .alt-headline-sub {
      animation: none;
    }
  }

  /* Side rail wrappers. Right side stays at true viewport center (top:0,
     bottom:0, flex-center). Left side gets a top offset so it sits just
     below the WEST TEXAS headline instead of overlapping it. */
  .alt-side-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(12px, 1.2vw, 18px);
    pointer-events: none;
  }

  .alt-side-wrap--left {
    left: clamp(24px, 2.8vw, 48px);
    /* Skew the flex centering downward so the left rail sits below the
       WEST TEXAS headline. Math: with top:14%/bottom:0, the centered
       midpoint is (14+100)/2 = 57% — just below the headline's footprint. */
    top: 14%;
    animation: alt-side-slide-up 1100ms 220ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .alt-side-wrap--right {
    right: clamp(36px, 4vw, 66px);
    animation: alt-side-slide-down 1100ms 220ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes alt-side-slide-up {
    from { transform: translateY(72px); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }

  @keyframes alt-side-slide-down {
    from { transform: translateY(-72px); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .alt-side-wrap--left,
    .alt-side-wrap--right {
      animation: none;
    }
  }

  /* Left vertical text. writing-mode + rotate(180deg) makes columns read
     bottom-to-top. Block children stack right-to-left, which flips to
     left-to-right after rotation — so first line ends up on the left,
     second line beside it. */
  .alt-side-copy {
    color: rgba(255, 246, 226, 0.92);
    font-family: "Poppins", system-ui, sans-serif;
    font-size: clamp(0.62rem, 0.62vw, 0.78rem);
    font-weight: 500;
    letter-spacing: 0.22em;
    line-height: 1.45;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .alt-side-copy-line {
    display: block;
    white-space: nowrap;
  }

  .alt-side-copy-line + .alt-side-copy-line {
    margin-right: 6px;
  }

  /* Right vertical text — same bottom-to-top orientation. */
  .alt-right-place {
    color: rgba(255, 246, 226, 0.92);
    font-family: "Poppins", system-ui, sans-serif;
    font-size: clamp(0.66rem, 0.7vw, 0.85rem);
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    white-space: nowrap;
  }

  /* Decorative hairline anchored just below each text column. Lives inside
     the side-wrap flex container so it moves with the text on scroll. */
  .alt-side-rule {
    display: block;
    width: 1px;
    height: clamp(60px, 7vh, 88px);
    background: rgba(255, 238, 209, 0.55);
  }

  .alt-intro {
    position: absolute;
    left: clamp(42px, 7.3vw, 9vw);
    bottom: clamp(116px, 14vh, 16vh);
    z-index: 2;
    max-width: clamp(420px, 38vw, 660px);
  }

  .alt-intro-eyebrow {
    margin: 0 0 14px;
    color: #F5C77A;
    font-family: "Poppins", system-ui, sans-serif;
    font-size: clamp(0.82rem, 0.82vw, 1.05rem);
    line-height: 1.3;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 500;
    text-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
    animation: alt-intro-fade-up 700ms 350ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .alt-intro-h1 {
    margin: 0 0 18px;
    color: var(--ivory);
    font-family: var(--font-cormorant), "Cormorant Garamond", Georgia, "Times New Roman", serif;
    font-size: clamp(1.95rem, min(3.3vw, 7.2vh), 4.4vw);
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: -0.018em;
    text-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
    animation: alt-intro-fade-up 760ms 550ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes alt-intro-fade-up {
    from { transform: translateY(18px); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .alt-intro-eyebrow,
    .alt-intro-h1 {
      animation: none;
    }
  }

  .alt-intro .rule {
    width: clamp(56px, 4vw, 78px);
    height: 2px;
    margin: 0;
    background: var(--gold-bright);
    opacity: 0.85;
    transform-origin: left center;
    animation: alt-rule-draw 820ms 750ms cubic-bezier(0.7, 0, 0.2, 1) both;
  }

  @keyframes alt-rule-draw {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    .alt-intro .rule {
      animation: none;
    }
  }

  .alt-cta {
    position: absolute;
    right: clamp(40px, 3.2vw, 4vw);
    bottom: clamp(40px, 4.2vw, 5vw);
    z-index: 3;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(20px, 1.8vw, 36px);
    min-width: clamp(320px, 22vw, 30vw);
    min-height: clamp(56px, 4vw, 4.5vw);
    padding: clamp(0.8rem, 0.85vw, 1rem) clamp(0.75rem, 0.85vw, 1rem)
             clamp(0.8rem, 0.85vw, 1rem) clamp(1.7rem, 1.7vw, 2rem);
    border: 1px solid rgba(255, 207, 116, 0.55);
    border-radius: 999px;
    background: linear-gradient(90deg,
      #F5F0E8 0%,
      #F1C77A 40%,
      #E08A36 72%,
      #B84A11 100%);
    box-shadow: 0 0 44px rgba(184, 74, 17, 0.22), 0 16px 30px rgba(0, 0, 0, 0.36);
    color: #2B1810;
    font-family: "Poppins", system-ui, sans-serif;
    font-size: clamp(0.82rem, 0.82vw, 1rem);
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    overflow: hidden;
    isolation: isolate;
    transition: filter 220ms ease, transform 220ms ease, box-shadow 220ms ease;
  }

  .alt-cta::after {
    content: "";
    position: absolute;
    top: -20%;
    bottom: -20%;
    left: -60%;
    width: 60%;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(115deg,
      transparent 0%,
      transparent 30%,
      rgba(255, 255, 255, 0.0) 38%,
      rgba(255, 255, 255, 0.55) 50%,
      rgba(255, 255, 255, 0.0) 62%,
      transparent 70%,
      transparent 100%);
    mix-blend-mode: screen;
    animation: alt-cta-sheen 4.2s ease-in-out infinite;
    animation-delay: 1.2s;
  }

  .alt-cta > * {
    position: relative;
    z-index: 2;
  }

  @keyframes alt-cta-sheen {
    0%, 18% { transform: translateX(0); opacity: 0; }
    22% { opacity: 1; }
    78% { opacity: 1; }
    82%, 100% { transform: translateX(360%); opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .alt-cta::after {
      animation: none;
      opacity: 0;
    }
  }

  .alt-cta:hover {
    color: #2B1810;
    filter: brightness(1.06) saturate(1.05);
    box-shadow: 0 0 60px rgba(184, 74, 17, 0.32), 0 18px 34px rgba(0, 0, 0, 0.42);
    transform: translateY(-1px);
  }

  .alt-cta:active {
    transform: translateY(0);
  }

  .alt-cta-icon {
    display: grid;
    flex: 0 0 auto;
    width: clamp(38px, 2.9vw, 46px);
    height: clamp(38px, 2.9vw, 46px);
    place-items: center;
    border-radius: 999px;
    background: #2B1810;
    color: #F5C77A;
  }

  @media (min-width: 1025px) and (max-height: 780px) {
    .alt-headline {
      top: clamp(70px, 8.5vh, 86px);
      font-size: clamp(6.8rem, min(16.5vw, 23vh), 13rem);
      line-height: 0.82;
    }

    .alt-intro {
      left: clamp(124px, 9vw, 150px);
      bottom: clamp(78px, 10vh, 104px);
      max-width: min(520px, 40vw);
    }

    .alt-intro-h1 {
      font-size: clamp(2rem, min(3.2vw, 7vh), 3.35rem);
      line-height: 1.02;
    }

    .alt-cta {
      bottom: clamp(34px, 5vh, 46px);
      min-height: 54px;
    }

    .alt-corner-logo {
      right: clamp(70px, 7.5vw, 120px);
      bottom: clamp(108px, 16vh, 140px);
      height: clamp(36px, 2.8vw, 44px);
    }
  }

  @media (max-width: 1024px) {
    .alt-home-hero {
      min-height: 100svh;
      background-image: ${bg.mobile};
      background-position: 64% 50%;
    }

    .alt-home-hero::before {
      background:
        radial-gradient(circle at 90% 24%, rgba(255, 174, 45, 0.16), transparent 30%),
        linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.18) 100%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.16) 34%, rgba(0, 0, 0, 0.9) 100%);
    }

    .alt-home-hero::after {
      background:
        radial-gradient(ellipse at center, transparent 38%, rgba(0, 0, 0, 0.52) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.46), transparent 38%);
    }

    .alt-home-nav {
      top: clamp(28px, 4.3vh, 40px);
      left: clamp(24px, 5.2vw, 34px);
      right: clamp(24px, 5.2vw, 34px);
    }

    .alt-hero-breadcrumb {
      top: clamp(78px, 11vh, 96px);
      left: clamp(24px, 5.2vw, 34px);
      right: clamp(24px, 5.2vw, 34px);
      padding: 6px 0 10px;
    }

    .alt-brand {
      gap: clamp(14px, 3.6vw, 22px);
      font-size: clamp(0.88rem, 2.45vw, 1rem);
      letter-spacing: 0.16em;
    }

    .alt-desktop-links {
      display: none;
    }

    .alt-right-place {
      font-size: clamp(0.6rem, 1.8vw, 0.78rem);
      letter-spacing: 0.2em;
    }

    .alt-brand-logo {
      height: clamp(44px, 11vw, 56px);
    }

    .alt-mobile-menu {
      display: block;
      color: var(--gold-bright);
      width: clamp(42px, 9.8vw, 54px);
      height: clamp(42px, 9.8vw, 54px);
    }

    .alt-headline {
      top: clamp(118px, 13vh, 150px);
      left: clamp(22px, 5.4vw, 36px);
      font-size: clamp(6.45rem, 28.2vw, 18rem);
      line-height: 0.78;
      letter-spacing: -0.04em;
    }

    .alt-side-wrap--left {
      left: clamp(18px, 5vw, 30px);
    }

    .alt-side-wrap--right {
      right: clamp(18px, 5vw, 30px);
    }

    .alt-side-copy {
      font-size: clamp(0.6rem, 1.8vw, 0.78rem);
      letter-spacing: 0.18em;
    }

    .alt-intro {
      left: clamp(28px, 6.8vw, 58px);
      right: clamp(28px, 6.8vw, 42px);
      bottom: clamp(142px, 17.5vh, 184px);
      max-width: min(650px, calc(100vw - 112px));
    }

    .alt-intro-h1 {
      font-size: clamp(2.2rem, 7vw, 3.8rem);
      line-height: 1.04;
    }

    .alt-intro-eyebrow {
      font-size: clamp(0.72rem, 2.2vw, 0.9rem);
    }

    .alt-corner-logo {
      right: 32px;
      bottom: 250px;
      height: 38px;
      opacity: 0.72;
    }

    .alt-cta {
      left: clamp(28px, 6.7vw, 56px);
      right: clamp(28px, 6.7vw, 56px);
      bottom: clamp(46px, 6.6vh, 68px);
      min-width: 0;
      min-height: clamp(66px, 8vh, 78px);
      padding: 0.82rem 0.95rem 0.82rem clamp(1.45rem, 5vw, 2rem);
      font-size: clamp(0.82rem, 2.55vw, 1rem);
    }

    .alt-cta-icon {
      width: clamp(42px, 10.5vw, 50px);
      height: clamp(42px, 10.5vw, 50px);
    }
  }

  @media (max-width: 520px) {
    .alt-home-hero {
      background-position: 68% 50%;
    }

    .alt-home-nav {
      left: 24px;
      right: 24px;
    }

    .alt-brand {
      gap: 14px;
      letter-spacing: 0.2em;
    }

    .alt-headline {
      top: 116px;
      left: 21px;
      font-size: clamp(5.85rem, 26.8vw, 7.6rem);
    }

    .alt-side-copy {
      left: 22px;
    }

    .alt-intro {
      left: 64px;
      right: 24px;
      bottom: 148px;
    }

    .alt-intro-h1 {
      font-size: clamp(1.9rem, 7.5vw, 2.4rem);
    }

    .alt-corner-logo {
      display: none;
    }

    .alt-cta {
      left: 32px;
      right: 32px;
      gap: 18px;
    }
  }
`;
};
