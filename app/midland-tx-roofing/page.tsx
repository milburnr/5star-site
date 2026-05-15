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
  alternates: { canonical: "https://5starroofingpros.com/midland-tx-roofing/" },
  title: "Roofing Contractor Midland TX | 5 Star Roofing",
  description:
    "Roofing in Midland TX. Permian Basin hail and oil-industry roofing specialists serving Midland County. Residential and commercial. Call (806) 622-6041",
  openGraph: {
    title: "Roofing Contractor Midland TX | 5 Star Roofing",
    description:
      "Roofing in Midland TX. Permian Basin hail and oil-industry roofing specialists serving Midland County. Residential and commercial. Call (806) 622-6041",
    url: "https://5starroofingpros.com/midland-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/midland-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed roof installation in Midland TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Midland?",
    answer:
      "Midland sits in the heart of Hail Alley and the Permian Basin, with 6-8 significant hail events per year and stones frequently exceeding 2 inches. Supercell thunderstorms moving across the basin produce hail capable of totaling residential and commercial roofs in minutes. Class 4 impact-resistant materials are strongly recommended for any Midland property.",
  },
  {
    question: "Do you work on oil-industry facilities in Midland?",
    answer:
      "Yes. Midland is the corporate hub of the Permian Basin oil and gas industry, and we install specialized commercial roofing for oilfield service yards, processing plants, office buildings, and industrial facilities throughout Midland County. That includes chemical-resistant PVC membranes, heavy-duty metal roofing, and TPO systems designed for high-traffic roof access and chemical exposure.",
  },
  {
    question: "What roofing materials handle Midland's climate best?",
    answer:
      "For residential homes, reflective metal roofing or UV-stabilized Class 4 impact-resistant shingles perform best at Midland's 2,779 feet elevation. For commercial buildings, white TPO or PVC membranes reflect up to 85% of solar heat and reduce cooling costs by 20-30% — meaningful at Midland's elevation and sunshine count. Both handle the extreme temperature swings and intense UV radiation common to the Basin.",
  },
  {
    question: "Which Midland neighborhoods do you serve?",
    answer:
      "Every Midland neighborhood and the surrounding Midland County and Permian Basin communities. That includes the established neighborhoods near Green Tree Country Club Estates, Saddle Club South, Country Club Estates, the newer developments to the north and west, the historic district near Centennial Park, and the rural acreage and ranch properties across the county. We also serve neighboring Odessa, Stanton, Garden City, and the surrounding Ector, Martin, and Glasscock Counties.",
  },
  {
    question: "How do you handle storm damage in Midland?",
    answer:
      "After a storm in Midland or Midland County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, drone imagery, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability; we are not an emergency-dispatch service.",
  },
  {
    question: "Will insurance cover my Midland hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. Texas law gives you up to 2 years to file hail damage claims. We provide comprehensive documentation with photographs, drone imagery, and detailed reports that meet adjuster requirements, and we work directly with State Farm, Allstate, USAA, Farmers, and the local Permian Basin providers.",
  },
  {
    question: "How long does roof replacement take in Midland?",
    answer:
      "Most residential roof replacements in Midland take 1-3 days depending on the home's size and complexity. Single-story homes under 2,000 sq ft typically finish in 1-2 days. Larger or two-story homes need 2-3 days. Commercial buildings vary by size — 5,000 to 100,000+ sq ft projects can run from several days to two weeks. We coordinate scheduling around active operations for commercial work.",
  },
];

