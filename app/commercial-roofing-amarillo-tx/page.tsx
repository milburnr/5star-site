import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Amarillo TX Roofing | Trusted Local Roofers',
  description: 'Commercial Roofing in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function CommercialRoofingAmarilloPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Roofing",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "image": "https://5starroofingpros.com/images/5-star-with-letters-1.png",
      "telephone": "+18066226041",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109",
        "addressCountry": "US"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": {
      "@type": "City",
      "name": "Amarillo",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    "description": "Professional commercial roofing services in Amarillo, TX. Specializing in TPO, PVC, EPDM, and modified bitumen roofing systems with hail-resistant Class 4 options for commercial buildings.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TPO Commercial Roofing",
            "description": "Energy-efficient TPO membrane roofing systems with heat-welded seams"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PVC Commercial Roofing",
            "description": "Durable PVC roofing systems with superior hail and chemical resistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EPDM Rubber Roofing",
            "description": "Cost-effective EPDM rubber membrane roofing systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Hail Damage Repair",
            "description": "Emergency hail damage assessment and insurance claim assistance for commercial properties"
          }
        }
      ]
    }
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does commercial roofing cost in Amarillo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Amarillo commercial roofing costs range from $3.50-$9.50 per square foot installed, depending on system type, building size, and complexity. EPDM systems ($3.50-$6.00/sq ft) are most affordable, TPO ($4.50-$7.50/sq ft) offers best value, and PVC ($6.00-$9.50/sq ft) provides maximum durability. However, most hail damage is covered by insurance with businesses typically paying only their deductible (usually $2,500-$10,000)."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best commercial roofing system for Amarillo's climate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Amarillo's frequent hail, extreme heat, and high winds, we recommend Class 4 impact-resistant TPO or PVC systems. TPO offers excellent energy efficiency and hail protection at moderate cost. PVC provides maximum durability and chemical resistance for demanding applications. Both systems outperform EPDM in hail resistance and reflect more heat, reducing cooling costs 20-30% compared to dark-colored roofs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does commercial roof installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Amarillo commercial roof installations take 3-10 business days depending on building size and complexity. Small buildings (5,000-10,000 sq ft) typically complete in 3-5 days. Medium buildings (10,000-30,000 sq ft) require 5-8 days. Large projects (30,000+ sq ft) may take 10-15 days. We work with your schedule to minimize disruption—offering night/weekend work when needed to keep your business operational."
        }
      },
      {
        "@type": "Question",
        "name": "Will insurance cover my commercial hail damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most commercial property insurance policies covering Amarillo buildings include hail damage coverage. If membrane testing reveals impact damage, punctures, or tears from hail, insurance typically covers full roof replacement minus your deductible. We work directly with commercial insurance adjusters, providing technical documentation and testing results to maximize claim approval. Our commercial claim approval rate exceeds 90%."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work around our business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We understand commercial roofing means business disruption, so we offer flexible scheduling including nights, weekends, and phased installations. For retail centers, we can work section-by-section to keep stores operational. For 24/7 operations like hotels or healthcare, we coordinate carefully to minimize impact. We'll develop a custom installation plan that works for your specific business needs."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty do commercial roofs come with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Commercial roofing systems include both manufacturer material warranties (15-30 years depending on system) and our workmanship warranty (minimum 5 years). We also offer extended warranty packages combining manufacturer and contractor coverage for comprehensive protection. Premium systems like PVC can include 30-year NDL (No Dollar Limit) warranties covering materials, labor, and even tear-off costs if failures occur."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer roof maintenance programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer preventative maintenance programs including bi-annual inspections, minor repairs, drain cleaning, and seal/seam checks. Regular maintenance extends commercial roof life 30-50% by catching small issues before they become major problems. Our maintenance customers receive priority emergency response, discounted repairs, and detailed condition reports useful for budgeting future replacements. Maintenance programs start at $500-$1,500 annually depending on building size."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured for commercial work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We maintain comprehensive general liability insurance (minimum $2 million), workers' compensation coverage for all crews, and all required Texas contractor licenses. We're factory-certified installers for all major commercial roofing manufacturers including GAF, Firestone, Carlisle, GenFlex, and Johns Manville. We provide certificates of insurance to all commercial clients before work begins—protecting your business from any liability."
        }
      }
    ]
  };

  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Commercial Roofing",
                      "url": "/commercial-roofing/"
              },
              {
                      "name": "Amarillo",
                      "url": "/commercial-roofing-amarillo-tx/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* FAQPage Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/CommercialRoofing.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/80 via-amber-900/70 to-orange-900/60"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl backdrop-blur-sm bg-gradient-to-r from-black/60 to-transparent p-12 rounded-2xl border-l-4 border-brand-gold">
            <FadeIn>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9)'}}>
                Commercial Roofing in <span className="text-brand-gold-light">Amarillo, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                Hail-Resistant Flat Roofing Systems for Amarillo Businesses
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                Expert TPO, PVC, and EPDM installation for downtown buildings, retail centers, industrial facilities, and medical complexes. Class 4 hail protection + full insurance claim assistance.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  <span className="text-2xl">📞</span> Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown hover:text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl border-2 border-brand-gold">
                  Free Commercial Inspection
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <FadeIn delay={0.1}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">
                    <AnimatedCounter to={500} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-lg">Commercial Projects</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">24/7</div>
                  <div className="text-brand-brown font-semibold text-lg">Emergency Response</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">
                    <AnimatedCounter to={10} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-lg">Years in Amarillo</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                  <div className="text-brand-brown font-semibold text-lg">Licensed & Insured</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">

        {/* Introduction */}
        <FadeIn>
          <section className="max-w-5xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              When your Amarillo commercial property sits in "Hail Alley," you need more than a standard flat roof—you need a roofing system engineered to withstand frequent hail bombardment, extreme temperature swings, and high winds. Since 2014, 5 Star Commercial Roofing has protected over 500 Amarillo businesses with premium TPO, PVC, EPDM, standing seam metal, and built-up roofing systems designed specifically for the harsh Texas Panhandle climate.
            </p>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Headquartered right here in Amarillo at 2909 S Western St, we're your local <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">commercial roofing specialists</a> who understand the unique challenges facing downtown office buildings, retail centers along I-40, industrial warehouses, medical facilities, and multi-family properties throughout the Texas Panhandle. From emergency <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">hail damage repairs</a> to complete roof replacements, we minimize business disruption while maximizing your insurance coverage.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Commercial property owners choose us because we offer <strong>24/7 emergency response</strong>, work directly with insurance adjusters to ensure maximum claim approval, and install only premium roofing systems backed by comprehensive warranties. Whether you manage a small retail shop or oversee multiple industrial buildings, we'll protect your investment with roofing solutions built to last 20-30+ years. Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041)</a> for your free commercial roof inspection.
            </p>
          </section>
        </FadeIn>

        {/* Why Commercial Properties Need Special Protection */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 p-12 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.15),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-brand-brown to-red-800 bg-clip-text text-transparent">
                Why Amarillo Commercial Roofs Need Hail-Resistant Systems
              </h2>
              <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                The Texas Panhandle experiences 3-4 significant hail events annually, with storms frequently producing golf ball to baseball-sized hail. For commercial properties with flat or low-slope roofs, this creates unique vulnerabilities that standard roofing materials cannot handle.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Commercial Flat Roof Vulnerabilities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">•</span>
                      <span><strong>Membrane Punctures:</strong> Hail can puncture TPO, PVC, and EPDM membranes, creating immediate leak risks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">•</span>
                      <span><strong>Equipment Damage:</strong> HVAC units, vents, and rooftop equipment face direct hail impact on flat roofs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">•</span>
                      <span><strong>Water Pooling:</strong> Hail-damaged flat roofs develop low spots where water pools, accelerating deterioration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">•</span>
                      <span><strong>Seam Failures:</strong> Hail impact can stress seams and flashings, creating leak points weeks or months after storms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">•</span>
                      <span><strong>Business Disruption:</strong> Roof leaks can force closures, damage inventory, and disrupt operations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Class 4 Hail Protection Solutions</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <span><strong>Impact-Resistant Membranes:</strong> Class 4 TPO and PVC systems withstand 2-inch hail impacts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <span><strong>Reinforced Coverboards:</strong> High-density insulation layers absorb hail impact energy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <span><strong>Enhanced Seam Strength:</strong> Heat-welded seams create bonds stronger than membrane itself</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <span><strong>Equipment Protection:</strong> Hail guards and screens protect HVAC units and rooftop equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <span><strong>Insurance Discounts:</strong> Class 4 commercial roofs qualify for 10-30% premium reductions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-brand-gold p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">The Bottom Line for Amarillo Businesses</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Installing a Class 4 impact-resistant commercial roofing system in Amarillo isn't just smart—it's essential for long-term protection. The upfront cost premium (typically 15-25% over standard systems) pays for itself through <strong>reduced insurance premiums, fewer repairs, longer lifespan, and avoiding business disruption</strong> from hail damage. Most insurance companies covering Amarillo commercial properties now <em>require</em> impact-resistant systems for new construction and major replacements.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Commercial Roofing Systems We Install */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">Commercial Roofing Systems for Amarillo Buildings</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              We specialize in premium single-ply membrane systems and built-up roofing engineered for Texas Panhandle weather—all available with Class 4 hail-resistant options.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/images/TPO1.jpg" alt="TPO commercial roofing Amarillo TX - Heat-welded white membrane" className="w-full h-56 object-cover rounded-lg mb-6" />
                  <h3 className="text-3xl font-bold text-brand-brown mb-4">TPO Roofing Systems</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    Thermoplastic Polyolefin (TPO) is the #1 choice for Amarillo commercial properties. White reflective membranes reduce cooling costs by 20-30% while heat-welded seams create watertight bonds stronger than the membrane itself. Available in Class 4 impact-resistant formulations.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold text-blue-900 mb-3">TPO Advantages for Amarillo</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span><strong>Energy Efficiency:</strong> ENERGY STAR rated, reflects 85% of solar radiation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span><strong>Hail Resistance:</strong> Class 4 TPO withstands 2-inch hail impacts without damage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span><strong>Heat-Welded Seams:</strong> Creates permanent bonds (no adhesive failure in Texas heat)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span><strong>UV Resistance:</strong> Exceptional resistance to sun degradation at Amarillo's 3,600-foot elevation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span><strong>Wind Rating:</strong> Properly installed TPO resists 60+ mph winds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span><strong>Warranty:</strong> 15-25 year manufacturer warranties available</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Best For:</strong> Retail centers, office buildings, warehouses, medical facilities</p>
                    <p className="text-gray-700 mb-2"><strong>Typical Cost:</strong> $4.50-$7.50 per square foot installed</p>
                    <p className="text-gray-700"><strong>Expected Lifespan:</strong> 20-30 years in Amarillo climate</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-3xl font-bold text-brand-brown mb-4">PVC Roofing Systems</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    Polyvinyl Chloride (PVC) roofing is the premium choice for commercial properties requiring maximum durability. PVC's superior puncture resistance, chemical resistance, and hail protection make it ideal for restaurants, manufacturing facilities, and high-traffic rooftops.
                  </p>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold text-purple-900 mb-3">PVC Advantages for Amarillo</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span><strong>Maximum Durability:</strong> Most durable single-ply membrane available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span><strong>Superior Hail Resistance:</strong> Outperforms TPO in extreme hail impact testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span><strong>Chemical Resistance:</strong> Resists oils, greases, and industrial chemicals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span><strong>Fire Resistance:</strong> Class A fire rating when properly installed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span><strong>Energy Efficiency:</strong> White membrane reduces cooling costs significantly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span><strong>Warranty:</strong> 20-30 year manufacturer warranties available</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Best For:</strong> Restaurants, manufacturing, high-value properties, frequent rooftop access</p>
                    <p className="text-gray-700 mb-2"><strong>Typical Cost:</strong> $6.00-$9.50 per square foot installed</p>
                    <p className="text-gray-700"><strong>Expected Lifespan:</strong> 25-35 years in Amarillo climate</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/images/EPDM2.jpg" alt="EPDM rubber roofing Amarillo TX - Commercial membrane system" className="w-full h-56 object-cover rounded-lg mb-6" />
                  <h3 className="text-3xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    Ethylene Propylene Diene Monomer (EPDM) rubber roofing has protected commercial buildings for over 50 years. This proven system offers excellent performance in Amarillo's extreme temperature swings at a lower cost than TPO or PVC—ideal for warehouses and budget-conscious properties.
                  </p>

                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">EPDM Advantages for Amarillo</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-600 font-bold">✓</span>
                        <span><strong>Temperature Tolerance:</strong> Performs from -40°F to 300°F (perfect for Amarillo extremes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-600 font-bold">✓</span>
                        <span><strong>Cost-Effective:</strong> Lower installation cost than TPO or PVC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-600 font-bold">✓</span>
                        <span><strong>Proven Performance:</strong> 50+ years of proven commercial roofing success</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-600 font-bold">✓</span>
                        <span><strong>UV Resistance:</strong> Excellent resistance to sun damage and oxidation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-600 font-bold">✓</span>
                        <span><strong>Easy Repairs:</strong> Simple patch repairs extend roof life</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-600 font-bold">✓</span>
                        <span><strong>Warranty:</strong> 15-25 year manufacturer warranties available</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Best For:</strong> Warehouses, industrial buildings, budget-conscious projects</p>
                    <p className="text-gray-700 mb-2"><strong>Typical Cost:</strong> $3.50-$6.00 per square foot installed</p>
                    <p className="text-gray-700"><strong>Expected Lifespan:</strong> 18-25 years in Amarillo climate</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/images/ai-generated/services/built-up-roofing-bur.jpg" alt="Modified bitumen roofing Amarillo TX - Multi-layer system" className="w-full h-56 object-cover rounded-lg mb-6" />
                  <h3 className="text-3xl font-bold text-brand-brown mb-4">Modified Bitumen & Built-Up Roofing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    Multi-layer bitumen systems (modified bitumen and built-up roofing) create exceptionally durable, puncture-resistant roofs ideal for heavy foot traffic and equipment installations. Multiple waterproofing layers provide redundancy—if one layer fails, others continue protecting.
                  </p>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold text-amber-900 mb-3">Modified Bitumen Advantages</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Multi-Layer Protection:</strong> 2-4 waterproofing layers provide redundancy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Puncture Resistance:</strong> Multiple layers resist punctures better than single-ply</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Hail Protection:</strong> Gravel ballast absorbs hail impact energy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Fire Resistance:</strong> Class A fire rating with gravel surfacing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Foot Traffic:</strong> Excellent for roofs requiring frequent access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Warranty:</strong> 15-30 year manufacturer warranties available</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Best For:</strong> Heavy equipment roofs, high foot traffic, existing BUR replacement</p>
                    <p className="text-gray-700 mb-2"><strong>Typical Cost:</strong> $5.00-$8.50 per square foot installed</p>
                    <p className="text-gray-700"><strong>Expected Lifespan:</strong> 20-30 years in Amarillo climate</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* Commercial Property Types We Serve */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Amarillo Commercial Properties We Serve
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              From downtown office buildings to industrial warehouses, we've completed commercial roofing projects across every sector of Amarillo's business community.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img src="/photos/Large_commercial_flat_roof_installation1.png" alt="Large commercial flat roof installation in Amarillo TX - Multi-story downtown office building" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Downtown Office Buildings</h3>
                <p className="text-gray-600 text-sm">
                  Multi-story commercial buildings in downtown Amarillo requiring minimal tenant disruption during installation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img src="/photos/tpo-sunset3.jpg" alt="TPO commercial roofing at sunset in Amarillo TX - Retail center flat roof system" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Retail Centers & Strip Malls</h3>
                <p className="text-gray-600 text-sm">
                  Shopping centers along I-40 and Soncy Road requiring phased installations to keep stores operational.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img src="/photos/tpo-sunset5.jpg" alt="Amarillo TX commercial roofing - Industrial warehouse TPO membrane installation at sunset" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Industrial Warehouses</h3>
                <p className="text-gray-600 text-sm">
                  Large-scale industrial facilities in east Amarillo requiring cost-effective, durable roofing solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🏥</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Medical Facilities</h3>
                <p className="text-gray-600 text-sm">
                  Healthcare buildings near BSA and Northwest Texas Healthcare requiring zero-disruption installations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🍔</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Restaurants & Fast Food</h3>
                <p className="text-gray-600 text-sm">
                  Restaurant roofs requiring chemical-resistant PVC systems and grease hood/vent coordination.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🏨</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Hotels & Motels</h3>
                <p className="text-gray-600 text-sm">
                  Hospitality properties along I-40 and I-27 requiring quiet, efficient installations with minimal guest impact.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🏘️</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Apartment Complexes</h3>
                <p className="text-gray-600 text-sm">
                  Multi-family residential buildings requiring tenant-friendly scheduling and comprehensive leak protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">⛪</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Churches & Schools</h3>
                <p className="text-gray-600 text-sm">
                  Religious and educational facilities requiring budget-conscious solutions with maximum longevity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🏋️</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Fitness Centers & Gyms</h3>
                <p className="text-gray-600 text-sm">
                  Athletic facilities with HVAC-heavy roofs requiring specialized equipment coordination.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🚗</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Auto Dealerships</h3>
                <p className="text-gray-600 text-sm">
                  Dealership facilities requiring rapid installations to avoid disrupting vehicle inventory display.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🏪</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Big Box Retail</h3>
                <p className="text-gray-600 text-sm">
                  Large retail stores (50,000+ sq ft) requiring experienced crews and phased installation strategies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 text-center">🏪</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2 text-center">Self-Storage Facilities</h3>
                <p className="text-gray-600 text-sm">
                  Storage complexes requiring cost-effective solutions with minimal customer access disruption.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-brand-gold-light p-6 rounded-lg border-l-4 border-brand-gold text-center">
              <p className="text-lg text-gray-700">
                <strong>Don't see your property type?</strong> We handle all commercial roofing projects in Amarillo.
                Call <a href="tel:8066226041" className="text-brand-brown font-bold hover:underline">(806) 622-6041)</a> to discuss your specific needs!
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Commercial Hail Damage & Insurance Claims */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Commercial Hail Damage Repair & Insurance Claims in Amarillo
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                When severe hailstorms strike Amarillo, commercial property owners face unique challenges—immediate leak risks, potential business interruption, equipment damage, and complex insurance claims. We've successfully processed over 400 commercial hail damage claims for Amarillo businesses, navigating the complexities of commercial insurance policies to maximize coverage while minimizing your downtime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Commercial Claims Process</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span><strong>Emergency Response (2-4 hours):</strong> Emergency tarp installation and temporary leak repairs to prevent interior damage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span><strong>Comprehensive Assessment:</strong> Drone inspection, membrane testing, equipment damage documentation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span><strong>Claim Documentation:</strong> Professional photography, detailed damage reports, repair estimates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-6 00">4.</span>
                    <span><strong>Insurance Coordination:</strong> Meet with adjusters, provide technical documentation, negotiate coverage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">5.</span>
                    <span><strong>Strategic Scheduling:</strong> Plan installation to minimize business disruption (nights/weekends if needed)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">6.</span>
                    <span><strong>Installation & Completion:</strong> Professional installation with final inspection and warranty documentation</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Commercial Insurance Claim Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span><strong>Commercial Policy Knowledge:</strong> We understand complex commercial property insurance policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span><strong>Equipment Damage:</strong> Document HVAC, satellite, and rooftop equipment damage for full claim coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span><strong>Business Interruption:</strong> Help document losses for business interruption coverage when applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span><strong>Upgrade Opportunities:</strong> Maximize coverage for Class 4 system upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span><strong>Code Compliance:</strong> Ensure claim covers bringing systems to current building code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span><strong>Supplement Requests:</strong> File supplements for hidden damage discovered during tear-off</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-l-4 border-brand-gold p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Commercial Claim Success Stories</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold text-lg mb-2">Retail Center - 45,000 sq ft - Western St</p>
                  <p className="mb-2">
                    <strong>Challenge:</strong> May 2023 hailstorm damaged TPO roof across 15 tenant spaces. Insurance initially approved only partial repairs.
                  </p>
                  <p>
                    <strong>Our Solution:</strong> Comprehensive testing revealed widespread membrane damage. Successfully negotiated full roof replacement with Class 4 upgrade. $385,000 claim approved. Completed installation in 8 days with zero tenant complaints.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold text-lg mb-2">Industrial Warehouse - 78,000 sq ft - East Amarillo</p>
                  <p className="mb-2">
                    <strong>Challenge:</strong> Severe hail damaged EPDM roof and 8 rooftop HVAC units. Client concerned about production shutdown.
                  </p>
                  <p>
                    <strong>Our Solution:</strong> Emergency tarp prevented interior damage. Documented HVAC equipment damage for claim. Insurance approved $520,000 total claim. Phased installation during weekends maintained 100% production uptime.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Commercial Hail Damage? Act Within 24-48 Hours</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                After hailstorms, commercial property damage worsens rapidly. Membrane punctures allow water infiltration. Equipment damage affects HVAC performance. Delayed response increases interior damage, business disruption, and insurance complications.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our 24/7 commercial emergency response team arrives within 2-4 hours with emergency tarps, temporary repairs, and immediate damage assessment. The faster you call, the more we can protect your business and maximize your insurance recovery.
              </p>
              <a href="tel:8066226041" className="btn-primary-hero bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-4 inline-block hover:scale-110 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300">
                24/7 Commercial Emergency: (806) 622-6041
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Commercial */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.15),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
                Why Amarillo Businesses Choose 5 Star Commercial Roofing
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🏢 Local Amarillo Headquarters</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Located at 2909 S Western St, we're not fly-by-night storm chasers. We're permanently based in Amarillo with local crews, equipment, and supply relationships. When you need warranty service or have questions, we're right here—not 500 miles away. Our reputation depends on Amarillo businesses, and we protect it fiercely.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">⚡ Minimal Business Disruption</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We understand commercial roofing means business disruption. That's why we offer flexible scheduling—nights, weekends, phased installations—whatever minimizes impact on your operations. Our experienced commercial crews work efficiently and quietly, coordinating with your staff to maintain business continuity throughout the project.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🛡️ Commercial Insurance Specialists</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Commercial property insurance differs dramatically from residential. We've successfully processed 400+ commercial claims in Amarillo, working with State Farm Business, Liberty Mutual Commercial, Travelers, Hartford, Nationwide Commercial, and all major commercial insurers. Our expertise maximizes your coverage and minimizes your out-of-pocket expense.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">👷 Experienced Commercial Crews</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Commercial roofing requires specialized skills, equipment, and safety protocols. Our crews are fully licensed, insured, OSHA-trained, and experienced with large-scale projects. We maintain comprehensive general liability and workers' compensation insurance—protecting your business from any liability during installation.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🔧 Manufacturer-Certified Installers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're factory-certified installers for all major commercial roofing manufacturers—GAF, Firestone, Carlisle, GenFlex, Johns Manville. Certification means our crews receive ongoing training, our installations meet exact specifications, and your warranty remains valid. Many manufacturers require certified installers for extended warranty coverage.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">📋 Comprehensive Warranties</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every commercial installation includes both manufacturer material warranties (15-30 years) and our workmanship warranty (minimum 5 years). We also offer extended warranty packages and maintenance programs to protect your investment long-term. Ask about our preventative maintenance plans that extend roof life 30-50%.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Service Areas in Amarillo */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-slate-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Commercial Roofing Throughout Amarillo
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              We've completed commercial roofing projects in every corner of Amarillo—from downtown office buildings to industrial warehouses in east Amarillo.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Downtown Amarillo</h3>
                <p className="text-gray-600 mb-3">
                  Multi-story office buildings, retail spaces, historic commercial properties along Polk Street and the central business district.
                </p>
                <p className="text-sm text-gray-500 italic">Recent projects: 6-story office building (Polk St), retail center (8th Ave), restaurant row</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">West Amarillo - I-40 Corridor</h3>
                <p className="text-gray-600 mb-3">
                  Hotels, restaurants, retail centers, and auto dealerships along I-40 from Ross Osage to Soncy Road.
                </p>
                <p className="text-sm text-gray-500 italic">Recent projects: Hotel (Coulter St), retail plaza (Soncy Rd), dealership complex</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">East Amarillo Industrial</h3>
                <p className="text-gray-600 mb-3">
                  Warehouses, manufacturing facilities, distribution centers, and industrial parks in east Amarillo near the airport.
                </p>
                <p className="text-sm text-gray-500 italic">Recent projects: 78,000 sq ft warehouse, manufacturing facility, distribution center</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Medical District</h3>
                <p className="text-gray-600 mb-3">
                  Healthcare facilities, medical office buildings, clinics near BSA Health System and Northwest Texas Healthcare.
                </p>
                <p className="text-sm text-gray-500 italic">Recent projects: Medical office complex, urgent care facilities, specialty clinics</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Southwest Commercial</h3>
                <p className="text-gray-600 mb-3">
                  Retail centers, restaurants, office buildings, and service businesses along Western Street and Coulter.
                </p>
                <p className="text-sm text-gray-500 italic">Recent projects: Strip mall (Western St), restaurant row, fitness centers</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Northwest Growth Area</h3>
                <p className="text-gray-600 mb-3">
                  New commercial development along Soncy Road, Bell Street, and Hillside including retail and office space.
                </p>
                <p className="text-sm text-gray-500 italic">Recent projects: New construction retail, professional office parks, restaurants</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                <strong>We also serve commercial properties in:</strong> Canyon, Bushland, Lake Tanglewood, and throughout Potter and Randall Counties
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Internal Links Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Related Amarillo Roofing Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <InteractiveCard href="/roofing-amarillo-tx/">
                  <div className="space-y-4">
                    <img src="/images/cover-background-roofing-sunset-1024x683.jpg" alt="Amarillo roofing services - Residential and commercial" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">Complete Amarillo Roofing Services</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive roofing services for all Amarillo properties—residential, commercial, emergency repairs, inspections, and insurance claims assistance.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Explore All Amarillo Services →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <InteractiveCard href="/hail-damage-repair-amarillo-tx/">
                  <div className="space-y-4">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage repair Amarillo TX - Commercial insurance claims" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">Hail Damage Repair Amarillo</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Expert hail damage assessment and repair for Amarillo commercial and residential properties. Free inspections and full insurance claim assistance.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Learn About Hail Repair →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.3}>
                <InteractiveCard href="/commercial-roofing/">
                  <div className="space-y-4">
                    <img src="/images/CommercialRoofing.jpeg" alt="Commercial roofing services - TPO PVC EPDM systems" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">Commercial Roofing Services</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn more about our commercial roofing services, systems, and expertise serving businesses throughout West Texas and the Panhandle.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Commercial Roofing Info →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Commercial Roofing FAQs - Amarillo, TX
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How much does commercial roofing cost in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo commercial roofing costs range from $3.50-$9.50 per square foot installed, depending on system type, building size, and complexity. EPDM systems ($3.50-$6.00/sq ft) are most affordable, TPO ($4.50-$7.50/sq ft) offers best value, and PVC ($6.00-$9.50/sq ft) provides maximum durability. However, most hail damage is covered by insurance with businesses typically paying only their deductible (usually $2,500-$10,000).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What's the best commercial roofing system for Amarillo's climate?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For Amarillo's frequent hail, extreme heat, and high winds, we recommend Class 4 impact-resistant TPO or PVC systems. TPO offers excellent energy efficiency and hail protection at moderate cost. PVC provides maximum durability and chemical resistance for demanding applications. Both systems outperform EPDM in hail resistance and reflect more heat, reducing cooling costs 20-30% compared to dark-colored roofs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long does commercial roof installation take?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most Amarillo commercial roof installations take 3-10 business days depending on building size and complexity. Small buildings (5,000-10,000 sq ft) typically complete in 3-5 days. Medium buildings (10,000-30,000 sq ft) require 5-8 days. Large projects (30,000+ sq ft) may take 10-15 days. We work with your schedule to minimize disruption—offering night/weekend work when needed to keep your business operational.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Will insurance cover my commercial hail damage?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most commercial property insurance policies covering Amarillo buildings include hail damage coverage. If membrane testing reveals impact damage, punctures, or tears from hail, insurance typically covers full roof replacement minus your deductible. We work directly with commercial insurance adjusters, providing technical documentation and testing results to maximize claim approval. Our commercial claim approval rate exceeds 90%.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Can you work around our business hours?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We understand commercial roofing means business disruption, so we offer flexible scheduling including nights, weekends, and phased installations. For retail centers, we can work section-by-section to keep stores operational. For 24/7 operations like hotels or healthcare, we coordinate carefully to minimize impact. We'll develop a custom installation plan that works for your specific business needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What warranty do commercial roofs come with?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Commercial roofing systems include both manufacturer material warranties (15-30 years depending on system) and our workmanship warranty (minimum 5 years). We also offer extended warranty packages combining manufacturer and contractor coverage for comprehensive protection. Premium systems like PVC can include 30-year NDL (No Dollar Limit) warranties covering materials, labor, and even tear-off costs if failures occur.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do you offer roof maintenance programs?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We offer preventative maintenance programs including bi-annual inspections, minor repairs, drain cleaning, and seal/seam checks. Regular maintenance extends commercial roof life 30-50% by catching small issues before they become major problems. Our maintenance customers receive priority emergency response, discounted repairs, and detailed condition reports useful for budgeting future replacements. Maintenance programs start at $500-$1,500 annually depending on building size.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Are you licensed and insured for commercial work?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. We maintain comprehensive general liability insurance (minimum $2 million), workers' compensation coverage for all crews, and all required Texas contractor licenses. We're factory-certified installers for all major commercial roofing manufacturers including GAF, Firestone, Carlisle, GenFlex, and Johns Manville. We provide certificates of insurance to all commercial clients before work begins—protecting your business from any liability.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Emergency CTA */}
        <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl shadow-lg">
          <div className="flex gap-6 items-center">
            <div className="text-6xl">🚨</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-red-800 mb-3">24/7 Commercial Emergency Roofing - Amarillo</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Commercial roof emergency? Severe storm damage? Active leaks threatening your business operations or inventory? We provide <strong>24/7 emergency commercial roofing services</strong> throughout Amarillo with typical response times of 2-4 hours.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commercial emergency services include: <strong>Emergency tarp installation</strong>, <strong>temporary leak repairs</strong>, <strong>equipment protection</strong>, <strong>water damage mitigation coordination</strong>, and <strong>immediate insurance claim initiation</strong>. Don't let roof damage shut down your business—call now for immediate response.
              </p>
              <a href="tel:8066226041" className="btn-primary-hero bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-4 inline-block hover:scale-110 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300">
                📞 24/7 Emergency: (806) 622-6041
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center shadow-2xl">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Protect Your Amarillo Commercial Property</h2>
            <p className="text-2xl mb-4">
              Free Inspections • Insurance Claims Experts • Minimal Business Disruption
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you need emergency hail damage repairs, a complete commercial roof replacement, or want to assess your current roof's condition, our Amarillo commercial roofing team is ready to help. Get your free inspection and estimate today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:8066226041" className="btn-primary-hero text-xl bg-white text-brand-brown hover:bg-gray-100 hover:scale-110 transition-all duration-300 hover:shadow-2xl px-10 py-5">
                📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero text-xl border-2 border-white hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 px-10 py-5">
                Request Free Commercial Inspection
              </a>
            </div>
            <p className="text-lg mt-8 opacity-90">
              Serving Amarillo businesses since 2014 • Licensed & Insured • Factory-Certified Installers
            </p>
          </FadeIn>
        </section>

      </div>
    </>
  );
}
