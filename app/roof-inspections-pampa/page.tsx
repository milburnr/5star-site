import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Inspections Pampa TX | 5 Star Roofing',
  description: "Expert roof inspections in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsPampaPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspections",
                      "url": "/roof-inspections/"
              },
              {
                      "name": "Pampa",
                      "url": "/roof-inspections-pampa/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.5364, "longitude": -100.9599 },
        "url": "https://5starroofingpros.com/roof-inspections-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Pampa, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Inspections",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "+18066226041",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2909 S Western St",
                "addressLocality": "Amarillo",
                "addressRegion": "TX",
                "postalCode": "79109",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.1768,
                "longitude": -101.8590
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a roof inspection cost in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most routine inspections for homeowners are FREE, especially for insurance claims, storm damage assessments, or when considering our services. Pre-purchase inspections for home buyers run $200-$400 depending on home size. Commercial property inspections range from $300-$800. All inspections include detailed written reports with photos."
                }
              },
              {
                "@type": "Question",
                "name": "What does a professional roof inspection include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our comprehensive inspections include drone aerial photography, close-up examination of shingles and flashing, attic inspection for leaks and ventilation issues, structural assessment, and thermal imaging if needed. We document all damage, measure roof dimensions, and provide detailed written reports with photos. Inspections typically take 45-90 minutes."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I have my Pampa roof inspected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Given Pampa's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections."
                }
              },
              {
                "@type": "Question",
                "name": "Can roof inspections help with insurance claims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Professional documentation dramatically improves claim approval rates. We photograph all damage, count hail impacts per test square, document wind damage patterns, and provide reports meeting insurance company standards. Our inspections have helped thousands of Texas Panhandle homeowners successfully file storm damage claims."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you inspect my roof after a storm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Pampa. For emergency situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/commercial-roofing-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Pampa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                FREE Professional Inspections | Drone Technology
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof inspections in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Schedule FREE Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={220} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Pampa Projects</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">FREE</div>
                <div className="text-brand-brown font-semibold text-lg">Inspections</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Pampa's Roof Inspections Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in the Texas Panhandle creates unique roofing challenges. Agricultural community in the High Plains. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural community exposure to High Plains winds and frequent hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 220+ Pampa properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Pampa property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Comprehensive Roof Inspection Process in Pampa
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Aerial Drone Inspection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    High-resolution drone photography captures detailed roof conditions impossible to see from the ground. Our certified drone pilots document every inch of your Pampa property's roof surface, identifying hail damage, wind uplift, granule loss, and structural concerns specific to High Plains weather exposure.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Ground-Level Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Close-up examination of accessible roof areas, gutters, and flashings reveals damage patterns common in Pampa's agricultural environment. We check for wind-driven debris impact, UV degradation from intense Panhandle sun, and thermal expansion damage from extreme temperature swings.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Interior Attic Inspection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Interior examination reveals hidden water damage, inadequate ventilation, and structural issues. In Pampa's climate, proper attic ventilation prevents ice dam formation during rare winter storms and reduces cooling costs during brutal summer heat.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Thermal Imaging Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced thermal cameras detect moisture intrusion, insulation gaps, and air leaks invisible to traditional inspection methods. Critical for Pampa properties where small leaks can quickly escalate during High Plains storm seasons.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Detailed Documentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Professional photography, measurements, and written reports meeting insurance company standards. Our documentation has helped hundreds of Pampa property owners successfully navigate insurance claims for storm damage.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Structural Safety Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evaluation of roof decking, trusses, and support structures for damage from High Plains wind loads and agricultural equipment vibrations common in Pampa's farming community.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Pampa's Unique Roofing Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">High Plains Windstorms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pampa experiences sustained winds exceeding 60 mph during storm events. These extreme winds create uplift forces that can damage even properly installed roofing systems. Our inspections specifically look for wind damage patterns unique to High Plains geography.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🧊</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Severe Hailstorms</h3>
                <p className="text-gray-700 leading-relaxed">
                  With 6-8 significant hailstorms annually, Pampa properties face constant bombardment. Our inspectors are trained to identify subtle hail damage that may not be immediately visible but can lead to premature roof failure and water infiltration.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Agricultural Environment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Farming operations create unique challenges: airborne debris, chemical exposure, and equipment vibrations. Our Pampa inspections account for agricultural-specific wear patterns and contamination that urban inspectors might miss.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Local Expertise Makes the Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Understanding Pampa's Climate</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>Temperature Extremes:</strong> Summer highs exceeding 100°F and winter lows below 0°F create thermal stress patterns unique to the High Plains region.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>UV Intensity:</strong> High altitude and minimal atmospheric filtering result in accelerated shingle aging requiring specialized material selection.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>Wind Patterns:</strong> Prevailing winds from multiple directions require comprehensive inspection of all roof faces, not just south-facing slopes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>Moisture Cycles:</strong> Rapid wet-dry cycles from agricultural irrigation and storm patterns create unique expansion-contraction stresses.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Insurance Claim Success</h3>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-brand-gold mb-3">94%</div>
                  <div className="text-xl font-semibold text-brand-brown mb-4">Claim Approval Rate</div>
                  <p className="text-gray-700 mb-6">
                    Our detailed documentation and local expertise result in exceptionally high insurance claim approval rates for Pampa property owners.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Professional photography documentation</li>
                    <li>✓ Detailed damage measurements</li>
                    <li>✓ Weather correlation reports</li>
                    <li>✓ Code compliance assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Our Pampa Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "After the last hailstorm, 5 Star's inspection found damage our insurance adjuster missed. Their detailed report helped us get full replacement coverage. Exceptional local knowledge."
                </p>
                <div className="text-brand-brown font-semibold">- Sarah M., Pampa Homeowner</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Quick response after the spring storm. The drone inspection revealed wind damage we couldn't see from the ground. Professional service from start to finish."
                </p>
                <div className="text-brand-brown font-semibold">- Mike R., Agricultural Property</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Free inspection before we bought our ranch. They found issues that saved us thousands in negotiation. Worth every penny of the pre-purchase fee."
                </p>
                <div className="text-brand-brown font-semibold">- Tom & Linda K., Pampa</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Inspection Scheduling & Emergency Response
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Standard Scheduling</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Routine Inspections</h4>
                    <p className="text-gray-700 mb-2">Scheduled within 3-5 business days</p>
                    <p className="text-sm text-gray-600">Perfect for annual maintenance, pre-purchase assessments, and insurance documentation</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Post-Storm Inspections</h4>
                    <p className="text-gray-700 mb-2">Priority scheduling within 24-48 hours</p>
                    <p className="text-sm text-gray-600">Following significant weather events affecting the Pampa area</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Emergency Response</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-red-800 mb-2">Active Leak Response</h4>
                    <p className="text-red-700 mb-2">Emergency deployment within 2-4 hours</p>
                    <p className="text-sm text-red-600">For properties experiencing active water infiltration</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-2">Severe Weather Tracking</h4>
                    <p className="text-yellow-700 mb-2">Proactive storm monitoring</p>
                    <p className="text-sm text-yellow-600">We monitor High Plains weather patterns and pre-position crews during storm seasons</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does a roof inspection cost in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most routine inspections for homeowners are FREE, especially for insurance claims, storm damage assessments, or when considering our services. Pre-purchase inspections for home buyers run $200-$400 depending on home size. Commercial property inspections range from $300-$800. All inspections include detailed written reports with photos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What does a professional roof inspection include?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our comprehensive inspections include drone aerial photography, close-up examination of shingles and flashing, attic inspection for leaks and ventilation issues, structural assessment, and thermal imaging if needed. We document all damage, measure roof dimensions, and provide detailed written reports with photos. Inspections typically take 45-90 minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often should I have my Pampa roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Pampa's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can roof inspections help with insurance claims?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Professional documentation dramatically improves claim approval rates. We photograph all damage, count hail impacts per test square, document wind damage patterns, and provide reports meeting insurance company standards. Our inspections have helped thousands of Texas Panhandle homeowners successfully file storm damage claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you inspect my roof after a storm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Pampa. For emergency situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert roof inspections with comprehensive warranties and insurance claim assistance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
