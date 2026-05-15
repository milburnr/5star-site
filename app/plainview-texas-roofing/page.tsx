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
  alternates: { canonical: "https://5starroofingpros.com/plainview-texas-roofing/" },
  title: "Roofing in Plainview TX | 5 Star Roofing",
  description:
    "Roofing in Plainview. Hale County hail damage specialists. Residential and commercial roofing near Wayland Baptist University. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Plainview TX | 5 Star Roofing",
    description:
      "Roofing in Plainview. Hale County hail damage specialists. Residential and commercial roofing near Wayland Baptist University. Call (806) 622-6041",
    url: "https://5starroofingpros.com/plainview-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Plainview TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Plainview?",
    answer:
      "Plainview sits in the heart of the Texas South Plains hail corridor, where supercell storms regularly produce damaging hail between March and September. Baseball-sized hail is documented in Hale County most years, and Class 4 impact-resistant roofing materials are strongly recommended for any new installation or replacement in the area.",
  },
  {
    question: "Do you work on agricultural and cotton processing buildings in Plainview?",
    answer:
      "Yes, we install and repair commercial roofing for cotton gins, grain elevators, equipment warehouses, and processing facilities throughout Hale County. These properties need specialized systems — corrosion-resistant metal roofing, chemical-tolerant membranes, and enhanced ventilation — to handle dust accumulation, agricultural chemicals, and continuous-operation conditions.",
  },
  {
    question: "What roofing materials handle Plainview's elevation and UV best?",
    answer:
      "At approximately 3,400 feet elevation, Plainview receives more UV radiation than lower-elevation Texas cities, which accelerates the breakdown of asphalt binders. For residential homes we install UV-stabilized Class 4 impact-resistant shingles with enhanced granule adhesion. For commercial buildings, white TPO and PVC membranes reflect a high percentage of solar heat, helping reduce cooling loads while resisting UV degradation.",
  },
  {
    question: "How does the South Plains geography affect Plainview roofing?",
    answer:
      "Plainview sits on the flat, open South Plains between Amarillo and Lubbock, with very little terrain to break up wind flow. That open exposure means homes and businesses face sustained winds and gusts during storm events, so wind-uplift ratings and properly fastened decking matter as much as the shingle or membrane itself. We design installations for the local wind environment, not generic specs.",
  },
  {
    question: "How do you handle storm damage in Plainview?",
    answer:
      "After a storm in Plainview or Hale County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability; we are not an emergency-dispatch service.",
  },
  {
    question: "Do you serve Wayland Baptist University and Covenant Health Plainview?",
    answer:
      "Yes, we serve institutional facilities throughout Hale County including university campuses and healthcare buildings. Properties like Wayland Baptist University and Covenant Health Plainview need commercial-grade roofing scheduled around operational requirements — academic calendars, patient-care continuity, and life-safety equipment access. We coordinate phased installation work with facilities management for these projects.",
  },
  {
    question: "Will insurance cover my Plainview hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation with photographs, measurements, and detailed reports that meet adjuster requirements.",
  },
];

