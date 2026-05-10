import { cn } from '@/lib/utils';

export interface CityVariant {
  /** Display name. */
  name: string;
  /** URL path. */
  href: string;
  /** Optional county / region sub-label. */
  region?: string;
}

interface CityVariantGridProps {
  /** City list. Order matters — most-relevant cities first. */
  cities: CityVariant[];
  /** Section heading. */
  heading?: string;
  /** Optional intro paragraph. */
  intro?: string;
  /** Grid columns at md+. Default 4. Mobile auto-stacks to 2 then 1. */
  columns?: 3 | 4 | 5 | 7;
  className?: string;
}

/**
 * N-tile grid of clickable city tiles linking to per-city service
 * pages. Generalizes the asphalt-shingle-roofing 14-tile pattern
 * (Sample 1 lines 564-574) so it can be reused on metal-roofing,
 * tpo-roofing, hail-damage-repair, etc.
 *
 * Visual:
 *   - white tile, rounded-lg shadow-sm
 *   - brand-brown text (NOT brand-gold — gold-on-white fails WCAG
 *     AA, see visual-design-rules.md Rule 4 and Sample 1's existing
 *     gold-on-white bug). Hover: scale-105 + underline + shadow-md;
 *     no color shift.
 *   - optional region sub-label in gray-600 below the city name
 *
 * The contrast-preserving hover treatment is intentionally divergent
 * from the existing asphalt-shingle-roofing inline pattern (which
 * has the gold-on-white bug). The original is scheduled for
 * replacement during the Block 5 pilot rebuild.
 */
export function CityVariantGrid({
  cities,
  heading,
  intro,
  columns = 4,
  className,
}: CityVariantGridProps) {
  const gridCols =
    columns === 3
      ? 'md:grid-cols-3'
      : columns === 5
        ? 'md:grid-cols-3 lg:grid-cols-5'
        : columns === 7
          ? 'md:grid-cols-4 lg:grid-cols-7'
          : 'md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className={cn('w-full', className)}>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-brand-brown">
          {heading}
        </h2>
      )}
      {intro && (
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
          {intro}
        </p>
      )}
      <div className={cn('grid grid-cols-2 gap-2 sm:gap-3 md:gap-4', gridCols)}>
        {cities.map((city) => (
          <a
            key={city.href}
            href={city.href}
            className="block bg-white border border-brand-gold/20 rounded-lg shadow-sm p-3 sm:p-4 text-center hover:shadow-md hover:scale-105 hover:border-brand-gold transition-all duration-200"
          >
            <p className="font-bold text-brand-brown hover:underline">{city.name}</p>
            {city.region && (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{city.region}</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
