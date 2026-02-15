import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-repair-odessa/' },
  title: "Roof Repair Odessa TX | Expert Service | Free Inspection",
  description: "Professional roof repair in Odessa TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Repair", url: "/roof-repair/" },
        { name: "Odessa", url: "/roof-repair-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-odessa/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Roof Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/roof-repair-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-repair-odessa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof repair in Odessa TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much do roof repairs cost in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Minor repairs: $300-$800. Moderate damage: $800-$2,500. Extensive repairs: $2,500-$5,000. Many repairs covered by insurance. Free estimates provided."}},{"@type":"Question","name":"Can you repair just part of my roof?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage is localized. We assess whether spot repairs or full replacement makes more sense based on age, condition, and cost-effectiveness."}},{"@type":"Question","name":"How long do roof repairs last?","acceptedAnswer":{"@type":"Answer","text":"Professional repairs with quality materials last 5-10 years. However, if your roof is over 15 years old, replacement may be more cost-effective."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-2-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Repair in <span className="text-brand-gold-light">Odessa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof repair throughout Odessa. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Odessa's Premier Roof Repair Service</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof repair specialists serving Odessa's unique environmental challenges. From storm damage restoration to industrial contamination remediation, we understand how the petroleum industry, desert climate, and West Texas weather create specific repair requirements not found elsewhere.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">Since 2014, we've completed thousands of repairs across Odessa, from historic downtown buildings affected by decades of refinery emissions to modern subdivisions dealing with escarpment wind damage. Our repair techniques address both immediate damage and long-term protection against Odessa's harsh environmental conditions.</p>
            <p className="text-lg text-gray-600 leading-relaxed">We specialize in storm repairs during industrial incidents, scheduled maintenance during refinery shutdowns, and comprehensive restoration projects that address both weather damage and industrial contamination impacts. All repairs include warranties specifically designed for Odessa's challenging environment.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Comprehensive Roof Repair Services for Odessa</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌪️ Storm Damage Restoration</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Hail Impact Repairs:</strong> Specialized techniques for West Texas hailstorm damage patterns</li>
                  <li><strong>Wind Uplift Restoration:</strong> Escarpment wind damage repair and reinforcement</li>
                  <li><strong>Flash Flood Recovery:</strong> Rapid water damage restoration for desert storm events</li>
                  <li><strong>Lightning Strike Repair:</strong> Electrical damage assessment and structural restoration</li>
                  <li><strong>tarping:</strong> temporary protection during severe weather</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏭 Industrial Contamination Remediation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Chemical Cleaning:</strong> Petrochemical residue removal and surface restoration</li>
                  <li><strong>Corrosion Treatment:</strong> Acid rain and refinery emission damage repair</li>
                  <li><strong>Particulate Removal:</strong> Industrial dust and contamination cleaning services</li>
                  <li><strong>Material Replacement:</strong> Chemically damaged component replacement and upgrade</li>
                  <li><strong>Protective Coatings:</strong> Industrial-grade protective system installation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏠 Structural and Foundation Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Settlement Damage Repair:</strong> Foundation movement impact restoration</li>
                  <li><strong>Structural Reinforcement:</strong> Load path strengthening and support upgrades</li>
                  <li><strong>Vibration Damage:</strong> Industrial activity impact repair and mitigation</li>
                  <li><strong>Historic Building Restoration:</strong> Heritage-compliant repair techniques</li>
                  <li><strong>Code Compliance Updates:</strong> Bringing older structures to current standards</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">⚡ storm response Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Leak Stoppage:</strong> Immediate water intrusion control and containment</li>
                  <li><strong>Safety Hazard Mitigation:</strong> Dangerous condition stabilization and repair</li>
                  <li><strong>Insurance Coordination:</strong> Direct billing and claim management services</li>
                  <li><strong>Temporary Housing Assistance:</strong> Coordination for displacement situations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Odessa-Specific Repair Techniques and Materials</h2>
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Industrial Environment Adaptations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Chemical-Resistant Material Systems</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modified bitumen with enhanced chemical resistance</li>
                    <li>• EPDM rubber specifically formulated for hydrocarbon exposure</li>
                    <li>• Metal roofing with specialized corrosion-resistant coatings</li>
                    <li>• TPO membranes with industrial-grade UV stabilizers</li>
                    <li>• Silicone roof coatings with superior chemical resistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Enhanced Ventilation Systems</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High-efficiency particulate air (HEPA) filtration integration</li>
                    <li>• Positive pressure systems for industrial air quality management</li>
                    <li>• Chemical-resistant vent materials and gaskets</li>
                    <li>• Automated ventilation controls for air quality events</li>
                    <li>• Emergency ventilation shutdown systems for safety</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Desert Climate Optimization</h3>
              <div className="space-y-4">
                <p className="text-gray-700"><strong>Thermal Management Systems:</strong> Odessa's extreme temperature variations require specialized thermal expansion joints, flexible connections, and heat-resistant materials that can withstand rapid temperature changes while maintaining structural integrity.</p>
                <p className="text-gray-700"><strong>Wind Resistance Upgrades:</strong> Escarpment wind patterns require enhanced fastening systems, reinforced edge details, and aerodynamic design modifications that reduce wind uplift forces specific to Odessa's topographical challenges.</p>
                <p className="text-gray-700"><strong>Flash Flood Drainage:</strong> Desert storm drainage systems must handle intense but brief rainfall events. We install oversized gutters, rapid-flow downspouts, and storm overflow systems designed for West Texas flash flood conditions.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Repair Process and Project Management</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">📋 Phase 1: Assessment and Planning</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Structural Stabilization</h4>
                      <p className="text-gray-700 text-sm">Immediate safety hazard mitigation and temporary weather protection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Comprehensive Damage Assessment</h4>
                      <p className="text-gray-700 text-sm">Detailed evaluation including industrial contamination and environmental factors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Insurance Documentation</h4>
                      <p className="text-gray-700 text-sm">Complete photographic and technical documentation for claim filing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Repair Strategy Development</h4>
                      <p className="text-gray-700 text-sm">Customized approach based on Odessa's specific environmental challenges</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🔧 Phase 2: Execution and Quality Control</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Material Preparation</h4>
                      <p className="text-gray-700 text-sm">Specialized material selection and environmental adaptation preparation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">6</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Professional Installation</h4>
                      <p className="text-gray-700 text-sm">Expert repair execution with industrial safety protocols and quality standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">7</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Quality Assurance Testing</h4>
                      <p className="text-gray-700 text-sm">Water testing, thermal imaging, and performance verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">8</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Final Documentation</h4>
                      <p className="text-gray-700 text-sm">Warranty documentation, maintenance guidelines, and insurance completion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Common Repair Scenarios in Odessa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">⛈️</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Storm Damage Restoration</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Typical Timeline:</strong> 3-10 days depending on severity</p>
                  <p><strong>Common Issues:</strong> Hail punctures, wind uplift, granule loss</p>
                  <p><strong>Insurance Coverage:</strong> Usually 80-100% covered minus deductible</p>
                  <p><strong>Specialized Approach:</strong> Desert storm pattern analysis, rapid drainage installation</p>
                  <p><strong>Materials:</strong> Impact-resistant shingles, enhanced fastening systems</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🏭</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Industrial Contamination</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Typical Timeline:</strong> 5-15 days including decontamination</p>
                  <p><strong>Common Issues:</strong> Chemical corrosion, particulate buildup</p>
                  <p><strong>Insurance Coverage:</strong> May require third-party liability claims</p>
                  <p><strong>Specialized Approach:</strong> Chemical analysis, environmental remediation</p>
                  <p><strong>Materials:</strong> Chemical-resistant coatings, specialized gaskets</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🏠</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Foundation Settlement</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Typical Timeline:</strong> 7-21 days for comprehensive repair</p>
                  <p><strong>Common Issues:</strong> Structural stress, membrane separation</p>
                  <p><strong>Insurance Coverage:</strong> Weather-related portion typically covered</p>
                  <p><strong>Specialized Approach:</strong> Geological assessment, structural engineering</p>
                  <p><strong>Materials:</strong> Flexible membranes, expansion joint systems</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Odessa Property Owners Choose Our Repair Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏆 Local Expertise and Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Over 10 years serving Odessa's unique environmental challenges</li>
                  <li>• Deep understanding of local geology, climate, and industrial impacts</li>
                  <li>• Established relationships with local suppliers and inspectors</li>
                  <li>• Proven track record with historic district and modern development repairs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">⚡ Rapid Response and prompt services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• prompt response within 2 hours in Odessa</li>
                  <li>• Mobile repair units equipped for immediate stabilization</li>
                  <li>• Direct relationships with emergency management agencies</li>
                  <li>• Coordination with industrial safety and environmental agencies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🔬 Advanced Materials and Technology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Industrial-grade materials specifically selected for Odessa conditions</li>
                  <li>• Chemical-resistant systems designed for petroleum environment</li>
                  <li>• Advanced testing equipment for quality assurance</li>
                  <li>• Ongoing material research and development partnerships</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">💰 Insurance and Financial Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Expert insurance claim documentation and advocacy</li>
                  <li>• Direct billing arrangements with major insurance providers</li>
                  <li>• Financing options for non-covered repairs and upgrades</li>
                  <li>• Third-party liability claim assistance for industrial contamination</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Repair Cost Guide for Odessa Properties</h2>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Minor Repairs</h3>
                  <div className="text-4xl font-bold text-brand-gold mb-4">$300-$800</div>
                  <ul className="space-y-2 text-gray-700 text-sm text-left">
                    <li>• Small leak repairs</li>
                    <li>• Shingle replacement (up to 20 sq ft)</li>
                    <li>• Flashing repairs</li>
                    <li>• Gutter maintenance</li>
                    <li>• Minor storm damage</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Moderate Repairs</h3>
                  <div className="text-4xl font-bold text-brand-gold mb-4">$800-$2,500</div>
                  <ul className="space-y-2 text-gray-700 text-sm text-left">
                    <li>• Section replacement</li>
                    <li>• Multiple leak repairs</li>
                    <li>• Ventilation system upgrades</li>
                    <li>• Industrial contamination cleaning</li>
                    <li>• Structural reinforcement</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Extensive Repairs</h3>
                  <div className="text-4xl font-bold text-brand-gold mb-4">$2,500-$5,000+</div>
                  <ul className="space-y-2 text-gray-700 text-sm text-left">
                    <li>• Large section replacement</li>
                    <li>• Structural modifications</li>
                    <li>• Complete system upgrades</li>
                    <li>• Environmental remediation</li>
                    <li>• Historic restoration projects</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700"><strong>Insurance Coverage:</strong> Most storm damage repairs are 80-100% covered by insurance minus your deductible. Industrial contamination may be covered under third-party liability. We provide free insurance consultation with every estimate.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much do roof repairs cost in Odessa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Minor repairs: $300-$800. Moderate damage: $800-$2,500. Extensive repairs: $2,500-$5,000. Many repairs covered by insurance. Free estimates provided.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can you repair just part of my roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, if damage is localized. We assess whether spot repairs or full replacement makes more sense based on age, condition, and cost-effectiveness.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long do roof repairs last?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Professional repairs with quality materials last 5-10 years. However, if your roof is over 15 years old, replacement may be more cost-effective.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Odessa property owners. Expert roof repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}