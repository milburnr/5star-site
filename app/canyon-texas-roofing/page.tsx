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
  alternates: { canonical: "https://5starroofingpros.com/canyon-texas-roofing/" },
  title: "Roofing Contractor Canyon TX | 5 Star Roofing",
  description:
    "Roofing in Canyon TX. Randall County storm damage specialists serving WTAMU, downtown Canyon, and the Palo Duro Canyon area. Residential and commercial. Call (806) 622-6041",
  openGraph: {
    title: "Roofing Contractor Canyon TX | 5 Star Roofing",
    description:
      "Roofing in Canyon TX. Randall County storm damage specialists serving WTAMU, downtown Canyon, and the Palo Duro Canyon area. Residential and commercial. Call (806) 622-6041",
    url: "https://5starroofingpros.com/canyon-texas-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/canyon-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Completed roof installation in Canyon TX — 5 Star Roofing",
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
    question: "How bad is hail damage in Canyon?",
    answer:
      "Canyon sits in the Texas Panhandle hail belt, with severe storms most active March through May. Baseball-sized hail is common during peak season, and the Palo Duro Canyon escarpment creates local wind patterns that intensify thunderstorm activity. Class 4 impact-resistant materials are strongly recommended for Randall County properties.",
  },
  {
    question: "Do you work on West Texas A&M campus buildings?",
    answer:
      "Yes. We have experience with educational facility roofing and work with university procurement on campus projects. WTAMU&apos;s academic buildings, dormitories, and research facilities require specialized commercial systems that meet safety codes, occupancy requirements, and the environmental controls needed for sensitive research equipment and library materials.",
  },
  {
    question: "What roofing materials handle Canyon&apos;s climate best?",
    answer:
      "For residential homes, Class 4 impact-resistant asphalt shingles or standing seam metal perform best in the Panhandle&apos;s combination of severe hail, sustained winds over 50 mph, and temperature swings from sub-zero winters to 100°F+ summers. For commercial buildings and agricultural metal structures, TPO membranes and corrugated metal roofing handle the thermal cycling and wind loads.",
  },
  {
    question: "Do you handle historic buildings in downtown Canyon?",
    answer:
      "Yes. Canyon&apos;s historic downtown around the courthouse square includes buildings from the early 1900s that need restoration-compatible roofing. We work with local preservation guidelines and use materials that maintain historical authenticity — period-appropriate options like slate or cedar shake alternatives, or modern systems specified to look historically accurate.",
  },
  {
    question: "How do you handle storm damage in Canyon?",
    answer:
      "After a storm in Canyon or Randall County, call (806) 622-6041 to schedule a free roof inspection. We document damage thoroughly for your insurance carrier — photos, measurements, and adjuster-ready reports — and help homeowners navigate the Texas Prompt Payment Act timeline. Permanent repairs and replacements are scheduled around material availability; we are not an emergency-dispatch service.",
  },
  {
    question: "Do you serve agricultural buildings in Randall County?",
    answer:
      "Yes. Randall County&apos;s agricultural operations need durable, cost-effective roofing for barns, equipment storage, and livestock facilities. We install standing seam metal for large-span buildings, properly ventilated systems for livestock comfort, and wind-resistant designs engineered for the open Panhandle wind exposure that consistently exceeds 50 mph.",
  },
  {
    question: "Will insurance cover my Canyon hail damage?",
    answer:
      "Most homeowner and commercial property insurance policies cover hail damage roof replacement minus your deductible. Texas law gives you up to 2 years to file claims. We provide comprehensive documentation with photos, measurements, and detailed reports that meet adjuster requirements, and we work directly with all major carriers serving the Texas Panhandle.",
  },
];

