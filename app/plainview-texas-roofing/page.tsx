import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/plainview-texas-roofing/' },
  title: 'Roofing in Plainview, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Plainview, Texas Panhandle. Commercial, residential, and storm roofing. Serving Hale County. Free inspections available.',
};

export default function PlainviewRoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "5 Star Commercial Roofing - Plainview",
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
    "description": "Professional roofing contractor serving Plainview, Texas and Hale County with commercial, residential, and professional roofing services.",
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
      { "@type": "City", "name": "Plainview", "containedInPlace": { "@type": "AdministrativeArea", "name": "Hale County" } },
      { "@type": "City", "name": "Amarillo" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing", "description": "Commercial roofing for Plainview businesses" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing", "description": "Residential roofing for Plainview homes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Repair", "description": "Storm and hail damage repair in Plainview, TX" } },
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
                      "name": "Plainview",
                      "url": "/plainview-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Plainview's Professional Roofing Contractor</h1>
            <p className="hero-subtitle">Expert Roofing Services in Plainview & Hale County, Texas</p>
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
            <h2 className="content-block-title">Trusted Roofing Services in Plainview, Texas</h2>
            <p className="text-lg mb-4">
              As Plainview's premier <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">professional roofing contractor</a>, 5 Star Commercial Roofing brings over a decade of experience serving Hale County and the entire Texas Panhandle. Whether you need commercial roofing, residential roofing for your home, or storm damage repairs, our expert team delivers reliable, high-quality roofing solutions.
            </p>
            <p className="text-lg mb-4">
              Plainview's climate—with severe hailstorms, high winds, and extreme temperature swings—demands roofing systems built to withstand the harshest conditions. We specialize in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail-resistant roofing materials</a> and installation techniques proven to protect Hale County properties year after year.
            </p>
          </section>
        </FadeIn>

        <section className="section">
          <h2 className="section-title">Comprehensive Roofing Services in Plainview</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                <p className="text-gray-600 mb-4">
                  We install TPO, EPDM, metal roofing, and built-up systems for businesses and facilities throughout Hale County.
                </p>
                <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Commercial Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing</h3>
                <p className="text-gray-600 mb-4">
                  From asphalt shingles to metal roofing, we provide complete residential roofing services for Plainview homeowners. Our Class 4 impact-resistant shingles protect against Texas Panhandle hail.
                </p>
                <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Residential Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="card-hover p-6 bg-red-50">
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-red-700 mb-3">Storm Damage Repair</h3>
                <p className="text-gray-700 mb-4">
                  When severe weather strikes Plainview, we respond with tarping and rapid roof repairs. Call us immediately for storm damage assessment.
                </p>
                <a href="/storm-damage-roof-repair-in-amarillo/" className="text-red-700 font-semibold">Storm Damage Repair →</a>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Plainview Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Hale County Experts</h3>
                <p className="text-gray-600">We understand Plainview's weather patterns, from spring hailstorms to winter freezes. Our roofing systems are engineered for local climate challenges.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Insurance Claim Assistance</h3>
                <p className="text-gray-600">We work directly with insurance adjusters on <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage claims</a>, ensuring you receive full coverage for storm repairs.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Local & Regional Experience</h3>
                <p className="text-gray-600">Serving Plainview and communities throughout the Texas Panhandle with specialized roofing designed for extreme weather conditions.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Free Inspections</h3>
                <p className="text-gray-600">Every Plainview property receives a complimentary roof inspection with detailed assessments, photos, and written estimates—no obligation.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-4">Plainview Weather Challenges & Your Roof</h2>
          <p className="text-lg mb-6">
            Located in Hale County, Plainview experiences extreme weather in the Texas Panhandle:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Severe Hailstorms:</strong> Baseball-sized hail is common during spring and summer, requiring impact-resistant roofing materials.</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>High Winds:</strong> Sustained winds over 50 mph and gusts exceeding 70 mph demand wind-rated roofing systems.</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Temperature Extremes:</strong> From sub-zero winters to 100°F+ summers, roofing materials must withstand constant expansion and contraction.</div>
            </li>
          </ul>
        </section>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Plainview's Agricultural Economy and Commercial Roofing Needs</h2>
            <p className="text-lg mb-4">
              As the economic heart of Hale County, Plainview's thriving agricultural sector creates unique commercial roofing demands. The city's role as a major cotton processing center and agricultural hub requires specialized roofing solutions for grain storage facilities, processing plants, and agricultural equipment warehouses that operate year-round under extreme weather conditions.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-brown mb-3">Agricultural Commercial Roofing Challenges</h3>
              <p className="text-gray-700 mb-4">Plainview's cotton processing facilities and grain storage operations require roofing systems that withstand dust accumulation, moisture control challenges, and the corrosive effects of agricultural chemicals. Our specialized installations protect valuable crops and equipment while maintaining optimal storage conditions.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Cotton gin and processing facility roofing</li>
                <li>• Grain elevator and storage complex protection</li>
                <li>• Agricultural equipment warehouse systems</li>
                <li>• Fertilizer and chemical storage buildings</li>
                <li>• Livestock facility roofing solutions</li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Specialized Roofing for Plainview's Diverse Business Community</h2>
            <p className="text-lg mb-4">
              Beyond agriculture, Plainview supports a diverse business community including healthcare facilities, educational institutions, retail centers, and manufacturing operations. Each sector requires specialized roofing approaches that address unique operational requirements while providing long-term protection against High Plains weather extremes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-brand-brown mb-3">Healthcare and Medical Facilities</h3>
                <p className="text-gray-700 mb-3">Covenant Health Plainview and medical facilities throughout Hale County require roofing systems that support life-safety equipment while maintaining sterile environments and uninterrupted patient care operations.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hospital and clinic roofing installations</li>
                  <li>• Medical equipment building protection</li>
                  <li>• Emergency generator housing covers</li>
                  <li>• Patient care facility weatherproofing</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-brand-brown mb-3">Educational Institution Roofing</h3>
                <p className="text-gray-700 mb-3">Wayland Baptist University, Plainview ISD schools, and other educational facilities need durable, energy-efficient roofing systems that accommodate large assembly spaces while controlling operational costs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• University dormitory and academic buildings</li>
                  <li>• School gymnasium and auditorium roofing</li>
                  <li>• Athletic facility weather protection</li>
                  <li>• Educational support building systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-brand-brown mb-3">Retail and Commercial Centers</h3>
                <p className="text-gray-700 mb-3">Shopping centers, restaurants, and service businesses along Quincy Street and other commercial corridors require energy-efficient roofing that maintains comfortable environments while controlling utility costs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shopping center and strip mall roofing</li>
                  <li>• Restaurant and hospitality facility covers</li>
                  <li>• Automotive service building protection</li>
                  <li>• Retail warehouse and distribution centers</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-brand-brown mb-3">Manufacturing and Industrial</h3>
                <p className="text-gray-700 mb-3">Manufacturing operations and industrial facilities require roofing systems that accommodate production equipment, provide environmental control, and withstand the demanding conditions of continuous operations.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Manufacturing plant roofing systems</li>
                  <li>• Industrial warehouse protection</li>
                  <li>• Processing facility weather barriers</li>
                  <li>• Equipment storage building covers</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Residential Roofing Solutions for Plainview's Diverse Neighborhoods</h2>
            <p className="text-lg mb-4">
              Plainview's residential communities range from historic downtown neighborhoods to modern developments around Wayland Baptist University and newer subdivisions serving the area's agricultural workforce. Each residential area presents unique roofing challenges requiring tailored solutions that protect homes while enhancing property values.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-brown mb-3">Plainview Housing Market Analysis</h3>
              <p className="text-gray-700 mb-4">Hale County's housing market reflects the community's agricultural foundation and educational presence. The median home value is approximately $95,000, with a housing stock that includes well-maintained historic properties, university-area residences, and modern developments serving agricultural professionals and their families.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-brand-brown">Historic Downtown</h4>
                  <p className="text-sm text-gray-600">Pre-1950s homes requiring specialized restoration roofing that maintains historical character while providing modern weather protection.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-brown">University Area</h4>
                  <p className="text-sm text-gray-600">Faculty housing and student residences near Wayland Baptist University requiring durable, cost-effective solutions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-brown">Agricultural Professional Housing</h4>
                  <p className="text-sm text-gray-600">Modern homes serving cotton producers, agricultural technicians, and agribusiness professionals requiring premium protection.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">High Plains Climate Challenges and Roofing Solutions</h2>
            <p className="text-lg mb-4">
              Plainview's location at 3,400 feet elevation in the Texas High Plains creates extreme weather conditions that demand specialized roofing approaches. The semi-arid climate, combined with seasonal temperature extremes and severe weather events, requires materials and installation techniques specifically engineered for this challenging environment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Severe Weather Protection</h3>
                <p className="text-gray-700 mb-4">Plainview experiences frequent severe thunderstorms with large hail, high winds, and intense rainfall that can overwhelm inadequate roofing systems. Our installations utilize impact-resistant materials and enhanced fastening methods that provide superior protection.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Class 4 impact-resistant shingles for hail protection</li>
                  <li>• Wind-rated systems for 90+ mph sustained winds</li>
                  <li>• Enhanced drainage for intense rainfall events</li>
                  <li>• Lightning protection system integration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Temperature and UV Resistance</h3>
                <p className="text-gray-700 mb-4">Extreme temperature variations from winter lows near 0°F to summer highs exceeding 100°F, combined with intense High Plains UV radiation, create material stress that standard roofing systems cannot withstand.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• UV-resistant materials for extended exposure</li>
                  <li>• Thermal expansion accommodation systems</li>
                  <li>• Cool roofing technology for energy efficiency</li>
                  <li>• Ventilation systems for temperature control</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">storm response and Storm Damage Restoration</h2>
            <p className="text-lg mb-4">
              Severe weather events in the Texas Panhandle can cause immediate roofing issues requiring rapid response to protect property and prevent secondary damage. Our storm response capabilities ensure Plainview property owners receive immediate assistance when storms strike.
            </p>
            
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">storm response Protocol</h3>
              <p className="text-gray-700 mb-4">When severe weather threatens or damages Plainview properties, our our teams deploy immediately with specialized equipment and materials for temporary protection while permanent repairs are planned and executed.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Immediate Response Services</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• tarping and temporary weather protection</li>
                    <li>• Water intrusion mitigation and drainage</li>
                    <li>• Structural damage assessment and documentation</li>
                    <li>• Insurance claim preparation and filing assistance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Permanent Restoration</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Complete damage assessment and repair planning</li>
                    <li>• Insurance adjuster coordination and negotiations</li>
                    <li>• High-priority restoration for critical facilities</li>
                    <li>• Quality assurance and warranty protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Service Coverage Throughout the Texas Panhandle</h2>
            <p className="text-lg mb-4">
              While we're proud to serve Plainview and Hale County, our roofing expertise extends across the entire region:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Amarillo Roofing</a>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
              <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
              <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
              <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
            </div>
            
            <div className="bg-brand-gold-light p-6 rounded-lg">
              <h3 className="text-lg font-bold text-brand-brown mb-3">Local Community Commitment</h3>
              <p className="text-gray-700">As neighbors in the Texas Panhandle, we understand the challenges facing Plainview and Hale County communities. Our commitment extends beyond roofing to supporting local economic development, agricultural initiatives, and community resilience against severe weather events that affect our shared region.</p>
            </div>
          </section>
        </FadeIn>

        <section className="bg-brand-gold-light rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Plainview Roofing Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-1">Free Inspection</h3>
                <p className="text-gray-700">We inspect your Plainview property, document damage with photos, and provide a detailed written estimate—completely free.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold mb-1">Insurance Support</h3>
                <p className="text-gray-700">We help file insurance claims, meet with adjusters, and ensure all damage is properly documented.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold mb-1">Professional Installation</h3>
                <p className="text-gray-700">Our experienced crews install your new roof using premium materials. Most residential roofs in Plainview are completed in 1-2 days.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold mb-1">Quality Inspection & Warranty</h3>
                <p className="text-gray-700">We inspect all work, clean up your property, and provide comprehensive warranty information.</p>
              </div>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof in Plainview?</h2>
            <p className="cta-text mb-6">
              Serving Plainview, Hale County, and the entire Texas Panhandle. Contact us today for your free inspection.
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
