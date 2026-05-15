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
import { Check, Phone, Snowflake, Star, Tornado, Wheat } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections-pampa/" },
  title: "Roof Inspections Pampa TX | 5 Star Roofing",
  description:
    "Expert roof inspections in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Inspections Pampa TX | 5 Star Roofing",
    description:
      "Expert roof inspections in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-inspections-pampa/",
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

export default function RoofInspectionsPampaPage() {
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
            "@id": "https://5starroofingpros.com/roof-inspections-pampa/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.jpg",
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
            url: "https://5starroofingpros.com/roof-inspections-pampa/",
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
              "Expert roof inspections services in Pampa, TX. Free inspections, insurance claim assistance",
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              name: "Pampa",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert roof inspections in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "How much does a roof inspection cost in Pampa?",
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
                name: "How often should I have my Pampa roof inspected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Given Pampa's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.",
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
                  text: "We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Pampa. for active leaks, we schedule inspections after major weather events. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast.",
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
        service="Roof Inspections"
        h1="Roof Inspections in Pampa, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.jpg"
      
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
            name: "Pampa",
            url: "/roof-inspections-pampa/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Inspections for homes and businesses in Pampa, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Pampa as part of its West Texas service area.</span></li>
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
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Does Our Comprehensive Roof Inspection Process in Pampa Work?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Aerial Drone Inspection
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    FAA Part 107 licensed drone pilots capture full-resolution slope photos
                    on Pampa homes and commercial buildings. The imagery picks up hail
                    bruises on asphalt shingles, wind-lifted ridge cap, and granule wash at
                    valleys. That detail goes straight into the report your State Farm,
                    USAA, or Texas Farm Bureau adjuster will review.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Ground-Level Assessment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Walkable slopes, gutters, downspouts, and step flashing get a close
                    on-foot review. In Gray County we look hard at soft-metal denting on
                    gutters and vent caps (a reliable hail indicator), UV cracking on
                    asphalt shingles, and split sealant beads at pipe boots and chimney
                    flashings.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Interior Attic Inspection
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Inside the Pampa attic we check decking for staining, look at the
                    underside of nail penetrations, and verify intake-to-exhaust ventilation
                    balance. Sound ridge and soffit ventilation reduces ice damming during
                    winter cold snaps and trims summer cooling load when Gray County highs
                    hit triple digits.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Thermal Imaging Analysis
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Infrared cameras show wet insulation, gaps in attic R-value, and air
                    leaks at penetrations that a visual inspection alone misses. On Pampa
                    homes this matters most ahead of supercell season, when a small flashing
                    failure can turn into wet drywall after the first big rain.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Detailed Documentation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Professional photography, measurements, and written reports meeting insurance
                    company standards. Our documentation has helped hundreds of Pampa property
                    owners successfully navigate insurance claims for storm damage.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Structural Safety Assessment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Decking, truss connections, and load-bearing rafters are checked for
                    delamination, fastener pull-through, and stress fractures. Gray County
                    homes near grain elevators and ag operations can see additional vibration
                    fatigue around chimneys and HVAC curbs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Pampa's Unique Roofing Challenges Involve?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">
                  <Tornado className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">High Plains Windstorms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pampa experiences sustained winds exceeding 60 mph during storm events. These
                  extreme winds create uplift forces that can damage even properly installed roofing
                  systems. Our inspections specifically look for wind damage patterns unique to High
                  Plains geography.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">
                  <Snowflake className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Severe Hailstorms</h3>
                <p className="text-gray-700 leading-relaxed">
                  With 6-8 significant hailstorms annually, Pampa properties face constant
                  bombardment. Our inspectors are trained to identify subtle hail damage that may
                  not be immediately visible but can lead to premature roof failure and water
                  infiltration.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">
                  <Wheat className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  Agricultural Environment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pampa homes near working farmland see blowing grain dust, fertilizer
                  particulate from spring application, and vibration from harvest equipment.
                  Our inspections flag the wear patterns that follow: clogged gutters,
                  granule-stripped slopes facing prevailing winds, and sealant fatigue at
                  pipe boots.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Local Expertise Makes the Difference?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Understanding Pampa's Climate
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span>
                      <strong>Temperature Extremes:</strong> Summer highs exceeding 100°F and winter
                      lows below 0°F create thermal stress patterns unique to the High Plains
                      region.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span>
                      <strong>UV Intensity:</strong> High altitude and minimal atmospheric filtering
                      result in accelerated shingle aging requiring specialized material selection.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span>
                      <strong>Wind Patterns:</strong> Prevailing winds from multiple directions
                      require comprehensive inspection of all roof faces, not just south-facing
                      slopes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span>
                      <strong>Moisture Cycles:</strong> Rapid wet-dry cycles from agricultural
                      irrigation and storm patterns create unique expansion-contraction stresses.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Insurance Claim Success
                </h3>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-brand-gold mb-3">94%</div>
                  <div className="text-xl font-semibold text-brand-brown mb-4">
                    Claim Approval Rate
                  </div>
                  <p className="text-gray-700 mb-6">
                    Our detailed documentation and local expertise result in exceptionally high
                    insurance claim approval rates for Pampa property owners.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Professional photography documentation
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Detailed damage measurements
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Weather correlation reports
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Code compliance assessments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Inspection Scheduling & post-storm documentation Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Standard Scheduling</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">
                      Routine Inspections
                    </h4>
                    <p className="text-gray-700 mb-2">Scheduled within 3-5 business days</p>
                    <p className="text-sm text-gray-600">
                      Perfect for annual maintenance, pre-purchase assessments, and insurance
                      documentation
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">
                      Post-Storm Inspections
                    </h4>
                    <p className="text-gray-700 mb-2">Priority scheduling within 24-48 hours</p>
                    <p className="text-sm text-gray-600">
                      Following significant weather events affecting the Pampa area
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Post-Storm Documentation</h3>
                <div className="space-y-4">
                  <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">
                      Active Leak Documentation
                    </h4>
                    <p className="text-brand-brown mb-2">
                      Photo-documented scope of interior and exterior water entry, with
                      scheduled follow-up for weather protection.
                    </p>
                    <p className="text-sm text-gray-600">
                      For Pampa homes with visible interior staining or active drips
                      after a hail or wind event
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                      Severe Weather Awareness
                    </h4>
                    <p className="text-yellow-700 mb-2">
                      Gray County and broader Texas Panhandle weather tracking
                    </p>
                    <p className="text-sm text-yellow-600">
                      We follow NOAA Amarillo office forecasts so we know which hail and
                      supercell events have actually moved through Pampa
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
                  How much does a roof inspection cost in Pampa?
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
                  How often should I have my Pampa roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Pampa's severe weather (7-9 hailstorms annually), we recommend annual
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
                  after major weather events in Pampa. with active leaks, we
                  can often respond in a timely manner. Our team monitors Texas Panhandle weather
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
        <InternalLinks currentCity="pampa" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert roof inspections with comprehensive
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
        <RelatedArticles pageSlug="roof-inspections-pampa" />
      </div>
    </>
  );
}
