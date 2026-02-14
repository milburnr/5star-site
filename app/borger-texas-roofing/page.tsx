import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/borger-texas-roofing/' },
  title: 'Roofing in Borger, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Borger, Texas Panhandle. Commercial, residential, and emergency roofing. Serving Hutchinson County. Free inspections available.',
};

export default function BorgerRoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": "https://5starroofingpros.com/borger-texas-roofing/#localBusiness",
    "name": "5 Star Commercial Roofing - Borger",
    "alternateName": "5 Star Roofing Borger TX",
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
    "description": "Professional roofing contractor serving Borger, Texas and Hutchinson County with commercial, residential, emergency roofing services, and specialized petrochemical industry roofing solutions.",
    "url": "https://5starroofingpros.com/borger-texas-roofing/",
    "telephone": "+18066226041",
    "email": "admin@5starroofingpros.com",
    "priceRange": "$$",
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
      "latitude": "35.7596",
      "longitude": "-101.4669"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Borger",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Hutchinson County"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hutchinson County"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "35.7596",
        "longitude": "-101.4669"
      },
      "geoRadius": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Borger Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Roofing Borger TX",
            "description": "Commercial roofing services for Borger petrochemical facilities, industrial buildings, and business properties including Phillips 66 and Chevron Phillips Chemical"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Roofing Borger TX",
            "description": "Residential roof repair and replacement for Borger homes with impact-resistant materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hail Damage Repair Borger",
            "description": "Storm and hail damage roof repair in Borger, TX with insurance claim assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Roofing Hutchinson County",
            "description": "emergency roof repair services in Hutchinson County and Borger area"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Roofing Borger",
            "description": "Specialized roofing for petrochemical and industrial facilities with chemical-resistant materials"
          }
        }
      ]
    },
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
    "sameAs": [
      "https://www.facebook.com/5StarRoofingPros",
      "https://www.google.com/maps/place/5+Star+Commercial+Roofing"
    ]
  };

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
                      "name": "Borger",
                      "url": "/borger-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-17-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Borger's Professional Roofing Contractor</h1>
            <p className="hero-subtitle">Expert Roofing Services in Borger & Hutchinson County, Texas</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Inspection</a>
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
          <section className="content-block">
            <h2 className="content-block-title">Trusted Roofing Services in Borger, Texas</h2>
            <p className="text-lg mb-4">
              As Borger's premier <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">professional roofing contractor</a>, 5 Star Commercial Roofing brings over a decade of experience serving Hutchinson County and the entire Texas Panhandle. Whether you need commercial roofing for Borger's industrial facilities, residential roofing for your home, or emergency storm damage repairs, our expert team delivers reliable, high-quality roofing solutions.
            </p>
            <p className="text-lg mb-4">
              Borger's unique climate—with severe hailstorms, high winds, and extreme temperature swings—demands roofing systems built to withstand the harshest conditions. We specialize in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail-resistant roofing materials</a> and installation techniques proven to protect Hutchinson County properties year after year.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">About Borger: Oil Boom Heritage & Modern Industry</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">City Profile</h3>
                <ul className="space-y-2">
                  <li><strong>Population:</strong> 12,551 (2020 census)</li>
                  <li><strong>County:</strong> Hutchinson County</li>
                  <li><strong>Distance from Amarillo:</strong> 50 miles north</li>
                  <li><strong>Founded:</strong> March 1926</li>
                  <li><strong>Median Age:</strong> 36.3 years</li>
                  <li><strong>Median Household Income:</strong> $59,031</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Economic Base</h3>
                <p className="text-gray-600 mb-4">
                  Borger's economy is anchored by one of the world's largest inland petrochemical complexes, featuring Phillips 66, Chevron Phillips Chemical, and other major industrial operations that employ nearly 3,000 people combined.
                </p>
                <p className="text-gray-600">
                  The city's industrial heritage dates to the 1926 oil boom when Ace Borger established the town after oil discovery. Within 90 days, sensational advertising brought the population to 45,000 during the height of the Texas oil rush.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Major Employers & Industries</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Phillips 66 Borger Refinery</h4>
                <p className="text-sm text-gray-600">Major petroleum refining complex with crude distilling, catalytic cracking, and hydrodesulfurization units</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Chevron Phillips Chemical</h4>
                <p className="text-sm text-gray-600">Petrochemical manufacturing and specialty chemical production facility</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Solvay USA</h4>
                <p className="text-sm text-gray-600">Chemical manufacturing specializing in sodium carbonate and other industrial chemicals</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Neighborhoods & Areas We Serve</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Historic Downtown Borger</h4>
                <p className="text-gray-600 mb-3">
                  The original townsite established by Ace Borger in 1926, featuring historic architecture and the central business district. Many homes here date to the oil boom era and require specialized roofing solutions for historical preservation.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Industrial District</h4>
                <p className="text-gray-600 mb-3">
                  The massive petrochemical complex along the Canadian River, requiring specialized commercial and industrial roofing systems designed to withstand chemical exposure and extreme industrial environments.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Residential Areas</h4>
                <p className="text-gray-600 mb-3">
                  Modern suburban neighborhoods throughout Hutchinson County where families of petrochemical workers live, requiring durable residential roofing that can handle Texas Panhandle weather extremes.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Rural Hutchinson County</h4>
                <p className="text-gray-600 mb-3">
                  Agricultural and ranch properties surrounding Borger, where metal roofing and large-span commercial systems are essential for protecting livestock operations and equipment storage.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="section">
          <h2 className="section-title">Comprehensive Roofing Services in Borger</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                <p className="text-gray-600 mb-4">
                  Borger's industrial sector requires specialized commercial roofing. We install TPO, EPDM, metal roofing, and built-up systems for refineries, warehouses, and manufacturing facilities throughout Hutchinson County.
                </p>
                <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Commercial Services →</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing</h3>
                <p className="text-gray-600 mb-4">
                  From asphalt shingles to metal roofing, we provide complete residential roofing services for Borger homeowners. Our Class 4 impact-resistant shingles are specifically designed for Texas Panhandle hail protection.
                </p>
                <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Residential Services →</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="card-hover p-6 bg-red-50">
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-red-700 mb-3">Storm Damage Repair</h3>
                <p className="text-gray-700 mb-4">
                  When severe weather strikes Borger, we respond with emergency tarping and rapid roof repairs. Don't wait—call us immediately for storm damage assessment and temporary protection.
                </p>
                <a href="/storm-damage-roof-repair-in-amarillo/" className="text-red-700 font-semibold">Emergency Service →</a>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Borger Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Hutchinson County Experts</h3>
                <p className="text-gray-600">
                  We understand Borger's weather patterns, from spring hailstorms to winter freezes. Our roofing systems are engineered for local climate challenges.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Insurance Claim Assistance</h3>
                <p className="text-gray-600">
                  We work directly with insurance adjusters on <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage claims</a>, documenting damage and ensuring you receive full coverage for storm repairs.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Commercial & Industrial Focus</h3>
                <p className="text-gray-600">
                  Serving Borger's petrochemical plants, refineries, and industrial facilities with specialized commercial roofing designed for high-performance environments.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Free Inspections</h3>
                <p className="text-gray-600">
                  Every Borger property receives a complimentary roof inspection with detailed assessments, photos, and written estimates—no obligation.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-4">Borger Weather Challenges & Your Roof</h2>
          <p className="text-lg mb-6">
            Located in the heart of Hutchinson County, Borger experiences some of the most extreme weather in the Texas Panhandle:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div>
                <strong>Severe Hailstorms:</strong> Baseball-sized hail is common during spring and summer, requiring impact-resistant roofing materials that standard shingles can't provide.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div>
                <strong>High Winds:</strong> Sustained winds over 50 mph and gusts exceeding 70 mph can tear shingles off improperly installed roofs. Our wind-rated systems protect Borger properties.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div>
                <strong>Temperature Extremes:</strong> From sub-zero winters to 100°F+ summers, roofing materials must expand and contract without cracking or failing.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div>
                <strong>Industrial Emissions:</strong> Borger's petrochemical industry creates unique roofing challenges, requiring chemical-resistant materials for longer roof lifespans.
              </div>
            </li>
          </ul>
          <p className="text-lg">
            Our roofing systems are specifically selected and installed to handle these Hutchinson County challenges, providing superior protection and longevity.
          </p>
        </section>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Service Coverage Throughout the Texas Panhandle</h2>
            <p className="text-lg mb-4">
              While we're proud to serve Borger and Hutchinson County, our roofing expertise extends across the entire region. We also provide comprehensive roofing services in:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Amarillo Roofing</a>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
              <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
              <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
              <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
            </div>
            <p className="text-lg">
              No matter where you're located in the Texas Panhandle or West Texas, 5 Star Commercial Roofing delivers the same exceptional quality and customer service Borger has come to trust.
            </p>
          </section>
        </FadeIn>

        <section className="bg-brand-gold-light rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Borger Roofing Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-1">Free Inspection & Assessment</h3>
                <p className="text-gray-700">We visit your Borger property, inspect your roof, document any damage with photos, and provide a detailed written estimate—completely free.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold mb-1">Insurance Claim Support</h3>
                <p className="text-gray-700">If you have storm damage, we help file your insurance claim, meet with adjusters on-site, and ensure all damage is properly documented for maximum coverage.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold mb-1">Professional Installation</h3>
                <p className="text-gray-700">Our experienced crews install your new roof using premium materials and proven techniques. Most residential roofs in Borger are completed in 1-2 days.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold mb-1">Quality Inspection & Warranty</h3>
                <p className="text-gray-700">Before we leave, we inspect all work, clean up your property, and provide you with comprehensive warranty information for your new roof.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-6">Specialized Roofing Solutions for Borger's Industries</h2>
          
          <h3 className="text-xl font-bold mb-4 text-brand-brown">Petrochemical Industry Roofing</h3>
          <p className="text-lg mb-4">
            Borger's petrochemical facilities require specialized roofing systems that can withstand chemical exposure, high temperatures, and industrial processes. Our commercial roofing solutions include:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Chemical-Resistant Membranes:</strong> TPO and EPDM systems designed for petrochemical environments</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>High-Temperature Coatings:</strong> Specialized coatings for refinery and chemical plant roofing</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Vapor Barrier Systems:</strong> Preventing chemical vapors from compromising roof integrity</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Safety Compliance:</strong> All installations meet OSHA requirements for industrial environments</div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 text-brand-brown">Residential Roofing for Borger Families</h3>
          <p className="text-lg mb-4">
            With over 2,700 families calling Borger home, we provide residential roofing solutions that protect against the Texas Panhandle's extreme weather while enhancing property values:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Impact-Resistant Shingles:</strong> Class 4 rated shingles for maximum hail protection</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Energy-Efficient Systems:</strong> Cool roofing to reduce energy costs in 100°F+ summers</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Wind-Rated Installation:</strong> Systems rated for 90+ mph winds common in Hutchinson County</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Historical Preservation:</strong> Specialized solutions for 1920s-era oil boom architecture</div>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Borger Roofing</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">How does working near Borger's petrochemical complex affect roofing installations?</h3>
              <p className="text-gray-700">
                Our crews are trained in industrial safety protocols and use chemical-resistant materials when working near Phillips 66, Chevron Phillips Chemical, and other facilities. We coordinate with plant safety personnel and follow all environmental regulations during installations. Our roofing systems are specifically chosen to resist chemical exposure that can occur from industrial emissions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What type of roof is best for Borger's extreme hail storms?</h3>
              <p className="text-gray-700">
                For Borger properties, we recommend Class 4 impact-resistant shingles or metal roofing systems. The Texas Panhandle experiences some of the most severe hailstorms in the country, often with baseball-sized hail. Our impact-resistant materials have been tested to withstand 2-inch hail impacts at high velocities, providing superior protection compared to standard shingles.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How quickly can you respond to storm damage in Hutchinson County?</h3>
              <p className="text-gray-700">
                We maintain prompt response for storm damage throughout Hutchinson County. During severe weather events, we can typically provide emergency tarping within 2-4 hours for Borger properties. Our proximity to the area (based in Amarillo) allows us to respond faster than distant contractors, which is critical when protecting your property from water damage after storms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Do you work with insurance companies on hail damage claims in Borger?</h3>
              <p className="text-gray-700">
                Absolutely. We have extensive experience working with insurance adjusters on storm damage claims throughout the Texas Panhandle. We document all damage with detailed photos, provide written assessments, and meet with adjusters on-site to ensure you receive full coverage. Many Borger residents have saved thousands on their roofing projects through proper insurance claim management.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What makes 5 Star the best choice for Borger commercial roofing projects?</h3>
              <p className="text-gray-700">
                Our expertise with industrial and petrochemical facilities sets us apart. We understand the unique requirements of Borger's major employers—from chemical resistance for Phillips 66 facilities to specialized vapor barriers for chemical plants. We're licensed, bonded, and carry the high liability insurance required for industrial work, plus we have established relationships with facility managers throughout Hutchinson County.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How long does a typical residential roof replacement take in Borger?</h3>
              <p className="text-gray-700">
                Most residential roof replacements in Borger are completed in 1-2 days, weather permitting. We work efficiently to minimize disruption to your daily routine and protect your home from exposure. For larger or more complex roofs, or during busy storm seasons, projects may take 2-3 days. We always provide realistic timelines upfront and keep you informed throughout the process.
              </p>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof in Borger?</h2>
            <p className="cta-text mb-6">
              Serving Borger, Hutchinson County, and the entire Texas Panhandle with professional roofing services. Contact us today for your free inspection and estimate.
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
