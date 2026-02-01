import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Big Spring TX | 5 Star Roofing',
  description: "Professional commercial roofing in Big Spring TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingBigSpringPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Big Spring", url: "/commercial-roofing-big-spring/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Big Spring TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Big Spring?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Big Spring vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Big Spring?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Big Spring."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Big Spring</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Big Spring. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Big Spring's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Big Spring and surrounding areas, serving the crossroads of West Texas healthcare, corrections, and logistics. As a strategic I-20 corridor hub housing major healthcare facilities, correctional institutions, and energy operations, Big Spring requires specialized roofing solutions for mission-critical facilities that operate 24/7.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Big Spring's unique institutional and commercial needs with expert installations and comprehensive warranties. Our 75-minute response time from Amarillo headquarters ensures rapid service for emergency repairs at healthcare facilities, correctional institutions, and critical infrastructure. We handle all permits, insurance claims, and warranty documentation.</p>
            
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border-l-4 border-brand-gold">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Big Spring's Critical Infrastructure Needs</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Big Spring serves as a regional hub for healthcare, corrections, and logistics along the vital I-20 corridor. Home to the Veterans Administration Hospital, Big Spring State Hospital, Federal Correctional Institution, and multiple private correctional facilities, the city's commercial roofing needs are defined by security requirements, 24/7 operations, and strict regulatory compliance.</p>
              <p className="text-gray-700 leading-relaxed">Our commercial roofing systems meet the stringent security, healthcare, and safety standards required by institutional facilities while providing cost-effective solutions for retail, logistics, and energy sector businesses that support the regional economy.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Specialized Roofing Solutions for Big Spring's Key Sectors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏥 Healthcare Facilities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Big Spring hosts major healthcare institutions including the Veterans Administration Medical Center and Big Spring State Hospital. These facilities require specialized roofing systems that ensure continuous operation, infection control, and patient safety:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Hospital-grade air filtration and ventilation support</li>
                  <li>• Zero-tolerance for water intrusion near patient areas</li>
                  <li>• Quiet installation to minimize disruption to patient care</li>
                  <li>• Chemical resistance for medical waste processing areas</li>
                  <li>• Emergency power equipment mounting capabilities</li>
                  <li>• Compliance with healthcare facility building codes</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Our medical facility roofing systems feature redundant waterproofing, specialized penetration details for medical equipment, and installation protocols that maintain sterile environments during construction.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏛️ Correctional Facilities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Big Spring's correctional institutions, including the Federal Correctional Institution and multiple private facilities, demand security-focused roofing solutions that prevent unauthorized access while maintaining structural integrity:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Anti-tamper roofing systems and fasteners</li>
                  <li>• Restricted access installation procedures</li>
                  <li>• Impact-resistant materials for perimeter areas</li>
                  <li>• Integration with security monitoring systems</li>
                  <li>• Rapid repair capabilities for emergency situations</li>
                  <li>• Compliance with federal detention facility standards</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Our correctional facility experience includes specialized security clearances, background-checked installation crews, and materials that meet federal correctional facility specifications.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🚛 Logistics & Distribution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Big Spring's strategic location along I-20 makes it a logistics hub for West Texas. Distribution centers, trucking facilities, and freight operations require roofing systems designed for heavy equipment and high-traffic environments:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• High-capacity structural systems for cranes and equipment</li>
                  <li>• Large clear-span capabilities for warehouse operations</li>
                  <li>• Energy-efficient systems to control operational costs</li>
                  <li>• Quick installation to minimize shipping disruptions</li>
                  <li>• Dock door and loading bay integration</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Metal and TPO systems provide excellent durability for logistics operations while offering energy savings that reduce operational overhead.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">⚡ Energy & Refining</h3>
                <p className="text-gray-700 leading-relaxed mb-4">The Alon USA refinery and supporting energy infrastructure in Big Spring require specialized roofing for processing facilities, storage areas, and administrative buildings:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Fire-resistant materials meeting NFPA standards</li>
                  <li>• Chemical exposure resistance for processing areas</li>
                  <li>• Explosion-resistant construction techniques</li>
                  <li>• Static electricity dissipation systems</li>
                  <li>• Emergency access and evacuation considerations</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Our industrial roofing systems for energy facilities exceed safety standards while providing long-term protection for critical infrastructure investments.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Big Spring Institutions Trust 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">75</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">75-Minute Response Time</h3>
                <p className="text-gray-700">Critical facility emergency response from Amarillo HQ ensures minimal disruption to healthcare and correctional operations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Security Clearances</h3>
                <p className="text-gray-700">Background-checked crews with experience in correctional and federal facility projects throughout Texas.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Healthcare Compliance</h3>
                <p className="text-gray-700">Specialized protocols for medical facility roofing that maintain sterile environments and patient safety standards.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Systems for Big Spring's Institutional Facilities</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Healthcare Facility TPO Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Healthcare facilities in Big Spring require the highest standards of waterproofing and air quality control. Our healthcare-grade TPO systems feature enhanced seaming techniques and air barrier integration to maintain the controlled environments essential for patient care.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Healthcare-Specific Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Intensive care and surgical wings</li>
                      <li>• Pharmaceutical storage areas</li>
                      <li>• Medical equipment housing</li>
                      <li>• Emergency services buildings</li>
                      <li>• Administrative and records facilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Big Spring Healthcare Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Superior air barrier performance for HVAC efficiency</li>
                      <li>• Chemical resistance for medical waste processing</li>
                      <li>• Noise reduction for patient comfort</li>
                      <li>• Fast-track installation minimizing patient disruption</li>
                      <li>• 25+ year warranties reducing maintenance costs</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Big Spring Healthcare Success:</strong> Completed a 15,000 sq ft TPO installation on the VA Medical Center's new wing with zero patient care disruptions over 6 months.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Correctional Facility Security Roofing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Correctional facilities require specialized roofing systems that prioritize security while maintaining structural integrity. Our security-enhanced metal and TPO systems feature anti-tamper designs and restricted access installation procedures.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Security Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Federal correctional institutions</li>
                      <li>• Private correctional facilities</li>
                      <li>• Administrative and security buildings</li>
                      <li>• Perimeter and guard tower structures</li>
                      <li>• Visitor processing centers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Security Enhancements:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Anti-tamper fasteners and seams</li>
                      <li>• Impact-resistant membrane systems</li>
                      <li>• Concealed attachment methods</li>
                      <li>• Restricted access installation protocols</li>
                      <li>• Emergency repair capabilities</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>Big Spring Corrections Project:</strong> Successfully completed security roofing upgrades on a 25,000 sq ft correctional facility with full compliance with federal detention standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Industrial Facility Metal Roofing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Big Spring's energy sector, including the Alon USA refinery, requires industrial-grade metal roofing systems that withstand chemical exposure, extreme temperatures, and safety requirements unique to petroleum processing facilities.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Industrial Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Petroleum refining and processing plants</li>
                      <li>• Chemical storage and distribution</li>
                      <li>• Power generation facilities</li>
                      <li>• Heavy manufacturing operations</li>
                      <li>• Maintenance and repair shops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Industrial Performance Features:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Fire resistance meeting NFPA 285 standards</li>
                      <li>• Chemical-resistant coating systems</li>
                      <li>• Static electricity dissipation</li>
                      <li>• High wind resistance (150+ mph)</li>
                      <li>• 50+ year lifespan in industrial environments</li>
                    </ul>
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                      <p className="text-sm text-amber-800"><strong>Refinery Project:</strong> Installed specialized metal roofing on processing units at the Alon USA refinery, meeting all safety and environmental standards while maintaining operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Emergency Response for Big Spring's Critical Facilities</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Priority Emergency Service</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Big Spring's healthcare facilities, correctional institutions, and critical infrastructure cannot tolerate roofing failures. Our emergency response protocols prioritize mission-critical facilities with 75-minute response times and specialized emergency repair capabilities.</p>
                
                <h4 className="text-xl font-bold text-brand-brown mb-3 mt-6">Critical Facility Response Protocol:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Priority Dispatch (0-10 minutes)</h5>
                      <p className="text-gray-700 text-sm">Immediate emergency response team deployment for healthcare and correctional facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Facility Assessment (60-75 minutes)</h5>
                      <p className="text-gray-700 text-sm">Specialized assessment considering security and operational requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Immediate Protection (Same Day)</h5>
                      <p className="text-gray-700 text-sm">Emergency containment with minimal disruption to critical operations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-brand-brown mb-4">Priority Response Categories:</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-bold text-gray-800">Level 1: Healthcare Facilities</h5>
                    <p className="text-sm text-gray-600">Hospitals, medical centers, and patient care facilities receive highest priority emergency response.</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-bold text-gray-800">Level 2: Correctional Facilities</h5>
                    <p className="text-sm text-gray-600">Federal and private correctional institutions with security-focused emergency protocols.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-bold text-gray-800">Level 3: Industrial Operations</h5>
                    <p className="text-sm text-gray-600">Refinery and manufacturing facilities requiring safety-compliant emergency repairs.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-bold text-gray-800">Level 4: Commercial Properties</h5>
                    <p className="text-sm text-gray-600">Standard commercial properties with next-business-day emergency response.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Big Spring Commercial Roofing: Performance Metrics</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={200} suffix="+" /></div>
                  <div className="text-brand-brown font-semibold">Big Spring Projects</div>
                  <div className="text-sm text-gray-600 mt-1">Healthcare, corrections, commercial</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={95} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">Facility Uptime</div>
                  <div className="text-sm text-gray-600 mt-1">During installations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">Zero</div>
                  <div className="text-brand-brown font-semibold">Security Breaches</div>
                  <div className="text-sm text-gray-600 mt-1">In correctional facility work</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={100} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">Compliance Rate</div>
                  <div className="text-sm text-gray-600 mt-1">Healthcare & federal standards</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Institutional Facility Financing and Compliance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏛️ Government Contract Support</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Our experience with federal facilities and government contracts ensures smooth project execution for Big Spring's institutional clients, including compliance with federal procurement requirements and specialized billing procedures.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Government Contract Services:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• GSA schedule contractor certification</li>
                  <li>• Federal facility clearance procedures</li>
                  <li>• Net payment terms for government clients</li>
                  <li>• Compliance documentation and reporting</li>
                  <li>• Multi-year service agreements</li>
                </ul>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Federal Project Example:</strong> Completed a $250,000 roofing project at the Big Spring Federal Correctional Institution under GSA guidelines with full compliance documentation.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏥 Healthcare Facility Financing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Healthcare facilities often require specialized financing arrangements that accommodate budget cycles, grant funding, and multi-year capital improvement programs common in institutional settings.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Healthcare Financing Options:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Extended payment terms for budget cycles</li>
                  <li>• Grant funding coordination and documentation</li>
                  <li>• Capital improvement program financing</li>
                  <li>• Emergency repair immediate approval</li>
                  <li>• Multi-phase project payment structures</li>
                </ul>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Healthcare Success:</strong> Provided flexible financing for a $180,000 Big Spring State Hospital roof replacement, working within their annual budget constraints.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Big Spring vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Big Spring.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What commercial roofing systems work best in Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Big Spring property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}