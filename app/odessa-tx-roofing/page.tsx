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
  alternates: { canonical: "https://5starroofingpros.com/odessa-tx-roofing/" },
  title: "Roofing Contractor Odessa TX | 5 Star Roofing",
  description:
    "Roofing in Odessa TX. Hail Alley specialists serving Ector County. Residential, commercial, and oil-industry roofing across the Permian Basin. Call (806) 622-6041",
  openGraph: {
    title: "Roofing Contractor Odessa TX | 5 Star Roofing",
    description:
      "Roofing in Odessa TX. Hail Alley specialists serving Ector County. Residential, commercial, and oil-industry roofing across the Permian Basin. Call (806) 622-6041",
    url: "https://5starroofingpros.com/odessa-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed roof installation in Odessa TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Odessa?",
    answer:
      "Odessa sits in the heart of Hail Alley and averages 6-8 significant hail events per year. The May 2019 supercell dropped hail up to 4.5 inches across Ector County, causing more than $100 million in property damage and destroying thousands of roofs in a single afternoon. Class 4 impact-resistant materials are strongly recommended for any Odessa property.",
  },
  {
    question: "Do you work on oil field and industrial buildings in Odessa?",
    answer:
      "Yes. Odessa's economy runs on the Permian Basin oil and gas industry, and we specialize in commercial systems for refineries, processing plants, oilfield service yards, warehouses, and pipe storage facilities. We install chemical-resistant PVC membranes, heavy-duty metal roofing, and TPO systems designed for industrial applications with high-traffic roof access and chemical exposure.",
  },
  {
    question: "What roofing materials handle Odessa's heat and UV best?",
    answer:
      "For residential homes, reflective metal roofing or UV-stabilized Class 4 impact-resistant shingles perform best in Odessa's climate. For commercial buildings, white TPO or PVC membranes reflect up to 85% of solar heat and reduce cooling costs by 20-30%. Both handle the extreme temperature swings and intense UV radiation that age standard shingles 30-40% faster here than in milder climates.",
  },
  {
    question: "How did the May 2019 hailstorm change Odessa roofing standards?",
    answer:
      "The May 23, 2019 supercell that dropped 4.5-inch hail across Odessa caused more than $100 million in property damage and destroyed thousands of roofs. Since then, many Odessa homeowners and insurance providers have shifted toward Class 4 impact-resistant materials as the standard rather than a premium option. Standing seam metal installations have also increased significantly, particularly systems rated to withstand softball-sized hail.",
  },
  {
    question: "How do you handle storm damage in Odessa?",
    answer:
      "After a storm in Odessa or Ector County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, drone imagery, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability; we are not an emergency-dispatch service.",
  },
  {
    question: "Do you serve the UTPB area, Sherwood, and the I-20 corridor?",
    answer:
      "Yes. We provide comprehensive roofing services throughout all Odessa neighborhoods including Sherwood, Stonegate, Mission Dorado, Ridgemont, Parkview Estates, Woodson Heights, Dos Amigos, the UTPB campus area, and the commercial districts along East 42nd Street, Andrews Highway, JBS Parkway, and the I-20 industrial corridor. We also serve West Odessa and the surrounding Ector County communities.",
  },
  {
    question: "Will insurance cover my Odessa hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. Texas law gives you up to 2 years to file hail damage claims, but waiting allows hidden damage to worsen. We provide comprehensive documentation with photographs, drone imagery, and detailed reports that meet adjuster requirements, and we work directly with State Farm, Allstate, USAA, Farmers, and local Permian Basin providers.",
  },
];

