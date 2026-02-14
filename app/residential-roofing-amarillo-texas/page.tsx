import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-amarillo-texas/' },
  title: 'Residential Roofing Amarillo TX | 5 Star Roofing',
  description: "Expert residential roofing services in Amarillo, Texas. Roof replacement, repair, and upgrades for Amarillo homes. Free estimates. Call (806) 622-6041.",
};

export default function ResidentialAmarilloPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Residential Roofing",
                      "url": "/residential-roofing/"
              },
              {
                      "name": "Amarillo",
                      "url": "/residential-roofing-amarillo-texas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-amarillo-texas/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Residential Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/residential-roofing-amarillo-texas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert residential roofing services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Residential Roofing in Amarillo, TX</h1>
            <p className="hero-subtitle">Expert Roof Replacement & Repair for Amarillo Homes</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Estimate</a>
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
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              Your Amarillo home deserves a roof that can handle Texas Panhandle weather. From Wolflin's historic homes to new construction in Southwest Amarillo, we provide complete residential roofing services built to withstand our extreme climate.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing has been protecting Amarillo homes for over 10 years. We use premium materials rated for hail, high winds, and temperature extremes—backed by industry-leading warranties.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Our Residential Roofing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Complete Roof Replacement</h3>
                <p className="text-gray-700 mb-4">Full tear-off and replacement with premium asphalt shingles or metal roofing. We handle everything from permits to final cleanup. Most projects completed in 1-2 days.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Architectural asphalt shingles</li>
                  <li>✓ Impact-resistant (Class 4) options</li>
                  <li>✓ Metal roofing systems</li>
                  <li>✓ Premium underlayment</li>
                  <li>✓ Proper ventilation</li>
                  <li>✓ 50-year warranties available</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Roof Repair Services</h3>
                <p className="text-gray-700 mb-4">From minor leak repairs to storm damage fixes, we handle all residential roof repairs throughout Amarillo. Fast response and guaranteed workmanship.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Missing/damaged shingle replacement</li>
                  <li>✓ Flashing repairs</li>
                  <li>✓ Vent and pipe boot replacement</li>
                  <li>✓ Storm damage repairs</li>
                  <li>✓ Emergency tarping</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Ventilation Upgrades</h3>
                <p className="text-gray-700 mb-4">Proper attic ventilation is critical in Amarillo's 100°F+ summers. We install ridge vents, soffit vents, and powered systems to extend roof life and reduce cooling costs.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Ridge vent installation</li>
                  <li>✓ Soffit vent improvements</li>
                  <li>✓ Attic fan systems</li>
                  <li>✓ Temperature reduction</li>
                  <li>✓ Energy savings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Insurance Claim Assistance</h3>
                <p className="text-gray-700 mb-4">Had recent hail or wind damage? We handle your insurance claim from inspection to installation. Most storm damage is covered 100% by insurance.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free damage inspections</li>
                  <li>✓ Complete documentation</li>
                  <li>✓ Meet with adjusters</li>
                  <li>✓ Maximize your claim</li>
                  <li>✓ Direct insurance billing</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Amarillo Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Local Amarillo Company</h3>
                <p className="text-gray-700">Located at 2909 S Western St. We're not storm chasers—we'll be here for your warranty needs decades from now.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Premium Materials</h3>
                <p className="text-gray-700">We use only top-tier shingles rated for Texas weather. Class 4 impact-resistant options available for maximum protection.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-700">Our crews are trained, insured, and experienced. We follow manufacturer specifications to ensure your warranty stays valid.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Roofing Challenges in Amarillo</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🌪️ Severe Hail & Wind</h3>
                <p className="text-gray-700">Amarillo sits in Hail Alley with frequent storms. We install impact-resistant shingles and ensure proper wind resistance for 90+ mph gusts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🌡️ Extreme Temperatures</h3>
                <p className="text-gray-700">From 100°F+ summers to below-zero winters, Amarillo roofs face 120+ degree temperature swings annually. We use materials designed for thermal expansion/contraction.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">☀️ Intense UV Exposure</h3>
                <p className="text-gray-700">At 3,605 feet elevation with 260+ sunny days, Amarillo's UV is brutal on roofing. We install UV-stabilized shingles with maximum granule protection.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Amarillo Housing Market & Roofing Trends</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">📊 Amarillo Housing Market Overview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-3">With over 200,000 residents and a median home value of $142,000, Amarillo's housing market offers exceptional value compared to Texas metro averages. The city's stable economy, anchored by agriculture, energy, and manufacturing, has created consistent demand for quality roofing services.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Median home age:</strong> 43 years (many need roof replacements)</li>
                      <li>• <strong>Average home size:</strong> 1,850 square feet</li>
                      <li>• <strong>New construction:</strong> 450+ permits annually</li>
                      <li>• <strong>Home ownership rate:</strong> 67.8%</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-3">Amarillo's location in the Texas Panhandle presents unique roofing challenges. Our contractors understand local building codes and weather patterns that affect roof performance and longevity.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Annual precipitation:</strong> 20.2 inches</li>
                      <li>• <strong>Hail days per year:</strong> 8-12 (above state average)</li>
                      <li>• <strong>Wind speeds:</strong> Regular 30+ mph gusts</li>
                      <li>• <strong>Temperature range:</strong> -10°F to 105°F</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🏘️ Popular Amarillo Neighborhoods We Serve</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Wolflin</h4>
                    <p className="text-gray-700 text-sm mb-2">Historic neighborhood with homes built 1920s-1950s. Many original slate and tile roofs need modern replacements with period-appropriate materials.</p>
                    <p className="text-xs text-gray-600">Average home value: $180,000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Southwest Amarillo</h4>
                    <p className="text-gray-700 text-sm mb-2">Newer developments with homes from 1990s-2010s. Focus on energy-efficient roofing systems and proper ventilation for large floor plans.</p>
                    <p className="text-xs text-gray-600">Average home value: $165,000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">San Jacinto Heights</h4>
                    <p className="text-gray-700 text-sm mb-2">Established area with mid-century homes. Common issues include inadequate ventilation and outdated shingle systems.</p>
                    <p className="text-xs text-gray-600">Average home value: $125,000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Tascosa</h4>
                    <p className="text-gray-700 text-sm mb-2">High-end neighborhood with larger homes requiring premium roofing materials. Metal and architectural shingle installations common.</p>
                    <p className="text-xs text-gray-600">Average home value: $220,000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Eastridge</h4>
                    <p className="text-gray-700 text-sm mb-2">Growing area with newer construction. Focus on proper installation techniques and warranty protection for young homeowners.</p>
                    <p className="text-xs text-gray-600">Average home value: $145,000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Sleepy Hollow</h4>
                    <p className="text-gray-700 text-sm mb-2">Family-oriented community with ranch-style homes. Straightforward roof lines make replacements efficient and cost-effective.</p>
                    <p className="text-xs text-gray-600">Average home value: $135,000</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Detailed Residential Roofing Pricing in Amarillo</h2>
            <div className="space-y-6 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-semibold mb-4">Average roof replacement costs in Amarillo:</p>
                  <ul className="space-y-3">
                    <li><strong>Small homes (1,200-1,500 sq ft):</strong> $7,500 - $10,500
                      <br /><span className="text-sm text-gray-600">Typical ranch homes, 12-16 squares</span>
                    </li>
                    <li><strong>Medium homes (1,500-2,200 sq ft):</strong> $10,500 - $15,000
                      <br /><span className="text-sm text-gray-600">Two-story or large ranch, 16-24 squares</span>
                    </li>
                    <li><strong>Large homes (2,200-3,000 sq ft):</strong> $15,000 - $22,000
                      <br /><span className="text-sm text-gray-600">Complex roof lines, 24-32 squares</span>
                    </li>
                    <li><strong>Luxury homes (3,000+ sq ft):</strong> $22,000 - $35,000+
                      <br /><span className="text-sm text-gray-600">Premium materials, complex architecture</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-4">Material Options & Upgrades:</p>
                  <ul className="space-y-3">
                    <li><strong>Standard Architectural Shingles:</strong> $95-$125/sq
                      <br /><span className="text-sm text-gray-600">25-30 year warranty, good value</span>
                    </li>
                    <li><strong>Impact-Resistant Shingles:</strong> $115-$145/sq
                      <br /><span className="text-sm text-gray-600">Class 4 hail rating, insurance discounts</span>
                    </li>
                    <li><strong>Premium Architectural:</strong> $135-$165/sq
                      <br /><span className="text-sm text-gray-600">50-year warranty, enhanced appearance</span>
                    </li>
                    <li><strong>Metal Roofing Systems:</strong> $180-$280/sq
                      <br /><span className="text-sm text-gray-600">Lifetime warranty, energy efficient</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg mt-6">
                <h3 className="font-semibold text-brand-brown mb-4">💰 Financing Options Available</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">0% Interest Financing</p>
                    <p className="text-sm text-gray-600">12, 18, and 24-month terms available for qualified buyers. No payments, no interest when paid in full within promotional period.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Extended Payment Plans</p>
                    <p className="text-sm text-gray-600">Up to 144-month terms with competitive rates. Monthly payments as low as $89 for typical roof replacements.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Comprehensive Estimates</p>
                <p>Every estimate includes material specifications, labor breakdown, warranty details, and timeline. We provide detailed proposals within 24 hours of inspection. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or schedule online.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Amarillo Climate Impact on Residential Roofs</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🌦️ Detailed Weather Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Hail Damage Risks</h4>
                    <p className="text-gray-700 mb-3">Amarillo experiences an average of 9.3 hail days annually, well above the Texas average of 5.4 days. The peak season runs April through June, with hailstones frequently exceeding 1 inch in diameter.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 2023: 12 significant hail events</li>
                      <li>• Average stone size: 1.2 inches</li>
                      <li>• Largest recorded: 4.25 inches (2019)</li>
                      <li>• Insurance claims: $47M annually</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Wind Load Considerations</h4>
                    <p className="text-gray-700 mb-3">Amarillo's location on the High Plains creates consistent high winds. Building codes require roofing systems rated for 90 mph sustained winds, but many older homes lack proper attachment.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Average wind speed: 13.5 mph</li>
                      <li>• Peak gust recorded: 84 mph</li>
                      <li>• Days over 35 mph: 47 annually</li>
                      <li>• Most common direction: Southwest</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">🌡️ Temperature Extremes & Thermal Cycling</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">Amarillo's continental climate creates severe thermal stress on roofing materials. Daily temperature swings of 40-50°F are common, causing expansion and contraction cycles that can lead to premature shingle failure.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Summer Conditions</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• High: 91°F average</li>
                        <li>• Roof surface: 140°F+</li>
                        <li>• 100°F+ days: 12 annually</li>
                        <li>• UV index: 9-11 (very high)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Winter Conditions</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Low: 23°F average</li>
                        <li>• Below 0°F: 3-5 days</li>
                        <li>• Ice storms: 2-3 annually</li>
                        <li>• Snow load: 15-20 psf max</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Transition Seasons</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Daily swings: 40-60°F</li>
                        <li>• Freeze-thaw cycles: 85+ annually</li>
                        <li>• Spring winds: 25+ mph common</li>
                        <li>• Late season storms: May-June</li>
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
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">How long do roofs last in Amarillo's climate?</h3>
                <p className="text-gray-700">Standard asphalt shingles typically last 18-22 years in Amarillo, compared to 25-30 years in milder climates. Impact-resistant shingles can extend this to 25-30 years, while quality metal roofs can last 40-50+ years despite the harsh conditions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">Do I need a permit for roof replacement in Amarillo?</h3>
                <p className="text-gray-700">Yes, the City of Amarillo requires permits for roof replacements. We handle all permitting as part of our service. Current permit fees are $45 for residential projects under 2,000 sq ft, $65 for larger homes. Inspections are required at completion.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">What's the best time of year for roof replacement in Amarillo?</h3>
                <p className="text-gray-700">Fall (September-November) and early spring (March-April) offer the best weather windows. Summer installations are possible but require early morning starts. We avoid December-February when possible due to freeze-thaw conditions and potential ice/snow.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">How can I tell if my roof has hail damage?</h3>
                <p className="text-gray-700">Look for missing granules, exposed mat, cracked or split shingles, and damaged gutters or vents. However, hail damage isn't always visible from the ground. We provide free damage inspections and can meet with your insurance adjuster to ensure all damage is documented.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">What insurance discounts are available for impact-resistant shingles?</h3>
                <p className="text-gray-700">Most insurance companies offer 15-35% discounts on wind/hail coverage for Class 4 impact-resistant shingles. State Farm, Allstate, and USAA typically offer the highest discounts. We provide documentation needed for your insurance company.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Ready for a New Roof in Amarillo?</h2>
            <p className="cta-text">Free estimates, premium materials, expert installation. Serving Wolflin, Southwest Amarillo, San Jacinto, and all Amarillo neighborhoods.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Get Free Estimate</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Amarillo Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Amarillo Services</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/roof-inspections-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Inspections</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing Info</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Residential Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
