import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/hail-damage-repair-levelland/' },
  title: 'Hail Damage Repair Levelland TX | 5 Star Roofing',
  description: "Professional hail damage repair in Levelland TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function HailDamageRepairLevellandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        { name: "Levelland", url: "/hail-damage-repair-levelland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Hail Damage Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/hail-damage-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/hail-damage-repair-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional hail damage repair in Levelland TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Repair",
            "name": "Hail Damage Repair in Levelland",
            "description": "Professional hail damage repair services in Levelland, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Levelland",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hail Damage Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Repair Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Roof Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How do I know if my Levelland roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance."}},{"@type":"Question","name":"Will insurance cover hail damage in Levelland?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate."}},{"@type":"Question","name":"Should I upgrade to Class 4 shingles after hail damage?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-levelland-3-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Hail Damage Repair in <span className="text-brand-gold-light">Levelland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional hail damage repair throughout Levelland. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Levelland's Hail Damage Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional hail damage repair throughout Levelland and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Levelland with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Levelland's Severe Storm Corridor</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">South Plains Weather Intensity</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Levelland sits at the heart of the South Plains severe weather corridor, where Hockley County experiences some of Texas's most destructive hailstorms. The city's position in the Llano Estacado creates unique atmospheric dynamics that regularly spawn supercell thunderstorms with devastating hail production.</p>
                <p className="text-gray-700 mb-4 leading-relaxed">Recent data shows Levelland has experienced 49 confirmed hail reports from trained spotters and been under severe weather warnings 46 times in just 12 months. Doppler radar has detected hail-producing storms at or near Levelland on 108 occasions during the same period, highlighting the area's exceptional storm frequency.</p>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                  <h4 className="font-semibold text-brand-brown mb-2">Levelland Storm Statistics</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>49 confirmed hail reports</strong> from trained weather spotters</li>
                    <li>• <strong>46 severe weather warnings</strong> issued for Hockley County</li>
                    <li>• <strong>108 radar detections</strong> of hail-producing thunderstorms</li>
                    <li>• <strong>Peak season:</strong> Late May through early July</li>
                    <li>• <strong>Most destructive time:</strong> 1:30-3:00 AM (bow echo events)</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">May 2024 Catastrophic Storm Event</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                    <h4 className="font-semibold text-brand-brown">Bow Echo Destruction</h4>
                    <p className="text-gray-700 text-sm">The most destructive straight-line winds occurred in Levelland from 1:30-1:40 AM CDT, with a severe "bow echo" storm producing devastating wind-driven hail and causing widespread structural damage throughout the city.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <h4 className="font-semibold text-brand-brown">Mass Power Outages</h4>
                    <p className="text-gray-700 text-sm">Multiple power outages impacted 6,660 customers across Hockley County, with the electrical grid severely damaged by wind-driven hail and 80+ mph straight-line winds.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-brand-brown">Agricultural Devastation</h4>
                    <p className="text-gray-700 text-sm">Center pivot irrigation systems were flipped and destroyed, trees stripped bare by wind-driven hail, and emerging crops severely damaged across thousands of acres in Hockley County.</p>
                  </div>
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800"><strong>National Weather Service Response:</strong> NWS teams conducted ground surveys to assess the extensive damage from this historic bow echo event that reshaped Levelland's storm preparedness protocols.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Advanced Storm Damage Analysis</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl mb-4">🌪️</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Bow Echo Impact Assessment</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Wind Speed Analysis:</strong> Straight-line winds exceeding 80 mph cause structural damage patterns distinct from traditional storm damage</li>
                  <li>• <strong>Directional Damage Mapping:</strong> Bow echo events create unique damage signatures requiring specialized documentation techniques</li>
                  <li>• <strong>Microburst Identification:</strong> Downburst wind patterns create concentrated damage areas needing comprehensive assessment</li>
                  <li>• <strong>Debris Field Analysis:</strong> Wind-driven projectile damage assessment for insurance documentation</li>
                  <li>• <strong>Uplift Resistance Evaluation:</strong> Testing remaining roof components for wind resistance standards</li>
                  <li>• <strong>Secondary Damage Detection:</strong> Water intrusion assessment from compromised building envelope</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Scientific Documentation Methods</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Meteorological Correlation:</strong> Matching damage patterns with National Weather Service storm reports and radar data</li>
                  <li>• <strong>Wind Speed Calculation:</strong> Using debris trajectory analysis to determine actual wind speeds during impact</li>
                  <li>• <strong>Hail Stone Sizing:</strong> Physical evidence collection and measurement for insurance verification</li>
                  <li>• <strong>Photogrammetric Analysis:</strong> Using drone photography for precise damage measurement and documentation</li>
                  <li>• <strong>Thermal Imaging Assessment:</strong> Detecting moisture intrusion and hidden damage not visible to naked eye</li>
                  <li>• <strong>Load Path Evaluation:</strong> Structural integrity assessment for code compliance and safety</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Levelland-Specific Solutions</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Enhanced Uplift Resistance:</strong> Upgraded fastening systems designed for 90+ mph wind events</li>
                  <li>• <strong>Bow Echo Protection:</strong> Reinforced roof-to-wall connections for straight-line wind resistance</li>
                  <li>• <strong>Multi-Impact Barriers:</strong> Advanced underlayment systems for repeated hail impact protection</li>
                  <li>• <strong>Utility Coordination:</strong> Working with Levelland utilities for expedited restoration</li>
                  <li>• <strong>Community Resilience:</strong> Building back stronger with climate-adapted materials</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">South Plains Storm Response Protocol</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Immediate Storm Response (0-4 Hours)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Storm Tracking & Deployment</h4>
                      <p className="text-gray-600 text-sm">weather monitoring with pre-positioned response teams activated when severe weather approaches Hockley County</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Safety-First Assessment</h4>
                      <p className="text-gray-600 text-sm">Immediate structural integrity evaluation focusing on life safety and structural stabilization needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Storm Protection</h4>
                      <p className="text-gray-600 text-sm">Professional tarping and board-up services to prevent additional water damage and secure property</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-brand-brown mb-2">Levelland Storm Coordination</h4>
                  <p className="text-gray-700 text-sm">We maintain direct communication with Levelland Emergency Management and Hockley County officials for coordinated disaster response and resource allocation.</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Recovery Coordination (4-48 Hours)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Comprehensive Damage Documentation</h4>
                      <p className="text-gray-600 text-sm">Detailed assessment using advanced technology and correlation with NWS storm surveys</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Insurance Claim Initiation</h4>
                      <p className="text-gray-600 text-sm">Rapid claim filing with major carriers serving Levelland including documentation of bow echo specific damage patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Material Logistics</h4>
                      <p className="text-gray-600 text-sm">Expedited sourcing and delivery of materials optimized for South Plains weather conditions</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Hockley County Resource Network</h4>
                  <p className="text-green-700 text-sm">Established partnerships with local suppliers, debris removal services, and utility providers ensure rapid recovery for Levelland properties.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Bow Echo Resistant Roofing Systems</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Wind-Driven Hail Protection</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">Levelland's May 2024 bow echo event demonstrated the critical need for roofing systems engineered to withstand not just vertical hail impacts, but wind-driven projectiles at extreme velocities. Our enhanced protection systems address these unique South Plains threats.</p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Enhanced Uplift Resistance</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Ring-Shank Nail Systems:</strong> Superior holding power for 90+ mph straight-line winds</li>
                      <li>• <strong>Reinforced Decking:</strong> Upgraded fastening patterns for extreme wind events</li>
                      <li>• <strong>Enhanced Edge Securement:</strong> Perimeter reinforcement for uplift resistance</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Impact Protection Systems</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Class 4+ Materials:</strong> Exceeding standard impact requirements for extreme events</li>
                      <li>• <strong>Multi-Layer Defense:</strong> Redundant protection systems for catastrophic storms</li>
                      <li>• <strong>Flexible Membrane Technology:</strong> Energy-absorbing materials that resist puncture</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Levelland Climate Specifications</h3>
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Bow Echo Performance Standards</h4>
                  <p className="text-gray-700 text-sm mb-4">Our Levelland installations meet enhanced performance criteria based on analysis of the May 2024 bow echo and other extreme weather events affecting Hockley County.</p>
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">90+</div>
                      <div className="text-xs text-gray-600">MPH Wind Rating</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">Class 4</div>
                      <div className="text-xs text-gray-600">Impact Resistance</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">50+</div>
                      <div className="text-xs text-gray-600">Year Warranty</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">30%</div>
                      <div className="text-xs text-gray-600">Insurance Discount</div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-xs text-yellow-800"><strong>Levelland Advantage:</strong> Enhanced systems typically pay for themselves within 3-5 years through insurance savings and avoided storm damage costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Hockley County Insurance Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Storm-Specific Claim Documentation</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Our experience with Levelland's unique storm patterns, including the devastating May 2024 bow echo, provides critical expertise in documenting and presenting claims for maximum insurance settlement recovery.</p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-brand-brown mb-3">Levelland Claims Success Record</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>120+ bow echo claims</strong> successfully processed after May 2024 event</li>
                    <li>• <strong>97% approval rate</strong> for wind-driven hail damage in Hockley County</li>
                    <li>• <strong>Average 26% increase</strong> in settlements with professional representation</li>
                    <li>• <strong>14-day average</strong> claim resolution for standard bow echo damage</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Specialized Damage Advocacy</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Bow Echo Pattern Recognition</h4>
                      <p className="text-gray-600 text-sm">Expertise in documenting unique damage signatures from straight-line wind events</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Meteorological Correlation</h4>
                      <p className="text-gray-600 text-sm">Linking property damage to specific National Weather Service reports and radar data</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Code Upgrade Maximization</h4>
                      <p className="text-gray-600 text-sm">Ensuring coverage for enhanced wind resistance and current building standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Adjuster Technical Education</h4>
                      <p className="text-gray-600 text-sm">Professional presentation of complex storm dynamics and resulting damage patterns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Levelland roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles after hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Levelland property owners. Expert hail damage repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}