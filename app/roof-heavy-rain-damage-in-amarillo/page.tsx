import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Rain Damage Roof Repair Amarillo TX | 5 Star',
  description: "Expert heavy rain roof damage repair in Amarillo. Flash flood damage, water intrusion, leak detection. Emergency service. Insurance claims. (806) 622-6041",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heavy Rain Roof Damage Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Canyon"},
      {"@type": "City", "name": "Bushland"}
    ],
    "description": "Professional heavy rain roof damage repair in Amarillo, Texas. Flash flood damage restoration, water intrusion repair, and leak detection services."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Heavy Rain Damage",
                      "url": "/roof-heavy-rain-damage/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-heavy-rain-damage-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Heavy Rain Roof Damage Repair in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Flash Flood & Heavy Rain Damage in Amarillo</h2>
        <p className="text-lg">
          While <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a> averages only 20 inches of annual rainfall, when it rains it pours—literally. The <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> experiences sudden, intense thunderstorms that can drop 2-4 inches of rain in under an hour, overwhelming even well-maintained drainage systems. Flash flooding, wind-driven rain, and sustained downpours expose weaknesses in <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roofing systems</a> that might otherwise go unnoticed for years.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in identifying and repairing heavy rain damage for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial properties</a> throughout Amarillo. From emergency leak repairs during active storms to comprehensive water damage restoration, we help property owners recover quickly and prevent future problems.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How Heavy Rain Damages Roofs</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Wind-Driven Rain Intrusion</h3>
            <p className="text-gray-600 mb-3">
              During severe thunderstorms, horizontal winds drive rain sideways, forcing water under shingles, behind flashing, and through ventilation systems that would normally shed vertical rainfall.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Water under lifted or damaged shingles</li>
              <li>✓ Penetration through ridge vents</li>
              <li>✓ Flashing overwhelmed by sideways flow</li>
              <li>✓ Soffit and fascia saturation</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌊 Ponding Water Overload</h3>
            <p className="text-gray-600 mb-3">
              Flat and low-slope roofs can't handle flash flood-level rainfall. Drains become overwhelmed, creating standing water that seeps through seams and saturates membranes.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Clogged or undersized drains</li>
              <li>✓ Water pooling over 48 hours</li>
              <li>✓ Membrane seam failure</li>
              <li>✓ Excessive roof deck loading</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🏠 Gutter and Valley Failure</h3>
            <p className="text-gray-600 mb-3">
              2-4 inch per hour rainfall exceeds most gutter capacity. Overflowing gutters create waterfalls along fascia boards and valleys channel massive volumes that erode roofing materials.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Gutter overflow at fascia boards</li>
              <li>✓ Valley erosion and separation</li>
              <li>✓ Downspout backup causing roof flooding</li>
              <li>✓ Foundation damage from overflow</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">⚡ Existing Damage Exposure</h3>
            <p className="text-gray-600 mb-3">
              Heavy rain reveals problems that went unnoticed during dry periods—small cracks from previous storms, deteriorated flashing, or missing shingles suddenly become active leaks.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Hail damage from previous storms</li>
              <li>✓ Aging sealant and caulk failure</li>
              <li>✓ Cracked or brittle flashing</li>
              <li>✓ Compromised roof penetrations</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">🚨 Emergency Rain Damage Service</h3>
        <p className="mb-4">
          Active roof leaks during rainstorms cause extensive interior damage—soaked insulation, ceiling stains, electrical hazards, and ruined possessions. Every minute counts when water is entering your home or business.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">We Provide:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <div>24/7 emergency phone answering</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <div>1-2 hour response in Amarillo area</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <div>Emergency tarping to stop active leaks</div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Common Emergencies:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Water pouring through ceiling</li>
              <li>• Multiple leak points during storm</li>
              <li>• Commercial building operational disruption</li>
              <li>• Electrical system exposure to water</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">
          <a href="tel:8066226041" className="font-bold text-red-800 hover:underline">Call (806) 622-6041 Now for Emergency Service</a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Heavy Rain Damage Repair Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Emergency Leak Detection</h3>
            <p className="step-text">During or immediately after storms, we locate all active leak points using moisture meters and thermal imaging. Temporary repairs stop water intrusion.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Comprehensive Roof Inspection</h3>
            <p className="step-text">Once weather clears, complete evaluation of all roof systems—shingles, flashing, valleys, gutters, drainage. We identify the root cause of failures.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Interior Damage Assessment</h3>
            <p className="step-text">Inspect attics, ceilings, and walls for water damage. Document all damage for insurance claims with photos and moisture readings.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Permanent Repairs</h3>
            <p className="step-text">Replace damaged shingles, re-flash penetrations, repair valleys, upgrade drainage systems. All work warrantied for 10 years.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Prevention Upgrades</h3>
            <p className="step-text">Install additional drains, seal vulnerable areas, add ice/water shield in valleys. Prevent future rain damage problems.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Amarillo Rain Damage Scenarios</h2>
      <div className="card mb-8">
        <div className="card-body">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Sudden Thunderstorm (2-4 inches in 1 hour)</h3>
              <p className="text-gray-600">
                Most common rain damage in Amarillo. Overwhelms gutters, drives rain under shingles, floods flat roofs through drains. Often combined with high winds and hail.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Sustained Spring Rains (2-3 days continuous)</h3>
              <p className="text-gray-600">
                Extended rainfall saturates roofing materials and finds every weakness. Water seeps through previously minor cracks, ponding water doesn't evaporate, insulation becomes waterlogged.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Flash Flooding (4-6 inches in 2 hours)</h3>
              <p className="text-gray-600">
                Rare but catastrophic. Drainage systems completely overwhelmed, commercial flat roofs may experience structural loading issues, residential gutters fail causing cascade effects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="text-xl font-bold mb-3">⏰ Act Fast After Heavy Rain</h3>
        <p className="mb-2">
          Even if you don't see interior leaks immediately, water may be trapped in your attic, insulation, or wall cavities. This hidden moisture promotes mold growth, wood rot, and electrical hazards within 24-48 hours.
        </p>
        <p className="font-semibold">
          Schedule a free inspection within 24 hours of any major rainfall event for best results.
        </p>
      </div>

      <FadeIn>
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-brand-brown">
            Amarillo's Unique Heavy Rain Challenges and Weather Patterns
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Amarillo's high plains location at 3,605 feet elevation creates unique meteorological conditions that intensify heavy rain damage potential. The city's position along the Caprock Escarpment acts as a natural barrier that forces storm systems upward, creating rapid precipitation formation and intense localized downpours that can overwhelm roofing systems designed for typical semi-arid conditions.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
            <h4 className="text-xl font-bold mb-3 text-brand-brown">Amarillo Heavy Rain Event Timeline and Response</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>0-30 minutes during storm:</strong> Active leak emergency response, immediate temporary measures</li>
              <li><strong>30 minutes-4 hours post-storm:</strong> Comprehensive damage assessment, moisture detection, emergency protection</li>
              <li><strong>4-24 hours post-storm:</strong> Water extraction, dehumidification, documentation for insurance claims</li>
              <li><strong>24-72 hours post-storm:</strong> Structural drying, permanent repair planning, material procurement</li>
              <li><strong>3-14 days post-storm:</strong> Complete repair execution, system upgrades, preventive improvements</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The High Plains climate creates extreme temperature fluctuations that stress roofing materials, making them more susceptible to water penetration during heavy rain events. Daily temperature swings exceeding 40°F cause expansion and contraction cycles that can create gaps in flashing, loosen fasteners, and compromise sealed joints just before severe weather arrives.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-brand-brown">Monsoon-Style Precipitation Events in Amarillo</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Summer Thunderstorm Complexes</h4>
              <p className="text-gray-700 mb-4">June through August, Amarillo experiences supercell thunderstorms that can produce 3-5 inches of rain in 60-90 minutes. These events often include rotation and severe wind components that compound water damage with structural stress.</p>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Supercell precipitation cores exceeding 4 inches per hour</li>
                <li>• Hail and rain combination overwhelming drainage systems</li>
                <li>• Wind-driven rain penetrating normal weather barriers</li>
                <li>• Multiple storm cell training over same areas</li>
                <li>• Flash flooding affecting structural foundations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Spring Frontal Precipitation Systems</h4>
              <p className="text-gray-700 mb-4">March through May frontal systems bring sustained rainfall lasting 12-48 hours with accumulations of 2-6 inches. Extended saturation period allows water to find and exploit every roofing system weakness.</p>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Sustained rainfall rates of 0.25-0.5 inches per hour</li>
                <li>• Ground saturation preventing normal runoff</li>
                <li>• Extended exposure period for material degradation</li>
                <li>• Temperature drops during events causing material contraction</li>
                <li>• Multiple weather fronts in rapid succession</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-brand-brown">Advanced Water Detection and Damage Assessment</h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Heavy rain damage in Amarillo often involves hidden water intrusion that may not manifest as visible leaks for days or weeks after the precipitation event. Our comprehensive assessment protocol uses thermal imaging, moisture meters, and structural analysis to identify damage before secondary problems like mold growth or structural deterioration develop.
          </p>
          <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
            <h4 className="text-xl font-bold mb-3 text-brand-brown">Comprehensive Rain Damage Assessment Protocol</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Immediate Assessment (0-4 hours)</h5>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Active leak location and temporary containment</li>
                  <li>• Structural safety evaluation for water loading</li>
                  <li>• Electrical system safety inspection</li>
                  <li>• Initial moisture mapping with infrared technology</li>
                  <li>• Emergency protection installation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Comprehensive Evaluation (4-24 hours)</h5>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Thermal imaging for hidden water penetration</li>
                  <li>• Moisture content measurement in building materials</li>
                  <li>• Air quality sampling for immediate mold risk</li>
                  <li>• Structural integrity assessment under water loading</li>
                  <li>• Insurance documentation with photographic evidence</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-brand-brown">Amarillo-Specific Drainage System Analysis and Improvement</h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Amarillo's intense but infrequent rainfall creates unique challenges for roof drainage systems that must handle extreme flow rates while spending most of the year in dry conditions. Clay soils common in the area have poor drainage characteristics, making proper roof drainage even more critical to prevent foundation water issues.
          </p>
          <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
            <h4 className="text-xl font-bold mb-3 text-brand-brown">Drainage System Optimization for Amarillo Climate</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Gutter System Enhancement</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 6-inch gutters for increased capacity</li>
                  <li>• Commercial-grade downspouts every 20 feet</li>
                  <li>• Leaf guards designed for Panhandle wind conditions</li>
                  <li>• Reinforced hangers for thermal expansion</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Flat Roof Drainage Improvements</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Additional drains beyond minimum code requirements</li>
                  <li>• Emergency overflow drains for catastrophic events</li>
                  <li>• Tapered insulation systems for positive drainage</li>
                  <li>• Drain dome protection from debris accumulation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Ground Drainage Coordination</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• French drain systems for clay soil conditions</li>
                  <li>• Foundation drainage to prevent water backup</li>
                  <li>• Landscape grading for water flow direction</li>
                  <li>• Municipal storm drainage tie-in compliance</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-brand-brown">Material Performance in Amarillo's Climate Extremes</h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Heavy rain damage repair in Amarillo must account for materials that can withstand extreme temperature variations, high winds, intense UV exposure, and sudden thermal shock from rapid weather changes. Material selection affects long-term performance and resistance to future heavy rain events.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-bold mb-3 text-brand-brown">Climate-Optimized Repair Materials</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">High-Wind Rated Shingles</h5>
                  <p className="text-sm text-gray-700">Class H wind resistance (150+ mph) with enhanced adhesive strips designed for temperature cycling common in Amarillo.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">UV-Resistant Membrane Systems</h5>
                  <p className="text-sm text-gray-700">TPO and EPDM formulations with enhanced UV stabilizers for high-altitude sun exposure and thermal resistance.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Flexible Flashing Systems</h5>
                  <p className="text-sm text-gray-700">EPDM and modified bitumen flashings that accommodate thermal expansion without compromising water resistance.</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-lg font-bold mb-3 text-brand-brown">Advanced Sealant and Adhesive Technology</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Polyurethane Sealant Systems</h5>
                  <p className="text-sm text-gray-700">High-movement capability sealants that maintain elasticity through temperature extremes from -10°F to 120°F.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Structural Glazing Compounds</h5>
                  <p className="text-sm text-gray-700">Silicone-based systems for curtain wall and window integration resistant to wind-driven rain infiltration.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Vapor Barrier Enhancement</h5>
                  <p className="text-sm text-gray-700">Peel-and-stick membranes with aggressive adhesives designed for extreme temperature installation conditions.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-brand-brown">Insurance Claims and Documentation for Heavy Rain Damage</h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Heavy rain damage claims in Amarillo require specialized documentation that proves the connection between specific weather events and resulting property damage. Insurance carriers often challenge rain damage claims, making comprehensive documentation and expert assessment critical for successful claim resolution.
          </p>
          <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
            <h4 className="text-xl font-bold mb-3 text-brand-brown">Rain Damage Insurance Documentation Protocol</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Weather Event Correlation</h5>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• National Weather Service precipitation data</li>
                  <li>• Radar imagery showing storm intensity and timing</li>
                  <li>• Local weather station readings and wind direction</li>
                  <li>• Time-stamped damage documentation</li>
                  <li>• Witness statements from weather event</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Damage Assessment Evidence</h5>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Thermal imaging showing water intrusion patterns</li>
                  <li>• Moisture content readings in affected materials</li>
                  <li>• Photographic documentation of damage progression</li>
                  <li>• Professional assessment of causation factors</li>
                  <li>• Repair cost estimates with material specifications</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-brand-brown">Emergency Response and Water Mitigation Services</h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Heavy rain damage in Amarillo requires immediate response to prevent secondary damage including mold growth, structural deterioration, and electrical hazards. Our emergency response protocol activates within 30 minutes of receiving calls during active weather events, with full-service water extraction and building drying capabilities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold mb-3 text-brand-brown">Active Storm Emergency Services</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Emergency tarping during active rainfall</li>
                <li>• Water extraction using commercial-grade equipment</li>
                <li>• Emergency electrical system protection</li>
                <li>• Structural safety assessment and stabilization</li>
                <li>• Content protection and emergency pack-out services</li>
                <li>• Immediate mold prevention treatment</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-bold mb-3 text-brand-brown">Post-Storm Recovery and Restoration</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Structural drying using commercial dehumidification</li>
                <li>• Antimicrobial treatment for affected areas</li>
                <li>• Air quality monitoring and improvement</li>
                <li>• Insulation replacement and upgrade services</li>
                <li>• Interior restoration and reconstruction</li>
                <li>• System upgrades to prevent future damage</li>
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          Emergency rain damage services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Rain Damage</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Leak Repair</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Flash Flood Damage</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Storm Damage</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Rain Damage Repair in Amarillo?</h2>
        <p className="cta-text">
          Free inspections and insurance claim assistance. 24/7 emergency service for active leaks. Most repairs completed within 1-2 days.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request Free Inspection
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
