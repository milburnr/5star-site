import type { ReactNode } from "react";
import { Phone, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Hero photo tone — declarative metadata consumed by the image_agent
 * during hero-uniqueness reassignment (deferred to Block 1e). Heroes
 * for hub / city / homepage MUST be aspirational; damage and process
 * photos belong in <BeforeAfter> or <ProcessTimeline> sections
 * downstream. The component does not enforce tone (it can't tell from
 * a URL); it declares it for the agent + audit pipeline.
 */
export type HeroPhotoTone = "aspirational" | "damage_demonstrative" | "process";

export interface HeroTrustData {
  /** Star rating display, e.g. "5.0 on Google". The component renders a brand
   *  Lucide Star + this label inline. */
  ratingLabel: string;
  scope: string; // "West Texas"
  /** Display string for the longevity claim. Pass a {{VERIFY: ...}} placeholder
   *  per the verify protocol when the founding year is contested — see
   *  clients/5star/claims-allowlist.md "Pending verification" section. */
  sinceLabel: string; // "Since 2014" or "Since {{VERIFY: founding year — 2008 vs 2014 contradiction}}"
}

export interface HeroPrimaryCTA {
  /** Phone number digits, e.g. "8066226041" */
  tel: string;
  /** Display copy, e.g. "(806) 622-6041" */
  display: string;
}

export interface HeroSecondaryCTA {
  href: string;
  label: string;
}

interface HeroProps {
  /** primary = full hub/city/home hero. article = lighter for blog spokes (no trust block, smaller H1). */
  variant?: "primary" | "article";
  /** Hero background image. Prefer image-set via bgClassName when an existing `.hero-*` utility exists; otherwise pass imageSrc for a direct URL. */
  imageSrc?: string;
  /** Existing CSS utility class that defines the bg image-set (e.g. "hero-home"). When set, imageSrc is ignored. */
  bgClassName?: string;
  /** Photo tone metadata — see HeroPhotoTone. Default 'aspirational' for primary. */
  photoTone?: HeroPhotoTone;
  /** First half of H1 in white. The locality / qualifier ("Lubbock", "Amarillo Residential & Commercial"). */
  titleLead: string;
  /** Capability claim that gets the gold gradient accent ("Roofing Experts"). */
  titleAccent: string;
  /** Trust block (rating + reviews + scope + since). Pass null to suppress. Default = site-wide values. */
  trust?: HeroTrustData | null;
  /** Body copy. Use <HeroLocalityAccent /> inside to mark the one locality term that gets the amber accent. */
  body?: ReactNode;
  /** Primary phone CTA. */
  primaryCTA: HeroPrimaryCTA;
  /** Secondary CTA pill. Default href #get-quote. */
  secondaryCTA?: HeroSecondaryCTA;
  /** Optional right-rail content (occupies lg:col-span-2). When omitted, an empty aspect-[4/5] placeholder reserves the space (matches homepage). */
  rightSlot?: ReactNode;
  /** Breadcrumb slot. Renders absolutely-positioned at the top-left of the
   *  hero, above the photo with white-on-photo text styling. Replaces the
   *  prior <PageHeaderStrip> approach which orphaned a bright cream strip
   *  between the dark nav and the warm hero. Pass <Breadcrumb tone="on-photo"
   *  bare items={...} />. */
  breadcrumb?: ReactNode;
  className?: string;
}

/**
 * 2026-05-09: review count dropped per Rich's design review — "25 Google
 * Reviews" undersells when the count is small (draws eye to a non-flex).
 * Star + rating + longevity is the higher-leverage trust composition.
 *
 * "Since 2014" is on the PENDING VERIFICATION list — local-context.json
 * + homepage say 2014, /amarillos-best-roofer/ says 2008. Treat as a
 * verify placeholder; do not ship to live until Rich confirms. Marked
 * via {{VERIFY: ...}} per clients/5star/claims-allowlist.md protocol.
 */
/**
 * FRESHNESS CONTRACT — `ratingLabel: '5.0 on Google'`
 *
 * - Verified accurate as of 2026-05-10 against Ben's GBP.
 * - Per claims-allowlist.md, Google review count/rating is `verified: false,
 *   VERIFY AT PUBLISH TIME` — this default is a snapshot, not a guarantee.
 * - Scheduled for replacement with live Places API data in Block 1h+1
 *   (Place ID lives in clients/5star/client.json under gbp.place_id).
 * - If Ben's GBP rating ever drops below 5.0, this default MUST be updated
 *   immediately or the live-data replacement accelerated. Do NOT let a
 *   stale "5.0 on Google" claim ride if the real rating has changed.
 * - Do not remove the default — pages depend on it. This comment documents
 *   the freshness obligation; the live-data wiring will resolve it.
 */
const DEFAULT_TRUST: HeroTrustData = {
  ratingLabel: "",
  scope: "West Texas",
  sinceLabel: "Since {{VERIFY: founding year — 2008 vs 2014 contradiction}}",
};

/**
 * Hero — replicates the 5star homepage hero pattern and applies it
 * uniformly to hub / city / B_SERVICE_LOCATION pages so they read as
 * "same family as homepage with city-specific content variation"
 * (template-variation-rules.md Rule 1).
 *
 * Key invariants from the homepage calibration target:
 *   - Title splits cleanly: lead in white, accent in gradient.
 *     For city pages: "Lubbock" white, "Roofing Experts" gradient.
 *   - TrustBlock under H1 (built-in, not separate slot) shows the
 *     site-wide review/longevity data.
 *   - CTA pills: rounded-full, gold-gradient primary + white-fill
 *     secondary with 2px gold border.
 *   - Drop shadow behind H1+sub for legibility on photo bg.
 *   - Mobile (-md): black scrim + condensed layout. Desktop (md+):
 *     warm amber/orange/yellow scrim per .hero-overlay class.
 *   - Reserved right-rail aspect-[4/5] slot at lg+ for portrait /
 *     insurance-carrier logo strip / future content.
 *
 * Photo discipline:
 *   - photoTone='aspirational' for hub/city/home (default for primary)
 *   - photoTone='damage_demonstrative' for /storm-damage-* / /hail-*
 *     pages where the damage IS the topic
 *   - photoTone='process' for /our-process/ etc.
 *
 * The image_agent (rewrite pending per Rule 3) reads photoTone from
 * the rendered DOM via data-hero-photo-tone and reassigns
 * tone-incompatible images during Block 1e cleanup.
 */
export function Hero({
  variant = "primary",
  imageSrc,
  bgClassName,
  photoTone = "aspirational",
  titleLead,
  titleAccent,
  trust,
  body,
  primaryCTA,
  secondaryCTA = { href: "#get-quote", label: "Free Inspection" },
  rightSlot,
  breadcrumb,
  className,
}: HeroProps) {
  const resolvedTrust = trust === null ? null : (trust ?? DEFAULT_TRUST);

  // Article variant skips the lg-grid right-slot reservation and the trust block,
  // matching how blog spokes use a lighter hero.
  const isArticle = variant === "article";

  const heightClasses = isArticle
    ? "min-h-[280px] md:min-h-[360px] lg:min-h-[420px]"
    : "min-h-[320px] md:min-h-[500px] lg:min-h-[600px]";

  const titleSize = isArticle
    ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
    : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl";

  const bgStyle = imageSrc && !bgClassName ? { backgroundImage: `url(${imageSrc})` } : undefined;

  return (
    <section
      data-hero-photo-tone={photoTone}
      data-hero-variant={variant}
      style={bgStyle}
      className={cn(
        bgClassName ?? "bg-cover bg-center",
        "section-major relative text-white flex items-center overflow-hidden",
        heightClasses,
        className,
      )}
    >
      {/* Scrim — uses the .hero-overlay utility for the calibrated mobile-black + desktop-warm gradient. */}
      <div className="hero-overlay" aria-hidden="true"></div>

      {breadcrumb && (
        <div className="absolute top-3 sm:top-4 md:top-5 left-0 right-0 z-20">
          <div className="container-custom">{breadcrumb}</div>
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className={cn(!isArticle && "lg:grid lg:grid-cols-5 lg:gap-8 lg:items-center")}>
          <div className={cn("p-4 sm:p-6 md:p-8 lg:p-12", !isArticle && "lg:col-span-3")}>
            <h1
              className={cn("font-bold leading-tight text-white mb-2 sm:mb-3 md:mb-6", titleSize)}
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
            >
              {titleLead}{" "}
              <span
                className="text-brand-gold-light block sm:inline"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
              >
                {titleAccent}
              </span>
            </h1>

            {resolvedTrust && <HeroTrustBlock data={resolvedTrust} />}

            {body && (
              <p
                className="hidden sm:block text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-white/90 leading-relaxed max-w-2xl"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
              >
                {body}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <a
                href={`tel:${primaryCTA.tel}`}
                className="bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-brand-brown hover:text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full font-bold shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 inline-block" /> Call {primaryCTA.display}
              </a>
              <a
                href={secondaryCTA.href}
                className="bg-white text-brand-brown px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full font-bold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-xl border-2 border-brand-gold text-center"
              >
                {secondaryCTA.label}
              </a>
            </div>
          </div>

          {!isArticle && (
            <div className="hidden lg:block lg:col-span-2" aria-hidden={!rightSlot}>
              {rightSlot ?? <div className="aspect-[4/5] w-full" />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function HeroTrustBlock({ data }: { data: HeroTrustData }) {
  return (
    <p
      className="flex items-center flex-wrap gap-x-2 gap-y-1 text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 font-semibold md:font-bold text-brand-gold-light"
      style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}
    >
      {data.ratingLabel ? (
        <>
          <Star
            className="w-5 h-5 md:w-6 md:h-6 fill-brand-gold-vibrant text-brand-gold-vibrant"
            aria-hidden="true"
          />
          <span>{data.ratingLabel}</span>
          <span aria-hidden="true">|</span>
        </>
      ) : null}
      <span>
        Serving {data.scope} {data.sinceLabel}
      </span>
    </p>
  );
}

/**
 * Helper for marking the locality term inside the body paragraph.
 * Renders the locality with the amber-gold accent + drop shadow,
 * matching the homepage's "Amarillo's trusted roofing company" pattern.
 */
export function HeroLocalityAccent({ href, children }: { href?: string; children: ReactNode }) {
  const className = "font-semibold text-brand-gold-light no-underline hover:underline";
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return <span className={className}>{children}</span>;
}
