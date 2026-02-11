import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Inspections Amarillo TX | 5 Star Roofing',
  description: "Professional roof inspections in Amarillo TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Inspections", url: "/roof-inspections/" },
        { name: "Amarillo", url: "/roof-inspections-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Inspections",
        "image": "https://5starroofingpros.com/images/roof-inspection-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-inspections-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "description": "Professional roof inspections in Amarillo TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Roof Inspection",
            "name": "Roof Inspections in Amarillo",
            "description": "Professional roof inspections services in Amarillo, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
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
              "name": "Roof Inspections Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspections Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspections Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does a roof inspection cost in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"We provide FREE roof inspections in Amarillo with no obligation. Comprehensive reports include photos, damage documentation, and recommendations."}},{"@type":"Question","name":"How long does a roof inspection take?","acceptedAnswer":{"@type":"Answer","text":"Most residential inspections take 30-60 minutes. Commercial buildings require 1-3 hours depending on size and complexity."}},{"@type":"Question","name":"When should I get my roof inspected?","acceptedAnswer":{"@type":"Answer","text":"After any hailstorm, before buying/selling property, annually for maintenance, or if you notice leaks, missing shingles, or interior water stains."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Inspections in <span className="text-brand-gold-light">Amarillo</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof inspections throughout Amarillo. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Amarillo's Comprehensive Roof Inspection Experts</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof inspections throughout Amarillo and surrounding areas. We understand the unique challenges posed by Texas Panhandle weather, from devastating hailstorms to 80+ mph wind events, extreme temperature fluctuations, and relentless UV exposure that can destroy roofs in just a few years.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">Since 2014, we've conducted thousands of roof inspections across Amarillo, from historic downtown properties to new subdivisions in Southwest Amarillo. Our certified inspectors use advanced technology including thermal imaging, moisture meters, and high-resolution drone photography to identify problems that ground-level visual inspections might miss.</p>
            <p className="text-lg text-gray-600 leading-relaxed">We provide detailed inspection reports that satisfy insurance requirements, real estate transactions, and warranty claims. Every inspection includes digital documentation, safety assessments, and prioritized repair recommendations with cost estimates.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-slate-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Our Amarillo Roof Inspectors Examine</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🔍 Structural Components</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Roof Decking:</strong> We check for sagging, warping, or water damage in plywood or OSB sheathing</li>
                  <li><strong>Rafters & Trusses:</strong> Inspection for cracking, splitting, or deflection under load</li>
                  <li><strong>Support Beams:</strong> Assessment of load-bearing capacity and structural integrity</li>
                  <li><strong>Ridge Boards:</strong> Examination for proper installation and weather damage</li>
                  <li><strong>Fascia & Soffit:</strong> Detection of rot, pest damage, or improper ventilation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏠 Roofing Materials</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Shingle Condition:</strong> Granule loss, cracking, curling, or hail impact damage</li>
                  <li><strong>Metal Roofing:</strong> Corrosion, loose fasteners, or panel separation</li>
                  <li><strong>Tile Systems:</strong> Cracked or shifted tiles, underlayment exposure</li>
                  <li><strong>Membrane Roofing:</strong> Punctures, seam failures, or UV degradation</li>
                  <li><strong>Coating Systems:</strong> Adhesion failure, cracking, or wear patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">💧 Water Management</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Gutter Systems:</strong> Proper slope, secure attachment, and debris clearance</li>
                  <li><strong>Downspouts:</strong> Adequate sizing and proper water discharge away from foundation</li>
                  <li><strong>Drainage Patterns:</strong> Standing water identification and slope corrections needed</li>
                  <li><strong>Flashing Details:</strong> Chimney, vent, and skylight waterproofing integrity</li>
                  <li><strong>Ice Dams:</strong> Potential formation areas and prevention measures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌪️ Weather Damage Assessment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Hail Impact:</strong> Bruising, exposed mat, or granule displacement</li>
                  <li><strong>Wind Damage:</strong> Lifted shingles, exposed fasteners, or blown-off materials</li>
                  <li><strong>Storm Damage:</strong> Tree impact, debris damage, or structural shifts</li>
                  <li><strong>UV Deterioration:</strong> Accelerated aging from Amarillo's intense sun exposure</li>
                  <li><strong>Thermal Cycling:</strong> Expansion/contraction damage from temperature swings</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Requirements for Amarillo Roof Inspections</h2>
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Insurance Company Standards We Meet</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Documentation Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High-resolution photos of all damage areas</li>
                    <li>• Detailed measurements and sketches</li>
                    <li>• GPS coordinates for damage locations</li>
                    <li>• Before/after comparison documentation</li>
                    <li>• Professional assessment reports</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Insurance Claim Support</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Direct communication with adjusters</li>
                    <li>• Supplemental damage documentation</li>
                    <li>• Code compliance requirement advocacy</li>
                    <li>• Scope of work clarification</li>
                    <li>• Materials and labor cost justification</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Common Insurance Challenges in Amarillo</h3>
              <div className="space-y-4">
                <p className="text-gray-700"><strong>Wind vs. Hail Damage Distinction:</strong> Many insurance policies treat wind and hail damage differently. Our inspectors are trained to identify and properly document the specific type of weather damage, ensuring you receive appropriate coverage under your policy terms.</p>
                <p className="text-gray-700"><strong>Pre-Existing Condition Claims:</strong> Insurance companies often claim damage was pre-existing. We maintain detailed photographic records and can provide expert testimony about the timeline of damage, especially important in Amarillo where multiple storm events occur each season.</p>
                <p className="text-gray-700"><strong>Cosmetic vs. Functional Damage:</strong> Some insurers attempt to classify storm damage as cosmetic. We document how seemingly minor damage affects the roof's waterproofing integrity and long-term performance, particularly crucial given Amarillo's extreme weather cycles.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Optimal Timing for Roof Inspections in Amarillo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌸 Spring Inspections (March-May)</h3>
                <p className="text-gray-700 mb-4"><strong>Peak Storm Season Preparation:</strong> Amarillo's severe weather season typically begins in March and peaks in April-May. Spring inspections identify winter damage and prepare your roof for the coming storm season.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Assessment of winter freeze-thaw damage</li>
                  <li>• Pre-storm structural integrity verification</li>
                  <li>• Gutter and drainage system optimization</li>
                  <li>• Identification of loose or vulnerable materials</li>
                  <li>• Insurance deductible planning before claims season</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">☀️ Summer Inspections (June-August)</h3>
                <p className="text-gray-700 mb-4"><strong>Heat Damage Assessment:</strong> Amarillo's intense summer sun and temperatures exceeding 100°F can cause rapid deterioration. Summer inspections focus on heat-related damage and UV degradation.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• UV damage and accelerated aging assessment</li>
                  <li>• Thermal expansion stress evaluation</li>
                  <li>• Attic ventilation efficiency testing</li>
                  <li>• Mid-season storm damage documentation</li>
                  <li>• Energy efficiency optimization recommendations</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🍂 Fall Inspections (September-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Storm Season Wrap-up:</strong> Fall inspections assess cumulative damage from the storm season and prepare roofs for winter weather, including potential ice events in the Texas Panhandle.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Comprehensive storm season damage assessment</li>
                  <li>• Final insurance claim opportunities</li>
                  <li>• Winter weather preparation</li>
                  <li>• Debris removal and gutter cleaning</li>
                  <li>• Year-end maintenance planning</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">❄️ Winter Inspections (December-February)</h3>
                <p className="text-gray-700 mb-4"><strong>Structural Assessment:</strong> While less common, winter inspections are crucial after ice events or when preparing for real estate transactions during the slower season.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Ice damage and freeze-thaw cycle assessment</li>
                  <li>• Real estate transaction requirements</li>
                  <li>• Annual maintenance planning</li>
                  <li>• Off-season repair scheduling advantages</li>
                  <li>• Preparation for next year's storm season</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Amarillo's Unique Weather Challenges</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌪️ Severe Hailstorms</h3>
                <p className="text-gray-700 mb-3">Amarillo sits in the heart of "Hail Alley," experiencing an average of 9-12 significant hail events annually. The Texas Panhandle's geography creates perfect conditions for supercells that produce golf ball to softball-sized hail.</p>
                <p className="text-gray-700"><strong>Inspection Focus:</strong> We use specialized techniques to identify subtle hail damage that may not be visible to untrained eyes, including granule loss patterns, mat exposure, and impact fractals that insurance adjusters recognize as legitimate damage.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">💨 Extreme Wind Events</h3>
                <p className="text-gray-700 mb-3">Amarillo is consistently ranked among America's windiest cities, with average speeds of 14+ mph and gusts regularly exceeding 80 mph. The flat terrain provides no wind breaks, creating sustained high-velocity conditions.</p>
                <p className="text-gray-700"><strong>Inspection Focus:</strong> We examine uplift patterns, fastener integrity, and progressive wind damage that can compromise entire roofing systems over time, even when individual events don't cause obvious damage.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌡️ Extreme Temperature Variations</h3>
                <p className="text-gray-700 mb-3">Amarillo experiences temperature swings of 60+ degrees within 24 hours, with summer highs above 105°F and winter lows below 0°F. This thermal cycling creates expansion and contraction stress that's unique to the region.</p>
                <p className="text-gray-700"><strong>Inspection Focus:</strong> We assess thermal movement damage, including fastener backing-out, seam separation, and material fatigue that results from constant expansion and contraction cycles.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Advanced Inspection Technology We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">📡</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Thermal Imaging</h3>
                <p className="text-gray-700">FLIR cameras detect moisture intrusion, insulation gaps, and energy loss that aren't visible to the naked eye. Especially valuable for identifying leaks in Amarillo's extreme weather conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🚁</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Drone Photography</h3>
                <p className="text-gray-700">High-resolution aerial photography safely documents damage on steep or high roofs. GPS-tagged images provide precise damage location data for insurance and repair purposes.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">💧</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Moisture Detection</h3>
                <p className="text-gray-700">Professional moisture meters and hygrometers identify water damage and humidity issues that could lead to mold, rot, or structural problems in Amarillo's variable climate.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Step-by-Step Inspection Process</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Phase 1: Exterior Assessment (30-45 minutes)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Ground-Level Survey</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Overall Condition:</strong> Roof shape, ridge alignment, gutter attachment</li>
                      <li>• <strong>Visible Damage:</strong> Missing shingles, obvious impact marks, debris</li>
                      <li>• <strong>Drainage Assessment:</strong> Water flow patterns, ponding areas</li>
                      <li>• <strong>Safety Evaluation:</strong> Structural stability before roof access</li>
                      <li>• <strong>Documentation Setup:</strong> Photo equipment, measurement tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Detailed Roof Access Inspection</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Surface Walking:</strong> Careful examination of every roof section</li>
                      <li>• <strong>Material Testing:</strong> Flexibility, adhesion, granule retention</li>
                      <li>• <strong>Impact Assessment:</strong> Hail damage measurement and documentation</li>
                      <li>• <strong>Flashing Examination:</strong> All penetrations and transitions</li>
                      <li>• <strong>Ventilation Check:</strong> Ridge vents, soffit intake functionality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Phase 2: Interior Investigation (15-30 minutes)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Attic Space Analysis</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Structural Components:</strong> Rafters, trusses, decking condition</li>
                      <li>• <strong>Insulation Assessment:</strong> R-value, settling, pest damage</li>
                      <li>• <strong>Ventilation Airflow:</strong> Intake and exhaust balance</li>
                      <li>• <strong>Electrical Inspection:</strong> Wiring safety, junction boxes</li>
                      <li>• <strong>HVAC Equipment:</strong> Ductwork, units, condensation issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Moisture & Air Quality</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Active Leaks:</strong> Current water intrusion identification</li>
                      <li>• <strong>Historical Damage:</strong> Old stains, repair evidence</li>
                      <li>• <strong>Mold Detection:</strong> Growth patterns, air quality concerns</li>
                      <li>• <strong>Vapor Barriers:</strong> Installation integrity, effectiveness</li>
                      <li>• <strong>Pest Evidence:</strong> Animal intrusion, damage assessment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Phase 3: Technology Integration (15-20 minutes)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Advanced Detection Methods</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Thermal Imaging:</strong> Hidden moisture, insulation voids</li>
                      <li>• <strong>Moisture Meters:</strong> Quantitative water content measurement</li>
                      <li>• <strong>Drone Survey:</strong> High-resolution aerial documentation</li>
                      <li>• <strong>Digital Measurement:</strong> Precise damage quantification</li>
                      <li>• <strong>GPS Mapping:</strong> Damage location coordination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Data Collection & Analysis</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Photo Organization:</strong> Systematic damage documentation</li>
                      <li>• <strong>Measurement Recording:</strong> Precise size and scope data</li>
                      <li>• <strong>Condition Scoring:</strong> Standardized assessment ratings</li>
                      <li>• <strong>Repair Prioritization:</strong> Urgent vs. routine maintenance</li>
                      <li>• <strong>Cost Estimation:</strong> Preliminary repair budget development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Amarillo Roof Inspectors Look For</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Critical Damage Indicators</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🌨️ Hail Impact Signatures</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Exposed Mat:</strong> Asphalt showing through granule loss</li>
                      <li>• <strong>Circular Bruising:</strong> Rounded impact marks from ice stones</li>
                      <li>• <strong>Soft Spots:</strong> Areas where underlayment is compromised</li>
                      <li>• <strong>Granule Scatter:</strong> Impact pattern distribution</li>
                      <li>• <strong>Edge Damage:</strong> Tab cracking from glancing blows</li>
                      <li>• <strong>Metal Denting:</strong> Flashing, gutters, vents impacted</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">💨 Wind Damage Patterns</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Uplift Marks:</strong> Shingle lifting and resealing</li>
                      <li>• <strong>Fastener Exposure:</strong> Nails or screws visible</li>
                      <li>• <strong>Edge Tearing:</strong> Gutter line and eave damage</li>
                      <li>• <strong>Progressive Failure:</strong> Sequential shingle loss patterns</li>
                      <li>• <strong>Blow-off Damage:</strong> Complete material removal</li>
                      <li>• <strong>Debris Impact:</strong> Projectile damage from wind-borne objects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">☀️ Heat & UV Deterioration</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Granule Migration:</strong> UV-accelerated granule loss</li>
                      <li>• <strong>Thermal Cracking:</strong> Expansion/contraction damage</li>
                      <li>• <strong>Curling & Cupping:</strong> Heat-induced shingle distortion</li>
                      <li>• <strong>Brittleness:</strong> Loss of flexibility from UV exposure</li>
                      <li>• <strong>Color Fading:</strong> Uniform deterioration patterns</li>
                      <li>• <strong>Sealant Failure:</strong> Heat-degraded adhesive compounds</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Structural Integrity Assessment</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Load-Bearing Components</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Roof Decking Evaluation</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Sagging or deflection under load</li>
                          <li>• Water damage and delamination</li>
                          <li>• Fastener withdrawal and loose panels</li>
                          <li>• Age-related deterioration assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Framing System Inspection</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Rafter and truss condition</li>
                          <li>• Connection integrity at joints</li>
                          <li>• Span adequacy for snow loads</li>
                          <li>• Settlement or movement indicators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Weather Resistance Features</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Wind Uplift Resistance</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Fastener pattern and spacing compliance</li>
                          <li>• Edge and corner reinforcement</li>
                          <li>• Perimeter securement adequacy</li>
                          <li>• Code compliance for Amarillo wind zones</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Water Penetration Protection</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Ice and water shield placement</li>
                          <li>• Underlayment integrity and overlap</li>
                          <li>• Flashing installation quality</li>
                          <li>• Drainage slope adequacy</li>
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
          <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Documentation Standards</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Professional Photography Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Standard Documentation Shots</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Four-Corner Overview:</strong> Complete roof visibility from all angles</li>
                      <li>• <strong>Close-up Damage:</strong> Individual impacts with measurement references</li>
                      <li>• <strong>Comparative Analysis:</strong> Damaged vs. undamaged material samples</li>
                      <li>• <strong>Context Photography:</strong> Damage in relation to surrounding structures</li>
                      <li>• <strong>Serial Identification:</strong> Equipment models, material brands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Technical Specifications</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>High Resolution:</strong> Minimum 12MP for detail clarity</li>
                      <li>• <strong>GPS Metadata:</strong> Location coordinates embedded</li>
                      <li>• <strong>Timestamp Accuracy:</strong> Verified date/time documentation</li>
                      <li>• <strong>Scale References:</strong> Coins, rulers for size context</li>
                      <li>• <strong>Lighting Standards:</strong> Consistent exposure across shots</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Report Content Standards</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Required Documentation Elements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Damage Inventory:</strong> Complete catalog with locations</li>
                      <li>• <strong>Severity Classifications:</strong> Immediate vs. long-term concerns</li>
                      <li>• <strong>Material Specifications:</strong> Brand, color, age documentation</li>
                      <li>• <strong>Weather Correlation:</strong> Storm date and intensity data</li>
                      <li>• <strong>Code Compliance:</strong> Current standard requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Professional Assessment Components</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Scope of Work:</strong> Detailed repair specifications</li>
                      <li>• <strong>Cost Estimates:</strong> Material and labor pricing</li>
                      <li>• <strong>Timeline Projections:</strong> Repair duration estimates</li>
                      <li>• <strong>Warranty Information:</strong> Coverage details and limitations</li>
                      <li>• <strong>Inspector Credentials:</strong> Certifications and experience</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does a roof inspection cost in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide FREE roof inspections in Amarillo with no obligation. Comprehensive reports include photos, damage documentation, and recommendations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does a roof inspection take?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most residential inspections take 30-60 minutes. Commercial buildings require 1-3 hours depending on size and complexity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I get my roof inspected?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">After any hailstorm, before buying/selling property, annually for maintenance, or if you notice leaks, missing shingles, or interior water stains.</AccordionContent>
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
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Amarillo property owners. Expert roof inspections with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}