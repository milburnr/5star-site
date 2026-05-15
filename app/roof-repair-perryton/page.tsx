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
import { CloudHail, Landmark, Phone, Star, Wheat } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "https://5starroofingpros.com/roof-repair-perryton/" },
  title: "Roof Repair Perryton TX | 5 Star Roofing",
  description:
    "Expert roof repair in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Repair Perryton TX | 5 Star Roofing",
    description:
      "Expert roof repair in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-repair-perryton/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/perryton-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofRepairPerrytonPage() {
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
            "@id": "https://5starroofingpros.com/roof-repair-perryton/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/perryton-hero.jpg",
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
            geo: { "@type": "GeoCoordinates", latitude: 36.4, longitude: -100.8028 },
            url: "https://5starroofingpros.com/roof-repair-perryton/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              name: "Perryton",
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
              "Expert roof repair services in Perryton, TX. Free inspections, insurance claim assistance",
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
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              name: "Perryton",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert roof repair in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "How much does roof repair cost in Perryton?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you repair my leaking roof in Perryton?",
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
                name: "What are the most common roof repairs in Perryton?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In Perryton, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The wheat country agricultural environment with severe Panhandle hailstorms creates specific damage patterns we repair regularly.",
                },
              },
            ],
          }),
        }}
      />
            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="perryton"
        city="Perryton"
        service="Roof Repair"
        h1="Roof Repair in Perryton, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/perryton-hero.jpg"
      
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
            name: "Perryton",
            url: "/roof-repair-perryton/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Repair for homes and businesses in Perryton, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Perryton as part of its West Texas service area.</span></li>
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
              What Makes Our Perryton Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton's location in the Texas Panhandle creates unique roofing challenges. Wheat
              country agricultural community. Texas Panhandle weather extremes—6-8 annual
              hailstorms, High Plains winds 60+ mph, and wheat country agricultural exposure with
              severe Panhandle hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 160+ Perryton properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with
              Perryton property owners, and handle complete insurance claims. Most homeowners pay
              only their deductible when insurance covers storm damage.
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
                  How much does roof repair cost in Perryton?
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
                  How quickly can you repair my leaking roof in Perryton?
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
                  What are the most common roof repairs in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Perryton, the most common repairs include hail-damaged shingles from the area's
                  7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed
                  flashing around chimneys and vents, and leak repairs. The wheat country
                  agricultural environment with severe Panhandle hailstorms creates specific damage
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
              What Does Perryton Roof Repair Services We Provide Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Wheat Country Agricultural Specialist
                </h3>
                <p className="text-gray-700 mb-4">
                  Perryton sits at the top of the Texas Panhandle, anchoring the wheat economy of Ochiltree County with elevators, equipment sheds, and processing buildings spread across the High Plains. Most of those buildings run R-panel or standing seam metal, and that is the equipment we know.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• R-panel and standing seam metal repairs on grain elevators</li>
                  <li>• Wheat storage facility re-fastening, sealant refresh, and panel replacement</li>
                  <li>• Farm building maintenance including barns, sheds, and equipment shelters</li>
                  <li>• Re-roofing of equipment storage buildings with hail-rated profiles</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Ochiltree County Seat Services
                </h3>
                <p className="text-gray-700 mb-4">
                  As Ochiltree County&apos;s county seat, Perryton runs courthouse facilities, school buildings, and municipal structures that follow public-procurement rules and the Texas Prompt Payment Act on commercial work. We handle the documentation, bonding, and code paperwork those projects require.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Courthouse and county facility maintenance on TPO, modified bitumen, or metal</li>
                  <li>• Municipal building repairs scoped to current Ochiltree County code</li>
                  <li>• Public-bid government facility roofing with proper bonding and insurance</li>
                  <li>• Public building inspections aligned with Texas commercial roofing standards</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Extreme Hail Zone Protection
                </h3>
                <p className="text-gray-700 mb-4">
                  Perryton experiences some of the most severe hailstorms in the Texas Panhandle,
                  with 8-10 significant events annually. We specialize in hail-resistant roofing
                  systems and rapid storm damage response.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Impact-resistant roofing systems</li>
                  <li>• Hail damage assessment and repair</li>
                  <li>• Insurance claim specialization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Rural Community Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Beyond town limits, our Perryton work covers ranch headquarters, farm residences, and the smaller commercial buildings that serve the agricultural community across northern Ochiltree County. Long drives between properties are part of the job, and we plan routes around harvest traffic.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Rural residential reroofs in architectural asphalt or standing seam metal</li>
                  <li>• Ranch outbuilding repairs including barns, hay sheds, and shop buildings</li>
                  <li>• Remote property access with crews staged out of our Amarillo headquarters</li>
                  <li>• Coordinated visits combining residence, shop, and outbuilding work on one trip</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Are Perryton's Wheat Country Challenges?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <Wheat className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Wheat Production</h3>
                <p className="text-gray-700">
                  Perryton is a primary wheat production hub for the northern Panhandle, anchored by tall grain elevators, flat-roof storage buildings, and processing facilities that need roofing systems built for structural loading, moisture control, and wind exposure across the open High Plains.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <CloudHail className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Extreme Hail Events</h3>
                <p className="text-gray-700">
                  Perryton sits directly in "Hail Alley," experiencing 8-10 severe hailstorms
                  annually with hail sizes frequently exceeding baseball diameter, creating unique
                  roofing challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <Landmark className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">County Services</h3>
                <p className="text-gray-700">
                  As county seat, Perryton runs the Ochiltree County courthouse, school district facilities, and city service buildings. Public roofing projects here involve formal procurement, current Texas code compliance, and documentation that holds up to public records review.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Agricultural Environment Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Grain Dust Exposure</h4>
                  <p className="text-gray-700 mb-4">
                    Wheat harvest and grain handling around Perryton put fine dust in the air for weeks at a stretch. That dust settles on roof surfaces, packs into scuppers and gutters, and clogs roof drains on flat membranes. Annual cleaning and inspection of drainage paths keeps water flowing off and prevents ponding-related membrane failure.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">
                    Agricultural Chemical Exposure
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Field operations across Ochiltree County put herbicides, pesticides, and nitrogen fertilizers in the wind. Those compounds settle on roofing materials and shorten the life of standard asphalt and certain coatings. For agricultural buildings we lean toward TPO, PVC, or galvanized standing seam metal, which hold up better against chemical exposure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Does the Perryton Roof Repair Process Work?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Agricultural Schedule Coordination
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Understanding that Perryton's wheat operations follow strict seasonal
                      schedules tied to planting, harvest, and storage, we coordinate our storm
                      response around critical agricultural timing.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Harvest season priority scheduling</li>
                      <li>• Grain storage facility safety protocols</li>
                      <li>• Farm operation coordination</li>
                      <li>• Seasonal agricultural considerations</li>
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
                      Severe Weather Damage Assessment
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Our inspectors specialize in evaluating hail damage patterns specific to
                      Perryton's severe weather zone, understanding how extreme hailstorms affect
                      different roofing materials and building types.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Extreme hail damage evaluation</li>
                      <li>• Agricultural building assessment</li>
                      <li>• Storm pattern analysis</li>
                      <li>• Insurance documentation expertise</li>
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
                      Impact-Resistant Material Selection
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Given Perryton's location in extreme hail territory, we specify the highest
                      impact-resistance rated materials available, designed specifically for severe
                      weather zones like Ochiltree County.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Class 4 impact-resistant shingles</li>
                      <li>• Hail-resistant metal systems</li>
                      <li>• Agricultural-grade materials</li>
                      <li>• Weather zone specifications</li>
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
                      Weather-Resistant Installation
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Repairs in Perryton are built for what the High Plains actually delivers. We use Class 4 impact-rated shingles where the application allows, UL 580 wind-uplift-rated metal panels, and ASTM-tested sealants. The goal is a repair that survives the next hail cell off Hail Alley, not just the inspection.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Tightened fastener patterns on standing seam and R-panel installs</li>
                      <li>• ASTM-rated sealants at penetrations, pipe boots, and flashing terminations</li>
                      <li>• UL 2218 Class 4 impact-rated materials for hail-prone exposures</li>
                      <li>• Agricultural building details with chemical-resistant fasteners and panels</li>
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
                      Severe Weather Zone Monitoring
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Perryton sits in Hail Alley, so the work does not end at completion. Post-repair follow-up checks are scheduled after the spring storm season and again before winter. If a hail cell hits the property, we document the slope condition for the insurance carrier before damage gets covered up by snow or further wear.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Post-storm inspections coordinated with the carrier (State Farm, Allstate, USAA, Farmers, Texas Farm Bureau)</li>
                      <li>• Hail damage documentation with slope-by-slope photo evidence</li>
                      <li>• Maintenance visits scheduled around the High Plains storm calendar</li>
                      <li>• Manufacturer warranty support on GAF, CertainTeed, and Owens Corning systems</li>
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
              Why Choose 5 Star for Your Perryton Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Wheat Country Expertise</h3>
                <p className="text-gray-700 mb-4">
                  We understand the unique demands of agricultural buildings in wheat country, from
                  massive grain storage facilities to farm equipment shelters that require
                  specialized roofing approaches.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 200+ Perryton area projects completed</li>
                  <li>• Grain facility roofing expertise</li>
                  <li>• Agricultural building specialization</li>
                  <li>• Farm operation coordination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Extreme Weather Specialists
                </h3>
                <p className="text-gray-700 mb-4">
                  Perryton's location in the most severe hail zone of the Texas Panhandle demands
                  specialized expertise in impact-resistant materials and extreme weather damage
                  assessment.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Extreme hail damage expertise</li>
                  <li>• Impact-resistant material specialization</li>
                  <li>• Severe weather zone experience</li>
                  <li>• Insurance claim advocacy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Agricultural Schedule Accommodation
                </h3>
                <p className="text-gray-700 mb-4">
                  Wheat country runs on a calendar most contractors ignore. We schedule repair work around planting and the June-through-July winter wheat harvest in Ochiltree County, and we plan staging and material delivery so trucks do not block farm access during peak field traffic.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Repair scheduling planned around the winter wheat harvest window</li>
                  <li>• Priority sequencing for agricultural buildings ahead of storage season</li>
                  <li>• Coordination with planting, spraying, and irrigation cycles</li>
                  <li>• Equipment shed and shop-building work scheduled when bays are clear</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Ochiltree County Compliance
                </h3>
                <p className="text-gray-700 mb-4">
                  Perryton work has to clear current Texas commercial roofing codes, IBC requirements adopted by the county, and the Texas Prompt Payment Act on public-sector jobs. We pull permits, file the right manufacturer documentation, and keep the paperwork in order so the project closes cleanly.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Ochiltree County permitting and adopted-code compliance</li>
                  <li>• Bonded and insured public-bid work on government facilities</li>
                  <li>• Rural property considerations including septic and well clearances</li>
                  <li>• Municipal building experience across Perryton, Booker, and Spearman</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Perryton and Ochiltree County
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                From our Amarillo headquarters, we serve Perryton and the broader Ochiltree County
                wheat production region, including agricultural, residential, and government
                properties:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Perryton</h4>
                  <p className="text-sm text-gray-600">County Seat & Center</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Booker</h4>
                  <p className="text-sm text-gray-600">12 miles east</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Waka</h4>
                  <p className="text-sm text-gray-600">15 miles south</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Farnsworth</h4>
                  <p className="text-sm text-gray-600">18 miles northwest</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-2">
                  Ochiltree County Wheat District
                </h4>
                <p className="text-gray-700">
                  We serve the extensive wheat production operations throughout Ochiltree County,
                  including grain elevators, storage facilities, and farm buildings that support the
                  region's agricultural economy.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="perryton" currentService="roof-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton property owners. Expert roof repair with comprehensive
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
        <RelatedArticles pageSlug="roof-repair-perryton" />
      </div>
    </>
  );
}
