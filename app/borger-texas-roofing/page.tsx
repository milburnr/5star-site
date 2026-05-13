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
  alternates: { canonical: "https://5starroofingpros.com/borger-texas-roofing/" },
  title: "Roofing in Borger TX | 5 Star Roofing",
  description:
    "Roofing in Borger. Hutchinson County storm damage specialists. Residential, commercial, and petrochemical facility roofing in the Texas Panhandle. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Borger TX | 5 Star Roofing",
    description:
      "Roofing in Borger. Hutchinson County storm damage specialists. Residential, commercial, and petrochemical facility roofing in the Texas Panhandle. Call (806) 622-6041",
    url: "https://5starroofingpros.com/borger-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Borger TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Borger?",
    answer:
      "Borger sits in the heart of the Texas Panhandle hail corridor and experiences severe hailstorms multiple times each spring and summer. Supercell storms moving across Hutchinson County regularly produce hail from golf ball to baseball size, and Class 4 impact-resistant shingles or metal roofing are strongly recommended for any Borger property. Standard 3-tab shingles often fail in a single significant hail event.",
  },
  {
    question: "Do you work on petrochemical and industrial facilities in Borger?",
    answer:
      "Yes. Borger's economy is anchored by the Phillips 66 refinery and Chevron Phillips Chemical complex, and we provide specialized commercial roofing for industrial facilities throughout Hutchinson County. We install chemical-resistant TPO and EPDM membranes, high-temperature coatings, and heavy-duty metal roofing designed for refinery and chemical plant environments. Our crews follow plant safety protocols and coordinate with facility safety personnel for on-site work.",
  },
  {
    question: "What roofing materials handle the Panhandle climate best?",
    answer:
      "For Borger homes, Class 4 impact-resistant shingles or standing-seam metal roofing perform best against the region's hail and high winds. For commercial buildings, reflective white TPO and PVC membranes handle the temperature swings between sub-zero winters and 100-degree-plus summers while reducing cooling loads. Wind-rated installation details matter as much as the material itself in Hutchinson County, where gusts above 70 mph are common.",
  },
  {
    question: "How does Borger's industrial environment affect roof choice?",
    answer:
      "Properties near the Phillips 66 refinery and Chevron Phillips complex face additional considerations beyond weather. Airborne particulates and occasional chemical exposure can degrade standard petroleum-based roofing materials faster than in non-industrial areas. We recommend chemical-resistant membranes for commercial properties in the industrial district and premium UV-stabilized materials for nearby residential neighborhoods. Roof inspections every 2-3 years are advisable for properties within close range of the complex.",
  },
  {
    question: "How do you handle storm damage in Borger?",
    answer:
      "After a storm in Borger or Hutchinson County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability and crew capacity; we are not an emergency-dispatch service and we do not chase storms.",
  },
  {
    question: "Do you serve rural Hutchinson County and ranch properties?",
    answer:
      "Yes. We serve agricultural and ranch properties throughout rural Hutchinson County, including the areas around Lake Meredith and the Canadian River. Metal roofing and large-span commercial systems are typical for barns, equipment storage, and outbuildings, and we provide the same documentation and warranty workflow for rural properties as we do for in-town homes. Travel from our Amarillo base to anywhere in Hutchinson County is standard scope for our service area.",
  },
  {
    question: "Will insurance cover my Borger hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation with photographs, measurements, and detailed reports that meet adjuster requirements. For properties near Phillips 66 and Chevron Phillips, we also document any industrial wear factors that may interact with storm damage on the same roof.",
  },
];

