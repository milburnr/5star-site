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
  alternates: { canonical: "https://5starroofingpros.com/levelland-tx-roofing/" },
  title: "Roofing in Levelland TX | 5 Star Roofing",
  description:
    "Roofing in Levelland. Hockley County hail damage experts. Residential and commercial services near South Plains College. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Levelland TX | 5 Star Roofing",
    description:
      "Roofing in Levelland. Hockley County hail damage experts. Residential and commercial services near South Plains College. Call (806) 622-6041",
    url: "https://5starroofingpros.com/levelland-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/levelland-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
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
    question: "How often does Levelland get hail damage?",
    answer:
      "Levelland and Hockley County experience multiple severe hailstorms each year, typically between March and September. The South Plains region sits in Hail Alley, where warm Gulf moisture collides with dry Rockies air to produce supercell thunderstorms with large hail. The May 2024 event near Whiteface produced record-breaking stones west of Levelland.",
  },
  {
    question: "What roofing materials work best in Levelland's climate?",
    answer:
      "For residential properties, Class 4 impact-resistant asphalt shingles or standing seam metal roofing perform best against Levelland's hail, wind, and UV exposure at 3,500 feet elevation. For commercial buildings, TPO and PVC membranes offer excellent hail resistance and energy efficiency. All materials should be rated for high wind and extreme temperature cycling common on the South Plains.",
  },
  {
    question: "Do you serve South Plains College campus buildings?",
    answer:
      "Yes, we provide commercial roofing services for institutional buildings, student housing, and faculty residences in the South Plains College area. We understand the scheduling requirements and access considerations that campus projects demand, including working around academic calendars to minimize disruption to students and staff.",
  },
  {
    question: "How does cotton farming dust affect Levelland roofs?",
    answer:
      "Levelland is surrounded by cotton fields, and during planting, cultivation, and harvest seasons, significant dust is generated across Hockley County. This agricultural dust accumulates on roofs, fills gutters and valleys, and can trap moisture against roofing materials. The combination of cotton dust, red clay particles, and South Plains wind creates a gritty abrasive layer that accelerates granule loss on shingles. Annual maintenance and gutter cleaning are essential for Levelland properties.",
  },
  {
    question: "How do you handle storm damage in Levelland?",
    answer:
      "After a storm in Levelland or Hockley County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier and help homeowners navigate the Texas Prompt Payment Act timeline. Levelland is just 30 miles west of Lubbock, putting our service area within easy reach for routine roofing projects and post-storm inspections.",
  },
  {
    question: "Why do Levelland roofs fail faster than the manufacturer warranty suggests?",
    answer:
      "Manufacturer warranties assume average climate conditions. Levelland's combination of frequent hail impact, sustained 12-15 mph winds with 50+ mph gusts, intense UV at 3,500 feet, and temperature swings from sub-zero to over 100 degrees creates one of the most demanding roofing environments in Texas. Standard shingles rated for 25-30 years may only last 15-20 years on the South Plains. Impact-resistant and UV-stabilized products close this gap significantly.",
  },
  {
    question: "Will insurance cover hail damage to my Levelland roof?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation including photographs, measurements, and detailed reports that meet insurance adjuster requirements. Our team has a ",
  },
];

