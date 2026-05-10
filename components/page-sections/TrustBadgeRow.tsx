import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface TrustBadge {
  /** Lucide icon for the badge. */
  icon: LucideIcon;
  /** Label text. Keep short — fits a 2-line max. */
  label: string;
  /** Optional sub-label rendered smaller below. */
  sublabel?: string;
  /** Optional click target. */
  href?: string;
}

interface TrustBadgeRowProps {
  badges: TrustBadge[];
  /** Grid column count at md+. Mobile is always 2. Default 4. */
  columns?: 3 | 4;
  /** Section heading rendered above the row. */
  heading?: ReactNode;
  className?: string;
}

/**
 * Trust-badge grid (Years / Insured / Certified / Licensed / etc.).
 * Promotes the existing .trust-badge utility class to a typed
 * component with explicit Lucide icons (MASTER §7 — no emojis).
 *
 * Per template-variation-rules.md Rule 4, each page should feature
 * 3-5 trust signals chosen from the available pool, NOT all 8 on
 * every page. Different pages emphasize different aspects of trust
 * relevant to that page's intent. The component lets the page pick
 * its specific subset by passing a custom `badges` array.
 *
 * Visual: white card per badge, rounded-lg shadow-md hover-elevation,
 * Lucide icon centered above label. Hover: shadow-xl, hover-lift.
 */
export function TrustBadgeRow({
  badges,
  columns = 4,
  heading,
  className,
}: TrustBadgeRowProps) {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';

  return (
    <div className={cn('w-full', className)}>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-brand-brown">
          {heading}
        </h2>
      )}
      <div className={cn('grid grid-cols-2 gap-3 sm:gap-4 md:gap-6', gridCols)}>
        {badges.map((badge, i) => (
          <BadgeTile key={i} badge={badge} />
        ))}
      </div>
    </div>
  );
}

function BadgeTile({ badge }: { badge: TrustBadge }) {
  const Icon = badge.icon;
  const inner = (
    <>
      <Icon
        className="w-10 h-10 md:w-12 md:h-12 text-brand-gold-vibrant mx-auto mb-3"
        strokeWidth={2}
        aria-hidden="true"
      />
      <p className="font-bold text-brand-brown text-sm md:text-base">{badge.label}</p>
      {badge.sublabel && (
        <p className="text-xs md:text-sm text-gray-600 mt-1">{badge.sublabel}</p>
      )}
    </>
  );

  const tileClass =
    'bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1';

  if (badge.href) {
    return (
      <a href={badge.href} className={tileClass}>
        {inner}
      </a>
    );
  }
  return <div className={tileClass}>{inner}</div>;
}
