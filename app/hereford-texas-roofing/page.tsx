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
  alternates: { canonical: "https://5starroofingpros.com/hereford-texas-roofing/" },
  title: "Roofing in Hereford TX | 5 Star Roofing",
  description:
    "Roofing in Hereford. Deaf Smith County hail and wind damage specialists. Residential, commercial, and agricultural roofing in the Texas Panhandle. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Hereford TX | 5 Star Roofing",
    description:
      "Roofing in Hereford. Deaf Smith County hail and wind damage specialists. Residential, commercial, and agricultural roofing in the Texas Panhandle. Call (806) 622-6041",
    url: "https://5starroofingpros.com/hereford-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hereford-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Hereford TX — 5 Star Roofing",
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
    question: "How long does a typical roof last in Hereford?",
    answer:
      "Hereford's harsh climate at roughly 3,800 feet elevation with intense UV exposure and frequent hailstorms shortens roof lifespans. Standard asphalt shingles typically last 15-20 years, compared to 20-30 years in milder climates. Impact-resistant Class 4 shingles extend that to 25+ years, and metal roofing can last 40-70 years in Deaf Smith County conditions.",
  },
  {
    question: "How does Hereford's location on the Llano Estacado affect wind resistance?",
    answer:
      "Hereford sits on the Llano Estacado (Staked Plains) at approximately 3,800 feet elevation with virtually no natural windbreaks. This high plains exposure means sustained winds averaging 12-14 mph year-round, with spring gusts frequently exceeding 60 mph. Roofing systems in Hereford must be rated for high wind uplift, with enhanced nailing patterns, wind-rated underlayments, and materials tested to withstand 110+ mph wind speeds. Standard installations that work in sheltered locations will fail prematurely on the open plains around Hereford.",
  },
  {
    question: "How do feedlot dust and debris affect Hereford roofs?",
    answer:
      "Hereford is the Cattle Capital of the World, and the area's massive feedlot operations generate significant airborne particulate matter. This dust accumulates on roofs, clogs gutters and drainage systems, and can trap moisture against roofing materials, accelerating deterioration. We recommend annual roof cleanings and gutter maintenance for properties near feedlot operations, and sealed roofing systems like standing seam metal that resist particulate infiltration.",
  },
  {
    question: "What roofing materials work best for agricultural buildings near Hereford?",
    answer:
      "For Hereford's agricultural buildings, barns, and processing facilities, metal roofing is the clear choice. Standing seam and R-panel metal systems handle the large spans common in agricultural construction, resist wind uplift on exposed rural properties, and provide 40-50+ year lifespans with minimal maintenance. For temperature-controlled facilities like dairy operations, insulated metal panels reduce energy costs. TPO is an excellent option for flat-roof processing buildings that need chemical resistance.",
  },
  {
    question: "How do you handle storm damage in Hereford?",
    answer:
      "After a storm in Hereford or Deaf Smith County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability; we are not an emergency-dispatch service.",
  },
  {
    question: "Do you work on the JBS plant and other industrial facilities in Hereford?",
    answer:
      "Yes, we provide specialized commercial roofing for industrial facilities throughout Deaf Smith County, including beef processing plants, feedyard infrastructure, dairy operations, and grain storage. Industrial buildings in Hereford benefit from chemical-resistant TPO and PVC membranes, heavy-duty metal roofing, and systems designed to handle constant exposure to agricultural particulate and process exhaust.",
  },
  {
    question: "Will insurance cover my Hereford hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation with photographs, measurements, and detailed reports that meet adjuster requirements. We work with all major insurance carriers across Deaf Smith County and help homeowners navigate the Texas Prompt Payment Act timeline.",
  },
];

