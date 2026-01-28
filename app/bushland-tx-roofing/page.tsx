import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Roofing in Bushland, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Bushland, Texas Panhandle. Just 10 miles west of Amarillo. Hail damage repair, residential & commercial roofing, metal roofs.',
};

export default function BushlandRoofingPage() {
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
                      "name": "Bushland",
                      "url": "/bushland-tx-roofing/"
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
              Professional Roofing Services in Bushland, Texas
            </h1>
            <p className="hero-subtitle">
              Proudly Serving Bushland from Our Amarillo Location - Just 10 Miles Away
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
                Your Trusted Roofing Partner in Bushland, TX
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Located just 10 miles west of Bushland on Interstate 40, 5 Star Commercial Roofing provides
                fast, professional roofing services to this growing community in Potter County. Whether you're
                a homeowner along FM 2381 or a business owner serving the agricultural community, we understand
                the unique roofing challenges faced by Bushland residents.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bushland's rural location means your roof faces intense exposure to West Texas weather: severe
                hail storms, high winds sweeping across open plains, extreme temperature swings, and relentless
                UV radiation. We specialize in roofing systems built to withstand these harsh conditions.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Bushland */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Bushland Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Local & Close</h3>
                <p className="text-gray-600">
                  Only 10 miles from Bushland on I-40. We can typically reach you within 20 minutes
                  for emergencies or scheduled appointments.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌾</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Rural Expertise</h3>
                <p className="text-gray-600">
                  We understand the unique needs of rural properties including metal buildings,
                  barns, and agricultural structures common in Bushland.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Response</h3>
                <p className="text-gray-600">
                  Bushland's exposed location means severe weather hits hard. We provide emergency
                  tarping and rapid hail damage assessment.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Services */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services for Bushland, TX</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage repair services for Bushland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Bushland sits in the heart of "Hail Alley" with minimal protection from severe
                      thunderstorms rolling across the plains. Baseball-sized hail is common from March
                      through September, and even small hail can devastate asphalt shingles.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Our hail damage services:</strong> Free roof inspections after storms,
                      comprehensive photo documentation for insurance claims, granule loss assessment,
                      and complete roof replacement when needed. We work with all major insurance carriers.
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
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services for Bushland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      From ranch homes along County Road 34 to newer developments near Bushland ISD,
                      we provide complete residential roofing services. We understand the importance
                      of durable roofing systems for rural properties where response times can be critical.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Services include:</strong> Complete roof replacement, asphalt shingle
                      installation, impact-resistant roofing systems, roof repair, ventilation upgrades,
                      and premium warranties. All materials rated for high-wind zones.
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
                    <img src="/images/cover-background-roofing-sunset-1024x683.jpg" alt="Metal roof systems for Bushland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roof Systems
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is an excellent choice for Bushland properties. It withstands high
                      winds better than shingles, handles hail impact superbly, and can last 50+ years
                      with minimal maintenance - perfect for rural properties where longevity matters.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal options:</strong> Standing seam metal roofs, corrugated panels for
                      barns and shops, stone-coated steel shingles, and commercial metal roofing systems.
                      Energy-efficient with Class 4 hail ratings available.
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

            {/* Commercial/Agricultural */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/CommercialRoofing.jpeg" alt="Commercial and agricultural roofing for Bushland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial & Agricultural
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Bushland's economy is built on agriculture and related businesses. We specialize
                      in commercial roofing for grain elevators, feed stores, equipment dealerships,
                      metal buildings, barns, shops, and other agricultural structures.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial services:</strong> TPO and EPDM flat roofing, metal building
                      re-roofing, roof coating systems, preventive maintenance programs, and emergency
                      repairs. We minimize disruption to your operations.
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

            {/* Emergency Services */}
            <FadeIn delay={0.5}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/shutterstock_162724754.jpg" alt="24/7 emergency roofing service for Bushland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      24/7 Emergency Service
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Storm damage can't wait, especially in rural areas.</strong> We provide
                      24/7 emergency roofing services for Bushland residents. From emergency tarping
                      after hail storms to urgent leak repairs, we're just 10 miles away and ready to respond.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}anytime, day or night, for immediate emergency assistance.
                    </p>
                    <a
                      href="/emergency-roof-repair-amarillo-texas/"
                      className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-2"
                    >
                      Emergency Services Information →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Bushland */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges Specific to Bushland, TX
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Severe Storm Exposure</h3>
                <p className="text-gray-700">
                  Bushland's location west of Amarillo along I-40 means minimal protection from severe
                  weather systems. With no urban heat island effect and surrounded by open plains, storms
                  hit with full force. Hail, high winds, and tornadoes are annual threats requiring
                  impact-resistant roofing materials.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 Constant High Winds</h3>
                <p className="text-gray-700">
                  The Texas Panhandle is one of America's windiest regions, and Bushland gets the full
                  brunt. Sustained 30-40 mph winds and 60+ mph gusts are common. Proper roof edge securement,
                  high-wind shingles, and reinforced flashing are critical for long-term performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Temperature Extremes</h3>
                <p className="text-gray-700">
                  Summer temperatures regularly exceed 100°F while winter can bring sub-zero cold. This
                  100+ degree temperature range causes expansion and contraction that stresses roofing
                  materials. We use materials engineered for these extremes with proper ventilation to
                  extend roof life.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🏜️ Rural Response Times</h3>
                <p className="text-gray-700">
                  As a rural community, Bushland residents need roofing contractors who can respond quickly
                  when problems arise. Our Amarillo location - just 10 miles east via I-40 - means we can
                  typically arrive within 20-30 minutes for emergencies, faster than metro-only contractors.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Local Coverage */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Complete Coverage Throughout Bushland</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We serve all of Bushland and surrounding Potter County areas, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-8">
                <ul className="space-y-2">
                  <li>✓ Bushland ISD area</li>
                  <li>✓ Properties along FM 2381</li>
                  <li>✓ County Road 34 corridor</li>
                  <li>✓ I-40 frontage properties</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Ranch and farm properties</li>
                  <li>✓ Residential developments</li>
                  <li>✓ Commercial buildings</li>
                  <li>✓ Agricultural structures</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4 text-center">
                  Fast Service from Our Amarillo Office
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  <strong>5 Star Commercial Roofing</strong><br />
                  2909 S Western St, Amarillo, TX 79109<br />
                  Only 10 miles east of Bushland via I-40 (15-minute drive)
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

        {/* Related Pages */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              More Roofing Services Near Bushland
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Amarillo Roofing Services</h3>
                <p className="text-gray-600 text-sm">Complete roofing services in Amarillo (10 miles east)</p>
              </a>
              <a href="/wildorado-tx-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Wildorado Roofing</h3>
                <p className="text-gray-600 text-sm">Roofing services in Wildorado (5 miles west)</p>
              </a>
              <a href="/hail-damage-roof-repair-amarillo-texas/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
                <p className="text-gray-600 text-sm">Expert hail damage assessment and insurance claims</p>
              </a>
              <a href="/metal-roofing-amarillo-texas/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Metal Roofing Systems</h3>
                <p className="text-gray-600 text-sm">Durable metal roofs for West Texas weather</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Bushland Property Today</h2>
            <p className="cta-text">
              From our Amarillo location, we're proud to serve Bushland with fast, professional
              roofing services. Whether you need a free inspection, hail damage assessment, or
              emergency repairs, we're just 10 miles away.
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
              <a href="/wildorado-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Wildorado
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
            "@id": "https://5starroofingpros.com/bushland-tx-roofing/",
            "name": "5 Star Commercial Roofing - Serving Bushland, TX",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Bushland, Texas from our Amarillo location. Expert hail damage repair, residential and commercial roofing services.",
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
                "name": "Bushland",
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
                    "description": "Expert hail damage repair for Bushland properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roofing services in Bushland"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Durable metal roofing systems for rural properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Agricultural and commercial roofing services"
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
