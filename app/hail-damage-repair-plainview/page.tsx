import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Plainview TX | 5 Star Roofing',
  description: "Expert hail damage roof repair in Plainview TX. 24/7 emergency service, insurance claim help, quality roofing. Serving Hale County. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairPlainviewPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Plainview", url: "/hail-damage-repair-plainview/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-plainview/#localbusiness",
        "name": "5 Star Commercial Roofing - Plainview Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 34.1848, "longitude": -101.7068 },
        "url": "https://5starroofingpros.com/hail-damage-repair-plainview/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Plainview,_Texas", "name": "Plainview", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Plainview, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "url": "https://5starroofingpros.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Plainview",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Hale County, Texas"
              }
            },
            "description": "Expert hail damage roof repair in Plainview, TX - the cotton capital of the Llano Estacado. Serving Hale County with 24/7 emergency response and insurance claim assistance."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type":"Question","name":"How do cotton warehouses and agricultural buildings affect roofing in Plainview?","acceptedAnswer":{"@type":"Answer","text":"Plainview's cotton industry creates unique roofing challenges with large warehouse facilities and grain elevators. We specialize in agricultural roofing systems designed for high-capacity storage and processing facilities throughout Hale County."}},
              {"@type":"Question","name":"What makes Plainview's location challenging for severe weather?","acceptedAnswer":{"@type":"Answer","text":"Plainview sits in the Llano Estacado region where storms intensify crossing the High Plains. The flat terrain provides no barriers to severe weather, allowing hail-producing supercells to develop maximum intensity as they approach the city."}},
              {"@type":"Question","name":"Do you service Wayland Baptist University buildings?","acceptedAnswer":{"@type":"Answer","text":"Yes, we work with educational institutions and understand the specialized requirements for university facilities. Wayland Baptist University has been part of Plainview since 1908, and we're experienced with academic building roofing needs."}},
              {"@type":"Question","name":"How has the closure of Cargill affected insurance in Plainview?","acceptedAnswer":{"@type":"Answer","text":"While Cargill's 2013 closure impacted the economy, Plainview's diversified agricultural base remains strong. We work with all insurance carriers and understand the evolving needs of the community's agricultural and educational sectors."}},
              {"@type":"Question","name":"What's the best roofing solution for Plainview's cotton storage facilities?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing systems are ideal for cotton storage and processing facilities in Plainview's climate. We design solutions that withstand severe weather while providing the durability needed for agricultural operations."}}
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-perryton-9-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Plainview, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Cotton Capital of the Llano Estacado's Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Plainview—the county seat of Hale County and cotton capital of the Llano Estacado region—sits at the heart of Texas's agricultural powerhouse. Home to Wayland Baptist University (established 1908) and a thriving agricultural economy, this city of 20,194 residents has faced unique challenges including major industrial transitions while maintaining its position as a key player in Texas cotton production. Located 45 miles south of Amarillo at 3,368 feet elevation, Plainview sits directly in the path of severe High Plains storms that regularly produce damaging hail. 5 Star Roofing has been protecting Plainview's homes, businesses, and agricultural facilities since 2014, understanding both the community's agricultural heritage and its evolving economic landscape.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Response</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={75} suffix=" mi" /></div>
                <div className="text-brand-brown font-semibold text-lg">From Amarillo</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={20} suffix="K+" /></div>
                <div className="text-brand-brown font-semibold text-lg">Population</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">🏫</div>
                <div className="text-brand-brown font-semibold text-lg">University Town</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Plainview's Unique Weather and Economic Challenges</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Plainview, with a population of 20,187 according to the 2020 census, stands as the county seat of Hale County in the heart of the Llano Estacado—the vast, flat high plains region that dominates this part of Texas. The city's name perfectly captures its geographic reality: a plain view across endless horizons where severe weather systems can be seen approaching from miles away.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              This South Plains location puts Plainview directly in the path of some of Texas's most severe weather. The flat terrain offers no natural barriers to slow or weaken approaching storm systems. Instead, severe weather intensifies as it crosses the open landscape, often reaching peak strength as supercell thunderstorms pass through the Plainview area. Temperature ranges from 27°F to 91°F annually, with hot, clear summers and cold, windy winters punctuated by severe thunderstorms.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Plainview's economy centers on agriculture, particularly cotton production. The Lubbock-Plainview region leads Texas in cotton farming, with extensive irrigation systems drawing from underground aquifers. The city has weathered economic challenges, including the 2013 closure of the Cargill meatpacking plant that employed 2,000 workers, but has maintained its agricultural foundation. Wayland Baptist University, established in 1908, provides educational and economic stability while contributing to the community's character.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing understands Plainview's unique combination of severe weather exposure, agricultural infrastructure needs, and community resilience. Located about 75 miles from our Amarillo headquarters, we've been serving this proud community since 2014, helping property owners protect their investments against the harsh realities of High Plains weather.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Llano Estacado Weather Patterns</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">27-91°F</div>
                <div className="font-semibold text-gray-700">Annual Range</div>
                <p className="text-sm text-gray-500 mt-2">Extreme seasonal shifts</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">High Plains</div>
                <div className="font-semibold text-gray-700">Geographic Region</div>
                <p className="text-sm text-gray-500 mt-2">No wind barriers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Cotton Belt</div>
                <div className="font-semibold text-gray-700">Agricultural Zone</div>
                <p className="text-sm text-gray-500 mt-2">Irrigation-dependent</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1887</div>
                <div className="font-semibold text-gray-700">Founded</div>
                <p className="text-sm text-gray-500 mt-2">Railroad era</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-brown mb-4">Severe Weather Factors in Plainview</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span><strong>Supercell Development:</strong> Open terrain allows thunderstorms to organize and intensify rapidly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span><strong>Storm Convergence:</strong> Location where multiple weather systems often collide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span><strong>Agricultural Exposure:</strong> Large warehouse and storage facilities present significant surface area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span><strong>Seasonal Extremes:</strong> Rapid temperature changes stress roofing materials throughout the year</span>
                </li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Plainview's Agricultural Heritage and Challenges</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As the cotton capital of the Llano Estacado, Plainview has built its economy around agricultural production, particularly cotton farming that benefits from extensive irrigation systems. The city was once home to Jimmy Dean, the sausage king, reflecting its deep agricultural roots. However, recent decades have brought both challenges and adaptations.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Agricultural Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Cotton warehouses and processing facilities</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Grain elevators and storage buildings</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Irrigation equipment manufacturing</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Farm machinery dealerships</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Agricultural research facilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Economic Resilience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Wayland Baptist University (1908)</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Educational sector employment</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Healthcare and professional services</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Retail and hospitality</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Government services (county seat)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Historical Note:</strong> The 2013 closure of the Cargill meatpacking plant, which employed 2,000 workers, marked a significant economic transition for Plainview. The closure was attributed to drought conditions affecting cattle supplies—demonstrating how weather directly impacts local economics and building infrastructure needs.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Plainview Hail Damage Repair Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Comprehensive Assessment</h3>
                <p className="text-gray-600">Detailed inspections of residential, commercial, and agricultural properties including cotton warehouses and storage facilities.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Expertise</h3>
                <p className="text-gray-600">Experienced handling of residential, commercial, and specialized agricultural insurance policies.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Documentation</h3>
                <p className="text-gray-600">Thorough damage documentation with Xactimate estimates and photographic evidence for insurance adjusters.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Installation</h3>
                <p className="text-gray-600">Professional repairs using materials designed for High Plains weather conditions and agricultural requirements.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Educational Facilities</h3>
                <p className="text-gray-600">Specialized experience with university and educational institution roofing systems and maintenance requirements.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Long-term Protection</h3>
                <p className="text-gray-600">Comprehensive warranties and maintenance programs for all property types throughout Hale County.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Class 4 Shingles: Essential for Plainview's Climate</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Plainview's location in the heart of the Llano Estacado exposes properties to some of Texas's most severe weather. Class 4 impact-resistant shingles provide critical protection against the large hail that regularly affects this High Plains region.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="font-semibold">Damage Reduction</div>
                <p className="text-sm mt-2">Vs. standard shingles</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">10-30%</div>
                <div className="font-semibold">Insurance Discount</div>
                <p className="text-sm mt-2">Premium savings</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">UL2218</div>
                <div className="font-semibold">Certified</div>
                <p className="text-sm mt-2">Highest rating</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">50yr</div>
                <div className="font-semibold">Warranty</div>
                <p className="text-sm mt-2">Available options</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Serving All of Plainview & Hale County</h2>
            <p className="text-lg text-gray-600 mb-6">Our comprehensive service area encompasses all residential neighborhoods, commercial districts, and agricultural facilities throughout Plainview and Hale County:</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Residential Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Downtown Plainview", "North Plainview", "South Plainview", "East Plainview", "West Plainview", "Wayland Area", "Industrial District", "Agricultural Suburbs"].map((area) => (
                    <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium text-sm">{area}</div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Commercial & Agricultural</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Cotton Warehouses", "Grain Elevators", "Processing Facilities", "Wayland Baptist University", "Healthcare Facilities", "Retail Centers", "Government Buildings", "Educational Facilities"].map((area) => (
                    <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium text-sm">{area}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-brown mb-3">Specialized Services for Plainview</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Cotton storage facilities</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> University buildings</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Grain storage systems</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Agricultural warehouses</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Educational facilities</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Processing buildings</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Historic district buildings</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Commercial retail centers</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Healthcare facilities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Plainview Hail Damage FAQs</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do cotton warehouses and agricultural buildings affect roofing challenges?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Plainview's cotton storage and processing facilities require specialized roofing systems due to their large spans and heavy loads. We design solutions that protect valuable agricultural products while withstanding High Plains severe weather. Our team understands the unique insurance and structural requirements for these facilities.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes Plainview's weather particularly severe?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Plainview's location in the Llano Estacado region means storms approach across hundreds of miles of flat terrain with no barriers to slow them down. This allows supercell thunderstorms to reach maximum intensity, often producing golf ball to softball-sized hail as they pass through the area.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you service Wayland Baptist University buildings?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we have experience with educational institution roofing systems and understand the specialized requirements for university facilities. Wayland Baptist University has been a cornerstone of Plainview since 1908, and we're equipped to handle the unique needs of academic buildings, dormitories, and administrative facilities.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How has economic change affected roofing needs in Plainview?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">While the 2013 Cargill plant closure impacted the community, Plainview has maintained its agricultural foundation. We work with property owners navigating economic transitions and offer flexible payment options. The city's resilience and educational sector provide stability for long-term roofing investments.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Plainview's agricultural climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">For residential properties, Class 4 impact-resistant shingles offer excellent protection. For cotton warehouses and grain storage facilities, standing seam metal roofing provides durability against severe weather while meeting agricultural building requirements. We select materials based on specific property needs and local climate challenges.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services in Plainview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-plainview/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Complete storm restoration for homes, businesses, and agricultural facilities</p>
              </a>
              <a href="/roof-replacement-plainview/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Agricultural Roofing</h3>
                <p className="text-gray-600">Specialized systems for cotton warehouses and processing facilities</p>
              </a>
              <a href="/roof-inspections-plainview/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">Comprehensive assessments for all property types throughout Hale County</p>
              </a>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protecting Plainview's Agricultural Legacy</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">From family homes to cotton warehouses, from Wayland Baptist University to agricultural facilities—we protect the infrastructure that keeps Plainview thriving. Free inspections for all property types.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}