export default function HerefordRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Hereford"
        citySlug="hereford"
        h1="Hereford Roofing Company for Feedlot & Ag-Country Work"
        eyebrow="Feedlot, ag-facility & Deaf Smith County residential — Llano Estacado wind-rated"
        image="/images/heroes/cities/hereford-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Hereford", url: "/hereford-texas-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Hereford TX — residential and commercial repairs, roof replacement, agricultural metal roofing, and hail damage documentation for Deaf Smith County properties.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-hereford/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-hereford/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-hereford/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Hereford Roofing for Cattle-Country Properties
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Hereford, the Deaf Smith County seat with approximately 14,700 residents, sits on
                the Llano Estacado in the Texas Panhandle, about 45 miles southwest of Amarillo
                along US-60 and US-385. Known worldwide as the &quot;Cattle Capital of the
                World,&quot; Hereford anchors one of the largest concentrations of beef feeding and
                processing operations in North America. 5 Star Commercial Roofing provides
                comprehensive roofing services throughout Hereford and Deaf Smith County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hereford&apos;s economy runs on agriculture. Major beef processors including JBS USA
                and the Hereford Texas Feedyards complex anchor the local industrial base, alongside
                large-scale dairy operations, grain elevators, and sugar beet processing. These
                facilities &mdash; plus the homes, churches, schools, and storefronts that support
                the workforce &mdash; require specialized roofing expertise. From TPO membrane
                systems on processing buildings to standing-seam metal on barns and feedyard
                infrastructure to impact-resistant residential shingles, the work in Hereford spans
                every category of roofing we install.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Texas Panhandle weather hits Hereford hard. The city sits at roughly 3,800 feet
                elevation on the flat, exposed Llano Estacado where there are no natural
                windbreaks in any direction. Between March and September, supercell storms produce
                damaging hail, straight-line winds exceeding 60 mph, and occasional tornadoes. Deaf
                Smith County averages 8-12 hailstorms per year, with stones often exceeding 2
                inches. Summer temperatures regularly exceed 100 degrees, winter lows dip below
                zero, and intense high-altitude UV radiation degrades roofing materials faster than
                in lower-elevation cities. These conditions demand expert installation and premium
                materials rated for extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Hereford</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential, commercial, and agricultural roofing services
              throughout Hereford and Deaf Smith County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-hereford/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Hereford</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Hereford Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the historic Main Street district to the residential streets around Whiteface
                Stadium to the agricultural properties along US-385, we provide expert roofing
                services throughout Hereford:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Central &amp; Historic Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Downtown Main Street Corridor</li>
                    <li>&#10003; Deaf Smith County Courthouse District</li>
                    <li>&#10003; Whiteface Stadium Area</li>
                    <li>&#10003; Hereford High School Neighborhood</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Residential Neighborhoods</h3>
                  <ul className="space-y-2">
                    <li>&#10003; South Hereford Growth Areas</li>
                    <li>&#10003; Northwest Residential</li>
                    <li>&#10003; East Park &amp; Veterans Park area</li>
                    <li>&#10003; Established West Side</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; US-385 Agricultural Corridor</li>
                    <li>&#10003; All Deaf Smith County</li>
                    <li>&#10003; US-60 Corridor properties</li>
                    <li>&#10003; Feedyards, ranches &amp; rural acreage</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The neighborhoods around Whiteface Stadium and Hereford High School represent the
                core of the city&apos;s residential community, while the agricultural outskirts
                along US-385 and surrounding county roads anchor the feedlot and dairy economy.
                Whether you&apos;re downtown, on the south side, or anywhere in Deaf Smith County,
                we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail &amp; Wind Events in Hereford
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Spring 2024 &mdash; Panhandle Hail Outbreak
                </h3>
                <p className="text-gray-700">
                  Deaf Smith County recorded multiple severe hail events during the spring 2024
                  storm season, with stones reaching 2 inches across rural sections of the county.
                  Residential and agricultural properties across Hereford reported widespread
                  granule loss, gutter damage, and bruised shingles requiring full roof
                  replacements documented through insurance claims.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Recurring Spring Wind Events &mdash; Llano Estacado
                </h3>
                <p className="text-gray-700">
                  Each spring, Hereford experiences sustained high-wind events driven by frontal
                  passages across the open plains. Gusts in excess of 60 mph regularly cause
                  shingle uplift, flashing failures, and detached ridge caps on properties without
                  high-wind-rated installations. These events are routine rather than rare on the
                  Staked Plains.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Ongoing Hail Climatology &mdash; Deaf Smith County
                </h3>
                <p className="text-gray-700">
                  Deaf Smith County sits in one of the most active hail regions in the United
                  States, averaging 8-12 documented hail events per year. NWS Amarillo logs
                  multiple severe thunderstorm warnings each storm season for the Hereford area,
                  and most homes in the county will see at least one insurance-eligible hail event
                  in any given decade.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                The Texas Panhandle is one of the most hail-prone regions in the country. Class 4
                impact-resistant materials are strongly recommended for all Hereford properties.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Hereford-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Hereford &amp; Deaf Smith County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Llano Estacado Wind Exposure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hereford sits on the Llano Estacado (Staked Plains) at roughly 3,800 feet
                  elevation with virtually no natural windbreaks in any direction. Sustained winds
                  average 12-14 mph year-round, with spring gusts frequently exceeding 60 mph.
                  Roofing systems must be rated for high wind uplift, with enhanced nailing
                  patterns, wind-rated underlayments, and materials tested to withstand 110+ mph
                  wind speeds. Standard installations that work in sheltered locations will fail
                  prematurely on the open plains around Hereford.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Severe Hail in the Texas Panhandle
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Deaf Smith County experiences some of the most frequent hail activity in the
                  United States, averaging 8-12 hailstorms per year with stones often exceeding
                  2 inches in diameter. This constant bombardment creates granule loss, bruising,
                  and fractures in asphalt shingles that compromise waterproofing. Class 4
                  impact-resistant shingles can reduce damage significantly and may qualify
                  Hereford homeowners for insurance discounts of 10-30%.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Agricultural &amp; Industrial Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hereford&apos;s cattle, dairy, and grain economy means numerous large-span
                  industrial and agricultural facilities requiring specialized roofing. From the
                  JBS beef processing plant to feedyard infrastructure, dairy parlors, grain
                  elevators, and sugar beet operations, these properties need chemical-resistant
                  membranes, heavy-duty metal roofing, and systems that handle constant exposure
                  to agricultural particulate and process exhaust.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Feedlot Dust &amp; UV at Elevation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At 3,806 feet with more than 260 sunny days per year, Hereford roofs face
                  relentless UV radiation significantly more intense than at sea level &mdash;
                  exposure that degrades asphalt shingles faster than in lower-elevation climates.
                  Layered on top, the area&apos;s massive feedlot operations generate airborne
                  particulate matter that clogs gutters, traps moisture, and accelerates wear.
                  Reflective metal systems and disciplined annual maintenance are essential for
                  long roof life in Hereford.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Hereford City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Hereford: Cattle Capital of the World</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">US-60 &amp; US-385 Corridors</h3>
                <p className="text-gray-600 mb-4">
                  Hereford sits at the junction of US-60 and US-385 in the southwest Panhandle,
                  about 45 miles from Amarillo. These corridors carry agricultural freight,
                  feedyard service traffic, and connect Hereford to Clovis, Friona, Dimmitt, and
                  Canyon. The highways have attracted truck stops, restaurants, and commercial
                  developments &mdash; all requiring reliable commercial roofing rated for
                  Panhandle weather extremes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  JBS USA operates one of the largest beef processing plants in the country in
                  Hereford, and Hereford Texas Feedyards anchors the surrounding feedlot
                  ecosystem. Deaf Smith County Hospital provides regional healthcare, the Hereford
                  Independent School District is a major employer, and Caviness Beef Packers,
                  dairy operations, and grain processors round out the industrial base. Each
                  category &mdash; processing plants, healthcare campuses, schools, agricultural
                  facilities &mdash; demands a different roofing system, and we install them all.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Whiteface Stadium &amp; School District
                </h4>
                <p className="text-sm text-gray-600">
                  Residential neighborhoods and Hereford ISD campus buildings requiring
                  impact-resistant shingles and high-wind-rated installations
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Historic Downtown District</h4>
                <p className="text-sm text-gray-600">
                  Mid-20th-century commercial buildings along Main Street and the Deaf Smith
                  County Courthouse area requiring careful restoration-quality roofing
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Agricultural &amp; Industrial Zone
                </h4>
                <p className="text-sm text-gray-600">
                  JBS plant, feedyards, dairy parlors, and grain elevators requiring
                  chemical-resistant TPO and heavy-gauge metal roofing systems
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Hereford Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Hereford Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, or a complete roof
              replacement, 5 Star Commercial Roofing serves Hereford with expert craftsmanship and
              honest pricing. Most hail damage repairs are covered by insurance.
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
                href="/canyon-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Canyon
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/dumas-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Dumas
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/plainview-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Plainview
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
            "@id": "https://5starroofingpros.com/hereford-texas-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Hereford, Texas and Deaf Smith County. Hail and wind damage repair, residential and commercial roofing, agricultural and industrial facility specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hereford",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "34.8150",
              longitude: "-102.3974",
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
                name: "Hereford",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Deaf Smith County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="hereford-texas-roofing" />
    </div>
  );
}
