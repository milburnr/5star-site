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
  alternates: { canonical: 'https://5starroofingpros.com/roof-repair-andrews/' },
  title: "Roof Repair Andrews TX | 5 Star Commercial Roofing",
  description: "Professional roof repair services in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairAndrewsPage() {
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
                      "name": "Andrews",
                      "url": "/roof-repair-andrews/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.3187, "longitude": -102.5454 },
        "url": "https://5starroofingpros.com/roof-repair-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Andrews, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


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
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "name": "Andrews",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional roof repair services in Andrews TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/75 to-amber-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Repair in <span className="text-brand-gold-light">Andrews</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Roof Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof repair services in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Andrews's Premier Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Andrews, Texas sits in the heart of Andrews County at an elevation of 3,176 feet, creating unique roofing challenges that demand specialized expertise. The Permian Basin's harsh climate brings 6-8 devastating hailstorms annually, sustained winds exceeding 60 mph, temperature swings from -5°F to 110°F, and intense UV radiation that can deteriorate roofing materials in just a few seasons.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected over 500 properties throughout Andrews and Andrews County with premium materials and expert installation. From historic buildings near the Andrews County Courthouse on Main Street to modern facilities along Highway 385, we understand the specific demands of West Texas weather patterns, local building codes, and the unique needs of Andrews County property owners.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Why Andrews Properties Need Specialized Roof Care</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Andrews' location in the Permian Basin creates a perfect storm of weather conditions that test even the most robust roofing systems. The city experiences an average annual precipitation of just 14 inches, but when storms hit, they're often severe. Hailstones up to softball-size have been recorded in Andrews County, capable of causing catastrophic damage to unprepared roofing systems.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Andrews Weather Challenges:</h4>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• <strong>Hail Season:</strong> March through September with peak activity in May-June</li>
                <li>• <strong>Wind Speeds:</strong> Regular sustained winds of 15-25 mph, gusts to 70+ mph</li>
                <li>• <strong>Temperature Extremes:</strong> Daily fluctuations of 40-50°F common</li>
                <li>• <strong>UV Index:</strong> Frequently reaches 11+ during summer months</li>
                <li>• <strong>Dust Storms:</strong> Reduce visibility and damage roofing components</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Comprehensive Roof Repair Services in Andrews</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Andrews roof repair team specializes in addressing the full spectrum of weather-related damage common to the region. Whether you're dealing with hail damage from the latest storm, wind damage from Permian Basin gusts, or simply age-related wear accelerated by harsh conditions, we have the expertise and materials to restore your roof's integrity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Repair</h4>
                <p className="text-gray-600 mb-3">response for storm damage, leaks, and structural issues affecting Andrews properties.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Immediate leak stoppage</li>
                  <li>• Temporary weatherproofing</li>
                  <li>• Structural stabilization</li>
                  <li>• Insurance documentation assistance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Restoration</h4>
                <p className="text-gray-600 mb-3">Specialized repair techniques for hail damage patterns common in Andrews County.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Impact damage assessment</li>
                  <li>• Granule loss restoration</li>
                  <li>• Shingle and tile replacement</li>
                  <li>• Gutter and flashing repair</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Andrews Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Andrews roof repair services extend throughout every neighborhood and district in the city. From the established residential areas near Andrews Elementary School to the growing developments along NE Avenue A, we've built a reputation for quality workmanship and reliable service throughout Andrews County.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Historic Downtown</h4>
                <p className="text-gray-600 text-sm mb-3">Buildings from the 1920s oil boom era require specialized restoration techniques.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Heritage building preservation</li>
                  <li>• Original material matching</li>
                  <li>• Code compliance updates</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Residential Districts</h4>
                <p className="text-gray-600 text-sm mb-3">Family homes throughout Andrews' established neighborhoods.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Single-family home repairs</li>
                  <li>• Multi-generational upgrades</li>
                  <li>• Energy efficiency improvements</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-brand-brown">Industrial Areas</h4>
                <p className="text-gray-600 text-sm mb-3">Commercial and industrial facilities supporting the oil industry.</p>
                <ul className="text-xs text-gray-600">
                  <li>• Large-scale commercial repairs</li>
                  <li>• Industrial coating systems</li>
                  <li>• Safety compliance focus</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Local Weather Patterns & Roof Impact</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Andrews sits at the intersection of several weather patterns that create challenging conditions for roofing systems. The city's position relative to the Llano Estacado plateau affects wind patterns, while its proximity to the Guadalupe Mountains influences storm development. Understanding these local conditions is crucial for effective roof repair and maintenance.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Seasonal Roof Challenges in Andrews</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Spring (March-May)</h5>
                  <p className="text-sm text-gray-600 mb-3">Peak hail season with severe thunderstorms and tornadoes.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Hail damage repairs</li>
                    <li>• Wind damage assessment</li>
                    <li>• Storm water management</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Summer (June-August)</h5>
                  <p className="text-sm text-gray-600 mb-3">Extreme heat and UV exposure accelerate material aging.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Heat damage prevention</li>
                    <li>• Cooling system optimization</li>
                    <li>• UV protection upgrades</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Fall (September-November)</h5>
                  <p className="text-sm text-gray-600 mb-3">Temperature fluctuations cause expansion/contraction stress.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Thermal stress repairs</li>
                    <li>• Sealant maintenance</li>
                    <li>• Winter preparation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Winter (December-February)</h5>
                  <p className="text-sm text-gray-600 mb-3">Freeze-thaw cycles and occasional ice storms.</p>
                  <ul className="text-xs text-gray-600">
                    <li>• Freeze damage repairs</li>
                    <li>• Ice dam prevention</li>
                    <li>• Insulation upgrades</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Andrews-Specific Roofing Materials & Solutions</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Not all roofing materials are suitable for Andrews' extreme climate conditions. Our team specializes in selecting and installing materials specifically engineered to withstand Permian Basin weather patterns. We've tested and proven these solutions on hundreds of Andrews County properties over the past decade.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Impact-Resistant Shingles</h4>
                <p className="text-gray-600 mb-2">Class 4 impact-rated shingles designed to withstand hail up to 2 inches in diameter - crucial for Andrews' severe hail seasons.</p>
                <p className="text-sm text-gray-500">Insurance discounts available for qualifying installations.</p>
              </div>
              
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Metal Roofing Systems</h4>
                <p className="text-gray-600 mb-2">Standing seam metal roofs with specialized coatings to reflect heat and resist wind uplift - ideal for Andrews' temperature extremes and high winds.</p>
                <p className="text-sm text-gray-500">Proven performance in West Texas conditions for 30+ years.</p>
              </div>
              
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">TPO & Modified Bitumen</h4>
                <p className="text-gray-600 mb-2">Commercial-grade flat roofing systems designed for extreme temperature fluctuations and UV exposure common in Andrews.</p>
                <p className="text-sm text-gray-500">Energy-efficient solutions reduce cooling costs in summer heat.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Andrews, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.55!3d32.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sAndrews%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Andrews, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Frequently Asked Questions - Andrews Roof Repair</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  How quickly can you respond to roof emergencies in Andrews?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  We provide prompt response for Andrews County. Our team typically arrives within 2-4 hours for service calls, with temporary repairs completed the same day when weather permits. We understand that Permian Basin storms can cause sudden, severe damage that requires immediate attention to prevent further property damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What types of hail damage do you repair most often in Andrews?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  In Andrews, we most commonly repair granule loss on asphalt shingles, cracked or broken tiles, damaged flashing around chimneys and vents, and dented gutters and downspouts. The Permian Basin's frequent hailstorms create impact patterns we've learned to identify and repair efficiently. We also repair damage to HVAC equipment, skylights, and other roof-mounted systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  Do you work with insurance companies for Andrews storm damage claims?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Absolutely. We have extensive experience working with all major insurance companies on Andrews County storm damage claims. Our team can document damage, provide detailed estimates, and work directly with adjusters to ensure fair settlements. We understand the specific documentation requirements for Permian Basin weather-related claims and can help navigate the process efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What makes Andrews weather particularly challenging for roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Andrews' location in the Permian Basin creates a unique combination of challenges: frequent large hail from supercell thunderstorms, sustained high winds from the open terrain, extreme temperature fluctuations that stress materials, intense UV radiation at 3,176 feet elevation, and dust storms that can damage roof components. These factors combine to age roofing materials faster than in more moderate climates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  How do you match existing roofing materials for Andrews area homes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  We maintain extensive records of roofing materials used throughout Andrews and stock commonly used products specific to the area. For older homes, especially those built during Andrews' oil boom periods, we work with specialized suppliers to source matching materials. When exact matches aren't available, we provide options that complement existing materials while often upgrading performance characteristics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What warranty do you provide on repairs in Andrews?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  We provide comprehensive warranties on all Andrews roof repairs: 10-year warranty on workmanship, manufacturer warranties on materials (typically 20-30 years), and specific storm damage protection guarantees. Given Andrews' harsh weather conditions, our warranties are designed to provide confidence that repairs will hold up to Permian Basin weather patterns.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Why Choose 5 Star Commercial Roofing for Andrews Repairs?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Local Expertise & Experience</h3>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  With over a decade serving Andrews County, we understand the unique challenges facing properties in this region. Our team has repaired roofs on everything from historic downtown buildings to modern industrial facilities, gaining insights that only come from years of local experience.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 500+ Andrews County projects completed</li>
                  <li>• Local building code expertise</li>
                  <li>• Established supplier relationships</li>
                  <li>• Community investment and involvement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Advanced Materials & Methods</h3>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  We use only materials and techniques proven effective in Permian Basin conditions. Our ongoing education and industry partnerships ensure we stay current with the latest innovations designed for extreme weather regions like Andrews.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Climate-specific material selection</li>
                  <li>• Advanced installation techniques</li>
                  <li>• Energy-efficient upgrade options</li>
                  <li>• Preventive maintenance programs</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Andrews Service Commitment</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🕐</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Storm Response</h4>
                  <p className="text-sm text-gray-600">Always available when Andrews weather strikes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💯</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Guaranteed Workmanship</h4>
                  <p className="text-sm text-gray-600">10-year warranty on all repairs and installations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📋</div>
                  <h4 className="font-bold mb-2 text-brand-brown">Insurance Assistance</h4>
                  <p className="text-sm text-gray-600">Complete support through the claims process</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free comprehensive inspections for Andrews property owners. Expert roof repair with extensive warranties and complete insurance claim assistance. Don't let Permian Basin weather damage compromise your property investment.
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
