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
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-in-amarillo/' },
  title: 'Roof Inspections Amarillo TX | 5 Star Roofing',
  description: "Professional roof inspections in Amarillo TX. Texas Panhandle hail belt experts with complete insurance documentation. Free inspections after storms. Storm damage assessment specialists. Call (806) 622-6041",
};

export default function RoofInspectionsAmarilloPage() {
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
          "name": "Amarillo",
          "url": "/roof-inspections-in-amarillo/"
        }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "admin@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roof-inspections-in-amarillo/",
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Expert roof inspections services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "name": "Amarillo",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Amarillo TX. Texas Panhandle hail belt specialists with complete insurance documentation and storm damage assessment."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-20-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Expert Roof Inspections in <span className="text-brand-gold-light">Amarillo, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Texas Panhandle Hail Belt Specialists
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof inspections in Amarillo, Texas. Located in the heart of Hail Alley, Amarillo experiences severe weather requiring expert storm damage assessment and insurance documentation. Comprehensive inspections with detailed reporting.
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
                <div className="text-4xl font-bold text-brand-gold mb-3">12+</div>
                <div className="text-brand-brown font-semibold text-lg">Storms/Year</div>
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
              Amarillo's Leading Roof Inspection Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Amarillo sits directly in the heart of "Hail Alley"—the most severe hail-producing region in the United States. Located in Potter and Randall Counties, Amarillo experiences more than 12 significant hail events annually, with storms producing hailstones from quarter-size to devastating softball-size projectiles that can total roofing systems in minutes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The Texas Panhandle's unique geography creates a perfect storm environment where cold, dry air from the north collides with warm, moist air from the Gulf of Mexico. This collision zone, combined with the jet stream's position over the region during spring and summer months, produces some of the most intense supercell thunderstorms on Earth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2008, 5 Star Commercial Roofing has protected Amarillo properties with expert roof inspections that identify damage, document insurance claims, and provide comprehensive assessment services. From downtown properties near the Amarillo Civic Center to homes in the sprawling suburbs of Southwest Amarillo, we understand the unique challenges facing Texas Panhandle property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Comprehensive Professional Inspection Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🔍 Exterior Assessment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Comprehensive Shingle Inspection:</strong> Granule loss, impact damage, wind uplift, thermal splitting</li>
                  <li>• <strong>Hail Impact Documentation:</strong> Bruising patterns, fracture analysis, exposed substrate identification</li>
                  <li>• <strong>Wind Damage Assessment:</strong> Tab lifting, nail exposure, edge blow-off, ridge cap damage</li>
                  <li>• <strong>Flashing System Evaluation:</strong> Chimney, vent, skylight, and valley flashing integrity</li>
                  <li>• <strong>Gutter and Drainage Analysis:</strong> Impact damage, proper slope, debris accumulation</li>
                  <li>• <strong>Structural Inspection:</strong> Decking condition, truss damage, load distribution</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏠 Interior Evaluation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Attic Space Inspection:</strong> Water intrusion evidence, insulation damage, mold growth</li>
                  <li>• <strong>Ceiling and Wall Assessment:</strong> Staining patterns, paint bubbling, structural damage</li>
                  <li>• <strong>Ventilation System Review:</strong> Ridge vents, soffit vents, exhaust fans, moisture control</li>
                  <li>• <strong>Insulation Analysis:</strong> Compression, water damage, thermal performance</li>
                  <li>• <strong>Electrical System Check:</strong> Water damage to wiring, junction boxes, fixtures</li>
                  <li>• <strong>HVAC Impact Assessment:</strong> Ductwork damage, unit impact, efficiency loss</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🚁 Advanced Drone Technology</h3>
              <p className="text-lg mb-4">
                For comprehensive documentation and safety, we utilize professional-grade drone technology for aerial inspections, providing 4K resolution imagery and detailed video documentation that insurance adjusters prefer for claim processing.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>• High-resolution damage documentation</div>
                <div>• Safe inspection of steep or dangerous areas</div>
                <div>• Thermal imaging for moisture detection</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Critical Damage Indicators: What Professional Inspectors Look For
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🌨️ Hail Damage Identification</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Shingle Impact Damage</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Granule Displacement:</strong> Loss of protective granules exposing asphalt substrate</li>
                    <li>• <strong>Impact Bruising:</strong> Circular or oval impressions without granule loss</li>
                    <li>• <strong>Matrix Fractures:</strong> Cracks in the asphalt layer beneath granules</li>
                    <li>• <strong>Split Damage:</strong> Linear tears from large hail impact</li>
                    <li>• <strong>Accelerated Aging:</strong> Premature deterioration from repeated impacts</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Metal Component Damage</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Gutter Denting:</strong> Round impact marks in aluminum or steel gutters</li>
                    <li>• <strong>Downspout Damage:</strong> Vertical impact marks and denting patterns</li>
                    <li>• <strong>Flashing Impact:</strong> Dents in roof penetration flashing</li>
                    <li>• <strong>Vent Damage:</strong> Dented exhaust vents, turbine damage</li>
                    <li>• <strong>HVAC Unit Impact:</strong> Condenser coil damage, fan blade destruction</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Supporting Evidence</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Gutter Granules:</strong> Excessive granule accumulation in gutters</li>
                    <li>• <strong>Paint Damage:</strong> Chipped exterior paint on siding and trim</li>
                    <li>• <strong>Window Screen Tears:</strong> Holes or tears in window and patio screens</li>
                    <li>• <strong>Landscape Damage:</strong> Damaged plants, stripped tree branches</li>
                    <li>• <strong>Outdoor Equipment:</strong> Damage to patio furniture, grills, equipment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">💨 Wind Damage Assessment</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">High-Wind Damage Patterns</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Shingle Blow-Off:</strong> Complete removal of shingles, typically starting at edges and corners</li>
                    <li>• <strong>Tab Lifting:</strong> Wind gets under shingle tabs, breaking adhesive seals</li>
                    <li>• <strong>Nail Head Exposure:</strong> Shingles slide down from wind uplift pressure</li>
                    <li>• <strong>Ridge Cap Damage:</strong> Wind-driven removal of ridge and hip cap shingles</li>
                    <li>• <strong>Flashing Displacement:</strong> Wind lifting and repositioning metal flashing</li>
                    <li>• <strong>Gutter Separation:</strong> Wind stress causing gutter detachment from fascia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Directional Wind Analysis</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Windward vs. Leeward:</strong> Greater damage on windward-facing slopes</li>
                    <li>• <strong>Corner Vulnerability:</strong> Increased uplift pressure at roof corners and edges</li>
                    <li>• <strong>Turbulence Patterns:</strong> Damage around chimneys, dormers, and roof projections</li>
                    <li>• <strong>Pressure Differential:</strong> Building shape and orientation impact damage patterns</li>
                    <li>• <strong>Duration Effects:</strong> Sustained winds vs. gusts create different damage signatures</li>
                    <li>• <strong>Debris Impact:</strong> Secondary damage from wind-blown objects and debris</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Insurance Claim Documentation & Preparation
            </h2>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">📋 Professional Documentation Package</h3>
              <p className="text-lg leading-relaxed">
                Our comprehensive inspection reports provide complete documentation required for successful insurance claims in Amarillo. We understand Texas insurance requirements and work directly with adjusters to ensure proper assessment and fair claim settlement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📸 Photographic Evidence</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Macro Damage Photos:</strong> Close-up shots of individual impact sites</li>
                  <li>• <strong>Pattern Documentation:</strong> Wide shots showing damage distribution</li>
                  <li>• <strong>Comparative Analysis:</strong> Before/after storm condition comparison</li>
                  <li>• <strong>Test Square Photography:</strong> Standard insurance industry format</li>
                  <li>• <strong>Aerial Perspective:</strong> Drone imagery showing overall roof condition</li>
                  <li>• <strong>Supporting Evidence:</strong> Collateral damage to gutters, siding, landscape</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📄 Technical Reports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Damage Quantification:</strong> Percentage of roof surface affected</li>
                  <li>• <strong>Material Specifications:</strong> Existing and recommended replacement materials</li>
                  <li>• <strong>Detailed Measurements:</strong> Square footage calculations and material quantities</li>
                  <li>• <strong>Cost Analysis:</strong> Line-item estimates for repairs or replacement</li>
                  <li>• <strong>Code Compliance:</strong> Current building code requirements and upgrades</li>
                  <li>• <strong>Timeline Projections:</strong> Estimated completion schedules for work</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold mb-4 text-amber-800">⚠️ Amarillo Insurance Claim Success Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-amber-700">Pre-Adjuster Preparation</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Document weather event with National Weather Service reports</li>
                    <li>• Schedule professional inspection within 48 hours of storm</li>
                    <li>• Photograph all damage before making temporary repairs</li>
                    <li>• Contact insurance company immediately to file claim</li>
                    <li>• Keep all receipts for prompt protective measures</li>
                    <li>• Compile maintenance records showing proper roof care</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-amber-700">Adjuster Meeting Best Practices</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Have your contractor present during inspection</li>
                    <li>• Provide comprehensive damage documentation package</li>
                    <li>• Don't accept initial settlement without professional review</li>
                    <li>• Understand actual cash value vs. replacement cost differences</li>
                    <li>• Know your policy coverage limits and deductible amounts</li>
                    <li>• Request detailed explanation of any coverage denials</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Amarillo's Severe Weather Patterns & Hail Belt Impact
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🌪️ Texas Panhandle Supercell Environment</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Amarillo's location at 35.2°N latitude places it in the heart of the most prolific hail-producing region on Earth. The convergence of geographical and meteorological factors creates an environment where supercell thunderstorms thrive, producing some of the largest hailstones and most frequent severe weather events in North America.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Geographical Factors</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Elevation Advantage:</strong> 3,600 feet above sea level provides atmospheric instability</li>
                    <li>• <strong>Flat Terrain:</strong> No mountains to disrupt storm development and movement</li>
                    <li>• <strong>Dryline Position:</strong> Frequent boundary between dry desert air and moist Gulf air</li>
                    <li>• <strong>Upper-Level Divergence:</strong> Jet stream positioning enhances storm development</li>
                    <li>• <strong>Temperature Contrasts:</strong> Extreme differences between air masses fuel severe weather</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Storm Characteristics</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Supercell Frequency:</strong> 15-25 significant supercells annually</li>
                    <li>• <strong>Hail Size Distribution:</strong> 40% quarter-size, 30% golf ball, 20% tennis ball, 10% larger</li>
                    <li>• <strong>Storm Duration:</strong> Hailstorms typically last 15-45 minutes</li>
                    <li>• <strong>Peak Activity:</strong> April through June, with May peak activity</li>
                    <li>• <strong>Diurnal Pattern:</strong> Most storms develop between 3 PM and 8 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-bold text-red-700 mb-2">Spring (Mar-May)</h4>
                <p className="text-red-600 text-sm">Peak tornado and hail season. Severe supercells, large hail, damaging winds. Most active severe weather period.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-700 mb-2">Summer (Jun-Aug)</h4>
                <p className="text-orange-600 text-sm">Continued hail activity, extreme heat stress, UV damage. Temperature extremes over 100°F common.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-700 mb-2">Fall (Sep-Nov)</h4>
                <p className="text-blue-600 text-sm">Transition period, high winds, temperature swings. Freeze/thaw cycles begin affecting roof materials.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-700 mb-2">Winter (Dec-Feb)</h4>
                <p className="text-gray-600 text-sm">Ice storms, snow loading, thermal stress. Freeze/thaw damage, ice dam formation potential.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Why Choose 5 Star for Amarillo Roof Inspections?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Belt Expertise</h3>
                <p className="text-gray-600">Over 15 years specializing in hail damage assessment in Amarillo. We understand Texas Panhandle weather patterns and their impact on roofing systems.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Advanced Technology</h3>
                <p className="text-gray-600">Professional drone inspections, thermal imaging, moisture detection, and digital documentation ensure comprehensive damage assessment.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Approved</h3>
                <p className="text-gray-600">Direct relationships with all major insurance companies. Our reports and documentation meet industry standards for successful claim processing.</p>
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
                  How much does a roof inspection cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We provide completely free roof inspections for Amarillo property owners. Our comprehensive inspection includes detailed photography, written assessment, damage documentation, and insurance claim support at no charge. Unlike companies that charge inspection fees, we believe you shouldn't pay to discover if you need our services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hail-frequency">
                <AccordionTrigger className="text-xl font-semibold">
                  How often does Amarillo get damaging hail?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Amarillo experiences an average of 12-15 significant hail events annually, with 3-5 producing golf ball-size or larger hail capable of causing roof damage. The peak season is April through June, with May being the most active month. This makes Amarillo one of the most hail-prone cities in the United States.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="insurance-timing">
                <AccordionTrigger className="text-xl font-semibold">
                  How soon after a storm should I file an insurance claim?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Contact your insurance company within 24-48 hours of any severe weather event. Schedule a professional inspection immediately to document damage before weather exposure causes additional deterioration. Most Texas insurance policies require prompt notification, and early documentation strengthens your claim significantly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="inspection-process">
                <AccordionTrigger className="text-xl font-semibold">
                  What does your inspection process include?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Our comprehensive inspection includes: exterior roof assessment, interior attic inspection, drone aerial photography, moisture detection testing, gutter and drainage evaluation, structural analysis, detailed photographic documentation, written assessment report, insurance claim support documentation, and repair/replacement recommendations with cost estimates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="damage-types">
                <AccordionTrigger className="text-xl font-semibold">
                  What types of damage do you look for during inspections?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We identify hail impact damage (granule loss, bruising, fractures), wind damage (shingle blow-off, tab lifting, nail exposure), wear-related issues (thermal splitting, granule loss, seal failure), structural damage (decking issues, truss damage), water intrusion evidence, ventilation problems, and flashing failures. Our trained inspectors recognize both obvious and subtle damage indicators.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="adjuster-meeting">
                <AccordionTrigger className="text-xl font-semibold">
                  Should you be present when the insurance adjuster inspects my roof?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Absolutely. Having your contractor present during the adjuster's inspection ensures all damage is properly identified and documented. We provide expert technical knowledge, point out damage that might be missed, and help ensure your claim is fairly assessed. This collaborative approach typically results in more accurate and complete claim settlements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Amarillo & the Texas Panhandle
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-101.8313!3d35.2220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87014758f6e54e81%3A0x4af5b3e7f4e4c7c8!2sAmarillo%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amarillo, TX Location Map"
              ></iframe>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Amarillo Service Areas</h3>
              <p className="text-lg text-gray-700 mb-4">
                We proudly serve all areas of Amarillo and the greater Texas Panhandle, including:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• Downtown Amarillo</li>
                  <li>• Southwest Amarillo</li>
                  <li>• Westgate area</li>
                  <li>• Paramount area</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Canyon (neighboring city)</li>
                  <li>• Bushland community</li>
                  <li>• Palo Duro area</li>
                  <li>• Tascosa area</li>
                </ul>
                <ul className="space-y-2">
                  <li>• North Amarillo</li>
                  <li>• East Amarillo</li>
                  <li>• Wolflin area</li>
                  <li>• Sleepy Hollow</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Amarillo Airport area</li>
                  <li>• Industrial districts</li>
                  <li>• Medical district</li>
                  <li>• University areas</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Amarillo Property from Hail Damage</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Living in Hail Alley means your roof faces constant threat from severe weather. Don't wait for visible damage—professional inspections identify problems early and provide complete documentation for insurance claims. With Amarillo experiencing 12+ significant hail events annually, proactive protection is essential.
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