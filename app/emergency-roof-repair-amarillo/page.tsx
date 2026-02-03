import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Amarillo TXService | Storm Damage',
  description: 'Emergency Roof Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function EmergencyRoofRepairAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Amarillo", url: "/emergency-roof-repair-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/emergency-roof-repair-amarillo/#localbusiness",
            "name": "5 Star Commercial Roofing - Amarillo Emergency Roof Repair",
            "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
            "priceRange": "$$",
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
            "url": "https://5starroofingpros.com/emergency-roof-repair-amarillo/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "description": "24/7 emergency roof repair in Amarillo TX. Rapid response for storm damage, active leaks, wind damage. Potter County: 131 hail days since 2000, 50+ mph wind gusts. Emergency tarping available. Call (806) 622-6041",
            "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Roofing Services",
            "name": "Emergency Roof Repair in Amarillo",
            "description": "Professional emergency roof repair services in Amarillo, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Amarillo",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Emergency Roof Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"How quickly can you respond to emergency roof repairs in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for active leaks and storm damage throughout Amarillo. Our 24/7 emergency crews carry tarps, sealants, and repair materials for immediate leak mitigation. Given Potter County's 131 hail days since 2000 and frequent severe weather, fast response prevents secondary water damage to interiors, insulation, and belongings."}},{"@type":"Question","name":"What qualifies as a roofing emergency in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Active leaks causing interior water damage, missing shingles exposing roof deck after windstorms, holes from hail or debris, collapsed sections from heavy snow/ice, severe storm damage requiring immediate protection. Potter County's extreme weather (50+ mph wind gusts, large hailstones) regularly creates emergency situations requiring 24/7 response."}},{"@type":"Question","name":"Do you provide emergency tarping services?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping throughout Amarillo. When storms damage your roof, we install heavy-duty waterproof tarps within hours to prevent further water intrusion. Tarping protects your home while we process insurance claims and schedule permanent repairs. Emergency tarping costs typically covered by insurance as part of your claim."}},{"@type":"Question","name":"Will insurance cover emergency roof repairs in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage resulted from covered perils (hail, wind, storm). Emergency tarping and temporary repairs are typically covered to prevent additional damage. We document all storm damage with photos, meet adjusters on-site, and ensure emergency costs are included in your claim. Most homeowners pay only their deductible for complete storm damage repairs."}},{"@type":"Question","name":"What should I do immediately after storm damage in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Safety first - stay away from damaged areas. If safe, place buckets under active leaks. Take photos/videos of damage. Call us for emergency tarping (806-622-6041). Don't attempt DIY repairs on damaged roofs - Potter County's steep roof pitches and wind make it dangerous. Contact your insurance within 24-48 hours to report the claim."}},{"@type":"Question","name":"Can you repair roofs during Amarillo's winter months?","acceptedAnswer":{"@type":"Answer","text":"Yes, with weather limitations. We perform emergency repairs year-round, though severe weather may cause delays. Temporary tarping works in any conditions. Permanent shingle repairs require temperatures above 40°F for proper adhesive bonding. Metal and TPO repairs possible in colder weather. We monitor Amarillo forecasts to schedule work during suitable conditions."}},{"@type":"Question","name":"Do you repair roofs damaged by Amarillo's high winds?","acceptedAnswer":{"@type":"Answer","text":"Yes. Amarillo averages 14.3 mph winds (highest in Texas) with gusts exceeding 50 mph annually. Wind damage includes missing/lifted shingles, exposed underlayment, damaged flashing, and blown-off ridge vents. We perform emergency wind damage repairs 24/7 and upgrade installations with 6-nail high-wind patterns and enhanced fastening systems."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/emergency-repair-4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Emergency Roof Repair in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Response for Storm Damage
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                24/7 emergency roof repair throughout Amarillo and Potter County. When Texas Panhandle storms strike - hail, high winds (50+ mph gusts), or severe weather - we respond within 2 hours from our Amarillo headquarters. Emergency tarping, leak mitigation, and permanent repairs available around the clock for immediate protection.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
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
                  24/7
                </div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Response</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">&lt;2 hr</div>
                <div className="text-brand-brown font-semibold text-lg">Average Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">365</div>
                <div className="text-brand-brown font-semibold text-lg">Days/Year Available</div>
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
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Amarillo's Climate Demands Expert Emergency Roof Repair
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Amarillo's location in the Texas Panhandle creates one of America's most challenging roofing environments. Potter County faces extreme conditions year-round:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Extreme Hail</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>131 severe hail days since 2000</strong> - Potter County leads Texas in hail frequency, ranking in America's Top 10 most hail-prone cities.
                </p>
                <p className="text-gray-600 text-sm">
                  438 hail reports within 10 miles in just 12 months. Peak season March-May with secondary fall peak.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">High Winds</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>14.3 mph average winds</strong> - highest in Texas, #2 in America. Extreme gusts exceed 50 mph annually.
                </p>
                <p className="text-gray-600 text-sm">
                  At 3,600' elevation, clashing air masses create severe wind events. Peak winds March-April.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>86°F temperature range</strong> - from 13°F winter lows to 99°F summer highs causes severe thermal stress.
                </p>
                <p className="text-gray-600 text-sm">
                  Constant expansion/contraction accelerates material degradation and shortens roof lifespan.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Our Emergency Response Process in Amarillo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Immediate Response (0-2 Hours)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">•</span>
                    Emergency call received at our Amarillo headquarters
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">•</span>
                    Crew dispatched within 30 minutes with emergency supplies
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">•</span>
                    On-site assessment and immediate leak mitigation
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">•</span>
                    Emergency tarping and water damage prevention
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">•</span>
                    Photo documentation for insurance claims
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Follow-up (24-48 Hours)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    Comprehensive roof inspection and damage assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    Insurance adjuster meeting coordination
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    Detailed repair estimate and timeline
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    Permanent repair scheduling
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    Interior damage assessment and mitigation
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Amarillo-Specific Emergency Protocols</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our emergency response protocols are specifically designed for Amarillo's unique weather patterns. During Potter County's peak storm season (March-May), we maintain expanded emergency crews and additional equipment stockpiles at our S Western St location.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Spring Storm Response</h4>
                  <p className="text-gray-600 text-sm">Enhanced crews during peak hail season with rapid deployment capability across all Amarillo neighborhoods</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">High Wind Protocols</h4>
                  <p className="text-gray-600 text-sm">Specialized equipment for Amarillo's extreme wind conditions, including high-wind rated materials and enhanced fastening systems</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Emergency Roof Repair Services for Amarillo Neighborhoods</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide emergency roof repair services throughout all Amarillo areas, with rapid response times based on proximity to our headquarters:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Zone 1: &lt;30 Min Response</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Downtown Amarillo</li>
                    <li>• Medical District</li>
                    <li>• Wolflin</li>
                    <li>• San Jacinto Heights</li>
                    <li>• Avondale</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">Zone 2: &lt;60 Min Response</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Puckett</li>
                    <li>• Southwest Amarillo</li>
                    <li>• Randall County areas</li>
                    <li>• Sunset Terrace</li>
                    <li>• Belmar</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Zone 3: &lt;90 Min Response</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lake Tanglewood</li>
                    <li>• Amarillo Country Club</li>
                    <li>• Timbercreek Canyon</li>
                    <li>• Bishop Hills</li>
                    <li>• Southeast Amarillo</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Emergency Roof Repairs We Handle in Amarillo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-red-800 mb-3">Storm Damage Repairs</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Hail damage from severe Potter County storms</li>
                    <li>• Wind damage from 50+ mph gusts</li>
                    <li>• Debris impact from Texas Panhandle storms</li>
                    <li>• Missing or damaged shingles</li>
                    <li>• Compromised flashing and gutters</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Leak Emergency Repairs</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Active water intrusion mitigation</li>
                    <li>• Emergency roof membrane repairs</li>
                    <li>• Damaged underlayment replacement</li>
                    <li>• Skylight and chimney leak repairs</li>
                    <li>• Ice dam damage (winter months)</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-amber-800 mb-3">Structural Emergency Repairs</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Damaged roof decking replacement</li>
                    <li>• Compromised trusses and rafters</li>
                    <li>• Collapsed sections from snow/ice load</li>
                    <li>• Damaged ridge vents and caps</li>
                    <li>• Emergency shoring and stabilization</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Commercial Emergency Repairs</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Flat roof membrane emergency patches</li>
                    <li>• HVAC unit anchorage repairs</li>
                    <li>• Parapet wall damage mitigation</li>
                    <li>• Emergency drainage system repairs</li>
                    <li>• Industrial facility storm damage</li>
                  </ul>
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
                  How quickly can you respond to emergency roof repairs in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We respond within 2 hours for active leaks and storm damage throughout Amarillo. Our 24/7 emergency crews carry tarps, sealants, and repair materials for immediate leak mitigation. Given Potter County's 131 hail days since 2000 and frequent severe weather, fast response prevents secondary water damage to interiors, insulation, and belongings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What qualifies as a roofing emergency in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Active leaks causing interior water damage, missing shingles exposing roof deck after windstorms, holes from hail or debris, collapsed sections from heavy snow/ice, severe storm damage requiring immediate protection. Potter County's extreme weather (50+ mph wind gusts, large hailstones) regularly creates emergency situations requiring 24/7 response.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide emergency tarping services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, 24/7 emergency tarping throughout Amarillo. When storms damage your roof, we install heavy-duty waterproof tarps within hours to prevent further water intrusion. Tarping protects your home while we process insurance claims and schedule permanent repairs. Emergency tarping costs typically covered by insurance as part of your claim.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover emergency roof repairs in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, if damage resulted from covered perils (hail, wind, storm). Emergency tarping and temporary repairs are typically covered to prevent additional damage. We document all storm damage with photos, meet adjusters on-site, and ensure emergency costs are included in your claim. Most homeowners pay only their deductible for complete storm damage repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Safety first - stay away from damaged areas. If safe, place buckets under active leaks. Take photos/videos of damage. Call us for emergency tarping (806-622-6041). Don't attempt DIY repairs on damaged roofs - Potter County's steep roof pitches and wind make it dangerous. Contact your insurance within 24-48 hours to report the claim.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you repair roofs during Amarillo's winter months?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, with weather limitations. We perform emergency repairs year-round, though severe weather may cause delays. Temporary tarping works in any conditions. Permanent shingle repairs require temperatures above 40°F for proper adhesive bonding. Metal and TPO repairs possible in colder weather. We monitor Amarillo forecasts to schedule work during suitable conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you repair roofs damaged by Amarillo's high winds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. Amarillo averages 14.3 mph winds (highest in Texas) with gusts exceeding 50 mph annually. Wind damage includes missing/lifted shingles, exposed underlayment, damaged flashing, and blown-off ridge vents. We perform emergency wind damage repairs 24/7 and upgrade installations with 6-nail high-wind patterns and enhanced fastening systems.
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
          <h2 className="text-4xl font-bold mb-6">Need Emergency Roof Repair?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Amarillo property owners. Insurance claim assistance available. Call now for immediate service.
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
