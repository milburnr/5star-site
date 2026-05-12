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
  alternates: { canonical: "https://5starroofingpros.com/big-spring-tx-roofing/" },
  title: "Roofing in Big Spring TX | 5 Star Roofing",
  description:
    "Roofing in Big Spring. Howard County storm damage specialists. Residential and commercial roofing near Big Spring State Park. Call (806) 622-6041",
  openGraph: {
    title: "Roofing in Big Spring TX | 5 Star Roofing",
    description:
      "Roofing in Big Spring. Howard County storm damage specialists. Residential and commercial roofing near Big Spring State Park. Call (806) 622-6041",
    url: "https://5starroofingpros.com/big-spring-tx-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-23-1280w.webp",
        width: 1280,
        height: 720,
        alt: "Completed asphalt shingle roof installation in Big Spring TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Big Spring?",
    answer:
      "Big Spring experiences severe hailstorms multiple times per year due to its location along the Caprock Escarpment where warm Gulf air lifts rapidly to produce supercell storms. The 2019 hailstorm caused widespread damage across the city. Storms typically produce golf ball to baseball-sized hail capable of totaling residential and commercial roofs in minutes.",
  },
  {
    question: "Do you work on industrial and refinery buildings in Big Spring?",
    answer:
      "Yes, we provide specialized commercial roofing for industrial facilities including oil field buildings, the Alon USA refinery complex, and warehouse operations throughout Howard County. We install chemical-resistant PVC membranes, heavy-duty metal roofing, and TPO systems designed for industrial applications with high-traffic roof access.",
  },
  {
    question: "What roofing materials handle Big Spring's heat and UV best?",
    answer:
      "For residential homes, reflective metal roofing or UV-stabilized Class 4 impact-resistant shingles perform best at Big Spring's 2,400 feet elevation. For commercial buildings, white TPO or PVC membranes reflect up to 85% of solar heat, reducing cooling costs by 20-30%. Both material types handle Big Spring's extreme temperature swings and intense UV radiation year-round.",
  },
  {
    question: "How does Scenic Mountain's geography affect Big Spring roofing?",
    answer:
      "Big Spring sits where the Caprock Escarpment meets the rolling plains at approximately 2,400 feet elevation. This geographic transition creates a corridor for severe thunderstorms as warm air lifts along the escarpment. Properties on higher ground near Scenic Mountain and Big Spring State Park face additional wind exposure. Roofing installations in these areas require enhanced wind uplift ratings and careful attention to directional wind loads.",
  },
  {
    question: "How do you handle storm damage in Big Spring?",
    answer:
      "After a storm in Big Spring or Howard County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability; we are not an emergency-dispatch service.",
  },
  {
    question: "Does the VA Medical Center or Big Spring State Hospital use your services?",
    answer:
      "We serve institutional and government facilities throughout Howard County. Large campus-style buildings like hospitals and educational facilities require specialized commercial roofing with TPO or metal systems, phased installation to maintain operations, and compliance with government contracting requirements. Contact us for institutional project consultations.",
  },
  {
    question: "Will insurance cover my Big Spring hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. We provide comprehensive damage documentation with photographs, measurements, and detailed reports that meet adjuster requirements. Our claim approval rate exceeds 95% across Howard County and the Permian Basin region.",
  },
];