export default function OdessaRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Odessa", url: "/odessa-tx-roofing/" },
        ]}
      />

      <StickyContactBar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.webp)",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Odessa Roofing Contractor You Can Count On</h1>
            <p className="hero-subtitle">
              Permian Basin Hail &amp; Oil-Industry Roofing Specialists
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
              5 Star Roofing provides full roofing services in Odessa TX — residential, commercial, hail and wind damage repair, TPO and PVC membranes for industrial properties, and roof replacement for homes and businesses across Ector County and the Permian Basin.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
              <a href="/midland-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Midland Roofing</a>
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
                Your Trusted Roofing Partner in Odessa, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Odessa, the Ector County seat with approximately 123,000 residents, sits at the
                heart of the Permian Basin where I-20 meets the oil and gas economy that powers
                West Texas. From the Globe Theatre downtown to the industrial corridors along East
                42nd Street and Andrews Highway, Odessa properties face one of the most demanding
                roofing environments in North America. 5 Star Commercial Roofing provides
                comprehensive roofing services throughout Odessa and the surrounding Permian Basin.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Odessa&apos;s economy runs on oil and gas. The Permian Basin&apos;s refineries,
                processing plants, oilfield service yards, and pipe storage facilities all require
                specialized commercial roofing — chemical-resistant PVC membranes, heavy-duty metal
                systems, and reinforced walkways for high-traffic maintenance access. The
                University of Texas Permian Basin, Medical Center Hospital, Ratliff Stadium, and the
                retail centers along East 42nd Street round out a commercial base that depends on
                durable roofing systems engineered for industrial conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Odessa sits directly in Hail Alley. The National Weather Service documents 6-8
                significant hail events per year across Ector County, with stones frequently
                exceeding two inches and occasionally reaching softball size. The May 23, 2019
                supercell dropped 4.5-inch hail across the city, caused more than $100 million in
                property damage, and destroyed thousands of roofs in a single afternoon. Summer
                highs regularly exceed 105°F, with roof surface temperatures reaching 170°F on dark
                shingles — conditions that accelerate aging and demand premium materials rated for
                extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Odessa</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout
              Odessa and Ector County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-odessa/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Odessa</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Odessa Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From established residential neighborhoods to the commercial corridors and
                industrial districts, we provide expert roofing services throughout Odessa:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">North Odessa</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Sherwood</li>
                    <li>&#10003; Stonegate</li>
                    <li>&#10003; Parkview Estates</li>
                    <li>&#10003; Mission Dorado</li>
                    <li>&#10003; Ridgemont</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Central &amp; West Odessa</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Downtown / Globe Theatre District</li>
                    <li>&#10003; Woodson Heights</li>
                    <li>&#10003; Dos Amigos</li>
                    <li>&#10003; West Odessa</li>
                    <li>&#10003; UTPB Campus Area</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Commercial &amp; Industrial</h3>
                  <ul className="space-y-2">
                    <li>&#10003; East 42nd Street corridor</li>
                    <li>&#10003; Andrews Highway</li>
                    <li>&#10003; JBS Parkway area</li>
                    <li>&#10003; I-20 industrial corridor</li>
                    <li>&#10003; All Ector County</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Sherwood and Stonegate are two of Odessa&apos;s most established residential
                neighborhoods, while the UTPB campus area continues to see new development. Whether
                you&apos;re downtown near the Globe Theatre, along the I-20 corridor, or anywhere
                in Ector County, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Odessa
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  May 23, 2019 &mdash; The Storm That Changed Standards
                </h3>
                <p className="text-gray-700">
                  A devastating supercell dropped hail up to 4.5 inches in diameter across Odessa,
                  causing more than $100 million in property damage and destroying thousands of
                  residential and commercial roofs in a single afternoon. The event reshaped local
                  insurance practices and pushed Class 4 impact-resistant materials from premium
                  option to standard expectation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Annual Hail Frequency &mdash; Ongoing
                </h3>
                <p className="text-gray-700">
                  The National Weather Service documents 6-8 significant hail events per year across
                  Ector County, with many storms producing stones 2-4 inches in diameter. Peak
                  season runs March through May with a secondary fall peak. Hail damage isn&apos;t
                  always immediately visible — granule loss, seal failure, and cracking lead to
                  premature roof failure and leaks that surface months later.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Wind &amp; Temperature Stress
                </h3>
                <p className="text-gray-700">
                  Odessa&apos;s annual temperature range exceeds 120°F. Summer highs regularly reach
                  105-110°F with roof surface temperatures exceeding 170°F. Winter brings arctic
                  blasts dropping temperatures below 10°F. The constant thermal cycling stresses
                  sealants and fasteners, while straight-line winds reaching 70-80 mph during severe
                  weather lift improperly installed shingles and tear flat-roof membrane seams.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Texas law gives you up to 2 years to file hail damage claims. After any hail event
                in Odessa, get a professional inspection within 72 hours to protect your rights and
                prevent hidden water infiltration.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Odessa-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Odessa &amp; Ector County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Hail Alley Supercells
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Odessa&apos;s position in the southern Plains makes it a magnet for supercell
                  thunderstorms. Warm Gulf moisture clashing with dry Permian Basin air fuels storms
                  capable of producing 4-inch hail, as the May 2019 event demonstrated. Class 4
                  impact-resistant materials qualify for insurance discounts up to 30% and are
                  strongly recommended for all Odessa properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Oil Field &amp; Industrial Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Odessa&apos;s oil and gas economy means refineries, processing plants, oilfield
                  service yards, and pipe storage facilities throughout the I-20 corridor. These
                  properties need chemical-resistant PVC membranes, heavy-duty metal roofing,
                  reinforced walkway pads, and systems that handle the high-traffic roof access
                  required for maintenance equipment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Heat &amp; UV Degradation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Odessa summers regularly exceed 105°F, with roof surface temperatures reaching
                  170°F or higher. Intense UV radiation breaks down asphalt binders, causes granule
                  loss, and can reduce expected roof life by 30-40% without premium UV-stabilized
                  materials. Reflective TPO and metal roofing systems cut cooling costs by 20-30%
                  while providing superior durability against heat and UV exposure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Flash Flooding &amp; Drainage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Odessa averages only 14 inches of annual rainfall, but precipitation arrives in
                  intense bursts — thunderstorms can dump 2-3 inches in under an hour. Flat
                  commercial roofs require properly designed drainage with adequate scuppers and
                  internal drains. Ponding water lasting 48+ hours accelerates membrane
                  deterioration and leads to premature failure.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Odessa City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Odessa: Capital of the Permian Basin</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">I-20 Corridor &amp; Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Odessa&apos;s position along I-20 between Midland and Big Spring has made it a
                  hub for oil-industry logistics, retail, and hospitality. The East 42nd Street
                  retail corridor, Music City Mall, and the commercial developments along Andrews
                  Highway all require commercial roofing systems built for hail resistance and heat
                  reflectance. The Globe Theatre district downtown features historic buildings that
                  demand careful, restoration-quality work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  The University of Texas Permian Basin anchors higher education in the region and
                  continues to expand its campus footprint. Medical Center Hospital and Odessa
                  Regional Medical Center serve a vast catchment area across West Texas and require
                  institutional-grade commercial roofing. The Alon refinery complex and the broader
                  oil-industry employer base round out a commercial property base that depends on
                  specialized roofing for chemical-exposure environments.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  UTPB &amp; Education Corridor
                </h4>
                <p className="text-sm text-gray-600">
                  University campus and surrounding academic and residential development requiring
                  durable, institutional-grade systems
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Globe Theatre District</h4>
                <p className="text-sm text-gray-600">
                  Historic downtown buildings requiring restoration-compatible roofing that
                  maintains architectural character
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">I-20 Industrial Zone</h4>
                <p className="text-sm text-gray-600">
                  Refineries, oilfield service yards, and pipe storage requiring chemical-resistant
                  membranes and reinforced systems
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Odessa Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Odessa Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, emergency repairs, or
              a complete roof replacement, 5 Star Commercial Roofing serves Odessa with expert
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
              Also Serving Nearby Permian Basin Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
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
                href="/andrews-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Andrews
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/monahans-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Monahans
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
            "@id": "https://5starroofingpros.com/odessa-tx-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.webp",
            description:
              "Professional roofing contractor serving Odessa, Texas and the Permian Basin. Specialists in hail damage repair, commercial roofing, metal roofing, and oil-industry facility roofing for residential and industrial properties throughout Ector County.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Odessa",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "31.8457",
              longitude: "-102.3676",
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
                name: "Odessa",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Ector County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="odessa-tx-roofing" />
    </div>
  );
}
