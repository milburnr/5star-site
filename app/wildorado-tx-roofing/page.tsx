import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/wildorado-tx-roofing/' },
  title: 'Roofing in Wildorado, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Wildorado, Texas Panhandle. Just 15 miles west of Amarillo on I-40. Hail damage repair, residential & commercial roofing, metal roofs.',
};

export default function WildoradoRoofingPage() {
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
                      "name": "Wildorado",
                      "url": "/wildorado-tx-roofing/"
              }
      ]} />


      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-39-1280w.webp)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Roofing Services in Wildorado, Texas
            </h1>
            <p className="hero-subtitle">
              Proudly Serving Wildorado from Our Amarillo Location - Just 15 Miles Away
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
                Your Trusted Roofing Partner in Wildorado, TX
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                From our Amarillo headquarters at 2909 S Western St, 5 Star Commercial Roofing provides
                fast, professional roofing services to Wildorado, Texas - a small Oldham County community
                just 15 miles west of Amarillo on Interstate 40. With a population of around 200 residents,
                Wildorado is a tight-knit rural community, and we're proud to serve your roofing needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wildorado's location on the high plains west of Amarillo means maximum exposure to West
                Texas weather: severe hail storms rolling unobstructed across the plains, constant high
                winds, extreme temperature swings from summer to winter, and intense sunshine at nearly
                4,000 feet elevation. Your roof needs to be built to withstand it all.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Wildorado */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Wildorado Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Extremely Close</h3>
                <p className="text-gray-600">
                  Only 15 miles from Wildorado via I-40. We can reach you in about 15-20 minutes
                  for emergencies or scheduled service - faster than most metro-based contractors.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤠</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Rural Community Focus</h3>
                <p className="text-gray-600">
                  We understand small rural communities like Wildorado. Honest pricing, quality work,
                  and treating every customer like a neighbor - not a number.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌾</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Ranch & Farm Experience</h3>
                <p className="text-gray-600">
                  From homes to barns, shops to grain storage - we handle all types of rural roofing
                  including agricultural structures common around Wildorado.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Services */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services for Wildorado, TX</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-28-1280w.jpg" alt="Hail damage repair services for Wildorado TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Wildorado sits in the heart of Hail Alley with zero natural protection from
                      severe thunderstorms. The exposed high plains location means hail storms hit
                      with full force. Golf ball to baseball-sized hail is a regular occurrence,
                      and even smaller hail can cause significant roof damage over time.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Complete hail damage services:</strong> Free post-storm inspections,
                      comprehensive photo documentation, granule loss assessment, shingle bruising
                      detection, insurance claim documentation and assistance, adjuster meetings,
                      and complete roof replacement when necessary. We make the insurance process easy.
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
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-29-1280w.jpg" alt="Residential roofing services for Wildorado TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a ranch home along FM 2381, a residence near Wildorado School,
                      or a rural property on the outskirts, we provide complete residential roofing
                      services. We use materials specifically rated for high-wind and hail-prone areas
                      like Wildorado.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Residential services include:</strong> Complete roof replacement, Class 4
                      impact-resistant shingle installation (insurance discounts available), architectural
                      shingle systems, high-wind rated materials, roof repair, attic ventilation upgrades,
                      and comprehensive manufacturer warranties.
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
                    <img src="/images/SteelRoofing-1280w.jpg" alt="Metal roofing systems for Wildorado TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roofing Systems
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is extremely popular in Wildorado, and for good reason. It handles
                      hail impact far better than shingles, won't lift in high winds when properly
                      installed, withstands extreme temperatures without degrading, and can last 50+
                      years with virtually no maintenance. Ideal for rural properties.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal roofing options:</strong> Standing seam metal roofs (residential grade),
                      corrugated metal panels for barns and shops, stone-coated steel shingles, R-panel
                      and U-panel systems, galvalume and painted finishes, and custom metal fabrication.
                      Class 4 hail ratings available.
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

            {/* Agricultural/Commercial */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-31-1280w.jpg" alt="Agricultural roofing services for Wildorado TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Agricultural Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Wildorado's economy is agricultural, and many properties include barns, equipment
                      storage buildings, shops, and other agricultural structures. We specialize in
                      metal building roofing, pole barn roofs, and commercial-grade systems for
                      agricultural applications.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Agricultural services:</strong> Metal building re-roofing, pole barn roof
                      replacement, steel panel installation, roof repair for agricultural structures,
                      prompt leak repair, and preventive maintenance. We understand farming operations
                      and work around your schedule.
                    </p>
                    <a
                      href="/commercial-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Agricultural Roofing →
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
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-dumas-32-1280w.jpg" alt="Free roof inspections for Wildorado TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      After Wildorado's frequent hail storms, it's critical to have your roof inspected
                      for damage. Many homeowners don't realize they have hail damage until leaks develop.
                      Our free inspections can catch problems early and help you file insurance claims
                      before they expire.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Free inspection includes:</strong> Complete roof surface examination,
                      hail damage detection, shingle condition analysis, wind damage assessment, flashing
                      and penetration inspection, ventilation evaluation, detailed photo report, and honest
                      recommendations. No pressure, no obligation.
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

            {/* Storm Services */}
            <FadeIn delay={0.6}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-33-1280w.jpg" alt="professional roofing service for Wildorado TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Rural locations need fast storm response.</strong> When storm damage
                      occurs at 2am or on Sunday afternoon, we provide professional roofing services
                      to Wildorado. tarping, leak repair, storm damage mitigation - we're
                      only 15 miles away and can respond quickly.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}anytime for immediate professional assistance. We'll be there fast.
                    </p>
                    <a
                      href="/roof-repair-services-in-amarillo/"
                      className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-2"
                    >
                      s →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Wildorado-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges Specific to Wildorado, TX
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Maximum Hail Exposure</h3>
                <p className="text-gray-700">
                  Wildorado's location on the exposed high plains west of Amarillo means zero natural
                  protection from severe hail storms. The area regularly experiences large hail events,
                  with baseball to softball-sized hail documented multiple times per year. Class 4
                  impact-resistant shingles or metal roofing are essential for insurance coverage and
                  long-term protection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 Relentless High Winds</h3>
                <p className="text-gray-700">
                  With no windbreaks and situated at nearly 4,000 feet elevation, Wildorado experiences
                  some of the strongest sustained winds in the Texas Panhandle. 40-50 mph sustained winds
                  are routine, with gusts exceeding 70 mph during severe weather. Standard roof installation
                  methods fail quickly - high-wind rated materials and reinforced installation are mandatory.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Extreme Temperature Range</h3>
                <p className="text-gray-700">
                  Wildorado sees some of the most extreme temperature swings in Texas. Summer temperatures
                  regularly exceed 100°F while winter nights drop well below zero - often a 110+ degree
                  annual range. This constant thermal cycling causes expansion, contraction, and premature
                  aging of roofing materials. Proper material selection and ventilation are critical.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">☀️ Severe UV Degradation</h3>
                <p className="text-gray-700">
                  At 3,900 feet elevation with minimal humidity and over 270 sunny days annually, UV
                  radiation is intense. Asphalt shingles without proper UV inhibitors degrade rapidly,
                  leading to granule loss and premature failure. We recommend UV-stabilized architectural
                  shingles or reflective metal roofing for maximum lifespan.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Service Coverage */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Complete Coverage Throughout Wildorado</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We serve all of Wildorado and surrounding Oldham County areas, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-8">
                <ul className="space-y-2">
                  <li>✓ Wildorado community center</li>
                  <li>✓ I-40 frontage properties</li>
                  <li>✓ FM 2381 corridor</li>
                  <li>✓ Wildorado School area</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Ranch properties</li>
                  <li>✓ Agricultural facilities</li>
                  <li>✓ Rural residences</li>
                  <li>✓ Oldham County areas</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4 text-center">
                  Fast Service from Nearby Amarillo
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  <strong>5 Star Commercial Roofing</strong><br />
                  2909 S Western St, Amarillo, TX 79109<br />
                  Only 15 miles east of Wildorado via I-40 (15-20 minute drive)
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
              More Roofing Services Near Wildorado
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Amarillo Roofing Services</h3>
                <p className="text-gray-600 text-sm">Complete roofing services in Amarillo (15 miles east)</p>
              </a>
              <a href="/bushland-tx-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Bushland Roofing</h3>
                <p className="text-gray-600 text-sm">Roofing services in Bushland (5 miles east)</p>
              </a>
              <a href="/vega-tx-roofing/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Vega Roofing</h3>
                <p className="text-gray-600 text-sm">Roofing services in Vega (20 miles west)</p>
              </a>
              <a href="/hail-damage-roof-repair-amarillo-texas/" className="card-hover p-4 block">
                <h3 className="font-bold text-brand-brown mb-2">Hail Damage Repair</h3>
                <p className="text-gray-600 text-sm">Expert hail damage assessment and insurance claims</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protect Your Wildorado Property Today</h2>
            <p className="cta-text">
              From our nearby Amarillo location, we're proud to serve the Wildorado community with
              honest, professional roofing services. Whether you need a free inspection, hail damage
              assessment, or prompt repairs, we're just 15 miles away and ready to help.
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
              <a href="/bushland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Bushland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/vega-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Vega
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
            "@id": "https://5starroofingpros.com/wildorado-tx-roofing/",
            "name": "5 Star Commercial Roofing - Serving Wildorado, TX",
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Wildorado, Texas from our Amarillo location. Expert hail damage repair, residential and agricultural roofing services.",
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
                "name": "Wildorado",
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
                    "description": "Expert hail damage repair for Wildorado properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roofing services in Wildorado"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Durable metal roofing for rural properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Agricultural Roofing",
                    "description": "Roofing for barns, shops, and agricultural buildings"
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
