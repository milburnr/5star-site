import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Storm Damage Roof Repair in Amarillo | 5 Star',
  description: 'Storm Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Storm Damage Roof Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
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
    "description": "Professional storm damage roof repair in Amarillo, Texas. Hail, wind, and rain damage restoration. Insurance claim assistance and emergency repairs."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Storm Damage",
                      "url": "/roof-storm-damage/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-storm-damage-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Roof Storm Damage Repair in Amarillo, TX</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Expert Storm Damage Restoration for Amarillo Roofs</h2>
        <p className="text-lg">
          The <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> experiences some of the nation's most severe weather—from baseball-sized <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail</a> to sustained winds over 70 mph, heavy rain, and even tornadoes. At 5 Star Commercial Roofing, we specialize in comprehensive storm damage assessment, <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">emergency repairs</a>, and insurance claim assistance for both <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial</a> properties throughout Amarillo.
        </p>
        <p className="text-lg mt-4">
          After every major storm, our phones ring constantly from homeowners discovering roof damage. Most insurance policies in the Texas Panhandle cover storm damage—and we handle all paperwork, meet with adjusters, and ensure you receive full coverage. For severe damage, complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a> may be covered at only the cost of your deductible.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">📊 Amarillo Weather Statistics & Storm Patterns</h3>
        <p className="mb-4">Understanding the unique weather patterns of the Texas Panhandle helps property owners prepare for and recognize storm damage:</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-blue-700">Annual Weather Data</h4>
            <ul className="space-y-1 text-sm">
              <li>• Average of 51 thunderstorm days per year</li>
              <li>• 8-12 significant hailstorms annually</li>
              <li>• Wind speeds regularly exceed 60 mph</li>
              <li>• Peak storm season: April through September</li>
              <li>• Most severe storms: Late spring to early summer</li>
              <li>• Annual precipitation: 20-22 inches</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-blue-700">Texas Panhandle Climate Factors</h4>
            <ul className="space-y-1 text-sm">
              <li>• High elevation (3,600+ feet) intensifies storms</li>
              <li>• Flat terrain allows rapid storm development</li>
              <li>• Extreme temperature variations stress roofing materials</li>
              <li>• UV exposure 15-20% higher than coastal areas</li>
              <li>• Frequent freeze-thaw cycles weaken roof systems</li>
              <li>• Low humidity accelerates material aging</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">The Science of Texas Panhandle Storm Development</h2>
        <p className="text-lg mb-4">
          The unique geography and climate of the Texas Panhandle creates a perfect storm breeding ground. Cold, dry air masses from the north collide with warm, moist air from the Gulf of Mexico, creating the atmospheric instability that produces supercells—rotating thunderstorms capable of producing giant hail, damaging winds, and tornadoes.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="font-bold mb-2">Spring Storm Season (March-May)</h4>
            <p className="text-sm">Peak severe weather period with supercells, large hail (often 2-4 inches), and tornado activity. Most roof damage occurs during these months.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="font-bold mb-2">Summer Storms (June-August)</h4>
            <p className="text-sm">Microbursts and straight-line winds dominate. Less hail but more wind damage. Flash flooding becomes a concern with heavy rainfall rates.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="font-bold mb-2">Fall Transitions (September-November)</h4>
            <p className="text-sm">Rapid temperature changes and early freezes can damage already compromised roofing systems. Time for pre-winter repairs.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Types of Storm Damage We Repair</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Hail Damage</h3>
            <p className="text-gray-600 mb-3">
              Amarillo averages 8-12 hailstorms per year, with some producing baseball to softball-sized hail. Hail causes granule loss, bruising, cracked shingles, and damaged flashing.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Shingle granule loss and bruising</li>
              <li>✓ Cracked or punctured shingles</li>
              <li>✓ Dented metal vents and flashing</li>
              <li>✓ Damaged gutters and downspouts</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">💨 Wind Damage</h3>
            <p className="text-gray-600 mb-3">
              Sustained winds of 50+ mph and microbursts can rip off shingles, lift roof edges, and damage flashing. Wind often causes progressive damage that worsens over time.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Missing or blown-off shingles</li>
              <li>✓ Lifted shingle edges and tabs</li>
              <li>✓ Damaged or displaced flashing</li>
              <li>✓ Debris impact damage</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">☔ Heavy Rain Damage</h3>
            <p className="text-gray-600 mb-3">
              Flash flooding and sustained heavy rain can overwhelm drainage systems, create leaks through compromised areas, and cause water damage to roof decking and interiors.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Active leaks and water intrusion</li>
              <li>✓ Saturated insulation</li>
              <li>✓ Interior ceiling damage</li>
              <li>✓ Overwhelmed drainage systems</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🌪️ Tornado & Severe Wind</h3>
            <p className="text-gray-600 mb-3">
              Tornado touchdowns and downbursts can cause catastrophic damage including complete roof loss, structural damage, and extensive debris impacts requiring emergency repairs.
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Extensive shingle loss</li>
              <li>✓ Structural roof deck damage</li>
              <li>✓ Tree and debris impacts</li>
              <li>✓ Complete roof system failure</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">🚨 24/7 Emergency Storm Damage Service</h3>
        <p className="mb-4">
          When severe storms hit Amarillo, we provide emergency response to prevent further damage to your home or business. Our emergency services include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Emergency tarping for active leaks</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>24/7 phone answering during storms</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>2-hour response time in Amarillo area</div>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Temporary repairs to secure property</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Board-up services for exposed areas</div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              <div>Debris removal and cleanup</div>
            </li>
          </ul>
        </div>
        <p className="text-center font-bold mt-4">
          <a href="tel:8066226041" className="text-red-800 hover:underline">Call (806) 622-6041 Now for Emergency Service</a>
        </p>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Advanced Storm Damage Detection Techniques</h2>
        <p className="text-lg mb-4">
          Not all storm damage is immediately visible from the ground. Our certified inspectors use professional-grade equipment and proven methodologies to identify both obvious and hidden damage that insurance adjusters might miss.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🎯 Drone Inspection Technology</h3>
            <ul className="space-y-2">
              <li>• High-resolution photography of entire roof surface</li>
              <li>• Thermal imaging to detect moisture intrusion</li>
              <li>• 3D mapping for precise damage measurements</li>
              <li>• Access to steep or dangerous roof areas safely</li>
              <li>• Documentation accepted by all major insurance companies</li>
              <li>• Before/after comparison photography</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-brown">🔍 Ground-Level Assessment</h3>
            <ul className="space-y-2">
              <li>• Detailed inspection of gutters, downspouts, and fascia</li>
              <li>• HVAC unit and vent damage evaluation</li>
              <li>• Fence, outdoor equipment, and landscaping assessment</li>
              <li>• Interior inspection for leak evidence</li>
              <li>• Attic evaluation for insulation and decking damage</li>
              <li>• Comprehensive damage reporting with measurements</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-yellow-800">⚠️ Hidden Storm Damage Warning Signs</h3>
        <p className="mb-4">Storm damage isn't always immediately apparent. Watch for these subtle signs that indicate your roof may have sustained damage:</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold mb-2">Interior Signs</h4>
            <ul className="space-y-1 text-sm">
              <li>• Water stains on ceilings or walls</li>
              <li>• Musty odors indicating moisture</li>
              <li>• Drywall cracks near roof lines</li>
              <li>• Peeling paint or wallpaper</li>
              <li>• Sagging ceiling areas</li>
              <li>• Increased utility bills (insulation damage)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Exterior Signs</h4>
            <ul className="space-y-1 text-sm">
              <li>• Granules in gutters or on ground</li>
              <li>• Dented gutters, downspouts, or vents</li>
              <li>• Damaged or loose flashing</li>
              <li>• Cracked caulk around roof penetrations</li>
              <li>• Damaged roof accessories (vents, satellite dishes)</li>
              <li>• Missing or loose shingles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Progressive Damage</h4>
            <ul className="space-y-1 text-sm">
              <li>• Small leaks growing larger over time</li>
              <li>• Exposed nail heads or fasteners</li>
              <li>• Shingles that appear "bruised" or soft</li>
              <li>• Uneven wear patterns across roof surface</li>
              <li>• Ice dam formation in winter</li>
              <li>• Pest intrusion through damaged areas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Comprehensive Storm Damage Repair Solutions</h2>
        <p className="text-lg mb-6">
          Every storm creates unique damage patterns. Our experienced team addresses all aspects of storm damage, from emergency stabilization to complete system reconstruction. We work with all roofing materials common in the Texas Panhandle and use proven repair techniques that restore your roof's integrity and longevity.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">Asphalt Shingle Storm Damage Repair</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Common Damage Types:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Granule loss exposing asphalt substrate</li>
                  <li>• Impact fractures and cracks</li>
                  <li>• Lifted or curled shingle edges</li>
                  <li>• Exposed nail heads from thermal cycling</li>
                  <li>• Missing shingle tabs or entire shingles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Repair Techniques:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Individual shingle replacement with color matching</li>
                  <li>• Section replacement for concentrated damage</li>
                  <li>• Underlayment repair and reinforcement</li>
                  <li>• Flashing replacement and re-sealing</li>
                  <li>• Complete tear-off and replacement when warranted</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">Metal Roofing Storm Damage Repair</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Damage Assessment:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Hail denting and impact deformation</li>
                  <li>• Paint and coating damage from hail/debris</li>
                  <li>• Fastener loosening from thermal cycling</li>
                  <li>• Seam separation from wind uplift</li>
                  <li>• Punctures from flying debris</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specialized Repairs:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Panel replacement with exact profile matching</li>
                  <li>• Dent repair using specialized metalworking tools</li>
                  <li>• Re-coating and paint touch-up</li>
                  <li>• Fastener replacement with upgraded materials</li>
                  <li>• Seam re-sealing with premium sealants</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">Tile Roofing Storm Damage Repair</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Damage Patterns:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Cracked or broken individual tiles</li>
                  <li>• Displaced tiles from high winds</li>
                  <li>• Underlayment exposure and damage</li>
                  <li>• Ridge cap displacement</li>
                  <li>• Hip and valley tile damage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Expert Solutions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Individual tile replacement with aged matching</li>
                  <li>• Underlayment repair and upgrade</li>
                  <li>• Re-securing with hurricane clips and fasteners</li>
                  <li>• Ridge and hip tile re-installation</li>
                  <li>• Valley repair with enhanced waterproofing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Storm Damage Assessment Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Free Storm Damage Inspection</h3>
            <p className="step-text">Complete roof inspection with drone photography and detailed damage documentation. We create comprehensive reports accepted by all major insurance companies.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Insurance Claim Filing</h3>
            <p className="step-text">We handle all insurance paperwork, file your claim, and provide detailed damage reports with photos and measurements.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Adjuster Meeting</h3>
            <p className="step-text">We meet with your insurance adjuster on-site to ensure all damage is properly documented and covered. We fight for the maximum coverage you deserve.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Professional Repair or Replacement</h3>
            <p className="step-text">Once approved, we complete all repairs or full replacement using premium materials. Most Amarillo homeowners pay only their insurance deductible.</p>
          </div>
        </div>
      </div>

      <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-3">⏰ Don't Wait to File Your Claim</h3>
        <p className="mb-2">
          Texas insurance policies typically require storm damage claims within 1 year of the event. However, waiting too long can complicate your claim as damage worsens and it becomes harder to prove the original storm caused it.
        </p>
        <p className="font-semibold">
          Schedule your free inspection within 48 hours of any major storm for best results with insurance claims.
        </p>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Insurance Claim Maximization Strategies</h2>
        <p className="text-lg mb-4">
          The difference between a successful insurance claim and a denied claim often comes down to proper documentation, timing, and expertise. Our team has successfully helped thousands of Texas Panhandle property owners receive full coverage for storm damage.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-green-800">✅ What Insurance Typically Covers</h3>
            <ul className="space-y-2 text-sm">
              <li>• Hail damage to shingles, gutters, and vents</li>
              <li>• Wind damage including blown-off roofing materials</li>
              <li>• Impact damage from flying debris</li>
              <li>• Interior water damage from roof leaks</li>
              <li>• Emergency repair costs to prevent further damage</li>
              <li>• Code upgrades required during repairs</li>
              <li>• Complete roof replacement if damage exceeds threshold</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-red-800">❌ Common Claim Denials</h3>
            <ul className="space-y-2 text-sm">
              <li>• Pre-existing damage or normal wear and tear</li>
              <li>• Insufficient storm documentation or proof</li>
              <li>• Delayed reporting beyond policy deadlines</li>
              <li>• Improper damage assessment or documentation</li>
              <li>• Missing or inadequate photographic evidence</li>
              <li>• Failure to prevent further damage after storm</li>
              <li>• Cosmetic damage without functional impact</li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-gold-light rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold mb-3">💡 Pro Tips for Insurance Success</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li>• Document storm conditions (photos, weather reports)</li>
              <li>• Take "before storm" photos if possible</li>
              <li>• Report damage within 24-48 hours</li>
              <li>• Prevent further damage but save receipts</li>
              <li>• Don't sign any agreements until adjuster review</li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li>• Get multiple estimates from licensed contractors</li>
              <li>• Review your policy coverage limits annually</li>
              <li>• Keep detailed records of all communications</li>
              <li>• Consider hiring a public adjuster for large claims</li>
              <li>• Appeal denied claims with additional evidence</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Storm Damage Prevention & Maintenance</h2>
        <p className="text-lg mb-4">
          While you can't prevent severe Texas Panhandle storms, proper maintenance and preparation can minimize damage and improve your roof's resilience. Regular inspections and proactive repairs often mean the difference between minor repairs and major replacement costs.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🏠 Pre-Storm Preparation</h3>
            <ul className="space-y-2 text-sm">
              <li>• Annual professional roof inspections</li>
              <li>• Replace damaged or missing shingles</li>
              <li>• Clean gutters and downspouts regularly</li>
              <li>• Secure loose flashing and trim</li>
              <li>• Trim overhanging tree branches</li>
              <li>• Update roof anchoring systems</li>
              <li>• Photograph roof condition for insurance</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">⚡ During Severe Weather</h3>
            <ul className="space-y-2 text-sm">
              <li>• Stay indoors and away from windows</li>
              <li>• Monitor for active leaks or water intrusion</li>
              <li>• Document storm intensity with photos/video</li>
              <li>• Note time and duration of hail/high winds</li>
              <li>• Avoid going outside during the storm</li>
              <li>• Place buckets under any active leaks</li>
              <li>• Contact emergency services if needed</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🔍 Post-Storm Actions</h3>
            <ul className="space-y-2 text-sm">
              <li>• Conduct immediate visual inspection from ground</li>
              <li>• Document all visible damage with photos</li>
              <li>• Check attic for new leaks or moisture</li>
              <li>• Schedule professional inspection within 48 hours</li>
              <li>• Contact insurance company to initiate claim</li>
              <li>• Arrange temporary repairs to prevent further damage</li>
              <li>• Keep all receipts for emergency repairs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="content-block-title">Case Studies: Recent Amarillo Storm Events</h2>
        <p className="text-lg mb-6">
          Our experience with major storm events in the Texas Panhandle demonstrates our ability to handle large-scale damage efficiently while maximizing insurance recoveries for our clients.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🌩️ May 2023 Supercell - Tennis Ball Hail Event</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-2"><strong>Storm Details:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• Hail size: 1.75" to 2.5" diameter</li>
                  <li>• Wind speeds: 75+ mph sustained</li>
                  <li>• Duration: 45 minutes</li>
                  <li>• Affected area: North and East Amarillo</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Our Response:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• 350+ free inspections completed in 2 weeks</li>
                  <li>• 89% insurance claim approval rate</li>
                  <li>• Average claim value: $18,500</li>
                  <li>• 180 complete roof replacements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">💨 August 2022 Derecho - Straight-Line Wind Event</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-2"><strong>Storm Details:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• Wind speeds: 95+ mph gusts</li>
                  <li>• Duration: 20 minutes intense winds</li>
                  <li>• Pattern: Straight-line wind damage</li>
                  <li>• Affected area: Southwest Amarillo corridor</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Damage Assessment:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• 75% wind-related shingle damage</li>
                  <li>• Extensive gutter and downspout damage</li>
                  <li>• Multiple tree impacts on roof systems</li>
                  <li>• HVAC equipment displacement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">🌪️ April 2021 Tornado Outbreak</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-2"><strong>Event Overview:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• Multiple EF1-EF2 tornadoes</li>
                  <li>• Large hail up to 3" diameter</li>
                  <li>• Widespread power outages</li>
                  <li>• Emergency response activation</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Recovery Efforts:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• 24/7 emergency response for 72 hours</li>
                  <li>• Emergency tarping for 45 homes</li>
                  <li>• Coordination with FEMA and insurance teams</li>
                  <li>• Complete reconstruction of 12 homes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Texas Panhandle</h2>
        <p className="text-lg mb-4">
          Emergency storm damage services available throughout the region. Our crews are strategically positioned to respond quickly to storm events across the entire Texas Panhandle:
        </p>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Storm Damage</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Storm Damage</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Storm Damage</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Storm Damage</a>
          <a href="/pampa-tx-roofing/" className="text-brand-gold hover:underline">• Pampa Storm Repair</a>
          <a href="/borger-tx-roofing/" className="text-brand-gold hover:underline">• Borger Emergency Service</a>
          <a href="/plainview-tx-roofing/" className="text-brand-gold hover:underline">• Plainview Storm Response</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
        <p className="text-sm text-gray-600">
          <strong>Response Times:</strong> Amarillo metro area (1-2 hours) • Regional areas (2-4 hours) • Extended service areas (same day when possible)
        </p>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Storm Damage Repair in Amarillo?</h2>
        <p className="cta-text">
          Free storm damage inspections and insurance claim assistance. 24/7 emergency service available during severe weather.
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
