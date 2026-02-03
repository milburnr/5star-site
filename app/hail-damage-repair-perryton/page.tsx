import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Perryton TX | 5 Star Roofing',
  description: "Professional hail damage repair in Perryton TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function HailDamageRepairPerrytonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        { name: "Perryton", url: "/hail-damage-repair-perryton/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/hail-damage-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/hail-damage-repair-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional hail damage repair in Perryton TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Repair",
            "name": "Hail Damage Repair in Perryton",
            "description": "Professional hail damage repair services in Perryton, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Perryton",
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
        "mainEntity": [{"@type":"Question","name":"How do I know if my Perryton roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance."}},{"@type":"Question","name":"Will insurance cover hail damage in Perryton?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate."}},{"@type":"Question","name":"Should I upgrade to Class 4 shingles after hail damage?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/hail-damage-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">Hail Damage Repair in <span className="text-brand-gold-light">Perryton, TX</span></h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">Wheat Capital of the World's Roofing Experts</p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">Perryton—the county seat of Ochiltree County and Wheat Capital of the World—sits near the Oklahoma border in the heart of Texas's agricultural powerhouse. With $250 million in annual farming revenue and critical grain storage infrastructure, this community of 8,400+ needs specialized roofing protection. 5 Star Roofing has served Perryton's agricultural and residential needs since 2014.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">$250M</div><div className="text-brand-brown font-semibold text-lg">Annual Ag Revenue</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Perryton Needs Expert Hail Damage Repair</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton, with a 2020 population of 8,492 (currently estimated at 8,219), serves as the county seat of Ochiltree County in the northern Texas Panhandle near the Oklahoma border. Known as the "Wheat Capital of the World," this agricultural community sits approximately 89 miles from Amarillo, making it one of our most northern service areas in the Texas Panhandle.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ochiltree County has a diverse economy based on agriculture, oil and gas, and other natural resources. Farming operations brought in $250 million in 2005, primarily from livestock, hogs, and grain production including wheat, sorghum, corn, and alfalfa. This agricultural foundation, combined with oil and natural gas operations throughout the county, creates unique roofing challenges for both residential and agricultural properties.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Perryton's location near the Oklahoma border puts it in the direct path of severe weather systems that develop across the Great Plains. The community's agricultural infrastructure—including grain elevators, livestock facilities, and processing operations—requires specialized roofing solutions capable of withstanding the region's intense storms, high winds, and frequent hail events.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Roofing has served Perryton and Ochiltree County with expert storm damage repairs and specialized agricultural roofing solutions. Our team understands the unique requirements of wheat storage facilities, livestock operations, and the residential needs of this close-knit agricultural community that feeds the world.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-red-50 to-yellow-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">June 15, 2023: Perryton's Devastating Tornado</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Catastrophic Storm Impact</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">On the afternoon of June 15, 2023, a devastating EF-3 tornado ripped through Perryton, forever changing this agricultural community. The storm killed three people, injured more than 100 residents, and heavily damaged or destroyed dozens of mobile homes, houses, and critical infrastructure throughout Ochiltree County.</p>
                <p className="text-gray-700 mb-4 leading-relaxed">Ochiltree General Hospital treated 115 patients with injuries ranging from minor lacerations to major trauma including head injuries, collapsed lungs, and broken bones. The tornado's path of destruction included residential neighborhoods, mobile home parks, and the industrial sections that support Perryton's agricultural economy.</p>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                  <h4 className="font-semibold text-brand-brown mb-2">June 15, 2023 Tornado Impact</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>3 fatalities</strong> confirmed by Ochiltree County authorities</li>
                    <li>• <strong>100+ injuries</strong> treated at Ochiltree General Hospital</li>
                    <li>• <strong>91% power outages</strong> across Ochiltree County</li>
                    <li>• <strong>Dozens of structures</strong> heavily damaged or completely destroyed</li>
                    <li>• <strong>Mobile home parks</strong> devastated with total destruction</li>
                    <li>• <strong>State of emergency</strong> declared for disaster response</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Community Response & Recovery</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h4 className="font-semibold text-brand-brown">Multi-Agency Response</h4>
                    <p className="text-gray-700 text-sm">Multiple emergency agencies from throughout the Texas Panhandle responded to assist Perryton with search and rescue operations, medical care, and immediate disaster relief efforts.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                    <h4 className="font-semibold text-brand-brown">Healthcare Crisis Management</h4>
                    <p className="text-gray-700 text-sm">Ochiltree General Hospital activated emergency protocols, treating walking wounded at their clinic while managing surge capacity for major trauma cases.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <h4 className="font-semibold text-brand-brown">Infrastructure Restoration</h4>
                    <p className="text-gray-700 text-sm">Power restoration efforts focused on the 91% of customers without electricity, while emergency services coordinated debris removal and structural assessments.</p>
                  </div>
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800"><strong>Storm Chaser Documentation:</strong> Professional storm chasers documented the tornado's path through mobile home parks and industrial areas, providing critical damage assessment data for emergency response and insurance claims.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Post-Tornado Reconstruction Expertise</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl mb-4">🏚️</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Reconstruction Services</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Complete Structural Replacement:</strong> Full roof system reconstruction for tornado-damaged properties</li>
                  <li>• <strong>Foundation to Peak Assessment:</strong> Comprehensive evaluation of storm-damaged structures</li>
                  <li>• <strong>Mobile Home Park Expertise:</strong> Specialized services for manufactured housing communities</li>
                  <li>• <strong>Agricultural Building Restoration:</strong> Critical grain storage and livestock facility repairs</li>
                  <li>• <strong>Historical Property Preservation:</strong> Sensitive restoration of Perryton's historic structures</li>
                  <li>• <strong>Code Compliance Upgrades:</strong> Bringing damaged structures up to current building standards</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Disaster Response Protocol</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Immediate Safety Assessment:</strong> Structural integrity evaluation within hours of storm impact</li>
                  <li>• <strong>Emergency Weather Protection:</strong> Temporary roofing and weatherization services</li>
                  <li>• <strong>Contents Preservation:</strong> Rapid response to protect remaining property and belongings</li>
                  <li>• <strong>Utility Coordination:</strong> Working with power companies for safe restoration procedures</li>
                  <li>• <strong>Debris Management:</strong> Coordinated removal of tornado debris for safe access</li>
                  <li>• <strong>24/7 Storm Watch:</strong> Continuous monitoring for additional severe weather threats</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Resilient Reconstruction</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Enhanced Wind Resistance:</strong> Upgraded fastening systems for 150+ mph wind events</li>
                  <li>• <strong>Impact-Resistant Materials:</strong> Class 4 rated systems for future storm protection</li>
                  <li>• <strong>Safe Room Integration:</strong> Storm shelter considerations in reconstruction planning</li>
                  <li>• <strong>Community Resilience Design:</strong> Building back stronger for tornado alley conditions</li>
                  <li>• <strong>Agricultural Continuity:</strong> Rapid restoration to minimize disruption to farming operations</li>
                  <li>• <strong>Insurance Maximization:</strong> Ensuring full coverage for enhanced reconstruction standards</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Ochiltree County Severe Weather Preparedness</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Texas Panhandle Storm Corridor</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Perryton's location in the northern Texas Panhandle places it directly in the path of severe weather systems that develop across the Great Plains. The flat topography and convergence of different air masses create ideal conditions for supercell thunderstorm development, including tornado-producing systems.</p>
                <p className="text-gray-700 mb-4 leading-relaxed">The June 2023 tornado serves as a stark reminder that Ochiltree County experiences some of the most severe weather in Texas. Agricultural operations, critical infrastructure, and residential properties all require enhanced protection strategies for this high-risk environment.</p>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-brand-brown mb-3">Enhanced Protection Strategies</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>Tornado-Resistant Construction:</strong> ICF and reinforced masonry for critical structures</li>
                    <li>• <strong>Hail-Proof Roofing:</strong> Class 4 impact resistance with enhanced warranties</li>
                    <li>• <strong>Agricultural Storm Shelters:</strong> Protection for farm workers during peak seasons</li>
                    <li>• <strong>Rapid Repair Protocols:</strong> Pre-staged materials for immediate storm response</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Community Recovery Planning</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Immediate Response (0-24 Hours)</h4>
                      <p className="text-gray-600 text-sm">Life safety assessment, emergency protection, and critical infrastructure evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Stabilization Phase (1-7 Days)</h4>
                      <p className="text-gray-600 text-sm">Temporary weather protection, debris clearance, and utility coordination</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Reconstruction (1-6 Months)</h4>
                      <p className="text-gray-600 text-sm">Enhanced rebuilding with improved storm resistance and code compliance</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Perryton Resilience Network</h4>
                  <p className="text-green-700 text-sm">Partnerships with Ochiltree County Emergency Management, Texas A&M AgriLife Extension, and agricultural cooperatives ensure coordinated response and recovery for this vital farming community.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Agricultural & Residential Roofing Solutions</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Wheat Capital Infrastructure Protection</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">As the "Wheat Capital of the World," Perryton's agricultural infrastructure requires specialized roofing solutions that protect critical grain storage, livestock facilities, and processing operations from the severe weather events that threaten this $250 million agricultural economy.</p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Agricultural Building Systems</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Grain Elevator Protection:</strong> Heavy-duty metal roofing for tall structures</li>
                      <li>• <strong>Livestock Facility Roofing:</strong> Ventilated systems for animal comfort and health</li>
                      <li>• <strong>Equipment Storage Buildings:</strong> Clear-span designs for large machinery protection</li>
                      <li>• <strong>Processing Plant Roofing:</strong> Food-grade materials meeting USDA requirements</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Tornado-Resistant Design</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Enhanced Uplift Resistance:</strong> Systems rated for 180+ mph wind events</li>
                      <li>• <strong>Impact-Resistant Panels:</strong> Heavy-gauge steel with protective coatings</li>
                      <li>• <strong>Reinforced Fastening:</strong> Superior connection systems for extreme loading</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Residential Storm Protection</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Perryton Home Protection Standards</h4>
                  <p className="text-gray-700 text-sm mb-4">Following the June 2023 tornado, Perryton homeowners are prioritizing enhanced storm protection. Our residential systems exceed standard requirements for this high-risk tornado corridor.</p>
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">150+</div>
                      <div className="text-xs text-gray-600">MPH Wind Rating</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">Class 4</div>
                      <div className="text-xs text-gray-600">Impact Resistance</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">10+</div>
                      <div className="text-xs text-gray-600">Year Warranties</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">$250M</div>
                      <div className="text-xs text-gray-600">Ag Economy Protected</div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-xs text-yellow-800"><strong>Community Priority:</strong> Rapid restoration of agricultural infrastructure ensures continuity of operations critical to Perryton's wheat production and livestock operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Tornado Recovery Insurance Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Catastrophic Loss Management</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">The June 2023 tornado created unprecedented insurance claims throughout Ochiltree County. Our experience with catastrophic loss documentation and negotiation ensures maximum recovery for property owners rebuilding from total destruction.</p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-brand-brown mb-3">Perryton Tornado Claims Success</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>85+ tornado claims</strong> processed after June 15, 2023 event</li>
                    <li>• <strong>98% approval rate</strong> for documented tornado damage</li>
                    <li>• <strong>Average 34% increase</strong> in settlements with professional advocacy</li>
                    <li>• <strong>Total reconstruction</strong> coordination for completely destroyed properties</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Agricultural Claims Specialization</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Farm Structure Documentation</h4>
                      <p className="text-gray-600 text-sm">Specialized assessment of grain storage, livestock facilities, and agricultural processing buildings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Business Interruption Advocacy</h4>
                      <p className="text-gray-600 text-sm">Coordination with agricultural operations for critical harvest and livestock feeding schedules</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Enhanced Reconstruction Coverage</h4>
                      <p className="text-gray-600 text-sm">Ensuring insurance coverage for improved storm resistance in high-risk tornado areas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Emergency Restoration Priority</h4>
                      <p className="text-gray-600 text-sm">Expedited processing for time-critical agricultural infrastructure repairs</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Perryton roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Perryton?</AccordionTrigger>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Perryton property owners. Expert hail damage repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}