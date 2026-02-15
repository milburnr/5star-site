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
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-levelland/' },
  title: 'Roof Inspections Levelland TX | 5 Star Roofing',
  description: "Expert roof inspections in Levelland TX. South Plains experiences 7-10 severe hailstorms annually. Complete storm damage assessment and insurance documentation. Free inspections for Hockley County. Call (806) 622-6041",
};

export default function RoofInspectionsLevellandPage() {
  return (
    <>
      <Breadcrumb items={[
        {
          "name": "Home",
          "url": "/"
        },
        {
          "name": "Roof Inspections",
          "url": "/roof-inspections/"
        },
        {
          "name": "Levelland",
          "url": "/roof-inspections-levelland/"
        }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5873, "longitude": -102.3779 },
        "url": "https://5starroofingpros.com/roof-inspections-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Levelland, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "name": "Levelland",
              "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Levelland TX. South Plains storm damage assessment specialists with complete insurance documentation."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-24-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Professional Roof Inspections in <span className="text-brand-gold-light">Levelland, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                South Plains Weather & Storm Damage Specialists
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof inspections in Levelland, Texas. The South Plains region experiences 7-10 severe hailstorms annually, making professional roof inspections essential for property protection and insurance coverage. Complete assessment with detailed documentation.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
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
                <div className="text-4xl font-bold text-brand-gold mb-3">15+</div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-10</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">100%</div>
                <div className="text-brand-brown font-semibold text-lg">Insurance Approved</div>
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
              Levelland's Premier Roof Inspection Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Levelland, Texas, located in Hockley County on the South Plains, experiences some of the most challenging weather conditions in the Southwest. As the county seat and home to South Plains College, Levelland sits at the crossroads of major weather systems that regularly produce severe thunderstorms, damaging hail, and extreme weather events that test every roofing system to its limits.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The South Plains region experiences 7-10 severe hailstorms annually, with storms frequently producing golf ball to tennis ball-size hail capable of causing immediate and extensive roof damage. The flat terrain offers no protection from storm systems, and the area's position in the Texas Panhandle places it directly in the path of supercell thunderstorms moving northeast from Mexico and the Southwest.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2008, 5 Star Commercial Roofing has provided comprehensive roof inspection services throughout Levelland and Hockley County. Our experienced inspectors understand the unique challenges of South Plains weather, local building requirements, insurance regulations, and the specific needs of property owners from downtown Levelland near the courthouse to residential areas around South Plains College.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Complete Professional Roof Inspection Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🔍 Exterior Roof Assessment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Shingle Condition Analysis:</strong> Granule loss, cracking, curling, thermal damage</li>
                  <li>• <strong>Hail Damage Detection:</strong> Impact patterns, bruising, exposed substrate</li>
                  <li>• <strong>Wind Damage Evaluation:</strong> Tab lifting, blow-off, nail head exposure</li>
                  <li>• <strong>Flashing System Inspection:</strong> Chimneys, vents, penetrations, valley integrity</li>
                  <li>• <strong>Drainage System Review:</strong> Gutters, downspouts, scuppers, overflow drains</li>
                  <li>• <strong>Structural Assessment:</strong> Decking condition, truss integrity, load capacity</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏠 Interior Inspection Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Attic Space Analysis:</strong> Water penetration, insulation damage, ventilation adequacy</li>
                  <li>• <strong>Ceiling Examination:</strong> Staining, sagging, structural stress indicators</li>
                  <li>• <strong>Moisture Detection:</strong> Hidden water damage, mold growth potential</li>
                  <li>• <strong>Insulation Evaluation:</strong> Thermal performance, compression, contamination</li>
                  <li>• <strong>Ventilation Assessment:</strong> Airflow patterns, moisture control effectiveness</li>
                  <li>• <strong>Electrical Safety Review:</strong> Water damage to systems, fire hazard identification</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🚁 Advanced Inspection Technology</h3>
              <p className="text-lg mb-6">
                We employ cutting-edge technology including professional drone inspections, thermal imaging cameras, and moisture detection equipment to provide the most comprehensive assessment possible. Our digital documentation meets all insurance industry requirements for claim processing.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>• 4K Drone Photography:</strong> High-resolution aerial documentation
                </div>
                <div>
                  <strong>• Thermal Imaging:</strong> Hidden moisture and insulation defect detection
                </div>
                <div>
                  <strong>• Digital Measurements:</strong> Precise calculations for material estimates
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              South Plains Storm Damage: What to Look For
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🌨️ Hail Damage Indicators</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Primary Impact Damage</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Granule Loss Patterns:</strong> Dark spots where protective granules are knocked off</li>
                    <li>• <strong>Substrate Exposure:</strong> Black asphalt mat visible through granule loss</li>
                    <li>• <strong>Circular Impact Marks:</strong> Round impressions matching hailstone size</li>
                    <li>• <strong>Shingle Bruising:</strong> Soft spots or dents without immediate granule loss</li>
                    <li>• <strong>Matrix Cracking:</strong> Fractures in the shingle's asphalt layer</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Secondary Damage</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Gutter Denting:</strong> Round impact marks in metal gutters</li>
                    <li>• <strong>Downspout Damage:</strong> Dents and impact marks on vertical surfaces</li>
                    <li>• <strong>Flashing Impact:</strong> Dented metal around roof penetrations</li>
                    <li>• <strong>Vent Damage:</strong> Dented or destroyed exhaust and ridge vents</li>
                    <li>• <strong>HVAC Equipment:</strong> Damaged condenser coils and fan blades</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Collateral Evidence</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Granule Accumulation:</strong> Excessive granules in gutters and downspouts</li>
                    <li>• <strong>Window Screen Damage:</strong> Holes or tears in screens</li>
                    <li>• <strong>Siding Impact:</strong> Chipped or dented exterior siding</li>
                    <li>• <strong>Landscape Damage:</strong> Damaged plants, stripped tree branches</li>
                    <li>• <strong>Outdoor Equipment:</strong> Dented patio furniture, grills, equipment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">💨 Wind Damage Assessment</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Direct Wind Damage</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Shingle Blow-Off:</strong> Complete removal of individual shingles or sections</li>
                    <li>• <strong>Tab Lifting:</strong> Wind uplift breaking adhesive seals between shingle layers</li>
                    <li>• <strong>Edge Damage:</strong> Perimeter shingles showing signs of wind stress</li>
                    <li>• <strong>Ridge Cap Loss:</strong> Wind removal of ridge and hip cap shingles</li>
                    <li>• <strong>Flashing Displacement:</strong> Wind movement of metal flashing components</li>
                    <li>• <strong>Debris Impact:</strong> Damage from wind-blown objects striking the roof</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Subtle Wind Effects</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Nail Head Exposure:</strong> Shingles sliding down from uplift pressure</li>
                    <li>• <strong>Seal Failure:</strong> Compromised adhesive strips allowing future damage</li>
                    <li>• <strong>Granule Scour:</strong> Wind-driven granule removal without impact</li>
                    <li>• <strong>Asymmetrical Patterns:</strong> More damage on windward-facing roof areas</li>
                    <li>• <strong>Gutter Stress:</strong> Wind loading causing gutter separation or damage</li>
                    <li>• <strong>Thermal Movement:</strong> Wind-enhanced temperature cycling effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Insurance Claim Documentation & Support
            </h2>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">📋 Complete Insurance Documentation</h3>
              <p className="text-lg leading-relaxed">
                Our comprehensive inspection reports provide all necessary documentation for successful insurance claims in Levelland and throughout Hockley County. We understand Texas insurance regulations and work directly with adjusters to ensure accurate assessment and fair claim settlement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📸 Professional Documentation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>High-Resolution Photography:</strong> Close-up and wide shots of all damage</li>
                  <li>• <strong>Aerial Drone Imagery:</strong> Comprehensive roof overview documentation</li>
                  <li>• <strong>Test Square Photography:</strong> Insurance industry standard damage documentation</li>
                  <li>• <strong>Comparative Analysis:</strong> Before/after storm condition photography</li>
                  <li>• <strong>GPS-Tagged Images:</strong> Location-specific damage documentation</li>
                  <li>• <strong>Video Documentation:</strong> Detailed video inspection for complex damage</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📄 Technical Reporting</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Detailed Damage Assessment:</strong> Professional evaluation of all damage types</li>
                  <li>• <strong>Material Specifications:</strong> Current and recommended replacement materials</li>
                  <li>• <strong>Measurement Documentation:</strong> Precise calculations for material quantities</li>
                  <li>• <strong>Cost Estimates:</strong> Detailed line-item estimates for repair or replacement</li>
                  <li>• <strong>Code Compliance Notes:</strong> Building code requirements and necessary upgrades</li>
                  <li>• <strong>Timeline Projections:</strong> Realistic schedules for completion of work</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold mb-4 text-amber-800">⚠️ Levelland Insurance Claim Best Practices</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-amber-700">Immediate Storm Response</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Document the storm date, time, and severity with weather reports</li>
                    <li>• Take initial photographs before any temporary protective measures</li>
                    <li>• Contact your insurance company within 24-48 hours of the event</li>
                    <li>• Schedule professional inspection to document all damage thoroughly</li>
                    <li>• Avoid permanent repairs until insurance adjuster inspection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-amber-700">Insurance Adjuster Interaction</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Have professional inspection report available for adjuster review</li>
                    <li>• Request that your contractor be present during adjuster inspection</li>
                    <li>• Don't accept initial settlement offers without professional evaluation</li>
                    <li>• Understand difference between ACV and replacement cost coverage</li>
                    <li>• Know your specific policy deductible and coverage limitations</li>
                    <li>• Request detailed explanation if any claims are denied</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              South Plains Weather Patterns & Challenges
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🌪️ Levelland's Severe Weather Environment</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Levelland's position in Hockley County places it directly in one of North America's most active severe weather zones. The South Plains region sits where multiple weather systems converge, creating ideal conditions for supercell thunderstorm development. The area's flat terrain and elevation of approximately 3,500 feet contribute to atmospheric instability that fuels severe weather development.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Meteorological Factors</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Dryline Convergence:</strong> Collision zone between dry continental and moist Gulf air</li>
                    <li>• <strong>Upper-Level Dynamics:</strong> Jet stream positioning enhances storm development</li>
                    <li>• <strong>Topographic Influence:</strong> Caprock Escarpment creates wind shear and lift</li>
                    <li>• <strong>Thermal Instability:</strong> Extreme surface heating creates atmospheric instability</li>
                    <li>• <strong>Low-Level Moisture:</strong> Gulf of Mexico moisture transport supports severe storms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Storm Characteristics</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Supercell Development:</strong> Large rotating thunderstorms with long lifespans</li>
                    <li>• <strong>Hail Production:</strong> Strong updrafts support large hailstone formation</li>
                    <li>• <strong>Wind Patterns:</strong> Straight-line winds commonly exceed 70 mph</li>
                    <li>• <strong>Tornado Potential:</strong> South Plains experiences regular tornado activity</li>
                    <li>• <strong>Flash Flooding:</strong> Heavy rainfall rates overwhelm drainage systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-bold text-red-700 mb-2">Spring (Mar-May)</h4>
                <p className="text-red-600 text-sm">Peak severe weather season. Most damaging hailstorms and tornadoes. Critical inspection period after storms.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-700 mb-2">Summer (Jun-Aug)</h4>
                <p className="text-orange-600 text-sm">Continued storm activity, extreme heat stress, UV degradation. Temperature extremes test materials.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-700 mb-2">Fall (Sep-Nov)</h4>
                <p className="text-blue-600 text-sm">Transition period with continued storms, high winds, temperature fluctuations affecting roof integrity.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-700 mb-2">Winter (Dec-Feb)</h4>
                <p className="text-gray-600 text-sm">Ice storms, freeze/thaw cycles, snow loading. Material contraction and expansion stress.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Why Choose 5 Star for Levelland Roof Inspections?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">South Plains Expertise</h3>
                <p className="text-gray-600">Over 15 years of experience in Levelland and Hockley County. Deep understanding of South Plains weather patterns and their impact on roofing systems.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Advanced Technology</h3>
                <p className="text-gray-600">State-of-the-art inspection equipment including drones, thermal imaging, and moisture detection for comprehensive damage assessment.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Partnership</h3>
                <p className="text-gray-600">Established relationships with major insurance carriers. Our documentation and reporting meet industry standards for successful claims.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="cost">
                <AccordionTrigger className="text-xl font-semibold">
                  What does a roof inspection cost in Levelland?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We provide completely free roof inspections for all Levelland and Hockley County property owners. Our comprehensive service includes detailed assessment, photography, written report, and insurance claim documentation at no charge. We believe property owners shouldn't pay to determine if they need our services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="frequency">
                <AccordionTrigger className="text-xl font-semibold">
                  How often should South Plains properties be inspected?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We recommend annual inspections for all Levelland properties due to the high frequency of severe weather. Additionally, schedule inspections after any significant storm event with hail, high winds, or heavy rain. Spring inspections before storm season can identify vulnerabilities, while fall inspections assess summer storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="storm-response">
                <AccordionTrigger className="text-xl font-semibold">
                  How quickly should I schedule inspection after a storm?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Contact us within 24-48 hours after any severe weather event in Levelland. Quick response is crucial for proper damage documentation and insurance claim success. We offer damage inspection services and typically schedule within 24 hours during active storm periods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="college-properties">
                <AccordionTrigger className="text-xl font-semibold">
                  Do you inspect rental properties near South Plains College?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, we provide comprehensive inspections for all property types in Levelland, including rental properties, student housing, and commercial buildings near South Plains College. Property owners and property management companies rely on our detailed reports for maintenance planning and insurance compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="damage-types">
                <AccordionTrigger className="text-xl font-semibold">
                  What types of damage are common on South Plains roofs?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  South Plains roofs commonly experience hail damage (granule loss, impact marks, shingle cracking), wind damage (tab lifting, blow-off, edge damage), thermal stress (expansion/contraction damage), UV degradation, and moisture-related issues. Our inspectors are trained to identify all damage types specific to this region.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documentation">
                <AccordionTrigger className="text-xl font-semibold">
                  What documentation will I receive?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  You'll receive a comprehensive package including: high-resolution damage photographs, detailed written assessment, measurement documentation, material specifications, cost estimates, insurance claim support materials, and timeline recommendations. All reports are provided digitally within 24 hours of inspection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Levelland & Hockley County
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-8">
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
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Levelland Area Coverage</h3>
              <p className="text-lg text-gray-700 mb-4">
                We provide comprehensive roof inspection services throughout Levelland and Hockley County, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• Downtown Levelland</li>
                  <li>• South Plains College area</li>
                  <li>• County Courthouse district</li>
                  <li>• Hospital district</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Residential neighborhoods</li>
                  <li>• Industrial areas</li>
                  <li>• Commercial districts</li>
                  <li>• Rural Hockley County</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Student housing areas</li>
                  <li>• Agricultural properties</li>
                  <li>• Municipal buildings</li>
                  <li>• Educational facilities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Levelland Property from South Plains Weather</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            The South Plains region's severe weather demands proactive roof protection. With 7-10 major hailstorms annually, professional inspections are essential for early damage detection and insurance compliance. Don't wait for leaks—schedule your comprehensive inspection today.
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