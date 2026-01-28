import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Replacement in Amarillo | 5 Star',
  description: 'Hail Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hail Damage Roof Replacement",
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
    "description": "Complete hail damage roof replacement in Amarillo, Texas. Insurance claim experts. Class 4 impact-resistant shingles and standing seam metal roofing."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Hail Damage Roof Replacement",
                      "url": "/hail-damage-roof-replacement/"
              },
              {
                      "name": "Amarillo",
                      "url": "/hail-damage-roof-replacement-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Hail Damage Roof Replacement in Amarillo</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Complete Roof Replacement After Hail Storms</h2>
        <p className="text-lg">
          When <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo hailstorms</a> cause extensive damage, a complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a> is often the only solution. The good news? Most homeowners insurance policies in the Texas Panhandle cover <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a>. We work directly with all major insurance companies to maximize your coverage. We've helped thousands of Amarillo homeowners navigate the insurance process and get brand new roofs at little to no out-of-pocket cost.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When Is Full Replacement Necessary?</h2>
      <p className="mb-4">Insurance adjusters look for specific criteria to approve full replacement:</p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card-body bg-white rounded shadow">
          <h3 className="font-bold mb-3">Test Square Method</h3>
          <p className="mb-3">Adjusters examine 10x10 foot sections (test squares) on different roof slopes:</p>
          <ul className="space-y-2 text-sm">
            <li><strong>8+ hits in one square:</strong> Full replacement typically approved</li>
            <li><strong>5-7 hits:</strong> May require additional documentation</li>
            <li><strong>Under 5 hits:</strong> Repair may be recommended</li>
          </ul>
        </div>
        <div className="card-body bg-white rounded shadow">
          <h3 className="font-bold mb-3">Additional Factors</h3>
          <ul className="space-y-2 text-sm">
            <li>✓ Granule loss exceeding 25%</li>
            <li>✓ Compromised shingle integrity</li>
            <li>✓ Previous damage or repairs</li>
            <li>✓ Age of existing roof</li>
            <li>✓ Functional vs cosmetic damage</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Replacement Options for Amarillo Homes</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Impact-Resistant Asphalt Shingles (Most Popular)</h3>
        <div className="card">
          <img src="/images/asphaltshingles.jpg" alt="Hail damage roof repair in Amarillo, TX - Class 4 impact-resistant asphalt shingles - Hail protection roofing - 5 Star Commercial Roofing" className="card-image" />
          <div className="card-body">
            <p className="mb-4">Class 4 impact-resistant shingles are now standard in Amarillo after major hail events. Top brands include:</p>
            <ul className="space-y-3">
              <li><strong>GAF Timberline HDZ:</strong> Lifetime warranty, StrikeGuard technology, excellent hail rating</li>
              <li><strong>Owens Corning Duration Storm:</strong> SureNail strip for superior wind resistance</li>
              <li><strong>CertainTeed Landmark IR:</strong> StreakFighter algae resistance, Class 4 impact</li>
              <li><strong>Malarkey Legacy IR:</strong> Scotchgard protection, upcycled materials</li>
            </ul>
            <div className="bg-brand-gold-light p-4 rounded mt-4">
              <p className="font-semibold">Average Cost: $8,500-$15,000 (2,000 sq ft home)</p>
              <p className="text-sm mt-1">Most homeowners pay only their deductible ($1,000-$2,500) with insurance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Standing Seam Metal Roofing (Premium Option)</h3>
        <div className="card">
          <img src="/images/SteelRoofing.jpg" alt="Hail damage roof repair in Amarillo, TX - Standing seam metal roof - Ultimate hail protection - 5 Star Commercial Roofing" className="card-image" />
          <div className="card-body">
            <p className="mb-4">For maximum hail protection and longevity, standing seam metal is the ultimate choice:</p>
            <ul className="space-y-2 mb-4">
              <li>✓ <strong>Hail Resistant:</strong> Dents may occur but roof remains watertight</li>
              <li>✓ <strong>50+ Year Lifespan:</strong> Last roof you'll ever need</li>
              <li>✓ <strong>Energy Efficient:</strong> Reduces cooling costs 20-30%</li>
              <li>✓ <strong>Class A Fire Rating:</strong> Additional insurance savings</li>
              <li>✓ <strong>Wind Resistant:</strong> Rated for 140+ mph winds</li>
            </ul>
            <div className="bg-brand-gold-light p-4 rounded">
              <p className="font-semibold">Average Cost: $15,000-$25,000 (2,000 sq ft home)</p>
              <p className="text-sm mt-1">Insurance may cover portion; upgrade cost typically $5,000-$10,000</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Replacement Process Timeline</h2>
      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start">
          <div className="bg-brand-gold text-white px-4 py-2 rounded font-bold">Day 1</div>
          <div>
            <h4 className="font-bold">Free Inspection & Documentation</h4>
            <p className="text-gray-600">Complete roof assessment with photos and measurements for your insurance claim</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-brand-gold text-white px-4 py-2 rounded font-bold">Week 1</div>
          <div>
            <h4 className="font-bold">Insurance Claim & Adjuster Meeting</h4>
            <p className="text-gray-600">We file your claim and meet with the adjuster to ensure all damage is documented</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-brand-gold text-white px-4 py-2 rounded font-bold">Week 2-3</div>
          <div>
            <h4 className="font-bold">Approval & Material Selection</h4>
            <p className="text-gray-600">Choose your shingle color and style, order materials, schedule installation</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-brand-gold text-white px-4 py-2 rounded font-bold">Week 4</div>
          <div>
            <h4 className="font-bold">Installation (1-2 Days)</h4>
            <p className="text-gray-600">Complete tear-off and installation, final inspection, cleanup, warranty registration</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">⚠️ Beware of Storm Chasers</h3>
        <p className="mb-2">After major Amarillo hailstorms, out-of-state "storm chasers" flood the area with aggressive sales tactics. Warning signs:</p>
        <ul className="space-y-1 text-sm">
          <li>• Door-to-door solicitation immediately after storm</li>
          <li>• Pressure to sign contracts before insurance approval</li>
          <li>• Offers to pay your deductible (insurance fraud)</li>
          <li>• No local address or references</li>
          <li>• Disappear after project is complete</li>
        </ul>
        <p className="font-semibold mt-3">Choose a local Amarillo company with 10+ years in business and verifiable references.</p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          We provide <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing</a> services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
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
