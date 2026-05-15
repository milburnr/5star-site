import { FadeIn } from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Home, Landmark, Phone, Star, Zap } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-repair-pampa/" },
  title: "Roof Repair Pampa TX | 5 Star Roofing",
  description:
    "Expert roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Repair Pampa TX | 5 Star Roofing",
    description:
      "Expert roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-repair-pampa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/pampa-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofRepairPampaPage() {
  return (
    <>
      {" "}      {/* Sticky Contact Bar */}
      <StickyContactBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-repair-pampa/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/pampa-hero.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 35.5364, longitude: -100.9599 },
            url: "https://5starroofingpros.com/roof-repair-pampa/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              name: "Pampa",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            openingHoursSpecification: {
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
            description:
              "Expert roof repair services in Pampa, TX. Free inspections, insurance claim assistance",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Roof Repair",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              name: "5 Star Roofing",
              parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
              telephone: "(806) 622-6041",
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
                latitude: 35.1768,
                longitude: -101.859,
              },
              openingHoursSpecification: {
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
            },
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              name: "Pampa",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does roof repair cost in Pampa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you repair my leaking roof in Pampa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We schedule repairs as quickly as possible. Standard repairs are typically scheduled within 3-5 business days. Most repairs complete in 2-4 hours depending on complexity.",
                },
              },
              {
                "@type": "Question",
                name: "Should I repair or replace my roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Repair makes sense for roofs under 15 years old with localized damage affecting less than 30% of surface area. Replacement is recommended when roofs exceed 20 years, show widespread damage, or require multiple repair areas. Our free inspections provide honest assessments—we recommend the most cost-effective solution for your situation.",
                },
              },
              {
                "@type": "Question",
                name: "Do you warranty your roof repairs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all our repairs include workmanship warranties ranging from 1-5 years depending on repair type. Materials carry manufacturer warranties. We stand behind our work—if a repair fails due to installation error, we fix it at no charge. This warranty protection gives you peace of mind that repairs will last.",
                },
              },
              {
                "@type": "Question",
                name: "What are the most common roof repairs in Pampa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In Pampa, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The agricultural community's exposure to High Plains winds and frequent hailstorms creates specific damage patterns we repair regularly.",
                },
              },
            ],
          }),
        }}
      />
            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="pampa"
        city="Pampa"
        service="Roof Repair"
        h1="Roof Repair in Pampa, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/pampa-hero.jpg"
      
      breadcrumbItems={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Roof Repair",
            url: "/roof-repair/",
          },
          {
            name: "Pampa",
            url: "/roof-repair-pampa/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Repair for homes and businesses in Pampa, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Pampa as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Repair scope: leak isolation, flashing and seal repairs, partial reroofs, and storm-related fixes.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Pampa Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in the Texas Panhandle creates unique roofing challenges.
              Agricultural community in the High Plains. Texas Panhandle weather extremes—6-8 annual
              hailstorms, High Plains winds 60+ mph, and agricultural community exposure to High
              Plains winds and frequent hailstorms—demand superior roofing materials and expert
              installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 220+ Pampa properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with Pampa
              property owners, and handle complete insurance claims. Most homeowners pay only their
              deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does roof repair cost in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair costs vary widely based on damage extent and accessibility. Simple shingle
                  replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex
                  structural repairs range from $1,500-$5,000. We provide free inspections with
                  detailed written estimates before any work begins. Many repairs are
                  insurance-covered, especially storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair my leaking roof in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We schedule leak repairs as quickly as possible.
                  Standard repairs are typically scheduled within 3-5 business days. Most repairs
                  complete in 2-4 hours depending on complexity. We understand roof leaks cause
                  stress and damage—we prioritize quality work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I repair or replace my roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair makes sense for roofs under 15 years old with localized damage affecting
                  less than 30% of surface area. Replacement is recommended when roofs exceed 20
                  years, show widespread damage, or require multiple repair areas. Our free
                  inspections provide honest assessments—we recommend the most cost-effective
                  solution for your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you warranty your roof repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, all our repairs include workmanship warranties ranging from 1-5 years
                  depending on repair type. Materials carry manufacturer warranties. We stand behind
                  our work—if a repair fails due to installation error, we fix it at no charge. This
                  warranty protection gives you peace of mind that repairs will last.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the most common roof repairs in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Pampa, the most common repairs include hail-damaged shingles from the area's
                  7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed
                  flashing around chimneys and vents, and leak repairs. The agricultural community's
                  exposure to High Plains winds and frequent hailstorms creates specific damage
                  patterns we repair regularly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Visit Our Amarillo Location
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Does Pampa Roof Repair Services We Provide Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Oil & Gas Industry Specialist
                </h3>
                <p className="text-gray-700 mb-4">
                  Pampa sits in the middle of the Texas Panhandle oil and gas patch, with
                  Cabot Corporation's carbon black plant, active wells across Gray County, and
                  the support shops that keep them running. We repair TPO and modified bitumen
                  on those flat-roofed buildings and asphalt shingle systems on the homes that
                  house the crews.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• TPO and modified bitumen repairs on oilfield shop roofs</li>
                  <li>• Flashing and curb work around gas-plant rooftop equipment</li>
                  <li>• Shingle and metal repairs on energy-worker homes</li>
                  <li>• R-panel metal patches on equipment shelters and outbuildings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Gray County Seat Services
                </h3>
                <p className="text-gray-700 mb-4">
                  As the Gray County seat, Pampa houses the courthouse, county offices, and
                  school district buildings that fall under the city's adopted version of the
                  IBC and IRC. Public-building work requires prevailing wage compliance and
                  paperwork that matches what the county wants to see at closeout.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Repairs on Gray County courthouse and annex buildings</li>
                  <li>• Pampa ISD facility roof patches and flashing work</li>
                  <li>• Municipal building TPO, EPDM, and modified bitumen repairs</li>
                  <li>• Code compliance against the city-adopted IBC edition</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Historic Downtown Preservation
                </h3>
                <p className="text-gray-700 mb-4">
                  Downtown Pampa still carries its 1920s and 30s oil boom storefronts along
                  Cuyler and Foster, many with parapet walls and built-up flat roofs. Repairs
                  on these buildings need modified bitumen or low-slope membranes that perform
                  like a modern roof but stay invisible from the street.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Modified bitumen and built-up roof repairs behind parapet walls</li>
                  <li>• Standing seam metal that matches an original profile</li>
                  <li>• Flashing and coping repairs on brick parapets</li>
                  <li>• Patches that preserve street-level sightlines downtown</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Energy Worker Community
                </h3>
                <p className="text-gray-700 mb-4">
                  A lot of Pampa homes are on shift-worker schedules. Crews come off rigs at
                  odd hours and need sleep during the day. We coordinate roof repairs around
                  shift changes so a homeowner working overnight on a rig is not woken up by
                  nail guns at 7 AM.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Asphalt shingle and Class 4 impact-rated shingle repairs</li>
                  <li>• Flashing repairs around vents, chimneys, and skylights</li>
                  <li>• Scheduling around oilfield shift rotations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Are Pampa's Energy Industry Environment?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <Zap className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Oil & Gas Operations</h3>
                <p className="text-gray-700">
                  Gray County sits over the Anadarko and Hugoton gas basins. Pampa's industrial
                  belt around Highway 60 and the old Celanese site exposes flat roofs to airborne
                  hydrocarbons that age standard TPO faster than in a residential setting.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <Landmark className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">County Government</h3>
                <p className="text-gray-700">
                  The Gray County courthouse, M.K. Brown Auditorium, and Pampa ISD campuses
                  all require contractors who can produce permits, insurance certificates, and
                  closeout paperwork that match Pampa's adopted IBC and IRC.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <Home className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Energy Community</h3>
                <p className="text-gray-700">
                  Many Pampa neighborhoods house Cabot Corporation and oilfield service crews
                  whose shift patterns vary widely. Asphalt shingle and Class 4 impact-rated
                  shingle work is scheduled on a calendar that respects those shifts.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Industrial Environmental Factors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Hydrocarbon Exposure</h4>
                  <p className="text-gray-700 mb-4">
                    Oil and gas operations in Pampa create airborne hydrocarbons and industrial
                    chemicals that can affect roofing material selection and longevity. Our material
                    choices account for this industrial environment.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">
                    Energy Sector Schedules
                  </h4>
                  <p className="text-gray-700 mb-4">
                    The oil and gas industry operates on demanding schedules with operations. Our
                    service delivery accommodates energy sector timing requirements and storm
                    response needs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Does the Pampa Roof Repair Process Work?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Energy Sector Response Coordination
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Understanding that Pampa's energy sector operates continuously, we
                      coordinate our post-storm documentation with oil and gas facility operations and worker
                      shift schedules to minimize disruption.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Shift schedule accommodation</li>
                      <li>• Industrial safety protocol compliance</li>
                      <li>• Oil field facility prioritization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Industrial Environment Assessment
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Our inspectors evaluate both weather damage and industrial environmental
                      factors unique to Pampa's oil and gas operations, including exposure to
                      hydrocarbons and industrial processes.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Hydrocarbon exposure evaluation</li>
                      <li>• Industrial contamination assessment</li>
                      <li>• Energy facility building codes</li>
                      <li>• County government compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Energy-Grade Material Selection
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Around Pampa's gas plants and oilfield service yards, we specify TPO or
                      PVC membranes from Carlisle or Firestone rated for hydrocarbon contact,
                      and Class 4 impact-rated asphalt shingles on homes inside the industrial
                      blast zone where dust and chemical fallout are part of daily life.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Carlisle or Firestone TPO and PVC where chemicals are in the air</li>
                      <li>• UL 2218 Class 4 asphalt shingles for hail-rated residential work</li>
                      <li>• R-panel and standing seam metal for shop and shelter buildings</li>
                      <li>• Modified bitumen on parapet-wall downtown structures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Industry-Coordinated Installation
                    </h3>
                    <p className="text-gray-700 mb-3">
                      On active oil and gas sites in Gray County, we sign in at the facility
                      gate, complete contractor safety orientation, and stage materials clear
                      of process areas. Hot work permits and tie-off requirements get handled
                      before a crew steps on the roof.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Facility-issued safety orientation and gate sign-in</li>
                      <li>• OSHA fall protection tied to facility anchor points</li>
                      <li>• Hot work permits before any torch or welding on the membrane</li>
                      <li>• Lockout protocols around live process and electrical equipment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Industrial Performance Monitoring
                    </h3>
                    <p className="text-gray-700 mb-3">
                      After a repair on a Pampa industrial roof, we schedule a follow-up visit
                      to look for membrane shrinkage at seams, coating wear from hydrocarbon
                      fallout, and any drainage issues caused by Panhandle dust collecting on
                      flat roofs. Photos go in the file with the original repair report.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Follow-up inspection on TPO and modified bitumen seam health</li>
                      <li>• Coating-wear check near gas plant exhaust and flare paths</li>
                      <li>• Drain and scupper cleanout after dust events on flat roofs</li>
                      <li>• Manufacturer warranty registration with Carlisle or Firestone</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Choose 5 Star for Your Pampa Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Energy Industry Experience
                </h3>
                <p className="text-gray-700 mb-4">
                  We understand the unique demands of oil and gas operations in Gray County,
                  providing specialized roofing services for energy sector facilities and worker
                  housing throughout Pampa.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 220+ Pampa area projects completed</li>
                  <li>• Oil and gas facility expertise</li>
                  <li>• Energy worker housing specialization</li>
                  <li>• Industrial safety compliance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Industrial Environment Solutions
                </h3>
                <p className="text-gray-700 mb-4">
                  Pampa industrial roofs see hydrocarbons in the air, fine carbon black dust
                  from the Cabot plant, and Panhandle hail that can hit any building on any
                  schedule. Our material picks lean on Carlisle and Firestone TPO and PVC for
                  flat work, with Class 4 impact-rated shingles for residential.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Carlisle and Firestone TPO and PVC for hydrocarbon exposure</li>
                  <li>• UL 2218 Class 4 shingles to handle Panhandle hail</li>
                  <li>• Permits and submittals matching Pampa's adopted IBC</li>
                  <li>• Coating systems verified against manufacturer data sheets</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Energy Sector Support</h3>
                <p className="text-gray-700 mb-4">
                  Oil and gas facilities in Pampa run nights and weekends. When a Panhandle
                  hailstorm tears up a membrane on a Sunday morning, the call gets answered
                  the same day. Our crews stage tarp and patch material out of Amarillo and
                  run down Highway 60 to Pampa in about an hour.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• After-hours dispatch for active leaks on facility roofs</li>
                  <li>• Temporary tarp or membrane patches to stop water until full repair</li>
                  <li>• Coordination with facility operations for tie-in scheduling</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Gray County Expertise</h3>
                <p className="text-gray-700 mb-4">
                  Pampa pulls permits through the city, and Gray County has its own paperwork
                  for any work on county-owned buildings. We carry the contractor registration,
                  insurance limits, and lien-release forms that the city, county, and school
                  district all want to see before final payment.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• City of Pampa permitting and inspection coordination</li>
                  <li>• Gray County paperwork for courthouse and county-owned buildings</li>
                  <li>• Pampa ISD vendor requirements and insurance certificates</li>
                  <li>• Lien waivers and closeout documents at substantial completion</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Pampa and Gray County
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                From our Amarillo headquarters, we serve Pampa and the broader Gray County energy
                community, including residential, commercial, and industrial properties throughout
                the area:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Pampa</h4>
                  <p className="text-sm text-gray-600">County Seat & Center</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Lefors</h4>
                  <p className="text-sm text-gray-600">12 miles south</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">McLean</h4>
                  <p className="text-sm text-gray-600">20 miles east</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Laketon</h4>
                  <p className="text-sm text-gray-600">18 miles northwest</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-2">
                  Gray County Energy District
                </h4>
                <p className="text-gray-700">
                  We serve the extensive oil and gas operations throughout Gray County, including
                  drilling sites, processing facilities, and worker housing that support the
                  region's energy economy.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="pampa" currentService="roof-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert roof repair with comprehensive
            warranties and insurance claim assistance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:8066226041"
              className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg"
            >
              Call (806) 622-6041
            </a>
            <a
              href="/contact/"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg"
            >
              Schedule Free Inspection
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="roof-repair-pampa" />
      </div>
    </>
  );
}
