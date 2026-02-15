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
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-perryton/' },
  title: 'Roof Inspections Perryton TX | 5 Star Roofing',
  description: "Expert roof inspections in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsPerrytonPage() {
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
                      "name": "Perryton",
                      "url": "/roof-inspections-perryton/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 36.4, "longitude": -100.8028 },
        "url": "https://5starroofingpros.com/roof-inspections-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Perryton, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              "name": "Perryton",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does a roof inspection cost in Perryton?",
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
                "name": "How often should I have my Perryton roof inspected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Given Perryton's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections."
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
                  "text": "We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Perryton. for prompt situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-44-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Perryton</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                FREE Professional Inspections | Drone Technology
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof inspections in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={160} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Perryton Projects</div>
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
              Perryton's Roof Inspections Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton's location in the Texas Panhandle creates unique roofing challenges. Wheat country agricultural community. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and wheat country agricultural exposure with severe Panhandle hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 160+ Perryton properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Perryton property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Advanced Roof Inspection Technology for Perryton
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">4K Drone Imaging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ultra-high resolution aerial documentation captures subtle damage patterns across Perryton's vast wheat country properties. Our certified pilots navigate High Plains wind conditions to deliver comprehensive roof surface analysis impossible from ground level.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Agricultural Property Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Specialized assessment of farm structures, grain storage facilities, and equipment buildings. We understand the unique challenges of agricultural roofing in wheat country environments with constant exposure to dust, chemicals, and heavy machinery vibrations.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Moisture Detection Systems</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced thermal imaging and moisture meters detect hidden water damage critical in Perryton's climate. Early detection prevents structural damage to valuable grain storage and equipment protection areas.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Wind Damage Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive evaluation of wind uplift patterns specific to High Plains geography. Perryton's open terrain creates unique wind load challenges requiring specialized inspection techniques and damage documentation methods.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Impact Documentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Precise measurement and photography of hail damage using industry-standard test squares. Our documentation meets insurance company requirements and has helped hundreds of Perryton property owners secure successful claims.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold pl-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Structural Integrity Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evaluation of roof support systems under agricultural loading conditions. We assess impact from grain dust accumulation, equipment storage, and operational stresses common in Perryton's farming community.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Understanding Perryton's Agricultural Environment
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Wheat Country Challenges</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perryton sits in the heart of wheat country, creating unique roofing challenges. Constant grain dust exposure, chemical drift, and agricultural equipment vibrations accelerate roof aging. Our inspections account for these agricultural-specific stress factors.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">High Plains Weather</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perryton's position in the High Plains exposes properties to extreme weather patterns. Sudden temperature drops, intense UV exposure, and severe thunderstorms with damaging hail require specialized roofing materials and regular professional inspections.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Industrial Agriculture</h3>
                <p className="text-gray-700 leading-relaxed">
                  Large-scale agricultural operations demand robust roofing systems. Our inspections evaluate the impact of grain elevators, equipment storage, and processing facilities on surrounding residential and commercial properties.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Perryton-Specific Weather Patterns & Roof Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Seasonal Challenges</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Spring Storm Season</h4>
                    <p className="text-gray-700 mb-2">March-May: Peak hailstorm activity</p>
                    <p className="text-sm text-gray-600">Supercell thunderstorms with baseball-sized hail common across wheat country</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Summer Heat Stress</h4>
                    <p className="text-gray-700 mb-2">June-August: Extreme UV and temperature cycling</p>
                    <p className="text-sm text-gray-600">Daily temperature swings of 40°F+ create thermal expansion stress</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-brand-brown mb-2">Winter Wind Events</h4>
                    <p className="text-gray-700 mb-2">December-February: Sustained high winds</p>
                    <p className="text-sm text-gray-600">Arctic fronts bring 70+ mph winds across open farmland</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-brown mb-6">Weather Impact Statistics</h3>
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
              Insurance Claims Success in Perryton
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Our Documentation Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">Damage Identification</h4>
                      <p className="text-gray-700 text-sm">Comprehensive cataloging of all storm damage using professional photography and measurements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">Weather Correlation</h4>
                      <p className="text-gray-700 text-sm">Linking damage patterns to specific storm events using National Weather Service data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">Code Compliance Review</h4>
                      <p className="text-gray-700 text-sm">Ensuring all repairs meet current building standards and manufacturer requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-2">Adjuster Cooperation</h4>
                      <p className="text-gray-700 text-sm">Working directly with insurance adjusters to ensure accurate claim assessment</p>
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
                      "Our detailed documentation and local expertise result in faster claims processing and better outcomes for Perryton property owners."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Perryton Client Testimonials
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "5 Star understood our wheat storage facility needs. Their inspection caught wind damage to our grain bin roofing that could have cost us thousands in crop losses."
                </p>
                <div className="text-brand-brown font-semibold">- Dale F., Perryton Farmer</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Professional drone inspection after the April hailstorm. They documented every impact and helped us get full replacement coverage from insurance."
                </p>
                <div className="text-brand-brown font-semibold">- Maria S., Perryton Homeowner</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Quick response during harvest season situation. They understood we couldn't shut down operations and worked around our schedule."
                </p>
                <div className="text-brand-brown font-semibold">- Robert K., Agricultural Operations</div>
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
                  How much does a roof inspection cost in Perryton?
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
                  How often should I have my Perryton roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Given Perryton's severe weather (7-9 hailstorms annually), we recommend annual inspections plus after any major storm. Texas Panhandle hail, wind, and extreme temperatures accelerate roof aging. Early detection of minor issues prevents expensive major repairs. Most homeowners insurance policies encourage regular professional inspections.
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
                  We prioritize storm damage inspections and typically schedule within 24-48 hours after major weather events in Perryton. for prompt situations with active leaks, we can often respond within 2-4 hours. Our team monitors Texas Panhandle weather patterns and proactively increases staffing when severe storms are forecast.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton property owners. Expert roof inspections with comprehensive warranties and insurance claim assistance.
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
