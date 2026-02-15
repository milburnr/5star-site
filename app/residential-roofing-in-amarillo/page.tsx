import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-in-amarillo/' },
  title: 'Residential Roofing Amarillo TX| 25+ Years Experience',
  description: 'Residential Roofing in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Roofing",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Canyon"},
      {"@type": "City", "name": "Bushland"},
      {"@type": "City", "name": "Wildorado"}
    ],
    "description": "Professional residential roofing services in Amarillo, Texas. Specializing in new roof installation, repairs, replacements, and hail damage restoration.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
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
                      "name": "Residential Roofing",
                      "url": "/residential-roofing/"
              },
              {
                      "name": "Amarillo",
                      "url": "/residential-roofing-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Residential Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/residential-roofing-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert residential roofing services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <section className="hero-small">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Roofing in Amarillo, TX</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Expert residential roofing services for Amarillo homeowners. New roofs, repairs, replacements, and hail damage restoration.</p>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="content-block">
            <h2 className="content-block-title">Amarillo's Trusted Residential Roofing Contractor</h2>
            <p className="text-lg mb-4">
              When it comes to protecting your Amarillo home, choosing the right <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing contractor</a> is one of the most important decisions you'll make. Your roof shields your family and possessions from the Texas Panhandle's notorious weather—severe hailstorms, high winds, scorching summer heat, and freezing winter temperatures. At 5 Star Commercial Roofing, we've spent over 25 years helping Amarillo homeowners protect their most valuable asset with premium roofing solutions built to last.
            </p>
            <p className="text-lg mb-4">
              Whether you need a brand new roof installation, <a href="/residential-roof-repair-in-amarillo/" className="text-brand-gold hover:underline">residential roof repairs</a>, complete <a href="/residential-roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a>, or <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage restoration</a>, our experienced team delivers exceptional workmanship backed by industry-leading warranties. We understand that Amarillo's extreme climate demands roofing materials and installation techniques that go beyond the basics—which is why we exclusively use Class 4 impact-resistant shingles, premium underlayment, and proven installation methods that protect your home for decades.
            </p>
            <p className="text-lg mb-6">
              As a locally owned and operated company, we live in the same neighborhoods we serve. When hailstorms batter Amarillo, we're responding to our neighbors' calls. When the Texas sun beats down relentlessly, we know exactly which roofing materials provide the best energy efficiency. This local knowledge, combined with our commitment to quality and customer service, has made us the most trusted name in Amarillo residential roofing.
            </p>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Amarillo Homeowners Choose 5 Star Roofing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">✓ 25+ Years of Local Experience</h3>
                <p className="text-gray-600">We've been protecting Amarillo homes since 1995. We understand local building codes, weather patterns, and the specific challenges Texas Panhandle roofs face. This experience translates to better installations and longer-lasting roofs.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">✓ Class 4 Impact-Resistant Shingles</h3>
                <p className="text-gray-600">After years of devastating hailstorms, we now exclusively install Class 4 impact-resistant shingles on all Amarillo homes. These premium shingles withstand hail up to 2 inches in diameter and often qualify for insurance discounts.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">✓ Insurance Claim Experts</h3>
                <p className="text-gray-600">We've helped thousands of Amarillo homeowners navigate the insurance claims process after hail damage. We'll inspect your roof, document all damage, meet with the adjuster, and fight for the coverage you deserve—often resulting in full replacements at only your deductible cost.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">✓ Industry-Leading Warranties</h3>
                <p className="text-gray-600">Every residential roofing project includes comprehensive warranties covering both materials (up to lifetime) and our workmanship (10+ years). You'll have complete peace of mind knowing your investment is protected.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">✓ Free Inspections & Estimates</h3>
                <p className="text-gray-600">Every Amarillo homeowner receives a complimentary roof inspection with detailed photos, written assessment, and honest recommendations. We'll never pressure you—just provide the facts you need to make an informed decision.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">✓ Fast, Clean Installation</h3>
                <p className="text-gray-600">Most Amarillo residential roofs are completed in 1-2 days. Our crews arrive on time, protect your property and landscaping, clean up thoroughly with magnetic sweepers, and haul away all old materials—leaving your home better than we found it.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-brand-gold-light rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Complete Residential Roofing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">New Roof Installation</h3>
                <p className="text-gray-700 mb-2">
                  Building a new home in Amarillo? We partner with local builders and homeowners to install premium roofing systems from the ground up. Choose from Class 4 asphalt shingles, standing seam metal roofing, or architectural shingles in dozens of colors to match your home's style.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>GAF, Owens Corning, and CertainTeed certified installer</li>
                  <li>Premium ice and water shield protection</li>
                  <li>Proper attic ventilation for energy efficiency</li>
                  <li>Code-compliant installation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Roof Repairs</h3>
                <p className="text-gray-700 mb-2">
                  Not every roofing issue requires full replacement. Our <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">expert repair services</a> address leaks, missing shingles, wind damage, flashing failures, and more. We'll honestly assess whether repair or replacement is the most cost-effective solution.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>prompt leak repair (availability)</li>
                  <li>Storm damage assessment and repair</li>
                  <li>Chimney and skylight flashing repair</li>
                  <li>Valley and ridge repairs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Complete Roof Replacement</h3>
                <p className="text-gray-700 mb-2">
                  When your Amarillo roof reaches the end of its lifespan or suffers extensive hail damage, full <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a> is the smart choice. We'll tear off your old roof, inspect and repair the deck, install new underlayment and shingles, and restore your home's protection.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Complete tear-off and disposal</li>
                  <li>Deck inspection and repair</li>
                  <li>New drip edge, flashing, and ventilation</li>
                  <li>Manufacturer warranty registration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Hail Damage Restoration</h3>
                <p className="text-gray-700 mb-2">
                  Amarillo sees frequent severe hailstorms, and hail damage isn't always visible from the ground. Our certified inspectors identify all hail impacts, bruising, and granule loss. We document everything for your insurance claim and restore your roof to like-new condition.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Free post-storm inspections</li>
                  <li>Insurance claim documentation and filing</li>
                  <li>Meet with insurance adjusters on-site</li>
                  <li>Supplement claims for missed damage</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Residential Roofing Materials for Amarillo Homes</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold mb-3">Class 4 Impact-Resistant Asphalt Shingles (Most Popular)</h3>
              <p className="text-gray-700 mb-3">
                After major hailstorms became annual events in Amarillo, Class 4 impact-resistant shingles have become the standard for smart homeowners. These shingles feature reinforced construction with a special mat that absorbs hail impacts without cracking or losing protective granules. Most insurance companies offer 15-30% premium discounts for homes with Class 4 roofs.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-3">
                <div>
                  <h4 className="font-bold mb-1">GAF Timberline HDZ</h4>
                  <p className="text-sm text-gray-600">Our #1 seller. Lifetime warranty with StrikeGuard hail protection. LayerLock technology prevents shingle blow-off. Available in 12 colors.</p>
                  <p className="text-sm font-semibold mt-1">$8,500-$12,000 (typical 2,000 sq ft home)</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Owens Corning Duration Storm</h4>
                  <p className="text-sm text-gray-600">SureNail strip provides wind resistance to 130 mph. Algae-resistant. Limited lifetime warranty. 15 designer colors.</p>
                  <p className="text-sm font-semibold mt-1">$9,000-$13,000 (typical home)</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">CertainTeed Landmark IR</h4>
                  <p className="text-sm text-gray-600">Advanced impact resistance with StreakFighter algae protection. 10-year labor warranty. 18 color options including luxury blends.</p>
                  <p className="text-sm font-semibold mt-1">$9,500-$14,000 (typical home)</p>
                </div>
              </div>
              <p className="text-sm text-brand-brown font-semibold">
                💰 With insurance claims after hail damage, most Amarillo homeowners pay only their deductible ($1,000-$2,500)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold mb-3">Standing Seam Metal Roofing (Premium Option)</h3>
              <p className="text-gray-700 mb-3">
                For maximum durability and the last roof you'll ever need, standing seam metal roofing is increasingly popular in Amarillo. While hail may cause cosmetic denting on the surface, metal roofs remain 100% watertight and can last 50-70 years. They also reduce cooling costs by 20-30% thanks to reflective coatings.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
                <li><strong>Lifespan:</strong> 50-70 years (last roof you'll ever install)</li>
                <li><strong>Energy Savings:</strong> Cool-roof coatings reflect heat, reducing AC costs 20-30%</li>
                <li><strong>Wind Resistance:</strong> 140+ mph (far exceeds Amarillo's wind requirements)</li>
                <li><strong>Fire Rating:</strong> Class A (best available)</li>
                <li><strong>Maintenance:</strong> Virtually maintenance-free for decades</li>
                <li><strong>Warranty:</strong> 40-year paint, 50-year panel warranties standard</li>
              </ul>
              <p className="text-sm font-semibold">Average Cost: $15,000-$25,000 for 2,000 sq ft home</p>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-4">The Amarillo Roofing Advantage: Why Local Matters</h2>
            <p className="text-lg mb-4">
              Amarillo's location in the Texas Panhandle creates unique roofing challenges that out-of-town contractors often don't understand. Our local expertise ensures your roof is built to withstand:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="font-bold text-lg mb-2">🌨️ Severe Hailstorms</h3>
                <p className="text-gray-700">Baseball to softball-sized hail strikes Amarillo multiple times per year. We install only Class 4 impact-resistant materials that withstand these devastating storms.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">💨 High Winds</h3>
                <p className="text-gray-700">Sustained winds over 50 mph and gusts exceeding 80 mph require upgraded fastening systems, starter strips, and edge details. We exceed code requirements on every installation.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">☀️ Extreme UV Exposure</h3>
                <p className="text-gray-700">Over 260 sunny days per year at 3,600 feet elevation means intense UV radiation. We use shingles with superior granule adhesion to prevent premature aging.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🌡️ Temperature Extremes</h3>
                <p className="text-gray-700">From -10°F winters to 105°F summers, a 115-degree temperature range causes constant expansion/contraction. Proper ventilation and material selection are critical.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Amarillo & Surrounding Communities</h2>
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
            <h2 className="cta-title">Ready to Protect Your Amarillo Home?</h2>
            <p className="cta-text mb-6">
              Free inspections and estimates for all Amarillo homeowners. Most residential roof installations completed in 1-2 days. Insurance claim assistance available.
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
