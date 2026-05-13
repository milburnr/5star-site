import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
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
  alternates: { canonical: "https://5starroofingpros.com/pampa-texas-roofing/" },
  title: "Roofing in Pampa TX | 5 Star Roofing",
  description:
    "Roofing in Pampa. Gray County hail damage specialists. Residential, commercial, and industrial roofing in the Texas Panhandle. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Pampa TX | 5 Star Roofing",
    description:
      "Roofing in Pampa. Gray County hail damage specialists. Residential, commercial, and industrial roofing in the Texas Panhandle. Call (806) 622-6041",
    url: "https://5starroofingpros.com/pampa-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Pampa TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Pampa?",
    answer:
      "Pampa sits in the heart of the Texas Panhandle hail belt and experiences severe hailstorms multiple times per year. Spring and early summer supercell storms regularly produce golf ball to baseball-sized hail capable of totaling residential and commercial roofs in a single event. Gray County properties typically see damaging hail somewhere in the county every season.",
  },
  {
    question: "Do you work on chemical plants and industrial buildings in Pampa?",
    answer:
      "Yes. Pampa's industrial base includes large petrochemical and carbon black operations, and we provide commercial roofing for industrial facilities throughout Gray County. We install chemical-resistant membranes, heavy-duty metal roofing, and TPO systems suited for plants with high-traffic roof access and emissions exposure. Project scoping, safety coordination, and contractor qualifications are arranged in advance through facility management.",
  },
  {
    question: "What roofing materials handle Pampa's weather best?",
    answer:
      "For residential homes, UV-stabilized Class 4 impact-resistant shingles or standing-seam metal roofing perform best against Panhandle hail and wind. For commercial buildings, white TPO or PVC membranes reflect solar heat and reduce cooling costs in Pampa's 100-degree summers. Both options handle the extreme temperature swings — sub-zero winters to triple-digit summers — that wear out lower-spec materials early.",
  },
  {
    question: "How do high winds in the Panhandle affect Pampa roofing?",
    answer:
      "Pampa regularly sees sustained winds above 50 mph and gusts exceeding 70 mph, especially during spring storm season. Wide-open Panhandle terrain offers little wind break, so roofs need proper wind uplift ratings, six-nail shingle patterns, and ring-shank or coil-nail fastening on decking. We install systems rated for the actual wind loads Gray County properties experience, not just code minimums.",
  },
  {
    question: "How do you handle storm damage in Pampa?",
    answer:
      "After a storm in Pampa or Gray County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability and adjuster sign-off; we are not an emergency-dispatch service.",
  },
  {
    question: "Do you serve rural Gray County and surrounding ranches?",
    answer:
      "Yes. We work on agricultural buildings, ranch homes, equipment storage, and oil and gas facilities throughout rural Gray County. Large metal building roofing, ag-rated panel systems, and standing-seam metal roofs are common in this terrain, and we handle the wider service-call radius that rural Panhandle work requires.",
  },
  {
    question: "Will insurance cover my Pampa hail damage?",
    answer:
      "Most homeowner and commercial property policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation — photographs, measurements, and detailed reports — that meet adjuster requirements. We work directly with your carrier and walk Pampa homeowners through the Texas claims process from inspection to final scope approval.",
  },
];

