import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Roofing in Claude, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Claude, Texas Panhandle. Just 25 miles east of Amarillo on US-287. Hail damage repair, residential & commercial roofing.',
};

export default function ClaudeRoofingPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Service Areas",
                      "url": "/service-areas/"
              },
              {
                      "name": "Claude",
                      "url": "/claude-tx-roofing/"
              }
      ]} />


      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-morton-41-1280w.webp)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Roofing Services in Claude, Texas
            </h1>
            <p className="hero-subtitle">
              Proudly Serving Claude from Our Amarillo Location - 25 Miles West on US-287
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary text-lg px-8 py-4">
                Get Free Inspection
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom">
        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Your Trusted Roofing Partner in Claude, TX
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                From our Amarillo headquarters at 2909 S Western St, 5 Star Commercial Roofing provides
                comprehensive roofing services to Claude, Texas - a charming community of 1,200 residents
                along US Highway 287 in Armstrong County. Just 25 miles east of Amarillo, we're close
                enough for fast service while understanding the unique character of rural Texas communities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Claude sits at the gateway to Palo Duro Canyon and faces the full spectrum of Texas Panhandle
                weather: severe hail storms, powerful straight-line winds, dramatic temperature swings, and
                intense sunshine. Your roof is your first line of defense, and we're here to keep it strong.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Claude */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Claude Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🛣️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Easy Access via US-287</h3>
                <p className="text-gray-600">
                  Just 25 miles from Claude on US Highway 287. We make the drive regularly and can
                  reach you within 30 minutes for appointments or emergencies.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Small Town Values</h3>
                <p className="text-gray-600">
                  We understand Claude's tight-knit community. Our reputation is built on honesty,
                  quality work, and treating customers like neighbors.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Specialists</h3>
                <p className="text-gray-600">
                  Armstrong County sees frequent severe weather. We specialize in hail damage detection,
                  insurance claim documentation, and rapid storm response.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Services */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services for Claude, TX</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage repair services for Claude TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Claude is no stranger to severe hail storms. Located in Hail Alley with minimal
                      storm protection, the area experiences frequent damaging hail events. From the
                      historic downtown to homes along FM 1260, we've helped countless Claude residents
                      recover from hail damage.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Our comprehensive service:</strong> Free post-storm inspections, detailed
                      photo documentation showing hail impact points, granule loss analysis, insurance
                      claim assistance, and complete roof replacement when necessary. We handle the
                      paperwork so you don't have to.
                    </p>
                    <a
                      href="/hail-damage-roof-repair-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Learn About Hail Damage Repair →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Residential */}
            <FadeIn delay={0.2}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services for Claude TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a historic home near Claude's downtown square, a ranch property
                      along Tule Creek, or a newer home by Claude ISD, we provide complete residential
                      roofing services tailored to your needs. We understand the mix of architectural
                      styles in Claude and work with materials that match your home's character.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Residential services:</strong> Complete roof replacement, asphalt shingle
                      installation (including impact-resistant options), architectural shingles, roof
                      repair and maintenance, attic ventilation upgrades, and comprehensive warranties.
                    </p>
                    <a
                      href="/residential-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Explore Residential Roofing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Commercial */}
            <FadeIn delay={0.3}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/CommercialRoofing.jpeg" alt="Commercial roofing services for Claude TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Claude's business community - from Main Street shops to agricultural facilities -
                      relies on durable commercial roofing. We specialize in flat roof systems, metal
                      buildings, and low-slope roofs common in small-town Texas commercial construction.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial expertise:</strong> TPO single-ply roofing, EPDM rubber roofing,
                      modified bitumen systems, metal roof installation and repair, roof coating for
                      extending roof life, preventive maintenance plans, and 24/7 emergency service.
                    </p>
                    <a
                      href="/commercial-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Commercial Roofing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Metal Roofing */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/cover-background-roofing-sunset-1024x683.jpg" alt="Metal roofing systems for Claude TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roofing Systems
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is increasingly popular in Claude for good reason. It handles West
                      Texas weather exceptionally well - high winds don't lift it, hail typically doesn't
                      penetrate it, and it can last 50+ years with minimal maintenance. Perfect for both
                      homes and agricultural buildings.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal roofing options:</strong> Standing seam metal roofs, corrugated
                      metal panels, stone-coated steel shingles, R-panel and U-panel systems, and
                      custom metal fabrication. Energy-efficient colors available.
                    </p>
                    <a
                      href="/metal-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Discover Metal Roofing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Free Inspections */}
            <FadeIn delay={0.5}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/roof-inspection-texas.jpg" alt="Free roof inspections for Claude TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Don't wait for a leak to discover roof damage. Our free, no-obligation roof
                      inspections can catch problems early - especially after Armstrong County's
                      frequent hail storms. We'll assess your roof's condition and provide an honest
                      evaluation.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Inspection includes:</strong> Complete exterior roof assessment, shingle
                      condition analysis, flashing inspection, ventilation check, gutter evaluation,
                      detailed photo report, and written recommendations. 100% free with no pressure.
                    </p>
                    <a
                      href="/roof-inspections-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Schedule Free Inspection →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Emergency Services */}
            <FadeIn delay={0.6}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/storm-damage-roof-repair.jpg" alt="24/7 emergency roofing service for Claude TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      24/7 Emergency Service
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Roofing emergencies don't keep business hours.</strong> Whether it's
                      2am after a hailstorm or Sunday afternoon with water pouring in, we provide
                      24/7 emergency roofing services to Claude. Emergency tarping, leak repairs,
                      and storm damage mitigation available anytime.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}now for immediate emergency assistance. We'll be on the road to Claude within minutes.
                    </p>
                    <a
                      href="/emergency-roof-repair-amarillo-texas/"
                      className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-2"
                    >
                      24/7 Emergency Services →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Claude's Roofing Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges Specific to Claude, TX
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Severe Thunderstorms & Hail</h3>
                <p className="text-gray-700">
                  Claude sits in the heart of Hail Alley where warm, moist air from the Gulf collides
                  with cool, dry air from the Rockies. This creates explosive thunderstorms from March
                  through September, often producing baseball-sized hail. Impact-resistant shingles are
                  strongly recommended for all Claude properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 Powerful Straight-Line Winds</h3>
                <p className="text-gray-700">
                  Armstrong County's open terrain allows wind to build tremendous speed. Sustained winds
                  of 40+ mph are common, with gusts exceeding 70 mph during severe weather. Proper roof
                  securement with high-wind rated materials is critical - standard installation methods
                  simply won't hold up.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Extreme Temperature Variation</h3>
                <p className="text-gray-700">
                  Claude experiences some of Texas' most dramatic temperature swings. Summer days regularly
                  hit 100°F while winter nights can drop below zero. This 100+ degree temperature range
                  causes constant expansion and contraction, stressing shingles, flashing, and fasteners.
                  We use materials engineered for these extremes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">☀️ Intense UV Radiation</h3>
                <p className="text-gray-700">
                  At nearly 3,000 feet elevation with over 265 days of sunshine annually, Claude roofs
                  face relentless UV exposure that degrades organic materials. Asphalt shingles without
                  UV inhibitors can fail prematurely. We recommend UV-stabilized shingles or metal roofing
                  for maximum longevity.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Areas We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Complete Coverage Throughout Claude</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We serve all of Claude and surrounding Armstrong County areas, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-8">
                <ul className="space-y-2">
                  <li>✓ Downtown Claude</li>
                  <li>✓ Claude ISD area</li>
                  <li>✓ US Highway 287 corridor</li>
                  <li>✓ FM 1260 properties</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Tule Creek area</li>
                  <li>✓ Rural ranch properties</li>
                  <li>✓ Commercial Main Street</li>
                  <li>✓ Surrounding Armstrong County</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4 text-center">
                  Fast Service from Amarillo
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  <strong>5 Star Commercial Roofing</strong><br />
                  2909 S Western St, Amarillo, TX 79109<br />
                  25 miles west of Claude via US Highway 287 (30-minute drive)
                </p>
                <p className="text-gray-700 text-center">
                  <strong>Call anytime:</strong>{" "}
                  <a href="tel:8066226041" className="text-brand-gold font-bold hover:text-brand-gold-vibrant">
                    (806) 622-6041
                  </a>
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Related Services */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              More Roofing Services Near Claude
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Amarillo Roofing Services</h3>
                <p className="text-gray-600 text-sm">Complete roofing services in Amarillo (25 miles west)</p>
              </a>
              <a href="/canyon-texas-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Canyon Roofing</h3>
                <p className="text-gray-600 text-sm">Roofing services in Canyon near Palo Duro Canyon</p>
              </a>
              <a href="/hail-damage-roof-repair-amarillo-texas/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
                <p className="text-gray-600 text-sm">Expert hail damage assessment and insurance claims</p>
              </a>
              <a href="/residential-roofing-amarillo-texas/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Residential Roofing</h3>
                <p className="text-gray-600 text-sm">Complete home roofing services</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Claude Property Today</h2>
            <p className="cta-text">
              From our Amarillo location, we're proud to serve the Claude community with honest,
              professional roofing services. Whether you need a free inspection, hail damage
              assessment, or emergency repairs, we're just a quick drive east on US-287.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Service Area Links */}
        <FadeIn>
          <section className="section pb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Serving the Entire Texas Panhandle
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Amarillo
              </a>
              <span className="text-gray-400">•</span>
              <a href="/canyon-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Canyon
              </a>
              <span className="text-gray-400">•</span>
              <a href="/bushland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Bushland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/vega-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Vega
              </a>
              <span className="text-gray-400">•</span>
              <a href="/hereford-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Hereford
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                View All Areas
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/claude-tx-roofing/",
            "name": "5 Star Commercial Roofing - Serving Claude, TX",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Claude, Texas from our Amarillo location. Expert hail damage repair, residential and commercial roofing services.",
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
              "latitude": "35.1859",
              "longitude": "-101.8313"
            },
            "telephone": "+18066226041",
            "email": "admin@5starroofingpros.com",
            "url": "https://5starroofingpros.com",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "City",
                "name": "Claude",
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
                    "name": "Hail Damage Roof Repair",
                    "description": "Expert hail damage repair for Claude properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roofing services in Claude"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Commercial and agricultural roofing services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Durable metal roofing systems"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