export default function LevellandRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Levelland"
        citySlug="levelland"
        h1="Levelland Roofing Services You Can Trust"
        eyebrow="Hockley County Hail Damage Experts & Full-Service Roofing Contractor"
        image="/images/heroes/cities/levelland-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Levelland", url: "/levelland-tx-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <div className="bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6 my-8">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
          <p className="text-gray-800 font-medium leading-relaxed mb-3">
            5 Star Roofing serves Levelland and Hockley County with full roofing services. South Plains storm corridor means hail damage is common — we handle inspections, insurance claims, and Class 4 replacements. South Plains College and agricultural facilities welcome.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/lubbock-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">← Lubbock Hub</a>
            <a href="/hail-damage-repair-levelland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Levelland Hail Repair</a>
            <a href="/commercial-roofing-levelland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
            <a href="/service-areas/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">All Service Areas</a>
          </div>
        </div>

        {/* Author byline */}
        <div className="mb-8 flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
          <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-white text-xs font-bold flex-shrink-0">BT</div>
          <span>Written by <span className="font-semibold text-gray-700">Ben Terhune</span>, Owner — 5 Star Roofing, Amarillo TX &nbsp;·&nbsp; Updated May 2026</span>
        </div>

        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Your Trusted Roofing Partner in Levelland, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Levelland, the Hockley County seat, is a thriving South Plains community of
                approximately 14,000 residents. Home to South Plains College and surrounded by
                cotton fields and oil operations, Levelland faces the same punishing weather
                patterns that challenge roofs across the South Plains region. 5 Star Commercial
                Roofing provides comprehensive roofing services throughout Levelland and Hockley
                County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Located just 30 miles west of Lubbock on US-385, Levelland sits on the Llano
                Estacado at approximately 3,500 feet elevation. The city&apos;s agricultural economy
                revolves around cotton, grain sorghum, and sunflowers, with a growing oil and gas
                sector supporting the local community. South Plains College, established in 1957,
                draws students from across the region and creates demand for quality roofing on
                campus buildings, student housing, and faculty residences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The South Plains prairie is wide open to severe weather systems that sweep across
                from the Rockies and the Gulf. Levelland regularly experiences hailstorms between
                March and September, with supercell thunderstorms producing golf ball to
                baseball-sized hail that can total a roof in minutes. Wind gusts exceeding 60 mph
                are common during spring storms, and the flat terrain offers no natural windbreaks.
                Summer temperatures routinely exceed 100 degrees, while winter brings occasional ice
                storms and sub-zero wind chills. These extreme conditions demand roofing materials
                and installation techniques specifically engineered for the South Plains climate.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Levelland</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout
              Levelland and Hockley County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-levelland/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Levelland</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Levelland Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the historic downtown grid to residential areas near South Plains College, we
                provide roofing services throughout all of Levelland:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Downtown &amp; Historic Core</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Courthouse Square area</li>
                    <li>&#10003; 8th &amp; 9th Street corridors</li>
                    <li>&#10003; Historic numbered streets</li>
                    <li>&#10003; Downtown commercial district</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">College &amp; Residential</h3>
                  <ul className="space-y-2">
                    <li>&#10003; College Avenue / SPC area</li>
                    <li>&#10003; Brentwood</li>
                    <li>&#10003; Tanglewood</li>
                    <li>&#10003; Clubview</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Greater Levelland</h3>
                  <ul className="space-y-2">
                    <li>&#10003; East Levelland growth areas</li>
                    <li>&#10003; South Levelland</li>
                    <li>&#10003; All Hockley County</li>
                    <li>&#10003; FM 300 &amp; US-385 properties</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The College Avenue corridor near South Plains College is one of Levelland&apos;s
                most populated streets with over 170 properties. Whether you&apos;re in the historic
                downtown grid, the residential subdivisions on the city&apos;s south side, or
                anywhere in Hockley County, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Hockley County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  May 28, 2024 &mdash; Record-Breaking 5-Inch Hail
                </h3>
                <p className="text-gray-700">
                  The largest hail ever recorded in Hockley County struck near Pettit on May 28,
                  2024&mdash;softball-sized stones measuring 5.00 inches. The same storm system
                  produced 3-inch hail at Pep and 1.75-inch hail at Whitharral. This was part of a
                  multi-cell outbreak across the South Plains.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  June 7, 2014 &mdash; $10 Million in Damage
                </h3>
                <p className="text-gray-700">
                  A severe hailstorm with 2.50-inch stones struck near Sundown in southern Hockley
                  County, causing $10 million in property damage&mdash;the single largest damage
                  event in the county&apos;s 25-year storm database.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  June 30, 2017 &mdash; Multi-Hazard Event
                </h3>
                <p className="text-gray-700">
                  A severe weather outbreak near Anton produced 2.75-inch hail alongside 80 mph
                  straight-line winds and flash flooding. Total damage reached $4.5 million with one
                  injury reported. This event demonstrated how Hockley County storms can combine
                  multiple hazards simultaneously.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  April 29, 2012 &mdash; 4.5-Inch Hail at Whitharral
                </h3>
                <p className="text-gray-700">
                  Baseball-sized hail measuring 4.50 inches struck near Whitharral&mdash;the
                  second-largest hail recorded in county history at the time. Properties along the
                  storm&apos;s path sustained severe roof damage.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Hockley County has recorded 184 hail events since 2000, averaging 7+ events per
                year, with $14.6 million in property damage and $50.5 million in crop damage.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Levelland-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Levelland &amp; Hockley County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Prairie Hailstorms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Levelland&apos;s position on the open South Plains makes it vulnerable to
                  supercell thunderstorms that produce large hail. The May 2024 storm near
                  Whiteface, just west of Levelland, brought record-breaking hailstones to the area.
                  These storms can appear rapidly and cause widespread damage to residential and
                  commercial roofs across Hockley County. Impact-resistant Class 4 shingles and
                  reinforced commercial membranes are essential for Levelland properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Agricultural Dust and Wind
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cotton farming and oil field activity generate significant dust that accumulates
                  on roofs and in gutters. Combined with sustained winds averaging 12-15 mph and
                  frequent gusts over 50 mph, Levelland roofs face constant stress from windborne
                  debris, granule erosion, and material fatigue. Proper ventilation and wind-rated
                  installation are critical for roof longevity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Levelland&apos;s semi-arid climate brings scorching summers with temperatures
                  above 100 degrees and cold winters with occasional ice storms. The 100+ degree
                  annual temperature range causes continuous thermal cycling that stresses roofing
                  materials, leading to cracking, curling, and premature failure of standard-grade
                  products. UV exposure at 3,500 feet elevation accelerates degradation further.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Levelland City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Levelland: South Plains College Town &amp; Cotton Country
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">South Plains College &amp; Community</h3>
                <p className="text-gray-600 mb-4">
                  South Plains College is the heart of Levelland, drawing students from across West
                  Texas and beyond. The campus features classroom buildings, dormitories, athletic
                  facilities, and the Texan Dome that all require commercial roofing maintenance and
                  periodic replacement. Faculty and staff housing in the surrounding neighborhoods
                  adds residential roofing demand. SPC&apos;s creative arts and technical programs
                  bring a youthful energy to the community, while the college&apos;s workforce
                  training programs support the region&apos;s agricultural and energy sectors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Cotton Economy &amp; Agriculture</h3>
                <p className="text-gray-600 mb-4">
                  Hockley County is one of the state&apos;s leading cotton-producing counties, and
                  Levelland serves as the commercial center for the surrounding agricultural
                  operations. Cotton gins, grain elevators, equipment dealers, and agricultural
                  supply companies line the highways leading into town. These agricultural
                  commercial buildings require durable metal roofing that handles dust accumulation,
                  large open spans, and the constant wind exposure of the South Plains. The annual
                  cotton harvest creates peak dust conditions that accelerate roof deterioration
                  across the entire city.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">US-385 Corridor</h4>
                <p className="text-sm text-gray-600">
                  Commercial development along US-385 connecting Levelland to Lubbock, including
                  retail, dining, and automotive businesses
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Downtown Levelland</h4>
                <p className="text-sm text-gray-600">
                  The Hockley County Courthouse square and surrounding commercial district with
                  established businesses and historic buildings
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Residential Growth Areas</h4>
                <p className="text-sm text-gray-600">
                  Newer residential neighborhoods on Levelland&apos;s east side closer to Lubbock,
                  with modern construction and growing families
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Levelland Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Levelland Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection after a hailstorm, emergency storm repairs, or
              a complete roof replacement, 5 Star Commercial Roofing is here to help Levelland
              homeowners and businesses. Most hail damage repairs are covered by insurance.
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
                href="/lubbock-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Lubbock
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
                href="/snyder-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Snyder
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
            "@id": "https://5starroofingpros.com/levelland-tx-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Levelland, Texas and Hockley County. Hail damage repair, residential and commercial roofing, South Plains College area specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Levelland",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "33.5873",
              longitude: "-102.3781",
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
                name: "Levelland",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="levelland-tx-roofing" />
    </div>
  );
}
