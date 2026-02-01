import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "Metal Roofing Lubbock TX | Expert Service | Free Inspection",
  description: "Professional metal roofing in Lubbock TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function MetalRoofingLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Metal Roofing", url: "/metal-roofing/" },
        { name: "Lubbock", url: "/metal-roofing-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/metal-roofing-lubbock/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Metal Roofing",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/SteelRoofing.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/metal-roofing-lubbock/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional metal roofing in Lubbock TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How long does metal roofing last in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing lasts 50+ years in Texas climate. Standing seam systems with proper installation can last 70 years with minimal maintenance."}},{"@type":"Question","name":"Is metal roofing noisy during rain and hail?","acceptedAnswer":{"@type":"Answer","text":"No. Proper insulation and underlayment make metal roofs as quiet as asphalt shingles. Modern installations are acoustically dampened."}},{"@type":"Question","name":"Does metal roofing increase home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. Metal roofs provide 85-95% ROI, excellent curb appeal, energy savings up to 25%, and appeal to buyers seeking low-maintenance, durable roofing."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/SteelRoofing.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Metal Roofing in <span className="text-brand-gold-light">Lubbock</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional metal roofing throughout Lubbock. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">24/7</div><div className="text-brand-brown font-semibold text-lg">Emergency Service</div></div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Lubbock's Metal Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional metal roofing throughout Lubbock and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Lubbock with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-brown">Built to Last in Lubbock's Harsh Climate</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Lubbock's location on the Llano Estacado presents unique roofing challenges. Our metal roofing systems are specifically engineered to withstand the South Plains' notorious weather patterns, including severe thunderstorms, tornadoes, and dramatic temperature fluctuations.</p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">The Hub City experiences some of Texas's most extreme weather conditions. From devastating hailstorms to winds exceeding 80 mph, Lubbock demands roofing materials and installation techniques that go beyond standard specifications. Our metal roofing solutions deliver this enhanced performance.</p>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Lubbock Durability Advantages:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Tornado-zone rated construction</li>
                    <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Class 4 hail impact resistance</li>
                    <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> 90+ mph sustained wind ratings</li>
                    <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Extreme temperature cycle resistance</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Metal Roofing Systems</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-bold text-brand-brown">Galvalume Plus Coatings</h4>
                    <p className="text-gray-600">Superior corrosion protection combining aluminum and zinc with premium paint systems for Lubbock's dry climate.</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-bold text-brand-brown">Structural Standing Seam</h4>
                    <p className="text-gray-600">24-gauge steel with 2-inch high seams for maximum wind uplift resistance and water management.</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-bold text-brand-brown">Architectural Metal Panels</h4>
                    <p className="text-gray-600">Custom profiles for distinctive appearance with commercial-grade performance standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Engineered for Lubbock's Wind Challenges</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Lubbock sits in the heart of "Tornado Alley," experiencing some of the nation's most severe wind events. Our metal roofing installations exceed local building requirements and provide superior protection.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-red-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">175</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">mph Peak Gust Rating</h3>
                  <p className="text-gray-600">Exceeds Lubbock's extreme wind history</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-red-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">22</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Gauge Minimum</h3>
                  <p className="text-gray-600">Heavy-duty steel for structural integrity</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-red-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">6"</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Fastener Spacing</h3>
                  <p className="text-gray-600">Reinforced attachment pattern</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-red-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">FM</div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Approved</h3>
                  <p className="text-gray-600">Factory Mutual wind uplift certified</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Advanced Fastening Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• #12 pancake head screws with EPDM washers</li>
                    <li>• 6-inch on-center spacing in high-wind zones</li>
                    <li>• Reinforced perimeter fastening patterns</li>
                    <li>• Structural attachment to roof deck every 6 inches</li>
                    <li>• Dual-layer tape sealing at all panel overlaps</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Lubbock-Specific Considerations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tornado-zone construction standards</li>
                    <li>• Enhanced corner and edge reinforcement</li>
                    <li>• Impact-resistant penetration details</li>
                    <li>• Debris-resistant ventilation systems</li>
                    <li>• Emergency repair accessibility features</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Lubbock Weather Resistance Technology</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">⛈️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Severe Thunderstorms</h3>
                  <p className="mb-4">Lubbock averages 50+ thunderstorm days annually, with frequent large hail and damaging winds.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Class 4 hail impact resistance up to 2-inch hail</li>
                    <li>• Lightning protection system compatibility</li>
                    <li>• Rapid drainage design for heavy rainfall</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">🌪️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Tornado Activity</h3>
                  <p className="mb-4">Located in Tornado Alley with documented F4/F5 tornado events requiring maximum wind resistance.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 175+ mph wind uplift resistance</li>
                    <li>• Reinforced structural connections</li>
                    <li>• Debris impact resistance features</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">☀️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Intense UV Exposure</h3>
                  <p className="mb-4">High plains elevation and clear skies create extreme UV conditions requiring premium coatings.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• PVDF and SMP coating systems</li>
                    <li>• UV-resistant color formulations</li>
                    <li>• 30-year fade and chalk warranties</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown text-center">Performance Data: Lubbock Climate</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600 mb-1">104°F</div>
                    <p className="text-sm text-gray-600">Record High Temperature</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">-17°F</div>
                    <p className="text-sm text-gray-600">Record Low Temperature</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">84mph</div>
                    <p className="text-sm text-gray-600">Recorded Wind Gust</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">4.25"</div>
                    <p className="text-sm text-gray-600">Largest Hailstone</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Texas Tech & Lubbock Research Benefits</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 text-center">Lubbock's proximity to Texas Tech University and its renowned Wind Science and Engineering Center provides us access to cutting-edge research in wind resistance and roofing performance.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Research-Backed Installation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Wind tunnel testing data applied to local installations</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Pressure mapping studies for optimal fastening patterns</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Debris impact research influences material selection</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Local climate data integration for design optimization</span></li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Continuous Innovation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Partnership with local engineering professionals</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Access to latest wind resistance technologies</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Field testing of new materials and methods</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span> <span>Documentation of real-world performance data</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-red-600 text-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Scientifically Proven Performance</h3>
                <p>Our installations incorporate findings from Texas Tech's decades of wind damage research, ensuring your roof can withstand Lubbock's most severe weather events.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Energy Efficiency in the South Plains</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">Lubbock's high plains location means intense sun exposure and significant cooling demands. Our metal roofing systems are designed to minimize energy costs through advanced reflective technology and strategic ventilation.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-brand-brown">Cool Roof Technology</h4>
                      <p className="text-gray-600">Energy Star qualified coatings reflect up to 75% of solar radiation, crucial for Lubbock's 270+ sunny days per year.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-brand-brown">Ventilation Integration</h4>
                      <p className="text-gray-600">Properly designed ridge and soffit ventilation prevents heat buildup and reduces cooling loads.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-brand-brown">Insulation Systems</h4>
                      <p className="text-gray-600">Coordinated insulation upgrades maximize metal roofing energy benefits for year-round comfort.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-brown text-center">Lubbock Energy Savings</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
                    <p className="text-gray-700">Cooling Cost Reduction vs. Dark Asphalt</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">15-25°F</div>
                    <p className="text-gray-700">Surface Temperature Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">$600+</div>
                    <p className="text-gray-700">Annual Savings Potential</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600 text-center"><strong>Based on:</strong> Lubbock climate data, average 2,000 sq ft home, and current LP&L utility rates. Individual results may vary.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Lubbock Homeowners Choose Metal Roofing</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🌪️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Tornado Protection</h3>
                  <p className="text-gray-700">Superior wind uplift resistance designed for Tornado Alley conditions. Our installations exceed building codes with enhanced fastening and structural connections proven in extreme wind events.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🥎</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Hail Resistance</h3>
                  <p className="text-gray-700">Class 4 impact rating protects against Lubbock's frequent large hail events. Many insurance companies offer significant discounts for impact-resistant metal roofing systems.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">💡</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Energy Savings</h3>
                  <p className="text-gray-700">Reflective coatings reduce cooling costs in Lubbock's intense summer heat. High plains elevation and minimal shade make energy-efficient roofing especially valuable.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🔧</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Low Maintenance</h3>
                  <p className="text-gray-700">Ideal for Lubbock's dusty, windy conditions. Unlike asphalt shingles, metal roofing won't lose granules, crack, or require frequent repairs from weather damage.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">🏠</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Home Value</h3>
                  <p className="text-gray-700">Significant ROI in Lubbock's market. Buyers appreciate durability, energy efficiency, and protection from severe weather common in the South Plains region.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">♻️</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">Sustainability</h3>
                  <p className="text-gray-700">Environmentally responsible choice with high recycled content and complete recyclability. Reduces landfill waste compared to frequent asphalt shingle replacement.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does metal roofing perform in Lubbock's severe weather?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Metal roofing excels in Lubbock's challenging climate. Our installations withstand 175+ mph winds, Class 4 hail events, and extreme temperature swings. The structural integrity and fastening systems are specifically designed for Tornado Alley conditions, providing superior protection compared to traditional roofing materials.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What energy savings can I expect in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Lubbock homeowners typically see 20-30% reduction in cooling costs with reflective metal roofing. The high plains' intense UV exposure makes cool roof technology especially effective. Annual savings often exceed $600 for average homes, with quick payback through energy efficiency and insurance discounts.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will my insurance company offer discounts for metal roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, many insurers offer 10-35% discounts for Class 4 impact-resistant metal roofing in Lubbock. Given the area's hail and wind history, insurance companies recognize metal roofing's superior protection. Additional discounts may be available for wind resistance and fire ratings.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does installation take in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most residential metal roofing installations in Lubbock complete in 1-3 days, depending on size and complexity. We work efficiently while ensuring proper installation critical for wind resistance. Weather delays are minimal due to Lubbock's generally clear skies, and we can work in most conditions except severe storms.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Is metal roofing too heavy for older Lubbock homes?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">No, metal roofing is actually lighter than most alternatives. Steel roofing weighs 1.5-2 pounds per square foot compared to 2.5-3.5 for asphalt shingles. This makes it ideal for older homes in Lubbock's historic districts where structural capacity may be limited. The lighter weight also reduces stress during high winds.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does metal roofing handle Lubbock's dust and debris?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Metal roofing's smooth surface naturally sheds dust and debris better than textured asphalt shingles. The slick finish prevents accumulation that could harbor moisture or create fire hazards. During Lubbock's frequent dust storms, metal roofing maintains its appearance and performance without degradation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What about noise during Lubbock's thunderstorms?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Modern metal roofing installations are not noisy. Proper insulation, quality underlayment, and solid decking create effective sound barriers. With correct installation, metal roofs are as quiet as asphalt shingles during rain and hail. Many homeowners are surprised by how quiet their metal roofs actually are.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-600 text-white p-12 rounded-3xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Lubbock Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-bold mb-2">Weather Assessment</h3>
                  <p className="text-sm opacity-90">Evaluation of wind exposure, hail history, and site-specific conditions</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-bold mb-2">Engineered Design</h3>
                  <p className="text-sm opacity-90">Structural calculations and wind load analysis for Lubbock conditions</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-bold mb-2">Professional Installation</h3>
                  <p className="text-sm opacity-90">Expert installation using tornado-zone construction standards</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="font-bold mb-2">Final Certification</h3>
                  <p className="text-sm opacity-90">Quality inspection and warranty documentation</p>
                </div>
              </div>
            </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Lubbock Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Lubbock property owners. Expert metal roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}