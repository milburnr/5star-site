import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspection-amarillo-texas/' },
  title: 'Roof Inspection in Amarillo, TX| Hail Damage Assessment',
  description: 'Roof Inspections in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function RoofInspectionAmarilloPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspection",
                      "url": "/roof-inspection/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-inspection-amarillo-texas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspection-amarillo-texas/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roof-inspection-amarillo-texas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Amarillo, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-19-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Roof Inspection in Amarillo, TX</h1>
            <p className="hero-subtitle">Professional Roof Inspections & Assessments</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Schedule Inspection</a>
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
              <strong>Regular roof inspections prevent expensive surprises.</strong> Amarillo's severe hail, high winds, and extreme weather damage roofs gradually. Professional inspections catch problems early—when repairs are simple and affordable.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing provides comprehensive roof inspections throughout Amarillo. Free hail damage inspections, home buying assessments, insurance inspections, and preventive maintenance inspections. Detailed reports with professional photography.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Roof Inspection Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Hail Damage Inspections</h3>
                <p className="text-gray-700 mb-4">After Amarillo hail storms, we provide free inspections to detect damage. Comprehensive assessment with professional photography for insurance claims.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 100% free, no obligation</li>
                  <li>✓ Professional photo documentation</li>
                  <li>✓ Insurance-ready reports</li>
                  <li>✓ Hail impact detection</li>
                  <li>✓ Hidden damage identification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Home Buying Inspections</h3>
                <p className="text-gray-700 mb-4">Protect your investment. Our inspections reveal roof condition, remaining lifespan, and potential issues before you purchase an Amarillo home.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Detailed written reports</li>
                  <li>✓ Remaining life assessment</li>
                  <li>✓ Repair cost estimates</li>
                  <li>✓ Photo documentation</li>
                  <li>✓ Fast 24-48 hour turnaround</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Inspections</h3>
                <p className="text-gray-700 mb-4">Insurance companies require documentation for claims. We provide professional inspections that meet all insurance requirements.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Insurance company approved</li>
                  <li>✓ Detailed damage reports</li>
                  <li>✓ Professional photography</li>
                  <li>✓ Code compliance assessment</li>
                  <li>✓ Claim support</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Preventive Maintenance Inspections</h3>
                <p className="text-gray-700 mb-4">Annual inspections catch small problems before they become expensive emergencies. Extend roof life and maintain warranty compliance.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Comprehensive assessments</li>
                  <li>✓ Minor issues identified</li>
                  <li>✓ Maintenance recommendations</li>
                  <li>✓ Warranty compliance checks</li>
                  <li>✓ Annual inspection programs</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">What We Inspect</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Roofing Materials</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Shingle condition and age</li>
                    <li>✓ Granule loss assessment</li>
                    <li>✓ Cracking, curling, or missing shingles</li>
                    <li>✓ Hail impact damage</li>
                    <li>✓ Wind damage indicators</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Flashing & Penetrations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Valley flashing condition</li>
                    <li>✓ Chimney flashing and seals</li>
                    <li>✓ Vent pipe boots</li>
                    <li>✓ Skylight seals</li>
                    <li>✓ HVAC penetrations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Drainage Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Gutter condition</li>
                    <li>✓ Downspout functionality</li>
                    <li>✓ Debris accumulation</li>
                    <li>✓ Water flow assessment</li>
                    <li>✓ Ice dam indicators</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Structural Elements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Decking condition (from attic)</li>
                    <li>✓ Sagging or structural issues</li>
                    <li>✓ Ventilation adequacy</li>
                    <li>✓ Interior moisture/stains</li>
                    <li>✓ Insulation condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">When to Schedule a Roof Inspection</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌪️ After Severe Storms</h3>
                <p className="text-gray-700">After Amarillo hail storms, high winds, or severe weather, schedule a free inspection. Even minor hail creates damage that worsens over time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">📆 Annual Preventive Inspections</h3>
                <p className="text-gray-700">Schedule annual inspections to catch small problems early. This is especially important for roofs over 10 years old or with past hail damage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏠 Before Buying a Home</h3>
                <p className="text-gray-700">Never purchase an Amarillo home without a professional roof inspection. A $200 inspection can reveal $15,000+ in needed repairs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💰 Before Selling a Home</h3>
                <p className="text-gray-700">Pre-listing inspections identify issues that could derail sales. Address problems proactively or adjust pricing accordingly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">⚠️ When You Notice Problems</h3>
                <p className="text-gray-700">Water stains, missing shingles, sagging areas, or increased energy bills all indicate roof problems requiring professional inspection.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Roof Inspection Pricing in Amarillo</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-brand-brown mb-4">Free Inspections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Hail damage inspections:</strong> Always FREE</li>
                  <li>✓ <strong>Storm damage inspections:</strong> FREE after major weather events</li>
                  <li>✓ <strong>Insurance claim support:</strong> FREE when we perform repairs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-brand-brown mb-4">Paid Inspection Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Home buying inspection:</strong> $150-$300 (detailed written report)</li>
                  <li>• <strong>Comprehensive assessment:</strong> $200-$400 (including drone photography)</li>
                  <li>• <strong>Annual maintenance inspection:</strong> FREE with maintenance contract</li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm">Inspection fees often credited toward repairs if work is performed by us.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">What You Receive</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-4xl">📸</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Professional Photography</h3>
                    <p className="text-gray-700">High-resolution photos documenting all damage and areas of concern. Includes close-ups of hail impacts, damaged shingles, and problem areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">📋</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Detailed Written Report</h3>
                    <p className="text-gray-700">Comprehensive report covering all roof components, condition assessment, problems identified, and recommended repairs with cost estimates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Roof Diagram</h3>
                    <p className="text-gray-700">Marked roof diagram showing location of damage, measurements, and areas requiring attention.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">💰</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Repair Cost Estimate</h3>
                    <p className="text-gray-700">Detailed estimates for any needed repairs, from minor fixes to complete replacement if necessary.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Detailed Inspection Process</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Step 1: Exterior Visual Assessment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Roofing Materials Inspection</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Asphalt Shingles:</strong> Check for granule loss, cracking, curling edges, missing tabs</li>
                      <li>• <strong>Hail Impact Marks:</strong> Look for circular bruises, exposed mat, soft spots</li>
                      <li>• <strong>Wind Damage:</strong> Lifted shingles, torn edges, exposed nails</li>
                      <li>• <strong>Age Assessment:</strong> Overall condition vs. expected lifespan</li>
                      <li>• <strong>Color Matching:</strong> Fading, discoloration patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Structural Components</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Ridge Lines:</strong> Sagging, waviness, alignment issues</li>
                      <li>• <strong>Roof Slope:</strong> Proper drainage, ponding areas</li>
                      <li>• <strong>Eaves & Soffits:</strong> Damage, ventilation adequacy</li>
                      <li>• <strong>Fascia Boards:</strong> Rot, warping, paint condition</li>
                      <li>• <strong>Chimney Structure:</strong> Cracks, mortar condition, cap integrity</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Step 2: Flashing & Penetration Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Critical Seal Points</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Valley Flashing:</strong> Proper installation, corrosion, loose sections</li>
                      <li>• <strong>Step Flashing:</strong> Wall intersections, chimney connections</li>
                      <li>• <strong>Drip Edge:</strong> Condition, proper overlap, ice dam protection</li>
                      <li>• <strong>Pipe Boots:</strong> Cracking, separation from pipe, rubber deterioration</li>
                      <li>• <strong>Vent Penetrations:</strong> Seal integrity, flashing condition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Weather Vulnerability Assessment</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Wind Uplift Resistance:</strong> Fastener patterns, edge securement</li>
                      <li>• <strong>Water Penetration Points:</strong> Likely failure locations</li>
                      <li>• <strong>Ice Dam Susceptibility:</strong> Insulation, ventilation, eave protection</li>
                      <li>• <strong>Hail Impact Zones:</strong> Most vulnerable roof areas</li>
                      <li>• <strong>UV Exposure:</strong> South-facing deterioration patterns</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Step 3: Interior Assessment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Attic Space Investigation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Decking Condition:</strong> Sagging, water stains, soft spots</li>
                      <li>• <strong>Structural Integrity:</strong> Rafter condition, support adequacy</li>
                      <li>• <strong>Insulation Assessment:</strong> R-value, moisture damage, pest intrusion</li>
                      <li>• <strong>Ventilation Evaluation:</strong> Air flow, ridge vents, soffit vents</li>
                      <li>• <strong>Electrical Safety:</strong> Wiring condition, junction boxes, fire hazards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Moisture & Air Quality</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Water Intrusion:</strong> Active leaks, staining patterns</li>
                      <li>• <strong>Mold Assessment:</strong> Growth patterns, air quality concerns</li>
                      <li>• <strong>Condensation Issues:</strong> Vapor barriers, temperature differentials</li>
                      <li>• <strong>Air Sealing:</strong> Energy efficiency, thermal bridges</li>
                      <li>• <strong>Pest Evidence:</strong> Animal intrusion, damage assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Seasonal Roof Inspection Timing in Amarillo</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🌪️</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Spring Inspections (March-May)</h3>
                  <p className="text-gray-700 mb-4"><strong>Peak hail season in Amarillo.</strong> Critical timing for damage assessment and insurance claims.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-800">Why Spring Matters:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Amarillo averages 2-3 hailstorms annually</li>
                        <li>• Insurance claim deadlines (typically 1 year)</li>
                        <li>• Contractors less busy than summer peak</li>
                        <li>• Weather mild for thorough inspections</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Spring Focus Areas:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Fresh hail damage documentation</li>
                        <li>• Winter ice dam damage</li>
                        <li>• Wind damage from spring storms</li>
                        <li>• Preparation for summer heat</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">☀️</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Summer Inspections (June-August)</h3>
                  <p className="text-gray-700 mb-4"><strong>Heat stress assessment period.</strong> Evaluate thermal expansion damage and UV deterioration.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-800">Summer Considerations:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Temperatures exceed 100°F regularly</li>
                        <li>• UV radiation accelerates aging</li>
                        <li>• Thermal cycling stresses materials</li>
                        <li>• Limited inspection time due to heat</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Heat Damage Indicators:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Shingle curling and cracking</li>
                        <li>• Granule accelerated loss</li>
                        <li>• Flashing expansion issues</li>
                        <li>• Attic ventilation adequacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🍂</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Fall Inspections (September-November)</h3>
                  <p className="text-gray-700 mb-4"><strong>Winter preparation period.</strong> Ideal time for comprehensive maintenance and preparation.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-800">Fall Advantages:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Moderate temperatures for inspections</li>
                        <li>• Post-summer damage assessment</li>
                        <li>• Pre-winter weatherization</li>
                        <li>• Lower contractor demand</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Fall Priorities:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Gutter cleaning and assessment</li>
                        <li>• Flashing seal integrity</li>
                        <li>• Insulation effectiveness</li>
                        <li>• Ventilation optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">❄️</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Winter Inspections (December-February)</h3>
                  <p className="text-gray-700 mb-4"><strong>Limited exterior access.</strong> Focus on interior signs and emergency assessments only.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-800">Winter Limitations:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Icy conditions limit roof access</li>
                        <li>• Snow conceals damage</li>
                        <li>• Shortened daylight hours</li>
                        <li>• Emergency-only roof work</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Interior Focus:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Attic ice dam indicators</li>
                        <li>• Interior leak detection</li>
                        <li>• Ventilation performance</li>
                        <li>• Energy efficiency assessment</li>
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
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance Claim Preparation & Support</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Documentation Standards for Insurance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Required Photography</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Overview shots:</strong> Entire roof from multiple angles</li>
                      <li>• <strong>Close-up damage:</strong> Individual hail impacts, cracked shingles</li>
                      <li>• <strong>Measurement references:</strong> Coins or rulers for scale</li>
                      <li>• <strong>Comparative photos:</strong> Damaged vs. undamaged areas</li>
                      <li>• <strong>Interior evidence:</strong> Water stains, attic damage</li>
                      <li>• <strong>Serial numbers:</strong> Equipment, materials for matching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Written Documentation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Detailed damage list:</strong> Location, size, severity of each impact</li>
                      <li>• <strong>Material specifications:</strong> Brand, model, age, color</li>
                      <li>• <strong>Replacement cost estimates:</strong> Current market pricing</li>
                      <li>• <strong>Code compliance notes:</strong> Required upgrades, permits</li>
                      <li>• <strong>Weather data:</strong> Storm dates, hail size confirmation</li>
                      <li>• <strong>Professional credentials:</strong> Inspector qualifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Working With Insurance Adjusters</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Meeting Preparation</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Schedule during optimal weather</li>
                        <li>• Provide ladder access if needed</li>
                        <li>• Present organized documentation</li>
                        <li>• Point out all damage areas</li>
                        <li>• Explain repair necessity vs. cosmetic</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Common Disputes</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Age vs. storm damage differentiation</li>
                        <li>• Functional vs. cosmetic damage</li>
                        <li>• Matching existing materials</li>
                        <li>• Code upgrade requirements</li>
                        <li>• Hidden damage discovery</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Claim Timeline Management</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Critical Deadlines</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <strong>Initial claim:</strong> Within days of storm</li>
                        <li>• <strong>Full documentation:</strong> 30-60 days typical</li>
                        <li>• <strong>Adjuster meeting:</strong> 2-4 weeks from claim</li>
                        <li>• <strong>Dispute resolution:</strong> 30 days from denial</li>
                        <li>• <strong>Statute of limitations:</strong> 1-2 years in Texas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Process Optimization</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• File claims immediately after storms</li>
                        <li>• Document everything chronologically</li>
                        <li>• Maintain communication records</li>
                        <li>• Schedule professional inspections early</li>
                        <li>• Prepare for potential appeals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Insurance Claim Red Flags</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Avoid These Mistakes</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Never sign insurance checks before repairs complete</li>
                      <li>• Don't accept initial lowball estimates</li>
                      <li>• Avoid contractors demanding insurance payments</li>
                      <li>• Don't start repairs before claim approval</li>
                      <li>• Never hide pre-existing damage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Professional Representation</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Licensed contractors understand claims process</li>
                      <li>• Professional inspectors carry credibility</li>
                      <li>• Public adjusters available for complex claims</li>
                      <li>• Legal counsel for disputed claims</li>
                      <li>• Engineering assessments for structural issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Advanced Inspection Technologies</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🚁</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Drone Photography & Assessment</h3>
                  <p className="text-gray-700 mb-4">High-resolution aerial imagery reveals damage invisible from ground level.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-800">Drone Advantages:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Safe inspection of steep or high roofs</li>
                        <li>• 4K video documentation</li>
                        <li>• Multiple angle coverage</li>
                        <li>• Weather-safe operations</li>
                        <li>• Detailed close-up capability</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Detection Capabilities:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Granule loss patterns</li>
                        <li>• Hail impact distribution</li>
                        <li>• Flashing separation issues</li>
                        <li>• Ponding water locations</li>
                        <li>• Structural alignment problems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🌡️</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Thermal Imaging Inspections</h3>
                  <p className="text-gray-700 mb-4">Infrared technology detects moisture intrusion and insulation deficiencies.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-800">Thermal Detection:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Hidden moisture infiltration</li>
                        <li>• Insulation gaps and voids</li>
                        <li>• Air leakage patterns</li>
                        <li>• Heat loss visualization</li>
                        <li>• Structural temperature variations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Problem Identification:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Water damage before visible stains</li>
                        <li>• Energy efficiency issues</li>
                        <li>• Ventilation inadequacies</li>
                        <li>• Electrical hot spots</li>
                        <li>• HVAC ductwork problems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Comprehensive Reporting Technology</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Digital Documentation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• GPS-tagged photograph locations</li>
                      <li>• Time-stamped evidence</li>
                      <li>• Weather data correlation</li>
                      <li>• Measurement overlay tools</li>
                      <li>• Cloud-based storage backup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Interactive Reports</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Clickable roof diagrams</li>
                      <li>• Before/after comparisons</li>
                      <li>• Zoom-enabled photography</li>
                      <li>• Linked repair estimates</li>
                      <li>• Mobile-friendly viewing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Integration Features</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Direct insurance submission</li>
                      <li>• Contractor estimate linking</li>
                      <li>• Material specification databases</li>
                      <li>• Code compliance checking</li>
                      <li>• Progress tracking tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Free Hail Damage Inspection</h2>
            <p className="text-lg text-gray-800 mb-6">
              <strong>Recent hail storm in Amarillo?</strong> We provide completely free hail damage inspections with no obligation. Even minor hail causes damage—let us check your roof before the next storm.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-blue-800 mb-2">📞 Schedule Your Free Inspection</p>
              <p className="text-gray-700">Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or <a href="/contact/" className="text-brand-gold font-bold">request online</a>. We'll schedule your inspection within 24-48 hours.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Schedule Your Roof Inspection</h2>
            <p className="cta-text">Professional roof inspections throughout Amarillo. Free hail damage inspections available.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Request Inspection</a>
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
              <a href="/residential-roofing-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Roof Inspection","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"telephone":"+18066226041"},"areaServed":{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free hail damage inspections"}})}}/>
    </div>
  );
}
