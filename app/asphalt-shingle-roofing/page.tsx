import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/asphalt-shingle-roofing/" },
  title: "Asphalt Shingle Roofing Texas | 5 Star Roofing",
  description:
    "Asphalt shingle roofing installation, repair, and replacement across Texas. 3-tab, architectural, and impact-resistant options. Call (806) 622-6041.",
  openGraph: {
    title: "Asphalt Shingle Roofing Texas | 5 Star Roofing",
    description:
      "Asphalt shingle roofing installation, repair, and replacement across Texas. 3-tab, architectural, and impact-resistant options. Call (806) 622-6041.",
    url: "https://5starroofingpros.com/asphalt-shingle-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Asphalt Shingle Roofing Services",
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
      {
        "@type": "City",
        name: "Amarillo",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Andrews",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Big Spring",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Borger",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Canyon",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Dumas",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Levelland",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Lubbock",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Midland",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Monahans",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Odessa",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Pampa",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Perryton",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
      {
        "@type": "City",
        name: "Snyder",
        address: { "@type": "PostalAddress", addressRegion: "TX" },
      },
    ],
    description:
      "Professional asphalt shingle roofing installation, repair, and replacement services across Texas. 3-tab, architectural, designer, and impact-resistant shingle systems for residential homes.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Asphalt Shingle Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "3-Tab Shingle Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Architectural Shingle Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Designer/Luxury Shingle Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Shingle Roof Repair" },
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
        name: "How long do asphalt shingles last in West Texas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In West Texas, asphalt shingle lifespan depends heavily on the shingle type and local weather exposure. 3-tab shingles typically last 15-20 years, architectural shingles 20-30 years, and premium designer shingles up to 40-50 years. However, the intense UV exposure, temperature swings, frequent hail, and high winds in the Panhandle and Permian Basin can shorten these estimates by 3-5 years compared to milder climates. Annual inspections and efficient repairs extend lifespan significantly.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between 3-tab and architectural shingles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3-tab shingles are flat, uniform strips that create a simple, repeating pattern. They are the most affordable option but have a shorter lifespan (20-25 years) and lower wind resistance (60-70 mph). Architectural shingles (also called dimensional or laminated) have a layered, textured appearance that mimics wood shake or slate. They last 30+ years, resist winds up to 110-130 mph, and carry better manufacturer warranties. For West Texas homes, architectural shingles are the most popular choice due to their wind and hail performance.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an asphalt shingle roof cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a typical 2,000-2,500 square foot Texas home, asphalt shingle roofing costs range from $7,000-$15,000 installed. 3-tab shingles are at the lower end ($3.50-$5.00 per square foot), architectural shingles run $5.00-$7.50 per square foot, and premium designer shingles can reach $8.00-$12.00 per square foot. These prices include materials, labor, underlayment, and cleanup. Roof complexity (steep pitch, multiple valleys, dormers) adds to the total.",
        },
      },
      {
        "@type": "Question",
        name: "What color shingles are best for energy efficiency in Texas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lighter-colored shingles (light gray, tan, beige) reflect more solar heat than darker colors, which can reduce cooling costs by 10-15% during Texas summers. However, modern 'cool roof' shingles with reflective granules are available in darker colors that still provide improved energy performance. The color choice also affects curb appeal and neighborhood standards, so we help homeowners balance efficiency with aesthetics.",
        },
      },
      {
        "@type": "Question",
        name: "Can you replace just a few damaged shingles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, individual shingle replacement is one of our most common repairs. If damage is limited to a small area (storm impact, tree branch, isolated wear), replacing the affected shingles is far more cost-effective than a full roof replacement. We carry common shingle brands and colors to match your existing roof as closely as possible. When an exact color match is not available, we source the nearest match from our suppliers.",
        },
      },
      {
        "@type": "Question",
        name: "What are impact-resistant shingles and are they worth it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Impact-resistant shingles carry a Class 4 rating, meaning they have passed UL 2218 testing for resistance to simulated hail impact. They use a rubberized asphalt or polymer-modified backing that absorbs impact energy rather than cracking. In hail-prone West Texas, Class 4 shingles are a strong investment. Many Texas insurance carriers offer 10-35% premium discounts for Class 4 roofs, which can offset the 15-20% higher material cost within a few years.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know when my shingle roof needs replacement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key signs include widespread granule loss (check your gutters), shingles that are curling, cracking, or buckling across large sections, multiple active leaks, daylight visible through the roof deck from the attic, and a roof that has reached or exceeded its expected lifespan. If repairs would affect more than 30% of the roof surface, replacement is usually the better financial decision. A free inspection from 5 Star Roofing gives you a clear answer.",
        },
      },
    ],
  };

  const cities = [
    { name: "Amarillo", slug: "asphalt-shingle-roofing-amarillo" },
    { name: "Andrews", slug: "asphalt-shingle-roofing-andrews" },
    { name: "Big Spring", slug: "asphalt-shingle-roofing-big-spring" },
    { name: "Borger", slug: "asphalt-shingle-roofing-borger" },
    { name: "Canyon", slug: "asphalt-shingle-roofing-canyon" },
    { name: "Dumas", slug: "asphalt-shingle-roofing-dumas" },
    { name: "Levelland", slug: "asphalt-shingle-roofing-levelland" },
    { name: "Lubbock", slug: "asphalt-shingle-roofing-lubbock" },
    { name: "Midland", slug: "asphalt-shingle-roofing-midland" },
    { name: "Monahans", slug: "asphalt-shingle-roofing-monahans" },
    { name: "Odessa", slug: "asphalt-shingle-roofing-odessa" },
    { name: "Pampa", slug: "asphalt-shingle-roofing-pampa" },
    { name: "Perryton", slug: "asphalt-shingle-roofing-perryton" },
    { name: "Snyder", slug: "asphalt-shingle-roofing-snyder" },
  ];

  return (
    <div className="container-custom py-12">
      <InteriorHeroSection
        heroVariant="service"
        service="Asphalt Shingle Roofing"
        h1="Asphalt Shingle Roofing in West Texas"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "Asphalt Shingle Roofing", url: "/asphalt-shingle-roofing/" },
        ]}
    />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Asphalt Shingle Roofing Installation and Repair Across Texas
      </h2>

      

      {/* TL;DR */}
      <div className="bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6 mb-8">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
        <p className="text-gray-800 font-medium leading-relaxed mb-3">
          5 Star Roofing installs and repairs asphalt shingles across West Texas. Architectural shingles with Class 4 impact resistance are the standard for the Texas Panhandle hail corridor. 30-year warranties, free inspections, and insurance claim assistance available.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="/asphalt-shingle-roofing-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Amarillo Asphalt Shingles</a>
          <a href="/asphalt-shingle-roofing-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Lubbock</a>
          <a href="/asphalt-shingle-roofing-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Midland</a>
          <a href="/residential-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">All Residential →</a>
        </div>
      </div>

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            Why Are Asphalt Shingles Texas&apos; Most Popular Roofing Choice?
          </h2>
          <p className="text-lg">
            Asphalt shingles protect more Texas homes than any other roofing material, and for good
            reason. They combine affordability, variety, proven performance, and straightforward
            repair when storm damage strikes. 5 Star Roofing installs and repairs asphalt shingle
            roofs across our{" "}
            <a
              href="/service-areas/"
              className="text-brand-brown hover:text-brand-gold underline font-semibold"
            >
              14-city service area
            </a>
            , from budget-friendly 3-tab shingles to premium impact-resistant systems.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Types of Asphalt Shingles Are Available?
        </h2>
        <p className="mb-4">
          Not all asphalt shingles are created equal. The right choice depends on your budget, the
          look you want, and how much protection your home needs from West Texas weather:
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-26-1280w.jpg"
            alt="Strong hero: finished gray shingle roof with attic vent, branded dump trailer + work truck in driveway — implies job context — 5 Star Roofing"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">3-Tab Shingles</h3>
            <p className="text-gray-700 mb-3">
              The most economical asphalt shingle option. 3-tab shingles have a flat, uniform
              appearance with three equally-sized tabs per strip. They provide reliable weather
              protection at the lowest upfront cost.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>20-25 year manufacturer warranty</li>
              <li>Wind resistance: 60-70 mph</li>
              <li>Cost: $3.50-$5.00 per square foot installed</li>
              <li>Best for: budget-conscious projects, rental properties</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Architectural Shingles</h3>
            <p className="text-gray-700 mb-3">
              Also called dimensional or laminated shingles, these are the most popular choice for
              Texas homeowners. Multiple asphalt layers create a textured, three-dimensional
              appearance that mimics wood shake or slate at a fraction of the cost.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>30-year manufacturer warranty (Lifetime on premium lines)</li>
              <li>Wind resistance: 110-130 mph</li>
              <li>Cost: $5.00-$7.50 per square foot installed</li>
              <li>Best for: most residential homes, curb appeal, resale value</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Designer / Luxury Shingles</h3>
            <p className="text-gray-700 mb-3">
              Premium shingles with the heaviest weight, thickest profile, and most realistic
              appearance. Designer shingles closely replicate the look of natural slate, cedar
              shake, or tile roofing while offering superior durability.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>40-50 year or Lifetime manufacturer warranty</li>
              <li>Wind resistance: 110-130 mph</li>
              <li>Cost: $8.00-$12.00 per square foot installed</li>
              <li>Best for: high-end homes, historic neighborhoods, maximum longevity</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Impact-Resistant (Class 4)</h3>
            <p className="text-gray-700 mb-3">
              Engineered specifically for hail-prone regions like West Texas. Class 4 shingles use a
              rubberized asphalt or polymer-modified backing that absorbs hail impact instead of
              cracking. They pass the UL 2218 steel ball drop test at the highest rating.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>30-year to Lifetime manufacturer warranty</li>
              <li>Wind resistance: 110-130 mph</li>
              <li>Cost: 15-20% more than standard architectural</li>
              <li>Best for: hail-prone areas, insurance discount eligibility (10-35% savings)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-brand-brown">
          Asphalt Shingle Grade Comparison
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-brand-gold text-white">
                <th className="p-4 text-left">Shingle Grade</th>
                <th className="p-4 text-left">Lifespan</th>
                <th className="p-4 text-left">Cost/sq ft</th>
                <th className="p-4 text-left">Wind Rating</th>
                <th className="p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">3-Tab</td>
                <td className="p-4">20-25 years</td>
                <td className="p-4">$3.50-$5.00</td>
                <td className="p-4">60-70 mph</td>
                <td className="p-4">Budget projects, rentals</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Architectural</td>
                <td className="p-4">30+ years</td>
                <td className="p-4">$5.00-$7.50</td>
                <td className="p-4">110-130 mph</td>
                <td className="p-4">Most homes, best value</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Designer / Luxury</td>
                <td className="p-4">40-50 years</td>
                <td className="p-4">$8.00-$12.00</td>
                <td className="p-4">110-130 mph</td>
                <td className="p-4">High-end homes, max longevity</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Class 4 Impact-Resistant</td>
                <td className="p-4">30+ years</td>
                <td className="p-4">$6.00-$9.00</td>
                <td className="p-4">110-130 mph</td>
                <td className="p-4">Hail-prone areas, insurance savings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Makes Asphalt Shingles Ideal for West Texas Homes?
        </h2>
        <p className="mb-4">
          Asphalt shingles dominate the residential roofing market across the Panhandle and Permian
          Basin for practical reasons:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Affordability</h3>
            <p className="text-gray-700">
              Asphalt shingles cost 40-60% less than metal roofing and 50-70% less than tile, making
              them accessible for most homeowners. Even premium architectural shingles are
              budget-friendly compared to other roofing materials with similar lifespans.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Variety</h3>
            <p className="text-gray-700">
              GAF Timberline HDZ, CertainTeed Landmark, Owens Corning Duration, Malarkey
              Vista, Atlas Pinnacle Pristine, and IKO Dynasty all show up on Amarillo and
              Lubbock streets. Architectural shingles in weathered wood, charcoal, and
              driftwood tones suit most Texas Panhandle subdivisions, and HOA-mandated palettes
              are usually available in a Class 4 impact-rated upgrade.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Easy Repair</h3>
            <p className="text-gray-700">
              When{" "}
              <a
                href="/hail-damage-repair-amarillo/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                hail
              </a>{" "}
              or{" "}
              <a
                href="/wind-damage-repair/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                wind
              </a>{" "}
              damages a section of architectural shingles, individual three-tab or laminated
              shingles can be lifted, the nails pulled, and replacements woven in without
              disturbing the surrounding roof field. That keeps Hail Alley storm repairs in
              the realm of a half-day patch instead of a section tear-off. For flat or
              low-slope sections, see our{" "}
              <a
                href="/asphalt-flat-roof-repair-in-amarillo/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                asphalt flat roof repair services in Amarillo
              </a>
              .
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Proven Performance</h3>
            <p className="text-gray-700">
              Architectural asphalt shingles have been the default residential roof across the
              Texas Panhandle for decades. Today GAF, CertainTeed, Owens Corning, Malarkey,
              Atlas, and IKO publish UL 2218 Class 4 impact ratings and ASTM D7158 Class H
              (150-mph) wind ratings tested against the kind of storms the Llano Estacado
              throws at Amarillo and Lubbock.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Insurance-Friendly</h3>
            <p className="text-gray-700">
              Insurance carriers are very familiar with asphalt shingle roofs, which means smoother
              claim processing after storm damage. Class 4 impact-resistant shingles qualify for
              premium discounts of 10-35% with most Texas carriers, offsetting their higher cost
              within a few years.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Quick Installation</h3>
            <p className="text-gray-700">
              A standard residential shingle roof replacement takes 1-3 days depending on home size
              and complexity. Compared to metal (3-7 days) or tile (1-2 weeks), shingles minimize
              the time your home is exposed during the installation process.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Are Asphalt Shingles Installed?</h2>
        <p className="mb-4">
          Proper installation is what separates a roof that lasts its full warranty period from one
          that fails early. Here is how we install asphalt shingle roofs:
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-26-1280w.jpg"
            alt="Strong hero: finished gray shingle roof with attic vent, branded dump trailer + work truck in driveway — implies job context — 5 Star Roofing"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Deck Preparation</h3>
              <p className="text-gray-700">
                After tearing the old shingles off, we walk the deck for rot, soft spots from
                pipe-boot leaks, and any framing damage. Bad sections come out and get replaced
                with 7/16-inch OSB or 1/2-inch CDX plywood depending on what the original deck
                was. Older Amarillo and Canyon homes sometimes have 1-by plank decking that
                needs OSB overlay to meet the manufacturer&apos;s nailing schedule. Nothing
                goes back down until the deck is dry, flat, and tight.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Underlayment</h3>
              <p className="text-gray-700">
                We install synthetic underlayment over the entire roof deck as a secondary
                waterproof barrier. Ice and water shield membrane goes along eaves, valleys, and
                around penetrations where leak risk is highest. This layer protects your home even
                if shingles are damaged.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Starter Strip</h3>
              <p className="text-gray-700">
                Factory-adhesive starter strips like GAF Pro-Start, CertainTeed SwiftStart, or
                Owens Corning Starter Roll run along every eave and rake. The factory sealant
                lines up under the first course so the bottom edge bonds across the full width,
                which is what holds the field shingles down when Llano Estacado gusts come off
                the open plains. ASTM D7158 Class H ratings depend on this detail being right.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Field Shingles</h3>
              <p className="text-gray-700">
                Shingles are installed from the eave upward with proper offset patterns. For West
                Texas installations, we use six-nail patterns (rather than the standard four) for
                superior wind resistance. Each row is aligned precisely for both performance and
                appearance.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              5
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Ridge Cap and Flashing</h3>
              <p className="text-gray-700">
                Manufacturer-matched ridge cap shingles like GAF TimberTex, CertainTeed
                Mountain Ridge, or Owens Corning ProEdge close every peak and hip. Step flashing
                ties the roof into chimneys and sidewalls, kick-out flashing diverts water off
                wall claddings, and lead or rubber pipe boots seal plumbing vents. Pipe boots
                are the single biggest leak source on West Texas roofs, so we upgrade to lead
                or UV-rated EPDM rather than the builder-grade neoprene that splits inside
                seven or eight summers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              6
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Cleanup and Final Inspection</h3>
              <p className="text-gray-700">
                Rolling magnetic sweepers pass the yard, driveway, and street curb to collect
                stray nails. Tear-off debris loads into a roll-off and leaves the property the
                same day. The crew lead walks the roof with the homeowner before signoff and
                hands over the GAF, CertainTeed, or Owens Corning manufacturer warranty
                paperwork plus the workmanship coverage on our letterhead.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Do You Repair and Maintain Asphalt Shingles?
        </h2>
        <p className="mb-4">
          A GAF, CertainTeed, or Owens Corning architectural shingle roof can deliver its full
          25 to 30-year service life in West Texas, but only with regular maintenance. The
          combination of Hail Alley impact events, Llano Estacado wind, and Amarillo UV makes
          pipe boots, sealant beads, and flashings the things that fail first. Here are the
          maintenance items we see and address most often:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Replacing Damaged Shingles</h3>
            <p className="text-gray-700">
              Storm damage, falling branches, and normal wear can crack, break, or dislodge
              individual shingles. We replace damaged shingles with matching material, re-seal
              surrounding tabs, and verify the repair blends with the existing roof. Most shingle
              repairs take 1-2 hours.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Addressing Granule Loss</h3>
            <p className="text-gray-700">
              The ceramic-coated mineral granules on a GAF or CertainTeed shingle shield the
              asphalt layer from Texas Panhandle UV exposure. Some shedding shows up in gutters
              the first year after install, but bare or shiny black patches across the field
              after a Hail Alley storm season point to impact bruising and accelerated aging.
              When that pattern is widespread, it usually signals the roof is closer to{" "}
              <a
                href="/roof-replacement-amarillo/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                replacement
              </a>
              .
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Fixing Leaks</h3>
            <p className="text-gray-700">
              Leaks rarely start where the ceiling stain shows. Pipe-boot collars cracked by
              Amarillo UV, lifted step flashing at a chimney, a missing shingle from last
              spring&apos;s wind, or a back-pitched valley are the usual culprits. We chase
              water entry from the attic side first, repair the failure point, then run a hose
              test on the exterior when conditions allow to confirm the path is sealed before
              we leave.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Extending Lifespan</h3>
            <p className="text-gray-700">
              Annual{" "}
              <a
                href="/roof-inspections/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                roof inspections
              </a>
              , quick attention to small repairs, proper attic ventilation through ridge and
              soffit vents, and clear gutters all add years to a shingle roof in the Texas
              Panhandle climate. Replacing a $30 pipe boot or resealing a chimney saddle costs
              far less than a premature tear-off, and post-hail walkthroughs catch granule
              loss and seal-strip failures before they become attic leaks.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Asphalt Shingle Roofing by City</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/asphalt-shingle-roofing-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Amarillo</a></li>
            <li><a href="/asphalt-shingle-roofing-lubbock/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Lubbock</a></li>
            <li><a href="/asphalt-shingle-roofing-midland/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Midland</a></li>
            <li><a href="/asphalt-shingle-roofing-odessa/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Odessa</a></li>
            <li><a href="/asphalt-shingle-roofing-canyon/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Canyon</a></li>
            <li><a href="/asphalt-shingle-roofing-borger/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Borger</a></li>
            <li><a href="/asphalt-shingle-roofing-pampa/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Pampa</a></li>
            <li><a href="/asphalt-shingle-roofing-dumas/" className="text-brand-brown hover:text-brand-gold underline">Asphalt Shingle Roofing in Dumas</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}

      {/* City Variant Link Grid */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Asphalt Shingle Roofing by City</h2>
      <p className="mb-6 text-gray-700">
        We install and repair asphalt shingle roofs across 14 Texas cities. Select your location for
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
            How long do asphalt shingles last in West Texas?
          </h3>
          <p className="text-gray-700">
            In West Texas, asphalt shingle lifespan depends heavily on the shingle type and local
            weather exposure. 3-tab shingles typically last 15-20 years, architectural shingles
            20-30 years, and premium designer shingles up to 40-50 years. However, the intense UV
            exposure, temperature swings, frequent hail, and high winds in the Panhandle and Permian
            Basin can shorten these estimates by 3-5 years compared to milder climates. Annual
            inspections and efficient repairs extend lifespan significantly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What is the difference between 3-tab and architectural shingles?
          </h3>
          <p className="text-gray-700">
            3-tab shingles are flat, uniform strips that create a simple, repeating pattern. They
            are the most affordable option but have a shorter lifespan (20-25 years) and lower wind
            resistance (60-70 mph). Architectural shingles (also called dimensional or laminated)
            have a layered, textured appearance that mimics wood shake or slate. They last 30+
            years, resist winds up to 110-130 mph, and carry better manufacturer warranties. For
            West Texas homes, architectural shingles are the most popular choice due to their wind
            and hail performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How much does an asphalt shingle roof cost?
          </h3>
          <p className="text-gray-700">
            For a typical 2,000-2,500 square foot Texas home, asphalt shingle roofing costs range
            from $7,000-$15,000 installed. 3-tab shingles are at the lower end ($3.50-$5.00 per
            square foot), architectural shingles run $5.00-$7.50 per square foot, and premium
            designer shingles can reach $8.00-$12.00 per square foot. These prices include
            materials, labor, underlayment, and cleanup. Roof complexity (steep pitch, multiple
            valleys, dormers) adds to the total.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What color shingles are best for energy efficiency in Texas?
          </h3>
          <p className="text-gray-700">
            Lighter-colored shingles (light gray, tan, beige) reflect more solar heat than darker
            colors, which can reduce cooling costs by 10-15% during Texas summers. However, modern
            &quot;cool roof&quot; shingles with reflective granules are available in darker colors
            that still provide improved energy performance. The color choice also affects curb
            appeal and neighborhood standards, so we help homeowners balance efficiency with
            aesthetics.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Can you replace just a few damaged shingles?
          </h3>
          <p className="text-gray-700">
            Yes, individual shingle replacement is one of our most common repairs. If damage is
            limited to a small area (storm impact, tree branch, isolated wear), replacing the
            affected shingles is far more cost-effective than a full roof replacement. We carry
            common shingle brands and colors to match your existing roof as closely as possible.
            When an exact color match is not available, we source the nearest match from our
            suppliers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What are impact-resistant shingles and are they worth it?
          </h3>
          <p className="text-gray-700">
            Impact-resistant shingles carry a Class 4 rating, meaning they have passed UL 2218
            testing for resistance to simulated hail impact. They use a rubberized asphalt or
            polymer-modified backing that absorbs impact energy rather than cracking. In hail-prone
            West Texas, Class 4 shingles are a strong investment. Many Texas insurance carriers
            offer 10-35% premium discounts for Class 4 roofs, which can offset the 15-20% higher
            material cost within a few years.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How do I know when my shingle roof needs replacement?
          </h3>
          <p className="text-gray-700">
            Key signs include widespread granule loss (check your gutters), shingles that are
            curling, cracking, or buckling across large sections, multiple active leaks, daylight
            visible through the roof deck from the attic, and a roof that has reached or exceeded
            its expected lifespan. If repairs would affect more than 30% of the roof surface,
            replacement is usually the better financial decision. A free inspection from 5 Star
            Roofing gives you a clear answer.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get a Free Shingle Roofing Estimate</h2>
        <p className="mb-6 text-lg">
          Whether you need a new shingle roof, storm damage repair, or an honest assessment of your
          current roof&apos;s condition, 5 Star Roofing provides free inspections and transparent
          estimates.
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
      <RelatedArticles pageSlug="asphalt-shingle-roofing" />
    </div>
  );
}
