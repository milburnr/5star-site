import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Best Roofers in Amarillo TX | 5 Star Roofing',
  description: 'roofers in Amarillo, TX. Our roofing services meet all your needs. We provide top-quality solutions to ensure the best property protection.',
};

export default function Page() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roofers",
                      "url": "/roofers/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roofers-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roofers-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roofers-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      {/* Schema Markup - Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roofing Services",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "+18066226041",
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Amarillo",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Midland",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Odessa",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Lubbock",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roofing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hail Damage Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Roof Repair"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold mb-6">Trusted Roofers in Amarillo | Quality Roofing Services</h1>

        <div className="prose max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              When it comes to finding professional <strong>roofers in Amarillo</strong>, it's important to do your due diligence and ensure they are qualified for roof repair in Amarillo. At 5 Star Commercial Roofing, we've been protecting homes and businesses across the Texas Panhandle since 2014, providing top-quality roofing solutions that stand up to Amarillo's harsh weather conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Start by providing potential roofers with as much information as possible about the scope of the work you need. This will help them give you an accurate estimate and ensure that they can meet your expectations. While pricing is a factor to consider, it shouldn't be the sole basis for your decision.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Take into account the <strong>reputation, experience</strong>, and range of services offered by each <strong>roofer</strong>. Getting quotes from multiple <strong>roofers in Amarillo</strong> will allow you to compare prices and ensure a fair deal. Once you've selected a <strong>roofer</strong>, it's crucial to have a written contract that outlines the project's details, including the timeline, materials to be used, and total cost.
            </p>
          </section>

          {/* Why Choose Professional Roofers */}
          <section className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Why Choose Experienced Roofers in Amarillo?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Amarillo's location in the Texas Panhandle exposes roofs to some of the most challenging weather conditions in America. From frequent <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">hail storms</a> to intense UV radiation, extreme temperature swings, and high winds, your roof needs expert installation and maintenance to perform properly.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏠 Local Expertise Matters</h3>
                <p className="text-gray-700">
                  Professional roofers in Amarillo understand the unique challenges of West Texas weather. We know which materials perform best in our climate, how to properly install for high wind resistance, and what local building codes require.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📋 Insurance Claim Experience</h3>
                <p className="text-gray-700">
                  Experienced Amarillo roofers have worked with every major insurance company operating in the Texas Panhandle. We know how to document damage properly, meet with adjusters, and maximize your claim approval.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">⚡ Emergency Response Ready</h3>
                <p className="text-gray-700">
                  When severe weather strikes Amarillo, professional roofers can respond quickly with emergency tarping and temporary repairs to prevent interior damage while coordinating your permanent solution.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🛡️ Quality Materials & Warranties</h3>
                <p className="text-gray-700">
                  Reputable roofers in Amarillo use premium Class 4 impact-resistant materials backed by manufacturer warranties. Proper installation ensures these warranties remain valid for decades.
                </p>
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Comprehensive Roofing Services in Amarillo</h2>
            <p className="text-lg text-gray-700 mb-6">
              The best roofers in Amarillo offer a complete range of services to meet every roofing need. At 5 Star Commercial Roofing, we provide:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Residential Roofing Services</h3>
                <p className="text-gray-700 mb-4">
                  Complete roofing solutions for Amarillo homes including new installations, full replacements, repairs, and maintenance. We specialize in <a href="/residential-roofing-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">residential roofing</a> for neighborhoods throughout Amarillo, from Wolflin to San Jacinto Heights.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Class 4 impact-resistant asphalt shingles</li>
                  <li>Standing seam metal roofing</li>
                  <li>Architectural and designer shingles</li>
                  <li>Emergency leak repairs</li>
                  <li>Roof inspections and maintenance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Commercial Roofing Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Expert <a href="/commercial-roofing-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">commercial roofing</a> for Amarillo businesses. We handle everything from retail centers to industrial warehouses with minimal disruption to your operations.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>TPO and PVC single-ply membrane systems</li>
                  <li>EPDM rubber roofing</li>
                  <li>Built-up roofing (BUR)</li>
                  <li>Modified bitumen systems</li>
                  <li>Commercial roof coatings and restoration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Storm Damage & Hail Repair</h3>
                <p className="text-gray-700 mb-4">
                  Our #1 specialty. Amarillo roofers must be experts in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">hail damage repair</a> given our location in "Hail Alley." We provide free inspections, complete insurance documentation, and work directly with adjusters.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Free post-storm damage inspections</li>
                  <li>Complete insurance claim documentation</li>
                  <li>Adjuster meeting representation</li>
                  <li>Emergency tarping and temporary repairs</li>
                  <li>Full roof replacement with upgraded materials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Area Coverage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Serving the Texas Panhandle & West Texas</h2>
            <p className="text-lg text-gray-700 mb-6">
              While headquartered in Amarillo at 2909 S Western St, we're proud to serve homeowners and businesses throughout the Texas Panhandle and West Texas region:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Amarillo Metro</h3>
                <p className="text-gray-700">
                  All Amarillo neighborhoods including Wolflin, Sleepy Hollow, Southwest Amarillo, Tascosa, and The Colonies. We also serve Canyon, Bushland, and Lake Tanglewood.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 West Texas Cities</h3>
                <p className="text-gray-700">
                  Expert <a href="/roofing-services-lubbock-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">roofing services in Lubbock</a>, <a href="/midland-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">Midland</a>, and <a href="/odessa-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">Odessa</a>. Same quality service across West Texas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Panhandle Communities</h3>
                <p className="text-gray-700">
                  Borger, Pampa, Dumas, Hereford, and all surrounding Panhandle communities receive the same expert roofing services and rapid response times.
                </p>
              </div>
            </div>
          </section>

          {/* Choosing the Right Roofer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">How to Choose the Right Roofers in Amarillo</h2>
            <p className="text-lg text-gray-700 mb-6">
              Not all roofers in Amarillo are created equal. Here's what to look for when selecting a roofing contractor:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Verify Local Credentials & Insurance</h3>
                <p className="text-gray-700">
                  Ensure your roofer is properly licensed in Texas with current general liability and workers' compensation insurance. Ask for proof and verify with their insurance carrier. Beware of out-of-state "storm chasers" who disappear after the next weather event.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Check Local References & Reviews</h3>
                <p className="text-gray-700">
                  Ask for references from recent Amarillo projects in your neighborhood. Check Google reviews, Better Business Bureau ratings, and ask neighbors who they used. Established local roofers will have extensive track records in the community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Evaluate Materials & Warranties</h3>
                <p className="text-gray-700">
                  Quality roofers use premium materials from leading manufacturers (Owens Corning, GAF, CertainTeed for shingles; Firestone, Carlisle, or GAF for commercial). They should offer both manufacturer material warranties and workmanship warranties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Get Detailed Written Estimates</h3>
                <p className="text-gray-700">
                  Obtain written estimates from at least three roofers. Compare not just prices but scope of work, materials specified, project timeline, payment terms, and warranty coverage. The lowest bid isn't always the best value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Understand the Contract</h3>
                <p className="text-gray-700">
                  Before work begins, ensure you have a detailed written contract specifying materials, timeline, total cost, payment schedule, cleanup responsibilities, and warranty terms. Never pay the full amount upfront.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Ask About Insurance Claim Experience</h3>
                <p className="text-gray-700">
                  In Amarillo's hail-prone climate, insurance claim expertise is crucial. The best roofers have processed hundreds of claims, know what adjusters look for, and can document damage properly to maximize your coverage.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose 5 Star */}
          <section className="mb-12 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Why Amarillo Trusts 5 Star Commercial Roofing</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">✅ Over 10 Years in Amarillo</h3>
                <p className="text-gray-700">
                  We're not storm chasers—we're your neighbors. Headquartered at 2909 S Western St in Amarillo since 2014, we're here for the long term to honor warranties and support our community.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">✅ 1,500+ Completed Projects</h3>
                <p className="text-gray-700">
                  From residential homes in every Amarillo neighborhood to commercial buildings across the Panhandle, we've successfully completed over 1,500 roofing projects with exceptional results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">✅ Free Inspections Always</h3>
                <p className="text-gray-700">
                  We never charge for roof inspections. Whether you need storm damage assessment, pre-purchase inspection, or routine maintenance check, our comprehensive inspections are always free.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">✅ Insurance Claim Specialists</h3>
                <p className="text-gray-700">
                  We've successfully processed over $15 million in insurance claims for Amarillo homeowners. We handle all documentation, meet with adjusters, and advocate for maximum coverage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">✅ 24/7 Emergency Service</h3>
                <p className="text-gray-700">
                  When storms strike Amarillo, we respond. Our emergency crews are available 24/7 for urgent tarping, leak repairs, and damage mitigation with typical response times of 2-4 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">✅ Premium Materials Only</h3>
                <p className="text-gray-700">
                  We exclusively install Class 4 impact-resistant shingles, commercial-grade TPO/PVC membranes, and standing seam metal from leading manufacturers—all backed by comprehensive warranties.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-brand-brown mb-4">
                Ready to work with Amarillo's most trusted roofers?
              </p>
              <a href="/contact/" className="btn-primary text-lg inline-block">
                Schedule Your Free Inspection
              </a>
            </div>
          </section>

          {/* Pricing & Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Roofing Costs & Timeline in Amarillo</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">💰 Typical Pricing</h3>
                <p className="text-gray-700 mb-4">
                  Amarillo roofing costs vary based on size, pitch, materials, and complexity:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Residential Replacements:</strong> $8,000-$25,000 for most homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Class 4 Shingles:</strong> $350-$550 per square installed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Metal Roofing:</strong> $800-$1,400 per square installed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Insurance Claims:</strong> Most pay only deductible ($1,000-$2,500)</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 italic">
                  Note: Hail damage repairs are typically fully covered by insurance minus your deductible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">⏱️ Project Timeline</h3>
                <p className="text-gray-700 mb-4">
                  Most Amarillo roofing projects follow this timeline:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Free Inspection:</strong> Scheduled within 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Insurance Claims:</strong> 2-4 weeks for approval process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Residential Installation:</strong> 1-3 days for most homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Commercial Projects:</strong> 3-7 days depending on size</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 italic">
                  Weather conditions and material availability may affect timelines.
                </p>
              </div>
            </div>
          </section>

          {/* Emergency CTA */}
          <section className="mb-12 bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
            <div className="flex gap-6 items-center">
              <div className="text-6xl">🚨</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-red-800 mb-3">Need Emergency Roofing Service?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Storm damage doesn't wait for business hours. Our emergency crews are available 24/7 throughout Amarillo and the Texas Panhandle for urgent tarping, leak repairs, and damage mitigation.
                </p>
                <a href="tel:8066226041" className="btn-primary-hero bg-red-600 hover:bg-red-700 text-white text-lg inline-block">
                  📞 Emergency: (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section className="mt-12 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Amarillo's Best Roofers?</h2>
          <p className="text-xl mb-4">
            Free Inspections • Insurance Claims Assistance • Expert Installation
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact 5 Star Commercial Roofing for expert roofing service in Amarillo and surrounding areas. We provide free inspections, work directly with insurance companies, and deliver quality craftsmanship backed by comprehensive warranties.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg px-8 py-4">📞 Call (806) 622-6041
            </a>
            <a href="/contact/" className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg px-8 py-4">
              Request Free Inspection
            </a>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Serving Amarillo, Lubbock, Midland, Odessa & the Texas Panhandle • Licensed & Insured • 10+ Years Experience
          </p>
        </section>
      </div>
    </>
  );
}
