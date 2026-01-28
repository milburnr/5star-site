import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roof Replacement Amarillo TX',
  description: 'Roof Replacement in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Roof Replacement",
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
    "description": "Complete residential roof replacement services in Amarillo, Texas. Specializing in hail damage replacement, insurance claims, and Class 4 impact-resistant shingles.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "pric​eSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Residential Roof Replacement",
                      "url": "/residential-roof-replacement/"
              },
              {
                      "name": "Amarillo",
                      "url": "/residential-roof-replacement-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero-small">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Roof Replacement in Amarillo</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Complete roof replacement services for Amarillo homes. Hail damage specialists with insurance claim expertise.</p>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="content-block">
            <h2 className="content-block-title">When It's Time to Replace Your Amarillo Roof</h2>
            <p className="text-lg mb-4">
              Amarillo homeowners face unique roofing challenges that often necessitate complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a>. The Texas Panhandle's severe hailstorms, high winds, and extreme temperature fluctuations can damage even the highest-quality roofing materials over time. If your roof is showing signs of significant damage or has reached the end of its service life, replacement—rather than repair—is often the most cost-effective long-term solution.
            </p>
            <p className="text-lg mb-6">
              Most <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofs in Amarillo</a> last 15-25 years depending on materials and weather exposure. However, after severe hailstorms like those common in spring and summer, insurance companies may approve full replacement even for newer roofs if damage is extensive enough. We've helped thousands of Amarillo homeowners navigate the insurance process to get brand new roofs at little to no out-of-pocket cost.
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Signs You Need Roof Replacement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">⚠️ Age of Roof</h3>
                <p className="text-gray-600">Roofs over 20 years old should be inspected annually. Beyond 25 years, replacement is often more economical than ongoing repairs.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🌨️ Hail Damage</h3>
                <p className="text-gray-600">Baseball-sized hail can bruise or puncture shingles, compromising granule protection. If damage exceeds 8-10 hits per test square, full replacement is typically approved by insurance.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💧 Multiple Leaks</h3>
                <p className="text-gray-600">If you have leaks in several areas, the entire roof system is likely failing. Repairing individual leaks won't address underlying structural issues.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">📉 Missing/Curling Shingles</h3>
                <p className="text-gray-600">Widespread shingle loss, curling, or cupping indicates the roof has reached the end of its lifespan. Patchwork repairs are temporary at best.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">🏚️ Sagging Roof Deck</h3>
                <p className="text-gray-600">Any visible sagging or dipping in the roof line indicates serious structural damage requiring immediate replacement.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">💰 Energy Bills Rising</h3>
                <p className="text-gray-600">If heating/cooling costs have increased significantly, your roof may no longer provide adequate insulation or ventilation.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-brand-gold-light rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Roofing Materials for Amarillo Homes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Impact-Resistant Asphalt Shingles (Most Popular)</h3>
                <p className="text-gray-700 mb-2">
                  Class 4 impact-resistant shingles are now the standard in Amarillo after major hail events. These shingles feature reinforced construction that withstands hail impacts up to 2 inches in diameter.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>GAF Timberline HDZ:</strong> Lifetime warranty with StrikeGuard hail protection</li>
                  <li><strong>Owens Corning Duration Storm:</strong> SureNail strip for wind resistance up to 130 mph</li>
                  <li><strong>CertainTeed Landmark IR:</strong> Advanced impact resistance with algae protection</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600"><strong>Average Cost:</strong> $8,500-$15,000 for typical 2,000 sq ft home (most homeowners pay only deductible with insurance)</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Standing Seam Metal Roofing (Premium Option)</h3>
                <p className="text-gray-700 mb-2">
                  For maximum durability and hail protection, standing seam metal roofing is increasingly popular in Amarillo. While hail may dent the surface, metal roofs remain watertight and last 50+ years.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>50-70 year lifespan (last roof you'll ever need)</li>
                  <li>Reduces cooling costs 20-30% with reflective coatings</li>
                  <li>Wind resistant to 140+ mph</li>
                  <li>Fire resistant (Class A rating)</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600"><strong>Average Cost:</strong> $15,000-$25,000 for 2,000 sq ft home</p>
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
                <p className="text-gray-600">We inspect your roof, photograph all damage, measure your home, and create a detailed estimate for your insurance claim—completely free.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insurance Claim Filing</h3>
                <p className="text-gray-600">We help file your <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage claim</a>, meet with the adjuster on-site, and ensure all damage is properly documented. Most Amarillo homeowners pay only their deductible ($1,000-$2,500).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Material Selection</h3>
                <p className="text-gray-600">Choose your shingle color and style from our selection of Class 4 impact-resistant options. We order all materials and schedule your installation date.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex-items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Complete Tear-Off & Installation (1-2 Days)</h3>
                <p className="text-gray-600">Our experienced crews remove your old roof, inspect/repair the deck, install new underlayment, and install your new shingles. Most Amarillo homes are completed in one day.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
              <div className="bg-brand-gold text-white w-10 h-10 rounded-full flex-items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Final Inspection & Cleanup</h3>
                <p className="text-gray-600">We inspect all work, clean your property with magnetic sweepers for nails, haul away old materials, and register your manufacturer's warranty.</p>
              </div>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-4">Insurance Claims for Roof Replacement</h2>
            <p className="text-lg mb-4">
              Most homeowners insurance policies in Amarillo and the Texas Panhandle cover <a href="/hail-damage-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">storm damage roof replacement</a>. After hailstorms, insurance adjusters use the "test square method" to determine if replacement is warranted:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <div><strong>8+ hits per test square:</strong> Full replacement typically approved</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <div><strong>5-7 hits:</strong> May require additional documentation or supplemental claims</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <div><strong>Granule loss exceeding 25%:</strong> Often qualifies for replacement</div>
              </li>
            </ul>
            <p className="text-lg">
              We work directly with all major insurance companies and have helped thousands of Amarillo homeowners receive full coverage for their roof replacements. We handle all documentation, meet with adjusters, and fight for the coverage you deserve.
            </p>
          </section>
        </FadeIn>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Surrounding Areas</h2>
          <p className="text-lg mb-4">
            While Amarillo is our home base, we provide comprehensive <a href="/residential-roofing/" className="text-brand-gold hover:underline">residential roofing services</a> throughout the Texas Panhandle and West Texas:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Amarillo Roofing</a>
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
              Free inspections and insurance claim assistance for all Amarillo homeowners. Most customers pay only their insurance deductible.
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
