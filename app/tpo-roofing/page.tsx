import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/tpo-roofing/" },
  title: "TPO Roofing West Texas | 5 Star Roofing",
  description:
    "TPO roofing installation, repair, and maintenance for commercial and flat roof buildings across West Texas. Energy-efficient membranes. Call (806) 622-6041.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "TPO Roofing Services",
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
      "Professional TPO roofing installation, repair, and maintenance services for commercial buildings across West Texas. Energy-efficient single-ply membrane systems.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TPO Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "TPO Roofing Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "TPO Roof Repair" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "TPO Roof Maintenance" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "TPO Roof Replacement" },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a TPO roof last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A properly installed TPO roof typically lasts 15-30 years depending on membrane thickness, installation quality, and maintenance. In West Texas, UV exposure and temperature extremes can shorten lifespan at the lower end if maintenance is neglected. Choosing an 80-mil membrane and scheduling annual inspections extends your roof toward the upper range of that estimate.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between TPO and EPDM roofing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TPO is a white thermoplastic membrane with heat-welded seams, while EPDM is a black rubber membrane with adhesive or tape seams. TPO reflects solar heat and reduces cooling costs, making it a better fit for hot Texas climates. EPDM absorbs heat but is slightly less expensive upfront. TPO seams are stronger because heat welding creates a molecular bond, whereas EPDM seams rely on adhesive that can degrade over time.",
        },
      },
      {
        "@type": "Question",
        name: "Is TPO roofing good for the West Texas climate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TPO is one of the best flat roof options for West Texas. Its white reflective surface can reduce cooling costs by 20-30% during summer months when temperatures regularly exceed 100 degrees. TPO also resists UV degradation, handles temperature cycling between extreme heat and occasional freezing, and its heat-welded seams stand up to the high winds common in the Panhandle and Permian Basin.",
        },
      },
      {
        "@type": "Question",
        name: "How much does TPO roofing cost per square foot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TPO roofing typically costs $5-$8 per square foot installed, depending on membrane thickness (45-mil, 60-mil, or 80-mil), insulation requirements, and roof complexity. A 10,000 square foot commercial building would range from $50,000 to $80,000 for a complete TPO installation. This is generally 15-25% less expensive than PVC while providing comparable performance in most applications.",
        },
      },
      {
        "@type": "Question",
        name: "Can a TPO roof be repaired or does it need full replacement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TPO roofs can absolutely be repaired. Small punctures, tears, and seam failures are fixed by heat-welding patches of matching TPO membrane over the damaged area. If damage covers less than 25% of the roof surface and the membrane is not at the end of its lifespan, repair is almost always more cost-effective than replacement. We inspect the full roof before recommending either option.",
        },
      },
      {
        "@type": "Question",
        name: "What thickness of TPO membrane should I choose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For West Texas commercial buildings, we recommend 60-mil as the standard and 80-mil as the premium choice. 45-mil TPO is available but is thinner and more susceptible to punctures and UV degradation over time. The 80-mil membrane adds roughly $0.50-$1.00 per square foot to the project cost but provides measurably longer lifespan and better resistance to hail impact and foot traffic.",
        },
      },
      {
        "@type": "Question",
        name: "Does TPO roofing qualify for energy efficiency tax credits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TPO roofing may qualify for energy efficiency incentives depending on the specific product and installation. White TPO membranes that meet ENERGY STAR and Cool Roof Rating Council standards can contribute to energy savings that factor into commercial building efficiency programs. Consult your tax advisor for current federal and Texas-specific incentives, as programs and eligibility criteria change periodically.",
        },
      },
    ],
  };

  const cities = [
    { name: "Amarillo", slug: "tpo-roofing-amarillo" },
    { name: "Andrews", slug: "tpo-roofing-andrews" },
    { name: "Big Spring", slug: "tpo-roofing-big-spring" },
    { name: "Borger", slug: "tpo-roofing-borger" },
    { name: "Canyon", slug: "tpo-roofing-canyon" },
    { name: "Dumas", slug: "tpo-roofing-dumas" },
    { name: "Levelland", slug: "tpo-roofing-levelland" },
    { name: "Lubbock", slug: "tpo-roofing-lubbock" },
    { name: "Midland", slug: "tpo-roofing-midland" },
    { name: "Monahans", slug: "tpo-roofing-monahans" },
    { name: "Odessa", slug: "tpo-roofing-odessa" },
    { name: "Pampa", slug: "tpo-roofing-pampa" },
    { name: "Perryton", slug: "tpo-roofing-perryton" },
    { name: "Snyder", slug: "tpo-roofing-snyder" },
  ];

  return (
    <div className="container-custom py-12">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "TPO Roofing", url: "/tpo-roofing/" },
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
        TPO Roofing Installation and Repair Across West Texas
      </h1>

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            Why Is TPO the Smart Flat Roof Choice for Texas Heat?
          </h2>
          <p className="text-lg">
            TPO (Thermoplastic Polyolefin) is the fastest-growing commercial roofing membrane in
            Texas for good reason. Its white reflective surface cuts cooling costs, its heat-welded
            seams resist the Panhandle&apos;s relentless winds, and its price point works for
            businesses of every size. 5 Star Roofing installs, repairs, and maintains TPO systems
            across our{" "}
            <a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
              14-city service area
            </a>
            .
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">What Is TPO Roofing?</h2>
        <p className="mb-4">
          TPO is a single-ply roofing membrane made from thermoplastic polyolefin, a blend of
          polypropylene and ethylene-propylene rubber. It comes in large rolls that are mechanically
          fastened or fully adhered to the roof deck, then joined at the seams with a hot-air
          welding gun. This heat-welding process fuses the overlapping membrane edges into a
          continuous, watertight bond that is actually stronger than the membrane itself.
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-1-1280w.jpg"
            alt="TPO membrane roofing on a commercial building in Pampa, Texas Panhandle"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Single-Ply Simplicity</h3>
            <p className="text-gray-700">
              Unlike multi-layer built-up roofing (BUR), TPO installs as a single membrane layer
              over insulation. This means faster installation times, lower labor costs, and a
              lighter load on your building&apos;s structure. A typical 10,000 square foot TPO
              installation takes 3-5 days.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Heat-Welded Seam Strength</h3>
            <p className="text-gray-700">
              Hot-air welding creates a molecular bond between overlapping TPO sheets, producing
              seams that withstand more stress than the membrane material itself. Unlike adhesive or
              tape seams used on EPDM systems, heat-welded TPO seams do not degrade over time from
              UV exposure or temperature cycling.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Are the Benefits of TPO Roofing in West Texas?
        </h2>
        <p className="mb-4">
          TPO is particularly well-suited to the Texas climate. Here is why so many building owners
          in the Panhandle and Permian Basin are choosing it:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Energy Efficiency</h3>
            <p className="text-gray-700">
              White TPO membranes reflect up to 85% of solar radiation, significantly reducing heat
              absorption through the roof. In a region where summer temperatures routinely exceed
              100 degrees, this translates to 20-30% lower cooling costs compared to dark-surfaced
              roofing systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Chemical Resistance</h3>
            <p className="text-gray-700">
              TPO resists oils, grease, and many industrial chemicals that can deteriorate other
              membrane types. This makes it a practical choice for restaurants, manufacturing
              facilities, and auto shops where rooftop HVAC units and exhaust systems are common.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Lightweight Installation</h3>
            <p className="text-gray-700">
              TPO weighs approximately 0.5 pounds per square foot, far lighter than built-up roofing
              at 2-4 pounds per square foot. This reduces structural stress, simplifies
              installation, and is easier to work with on re-roofing projects over existing systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Cost-Effective vs. PVC</h3>
            <p className="text-gray-700">
              TPO delivers performance comparable to PVC roofing at approximately 15-25% lower
              installed cost. For most commercial applications in West Texas, TPO provides the
              optimal balance of durability, energy efficiency, and budget considerations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">15-30 Year Lifespan</h3>
            <p className="text-gray-700">
              With proper installation and annual maintenance, TPO roofs consistently deliver 15-30
              years of service. The 80-mil membranes we recommend for West Texas buildings trend
              toward the upper end of that range with regular{" "}
              <a href="/roof-inspections/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
                inspections
              </a>
              .
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Wind Resistance</h3>
            <p className="text-gray-700">
              Mechanically attached TPO systems with heat-welded seams handle the sustained high
              winds common to the Texas Panhandle. Properly installed TPO withstands wind uplift
              pressures well beyond what most conventional roofing systems can resist.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Does TPO Compare to Other Flat Roof Systems?</h2>
        <p className="mb-4">
          Choosing the right flat roof system depends on your building, budget, and priorities. Here
          is how TPO compares to the other major options:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-brand-gold text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">TPO</th>
                <th className="p-4 text-left">EPDM</th>
                <th className="p-4 text-left">PVC</th>
                <th className="p-4 text-left">Built-Up (BUR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Cost/sq ft</td>
                <td className="p-4">$5-$8</td>
                <td className="p-4">$4-$7</td>
                <td className="p-4">$6-$10</td>
                <td className="p-4">$5-$9</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Lifespan</td>
                <td className="p-4">15-30 yr</td>
                <td className="p-4">15-25 yr</td>
                <td className="p-4">20-30 yr</td>
                <td className="p-4">20-30 yr</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Energy Efficiency</td>
                <td className="p-4">Excellent (white)</td>
                <td className="p-4">Poor (black)</td>
                <td className="p-4">Excellent (white)</td>
                <td className="p-4">Fair (gravel)</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Seam Strength</td>
                <td className="p-4">Heat-welded</td>
                <td className="p-4">Adhesive/tape</td>
                <td className="p-4">Heat-welded</td>
                <td className="p-4">Layered</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Chemical Resistance</td>
                <td className="p-4">Good</td>
                <td className="p-4">Fair</td>
                <td className="p-4">Excellent</td>
                <td className="p-4">Fair</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Best For</td>
                <td className="p-4">Most commercial</td>
                <td className="p-4">Budget projects</td>
                <td className="p-4">Chemical exposure</td>
                <td className="p-4">High-traffic roofs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          For most commercial buildings in the Panhandle and Permian Basin, TPO provides the best
          combination of energy savings, wind resistance, and installed cost. PVC is the better
          choice when chemical exposure from grease vents or industrial exhaust is a primary concern.
          Learn more about all our{" "}
          <a href="/commercial-roofing/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
            commercial roofing options
          </a>
          .
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Do You Maintain and Repair a TPO Roof?</h2>
        <p className="mb-4">
          Regular maintenance extends your TPO roof&apos;s lifespan and prevents small issues from
          becoming expensive problems. Here is what ongoing TPO care involves:
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-amarillo-10-1280w.jpg"
            alt="Commercial flat roof TPO installation and maintenance in Amarillo, Texas"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Seam Inspection</h3>
            <p className="text-gray-700">
              Heat-welded seams are TPO&apos;s strongest feature, but edge seams and flashing
              terminations should be inspected annually. We check every linear foot of seam for
              signs of separation, fish-mouthing, or wear, particularly around penetrations like
              HVAC units, vents, and drains.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Membrane Patching</h3>
            <p className="text-gray-700">
              Punctures from foot traffic, dropped tools, or hail are repaired by heat-welding a
              matching TPO patch over the damaged area. These repairs restore the membrane to its
              original waterproof integrity and can be completed in under an hour for small areas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Drain Maintenance</h3>
            <p className="text-gray-700">
              Standing water is the enemy of any flat roof. We clear roof drains, scuppers, and
              gutters of debris, check for proper drainage slope, and verify that drain boots and
              membrane terminations are secure. Clogged drains accelerate membrane degradation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Coating Options</h3>
            <p className="text-gray-700">
              As TPO membranes age past 15 years, applying a reflective roof coating can extend
              their service life by 5-10 additional years at a fraction of the cost of full
              replacement. Coatings also renew the reflective properties that diminish over time.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* City Variant Link Grid */}
      <h2 className="text-2xl font-bold mt-12 mb-4">TPO Roofing by City</h2>
      <p className="mb-6 text-gray-700">
        We install and service TPO roofing systems across 14 Texas cities. Select your location for
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
            How long does a TPO roof last?
          </h3>
          <p className="text-gray-700">
            A properly installed TPO roof typically lasts 15-30 years depending on membrane
            thickness, installation quality, and maintenance. In West Texas, UV exposure and
            temperature extremes can shorten lifespan at the lower end if maintenance is neglected.
            Choosing an 80-mil membrane and scheduling annual inspections extends your roof toward
            the upper range of that estimate.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What is the difference between TPO and EPDM roofing?
          </h3>
          <p className="text-gray-700">
            TPO is a white thermoplastic membrane with heat-welded seams, while EPDM is a black
            rubber membrane with adhesive or tape seams. TPO reflects solar heat and reduces cooling
            costs, making it a better fit for hot Texas climates. EPDM absorbs heat but is slightly
            less expensive upfront. TPO seams are stronger because heat welding creates a molecular
            bond, whereas EPDM seams rely on adhesive that can degrade over time.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Is TPO roofing good for the West Texas climate?
          </h3>
          <p className="text-gray-700">
            TPO is one of the best flat roof options for West Texas. Its white reflective surface can
            reduce cooling costs by 20-30% during summer months when temperatures regularly exceed
            100 degrees. TPO also resists UV degradation, handles temperature cycling between
            extreme heat and occasional freezing, and its heat-welded seams stand up to the high
            winds common in the Panhandle and Permian Basin.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How much does TPO roofing cost per square foot?
          </h3>
          <p className="text-gray-700">
            TPO roofing typically costs $5-$8 per square foot installed, depending on membrane
            thickness (45-mil, 60-mil, or 80-mil), insulation requirements, and roof complexity. A
            10,000 square foot commercial building would range from $50,000 to $80,000 for a
            complete TPO installation. This is generally 15-25% less expensive than PVC while
            providing comparable performance in most applications.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Can a TPO roof be repaired or does it need full replacement?
          </h3>
          <p className="text-gray-700">
            TPO roofs can absolutely be repaired. Small punctures, tears, and seam failures are fixed
            by heat-welding patches of matching TPO membrane over the damaged area. If damage covers
            less than 25% of the roof surface and the membrane is not at the end of its lifespan,
            repair is almost always more cost-effective than replacement. We inspect the full roof
            before recommending either option.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What thickness of TPO membrane should I choose?
          </h3>
          <p className="text-gray-700">
            For West Texas commercial buildings, we recommend 60-mil as the standard and 80-mil as
            the premium choice. 45-mil TPO is available but is thinner and more susceptible to
            punctures and UV degradation over time. The 80-mil membrane adds roughly $0.50-$1.00 per
            square foot to the project cost but provides measurably longer lifespan and better
            resistance to hail impact and foot traffic.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Does TPO roofing qualify for energy efficiency tax credits?
          </h3>
          <p className="text-gray-700">
            TPO roofing may qualify for energy efficiency incentives depending on the specific
            product and installation. White TPO membranes that meet ENERGY STAR and Cool Roof Rating
            Council standards can contribute to energy savings that factor into commercial building
            efficiency programs. Consult your tax advisor for current federal and Texas-specific
            incentives, as programs and eligibility criteria change periodically.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get a Free TPO Roofing Estimate</h2>
        <p className="mb-6 text-lg">
          Whether you need a new TPO installation, repair, or a second opinion on your current flat
          roof, 5 Star Roofing provides free inspections and transparent estimates.
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
            Request Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
}
