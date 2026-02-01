import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Amarillo TX | 5 Star Roofing',
  description: 'Roof Replacement in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function RoofReplacementAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Amarillo", url: "/roof-replacement-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/roof-replacement-amarillo/#localbusiness",
            "name": "5 Star Commercial Roofing - Amarillo Roof Replacement",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
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
              "latitude": 35.1768,
              "longitude": -101.8590
            },
            "url": "https://5starroofingpros.com/roof-replacement-amarillo/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "description": "Expert roof replacement in Amarillo TX. Class 4 impact-resistant shingles for Texas Panhandle weather. Potter County: 131 hail days since 2000, 14.3 mph avg winds. Insurance claims assistance. Call (806) 622-6041"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"When should I replace my Amarillo roof?","acceptedAnswer":{"@type":"Answer","text":"Replace when you have widespread hail damage (10+ impacts per 100 sq ft), roof age over 20 years in Potter County's harsh climate, multiple leaks, extensive granule loss, or failed previous repairs. Given Amarillo's 131 hail days since 2000, most roofs need replacement every 15-20 years, sooner without Class 4 shingles."}},{"@type":"Question","name":"How much does roof replacement cost in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Residential: $8,000-$25,000 depending on size and materials. Commercial: $15,000-$100,000+ depending on building size and system type. However, 85% of Amarillo replacements are insurance-covered hail damage where homeowners pay only their deductible ($1,000-$2,500). We provide free estimates with financing options."}},{"@type":"Question","name":"What are the best roofing materials for Amarillo's climate?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant asphalt shingles (residential), TPO or metal roofing (commercial). Amarillo's 131 hail days since 2000, 14.3 mph average winds (highest in Texas), and 86°F temperature swings require materials engineered for extreme conditions. Class 4 shingles reduce damage by 90% and qualify for insurance discounts up to 30%."}},{"@type":"Question","name":"How long does roof replacement take in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Residential: 1-3 days. Single-story homes under 2,000 sq ft take 1-2 days. Two-story or complex roofs require 2-3 days. Commercial: 3-10 days depending on building size. We work efficiently while meeting all City of Amarillo building code requirements. Weather delays possible during winter months."}},{"@type":"Question","name":"Do I need a permit for roof replacement in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Yes. All roofing projects require City of Amarillo building permits per IRC Section 105.1. Contact Building Safety at (806) 378-3041. We handle all permit applications at no extra charge. Requirements include drip edge, proper ventilation (1:150 ratio), wind resistance (110-125 mph standards), and permit display visible from street."}},{"@type":"Question","name":"Will new roof increase my Amarillo home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI in Amarillo. Class 4 impact-resistant roofs add premium value due to insurance discounts (10-30% savings), reduced future maintenance, and buyer confidence in Hail Alley. Homes with new Class 4 roofs sell faster and command higher prices in Potter County's competitive market."}},{"@type":"Question","name":"Can you match my HOA-approved shingle colors?","acceptedAnswer":{"@type":"Answer","text":"Yes. We stock pre-approved colors for Wolflin, Westcliff, Sleepy Hollow, and Colonies HOAs. We handle all architectural committee submissions and approvals at no extra charge. Most Amarillo HOAs approve Class 4 impact-resistant shingles in traditional color palettes. Processing typically takes 1-2 weeks."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/residential-roofing-5.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Replacement in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Lifetime Protection in the Texas Panhandle
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Complete roof replacement for Amarillo homes and businesses. Potter County's extreme weather (131 hail days since 2000, 14.3 mph average winds, 86°F temperature swings) demands premium materials. We install Class 4 impact-resistant roofing with 50-year warranties.
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
                  1100+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Roofs Replaced</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">50yr</div>
                <div className="text-brand-brown font-semibold text-lg">Warranty Options</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
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
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Amarillo's Climate Demands Expert Roof Replacement
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Amarillo's location in the Texas Panhandle creates one of America's most challenging roofing environments. Potter County faces extreme conditions year-round that accelerate roof deterioration and demand premium materials designed for extreme weather resilience.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Extreme Hail</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>131 severe hail days since 2000</strong> - Potter County leads Texas in hail frequency, ranking in America's Top 10 most hail-prone cities.
                </p>
                <p className="text-gray-600 text-sm">
                  438 hail reports within 10 miles in just 12 months. Peak season March-May with secondary fall peak.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">High Winds</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>14.3 mph average winds</strong> - highest in Texas, #2 in America. Extreme gusts exceed 50 mph annually.
                </p>
                <p className="text-gray-600 text-sm">
                  At 3,600' elevation, clashing air masses create severe wind events. Peak winds March-April.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>86°F temperature range</strong> - from 13°F winter lows to 99°F summer highs causes severe thermal stress.
                </p>
                <p className="text-gray-600 text-sm">
                  Constant expansion/contraction accelerates material degradation and shortens roof lifespan.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Amarillo's Unique Housing Market & Roofing Challenges
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Housing Stock Age Profile</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Amarillo's housing market presents unique roofing challenges due to its construction history. With a <strong>median construction year of 1972</strong>, many homes are approaching or exceeding the typical roof replacement cycle.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3">Construction Eras</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>1940s-1960s (Post-War Boom):</span>
                      <strong className="text-brand-gold">40.29%</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>1970s-1990s:</span>
                      <strong className="text-brand-gold">32.27%</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>2000s-Present:</span>
                      <strong className="text-brand-gold">27.44%</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Roof Replacement Timing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Over 70% of Amarillo homes were built before 1990, meaning their original roofs have likely been replaced at least once. In Potter County's extreme climate, roof replacement cycles are shorter than the national average.
                </p>
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Critical Insight</h4>
                  <p className="text-red-700">
                    Homes built in the 1940s-1960s era often have unique architectural features requiring specialized replacement approaches. Ranch-style homes, split-levels, and mid-century designs demand materials that complement their aesthetic while providing modern protection.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Complete Roof Replacement Process in Amarillo
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">Comprehensive Inspection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our certified inspectors assess your current roof condition, identifying hail damage, wind damage, and age-related deterioration. We document all findings with high-resolution photos and detailed reports for insurance claims.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Granule loss assessment</li>
                  <li>• Structural integrity check</li>
                  <li>• Ventilation system evaluation</li>
                  <li>• Insurance documentation</li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">Material Selection & Permits</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We help you choose the optimal materials for Amarillo's climate, prioritizing Class 4 impact-resistant shingles that qualify for insurance discounts. Our team handles all City of Amarillo permit requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact-resistant options</li>
                  <li>• Color matching for HOA compliance</li>
                  <li>• City permit application</li>
                  <li>• Material delivery scheduling</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-4">Professional Installation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complete tear-off and replacement using advanced installation techniques designed for West Texas conditions. We include enhanced ventilation, premium underlayment, and wind-resistant features exceeding code requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Complete tear-off to decking</li>
                  <li>• Enhanced wind resistance (125+ mph)</li>
                  <li>• Improved ventilation systems</li>
                  <li>• Final quality inspection</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Premium Material Options for Amarillo Climate
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Residential Solutions</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Class 4 Architectural Shingles</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Premium choice:</strong> GAF Timberline HDZ, Owens Corning Duration Storm
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Impact-resistant technology reduces hail damage by 90%. Qualifies for 10-30% insurance discounts in Potter County. 50-year warranty with wind resistance up to 130 mph.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$12,000 - $18,000 (average home)</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-bold text-green-800 mb-2">Metal Roofing Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Premium choice:</strong> Standing seam steel, aluminum panels
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Superior hail resistance and wind performance. Energy-efficient cool roof technology reduces cooling costs by 15-25%. Lifetime durability with minimal maintenance.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$18,000 - $35,000 (average home)</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">Synthetic Composite</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Premium choice:</strong> DaVinci Roofscapes, CertainTeed Northgate
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Slate and cedar appearance without weight concerns. Class 4 impact rating with freeze-thaw resistance. Ideal for historic Amarillo neighborhoods.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$20,000 - $40,000 (average home)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Commercial Solutions</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-lg font-bold text-red-800 mb-2">TPO Membrane Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Most popular:</strong> Single-ply thermoplastic membrane
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Excellent hail resistance with heat-reflective surface. Superior wind uplift performance. Energy-efficient white membrane reduces HVAC loads significantly.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$7.50 - $12.50 per sq ft</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Modified Bitumen</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Traditional choice:</strong> Multi-layer built-up systems
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Proven durability in extreme weather. Self-healing properties for minor punctures. Enhanced with granulated cap sheets for UV protection and hail resistance.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$6.00 - $10.00 per sq ft</p>
                  </div>

                  <div className="border-l-4 border-gray-500 pl-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Metal Retrofit Systems</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Upgrade option:</strong> Over existing flat roofs
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Superior wind and hail protection. Eliminates ponding water issues. Significant energy savings with cool roof technology. 50+ year lifespan.
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">$12.00 - $18.00 per sq ft</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Insurance Claims & Financing in Amarillo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Insurance Claim Process</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  85% of Amarillo roof replacements are covered by insurance due to hail damage. We work directly with all major insurance companies to streamline your claim process and ensure maximum coverage.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-bold">Free Storm Damage Assessment</h4>
                      <p className="text-sm text-gray-600">Complete documentation with high-resolution photos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-bold">Insurance Company Meeting</h4>
                      <p className="text-sm text-gray-600">We meet with adjusters to ensure complete coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-bold">Claim Approval & Scheduling</h4>
                      <p className="text-sm text-gray-600">Fast-track approval with immediate project scheduling</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    Average deductible: $1,000 - $2,500. We offer deductible assistance programs for qualifying homeowners.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Financing Options</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Multiple financing solutions available for property owners in Potter County. We work with local and national lenders to provide competitive rates and flexible terms.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">0% Interest Programs</h4>
                    <p className="text-sm text-gray-700">12-18 months same-as-cash options available for qualified applicants</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Extended Terms</h4>
                    <p className="text-sm text-gray-700">60-180 month financing with competitive rates starting at 4.99% APR</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Quick Approval</h4>
                    <p className="text-sm text-gray-700">Same-day approval process with minimal documentation required</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800 font-semibold">
                    Special financing available for energy-efficient upgrades and Class 4 impact-resistant materials.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  When should I replace my Amarillo roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Replace when you have widespread hail damage (10+ impacts per 100 sq ft), roof age over 20 years in Potter County's harsh climate, multiple leaks, extensive granule loss, or failed previous repairs. Given Amarillo's 131 hail days since 2000, most roofs need replacement every 15-20 years, sooner without Class 4 shingles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does roof replacement cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Residential: $8,000-$25,000 depending on size and materials. Commercial: $15,000-$100,000+ depending on building size and system type. However, 85% of Amarillo replacements are insurance-covered hail damage where homeowners pay only their deductible ($1,000-$2,500). We provide free estimates with financing options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the best roofing materials for Amarillo's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Class 4 impact-resistant asphalt shingles (residential), TPO or metal roofing (commercial). Amarillo's 131 hail days since 2000, 14.3 mph average winds (highest in Texas), and 86°F temperature swings require materials engineered for extreme conditions. Class 4 shingles reduce damage by 90% and qualify for insurance discounts up to 30%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does roof replacement take in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Residential: 1-3 days. Single-story homes under 2,000 sq ft take 1-2 days. Two-story or complex roofs require 2-3 days. Commercial: 3-10 days depending on building size. We work efficiently while meeting all City of Amarillo building code requirements. Weather delays possible during winter months.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do I need a permit for roof replacement in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. All roofing projects require City of Amarillo building permits per IRC Section 105.1. Contact Building Safety at (806) 378-3041. We handle all permit applications at no extra charge. Requirements include drip edge, proper ventilation (1:150 ratio), wind resistance (110-125 mph standards), and permit display visible from street.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will new roof increase my Amarillo home value?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. New roofs provide 60-70% ROI in Amarillo. Class 4 impact-resistant roofs add premium value due to insurance discounts (10-30% savings), reduced future maintenance, and buyer confidence in Hail Alley. Homes with new Class 4 roofs sell faster and command higher prices in Potter County's competitive market.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you match my HOA-approved shingle colors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We stock pre-approved colors for Wolflin, Westcliff, Sleepy Hollow, and Colonies HOAs. We handle all architectural committee submissions and approvals at no extra charge. Most Amarillo HOAs approve Class 4 impact-resistant shingles in traditional color palettes. Processing typically takes 1-2 weeks.
                </AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Need Roof Replacement?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Amarillo property owners. Insurance claim assistance available. Call now for immediate service.
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
