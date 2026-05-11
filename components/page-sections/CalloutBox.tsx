import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutBoxProps {
  /** Heading inside the callout. Default "Did You Know?" */
  title?: string;
  /** Body content (string or ReactNode). */
  children: ReactNode;
  /** Lucide icon. Default Lightbulb. Pass null to suppress. */
  icon?: LucideIcon | null;
  /** Variant tunes the gradient family. Default amber works for "Did You Know?"
   *  callouts; tip uses a brand-gold-light fill for "Pro Tip" style; warning uses
   *  a stronger amber → orange family for cautionary callouts (storm-damage urgency). */
  variant?: "amber" | "tip" | "warning";
  className?: string;
}

/**
 * "Did You Know?" callout used to break up walls of text on
 * B_SERVICE_LOCATION pages (divergence-catalog cross-sample finding #4
 * — 5 of 8 samples have multi-paragraph wall-of-text sections with
 * zero visual breakers).
 *
 * Visual: gradient amber-50 → yellow-50 panel with a 4px gold-vibrant
 * left border and rounded-r-2xl corners. The asymmetric border-r is
 * intentional — reads as a marginalia / aside rather than a card.
 *
 * variant=tip uses brand-gold-light fill for "Pro Tip" affordance.
 * variant=warning uses a slightly more saturated amber → orange family
 * for storm-damage / urgent-need contexts.
 */
export function CalloutBox({
  title = "Did You Know?",
  children,
  icon = Lightbulb,
  variant = "amber",
  className,
}: CalloutBoxProps) {
  const Icon = icon;

  const variantClass =
    variant === "tip"
      ? "bg-brand-gold-light border-l-brand-gold-vibrant"
      : variant === "warning"
        ? "bg-gradient-to-r from-amber-100 to-orange-100 border-l-orange-600"
        : "bg-gradient-to-r from-amber-50 to-yellow-50 border-l-brand-gold-vibrant";

  return (
    <div
      className={cn(
        "border-l-4 pl-6 pr-6 sm:pr-8 py-6 sm:py-8 rounded-r-2xl shadow-md my-8",
        variantClass,
        className,
      )}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {Icon && (
          <Icon
            className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold-vibrant shrink-0 mt-1"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        )}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-brand-brown mb-2">{title}</h3>
          <div className="text-gray-700 leading-relaxed text-base md:text-lg">{children}</div>
        </div>
      </div>
    </div>
  );
}
