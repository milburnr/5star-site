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
  alternates: { canonical: "https://5starroofingpros.com/lubbock-tx-roofing/" },
  title: "Roofing in Lubbock TX | 5 Star Roofing",
  description:
    "Roofing in Lubbock. South Plains hail and wind specialists. Residential and commercial roofing serving Texas Tech and Lubbock County. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Lubbock TX | 5 Star Roofing",
    description:
      "Roofing in Lubbock. South Plains hail and wind specialists. Residential and commercial roofing serving Texas Tech and Lubbock County. Call (806) 622-6041",
    url: "https://5starroofingpros.com/lubbock-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/lubbock-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Lubbock TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Lubbock?",
    answer:
      "Lubbock sits in the heart of Hail Alley and recorded 273 hail reports within the past 12 months. Recent major events include the May 2024 storm that produced record-breaking hailstones across the South Plains and a June 2023 event with softball-sized hail near Woodrow. Golf ball to baseball-sized hail is common during the March-to-September storm season and can total residential and commercial roofs in minutes.",
  },
  {
    question: "Do you handle roofing for Texas Tech University area rental properties?",
    answer:
      "Yes. We work extensively with property owners and management companies in Tech Terrace, North and South Overton, and other university-area neighborhoods. We offer competitive pricing for multi-property portfolios, schedule work around the academic calendar to minimize tenant disruption, and install durable materials that hold up to the higher turnover typical of student rentals.",
  },
  {
    question: "What roofing materials handle Lubbock's wind and UV best?",
    answer:
      "For residential homes, Class 4 impact-resistant shingles with UV-stabilized granules and enhanced wind ratings perform best at Lubbock's 3,256-foot elevation with 260+ sunny days a year. For commercial buildings, white TPO or PVC membranes reflect a high percentage of solar heat and stand up to repeated hail. Standing-seam metal roofing is increasingly popular because it can be rated for winds up to 120 mph when properly installed.",
  },
  {
    question: "Why do roofs in Lubbock fail faster than in other Texas cities?",
    answer:
      "Lubbock roofs face a combination of factors that accelerate wear: intense UV radiation at 3,256 feet elevation, sustained winds averaging 12+ mph that constantly stress shingle adhesion, temperature swings exceeding 120 degrees annually, frequent hail impacts, and South Plains dust that clogs gutters and traps moisture. Standard shingles rated for 25 to 30 years often need replacement in 15 to 20 years here, which is why we recommend premium UV-stabilized materials.",
  },
  {
    question: "How do you handle storm damage in Lubbock?",
    answer:
      "After a storm in Lubbock or Lubbock County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — drone photos, granule-loss measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability and weather; we are not an emergency-dispatch service.",
  },
  {
    question: "What is the average cost of a roof replacement in Lubbock?",
    answer:
      "Roof replacement costs in Lubbock vary based on size, materials, and complexity. A typical 2,000 sq ft home with architectural shingles ranges from $8,000 to $15,000, while Class 4 impact-resistant shingles run $12,000 to $20,000. Most hail damage replacements in Lubbock are covered by insurance, with homeowners responsible only for their deductible. We provide free inspections and detailed written estimates before any work begins.",
  },
  {
    question: "Will insurance cover my Lubbock hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. Texas law gives you up to two years to file a hail damage claim. We provide comprehensive damage documentation with drone photography, measurements, and detailed reports that meet adjuster requirements for State Farm, Allstate, Farmers, USAA, and the other major carriers operating in Lubbock.",
  },
];

