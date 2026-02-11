import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "TPO Roofing Lubbock TX | Expert Service | Free Inspection",
  description: "Professional tpo roofing in Lubbock TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "TPO Roofing", url: "/tpo-roofing/" },
        { name: "Lubbock", url: "/tpo-roofing-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-lubbock/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock TPO Roofing",
        "image": "https://5starroofingpros.com/images/TPO1.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/tpo-roofing-lubbock/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional tpo roofing in Lubbock TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Membrane Roofing Installation",
            "name": "TPO Roofing in Lubbock",
            "description": "Professional tpo roofing services in Lubbock, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lubbock",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "TPO Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TPO Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TPO Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"What is TPO roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO (Thermoplastic Polyolefin) is a single-ply white membrane for flat/low-slope roofs. Energy Star rated, heat-welded seams, 15-25 year warranties."}},{"@type":"Question","name":"How much does TPO roofing cost in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"TPO installation in Lubbock costs $4-$8 per square foot including materials and labor. Excellent value for energy efficiency and durability."}},{"@type":"Question","name":"Why choose TPO over other commercial roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO reflects heat (lower cooling costs), resists hail/wind damage, heat-welded seams are watertight, and offers excellent cost-to-performance ratio."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">TPO Roofing in <span className="text-brand-gold-light">Lubbock</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Hub City's Premier Commercial Roofing Specialists</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional TPO roofing throughout Lubbock and the South Plains. Expert installation designed for West Texas weather extremes, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Lubbock's Premier TPO Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional TPO roofing throughout Lubbock and the South Plains region. As the Hub City's trusted commercial roofing experts, we understand the unique challenges facing Lubbock's diverse commercial landscape - from the constant West Texas winds and dust storms to severe hailstorms and extreme temperature variations.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Lubbock's thriving business community with expert TPO installations, comprehensive warranties, and outstanding customer service. Our team understands Lubbock's specific building codes, the unique demands of university facilities, agricultural operations, wind energy infrastructure, and the growing technology sector that's transforming the South Plains economy.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌪️ West Texas Weather Ready</h3>
                <p className="text-gray-700 leading-relaxed">Lubbock's location on the Llano Estacado exposes buildings to constant high winds, dust storms, severe hail, and dramatic temperature swings. Our TPO systems are engineered specifically for South Plains conditions, featuring enhanced wind uplift resistance and superior membrane durability to withstand the region's challenging climate.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🎓 University & Technology Hub</h3>
                <p className="text-gray-700 leading-relaxed">From Texas Tech University facilities to the growing technology corridor, Lubbock's evolving commercial landscape demands modern roofing solutions. Our TPO installations serve everything from research facilities and student housing to high-tech manufacturing and energy infrastructure projects.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Why TPO Roofing Excels in Lubbock's Climate</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">💨 Superior Wind Resistance</h3>
                <p className="text-gray-700 mb-4">Lubbock's average wind speed of 12+ mph and frequent gusts over 40 mph demand exceptional wind performance. Our TPO systems feature mechanically attached or fully adhered installation methods designed to exceed Lubbock's wind load requirements and withstand the constant stress of prairie winds.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Wind uplift resistance to 120+ mph</li>
                  <li>• Enhanced perimeter securement</li>
                  <li>• Factory Mutual approved systems</li>
                  <li>• Meets/exceeds local wind codes</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌡️ Energy Efficiency Excellence</h3>
                <p className="text-gray-700 mb-4">Lubbock's hot summers with temperatures regularly over 95°F drive cooling costs sky-high. TPO's reflective white surface reduces heat absorption by up to 85%, dramatically lowering energy consumption and operational costs for Lubbock commercial properties year-round.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Up to 40% cooling cost reduction</li>
                  <li>• Energy Star certified membranes</li>
                  <li>• Cool Roof Rating Council approved</li>
                  <li>• LP&L utility rebate eligible</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🧊 Dust & Hail Protection</h3>
                <p className="text-gray-700 mb-4">The South Plains' frequent dust storms and hailstorms require specialized roofing solutions. TPO's smooth, non-porous surface resists dust accumulation while maintaining superior impact resistance against hail up to 2 inches in diameter - critical protection for Lubbock properties.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• UL 2218 Class 4 impact rating</li>
                  <li>• Dust-resistant smooth surface</li>
                  <li>• Easy maintenance and cleaning</li>
                  <li>• Insurance premium discounts available</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Lubbock Commercial Sectors We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Major Industries</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🌾 Agriculture & Cotton</h4>
                    <p className="text-gray-700">Serving the heart of cotton country with durable TPO systems for gins, warehouses, grain elevators, and processing facilities throughout the South Plains.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🎓 Education & Research</h4>
                    <p className="text-gray-700">TPO roofing for Texas Tech University facilities, LISD buildings, South Plains College, and research institutions requiring specialized performance standards.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">⚡ Wind Energy</h4>
                    <p className="text-gray-700">Protecting wind energy infrastructure and support facilities with roofing systems designed for industrial environments and extreme weather exposure.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏥 Healthcare</h4>
                    <p className="text-gray-700">Serving UMC Health System, Covenant Health, and medical facilities with quiet, durable TPO roofing that meets healthcare industry standards.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">💻 Technology</h4>
                    <p className="text-gray-700">Supporting Lubbock's growing tech sector with advanced roofing solutions for data centers, manufacturing facilities, and innovation centers.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Commercial Buildings</h3>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>University and educational facilities</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Agricultural processing plants</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Cotton gins and warehouses</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Wind energy facilities</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Hospital and medical centers</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Retail centers and malls</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Manufacturing and industrial</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Office buildings and headquarters</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Government and municipal facilities</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Distribution and logistics centers</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Aviation and aerospace facilities</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Food processing and storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Our Comprehensive TPO Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">1</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Detailed Site Assessment</h3>
                <p className="text-gray-700">Comprehensive evaluation including moisture scanning, structural analysis, wind load calculations, and assessment of Lubbock-specific challenges like dust accumulation and wind exposure.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">2</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Custom System Design</h3>
                <p className="text-gray-700">Engineered roofing solution tailored to your specific building requirements, local wind loads, and Lubbock building codes. Includes drainage design and energy efficiency optimization.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">3</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Permit Coordination</h3>
                <p className="text-gray-700">Complete handling of City of Lubbock permits, code compliance verification, and coordination with building officials for seamless project approval and inspection scheduling.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">4</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Quality Material Sourcing</h3>
                <p className="text-gray-700">Premium TPO membranes and components specifically selected for South Plains performance requirements, delivered with proper staging to minimize business disruption.</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">5</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Expert Installation</h3>
                <p className="text-gray-700">Professional installation by certified technicians using advanced heat-welding equipment and proven attachment methods designed for Lubbock's demanding weather conditions.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">6</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Final Quality Assurance</h3>
                <p className="text-gray-700">Thorough inspection, testing, and documentation delivery including manufacturer warranties, maintenance guidelines, and our comprehensive workmanship guarantee.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Lubbock Weather Challenges & TPO Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🌪️ Constant Wind Exposure</h3>
                <p className="text-gray-700 mb-4">Lubbock's location on the high plains creates constant wind exposure averaging 12+ mph with frequent gusts over 40 mph. This continuous stress can fatigue roofing materials over time.</p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Enhanced mechanical attachment systems</li>
                    <li>• Reinforced membrane construction</li>
                    <li>• Superior wind uplift ratings</li>
                    <li>• Proven long-term durability in high-wind environments</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🌫️ Frequent Dust Storms</h3>
                <p className="text-gray-700 mb-4">The South Plains experiences regular dust storms that can clog drains, accumulate on roofs, and create maintenance challenges for traditional roofing systems.</p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Smooth, non-porous surface resists dust buildup</li>
                    <li>• Easy cleaning and maintenance</li>
                    <li>• Superior drainage design prevents clogging</li>
                    <li>• UV-resistant formulation maintains performance</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🌡️ Extreme Temperature Swings</h3>
                <p className="text-gray-700 mb-4">Lubbock can experience temperature variations of 50+ degrees in a single day, creating thermal stress that can crack or fatigue roofing materials.</p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Flexible membrane accommodates thermal movement</li>
                    <li>• Superior temperature resistance (-40°F to 180°F)</li>
                    <li>• Welded seams maintain integrity through cycles</li>
                    <li>• Reflective surface minimizes heat absorption</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🧊 Severe Hailstorms</h3>
                <p className="text-gray-700 mb-4">Lubbock's location in "Hail Alley" means buildings face significant risk from severe hailstorms with stones frequently exceeding golf ball size.</p>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• UL 2218 Class 4 impact resistance certification</li>
                    <li>• Reinforced membrane construction</li>
                    <li>• Proven hail damage resistance</li>
                    <li>• Insurance premium discounts available</li>
                  </ul>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes TPO roofing ideal for Lubbock's climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO roofing is specifically engineered for challenging climates like Lubbock's. Its reflective white surface reduces cooling costs by up to 40% during hot South Plains summers, while its flexible membrane construction handles extreme temperature swings without cracking. The welded seams and impact-resistant formulation provide superior protection against Lubbock's frequent hailstorms and constant wind exposure. TPO's smooth surface also resists the dust accumulation common in the South Plains region.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much can I save on energy costs with TPO roofing in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Lubbock commercial properties typically see 30-40% reduction in cooling costs after TPO installation. With average commercial cooling costs of $2-4 per square foot annually in the South Plains, a 10,000 sq ft building could save $6,000-16,000 per year. TPO's Energy Star certification may also qualify your building for LP&L utility rebates and federal tax credits. Most Lubbock businesses achieve full ROI within 5-7 years through energy savings alone, making TPO an excellent long-term investment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does TPO perform in Lubbock's dust storms and high winds?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO excels in Lubbock's dusty, windy environment. The smooth, non-porous membrane surface prevents dust accumulation that can clog drains and create maintenance issues. Our TPO installations feature enhanced mechanical attachment systems rated for winds over 120 mph - well above Lubbock's code requirements. The flexible membrane material handles constant wind stress without fatigue, while proper drainage design ensures storm water flows efficiently even after dust storms. Regular maintenance is minimal compared to other roofing systems.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the installation timeline for TPO roofing on a Lubbock commercial building?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Lubbock TPO installations complete within 3-7 days, depending on building size and complexity. We schedule work to minimize disruption to your business operations and account for weather windows typical in the South Plains. The process includes one day for material delivery and staging, 1-2 days for tear-off (if required), 1-2 days for insulation and membrane installation, and final day for completion and cleanup. We coordinate closely with City of Lubbock inspection schedules to ensure smooth project completion.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with Texas Tech and other Lubbock institutions?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we have extensive experience working with educational institutions, including Texas Tech University, Lubbock ISD, and South Plains College. We understand the unique requirements for educational facilities, including noise restrictions, security protocols, and summer installation windows. Our team is familiar with state contracting procedures, prevailing wage requirements, and the specialized performance standards required for institutional buildings. We've successfully completed numerous projects throughout the Lubbock educational community.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranties do you offer for TPO roofing in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide comprehensive warranty coverage including manufacturer material warranties ranging from 15-30 years (depending on membrane specification) and our own 10-year workmanship warranty. Given Lubbock's severe weather exposure, we offer enhanced warranty terms that specifically cover hail damage, wind uplift, and performance in extreme conditions. All warranties are fully transferable and include detailed maintenance guidelines to ensure maximum system lifespan in South Plains conditions.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can you help with insurance claims for storm damage in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. We have extensive experience working with insurance companies on hail and wind damage claims throughout the South Plains. Our team provides detailed damage assessments, works directly with adjusters, and can provide emergency temporary repairs to prevent further damage. We understand the claims process for both local and national insurance carriers and maintain detailed documentation to support proper claim resolution. Our goal is to restore your property quickly while ensuring you receive fair compensation for storm damage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What maintenance does TPO require in Lubbock's environment?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO requires minimal maintenance in Lubbock's environment. We recommend bi-annual inspections (spring and fall) to check for any damage from severe weather and ensure drains remain clear after dust storms. The smooth membrane surface makes cleaning easy when needed. Key maintenance items include: checking seam integrity after severe weather, ensuring proper drainage, maintaining rooftop equipment supports, and addressing any punctures promptly. Most maintenance can be performed by building staff with our guidance, though professional inspections help ensure warranty compliance.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Lubbock Service Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Lubbock Metro</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Lubbock</li>
                  <li>• Texas Tech Campus</li>
                  <li>• Medical District</li>
                  <li>• West Lubbock</li>
                  <li>• Southwest Lubbock</li>
                  <li>• Tech Terrace</li>
                  <li>• Monterey</li>
                  <li>• Slide Road Corridor</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">South Plains Communities</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Wolfforth</li>
                  <li>• Shallowater</li>
                  <li>• Abernathy</li>
                  <li>• New Deal</li>
                  <li>• Idalou</li>
                  <li>• Slaton</li>
                  <li>• Ransom Canyon</li>
                  <li>• Buffalo Springs Lake</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Extended Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Levelland</li>
                  <li>• Littlefield</li>
                  <li>• Plainview</li>
                  <li>• Post</li>
                  <li>• Lamesa</li>
                  <li>• Brownfield</li>
                  <li>• Tahoka</li>
                  <li>• Ralls</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving the Hub City from Our Amarillo Office</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
            <div className="text-center mt-6">
              <p className="text-lg text-gray-700 mb-2">📍 2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-lg text-gray-700 mb-2">📞 (806) 622-6041 | ✉️ info@5starroofingpros.com</p>
              <p className="text-md text-gray-600">Proudly serving Lubbock and the entire South Plains region</p>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Lubbock Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Lubbock commercial property owners. Expert TPO roofing installation with comprehensive warranties, insurance assistance, and South Plains expertise you can trust.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}