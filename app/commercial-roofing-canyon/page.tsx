import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Canyon TX | 5 Star Roofing',
  description: "Professional commercial roofing in Canyon TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingCanyonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Canyon", url: "/commercial-roofing-canyon/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Canyon TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Roofing Services",
            "name": "Commercial Roofing in Canyon",
            "description": "Professional commercial roofing services in Canyon, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Canyon",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Canyon?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Canyon vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Canyon?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Canyon."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Canyon</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Canyon. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Canyon's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Canyon and surrounding areas, serving the gateway to Palo Duro Canyon and home to West Texas A&M University. As a dynamic university town and tourism destination, Canyon requires specialized roofing solutions for educational facilities, hospitality venues, student housing, and the diverse businesses that support both academic life and the growing tourism industry.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Canyon's unique blend of educational, tourism, and agricultural sectors with expert installations and comprehensive warranties. Our 45-minute response time from Amarillo headquarters provides rapid service for emergency repairs to campus facilities and tourist accommodations. We handle all permits, insurance claims, and warranty documentation for educational institutions and commercial properties.</p>
            
            <div className="mt-12 bg-gradient-to-r from-purple-50 to-red-50 p-8 rounded-2xl border-l-4 border-brand-gold">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Canyon's Educational and Tourism Economy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Canyon thrives as both a university town anchored by West Texas A&M University and as the gateway to Palo Duro Canyon State Park, America's second-largest canyon. This unique combination creates diverse commercial roofing needs ranging from academic facilities and student housing to hotels, restaurants, and tourism-related businesses that must operate efficiently year-round while maintaining aesthetic appeal.</p>
              <p className="text-gray-700 leading-relaxed">Our roofing systems balance durability with architectural aesthetics, supporting Canyon's role as an educational center while enhancing the community's appeal to tourists and prospective students visiting this historic Texas Panhandle destination.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Specialized Roofing Solutions for Canyon's Key Industries</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🎓 Educational Facilities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">West Texas A&M University and Canyon's K-12 educational facilities require roofing systems that support diverse academic functions while managing large building complexes efficiently:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Classroom buildings with HVAC efficiency requirements</li>
                  <li>• Laboratory facilities with specialized ventilation needs</li>
                  <li>• Athletic facilities and gymnasium complexes</li>
                  <li>• Student housing and dormitory buildings</li>
                  <li>• Administrative and library facilities</li>
                  <li>• Research centers with sensitive equipment protection</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Educational facility roofing must accommodate diverse building uses, provide energy efficiency for budget-conscious institutions, and maintain aesthetic standards that reflect academic excellence while ensuring long-term durability.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏨 Hospitality & Tourism</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Canyon's position as the gateway to Palo Duro Canyon creates significant demand for hospitality facilities including hotels, restaurants, gift shops, and entertainment venues that serve tourists and university visitors:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Hotels and motels with guest comfort priorities</li>
                  <li>• Restaurants with kitchen ventilation requirements</li>
                  <li>• Gift shops and retail establishments</li>
                  <li>• Entertainment venues and event spaces</li>
                  <li>• RV parks and camping facility buildings</li>
                  <li>• Tourist information and visitor centers</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Tourism facility roofing emphasizes aesthetic appeal, guest comfort through noise reduction and climate control, and weather resistance to ensure year-round operations for seasonal business cycles.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏪 Downtown Commercial District</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Canyon's historic downtown serves both university and tourism communities with a mix of retail, dining, and service businesses requiring roofing that balances historic preservation with modern performance:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Historic building restoration and preservation</li>
                  <li>• Student-oriented retail and dining establishments</li>
                  <li>• Professional services and local businesses</li>
                  <li>• Banks and financial institutions</li>
                  <li>• Healthcare clinics and professional offices</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Downtown commercial roofing often involves working with historic structures, requiring specialized techniques that preserve architectural character while upgrading performance and energy efficiency.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌾 Agricultural Support Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Canyon's location in prime agricultural territory supports numerous agribusiness operations serving local ranchers and farmers throughout the Texas Panhandle region:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Feed mills and agricultural supply stores</li>
                  <li>• Equipment dealers and service centers</li>
                  <li>• Livestock-related service businesses</li>
                  <li>• Grain storage and processing facilities</li>
                  <li>• Veterinary clinics and animal care facilities</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Agricultural business roofing requires durability for equipment storage, chemical resistance for feed and supply operations, and cost-effective solutions for large building footprints.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-purple-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Canyon Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">45</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">45-Minute Response Time</h3>
                <p className="text-gray-700">Rapid emergency response from Amarillo headquarters ensures minimal disruption to university operations and tourist facilities.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Educational Experience</h3>
                <p className="text-gray-700">Specialized expertise in university facilities, student housing, and educational building requirements throughout Texas.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Historic Preservation</h3>
                <p className="text-gray-700">Experience with historic building preservation and restoration projects that maintain architectural integrity.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Educational Facility Roofing Systems</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">University Campus TPO Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">West Texas A&M University's campus facilities require energy-efficient roofing systems that reduce operational costs while supporting diverse academic functions. TPO roofing provides excellent energy efficiency crucial for managing large campus building portfolios.</p>
                    <h4 className="font-bold text-brand-brown mb-2">University Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Academic buildings and lecture halls</li>
                      <li>• Student union and dining facilities</li>
                      <li>• Library and study centers</li>
                      <li>• Administrative buildings</li>
                      <li>• Research and laboratory facilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Educational Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• 35% reduction in cooling costs for large buildings</li>
                      <li>• Quiet installation minimizing class disruption</li>
                      <li>• 25-year warranties fitting capital improvement cycles</li>
                      <li>• LEED compliance for sustainable campus initiatives</li>
                      <li>• Lightning resistance for electronics protection</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>WTAMU Project:</strong> Completed 40,000 sq ft TPO installation on the new Engineering Technology Building, achieving LEED Silver certification and 30% energy savings.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Athletic Facility Metal Roofing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Canyon's athletic facilities, including West Texas A&M's Buffalo Stadium and gymnasium complexes, require high-performance metal roofing systems that support large clear spans while providing excellent durability for high-traffic facilities.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Athletic Facility Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Football stadiums and press boxes</li>
                      <li>• Basketball and volleyball arenas</li>
                      <li>• Athletic training and fitness centers</li>
                      <li>• Equipment storage and maintenance buildings</li>
                      <li>• Concession stands and restroom facilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Performance Advantages:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Clear-span capabilities up to 300 feet</li>
                      <li>• Superior wind resistance for tall structures</li>
                      <li>• Low maintenance for high-use facilities</li>
                      <li>• Acoustic properties for indoor sports</li>
                      <li>• 50+ year lifespan matching facility expectations</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>Athletic Success:</strong> Installed standing seam metal roofing on Canyon High School's new field house, providing superior protection for a $3M investment in athletic facilities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Student Housing Multi-Family Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Student housing facilities require roofing systems that balance cost-effectiveness with durability while meeting fire safety codes and providing noise reduction for residential comfort in dense campus environments.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Housing Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Traditional dormitory buildings</li>
                      <li>• Apartment-style student housing</li>
                      <li>• Greek life fraternity and sorority houses</li>
                      <li>• Graduate student housing complexes</li>
                      <li>• Faculty and staff residential facilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Residential Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Enhanced fire resistance for multi-story buildings</li>
                      <li>• Sound dampening for study environments</li>
                      <li>• Energy efficiency reducing utility costs</li>
                      <li>• Fast installation during summer breaks</li>
                      <li>• Weather resistance for student comfort</li>
                    </ul>
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                      <p className="text-sm text-amber-800"><strong>Housing Project:</strong> Completed modified bitumen roofing on WTAMU's residence hall complex, housing 500+ students with improved energy efficiency and comfort.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Tourism Season Emergency Response</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Peak Season Priority Service</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Canyon's tourism industry peaks during spring and fall when visitors flock to Palo Duro Canyon. Our emergency response prioritizes hospitality and tourism facilities during these critical revenue periods, ensuring minimal impact to visitor experiences and business operations.</p>
                
                <h4 className="text-xl font-bold text-brand-brown mb-3 mt-6">Tourism Season Response:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Immediate Assessment (30-45 minutes)</h5>
                      <p className="text-gray-700 text-sm">Priority response to hotels, restaurants, and tourist facilities during peak seasons</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Guest Protection Protocol</h5>
                      <p className="text-gray-700 text-sm">Specialized procedures to minimize disruption to hotel guests and restaurant patrons</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Rapid Permanent Repair</h5>
                      <p className="text-gray-700 text-sm">Fast-track repairs to restore full facility operations during critical tourist seasons</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-brand-brown mb-4">Seasonal Emergency Priorities:</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Spring Tourism (March-May)</h5>
                    <p className="text-sm text-gray-600">Peak wildflower season brings maximum visitors. Priority response for all hospitality facilities.</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Summer Education Programs</h5>
                    <p className="text-sm text-gray-600">University summer programs and camps require uninterrupted facility operations.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Fall Tourism (September-November)</h5>
                    <p className="text-sm text-gray-600">Cooler weather and outdoor drama season create second tourism peak requiring priority service.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Academic Year Operations</h5>
                    <p className="text-sm text-gray-600">Continuous university operations require minimal-disruption repair scheduling.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Canyon Commercial Roofing Success Metrics</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={125} suffix="+" /></div>
                  <div className="text-brand-brown font-semibold">Canyon Projects</div>
                  <div className="text-sm text-gray-600 mt-1">University, tourism, commercial</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={15} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">Tourism Revenue Protected</div>
                  <div className="text-sm text-gray-600 mt-1">During emergency responses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={8} suffix="+" /></div>
                  <div className="text-brand-brown font-semibold">WTAMU Buildings</div>
                  <div className="text-sm text-gray-600 mt-1">Successfully completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={98} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">On-Schedule Completion</div>
                  <div className="text-sm text-gray-600 mt-1">Academic deadline compliance</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Educational and Municipal Financing Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🎓 Educational Institution Financing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Educational institutions often operate on unique budget cycles and funding sources. Our flexible financing accommodates semester schedules, grant funding timelines, and capital improvement budgets common in academic settings.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Educational Financing Options:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Summer installation with deferred payments</li>
                  <li>• State funding and bond issue coordination</li>
                  <li>• Multi-year capital improvement financing</li>
                  <li>• Grant funding timeline accommodation</li>
                  <li>• Energy savings performance contracting</li>
                </ul>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800"><strong>WTAMU Success:</strong> Coordinated a $200,000 roofing project with the university's capital improvements budget, completing work during summer break with payment terms matching their fiscal year.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏨 Tourism Business Support</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Tourism and hospitality businesses in Canyon face seasonal revenue fluctuations. Our financing programs help these businesses manage roofing investments without disrupting cash flow during slower seasons.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Hospitality Financing Programs:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Seasonal payment schedules matching revenue cycles</li>
                  <li>• Deferred payments during off-season periods</li>
                  <li>• Quick approval for emergency repairs</li>
                  <li>• Business interruption insurance coordination</li>
                  <li>• Extended terms for family-owned businesses</li>
                </ul>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Tourism Project:</strong> Helped a Canyon hotel complete roof replacement during winter off-season with payment terms aligned to spring tourism revenue, saving $8,000 in peak-season labor costs.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Canyon vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Canyon.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Canyon property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}