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
  alternates: { canonical: "https://5starroofingpros.com/dumas-texas-roofing/" },
  title: "Roofing in Dumas TX | 5 Star Roofing",
  description:
    "Roofing in Dumas. Moore County hail damage specialists. Residential, commercial, and agricultural roofing in the Texas Panhandle. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Dumas TX | 5 Star Roofing",
    description:
      "Roofing in Dumas. Moore County hail damage specialists. Residential, commercial, and agricultural roofing in the Texas Panhandle. Call (806) 622-6041",
    url: "https://5starroofingpros.com/dumas-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Dumas TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Dumas?",
    answer:
      "Dumas sits squarely in the Texas Panhandle hail corridor and sees severe hailstorms most years between April and September. Supercells crossing Moore County regularly produce golf ball to baseball-sized hail capable of totaling residential roofs and damaging large agricultural buildings in a single pass. Class 4 impact-resistant materials are strongly recommended for any Dumas property.",
  },
  {
    question: "Do you work on feedlots and agricultural buildings in Moore County?",
    answer:
      "Yes. Moore County is one of the leading beef-producing counties in Texas, and we provide commercial and agricultural roofing for cattle barns, feed storage, equipment buildings, and large-span metal structures throughout the county. We install corrosion-resistant metal panels and ventilated systems designed for livestock environments, and we coordinate scheduling around feeding and harvest cycles.",
  },
  {
    question: "What roofing materials handle the Texas Panhandle climate best?",
    answer:
      "For residential homes in Dumas, Class 4 impact-resistant asphalt shingles or standing-seam metal roofing perform best against hail, sustained wind, and intense UV. For commercial and agricultural buildings, reflective metal roofing and TPO membranes reduce cooling loads and stand up to the temperature swings the Panhandle is known for — from 100-plus degree summers to single-digit winter nights.",
  },
  {
    question: "How does Dumas's open terrain affect roofing installations?",
    answer:
      "Dumas sits on the open Texas Panhandle plains at roughly 3,600 feet elevation, with very little tree cover or terrain to break the wind. Sustained winds and gusts in the 60–80 mph range are common during storm season, so we use enhanced wind-rated fasteners, six-nail shingle patterns, and reinforced edge metal on every Moore County installation.",
  },
  {
    question: "How do you handle storm damage in Dumas?",
    answer:
      "After a storm in Dumas or Moore County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability and crew schedules; we are not an emergency-dispatch service.",
  },
  {
    question: "Do you serve the JBS/Swift plant and other large Dumas employers?",
    answer:
      "We serve industrial and institutional facilities throughout Moore County, including beef processing, grain handling, and county government buildings. Large-footprint facilities like the JBS beef plant require commercial roofing systems with TPO or PVC membranes, phased installation to maintain operations, and crews experienced with industrial roof traffic. Contact us for institutional or industrial project consultations.",
  },
  {
    question: "Will insurance cover my Dumas hail damage?",
    answer:
      "Most homeowner and commercial property policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation with photographs, measurements, and detailed reports that meet adjuster requirements, and we work with your carrier on the claim. We do not chase storms or pressure homeowners — if your roof is sound, we'll tell you.",
  },
];

