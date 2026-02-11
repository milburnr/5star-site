import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing in Odessa TX| Hail Damage Specialists',
  description: 'Residential Roofing in Odessa, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function ResidentialOdessaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Odessa", url: "/residential-roofing-odessa-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-odessa-texas/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Residential Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.8457, "longitude": -102.3676 },
        "url": "https://5starroofingpros.com/residential-roofing-odessa-texas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert residential roofing services in Odessa, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-odessa-7-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Residential Roofing in Odessa, TX</h1>
            <p className="hero-subtitle">Protecting Permian Basin Homes Since 2013</p>
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
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6">
              <strong>Odessa's extreme weather demands tough roofing.</strong> From downtown to West Odessa, homes face intense heat, severe hail, high winds, and the kind of weather that destroys inferior roofing in just a few years.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> built for Odessa conditions. Complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacements</a>, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage repairs</a>, insurance claims, and preventive maintenance—all backed by comprehensive warranties. We also serve <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:underline">Midland</a>, <a href="/residential-roofing-lubbock-texas/" className="text-brand-gold hover:underline">Lubbock</a>, and the entire <a href="/" className="text-brand-gold hover:underline">West Texas region</a>.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Our Residential Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Complete Roof Replacement</h3>
                <p className="text-gray-700 mb-4">Full tear-off and replacement using premium materials designed for Odessa's harsh climate. Impact-resistant shingles, metal roofing, and more.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Architectural shingles (30-50 year)</li>
                  <li>✓ Class 4 impact-resistant options</li>
                  <li>✓ Standing seam metal roofs</li>
                  <li>✓ Complete deck inspection/repair</li>
                  <li>✓ Manufacturer warranties included</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Odessa sees frequent severe hail. We detect hidden damage, document everything for insurance, and handle the entire restoration process.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free hail damage inspections</li>
                  <li>✓ Insurance documentation</li>
                  <li>✓ Meet with adjusters on your behalf</li>
                  <li>✓ Maximize your claim approval</li>
                  <li>✓ Complete restoration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Repairs</h3>
                <p className="text-gray-700 mb-4">Fast, reliable repairs for leaks, storm damage, and wear. We fix it right the first time with quality materials.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Missing shingle replacement</li>
                  <li>✓ Flashing and vent repairs</li>
                  <li>✓ Wind damage fixes</li>
                  <li>✓ 24/7 emergency service</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Preventive Maintenance</h3>
                <p className="text-gray-700 mb-4">Regular inspections and maintenance extend roof life and catch small problems before they become expensive emergencies.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Annual inspections</li>
                  <li>✓ Debris removal</li>
                  <li>✓ Minor repairs included</li>
                  <li>✓ Detailed condition reports</li>
                  <li>✓ Warranty compliance checks</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Odessa Homeowners Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Storm Specialists</h3>
                <p className="text-gray-700">10+ years handling Odessa's severe weather. We know what your home needs to withstand Permian Basin storms.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Experts</h3>
                <p className="text-gray-700">We work directly with insurance companies, handling all paperwork and fighting for maximum coverage.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality First</h3>
                <p className="text-gray-700">Premium materials from top manufacturers. Every installation backed by comprehensive warranties.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Common Roofing Issues in Odessa</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌡️ Extreme Heat Damage</h3>
                <p className="text-gray-700">Odessa's scorching summers (100°F+ for weeks) accelerate shingle aging. UV rays break down asphalt and cause premature failure. We use reflective, UV-resistant materials to combat this.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">⛈️ Hail & Storm Damage</h3>
                <p className="text-gray-700">Large hail frequently pounds Odessa, creating bruising, granule loss, and cracks. Even golf ball-sized hail causes thousands in damage. Class 4 shingles are critical.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💨 Wind Uplift</h3>
                <p className="text-gray-700">High winds in the Permian Basin can lift and tear off shingles. Proper installation with high-wind rated materials prevents blow-offs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏜️ Dust & Debris</h3>
                <p className="text-gray-700">West Texas dust storms deposit debris that clogs valleys, damages shingles, and creates drainage problems. Regular maintenance prevents issues.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Odessa Housing Market & Roofing Demands</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🏡 Odessa Real Estate & Demographics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">As the larger of the Permian Basin's twin cities, Odessa's population of 123,000+ creates substantial roofing demand. The city's economy, driven by oil production and petrochemicals, supports a stable housing market with consistent need for weather-resistant roofing systems.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Median home value:</strong> $148,000</li>
                      <li>• <strong>Average home size:</strong> 1,740 sq ft</li>
                      <li>• <strong>Median home age:</strong> 39 years</li>
                      <li>• <strong>New construction permits:</strong> 380+ annually</li>
                      <li>• <strong>Homeownership rate:</strong> 68.5%</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">Odessa's challenging climate creates unique roofing replacement cycles. The combination of extreme heat, hail events, and oil industry environmental factors requires specialized roofing knowledge and materials.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Annual hail days:</strong> 6.1 (significant damage events)</li>
                      <li>• <strong>Summer high average:</strong> 95°F</li>
                      <li>• <strong>100°F+ days:</strong> 35+ annually</li>
                      <li>• <strong>Wind exposure:</strong> High plains, open terrain</li>
                      <li>• <strong>Roof replacement cycle:</strong> 15-20 years average</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🏘️ Major Odessa Neighborhoods & Roofing Characteristics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">West Odessa</h4>
                    <p className="text-gray-700 text-sm mb-2">Established residential area with homes from 1960s-1990s. Many properties need roof replacements as systems approach 25-30 year age limits.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $135,000 | Common: Age-related replacements, upgrading to impact-resistant</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Northeast Odessa</h4>
                    <p className="text-gray-700 text-sm mb-2">Newer developments with homes built 1990s-2010s. Focus on maintaining manufacturer warranties and implementing preventive maintenance.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $165,000 | Common: Warranty maintenance, hail damage repairs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Sherwood</h4>
                    <p className="text-gray-700 text-sm mb-2">Family-oriented community with ranch-style homes. Straightforward roof configurations make replacements efficient and cost-effective.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $145,000 | Common: Standard replacements, energy efficiency upgrades</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Parkway</h4>
                    <p className="text-gray-700 text-sm mb-2">Diverse neighborhood with varying home ages requiring different roofing approaches. Mix of repair and replacement projects common.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $125,000 | Common: Mixed repair/replacement, budget-conscious solutions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Sunrise Acres</h4>
                    <p className="text-gray-700 text-sm mb-2">Growing area with newer construction requiring modern roofing standards. Emphasis on energy-efficient systems and proper installation.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $155,000 | Common: Modern systems, cool roof technology</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Downtown Area</h4>
                    <p className="text-gray-700 text-sm mb-2">Historic district with character homes often requiring specialized roofing materials to maintain period-appropriate appearance.</p>
                    <p className="text-xs text-gray-600">Avg. home value: $115,000 | Common: Historic preservation, specialized materials</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Detailed Residential Roofing Costs in Odessa</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold mb-4">2025 Odessa Roof Replacement Pricing:</p>
                  <ul className="space-y-3">
                    <li><strong>Small homes (1,000-1,400 sq ft):</strong> $6,800 - $9,800
                      <br /><span className="text-sm text-gray-600">Typical ranch homes, 10-14 squares</span>
                    </li>
                    <li><strong>Standard homes (1,400-2,000 sq ft):</strong> $9,800 - $14,200
                      <br /><span className="text-sm text-gray-600">Single story or small two-story, 14-20 squares</span>
                    </li>
                    <li><strong>Large homes (2,000-2,800 sq ft):</strong> $14,200 - $20,500
                      <br /><span className="text-sm text-gray-600">Two-story or complex ranch, 20-28 squares</span>
                    </li>
                    <li><strong>Premium homes (2,800-3,500 sq ft):</strong> $20,500 - $28,000
                      <br /><span className="text-sm text-gray-600">Large homes, multiple roof planes, 28-35 squares</span>
                    </li>
                    <li><strong>Custom homes (3,500+ sq ft):</strong> $28,000 - $42,000+
                      <br /><span className="text-sm text-gray-600">Complex architecture, premium materials</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-4">Material Options & Pricing:</p>
                  <ul className="space-y-3">
                    <li><strong>Standard Architectural Shingles:</strong> $88-$118/sq
                      <br /><span className="text-sm text-gray-600">25-30 year, good value option</span>
                    </li>
                    <li><strong>Class 4 Impact-Resistant:</strong> $108-$138/sq
                      <br /><span className="text-sm text-gray-600">Essential for Odessa, insurance discounts</span>
                    </li>
                    <li><strong>Cool Roof Architectural:</strong> $118-$158/sq
                      <br /><span className="text-sm text-gray-600">Energy-efficient, heat-reflecting</span>
                    </li>
                    <li><strong>Standing Seam Metal:</strong> $175-$275/sq
                      <br /><span className="text-sm text-gray-600">Long-term value, excellent durability</span>
                    </li>
                    <li><strong>Stone-Coated Steel:</strong> $185-$285/sq
                      <br /><span className="text-sm text-gray-600">Traditional appearance, metal protection</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-brand-brown mb-4">💰 Odessa-Specific Cost Considerations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Heat Mitigation Features</h4>
                    <p className="text-sm text-gray-600 mb-3">Odessa's extreme summer heat makes cooling cost mitigation crucial. Enhanced ventilation and reflective materials provide significant energy savings.</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Reflective shingles upgrade: +$5-12/sq</li>
                      <li>• Ridge vent enhancement: $3-5/linear foot</li>
                      <li>• Soffit ventilation: $2-4/linear foot</li>
                      <li>• Radiant barrier: $0.75-1.25/sq ft</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Local Environmental Factors</h4>
                    <p className="text-sm text-gray-600 mb-3">Permian Basin conditions including dust, oil field activities, and extreme weather require enhanced protection measures.</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Enhanced fastening: +$2-3/sq</li>
                      <li>• Multiple layer removal: +$1.50-2.50/sq</li>
                      <li>• Decking repair (common): $4-8/sq ft</li>
                      <li>• Extended warranty options available</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-brand-brown mb-4">🏦 Financing & Insurance Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">Insurance Coverage</p>
                    <p className="text-sm text-gray-600">Hail damage typically covered 100% by homeowner's insurance minus deductible. We handle all documentation and adjuster meetings to maximize approved claims.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">0% Financing Available</p>
                    <p className="text-sm text-gray-600">12, 18, and 24-month terms for qualified buyers. Extended payment plans up to 144 months with competitive rates starting at 6.99% APR.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Detailed Estimates</p>
                <p className="text-gray-700">Comprehensive estimates include material specifications, labor breakdown, timeline, and warranty details. Most estimates provided within 24 hours of inspection. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or <a href="/contact/" className="text-brand-gold font-bold">schedule online</a>.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Odessa Climate Analysis & Roof Impact</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🌡️ Extreme Heat & Energy Efficiency</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Temperature Impact on Roofing</h4>
                    <p className="text-gray-700 mb-3">Odessa's brutal summer heat creates roof surface temperatures exceeding 150°F, causing accelerated aging, thermal cycling stress, and dramatic increases in cooling costs for homes with inadequate roofing systems.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Average summer high: 95°F</li>
                      <li>• 100°F+ days: 35+ annually</li>
                      <li>• Record high: 115°F</li>
                      <li>• Roof surface temperatures: 150-165°F</li>
                      <li>• Thermal cycling: 45-55°F daily swings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Energy Cost Impact</h4>
                    <p className="text-gray-700 mb-3">Poor roofing systems dramatically increase cooling costs during Odessa's extended hot season. Cool roof technology can reduce energy bills by 18-25% during peak summer months.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Typical cooling season: 6+ months</li>
                      <li>• Average summer electric bill: $180-280</li>
                      <li>• Cool roof savings: $35-70/month</li>
                      <li>• Annual energy savings: $300-600</li>
                      <li>• ROI on cool roof upgrade: 3-5 years</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">⛈️ Storm Patterns & Hail Risk Assessment</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">While not in the direct center of Hail Alley, Odessa experiences significant storm activity that creates substantial roofing damage. Understanding local storm patterns helps homeowners prepare and choose appropriate materials.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Hail Statistics</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Annual hail events: 6.1 days</li>
                        <li>• Average stone size: 0.8 inches</li>
                        <li>• Largest recorded: 3.75" (2021)</li>
                        <li>• Damage threshold: 1" stones</li>
                        <li>• Peak season: April-June (75%)</li>
                        <li>• Annual insurance claims: $28M</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Wind Events</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Average wind speed: 11.8 mph</li>
                        <li>• Peak recorded gust: 81 mph</li>
                        <li>• High wind days (35+ mph): 22/year</li>
                        <li>• Dust storm events: 10-14/year</li>
                        <li>• Prevailing direction: Southwest</li>
                        <li>• Spring wind intensity: Highest</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Environmental Factors</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Elevation: 2,890 feet</li>
                        <li>• UV index: 9-10 year-round</li>
                        <li>• Clear sky days: 270+ annually</li>
                        <li>• Oil industry particulates</li>
                        <li>• Alkaline soil pH: 7.8-8.2</li>
                        <li>• Low humidity: 40-45% avg</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions - Odessa Roofing</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">How long do roofs typically last in Odessa's climate?</h3>
                <p className="text-gray-700">Standard asphalt shingles last 15-20 years in Odessa due to extreme heat and UV exposure. Class 4 impact-resistant shingles extend this to 22-30 years, while quality metal systems can last 40-50+ years despite harsh conditions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">Is metal roofing worth the cost in Odessa?</h3>
                <p className="text-gray-700">Absolutely. Metal roofs excel in Odessa's climate by reflecting heat (reducing cooling costs 15-25%), withstanding extreme weather, and lasting 40+ years. The energy savings and longevity typically offset the higher initial investment within 8-12 years.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">Do I need permits for roof replacement in Odessa?</h3>
                <p className="text-gray-700">Yes, the City of Odessa requires building permits for roof replacements. Current fees are $55 for residential projects. We handle all permitting, plan submissions, and coordinate required inspections as part of our comprehensive service.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">When is the best time to replace a roof in Odessa?</h3>
                <p className="text-gray-700">Fall (September-November) and early spring (March-early April) offer optimal conditions. We avoid peak summer when possible due to extreme heat, but emergency replacements can be completed year-round with early morning scheduling.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">How does oil field activity affect residential roofs?</h3>
                <p className="text-gray-700">Nearby drilling creates vibrations and increases airborne particulates that can accelerate roof aging. We recommend inspections every 2-3 years for homes within 2 miles of active drilling operations and use enhanced fastening methods in these areas.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Best Materials for Odessa Homes</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Impact-Resistant Shingles (Class 4)</h3>
                <p className="text-gray-700 mb-3">Essential for Odessa. These shingles withstand hail impacts, resist wind uplift, and often qualify for 20-35% insurance discounts.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Hail-prone areas, insurance savings</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 30-50 years</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Metal Roofing</h3>
                <p className="text-gray-700 mb-3">Excellent for Odessa's climate. Metal reflects heat (lowering cooling costs), handles extreme weather, and lasts 50+ years.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Long-term investment, energy efficiency</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 40-70 years</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Odessa Home</h2>
            <p className="cta-text">Expert residential roofing built for West Texas weather. Free inspections and insurance assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Schedule Inspection</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Odessa Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/odessa-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Odessa Services</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/metal-roof-installation-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Metal Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Amarillo Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/contact/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Residential Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"}},"areaServed":[{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}}],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Residential Roofing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Complete Roof Replacement"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hail Damage Repair"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Repairs"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Preventive Maintenance"}}]}})}}/>
    </div>
  );
}
