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
  title: 'Emergency Roof Repair Lubbock TX | 24/7 Storm Response',
  description: '24/7 emergency roof repair in Lubbock TX. 2-hour response from Amarillo headquarters. Severe hail, 90 MPH wind damage, active leaks. Call (806) 622-6041',
};

export default function EmergencyRoofRepairLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Lubbock", url: "/emergency-roof-repair-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/emergency-roof-repair-lubbock/#localbusiness",
            "name": "5 Star Commercial Roofing - Lubbock Emergency Roof Repair",
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
              "latitude": 33.5779,
              "longitude": -101.8552
            },
            "url": "https://5starroofingpros.com/emergency-roof-repair-lubbock/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
              "name": "Lubbock",
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
            "description": "24/7 emergency roof repair in Lubbock TX. 2-hour response from Amarillo HQ. Lubbock County extreme weather: 131°F temperature range, 90 MPH winds, record 16.9″ snowfall. Emergency tarping, leak mitigation. Call (806) 622-6041",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
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
            "name": "Emergency Roof Repair in Lubbock",
            "description": "Professional emergency roof repair services in Lubbock, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lubbock",
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
            "mainEntity": [{"@type":"Question","name":"How quickly can you respond to emergency roof repairs in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"We respond within 2 hours for emergency roof repairs in Lubbock. Our Amarillo headquarters is 124 miles away - typically 2 hours travel time depending on traffic and weather conditions. For active leaks during business hours, response time averages 90-120 minutes. After-hours and weekend emergencies may take up to 2.5 hours due to crew mobilization."}},{"@type":"Question","name":"What makes Lubbock roofs vulnerable to emergency damage?","acceptedAnswer":{"@type":"Answer","text":"Lubbock experiences severe weather with 131°F temperature swings (-17°F to 114°F), peak wind gusts of 90 MPH, and record snowfall of 16.9 inches. The Hub City's flat terrain offers no wind protection, creating ideal conditions for straight-line wind damage. Spring supercells frequently produce baseball-sized hail. These extreme conditions cause rapid roof deterioration and sudden emergency failures."}},{"@type":"Question","name":"Do you provide emergency roof tarping in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping services throughout Lubbock and Lubbock County. We use heavy-duty 6-mil polyethylene tarps secured with battens and galvanized fasteners. Our crews carry multiple tarp sizes (20x30, 30x50, and custom cuts) for complete coverage. Emergency tarping prevents secondary water damage to your home's interior, insulation, and belongings while permanent repairs are scheduled."}},{"@type":"Question","name":"Does insurance cover emergency roof repairs in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage resulted from covered weather events like hail, wind, or storms. Emergency tarping and temporary repairs are typically covered as 'reasonable measures to prevent further damage.' We work directly with all major insurance carriers serving Lubbock, document storm damage thoroughly, and ensure emergency services are included in your claim settlement."}},{"@type":"Question","name":"Can you repair roofs during Lubbock's severe weather season?","acceptedAnswer":{"@type":"Answer","text":"Yes, with safety limitations. We perform emergency repairs year-round, though severe thunderstorms (March-June) and winter weather may cause delays. Temporary tarping works in most conditions. Permanent repairs require safe weather - no active lightning, winds under 25 MPH, and temperatures above 40°F for proper shingle adhesive bonding. We monitor NWS Lubbock forecasts to schedule work during safe weather windows."}},{"@type":"Question","name":"What emergency roof services do you provide in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Complete 24/7 emergency services: immediate leak mitigation, emergency tarping, storm damage assessment, temporary shingle repairs, flashing repairs, and debris removal. We handle wind damage (common with 90 MPH gusts), hail damage (frequent spring occurrence), snow load damage (record 16.9 inches), and structural damage. All emergency crews carry repair materials for immediate protection."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-morton-45-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Emergency Roof Repair in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Hub City's Trusted 24/7 Storm Response Team
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                24/7 emergency roof repair serving Lubbock and all of Lubbock County. When severe thunderstorms, hailstorms, or West Texas winds damage your roof, we respond within 2 hours from our Amarillo headquarters 124 miles north. Emergency tarping, immediate leak mitigation, and permanent storm damage repairs available around the clock.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Emergency Inspection
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
                  2 hr
                </div>
                <div className="text-brand-brown font-semibold text-lg">Response Time from Amarillo</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">124</div>
                <div className="text-brand-brown font-semibold text-lg">Miles from HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">90</div>
                <div className="text-brand-brown font-semibold text-lg">MPH Peak Winds</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Emergency Service</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Lubbock's "Hub City" Climate Creates Roofing Emergencies
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Lubbock's unique position on the High Plains creates one of Texas's most challenging roofing environments. The Hub City sits at 3,202 feet elevation with no natural windbreaks, making it exceptionally vulnerable to severe weather. Lubbock County faces the most extreme weather conditions in the region:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Record Temperature Swings</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>131°F temperature range</strong> - from record low of -17°F (February 8, 1933) to record high of 114°F (June 27, 1994).
                </p>
                <p className="text-gray-600 text-sm">
                  Constant expansion and contraction causes accelerated deterioration of shingles, flashing, and sealants. Emergency failures often occur during rapid temperature changes.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Extreme Wind Events</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>90 MPH peak wind gusts</strong> - recorded May 9, 1952. Regular straight-line winds with no terrain protection.
                </p>
                <p className="text-gray-600 text-sm">
                  Flat High Plains terrain provides zero wind protection. Spring supercells commonly produce 60+ MPH winds causing widespread shingle blow-offs and structural damage.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-md border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Record Snowfall Loads</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>16.9 inches in one storm</strong> - January 20-21, 1983. Total season: 41.2 inches.
                </p>
                <p className="text-gray-600 text-sm">
                  Rare but devastating snow events create emergency roof load failures. Older structures not designed for such loads can experience collapse or serious damage.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Lubbock's Severe Weather Season</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-amber-700 mb-2">Peak Storm Season (March-June)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Supercell thunderstorms</strong> with baseball-sized hail</li>
                    <li>• <strong>Straight-line winds</strong> exceeding 60 MPH</li>
                    <li>• <strong>Flash flooding</strong> with up to 7.8" in 24 hours</li>
                    <li>• <strong>Temperature swings</strong> of 40°F+ in single days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-700 mb-2">Winter Emergencies (Nov-Feb)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Ice dams</strong> from freeze-thaw cycles</li>
                    <li>• <strong>Snow loads</strong> on flat commercial roofs</li>
                    <li>• <strong>Thermal shock</strong> from rapid temperature drops</li>
                    <li>• <strong>Wind chill effects</strong> accelerating material failure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Our Emergency Response Process for Lubbock County
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Immediate Response (0-2 Hours)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">1.</span>
                    <span><strong>Emergency call assessment</strong> - Determine severity and dispatch priority crew from Amarillo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">2.</span>
                    <span><strong>Travel time calculation</strong> - 124 miles via US-87 South (2 hours normal conditions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">3.</span>
                    <span><strong>Safety assessment</strong> - Evaluate structural integrity and interior water damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold font-bold mr-2">4.</span>
                    <span><strong>Emergency tarping</strong> - Install waterproof protection to prevent further damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Temporary Repairs (2-8 Hours)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">1.</span>
                    <span><strong>Leak mitigation</strong> - Stop active water intrusion with sealants and patches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">2.</span>
                    <span><strong>Documentation</strong> - Photo evidence for insurance claims and adjuster meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">3.</span>
                    <span><strong>Debris removal</strong> - Clear hazardous materials from roof surface and gutters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">4.</span>
                    <span><strong>Assessment report</strong> - Complete damage evaluation for permanent repair planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">What Constitutes a Roofing Emergency in Lubbock?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3">Immediate Emergency (Call Now)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Active leaks causing interior water damage</li>
                    <li>• Missing or severely damaged shingles after wind/hail</li>
                    <li>• Holes in roof from debris or hail impact</li>
                    <li>• Structural damage or sagging sections</li>
                    <li>• Storm damage exposing roof deck to weather</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-3">Urgent Repair (24-48 Hours)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Loose or lifted shingles from wind damage</li>
                    <li>• Damaged flashing around chimneys or vents</li>
                    <li>• Clogged gutters causing water backup</li>
                    <li>• Minor leaks during storm events</li>
                    <li>• Preventive repairs before forecast severe weather</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Emergency Roof Repair Services Throughout Lubbock County
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Storm Damage Repair</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive storm damage restoration for Lubbock's severe weather events. We repair hail damage, wind damage, and structural issues caused by the area's intense thunderstorms.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Hail damage assessment and repair</li>
                  <li>• Wind-damaged shingle replacement</li>
                  <li>• Flashing and ventilation repairs</li>
                  <li>• Complete roof system restoration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Emergency Leak Mitigation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Immediate leak stopping services to protect your Lubbock home's interior from water damage. Our crews carry advanced sealants and patching materials.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Immediate leak location and sealing</li>
                  <li>• Emergency tarping installation</li>
                  <li>• Interior protection measures</li>
                  <li>• Moisture assessment and mitigation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
                <h3 className="text-xl font-bold text-green-800 mb-3">24/7 Emergency Tarping</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Professional emergency tarping services using heavy-duty materials designed to withstand Lubbock's high winds until permanent repairs are completed.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 6-mil polyethylene waterproof tarps</li>
                  <li>• Galvanized fastening systems</li>
                  <li>• Custom sizing for complete coverage</li>
                  <li>• Wind-resistant installation methods</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Service Areas Throughout Lubbock County</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">City of Lubbock</h4>
                  <p className="text-sm text-gray-600">Complete metro coverage</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Wolfforth</h4>
                  <p className="text-sm text-gray-600">Suburban communities</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Shallowater</h4>
                  <p className="text-sm text-gray-600">North Lubbock County</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Slaton</h4>
                  <p className="text-sm text-gray-600">Southeast county areas</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Emergency Roof Repair FAQs - Lubbock, TX
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to emergency roof repairs in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We respond within 2 hours for emergency roof repairs in Lubbock. Our Amarillo headquarters is 124 miles away - typically 2 hours travel time depending on traffic and weather conditions. For active leaks during business hours, response time averages 90-120 minutes. After-hours and weekend emergencies may take up to 2.5 hours due to crew mobilization.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Lubbock roofs vulnerable to emergency damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock experiences severe weather with 131°F temperature swings (-17°F to 114°F), peak wind gusts of 90 MPH, and record snowfall of 16.9 inches. The Hub City's flat terrain offers no wind protection, creating ideal conditions for straight-line wind damage. Spring supercells frequently produce baseball-sized hail. These extreme conditions cause rapid roof deterioration and sudden emergency failures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide emergency roof tarping in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, 24/7 emergency tarping services throughout Lubbock and Lubbock County. We use heavy-duty 6-mil polyethylene tarps secured with battens and galvanized fasteners. Our crews carry multiple tarp sizes (20x30, 30x50, and custom cuts) for complete coverage. Emergency tarping prevents secondary water damage to your home's interior, insulation, and belongings while permanent repairs are scheduled.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does insurance cover emergency roof repairs in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, if damage resulted from covered weather events like hail, wind, or storms. Emergency tarping and temporary repairs are typically covered as "reasonable measures to prevent further damage." We work directly with all major insurance carriers serving Lubbock, document storm damage thoroughly, and ensure emergency services are included in your claim settlement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you repair roofs during Lubbock's severe weather season?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, with safety limitations. We perform emergency repairs year-round, though severe thunderstorms (March-June) and winter weather may cause delays. Temporary tarping works in most conditions. Permanent repairs require safe weather - no active lightning, winds under 25 MPH, and temperatures above 40°F for proper shingle adhesive bonding. We monitor NWS Lubbock forecasts to schedule work during safe weather windows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What emergency roof services do you provide in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Complete 24/7 emergency services: immediate leak mitigation, emergency tarping, storm damage assessment, temporary shingle repairs, flashing repairs, and debris removal. We handle wind damage (common with 90 MPH gusts), hail damage (frequent spring occurrence), snow load damage (record 16.9 inches), and structural damage. All emergency crews carry repair materials for immediate protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do I prepare for emergency roof situations in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Stay informed of severe weather through NWS Lubbock alerts. Keep emergency supplies ready: buckets for leaks, tarps for temporary protection, and our contact information (806) 622-6041. After storms, inspect from the ground for obvious damage - never climb on damaged roofs. Document damage with photos for insurance. Have your homeowner's insurance policy accessible for quick claims filing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Safety first - stay away from damaged areas and avoid standing water. Place buckets under active leaks if safe to do so. Take photos/videos of damage for insurance documentation. Call us immediately for emergency services (806) 622-6041. Contact your insurance company within 24-48 hours to report the claim. Do not attempt DIY repairs on storm-damaged roofs - Lubbock's high winds and structural concerns require professional assessment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Insurance Claims Assistance for Lubbock Homeowners
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-4">We Work With Your Insurance</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Emergency roof damage in Lubbock is typically covered under your homeowner's policy when caused by covered perils like hail, wind, or storms. We assist with the entire claims process to ensure you receive fair settlement for emergency repairs and permanent restoration.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Complete damage documentation with photos</li>
                    <li>• Meet insurance adjusters on-site</li>
                    <li>• Provide detailed repair estimates</li>
                    <li>• Ensure emergency tarping costs are included</li>
                    <li>• Handle paperwork and claim follow-up</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-4">Common Coverage Details</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-3">Typically Covered:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Hail damage to shingles and gutters</li>
                      <li>• Wind damage from storms</li>
                      <li>• Emergency tarping to prevent further damage</li>
                      <li>• Water damage from roof leaks</li>
                      <li>• Debris removal from storm damage</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg mt-4">
                    <h4 className="font-bold text-red-700 mb-3">Usually NOT Covered:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Normal wear and aging</li>
                      <li>• Maintenance-related issues</li>
                      <li>• Pre-existing damage</li>
                      <li>• Flood damage (requires separate policy)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Emergency Roof Repair Needed in Lubbock?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            24/7 emergency response throughout Lubbock County. Free emergency inspections, insurance claim assistance, and immediate storm damage mitigation available now.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041 Now
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Emergency Service
            </a>
          </div>
        </section>
      </div>
    </>
  );
}