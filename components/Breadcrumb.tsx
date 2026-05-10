interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** When true, omits the container-custom + py-4 wrapper. Use when this is rendered
   *  inside <PageHeaderStrip> which already provides the strip layout. */
  bare?: boolean;
}

/**
 * Breadcrumb nav with BreadcrumbList JSON-LD schema.
 *
 * 2026-05-09: link color changed from text-brand-gold (#E4C66E) to
 * text-brand-brown (#815D01). Gold-on-white = ~1.5:1 (fails WCAG AA);
 * brown-on-white = ~6.7:1 (passes). The same fix-class applies to the
 * gold-on-amber-50 contrast bug flagged in visual-design-rules.md Rule 4.
 *
 * For pages that wrap this in <PageHeaderStrip>, pass bare so the strip
 * controls the spacing.
 */
export function Breadcrumb({ items, bare = false }: BreadcrumbProps) {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": `https://5starroofingpros.com${item.url}`
            }))
          })
        }}
      />

      {/* Visual Breadcrumb */}
      <nav aria-label="Breadcrumb" className={bare ? "" : "container-custom py-4"}>
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-brand-brown/50"
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
                <span className="text-brand-brown font-semibold" aria-current="page">{item.name}</span>
              ) : (
                <a
                  href={item.url}
                  className="text-brand-brown hover:text-brand-gold-vibrant hover:underline transition-colors font-medium"
                >
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
