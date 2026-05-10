import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderStripProps {
  children: ReactNode;
  /** cream/beige (default) extends the warm brand palette below the dark nav.
   *  amber-light is a stronger amber tint for pages where the body bg is white.
   *  white is a fallback for pages whose body is amber-50 (don't double up). */
  tone?: 'cream' | 'amber-light' | 'white';
  /** Hide the bottom hairline separator. */
  noSeparator?: boolean;
  className?: string;
}

/**
 * Strip bar that wraps the breadcrumb (and optionally other page-header
 * chrome) immediately below the dark nav.
 *
 * 2026-05-09 (Block 4 Phase 3): added retroactively after Rich flagged
 * that the original divergence pass missed this. The bare <Breadcrumb>
 * was rendering as near-invisible body-text on whatever page bg it sat
 * on (amber-50 on most pages, plain white on a few) — no visual band,
 * no contrast separation from the nav, signals "AI-built layout."
 *
 * The strip:
 *   - extends the warm brand palette below the dark nav (cream / beige)
 *   - gives the breadcrumb a defined band rather than floating body text
 *   - includes a subtle bottom hairline so the band terminates cleanly
 *     before the hero image begins
 *
 * Pair with <Breadcrumb items={...} bare /> so the breadcrumb doesn't
 * apply its own container-custom + py-4 (the strip provides that).
 */
export function PageHeaderStrip({
  children,
  tone = 'cream',
  noSeparator = false,
  className,
}: PageHeaderStripProps) {
  const bg =
    tone === 'amber-light'
      ? 'bg-brand-gold-light/40'
      : tone === 'white'
        ? 'bg-white'
        : 'bg-[#FAF1DC]';

  return (
    <div
      className={cn(
        'w-full',
        bg,
        !noSeparator && 'border-b border-brand-gold/20',
        className,
      )}
    >
      <div className="container-custom py-3 sm:py-4">{children}</div>
    </div>
  );
}
