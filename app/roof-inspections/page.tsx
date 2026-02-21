import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections/" },
  title: "Roof Inspections West Texas | 5 Star Roofing",
  description:
    "Free roof inspections across West Texas. Storm damage assessments, pre-purchase evaluations, and maintenance inspections for all roofs. Call (806) 622-6041.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Roof Inspection Services",
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
      "Professional roof inspection services across West Texas. Storm damage assessments, pre-purchase evaluations, maintenance inspections, and insurance documentation for residential and commercial properties.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should I have my roof inspected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend a professional roof inspection at least once per year, ideally in early spring before storm season begins. In West Texas, where hail and high winds are common from March through June, an additional inspection after any significant storm is also wise. Roofs over 10 years old benefit from twice-yearly inspections to catch aging-related issues early.",
        },
      },
      {
        "@type": "Question",
        name: "What does a professional roof inspection include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our inspections cover the full roofing system: shingles or membrane condition, flashing around chimneys and vents, ridge caps, gutters and drainage, soffit and fascia, pipe boots and penetration seals, and attic ventilation. We also check the attic interior for signs of moisture, mold, or structural issues. You receive a written report with photos documenting every finding.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free roof inspections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide free roof inspections across our entire 14-city service area. There is no obligation to hire us for repairs. You receive a written report with photos regardless. If we find damage that needs attention, we provide a detailed estimate. If your roof is in good shape, we tell you that too.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a roof inspection take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical residential roof inspection takes 30-60 minutes depending on roof size and complexity. Commercial buildings with larger roof areas may take 1-2 hours. We do not rush inspections. Every section of the roof, including areas that are harder to access, gets examined. The written report is typically delivered within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Can a roof inspection help with my insurance claim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our inspection reports are formatted for insurance adjusters with detailed photographs, measurements, and descriptions of damage. We document the type of damage (hail, wind, age-related), affected areas, and materials needed for repair or replacement. Having professional documentation significantly strengthens your claim and reduces the chance of underpayment.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the inspection finds problems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We walk you through every issue found, explain its severity, and provide repair options with pricing. Minor issues like a few loose shingles or worn caulking are quick, affordable fixes. Major issues like widespread storm damage or structural concerns get a comprehensive repair or replacement estimate. We prioritize repairs by urgency so you can address the most critical items first.",
        },
      },
      {
        "@type": "Question",
        name: "Should I get a roof inspection before buying a home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a pre-purchase roof inspection is one of the smartest investments you can make when buying a home. A general home inspector may note obvious roof issues but typically does not perform the detailed assessment a roofing specialist provides. We can estimate remaining roof life, identify hidden damage, and give you accurate repair or replacement cost projections to factor into your purchase decision.",
        },
      },
    ],
  };

  const cities = [
    { name: "Amarillo", slug: "roof-inspections-amarillo" },
    { name: "Andrews", slug: "roof-inspections-andrews" },
    { name: "Big Spring", slug: "roof-inspections-big-spring" },
    { name: "Borger", slug: "roof-inspections-borger" },
    { name: "Canyon", slug: "roof-inspections-canyon" },
    { name: "Dumas", slug: "roof-inspections-dumas" },
    { name: "Levelland", slug: "roof-inspections-levelland" },
    { name: "Lubbock", slug: "roof-inspections-lubbock" },
    { name: "Midland", slug: "roof-inspections-midland" },
    { name: "Monahans", slug: "roof-inspections-monahans" },
    { name: "Odessa", slug: "roof-inspections-odessa" },
    { name: "Pampa", slug: "roof-inspections-pampa" },
    { name: "Perryton", slug: "roof-inspections-perryton" },
    { name: "Snyder", slug: "roof-inspections-snyder" },
  ];

  return (
    <div className="container-custom py-12">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "Roof Inspections", url: "/roof-inspections/" },
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
        Professional Roof Inspections Across West Texas
      </h1>

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            Know the Condition of Your Roof Before Problems Start
          </h2>
          <p className="text-lg">
            Most roof problems are invisible from the ground until they cause interior damage. A
            professional inspection from 5 Star Roofing catches issues early, documents storm damage
            for insurance, and gives you a clear picture of your roof&apos;s remaining lifespan. We
            provide free inspections across our{" "}
            <a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
              14-city service area
            </a>{" "}
            with no obligation to hire us for repairs.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">When You Need a Roof Inspection</h2>
        <p className="mb-4">
          Some inspections are planned, and others are prompted by events. Here are the situations
          where a professional roof inspection makes a real difference:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">After Storms</h3>
            <p className="text-gray-700">
              Hail, high winds, and heavy rain can damage your roof without any visible signs from
              ground level. After any significant storm in the Panhandle or Permian Basin, a
              professional inspection identifies damage early, before leaks develop and before
              insurance filing deadlines pass.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Before Buying or Selling a Home</h3>
            <p className="text-gray-700">
              Buyers need to know what they are inheriting. A roof nearing the end of its life can
              cost $8,000-$15,000 to replace. Sellers benefit from documenting a roof in good
              condition, which strengthens buyer confidence and can justify your asking price.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Annual Maintenance</h3>
            <p className="text-gray-700">
              Yearly inspections are the single most effective way to extend your roof&apos;s life.
              Catching a few loose shingles or degraded caulking costs a fraction of the emergency
              repair you would need after those issues turn into leaks during the next storm.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Insurance Requirements</h3>
            <p className="text-gray-700">
              Some insurance policies require periodic roof inspections as a condition of coverage,
              especially for roofs over 15 years old. Our inspection reports meet carrier
              documentation standards and can help you maintain coverage or qualify for premium
              discounts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Warranty Compliance</h3>
            <p className="text-gray-700">
              Many roofing material warranties require documented maintenance, including regular
              inspections. Skipping inspections can void your warranty when you need it most. Our
              inspection reports serve as the maintenance documentation manufacturers require.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Before Filing a Claim</h3>
            <p className="text-gray-700">
              Before contacting your insurance carrier about suspected roof damage, get a
              professional inspection first. Our documentation provides the evidence your adjuster
              needs to process your claim efficiently and helps prevent underpayment on legitimate
              damage.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold mt-8 mb-4">What Our Roof Inspections Cover</h2>
        <p className="mb-4">
          We inspect every component of your roofing system, not just the visible surface. Here is
          what our inspection process examines:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Structural Integrity</h3>
            <p className="text-gray-700">
              We check for sagging, uneven surfaces, and signs of structural stress that indicate
              problems with the roof deck, rafters, or trusses. These issues can signal water
              damage, overloading, or aging that affects the entire roof system.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Material Condition</h3>
            <p className="text-gray-700">
              Shingle granule loss, curling, cracking, blistering, and missing tabs all indicate
              different types and stages of deterioration. For flat roofs, we check membrane
              integrity, seam condition, and surface wear. Each finding helps determine remaining
              roof life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Flashing and Penetrations</h3>
            <p className="text-gray-700">
              Flashing around chimneys, vents, skylights, and roof edges is the most common source
              of leaks. We examine every penetration point for proper sealing, corrosion, separation,
              and signs of past water entry. Pipe boots get particular attention as they degrade
              faster than other components.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Gutters and Drainage</h3>
            <p className="text-gray-700">
              Clogged, damaged, or improperly sloped gutters cause water to back up under shingles
              and along fascia boards. We check gutter condition, downspout flow, and overall
              drainage patterns. On flat roofs, we verify drain function and check for ponding water.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Attic Ventilation</h3>
            <p className="text-gray-700">
              Improper attic ventilation accelerates shingle aging and can cause moisture buildup
              that leads to mold and rot. We check soffit vents, ridge vents, and attic temperatures
              to ensure adequate airflow. In Texas heat, proper ventilation is critical to roof
              longevity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Photo Documentation</h3>
            <p className="text-gray-700">
              Every issue we find is photographed with detailed notes. You receive a written report
              documenting all findings, their severity, and recommended actions. This report is
              formatted for insurance use if storm damage is present. We keep copies on file for
              future reference.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">Types of Roof Inspections</h2>
        <p className="mb-4">
          Different situations call for different inspection approaches. We tailor the scope and
          documentation to match your specific needs:
        </p>
        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage Inspection</h3>
            <p className="text-gray-700">
              After{" "}
              <a href="/hail-damage-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
                hail
              </a>
              ,{" "}
              <a href="/wind-damage-repair/" className="text-brand-brown hover:text-brand-gold underline font-semibold">
                wind
              </a>
              , or severe weather, we document all damage with insurance-grade detail. This includes
              identifying the type of damage (impact, uplift, water intrusion), measuring affected
              areas, and noting materials needed for repair. Reports are formatted to meet insurance
              carrier requirements.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Pre-Purchase / Pre-Sale Inspection</h3>
            <p className="text-gray-700">
              For real estate transactions, we provide an unbiased assessment of the roof&apos;s
              current condition and estimated remaining lifespan. The report includes approximate
              repair or replacement costs so buyers and sellers can negotiate with accurate
              information.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Maintenance Inspection</h3>
            <p className="text-gray-700">
              Annual or semi-annual inspections focused on preventive care. We identify minor issues
              like loose shingles, worn caulking, or clogged drains before they become expensive
              repairs. This is the most cost-effective way to maximize your roof&apos;s lifespan.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Insurance and Warranty Inspection</h3>
            <p className="text-gray-700">
              Some carriers and manufacturers require periodic documentation of roof condition. Our
              reports satisfy these requirements with detailed findings, professional photographs,
              and written assessments signed by our inspection team.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h2 className="text-2xl font-bold mt-8 mb-4">Free Roof Inspections</h2>
        <p className="mb-4">
          Every roof inspection from 5 Star Roofing is free, thorough, and comes with no strings
          attached. Here is what you can expect:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">No Obligation</h3>
            <p className="text-gray-700">
              Our inspection is free regardless of whether you hire us for repairs. We believe
              homeowners deserve to know the condition of their roof. If everything looks good, we
              tell you. If repairs are needed, we provide an honest estimate and the decision is
              yours.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Written Report with Photos</h3>
            <p className="text-gray-700">
              You receive a detailed written report documenting every finding. The report includes
              photographs, severity ratings, and recommended actions. This is yours to keep and use
              however you see fit, whether for insurance, a second opinion, or your own records.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Repair Estimates</h3>
            <p className="text-gray-700">
              If our inspection uncovers issues, we provide itemized repair estimates with clear
              pricing. No hidden fees, no surprise line items. You know exactly what work is
              recommended, what it costs, and why it matters before making any decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Insurance Documentation</h3>
            <p className="text-gray-700">
              When storm damage is present, our report format is designed for insurance adjuster
              review. We include the documentation carriers need to process claims accurately. Our
              team can also meet your adjuster on-site to walk through findings if needed.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* City Variant Link Grid */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Roof Inspections by City</h2>
      <p className="mb-6 text-gray-700">
        We provide free roof inspections across 14 Texas cities. Select your location for
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
            How often should I have my roof inspected?
          </h3>
          <p className="text-gray-700">
            We recommend a professional roof inspection at least once per year, ideally in early
            spring before storm season begins. In West Texas, where hail and high winds are common
            from March through June, an additional inspection after any significant storm is also
            wise. Roofs over 10 years old benefit from twice-yearly inspections to catch aging-related
            issues early.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What does a professional roof inspection include?
          </h3>
          <p className="text-gray-700">
            Our inspections cover the full roofing system: shingles or membrane condition, flashing
            around chimneys and vents, ridge caps, gutters and drainage, soffit and fascia, pipe
            boots and penetration seals, and attic ventilation. We also check the attic interior for
            signs of moisture, mold, or structural issues. You receive a written report with photos
            documenting every finding.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Do you offer free roof inspections?
          </h3>
          <p className="text-gray-700">
            Yes. We provide free roof inspections across our entire 14-city service area. There is no
            obligation to hire us for repairs. You receive a written report with photos regardless. If
            we find damage that needs attention, we provide a detailed estimate. If your roof is in
            good shape, we tell you that too.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            How long does a roof inspection take?
          </h3>
          <p className="text-gray-700">
            A typical residential roof inspection takes 30-60 minutes depending on roof size and
            complexity. Commercial buildings with larger roof areas may take 1-2 hours. We do not
            rush inspections. Every section of the roof, including areas that are harder to access,
            gets examined. The written report is typically delivered within 24 hours.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Can a roof inspection help with my insurance claim?
          </h3>
          <p className="text-gray-700">
            Absolutely. Our inspection reports are formatted for insurance adjusters with detailed
            photographs, measurements, and descriptions of damage. We document the type of damage
            (hail, wind, age-related), affected areas, and materials needed for repair or
            replacement. Having professional documentation significantly strengthens your claim and
            reduces the chance of underpayment.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            What happens if the inspection finds problems?
          </h3>
          <p className="text-gray-700">
            We walk you through every issue found, explain its severity, and provide repair options
            with pricing. Minor issues like a few loose shingles or worn caulking are quick,
            affordable fixes. Major issues like widespread storm damage or structural concerns get a
            comprehensive repair or replacement estimate. We prioritize repairs by urgency so you can
            address the most critical items first.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Should I get a roof inspection before buying a home?
          </h3>
          <p className="text-gray-700">
            Yes, a pre-purchase roof inspection is one of the smartest investments you can make when
            buying a home. A general home inspector may note obvious roof issues but typically does
            not perform the detailed assessment a roofing specialist provides. We can estimate
            remaining roof life, identify hidden damage, and give you accurate repair or replacement
            cost projections to factor into your purchase decision.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Schedule Your Free Roof Inspection</h2>
        <p className="mb-6 text-lg">
          Whether you suspect storm damage, are buying a home, or just want peace of mind, 5 Star
          Roofing provides free, no-obligation roof inspections with written reports.
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
