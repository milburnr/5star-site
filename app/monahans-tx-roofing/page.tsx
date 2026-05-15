import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StickyContactBar } from "@/components/StickyContactBar";
import {
  Building2,
  CloudHail,
  Construction,
  Home,
  RefreshCw,
  Search,
  Tornado,
  Wind,
  Wrench,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/monahans-tx-roofing/" },
  title: "Roofing in Monahans TX | 5 Star Roofing",
  description:
    "Roofing in Monahans. Ward County heat and wind experts. Residential and commercial roofing for Permian Basin properties. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Monahans TX | 5 Star Roofing",
    description:
      "Roofing in Monahans. Ward County heat and wind experts. Residential and commercial roofing for Permian Basin properties. Call (806) 622-6041",
    url: "https://5starroofingpros.com/monahans-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed brown asphalt shingle roof installation in Monahans TX — 5 Star Roofing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    name: "Residential Roofing",
    slug: "residential-roofing",
    icon: <Home className="w-6 h-6 inline-block" />,
  },
  {
    name: "Commercial Roofing",
    slug: "commercial-roofing",
    icon: <Building2 className="w-6 h-6 inline-block" />,
  },
  {
    name: "Hail Damage Repair",
    slug: "hail-damage-repair",
    icon: <CloudHail className="w-6 h-6 inline-block" />,
  },
  {
    name: "Storm Damage Repair",
    slug: "storm-damage-repair",
    icon: <Tornado className="w-6 h-6 inline-block" />,
  },
  {
    name: "Wind Damage Repair",
    slug: "wind-damage-repair",
    icon: <Wind className="w-6 h-6 inline-block" />,
  },
  {
    name: "Roof Replacement",
    slug: "roof-replacement",
    icon: <RefreshCw className="w-6 h-6 inline-block" />,
  },
  { name: "Roof Repair", slug: "roof-repair", icon: <Wrench className="w-6 h-6 inline-block" /> },
  {
    name: "Roof Inspections",
    slug: "roof-inspections",
    icon: <Search className="w-6 h-6 inline-block" />,
  },
  {
    name: "TPO Roofing",
    slug: "tpo-roofing",
    icon: <Construction className="w-6 h-6 inline-block" />,
  },
  {
    name: "Metal Roofing",
    slug: "metal-roofing",
    icon: <Wrench className="w-6 h-6 inline-block" />,
  },
  {
    name: "Asphalt Shingle Roofing",
    slug: "asphalt-shingle-roofing",
    icon: <Home className="w-6 h-6 inline-block" />,
  },
];

const faqItems = [
  {
    question: "How does Monahans' extreme heat affect roofing?",
    answer:
      "Monahans regularly exceeds 105 degrees in summer, with roof surfaces reaching 170 degrees. This extreme heat softens asphalt, accelerates UV degradation, and causes thermal expansion stress on all roofing materials. Reflective metal or white membrane roofing systems significantly reduce heat absorption and last longer in Monahans' desert climate than standard products.",
  },
  {
    question: "Does windblown sand from the Sandhills damage roofs?",
    answer:
      "Yes, Monahans' proximity to Monahans Sandhills State Park means windblown sand is a constant presence. Fine sand particles sandblast exposed roofing surfaces, erode protective granules and coatings, clog gutters and valleys, and infiltrate beneath shingle edges. Smooth-surface roofing like standing seam metal and welded membrane systems resist sand damage far better than traditional shingles. Regular maintenance and gutter cleaning are essential for all Monahans properties.",
  },
  {
    question: "Do you roof oil field facilities in Ward County?",
    answer:
      "Yes, we provide specialized roofing for oil and gas facilities throughout Ward County including pump stations, compressor buildings, pipe yards, and maintenance shops. We install chemical-resistant PVC membranes and heavy-duty metal roofing designed for industrial environments, and we understand the safety protocols, access requirements, and scheduling constraints of oil field projects.",
  },
  {
    question: "What is the best roofing material for Monahans homes?",
    answer:
      "Standing seam metal roofing is the top choice for Monahans residential properties due to its superior heat reflection, wind resistance, sand abrasion resistance, and 50+ year lifespan. For homeowners preferring shingles, Class 4 impact-resistant products with enhanced UV stabilization provide the best protection against Monahans' extreme heat and occasional hail.",
  },
  {
    question: "How do blue northers affect Monahans roofs?",
    answer:
      "Blue northers bring rapid temperature drops of 40 degrees or more within hours as cold fronts sweep through Ward County. This extreme thermal shock causes roofing materials to contract suddenly, stressing seams, adhesives, and membrane welds. Roofs already weakened by Monahans' intense summer heat are particularly vulnerable to cracking and splitting during blue norther events. Materials rated for extreme thermal cycling are essential in Monahans.",
  },
  {
    question: "How fast can you respond to roof emergencies in Monahans?",
    answer:
      "We provide scheduling for storm damage and roof repair in Monahans and throughout Ward County. Our crews carry tarps, sealants, and emergency repair materials to stop active leaks and prevent further interior damage while permanent repairs are planned. Monahans' location along I-20 provides direct access for our service crews.",
  },
  {
    question: "Why does Monahans need different roofing than Midland or Odessa?",
    answer:
      "While all three cities share Permian Basin weather, Monahans faces unique challenges from the Sandhills. Windblown sand creates abrasion damage that Midland and Odessa properties don't experience to the same degree. Monahans also records some of the highest summer temperatures in the Permian Basin, exceeding 105 degrees regularly. These factors mean roofing systems for Monahans need enhanced sand resistance and heat tolerance beyond what standard Permian Basin specifications require.",
  },
];

