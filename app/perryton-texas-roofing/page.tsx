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
  alternates: { canonical: "https://5starroofingpros.com/perryton-texas-roofing/" },
  title: "Roofing in Perryton TX | 5 Star Roofing",
  description:
    "Roofing in Perryton. Ochiltree County storm damage specialists. Residential, commercial, and agricultural roofing in the Texas Panhandle. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Perryton TX | 5 Star Roofing",
    description:
      "Roofing in Perryton. Ochiltree County storm damage specialists. Residential, commercial, and agricultural roofing in the Texas Panhandle. Call (806) 622-6041",
    url: "https://5starroofingpros.com/perryton-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Perryton TX — 5 Star Roofing",
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
    question: "How bad was the June 2023 Perryton tornado?",
    answer:
      "On June 15, 2023, an EF-3 tornado tore through Perryton, killing three people, injuring dozens, and causing widespread structural damage across the city. The Perryton Equity Co-Op grain facilities, mobile home parks on the south side, and businesses along Main Street sustained heavy roof and structural damage. Recovery and rebuilding work continues across Ochiltree County, and many properties still need full roof replacement to restore wind ratings and insurance compliance.",
  },
  {
    question: "Do you work on agricultural and grain storage buildings in Perryton?",
    answer:
      "Yes. Perryton is the heart of the Wheat Heart of the Nation, and we work on grain elevators, equipment barns, processing facilities, and farm shop buildings throughout Ochiltree County. Agricultural roofs need chemical-resistant metal panels with enhanced corrosion coatings, ventilation systems designed to resist grain dust clogging, and structural designs that handle equipment vibration and load cycles from harvest traffic.",
  },
  {
    question: "What roofing materials handle Perryton's hail and wind best?",
    answer:
      "For residential homes, Class 4 impact-resistant shingles rated for 130 mph wind resistance perform best in Perryton's High Plains exposure. For commercial and agricultural buildings, standing seam metal roofing with concealed fasteners gives the best wind performance against the sustained winds that accelerate across open farmland. Both material types handle the sub-zero winters, 100-plus degree summers, and severe hail that hit Ochiltree County each year.",
  },
  {
    question: "How does Perryton's far-northern Panhandle location affect storms?",
    answer:
      "Perryton sits in Ochiltree County roughly seven miles from the Oklahoma border at the northern edge of the Texas Panhandle, directly in the path of supercell storms moving northeast from the southern Plains. The combination of northerly winter fronts producing ice storms and spring supercells producing softball-sized hail creates year-round roof stress. Open farmland surrounding the city allows winds to accelerate without obstruction, so wind ratings should exceed what is standard for urban areas farther south.",
  },
  {
    question: "How do you handle storm damage in Perryton from Amarillo?",
    answer:
      "Perryton is approximately 120 miles northeast of our Amarillo headquarters via US-83. After a storm in Ochiltree County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability and crew routing from Amarillo; we are not an emergency-dispatch service.",
  },
  {
    question: "Are ice storms a roofing concern in Perryton?",
    answer:
      "Yes. As the northernmost major community in our Panhandle service area, Perryton experiences more ice storms than cities farther south. Freezing rain creates heavy ice loads on roof structures, and ice dams form when heat escapes through poorly insulated attics and melts snow that refreezes at the eaves. We install ice and water shield underlayment along eaves and valleys and verify adequate attic insulation and ventilation to prevent ice dam formation on Ochiltree County homes.",
  },
  {
    question: "Will insurance cover my Perryton hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation with photographs, measurements, and detailed reports that meet adjuster requirements. For agricultural buildings, we also help correlate damage with National Weather Service storm reports and coordinate with carriers that handle farm and ranch policies.",
  },
];

