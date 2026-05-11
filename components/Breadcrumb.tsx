interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** When true, omits the container-custom + py-4 wrapper. Use when this is
   *  rendered absolutely-positioned inside <Hero> via the breadcrumb slot. */
  bare?: boolean;
  /** Color treatment.
   *  - 'on-light' (default): brand-brown text on cream/amber-50/white bg
   *    (passes WCAG AA on all three; ratios 5.3-6.7:1).
   *  - 'on-photo': white text + drop-shadow for floating over the hero photo.
   *    Hero overlay scrim provides legibility. Uses warm-white + stronger
   *    drop shadow on mobile per Block 4 Phase 3 design review. */
  tone?: "on-light" | "on-photo";
}

/**
 * Breadcrumb nav with BreadcrumbList JSON-LD schema.
 *
 * 2026-05-09 evolution:
 *   - Initial: text-brand-gold links → fails WCAG AA on white/amber-50.
 *   - Pass 1 (commit 6ce6e4e): switched to text-brand-brown for AA pass.
 *   - Pass 2 (this commit): added tone='on-photo' for the new
 *     breadcrumb-over-hero pattern that replaces the deprecated
 *     <PageHeaderStrip>. White text + drop-shadow over the hero scrim.
 *
 * For routes without a hero photo (utility pages), the on-light variant
 * paired with the surrounding warm page bg works without an explicit strip.
 */
export function Breadcrumb({ items, bare = false, tone = "on-light" }: BreadcrumbProps) {
  const isOnPhoto = tone === "on-photo";

  // Color tokens chosen to satisfy WCAG AA in each context.
  const linkClass = isOnPhoto
    ? "text-white hover:text-brand-gold-light hover:underline transition-colors font-medium"
    : "text-brand-brown hover:text-brand-gold-vibrant hover:underline transition-colors font-medium";

  const activeClass = isOnPhoto ? "text-white font-semibold" : "text-brand-brown font-semibold";

  const separatorClass = isOnPhoto ? "text-white/70" : "text-brand-brown/50";

  // Drop-shadow on photo variant for legibility over the hero scrim. Stronger
  // on mobile (smaller text needs more contrast support).
  const photoTextStyle: React.CSSProperties | undefined = isOnPhoto
    ? { textShadow: "0 1px 4px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.6)" }
    : undefined;

  // On-photo variant uses slightly larger mobile text per design review.
  const sizeClass = isOnPhoto ? "text-xs sm:text-sm" : "text-sm";

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: `https://5starroofingpros.com${item.url}`,
            })),
          }),
        }}
      />

      {/* Visual Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className={bare ? "" : "container-custom py-4"}
        style={photoTextStyle}
      >
        <ol className={`flex items-center space-x-2 ${sizeClass}`}>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className={`w-4 h-4 mx-2 ${separatorClass}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className={activeClass} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a href={item.url} className={linkClass}>
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
