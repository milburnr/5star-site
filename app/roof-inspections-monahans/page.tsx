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
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-monahans/' },
  title: 'Roof Inspections Monahans TX | 5 Star Roofing',
  description: "Professional roof inspections in Monahans TX. Permian Basin experiences 6-8 severe hailstorms annually. Complete insurance documentation and storm damage assessment. Free inspections for Ward County. Call (806) 622-6041",
};

export default function RoofInspectionsMonahansPage() {
  return (
    <>
      <Breadcrumb items={[
        {
          "name": "Home",
          "url": "/"
        },
        {
          "name": "Roof Inspections",
          "url": "/roof-inspections/"
        },
        {
          "name": "Monahans",
          "url": "/roof-inspections-monahans/"
        }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.5943, "longitude": -102.8927 },
        "url": "https://5starroofingpros.com/roof-inspections-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Monahans, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Inspections",
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
              "name": "Monahans",
              "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Monahans TX. Permian Basin storm damage assessment specialists with complete insurance documentation."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-morton-37-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Expert Roof Inspections in <span className="text-brand-gold-light">Monahans, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Weather & Industrial Roofing Specialists
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof inspections in Monahans, Texas. The Permian Basin experiences 6-8 severe hailstorms annually, combined with extreme industrial conditions requiring specialized roofing expertise. Complete storm damage assessment and insurance documentation.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
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
                <div className="text-4xl font-bold text-brand-gold mb-3">15+</div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">100%</div>
                <div className="text-brand-brown font-semibold text-lg">Insurance Approved</div>
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
              Monahans's Premier Roof Inspection Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Monahans, Texas, located in Ward County in the heart of the Permian Basin, presents unique roofing challenges that combine severe West Texas weather with the demanding conditions of America's most productive oil and gas region. This industrial environment, combined with the area's position in the path of severe storm systems, creates extraordinary stress on roofing systems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The Permian Basin experiences 6-8 severe hailstorms annually, with some years producing even more intense weather events. These storms, combined with extreme temperature fluctuations, high winds, dust storms, and the industrial atmospheric conditions common to oil country, create a perfect storm of challenges that require specialized roofing expertise and comprehensive inspection protocols.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2008, 5 Star Commercial Roofing has provided expert roof inspection services throughout Monahans and Ward County. Our certified inspectors understand the unique demands of Permian Basin weather, industrial environmental factors, insurance requirements specific to the region, and the particular needs of both residential and commercial property owners in oil country. From downtown properties near the Ward County Courthouse to industrial facilities throughout the Monahans area.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Comprehensive Roof Inspection for Permian Basin Conditions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🔍 Exterior Assessment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Industrial Contamination Analysis:</strong> Oil field dust, chemical exposure, atmospheric corrosion</li>
                  <li>• <strong>Hail Damage Documentation:</strong> Impact patterns, granule displacement, substrate exposure</li>
                  <li>• <strong>Wind Damage Evaluation:</strong> Desert wind effects, sandblasting, thermal movement</li>
                  <li>• <strong>UV Degradation Assessment:</strong> Extreme solar exposure, material breakdown analysis</li>
                  <li>• <strong>Flashing System Integrity:</strong> Metal deterioration, thermal expansion damage</li>
                  <li>• <strong>Drainage System Analysis:</strong> Sand accumulation, oil field debris, proper function</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏭 Industrial Environment Factors</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Chemical Exposure Effects:</strong> Hydrogen sulfide, hydrocarbon vapor, acid rain damage</li>
                  <li>• <strong>Dust Accumulation Impact:</strong> Caliche dust, sand infiltration, abrasive wear</li>
                  <li>• <strong>Thermal Cycling Stress:</strong> Extreme temperature swings, material fatigue</li>
                  <li>• <strong>Vibration Damage:</strong> Nearby drilling operations, pumping units, traffic</li>
                  <li>• <strong>Air Quality Impact:</strong> Particulate exposure, oxidation acceleration</li>
                  <li>• <strong>Regulatory Compliance:</strong> Environmental protection, safety requirements</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🛢️ Oil Field Specific Considerations</h3>
              <p className="text-lg mb-6">
                The Permian Basin's oil and gas operations create unique environmental stresses on roofing systems. Our inspections specifically address damage from hydrocarbon exposure, dust storms, extreme heat, chemical vapors, and the high-vibration environment common to active drilling areas.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>• Chemical Resistance Testing:</strong> Material compatibility with oil field chemicals
                </div>
                <div>
                  <strong>• Particulate Analysis:</strong> Dust infiltration and abrasive damage assessment
                </div>
                <div>
                  <strong>• Environmental Compliance:</strong> Safety and environmental protection requirements
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Permian Basin Damage Indicators & Assessment
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🌨️ Desert Hailstorm Damage Patterns</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Hail Impact Characteristics</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Desert Hailstone Density:</strong> Extremely dense ice from dry atmospheric conditions</li>
                    <li>• <strong>High-Velocity Impact:</strong> Minimal wind resistance in arid environment</li>
                    <li>• <strong>Angular Ice Formation:</strong> Irregular, sharp-edged hailstones cause cutting damage</li>
                    <li>• <strong>Concentrated Impact Zones:</strong> Storm cell patterns create severe localized damage</li>
                    <li>• <strong>Rapid Accumulation:</strong> Quick hail buildup overwhelms drainage systems</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Industrial Contamination Damage</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Hydrocarbon Softening:</strong> Oil vapors degrade asphalt shingles</li>
                    <li>• <strong>Acid Rain Effects:</strong> Refinery emissions create corrosive precipitation</li>
                    <li>• <strong>Salt Water Damage:</strong> Produced water disposal affects atmospheric conditions</li>
                    <li>• <strong>Particulate Abrasion:</strong> Sand and drill cuttings create surface wear</li>
                    <li>• <strong>Chemical Staining:</strong> Iron oxide, sulfur compounds discolor materials</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Extreme Weather Stress</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Thermal Shock:</strong> 80°F+ daily temperature swings</li>
                    <li>• <strong>UV Intensification:</strong> High altitude and low humidity increase radiation</li>
                    <li>• <strong>Sandstorm Abrasion:</strong> High-velocity sand particles erode surfaces</li>
                    <li>• <strong>Flash Flood Damage:</strong> Desert rain patterns cause rapid water accumulation</li>
                    <li>• <strong>Wind Uplift Stress:</strong> Constant high winds test material adhesion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">💨 Desert Wind & Dust Damage Assessment</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Wind-Driven Damage</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Sustained High Winds:</strong> Constant 25-35 mph winds stress all roof components</li>
                    <li>• <strong>Dust Devil Formation:</strong> Localized wind vortices cause random damage patterns</li>
                    <li>• <strong>Venturi Effects:</strong> Building shapes channel winds creating pressure differentials</li>
                    <li>• <strong>Edge Lifting:</strong> Persistent winds compromise perimeter shingle adhesion</li>
                    <li>• <strong>Debris Impact:</strong> Tumbleweeds, industrial debris become projectiles</li>
                    <li>• <strong>Granule Scouring:</strong> Wind-driven sand strips protective granules</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Dust Storm Effects</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Haboob Damage:</strong> Wall clouds carry massive amounts of abrasive material</li>
                    <li>• <strong>Static Buildup:</strong> Dust friction creates electrical discharge damage</li>
                    <li>• <strong>Infiltration Issues:</strong> Fine particles penetrate smallest openings</li>
                    <li>• <strong>Coating Effects:</strong> Dust accumulation reduces reflectivity and efficiency</li>
                    <li>• <strong>Drainage Blockage:</strong> Sand accumulation clogs gutters and drains</li>
                    <li>• <strong>Accelerated Wear:</strong> Constant particle bombardment increases aging</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Permian Basin Insurance Claim Documentation
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">📋 Specialized Documentation for Oil Country</h3>
              <p className="text-lg leading-relaxed">
                Insurance claims in the Permian Basin require specialized documentation that addresses both traditional storm damage and the unique environmental factors affecting roofing systems in oil and gas producing areas. Our reports provide comprehensive evidence for successful claim resolution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📸 Comprehensive Evidence Package</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Environmental Context Photography:</strong> Industrial conditions affecting roof</li>
                  <li>• <strong>Multi-Spectral Imaging:</strong> Standard and infrared documentation</li>
                  <li>• <strong>Microscopic Analysis:</strong> Granule loss, chemical damage, material degradation</li>
                  <li>• <strong>Time-Stamped Documentation:</strong> Precise damage dating for claim correlation</li>
                  <li>• <strong>Weather Event Correlation:</strong> National Weather Service data integration</li>
                  <li>• <strong>Industry-Standard Reporting:</strong> Formats acceptable to all major insurers</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📄 Technical Analysis Reports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Environmental Impact Assessment:</strong> Industrial vs. storm damage differentiation</li>
                  <li>• <strong>Material Failure Analysis:</strong> Chemical compatibility, thermal stress evaluation</li>
                  <li>• <strong>Regulatory Compliance Review:</strong> Safety, environmental, building code issues</li>
                  <li>• <strong>Life Expectancy Analysis:</strong> Remaining useful life calculations</li>
                  <li>• <strong>Replacement Specifications:</strong> Improved materials for harsh conditions</li>
                  <li>• <strong>Cost-Benefit Analysis:</strong> Repair vs. replacement recommendations</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold mb-4 text-amber-800">⚠️ Monahans Insurance Claim Strategy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-amber-700">Permian Basin Specific Factors</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Document pre-existing environmental stress vs. storm damage</li>
                    <li>• Establish baseline roof condition before recent weather events</li>
                    <li>• Correlate damage with specific storm dates and intensity</li>
                    <li>• Address accelerated aging due to industrial environment</li>
                    <li>• Consider enhanced material requirements for replacement</li>
                    <li>• Account for access issues and specialized labor requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-amber-700">Claims Process Optimization</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Provide environmental context that supports claims</li>
                    <li>• Demonstrate proper maintenance despite harsh conditions</li>
                    <li>• Include upgrade recommendations for code compliance</li>
                    <li>• Address safety requirements for oil field areas</li>
                    <li>• Document specialized material and labor costs</li>
                    <li>• Ensure compliance with environmental regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Permian Basin Weather Patterns & Industrial Impact
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🏜️ Desert Climate & Oil Field Environment</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Monahans sits in Ward County at the heart of the Permian Basin, where the Chihuahuan Desert climate combines with intensive oil and gas operations to create one of the most challenging roofing environments in North America. The region experiences extreme temperature variations, persistent high winds, low humidity, intense solar radiation, and atmospheric contamination from industrial operations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Climate Factors</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Extreme Temperature Range:</strong> From below 20°F to over 110°F annually</li>
                    <li>• <strong>Daily Temperature Swings:</strong> 50-80°F variations cause thermal stress</li>
                    <li>• <strong>Low Humidity:</strong> 15-25% relative humidity accelerates material aging</li>
                    <li>• <strong>High Solar Radiation:</strong> 300+ sunny days annually with intense UV exposure</li>
                    <li>• <strong>Persistent Winds:</strong> 15-25 mph average with frequent 40+ mph gusts</li>
                    <li>• <strong>Minimal Precipitation:</strong> 12 inches annually, mostly in intense storms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Industrial Environmental Factors</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Hydrocarbon Vapors:</strong> Natural gas, crude oil, refined products exposure</li>
                    <li>• <strong>Hydrogen Sulfide:</strong> Sour gas wells create corrosive atmosphere</li>
                    <li>• <strong>Particulate Matter:</strong> Drilling mud, sand, cement dust, road base</li>
                    <li>• <strong>Vibration Effects:</strong> Pumping units, compressors, heavy truck traffic</li>
                    <li>• <strong>Salt Water Exposure:</strong> Produced water disposal affects local atmosphere</li>
                    <li>• <strong>Flare Stack Heat:</strong> Localized extreme heat from gas flaring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-bold text-red-700 mb-2">Spring (Mar-May)</h4>
                <p className="text-red-600 text-sm">Severe thunderstorm season. Large hail, damaging winds, dust storms. Critical inspection period for winter damage assessment.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-700 mb-2">Summer (Jun-Aug)</h4>
                <p className="text-orange-600 text-sm">Extreme heat stress, thermal cycling, UV bombardment. Material fatigue accelerates. Monsoon potential.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-yellow-700 mb-2">Fall (Sep-Nov)</h4>
                <p className="text-yellow-600 text-sm">Temperature moderation, continued wind stress, dust storm season. Preparation for winter conditions.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-700 mb-2">Winter (Dec-Feb)</h4>
                <p className="text-blue-600 text-sm">Thermal contraction, freeze/thaw cycles, ice storms. Blue norther events bring rapid temperature drops.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Why Choose 5 Star for Monahans Roof Inspections?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🛢️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Oil Field Experience</h3>
                <p className="text-gray-600">Over 15 years working in Permian Basin conditions. Deep understanding of how industrial environments affect roofing systems and insurance considerations.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Specialized Analysis</h3>
                <p className="text-gray-600">Advanced testing for chemical exposure, thermal stress, and environmental damage unique to oil and gas producing areas.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Industry Relationships</h3>
                <p className="text-gray-600">Established connections with industrial insurers, environmental consultants, and regulatory agencies for comprehensive claim support.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="industrial-damage">
                <AccordionTrigger className="text-xl font-semibold">
                  How do oil field conditions affect roof inspections?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Oil field environments accelerate roof aging through chemical exposure, particulate abrasion, thermal stress, and vibration. Our inspections specifically assess damage from hydrocarbon vapors, hydrogen sulfide, drilling dust, and extreme temperature cycling common in the Permian Basin. We differentiate between environmental wear and storm damage for accurate insurance claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="inspection-cost">
                <AccordionTrigger className="text-xl font-semibold">
                  What does roof inspection cost in Monahans?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We provide free comprehensive roof inspections for all Monahans and Ward County properties. Our service includes assessment of both storm damage and industrial environmental effects, complete photographic documentation, written reports, and insurance claim support at no charge.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="permian-weather">
                <AccordionTrigger className="text-xl font-semibold">
                  How often does Monahans experience damaging storms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  The Permian Basin experiences 6-8 significant hailstorms annually, with additional damage from dust storms, high winds, and extreme temperature events. Spring months (March-May) are most active for severe weather, but the harsh desert environment and industrial conditions create year-round stress on roofing systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="material-recommendations">
                <AccordionTrigger className="text-xl font-semibold">
                  What roofing materials work best in oil field environments?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Permian Basin conditions require materials resistant to chemical exposure, extreme temperatures, and abrasive particles. We recommend enhanced UV-resistant shingles, chemical-resistant flashing, upgraded ventilation systems, and protective coatings. Our inspections include material suitability assessment for harsh industrial environments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="insurance-claims">
                <AccordionTrigger className="text-xl font-semibold">
                  How do insurance companies handle claims in industrial areas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Insurance claims in oil field areas require detailed documentation separating storm damage from environmental wear. We provide comprehensive reports that establish baseline conditions, correlate damage with specific weather events, and demonstrate proper maintenance despite harsh conditions. Our documentation meets industry standards for successful claim resolution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="commercial-industrial">
                <AccordionTrigger className="text-xl font-semibold">
                  Do you inspect commercial and industrial facilities?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, we specialize in inspecting commercial buildings, industrial facilities, oil field structures, and residential properties throughout the Permian Basin. Our team understands the unique requirements of industrial roofing systems, safety protocols, and environmental compliance issues specific to oil and gas operations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Monahans & Ward County
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.89!3d31.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sMonahans%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monahans, TX Location Map"
              ></iframe>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Monahans Area Coverage</h3>
              <p className="text-lg text-gray-700 mb-4">
                We provide comprehensive roof inspection services throughout Monahans, Ward County, and the surrounding Permian Basin, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• Downtown Monahans</li>
                  <li>• Monahans Sandhills State Park area</li>
                  <li>• Ward County Courthouse district</li>
                  <li>• Highway 80 corridor</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Oil field facilities</li>
                  <li>• Industrial complexes</li>
                  <li>• Residential neighborhoods</li>
                  <li>• Commercial districts</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Rural Ward County</li>
                  <li>• Municipal buildings</li>
                  <li>• Educational facilities</li>
                  <li>• Healthcare facilities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Monahans Property from Permian Basin Conditions</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            The Permian Basin's combination of severe weather and industrial conditions demands specialized roofing expertise. With 6-8 major hailstorms annually plus continuous environmental stress, professional inspections are essential for property protection and insurance compliance. Don't let oil field conditions and desert weather compromise your investment.
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