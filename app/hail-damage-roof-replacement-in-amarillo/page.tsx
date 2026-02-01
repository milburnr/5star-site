import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Replacement in Amarillo | 5 Star',
  description: 'Hail Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hail Damage Roof Replacement",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Canyon"},
      {"@type": "City", "name": "Bushland"}
    ],
    "description": "Complete hail damage roof replacement in Amarillo, Texas. Insurance claim experts. Class 4 impact-resistant shingles and standing seam metal roofing."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Hail Damage Roof Replacement",
                      "url": "/hail-damage-roof-replacement/"
              },
              {
                      "name": "Amarillo",
                      "url": "/hail-damage-roof-replacement-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Hail Damage Roof Replacement in Amarillo</h1>
      </FadeIn>

      <div className="content-block">
        <h2 className="content-block-title">Complete Roof Replacement After Hail Storms</h2>
        <p className="text-lg">
          When <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo hailstorms</a> cause extensive damage, a complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a> is often the only solution. The good news? Most homeowners insurance policies in the Texas Panhandle cover <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage</a>. We work directly with all major insurance companies to maximize your coverage. We've helped thousands of Amarillo homeowners navigate the insurance process and get brand new roofs at little to no out-of-pocket cost.
        </p>
      </div>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Amarillo's Hail Belt Geography & Storm Patterns</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-brand-brown mb-4">🌪️ High Plains Supercell Environment</h3>
              <p className="text-gray-700 mb-4">Amarillo sits at the heart of Hail Alley, positioned perfectly where warm, moist air from the Gulf of Mexico collides with cool, dry air masses from Canada across the flat High Plains. At 3,605 feet elevation, the city provides an ideal launching pad for explosive thunderstorm development that regularly produces devastating hail events.</p>
              <p className="text-gray-700 mb-4">The Texas Panhandle's geography creates a natural supercell highway, with storms developing along the dryline west of Amarillo and intensifying as they move northeast across the region. The Caprock Escarpment to the south provides atmospheric lifting that enhances storm development and hail production.</p>
              <p className="text-gray-700">Statistical analysis shows Amarillo experiences significant hail events (2+ inches diameter) 2-4 times annually, with catastrophic events (baseball to softball-sized) occurring every 2-3 years. These extreme events often require complete roof replacement across thousands of properties simultaneously.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-brand-brown mb-4">📊 Seasonal Intensity & Replacement Triggers</h3>
              <p className="text-gray-700 mb-4">Amarillo's peak hail season runs from April through June, when jet stream positioning creates maximum atmospheric instability and wind shear. During these months, supercell thunderstorms regularly produce hailstones exceeding 2.5 inches in diameter - the size that typically triggers insurance companies to approve complete roof replacement.</p>
              <p className="text-gray-700 mb-4">May represents the most dangerous month for catastrophic hail damage, when multiple supercells can affect the Amarillo metropolitan area within single weather systems. The combination of large hail, high winds, and tornadoes during these events often overwhelms regional repair capacity and extends replacement timelines significantly.</p>
              <p className="text-gray-700">Climate data indicates that major replacement-level hail events in Amarillo have increased in frequency over the past two decades, making impact-resistant roofing materials and professional installation techniques more critical than ever for long-term property protection.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance Replacement Criteria & Approval Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-brand-brown mb-4">📋 Professional Assessment Standards</h3>
              <p className="text-gray-700 mb-4">Insurance companies in Amarillo's high-hail environment use sophisticated criteria to determine when roof replacement is warranted versus partial repair. Professional assessment requires understanding these standards and documenting damage using industry-recognized techniques that ensure accurate claim evaluation.</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">Test Square Methodology</h4>
                  <p className="text-gray-700 mb-3">Adjusters examine 10x10 foot sections on different roof slopes:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>8+ impacts per square:</strong> Full replacement typically approved</li>
                    <li><strong>6-7 impacts:</strong> Additional documentation required</li>
                    <li><strong>4-5 impacts:</strong> Partial repair often recommended</li>
                    <li><strong>Under 4 impacts:</strong> Cosmetic damage classification</li>
                  </ul>
                </div>
                
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">Functional Damage Factors</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Granule loss exceeding 30% coverage</li>
                    <li>✓ Exposed mat areas from impacts</li>
                    <li>✓ Compromised shingle seal integrity</li>
                    <li>✓ Fractured or split shingle material</li>
                    <li>✓ Previous storm damage history</li>
                    <li>✓ Age-related deterioration factors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-brand-brown mb-4">💰 Texas Insurance Regulations & Homeowner Rights</h3>
              <p className="text-gray-700 mb-4">Texas Insurance Code provides specific protections for hail damage claims in high-risk areas like Amarillo. Property owners have rights to independent engineering assessments, public adjuster representation, and appraisal procedures when disputes arise over replacement coverage.</p>
              <p className="text-gray-700 mb-4">Catastrophic event declarations by the Governor activate special claim procedures that extend filing deadlines and require expedited processing. Understanding these procedures can significantly impact claim outcomes and replacement approval timelines.</p>
              <p className="text-gray-700">Replacement cost coverage versus actual cash value calculations can dramatically affect settlement amounts. Professional advocacy during the claims process helps ensure appropriate coverage application and maximum settlement for complete replacement projects.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-brand-brown mb-4">📈 Supplemental Claims & Concealed Damage</h3>
              <p className="text-gray-700 mb-4">Replacement projects often reveal concealed damage not apparent during initial assessment. Supplemental claims for roof decking, structural components, and code upgrade requirements are common in Amarillo's extreme weather environment where hidden damage accelerates under thermal stress.</p>
              <p className="text-gray-700 mb-4">Professional contractors experienced in Amarillo's claim environment help identify potential concealed damage during initial assessment, reducing surprises and delays during replacement projects. Proper initial scoping minimizes supplemental claim complications.</p>
              <p className="text-gray-700">Code upgrade coverage becomes critical when replacement triggers compliance with current building standards. Enhanced attachment requirements, ventilation standards, and impact-resistant material mandates may exceed basic policy coverage, requiring additional documentation and negotiation.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Advanced Replacement Options for High Plains Climate</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">🛡️ Class 4 Impact-Resistant Shingle Systems</h3>
              <img src="/images/asphaltshingles.jpg" alt="Hail damage roof repair in Amarillo, TX - Class 4 impact-resistant asphalt shingles - Hail protection roofing - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-6" />
              
              <p className="text-lg text-gray-700 mb-6">Class 4 impact-resistant shingles represent the gold standard for hail protection in Amarillo's extreme weather environment. These engineered systems use advanced polymer technology and reinforced substrates to withstand UL 2218 testing standards, providing essential protection against the High Plains' frequent large hail events.</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">Premium Manufacturer Options</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>GAF Timberline HDZ-RS:</strong> Revolutionary StrikeGuard technology, lifetime warranty, advanced WeatherWatch leak barrier</li>
                    <li><strong>Owens Corning Duration Storm:</strong> SureNail technology for 130+ mph wind resistance, Class 4 impact rating</li>
                    <li><strong>CertainTeed NorthGate:</strong> Advanced impact resistance, StreakFighter algae protection, luxury appearance</li>
                    <li><strong>Atlas StormMaster Shake:</strong> Premium aesthetics with impact resistance, stone-coated steel option</li>
                  </ul>
                </div>
                
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">Performance Features</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Withstands 2-inch steel balls dropped from 20 feet</li>
                    <li>✓ Enhanced polymer modification for flexibility</li>
                    <li>✓ Reinforced mat construction prevents tearing</li>
                    <li>✓ Advanced granule adhesion technology</li>
                    <li>✓ Superior thermal cycling resistance</li>
                    <li>✓ UV-resistant formulations for High Plains climate</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h4 className="font-bold text-green-800 mb-2">💰 Investment & Insurance Benefits</h4>
                <p className="text-green-700 mb-2"><strong>Average Cost:</strong> $8,500-$15,000 (2,000 sq ft home)</p>
                <p className="text-green-700 mb-2"><strong>Insurance Coverage:</strong> Typically 100% covered minus deductible ($1,000-$2,500)</p>
                <p className="text-green-700"><strong>Additional Savings:</strong> 10-35% insurance premium discounts for Class 4 materials</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">⚡ Standing Seam Metal Roofing Systems</h3>
              <img src="/images/SteelRoofing.jpg" alt="Hail damage roof repair in Amarillo, TX - Standing seam metal roof - Ultimate hail protection - 5 Star Commercial Roofing" className="w-full h-64 object-cover rounded-lg mb-6" />
              
              <p className="text-lg text-gray-700 mb-6">For ultimate hail protection and longevity in Amarillo's severe weather environment, standing seam metal roofing represents the pinnacle of performance. These systems provide superior resistance to large hail while offering decades of maintenance-free service in the High Plains' challenging climate conditions.</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">System Specifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Material Options:</strong> 24-gauge steel, aluminum, copper, zinc</li>
                    <li><strong>Panel Widths:</strong> 12", 16", 18" standard configurations</li>
                    <li><strong>Seam Heights:</strong> 1.5" to 3" profiles available</li>
                    <li><strong>Coatings:</strong> Kynar 500, SMP, PVDF systems</li>
                    <li><strong>Colors:</strong> 30+ standard options plus custom</li>
                    <li><strong>Warranties:</strong> 40-50 year material, 20+ year fade</li>
                  </ul>
                </div>
                
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">Performance Advantages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Hail Resistance:</strong> Dents possible but maintains watertight integrity</li>
                    <li>✓ <strong>Longevity:</strong> 50-75 year service life</li>
                    <li>✓ <strong>Energy Efficiency:</strong> 25-40% cooling cost reduction</li>
                    <li>✓ <strong>Wind Resistance:</strong> 140+ mph rating standard</li>
                    <li>✓ <strong>Fire Rating:</strong> Class A non-combustible</li>
                    <li>✓ <strong>Thermal Movement:</strong> Accommodates expansion/contraction</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="font-bold text-blue-800 mb-2">💎 Premium Investment Details</h4>
                <p className="text-blue-700 mb-2"><strong>Average Cost:</strong> $15,000-$30,000 (2,000 sq ft home)</p>
                <p className="text-blue-700 mb-2"><strong>Insurance Upgrade:</strong> $5,000-$12,000 above standard coverage</p>
                <p className="text-blue-700"><strong>Lifetime Value:</strong> Last roof replacement needed, maximum hail protection</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">🏗️ Synthetic & Alternative Systems</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">Synthetic Slate & Tile</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>DaVinci Roofscapes:</strong> Impact-resistant composite slate</li>
                    <li><strong>Boral Steel:</strong> Stone-coated steel tile systems</li>
                    <li><strong>EcoStar:</strong> Recycled rubber slate appearance</li>
                    <li>✓ Class 4 impact rating available</li>
                    <li>✓ Lightweight installation</li>
                    <li>✓ 50+ year warranties</li>
                  </ul>
                </div>
                
                <div className="bg-brand-gold-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-3">Modified Bitumen & TPO</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Commercial Applications:</strong> Low-slope roofing</li>
                    <li><strong>Hail-Resistant Membranes:</strong> Impact-rated systems</li>
                    <li><strong>Enhanced Warranties:</strong> 20-30 year coverage</li>
                    <li>✓ Ideal for commercial replacement</li>
                    <li>✓ Energy-efficient options</li>
                    <li>✓ Rapid installation capability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Professional Replacement Process & Timeline Management</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 text-center">Our systematic approach ensures seamless roof replacement from storm damage assessment through final warranty registration, typically completing projects within 4-6 weeks of initial contact.</p>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md flex gap-6 items-start">
                <div className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold text-lg min-w-fit">Day 1-2</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-brown mb-3">Emergency Assessment & Documentation</h4>
                  <p className="text-gray-700 mb-4">Comprehensive roof inspection using drone technology and standardized assessment protocols. Professional photographic documentation with GPS coordinates, impact measurements, and granule loss analysis. Emergency tarping provided if active leaks are present.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Complete roof surface examination</li>
                    <li>• Gutters, downspouts, and flashing assessment</li>
                    <li>• Interior inspection for water damage</li>
                    <li>• Preliminary insurance documentation package</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex gap-6 items-start">
                <div className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold text-lg min-w-fit">Week 1</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-brown mb-3">Insurance Claim Filing & Adjuster Coordination</h4>
                  <p className="text-gray-700 mb-4">Professional claim filing with comprehensive damage documentation meeting insurance industry standards. Adjuster meeting coordination and advocacy to ensure all damage is properly documented and approved for replacement coverage.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Detailed damage report with industry-standard terminology</li>
                    <li>• Weather correlation with National Weather Service data</li>
                    <li>• Adjuster meeting attendance and damage tour</li>
                    <li>• Scope of work negotiation and approval</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex gap-6 items-start">
                <div className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold text-lg min-w-fit">Week 2-3</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-brown mb-3">Material Selection & Project Planning</h4>
                  <p className="text-gray-700 mb-4">Collaborative material selection process considering aesthetic preferences, performance requirements, and budget parameters. Professional project scheduling coordinated with material delivery, permitting requirements, and weather considerations for optimal installation conditions.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Color and style selection consultation</li>
                    <li>• Performance upgrade options review</li>
                    <li>• Permit application and approval</li>
                    <li>• Material ordering and delivery scheduling</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex gap-6 items-start">
                <div className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold text-lg min-w-fit">Week 4-5</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-brown mb-3">Professional Installation & Quality Control</h4>
                  <p className="text-gray-700 mb-4">Complete tear-off and installation using certified crews and industry-leading techniques. Daily progress monitoring with quality control checkpoints, weather protection protocols, and comprehensive cleanup procedures maintaining professional standards throughout the project.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Complete material removal and disposal</li>
                    <li>• Deck inspection and repair as needed</li>
                    <li>• Professional installation with warranty compliance</li>
                    <li>• Final inspection and cleanup completion</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex gap-6 items-start">
                <div className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold text-lg min-w-fit">Week 6</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-brown mb-3">Final Inspection & Warranty Registration</h4>
                  <p className="text-gray-700 mb-4">Comprehensive final inspection with building code compliance verification and insurance company approval documentation. Warranty registration with manufacturers and delivery of all project documentation, maintenance recommendations, and ongoing support contact information.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Building inspector final approval</li>
                    <li>• Insurance company completion documentation</li>
                    <li>• Manufacturer warranty registration</li>
                    <li>• Homeowner education and documentation delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">High Plains Installation Excellence</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-brand-brown mb-4">🌨️ Weather-Resilient Installation Techniques</h3>
              <p className="text-gray-700 mb-4">Amarillo's extreme weather environment requires installation techniques that exceed standard manufacturer specifications. Our crews use enhanced fastening systems, upgraded underlayments, and specialized attachment methods designed specifically for High Plains wind and hail conditions.</p>
              <p className="text-gray-700 mb-4">Ice and water shield coverage extends beyond standard requirements to provide comprehensive protection against wind-driven rain and ice damming during Amarillo's severe winter weather events. Enhanced starter courses and ridge protection ensure long-term performance in extreme conditions.</p>
              <p className="text-gray-700">Temperature-controlled installation procedures account for Amarillo's extreme thermal cycling, with specialized techniques for installation during both hot summer conditions exceeding 100°F and cold winter weather below freezing.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-brand-brown mb-4">🔧 Advanced Fastening & Ventilation Systems</h3>
              <p className="text-gray-700 mb-4">High-wind rated fastening systems using ring-shank nails and enhanced adhesive strips provide superior attachment strength against Amarillo's frequent high-wind events. Strategic placement and increased fastener density ensure long-term attachment integrity under extreme loading conditions.</p>
              <p className="text-gray-700 mb-4">Comprehensive ventilation design optimized for High Plains climate conditions helps manage extreme temperature differentials and moisture control. Balanced intake and exhaust systems prevent ice damming while maintaining optimal attic conditions year-round.</p>
              <p className="text-gray-700">Seismic considerations address minor ground movement from regional geological activity, ensuring roof system integrity and attachment performance under all local environmental conditions.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">⚠️ Beware of Storm Chasers</h3>
        <p className="mb-2">After major Amarillo hailstorms, out-of-state "storm chasers" flood the area with aggressive sales tactics. Warning signs:</p>
        <ul className="space-y-1 text-sm">
          <li>• Door-to-door solicitation immediately after storm</li>
          <li>• Pressure to sign contracts before insurance approval</li>
          <li>• Offers to pay your deductible (insurance fraud)</li>
          <li>• No local address or references</li>
          <li>• Disappear after project is complete</li>
        </ul>
        <p className="font-semibold mt-3">Choose a local Amarillo company with 10+ years in business and verifiable references.</p>
      </div>

      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          We provide <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing</a> services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Expert Roofing Service in Amarillo?</h2>
        <p className="cta-text">
          Free inspections, insurance claim assistance, and professional installation. Serving the Texas Panhandle for over 10 years.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request Free Inspection
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
