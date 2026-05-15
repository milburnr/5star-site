import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/wind-damage-repair/" },
  title: "Wind Damage Roof Repair Texas | 5 Star Roofing",
  description:
    "Expert wind damage roof repair across Texas. Emergency weatherproof sheeting, insurance documentation, and full restoration for wind-lifted shingles. Call (806) 622-6041.",
  openGraph: {
    title: "Wind Damage Roof Repair Texas | 5 Star Roofing",
    description:
      "Expert wind damage roof repair across Texas. Emergency weatherproof sheeting, insurance documentation, and full restoration for wind-lifted shingles. Call (806) 622-6041.",
    url: "https://5starroofingpros.com/wind-damage-repair/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-storm.jpg",
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
      "Professional wind damage roof repair services across Texas. Emergency weatherproof sheeting, damage assessment, insurance documentation, and complete roof restoration after wind storms.",
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
      <InteriorHeroSection
        heroVariant="service"
        service="Wind Damage Repair"
        h1="Wind Damage Repair in West Texas"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-2-1280w.jpg"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "Wind Damage Repair", url: "/wind-damage-repair/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Wind Damage Repair across the Texas Panhandle and West Texas, including Amarillo, Lubbock, Midland, and Odessa.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Storm work: UL 2218 Class 4 hail-rated installations and full insurance claim documentation.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Service area: based in Amarillo since 2014, serving 25+ Panhandle and West Texas cities.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Wind Damage Roof Repair Across Texas
      </h2>

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            What Happens When Wind Hits Your Roof?
          </h2>
          <p className="text-lg">
            Texas wind does not wait for business hours. From the Panhandle to the Permian Basin,
            high winds tear through communities every spring and summer, ripping shingles loose,
            peeling back flashing, and exposing your home to water damage. 5 Star Roofing provides
            storm-damage documentation, insurance-claim assistance, and permanent wind damage
            repairs for homeowners across our{" "}
            <a
              href="/service-areas/"
              className="text-brand-brown hover:text-brand-gold underline font-semibold"
            >
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
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Lifted and Missing Shingles</h3>
            <p className="text-gray-700">
              Texas Panhandle wind catches the exposed edge of a shingle and peels it upward, breaking the factory adhesive seal that holds the tab to the course below. Once one shingle lifts, the surrounding shingles lose their overlap protection and the seal strip starts to fail on either side. Once the tabs are gone, the synthetic or felt underlayment is the only thing between rain and the OSB deck.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Exposed Underlayment</h3>
            <p className="text-gray-700">
              When shingles blow off in a 60-plus-mph Panhandle gust, the synthetic or felt underlayment is the only barrier between your roof deck and the next rain. Underlayment is not designed for prolonged UV exposure across a Texas summer and will degrade within weeks. Reshingling that section is a priority before the next storm front rolls through.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Flashing Separation</h3>
            <p className="text-gray-700">
              Metal step flashing around chimneys, pipe boots, sidewalls, and roof edges can bend, lift, or separate completely under sustained Panhandle winds. The joints between flashing and the shingle field are the most vulnerable points on the entire roof system. Even a quarter-inch gap at a chimney saddle becomes a direct leak path during the next West Texas thunderstorm.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Ridge Cap and Soffit Damage</h3>
            <p className="text-gray-700">
              Ridge caps sit at the highest point of your roof and take the full force of West Texas wind. Once a ridge cap shingle breaks loose, wind-driven rain blows straight into the attic. Soffits and fascia along the eaves can crack, warp, or blow off entirely. That damages the ventilation balance between intake and ridge exhaust that keeps your attic dry through Amarillo summers.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How Does the Wind Damage Repair Process Work?
        </h2>
        <p className="mb-4">
          When you call after a windstorm, here is how we handle the repair from start to finish:
        </p>
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">Weatherproof Sheeting</h3>
              <p className="text-gray-700">
                If a Panhandle windstorm has left sections of decking exposed, we install temporary weather protection over the damaged area to keep water out until the permanent repair is scheduled. This step matters most during peak storm season from March through September, when a follow-up cell can sweep across the South Plains within days of the first event.
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
                We inspect every slope of your roof to identify the full extent of wind damage, not just the obvious missing tabs. That includes step flashing, ridge caps, pipe boots, drip edge, and the attic interior for early signs of water entry around the rafters. You receive a written report with slope-by-slope photos that an Allstate, State Farm, or USAA adjuster can work from.
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
                We prepare a detailed damage report with photographs, tape-measure dimensions, and material specifications (manufacturer, profile, UL 580 wind-uplift rating) formatted the way Texas adjusters expect. Solid documentation helps the claim move through your carrier without the back-and-forth that drags out repair timelines.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-1">
                Targeted Repair or Full Replacement
              </h3>
              <p className="text-gray-700">
                Depending on the extent of damage, we either repair the affected sections or recommend full replacement with a UL 580 wind-rated system. Localized damage typically means replacing individual architectural shingles, resecuring step flashing, and sealing penetrations. Widespread damage across 30 percent or more of the roof surface usually makes a full replacement the more practical choice on Amarillo and Lubbock homes.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          What Makes West Texas Wind Patterns Unique for Roofing?
        </h2>
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
                <li>
                  Spring gusts regularly exceed 60-70 mph during thunderstorm season (March through
                  June)
                </li>
                <li>Chinook-style winds can sustain 40-50 mph for 12+ hours at a time</li>
                <li>Amarillo records measurable wind events on over 200 days per year</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Why Installation Matters</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Six-nail shingle patterns outperform four-nail patterns by 30-50% in wind uplift
                  resistance
                </li>
                <li>
                  Starter strips with factory-applied adhesive create a stronger wind seal along
                  eaves
                </li>
                <li>
                  Synthetic underlayment withstands wind exposure longer than traditional felt if
                  shingles are lost
                </li>
                <li>
                  Proper roof deck attachment (ring-shank nails, sealed sheathing) prevents deck
                  uplift in extreme events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h2 className="text-2xl font-bold mt-8 mb-4">How Can You Prevent Future Wind Damage?</h2>
        <p className="mb-4">
          Proactive maintenance on a Panhandle home costs a fraction of post-storm repairs, and a handful of installation upgrades will carry your roof through a 70-plus-mph gust the next time a spring thunderstorm pushes down the Llano Estacado. These are the measures that meaningfully reduce wind vulnerability on asphalt shingle, metal, and tile roofs across Amarillo, Canyon, Lubbock, and Midland:
        </p>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-2-1280w.jpg"
            alt="Two chalked hail strikes on gray 3-tab shingles — strong inspection/hail-damage hero. Filename 'completed' is a mismatch — 5 Star Roofing"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Proper Nailing Patterns</h3>
            <p className="text-gray-700">
              Six nails per shingle instead of four, placed inside the GAF or CertainTeed manufacturer nailing zone, meaningfully improves hold strength on architectural asphalt. This single upgrade can mean the difference between a roof that survives a 70-mph Panhandle gust and one that loses a slope. We install six-nail patterns by default on every reroof.
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
              A peel-and-stick ice and water shield membrane across the entire roof deck, or at minimum along eaves, rakes, and valleys, creates a secondary waterproof barrier even if shingles are blown off in a Panhandle storm. This detail is standard on every full reroof we quote and is what keeps an attic dry on a roof that has lost a few tabs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-brand-brown mb-2">Regular Maintenance</h3>
            <p className="text-gray-700">
              Annual{" "}
              <a
                href="/roof-inspections/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                roof inspections
              </a>{" "}
              catch loose ridge caps, broken shingle seal strips, degraded pipe-boot caulking, and worn step flashing well before the next Panhandle wind event tests them. Spring and fall walkovers in Amarillo, Canyon, Lubbock, and Midland routinely uncover six to ten small failure points whose total repair cost is a fraction of one tarp-up and emergency call after a storm strips a section of roof.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Wind Damage Repair by City</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/wind-damage-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Amarillo</a></li>
            <li><a href="/wind-damage-repair-lubbock/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Lubbock</a></li>
            <li><a href="/wind-damage-repair-midland/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Midland</a></li>
            <li><a href="/wind-damage-repair-odessa/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Odessa</a></li>
            <li><a href="/wind-damage-repair-canyon/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Canyon</a></li>
            <li><a href="/wind-damage-repair-borger/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Borger</a></li>
            <li><a href="/wind-damage-repair-pampa/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Pampa</a></li>
            <li><a href="/wind-damage-repair-dumas/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Dumas</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}

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
            policy will typically pay for repairs or replacement minus your deductible. Some
            policies have a separate wind/hail deductible, often 1-2% of the insured value. We
            provide detailed damage documentation with photos and measurements that insurance
            adjusters need for claim approval. Our team has extensive experience working with Texas
            insurance carriers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2 text-brand-brown">
            Can wind damage happen without a storm?
          </h3>
          <p className="text-gray-700">
            Yes. The Texas Panhandle and Permian Basin experience sustained high winds year-round,
            not just during thunderstorms. Spring chinook winds can blow at 40-60 mph for hours or
            even days. These persistent winds gradually loosen nails, lift shingle edges, and
            fatigue roofing materials over time. Cumulative wind wear is one of the most common
            causes of premature roof failure in this region.
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
      <RelatedArticles pageSlug="wind-damage-repair" />
    </div>
  );
}
