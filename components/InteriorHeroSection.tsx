import { LocationHero } from "./heroes/LocationHero";
import { ServiceHero } from "./heroes/ServiceHero";
import { ServiceLocationHero } from "./heroes/ServiceLocationHero";
import type { BreadcrumbItem } from "./heroes/AltHeroFrame";

/**
 * InteriorHeroSection — the single hero entry point for every non-homepage
 * route (service pages, location pages, service+location pages).
 *
 * Routes by `heroVariant` to the matching editorial variant component built
 * in the new-homepage session. All variants share AltHeroFrame, which loads
 * Cormorant Garamond locally + applies the asymmetric overlay, side rails,
 * staggered motion sequence, and gradient CTA pill defined in
 * ART-BIBLE-5STAR.md.
 *
 * Display-text routing (handled below; callers don't pass display strings):
 *   - location          → city as display text
 *   - service           → service as display text (descriptor as sub)
 *   - service-location  → city dominant, service as sub-display
 *
 * NO stat-bar slot is exposed. Per ART-BIBLE §1.4 and §10, stat tiles never
 * appear in the hero — they belong in a dedicated trust section below.
 *
 * Behavior preserved: same CTA copy + href contract as the legacy Hero so
 * page-level overrides keep working during migration.
 */

export type InteriorHeroVariant = "location" | "service" | "service-location";

export interface InteriorHeroSectionProps {
  /** Which editorial variant to render. */
  heroVariant: InteriorHeroVariant;
  /** City name in title case (e.g. "Lubbock"). Required for location +
   *  service-location variants. Ignored for service variant. */
  city?: string;
  /**
   * Optional city slug for the pre-optimized city hero map
   * (e.g. "lubbock", "san-angelo", "wichita-falls"). When provided and the
   * slug matches `public/images/heroes/city-hero-map.json`, AltHeroFrame
   * swaps to the AVIF+WebP city hero set (overriding `image`). Pages in
   * regions without a city-specific hero should pass the closest match
   * (e.g. Snyder/Big Spring → "midland"; Tahoka/Wolfforth → "lubbock").
   */
  citySlug?: string;
  /** State name uppercase. Defaults to "TEXAS". Only used by location variant. */
  state?: string;
  /** Service name in title case (e.g. "Hail Damage Repair"). Required for
   *  service + service-location variants. */
  service?: string;
  /** Optional secondary descriptor below the primary display text. Service
   *  variant only — skip for self-complete names like "TPO ROOFING". */
  serviceDescriptor?: string;
  /** The real semantic H1. Required — drives SEO + a11y heading order. */
  h1: string;
  /** Eyebrow line above the H1. Defaults to the standard 5 Star brand line. */
  eyebrow?: string;
  /** Hero photo source. Same-origin AVIF/WebP/JPEG preferred. */
  image: string;
  /** CTA pill label. */
  ctaText?: string;
  /** CTA pill href. */
  ctaHref?: string;
  /**
   * Optional breadcrumb trail. When provided, renders an absolutely
   * positioned breadcrumb at the top of the hero (overlay style). Pages
   * with a hero should pass this in instead of rendering a standalone
   * <Breadcrumb> above the hero.
   */
  breadcrumbItems?: BreadcrumbItem[];
}

const DEFAULT_EYEBROW = "5 Star Residential and Commercial Roofing";
const DEFAULT_CTA_TEXT = "Get Your Free Roof Inspection";
const DEFAULT_CTA_HREF = "/contact/";

export function InteriorHeroSection({
  heroVariant,
  city,
  citySlug,
  state = "TEXAS",
  service,
  serviceDescriptor,
  h1,
  eyebrow = DEFAULT_EYEBROW,
  image,
  ctaText = DEFAULT_CTA_TEXT,
  ctaHref = DEFAULT_CTA_HREF,
  breadcrumbItems,
}: InteriorHeroSectionProps) {
  if (heroVariant === "location") {
    if (!city) {
      throw new Error("InteriorHeroSection: `city` is required for the 'location' variant.");
    }
    return (
      <LocationHero
        city={city}
        citySlug={citySlug}
        state={state}
        heroImageSrc={image}
        h1Override={h1}
        eyebrowOverride={eyebrow}
        ctaText={ctaText}
        ctaHref={ctaHref}
        breadcrumbItems={breadcrumbItems}
      />
    );
  }

  if (heroVariant === "service") {
    if (!service) {
      throw new Error("InteriorHeroSection: `service` is required for the 'service' variant.");
    }
    return (
      <ServiceHero
        service={service}
        serviceDescriptor={serviceDescriptor}
        heroImageSrc={image}
        h1Override={h1}
        eyebrowOverride={eyebrow}
        ctaText={ctaText}
        ctaHref={ctaHref}
        breadcrumbItems={breadcrumbItems}
      />
    );
  }

  if (heroVariant === "service-location") {
    if (!city || !service) {
      throw new Error(
        "InteriorHeroSection: both `city` and `service` are required for the 'service-location' variant.",
      );
    }
    return (
      <ServiceLocationHero
        city={city}
        citySlug={citySlug}
        service={service}
        heroImageSrc={image}
        h1Override={h1}
        eyebrowOverride={eyebrow}
        ctaText={ctaText}
        ctaHref={ctaHref}
        breadcrumbItems={breadcrumbItems}
      />
    );
  }

  const exhaustive: never = heroVariant;
  throw new Error(`InteriorHeroSection: unknown heroVariant ${String(exhaustive)}`);
}
