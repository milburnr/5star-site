import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roofing Amarillo TX | 5 Star Roofing',
  description: "Expert asphalt shingle roofing in Amarillo TX. Specializing in Class 4 impact-resistant shingles for Texas Panhandle weather. 30-year warranties. Free inspections. Call (806) 622-6041",
};

export default function AsphaltShingleRoofingAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Asphalt Shingle Roofing", url: "/asphalt-shingle-roofing/" },
        { name: "Amarillo", url: "/asphalt-shingle-roofing-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/asphalt-shingle-roofing-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Asphalt Shingle Roofing",
        "image": "https://5starroofingpros.com/images/asphalt-shingles-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/asphalt-shingle-roofing-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Expert asphalt shingle roofing in Amarillo TX. Specializing in Class 4 impact-resistant shingles for Texas Panhandle weather conditions.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "serviceArea": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590}, "geoRadius": "50000"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Asphalt Shingle Roofing Installation",
        "description": "Professional asphalt shingle roofing installation and replacement services in Amarillo, Texas",
        "provider": {"@id": "https://5starroofingpros.com/#organization"},
        "areaServed": "Amarillo, Texas",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Asphalt Shingle Services",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "3-Tab Asphalt Shingle Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Architectural Shingle Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Class 4 Impact-Resistant Shingle Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Asphalt Shingle Roof Replacement"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Storm Damage Shingle Repair"}}
          ]
        }
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"How long do asphalt shingles last in Amarillo's extreme weather?","acceptedAnswer":{"@type":"Answer","text":"In Amarillo's harsh Texas Panhandle climate with severe hail, high winds, and temperature extremes: Standard 3-tab shingles last 12-18 years, architectural shingles 18-25 years, and Class 4 impact-resistant shingles 25-35 years with proper installation and maintenance."}},
          {"@type":"Question","name":"What makes Class 4 impact-resistant shingles essential in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Amarillo experiences severe hailstorms with stones up to golf ball size. Class 4 shingles are tested to withstand 2-inch steel balls dropped from 20 feet, providing 90% better hail protection than standard shingles. They're virtually mandatory for insurance coverage in our area."}},
          {"@type":"Question","name":"What's the average cost of asphalt shingle roofing in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Amarillo asphalt shingle costs: 3-tab shingles $8,500-$12,000 for average home, architectural shingles $11,000-$16,000, Class 4 impact-resistant $13,000-$19,000. Prices include Texas Panhandle wind-rated installation and local permits."}},
          {"@type":"Question","name":"Which shingle colors work best in Amarillo's climate?","acceptedAnswer":{"@type":"Answer","text":"For Amarillo's intense sun and heat, lighter colors like Cool Gray, Weathered Wood, and Oyster Shell reflect more heat. Popular choices include Desert Tan and Adobe matching regional architecture. Avoid dark colors that absorb excessive heat in our 100°+ summers."}},
          {"@type":"Question","name":"Do asphalt shingles qualify for insurance discounts in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Yes! Class 4 impact-resistant asphalt shingles qualify for 15-35% insurance premium discounts in Texas. Given Amarillo's hail frequency, these discounts often pay for the upgrade cost within 3-5 years while providing superior protection."}},
          {"@type":"Question","name":"How do I know if my Amarillo roof needs replacement vs repair?","acceptedAnswer":{"@type":"Answer","text":"Replace if: shingles are 15+ years old, multiple hail damage claims, granule loss exposing underlayment, curling/cracking on south-facing slopes, or leaks during storms. Amarillo's extreme weather accelerates aging—professional inspection recommended every 2 years."}}
        ]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-amarillo-40-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Asphalt Shingle Roofing in <span className="text-brand-gold-light">Amarillo</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Texas Panhandle Weather Specialists</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Expert asphalt shingle installation designed for Amarillo's extreme weather. Specializing in Class 4 impact-resistant shingles that withstand hail, high winds, and temperature swings. Local expertise since 2014.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">35%</div><div className="text-brand-brown font-semibold text-lg">Insurance Savings</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Why Amarillo Needs Specialized Asphalt Shingle Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Texas Panhandle Weather Challenges</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Amarillo sits in the heart of "Hail Alley," experiencing some of the nation's most severe weather. Our climate presents unique challenges that standard roofing materials often can't handle:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Severe hailstorms:</strong> Golf ball-sized hail occurs 2-3 times annually</li>
                  <li>• <strong>Extreme temperature swings:</strong> From -10°F winters to 105°F summers</li>
                  <li>• <strong>High winds:</strong> Sustained winds of 30+ mph, gusts over 70 mph</li>
                  <li>• <strong>UV intensity:</strong> 300+ days of intense sunlight annually</li>
                  <li>• <strong>Rapid freeze-thaw cycles:</strong> Causing material expansion and contraction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Local Expertise</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Since 2014, we've installed over 2,000 asphalt shingle roofs in Amarillo, learning exactly what works in our extreme climate:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Class 4 impact-resistant shingles for maximum hail protection</li>
                  <li>• Enhanced wind-rated installation techniques</li>
                  <li>• Cool-colored options to combat intense heat</li>
                  <li>• Premium underlayments for temperature cycling</li>
                  <li>• Insurance expertise for claim assistance</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Asphalt Shingle Options for Amarillo Homes</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">3-Tab Shingles</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$8,500-$12,000</div>
                <p className="text-gray-700 mb-6">Budget-friendly option for moderate climates. Not recommended for Amarillo's severe weather conditions.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 15-20 year lifespan in TX Panhandle</li>
                  <li>• Basic wind resistance (60-70 mph)</li>
                  <li>• Limited color options</li>
                  <li>• Vulnerable to hail damage</li>
                  <li>• Lower insurance discounts</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-gold relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Architectural Shingles</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$11,000-$16,000</div>
                <p className="text-gray-700 mb-6">Enhanced durability and aesthetics. Good for Amarillo with proper installation techniques.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 20-30 year lifespan locally</li>
                  <li>• Improved wind resistance (90-110 mph)</li>
                  <li>• Dimensional appearance</li>
                  <li>• Better granule retention</li>
                  <li>• More color choices</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">RECOMMENDED</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Class 4 Impact-Resistant</h3>
                <div className="text-3xl font-bold text-brand-gold mb-4">$13,000-$19,000</div>
                <p className="text-gray-700 mb-6">Essential for Amarillo's hail exposure. Maximum protection and insurance savings.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 25-35 year lifespan in harsh weather</li>
                  <li>• UL 2218 Class 4 hail rating</li>
                  <li>• 15-35% insurance premium savings</li>
                  <li>• Superior wind resistance (130+ mph)</li>
                  <li>• Premium color selection</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Why Class 4 Shingles Pay for Themselves in Amarillo</h3>
              <p className="text-lg mb-4">The average Amarillo homeowner saves $800-1,500 annually on insurance with Class 4 shingles. Over a 30-year lifespan, that's $24,000-45,000 in savings—far exceeding the initial upgrade cost.</p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <strong>Insurance Benefits:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Immediate premium reduction</li>
                    <li>• Lower deductibles for hail claims</li>
                    <li>• Faster claim approvals</li>
                    <li>• Protection against policy cancellation</li>
                  </ul>
                </div>
                <div>
                  <strong>Performance Benefits:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• 90% reduction in hail damage</li>
                    <li>• Longer intervals between replacements</li>
                    <li>• Better home resale value</li>
                    <li>• Peace of mind during storms</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Amarillo Climate Considerations</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Best Shingle Colors for Local Climate</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 text-brand-brown">Recommended Colors</h4>
                    <ul className="space-y-2">
                      <li><strong>Weathered Wood:</strong> Reflects heat while hiding dirt from dust storms</li>
                      <li><strong>Oyster Shell:</strong> Cool color that complements Amarillo's prairie landscape</li>
                      <li><strong>Desert Tan:</strong> Matches regional adobe architecture</li>
                      <li><strong>Cool Gray:</strong> Energy-efficient option that stays 10-15°F cooler</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="text-xl font-bold mb-3 text-red-700">Colors to Avoid</h4>
                    <ul className="space-y-2 text-red-700">
                      <li><strong>Charcoal/Black:</strong> Absorbs excessive heat, reduces lifespan</li>
                      <li><strong>Dark Brown:</strong> Accelerates granule loss in intense sun</li>
                      <li><strong>Hunter Green:</strong> Fades quickly in high UV environment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Seasonal Performance Factors</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-brand-brown">Spring/Summer Challenges</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Peak hail season (March-June)</li>
                      <li>• Temperatures reaching 105°F+</li>
                      <li>• Intense UV degradation</li>
                      <li>• Severe thunderstorms with damaging winds</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-brand-brown">Fall/Winter Considerations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Rapid temperature fluctuations</li>
                      <li>• Freeze-thaw cycles causing expansion/contraction</li>
                      <li>• Ice dam formation potential</li>
                      <li>• Wind-driven snow and ice</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-700"><strong>Pro Tip:</strong> We install enhanced ice and water shield along roof edges and valleys to combat Amarillo's temperature extremes and potential ice dam formation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Local Weather Data Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">6.2</div>
                  <div className="text-sm text-gray-700">Average annual hail days<br/>(vs 2.1 US average)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">115°F</div>
                  <div className="text-sm text-gray-700">Temperature differential<br/>(-10°F to 105°F)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">15.8</div>
                  <div className="text-sm text-gray-700">Average wind speed<br/>(3rd highest in Texas)</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Installation Process for Amarillo Conditions</h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Pre-Installation Assessment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                      <span><strong>Structural Evaluation:</strong> Checking for previous hail damage, wind uplift, and deck integrity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                      <span><strong>Climate Analysis:</strong> Assessing roof orientation, shading, and exposure to prevailing winds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                      <span><strong>Insurance Documentation:</strong> Photographing existing conditions and damage for potential claims</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Enhanced Installation Standards</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                      <span><strong>Wind-Rated Fastening:</strong> 6 nails per shingle minimum (vs standard 4) for high-wind resistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">5</span>
                      <span><strong>Premium Underlayment:</strong> Synthetic underlayment rated for temperature extremes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">6</span>
                      <span><strong>Edge Protection:</strong> Enhanced starter strips and drip edge for wind-driven rain</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Timeline & Logistics</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 1</h4>
                    <p className="text-sm text-gray-600">Tear-off and deck inspection. Weather protection if needed.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 2</h4>
                    <p className="text-sm text-gray-600">Underlayment, drip edge, and starter course installation.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                    <h4 className="font-bold text-brand-brown mb-2">Day 3</h4>
                    <p className="text-sm text-gray-600">Shingle installation with enhanced wind-rated fastening.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">✓</div>
                    <h4 className="font-bold text-brand-brown mb-2">Final</h4>
                    <p className="text-sm text-gray-600">Ridge caps, cleanup, and comprehensive quality inspection.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Warranty Protection for Amarillo Weather</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Our Warranty Coverage</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="text-lg font-bold text-green-800 mb-2">30-Year Material Warranty</h4>
                    <p className="text-green-700 text-sm">Manufacturer defects, premature granule loss, and thermal shock damage specific to Texas Panhandle conditions.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">10-Year Workmanship Guarantee</h4>
                    <p className="text-blue-700 text-sm">Installation quality, wind uplift resistance, and fastening integrity. Covers re-installation if wind damage occurs due to installation defects.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">Storm Response Guarantee</h4>
                    <p className="text-yellow-700 text-sm">Emergency tarping within 4 hours of storm damage. Priority scheduling for repairs after severe weather events.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Maintenance for Longevity</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Recommended Maintenance Schedule</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Every 6 months:</strong> Visual inspection for loose, cracked, or missing shingles</li>
                      <li><strong>After major storms:</strong> Professional inspection within 48 hours</li>
                      <li><strong>Annually:</strong> Gutter cleaning and roof penetration sealing check</li>
                      <li><strong>Every 3 years:</strong> Comprehensive professional assessment</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-lg font-bold mb-2 text-brand-brown">Amarillo-Specific Maintenance</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Remove debris after dust storms</li>
                      <li>• Check for wind-lifted shingle tabs</li>
                      <li>• Monitor for granule accumulation in gutters</li>
                      <li>• Inspect for ice dam formation in winter</li>
                      <li>• Document any hail impact marks for insurance</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long do asphalt shingles last in Amarillo's extreme weather?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In Amarillo's harsh Texas Panhandle climate with severe hail, high winds, and temperature extremes: Standard 3-tab shingles last 12-18 years, architectural shingles 18-25 years, and Class 4 impact-resistant shingles 25-35 years with proper installation and maintenance.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes Class 4 impact-resistant shingles essential in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Amarillo experiences severe hailstorms with stones up to golf ball size. Class 4 shingles are tested to withstand 2-inch steel balls dropped from 20 feet, providing 90% better hail protection than standard shingles. They're virtually mandatory for insurance coverage in our area.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the average cost of asphalt shingle roofing in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Amarillo asphalt shingle costs: 3-tab shingles $8,500-$12,000 for average home, architectural shingles $11,000-$16,000, Class 4 impact-resistant $13,000-$19,000. Prices include Texas Panhandle wind-rated installation and local permits.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Which shingle colors work best in Amarillo's climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">For Amarillo's intense sun and heat, lighter colors like Cool Gray, Weathered Wood, and Oyster Shell reflect more heat. Popular choices include Desert Tan and Adobe matching regional architecture. Avoid dark colors that absorb excessive heat in our 100°+ summers.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do asphalt shingles qualify for insurance discounts in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes! Class 4 impact-resistant asphalt shingles qualify for 15-35% insurance premium discounts in Texas. Given Amarillo's hail frequency, these discounts often pay for the upgrade cost within 3-5 years while providing superior protection.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Amarillo roof needs replacement vs repair?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Replace if: shingles are 15+ years old, multiple hail damage claims, granule loss exposing underlayment, curling/cracking on south-facing slopes, or leaks during storms. Amarillo's extreme weather accelerates aging—professional inspection recommended every 2 years.</AccordionContent>
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
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Amarillo property owners. Expert asphalt shingle roofing with comprehensive warranties and insurance assistance. Specializing in Class 4 impact-resistant installations.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}