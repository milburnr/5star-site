import { AltHeroFrame, type BreadcrumbItem } from "./AltHeroFrame";

/**
 * VARIANT B — Location page hero (e.g. /lubbock-tx-roofing/).
 *
 * Decorative display: [CITY] uppercase, with [STATE] sitting quietly below
 * at lighter weight / smaller size.
 *
 * Real H1: "Roofing Company in [City], TX".
 * Title tag pattern: "[City] TX Roofing Company | 5 Star Roofing".
 */

const STANDARD_LEFT_RULE_LINES = [
  "Serving the Texas Panhandle",
  "& all of West & Central Texas",
] as const;

const DEFAULT_EYEBROW = "5 Star Residential and Commercial Roofing";

export type LocationHeroProps = {
  city: string;
  /** Optional city slug for AltHeroFrame's city-specific hero map. */
  citySlug?: string;
  /** Defaults to "TEXAS". Use the full state name uppercase. */
  state?: string;
  /** Override the hero photo per city; falls back to the default. */
  heroImageSrc?: string;
  /** Override the auto-generated H1. Defaults to "Roofing Company in [City], TX". */
  h1Override?: string;
  /** Override the eyebrow line. Defaults to standard brand line. */
  eyebrowOverride?: string;
  /** CTA copy. Defaults to "Get Your Free Roof Inspection". */
  ctaText?: string;
  /** CTA href. Defaults to /contact/. */
  ctaHref?: string;
  /** Optional breadcrumb trail overlayed at top of hero. */
  breadcrumbItems?: BreadcrumbItem[];
};

export function LocationHero({
  city,
  citySlug,
  state = "TEXAS",
  heroImageSrc = "/images/heroes/5star-new-hero-1200w.webp",
  h1Override,
  eyebrowOverride = DEFAULT_EYEBROW,
  ctaText = "Get Your Free Roof Inspection",
  ctaHref = "/contact/",
  breadcrumbItems,
}: LocationHeroProps) {
  const cityUpper = city.toUpperCase();
  return (
    <AltHeroFrame
      city={citySlug}
      heroImageSrc={heroImageSrc}
      displayText={cityUpper}
      subDisplay={state}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule={`${cityUpper}, TX`}
      eyebrow={eyebrowOverride}
      h1={h1Override ?? `Roofing Company in ${city}, TX`}
      ctaText={ctaText}
      ctaHref={ctaHref}
      displayScale={0.55}
      breadcrumbItems={breadcrumbItems}
    />
  );
}
