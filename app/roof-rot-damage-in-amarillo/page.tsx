import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Rot Damage Repair in Amarillo TX| Wood Rot Specialists',
  description: 'roof rot damage repair in Amarillo. Wood rot removal, deck replacement, and moisture solutions. Free inspections and insurance claims help.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Rot Damage Repair",
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
      {"@type": "City", "name": "Midland"},
      {"@type": "City", "name": "Odessa"}
    ],
    "description": "Professional roof rot damage repair in Amarillo and West Texas. Wood rot removal, deck replacement, moisture detection, and structural restoration services."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Rot Damage",
                      "url": "/roof-rot-damage/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-rot-damage-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-rot-damage-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roof-rot-damage-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Roof Rot Damage Repair in Amarillo & West Texas</h1>
      </FadeIn>

      
      <div className="content-block">
        <h2 className="content-block-title">Roof Rot: A Hidden Threat to Texas Panhandle Homes</h2>
        <p className="text-lg">
          Roof rot is one of the most serious—and often overlooked—types of <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof damage</a> in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">Odessa</a>, and surrounding areas. Unlike <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a> that appears immediately after a storm, roof rot develops slowly over months or years as moisture infiltrates your roof decking, rafters, and sheathing. By the time you notice sagging ceilings or visible water stains, the damage may be extensive and costly.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in identifying and repairing roof rot damage before it compromises your home's structural integrity. Our comprehensive <a href="/roof-inspections-in-amarillo/" className="text-brand-gold hover:underline">inspections</a> use moisture detection technology to find hidden rot, and we work directly with insurance companies to ensure coverage for qualifying damage—whether for <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> or <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial properties</a>.
        </p>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-amber-800">🦠 The Science of Wood Rot in Texas Climate</h3>
        <p className="mb-4">Understanding how wood rot develops in the Texas Panhandle's unique climate helps property owners recognize early warning signs and take preventive action:</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-amber-700">Fungal Growth Requirements</h4>
            <ul className="space-y-1 text-sm">
              <li>• Moisture content: 19% or higher in wood</li>
              <li>• Temperature range: 40°F to 100°F (ideal: 70-85°F)</li>
              <li>• Oxygen presence: Required for aerobic decomposition</li>
              <li>• pH levels: 3.5 to 7.5 (slightly acidic to neutral)</li>
              <li>• Time factor: 3-6 months for visible damage</li>
              <li>• Wood species: Pine and fir most susceptible</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-amber-700">Texas Panhandle Factors</h4>
            <ul className="space-y-1 text-sm">
              <li>• Summer humidity: 60-80% creates ideal conditions</li>
              <li>• Temperature cycling: Accelerates moisture penetration</li>
              <li>• Hail damage frequency: Creates numerous entry points</li>
              <li>• UV intensity: Weakens wood cell structure</li>
              <li>• Wind-driven rain: Forces water into compromised areas</li>
              <li>• Alkaline soil: pH can affect moisture chemistry</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Types of Rot Fungi Common in Texas</h2>
        <p className="text-lg mb-6">
          Different fungal species cause different types of wood rot, each with distinct characteristics and repair requirements. Identifying the specific type of rot helps determine the extent of structural damage and the appropriate remediation strategy.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🍄 Brown Rot (Dry Rot)</h3>
            <p className="text-sm mb-3">Most common in Texas. Attacks cellulose, leaving brown, crumbly wood that breaks into cube-like pieces.</p>
            <ul className="text-sm space-y-1">
              <li>• Causes: Sustained moisture exposure</li>
              <li>• Appearance: Dark brown, cracked wood</li>
              <li>• Risk: High structural damage</li>
              <li>• Timeline: 6-18 months visible damage</li>
              <li>• Repair: Complete removal required</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🟫 White Rot</h3>
            <p className="text-sm mb-3">Attacks lignin, leaving white, fibrous wood. Less common but equally destructive to structural integrity.</p>
            <ul className="text-sm space-y-1">
              <li>• Causes: Higher moisture levels</li>
              <li>• Appearance: White, stringy texture</li>
              <li>• Risk: Moderate to high damage</li>
              <li>• Timeline: 4-12 months development</li>
              <li>• Repair: Selective removal possible</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🔵 Soft Rot</h3>
            <p className="text-sm mb-3">Surface-level damage common in high-moisture environments. Often precedes deeper rot development.</p>
            <ul className="text-sm space-y-1">
              <li>• Causes: Fluctuating moisture levels</li>
              <li>• Appearance: Soft, spongy surface</li>
              <li>• Risk: Low initial, escalates quickly</li>
              <li>• Timeline: 2-6 months surface damage</li>
              <li>• Repair: Early intervention effective</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Advanced Moisture Detection Technology</h2>
        <p className="text-lg mb-4">
          Traditional visual inspections miss up to 70% of moisture-related damage. Our advanced diagnostic equipment identifies problems before they become structural hazards, saving property owners thousands in repair costs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-green-800">📡 Infrared Thermal Imaging</h3>
            <ul className="space-y-2 text-sm">
              <li>• Detects temperature variations indicating moisture</li>
              <li>• Identifies thermal bridges and insulation gaps</li>
              <li>• Maps moisture patterns across entire roof system</li>
              <li>• Documents damage for insurance purposes</li>
              <li>• Non-destructive testing method</li>
              <li>• Results available immediately during inspection</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-green-800">🔬 Moisture Meters & Probes</h3>
            <ul className="space-y-2 text-sm">
              <li>• Pin-type meters for surface moisture measurement</li>
              <li>• Pinless meters for sub-surface moisture detection</li>
              <li>• Deep-probe meters for decking and rafter assessment</li>
              <li>• Calibrated for different wood species</li>
              <li>• Digital readings with data logging capability</li>
              <li>• Identifies moisture gradients and migration patterns</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold mb-3 text-blue-800">🧪 Core Sampling Analysis</h3>
          <p className="text-sm mb-3">For suspected structural damage, we perform minimal core sampling to assess internal wood condition:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-1 text-sm">
              <li>• 1-inch diameter core samples</li>
              <li>• Visual examination of wood cell structure</li>
              <li>• Moisture content measurement at depth</li>
              <li>• Fungal identification when present</li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li>• Structural integrity assessment</li>
              <li>• Minimal damage to existing materials</li>
              <li>• Laboratory analysis available for complex cases</li>
              <li>• Results guide repair scope and methods</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Causes Roof Rot in West Texas?</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Prolonged Moisture Exposure</h3>
            <p className="mb-3">
              When water repeatedly penetrates your roof—from hail damage, failed flashing, or clogged gutters—it saturates the wood decking underneath shingles. In Texas humidity (especially during summer), this moisture creates perfect conditions for wood-rot fungi.
            </p>
            <p className="text-sm text-gray-600"><strong>Time to develop:</strong> 3-12 months of consistent moisture exposure</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Poor Attic Ventilation</h3>
            <p className="mb-3">
              The Texas Panhandle sits in America's hail belt, experiencing an average of 8-12 hailstorms per year. Combined with extreme temperature swings, high winds averaging 12-14 mph, and intense UV exposure, roofs face some of the harshest conditions in the United States. Without proper ventilation, attic temperatures can exceed 160°F in summer. This heat combined with moisture from your home creates condensation on the underside of roof decking—leading to rot from the inside.
            </p>
            <p className="text-sm text-gray-600"><strong>Risk factor:</strong> Homes with inadequate ridge/soffit vents</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Ice Dam Water Intrusion</h3>
            <p className="mb-3">
              During rare but severe winter storms (like Winter Storm Uri in 2021), ice dams trap water on your roof for extended periods. This standing water seeps under shingles and saturates the wood decking, initiating rot that persists even after ice melts.
            </p>
            <p className="text-sm text-gray-600"><strong>Common in:</strong> Texas Panhandle homes with poor insulation</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Unrepaired Hail Damage</h3>
            <p className="mb-3">
              Hail creates granule loss and micro-fractures in asphalt shingles. These compromised areas allow water penetration during subsequent rainstorms. Over time, this slow leak saturates decking and creates localized rot—often undetected until severe.
            </p>
            <p className="text-sm text-gray-600"><strong>Prevention:</strong> Inspect roof within 72 hours after every hailstorm</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Plumbing Vent Failures</h3>
            <p className="mb-3">
              Rubber boots around plumbing vents crack and deteriorate in intense West Texas UV exposure. Once cracked, every rainstorm sends water directly onto roof decking around the vent pipe—creating a concentrated area of rot.
            </p>
            <p className="text-sm text-gray-600"><strong>Lifespan:</strong> Rubber vent boots last 5-10 years in Texas climate</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Valley Leaks</h3>
            <p className="mb-3">
              Roof valleys channel heavy water flow during rainstorms. If valley flashing is improperly installed or damaged by hail, water backs up under shingles along valley edges—creating extensive linear rot patterns.
            </p>
            <p className="text-sm text-gray-600"><strong>High risk:</strong> Complex roof designs with multiple valleys</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Warning Signs of Roof Rot</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="check-item">
          <span className="check-icon text-2xl">📉</span>
          <div>
            <h3 className="font-bold mb-2">Sagging Roof Line</h3>
            <p className="text-gray-600">Visible dips or sagging in roof surface indicating structural wood failure</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">💧</span>
          <div>
            <h3 className="font-bold mb-2">Water Stains on Ceilings</h3>
            <p className="text-gray-600">Brown or yellow discoloration from water penetrating through rotted decking</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🦠</span>
          <div>
            <h3 className="font-bold mb-2">Mold/Mildew Odors</h3>
            <p className="text-gray-600">Musty smell in attic or upper rooms from fungal growth on damp wood</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🪵</span>
          <div>
            <h3 className="font-bold mb-2">Soft/Spongy Roof Deck</h3>
            <p className="text-gray-600">When walking on roof, areas feel soft or springy underfoot</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🕷️</span>
          <div>
            <h3 className="font-bold mb-2">Visible Wood Decay in Attic</h3>
            <p className="text-gray-600">Dark, crumbling, or powdery wood on rafters or decking when inspecting attic</p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🐜</span>
          <div>
            <h3 className="font-bold mb-2">Pest Infestations</h3>
            <p className="text-gray-600">Carpenter ants or termites attracted to rotted wood in roof structure</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Roof Rot Repair Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Comprehensive Moisture Detection</h5>
            <p className="step-text">We use infrared thermal imaging and moisture meters to identify all areas of rot—including hidden damage not visible during standard inspections.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Structural Assessment</h5>
            <p className="step-text">Our team evaluates whether rafters, trusses, or just decking is affected. This determines the scope of repair and ensures structural safety.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Complete Rot Removal</h5>
            <p className="step-text">All rotted wood must be removed—not just covered over. We cut out damaged decking and framing, disposing of it properly to prevent fungal spore spread.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">New Decking Installation</h5>
            <p className="step-text">We install new pressure-treated plywood or OSB decking that meets or exceeds code requirements for the Texas Panhandle and West Texas.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">Ventilation & Waterproofing</h5>
            <p className="step-text">Fix the root cause by improving attic ventilation, installing ice/water shield, and replacing failed flashing to prevent future rot.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h5 className="step-title">Complete Roof Restoration</h5>
            <p className="step-text">Install new impact-resistant shingles or <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">metal roofing</a> designed for extreme weather conditions in the Texas Panhandle and West Texas.</p>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Comprehensive Roof Rot Remediation Process</h2>
        <p className="text-lg mb-6">
          Proper roof rot repair requires more than just replacing visible damage. Our systematic approach addresses the root cause, removes all contaminated materials, and implements preventive measures to ensure long-term structural integrity.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">🔍 Phase 1: Complete Assessment & Documentation</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Structural Analysis:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Load-bearing capacity evaluation</li>
                  <li>• Rafter and truss condition assessment</li>
                  <li>• Roof deck integrity mapping</li>
                  <li>• Wall top plate moisture evaluation</li>
                  <li>• Foundation moisture migration check</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Documentation Requirements:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• High-resolution photography of all damage</li>
                  <li>• Moisture meter readings and locations</li>
                  <li>• Thermal imaging reports</li>
                  <li>• Structural engineer consultation (if needed)</li>
                  <li>• Insurance adjuster coordination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">🛠️ Phase 2: Safe Rot Removal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Containment Procedures:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Plastic sheeting to prevent spore spread</li>
                  <li>• HEPA filtration during removal</li>
                  <li>• Negative air pressure systems</li>
                  <li>• Personal protective equipment for workers</li>
                  <li>• Proper disposal of contaminated materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Removal Techniques:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Complete removal to solid wood</li>
                  <li>• 2-foot border beyond visible damage</li>
                  <li>• Cut lines along structural members</li>
                  <li>• Sanitization of adjacent materials</li>
                  <li>• Air quality testing post-removal</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">🔨 Phase 3: Structural Reconstruction</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Material Specifications:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Pressure-treated lumber for all replacements</li>
                  <li>• OSB or plywood rated for Texas climate</li>
                  <li>• Hurricane clips and upgraded fasteners</li>
                  <li>• Vapor barriers where required</li>
                  <li>• Code-compliant structural connections</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Installation Standards:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Engineering specifications compliance</li>
                  <li>• Wind-rated fastener patterns</li>
                  <li>• Proper ventilation gap maintenance</li>
                  <li>• Thermal bridge prevention</li>
                  <li>• Multi-point inspection verification</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">💧 Phase 4: Moisture Prevention Systems</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Waterproofing Upgrades:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Ice and water shield installation</li>
                  <li>• Enhanced valley flashing systems</li>
                  <li>• Vent boot replacement and sealing</li>
                  <li>• Chimney and penetration re-flashing</li>
                  <li>• Gutter system optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ventilation Improvements:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Ridge vent installation or enhancement</li>
                  <li>• Soffit vent cleaning and upgrading</li>
                  <li>• Attic fan installation (if needed)</li>
                  <li>• Air sealing of penetrations</li>
                  <li>• Insulation baffle installation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Case Studies: Texas Panhandle Roof Rot Scenarios</h2>
        <p className="text-lg mb-6">
          Real-world examples from our experience repairing roof rot damage throughout the Texas Panhandle and West Texas region. These cases illustrate common patterns and successful remediation strategies.
        </p>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🏠 Case Study 1: Amarillo Hail Damage Progression</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Initial Conditions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 1995 home with original asphalt shingles</li>
                  <li>• April 2022 hailstorm (1.5" hail)</li>
                  <li>• Homeowner delayed claim filing for 8 months</li>
                  <li>• Multiple small leaks developed during summer rains</li>
                  <li>• Discovered ceiling stains in December 2022</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Damage Found:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 40% of roof deck showed moisture damage</li>
                  <li>• Brown rot affecting 12 sheets of decking</li>
                  <li>• 3 rafters with structural compromise</li>
                  <li>• Attic insulation completely saturated</li>
                  <li>• Mold growth on 15% of attic surfaces</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-green-800 mb-2">Solution & Outcome:</h4>
              <p className="text-sm">Complete roof replacement covered by insurance ($24,500 claim). Upgraded ventilation and insulation prevented recurrence. Total repair time: 5 days.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🏢 Case Study 2: Commercial Building Flat Roof</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Building Profile:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 1980s warehouse in Canyon, TX</li>
                  <li>• Modified bitumen roofing system</li>
                  <li>• Poor drainage design</li>
                  <li>• Inadequate maintenance history</li>
                  <li>• Evidence of standing water</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rot Discovery:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Soft spots near HVAC units</li>
                  <li>• Moisture detected across 30% of roof</li>
                  <li>• Wood deck delamination</li>
                  <li>• Structural steel corrosion</li>
                  <li>• Interior ceiling damage</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-100 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-blue-800 mb-2">Engineering Solution:</h4>
              <p className="text-sm">Selective deck replacement with drainage improvements. TPO membrane with enhanced insulation. Total cost: $85,000 (partial insurance coverage).</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">❄️ Case Study 3: Winter Storm Uri Damage</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Storm Impact:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• February 2021 ice storm event</li>
                  <li>• Ice dams on north-facing slope</li>
                  <li>• Temperatures below -10°F for 5 days</li>
                  <li>• Burst pipes in attic space</li>
                  <li>• Extended moisture exposure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rot Development:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Rapid onset due to saturated conditions</li>
                  <li>• White rot affecting trusses</li>
                  <li>• Insulation replacement required</li>
                  <li>• Interior drywall damage</li>
                  <li>• HVAC system contamination</li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-100 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-purple-800 mb-2">Comprehensive Restoration:</h4>
              <p className="text-sm">Emergency water extraction, structural drying, selective framing replacement. Insurance covered $31,200. Added ice dam prevention systems.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Insurance Coverage for Roof Rot</h2>
      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="font-bold mb-3">When Is Roof Rot Covered by Insurance?</h3>
        <p className="mb-4">
          Insurance coverage for roof rot depends on the cause and timing. Our expertise in documentation and claim presentation significantly improves approval rates:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-700">✅ Typically Covered</h4>
            <ul className="space-y-1 text-sm">
              <li>• Rot resulting from sudden storm damage</li>
              <li>• Hidden damage discovered during storm claims</li>
              <li>• Concealed damage not preventable by maintenance</li>
              <li>• Rot caused by ice dams or wind-driven rain</li>
              <li>• Structural damage from plumbing leaks</li>
              <li>• Emergency stabilization costs</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-red-700">❌ Usually Not Covered</h4>
            <ul className="space-y-1 text-sm">
              <li>• Gradual deterioration over time</li>
              <li>• Damage from deferred maintenance</li>
              <li>• Poor original construction quality</li>
              <li>• Ventilation inadequacies (unless storm-related)</li>
              <li>• Normal wear and aging</li>
              <li>• Code upgrade requirements</li>
            </ul>
          </div>
        </div>
        <div className="bg-brand-gold-light rounded-lg p-4 mt-4">
          <h4 className="font-bold mb-2">💡 Maximizing Coverage Success</h4>
          <p className="text-sm">Our documentation process includes thermal imaging, moisture mapping, and storm correlation analysis. We work directly with adjusters to demonstrate that rot resulted from covered perils rather than maintenance issues. Success rate: 87% for qualifying claims.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Preventing Roof Rot in West Texas</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="feature-box">
          <h3 className="font-bold mb-2">Annual Roof Inspections</h3>
          <p className="text-sm">Schedule professional inspections every spring after hail season to catch moisture damage early</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Improve Attic Ventilation</h3>
          <p className="text-sm">Maintain 1:300 ventilation ratio (1 sq ft vent per 300 sq ft attic) with ridge and soffit vents</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Repair Hail Damage Promptly</h3>
          <p className="text-sm">Don't delay filing insurance claims after hailstorms—damaged shingles lead to rot within months</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Replace Plumbing Vent Boots</h3>
          <p className="text-sm">Replace rubber vent boots every 5-10 years as preventive maintenance</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Keep Gutters Clean</h3>
          <p className="text-sm">Clean gutters twice per year to prevent water backup under shingles</p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Address Leaks Immediately</h3>
          <p className="text-sm">Any interior water stain is evidence of active leaks—don't wait for it to get worse</p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="font-bold mb-3">⚠️ Roof Rot is a Safety Hazard</h3>
        <p>
          Severely rotted roof decking can collapse under the weight of roofers or during heavy snow loads. If you suspect rot, do NOT attempt to walk on your roof. Call professional roofers with proper safety equipment and experience handling structural damage.
        </p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          Expert roof rot repair and structural restoration services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roof Rot Repair</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Structural Repairs</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Get Your Free Roof Assessment Today</h2>
        <p className="cta-text">
          Serving Amarillo and the entire Texas Panhandle, plus Midland, Odessa, and surrounding West Texas communities. Most homeowners insurance policies in Texas cover storm damage, and we work directly with all major insurance companies to ensure you receive the full coverage you deserve.
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
