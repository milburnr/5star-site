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
  alternates: { canonical: "https://5starroofingpros.com/amarillo-tx-roofing/" },
  title: "Roofing Contractor Amarillo TX | 5 Star Roofing",
  description: "Roofing in Amarillo TX. Hail Alley specialists for Potter & Randall Counties. Residential and commercial work. Free inspections. Call (806) 622-6041.",
  openGraph: {
    title: "Roofing Contractor Amarillo TX | 5 Star Roofing",
    description:
      "Roofing in Amarillo TX. Hail Alley specialists serving Potter & Randall Counties. Residential and commercial roofing for Wolflin, Sleepy Hollow, Tascosa, San Jacinto. Call (806) 622-6041",
    url: "https://5starroofingpros.com/amarillo-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed roof installation in Amarillo TX — 5 Star Roofing",
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
    question: "Why is Amarillo 5 Star Roofing's primary service area?",
    answer:
      "Amarillo is the largest city in the Texas Panhandle with a metro population exceeding 200,000, and our office is located at 2909 S Western St. This central location anchors our service across Potter and Randall Counties. We have more completed projects in Amarillo than any other city in our service area, giving us deep familiarity with local building codes, HOA requirements (Wolflin, Westcliff, Sleepy Hollow, Colonies), and the specific weather patterns that affect Panhandle properties.",
  },
  {
    question: "How bad is hail damage in Amarillo?",
    answer:
      "Amarillo's primary hail season runs March through September, with peak activity in May and June. Potter and Randall Counties experience 8-12 significant hail events per year, with baseball-sized hail occurring multiple times annually. The May 20, 2019 storm dropped quarter-sized hail across Sleepy Hollow and multiple neighborhoods. The city's position in Hail Alley means impact-resistant Class 4 materials are strongly recommended for any Amarillo property.",
  },
  {
    question: "How does Amarillo's elevation affect roof aging?",
    answer:
      "Amarillo sits at 3,605 feet elevation with over 260 days of sunshine annually — UV exposure significantly more intense than lower-elevation Texas cities. Combined with summer highs near 100°F and winter lows in the teens, the constant thermal cycling and UV degradation can reduce expected roof life by 30-40% without premium UV-stabilized materials. Class 4 impact-resistant shingles and reflective metal roofing perform substantially better than standard products at this altitude.",
  },
  {
    question: "Do you handle insurance claims for Amarillo hail damage?",
    answer:
      "Yes. After a hail event in Potter or Randall County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photographs, drone imagery, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. We work directly with State Farm, Allstate, USAA, Farmers, and the local independent agencies serving the Panhandle. Permanent repairs and replacements are scheduled around material availability; we are not an emergency-dispatch service.",
  },
  {
    question: "Which Amarillo neighborhoods do you serve?",
    answer:
      "Every Amarillo neighborhood and the surrounding Potter and Randall County communities. That includes Wolflin, Westcliff, Sleepy Hollow, Tascosa, San Jacinto Heights, Paramount Terrace, North Heights, Olsen Park, Bishopsgate, Barrington Place, the Soncy Road corridor, and the newer developments near Coulter and Loop 335. From historic 1920s homes to new construction, we cover the whole city.",
  },
  {
    question: "Do you do commercial and industrial roofing in Amarillo?",
    answer:
      "Yes. Amarillo's commercial base includes retail along I-40, the medical district, government and education facilities, and industrial operations across Potter County. We install TPO and PVC single-ply membranes (excellent for hail resistance and heat reflectance), modified bitumen for high-traffic roof areas, standing seam metal for warehouses and shops, and built-up roofing for low-slope commercial buildings. Our commercial work coordinates around active operations to minimize business disruption.",
  },
  {
    question: "What roofing materials work best for Amarillo's climate?",
    answer:
      "For residential homes, Class 4 impact-resistant asphalt shingles or standing seam metal roofing handle the Panhandle's combination of severe hail, sustained winds, and extreme UV. Class 4 shingles meet UL 2218 impact testing and qualify for insurance discounts up to 30% in many policies. For commercial buildings, white TPO or PVC membranes reflect up to 85% of solar heat and reduce cooling costs by 20-30% — meaningful savings at Amarillo's elevation and sunshine count.",
  },
];

