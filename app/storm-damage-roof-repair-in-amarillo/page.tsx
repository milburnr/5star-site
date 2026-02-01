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
    "serviceType": "Emergency Storm Damage Roof Repair",
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
    "description": "24/7 emergency storm damage roof repair in Amarillo, Texas. Wind, hail, rain damage restoration. Insurance claim assistance and emergency tarping."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Storm Damage Roof Repair",
                      "url": "/storm-damage-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/storm-damage-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Storm Damage Roof Repair in Amarillo</h1>
      </FadeIn>

      {/* Hero Image */}
      <img
        alt="Severe storm damage on Texas Panhandle roof - Emergency tarping and repair services - 5 Star Commercial Roofing"
        className="w-full h-96 object-cover rounded-lg mb-8"
      />

      <div className="content-block">
        <h2 className="content-block-title">24/7 Emergency Storm Damage Response</h2>
        <p className="text-lg mb-8">
          Severe weather strikes the <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Texas Panhandle</a> without warning. High winds, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail</a>, <a href="/roof-heavy-rain-damage-in-amarillo/" className="text-brand-gold hover:underline">heavy rain</a>, and even tornadoes can damage roofs across Amarillo in minutes. When <a href="/roof-storm-damage-in-amarillo/" className="text-brand-gold hover:underline">storm damage</a> occurs, fast action prevents further interior damage. We're available 24/7 for emergency tarping and <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">repairs</a>.
        </p>

        <h3 className="text-3xl font-bold mb-6 text-brand-brown">Amarillo & Texas Panhandle Weather Patterns</h3>
        <div className="bg-amber-50 p-8 rounded-2xl mb-8">
          <h4 className="text-2xl font-bold mb-4 text-brand-brown">High Plains Climate Challenges</h4>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Amarillo sits at 3,605 feet elevation in the heart of the Texas High Plains, creating one of the most challenging roofing environments in the United States. The combination of extreme elevation, position in "Tornado Alley" and "Hail Alley," flat terrain extending for hundreds of miles, and dramatic seasonal weather variations makes Amarillo particularly vulnerable to severe weather events. The city experiences some of the highest hail frequencies in the world, with storms that can produce softball-sized hailstones.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xl font-semibold mb-3 text-brand-brown">Extreme Elevation Impact</h5>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Elevation:</strong> 3,605 feet - highest major city in Texas</li>
                <li>• <strong>UV Intensity:</strong> 25% higher than sea level locations</li>
                <li>• <strong>Hail Velocity:</strong> Less atmospheric resistance = harder impacts</li>
                <li>• <strong>Wind Amplification:</strong> High Plains channel and intensify storms</li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-3 text-brand-brown">Severe Weather Statistics</h5>
              <ul className="text-gray-700 space-y-2">
                <li>• 8-12 significant hailstorms annually</li>
                <li>• Peak tornado season: March-June</li>
                <li>• Temperature extremes: -16°F to 108°F</li>
                <li>• Average wind speed: 14 mph (highest in Texas)</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-6 text-brand-brown">Historic Storm Events in Amarillo</h3>
        <div className="space-y-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
            <h4 className="text-2xl font-bold mb-4 text-red-800">Legendary Hailstorm Events</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-xl font-semibold text-red-700">May 5, 1995 - The Great Amarillo Hailstorm</h5>
                <p className="text-gray-700 leading-relaxed">
                  The most devastating hailstorm in Amarillo's recorded history produced softball-sized hail (4+ inches) across the entire metropolitan area. The supercell formed northwest of the city and intensified rapidly as it approached, creating a damage path 20 miles wide. For over 45 minutes, continuous large hail pummeled the city, causing an estimated $2 billion in damage (in today's dollars). Every roof in the city sustained some level of damage, with thousands requiring complete replacement. The Amarillo airport recorded the largest hailstone at 4.5 inches in diameter, and the storm remains the costliest hail event in Texas history.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-red-700">April 13, 2014 - Easter Sunday Devastation</h5>
                <p className="text-gray-700 leading-relaxed">
                  A massive supercell produced baseball to softball-sized hail across Amarillo during Easter celebrations. The storm formed along a sharp dryline and exploded in intensity as it moved over the city. West Texas A&M University sustained over $20 million in damage, while Amarillo College required complete roof replacement on multiple buildings. The storm created a debris field of hailstones that took weeks to clear from city streets, and many businesses remained closed for months due to extensive roof and structural damage.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-red-700">June 23, 2019 - Supercell Complex</h5>
                <p className="text-gray-700 leading-relaxed">
                  Multiple supercells tracked across the Texas Panhandle, with Amarillo experiencing three separate severe hail events in one evening. The first wave brought golf ball-sized hail, followed by tennis ball-sized stones, and culminating with baseball-sized hail that lasted 20 minutes. Rick Husband Amarillo International Airport recorded continuous hail for over 2 hours, with accumulation depths reaching 8-12 inches in some areas. The event overwhelmed local roofing contractors and created a restoration backlog that lasted nearly 18 months.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-2xl">
            <h4 className="text-2xl font-bold mb-4 text-green-800">Tornado Events & High Winds</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-xl font-semibold text-green-700">May 15, 2021 - EF-3 Tornado</h5>
                <p className="text-gray-700 leading-relaxed">
                  A violent EF-3 tornado with winds reaching 165 mph passed through eastern Amarillo, creating a damage path 1.5 miles wide and 15 miles long. While the tornado's core missed downtown, the associated supercell brought 100+ mph straight-line winds to much of the city. Hundreds of homes and businesses sustained complete roof loss, while the Amarillo Zoo and several shopping centers experienced catastrophic structural damage. The tornado highlighted the vulnerability of Panhandle communities to violent weather during peak storm season.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-green-700">March 28, 2017 - Derecho Event</h5>
                <p className="text-gray-700 leading-relaxed">
                  A historic derecho brought sustained winds of 80+ mph with gusts exceeding 110 mph to Amarillo for over 3 hours. The prolonged straight-line winds caused widespread roof damage across the city, with particular impact on large commercial and industrial buildings. The event was unusual for its duration and intensity, causing damage comparable to a moderate tornado but affecting a much larger area. Many buildings experienced complete membrane blow-off and structural damage that required extensive restoration.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
            <h4 className="text-2xl font-bold mb-4 text-blue-800">Winter Storm & Extreme Weather</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-xl font-semibold text-blue-700">February 14-16, 2021 - Winter Storm Uri</h5>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo experienced its coldest temperatures in over 25 years during Winter Storm Uri, with readings dropping to -16°F and sustained sub-freezing conditions for over 150 hours. The extreme cold combined with 12+ inches of snow and ice accumulation caused widespread roof damage throughout the city. The dramatic temperature swing (from 65°F to -16°F in 36 hours) created catastrophic thermal shock in roofing systems. Hundreds of buildings experienced freeze-related roof failures, pipe bursts, and structural damage that wasn't fully discovered until spring thaw.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-blue-700">December 23, 2022 - Blizzard Conditions</h5>
                <p className="text-gray-700 leading-relaxed">
                  A powerful winter storm brought blizzard conditions with 60+ mph winds and temperatures dropping to -15°F. The combination of extreme wind and cold created wind chill values below -45°F while dumping 10 inches of snow across the city. Many roofing systems experienced thermal cracking and wind damage simultaneously, while ice dams formed in areas not typically affected. The storm knocked out power to large portions of the city, contributing to freeze damage in buildings unable to maintain adequate heating.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-6 text-brand-brown">High Plains Storm Damage Assessment</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-brand-brown">Amarillo-Specific Damage Types</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-brand-gold pl-4">
                <h5 className="text-lg font-semibold text-brand-brown mb-2">Extreme Hail Impact</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• Complete roof system destruction</li>
                  <li>• Structural deck damage</li>
                  <li>• HVAC and equipment catastrophic loss</li>
                  <li>• Skylight and penetration failure</li>
                </ul>
              </div>
              <div className="border-l-4 border-brand-gold pl-4">
                <h5 className="text-lg font-semibold text-brand-brown mb-2">High Elevation Wind Effects</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• Amplified wind speeds and pressure</li>
                  <li>• Enhanced uplift forces</li>
                  <li>• Membrane and shingle blow-off</li>
                  <li>• Structural component displacement</li>
                </ul>
              </div>
              <div className="border-l-4 border-brand-gold pl-4">
                <h5 className="text-lg font-semibold text-brand-brown mb-2">Extreme Temperature Damage</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• Rapid thermal cycling stress</li>
                  <li>• Freeze-thaw expansion damage</li>
                  <li>• UV-accelerated degradation</li>
                  <li>• Material brittleness failure</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-brand-gold-light p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-6">Our Amarillo Emergency Response</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Immediate Response</h5>
                  <p className="text-sm opacity-90">24/7 emergency service with <1 hour response time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Damage Containment</h5>
                  <p className="text-sm opacity-90">Emergency tarping and leak mitigation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Comprehensive Assessment</h5>
                  <p className="text-sm opacity-90">Detailed damage documentation and analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Insurance Coordination</h5>
                  <p className="text-sm opacity-90">Direct adjuster communication and claim support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white text-brand-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Expert Restoration</h5>
                  <p className="text-sm opacity-90">High Plains-proven materials and techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-100 border-l-4 border-red-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-2">🚨 Emergency? Call Now: (806) 622-6041</h3>
        <p>Available 24/7 for emergency tarping, leak repair, and storm damage assessment</p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Storm Damage in Amarillo</h2>

      {/* Visual Damage Type Examples */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Wind damage on Amarillo roof - Missing and lifted shingles after storm - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">💨 Wind Damage</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Missing or lifted shingles</li>
              <li>• Exposed underlayment</li>
              <li>• Damaged ridge caps</li>
              <li>• Blown-off flashing</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Water damage from roof leak Amarillo TX - Ceiling stains and attic moisture - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">🌧️ Water Damage</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Active leaks into attic</li>
              <li>• Ceiling stains or sagging</li>
              <li>• Compromised insulation</li>
              <li>• Mold or mildew growth</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Tree damage on Texas Panhandle roof - Branch puncture requiring emergency repair - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">🌳 Debris Impact</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Tree limb punctures</li>
              <li>• Broken or cracked decking</li>
              <li>• Damaged skylights</li>
              <li>• Structural issues</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Emergency roof tarping service Amarillo TX - Preventing further storm damage - 5 Star Commercial Roofing"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">🚨 Emergency Tarping</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Same-day response</li>
              <li>• Heavy-duty materials</li>
              <li>• Prevents water intrusion</li>
              <li>• 24/7 availability</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Emergency Response Process</h2>
      <div className="space-y-4 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Immediate Response (Within Hours)</h3>
            <p className="step-text">We dispatch a crew for emergency tarping to prevent further water damage. Our trucks carry heavy-duty tarps, 2x4s, and fastening equipment.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Damage Documentation (24-48 Hours)</h3>
            <p className="step-text">Complete roof inspection with photos, measurements, and detailed report for your insurance company.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Insurance Claim Filing</h3>
            <p className="step-text">We help file your claim with all necessary documentation and meet with the adjuster on-site.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Permanent Repair or Replacement</h3>
            <p className="step-text">Once approved, we complete repairs or full replacement with upgraded, storm-resistant materials.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Time Matters After Storm Damage</h2>
      <p className="mb-4">Delaying repairs after storm damage can lead to:</p>
      <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
        <li><strong>Water Infiltration:</strong> Even small roof openings allow gallons of water into your attic during Panhandle storms</li>
        <li><strong>Mold Growth:</strong> Amarillo's temperature swings create perfect conditions for mold in wet insulation</li>
        <li><strong>Structural Damage:</strong> Water-soaked wood decking and rafters lose structural integrity</li>
        <li><strong>Claim Denial:</strong> Insurance companies expect timely mitigation—waiting months can jeopardize claims</li>
        <li><strong>Interior Damage:</strong> Ceiling damage, ruined insulation, and destroyed belongings add thousands to losses</li>
      </ul>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          24/7 emergency storm damage services for <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial</a> properties throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Storm Damage</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Emergency Service</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Storm Repairs</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Storm Damage</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Expert Roofing Service in Amarillo?</h2>
        <p className="cta-text">
          Free inspections, insurance claim assistance, and professional installation. Serving the Texas Panhandle for over 10 years.
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