export default function CanyonRoofingPage() {
  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="location"
        city="Canyon"
        citySlug="canyon"
        h1="Canyon Roofing Contractor You Can Count On"
        eyebrow="Randall County Storm Damage Experts & Complete Roofing Services"
        image="/images/heroes/cities/canyon-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
          { name: "Canyon", url: "/canyon-texas-roofing/" },
        ]}
      />

      <div className="container-custom">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides full roofing services in Canyon TX — residential and commercial roofing, hail and wind damage repair, educational and museum facility systems, and agricultural metal buildings throughout Randall County.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement-canyon/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement</a>
              <a href="/commercial-roofing-canyon/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Commercial Roofing</a>
              <a href="/hail-damage-repair-canyon/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Hail Damage Repair</a>
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
                Your Trusted Roofing Partner in Canyon, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Canyon, the Randall County seat with approximately 15,400 residents, sits 16 miles
                south of Amarillo at the gateway to Palo Duro Canyon. Founded in 1889, the city
                blends a historic downtown courthouse square, the 10,000-student West Texas A&amp;M
                University campus, and the Panhandle-Plains Historical Museum into a community
                unlike anywhere else in the Texas Panhandle. 5 Star Commercial Roofing provides
                comprehensive roofing services throughout Canyon and the surrounding Randall County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Canyon&apos;s economy is built on education, agriculture, and tourism. West Texas
                A&amp;M University is the largest employer, with 1,500 faculty and staff supporting
                a campus that requires specialized commercial roofing for dormitories, classrooms,
                laboratories, and research facilities. The Panhandle-Plains Historical Museum — the
                largest history museum in Texas — demands climate-controlled roofing systems to
                protect irreplaceable artifacts. The Randall County courthouse and government
                offices, the Texas Musical Drama amphitheater complex, and the hospitality industry
                serving Palo Duro Canyon tourism round out a commercial base that depends on
                durable, purpose-built roofing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Texas Panhandle weather hits Canyon hard. Severe hailstorms are common from March
                through May, with baseball-sized hail capable of totaling a residential roof in
                minutes. Sustained winds regularly exceed 50 mph, with thunderstorm gusts past 70
                mph. The annual temperature range spans sub-zero winters to 100°F+ summers, putting
                constant thermal stress on roofing materials. Palo Duro Canyon&apos;s proximity
                creates unique wind patterns that intensify these challenges on properties along the
                escarpment.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Services Grid */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Roofing Services in Canyon</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide a full range of residential and commercial roofing services throughout
              Canyon and Randall County. Select a service below for details.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}-canyon/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="font-semibold text-brand-brown">{service.name} in Canyon</span>
              </a>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Canyon Districts We Serve</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8 text-lg">
                From the university campus to the historic courthouse square to rural Randall
                County, we provide expert roofing services throughout the Canyon area:
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">University District</h3>
                  <ul className="space-y-2">
                    <li>&#10003; West Texas A&amp;M campus</li>
                    <li>&#10003; Faculty &amp; staff housing</li>
                    <li>&#10003; Student residential areas</li>
                    <li>&#10003; Academic and research buildings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Historic Downtown</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Courthouse Square</li>
                    <li>&#10003; Main Street commercial</li>
                    <li>&#10003; Panhandle-Plains Museum area</li>
                    <li>&#10003; Texas Musical Drama complex</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-3">Surrounding Areas</h3>
                  <ul className="space-y-2">
                    <li>&#10003; Palo Duro Canyon area</li>
                    <li>&#10003; Rural Randall County</li>
                    <li>&#10003; Agricultural properties</li>
                    <li>&#10003; Hospitality &amp; tourism corridor</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Whether you&apos;re on the WTAMU campus, in a historic home near the courthouse
                square, running an agricultural operation in rural Randall County, or managing a
                hotel near Palo Duro Canyon, we serve your area.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Canyon-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges in Canyon &amp; Randall County
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Severe Panhandle Hail
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Canyon sits in one of the most hail-prone regions in the country. Spring and early
                  summer thunderstorms regularly produce baseball-sized hail capable of destroying a
                  standard asphalt shingle roof in minutes. Class 4 impact-resistant materials
                  qualify for insurance discounts up to 30% and are strongly recommended for all
                  Randall County properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  High Winds &amp; Palo Duro Effects
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sustained Panhandle winds regularly exceed 50 mph, with severe-weather gusts past
                  70 mph. Palo Duro Canyon&apos;s proximity creates additional wind patterns on
                  properties along the escarpment. Our installations use enhanced fastening
                  schedules that exceed minimum code requirements and are rated for high-wind
                  regions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Educational &amp; Institutional Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  WTAMU&apos;s extensive campus requires specialized commercial roofing for
                  laboratories, libraries, dormitories, and academic buildings. These projects
                  require coordination with university procurement, compliance with educational
                  facility safety codes, and the ability to phase installations around academic
                  schedules and active campus operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Museum &amp; Historic Building Roofing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Panhandle-Plains Historical Museum and Canyon&apos;s historic downtown require
                  specialized work — advanced waterproofing to protect artifacts, insulated systems
                  for consistent climate control, and restoration-compatible materials that maintain
                  the architectural authenticity of buildings from the early 1900s.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Agricultural &amp; Ranch Buildings
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Randall County&apos;s wheat, sorghum, corn, and cattle operations require durable,
                  cost-effective roofing for barns, equipment storage, and livestock facilities. We
                  install standing seam metal for large-span buildings, properly ventilated systems
                  for livestock comfort, and wind-resistant designs for the open agricultural wind
                  exposure that consistently exceeds 50 mph.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Canyon City-Specific Details */}
        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Canyon: Education Capital of the Panhandle</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">WTAMU &amp; Education</h3>
                <p className="text-gray-600 mb-4">
                  West Texas A&amp;M University is the city&apos;s economic engine — 10,000+
                  students and 1,500 employees on a campus that continues to expand. Campus
                  facilities require specialized commercial roofing designed for high-occupancy
                  environments, energy-efficient systems to reduce operating costs across large
                  buildings, and historic-preservation work for older campus structures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Tourism &amp; Hospitality</h3>
                <p className="text-gray-600 mb-4">
                  Palo Duro Canyon State Park draws visitors year-round and supports hotels,
                  restaurants, and visitor services throughout Canyon. The Texas Musical Drama
                  outdoor amphitheater operates seasonally and requires weather-resistant systems
                  for support facilities. These commercial properties need attractive, durable
                  roofing that can handle both heavy use and extreme weather exposure.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">
                  WTAMU Campus
                </h4>
                <p className="text-sm text-gray-600">
                  University buildings requiring institutional-grade systems and coordination around
                  active campus operations
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Historic Downtown</h4>
                <p className="text-sm text-gray-600">
                  Early 1900s commercial buildings around the courthouse square requiring
                  restoration-compatible roofing
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Rural Randall County</h4>
                <p className="text-sm text-gray-600">
                  Agricultural properties and ranches requiring large-span metal building systems
                  for equipment and livestock
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Canyon Roofing FAQs
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
            <h2 className="cta-title">Ready to Protect Your Canyon Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, emergency repairs, or
              a complete roof replacement, 5 Star Commercial Roofing serves Canyon with expert
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
              Also Serving Nearby Texas Panhandle Cities
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
                href="/bushland-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Bushland
              </a>
              <span className="text-gray-400">&bull;</span>
              <a
                href="/claude-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Claude
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

      {/* auto-link:pass-2 */}
      <aside className="container-custom mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-brown mb-3">Canyon Roofing Services</h2>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
            <li><a href="/hail-damage-repair-canyon/" className="text-brand-brown hover:text-brand-gold underline">Hail Damage Repair for Canyon properties</a></li>
            <li><a href="/roof-replacement-canyon/" className="text-brand-brown hover:text-brand-gold underline">Roof Replacement for Canyon properties</a></li>
            <li><a href="/metal-roofing-canyon/" className="text-brand-brown hover:text-brand-gold underline">Metal Roofing for Canyon properties</a></li>
            <li><a href="/commercial-roofing-canyon/" className="text-brand-brown hover:text-brand-gold underline">Commercial Roofing for Canyon properties</a></li>
            <li><a href="/roof-repair-canyon/" className="text-brand-brown hover:text-brand-gold underline">Roof Repair for Canyon properties</a></li>
            <li><a href="/roof-inspections-canyon/" className="text-brand-brown hover:text-brand-gold underline">Roof Inspections for Canyon properties</a></li>
            <li><a href="/wind-damage-repair-canyon/" className="text-brand-brown hover:text-brand-gold underline">Wind Damage Repair for Canyon properties</a></li>
            <li><a href="/storm-damage-repair-canyon/" className="text-brand-brown hover:text-brand-gold underline">Storm Damage Repair for Canyon properties</a></li>
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
            "@id": "https://5starroofingpros.com/canyon-texas-roofing/",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-4-1280w.jpg",
            description:
              "Professional roofing contractor serving Canyon, Texas and Randall County. Specialists in storm damage repair, educational facility roofing for West Texas A&M University, museum and historic-building systems, agricultural metal buildings, and residential and commercial roofing throughout the Texas Panhandle.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Canyon",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "34.9799",
              longitude: "-101.9191",
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
                name: "Canyon",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Randall County",
              },
            ],
          }),
        }}
      />
      <RelatedArticles pageSlug="canyon-texas-roofing" />
    </div>
  );
}
