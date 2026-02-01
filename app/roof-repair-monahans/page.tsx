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
  title: "Roof Repair Monahans TX | 5 Star Commercial Roofing",
  description: "Professional roof repair services in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairMonahansPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Repair",
                      "url": "/roof-repair/"
              },
              {
                      "name": "Monahans",
                      "url": "/roof-repair-monahans/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
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
              "name": "Monahans",
              "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional roof repair services in Monahans TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/roof-repair-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/75 to-amber-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Repair in <span className="text-brand-gold-light">Monahans</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Roof Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof repair services in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
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
              Monahans's Premier Roof Repair Specialists  
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Monahans, Texas, positioned at 2,613 feet elevation in Ward County's oil-rich Permian Basin, faces devastating weather patterns that challenge even the most robust roofing systems. This desert community experiences 6-8 severe hailstorms annually, with spring supercells producing hail up to tennis ball-size. Combined with sustained desert winds reaching 75+ mph, temperature extremes from -5°F to 115°F, and relentless UV radiation, Monahans properties require specialized expertise.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected over 300 properties throughout Monahans and Ward County with advanced materials engineered for desert conditions. From facilities near the Monahans Sandhills State Park to commercial buildings along Interstate 20, we understand the unique intersection of oil industry demands and extreme desert weather that defines Monahans roofing challenges.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Monahans Desert Climate Challenges</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Monahans sits in a unique position where Chihuahuan Desert conditions meet Permian Basin storm patterns. The city's sand dune topography and oil industry infrastructure create specific challenges including sandstorm abrasion, extreme temperature cycling, intense solar radiation, and sudden severe weather outbreaks that can devastate unprepared roofing systems.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Monahans Weather Extremes:</h4>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• <strong>Hailstorm Season:</strong> March-September with intense April-June activity</li>
                <li>• <strong>Desert Winds:</strong> Sustained 18-25 mph with gusts to 85 mph</li>
                <li>• <strong>Sandstorm Frequency:</strong> 15-20 dust storm events annually</li>
                <li>• <strong>Temperature Extremes:</strong> 120°F surface temperatures common</li>
                <li>• <strong>UV Intensity:</strong> Desert elevation intensifies solar radiation damage</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Specialized Desert Roof Repair Services</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Monahans repair team addresses the complete range of desert and storm damage patterns. From hail cratering and wind scour to thermal stress cracking and sand abrasion damage, we provide comprehensive solutions using materials and methods proven effective in Permian Basin desert conditions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Desert Weather Damage</h4>
                <p className="text-gray-600 mb-3">Comprehensive repair for unique desert climate effects on roofing systems.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Sand abrasion restoration</li>
                  <li>• Thermal cycling stress repair</li>
                  <li>• UV degradation assessment</li>
                  <li>• Wind scour damage correction</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Oil Industry Facilities</h4>
                <p className="text-gray-600 mb-3">Specialized repair services for Permian Basin industrial and commercial properties.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Chemical resistance upgrades</li>
                  <li>• Industrial coating systems</li>
                  <li>• High-heat zone materials</li>
                  <li>• Safety compliance focus</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Monahans Neighborhoods & Areas Served</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Monahans roof repair services cover the entire city and surrounding Ward County area. From established residential neighborhoods near Ward County Library to industrial facilities along the oil field access roads, we've built trust through consistent performance in this demanding environment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Residential Districts</h4>
                <p className="text-gray-600 text-sm mb-3">Family homes throughout Monahans requiring desert-hardy solutions.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Desert climate optimization</li>
                  <li>• Energy efficiency focus</li>
                  <li>• Sand infiltration prevention</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Oil Field Infrastructure</h4>
                <p className="text-gray-600 text-sm mb-3">Industrial facilities requiring specialized materials and methods.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Chemical-resistant systems</li>
                  <li>• High-temperature materials</li>
                  <li>• Rapid repair capabilities</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Commercial Zone</h4>
                <p className="text-gray-600 text-sm mb-3">Business district buildings along major transportation corridors.</p>
                <ul className="text-xs text-gray-600">
                  <li>• High-traffic area durability</li>
                  <li>• Aesthetic maintenance</li>
                  <li>• Minimal disruption service</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Desert-Proven Roofing Materials</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Desert conditions demand specific material characteristics that standard roofing products often lack. Our Monahans experience has identified materials and installation methods that deliver long-term performance in extreme heat, sand abrasion, and sudden severe weather events.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Heat-Resistant Membrane Systems</h4>
                <p className="text-gray-600 mb-2">Advanced TPO and modified bitumen systems engineered for extreme heat exposure and thermal cycling.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Sand-Resistant Metal Roofing</h4>
                <p className="text-gray-600 mb-2">Specialized coatings and profiles designed to resist sandstorm damage while reflecting desert heat.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Monahans, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.89!3d31.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sMonahans%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monahans, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Monahans Roof Repair FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  How does desert sand affect roofing systems in Monahans?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Desert sand creates abrasive conditions that gradually wear down roofing materials, especially during high-wind events. Sand infiltrates into seams, clogs drainage systems, and acts like sandpaper on surfaces. We use specialized sealants and design details to minimize sand infiltration while selecting materials with superior abrasion resistance for long-term performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What makes Permian Basin hailstorms particularly damaging?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Permian Basin supercells form rapidly in the desert heat and can produce some of Texas's largest hailstones. The combination of strong updrafts, minimal terrain interference, and dry air layers creates perfect conditions for hail growth. These storms often approach with little warning, making impact-resistant roofing systems essential for Ward County properties.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free comprehensive inspections for Monahans property owners. Expert desert climate roof repair with extensive warranties and complete insurance assistance.
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