export default function PerrytonRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Perryton"
        citySlug="perryton"
        h1="Perryton Roofing Company — Tornado Country Storm Recovery"
        eyebrow="EF-3 rebuilds, ag-building metal roofs & Ochiltree County storm-resilience work"
        image="/images/heroes/cities/perryton-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Perryton", url: "/perryton-texas-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Perryton TX — residential, commercial, and agricultural roof replacement, hail and wind damage repair, and insurance documentation for Ochiltree County properties recovering from the June 2023 tornado and ongoing Panhandle storms.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-perryton/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-perryton/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-perryton/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Perryton Roofing in Tornado Country
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Perryton, the Ochiltree County seat with approximately 8,500 residents, sits in the
                far northern Texas Panhandle just seven miles south of the Oklahoma border. Known as
                the &ldquo;Wheat Heart of the Nation,&rdquo; the city anchors a regional economy
                built on wheat farming, cattle ranching, and grain storage. 5 Star Commercial Roofing
                provides residential, commercial, and agricultural roofing services throughout
                Perryton and Ochiltree County, with crews routing in from our Amarillo headquarters
                approximately 120 miles southwest via US-83.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Perryton&apos;s economy depends on the wheat and cattle industries, with grain
                elevators, equipment dealerships, and ag-service businesses making up a large share
                of the local commercial base. These properties demand specialized roofing — metal
                panels with enhanced corrosion coatings for chemical exposure, ventilation systems
                that resist grain dust clogging, and structural designs that handle the constant
                vibration of harvest traffic and processing equipment. Downtown Perryton along South
                Main Street and the historic district also include older commercial buildings that
                require restoration-quality roofing work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The June 15, 2023 EF-3 tornado that struck Perryton remains the defining recent
                weather event in Ochiltree County, killing three people and causing widespread roof
                and structural damage across the city. That storm sits inside a broader pattern:
                Perryton&apos;s far-northern Panhandle location puts it in the path of spring
                supercells producing softball-sized hail, sustained winds over 50 mph with gusts
                exceeding 70 mph, and ice storms during winter that southern Panhandle cities
                rarely see. Open farmland around the city offers no windbreak, so wind uplift loads
                regularly exceed standard code minimums. These conditions demand expert installation
                and premium materials rated for extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Perryton</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Residential, commercial, and agricultural roofing coverage across Perryton and
              the rest of Ochiltree County. Installs span Class 4 impact-rated asphalt shingles
              from GAF, CertainTeed, and Malarkey, 24-gauge standing seam metal on farm and
              ranch buildings, and TPO or R-panel systems for grain elevators and co-op
              facilities along the Highway 83 corridor. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-perryton/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Perryton</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Perryton Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From homes near Wheatheart Park and the Perryton ISD campuses to grain
                elevators and co-op facilities on the city edges, and ranch outbuildings
                spread across Ochiltree County wheat country, Class 4 hail-rated installations
                and storm-damage claim work cover every part of the Perryton area:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">In-Town Neighborhoods</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Downtown Historic District</li>
                    <li>&#10003; South Main Street corridor</li>
                    <li>&#10003; Wheatheart Park area</li>
                    <li>&#10003; North Perryton residential</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Outlying Districts</h3>
                  <ul className="space-y-2">
                    <li>&#10003; US-83 commercial corridor</li>
                    <li>&#10003; SH-15 / SH-70 corridors</li>
                    <li>&#10003; Equity Co-Op industrial area</li>
                    <li>&#10003; Ochiltree County Airport area</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Booker &amp; Farnsworth</li>
                    <li>&#10003; Waka &amp; Wolf Creek</li>
                    <li>&#10003; All Ochiltree County</li>
                    <li>&#10003; Rural acreage &amp; ranches</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                The Downtown Historic District along South Main Street holds early 20th-century
                commercial buildings that need careful restoration-quality roofing, while the
                Equity Co-Op industrial area on the city&apos;s edges contains grain elevators and
                ag-service facilities that demand specialized metal systems. Whether you&apos;re in
                town, along the US-83 corridor, or on rural acreage anywhere in Ochiltree County,
                we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Severe Weather in Perryton
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  June 15, 2023 &mdash; EF-3 Tornado
                </h3>
                <p className="text-gray-700">
                  A long-track EF-3 tornado tore through Perryton during the early evening of June
                  15, 2023, killing three people and injuring dozens. Mobile home parks on the
                  south side of the city sustained catastrophic damage, businesses along Main
                  Street had roofs torn off, and the Perryton Equity Co-Op grain facilities
                  suffered heavy structural losses. Federal disaster assistance was authorized for
                  Ochiltree County in the weeks that followed, and rebuilding work continues.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Spring Supercell Season &mdash; Annual Pattern
                </h3>
                <p className="text-gray-700">
                  Between March and June each year, Ochiltree County experiences supercell
                  thunderstorms producing softball-sized hail, straight-line winds exceeding 70
                  mph, and periodic tornado activity. Perryton sits at the northern edge of
                  Tornado Alley, and the National Weather Service Amarillo office regularly issues
                  multiple severe weather warnings per month for the county during peak season.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  Winter Ice Storms &amp; High Plains Derechos
                </h3>
                <p className="text-gray-700">
                  As the northernmost community in our Panhandle service area, Perryton sees
                  freezing rain events that create heavy ice loads on roof structures, particularly
                  on older buildings. Summer months also bring High Plains derechos &mdash;
                  long-lived straight-line wind events &mdash; that can produce widespread roof
                  damage across multiple counties in a single afternoon.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Ochiltree County&apos;s exposure to severe weather year-round means roofing
                investments here need to be sized for the worst-case storm, not the average week.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Perryton-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Perryton &amp; Ochiltree County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Northern Panhandle Storm Path
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Perryton&apos;s position seven miles south of the Oklahoma border puts it in the
                  direct path of severe weather systems tracking northeast from the southern
                  Plains. The June 2023 EF-3 tornado demonstrated how catastrophic a single event
                  can be, but the broader pattern of spring supercells and softball-sized hail is
                  the year-in, year-out concern. Class 4 impact-resistant materials and 130 mph
                  wind-rated shingles are strongly recommended for all Perryton properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Agricultural &amp; Grain Facility Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Perryton&apos;s status as the Wheat Heart of the Nation means grain elevators,
                  equipment barns, processing buildings, and farm shops dominate the commercial
                  roofing market. These properties need chemical-resistant metal panels with
                  enhanced corrosion coatings to resist agricultural chemicals, ventilation
                  systems engineered to resist grain dust clogging, and structural designs that
                  handle the constant vibration of grain trucks and harvest equipment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  High Plains Wind &amp; Open Farmland Exposure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The open farmland surrounding Perryton offers no natural windbreak. Prevailing
                  southerly winds during the growing season and harsh northerly winds during
                  winter routinely accelerate across the plains, producing uplift loads that
                  exceed minimum building code requirements. Standing seam metal roofing with
                  concealed fasteners and asphalt shingles rated for at least 130 mph wind
                  resistance are baseline material requirements for this exposure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Winter Ice &amp; Temperature Cycling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Perryton winters drop well below freezing while summers regularly push past 100
                  degrees, creating extreme thermal cycling that stresses fasteners, sealants, and
                  underlayment. Freezing rain produces ice loads and ice dams on poorly insulated
                  homes, while summer roof surface temperatures reach 160 degrees or higher. Ice
                  and water shield underlayment at eaves and valleys, adequate attic ventilation,
                  and reflective metal or TPO membranes all extend roof life in this climate.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Perryton City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Perryton: Wheat Heart of the Nation</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">US-83 Corridor &amp; Regional Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Perryton&apos;s position along US-83 makes it the commercial hub of the far
                  northern Texas Panhandle and a regional service center for surrounding
                  Oklahoma and Kansas farming communities. The corridor supports hotels, truck
                  stops, restaurants, equipment dealers, and ag-service businesses that all
                  require reliable commercial roofing. The historic Main Street district features
                  early 20th-century commercial buildings from the original townsite period that
                  need specialized roofing to maintain architectural character while handling
                  modern Panhandle weather extremes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  The Perryton Equity Co-Op anchors the local grain industry with elevators and
                  processing facilities scattered around the city. Ochiltree General Hospital
                  serves a multi-county region and requires institutional-grade roofing
                  maintenance. Perryton ISD campuses, the Museum of the Plains, and the Ochiltree
                  County government buildings all add to the institutional roofing base. Oil and
                  gas producers operating in the Anadarko Basin also maintain field facilities and
                  yards throughout the county that need specialized commercial roofing.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Downtown Historic District
                </h4>
                <p className="text-sm text-gray-600">
                  Early 20th-century commercial buildings along South Main Street requiring
                  careful restoration-quality roofing work
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Equity Co-Op &amp; Grain Facilities</h4>
                <p className="text-sm text-gray-600">
                  Grain elevators, processing buildings, and ag-service facilities requiring
                  chemical-resistant metal roofing systems
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Rural Ochiltree County</h4>
                <p className="text-sm text-gray-600">
                  Ranches, farm shops, and outbuildings across open Panhandle terrain with
                  maximum wind exposure
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Perryton Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Perryton Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, tornado-damage
              restoration, or a complete roof replacement, 5 Star Commercial Roofing serves
              Perryton and Ochiltree County with expert craftsmanship and honest pricing. Most
              hail damage repairs are covered by insurance.
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
                href="/borger-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Borger
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
            "@id": "https://5starroofingpros.com/perryton-texas-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Perryton, Texas and Ochiltree County. Storm and tornado damage restoration, residential and commercial roofing, agricultural and grain facility specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Perryton",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "36.3984",
              longitude: "-100.8077",
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
                name: "Perryton",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Ochiltree County",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="perryton-texas-roofing" />
    </div>
  );
}