export default function MidlandRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Midland"
        citySlug="midland"
        h1="Midland Roofing Contractor You Can Count On"
        eyebrow="Permian Basin Hail & Oil-Industry Roofing Specialists"
        image="/images/heroes/cities/midland-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Midland", url: "/midland-tx-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Midland TX — residential, commercial, hail and wind damage repair, TPO and PVC membranes for industrial properties, and roof replacement for homes and businesses across Midland County and the Permian Basin.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Your Trusted Roofing Partner in Midland, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Midland is the corporate hub of the Permian Basin oil and gas industry — the seat of
                Midland County and home to a metropolitan area of more than 170,000 across the Basin.
                The headquarters and office buildings along Wall Street, the industrial corridors
                along I-20, and the established residential neighborhoods near Green Tree Country
                Club all face one of the most demanding roofing environments in North America. 5 Star
                Commercial Roofing provides comprehensive roofing services throughout Midland and
                Midland County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Midland&apos;s economy runs on oil and gas. The Permian Basin&apos;s corporate
                headquarters, oilfield service yards, processing plants, and industrial facilities
                all require specialized commercial roofing — chemical-resistant PVC membranes,
                heavy-duty metal roofing, and reinforced walkways for high-traffic maintenance
                access. The downtown business district, the medical campuses, and the retail
                corridors round out a commercial base that depends on durable roofing systems
                engineered for Permian Basin conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Midland sits in Hail Alley. The National Weather Service documents 6-8 significant
                hail events per year across the area, with stones frequently exceeding two inches.
                Supercell thunderstorms moving through the Basin produce hail and straight-line
                winds capable of totaling residential and commercial roofs in minutes. Summer highs
                regularly exceed 100°F at the city&apos;s 2,779-foot elevation — conditions that
                accelerate aging and demand premium materials rated for extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Midland</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              From architectural asphalt shingle and Class 4 impact-rated shingle replacements on
              Midland County homes to Carlisle and Firestone TPO membrane systems on Permian Basin
              commercial buildings, we install across the full residential and commercial range.
              Select a service below for the local detail.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-midland/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Midland</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Midland Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the established neighborhoods near Green Tree Country Club to the commercial
                corridors along I-20 and the industrial districts of the Basin, we provide expert
                roofing services across all of Midland:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Established Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Green Tree Country Club Estates</li>
                    <li>&#10003; Country Club Estates</li>
                    <li>&#10003; Saddle Club South</li>
                    <li>&#10003; Polo Park</li>
                    <li>&#10003; Downtown Historic District</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Newer Developments</h3>
                  <ul className="space-y-2">
                    <li>&#10003; North Midland</li>
                    <li>&#10003; Northwest Midland</li>
                    <li>&#10003; West Midland</li>
                    <li>&#10003; Centennial Park area</li>
                    <li>&#10003; Garfield corridor</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; All Midland County</li>
                    <li>&#10003; Stanton (Martin Co.)</li>
                    <li>&#10003; Garden City (Glasscock Co.)</li>
                    <li>&#10003; I-20 Corridor properties</li>
                    <li>&#10003; Rural acreage &amp; ranches</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The Green Tree Country Club neighborhoods include some of Midland&apos;s most
                established residential properties, while newer development continues along the
                north and west edges. Wherever you are in Midland or the surrounding counties,
                we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Midland County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Permian Basin Supercell Pattern
                </h3>
                <p className="text-gray-700">
                  Midland and Midland County experience 6-8 significant hail events per year, with
                  stones frequently exceeding two inches. Supercell thunderstorms moving across the
                  Basin produce hail and damaging winds — peak season runs March through May with a
                  secondary fall peak in September and October.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Wind &amp; Temperature Stress
                </h3>
                <p className="text-gray-700">
                  Sustained Permian Basin winds frequently exceed 30 mph with severe-weather gusts
                  past 70 mph. Summer highs regularly exceed 100°F at Midland&apos;s 2,779-foot
                  elevation. The combination of UV exposure, thermal cycling, and wind stress can
                  reduce expected roof life by 30-40% without premium UV-stabilized materials.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Hidden Damage After Storms
                </h3>
                <p className="text-gray-700">
                  Hail damage isn&apos;t always immediately visible. Granule loss, seal failure, and
                  cracking lead to premature roof failure and leaks that surface months later. After
                  any hail event in Midland, get a professional inspection within 72 hours to catch
                  hidden damage before water infiltration begins.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Texas law gives you up to 2 years to file hail damage claims. We document
                comprehensively for your insurance carrier.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Midland-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Midland &amp; the Permian Basin
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Hail Alley Supercells
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland&apos;s position in the southern Plains makes it a magnet for supercell
                  thunderstorms. Class 4 impact-resistant materials qualify for insurance discounts
                  up to 30% and are strongly recommended for all Midland County properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Oil-Industry &amp; Corporate Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland&apos;s role as Permian Basin corporate headquarters means office towers,
                  oilfield service complexes, processing plants, and industrial yards throughout
                  Midland County. These properties need chemical-resistant PVC membranes,
                  heavy-duty metal roofing, and systems engineered for high-traffic maintenance
                  access.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Heat &amp; UV Degradation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland summers regularly exceed 100°F, with roof surface temperatures reaching
                  170°F or higher. Intense UV radiation breaks down asphalt binders, causes granule
                  loss, and can reduce expected roof life by 30-40% without premium UV-stabilized
                  materials. Reflective TPO and metal roofing systems cut cooling costs by 20-30%
                  while providing superior durability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Flash Flooding &amp; Drainage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland averages only 15 inches of annual rainfall, but precipitation arrives in
                  intense bursts. Flat commercial roofs require properly designed drainage with
                  adequate scuppers and internal drains. Ponding water lasting 48+ hours
                  accelerates membrane deterioration and leads to premature failure.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Midland City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Midland: Corporate Capital of the Permian Basin</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Downtown &amp; Corporate Towers</h3>
                <p className="text-gray-600 mb-4">
                  Midland&apos;s downtown — anchored by office towers along Wall Street and Big
                  Spring Street — houses the corporate headquarters for many of the Permian
                  Basin&apos;s independent oil and gas operators. These commercial properties
                  require institutional-grade roofing systems with the ability to phase
                  installations around active operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  Midland Memorial Hospital, the Midland College campus, and the Museum of the
                  Southwest are among the institutional properties requiring specialized
                  commercial roofing. The oilfield service base across Midland County — yards,
                  pipe storage, processing facilities — round out a commercial base that depends
                  on specialized chemical-resistant and metal roofing systems.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Wall Street Corporate Towers
                </h4>
                <p className="text-sm text-gray-600">
                  Downtown office buildings serving Permian Basin oil &amp; gas headquarters,
                  requiring institutional-grade systems
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Country Club Estates</h4>
                <p className="text-sm text-gray-600">
                  Established residential neighborhoods with HOA architectural requirements and
                  established landscape contexts
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">I-20 Industrial Corridor</h4>
                <p className="text-sm text-gray-600">
                  Oilfield service yards, processing plants, and pipe storage requiring
                  chemical-resistant membranes and reinforced walkways
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Midland Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Midland Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, repair work, or a
              complete roof replacement, 5 Star Commercial Roofing serves Midland with expert
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
                href="/odessa-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Odessa
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

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Midland Roofing Services</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/hail-damage-repair-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland hail damage repair services</a></li>
            <li><a href="/roof-replacement-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland roof replacement services</a></li>
            <li><a href="/metal-roofing-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland metal roofing services</a></li>
            <li><a href="/commercial-roofing-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland commercial roofing services</a></li>
            <li><a href="/roof-repair-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland roof repair services</a></li>
            <li><a href="/roof-inspections-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland roof inspections services</a></li>
            <li><a href="/wind-damage-repair-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland wind damage repair services</a></li>
            <li><a href="/storm-damage-repair-midland/" className="text-brand-brown hover:text-brand-gold underline">Midland storm damage repair services</a></li>
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
            "@id": "https://5starroofingpros.com/midland-tx-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-midland-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Midland, Texas and the Permian Basin. Specialists in hail damage repair, commercial roofing, metal roofing, and oil-industry facility roofing across Midland County.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Midland",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "31.9974",
              longitude: "-102.0779",
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
                name: "Midland",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Midland County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="midland-tx-roofing" />
    </div>
  );
}
