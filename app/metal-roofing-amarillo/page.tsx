import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/metal-roofing-amarillo/' },
  title: "Metal Roofing Amarillo TX | Expert Service | Free Inspection",
  description: "Professional metal roofing in Amarillo TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function MetalRoofingAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Metal Roofing", url: "/metal-roofing/" },
        { name: "Amarillo", url: "/metal-roofing-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/metal-roofing-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Metal Roofing",
        "image": "https://5starroofingpros.com/images/SteelRoofing.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/metal-roofing-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional metal roofing in Amarillo TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Metal Roofing Installation",
            "name": "Metal Roofing in Amarillo",
            "description": "Professional metal roofing services in Amarillo, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Amarillo",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Metal Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How long does metal roofing last in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing lasts 50+ years in Texas climate. Standing seam systems with proper installation can last 70 years with minimal maintenance."}},{"@type":"Question","name":"Is metal roofing noisy during rain and hail?","acceptedAnswer":{"@type":"Answer","text":"No. Proper insulation and underlayment make metal roofs as quiet as asphalt shingles. Modern installations are acoustically dampened."}},{"@type":"Question","name":"Does metal roofing increase home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. Metal roofs provide 85-95% ROI, excellent curb appeal, energy savings up to 25%, and appeal to buyers seeking low-maintenance, durable roofing."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-amarillo-40-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Metal Roofing in <span className="text-brand-gold-light">Amarillo</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional metal roofing throughout Amarillo. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Amarillo's Metal Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional metal roofing throughout Amarillo and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Amarillo with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-brown">Unmatched Durability for Amarillo Weather</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Amarillo's extreme weather conditions demand roofing systems engineered for durability. Our metal roofing installations feature premium materials and fastening systems designed to withstand the unique challenges of the Texas Panhandle.</p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">With temperature swings from below freezing to over 100°F, Amarillo tests roofing materials like few other climates. Metal roofing's thermal expansion and contraction properties, combined with our expert installation techniques, ensure long-term performance without cracking or deterioration.</p>
                <div className="bg-brand-gold-light p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Durability Features:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> 50-70 year lifespan vs. 15-20 for asphalt</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Corrosion-resistant coatings and galvanization</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Thermal expansion joint design</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> UV-resistant finishes for Amarillo sun exposure</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Material Options</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="font-bold text-brand-brown">Standing Seam Steel</h4>
                    <p className="text-gray-600">Premium durability with hidden fasteners. 26-gauge steel with Kynar coatings for maximum longevity.</p>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="font-bold text-brand-brown">Aluminum Roofing</h4>
                    <p className="text-gray-600">Lightweight yet strong. Excellent for coastal areas with superior corrosion resistance.</p>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="font-bold text-brand-brown">Metal Shingles</h4>
                    <p className="text-gray-600">Traditional appearance with metal performance. Available in slate, wood, and tile profiles.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Superior Wind Resistance for Amarillo</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Amarillo experiences some of Texas's strongest winds, with regular gusts over 50 mph and storm winds exceeding 100 mph. Our metal roofing systems are engineered to exceed these challenges.</p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-brand-gold text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">150</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-2">mph Wind Rating</h3>
                  <p className="text-gray-600">Our standing seam installations exceed Amarillo's wind requirements</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">24</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-2">Gauge Steel</h3>
                  <p className="text-gray-600">Thicker steel for enhanced structural integrity</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">100%</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-2">Secure Fastening</h3>
                  <p className="text-gray-600">Every panel properly attached to withstand uplift forces</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Wind Resistance Technology</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Structural Design</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Engineered clip systems for thermal movement</li>
                      <li>• Reinforced panel connections at ridges and eaves</li>
                      <li>• Proper deck attachment every 12 inches</li>
                      <li>• Hurricane-rated underlayment systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Installation Excellence</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Factory-trained installation teams</li>
                      <li>• Proper seaming tools for weathertight seals</li>
                      <li>• Building code compliance and inspections</li>
                      <li>• Manufacturer certification and warranties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Energy Efficiency & Cost Savings</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">Metal roofing offers significant energy savings in Amarillo's climate. Reflective coatings reduce cooling costs by up to 25%, while proper insulation systems maintain comfortable temperatures year-round.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-brand-brown">Solar Reflectance</h4>
                      <p className="text-gray-600">Cool roof coatings reflect up to 70% of solar radiation, reducing heat absorption.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-brand-brown">Thermal Emittance</h4>
                      <p className="text-gray-600">Metal surfaces quickly release absorbed heat, preventing heat buildup.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-brand-brown">Ventilation Systems</h4>
                      <p className="text-gray-600">Proper ventilation design prevents moisture and reduces cooling loads.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-brown text-center">Amarillo Climate Benefits</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold mb-2">25%</div>
                    <p className="text-gray-700">Average Cooling Cost Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold mb-2">20-30°F</div>
                    <p className="text-gray-700">Surface Temperature Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold mb-2">$500+</div>
                    <p className="text-gray-700">Annual Energy Savings</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600 text-center"><strong>Note:</strong> Energy savings vary based on home size, insulation, and HVAC efficiency. Estimates based on typical Amarillo residential properties.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Amarillo Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white text-brand-brown w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-bold mb-2">Free Inspection</h3>
                  <p className="text-sm opacity-90">Comprehensive roof assessment and condition evaluation</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-brand-brown w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-bold mb-2">Custom Quote</h3>
                  <p className="text-sm opacity-90">Detailed proposal with material options and timeline</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-brand-brown w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-bold mb-2">Expert Installation</h3>
                  <p className="text-sm opacity-90">Professional installation with quality control checks</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-brand-brown w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="font-bold mb-2">Final Inspection</h3>
                  <p className="text-sm opacity-90">Complete walkthrough and warranty documentation</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Amarillo Homeowners Choose Metal Roofing</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🛡️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Weather Protection</h3>
                  <p className="text-gray-700">Superior resistance to hail, wind, and extreme temperatures. Metal roofing withstands Amarillo's severe weather events without cracking or losing granules like asphalt shingles.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">💰</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Long-term Value</h3>
                  <p className="text-gray-700">While initial investment is higher, metal roofing pays for itself through energy savings, reduced maintenance, and increased home value. Many homeowners see 85-95% return on investment.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🌡️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Energy Efficiency</h3>
                  <p className="text-gray-700">Reflective coatings and proper ventilation reduce cooling costs significantly. In Amarillo's hot summers, this can mean hundreds of dollars in annual savings.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🔥</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Fire Resistance</h3>
                  <p className="text-gray-700">Class A fire rating provides maximum protection. Important for Amarillo area where wildfire risk and dry conditions make fire resistance a priority for homeowners.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">♻️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Eco-Friendly</h3>
                  <p className="text-gray-700">Metal roofing contains 25-95% recycled content and is 100% recyclable at end of life. Reduces landfill waste compared to asphalt shingles.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">✨</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Low Maintenance</h3>
                  <p className="text-gray-700">Minimal upkeep required. Occasional inspections and gutter cleaning are typically all that's needed. No replacing missing shingles or dealing with granule loss.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Amarillo-Specific Roofing Challenges</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Amarillo's unique geography and climate present specific challenges that our metal roofing solutions address head-on.</p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">High Plains Climate Factors</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-brand-brown mb-2">Extreme Temperature Swings</h4>
                      <p className="text-gray-700">Amarillo experiences temperature variations of 80°F+ between winter lows and summer highs. Our metal roofing systems include proper thermal expansion joints and floating clip systems to accommodate this movement without stress fractures.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-brand-brown mb-2">Persistent High Winds</h4>
                      <p className="text-gray-700">Located in the Texas Panhandle, Amarillo regularly experiences winds over 40 mph with gusts exceeding 70 mph. Our standing seam installations use mechanical seaming and enhanced fastening patterns specifically designed for high-wind zones.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-brand-brown mb-2">UV Exposure</h4>
                      <p className="text-gray-700">High elevation and minimal tree cover mean intense solar radiation year-round. We use premium PVDF and SMP coatings that resist fading and chalking for decades, maintaining both appearance and performance.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Engineering Solutions</h3>
                  <div className="bg-gradient-to-br from-brand-gold-light to-white p-6 rounded-xl">
                    <h4 className="font-bold text-brand-brown mb-4">Advanced Fastening Systems</h4>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Pancake head fasteners with large washers</li>
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> 12" on-center fastening pattern</li>
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Reinforced perimeter and corner zones</li>
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Dual-seal tape under all end laps</li>
                    </ul>
                    <h4 className="font-bold text-brand-brown mb-4">Material Specifications</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Minimum 24-gauge galvanized steel substrate</li>
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> G90 galvanization for corrosion resistance</li>
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> 40-year coating warranties available</li>
                      <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Meets or exceeds ASTM standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance & Warranty Benefits</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Insurance Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Premium Discounts:</strong> Many insurers offer 10-35% discounts for impact-resistant metal roofing</span></li>
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Class 4 Rating:</strong> Highest hail impact rating reduces deductibles</span></li>
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Wind Resistance:</strong> Certified ratings often exceed insurance requirements</span></li>
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Fire Rating:</strong> Class A fire resistance may qualify for additional discounts</span></li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Manufacturer Warranties</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Substrate Warranty:</strong> 50-year coverage on steel substrate integrity</span></li>
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Finish Warranty:</strong> 30-40 year coating performance guarantee</span></li>
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Chalk & Fade Protection:</strong> Color retention guarantees available</span></li>
                    <li className="flex items-start"><span className="text-brand-gold mr-2 mt-1">•</span> <span><strong>Perforation Coverage:</strong> Complete protection against rust-through</span></li>
                  </ul>
                </div>
              </div>
              <div className="bg-brand-gold text-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Our Installation Warranty</h3>
                <p className="text-lg">10-year workmanship warranty on all installations. We stand behind our work with complete coverage for labor and installation-related issues.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Local Building Codes & Permits</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 text-center">We handle all permit requirements and ensure your metal roofing installation meets Amarillo building codes and HOA guidelines.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="font-bold text-brand-brown mb-2">Permit Acquisition</h3>
                  <p className="text-gray-600">We obtain all required permits from the City of Amarillo, ensuring compliance with local building codes.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl mb-3">🏗️</div>
                  <h3 className="font-bold text-brand-brown mb-2">Code Compliance</h3>
                  <p className="text-gray-600">Our installations exceed Texas building code requirements for wind uplift and structural attachment.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="font-bold text-brand-brown mb-2">Final Inspection</h3>
                  <p className="text-gray-600">Coordinated final inspections ensure your project passes all city requirements before completion.</p>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Amarillo Building Code Requirements:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Wind Load Requirements</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 90 mph basic wind speed</li>
                      <li>• Exposure C wind exposure category</li>
                      <li>• Enhanced fastening in high-wind zones</li>
                      <li>• Special provisions for corners and perimeters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Installation Standards</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Proper deck attachment specifications</li>
                      <li>• Underlayment requirements for climate</li>
                      <li>• Flashing and penetration sealing standards</li>
                      <li>• Thermal movement accommodation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does metal roofing last in Amarillo's climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Metal roofing lasts 50-70+ years in Amarillo's challenging climate. Standing seam systems with premium coatings can exceed 70 years with minimal maintenance. The durability comes from galvanized steel substrates, advanced coatings, and proper installation techniques that accommodate thermal expansion and high winds.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Is metal roofing noisy during Amarillo's frequent hailstorms?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Modern metal roofing installations are not noisy. Proper insulation, underlayment, and installation techniques make metal roofs as quiet as traditional asphalt shingles during rain and hail. The key is using quality underlayment and ensuring adequate attic insulation for sound dampening.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does metal roofing perform in Amarillo's high winds?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our metal roofing systems are engineered for Amarillo's high-wind environment, with ratings up to 150 mph. Standing seam panels use mechanical seaming and enhanced fastening patterns designed specifically for the Texas Panhandle's wind conditions. Proper installation includes reinforced perimeters and corners where wind uplift forces are strongest.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What energy savings can I expect with metal roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Amarillo homeowners typically see 15-25% reduction in cooling costs with reflective metal roofing. Cool roof coatings reflect up to 70% of solar radiation, while proper ventilation prevents heat buildup. Annual savings often exceed $500 for average-sized homes, with payback periods of 8-12 years through energy savings alone.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Does metal roofing increase home value in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. Metal roofing provides 85-95% return on investment in Amarillo's market. Benefits include enhanced curb appeal, energy efficiency, durability, and strong buyer appeal. Many homeowners recoup their investment through reduced insurance premiums, energy savings, and increased resale value. The long lifespan also means fewer future roofing expenses for buyers.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What insurance benefits come with metal roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Many insurance companies offer 10-35% discounts for impact-resistant metal roofing with Class 4 hail ratings. Additional benefits include reduced deductibles for hail damage, wind resistance credits, and fire resistance discounts. The combination can result in significant annual premium savings while providing superior protection.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does metal roofing handle extreme temperature swings?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Metal roofing systems are designed for Amarillo's temperature extremes. Floating clip systems and thermal expansion joints accommodate movement without stress fractures. Premium coatings resist thermal cycling damage, while proper ventilation prevents ice dam formation during winter freezes.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What maintenance does metal roofing require?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Metal roofing requires minimal maintenance compared to other roofing materials. Annual inspections, gutter cleaning, and occasional power washing are typically sufficient. Unlike asphalt shingles, there are no granules to lose, shingles to replace, or frequent repairs needed. Most maintenance involves keeping gutters clear and checking for loose fasteners after severe storms.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Amarillo Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Amarillo property owners. Expert metal roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}