export default function PampaRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Pampa", url: "/pampa-texas-roofing/" },
        ]}
      />

      <StickyContactBar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-23-1280w.webp)",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Pampa Roofing Contractor &mdash; Oilfield &amp; Downtown Specialists</h1>
            <p className="hero-subtitle">
              Gray County residential, oilfield service-yard metal, and historic-downtown commercial roofing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero">
                Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero">
                Get Free Inspection
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Pampa TX — residential and commercial repairs, roof replacement, and hail damage documentation for Gray County properties.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-pampa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-pampa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-pampa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Pampa Roofing for Oil-Patch and Home
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Pampa, the Gray County seat with approximately 16,800 residents, sits roughly 55
                miles northeast of Amarillo in the Texas Panhandle. The city was founded in 1902
                and grew into an industrial center after the Worley-Reynolds #1 oil well launched
                the local oil boom. Pampa is also known as the hometown of folk musician Woody
                Guthrie. 5 Star Commercial Roofing provides comprehensive roofing services
                throughout Pampa, Gray County, and the surrounding Panhandle.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Pampa&apos;s economy is anchored by petrochemical and carbon black manufacturing,
                oil and gas operations, and agriculture. Major industrial employers including
                Celanese Corporation and Cabot Corporation have operated facilities here for
                decades. These industrial properties — along with oilfield service yards, the
                county courthouse, and the Clarendon College Pampa Center — require specialized
                commercial roofing, from chemical-resistant TPO membrane systems on flat-roof
                plants to heavy-gauge metal roofing on warehouses and equipment buildings.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Panhandle weather hits Pampa hard. Gray County sits in one of the most active hail
                corridors in the country, and between March and September supercell storms produce
                damaging hail, straight-line winds exceeding 70 mph, and occasional tornadoes.
                Summer temperatures regularly climb past 100 degrees while winter overnight lows
                drop well below freezing, putting roofing materials through severe expansion and
                contraction cycles. These conditions demand expert installation and premium
                materials rated for extreme Panhandle weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Pampa</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential, commercial, and industrial roofing services
              throughout Pampa and Gray County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-pampa/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Pampa</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Pampa Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the historic downtown core to residential streets and the industrial corridor
                on the city&apos;s edges, we provide expert roofing services throughout Pampa:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Downtown &amp; Civic Core</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Downtown Pampa Historic District</li>
                    <li>&#10003; Gray County Courthouse area</li>
                    <li>&#10003; Main Street commercial buildings</li>
                    <li>&#10003; Clarendon College Pampa Center area</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Residential Pampa</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Established family neighborhoods</li>
                    <li>&#10003; School-zone residential streets</li>
                    <li>&#10003; West Pampa homes</li>
                    <li>&#10003; East Pampa homes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Industrial &amp; Rural Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Industrial District (chemical plants)</li>
                    <li>&#10003; Oilfield service yards</li>
                    <li>&#10003; All Gray County</li>
                    <li>&#10003; Rural acreage &amp; ranches</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The Industrial District on Pampa&apos;s edge houses long-running petrochemical and
                carbon black operations, while the downtown courthouse area and Main Street feature
                buildings dating to the oil-boom era. Whether you&apos;re in central Pampa, along
                the residential streets, or anywhere in Gray County, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Hail &amp; Wind Events in Pampa
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Spring &amp; Summer Supercell Season
                </h3>
                <p className="text-gray-700">
                  Gray County sits in one of the most active hail corridors in the country. Between
                  March and September, warm Gulf moisture meeting dry Panhandle air fuels supercell
                  thunderstorms that regularly produce golf ball to baseball-sized hail. Pampa
                  typically sees multiple damaging hail events each storm season.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Straight-Line Wind Damage
                </h3>
                <p className="text-gray-700">
                  Open Panhandle terrain offers little wind break, and Pampa regularly sees
                  sustained winds above 50 mph and gusts exceeding 70 mph during spring storm
                  outbreaks. Straight-line winds strip shingles, peel metal panels at the seams, and
                  load up wind-damaged roofs that may not show obvious damage from the ground.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Winter Freeze &amp; Thaw Cycles
                </h3>
                <p className="text-gray-700">
                  Pampa winters drop well below freezing while summer roof surface temperatures
                  routinely top 150 degrees. That severe expansion-and-contraction cycle accelerates
                  shingle cracking, opens up flashing seams, and shortens the service life of any
                  roof installed with lower-spec materials or shortcut details.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Schedule a free inspection after any major storm — much of the damage that drives
                insurance claims in Pampa is invisible from the ground.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Pampa-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Pampa &amp; Gray County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Panhandle Hail Corridor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pampa&apos;s location in the Texas Panhandle puts it in one of the country&apos;s
                  most active hail zones. Spring and summer supercells produce large hail and
                  damaging winds capable of totaling a roof in a single event. Class 4
                  impact-resistant materials are strongly recommended for all Pampa properties, and
                  most insurance carriers offer premium discounts for upgrading.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Chemical Plant &amp; Industrial Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pampa&apos;s industrial base — including Celanese Corporation, Cabot Corporation,
                  and oilfield service operations — means numerous commercial and industrial
                  facilities that need specialized roofing. Chemical-resistant TPO and PVC
                  membranes, heavy-duty metal roofing, and systems engineered for high-traffic roof
                  access and emissions exposure are the norm for these properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Wind, Heat &amp; Temperature Swings
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pampa summers regularly push past 100 degrees with roof surface temperatures
                  reaching 160 degrees or higher, while winters drop well below freezing. Combined
                  with high winds and intense UV, these conditions accelerate the breakdown of
                  lower-spec roofing materials. Reflective TPO, metal, and Class 4 shingle systems
                  provide superior durability and lower cooling costs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Historic Downtown Buildings
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pampa&apos;s downtown core includes buildings dating to the early oil-boom era
                  that need careful restoration-quality roofing work. Custom fabrication, specialty
                  materials, and attention to historical appearance are often required alongside
                  modern weatherproofing performance and current code compliance.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Pampa City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Pampa: Industrial Heart of the Panhandle</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">City Profile &amp; History</h3>
                <p className="text-gray-600 mb-4">
                  Pampa was founded in 1902 and incorporated in 1912, taking its name from the
                  Quechua word for &quot;plain.&quot; The local economy transformed from
                  agriculture to industry after the Worley-Reynolds #1 oil well launched the
                  Panhandle oil boom in the 1920s. The city is also known as the hometown of
                  folk-music icon Woody Guthrie. Pampa serves as the seat of Gray County and is a
                  commercial hub for surrounding Panhandle communities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  Pampa&apos;s industrial base is anchored by Celanese Corporation (petrochemicals)
                  and Cabot Corporation (carbon black, operating in Pampa since 1927), alongside
                  multiple oil and gas operators and oilfield service companies. The Gray County
                  Courthouse, county offices, and Clarendon College Pampa Center provide
                  institutional anchors. Each of these property types has distinct commercial
                  roofing requirements.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Industrial District
                </h4>
                <p className="text-sm text-gray-600">
                  Petrochemical and carbon black manufacturing facilities requiring
                  chemical-resistant membranes and industrial-grade metal roofing systems
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Downtown Historic District</h4>
                <p className="text-sm text-gray-600">
                  Early 20th-century commercial buildings along Main Street and the courthouse
                  square requiring careful restoration-quality roofing work
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Rural Gray County</h4>
                <p className="text-sm text-gray-600">
                  Ranches, farms, and oil and gas operations needing large metal building roofing,
                  equipment storage, and agricultural roof systems
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Pampa Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Pampa Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, repair work, or a
              complete roof replacement, 5 Star Commercial Roofing serves Pampa with expert
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
                href="/canyon-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Canyon
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/borger-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Borger
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
            "@id": "https://5starroofingpros.com/pampa-texas-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Pampa, Texas and Gray County. Hail and wind damage repair, residential and commercial roofing, chemical plant and industrial facility specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pampa",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "35.5359",
              longitude: "-100.9598",
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
                name: "Pampa",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Gray County",
              },
              {
                "@type": "AdministrativeArea",
                name: "Carson County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="pampa-texas-roofing" />
    </div>
  );
}
