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
  alternates: { canonical: 'https://5starroofingpros.com/wind-damage-repair-big-spring/' },
  title: "Wind Damage Repair Big Spring TX | 5 Star Roofing",
  description: "Expert wind damage roof repair in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function WindDamageRepairBigSpringPage() {
  const faqItems = [
      {
          "question": "How do Howard County wind corridors affect Big Spring roofs?",
          "answer": "Big Spring sits where the Caprock escarpment meets the rolling plains, creating a natural wind acceleration zone. Air masses funneling through this geographic formation can increase wind speeds 15-25% above what surrounding flat areas experience. This means Big Spring properties face higher wind loads than standard building codes anticipate, making enhanced fastening and wind-rated materials essential for long-term roof performance."
      },
      {
          "question": "Does the Big Spring Refinery area experience different wind loading patterns?",
          "answer": "Yes, the industrial infrastructure around Big Spring's refinery complex can channel and redirect wind patterns, creating localized turbulence that affects nearby commercial and residential properties differently than open terrain. Buildings downwind of large industrial structures may experience vortex effects that increase uplift forces on specific roof sections. Our inspectors assess these localized patterns when designing repair and replacement solutions."
      },
      {
          "question": "How does I-20 corridor weather affect roofing in Big Spring?",
          "answer": "The Interstate 20 corridor through Big Spring serves as a pathway for severe weather systems moving across West Texas. Supercell thunderstorms frequently track along this corridor, bringing straight-line winds, hail, and tornadoes. Properties along the I-20 corridor often experience more frequent storm damage events than areas further from this weather pathway. We recommend upgraded materials for properties in this higher-exposure zone."
      },
      {
          "question": "How do you tell wind damage from hail damage on a Big Spring roof?",
          "answer": "Wind and hail damage produce distinct patterns that require different repair approaches. Wind damage typically appears as lifted, creased, or missing shingles concentrated on windward edges and ridges. Hail damage shows as circular impact marks with granule displacement scattered across the entire roof surface. Since Big Spring frequently experiences both in the same storm, accurate differentiation is critical for proper insurance documentation and ensuring all damage types are covered."
      },
      {
          "question": "What commercial building wind codes apply in Big Spring?",
          "answer": "Big Spring follows the International Building Code with Texas amendments, which requires commercial roofing systems to resist wind speeds based on the local design wind speed map. Howard County's design wind speed is 115 mph for most commercial buildings, requiring enhanced edge securement, specific fastener patterns, and tested wind uplift ratings. All our commercial installations in Big Spring meet or exceed these requirements."
      },
      {
          "question": "What is your emergency response time for wind events in Big Spring?",
          "answer": "We maintain rapid emergency response capability for Big Spring and Howard County. During major wind events, our teams deploy with tarping materials, generators, and emergency repair supplies as soon as conditions are safe. For Big Spring properties, our typical response time is 2-4 hours for emergency tarping and stabilization, with permanent repair scheduling beginning within 48 hours of initial assessment."
      }
  ];

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
                      "name": "Big Spring",
                      "url": "/wind-damage-repair-big-spring/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "RoofingContractor"],
        "@id": "https://5starroofingpros.com/wind-damage-repair-big-spring/#localbusiness",
        "name": "5 Star Roofing",
        "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
        "telephone": "(806) 622-6041",
        "email": "admin@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.2504, "longitude": -101.4787 },
        "url": "https://5starroofingpros.com/wind-damage-repair-big-spring/",
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Expert wind damage repair services in Big Spring, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Roofing",
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
              "name": "Big Spring",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert wind damage roof repair in Big Spring TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-perryton-7-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Big Spring</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Wind Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
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
              How Does Big Spring's Expert Wind Damage Repair Specialists Affect Your Roof?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Big Spring, Texas, positioned along Interstate 20 at an elevation of 2,398 feet, sits directly in the path of some of West Texas's most destructive wind events. This strategic location where the Caprock meets the rolling plains creates a natural wind acceleration zone, producing frequent derechos with sustained winds of 75-95 MPH, supercell thunderstorms generating microbursts exceeding 110 MPH, and straight-line wind events that have recorded gusts over 120 MPH. The convergence of dry air masses from the High Plains with moist Gulf air creates explosive atmospheric conditions that generate severe convective systems throughout spring and fall seasons.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has specialized in wind damage repair throughout Big Spring and Howard County, building expertise through dozens of major wind events that have impacted this resilient West Texas community. From historic properties near Downtown Big Spring to modern developments around Big Spring State Park, we understand how different wind patterns affect various architectural styles and building orientations. Our comprehensive approach addresses everything from minor shingle damage to complete roof failure, ensuring rapid restoration that exceeds local building codes and withstands future severe weather events.
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Big Spring's Unique Wind Damage Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">West Texas Wind Corridor Effects</h4>
                  <p className="text-gray-600 mb-4">Big Spring's position in the natural wind corridor between the Caprock escarpment and Permian Basin creates unique aerodynamic effects. Wind speeds often increase by 15-25% as air masses are channeled and compressed through this geographical formation, leading to higher damage potential than surrounding areas.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Seasonal Wind Event Patterns</h4>
                  <p className="text-gray-600">Spring (March-May): Supercell complexes with rotating winds causing directional damage. Summer: Isolated microbursts creating localized destruction. Fall (September-November): Derecho events with widespread straight-line wind damage. Winter: Chinook events causing rapid pressure changes and structural stress.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Topographic Wind Amplification</h4>
                  <p className="text-gray-600 mb-4">Big Spring's elevated position and surrounding terrain create wind acceleration zones where speeds can increase 20-30% over flat ground measurements. This amplification effect is particularly severe on north-facing slopes and areas near the escarpment edge where many properties are located.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Interstate Corridor Considerations</h4>
                  <p className="text-gray-600">Properties near Interstate 20 experience additional wind effects from traffic-generated turbulence and reduced windbreak vegetation. These factors combine with natural wind patterns to create complex damage scenarios requiring specialized repair approaches.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Comprehensive Wind Damage Assessment & Repair Services</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">storm response</h4>
                <p className="text-gray-600 mb-3">s for Big Spring wind damage events. Our rapid response team provides immediate tarping, board-up, and stabilization to prevent secondary damage while coordinating with local emergency services and insurance providers.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Immediate tarping</li>
                  <li>• Structural damage stabilization</li>
                  <li>• Water intrusion prevention</li>
                  <li>• Contact coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Complete Roof Replacement</h4>
                <p className="text-gray-600 mb-3">Full roofing system replacement for properties with severe wind damage. We upgrade to enhanced wind-resistant materials and fastening systems specifically designed for Big Spring's challenging wind environment and future storm protection.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wind-resistant material upgrades</li>
                  <li>• Enhanced fastening systems</li>
                  <li>• Structural reinforcement</li>
                  <li>• Code compliance improvements</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Targeted Repair Services</h4>
                <p className="text-gray-600 mb-3">Precision repairs for localized wind damage including shingle replacement, flashing restoration, and gutter repair. Our Big Spring expertise ensures seamless integration with existing systems while upgrading wind resistance.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shingle blow-off replacement</li>
                  <li>• Flashing and trim restoration</li>
                  <li>• Gutter system repair</li>
                  <li>• Ventilation component replacement</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">Big Spring Wind Damage Expertise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">West Texas Storm Pattern Analysis</h4>
                  <p className="text-gray-600 mb-4">Our team specializes in identifying wind damage patterns specific to Big Spring's geographical position. We distinguish between microburst damage, straight-line wind effects, and rotational storm damage to ensure appropriate repair techniques and materials.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Enhanced Wind Resistance Upgrades</h4>
                  <p className="text-gray-600">All repairs include upgrades designed for Big Spring's wind exposure including enhanced fastening patterns exceeding code requirements, wind-tested edge details, and materials rated for 130+ MPH sustained winds common in West Texas severe weather events.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Insurance Claims Optimization</h4>
                  <p className="text-gray-600 mb-4">Big Spring's frequent wind events require expert insurance navigation. We document damage comprehensively, provide detailed repair estimates, and work directly with adjusters to ensure full coverage for both visible and hidden wind damage.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Local Building Code Compliance</h4>
                  <p className="text-gray-600">All repairs meet Howard County building requirements and Texas Building Code wind provisions. We coordinate with local inspectors and utility providers to ensure compliant installations that protect your property investment.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Recent Big Spring Wind Events & Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Major Wind Damage Events</h4>
                  <ul className="text-gray-600 space-y-1 mb-4">
                    <li>• March 2023: Supercell complex - 105 MPH winds</li>
                    <li>• October 2022: Derecho event - 90 MPH sustained</li>
                    <li>• August 2022: Microburst series - localized 115 MPH</li>
                    <li>• April 2021: Straight-line winds - 95 MPH gusts</li>
                    <li>• November 2020: High Plains wind event - 85 MPH</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Typical Damage Patterns</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Asphalt shingle uplift and blow-off</li>
                    <li>• Metal roofing panel separation</li>
                    <li>• Gutter and downspout detachment</li>
                    <li>• Flashing and trim damage</li>
                    <li>• Structural fastener failure</li>
                    <li>• Debris impact damage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">How Does the Big Spring Wind Damage Repair Process Work?</h2>
            
            <div className="space-y-8">
              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-cyan-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Rapid Response & Storm Protection</h3>
                  <p className="text-gray-600">Our prompt response team secures Big Spring properties immediately after wind events. We provide tarping, board-up services, and structural stabilization to prevent secondary damage while beginning comprehensive damage assessment processes.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-cyan-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Comprehensive Damage Documentation</h3>
                  <p className="text-gray-600">We conduct thorough assessments using drone photography, moisture detection, and structural analysis to document all wind damage. Our Big Spring expertise helps identify damage patterns specific to West Texas wind events for accurate insurance claims.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-cyan-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Repair & Restoration</h3>
                  <p className="text-gray-600">Our certified crews execute repairs using premium materials and enhanced techniques designed for Big Spring's wind exposure. All work includes upgrades to improve future wind resistance while meeting all insurance and building code requirements.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-cyan-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Quality Assurance & Future Protection</h3>
                  <p className="text-gray-600">Final inspections ensure all repairs meet our rigorous standards and manufacturer specifications. We provide comprehensive warranties and maintenance guidance to help your Big Spring property withstand future West Texas wind events.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Serving All Big Spring Communities</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-cyan-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Downtown Big Spring</h4>
                <p className="text-gray-600 text-sm">Historic commercial and residential district requiring specialized wind damage repair that maintains architectural character while upgrading to modern wind resistance standards.</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">College Heights & Kentwood</h4>
                <p className="text-gray-600 text-sm">Established residential neighborhoods where wind damage repairs focus on maintaining property values while providing superior protection against recurring West Texas wind events.</p>
              </div>
              
              <div className="bg-gradient-to-b from-teal-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Highland South</h4>
                <p className="text-gray-600 text-sm">Modern subdivisions requiring advanced wind-resistant repairs and upgrades designed for maximum protection against Big Spring's challenging wind environment.</p>
              </div>
              
              <div className="bg-gradient-to-b from-sky-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">State Park Area</h4>
                <p className="text-gray-600 text-sm">Properties near Big Spring State Park with enhanced wind exposure requiring specialized repair techniques and materials designed for extreme weather conditions.</p>
              </div>
              
              <div className="bg-gradient-to-b from-indigo-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Rural Howard County</h4>
                <p className="text-gray-600 text-sm">Country properties and ranches facing maximum wind exposure requiring specialized repair approaches for large structures and extreme West Texas weather challenges.</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Industrial Corridor</h4>
                <p className="text-gray-600 text-sm">Commercial and industrial properties along Interstate 20 requiring rapid wind damage restoration to minimize operational disruption and ensure long-term durability.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Big Spring, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-101.47!3d32.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sBig%20Spring%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Big Spring, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="big-spring" currentService="wind-damage-repair" />
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Wind Damage Repair in Big Spring FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <AccordionItem key={`faq-${index + 1}`} value={`faq-${index + 1}`} className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>




        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Big Spring property owners. Expert wind damage repair with comprehensive warranties and insurance claim assistance.
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
