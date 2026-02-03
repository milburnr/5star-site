import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Andrews TX | 5 Star Roofing',
  description: "Professional hail damage repair in Andrews TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function HailDamageRepairAndrewsPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        { name: "Andrews", url: "/hail-damage-repair-andrews/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Hail Damage Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/hail-damage-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/hail-damage-repair-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional hail damage repair in Andrews TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Repair",
            "name": "Hail Damage Repair in Andrews",
            "description": "Professional hail damage repair services in Andrews, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Andrews",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hail Damage Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Repair Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Repair Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How do I know if my Andrews roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance."}},{"@type":"Question","name":"Will insurance cover hail damage in Andrews?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate."}},{"@type":"Question","name":"Should I upgrade to Class 4 shingles after hail damage?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/hail-damage-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Hail Damage Repair in <span className="text-brand-gold-light">Andrews</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional hail damage repair throughout Andrews. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Andrews's Hail Damage Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional hail damage repair throughout Andrews and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Andrews with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Andrews County Hail Patterns & Storm History</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">West Texas Hail Corridor</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Andrews County sits in the heart of West Texas's active hail corridor, where geographic and atmospheric conditions create the perfect storm environment. Located at the intersection of the Great Plains and desert climates, Andrews experiences unique weather patterns that generate severe thunderstorms capable of producing damaging hail.</p>
                <p className="text-gray-700 mb-4 leading-relaxed">The county's elevation of approximately 3,200 feet above sea level, combined with its position east of the Permian Basin escarpment, creates orographic lifting that enhances thunderstorm development. This topographic influence, paired with the clash of dry desert air masses and moist Gulf air, regularly produces supercell thunderstorms during peak season.</p>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-gold">
                  <h4 className="font-semibold text-brand-brown mb-2">Peak Hail Season in Andrews</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>April - June:</strong> Primary hail season (85% of events)</li>
                    <li>• <strong>Late afternoon/evening:</strong> Peak occurrence hours (2PM-8PM)</li>
                    <li>• <strong>Average size:</strong> Quarter to golf ball (1-1.75 inches)</li>
                    <li>• <strong>Record size:</strong> Softball-sized hail (4+ inches diameter)</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Notable Storm Events</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-brand-brown">May 2021 Supercell Complex</h4>
                    <p className="text-gray-700 text-sm">Baseball to softball-sized hail across northern Andrews County, causing widespread roof and vehicle damage. Wind speeds exceeded 70 mph.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-brand-brown">April 2019 Outbreak</h4>
                    <p className="text-gray-700 text-sm">Multiple supercells produced golf ball-sized hail throughout the county, with significant agricultural and property damage reported.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-brand-brown">June 2017 Evening Storm</h4>
                    <p className="text-gray-700 text-sm">Intense hailstorm with stones up to 2.5 inches in diameter, concentrated around Andrews city limits and Highway 385 corridor.</p>
                  </div>
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800"><strong>Insurance Insight:</strong> Andrews County typically sees 15-25 significant hail events annually, with insurance claims peaking during May and June when atmospheric instability is highest.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Comprehensive Hail Damage Assessment</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-400">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Roof System Evaluation</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Shingle Impact Assessment:</strong> Granule loss patterns, exposed mat, cracking</li>
                  <li>• <strong>Metal Component Inspection:</strong> Dents in flashing, gutters, vents, and HVAC units</li>
                  <li>• <strong>Underlayment Integrity:</strong> Punctures or tears that compromise waterproofing</li>
                  <li>• <strong>Decking Evaluation:</strong> Impact damage to OSB or plywood substrate</li>
                  <li>• <strong>Fastener Assessment:</strong> Loosened nails or screws from impact vibration</li>
                  <li>• <strong>Ridge and Hip Analysis:</strong> Critical seal point damage evaluation</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-400">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Insurance Documentation</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Photographic Evidence:</strong> High-resolution damage documentation from multiple angles</li>
                  <li>• <strong>Moisture Detection:</strong> Thermal imaging to identify hidden water intrusion</li>
                  <li>• <strong>Measurement Reports:</strong> Precise square footage calculations for claims</li>
                  <li>• <strong>Code Compliance Review:</strong> Upgrade requirements for current building standards</li>
                  <li>• <strong>Matching Requirements:</strong> Color and granule specifications for seamless repairs</li>
                  <li>• <strong>Adjuster Coordination:</strong> Professional representation during claim evaluations</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-400">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Emergency Mitigation</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Immediate Tarping:</strong> Professional-grade tarps with secure fastening systems</li>
                  <li>• <strong>Board-Up Services:</strong> Temporary protection for compromised openings</li>
                  <li>• <strong>Water Extraction:</strong> Rapid response to prevent secondary damage</li>
                  <li>• <strong>Interior Protection:</strong> Contents coverage and moisture barriers</li>
                  <li>• <strong>Structural Assessment:</strong> Engineering evaluation for safety concerns</li>
                  <li>• <strong>24/7 Response Team:</strong> Emergency mitigation within hours of storm events</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Andrews-Specific Hail Resistance Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Class 4 Impact-Resistant Materials</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Given Andrews County's high hail frequency, we specialize in UL 2218 Class 4 impact-resistant roofing systems that can withstand 2-inch steel ball drops from 20 feet—equivalent to golf ball-sized hail at terminal velocity.</p>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-brand-brown mb-3">Recommended Materials for Andrews</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>GAF Timberline ArmorShield II:</strong> Polymer-modified asphalt with enhanced granules</li>
                    <li><strong>Owens Corning Duration Storm:</strong> SureNail technology with impact-resistant backing</li>
                    <li><strong>CertainTeed Northgate Class 4:</strong> Advanced polymer construction</li>
                    <li><strong>Standing Seam Metal:</strong> 24-gauge steel or aluminum with protective coatings</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Enhanced Protection Systems</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-brand-brown">High-Performance Underlayment</h4>
                    <p className="text-gray-700 text-sm">Synthetic underlayment with enhanced tear resistance and superior waterproofing for secondary protection against hail-punctured shingles.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-brand-brown">Impact-Resistant Accessories</h4>
                    <p className="text-gray-700 text-sm">Hail-guards for HVAC units, reinforced gutters and downspouts, and impact-resistant skylights designed for West Texas conditions.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-brand-brown">Advanced Fastening Systems</h4>
                    <p className="text-gray-700 text-sm">Ring-shank nails with enhanced holding power and proper penetration depths for Andrews County's wind and hail conditions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-brand-gold-light p-6 rounded-xl text-center">
              <h4 className="font-bold text-brand-brown text-lg mb-2">Insurance Premium Discounts</h4>
              <p className="text-gray-700">Class 4 impact-resistant materials qualify for insurance premium discounts up to 30% in Texas, typically paying for the upgrade within 5-7 years.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Professional Installation Process</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Pre-Installation Phase</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Comprehensive Assessment</h4>
                      <p className="text-gray-600 text-sm">Detailed evaluation of existing roof structure, decking condition, and ventilation systems to ensure optimal performance.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Material Selection & Ordering</h4>
                      <p className="text-gray-600 text-sm">Precise measurement and specification of materials optimized for Andrews County's climate conditions and building requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Permit Acquisition</h4>
                      <p className="text-gray-600 text-sm">Complete permit documentation and approval through Andrews County building department and city authorities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Property Protection Setup</h4>
                      <p className="text-gray-600 text-sm">Comprehensive protection of landscaping, vehicles, and exterior property elements during construction.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Installation & Quality Control</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Professional Tear-Off</h4>
                      <p className="text-gray-600 text-sm">Complete removal of damaged materials with magnetic sweeps and debris containment for safety and cleanliness.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Decking Restoration</h4>
                      <p className="text-gray-600 text-sm">Repair or replacement of damaged decking with proper fastening and code-compliant materials suited for Texas conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">7</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Advanced Installation</h4>
                      <p className="text-gray-600 text-sm">Precision installation following manufacturer specifications and enhanced West Texas wind/hail requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">8</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Final Inspection & Warranty</h4>
                      <p className="text-gray-600 text-sm">Comprehensive quality control inspection with detailed warranty documentation and maintenance guidelines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Insurance Claims Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Maximizing Your Settlement</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Our certified claims specialists understand Texas insurance law and have extensive experience working with major carriers operating in Andrews County, including State Farm, Allstate, USAA, and regional providers.</p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-brand-brown mb-3">Our Claims Success Rate</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>95%+ approval rate</strong> for legitimate hail damage claims</li>
                    <li>• <strong>Average 18% increase</strong> in settlement amounts with our assistance</li>
                    <li>• <strong>Typical 14-21 day</strong> claim processing timeline</li>
                    <li>• <strong>Zero out-of-pocket</strong> costs for approved claims</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Claims Process Support</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Initial Damage Assessment</h4>
                      <p className="text-gray-600 text-sm">Professional documentation meeting insurance industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Adjuster Meeting Coordination</h4>
                      <p className="text-gray-600 text-sm">Professional representation and technical expertise during inspections</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Supplement Negotiation</h4>
                      <p className="text-gray-600 text-sm">Additional damage identification and settlement enhancement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Code Upgrade Advocacy</h4>
                      <p className="text-gray-600 text-sm">Ensuring coverage for required building code improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Final Settlement Review</h4>
                      <p className="text-gray-600 text-sm">Complete verification of claim accuracy before project completion</p>
                    </div>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Andrews roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles after hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Andrews property owners. Expert hail damage repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}