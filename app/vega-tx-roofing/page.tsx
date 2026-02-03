import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Roofing in Vega, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Vega, Texas Panhandle. 35 miles west of Amarillo on I-40. Hail damage repair, residential & commercial roofing, metal roofs.',
};

export default function VegaRoofingPage() {
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
                      "name": "Vega",
                      "url": "/vega-tx-roofing/"
              }
      ]} />


      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Roofing Services in Vega, Texas
            </h1>
            <p className="hero-subtitle">
              Proudly Serving Vega from Our Amarillo Location - 35 Miles East on I-40
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
                Your Trusted Roofing Partner in Vega, TX
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                From our Amarillo headquarters, 5 Star Commercial Roofing serves Vega, Texas - the
                "Crossroads of the Nation" where Route 66 meets the modern I-40 corridor. This historic
                Oldham County community of 900 residents sits 35 miles west of Amarillo, and we're proud
                to provide fast, professional roofing services to this classic Texas town.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vega's location on the high plains of West Texas means extreme weather exposure. With no
                natural windbreaks and sitting at nearly 4,000 feet elevation, your roof faces severe hail,
                powerful winds, dramatic temperature swings, and intense sunshine. We specialize in roofing
                systems engineered for these harsh conditions.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Vega */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Vega Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🛣️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Direct I-40 Access</h3>
                <p className="text-gray-600">
                  Just 35 miles from Vega via I-40. Straight shot from Amarillo with no backroads
                  required. We can reach you in about 35 minutes for service calls.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Historic Town Experience</h3>
                <p className="text-gray-600">
                  We understand Vega's unique character as a Route 66 town and respect the
                  architectural heritage while providing modern roofing solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">High Plains Specialists</h3>
                <p className="text-gray-600">
                  Vega's exposed high plains location requires specialized roofing. We use materials
                  rated for extreme wind, hail, and temperature conditions.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Services */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services for Vega, TX</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage roof repair services for Vega TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Vega sits squarely in Hail Alley on the exposed high plains. With no natural
                      protection from severe thunderstorms, the area regularly experiences large hail
                      events. From historic downtown buildings to homes along US-385, we've helped
                      countless Vega property owners recover from hail damage.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Comprehensive hail services:</strong> Free post-storm inspections, detailed
                      damage documentation with drone photography, granule loss analysis, impact point
                      mapping for insurance adjusters, full claim assistance, and complete roof replacement
                      when necessary. We handle everything.
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
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services for Vega TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a historic home near the old Route 66 downtown, a ranch property
                      on the outskirts, or a residence near Vega ISD, we provide complete residential
                      roofing services. We work with materials appropriate for Vega's extreme climate
                      while respecting the town's architectural character.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Residential services:</strong> Complete roof replacement, Class 4
                      impact-resistant shingle installation, architectural shingle systems, wind-rated
                      materials for high-wind zones, roof repair and maintenance, attic ventilation
                      solutions, and comprehensive material warranties.
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

            {/* Metal Roofing */}
            <FadeIn delay={0.3}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/cover-background-roofing-sunset-1024x683.jpg" alt="Metal roof installation for Vega TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roof Installation
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is ideal for Vega's extreme weather conditions. It withstands
                      high winds that would lift shingles, resists hail impact better than any other
                      material, handles temperature extremes without degrading, and can last 50+ years
                      with minimal maintenance. Popular for both residential and commercial properties.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal roofing options:</strong> Standing seam metal roofs (residential and
                      commercial), corrugated metal panels for shops and barns, stone-coated steel shingles,
                      R-panel systems, U-panel systems, and custom metal fabrication. Class 4 hail rating
                      available.
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

            {/* Commercial */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/CommercialRoofing.jpeg" alt="Commercial roofing services for Vega TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Vega's business district along I-40 and historic Route 66 includes motels,
                      restaurants, travel stops, and local businesses that need reliable commercial
                      roofing. We specialize in flat roof systems, metal buildings, and low-slope
                      roofs common in commercial construction.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial services:</strong> TPO single-ply membrane roofing, EPDM rubber
                      roofing systems, modified bitumen installation, metal roof systems, roof coating
                      for extended life, preventive maintenance programs, and 24/7 emergency repair service.
                      Minimal business disruption.
                    </p>
                    <a
                      href="/commercial-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Commercial Services →
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
                    <img src="/images/roof-inspection-texas.jpg" alt="Free roof inspections for Vega TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Given Vega's frequent severe weather, regular roof inspections are critical.
                      Our free, no-obligation inspections can detect hail damage, wind damage, and
                      wear before they become expensive problems. We'll provide an honest assessment
                      of your roof's condition.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Complete inspection includes:</strong> Exterior roof surface examination,
                      shingle condition analysis, wind damage assessment, flashing and penetration check,
                      ventilation evaluation, gutter condition, detailed photo documentation, and written
                      recommendations. Always free.
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
                    <img src="/images/storm-damage-roof-repair.jpg" alt="24/7 emergency roofing repairs for Vega TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      24/7 Emergency Repairs
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Storm damage requires immediate response.</strong> When severe weather
                      hits Vega, we provide 24/7 emergency roofing services. Emergency tarping to
                      prevent water damage, urgent leak repairs, temporary storm damage mitigation,
                      and same-day response available.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}anytime for immediate emergency assistance. We'll head west on I-40 immediately.
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

        {/* Vega-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges Specific to Vega, TX
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Severe Hail & Supercell Thunderstorms</h3>
                <p className="text-gray-700">
                  Vega sits at the crossroads of severe weather in Hail Alley. The high plains location
                  with no terrain protection means thunderstorms arrive with full intensity. Baseball to
                  softball-sized hail is documented almost annually. Impact-resistant Class 4 shingles
                  or metal roofing are essential for long-term protection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 Extreme High Winds</h3>
                <p className="text-gray-700">
                  At nearly 4,000 feet elevation on the exposed high plains, Vega experiences some of
                  the strongest sustained winds in Texas. 40-50 mph sustained winds are common, with
                  gusts exceeding 80 mph during severe weather. Standard roof installation simply won't
                  hold - we use high-wind rated materials and enhanced fastening systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Dramatic Temperature Extremes</h3>
                <p className="text-gray-700">
                  Vega's high elevation and continental climate create extreme temperature swings.
                  Summer heat exceeds 100°F while winter nights drop well below zero - often a 100+
                  degree annual range. This constant expansion and contraction stresses roofing materials.
                  We use systems engineered for thermal cycling with proper ventilation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">☀️ Intense High-Altitude Sun</h3>
                <p className="text-gray-700">
                  At 4,000 feet elevation with minimal humidity and over 270 days of sunshine annually,
                  UV radiation is intense and relentless. Standard asphalt shingles degrade quickly without
                  UV inhibitors. We recommend UV-stabilized materials or reflective metal roofing for
                  maximum lifespan and energy efficiency.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Service Coverage */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Complete Coverage Throughout Vega</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We serve all of Vega and surrounding Oldham County areas, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-8">
                <ul className="space-y-2">
                  <li>✓ Historic Route 66 corridor</li>
                  <li>✓ I-40 frontage properties</li>
                  <li>✓ Downtown Vega businesses</li>
                  <li>✓ US Highway 385 corridor</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Vega ISD area</li>
                  <li>✓ Residential neighborhoods</li>
                  <li>✓ Ranch and farm properties</li>
                  <li>✓ Oldham County rural areas</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4 text-center">
                  Fast Service from Amarillo
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  <strong>5 Star Commercial Roofing</strong><br />
                  2909 S Western St, Amarillo, TX 79109<br />
                  35 miles east of Vega via I-40 (35-minute drive)
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
              More Roofing Services Near Vega
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Amarillo Roofing Services</h3>
                <p className="text-gray-600 text-sm">Complete roofing services in Amarillo (35 miles east)</p>
              </a>
              <a href="/wildorado-tx-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Wildorado Roofing</h3>
                <p className="text-gray-600 text-sm">Roofing services in Wildorado (20 miles east)</p>
              </a>
              <a href="/hail-damage-roof-repair-amarillo-texas/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
                <p className="text-gray-600 text-sm">Expert hail damage assessment and insurance claims</p>
              </a>
              <a href="/metal-roofing-amarillo-texas/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Metal Roofing Systems</h3>
                <p className="text-gray-600 text-sm">Extreme-weather metal roofing solutions</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Vega Property Today</h2>
            <p className="cta-text">
              From our Amarillo location, we're proud to serve the historic Vega community with
              honest, professional roofing services built for high plains weather. Whether you need
              a free inspection, hail damage assessment, or emergency repairs, we're just 35 minutes
              away on I-40.
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
              <a href="/wildorado-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Wildorado
              </a>
              <span className="text-gray-400">•</span>
              <a href="/bushland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Bushland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/canyon-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Canyon
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
            "@id": "https://5starroofingpros.com/vega-tx-roofing/",
            "name": "5 Star Commercial Roofing - Serving Vega, TX",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Vega, Texas from our Amarillo location. Expert hail damage repair, residential and commercial roofing services.",
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
                "name": "Vega",
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
                    "description": "Expert hail damage repair for Vega properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roofing services in Vega"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Durable metal roofing for high plains weather"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Commercial roofing for I-40 corridor businesses"
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
