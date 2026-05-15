import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections/" },
  title: "Roof Inspections West Texas | 5 Star Roofing",
  description:
    "Free roof inspections across West Texas. Storm damage assessments, pre-purchase evaluations, and maintenance inspections for all roofs. Call (806) 622-6041.",
  openGraph: {
    title: "Roof Inspections West Texas | 5 Star Roofing",
    description:
      "Free roof inspections across West Texas. Storm damage assessments, pre-purchase evaluations, and maintenance inspections for all roofs. Call (806) 622-6041.",
    url: "https://5starroofingpros.com/roof-inspections/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Roof inspector marking hail damage with chalk circles on asphalt shingles — 5 Star Roofing",
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
      <InteriorHeroSection
        heroVariant="service"
        service="Roof Inspections"
        h1="Roof Inspections in West Texas"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-15-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "Roof Inspections", url: "/roof-inspections/" },
        ]}
    />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
{/* FAQPage schema removed — faqSchema variable kept as dead code */}

      {/* TL;DR */}
      <FadeIn>
        <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
          <p className="text-gray-800 font-medium leading-relaxed">
            5 Star Roofing performs professional roof inspections throughout the Texas Panhandle and Permian Basin — hail damage documentation, insurance claim support, and pre-purchase assessments.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href="/roof-inspections-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Amarillo Inspections</a>
            <a href="/roof-inspections-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Midland Inspections</a>
            <a href="/roof-inspections-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Lubbock Inspections</a>
            <a href="/roof-inspections-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Odessa Inspections</a>
          </div>
        </section>
      </FadeIn>

      {/* Author byline */}
      <FadeIn>
        <div className="mb-8 max-w-5xl mx-auto flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
          <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-white text-xs font-bold flex-shrink-0">BT</div>
          <span>
            Written by <span className="font-semibold text-gray-700">Ben Terhune</span>, Owner — 5 Star Roofing, Amarillo TX
            &nbsp;·&nbsp; Updated May 2026
          </span>
        </div>
      </FadeIn>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Professional Roof Inspections Across West Texas
      </h2>

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            Why Should You Know Your Roof&apos;s Condition Before Problems Start?
          </h2>
          <p className="text-lg">
            Most roof problems are invisible from the ground until they cause interior damage. A
            professional inspection from 5 Star Roofing catches issues early, documents storm damage
            for insurance, and gives you a clear picture of your roof&apos;s remaining lifespan. We
            provide free inspections across our{" "}
            <a
              href="/service-areas/"
              className="text-brand-brown hover:text-brand-gold underline font-semibold"
            >
              14-city service area
            </a>{" "}
            with no obligation to hire us for repairs.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">When Do You Need a Roof Inspection?</h2>
        <p className="mb-4">
          Some inspections are scheduled into a maintenance calendar. Others are triggered by a
          storm rolling through the Texas Panhandle or a closing date in Lubbock. Across our
          14-city service area, these are the situations where a professional roof inspection
          earns its place on the checklist.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">After Storms</h3>
            <p className="text-gray-700">
              Hail strikes, straight-line winds off the Llano Estacado, and heavy rain can fracture
              asphalt shingle mats or lift metal panels without leaving a clue at ground level.
              After any significant storm across the Texas Panhandle or the Permian Basin around
              Midland and Odessa, a professional inspection documents the damage early, before
              leaks develop and before State Farm, Allstate, USAA, or Texas Farm Bureau filing
              deadlines run out.
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
              An annual inspection is the most reliable way to extend the service life of an
              architectural asphalt shingle or standing seam metal roof in Amarillo. Catching a few
              loose shingles, a cracked pipe boot, or degraded caulking around a Heat &amp; Glo
              flue costs a fraction of the emergency repair bill that follows once those issues
              turn into a leak during the next spring hail line.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Insurance Requirements</h3>
            <p className="text-gray-700">
              State Farm, Allstate, USAA, Farmers, and Texas Farm Bureau policies often require a
              periodic roof condition report as a condition of coverage, especially on roofs older
              than 15 years. Our reports meet carrier documentation standards across the Panhandle
              and can support coverage renewal or qualify a Class 4 impact-rated asphalt shingle
              upgrade for a premium discount.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Warranty Compliance</h3>
            <p className="text-gray-700">
              GAF, CertainTeed, Owens Corning, Carlisle, and Firestone warranties on shingle and
              TPO systems require documented maintenance to remain in force. Skipping inspections
              can void coverage right when a Hail Alley storm event would otherwise trigger a
              claim. Our written reports serve as the maintenance record manufacturers ask for
              during a warranty review.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Before Filing a Claim</h3>
            <p className="text-gray-700">
              Before calling State Farm, Allstate, USAA, or Texas Farm Bureau about suspected hail
              or wind damage, get a professional inspection on the books first. Our slope-by-slope
              photo documentation and damage map give your adjuster the evidence needed to process
              the claim cleanly and reduces the risk of an underpayment on a legitimate UL 2218
              Class 4 shingle replacement.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Does a Professional Roof Inspection Cover?
        </h2>
        <p className="mb-4">
          We inspect every component of the roofing system, not just the visible field of
          shingles or TPO membrane. From decking to ridge caps to pipe boots, here is what our
          inspectors physically examine on a typical 2,000 sq ft Amarillo home or a 20,000 sq
          ft commercial flat roof in Midland.
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/services/hail-damage-repair.webp"
            alt="Wide aerial of a gray architectural shingle roof with numerous hail strikes circled in chalk plus vents and skylight — strong hail-inspec... — 5 Star Roofing"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Structural Integrity</h3>
            <p className="text-gray-700">
              We check the roof deck for sagging between rafters or trusses, uneven plywood
              surfaces, and pressure points around HVAC curbs that point to water damage,
              overloading, or aging framing. On older Amarillo homes built in the 1960s and 1970s,
              we pay close attention to the decking under valleys where granule loss from past hail
              tends to concentrate moisture.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Material Condition</h3>
            <p className="text-gray-700">
              On asphalt shingle roofs we map granule loss, mat curling, cracking, blistering, and
              missing tabs against the manufacturer profile (GAF Timberline, CertainTeed Landmark,
              Owens Corning Duration, Malarkey Vista, or Atlas Pinnacle). On TPO, PVC, EPDM, and
              modified bitumen flat roofs we check the membrane field, every seam, and surface wear
              from West Texas UV and grit. Each finding feeds the remaining-life estimate in the
              report.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Flashing and Penetrations</h3>
            <p className="text-gray-700">
              Step flashing around brick chimneys, plumbing vents, skylight curbs, and roof-to-wall
              transitions is the most common source of leaks on Panhandle homes. We examine every
              penetration for proper lap, corrosion, separation, and signs of past water entry into
              the decking. Neoprene pipe boots get special attention because high-altitude UV in
              Amarillo and Lubbock degrades them faster than the shingles they sit on.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Gutters and Drainage</h3>
            <p className="text-gray-700">
              Clogged or misaligned gutters cause water to back up under starter shingles and rot
              fascia boards. We check the gutter run, downspout flow, and how runoff moves away
              from the foundation. On commercial TPO and PVC flat roofs in Midland and Lubbock we
              verify roof drain function and look for ponding water near rooftop HVAC curbs, which
              is a common failure point after a Permian Basin dust event.
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
              Every finding is photographed with location notes and severity tags. You receive a
              written report with the photos, severity ratings, and recommended next steps,
              formatted for State Farm, Allstate, USAA, or Texas Farm Bureau adjusters when storm
              damage is present. We keep copies on file at our Amarillo office for warranty and
              future-claim reference.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Types of Roof Inspections Are Available?
        </h2>
        <p className="mb-4">
          A storm damage walk after a hail line in Canyon looks different from a pre-sale
          inspection in Lubbock or a yearly maintenance pass on a Midland TPO commercial roof. We
          tailor the scope, the documentation format, and the delivery turnaround to the situation
          you are actually in.
        </p>
        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage Inspection</h3>
            <p className="text-gray-700">
              After{" "}
              <a
                href="/hail-damage-repair-amarillo/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                hail
              </a>
              ,{" "}
              <a
                href="/wind-damage-repair/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                wind
              </a>
              , or severe weather, we document the damage with adjuster-grade detail. The report
              identifies the damage mechanism (hail impact, wind uplift, water intrusion against UL
              580 ratings), measures affected slopes, and lists the architectural shingle, Class 4
              shingle, or standing seam metal materials needed for the repair. Reports are
              formatted to meet State Farm, Allstate, USAA, Farmers, and Texas Farm Bureau
              submission requirements.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Pre-Purchase / Pre-Sale Inspection</h3>
            <p className="text-gray-700">
              For a real estate transaction in Amarillo, Canyon, Lubbock, or Midland we provide an
              unbiased read on the roof&apos;s current condition and an estimated remaining lifespan
              by slope. The report includes approximate repair or replacement cost ranges for an
              architectural shingle or standing seam metal system so buyers and sellers can
              negotiate with real numbers instead of guesses.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Maintenance Inspection</h3>
            <p className="text-gray-700">
              Annual or semi-annual inspections focused on preventive care across the Panhandle
              and Permian Basin. We catch loose architectural shingles, worn pipe-boot caulking, or
              clogged commercial roof drains before they turn into a leaky ceiling. For a typical
              2,000 sq ft Amarillo home, this is the most cost-effective way to push a 25-year
              shingle roof closer to its full service life.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-2">Insurance and Warranty Inspection</h3>
            <p className="text-gray-700">
              State Farm, Allstate, USAA, Farmers, Texas Farm Bureau, and most commercial carriers periodically request roof-condition reports on policy renewals. GAF, Owens Corning, CertainTeed, Carlisle, and Firestone warranty packages on Class 4 hail-rated and TPO systems also require documented inspections at year 5, year 10, and after every named storm. Our inspection reports include high-resolution photos, slope-by-slope measurements, an itemized findings list, and a written assessment signed by the inspecting estimator. Reports are delivered as a PDF within 48 hours.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h2 className="text-2xl font-bold mt-8 mb-4">Are Roof Inspections Really Free?</h2>
        <p className="mb-4">
          Every roof inspection from 5 Star Roofing is free, thorough, and comes with no strings
          attached. Here is what you can expect:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">No Obligation</h3>
            <p className="text-gray-700">
              Every inspection is free whether you hire us for the repair or not. Homeowners
              across the 14 cities we serve, from Amarillo to Odessa, deserve a straight answer
              on the condition of the roof over their head. If the shingles look solid, we tell
              you that. If the slope facing the prevailing west wind is shot, we lay out an
              honest estimate and leave the decision with you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Written Report with Photos</h3>
            <p className="text-gray-700">
              You receive a written PDF report documenting every finding on the roof, including
              dated photographs, severity ratings, and recommended actions per slope. The file is
              yours to keep and use however you need it, whether that is a State Farm or USAA
              claim submission, a second opinion from another Amarillo roofer, or your own
              homeowner records.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Repair Estimates</h3>
            <p className="text-gray-700">
              When the inspection turns up issues, we hand back an itemized estimate broken out by
              line item: tear-off, underlayment, GAF or CertainTeed shingles, flashing, pipe
              boots, ridge cap, disposal, and labor. No hidden fees and no surprise add-ons. You
              walk away knowing exactly what work is recommended, what each line costs, and why
              it matters before you commit to anything.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Insurance Documentation</h3>
            <p className="text-gray-700">
              When storm damage is documented, the report format is built for adjuster review at
              State Farm, Allstate, USAA, Farmers, and Texas Farm Bureau. It includes the slope
              measurements, damage map, and photo evidence carriers need to process a claim cleanly
              against UL 2218 Class 4 hail and UL 580 wind uplift standards. Our team can also
              meet your adjuster on-site in Amarillo, Lubbock, Midland, or Odessa to walk through
              the findings.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Roof Inspections by City</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/roof-inspections-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Amarillo homes and businesses</a></li>
            <li><a href="/roof-inspections-lubbock/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Lubbock homes and businesses</a></li>
            <li><a href="/roof-inspections-midland/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Midland homes and businesses</a></li>
            <li><a href="/roof-inspections-odessa/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Odessa homes and businesses</a></li>
            <li><a href="/roof-inspections-canyon/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Canyon homes and businesses</a></li>
            <li><a href="/roof-inspections-borger/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Borger homes and businesses</a></li>
            <li><a href="/roof-inspections-pampa/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Pampa homes and businesses</a></li>
            <li><a href="/roof-inspections-dumas/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Dumas homes and businesses</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}

      {/* City Variant Link Grid */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Roof Inspections by City</h2>
      <p className="mb-6 text-gray-700">
        We provide free roof inspections across 14 cities in the Texas Panhandle, South Plains,
        and Permian Basin, including Amarillo, Canyon, Lubbock, Midland, and Odessa. Select your
        city for local scheduling and the closest inspector to the property.
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
            wise. Roofs over 10 years old benefit from twice-yearly inspections to catch
            aging-related issues early.
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
            Yes. We provide free roof inspections across our entire 14-city service area. There is
            no obligation to hire us for repairs. You receive a written report with photos
            regardless. If we find damage that needs attention, we provide a detailed estimate. If
            your roof is in good shape, we tell you that too.
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
            Yes. Our inspection reports are formatted for adjusters at State Farm, Allstate, USAA,
            Farmers, and Texas Farm Bureau, with dated photographs, slope measurements, and a
            written damage map. We document the damage mechanism (hail impact against UL 2218
            Class 4 ratings, wind uplift, or age-related deterioration), affected slopes, and the
            architectural shingle or metal materials required for the repair. That documentation
            is what strengthens a claim and reduces the risk of underpayment on a legitimate
            Panhandle hail loss.
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
            comprehensive repair or replacement estimate. We prioritize repairs by urgency so you
            can address the most critical items first.
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
      <RelatedArticles pageSlug="roof-inspections" />
    </div>
  );
}
