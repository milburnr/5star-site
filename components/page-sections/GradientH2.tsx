import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientH2Props {
  children: ReactNode;
  /** Override the heading level when this is used for a marquee H1 or H3. Default h2. */
  as?: 'h1' | 'h2' | 'h3';
  /** brown-gold = the canonical brown→gold gradient. gold-vibrant = saturated stat-number gradient. */
  variant?: 'brown-gold' | 'gold-vibrant';
  className?: string;
  centered?: boolean;
  id?: string;
}

/**
 * Section heading with the brown→gold bg-clip-text gradient that the
 * 5star homepage uses for marquee H2s. Trivial component, biggest
 * visual upgrade per LOC — every RETROFIT sample (8 of 8) shipped with
 * uniform unstyled H2s where the homepage uses gradient text on its
 * three biggest sections.
 *
 * variant=gold-vibrant is for stat-number contexts (60px+ counters)
 * where the higher-saturation gold-to-vibrant gradient reads better
 * than the more conservative brown→gold.
 */
export function GradientH2({
  children,
  as = 'h2',
  variant = 'brown-gold',
  className,
  centered = true,
  id,
}: GradientH2Props) {
  const Tag = as as ElementType;
  const sizeClass =
    as === 'h1'
      ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
      : as === 'h3'
        ? 'text-xl sm:text-2xl md:text-3xl'
        : 'text-2xl sm:text-3xl md:text-4xl';

  const gradient =
    variant === 'gold-vibrant'
      ? 'bg-gradient-to-r from-brand-gold to-brand-gold-vibrant'
      : 'bg-gradient-to-r from-brand-brown to-brand-gold';

  return (
    <Tag
      id={id}
      className={cn(
        'font-bold leading-tight bg-clip-text text-transparent',
        gradient,
        sizeClass,
        centered && 'text-center',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
