// Phase 12 Stream C (12.14) - Insurance carrier trust strip.
// Renders carrier logos from locally-hosted assets (never hotlinked).
// Every <img> carries explicit width + height attributes to keep CLS at 0.
// Legal disclaimer is rendered inline inside the strip AND again in the footer.

type Carrier = {
  slug: string;
  name: string;
  ext: 'svg' | 'png';
  width: number;
  height: number;
};

// Only 4 of 8 targeted carriers sourced in this phase — the remaining 4
// (USAA, Farmers, Liberty Mutual, Nationwide) are blocked by bot protection
// at their CDNs. They will be added in a follow-up phase once we have
// interactive browser fetch. The strip still ships the dominant-Texas
// carriers for storm/hail claims (State Farm, Allstate, Travelers,
// Progressive) which cover the majority of Amarillo/panhandle claims.
const carriers: Carrier[] = [
  { slug: 'state-farm', name: 'State Farm', ext: 'svg', width: 131, height: 18 },
  { slug: 'allstate', name: 'Allstate', ext: 'png', width: 4000, height: 2250 },
  { slug: 'travelers', name: 'Travelers', ext: 'svg', width: 147, height: 30 },
  { slug: 'progressive', name: 'Progressive', ext: 'svg', width: 456, height: 54 },
];

export function InsuranceLogos() {
  return (
    <section className="section-sub bg-white border-y border-brand-gold/20">
      <div className="container-custom">
        <h3 className="text-center text-lg md:text-xl font-semibold text-gray-primary mb-8">
          We work directly with your insurance carrier
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {carriers.map((c) => (
            <img
              key={c.slug}
              src={`/images/trust/insurance/${c.slug}.${c.ext}`}
              alt={c.name}
              width={c.width}
              height={c.height}
              className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-center text-gray-primary/70 max-w-3xl mx-auto">
          Carrier logos are trademarks of their respective owners. 5 Star Commercial Roofing is
          independent and is not affiliated with or endorsed by any insurance carrier.
        </p>
      </div>
    </section>
  );
}