export default function MonahansRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Monahans"
        citySlug="midland"
        h1="Monahans Roofing Built for Extreme Permian Basin Heat"
        eyebrow="Ward County's Trusted Roofing Contractor for Oil Field & Residential Properties"
        image="/images/heroes/cities/midland-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Monahans", url: "/monahans-tx-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing serves Monahans TX and Ward County with residential and commercial roofing — hail damage repair, metal systems, and flat roof services for Permian Basin properties.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-monahans/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-monahans/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-monahans/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
              <a href="/odessa-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Odessa Roofing</a>
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

        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Your Trusted Roofing Partner in Monahans, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Monahans, located in Ward County with approximately 8,000 residents, is a Permian
                Basin community known for Monahans Sandhills State Park and a robust oil and gas
                economy. Situated along I-20 between Odessa and Pecos, Monahans serves as a service
                hub for the surrounding oil field operations. 5 Star Commercial Roofing provides
                comprehensive roofing services throughout Monahans and Ward County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Permian Basin oil boom has brought growth and investment to Monahans, with new
                residential developments, commercial facilities, and oilfield infrastructure
                expanding the city&apos;s footprint. The iconic Monahans Sandhills State Park,
                featuring towering sand dunes up to 70 feet high, draws visitors from across Texas,
                while the oil and gas sector provides the economic backbone for Ward County. Both
                residential and commercial properties in Monahans require roofing systems engineered
                for one of Texas&apos;s most extreme climates.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Monahans endures some of the harshest weather in West Texas. Summer temperatures
                regularly exceed 105 degrees, making it one of the hottest cities in the state. Roof
                surface temperatures can reach 170 degrees or higher, placing extreme stress on all
                roofing materials. The desert climate brings intense UV radiation, windblown sand
                from the surrounding dune fields, and occasional severe thunderstorms with damaging
                hail. Low humidity accelerates the drying and cracking of petroleum-based roofing
                products. Winter brings its own challenges with rapid temperature drops of 40
                degrees or more when blue northers sweep through. These conditions demand premium,
                heat-rated materials and expert installation techniques.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Monahans</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We handle residential and commercial roofing across Monahans, Ward County, and
              the Highway 18 corridor between Kermit and Pecos. Residential work centers on
              architectural and Class 4 impact-rated asphalt shingles. Commercial work covers
              TPO, PVC, modified bitumen, and standing seam metal on oilfield service shops
              and industrial buildings. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-monahans/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Monahans</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Monahans Areas We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From downtown properties to I-20 corridor businesses, we provide roofing services
                throughout Monahans and Ward County:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Central Monahans</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Downtown / Ward County Courthouse</li>
                    <li>&#10003; City Center residential</li>
                    <li>&#10003; East Monahans</li>
                    <li>&#10003; Main Street commercial</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">I-20 &amp; Commercial</h3>
                  <ul className="space-y-2">
                    <li>&#10003; I-20 corridor businesses</li>
                    <li>&#10003; Hotels &amp; truck stops</li>
                    <li>&#10003; Oil field service yards</li>
                    <li>&#10003; Equipment &amp; logistics facilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Greater Ward County</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Sandhills State Park area</li>
                    <li>&#10003; Pyote &amp; Barstow communities</li>
                    <li>&#10003; Oil field facilities county-wide</li>
                    <li>&#10003; Rural &amp; ranch properties</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Nearly half of all Monahans homes were built between 1940 and 1969, meaning many
                roofs sit on 55&ndash;85 year-old structures that have endured decades of extreme
                Permian Basin heat. East Monahans is the city&apos;s highest-value residential area.
                Whether you own a downtown property, an I-20 corridor business, or an oil field
                facility anywhere in Ward County, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Severe Weather in the Monahans Region
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  May 4, 2024 &mdash; 4-Inch Hail in Kermit (30 Miles Away)
                </h3>
                <p className="text-gray-700">
                  Softball-sized hail measuring 4.00 inches struck Kermit in Winkler County on May
                  4, 2024&mdash;approximately 30 miles northeast of Monahans. The same storm system
                  produced 1.25-inch hail in Loving County. Events of this magnitude in adjacent
                  counties demonstrate the severe hail threat across the entire western Permian
                  Basin, including Ward County.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Permian Basin Storm Corridor
                </h3>
                <p className="text-gray-700">
                  Ward County sits in the Permian Basin&apos;s severe weather corridor where spring
                  and summer supercell thunderstorms track across the flat, open terrain. While
                  Monahans&apos;s primary roofing challenges come from extreme heat and sand
                  abrasion, hail events in adjacent Winkler, Loving, Pecos, and Ector Counties occur
                  regularly&mdash;and the same storm systems threaten Monahans properties.
                  Impact-resistant roofing is strongly recommended.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Heat as the Primary Threat
                </h3>
                <p className="text-gray-700">
                  Unlike Panhandle cities where hail is the top roofing concern, Monahans faces its
                  greatest threat from extreme heat. Summer temperatures regularly exceed 105&deg;F,
                  making Monahans one of the hottest cities in Texas. Roof surface temperatures
                  reaching 170&deg;F+ cause continuous material degradation that shortens roof
                  lifespans by 30&ndash;40% compared to manufacturer ratings. This slow, relentless
                  damage is often more costly than a single hail event.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Monahans-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Monahans &amp; Ward County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Extreme Heat &amp; UV Exposure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Monahans is one of the hottest cities in Texas, with summer highs regularly
                  exceeding 105 degrees. Roof surface temperatures can reach 170 degrees, causing
                  asphalt shingles to soften, blister, and lose granules prematurely. UV radiation
                  at Monahans&apos;s low humidity and desert elevation is especially intense,
                  breaking down petroleum-based compounds in roofing materials much faster than in
                  more humid climates. Reflective metal roofing and white membrane systems are
                  particularly effective for reducing cooling costs and extending roof life in
                  Monahans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Sandhills Sand Abrasion</h3>
                <p className="text-gray-700 leading-relaxed">
                  The proximity of Monahans Sandhills State Park means windblown sand is a constant
                  presence. Fine sand particles can sandblast exposed roofing surfaces, erode
                  protective coatings, accumulate in gutters and valleys, and infiltrate beneath
                  shingle edges. Regular maintenance and gutter cleaning are essential for Monahans
                  properties. Roofing systems with smooth, sealed surfaces like standing seam metal
                  and welded membrane systems resist sand infiltration better than traditional
                  shingle products.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Oil Field Facility Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ward County&apos;s oil and gas operations include pump stations, compressor
                  facilities, pipe yards, and maintenance shops that require specialized roofing.
                  Chemical-resistant PVC membranes protect against oil mist and hydrocarbon
                  exposure. Heavy-gauge metal roofing handles the vibration from nearby equipment.
                  We understand the safety requirements, access protocols, and scheduling
                  constraints that oil field roofing projects demand.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Monahans City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Monahans: Sandhills Gateway &amp; Oil Country Hub
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Monahans Sandhills &amp; Tourism</h3>
                <p className="text-gray-600 mb-4">
                  Monahans Sandhills State Park features sand dunes reaching 70 feet high, covering
                  3,840 acres of Shin Oak sand dunes. The park draws visitors year-round for sand
                  surfing, hiking, and camping, supporting local hotels, restaurants, and retail
                  businesses along I-20. These tourism-dependent commercial properties need roofing
                  that withstands the constant sand exposure unique to Monahans -- a challenge no
                  other city in our service area faces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">I-20 Corridor &amp; Oil Economy</h3>
                <p className="text-gray-600 mb-4">
                  Monahans sits on I-20 between Odessa (40 miles east) and Pecos (30 miles west),
                  serving as a critical logistics point for Permian Basin oil operations. The
                  corridor features truck stops, equipment yards, industrial facilities, and
                  commercial developments that require heavy-duty roofing. Ward County oil
                  production supports the local economy with well-paying jobs that drive residential
                  construction and home improvement investment.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Downtown Monahans</h4>
                <p className="text-sm text-gray-600">
                  Ward County Courthouse area and Main Street commercial buildings serving the local
                  community and oil field workforce
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">I-20 Commercial Strip</h4>
                <p className="text-sm text-gray-600">
                  Hotels, truck stops, restaurants, and service businesses along the interstate
                  serving travelers and oil field crews
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Residential Neighborhoods</h4>
                <p className="text-sm text-gray-600">
                  Established family neighborhoods and newer developments housing Ward County&apos;s
                  oil and gas workforce
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Monahans Roofing FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <AccordionItem
                  key={`item-${index + 1}`}
                  value={`item-${index + 1}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Monahans Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, storm damage assessment, emergency repairs,
              or a complete roof replacement, 5 Star Commercial Roofing serves Monahans with expert
              craftsmanship and honest pricing. We understand Permian Basin roofing better than
              anyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                Call (806) 622-6041 Now
              </a>
              <a
                href="/contact/"
                className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg"
              >
                Schedule Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Nearby Cities */}
        <FadeIn>
          <section className="section pb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a
                href="/odessa-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Odessa
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/midland-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Midland
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/andrews-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Andrews
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/big-spring-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Big Spring
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/service-areas/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                View All Service Areas
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/monahans-tx-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
            description:
              "Professional roofing contractor serving Monahans, Texas and Ward County. Heat-resistant roofing, oil field facility specialist, Permian Basin residential and commercial services.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Monahans",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "31.5943",
              longitude: "-102.8927",
            },
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            url: "https://5starroofingpros.com",
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
            ],
            areaServed: [
              {
                "@type": "City",
                name: "Monahans",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="monahans-tx-roofing" />
    </div>
  );
}
