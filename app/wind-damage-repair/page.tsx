import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/wind-damage-repair/" },
  title: "Wind Damage Roof Repair Texas | 5 Star Roofing",
  description:
    "Expert wind damage roof repair across Texas. Emergency tarping, insurance documentation, and full restoration for wind-lifted shingles. Call (806) 622-6041.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wind Damage Roof Repair",
    provider: {
      "@type": ["LocalBusiness", "RoofingContractor"],
      name: "5 Star Roofing",
      telephone: "(806) 622-6041",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2909 S Western St",
        addressLocality: "Amarillo",
        addressRegion: "TX",
        postalCode: "79109",
        addressCountry: "US",
      },
      parentOrganization: {
        "@id": "https://5starroofingpros.com/#organization",
      },
    },
    areaServed: [
      { "@type": "City", name: "Amarillo", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Andrews", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Big Spring", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Borger", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Canyon", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Dumas", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Levelland", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Lubbock", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Midland", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Monahans", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Odessa", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Pampa", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Perryton", address: { "@type": "PostalAddress", addressRegion: "TX" } },
      { "@type": "City", name: "Snyder", address: { "@type": "PostalAddress", addressRegion: "TX" } },
    ],
    description:
      "Professional wind damage roof repair services across Texas. Emergency tarping, damage assessment, insurance documentation, and complete roof restoration after wind storms.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What wind speed causes roof damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Roof damage can begin at sustained winds of 45-55 mph, though gusts above 60 mph pose the greatest risk. In the Texas Panhandle, straight-line winds during thunderstorms regularly exceed 70 mph. Even moderate 40 mph winds can lift poorly secured shingles, especially on older roofs or those with existing wear. After any windstorm, a professional inspection can identify damage that may not be visible from the ground.",
        },
      },
      {
        "@type": "Question",
        name: "How can I tell if wind damaged my roof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look for shingles that are lifted, curled, cracked, or completely missing. Check your yard and gutters for shingle granules or debris. Inside your home, watch for new water stains on ceilings or walls, especially after rain. Damaged flashing around vents, chimneys, and skylights is another indicator. However, many wind damage signs are only visible from the roof itself, which is why we offer free post-storm inspections.",
        },
      },
      {
        "@type": "Question",
        name: "Does insurance cover wind damage to my roof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most homeowner insurance policies in Texas cover wind damage as a named peril. Your policy will typically pay for repairs or replacement minus your deductible. Some policies have a separate wind/hail deductible, often 1-2% of the insured value. We provide detailed damage documentation with photos and measurements that insurance adjusters need for claim approval. Our team has extensive experience working with Texas insurance carriers.",
        },
      },
      {
        "@type": "Question",
        name: "Can wind damage happen without a storm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Texas Panhandle and Permian Basin experience sustained high winds year-round, not just during thunderstorms. Spring chinook winds can blow at 40-60 mph for hours or even days. These persistent winds gradually loosen nails, lift shingle edges, and fatigue roofing materials over time. Cumulative wind wear is one of the most common causes of premature roof failure in this region.",
        },
      },
      {
        "@type": "Question",
        name: "How do you repair wind-lifted shingles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For shingles that are lifted but not broken, we re-seal them using roofing cement and secure them with proper nailing. Cracked or torn shingles are replaced individually, matching the existing shingle brand and color as closely as possible. If wind damage is widespread across large sections, a partial or full replacement may be more cost-effective than individual repairs. We assess every roof to recommend the most practical solution.",
        },
      },
      {
        "@type": "Question",
        name: "Should I replace my entire roof after wind damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. If wind damage is limited to a section of your roof, targeted repairs are usually sufficient and more affordable. However, if damage covers more than 30% of the roof surface, or if your roof is already near the end of its lifespan (15-20+ years for asphalt shingles), full replacement is often the better investment. We provide honest assessments and never recommend unnecessary work.",
        },
      },
      {
        "@type": "Question",
        name: "How do I protect my roof from West Texas winds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with proper installation using six-nail patterns instead of the standard four, which significantly improves wind resistance. Choose wind-rated shingles (Class F or G, rated for 110-130 mph). Ensure your roof deck is properly sealed with synthetic underlayment. Keep trees trimmed away from your roofline. Schedule annual inspections to catch and repair minor issues before they become wind vulnerabilities.",
        },
      },
    ],
  };

  const cities = [
    { name: "Amarillo", slug: "wind-damage-repair-amarillo" },
    { name: "Andrews", slug: "wind-damage-repair-andrews" },
    { name: "Big Spring", slug: "wind-damage-repair-big-spring" },
    { name: "Borger", slug: "wind-damage-repair-borger" },
    { name: "Canyon", slug: "wind-damage-repair-canyon" },
    { name: "Dumas", slug: "wind-damage-repair-dumas" },
    { name: "Levelland", slug: "wind-damage-repair-levelland" },
    { name: "Lubbock", slug: "wind-damage-repair-lubbock" },
    { name: "Midland", slug: "wind-damage-repair-midland" },
    { name: "Monahans", slug: "wind-damage-repair-monahans" },
    { name: "Odessa", slug: "wind-damage-repair-odessa" },
    { name: "Pampa", slug: "wind-damage-repair-pampa" },
    { name: "Perryton", slug: "wind-damage-repair-perryton" },
    { name: "Snyder", slug: "wind-damage-repair-snyder" },
  ];

  return (
    <div className="container-custom py-12">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "Wind Damage Repair", url: "/wind-damage-repair/" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Wind Damage Roof Repair Across Texas
      </h1>

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            What Happens When Wind Hits Your Roof?
          </h2>
          <p className="text-lg">
            Texas wind does not wait, and neither do we. From the Panhandle to the Permian Basin,
            high winds tear through communities every spring and summer, ripping shingles loose,
            peeling back flashing, and exposing your home to water damage. 5 Star Roofing provides
            emergency tarping and permanent wind damage repairs for homeowners across our{" "}
            <a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
              14-city service area
            </a>
            .
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Does Wind Damage Your Roof?</h2>
        <p className="mb-4">
          Wind does not have to reach tornado strength to cause real damage. Even moderate sustained
          winds of 45 mph can compromise a roof, particularly one with pre-existing wear or
          installation defects. Here are the most common types of wind damage we repair:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Lifted and Missing Shingles</h3>
            <p className="text-gray-700">
              Wind catches the exposed edge of a shingle and peels it upward, breaking the adhesive
              seal. Once one shingle lifts, surrounding shingles lose their overlap protection and
              become vulnerable too. Missing shingles leave the underlayment and deck directly
              exposed to rain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Exposed Underlayment</h3>
            <p className="text-gray-700">
              When shingles blow off, the synthetic or felt underlayment beneath them becomes the
              only barrier between your roof deck and the weather. Underlayment is not designed for
              prolonged UV exposure and will degrade quickly, making emergency repair critical.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Flashing Separation</h3>
            <p className="text-gray-700">
              Metal flashing around chimneys, vents, and roof edges can bend, lift, or separate
              completely under high winds. This creates immediate leak points at the most vulnerable
              junctions of your roof system, where water infiltration is most likely.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Ridge Cap and Soffit Damage</h3>
            <p className="text-gray-700">
              Ridge caps sit at the highest point of your roof and take the full force of wind. Once
              damaged, they allow wind-driven rain into the attic. Soffits and fascia boards along
              the eaves can crack, warp, or blow off, compromising your roof&apos;s ventilation system.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Does the Wind Damage Repair Process Work?</h2>
        <p className="mb-4">
          When you call after a windstorm, here is how we handle the repair from start to finish:
        </p>
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Emergency Tarping</h3>
              <p className="text-gray-700">
                If your roof has exposed areas, we tarp the damaged sections to prevent further water
                intrusion. This is especially critical during active storm seasons when follow-up
                rain is likely within days.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Damage Assessment</h3>
              <p className="text-gray-700">
                We inspect every section of your roof to identify all wind damage, not just the
                obvious spots. This includes checking flashing, ridge caps, underlayment, and the
                attic interior for signs of water entry. You receive a written report with photos.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Insurance Documentation</h3>
              <p className="text-gray-700">
                We prepare detailed damage reports with photographs, measurements, and material
                specifications formatted for insurance adjusters. Our documentation helps streamline
                your claim and supports full coverage of the repair costs.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Targeted Repair or Full Replacement</h3>
              <p className="text-gray-700">
                Depending on the extent of damage, we either repair the affected areas or recommend
                full replacement. Localized damage typically requires replacing individual shingles,
                re-securing flashing, and sealing penetrations. Widespread damage across 30% or more
                of the roof surface often makes full replacement the more practical choice.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">What Makes West Texas Wind Patterns Unique for Roofing?</h2>
        <p className="mb-4">
          Understanding local wind conditions explains why roof maintenance matters so much in this
          region. The Texas Panhandle is one of the windiest areas in the continental United States,
          and the Permian Basin is not far behind.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Panhandle Wind Facts</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Average annual wind speed: 12-14 mph, among the highest in the U.S.</li>
                <li>Spring gusts regularly exceed 60-70 mph during thunderstorm season (March through June)</li>
                <li>Chinook-style winds can sustain 40-50 mph for 12+ hours at a time</li>
                <li>Amarillo records measurable wind events on over 200 days per year</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Why Installation Matters</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Six-nail shingle patterns outperform four-nail patterns by 30-50% in wind uplift resistance</li>
                <li>Starter strips with factory-applied adhesive create a stronger wind seal along eaves</li>
                <li>Synthetic underlayment withstands wind exposure longer than traditional felt if shingles are lost</li>
                <li>Proper roof deck attachment (ring-shank nails, sealed sheathing) prevents deck uplift in extreme events</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Can You Prevent Future Wind Damage?</h2>
        <p className="mb-4">
          Proactive maintenance is far less expensive than emergency repairs. These measures
          significantly reduce your roof&apos;s vulnerability to wind:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Proper Nailing Patterns</h3>
            <p className="text-gray-700">
              Using six nails per shingle instead of four, placed in the manufacturer&apos;s recommended
              nailing zone, dramatically improves hold strength. This single upgrade can mean the
              difference between a roof that survives a 70 mph gust and one that does not.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Wind-Rated Materials</h3>
            <p className="text-gray-700">
              Class F shingles are rated for 110 mph winds, and Class G for 120+ mph. For Texas
              Panhandle homes, these upgraded materials cost only 10-15% more than standard shingles
              but provide substantially better protection during storm season.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Sealed Roof Decking</h3>
            <p className="text-gray-700">
              Applying a peel-and-stick ice and water shield membrane over the entire roof deck, or
              at minimum along eaves, rakes, and valleys, creates a secondary waterproof barrier
              even if shingles are blown off.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Regular Maintenance</h3>
            <p className="text-gray-700">
              Annual{" "}
              <a href="/roof-inspections/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
                roof inspections
              </a>{" "}
              catch loose shingles, degraded caulking, and worn flashing before they become failure
              points during the next windstorm. Preventative repairs cost a fraction of emergency
              work.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* City Variant Link Grid */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Wind Damage Repair by City</h2>
      <p className="mb-6 text-gray-700">
        We provide wind damage roof repair across 14 Texas cities. Select your location for
        city-specific information and scheduling:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {cities.map((city) => (
          <a
            key={city.slug}
            href={`/${city.slug}/`}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300 text-center font-semibold text-brand-brown hover:text-brand-gold"
          >
            {city.name}
          </a>
        ))}
      </div>

      {/* FAQ Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What wind speed causes roof damage?
          </h3>
          <p className="text-gray-700">
            Roof damage can begin at sustained winds of 45-55 mph, though gusts above 60 mph pose
            the greatest risk. In the Texas Panhandle, straight-line winds during thunderstorms
            regularly exceed 70 mph. Even moderate 40 mph winds can lift poorly secured shingles,
            especially on older roofs or those with existing wear. After any windstorm, a
            professional inspection can identify damage that may not be visible from the ground.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How can I tell if wind damaged my roof?
          </h3>
          <p className="text-gray-700">
            Look for shingles that are lifted, curled, cracked, or completely missing. Check your
            yard and gutters for shingle granules or debris. Inside your home, watch for new water
            stains on ceilings or walls, especially after rain. Damaged flashing around vents,
            chimneys, and skylights is another indicator. However, many wind damage signs are only
            visible from the roof itself, which is why we offer free post-storm inspections.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Does insurance cover wind damage to my roof?
          </h3>
          <p className="text-gray-700">
            Most homeowner insurance policies in Texas cover wind damage as a named peril. Your
            policy will typically pay for repairs or replacement minus your deductible. Some policies
            have a separate wind/hail deductible, often 1-2% of the insured value. We provide
            detailed damage documentation with photos and measurements that insurance adjusters need
            for claim approval. Our team has extensive experience working with Texas insurance
            carriers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Can wind damage happen without a storm?
          </h3>
          <p className="text-gray-700">
            Yes. The Texas Panhandle and Permian Basin experience sustained high winds year-round,
            not just during thunderstorms. Spring chinook winds can blow at 40-60 mph for hours or
            even days. These persistent winds gradually loosen nails, lift shingle edges, and fatigue
            roofing materials over time. Cumulative wind wear is one of the most common causes of
            premature roof failure in this region.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How do you repair wind-lifted shingles?
          </h3>
          <p className="text-gray-700">
            For shingles that are lifted but not broken, we re-seal them using roofing cement and
            secure them with proper nailing. Cracked or torn shingles are replaced individually,
            matching the existing shingle brand and color as closely as possible. If wind damage is
            widespread across large sections, a partial or full replacement may be more
            cost-effective than individual repairs. We assess every roof to recommend the most
            practical solution.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Should I replace my entire roof after wind damage?
          </h3>
          <p className="text-gray-700">
            Not always. If wind damage is limited to a section of your roof, targeted repairs are
            usually sufficient and more affordable. However, if damage covers more than 30% of the
            roof surface, or if your roof is already near the end of its lifespan (15-20+ years for
            asphalt shingles), full replacement is often the better investment. We provide honest
            assessments and never recommend unnecessary work.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How do I protect my roof from West Texas winds?
          </h3>
          <p className="text-gray-700">
            Start with proper installation using six-nail patterns instead of the standard four,
            which significantly improves wind resistance. Choose wind-rated shingles (Class F or G,
            rated for 110-130 mph). Ensure your roof deck is properly sealed with synthetic
            underlayment. Keep trees trimmed away from your roofline. Schedule annual inspections to
            catch and repair minor issues before they become wind vulnerabilities.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Wind Damage? Call Now for a Free Inspection</h2>
        <p className="mb-6 text-lg">
          Do not wait for a small wind problem to become a major leak. 5 Star Roofing provides free
          wind damage inspections with detailed reports you can use for insurance claims.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:8066226041"
            className="btn-primary bg-white text-brand-brown hover:bg-gray-100"
          >
            Call (806) 622-6041
          </a>
          <a
            href="/contact/"
            className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown"
          >
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
