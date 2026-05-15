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
import { Factory, Phone, Star, Tornado, Wheat } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections-perryton/" },
  title: "Roof Inspections Perryton TX | 5 Star Roofing",
  description:
    "Expert roof inspections in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Inspections Perryton TX | 5 Star Roofing",
    description:
      "Expert roof inspections in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-inspections-perryton/",
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

export default function RoofInspectionsPerrytonPage() {
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
            "@id": "https://5starroofingpros.com/roof-inspections-perryton/#localbusiness",
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
            url: "https://5starroofingpros.com/roof-inspections-perryton/",
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
              "Expert roof inspections services in Perryton, TX. Free inspections, insurance claim assistance",
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
            serviceType: "Roof Inspections",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              name: "5 Star Roofing",
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
              parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
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
              "Expert roof inspections in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "How much does a roof inspection cost in Perryton?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most routine inspections for homeowners are FREE, especially for insurance claims, storm damage assessments, or when considering our services. Pre-purchase inspections for home buyers run $200-$400 depending on home size. Commercial property inspections range from $300-$800. All inspections include detailed written reports with photos.",
                },
              },
              {
                "@type": "Question",
                name: "What does a professional roof inspection include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our comprehensive inspections include drone aerial photography, close-up examination of shingles and flashing, attic inspection for leaks and ventilation issues, structural assessment, and thermal imaging if needed. We document all damage, measure roof dimensions, and provide detailed written reports with photos. Inspections typically take 45-90 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "How often should I have my Perryton roof inspected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Given Perryton's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.",
                },
              },
              {
                "@type": "Question",
                name: "Can roof inspections help with insurance claims?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Professional documentation dramatically improves claim approval rates. We photograph all damage, count hail impacts per test square, document wind damage patterns, and provide reports meeting insurance company standards. Our inspections help Texas Panhandle homeowners file storm damage claims.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you inspect my roof after a storm?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Perryton. for active leaks, we schedule inspections after major weather events. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast.",
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
        service="Roof Inspections"
        h1="Roof Inspections in Perryton, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/perryton-hero.jpg"
      
      breadcrumbItems={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Roof Inspections",
            url: "/roof-inspections/",
          },
          {
            name: "Perryton",
            url: "/roof-inspections-perryton/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Inspections for homes and businesses in Perryton, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Perryton as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Inspection scope: visual and drone assessment, photo report, and clear written findings on what needs repair versus replacement.</span></li>
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
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Does Advanced Roof Inspection Technology for Perryton Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">4K Drone Imaging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ultra-high resolution aerial documentation captures subtle damage patterns
                    across Perryton's vast wheat country properties. Our certified pilots navigate
                    High Plains wind conditions to deliver comprehensive roof surface analysis
                    impossible from ground level.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Agricultural Property Expertise
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Specialized assessment of farm structures, grain storage facilities, and
                    equipment buildings. We understand the unique challenges of agricultural roofing
                    in wheat country environments with constant exposure to dust, chemicals, and
                    heavy machinery vibrations.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Moisture Detection Systems
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced thermal imaging and moisture meters detect hidden water damage critical
                    in Perryton's climate. Early detection prevents structural damage to valuable
                    grain storage and equipment protection areas.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Wind Damage Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive evaluation of wind uplift patterns specific to High Plains
                    geography. Perryton's open terrain creates unique wind load challenges requiring
                    specialized inspection techniques and damage documentation methods.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Hail Impact Documentation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Precise measurement and photography of hail damage using industry-standard test
                    squares. Our documentation meets insurance company requirements and has helped
                    hundreds of Perryton property owners secure successful claims.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Structural Integrity Assessment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evaluation of roof support systems under agricultural loading conditions. We
                    assess impact from grain dust accumulation, equipment storage, and operational
                    stresses common in Perryton's farming community.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Understanding Perryton's Agricultural Environment?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">
                  <Wheat className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  Wheat Country Challenges
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Perryton sits in the heart of wheat country, creating unique roofing challenges.
                  Constant grain dust exposure, chemical drift, and agricultural equipment
                  vibrations accelerate roof aging. Our inspections account for these
                  agricultural-specific stress factors.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">
                  <Tornado className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">High Plains Weather</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perryton's position in the High Plains exposes properties to extreme weather
                  patterns. Sudden temperature drops, intense UV exposure, and severe thunderstorms
                  with damaging hail require specialized roofing materials and regular professional
                  inspections.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">
                  <Factory className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Industrial Agriculture</h3>
                <p className="text-gray-700 leading-relaxed">
                  Large-scale agricultural operations demand robust roofing systems. Our inspections
                  evaluate the impact of grain elevators, equipment storage, and processing
                  facilities on surrounding residential and commercial properties.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Do Weather Extremes Affect Roofing in Perryton?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Seasonal Challenges</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">
                      Spring Storm Season
                    </h4>
                    <p className="text-gray-700 mb-2">March-May: Peak hailstorm activity</p>
                    <p className="text-sm text-gray-600">
                      Supercell thunderstorms with baseball-sized hail common across wheat country
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">
                      Summer Heat Stress
                    </h4>
                    <p className="text-gray-700 mb-2">
                      June-August: Extreme UV and temperature cycling
                    </p>
                    <p className="text-sm text-gray-600">
                      Daily temperature swings of 40°F+ create thermal expansion stress
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">
                      Winter Wind Events
                    </h4>
                    <p className="text-gray-700 mb-2">December-February: Sustained high winds</p>
                    <p className="text-sm text-gray-600">
                      Arctic fronts bring 70+ mph winds across open farmland
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-brown mb-6">
                    Weather Impact Statistics
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Annual Hailstorms</span>
                      <span className="text-2xl font-bold text-brand-gold">7-9</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Wind Events greater than 60mph</span>
                      <span className="text-2xl font-bold text-brand-gold">15+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Temperature Range</span>
                      <span className="text-2xl font-bold text-brand-gold">140°F</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">UV Index Peak</span>
                      <span className="text-2xl font-bold text-brand-gold">11+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Do Insurance Claims Success in Perryton Work?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Our Documentation Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">Damage Identification</h4>
                      <p className="text-gray-700 text-sm">
                        Comprehensive cataloging of all storm damage using professional photography
                        and measurements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">Weather Correlation</h4>
                      <p className="text-gray-700 text-sm">
                        Linking damage patterns to specific storm events using National Weather
                        Service data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">
                        Code Compliance Review
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Ensuring all repairs meet current building standards and manufacturer
                        requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">Adjuster Cooperation</h4>
                      <p className="text-gray-700 text-sm">
                        Working directly with insurance adjusters to ensure accurate claim
                        assessment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-brand-brown mb-6">Success Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                      <div className="text-sm text-gray-700">Claim Approval Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">48hr</div>
                      <div className="text-sm text-gray-700">Average Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">160+</div>
                      <div className="text-sm text-gray-700">Perryton Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">$2.4M</div>
                      <div className="text-sm text-gray-700">Claims Secured</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-700 text-center italic">
                      "Our detailed documentation and local expertise result in faster claims
                      processing and better outcomes for Perryton property owners."
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                  How much does a roof inspection cost in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most routine inspections for homeowners are FREE, especially for insurance claims,
                  storm damage assessments, or when considering our services. Pre-purchase
                  inspections for home buyers run $200-$400 depending on home size. Commercial
                  property inspections range from $300-$800. All inspections include detailed
                  written reports with photos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What does a professional roof inspection include?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our comprehensive inspections include drone aerial photography, close-up
                  examination of shingles and flashing, attic inspection for leaks and ventilation
                  issues, structural assessment, and thermal imaging if needed. We document all
                  damage, measure roof dimensions, and provide detailed written reports with photos.
                  Inspections typically take 45-90 minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often should I have my Perryton roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Perryton's severe weather (7-9 hailstorms annually), we recommend annual
                  inspections plus after any major storm. Texas Panhandle hail, wind, and extreme
                  temperatures accelerate roof aging. Early detection of minor issues prevents
                  expensive major repairs. Most homeowners insurance policies encourage regular
                  professional inspections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can roof inspections help with insurance claims?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Professional documentation dramatically improves claim approval rates.
                  We photograph all damage, count hail impacts per test square, document wind damage
                  patterns, and provide reports meeting insurance company standards. Our inspections
                  have helped Texas Panhandle homeowners file storm damage
                  claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you inspect my roof after a storm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We prioritize storm damage inspections and typically schedule within 24-48 hours
                  after major weather events in Perryton. for active leaks, we schedule inspections after major weather events. Our team monitors Texas Panhandle weather
                  patterns and proactively increases staffing when severe storms are forecast.
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
        <InternalLinks currentCity="perryton" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton property owners. Expert roof inspections with
            comprehensive warranties and insurance claim assistance.
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
        <RelatedArticles pageSlug="roof-inspections-perryton" />
      </div>
    </>
  );
}
