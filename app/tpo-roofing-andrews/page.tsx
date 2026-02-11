import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "TPO Roofing Andrews TX | 5 Star Commercial Roofing",
  description: "Expert TPO roofing installation in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingAndrewsPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "TPO Roofing",
                      "url": "/tpo-roofing/"
              },
              {
                      "name": "Andrews",
                      "url": "/tpo-roofing-andrews/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.3187, "longitude": -102.5454 },
        "url": "https://5starroofingpros.com/tpo-roofing-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Andrews, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "telephone": "(806) 622-6041",
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
            "areaServed": {
              "@type": "City",
              "name": "Andrews",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing installation in Andrews TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                TPO Roofing in <span className="text-brand-gold-light">Andrews</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin TPO Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert TPO roofing installation in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Andrews's TPO Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Andrews's commercial and industrial properties require roofing solutions designed for the Permian Basin's extreme conditions. The region experiences 6-8 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions that demand superior flat roof performance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected commercial properties throughout Andrews and Andrews County with premium TPO roofing systems and expert installation. From oil field service buildings to retail complexes throughout Andrews, we understand Permian Basin weather patterns, commercial building requirements, and the specific needs of Andrews County businesses.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Roofing Excellence for Andrews Commercial Properties
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Superior Flat Roof Performance</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  TPO (Thermoplastic Olefin) roofing represents the gold standard for commercial flat roof systems in Andrews. Our TPO installations provide exceptional durability, energy efficiency, and weather resistance specifically engineered for the demanding Permian Basin climate and commercial building requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With heat-welded seams creating a completely watertight membrane, TPO roofing delivers unmatched protection against Andrews's frequent hailstorms and extreme weather conditions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Commercial Building Benefits</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  TPO roofing systems are specifically designed for commercial applications, offering superior performance for warehouses, office buildings, retail centers, and industrial facilities throughout Andrews. The single-ply membrane installation is cost-effective and efficient for large commercial rooftops.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our TPO systems feature exceptional resistance to chemicals, punctures, and UV radiation, making them ideal for Andrews's industrial and commercial environments.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Why TPO Roofing Excels for Andrews Commercial Buildings</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Heat-Welded Seams:</strong> Creates completely watertight membrane system that eliminates leak points common in other flat roofing materials.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Energy Efficiency:</strong> White reflective surface reduces cooling costs by up to 30% for Andrews commercial buildings during hot summer months.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Chemical Resistance:</strong> Excellent resistance to oils, greases, and industrial chemicals common in Andrews's oil field service industry.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Hail Resistance:</strong> Superior impact resistance protects against the 6-8 annual hailstorms that impact Permian Basin commercial properties.</span>
                </li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Commercial TPO Roofing Solutions for Andrews
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Mechanically Attached TPO Systems</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our mechanically attached TPO systems provide superior wind uplift resistance for Andrews commercial buildings. This installation method is ideal for new construction and re-roofing projects, offering excellent performance in high-wind conditions common to the Permian Basin.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Performance Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Superior wind uplift resistance</li>
                      <li>• Excellent hail impact protection</li>
                      <li>• Energy Star certified membranes</li>
                      <li>• 15-20 year warranty coverage</li>
                      <li>• Cost-effective installation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Ideal Applications:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Retail and shopping centers</li>
                      <li>• Office buildings and complexes</li>
                      <li>• Warehouses and distribution centers</li>
                      <li>• Manufacturing facilities</li>
                      <li>• Government buildings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Fully Adhered TPO Systems</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Fully adhered TPO systems provide maximum wind resistance and are excellent for Andrews buildings in high-exposure areas. The complete adhesion of the membrane to the substrate creates superior performance in extreme weather conditions.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Key Advantages:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Maximum wind uplift resistance</li>
                      <li>• Enhanced thermal performance</li>
                      <li>• Superior dimensional stability</li>
                      <li>• Reduced membrane flutter</li>
                      <li>• Excellent long-term performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Commercial Applications:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• High-exposure commercial buildings</li>
                      <li>• Industrial facilities</li>
                      <li>• Healthcare institutions</li>
                      <li>• Educational facilities</li>
                      <li>• Mixed-use developments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Ballasted TPO Systems</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ballasted TPO systems offer cost-effective solutions for Andrews commercial buildings with adequate structural capacity. River rock ballast provides excellent wind uplift resistance while allowing for easy maintenance access.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">System Benefits:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Most cost-effective installation</li>
                      <li>• Easy maintenance and repairs</li>
                      <li>• Excellent thermal mass</li>
                      <li>• Superior fire resistance</li>
                      <li>• Long service life</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Best Suited For:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Large warehouse facilities</li>
                      <li>• Distribution centers</li>
                      <li>• Manufacturing plants</li>
                      <li>• Storage buildings</li>
                      <li>• Agricultural processing facilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Professional TPO Installation Process
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">Expert Commercial Installation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our TPO installation process is specifically designed for commercial applications in Andrews's challenging Permian Basin climate. Every installation follows NRCA guidelines and manufacturer specifications to ensure maximum performance and warranty compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Comprehensive Roof Assessment</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our certified technicians conduct thorough structural assessments to determine the optimal TPO system for your Andrews commercial building. We evaluate substrate conditions, drainage patterns, and wind exposure to design the perfect solution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Substrate Preparation & Insulation</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We prepare substrates to manufacturer specifications and install high-performance insulation systems that enhance energy efficiency and provide proper drainage slopes for Andrews's occasional heavy rainfall events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Precision Membrane Installation</h4>
                    <p className="text-gray-700 leading-relaxed">
                      TPO membranes are installed with precision attention to detail, ensuring proper alignment and minimizing waste. Our certified installers use advanced welding equipment to create watertight seam integrity throughout the system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Heat-Welded Seam Technology</h4>
                    <p className="text-gray-700 leading-relaxed">
                      All TPO seams are heat-welded using state-of-the-art equipment to create molecular bonds stronger than the membrane itself. This eliminates leak potential and ensures long-term waterproof performance in Andrews's severe weather.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Quality Assurance & Testing</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Every installation undergoes comprehensive quality control testing, including electronic leak detection and seam integrity verification. We provide detailed documentation for warranty registration and building compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Energy Efficiency & Cost Savings for Commercial Buildings
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">Reducing Operating Costs for Andrews Businesses</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TPO roofing's bright white reflective surface significantly reduces cooling costs for Andrews commercial buildings. During Permian Basin summers with temperatures exceeding 100°F, TPO roofing can reduce energy consumption by 20-30%, providing substantial savings on utility bills.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Energy Performance Benefits</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>High Solar Reflectance:</strong> White TPO membrane reflects 85-90% of solar radiation, keeping buildings cooler</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>ENERGY STAR® Certified:</strong> Meets EPA requirements for energy-efficient commercial roofing systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Thermal Efficiency:</strong> Superior insulation properties reduce HVAC system workload year-round</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Financial Benefits</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Utility Rebates:</strong> Many Andrews-area utilities offer rebates for energy-efficient roofing installations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Tax Incentives:</strong> Potential qualification for federal energy efficiency tax credits</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>ROI Benefits:</strong> Energy savings typically pay for premium features within 3-5 years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Commercial Building Performance Metrics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">30%</div>
                  <div className="text-gray-700 font-semibold">Energy Cost Reduction</div>
                  <div className="text-sm text-gray-600 mt-1">Average cooling savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">15-20</div>
                  <div className="text-gray-700 font-semibold">Year Lifespan</div>
                  <div className="text-sm text-gray-600 mt-1">Warranty coverage available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">85%</div>
                  <div className="text-gray-700 font-semibold">Solar Reflectance</div>
                  <div className="text-sm text-gray-600 mt-1">ENERGY STAR certified</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Commercial Maintenance & Building Protection
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-gold">Comprehensive Commercial Maintenance Programs</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TPO roofing systems require minimal maintenance while providing maximum protection for Andrews commercial properties. Our preventive maintenance programs ensure optimal performance and extend system life, protecting your business investment from Permian Basin weather challenges.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Maintenance Services Include</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Bi-annual roof inspections</li>
                    <li>✓ Drainage system maintenance</li>
                    <li>✓ Membrane cleaning and care</li>
                    <li>✓ Seam integrity verification</li>
                    <li>✓ Emergency leak response</li>
                    <li>✓ Warranty compliance documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Business Continuity Benefits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Prevents unexpected roof failures</li>
                    <li>• Minimizes business interruption</li>
                    <li>• Protects equipment and inventory</li>
                    <li>• Maintains insurance compliance</li>
                    <li>• Preserves warranty coverage</li>
                    <li>• Optimizes energy performance</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-3">5 Star Commercial Maintenance Program</h4>
                <p className="text-gray-700">
                  Our comprehensive maintenance program is designed specifically for Andrews commercial properties. We provide scheduled inspections, preventive maintenance, priority emergency response, and detailed reporting to ensure your TPO roofing investment continues to protect your business for years to come.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Andrews, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.55!3d32.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sAndrews%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Andrews, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Andrews property owners. Expert tpo roofing with comprehensive warranties and insurance claim assistance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
