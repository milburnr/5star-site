import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Amarillo TXAssistance | 5 Star',
  description: 'Roof Replacement in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Replacement",
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
    "description": "Professional roof replacement services in Amarillo, Texas. Residential and commercial roof replacement with Class 4 impact-resistant materials and insurance claim assistance."
  };

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Replacement",
                      "url": "/roof-replacement/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-replacement-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero-small">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Replacement in Amarillo, TX</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Complete roof replacement for homes and businesses. Class 4 impact-resistant shingles. Insurance claim experts.</p>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="content-block">
            <h2 className="content-block-title">Amarillo's Premier Roof Replacement Contractor</h2>
            <p className="text-lg mb-4">
              When your <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo roof</a> reaches the end of its lifespan or suffers extensive storm damage, complete roof replacement is the smart long-term solution. At 5 Star Commercial Roofing, we've replaced thousands of roofs across the Texas Panhandle over the past 25+ years—from small residential homes to large commercial buildings spanning 100,000+ square feet.
            </p>
            <p className="text-lg mb-4">
              The Texas Panhandle's brutal climate—with annual <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hailstorms</a>, sustained winds over 50 mph, and temperature swings exceeding 115 degrees—demands roofing systems built to last. We exclusively install Class 4 impact-resistant materials designed to withstand baseball-sized hail, extreme UV exposure, and the freeze-thaw cycles that destroy standard roofing systems.
            </p>
            <p className="text-lg mb-6">
              Most importantly, we're insurance claim experts. After major hailstorms, we help thousands of Amarillo homeowners and businesses navigate the claims process, meet with adjusters, and secure full coverage for roof replacement—often at only the cost of your deductible. We handle all paperwork, documentation, and negotiations with insurance companies.
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Signs You Need Roof Replacement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">⏰ Age Over 20 Years</h3>
                <p className="text-gray-600">Most Amarillo roofs last 15-25 years depending on material quality and weather exposure. If your roof is approaching or exceeding this age, replacement is more economical than ongoing repairs.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Severe Hail Damage</h3>
                <p className="text-gray-600">After major hailstorms with baseball-sized hail, insurance companies typically approve full replacement if damage exceeds 8-10 hits per test square. We document all damage for your claim.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Multiple Leak Areas</h3>
                <p className="text-gray-600">If you have leaks in multiple locations across your roof, the entire system is likely failing. Patchwork repairs are temporary—replacement addresses the root problem.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">📉 Missing/Curling Shingles</h3>
                <p className="text-gray-600">Widespread shingle loss, curling, cupping, or granule loss indicates end-of-life. Wind and hail will continue damaging aging shingles faster than you can repair them.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🏚️ Sagging Roof Deck</h3>
                <p className="text-gray-600">Any visible sagging, dipping, or uneven roof lines indicate serious structural damage. This requires immediate replacement to prevent potential collapse.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💰 Rising Energy Bills</h3>
                <p className="text-gray-600">Dramatically increased heating/cooling costs often indicate your roof no longer provides adequate insulation or ventilation. New roofs with proper insulation reduce energy costs 20-30%.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-brand-gold-light rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Roofing Materials for Amarillo Climate</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Class 4 Impact-Resistant Asphalt Shingles (Most Popular)</h3>
                <p className="text-gray-700 mb-3">
                  After years of devastating hailstorms, Class 4 impact-resistant shingles have become the standard for smart Amarillo homeowners. These reinforced shingles withstand hail up to 2 inches in diameter and qualify for significant insurance discounts.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-3">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">GAF Timberline HDZ</h4>
                    <p className="text-sm text-gray-600">Lifetime warranty with StrikeGuard protection. Wind resistance to 130 mph. 12 color options.</p>
                    <p className="text-sm font-semibold mt-2">$8,500-$12,000 (typical 2,000 sq ft home)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">Owens Corning Duration Storm</h4>
                    <p className="text-sm text-gray-600">SureNail strip for superior wind resistance. Algae-resistant. 15 designer colors.</p>
                    <p className="text-sm font-semibold mt-2">$9,000-$13,000 (typical home)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">CertainTeed Landmark IR</h4>
                    <p className="text-sm text-gray-600">Advanced impact resistance. StreakFighter algae protection. 18 color blends.</p>
                    <p className="text-sm font-semibold mt-2">$9,500-$14,000 (typical home)</p>
                  </div>
                </div>
                <p className="text-sm text-brand-brown font-semibold">
                  💰 With insurance claims, most Amarillo homeowners pay only their deductible ($1,000-$2,500)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Standing Seam Metal Roofing (Premium Option)</h3>
                <p className="text-gray-700 mb-3">
                  For maximum durability and the last roof you'll ever install, standing seam metal roofing is increasingly popular in Amarillo. While hail may dent the surface, metal roofs remain 100% watertight and last 50-70 years.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
                  <li><strong>Lifespan:</strong> 50-70 years (literally the last roof you'll ever need)</li>
                  <li><strong>Energy Savings:</strong> Reflective coatings reduce cooling costs 20-30%</li>
                  <li><strong>Wind Resistance:</strong> 140+ mph (far exceeds Amarillo requirements)</li>
                  <li><strong>Fire Rating:</strong> Class A (best available, lowers insurance premiums)</li>
                  <li><strong>Hail Performance:</strong> Dents don't affect waterproofing</li>
                  <li><strong>Warranty:</strong> 40-50 year paint and panel warranties standard</li>
                </ul>
                <p className="text-sm font-semibold">Average Cost: $15,000-$25,000 for 2,000 sq ft home</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Amarillo Roof Replacement Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Free Inspection & Documentation</h3>
                <p className="text-gray-600">Complete roof inspection with drone photography, moisture detection, and detailed damage assessment. We create comprehensive reports for insurance claims—completely free with no obligation.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insurance Claim Filing & Negotiation</h3>
                <p className="text-gray-600">We file your insurance claim, meet with the adjuster on-site, and ensure all damage is properly documented. If initial estimates are low, we file supplements to get full coverage. Most Amarillo homeowners pay only their deductible.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Material Selection</h3>
                <p className="text-gray-600">Choose your shingle color, style, and warranty level from our selection of Class 4 impact-resistant options. We order all materials and schedule your installation for optimal weather conditions.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Complete Tear-Off & Installation</h3>
                <p className="text-gray-600">Full removal of old roofing materials, inspection and repair of roof deck, installation of premium underlayment, and installation of your new roof system. Most Amarillo homes completed in 1-2 days.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Final Inspection & Cleanup</h3>
                <p className="text-gray-600">Quality inspection of all work, thorough cleanup with magnetic sweepers for nails, haul away all old materials, and register your manufacturer's warranty. Your property left cleaner than we found it.</p>
              </div>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-4">Insurance Claims for Roof Replacement</h2>
            <p className="text-lg mb-4">
              Most homeowners insurance policies in Amarillo and the Texas Panhandle cover <a href="/hail-damage-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">storm damage roof replacement</a>. After hailstorms, insurance adjusters use the "test square method":
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div><strong>8+ hits per test square:</strong> Full replacement typically approved immediately</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div><strong>5-7 hits:</strong> May require additional documentation or supplement claims</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div><strong>Granule loss &gt;25%:</strong> Often qualifies for replacement even without visible impacts</div>
              </li>
            </ul>
            <p className="text-lg">
              We work directly with all major insurance companies including State Farm, Allstate, USAA, Farmers, and Liberty Mutual. We've helped thousands of Amarillo property owners receive full coverage for roof replacements.
            </p>
          </section>
        </FadeIn>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Surrounding Areas</h2>
          <p className="text-lg mb-4">
            While Amarillo is our home base, we provide comprehensive <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing services</a> throughout the Texas Panhandle and West Texas:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
            <a href="/bushland-tx-roofing/" className="text-brand-gold hover:underline">• Bushland Roofing</a>
            <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
            <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
            <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
            <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof?</h2>
            <p className="cta-text mb-6">
              Free inspections and insurance claim assistance for all Amarillo homeowners and businesses. Most customers pay only their insurance deductible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4 inline-block bg-white text-brand-brown hover:bg-gray-100">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4 border-2 border-white hover:bg-white hover:text-brand-brown">Request Free Inspection</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
