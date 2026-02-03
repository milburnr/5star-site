import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Odessa TX | 5 Star Roofing',
  description: "Expert commercial roofing in Odessa, TX. TPO, EPDM, flat roof systems for Permian Basin businesses. Free estimates. Call (806) 622-6041.",
};

export default function CommercialOdessaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Odessa", url: "/commercial-roofing-odessa-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-odessa-texas/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Commercial Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.8457, "longitude": -102.3676 },
        "url": "https://5starroofingpros.com/commercial-roofing-odessa-texas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert commercial roofing services in Odessa, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Commercial Roofing in Odessa, TX</h1>
            <p className="hero-subtitle">Flat Roof Systems for Permian Basin Businesses</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Estimate</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Lead Form - Above the Fold */}
      <div className="container-custom">
        <FadeIn>
          <section id="lead-form" className="section -mt-16 relative z-20">
            <div className="max-w-2xl mx-auto">
              <HighLevelForm
                title="Get Your Free Roof Inspection"
                subtitle="Fill out the form below and we'll contact you within 24 hours. No obligation."
              />
            </div>
          </section>
        </FadeIn>
      </div>


      <div className="container-custom py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              Odessa's commercial buildings face extreme Permian Basin weather—intense heat, severe hail, high winds, and industrial exposure. From warehouses in West Odessa to office buildings downtown, your facility needs a roofing system built to last.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in commercial flat roof systems throughout Odessa. TPO, EPDM, PVC, and modified bitumen installations with minimal disruption to your operations.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Commercial Roofing Systems</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Roofing</h3>
                <p className="text-gray-700 mb-4">Thermoplastic Polyolefin (TPO) is ideal for Odessa's climate. White reflective membrane reduces cooling costs, heat-welded seams provide superior waterproofing, and it handles Permian Basin extremes.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Energy-efficient white membrane</li>
                  <li>✓ Heat-welded seams (strongest)</li>
                  <li>✓ 20-30 year warranties</li>
                  <li>✓ Excellent heat resistance</li>
                  <li>✓ Low maintenance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚫</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 mb-4">Ethylene Propylene Diene Monomer (EPDM) is proven and cost-effective. Durable rubber membrane withstands Odessa weather, easy to repair, and excellent for large commercial buildings.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Proven 50+ year track record</li>
                  <li>✓ Excellent weather resistance</li>
                  <li>✓ Cost-effective for large buildings</li>
                  <li>✓ Easy maintenance and repair</li>
                  <li>✓ Fire resistant</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔵</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">PVC Membrane Systems</h3>
                <p className="text-gray-700 mb-4">Polyvinyl Chloride (PVC) offers superior chemical resistance—critical for industrial Odessa facilities. Premium durability and excellent warranties make it ideal for demanding applications.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Chemical resistant (oil/gas)</li>
                  <li>✓ Premium durability</li>
                  <li>✓ Heat-welded seams</li>
                  <li>✓ 25-30 year warranties</li>
                  <li>✓ Low maintenance costs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Repairs & Maintenance</h3>
                <p className="text-gray-700 mb-4">Preventive maintenance extends roof life and prevents costly emergency repairs. We offer maintenance programs and expert repair for all commercial roof types.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Membrane patching</li>
                  <li>✓ Seam repairs</li>
                  <li>✓ Preventive maintenance plans</li>
                  <li>✓ 24/7 emergency service</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Odessa Businesses Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Specialists</h3>
                <p className="text-gray-700">Over 10 years serving Odessa's commercial sector. We understand industrial, warehouse, retail, and office building needs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Minimal Disruption</h3>
                <p className="text-gray-700">We work around your business hours and schedule installations to minimize operational impact. Your business keeps running.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Premium Warranties</h3>
                <p className="text-gray-700">Manufacturer warranties up to 30 years, plus our workmanship guarantee. Your investment is protected.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Challenges in Odessa</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🌡️ Extreme Heat & UV</h3>
                <p className="text-gray-700">Odessa commercial roofs face 100°F+ temperatures for extended periods. We install reflective membranes that reduce heat absorption and lower cooling costs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">⛈️ Hail & Storm Damage</h3>
                <p className="text-gray-700">Permian Basin hail can destroy flat roofs. We use impact-resistant systems and offer 24/7 emergency repairs to protect your facility and inventory.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🏭 Industrial Environment</h3>
                <p className="text-gray-700">Oil & gas operations and industrial facilities require chemical-resistant roofing. Our PVC and specialized systems handle harsh environments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">💨 Ponding Water</h3>
                <p className="text-gray-700">Flat roofs can develop ponding that leads to leaks and premature failure. Proper installation and drainage systems prevent these issues.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Service Area Across West Texas</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                While we specialize in commercial roofing throughout Odessa and the Permian Basin, 5 Star Commercial Roofing proudly serves the entire Texas Panhandle and West Texas region. Our team brings the same expertise and quality workmanship to businesses in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Midland</a>, <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">Lubbock</a>, and surrounding communities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From the oil fields of the Permian Basin to the agricultural centers of the Texas Panhandle, we understand the unique challenges that commercial buildings face in this region. Our experience with <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">hail damage repairs</a>, extreme weather conditions, and industrial environments makes us the trusted choice for businesses throughout West Texas.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Commercial Roofing Pricing in Odessa</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg"><strong>Average commercial roofing costs (per square foot):</strong></p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>TPO Roofing:</strong> $6-$9 per sq ft installed</li>
                <li>• <strong>EPDM Roofing:</strong> $5-$8 per sq ft installed</li>
                <li>• <strong>PVC Roofing:</strong> $8-$12 per sq ft installed</li>
                <li>• <strong>Modified Bitumen:</strong> $5-$9 per sq ft installed</li>
              </ul>
              <p className="mt-4">Factors affecting cost: building size, roof accessibility, existing conditions, insulation requirements, warranty level, and membrane thickness.</p>
              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Commercial Estimates</p>
                <p>We provide detailed proposals for all commercial roofing projects in Odessa. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Commercial Roofing Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">1</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Initial Inspection</h3>
                <p className="text-gray-700">We conduct a thorough assessment of your commercial roof, identifying any existing issues and evaluating the best solution for your facility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">2</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Detailed Proposal</h3>
                <p className="text-gray-700">You'll receive a comprehensive estimate outlining materials, labor, timeline, and warranty information. No hidden costs or surprises.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">3</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Professional Installation</h3>
                <p className="text-gray-700">Our certified crews install your new roof system with minimal disruption to your business operations, working efficiently and safely.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">4</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Guarantee</h3>
                <p className="text-gray-700">We stand behind our work with comprehensive warranties and ongoing support for maintenance and repairs throughout your roof's lifetime.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance & Financing Options</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700">
                We understand that commercial roofing is a significant investment. That's why we work with all major insurance companies to help you navigate storm damage claims and ensure you receive fair compensation for necessary repairs or replacement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl text-brand-brown mb-3">Insurance Claim Assistance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Free roof inspections for storm damage</li>
                    <li>✓ Detailed documentation for claims</li>
                    <li>✓ Direct communication with adjusters</li>
                    <li>✓ Maximum coverage advocacy</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl text-brand-brown mb-3">Flexible Payment Options</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Competitive financing available</li>
                    <li>✓ Multiple payment plans</li>
                    <li>✓ Net-30 terms for qualified businesses</li>
                    <li>✓ No upfront deposits in many cases</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Odessa Business</h2>
            <p className="cta-text">Expert commercial roofing for the Permian Basin. Free estimates, quality materials, and installations that last decades.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Request Estimate</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Odessa Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/odessa-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Odessa Services</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/emergency-roof-repair-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Emergency Repairs</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing Info</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Commercial Roofing",
        "provider": {
          "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
          "name": "5 Star Commercial Roofing",
          "telephone": "+18066226041",
          "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2909 S Western St",
            "addressLocality": "Amarillo",
            "addressRegion": "TX",
            "postalCode": "79109",
            "addressCountry": "US"
          },
          "url": "https://www.5starcommercialroofing.com",
          "priceRange": "$$$"
        },
        "areaServed": [
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
            "name": "Lubbock",
            "containedInPlace": {
              "@type": "State",
              "name": "Texas"
            }
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Commercial Roofing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "TPO Roofing Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "EPDM Rubber Roofing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PVC Membrane Systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Roof Repairs"
              }
            }
          ]
        }
      })}}/>
    </div>
  );
}
