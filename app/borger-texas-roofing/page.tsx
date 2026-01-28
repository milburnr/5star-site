import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roofing in Borger, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Borger, Texas Panhandle. Commercial, residential, and emergency roofing. Serving Hutchinson County. Free inspections available.',
};

export default function BorgerRoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
    "name": "5 Star Commercial Roofing - Borger",
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
    "description": "Professional roofing contractor serving Borger, Texas and Hutchinson County with commercial, residential, and emergency roofing services.",
    "telephone": "+18066226041",
    "email": "admin@5starroofingpros.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2909 S Western St",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79109",
      "addressCountry": "US"
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
        "@type": "City",
        "name": "Amarillo"
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
            "name": "Commercial Roofing",
            "description": "Commercial roofing services for Borger industrial and business properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Roofing",
            "description": "Residential roof repair and replacement for Borger homes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hail Damage Repair",
            "description": "Storm and hail damage roof repair in Borger, TX"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Roofing",
            "description": "24/7 emergency roof repair services in Hutchinson County"
          }
        }
      ]
    }
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


      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
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
                <h3 className="text-xl font-bold text-red-700 mb-3">Emergency Repairs</h3>
                <p className="text-gray-700 mb-4">
                  When severe weather strikes Borger, we respond 24/7 with emergency tarping and rapid roof repairs. Don't wait—call us immediately for storm damage assessment and temporary protection.
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
