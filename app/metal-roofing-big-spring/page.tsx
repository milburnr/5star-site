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
  title: "Metal Roofing Big Spring TX | 5 Star Commercial Roofing",
  description: "Durable metal roofing systems in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function MetalRoofingBigSpringPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Metal Roofing",
                      "url": "/metal-roofing/"
              },
              {
                      "name": "Big Spring",
                      "url": "/metal-roofing-big-spring/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/metal-roofing-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring Metal Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.2504, "longitude": -101.4787 },
        "url": "https://5starroofingpros.com/metal-roofing-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert metal roofing services in Big Spring, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Metal Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
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
              },
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "name": "Big Spring",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Durable metal roofing systems in Big Spring TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-memphis-44-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Metal Roofing in <span className="text-brand-gold-light">Big Spring</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Metal Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Durable metal roofing systems in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
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
              Big Spring's Metal Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Big Spring's location in Howard County creates unique roofing challenges. West Texas experiences 7-9 hailstorms annually, sustained high winds reaching 80+ mph, extreme temperature fluctuations from freezing to over 105°F, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Big Spring and Howard County with premium materials and expert installation. From properties near Big Spring State Park to buildings throughout the city, we understand West Texas weather patterns, local building codes, and the specific needs of Howard County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Superior Wind and Hail Resistance for West Texas Climate
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Engineered for Extreme Weather</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Metal roofing systems installed by 5 Star Commercial Roofing are specifically engineered to withstand Big Spring's harsh West Texas climate conditions. Our standing seam metal roofing can resist wind speeds up to 140 mph, far exceeding the typical 70-80 mph winds experienced during severe thunderstorms that regularly impact Howard County.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The mechanical attachment system we use creates fortress-like protection that remains intact even during the most severe weather events that sweep across the West Texas plains.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Hail Impact Protection</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With Big Spring experiencing 7-9 hailstorms annually, your roof faces constant bombardment from ice projectiles. Our metal roofing systems feature Class 4 impact resistance, the highest rating available, protecting against hailstones up to 2 inches in diameter that are common in West Texas supercells.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unlike asphalt shingles that crack and lose granules from hail impact, metal roofing maintains its structural integrity and weather-sealing properties even after multiple severe hail events.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Why Metal Roofing Excels in Big Spring</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Temperature Stability:</strong> Metal roofing expands and contracts uniformly, preventing the thermal shock damage common with other materials in Big Spring's extreme temperature swings.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Lightning Protection:</strong> Metal roofing safely conducts electrical energy, reducing fire risk during the frequent thunderstorms that develop over West Texas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>UV Resistance:</strong> Advanced coating systems reflect up to 70% of solar radiation, preventing degradation from Big Spring's intense West Texas sun exposure.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Longevity:</strong> While asphalt shingles last 15-20 years in Big Spring's climate, our metal roofing systems provide 40-50+ years of reliable protection.</span>
                </li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Premium Metal Roofing Materials for Big Spring Properties
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Standing Seam Steel Roofing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our flagship standing seam steel roofing system represents the pinnacle of durability and performance for Big Spring properties. Featuring concealed fasteners and interlocking panels, this system creates an impenetrable barrier against West Texas wind-driven rain and devastating hail storms.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Performance Benefits:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 140+ mph wind resistance</li>
                      <li>• Class A fire resistance</li>
                      <li>• 26-gauge steel construction</li>
                      <li>• 40-year paint warranty</li>
                      <li>• Energy Star certified options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Big Spring Applications:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Oil field service facilities</li>
                      <li>• Commercial and retail buildings</li>
                      <li>• Agricultural structures</li>
                      <li>• Residential properties</li>
                      <li>• Industrial complexes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Aluminum Roofing Systems</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For Big Spring properties requiring superior corrosion resistance, our aluminum roofing systems provide exceptional durability in West Texas's challenging environment. Aluminum's natural corrosion resistance makes it ideal for properties exposed to industrial elements or extreme weather conditions.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Key Advantages:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Superior corrosion resistance</li>
                      <li>• Lightweight construction</li>
                      <li>• Enhanced energy efficiency</li>
                      <li>• 50+ year lifespan</li>
                      <li>• 100% recyclable material</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Ideal For:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Oil and gas facilities</li>
                      <li>• Chemical processing plants</li>
                      <li>• Food processing facilities</li>
                      <li>• Healthcare institutions</li>
                      <li>• Educational facilities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Copper Roofing Excellence</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For Big Spring properties seeking unmatched longevity and distinctive appearance, copper roofing represents the ultimate investment. With proper installation, copper roofing can last over 100 years while developing a beautiful patina that enhances protection against West Texas weather.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Premium Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 100+ year lifespan</li>
                      <li>• Natural antimicrobial properties</li>
                      <li>• Self-healing patina development</li>
                      <li>• Zero maintenance requirements</li>
                      <li>• Prestigious appearance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Perfect For:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Historic building restoration</li>
                      <li>• Premium commercial properties</li>
                      <li>• Religious institutions</li>
                      <li>• Municipal buildings</li>
                      <li>• Architectural landmarks</li>
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
              Expert Installation Process for Maximum Durability
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">The 5 Star Installation Advantage</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our installation process is specifically designed for Big Spring's extreme West Texas weather conditions. Every step follows manufacturer specifications and exceeds local building code requirements to ensure maximum wind resistance and longevity against severe hailstorms and high winds.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Structural Assessment & Reinforcement</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Before installation begins, our team conducts a comprehensive structural analysis to ensure your building can support the metal roofing system and withstand Big Spring's severe wind loads. We reinforce structural elements as needed and verify proper load distribution for West Texas conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Advanced Underlayment Systems</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We install high-performance synthetic underlayment that provides secondary weather protection and vapor barriers. This critical layer prevents wind-driven moisture infiltration during the severe thunderstorms and hailstorms common in Howard County.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Precision Panel Installation</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Each panel is precisely measured, cut, and installed with mechanical fasteners rated for extreme wind conditions. Our concealed fastening system prevents thermal movement stress while maintaining superior wind uplift resistance against Big Spring's high winds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Wind-Resistant Edge Details</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Critical edge areas receive reinforced fastening and specialized flashing systems designed to prevent wind uplift. These details are engineered specifically for Big Spring's high-wind environment and frequent severe weather events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-brown mb-2">Comprehensive Quality Inspection</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Every installation undergoes rigorous quality control inspection, including fastener torque verification, seam integrity testing, and weather-tightness confirmation. We provide detailed documentation for warranty and insurance purposes specific to West Texas requirements.
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
              Energy Efficiency & Cost Savings in West Texas Heat
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">Reducing Energy Costs in Big Spring's Extreme Climate</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Metal roofing's reflective properties provide significant energy savings for Big Spring properties. During summer months when temperatures frequently exceed 105°F, metal roofing can reduce cooling costs by 10-25% compared to traditional roofing materials, saving thousands annually.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Summer Benefits</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Solar Reflectance:</strong> Cool roof coatings reflect up to 70% of solar energy, crucial during Big Spring's intense summer heat</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Thermal Emittance:</strong> Metal roofing rapidly releases absorbed heat, preventing the heat buildup common in West Texas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Air Gap Ventilation:</strong> Proper installation creates ventilation space that further reduces heat transfer in high-temperature conditions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Winter Performance</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Snow Shedding:</strong> Smooth metal surface prevents ice dam formation during Big Spring's occasional winter storms</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Thermal Bridging:</strong> Continuous insulation systems prevent heat loss through structural elements</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">•</span>
                      <span><strong>Condensation Control:</strong> Vapor barriers prevent moisture-related efficiency losses during temperature fluctuations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Long-Term Value Proposition</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">40-50</div>
                  <div className="text-gray-700 font-semibold">Years Lifespan</div>
                  <div className="text-sm text-gray-600 mt-1">vs. 15-20 for asphalt</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">25%</div>
                  <div className="text-gray-700 font-semibold">Energy Savings</div>
                  <div className="text-sm text-gray-600 mt-1">Annual cooling costs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">15%</div>
                  <div className="text-gray-700 font-semibold">Property Value</div>
                  <div className="text-sm text-gray-600 mt-1">Immediate increase</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Maintenance & Longevity in West Texas
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-brand-gold">Minimal Maintenance, Maximum Protection</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                One of metal roofing's greatest advantages in Big Spring's harsh West Texas climate is its minimal maintenance requirements. While traditional roofing materials require frequent repairs and replacements due to hail damage and extreme weather exposure, metal roofing maintains its protective properties with minimal intervention.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Annual Inspection Checklist</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Visual panel condition assessment</li>
                    <li>✓ Fastener tightness verification</li>
                    <li>✓ Flashing and trim inspection</li>
                    <li>✓ Gutter and drainage systems</li>
                    <li>✓ Sealant condition evaluation</li>
                    <li>✓ Storm damage assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-brown mb-4">Professional Maintenance Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Post-hailstorm damage assessment</li>
                    <li>• Preventive maintenance programs</li>
                    <li>• Coating restoration services</li>
                    <li>• Emergency repair response</li>
                    <li>• Warranty compliance inspections</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-3">5 Star Maintenance Program</h4>
                <p className="text-gray-700">
                  Our comprehensive maintenance program ensures your metal roofing investment continues to protect your Big Spring property for decades. We provide annual inspections, preventive maintenance, and priority emergency response to keep your roofing system performing at peak efficiency through all of West Texas's weather challenges.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Big Spring, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-101.47!3d32.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sBig%20Spring%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Big Spring, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Big Spring property owners. Expert metal roofing with comprehensive warranties and insurance claim assistance.
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
