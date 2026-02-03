import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing Perryton TX | 5 Star Roofing',
  description: "Professional residential roofing in Perryton TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingPerrytonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Perryton", url: "/residential-roofing-perryton/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Perryton TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Perryton",
            "description": "Professional residential roofing services in Perryton, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
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
              "name": "Residential Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Perryton?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Perryton typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/ResidentialServices.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Perryton</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing throughout Perryton. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Perryton's Premier Residential Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional residential roofing throughout Perryton and Ochiltree County, serving the "Wheatheart of the Plains" at the Texas-Oklahoma-Kansas tri-state junction. This unique agricultural and energy hub presents distinct roofing challenges from expansive wheat fields, active wind farms, and the convergence of three state weather systems.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Perryton's 8,800 residents with expert installations designed for High Plains agricultural conditions. Our team understands the specific needs of farming families, energy workers, and the established community that has thrived here for generations.</p>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Perryton Housing Market Profile</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Perryton's housing market reflects its agricultural heritage and modern energy development. The median home value is approximately $125,000, with a housing stock that includes historic farmhouses, established neighborhoods, and modern developments serving the expanding wind energy sector. The city's strategic tri-state location has attracted steady growth despite agricultural cycles.</p>
              
              <p className="text-gray-700 leading-relaxed mb-4">The housing inventory features significant numbers of homes built during the agricultural boom years of the 1970s-1980s, many requiring roof replacement as they approach 40+ years of age. Newer subdivisions near the high school and along Highway 83 feature contemporary construction, while rural properties showcase traditional agricultural architecture adapted to open plains conditions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Perryton Demographics & Housing</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Population: ~8,800 residents</li>
                  <li>• Median home value: $125,000</li>
                  <li>• Agricultural workforce: 25%</li>
                  <li>• Wind energy workers: 15%</li>
                  <li>• Average home age: 41 years</li>
                  <li>• Rural properties: 35%</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Tri-State Weather Convergence</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Three-state weather system convergence</li>
                  <li>• Elevation: 2,960 feet</li>
                  <li>• Average wind speed: 14.8 mph</li>
                  <li>• Extreme temperature range: -20°F to 105°F</li>
                  <li>• High Plains hail frequency</li>
                  <li>• Open terrain wind exposure</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Roofing for Agricultural & Energy Communities</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Agricultural Housing</h3>
                <p className="text-gray-700 mb-4">Specialized roofing services for farming families and rural properties throughout the wheat belt region.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dust-resistant sealing systems</li>
                  <li>• Barn and outbuilding roofing</li>
                  <li>• Seasonal scheduling flexibility</li>
                  <li>• Large property coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Wind Energy Housing</h3>
                <p className="text-gray-700 mb-4">Comprehensive services for workers and facilities supporting Ochiltree County's expanding wind energy operations.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-wind rated systems</li>
                  <li>• Energy worker housing</li>
                  <li>• Industrial environment protection</li>
                  <li>• Vibration-resistant installations</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Historic Preservation</h3>
                <p className="text-gray-700 mb-4">Expert restoration of historic homes and buildings reflecting Perryton's agricultural heritage and early development.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Period-appropriate materials</li>
                  <li>• Historic district compliance</li>
                  <li>• Architectural character preservation</li>
                  <li>• Modern efficiency upgrades</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Tri-State Agricultural Roofing Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Open Plains Exposure</h4>
                  <p className="text-gray-700 mb-4">Perryton's location on open agricultural plains creates maximum exposure to wind, hail, and weather systems. Our installations account for this extreme exposure with enhanced fastening and impact protection.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Agricultural Environment</h4>
                  <p className="text-gray-700">Wheat harvesting and farming operations create seasonal dust exposure, agricultural chemical contact, and debris challenges that require specialized roofing materials and sealing systems.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Wind Energy Infrastructure</h4>
                  <p className="text-gray-700 mb-4">The growing wind energy sector creates unique environmental factors including low-frequency vibrations and increased infrastructure activity affecting nearby residential properties.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Economic Cycles</h4>
                  <p className="text-gray-700">Agricultural and energy market fluctuations influence housing maintenance cycles. We work with property owners to provide cost-effective solutions aligned with commodity cycles and seasonal cash flow.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Wheatheart of the Plains Chooses 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Agricultural Community Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Farming Community Understanding</h4>
                      <p className="text-gray-700">Deep appreciation for agricultural cycles, seasonal constraints, and the unique needs of farming families throughout Ochiltree County.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Open Plains Weather Knowledge</h4>
                      <p className="text-gray-700">Extensive experience with the unique weather patterns created by the tri-state convergence and open agricultural terrain exposure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Rural Property Specialization</h4>
                      <p className="text-gray-700">Comprehensive services for large rural properties, outbuildings, and the coordination required for extensive agricultural operations.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Tri-State Service Area</h3>
                <p className="text-gray-700 mb-4">Complete residential and agricultural roofing services throughout the tri-state region:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Perryton historic district</li>
                  <li>• Residential neighborhoods near schools</li>
                  <li>• Rural farming properties</li>
                  <li>• Wind energy worker housing</li>
                  <li>• Booker, Farnsworth, and surrounding areas</li>
                  <li>• Cross-border Oklahoma communities</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-brand-brown font-semibold">Flexible scheduling for agricultural seasons. Priority service for storm damage during wheat harvest and planting seasons.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions About Perryton Roofing</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Perryton?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Perryton typically costs $9,500-$24,000, reflecting the need for enhanced wind resistance in open plains conditions. Agricultural properties may require specialized materials and coordination. Most projects are insurance-covered with homeowner deductibles of $1,000-$2,500.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with farming families and agricultural properties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in agricultural community roofing including farmhouses, outbuildings, and rural properties. We understand harvest and planting schedules, offer flexible payment terms aligned with crop cycles, and coordinate large property projects. Our materials are selected for dust and chemical exposure common in farming areas.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do wind farms affect residential roofing in the area?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Wind energy development brings both benefits and challenges. Properties near wind farms may experience low-frequency vibrations and increased infrastructure activity. We use enhanced fastening systems and vibration-resistant materials when needed. Many wind workers choose upgraded roofing systems for their own homes.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes Perryton's weather conditions unique?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Perryton's tri-state location creates weather convergence from Texas, Oklahoma, and Kansas systems. The open agricultural terrain provides no wind breaks, creating maximum exposure to storms. We design systems for these conditions with high-wind ratings, impact resistance, and enhanced UV protection for the high-elevation exposure.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can you coordinate roofing around agricultural seasons?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We understand wheat harvest (June-July) and planting seasons (September-October) are critical periods. We offer priority scheduling before these busy times and emergency services during harvest. Many farming families prefer spring installations after winter equipment maintenance is complete.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in agricultural environments?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Materials must resist dust infiltration, chemical exposure from farming operations, and extreme wind exposure. We recommend Class 4 impact-resistant shingles with enhanced granule adhesion, metal roofing for longevity, and advanced sealing systems to prevent dust and moisture infiltration during harvest operations.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you service rural properties and outbuildings?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide comprehensive services for rural properties including barns, equipment sheds, grain storage facilities, and farmhouses. We understand the coordination required for large agricultural operations and can schedule multiple buildings simultaneously to minimize disruption to farm operations.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle cross-border service near Oklahoma?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our service area includes communities just across the Oklahoma border. We understand multi-state insurance requirements and building codes. Many residents work across state lines, and we coordinate with both Texas and Oklahoma insurance companies and building departments as needed.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Agricultural Season Coordination & Planning</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Farm Cycles</h3>
                <p className="text-gray-700 mb-6">The "Wheatheart of the Plains" operates on agricultural rhythms that affect housing maintenance and roofing schedules. We coordinate our services around critical farming periods to minimize disruption to essential agricultural operations.</p>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">🌾 Optimal Roofing Seasons:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Early Spring (March-April): Pre-planting season</li>
                    <li>• Late Summer (August): Post-harvest coordination</li>
                    <li>• Fall (September): Before winter preparations</li>
                    <li>• Winter (December-February): Planning season</li>
                    <li>• Emergency services year-round</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Wind Energy Considerations</h3>
                <p className="text-gray-700 mb-6">Ochiltree County's expanding wind energy sector creates new considerations for residential roofing, from worker housing needs to environmental factors affecting nearby properties.</p>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">💨 Wind Energy Impact Areas:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Enhanced wind exposure considerations</li>
                    <li>• Low-frequency vibration resistance</li>
                    <li>• Infrastructure coordination requirements</li>
                    <li>• Worker housing roofing demands</li>
                    <li>• Environmental monitoring integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Tri-State Weather Monitoring & Response</h3>
              <p className="text-gray-700 mb-6">Perryton's unique tri-state location requires monitoring weather systems from three states and understanding how they converge over the open agricultural plains.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌪️</div>
                  <h4 className="font-bold text-brand-brown mb-2">Texas Systems</h4>
                  <p className="text-gray-700 text-sm">Panhandle supercells, dryline storms, and classic Texas severe weather patterns from the south.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">⛈️</div>
                  <h4 className="font-bold text-brand-brown mb-2">Oklahoma Convergence</h4>
                  <p className="text-gray-700 text-sm">Moisture-rich systems from the southeast creating enhanced precipitation and severe weather potential.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">❄️</div>
                  <h4 className="font-bold text-brand-brown mb-2">Kansas Influence</h4>
                  <p className="text-gray-700 text-sm">Cold air masses and winter weather systems from the northern plains creating rapid temperature changes.</p>
                </div>
              </div>
            </div>
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
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Perryton property owners. Expert residential roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}