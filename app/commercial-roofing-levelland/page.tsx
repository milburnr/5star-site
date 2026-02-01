import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Levelland TX | 5 Star Roofing',
  description: "Professional commercial roofing in Levelland TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingLevellandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Levelland", url: "/commercial-roofing-levelland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Levelland TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Levelland?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Levelland vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Levelland?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Levelland."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Levelland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Levelland. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Levelland's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Levelland and surrounding areas, serving the cotton capital of Texas and home to South Plains College. As the county seat of Hockley County and a major agricultural processing hub, Levelland requires specialized roofing solutions for cotton warehouses, educational facilities, agribusiness operations, and the petroleum support industries that drive the South Plains economy.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Levelland's unique agricultural and educational sectors with expert installations and comprehensive warranties. Our 55-minute response time from Amarillo headquarters ensures rapid service for emergency repairs at cotton processing facilities and college buildings. We handle all permits, insurance claims, and warranty documentation for agricultural and educational institutions.</p>
            
            <div className="mt-12 bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-2xl border-l-4 border-brand-gold">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Levelland's Agricultural Economy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Levelland sits at the heart of Texas cotton country, with Hockley County consistently ranking among the state's top cotton producers. Home to Farmer's Cooperative Compress, the world's largest cotton warehouse, and South Plains College, a leading agricultural education institution, Levelland's commercial roofing needs center on massive agricultural storage facilities, processing plants, and educational buildings that support the regional cotton industry.</p>
              <p className="text-gray-700 leading-relaxed">Our commercial roofing systems are engineered for the massive clear-span requirements of cotton storage, the specialized ventilation needs of agricultural processing, and the energy efficiency demands of educational facilities operating on tight budgets while serving agricultural students and communities.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Specialized Roofing Solutions for Levelland's Key Industries</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌾 Cotton Processing & Storage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Levelland's cotton industry, centered around the world's largest cotton warehouse and numerous processing facilities, requires specialized roofing systems capable of protecting valuable crops while accommodating massive storage and processing operations:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Clear-span warehouses up to 400 feet wide</li>
                  <li>• Cotton gin and processing facility protection</li>
                  <li>• Moisture control for fiber preservation</li>
                  <li>• Fire-resistant materials for agricultural storage</li>
                  <li>• Equipment mounting for material handling systems</li>
                  <li>• Ventilation integration for climate control</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Cotton facility roofing must provide superior weather protection while accommodating the specialized equipment and massive storage volumes that make Levelland a global cotton processing center.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🎓 Educational Facilities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">South Plains College and Levelland ISD serve the agricultural community with specialized programs in agriculture, petroleum technology, and trades. Educational facilities require cost-effective roofing solutions that support diverse learning environments:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Agricultural education and research buildings</li>
                  <li>• Student dormitories and housing facilities</li>
                  <li>• Technical training workshops and labs</li>
                  <li>• Athletic facilities and gymnasiums</li>
                  <li>• Administrative and classroom buildings</li>
                  <li>• Library and student services centers</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Educational roofing emphasizes energy efficiency to manage operational costs while providing durable protection for facilities that serve both traditional students and adult learners in agricultural and technical programs.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">⛽ Petroleum Support Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Levelland's strategic location supports petroleum operations throughout the South Plains region with equipment suppliers, service companies, and logistics operations requiring specialized commercial roofing:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Oilfield equipment storage and maintenance</li>
                  <li>• Petroleum service company offices</li>
                  <li>• Equipment dealerships and parts suppliers</li>
                  <li>• Logistics and transportation facilities</li>
                  <li>• Chemical storage and distribution centers</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Petroleum support roofing requires chemical resistance, fire safety compliance, and structural capacity for heavy equipment storage and maintenance operations.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏪 Agricultural Retail & Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Levelland's role as a regional agricultural center supports numerous retail and service businesses serving farmers and ranchers throughout Hockley County and the surrounding South Plains region:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Farm equipment dealerships and service centers</li>
                  <li>• Agricultural supply stores and feed mills</li>
                  <li>• Banking and financial services for agriculture</li>
                  <li>• Veterinary clinics and livestock services</li>
                  <li>• Retail establishments serving farming communities</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Agricultural retail roofing balances cost-effectiveness with durability, supporting businesses that operate on seasonal cycles while serving the year-round needs of farming operations.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-green-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Levelland Agriculture Trusts 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">55</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">55-Minute Response Time</h3>
                <p className="text-gray-700">Critical agricultural facility emergency response from Amarillo headquarters protects valuable crops and equipment.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Agricultural Expertise</h3>
                <p className="text-gray-700">Specialized experience with cotton warehouses, processing facilities, and agricultural storage throughout Texas.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Clear-Span Specialists</h3>
                <p className="text-gray-700">Engineering and installation expertise for massive agricultural storage buildings and processing facilities.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Agricultural Facility Roofing Systems</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Cotton Warehouse Metal Roofing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Cotton storage facilities, including the world's largest cotton warehouse in Levelland, require specialized metal roofing systems capable of spanning enormous distances while protecting valuable crops from moisture and weather damage.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Cotton Storage Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Cotton compress and warehouse facilities</li>
                      <li>• Cotton gin and processing plants</li>
                      <li>• Seed storage and handling buildings</li>
                      <li>• Equipment storage for cotton machinery</li>
                      <li>• Loading dock and shipping areas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Agricultural Storage Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Clear spans up to 400 feet for maximum storage</li>
                      <li>• Superior moisture protection for fiber quality</li>
                      <li>• Fire resistance for agricultural commodity safety</li>
                      <li>• Structural capacity for material handling equipment</li>
                      <li>• 50+ year lifespan protecting valuable investments</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Cotton Warehouse Project:</strong> Completed a 200,000 sq ft standing seam metal roof on a major cotton storage facility, providing protection for over $50M in annual cotton storage capacity.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Educational Facility TPO Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">South Plains College and Levelland ISD require energy-efficient roofing systems that reduce operational costs while supporting agricultural education programs and serving rural communities with limited budgets.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Educational Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Agricultural education and research buildings</li>
                      <li>• Student dormitories and campus housing</li>
                      <li>• Technical training and workshop facilities</li>
                      <li>• Athletic and recreational facilities</li>
                      <li>• Administrative and classroom buildings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Educational Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• 40% reduction in cooling costs for tight budgets</li>
                      <li>• Quiet installation during summer breaks</li>
                      <li>• LEED compliance for sustainable campus initiatives</li>
                      <li>• 25-year warranties matching capital improvement cycles</li>
                      <li>• Energy savings reinvested in educational programs</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>SPC Project:</strong> Installed TPO roofing on South Plains College's new agriculture technology center, achieving 35% energy savings and supporting hands-on agricultural education programs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Agricultural Processing Facility Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Cotton processing facilities, grain elevators, and feed mills require specialized roofing systems that accommodate processing equipment, provide proper ventilation, and resist the corrosive effects of agricultural operations.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Processing Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Cotton gin and processing equipment buildings</li>
                      <li>• Grain elevators and milling operations</li>
                      <li>• Feed mills and mixing facilities</li>
                      <li>• Fertilizer storage and blending plants</li>
                      <li>• Agricultural equipment maintenance shops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Processing Facility Advantages:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Chemical resistance for agricultural processing</li>
                      <li>• Ventilation integration for dust and moisture control</li>
                      <li>• Equipment mounting for conveyors and processing machinery</li>
                      <li>• Fire resistance for combustible agricultural materials</li>
                      <li>• Easy maintenance in dusty environments</li>
                    </ul>
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                      <p className="text-sm text-amber-800"><strong>Processing Facility Success:</strong> Completed specialized roofing on a cotton gin facility, providing superior protection for $5M in processing equipment while maintaining optimal operating conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Harvest Season Emergency Response</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Critical Harvest Protection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Cotton harvest season is crucial for Levelland's economy, with millions of dollars in crops requiring immediate protection from weather damage. Our emergency response prioritizes cotton storage and processing facilities during harvest season (September-December) when weather protection is critical.</p>
                
                <h4 className="text-xl font-bold text-brand-brown mb-3 mt-6">Harvest Season Protocol:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Priority Cotton Facility Response (30 minutes)</h5>
                      <p className="text-gray-700 text-sm">Immediate response to cotton warehouses and processing facilities during harvest season</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Crop Protection Assessment</h5>
                      <p className="text-gray-700 text-sm">Specialized evaluation focusing on cotton storage protection and moisture control</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Continuous Operations Support</h5>
                      <p className="text-gray-700 text-sm">24/7 repair capability during peak harvest when facilities cannot shut down</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-brand-brown mb-4">Seasonal Emergency Priorities:</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h5 className="font-bold text-gray-800">Harvest Season (September-December)</h5>
                    <p className="text-sm text-gray-600">Cotton processing and storage facilities receive highest priority during peak harvest operations.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h5 className="font-bold text-gray-800">Planting Season (March-May)</h5>
                    <p className="text-sm text-gray-600">Agricultural supply and equipment facilities prioritized during critical planting operations.</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h5 className="font-bold text-gray-800">Academic Year (August-May)</h5>
                    <p className="text-sm text-gray-600">Educational facilities receive priority scheduling to minimize disruption to agricultural education programs.</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h5 className="font-bold text-gray-800">Maintenance Season (January-February)</h5>
                    <p className="text-sm text-gray-600">Optimal timing for major roofing projects on cotton facilities during processing downtime.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Levelland Agricultural Roofing Performance</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={175} suffix="+" /></div>
                  <div className="text-brand-brown font-semibold">Levelland Projects</div>
                  <div className="text-sm text-gray-600 mt-1">Agricultural, educational, commercial</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={500} suffix="k" /></div>
                  <div className="text-brand-brown font-semibold">Sq Ft Cotton Storage</div>
                  <div className="text-sm text-gray-600 mt-1">Protected warehouse space</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">Zero</div>
                  <div className="text-brand-brown font-semibold">Crop Losses</div>
                  <div className="text-sm text-gray-600 mt-1">Due to roofing failures</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={25} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">Energy Savings</div>
                  <div className="text-sm text-gray-600 mt-1">Average educational facilities</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Agricultural and Educational Financing Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌾 Agricultural Seasonal Financing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Cotton farming and agricultural businesses operate on seasonal cycles with harvest-time revenue. Our financing programs accommodate these cycles, allowing agricultural businesses to complete roofing projects without disrupting cash flow.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Agricultural Financing Options:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Harvest-season payment programs (October-December)</li>
                  <li>• Crop insurance coordination and documentation</li>
                  <li>• USDA rural development loan coordination</li>
                  <li>• Extended terms for family farming operations</li>
                  <li>• Equipment financing for HVAC and structural upgrades</li>
                </ul>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Cotton Facility Success:</strong> Provided seasonal financing for a $300,000 cotton warehouse roof, with payments aligned to harvest revenue, saving the operation $25,000 in peak-season labor costs.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🎓 Educational Budget Coordination</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Educational institutions like South Plains College operate on strict annual budgets and grant funding cycles. Our flexible payment programs work within these constraints while ensuring quality roofing protection.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Educational Institution Programs:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Summer installation with fall semester payments</li>
                  <li>• State education funding coordination</li>
                  <li>• Multi-year capital improvement financing</li>
                  <li>• Energy performance contracting options</li>
                  <li>• Grant funding timeline accommodation</li>
                </ul>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>SPC Project:</strong> Coordinated a $150,000 roofing project with South Plains College's capital budget, completing work during summer with payment terms matching their fiscal year and grant funding schedule.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Levelland vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Levelland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Levelland.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Levelland property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}