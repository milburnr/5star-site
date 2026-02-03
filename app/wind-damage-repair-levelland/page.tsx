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
  title: "Wind Damage Repair Levelland TX | 5 Star Commercial Roofing",
  description: "Expert wind damage roof repair in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function WindDamageRepairLevellandPage() {
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
                      "name": "Levelland",
                      "url": "/wind-damage-repair-levelland/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/wind-damage-repair-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Wind Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5873, "longitude": -102.3779 },
        "url": "https://5starroofingpros.com/wind-damage-repair-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert wind damage repair services in Levelland, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              },
              "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
            },
            "areaServed": {
              "@type": "City",
              "name": "Levelland",
              "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert wind damage roof repair in Levelland TX. South Plains experiences 7-10 hailstorms annually."
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
                Wind Damage Repair in <span className="text-brand-gold-light">Levelland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                South Plains Wind Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Levelland TX. South Plains experiences 7-10 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">7-10</div>
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
              Levelland's Wind Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Levelland's location in Hockley County creates unique roofing challenges. The South Plains experiences 7-10 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Levelland and Hockley County with premium materials and expert installation. From properties near South Plains College to buildings throughout Levelland, we understand South Plains weather patterns, local building codes, and the specific needs of Hockley County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Levelland, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.38!3d33.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sLevelland%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Levelland, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Understanding South Plains Wind Patterns
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Panhandle Wind Corridors</h3>
                <p className="text-gray-700 leading-relaxed">
                  Levelland sits directly in the path of powerful wind corridors that sweep across the Texas Panhandle. These sustained winds of 25-45 mph, combined with gusts reaching 70-90 mph during storms, create unique structural stresses that require specialized repair techniques and reinforcement strategies.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Straight-Line Wind Damage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Unlike tornado damage, straight-line winds create consistent directional forces that can lift entire roof sections, tear membranes, and damage flashing systems. The South Plains' flat topography allows these winds to maintain intensity over vast distances, affecting multiple properties simultaneously.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Seasonal Wind Variations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hockley County experiences different wind patterns throughout the year. Spring brings severe thunderstorms with microbursts, summer has sustained thermal winds, fall features powerful cold fronts, and winter brings arctic blasts. Each requires specific repair and reinforcement approaches.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Uplift vs. Lateral Forces</h3>
                <p className="text-gray-700 leading-relaxed">
                  Panhandle winds create both uplift forces that try to pull roofing materials off and lateral forces that push against vertical surfaces. Our repair techniques address both force vectors, ensuring comprehensive protection against future wind events common in the region.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Common Wind Damage Types in Levelland
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Membrane Uplift</h3>
                <p className="text-gray-700">
                  High winds can lift and tear roofing membranes, especially at edges and corners where wind forces concentrate. This damage often starts small but spreads rapidly if not immediately addressed with proper repair techniques.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fastener Failure</h3>
                <p className="text-gray-700">
                  Sustained winds can work loose mechanical fasteners, creating weak points that lead to progressive roof failure. South Plains properties need upgraded fastening patterns and enhanced attachment systems.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Flashing Displacement</h3>
                <p className="text-gray-700">
                  Wind-driven rain and lateral forces can damage flashing systems around penetrations, parapets, and roof edges, creating leak points that compromise the entire building envelope.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">South Plains Wind Statistics</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">25-45</div>
                  <div className="text-sm text-gray-600">Sustained Winds (MPH)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">70-90</div>
                  <div className="text-sm text-gray-600">Storm Gusts (MPH)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">320+</div>
                  <div className="text-sm text-gray-600">Windy Days/Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">3,400</div>
                  <div className="text-sm text-gray-600">Elevation (ft)</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Professional Wind Damage Assessment Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Comprehensive Safety Inspection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our certified inspectors conduct thorough safety assessments to identify structural integrity issues, loose materials, and immediate hazards. We secure dangerous areas and provide emergency stabilization to prevent further damage while planning comprehensive repairs.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Detailed Damage Documentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Using advanced technology including drone photography and thermal imaging, we document all wind damage with precise measurements, high-resolution photos, and detailed reports. This documentation is crucial for insurance claims and ensures nothing is overlooked in repairs.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Structural Evaluation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our engineers evaluate the roof's structural components to identify compromised decking, damaged insulation, and stressed structural members. We assess the roof's ability to withstand future wind events and recommend reinforcement upgrades where needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Repair Strategy Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Based on damage assessment and local wind patterns, we develop customized repair strategies that not only restore the roof but enhance its wind resistance. This includes upgraded fastening patterns, reinforced edge details, and improved drainage systems.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Coordination</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We work directly with insurance adjusters to ensure fair settlements and complete coverage of wind damage repairs. Our detailed documentation and local expertise help maximize claim settlements while minimizing property owner out-of-pocket expenses.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Levelland Wind Damage Repair FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="emergency-response" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How quickly can you respond to wind damage emergencies in Levelland?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  We maintain 24/7 emergency response capabilities for Hockley County properties. Our rapid response team can typically arrive within 2-4 hours of your call to provide emergency tarping, secure loose materials, and prevent further damage. We understand that South Plains wind events can cause widespread damage requiring immediate attention.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="insurance-coverage" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Does homeowner's insurance typically cover wind damage repairs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Most property insurance policies cover wind damage as a covered peril. However, coverage details vary by policy and insurance company. We work with all major insurance carriers and help document damage to maximize your claim settlement. Our experience with local wind patterns helps ensure adjusters understand the scope of typical South Plains wind damage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="prevention-upgrades" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can repairs include upgrades to prevent future wind damage?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. When repairing wind damage, we often recommend and can implement upgrades like enhanced fastening patterns, reinforced edge details, and improved flashing systems. These upgrades can qualify for insurance discounts and significantly improve your roof's resistance to future wind events common in the Texas Panhandle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="temporary-repairs" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  What temporary repairs can protect my building until permanent repairs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Emergency temporary repairs include professional tarping, securing loose materials, temporary flashing installation, and emergency leak repairs. These measures protect your property from further damage while insurance claims are processed and permanent repair materials are ordered. All temporary work is credited toward final repair costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="repair-timeline" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How long do wind damage repairs typically take?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Repair timelines depend on damage extent and material availability. Minor repairs can often be completed in 1-2 days, while major wind damage requiring membrane replacement may take 1-2 weeks. We prioritize emergency stabilization immediately and provide detailed timelines once the full scope of damage is assessed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality-assurance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do you ensure wind damage repairs will withstand future storms?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Our repairs exceed manufacturer specifications for South Plains wind conditions. We use upgraded fastening patterns, high-wind-rated materials, and enhanced attachment methods. All repairs undergo rigorous quality testing including pull tests on fasteners and comprehensive final inspections before completion.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Properties We've Restored After Wind Damage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold text-brand-brown mb-2">Educational Facilities</h3>
                <p className="text-gray-600 text-sm">Schools, colleges, training centers throughout Levelland</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Industrial Buildings</h3>
                <p className="text-gray-600 text-sm">Manufacturing plants, warehouses, distribution centers</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-brand-brown mb-2">Commercial Properties</h3>
                <p className="text-gray-600 text-sm">Retail centers, office buildings, restaurants</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-bold text-brand-brown mb-2">Healthcare Facilities</h3>
                <p className="text-gray-600 text-sm">Medical clinics, assisted living, care facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">⛪</div>
                <h3 className="font-bold text-brand-brown mb-2">Religious Buildings</h3>
                <p className="text-gray-600 text-sm">Churches, community centers, fellowship halls</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="font-bold text-brand-brown mb-2">Agricultural Buildings</h3>
                <p className="text-gray-600 text-sm">Equipment storage, processing facilities</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From South Plains College buildings to agricultural facilities throughout Hockley County, we've helped hundreds of Levelland property owners recover from wind damage and protect against future storms.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-12 rounded-3xl border border-red-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-red-700 mb-4">Emergency Wind Damage Response</h2>
              <div className="text-6xl mb-4">🚨</div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                South Plains wind storms can strike without warning. Don't wait for minor damage to become major problems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">Immediate Actions After Wind Damage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ensure personal safety - stay away from damaged areas</li>
                  <li>• Document damage with photos from ground level</li>
                  <li>• Move valuable items away from leak areas</li>
                  <li>• Place tarps or buckets to catch water</li>
                  <li>• Contact our emergency hotline: (806) 622-6041</li>
                  <li>• Notify your insurance company</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">Our Emergency Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24/7 emergency response team</li>
                  <li>• Professional tarping and securing</li>
                  <li>• Immediate leak repairs</li>
                  <li>• Structural safety assessment</li>
                  <li>• Insurance documentation assistance</li>
                  <li>• Board-up services if needed</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="tel:8066226041" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 inline-block">
                🚨 Emergency: Call (806) 622-6041
              </a>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Restore Your Levelland Property</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert wind damage repair for South Plains properties. Our experienced team understands Panhandle wind patterns and provides comprehensive repairs that withstand future storms. Trust Hockley County's wind damage specialists.
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