export default function PlainviewRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Plainview"
        citySlug="plainview"
        h1="Plainview Roofing Contractor on the I-27 South Plains Corridor"
        eyebrow="Wayland Baptist, Covenant Health & Hale County commercial + residential roofing"
        image="/images/heroes/cities/plainview-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Plainview", url: "/plainview-texas-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Plainview TX — residential and commercial repairs, roof replacement, and hail damage documentation for Hale County properties.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-plainview/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-plainview/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-plainview/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
              <a href="/lubbock-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Lubbock Roofing</a>
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
                Plainview Roofing for Hale County&apos;s University &amp; Hospital Belt
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Plainview, the Hale County seat with approximately 19,800 residents, sits on the
                Texas South Plains between Amarillo and Lubbock along I-27. Known as a regional
                agricultural hub and home to Wayland Baptist University, the city has a long
                history tied to cotton, grain, dairy, and cattle production. 5 Star Commercial
                Roofing provides comprehensive roofing services throughout Plainview and Hale
                County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Plainview&apos;s economy is anchored by agriculture and agribusiness, with cotton
                gins, grain elevators, dairy operations, and feed yards spread across Hale County.
                Wayland Baptist University, Plainview ISD, and Covenant Health Plainview contribute
                significantly to the local economy alongside retail, manufacturing, and logistics
                operations along the I-27 corridor. These institutional, industrial, and
                agricultural properties require specialized commercial roofing expertise — from TPO
                membrane systems on flat-roof facilities to corrosion-resistant metal roofing on
                gins, warehouses, and processing buildings.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                South Plains weather hits Plainview hard. The city sits at approximately 3,400 feet
                elevation on the flat, open High Plains, with very little terrain to break up wind
                flow or slow incoming storm cells. Between March and September, supercell storms
                produce damaging hail, straight-line winds, and occasional tornadoes. Summer
                temperatures regularly exceed 100 degrees, while winter lows can drop near zero,
                and intense UV radiation degrades roofing materials faster than in lower-elevation
                cities. These conditions demand expert installation and premium materials rated for
                extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Plainview</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              From architectural and Class 4 impact-rated asphalt shingles to standing seam metal,
              TPO, modified bitumen, and built-up roofing, we cover residential and commercial
              roofs across Plainview and Hale County. Select a service below for local details on
              materials, scheduling, and insurance coordination.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-plainview/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Plainview</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Plainview Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the historic downtown around Broadway and the Hale County Courthouse to the
                residential streets near Wayland Baptist University and the newer subdivisions
                pushing toward I-27, we work on roofs across every part of Plainview. The South
                Plains weather profile here means hail planning, UV-rated materials, and balanced
                attic ventilation matter on every install.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Established Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Historic Downtown District</li>
                    <li>&#10003; Wayland University area</li>
                    <li>&#10003; Quincy Street corridor</li>
                    <li>&#10003; Westgate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Central Neighborhoods</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Highland Park area</li>
                    <li>&#10003; Travis Trussell area</li>
                    <li>&#10003; Olton Road corridor</li>
                    <li>&#10003; Yonkers Street area</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; I-27 Corridor properties</li>
                    <li>&#10003; All Hale County</li>
                    <li>&#10003; Rural acreage &amp; farms</li>
                    <li>&#10003; Agricultural &amp; ranch properties</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The Wayland Baptist University area is one of Plainview&apos;s most established
                residential communities, while the I-27 corridor includes a growing mix of
                commercial and light-industrial properties. Whether you&apos;re near downtown,
                along Quincy Street, or anywhere in Hale County, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Plainview
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Spring &amp; Summer Hail Season
                </h3>
                <p className="text-gray-700">
                  Plainview and Hale County sit in the heart of the Texas South Plains hail
                  corridor. NWS Lubbock routinely documents severe hail events across the area
                  between March and September, with stones large enough to total residential and
                  commercial roofs in a single storm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  High Plains Wind Events
                </h3>
                <p className="text-gray-700">
                  Open South Plains terrain offers little resistance to incoming storm cells, so
                  Plainview also sees frequent straight-line wind damage alongside hail. Properly
                  fastened decking, sealed underlayment, and wind-rated systems make the difference
                  between minor and catastrophic loss after these events.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Texas Panhandle &amp; South Plains Pattern
                </h3>
                <p className="text-gray-700">
                  Across the broader Panhandle and South Plains region, Class 4 impact-resistant
                  shingles have become the standard recommendation for residential roof
                  replacements. Most homeowner insurance carriers in Texas offer a premium discount
                  for Class 4 installations, and those products substantially reduce the chance of
                  a total loss in repeat hail events.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Plainview homeowners and property managers should pull current NWS reports and
                county-level storm event data when documenting damage for an insurance claim.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Plainview-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Plainview &amp; Hale County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  South Plains Hail Corridor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Plainview&apos;s location on the Texas South Plains makes it a hotspot for
                  severe thunderstorms. Warm, moist air pushed northwest from the Gulf collides
                  with dry continental air, fueling supercell storms that produce large hail and
                  damaging winds. Baseball-sized hail is documented in Hale County most years.
                  Class 4 impact-resistant materials are strongly recommended for all Plainview
                  properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Agricultural &amp; Industrial Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Plainview&apos;s cotton, grain, and dairy economy means numerous agricultural
                  and industrial facilities requiring specialized roofing. From cotton gins to
                  grain elevators, feed yards, and dairy buildings, these properties need
                  corrosion-resistant metal roofing, dust-tolerant ventilation, and systems that
                  can handle continuous-operation environments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Heat &amp; UV Degradation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Plainview summers regularly push past 100 degrees, with roof surface temperatures
                  reaching 160 degrees or higher. Combined with intense High Plains UV radiation at
                  3,400 feet elevation and low humidity, these conditions accelerate the breakdown
                  of petroleum-based roofing materials. Reflective TPO and metal roofing systems
                  reduce cooling costs while providing superior durability against heat and UV
                  exposure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  University &amp; Healthcare Campuses
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wayland Baptist University and Covenant Health Plainview operate large
                  campus-style facilities that need institutional-grade roofing scheduled around
                  academic calendars and patient-care continuity. We plan tear-offs in phases,
                  coordinate with facilities and infection-control staff, and spec TPO, PVC, or
                  standing seam metal systems sized for long service life and UL 580 wind uplift
                  performance against South Plains storms.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Plainview City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Plainview: Hub of the Texas South Plains</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">I-27 Corridor &amp; Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Plainview&apos;s position along I-27 makes it a natural stopping point between
                  Amarillo and Lubbock. The I-27 corridor has attracted hotels, truck stops,
                  restaurants, and commercial developments that all require reliable commercial
                  roofing. The historic downtown district along Broadway and Quincy Street
                  features buildings from the early agricultural boom era that need specialized
                  roofing to maintain their architectural character while handling modern weather
                  extremes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  Wayland Baptist University anchors higher education in Plainview, with campus
                  buildings that need durable roofing solutions. Covenant Health Plainview serves
                  Hale County and the surrounding region and requires institutional-grade roofing
                  maintenance. Plainview ISD operates schools across the city, and the local
                  agricultural economy is anchored by cotton gins, grain elevators, dairy
                  operations, and feed yards — each with specialized commercial roofing needs.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Wayland University Area
                </h4>
                <p className="text-sm text-gray-600">
                  Residential properties and campus buildings near Wayland Baptist University
                  with mixed historic and modern roofing needs
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Historic Downtown District</h4>
                <p className="text-sm text-gray-600">
                  Early 20th-century commercial buildings along Broadway and Quincy Street
                  requiring careful restoration-quality roofing work
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Agricultural &amp; Processing Zone</h4>
                <p className="text-sm text-gray-600">
                  Cotton gins, grain elevators, and dairy facilities across Hale County requiring
                  corrosion-resistant roofing systems
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Plainview Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Plainview Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, repair work, or a
              complete roof replacement, 5 Star Commercial Roofing serves Plainview with expert
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
                href="/lubbock-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Lubbock
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
                href="/hereford-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Hereford
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
            "@id": "https://5starroofingpros.com/plainview-texas-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Plainview, Texas and Hale County. Hail and storm damage repair, residential and commercial roofing, agricultural facility specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Plainview",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "34.1845",
              longitude: "-101.7068",
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
                name: "Plainview",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Hale County",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="plainview-texas-roofing" />
    </div>
  );
}