export default function BigSpringRoofingPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Big Spring", url: "/big-spring-tx-roofing/" },
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
            <h1 className="hero-title">Big Spring Roofing Contractor You Can Count On</h1>
            <p className="hero-subtitle">
              Howard County Storm Damage Experts &amp; Complete Roofing Services
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
              5 Star Roofing provides full roofing services in Big Spring TX — residential and commercial repairs, roof replacement, and hail damage documentation for Howard County properties.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-big-spring/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-big-spring/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-big-spring/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Your Trusted Roofing Partner in Big Spring, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Big Spring, the Howard County seat with approximately 28,000 residents, sits at the
                crossroads of US-87 and I-20 in the heart of West Texas. Known for Big Spring State
                Park and Scenic Mountain, the city has a long history tied to oil production,
                ranching, and the Permian Basin energy sector. 5 Star Commercial Roofing provides
                comprehensive roofing services throughout Big Spring and Howard County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Big Spring&apos;s economy is anchored by the oil and gas industry, with major
                employers including Alon USA refinery and numerous oilfield service companies. The
                VA Medical Center, Big Spring State Hospital, and Howard College also contribute
                significantly to the local economy. These institutional and industrial properties
                require specialized commercial roofing expertise, from TPO membrane systems on
                flat-roof facilities to metal roofing on warehouses and maintenance buildings.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                West Texas weather hits Big Spring hard. The city sits at approximately 2,400 feet
                elevation where the Caprock Escarpment meets the rolling plains, creating a corridor
                for severe thunderstorms. Between March and September, supercell storms produce
                damaging hail, straight-line winds exceeding 70 mph, and occasional tornadoes. The
                2019 hailstorm that struck Big Spring caused widespread roof damage across
                residential and commercial properties. Summer temperatures regularly exceed 100
                degrees, and the area receives intense UV radiation that degrades roofing materials
                faster than in lower-elevation cities. These conditions demand expert installation
                and premium materials rated for extreme weather.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Big Spring</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout Big
              Spring and Howard County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-big-spring/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Big Spring</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Big Spring Neighborhoods We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From established neighborhoods near Comanche Trail Park to newer developments on the
                city&apos;s edges, we provide expert roofing services throughout Big Spring:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Established Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Kentwood Addition</li>
                    <li>&#10003; College Park</li>
                    <li>&#10003; Highland South</li>
                    <li>&#10003; Coronado Hills</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Central Neighborhoods</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Monticello</li>
                    <li>&#10003; Parkhill Terrace</li>
                    <li>&#10003; Suburban Heights</li>
                    <li>&#10003; Downtown Historic District</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Scenic Mountain / State Park area</li>
                    <li>&#10003; All Howard County</li>
                    <li>&#10003; I-20 Corridor properties</li>
                    <li>&#10003; Rural acreage &amp; ranches</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Kentwood Addition is one of Big Spring&apos;s most established residential
                communities, while Coronado Hills sits adjacent to the VA Medical Center and
                Comanche Trail Park. Whether you&apos;re near Scenic Mountain, along the I-20
                corridor, or anywhere in Howard County, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Recent Storm Events */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Recent Hail Events in Big Spring
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-2">
                  June 8, 2025 &mdash; Disaster Declaration
                </h3>
                <p className="text-gray-700">
                  Baseball-sized hail and 119 mph wind gusts struck Big Spring, prompting Mayor
                  Robert H. Moore III to issue a Declaration of Local Disaster. The Settles Hotel
                  had dozens of windows blown out, the Big Spring Airpark and Hangar 25 sustained
                  significant damage, and the historic city auditorium was damaged. Widespread
                  residential roof and vehicle damage occurred across the city.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  May 16&ndash;17, 2019 &mdash; Severe Hail
                </h3>
                <p className="text-gray-700">
                  NWS Midland documented severe hail storms across Big Spring with stones reaching
                  2.75 inches. Howard County recorded 10 hail reports within 10 miles of Big Spring
                  during 2019, with this May event causing the most widespread residential damage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-brand-brown mb-2">
                  2021 &mdash; Record-Setting Hail Season
                </h3>
                <p className="text-gray-700">
                  Howard County recorded 15 hail reports within 10 miles of Big Spring during 2021,
                  including stones measuring 4.25 inches&mdash;softball-plus size. This was the
                  largest hail documented near Big Spring in recent history, causing extensive roof
                  damage across residential and commercial properties.
                </p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Big Spring has been under 51 severe weather warnings in the past 12 months, with 75
                on-the-ground hail reports from trained spotters on record in Howard County.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Big Spring-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Big Spring &amp; Howard County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Caprock Escarpment Storm Corridor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Big Spring&apos;s location along the Caprock Escarpment makes it a hotspot for
                  severe thunderstorms. Warm, moist air from the Gulf lifts rapidly along the
                  escarpment, fueling supercell storms that produce large hail and damaging winds.
                  The June 2025 disaster declaration&mdash;with baseball-sized hail and 119 mph
                  gusts&mdash;demonstrates how quickly widespread roof damage can occur. Class 4
                  impact-resistant materials are strongly recommended for all Big Spring properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Oil Field &amp; Industrial Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Big Spring&apos;s oil and gas economy means numerous commercial and industrial
                  facilities requiring specialized roofing. From the Alon refinery complex to
                  oilfield service yards and pipe storage facilities, these properties need
                  chemical-resistant membranes, heavy-duty metal roofing, and systems that can
                  handle high-traffic roof access for maintenance equipment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Heat &amp; UV Degradation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Big Spring summers regularly push past 100 degrees, with roof surface temperatures
                  reaching 160 degrees or higher. Combined with intense UV radiation and low
                  humidity, these conditions accelerate the breakdown of petroleum-based roofing
                  materials. Reflective TPO and metal roofing systems reduce cooling costs while
                  providing superior durability against heat and UV exposure.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Big Spring City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Big Spring: Crossroads of West Texas</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">I-20 Corridor &amp; Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Big Spring&apos;s position along I-20 makes it a natural stopping point between
                  Midland-Odessa and Abilene. The I-20 corridor has attracted hotels, truck stops,
                  restaurants, and commercial developments that all require reliable commercial
                  roofing. The historic downtown district along Main Street features buildings from
                  the early oil boom era that need specialized roofing to maintain their
                  architectural character while handling modern weather extremes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Major Employers &amp; Institutions</h3>
                <p className="text-gray-600 mb-4">
                  The VA Medical Center serves veterans across a vast West Texas region and requires
                  institutional-grade roofing maintenance. Big Spring State Hospital is another
                  major campus requiring ongoing commercial roofing services. Howard College
                  provides higher education and workforce training, with campus buildings that need
                  durable roofing solutions. The Alon USA refinery is the largest industrial
                  employer, with specialized roofing needs for chemical-exposure environments.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  Scenic Mountain &amp; State Park Area
                </h4>
                <p className="text-sm text-gray-600">
                  Elevated residential properties near Big Spring State Park facing increased wind
                  exposure from the mesa terrain
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Historic Downtown District</h4>
                <p className="text-sm text-gray-600">
                  Early 20th-century commercial buildings along Main Street requiring careful
                  restoration-quality roofing work
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Industrial &amp; Refinery Zone</h4>
                <p className="text-sm text-gray-600">
                  Alon USA complex and surrounding oil field service facilities requiring
                  chemical-resistant roofing systems
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Big Spring Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Big Spring Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, emergency repairs, or
              a complete roof replacement, 5 Star Commercial Roofing serves Big Spring with expert
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
                href="/midland-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Midland
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/odessa-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Odessa
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/snyder-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Snyder
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
            "@id": "https://5starroofingpros.com/big-spring-tx-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            description:
              "Professional roofing contractor serving Big Spring, Texas and Howard County. Storm damage repair, residential and commercial roofing, oil field facility specialist.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Big Spring",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "32.2504",
              longitude: "-101.4787",
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
                name: "Big Spring",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="big-spring-tx-roofing" />
    </div>
  );
}
