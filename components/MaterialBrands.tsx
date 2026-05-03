// Phase 12 Stream C (12.15-17) - Material manufacturer brand strips.
// Renders roofing material brand logos from locally-hosted assets
// (never hotlinked). Every <img> carries explicit width + height
// attributes to keep CLS at 0. Display treatment mirrors
// InsuranceLogos: grayscale + 70% opacity at rest, color on hover.
// Footer-level trademark disclaimer covers legal language.

type Variant = 'residential' | 'metal' | 'commercial';

type Brand = {
  slug: string;
  name: string;
  ext: 'svg' | 'png' | 'webp';
  width: number;
  height: number;
};

// Brands sourced from each manufacturer's own press kit / SVG.
// Residential lineup is the actual tier-1 premium asphalt-shingle market:
// GAF (Timberline HDZ), Owens Corning (Duration), CertainTeed (Landmark),
// TAMKO (Heritage). Atlas + Malarkey were dropped — neither is positioned
// as premium in the West Texas storm-restoration market.
const brandsByVariant: Record<Variant, Brand[]> = {
  residential: [
    { slug: 'gaf', name: 'GAF', ext: 'svg', width: 2500, height: 2052 },
    { slug: 'owens-corning', name: 'Owens Corning', ext: 'svg', width: 2500, height: 2500 },
    { slug: 'certainteed', name: 'CertainTeed', ext: 'svg', width: 286, height: 66 },
    { slug: 'tamko', name: 'TAMKO', ext: 'svg', width: 2500, height: 2500 },
  ],
  metal: [
    { slug: 'decra', name: 'DECRA Metal Roofing', ext: 'webp', width: 600, height: 600 },
    { slug: 'mcelroy-metal', name: 'McElroy Metal', ext: 'png', width: 217, height: 145 },
    { slug: 'metal-sales', name: 'Metal Sales Manufacturing', ext: 'png', width: 247, height: 27 },
    { slug: 'englert', name: 'Englert', ext: 'svg', width: 1584, height: 280 },
    { slug: 'drexel-metals', name: 'Drexel Metals', ext: 'png', width: 1801, height: 418 },
    { slug: 'mbci', name: 'MBCI', ext: 'png', width: 160, height: 50 },
  ],
  commercial: [
    { slug: 'carlisle-syntec', name: 'Carlisle SynTec Systems', ext: 'svg', width: 792, height: 188 },
    { slug: 'johns-manville', name: 'Johns Manville', ext: 'svg', width: 712, height: 158 },
    { slug: 'sika-sarnafil', name: 'Sika Sarnafil', ext: 'svg', width: 209, height: 229 },
    { slug: 'duro-last', name: 'Duro-Last', ext: 'svg', width: 504, height: 72 },
    { slug: 'duro-tech', name: 'Duro-Tech TPO', ext: 'png', width: 600, height: 200 },
    { slug: 'versico', name: 'Versico', ext: 'png', width: 2382, height: 1077 },
    { slug: 'mule-hide', name: 'Mule-Hide', ext: 'png', width: 124, height: 121 },
    { slug: 'elevate', name: 'Elevate', ext: 'png', width: 189, height: 45 },
  ],
};

const headings: Record<Variant, string> = {
  residential: 'Premium residential materials we install',
  metal: 'Premium metal roofing systems we install',
  commercial: 'Commercial roof systems we install',
};

const gridCols: Record<Variant, string> = {
  residential: 'grid-cols-2 sm:grid-cols-4',
  metal: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  commercial: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8',
};

interface Props {
  variant: Variant;
}

export function MaterialBrands({ variant }: Props) {
  const brands = brandsByVariant[variant];
  const heading = headings[variant];

  return (
    <section className="section-sub bg-white border-y border-brand-gold/20">
      <div className="container-custom">
        <h2 className="text-center text-lg md:text-xl font-semibold text-gray-primary mb-8">
          {heading}
        </h2>
        <div
          className={`grid ${gridCols[variant]} gap-6 md:gap-8 items-center justify-items-center max-w-5xl mx-auto`}
        >
          {brands.map((b) => (
            <img
              key={b.slug}
              src={`/images/trust/materials/${variant}/${b.slug}.${b.ext}`}
              alt={b.name}
              width={b.width}
              height={b.height}
              className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-center text-gray-primary/70 max-w-3xl mx-auto">
          Manufacturer logos are trademarks of their respective owners. 5 Star Commercial Roofing
          is independent and is not affiliated with or endorsed by any listed manufacturer.
        </p>
      </div>
    </section>
  );
}
