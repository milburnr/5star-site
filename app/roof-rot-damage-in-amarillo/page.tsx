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

      <h2 className="text-2xl font-bold mt-8 mb-4">Insurance Coverage for Roof Rot</h2>
      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="font-bold mb-3">When Is Roof Rot Covered by Insurance?</h3>
        <p className="mb-4">
          Insurance coverage for roof rot depends on the cause:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>COVERED:</strong> Rot resulting from sudden storm damage (hail, wind, ice dams)</li>
          <li><strong>COVERED:</strong> Rot discovered during claim investigation for recent hail/storm damage</li>
          <li><strong>COVERED:</strong> Concealed rot that wasn't preventable through normal maintenance</li>
          <li><strong>NOT COVERED:</strong> Rot from long-term maintenance neglect</li>
          <li><strong>NOT COVERED:</strong> Rot from improper ventilation (unless tied to storm damage)</li>
        </ul>
        <p className="mt-4 font-semibold">
          Our team documents all rot damage and works with your insurance adjuster to demonstrate coverage eligibility. Many homeowners are surprised to learn their rot IS covered when properly documented.
        </p>
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