export default function LubbockRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Lubbock"
        citySlug="lubbock"
        h1="Lubbock Roofing Contractor — Hub City Hail & Wind Specialists"
        eyebrow="Storm recovery, replacement, and TPO/metal commercial roofing across the South Plains"
        image="/images/heroes/cities/lubbock-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Lubbock", url: "/lubbock-tx-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Lubbock TX &mdash; residential and commercial repairs, roof replacement, and hail damage documentation for Lubbock County properties in the South Plains.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
              <a href="/amarillo-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Amarillo Roofing</a>
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
                Lubbock Roofing for the South Plains Hub City
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Lubbock, the Lubbock County seat with approximately 257,000 residents, is the Hub
                City of the South Plains and home to Texas Tech University. Best known as Buddy
                Holly&apos;s hometown, Lubbock sits at the crossroads of I-27 and Loop 289 and
                anchors a regional economy built on higher education, agriculture, healthcare, and
                logistics. 5 Star Commercial Roofing provides comprehensive roofing services
                throughout Lubbock and Lubbock County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Lubbock&apos;s economy is anchored by Texas Tech University, the Texas Tech
                University Health Sciences Center, Covenant Health, and University Medical Center,
                along with substantial agricultural processing and warehousing operations along the
                Marsha Sharp Freeway and around Loop 289. These institutional and commercial
                properties require specialized commercial roofing expertise, from TPO and PVC
                membrane systems on flat-roof facilities to metal roofing on agricultural
                warehouses and maintenance buildings.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                South Plains weather hits Lubbock hard. The city sits at approximately 3,256 feet
                elevation on a flat, treeless plain that offers no wind break, placing it in the
                heart of Hail Alley. Between March and September, supercell storms produce
                damaging hail, straight-line winds frequently exceeding 50 mph, and occasional
                tornadoes. Lubbock recorded 273 hail reports in the past 12 months alone, with
                recent significant events including the May 2024 South Plains hailstorm and the
                June 2023 storm that dropped softball-sized hail near Woodrow. Summer temperatures
                regularly exceed 100 degrees, and the high-elevation UV exposure degrades roofing
                materials faster than in lower-elevation Texas cities. These conditions demand
                expert installation and premium materials rated for extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Lubbock</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout
              Lubbock and Lubbock County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-lubbock/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Lubbock</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Lubbock Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From historic neighborhoods near Texas Tech to newer developments on the city&apos;s
                growing edges, we provide expert roofing services throughout the Hub City:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">University &amp; Established Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Tech Terrace</li>
                    <li>&#10003; North &amp; South Overton</li>
                    <li>&#10003; Arnett Benson</li>
                    <li>&#10003; Clapp Park</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Central &amp; Upscale Neighborhoods</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Whisperwood</li>
                    <li>&#10003; Monterey</li>
                    <li>&#10003; Shadow Hills</li>
                    <li>&#10003; Lakeridge &amp; Preston Place</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Depot District / Downtown</li>
                    <li>&#10003; All Lubbock County</li>
                    <li>&#10003; Shallowater, Wolfforth, Idalou, New Deal</li>
                    <li>&#10003; Loop 289 corridor properties</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Tech Terrace is one of Lubbock&apos;s most established residential communities and
                Lubbock&apos;s first designated suburb, while Shadow Hills and Lakeridge anchor the
                upscale southwest. Whether you&apos;re near the Buddy Holly Center in the historic
                Depot District, around the LakeRidge Country Club, or anywhere in Lubbock County,
                we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Lubbock
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  May 2024 &mdash; Record-Breaking South Plains Hail
                </h3>
                <p className="text-gray-700">
                  A severe hailstorm produced record-breaking hailstones across the South Plains
                  region, with the most significant impacts west of Lubbock near Whiteface and
                  Levelland. Widespread residential and commercial roof damage occurred across
                  Lubbock County, with insurance carriers processing thousands of hail claims in
                  the weeks that followed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  June 2023 &mdash; Softball-Sized Hail Near Woodrow
                </h3>
                <p className="text-gray-700">
                  A supercell storm dropped 4-inch, softball-sized hail near Woodrow on the
                  southern edge of Lubbock County. The 2023 hail season was historically active,
                  with 141 days of large hail reported across the region &mdash; the highest count
                  documented since 2003.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Past 12 Months &mdash; 273 Hail Reports
                </h3>
                <p className="text-gray-700">
                  Lubbock County recorded 273 confirmed hail reports within the past 12 months from
                  NWS trained spotters and verified observers. Even quarter-sized hail causes
                  significant granule loss on standard asphalt shingles, leading to premature aging
                  and compromised water resistance over time.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Lubbock sits in the heart of Hail Alley, where Gulf moisture collides with dry
                Rocky Mountain air to fuel supercell thunderstorms throughout the spring and
                summer storm season.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Lubbock-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Lubbock &amp; the South Plains
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Hail Alley Storm Corridor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lubbock&apos;s position in the heart of Hail Alley means frequent, severe hail
                  events. Warm Gulf air collides with cooler, dry Rocky Mountain air over the
                  South Plains, creating ideal conditions for supercell thunderstorms and large
                  hail. With 273 hail reports in the past 12 months and recent events producing
                  softball-sized stones, Class 4 impact-resistant materials are strongly
                  recommended for all Lubbock properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Relentless High Winds
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lubbock ranks among America&apos;s windiest cities, with sustained winds
                  averaging 12+ mph year-round and frequent gusts exceeding 50 mph. The flat South
                  Plains topography offers zero wind breaks, allowing unobstructed airflow across
                  the region. These persistent winds create constant uplift pressure on roofing
                  materials, testing shingle adhesion and flashing integrity. Premium materials
                  with enhanced wind ratings and expert installation are essential.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Extreme Temperature Swings &amp; UV
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lubbock summers regularly push past 100 degrees, with roof surface temperatures
                  reaching 160 degrees or higher, while winter nights can plunge below zero.
                  Combined with intense UV radiation at 3,256 feet elevation and over 260 sunny
                  days a year, these conditions accelerate the breakdown of petroleum-based
                  roofing materials. Reflective TPO and metal roofing systems reduce cooling costs
                  and provide superior durability against this thermal cycling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  South Plains Dust &amp; Gutter Issues
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The South Plains is well known for dust storms that sandblast exposed surfaces
                  and accumulate in gutters and roof valleys. Dust traps moisture against roofing
                  materials and adds weight to gutters, leading to overflow during Lubbock&apos;s
                  occasional heavy rains. Proper gutter guards and regular maintenance are
                  essential for Lubbock properties and are part of every installation we
                  recommend.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Lubbock City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Lubbock: Hub City of the South Plains</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Texas Tech &amp; University Properties</h3>
                <p className="text-gray-600 mb-4">
                  Texas Tech University is central to Lubbock&apos;s identity and economy. We have
                  worked on properties throughout the campus footprint and surrounding
                  neighborhoods, including the area around Jones AT&amp;T Stadium, the Rawls
                  College of Business on Flint Avenue, and the Student Union Building at 15th
                  Street and Akron Avenue. Tech Terrace and North and South Overton contain
                  hundreds of student rental properties that require durable materials and
                  scheduling that works around the academic calendar.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  Beyond Texas Tech, Lubbock is anchored by University Medical Center, Covenant
                  Health, and the Texas Tech University Health Sciences Center &mdash; institutional
                  campuses that need ongoing commercial roofing services with minimal operational
                  disruption. The Marsha Sharp Freeway corridor and Loop 289 host warehouses,
                  retail centers, and agricultural-processing facilities, all of which require
                  specialized commercial roofing for the South Plains climate.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Texas Tech &amp; Tech Terrace
                </h4>
                <p className="text-sm text-gray-600">
                  University-adjacent residential and rental properties needing durable shingles
                  and ventilation upgrades for older construction
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Depot District &amp; Downtown</h4>
                <p className="text-sm text-gray-600">
                  Historic downtown buildings around the Buddy Holly Center requiring careful
                  restoration-quality roofing work
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Marsha Sharp &amp; Loop 289</h4>
                <p className="text-sm text-gray-600">
                  Warehouse, retail, and agricultural-processing facilities along the commercial
                  corridors needing TPO, PVC, and metal roofing systems
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Lubbock Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Lubbock Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, repair work, or a
              complete roof replacement, 5 Star Commercial Roofing serves Lubbock with expert
              craftsmanship and honest pricing. Most hail damage repairs are covered by insurance.
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
                href="/amarillo-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Amarillo
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/plainview-texas-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Plainview
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
            "@id": "https://5starroofingpros.com/lubbock-tx-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Lubbock, Texas and the South Plains. Hail damage repair, residential and commercial roofing, Texas Tech area specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lubbock",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "33.5779",
              longitude: "-101.8552",
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
                name: "Lubbock",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Lubbock County",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="lubbock-tx-roofing" />
    </div>
  );
}
