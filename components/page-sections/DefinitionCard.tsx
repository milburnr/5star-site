import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DefinitionCardProps {
  /** H3 title. Use clean phrasing — "What Is X?" / "How X Works" patterns work well for AI-overview snippets. */
  title: string;
  /** Body content. Pass as a string or rich ReactNode for inline links / emphasis. */
  children: ReactNode;
  /** Optional Lucide icon rendered top-left of the card body. */
  icon?: LucideIcon;
  /** Heading level override; default h3. Use h2 when this card IS the section heading. */
  as?: 'h2' | 'h3' | 'h4';
  className?: string;
}

/**
 * "What is X?" featured-snippet definition card replicating the homepage
 * pattern (app/page.tsx:158-184). Used in 2x2 grids for AI Overview /
 * featured-snippet bait sections.
 *
 * Visual: warm gradient (amber-50 → white) panel with brand-gold/20
 * border, brand-brown H3, gray-700 leading-relaxed body. The gradient
 * + soft border give the card more weight than a plain white card —
 * suitable for "this is a definition you should remember" hierarchy.
 *
 * Resolves divergence-catalog.md cross-sample finding #2 (8 of 8
 * RETROFIT samples ship inline-class cards instead of typed
 * components — DefinitionCard would replace ~12+ inline patterns).
 */
export function DefinitionCard({
  title,
  children,
  icon: Icon,
  as = 'h3',
  className,
}: DefinitionCardProps) {
  const Tag = as as React.ElementType;
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-amber-50 to-white p-6 md:p-8 rounded-2xl border border-brand-gold/20 shadow-md',
        className,
      )}
    >
      {Icon && (
        <Icon
          className="w-8 h-8 text-brand-gold-vibrant mb-3"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      )}
      <Tag className="text-xl md:text-2xl font-bold text-brand-brown mb-3 md:mb-4">{title}</Tag>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