export default function BorgerRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Borger", url: "/borger-texas-roofing/" },
        ]}
      />

      <StickyContactBar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-31-1280w.webp)",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Borger Roofing Contractor for Hutchinson County&apos;s Oil Patch</h1>
            <p className="hero-subtitle">
              Industrial-facility roofs, storm repair, and Phillips 66 / CPChem corridor commercial work
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
              5 Star Roofing provides full roofing services in Borger TX — residential and commercial repairs, roof replacement, and hail damage documentation for Hutchinson County properties, including specialized work near the Phillips 66 and Chevron Phillips complex.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/amarillo-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Amarillo Hub</a>
              <a href="/roof-replacement-borger/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-borger/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-borger/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Borger&apos;s Industrial-Strength Roofing Market
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Borger, the seat of Hutchinson County with a population of roughly 12,000, sits about
                50 miles north of Amarillo in the heart of the Texas Panhandle. Founded in March 1926
                during the Panhandle oil boom by Ace Borger, the city remains one of the largest
                inland petrochemical centers in the country. 5 Star Commercial Roofing provides
                comprehensive roofing services throughout Borger and Hutchinson County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Borger&apos;s economy is anchored by one of the world&apos;s largest inland
                petrochemical complexes, with the Phillips 66 Borger Refinery, Chevron Phillips
                Chemical, and Solvay USA among the major industrial employers. These facilities
                require specialized commercial roofing expertise, from chemical-resistant TPO and
                EPDM membranes on process buildings to heavy-duty metal roofing on warehouses and
                maintenance structures. The historic downtown district, established during the 1926
                oil rush, includes commercial buildings that need careful, restoration-grade roofing
                work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Panhandle weather hits Borger hard. Between March and September, supercell storms
                roll across Hutchinson County producing damaging hail, straight-line winds above 70
                mph, and occasional tornadoes. Summer temperatures regularly exceed 100 degrees while
                winters can drop below zero, and the area receives intense UV radiation that degrades
                roofing materials faster than in milder climates. Properties near Lake Meredith and
                along the Canadian River face additional wind exposure from the open terrain. These
                conditions demand expert installation and premium materials rated for extreme
                weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Borger</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout
              Borger and Hutchinson County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-borger/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Borger</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Borger Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the historic 1926 townsite established by Ace Borger to the newer residential
                areas serving petrochemical workers and their families, we provide expert roofing
                services throughout Hutchinson County:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Historic &amp; Central</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Historic Downtown Borger</li>
                    <li>&#10003; Original 1926 Townsite</li>
                    <li>&#10003; Central Business District</li>
                    <li>&#10003; Main Street Corridor</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Residential Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Suburban Borger Neighborhoods</li>
                    <li>&#10003; Petrochemical Worker Communities</li>
                    <li>&#10003; Modern Subdivisions</li>
                    <li>&#10003; Family Residential Zones</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Industrial &amp; Surrounding</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Phillips 66 / Chevron Phillips Zone</li>
                    <li>&#10003; Canadian River Industrial Corridor</li>
                    <li>&#10003; Lake Meredith Area</li>
                    <li>&#10003; Rural Hutchinson County</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The historic downtown district features architecture dating to the 1926 oil boom,
                while the residential neighborhoods house thousands of families connected to the
                petrochemical industry. Whether you&apos;re near Phillips 66, along the Canadian
                River, out near Lake Meredith, or anywhere in Hutchinson County, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Severe Weather in Borger &amp; Hutchinson County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Spring &amp; Summer Hail Season
                </h3>
                <p className="text-gray-700">
                  Hutchinson County sits in the heart of the Texas Panhandle hail corridor. Between
                  March and September, supercell storms regularly produce hail from golf ball to
                  baseball size across Borger and surrounding rural areas. Multiple significant hail
                  events typically occur each season, and standard 3-tab shingles routinely fail in a
                  single major storm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  High Wind Events
                </h3>
                <p className="text-gray-700">
                  Sustained winds above 50 mph and gusts exceeding 70 mph are common in the open
                  Panhandle terrain around Borger. Improperly installed shingles tear off in these
                  conditions, and properties near Lake Meredith and the Canadian River face
                  additional wind exposure from the unobstructed plains. Wind-rated installation
                  details matter as much as the material itself for Hutchinson County roofs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Temperature Extremes &amp; UV
                </h3>
                <p className="text-gray-700">
                  Borger sees the full Panhandle temperature range — sub-zero winters and summers
                  regularly above 100 degrees, with intense UV radiation year-round. Roofing
                  materials must expand and contract through that swing without cracking, and
                  petroleum-based shingles degrade faster here than in milder climates.
                  Impact-resistant materials with UV-stable formulations consistently outperform
                  budget alternatives in this environment.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                The combination of hail, high winds, and temperature extremes makes Class 4
                impact-resistant materials the practical baseline for Borger properties.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Borger-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Borger &amp; Hutchinson County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Texas Panhandle Hail Corridor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Borger&apos;s location in the Texas Panhandle places it squarely in one of the
                  most active hail corridors in the United States. Supercell storms developing across
                  the high plains regularly produce baseball-sized hail and damaging straight-line
                  winds. Class 4 impact-resistant shingles or standing-seam metal roofing are
                  strongly recommended for all Borger properties, and homeowner insurance discounts
                  for impact-rated materials typically offset much of the cost difference over the
                  life of the roof.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Petrochemical &amp; Industrial Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Borger hosts one of the largest inland petrochemical complexes in the country,
                  with Phillips 66, Chevron Phillips Chemical, and Solvay USA operating major
                  facilities. These properties require specialized roofing — chemical-resistant TPO
                  and EPDM membranes, high-temperature coatings, vapor barrier systems, and metal
                  roofing designed for industrial environments. Our crews follow plant safety
                  protocols and coordinate with facility safety personnel on every industrial
                  project.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Historic 1926 Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Downtown Borger includes commercial buildings dating to the original 1926 oil
                  boom. These structures often have low-slope or built-up roofs of varying age and
                  condition, and they require careful, restoration-grade work to maintain their
                  architectural character while handling modern Panhandle weather. We document
                  existing conditions before any work begins on historic properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Heat &amp; UV Degradation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Borger summers regularly push past 100 degrees, with roof surface temperatures
                  reaching 160 degrees or higher. Combined with intense UV radiation and low
                  humidity, these conditions accelerate the breakdown of petroleum-based roofing
                  materials. Reflective TPO and metal roofing systems reduce cooling costs while
                  providing superior durability against heat and UV exposure.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Borger City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Borger: Oil Boom Heritage &amp; Modern Industry</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">From 1926 Oil Rush to Today</h3>
                <p className="text-gray-600 mb-4">
                  Borger was founded in March 1926 by Ace Borger after oil discovery in the
                  Panhandle. Within 90 days, the population reportedly reached 45,000 during the
                  height of the Texas oil rush. The town stabilized as the boom settled into
                  long-term refining operations, and today&apos;s historic downtown along Main
                  Street still reflects that 1920s architecture. Restoration-grade roofing on those
                  buildings requires materials and methods that respect their character while
                  handling modern Panhandle weather extremes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  The Phillips 66 Borger Refinery is a major petroleum refining complex with crude
                  distilling, catalytic cracking, and hydrodesulfurization units. Chevron Phillips
                  Chemical operates a large petrochemical and specialty chemical production
                  facility. Solvay USA produces sodium carbonate and other industrial chemicals.
                  Together these operations employ thousands of people and define the commercial
                  roofing landscape across Hutchinson County.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Phillips 66 &amp; Chevron Phillips Zone
                </h4>
                <p className="text-sm text-gray-600">
                  Major petrochemical complex along the Canadian River requiring chemical-resistant
                  membranes and OSHA-compliant industrial roofing systems
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Historic Downtown District</h4>
                <p className="text-sm text-gray-600">
                  Early 20th-century commercial buildings from the 1926 oil boom requiring careful,
                  restoration-quality roofing work
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Lake Meredith &amp; Rural County</h4>
                <p className="text-sm text-gray-600">
                  Ranch properties and recreational structures across rural Hutchinson County where
                  metal roofing and large-span systems are standard
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Borger Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Borger Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, commercial
              petrochemical roofing, or a complete roof replacement, 5 Star Commercial Roofing
              serves Borger with expert craftsmanship and honest pricing. Most hail damage repairs
              are covered by insurance.
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
                href="/pampa-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Pampa
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
                href="/canyon-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Canyon
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
            "@id": "https://5starroofingpros.com/borger-texas-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Borger, Texas and Hutchinson County. Storm damage repair, residential and commercial roofing, petrochemical facility specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Borger",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "35.6679",
              longitude: "-101.3974",
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
                name: "Borger",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Hutchinson County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="borger-texas-roofing" />
    </div>
  );
}