export default function AmarilloRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Amarillo"
        citySlug="amarillo"
        h1="Amarillo Roofing Contractor You Can Count On"
        eyebrow="Potter & Randall County Hail Damage Specialists Since 2014"
        image="/images/heroes/cities/amarillo-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Amarillo", url: "/amarillo-tx-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing is headquartered at 2909 S Western St in Amarillo. We provide full roofing services across Potter and Randall Counties — residential, commercial, hail and wind damage repair, roof replacement, and Class 4 impact-resistant installations for every Amarillo neighborhood.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
              <a href="/canyon-texas-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Canyon Roofing</a>
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
                Your Trusted Roofing Partner in Amarillo, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Amarillo is the largest city in the Texas Panhandle, the seat of Potter County, and
                home to a metropolitan area of more than 200,000 residents across Potter and Randall
                Counties. Our office at 2909 S Western St anchors a service area that covers every
                Amarillo neighborhood — from historic Wolflin and San Jacinto Heights to the newer
                developments along Soncy Road and Coulter. 5 Star Commercial Roofing has completed
                more projects in Amarillo than in any other city we serve.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Amarillo&apos;s economy spans agriculture, energy, healthcare, education, and a
                growing logistics sector along the I-40 corridor. The medical district, government
                and education facilities, retail centers, and industrial properties across the city
                all require specialized commercial roofing — TPO and PVC membranes for hail
                resistance, standing seam metal for warehouses, and built-up systems for the older
                low-slope commercial buildings downtown.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Texas Panhandle weather is the dominant constraint on roofing here. At 3,605 feet
                elevation with over 260 days of sunshine, Amarillo roofs face UV exposure
                significantly more intense than lower-elevation Texas cities. Hail Alley produces
                8-12 significant hail events per year across Potter and Randall Counties, with
                baseball-sized hail multiple times annually. The May 20, 2019 storm dropped
                quarter-sized hail across Sleepy Hollow and multiple neighborhoods, with significant
                granule loss reported across thousands of roofs. Class 4 impact-resistant materials
                are strongly recommended for any Amarillo property.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Amarillo</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout
              Amarillo and the surrounding Potter and Randall County communities. Select a service
              below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-amarillo/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Amarillo</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Amarillo Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the historic neighborhoods near downtown to the newer developments on
                Amarillo&apos;s southwest and southeast edges, we provide expert roofing services
                across the entire city:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Historic &amp; Central</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Wolflin</li>
                    <li>&#10003; San Jacinto Heights</li>
                    <li>&#10003; Paramount Terrace</li>
                    <li>&#10003; North Heights</li>
                    <li>&#10003; Olsen Park</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Southwest Amarillo</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Sleepy Hollow</li>
                    <li>&#10003; Tascosa</li>
                    <li>&#10003; Westcliff</li>
                    <li>&#10003; Bishopsgate</li>
                    <li>&#10003; Barrington Place</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Soncy Road corridor</li>
                    <li>&#10003; Coulter / Loop 335</li>
                    <li>&#10003; All Potter County</li>
                    <li>&#10003; All Randall County</li>
                    <li>&#10003; Canyon &amp; Bushland</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Wolflin, Westcliff, Sleepy Hollow, and Colonies are among the larger HOA
                communities — we know each one&apos;s shingle color and material approval
                requirements and handle the architectural committee paperwork at no extra charge.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Potter &amp; Randall Counties
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  May 20, 2019 &mdash; Sleepy Hollow Hailstorm
                </h3>
                <p className="text-gray-700">
                  Quarter-sized hail struck multiple Amarillo neighborhoods on May 20, 2019, with
                  NWS storm reports specifically documenting impacts in Sleepy Hollow. Even
                  quarter-sized hail causes significant granule loss and shortens shingle life,
                  particularly on roofs already weathered by the Panhandle&apos;s intense UV
                  exposure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  June 17, 2019 &mdash; Golf Ball Hail in Potter County
                </h3>
                <p className="text-gray-700">
                  Hail measuring 1.75 inches struck northern Potter County, with multiple locations
                  reporting damage across both Potter and Randall Counties. Severe hail measuring
                  2.50 inches was reported 14 miles north of Amarillo.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Annual Frequency &mdash; Ongoing
                </h3>
                <p className="text-gray-700">
                  Potter and Randall Counties experience 8-12 significant hail events per year, with
                  peak activity May through June. The National Weather Service Amarillo office
                  documents these consistently — baseball-sized hail is a multiple-times-per-year
                  occurrence, not a rare event.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Texas law gives you up to 2 years to file hail damage claims. After any hail event
                in Amarillo, get a professional inspection within 72 hours to protect your rights
                and catch hidden damage before water infiltration begins.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Amarillo-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Amarillo &amp; the Texas Panhandle
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Hail Alley Supercells
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo&apos;s position in the southern Plains makes it a hotspot for supercell
                  thunderstorms. Warm Gulf moisture clashing with cooler Panhandle air fuels storms
                  capable of producing baseball-sized hail and damaging straight-line winds. Class 4
                  impact-resistant materials qualify for insurance discounts up to 30% and are
                  strongly recommended for all Potter and Randall County properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Elevation, UV &amp; Heat
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At 3,605 feet with over 260 days of sunshine annually, Amarillo roofs receive UV
                  exposure significantly more intense than lower-elevation Texas cities. UV breaks
                  down asphalt binders, causes granule loss, and reduces expected roof life by
                  30-40% without premium UV-stabilized materials. Reflective metal roofing and
                  white TPO commercial systems reduce cooling costs by 20-30% while standing up to
                  the radiation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Wind &amp; Temperature Cycling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sustained Panhandle winds frequently exceed 30 mph, with severe-weather gusts
                  past 70 mph. The annual temperature range spans winter lows in the teens to
                  summer highs near 100°F. The constant thermal expansion and contraction stresses
                  sealants and fasteners, while wind events lift improperly installed shingles. We
                  use enhanced fastening schedules exceeding minimum code requirements for all
                  Amarillo installations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  HOA &amp; Historic District Requirements
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo&apos;s established neighborhoods come with HOA architectural requirements
                  (Wolflin, Westcliff, Sleepy Hollow, Colonies) and the historic-district
                  considerations of San Jacinto Heights and similar older communities. We handle
                  architectural committee submissions, stock pre-approved Class 4 shingle colors,
                  and use restoration-compatible materials where required.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Amarillo City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Amarillo: Largest City of the Texas Panhandle</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">I-40 Corridor &amp; Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Amarillo&apos;s position along I-40 has made it the major logistics, retail, and
                  hospitality hub between Albuquerque and Oklahoma City. The retail and commercial
                  corridors along I-40, Coulter, Soncy, and Bell Street all require commercial
                  roofing systems built for hail resistance and heat reflectance. Cadillac Ranch and
                  the historic Route 66 district downtown bring additional tourism and hospitality
                  properties to the commercial base.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  Amarillo&apos;s economic base spans Tyson Foods, the BNSF Railway, the medical
                  district (Northwest Texas Healthcare System, BSA Health System), Amarillo
                  College, Texas Tech University Health Sciences Center, and the Pantex plant
                  outside the city. These institutional and industrial properties require
                  specialized commercial roofing — chemical-resistant membranes, heavy-duty
                  metal systems, and phased installations that work around active operations.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Medical District
                </h4>
                <p className="text-sm text-gray-600">
                  Hospital campuses and surrounding medical office buildings requiring
                  institutional-grade roofing with minimal operational disruption
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Historic Route 66 / Downtown</h4>
                <p className="text-sm text-gray-600">
                  Early 20th-century commercial buildings along Polk Street and the Sixth Street
                  Historic District requiring restoration-compatible roofing
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">I-40 Industrial Zone</h4>
                <p className="text-sm text-gray-600">
                  Warehouses, distribution centers, and processing facilities requiring durable,
                  large-span commercial roofing systems
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Amarillo Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Amarillo Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, repair work, or a
              complete roof replacement, 5 Star Commercial Roofing serves Amarillo from our office
              at 2909 S Western St. Most hail damage repairs are covered by insurance.
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
              Also Serving Nearby Texas Panhandle Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a
                href="/canyon-texas-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Canyon
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/bushland-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Bushland
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/borger-texas-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Borger
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/dumas-texas-roofing/"
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

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Amarillo Roofing Services</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/hail-damage-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair in Amarillo</a></li>
            <li><a href="/roof-replacement-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Roof Replacement in Amarillo</a></li>
            <li><a href="/metal-roofing-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Metal Roofing in Amarillo</a></li>
            <li><a href="/commercial-roofing-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Commercial Roofing in Amarillo</a></li>
            <li><a href="/roof-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Roof Repair in Amarillo</a></li>
            <li><a href="/roof-inspections-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections in Amarillo</a></li>
            <li><a href="/wind-damage-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair in Amarillo</a></li>
            <li><a href="/storm-damage-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Storm Damage Repair in Amarillo</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/amarillo-tx-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.webp",
            description:
              "Professional roofing contractor headquartered in Amarillo, Texas and serving the entire Texas Panhandle. Specialists in hail damage repair, commercial roofing, metal roofing, and Class 4 impact-resistant residential installations across Potter and Randall Counties.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "35.1768",
              longitude: "-101.859",
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
                name: "Amarillo",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Potter County",
              },
              {
                "@type": "AdministrativeArea",
                name: "Randall County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="amarillo-tx-roofing" />
    </div>
  );
}
