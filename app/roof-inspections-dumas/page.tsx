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
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import {
  Beef,
  Construction,
  FlaskConical,
  Phone,
  Snowflake,
  Sprout,
  Star,
  Tornado,
  Wheat,
} from "lucide-react";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections-dumas/" },
  title: "Roof Inspections Dumas TX | 5 Star Roofing",
  description:
    "Expert roof inspections in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Inspections Dumas TX | 5 Star Roofing",
    description:
      "Expert roof inspections in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-inspections-dumas/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/dumas-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofInspectionsDumasPage() {
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
            "@id": "https://5starroofingpros.com/roof-inspections-dumas/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-levelland-3-1280w.jpg",
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
            geo: { "@type": "GeoCoordinates", latitude: 35.8656, longitude: -101.973 },
            url: "https://5starroofingpros.com/roof-inspections-dumas/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              name: "Dumas",
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
              "Expert roof inspections services in Dumas, TX. Free inspections, insurance claim assistance",
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
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              name: "Dumas",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert roof inspections in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "How much does a roof inspection cost in Dumas?",
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
                name: "How often should I have my Dumas roof inspected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Given Dumas's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.",
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
                  text: "We prioritize storm damage inspections and schedule them as soon as conditions are safe for crews to be on a roof in Dumas. We are not an emergency-dispatch service — our value is thorough documentation, adjuster-ready reports, and Class 4 impact-resistant restoration that holds up through future Moore County storms.",
                },
              },
            ],
          }),
        }}
      />
            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="dumas"
        city="Dumas"
        service="Roof Inspections"
        h1="Roof Inspections in Dumas, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-levelland-3-1280w.jpg"
      
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
            name: "Dumas",
            url: "/roof-inspections-dumas/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Inspections for homes and businesses in Dumas, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Dumas as part of its West Texas service area.</span></li>
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
              What Makes Our Dumas Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas's location in the Texas Panhandle creates unique roofing challenges.
              Agricultural and feedlot industry center. Texas Panhandle weather extremes—6-8 annual
              hailstorms, High Plains winds 60+ mph, and agricultural and feedlot industry demands
              with extreme Panhandle weather—demand superior roofing materials and expert
              installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 190+ Dumas properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with Dumas
              property owners, and handle complete insurance claims. Most homeowners pay only their
              deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Agricultural Industry Impact on Roofing Systems?
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Feedlot and Agricultural Environmental Factors
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      <Beef className="w-6 h-6 inline-block" /> Livestock Operation Effects
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Dumas is home to massive cattle feedlots creating unique atmospheric
                      conditions affecting roofing materials.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Ammonia Exposure:</strong> Livestock waste produces ammonia vapors
                        accelerating metal corrosion
                      </li>
                      <li>
                        • <strong>Hydrogen Sulfide:</strong> Gas production from feedlots creating
                        acidic environments
                      </li>
                      <li>
                        • <strong>Dust Generation:</strong> Feed processing and animal activity
                        creating abrasive particulates
                      </li>
                      <li>
                        • <strong>Organic Deposits:</strong> Windborne organic matter accumulation
                      </li>
                      <li>
                        • <strong>Moisture Elevation:</strong> Animal respiration increasing local
                        humidity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      <Wheat className="w-6 h-6 inline-block" /> Agricultural Processing Impact
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Grain processing and agricultural operations create additional environmental
                      stressors.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Grain Dust:</strong> Fine particles from processing creating
                        abrasive conditions
                      </li>
                      <li>
                        • <strong>Silo Operations:</strong> Dust clouds and pressure variations
                      </li>
                      <li>
                        • <strong>Chemical Applications:</strong> Fertilizer and pesticide
                        atmospheric exposure
                      </li>
                      <li>
                        • <strong>Equipment Vibration:</strong> Heavy machinery affecting nearby
                        structures
                      </li>
                      <li>
                        • <strong>Irrigation Humidity:</strong> Center pivot systems elevating
                        moisture levels
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Agricultural-Specific Inspection Protocol
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Environmental Contamination Assessment (20 minutes)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">
                          Chemical Exposure Evaluation
                        </h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Ammonia corrosion pattern identification</li>
                          <li>• Hydrogen sulfide surface etching assessment</li>
                          <li>• Agricultural chemical residue analysis</li>
                          <li>• Metal fastener degradation evaluation</li>
                          <li>• Organic material accumulation documentation</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">
                          Particulate Damage Analysis
                        </h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Grain dust abrasion assessment</li>
                          <li>• Feed particle coating contamination</li>
                          <li>• Drainage system clogging evaluation</li>
                          <li>• Ventilation blockage inspection</li>
                          <li>• Filter system stress analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-brown-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Agricultural Building Type Assessment (25 minutes)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Residential Properties</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Rural home exposure to agricultural operations</li>
                          <li>• Distance from feedlots impact assessment</li>
                          <li>• Windborne contaminant deposition</li>
                          <li>• HVAC system contamination protection</li>
                          <li>• Property value protection considerations</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">
                          Agricultural Facility Roofs
                        </h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Livestock housing structure assessment</li>
                          <li>• Grain storage facility roof evaluation</li>
                          <li>• Equipment building inspection</li>
                          <li>• Feed mill facility roof analysis</li>
                          <li>• Processing plant structural integrity</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Specialized Agricultural Roof Challenges (15 minutes)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Heavy Load Considerations</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Grain storage load capacity assessment</li>
                          <li>• Snow plus grain load calculations</li>
                          <li>• Equipment mounting stress analysis</li>
                          <li>• Structural deflection measurement</li>
                          <li>• Safety factor verification</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Ventilation & Airflow</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Agricultural ventilation system integration</li>
                          <li>• Contaminated air exhaust pathways</li>
                          <li>• Positive pressure system effects</li>
                          <li>• Air quality protection measures</li>
                          <li>• HVAC contamination prevention</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Dumas Agricultural Environment Inspectors Examine?
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Agricultural-Specific Damage Indicators
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      <FlaskConical className="w-6 h-6 inline-block" /> Chemical Corrosion Patterns
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Ammonia Corrosion:</strong> White crystalline deposits on metal
                        surfaces
                      </li>
                      <li>
                        • <strong>Sulfide Blackening:</strong> Dark staining from hydrogen sulfide
                        exposure
                      </li>
                      <li>
                        • <strong>Accelerated Rust:</strong> Rapid oxidation from chemical
                        atmosphere
                      </li>
                      <li>
                        • <strong>Gasket Degradation:</strong> Rubber seal failure from agricultural
                        chemicals
                      </li>
                      <li>
                        • <strong>Paint Failure:</strong> Coating breakdown from chemical exposure
                      </li>
                      <li>
                        • <strong>Fastener Weakening:</strong> Chemical attack on screws and bolts
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      <Tornado className="w-6 h-6 inline-block" /> Enhanced Weather Damage
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Dust-Accelerated Abrasion:</strong> Windborne particles creating
                        wear patterns
                      </li>
                      <li>
                        • <strong>Moisture Trap Damage:</strong> Organic matter holding moisture
                        against surfaces
                      </li>
                      <li>
                        • <strong>Chemical-Weakened Materials:</strong> Reduced hail and wind
                        resistance
                      </li>
                      <li>
                        • <strong>Clogged Drainage:</strong> Agricultural debris blocking water flow
                      </li>
                      <li>
                        • <strong>Filter Overload:</strong> HVAC systems stressed by contaminated
                        air
                      </li>
                      <li>
                        • <strong>Biological Growth:</strong> Organic matter fostering mold and
                        bacteria
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      <Construction className="w-6 h-6 inline-block" /> Structural Agricultural
                      Stress
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Equipment Vibration Damage:</strong> Machinery creating structural
                        fatigue
                      </li>
                      <li>
                        • <strong>Heavy Load Deflection:</strong> Grain storage causing sagging
                      </li>
                      <li>
                        • <strong>Thermal Cycling Stress:</strong> Agricultural process heat
                        variations
                      </li>
                      <li>
                        • <strong>Settling Damage:</strong> Foundation movement from heavy loads
                      </li>
                      <li>
                        • <strong>Connection Loosening:</strong> Vibration and thermal stress
                        effects
                      </li>
                      <li>
                        • <strong>Material Fatigue:</strong> Repeated stress cycles from operations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Advanced Detection for Agricultural Environments
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Dumas and Moore County sit in the heart of Texas Panhandle cattle and corn
                  country, with feedlots producing ammonia and hydrogen sulfide at concentrations
                  that pit galvanized metal and dull PVDF paint finishes. Standard residential
                  inspection gear misses these failures. The agricultural inspection adds gas
                  detection and surface chemistry testing tied to specific livestock and crop
                  operations within prevailing wind range of the property.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Chemical Analysis Technology</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Air Quality Monitoring</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Ambient ammonia readings near feedlot perimeters</li>
                          <li>• Hydrogen sulfide spot checks at lagoon and manure-pit fence lines</li>
                          <li>• PM10/PM2.5 particulate readings during harvest and grain handling</li>
                          <li>• Volatile organic compound screening for herbicide drift events</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">
                          Surface Contamination Testing
                        </h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• pH swabs on Galvalume, painted steel, and TPO membranes</li>
                          <li>• Chemical residue identification on roof drains and curbs</li>
                          <li>• Sacrificial-coupon corrosion-rate readings season over season</li>
                          <li>• Substrate compatibility check against PVDF, SMP, and silicone coatings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      Agricultural-Specific Inspection Tools
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Enhanced Safety Protocols</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Respiratory protection for chemical exposure</li>
                          <li>• Gas detection equipment</li>
                          <li>• Personal protective equipment protocols</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Specialized Documentation</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Proximity to agricultural operations mapping</li>
                          <li>• Wind pattern contamination analysis</li>
                          <li>• Seasonal exposure variation tracking</li>
                          <li>• Chemical-resistant material recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Agricultural Season Inspection Timing?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  <Sprout className="w-6 h-6 inline-block" /> Spring Agricultural Operations
                  (March-May)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Planting Season Impact:</strong> March through May around Dumas brings
                  field discing, anhydrous ammonia knife-in, glyphosate burndown, and pivot
                  irrigation startup. Each puts a different kind of stress on nearby roofs.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Agricultural Activity Coordination:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Inspections scheduled before anhydrous ammonia application windows</li>
                      <li>• Awareness of 2,4-D and dicamba spray days based on Moore County wind</li>
                      <li>• Avoiding peak field-discing dust plumes that compromise drone imagery</li>
                      <li>• Center-pivot startup checks for overspray onto adjacent farm-shop roofs</li>
                      <li>• Coordination with calving and breeding so feedlot access stays clear</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Hail Alley Storm Prep:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Verification of Class 4 impact-rated roof assemblies before peak hail season</li>
                      <li>• Removal of accumulated dust and residue ahead of severe weather</li>
                      <li>• Vulnerability check on metal building purlin and clip connections</li>
                      <li>• Gutter and scupper clearing of harvest debris and tumbleweed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  <Wheat className="w-6 h-6 inline-block" /> Summer Growing Season (June-August)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Peak Agricultural Activity:</strong> June through August around Dumas
                  is when Moore County feedlots run at full headcount, center-pivot irrigation
                  runs continuously, and 100-plus degree heat amplifies every chemical reaction
                  on a roof surface.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">High Contamination Period:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Peak feedlot stocking inside the Dumas-Cactus corridor</li>
                      <li>• Highest ammonia and hydrogen sulfide concentrations of the year</li>
                      <li>• Pivot-irrigation humidity that accelerates galvanic corrosion on metal seams</li>
                      <li>• Increased herbicide and insecticide application frequency</li>
                      <li>• 100-plus degree surface temperatures driving faster sealant breakdown</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Inspection Timing Challenges:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Early-morning windows before ambient ammonia peaks</li>
                      <li>• Upwind positioning to keep crew clear of feedlot odor plumes</li>
                      <li>• OSHA-spec respiratory and gas detection equipment on every roof</li>
                      <li>• Scheduling around feedlot operations and harvest equipment movement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  <Wheat className="w-6 h-6 inline-block" /> Harvest Season Assessment
                  (September-November)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Harvest Operations Impact:</strong> September through November is
                  corn and grain sorghum harvest across Moore County. Combine and grain-cart
                  dust gets into every roof seam, and storage facilities take maximum loading
                  stress as inbound trucks fill bins.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Harvest Activity Considerations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Dense grain-dust plumes from combines and grain carts</li>
                      <li>• Vibration from heavy truck traffic onto co-op and elevator scales</li>
                      <li>• Cyclic loading stress on grain elevator and silo roof connections</li>
                      <li>• Feedlot pen preparation for winter ration delivery</li>
                      <li>• Pre-engineered metal building roofs at maximum operational loading</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Annual Assessment Priorities:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Twelve-month cumulative chemical-exposure review per roof slope</li>
                      <li>• Purlin sag, fastener backout, and clip-weld inspection on metal buildings</li>
                      <li>• Drain and scupper clearing before first hard freeze</li>
                      <li>• Damage documentation tied to specific harvest equipment events</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  <Snowflake className="w-6 h-6 inline-block" /> Winter Agricultural Dormancy
                  (December-February)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Reduced Operations:</strong> December through February is the cleanest
                  inspection window in Moore County. Field activity drops to feeding and
                  maintenance, ambient ammonia falls off, and the property owner can plan
                  repairs ahead of the spring storm season.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Winter Advantages:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• No herbicide application windows competing with the schedule</li>
                      <li>• Reduced feedlot odor plume and lower ammonia readings</li>
                      <li>• Combines and grain carts off the road for cleaner drone passes</li>
                      <li>• Clear view of cumulative wear without active operations masking it</li>
                      <li>• Lead time to order materials before Hail Alley spring storms arrive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Winter Assessment Focus:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Full-year chemical and corrosion damage review on every slope</li>
                      <li>• Purlin, clip, and fastener check after harvest equipment loading</li>
                      <li>• Verification that summer contamination cleanup actually worked</li>
                      <li>• Material spec selection for Class 4, UL 580 spring replacements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-amber-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Do Insurance Claims for Agricultural Properties Work?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Agricultural Environment Documentation
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Agricultural claims in Moore County need more than a hail-damage report. Carriers
                  like State Farm, Allstate, Farmers, and Texas Farm Bureau look for evidence
                  separating sudden storm damage from gradual chemical exposure, because the two
                  coverage categories pay differently. The inspection package addresses both.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Environmental Factor Evidence</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Chemical Exposure Mapping:</strong> distance and prevailing wind
                        relationship to Dumas-area feedlots and processing facilities
                      </li>
                      <li>
                        • <strong>Air Quality Documentation:</strong> on-site ammonia and hydrogen
                        sulfide readings the day of inspection
                      </li>
                      <li>
                        • <strong>Accelerated Aging Evidence:</strong> matched comparisons between
                        chemically aged and weather-aged sections of the same roof
                      </li>
                      <li>
                        • <strong>Agricultural Operation Impact:</strong> dust loading, vibration
                        cycles, and residue patterns photographed on each slope
                      </li>
                      <li>
                        • <strong>Seasonal Variation Tracking:</strong> peak-exposure month notes
                        across the year for the property
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Specialized Damage Categories</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Chemical Corrosion Claims:</strong> Agricultural vs. storm damage
                      </li>
                      <li>
                        • <strong>Environmental Liability:</strong> Health and property impacts
                      </li>
                      <li>
                        • <strong>Agricultural Business Interruption:</strong> Roof failure
                        operational impact
                      </li>
                      <li>
                        • <strong>Equipment Protection:</strong> Specialized material requirements
                      </li>
                      <li>
                        • <strong>Multi-Factor Causation:</strong> Weather plus chemical
                        interactions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Agricultural Insurance Challenges
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Farm and ranch policies through Texas Farm Bureau, Nationwide Agribusiness, or
                  the agricultural arm of Allstate and Farmers handle exposures differently than
                  standard homeowner coverage. Knowing which clause governs which damage pattern
                  is the difference between a paid claim and a denial on a Moore County feedlot
                  shop or Dumas grain operation roof.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Common Claim Complications</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Pollution Exclusions:</strong> disputed coverage where damage is
                        attributed to ammonia or hydrogen sulfide exposure
                      </li>
                      <li>
                        • <strong>Gradual Damage:</strong> slow chemical deterioration usually
                        excluded; sudden hail or wind events covered
                      </li>
                      <li>
                        • <strong>Agricultural Business Coverage:</strong> specialized commercial
                        farm policies with their own deductible structures
                      </li>
                      <li>
                        • <strong>Equipment Integration:</strong> roof-mounted grain dryers, augers,
                        and ventilation that complicate scope of loss
                      </li>
                      <li>
                        • <strong>Multi-Building Claims:</strong> shop, machine shed, and grain
                        storage covered under different policy schedules
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Expert Documentation Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Agricultural environment expertise</li>
                      <li>• Chemical damage pattern analysis</li>
                      <li>• Environmental impact assessment</li>
                      <li>• Agricultural operation integration</li>
                      <li>• Specialized material requirement justification</li>
                    </ul>
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
                  How much does a roof inspection cost in Dumas?
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
                  How often should I have my Dumas roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Dumas's severe weather (7-9 hailstorms annually), we recommend annual
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
                  We prioritize storm damage inspections and schedule them as soon as conditions are
                  safe for crews to be on a roof in Dumas. We are not an emergency-dispatch service
                  — our value is thorough documentation, adjuster-ready reports, and Class 4
                  impact-resistant restoration that holds up through future Moore County storms.
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
        <InternalLinks currentCity="dumas" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas property owners. Expert roof inspections with comprehensive
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
        <RelatedArticles pageSlug="roof-inspections-dumas" />
      </div>
    </>
  );
}
