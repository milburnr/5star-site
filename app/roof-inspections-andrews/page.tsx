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
  title: "Roof Inspections Andrews TX | 5 Star Commercial Roofing",
  description: "Professional roof inspections in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsAndrewsPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspections",
                      "url": "/roof-inspections/"
              },
              {
                      "name": "Andrews",
                      "url": "/roof-inspections-andrews/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.3187, "longitude": -102.5454 },
        "url": "https://5starroofingpros.com/roof-inspections-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Andrews, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "name": "Andrews",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional roof inspections in Andrews TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/commercial-roofing-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Andrews</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Roof Inspections Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof inspections in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Andrews's Premier Roof Inspection Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional roof inspections in Andrews, Texas are critical for protecting property investments in the Permian Basin's harsh environment. Andrews County experiences 6-8 devastating hailstorms annually, with supercell thunderstorms producing softball-size hail. Combined with sustained winds exceeding 70 mph, extreme temperature fluctuations from -5°F to 115°F, and intense UV radiation at 3,176 feet elevation, Andrews properties require specialized inspection expertise to identify vulnerabilities before they become costly problems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has performed over 1,200 professional roof inspections throughout Andrews and Andrews County. Our certified inspectors understand Permian Basin weather damage signatures, from subtle hail impact patterns to wind uplift indicators that untrained eyes miss. From oil industry facilities to residential properties near the Andrews County Courthouse, we provide comprehensive assessments that protect your investment.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Comprehensive Inspection Services</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Andrews inspection process utilizes advanced technology including thermal imaging cameras, moisture meters, and drone photography to identify issues surface inspections miss. We provide detailed reports with photographic documentation, priority recommendations, and insurance-grade damage assessments when needed.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Annual Maintenance Inspections</h4>
                <p className="text-gray-600 mb-3">Comprehensive yearly assessments to identify issues before they become major problems.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Complete exterior evaluation</li>
                  <li>• Interior moisture detection</li>
                  <li>• Photo documentation</li>
                  <li>• Repair prioritization</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Post-Storm Assessments</h4>
                <p className="text-gray-600 mb-3">Emergency inspections following Permian Basin severe weather events.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Hail damage documentation</li>
                  <li>• Wind damage evaluation</li>
                  <li>• Insurance claim preparation</li>
                  <li>• Emergency repair needs</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Advanced Inspection Technology</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We utilize cutting-edge inspection technology to provide Andrews property owners with accurate, comprehensive assessments. Our drone inspections safely access steep slopes and dangerous areas, while thermal imaging detects hidden moisture and energy loss issues.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Why Andrews Properties Need Regular Inspections:</h4>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• <strong>Frequent Large Hail:</strong> 6-8 annual events causing cumulative damage</li>
                <li>• <strong>High Wind Exposure:</strong> Sustained Permian Basin winds stress systems</li>
                <li>• <strong>UV Degradation:</strong> Elevation intensifies material aging</li>
                <li>• <strong>Temperature Cycling:</strong> Rapid expansion/contraction creates stress</li>
                <li>• <strong>Insurance Requirements:</strong> Many policies require regular inspections</li>
              </ul>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Drone Technology</h4>
                <p className="text-gray-600 mb-2">High-resolution aerial photography safely documents your entire roofing system.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Thermal Imaging</h4>
                <p className="text-gray-600 mb-2">Infrared technology detects moisture intrusion and energy loss invisible to visual inspection.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Detailed Reporting</h4>
                <p className="text-gray-600 mb-2">Comprehensive documentation with photos, priorities, and cost estimates.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Permian Basin Weather Challenges</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Why Andrews Roofs Require Specialized Inspections</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🌪️ Extreme Hail Events</h4>
                    <p className="text-gray-700 mb-4">Andrews County sits in the heart of "Hail Alley," experiencing 6-8 significant hailstorms annually. The Permian Basin's geography creates perfect supercell conditions.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Softball-size hail:</strong> Baseball to softball common</li>
                      <li>• <strong>Multiple events:</strong> Cumulative damage throughout season</li>
                      <li>• <strong>Wind-driven:</strong> Horizontal impact increases damage</li>
                      <li>• <strong>May peak:</strong> Highest activity during spring storms</li>
                      <li>• <strong>Insurance implications:</strong> Multiple claims complicate coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🌬️ Persistent High Winds</h4>
                    <p className="text-gray-700 mb-4">The Permian Basin's flat topography provides no wind breaks, creating sustained high-velocity conditions year-round.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Sustained speeds:</strong> 15-25 mph average daily</li>
                      <li>• <strong>Gust events:</strong> 70+ mph during storms</li>
                      <li>• <strong>Uplift stress:</strong> Constant pressure on fasteners</li>
                      <li>• <strong>Debris impact:</strong> Wind-borne projectiles</li>
                      <li>• <strong>Progressive failure:</strong> Gradual system compromise</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Detailed Inspection Process for Andrews Properties</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Pre-Inspection Assessment (10 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Site Evaluation</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Property orientation and exposure</li>
                          <li>• Surrounding structures and wind patterns</li>
                          <li>• Previous storm damage history</li>
                          <li>• Access routes and safety considerations</li>
                          <li>• Weather conditions for inspection</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Documentation Preparation</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• High-resolution camera setup</li>
                          <li>• Measurement tools and scales</li>
                          <li>• Drone equipment flight checks</li>
                          <li>• Thermal imaging calibration</li>
                          <li>• Previous inspection report review</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Exterior Comprehensive Survey (45 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Material Condition Assessment</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Shingle granule retention analysis</li>
                          <li>• Hail impact measurement and mapping</li>
                          <li>• Wind uplift damage identification</li>
                          <li>• UV degradation assessment for elevation</li>
                          <li>• Thermal expansion stress indicators</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">System Integration Evaluation</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Flashing integrity at all penetrations</li>
                          <li>• Gutter and downspout functionality</li>
                          <li>• Ventilation system performance</li>
                          <li>• Edge securement and perimeter seals</li>
                          <li>• Chimney and vent pipe conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Interior Investigation (20 minutes)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Attic Space Analysis</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Structural member condition assessment</li>
                          <li>• Decking integrity and water damage</li>
                          <li>• Insulation effectiveness and settling</li>
                          <li>• Ventilation airflow measurement</li>
                          <li>• Electrical system safety evaluation</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Moisture Detection Protocol</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Active leak identification</li>
                          <li>• Historical water damage patterns</li>
                          <li>• Mold potential and air quality</li>
                          <li>• Vapor barrier effectiveness</li>
                          <li>• Condensation formation risk</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Andrews Roof Inspectors Examine</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Critical Damage Indicators Specific to Permian Basin</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">⛈️ Hail Damage Signatures</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Impact Craters:</strong> Circular depressions with visible depth</li>
                      <li>• <strong>Exposed Substrate:</strong> Granule loss revealing black mat</li>
                      <li>• <strong>Fracture Patterns:</strong> Radial cracks from impact points</li>
                      <li>• <strong>Soft Spots:</strong> Compromised underlying structure</li>
                      <li>• <strong>Edge Chipping:</strong> Tab damage from glancing hits</li>
                      <li>• <strong>Metal Denting:</strong> Flashing and gutter deformation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">💨 Wind Damage Patterns</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Uplift Indicators:</strong> Shingle lifting and creasing</li>
                      <li>• <strong>Fastener Exposure:</strong> Nail heads or screw backs visible</li>
                      <li>• <strong>Progressive Losses:</strong> Sequential shingle removal</li>
                      <li>• <strong>Membrane Billowing:</strong> Underlayment separation</li>
                      <li>• <strong>Edge Lifting:</strong> Perimeter vulnerability indicators</li>
                      <li>• <strong>Granule Scouring:</strong> Wind-driven abrasive patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🌡️ Temperature Stress Damage</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Thermal Cracking:</strong> Expansion-contraction splits</li>
                      <li>• <strong>Fastener Backing:</strong> Cyclical movement loosening</li>
                      <li>• <strong>Seam Separation:</strong> Joint failure from movement</li>
                      <li>• <strong>Membrane Shrinkage:</strong> Stress concentration areas</li>
                      <li>• <strong>Brittle Fractures:</strong> Cold-weather impact damage</li>
                      <li>• <strong>UV Degradation:</strong> Polymer breakdown at elevation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Advanced Detection Methods for Permian Basin Conditions</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Infrared Thermal Analysis</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Moisture Intrusion Detection</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Temperature differentials indicate wet insulation</li>
                          <li>• Thermal bridging reveals structural compromises</li>
                          <li>• Heat loss patterns show air leakage</li>
                          <li>• Cold spots indicate missing insulation</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Energy Efficiency Assessment</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• HVAC load impact from roof condition</li>
                          <li>• Insulation effectiveness quantification</li>
                          <li>• Ventilation airflow visualization</li>
                          <li>• Thermal envelope integrity mapping</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Drone Technology Applications</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">High-Resolution Documentation</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• 4K video recording for complete coverage</li>
                          <li>• GPS-tagged photography for precise location</li>
                          <li>• Multi-angle documentation for insurance</li>
                          <li>• Time-lapse for progressive damage tracking</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Safety and Access Benefits</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Steep slope access without safety risks</li>
                          <li>• High elevation building inspection</li>
                          <li>• Dangerous weather condition documentation</li>
                          <li>• Multi-story commercial building coverage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Seasonal Inspection Timing for Andrews</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🌸 Spring Storm Season (March-June)</h3>
                <p className="text-gray-700 mb-4"><strong>Peak Activity Period:</strong> Andrews experiences maximum hail and wind events during spring supercell season.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Inspection Priorities:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Pre-season vulnerability assessment</li>
                      <li>• Fresh hail damage documentation</li>
                      <li>• Wind damage from spring storms</li>
                      <li>• Insurance claim preparation timing</li>
                      <li>• Emergency repair prioritization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Weather Considerations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Moderate temperatures for thorough inspection</li>
                      <li>• Lower wind speeds between storm systems</li>
                      <li>• Optimal visibility and lighting conditions</li>
                      <li>• Minimal precipitation interference</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">☀️ Summer Heat Assessment (July-September)</h3>
                <p className="text-gray-700 mb-4"><strong>Heat Stress Evaluation:</strong> Andrews' elevation intensifies UV exposure and thermal cycling stress.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Heat Damage Focus:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• UV degradation assessment at 3,176' elevation</li>
                      <li>• Thermal expansion stress evaluation</li>
                      <li>• Accelerated aging documentation</li>
                      <li>• Membrane and sealant integrity</li>
                      <li>• Ventilation system performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Timing Considerations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Early morning inspections (before 10 AM)</li>
                      <li>• Late evening assessments (after 6 PM)</li>
                      <li>• Safety protocols for extreme heat</li>
                      <li>• Equipment protection from temperature</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">🍂 Fall Preparation (October-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Season Wrap-up Assessment:</strong> Comprehensive evaluation after storm season and before winter.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Annual Assessment:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Cumulative storm damage evaluation</li>
                      <li>• Preventive maintenance planning</li>
                      <li>• Winter weather preparation</li>
                      <li>• End-of-year insurance considerations</li>
                      <li>• Repair project scheduling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Optimal Conditions:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Moderate temperatures for comfort</li>
                      <li>• Reduced wind speeds</li>
                      <li>• Clear skies for documentation</li>
                      <li>• Contractor availability before winter</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">❄️ Winter Monitoring (December-February)</h3>
                <p className="text-gray-700 mb-4"><strong>Limited Access Period:</strong> Emergency-only inspections due to weather and safety concerns.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-800">Winter Challenges:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Ice formation safety hazards</li>
                      <li>• Reduced daylight hours</li>
                      <li>• Equipment functionality in cold</li>
                      <li>• Emergency-only roof access</li>
                      <li>• Interior focus on leak detection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Alternative Methods:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Interior moisture detection</li>
                      <li>• Thermal imaging from inside</li>
                      <li>• Ground-level visual assessment</li>
                      <li>• Drone inspection when weather permits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Claim Preparation for Andrews Properties</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Permian Basin Insurance Challenges</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Common Claim Issues</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Multiple Storm Events:</strong> Separating damage from different hailstorms</li>
                      <li>• <strong>Wind vs. Hail:</strong> Different deductibles and coverage terms</li>
                      <li>• <strong>Pre-existing Condition:</strong> Age-related vs. storm damage</li>
                      <li>• <strong>Cosmetic Classifications:</strong> Functional impact documentation</li>
                      <li>• <strong>Code Upgrade Requirements:</strong> Compliance with current standards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Documentation Standards</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>High-Resolution Photography:</strong> 12MP minimum for detail</li>
                      <li>• <strong>GPS Coordinates:</strong> Precise damage location data</li>
                      <li>• <strong>Weather Correlation:</strong> Storm dates and intensity</li>
                      <li>• <strong>Professional Assessment:</strong> Certified inspector credentials</li>
                      <li>• <strong>Comprehensive Reports:</strong> Detailed scope and pricing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Insurance Adjuster Coordination</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Meeting Preparation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Schedule during optimal weather conditions</li>
                      <li>• Provide safe roof access equipment</li>
                      <li>• Organize documentation chronologically</li>
                      <li>• Prepare damage location maps</li>
                      <li>• Have repair estimates ready</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Professional Advocacy</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Technical damage explanation</li>
                      <li>• Industry standard repair methods</li>
                      <li>• Code compliance requirements</li>
                      <li>• Material matching challenges</li>
                      <li>• Long-term performance implications</li>
                    </ul>
                  </div>
                </div>
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
            Free inspections for Andrews property owners. Expert roof inspections with comprehensive warranties and insurance claim assistance.
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
