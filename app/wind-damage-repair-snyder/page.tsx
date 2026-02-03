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
  title: "Wind Damage Repair Snyder TX | 5 Star Commercial Roofing",
  description: "Expert wind damage roof repair in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function WindDamageRepairSnyderPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Wind Damage Repair",
                      "url": "/wind-damage-repair/"
              },
              {
                      "name": "Snyder",
                      "url": "/wind-damage-repair-snyder/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/wind-damage-repair-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Wind Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.7179, "longitude": -100.9176 },
        "url": "https://5starroofingpros.com/wind-damage-repair-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert wind damage repair services in Snyder, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Wind Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
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
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Snyder",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert wind damage roof repair in Snyder TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/wind-damage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Snyder</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Wind Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Snyder's Wind Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Snyder's location in Scurry County creates unique roofing challenges. The West Texas experiences 7-9 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Snyder and Scurry County with premium materials and expert installation. From properties near Scurry County Museum to buildings throughout Snyder, we understand West Texas weather patterns, local building codes, and the specific needs of Scurry County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Snyder, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-100.92!3d32.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sSnyder%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Snyder, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              West Texas Rolling Plains Wind Dynamics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Supercell Wind Patterns</h3>
                <p className="text-gray-700 leading-relaxed">
                  Snyder sits in prime supercell territory where rotating thunderstorms create complex wind patterns including straight-line winds, downbursts, and rotating mesocyclones. These multi-directional forces require sophisticated repair techniques that address various stress vectors simultaneously.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Cap Rock Wind Acceleration</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Caprock Escarpment near Snyder creates wind acceleration zones where storms intensify rapidly. Properties in Scurry County experience amplified wind speeds as air masses compress and accelerate over the terrain changes, creating unique damage patterns.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Dryline Convergence Zones</h3>
                <p className="text-gray-700 leading-relaxed">
                  West Texas drylines create convergence zones that trigger intense thunderstorms with powerful wind shear. These atmospheric boundaries produce rapid wind direction changes and speed variations that stress roofing systems beyond normal design parameters.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Seasonal Wind Variations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Scurry County experiences distinct seasonal wind patterns from arctic northers in winter to desert thermal winds in summer. Each season brings different wind challenges requiring year-round maintenance strategies and seasonal damage prevention measures.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-purple-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Supercell Wind Damage in Scurry County
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Rotating Mesocyclones</h3>
                <p className="text-gray-700">
                  Supercell thunderstorms create rotating wind patterns that can cause multi-directional roof damage. These rotating mesocyclones stress roofing systems from multiple angles simultaneously, requiring comprehensive structural repairs.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Straight-Line Winds</h3>
                <p className="text-gray-700">
                  West Texas supercells produce devastating straight-line winds exceeding 100 mph. These sustained high winds create progressive damage patterns that start at roof edges and spread across entire membrane systems.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⬇️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Rear Flank Downbursts</h3>
                <p className="text-gray-700">
                  Powerful downbursts from supercell rear flanks create intense downward pressure combined with rapid wind direction changes. This combination can cause complete membrane failure and structural damage to commercial buildings.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Rolling Plains Storm Data</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">100+</div>
                  <div className="text-sm text-gray-600">Straight-Line Winds (MPH)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">7-9</div>
                  <div className="text-sm text-gray-600">Supercells/Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">290+</div>
                  <div className="text-sm text-gray-600">Windy Days/Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">2,400</div>
                  <div className="text-sm text-gray-600">Elevation (ft)</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Comprehensive Wind Damage Repair Methodology
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Storm Pattern Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our meteorologically-trained assessors analyze local weather radar data and storm reports to understand the specific wind forces that affected your property. This scientific approach ensures repairs address the actual damage mechanisms rather than just visible symptoms.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Multi-Vector Damage Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Supercell damage requires assessment from multiple directions and angles. We use 360-degree documentation including drone surveys, ground-level inspection, and internal structural evaluation to identify all damage vectors from complex wind patterns.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Agricultural Coordination</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Many Scurry County properties combine commercial buildings with agricultural operations. We coordinate repairs around harvest schedules, livestock needs, and agricultural equipment requirements to minimize disruption to farming operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Enhanced Wind Resistance Installation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our repairs exceed standard specifications to withstand future supercell events. We install enhanced fastening patterns, reinforced edge details, and improved membrane specifications based on local wind modeling and storm history analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Long-Term Monitoring Strategy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    West Texas properties need ongoing monitoring for wind damage prevention. We provide maintenance schedules, seasonal inspection protocols, and early warning systems to identify potential problems before they become major failures.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Snyder Wind Damage Repair Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="supercell-response" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How quickly can you respond to supercell wind damage in Snyder?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  We maintain rapid response capabilities specifically for West Texas supercell events. Our emergency team can typically respond within 2-3 hours of storm passage to provide immediate stabilization, emergency tarping, and damage assessment. We monitor weather radar during severe weather events to prepare for immediate deployment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="complex-damage" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do you repair damage from rotating supercell winds?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Rotating supercell damage requires specialized repair techniques due to multi-directional stress patterns. We analyze the rotation direction and wind shear patterns to understand stress vectors, then design repairs that reinforce against future rotating winds. This often includes upgraded fastening in multiple directions and enhanced corner reinforcement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="agricultural-properties" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can you repair wind damage without disrupting agricultural operations?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. We specialize in agricultural property repairs that maintain operational continuity. Our scheduling accommodates harvest seasons, livestock care requirements, and equipment storage needs. We often work in phases to keep portions of buildings operational while repairs are completed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="elevation-factors" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Does Snyder's elevation affect wind damage repair requirements?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, Snyder's elevation on the Rolling Plains creates unique wind acceleration effects that we account for in repairs. The higher elevation also means greater temperature extremes and UV exposure, requiring enhanced material specifications. Our repairs use altitude-appropriate materials and fastening patterns.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="storm-season" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  What's the best time for wind damage repairs in West Texas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  While emergency repairs happen year-round, comprehensive repairs are best scheduled outside peak storm season (April-June) when possible. Fall and winter provide calmer conditions for major repairs. However, we maintain full repair capabilities throughout storm season with weather monitoring and flexible scheduling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="prevention-systems" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can repairs include systems to prevent future supercell damage?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, we implement advanced prevention systems including enhanced edge details, vortex-shedding roof modifications, and improved drainage systems designed for extreme wind events. These upgrades often qualify for insurance discounts and significantly improve your building's resistance to future supercell storms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Rolling Plains Properties We've Restored
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🌾</div>
                <h3 className="font-bold text-brand-brown mb-2">Agricultural Operations</h3>
                <p className="text-gray-600 text-sm">Grain storage, livestock facilities, equipment barns</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold text-brand-brown mb-2">Educational Buildings</h3>
                <p className="text-gray-600 text-sm">Schools, community colleges, training centers</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-brand-brown mb-2">Downtown Businesses</h3>
                <p className="text-gray-600 text-sm">Historic buildings, retail stores, restaurants</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-bold text-brand-brown mb-2">Healthcare Facilities</h3>
                <p className="text-gray-600 text-sm">Medical clinics, dental offices, care centers</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Industrial Buildings</h3>
                <p className="text-gray-600 text-sm">Manufacturing, processing, distribution centers</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">⛪</div>
                <h3 className="font-bold text-brand-brown mb-2">Community Buildings</h3>
                <p className="text-gray-600 text-sm">Churches, civic centers, community halls</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From the historic Scurry County Courthouse to modern agricultural facilities throughout the Rolling Plains, we've helped hundreds of Snyder-area property owners recover from supercell wind damage and strengthen their buildings against future storms.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-orange-50 p-12 rounded-3xl border border-orange-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-orange-700 mb-4">Supercell Season Preparedness</h2>
              <div className="text-6xl mb-4">⛈️</div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                West Texas supercell season runs March through June. Be prepared for sudden, devastating wind events.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Pre-Season Preparation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schedule annual roof inspection in February</li>
                  <li>• Secure loose materials and equipment</li>
                  <li>• Clear drainage systems and gutters</li>
                  <li>• Review insurance coverage and deductibles</li>
                  <li>• Develop emergency response plan</li>
                  <li>• Program our emergency number: (806) 622-6041</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">During Supercell Warnings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monitor weather radar and warnings</li>
                  <li>• Move vehicles away from buildings</li>
                  <li>• Secure outdoor furniture and equipment</li>
                  <li>• Stay away from windows and skylights</li>
                  <li>• Have emergency supplies ready</li>
                  <li>• Prepare to document any damage after the storm</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Rebuild Stronger in Snyder</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert wind damage repair for West Texas Rolling Plains properties. Our team understands supercell wind patterns and provides repairs engineered for extreme weather. Trust Scurry County's supercell damage specialists.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Assessment
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