export default function DumasRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Dumas"
        citySlug="dumas"
        h1="Dumas Roofing Services for Moore County Ag & Industrial"
        eyebrow="Metal-building expertise for beef-plant facilities, feedlots & residential storm recovery"
        image="/images/heroes/cities/dumas-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Dumas", url: "/dumas-texas-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Dumas TX — residential, commercial, and agricultural roofing, roof replacement, and hail damage documentation for Moore County properties.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-dumas/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-dumas/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-dumas/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Dumas Roofing for Moore County Ag and Industry
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Dumas, the Moore County seat with approximately 14,700 residents, sits along US-87 about
                50 miles north of Amarillo in the heart of the Texas Panhandle. Founded in 1891 and
                famously the subject of &quot;The Ding Dong Daddy from Dumas,&quot; the city anchors one of
                the most productive cattle and agricultural regions in the country. 5 Star Commercial
                Roofing provides comprehensive roofing services throughout Dumas and Moore County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Dumas&apos;s economy is built on cattle, agriculture, and oil and gas. The JBS beef
                processing plant is one of the largest employers in the Panhandle, and Moore County
                feedlots hold roughly 180,000 head of cattle at any given time. Wheat, corn, milo, and
                cotton operations spread across the county add another layer of agricultural roofing
                demand — grain elevators, equipment buildings, and feed storage all require commercial-grade
                metal and membrane systems built for the Panhandle climate.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Panhandle weather is the defining factor for any Dumas roof. The city sits at roughly
                3,600 feet elevation on open plains, exposed to some of the most active hail-producing
                supercells in North America. Between March and September, storms regularly bring golf
                ball to baseball-sized hail, straight-line winds in the 60–80 mph range, and occasional
                tornadoes. Summer highs push past 100 degrees, winter lows drop into the single digits,
                and intense UV at elevation accelerates the breakdown of petroleum-based roofing
                materials. These conditions demand expert installation and premium materials rated for
                extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Dumas</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential, commercial, and agricultural roofing services
              throughout Dumas and Moore County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-dumas/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Dumas</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Dumas Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From established neighborhoods near the Moore County courthouse to agricultural
                properties spread across the surrounding plains, we provide expert roofing services
                throughout Dumas:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Established Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Downtown Dumas</li>
                    <li>&#10003; Courthouse District</li>
                    <li>&#10003; West Dumas Residential</li>
                    <li>&#10003; East Dumas Residential</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Family Neighborhoods</h3>
                  <ul className="space-y-2">
                    <li>&#10003; North Dumas</li>
                    <li>&#10003; South Dumas</li>
                    <li>&#10003; Newer subdivisions on the edges</li>
                    <li>&#10003; US-87 corridor homes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Agricultural district &amp; feedlots</li>
                    <li>&#10003; All Moore County</li>
                    <li>&#10003; Rural ranches &amp; farmsteads</li>
                    <li>&#10003; Sunray, Cactus &amp; Stinnett vicinity</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The Moore County courthouse anchors downtown Dumas, with residential neighborhoods
                spreading out in every direction. Beyond the city limits, the agricultural district —
                feedlots, grain elevators, and equipment yards — wraps the city and stretches across
                the county. Whether you&apos;re in town or out on a Moore County ranch, we serve your
                area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Dumas
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  2023 Spring &mdash; Panhandle Supercell Outbreak
                </h3>
                <p className="text-gray-700">
                  Multiple supercell rounds tracked across Moore County during the 2023 spring storm
                  season, with hail reports reaching 2 inches in and around Dumas. Residential
                  neighborhoods and outlying agricultural buildings saw widespread roof damage, and
                  insurance claim volume across the county spiked through early summer.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  May 2019 &mdash; Significant Hail Damage
                </h3>
                <p className="text-gray-700">
                  NWS Amarillo documented severe hail across the northern Panhandle in May 2019,
                  with stones reaching 2.5 inches in parts of Moore County. The storms caused
                  widespread residential roof damage and damaged equipment and outbuildings at
                  feedlots and farms across the area.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Recurring Spring Hail Seasons
                </h3>
                <p className="text-gray-700">
                  Moore County sits inside the most active hail belt in the United States. The NWS
                  Storm Prediction Center logs severe hail reports for the Dumas area in most years,
                  with stones from quarter-size up to baseball-size documented across multiple
                  storm seasons. Class 4 impact-resistant materials are the baseline recommendation
                  for any new roof in town.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Moore County is one of the most hail-prone counties in Texas, with multiple severe
                weather warnings issued every storm season and on-the-ground reports from trained
                spotters across the area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Dumas-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Dumas &amp; Moore County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Panhandle Hail Alley
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dumas sits inside the most active hail-producing region in the country. Moist Gulf
                  air collides with cold air from the Rockies right over the Panhandle, fueling
                  supercell storms that drop hail from quarter-size to baseball-plus across Moore
                  County every storm season. Class 4 impact-resistant materials, six-nail shingle
                  patterns, and reinforced edge metal are strongly recommended for all Dumas
                  properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Agricultural &amp; Feedlot Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Moore County&apos;s cattle and agriculture economy means large-span metal buildings,
                  feed storage, grain elevators, and equipment yards spread across the county. These
                  structures need corrosion-resistant metal panels, proper ventilation for livestock
                  facilities, and crews that understand how to phase work around feeding and harvest
                  schedules without disrupting daily operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Wind Exposure on Open Plains
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dumas sits on open plains at roughly 3,600 feet elevation with very little terrain
                  or tree cover to break the wind. Sustained winds and gusts in the 60–80 mph range
                  are routine during storm season, and shingle uplift, ridge cap failure, and
                  flashing damage are the most common non-hail callouts. Enhanced wind-rated fasteners
                  and proper edge detailing are non-negotiable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Heat, Cold &amp; UV Cycling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dumas summers regularly push past 100 degrees with roof surface temperatures over
                  150 degrees, while winter lows drop into the single digits. The combined effect of
                  intense UV at elevation and large daily temperature swings accelerates the breakdown
                  of petroleum-based materials. Reflective metal roofing and quality underlayments
                  buy years of additional service life under Panhandle conditions.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Dumas City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Dumas: Agricultural Capital of the Texas Panhandle</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">US-87 Corridor &amp; Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Dumas&apos;s position along US-87 makes it the commercial hub of the northern
                  Panhandle, drawing traffic between Amarillo and the Oklahoma/New Mexico borders.
                  The corridor through town supports hotels, restaurants, ag-services businesses, and
                  the cluster of equipment dealers that serve Moore County farms and ranches.
                  Downtown Dumas, anchored by the Moore County courthouse, retains commercial
                  buildings from the early 20th century that require careful, restoration-quality
                  roofing work alongside modern weather protection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Industries</h3>
                <p className="text-gray-600 mb-4">
                  The JBS (formerly Swift) beef processing plant is the largest single employer in
                  Dumas and one of the largest in the Panhandle. Moore County government, the
                  hospital, and Dumas ISD schools add institutional roofing demand. The agricultural
                  side — feedlots, grain elevators, dairy operations, and farm-equipment dealerships —
                  drives the bulk of large-span commercial and industrial roofing needs in the county.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Agricultural District &amp; Feedlots
                </h4>
                <p className="text-sm text-gray-600">
                  Large-span metal buildings, cattle barns, and feed storage facilities across Moore
                  County requiring corrosion-resistant agricultural roofing systems
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Downtown &amp; Courthouse District</h4>
                <p className="text-sm text-gray-600">
                  Early 20th-century commercial buildings and the Moore County courthouse area
                  requiring careful, restoration-quality roofing work
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Industrial &amp; Processing</h4>
                <p className="text-sm text-gray-600">
                  JBS beef plant and surrounding processing and ag-services facilities requiring
                  large commercial roofing systems and phased install scheduling
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Dumas Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Dumas Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, a permanent repair, or
              a complete roof replacement, 5 Star Commercial Roofing serves Dumas with expert
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
                href="/stinnett-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Stinnett
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

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Dumas Roofing Services</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/hail-damage-repair-dumas/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair for Dumas properties</a></li>
            <li><a href="/roof-replacement-dumas/" className="text-brand-brown hover:text-brand-gold underline">Roof Replacement for Dumas properties</a></li>
            <li><a href="/metal-roofing-dumas/" className="text-brand-brown hover:text-brand-gold underline">Metal Roofing for Dumas properties</a></li>
            <li><a href="/commercial-roofing-dumas/" className="text-brand-brown hover:text-brand-gold underline">Commercial Roofing for Dumas properties</a></li>
            <li><a href="/roof-repair-dumas/" className="text-brand-brown hover:text-brand-gold underline">Roof Repair for Dumas properties</a></li>
            <li><a href="/roof-inspections-dumas/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Dumas properties</a></li>
            <li><a href="/wind-damage-repair-dumas/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair for Dumas properties</a></li>
            <li><a href="/storm-damage-repair-dumas/" className="text-brand-brown hover:text-brand-gold underline">Storm Damage Repair for Dumas properties</a></li>
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
            "@id": "https://5starroofingpros.com/dumas-texas-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Dumas, Texas and Moore County. Hail damage repair, residential, commercial, and agricultural roofing for the Texas Panhandle.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dumas",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "35.8656",
              longitude: "-101.9732",
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
                name: "Dumas",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Moore County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="dumas-texas-roofing" />
    </div>
  );
}
