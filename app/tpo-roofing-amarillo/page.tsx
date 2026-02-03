import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "TPO Roofing Amarillo TX | Expert Service | Free Inspection",
  description: "Professional tpo roofing in Amarillo TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "TPO Roofing", url: "/tpo-roofing/" },
        { name: "Amarillo", url: "/tpo-roofing-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo TPO Roofing",
        "image": "https://5starroofingpros.com/images/TPO1.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/tpo-roofing-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional tpo roofing in Amarillo TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Membrane Roofing Installation",
            "name": "TPO Roofing in Amarillo",
            "description": "Professional tpo roofing services in Amarillo, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Amarillo",
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
        "mainEntity": [{"@type":"Question","name":"What is TPO roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO (Thermoplastic Polyolefin) is a single-ply white membrane for flat/low-slope roofs. Energy Star rated, heat-welded seams, 15-25 year warranties."}},{"@type":"Question","name":"How much does TPO roofing cost in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"TPO installation in Amarillo costs $4-$8 per square foot including materials and labor. Excellent value for energy efficiency and durability."}},{"@type":"Question","name":"Why choose TPO over other commercial roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO reflects heat (lower cooling costs), resists hail/wind damage, heat-welded seams are watertight, and offers excellent cost-to-performance ratio."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/TPO1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">TPO Roofing in <span className="text-brand-gold-light">Amarillo</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Commercial Flat Roofing for Texas Panhandle</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional TPO roofing throughout Amarillo and the Texas Panhandle. Expert installation designed for extreme Texas weather, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Amarillo's Premier TPO Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional TPO roofing throughout Amarillo and the greater Texas Panhandle region. As the Panhandle's commercial roofing experts, we understand the unique weather challenges facing Amarillo businesses - from severe hailstorms and high winds to extreme temperature fluctuations and intense summer heat.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Amarillo's diverse commercial landscape with expert TPO installations, comprehensive warranties, and outstanding customer service. Our local team understands Amarillo's building codes, permitting requirements, and insurance protocols. We handle all permits, insurance claims, and warranty documentation while providing the highest quality commercial roofing solutions.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌪️ Built for Texas Weather</h3>
                <p className="text-gray-700 leading-relaxed">Amarillo faces some of Texas's most extreme weather conditions. Our TPO roofing systems are specifically designed to withstand Panhandle hailstorms, tornado-force winds, and the dramatic temperature swings that can stress roofing materials. Every installation includes enhanced wind resistance features and impact-resistant membranes.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏢 Commercial Expertise</h3>
                <p className="text-gray-700 leading-relaxed">From Amarillo's medical district to the growing retail centers along I-40, we've protected every type of commercial building. Our team specializes in warehouses, manufacturing facilities, retail centers, office buildings, and municipal structures throughout the Amarillo metropolitan area.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Why TPO Roofing is Perfect for Amarillo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">☀️ Energy Efficiency</h3>
                <p className="text-gray-700 mb-4">Amarillo's intense summer heat drives cooling costs through the roof. TPO's bright white surface reflects up to 85% of UV rays, significantly reducing heat absorption and lowering your energy bills by up to 30% during peak summer months.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Energy Star certified membranes</li>
                  <li>• Reduces cooling load by up to 30%</li>
                  <li>• Cool Roof Rating Council approved</li>
                  <li>• Potential utility rebates available</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🧊 Hail Resistance</h3>
                <p className="text-gray-700 mb-4">Amarillo's location in Hail Alley demands superior impact resistance. Our TPO systems include reinforced membranes designed to withstand Class 4 hail impacts, protecting your investment from the Panhandle's notorious spring storms.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Class 4 hail impact rating</li>
                  <li>• UL 2218 impact resistance certified</li>
                  <li>• Insurance premium discounts available</li>
                  <li>• Proven performance in severe weather</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">💨 Wind Performance</h3>
                <p className="text-gray-700 mb-4">Texas Panhandle winds demand superior attachment. Our TPO installations feature mechanically attached or fully adhered systems rated for winds up to 120 mph, exceeding Amarillo's building code requirements and providing peace of mind during severe weather events.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Wind uplift ratings to 120+ mph</li>
                  <li>• Factory Mutual approved systems</li>
                  <li>• Enhanced perimeter attachment</li>
                  <li>• Meets/exceeds local wind codes</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Amarillo Commercial Roofing Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Industries We Serve</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏭 Manufacturing & Industrial</h4>
                    <p className="text-gray-700">Serving Amarillo's manufacturing corridor with durable TPO systems designed for heavy industrial use, chemical resistance, and equipment loads.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🛒 Retail & Commercial</h4>
                    <p className="text-gray-700">From strip malls to big-box stores along I-40 and Bell Street, our TPO roofing provides long-lasting protection for retail properties.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏥 Healthcare Facilities</h4>
                    <p className="text-gray-700">Protecting Amarillo's medical district with quiet, durable roofing solutions that meet healthcare facility requirements.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏢 Office Buildings</h4>
                    <p className="text-gray-700">Energy-efficient TPO roofing for Amarillo's growing business district, reducing operational costs and environmental impact.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Building Types</h3>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Warehouses and distribution centers</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Manufacturing facilities</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Shopping centers and retail stores</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Office buildings and corporate headquarters</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Medical facilities and clinics</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Educational institutions</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Government and municipal buildings</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Recreational facilities</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Multi-tenant commercial buildings</li>
                    <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span>Auto dealerships and service centers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Our Complete TPO Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">1</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Comprehensive Inspection</h3>
                <p className="text-gray-700">Thorough assessment of your existing roof structure, including moisture detection, structural evaluation, and measurement for accurate material calculations.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">2</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Design & Engineering</h3>
                <p className="text-gray-700">Custom roofing system design including wind uplift calculations, drainage planning, and specification of appropriate TPO membrane thickness and attachment methods.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">3</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Permits & Approvals</h3>
                <p className="text-gray-700">We handle all City of Amarillo permitting requirements, ensuring compliance with local building codes and coordinating inspections throughout the project.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">4</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Material Delivery</h3>
                <p className="text-gray-700">High-quality TPO membranes, insulation, and accessories delivered directly to your site with proper staging to minimize disruption to your business operations.</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">5</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Professional Installation</h3>
                <p className="text-gray-700">Expert installation by certified technicians using proper heat-welding techniques, mechanical attachment systems, and quality control procedures throughout the process.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">6</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Final Inspection & Warranty</h3>
                <p className="text-gray-700">Comprehensive final inspection, cleanup, and delivery of all warranty documentation including manufacturer warranties and our workmanship guarantee.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What is TPO roofing and why is it popular in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO (Thermoplastic Polyolefin) is a single-ply white membrane roofing system designed for flat and low-slope commercial roofs. It's extremely popular in Amarillo because its reflective white surface significantly reduces cooling costs during our hot summers, while its flexibility and durability handle our extreme temperature swings and severe weather conditions. TPO is Energy Star rated with heat-welded seams that create watertight protection and comes with 15-25 year manufacturer warranties.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does TPO roofing cost in Amarillo?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO roofing installation in Amarillo typically costs between $4-$8 per square foot including materials and labor. The final cost depends on factors like roof size, complexity, insulation requirements, and current roof condition. Despite being competitively priced, TPO offers excellent value through energy savings (up to 30% reduction in cooling costs), minimal maintenance requirements, and long service life. Many Amarillo businesses see ROI within 5-7 years through energy savings alone.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does TPO roofing perform in Amarillo's hailstorms?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO roofing performs exceptionally well in Amarillo's hail-prone environment. Our TPO systems include reinforced membranes that meet UL 2218 Class 4 impact resistance standards, meaning they can withstand hailstones up to 2 inches in diameter without damage. The flexible nature of TPO allows it to absorb impact energy rather than cracking like rigid roofing materials. Many insurance companies offer premium discounts for Class 4 rated roofing systems in hail-prone areas like Amarillo.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the difference between mechanically attached and fully adhered TPO?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Mechanically attached TPO uses screws and plates through the membrane into the deck, offering excellent wind resistance and easier repairs. Fully adhered TPO is bonded directly to the substrate with adhesive, providing superior wind uplift resistance and a cleaner appearance. In Amarillo's high-wind environment, we often recommend mechanically attached systems for their proven performance in extreme weather conditions, though both methods exceed local building code requirements when properly installed.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does TPO roofing last in Texas weather?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Quality TPO roofing systems typically last 20-30 years in Texas conditions when properly installed and maintained. The key factors affecting lifespan include membrane quality, installation workmanship, and regular maintenance. TPO's resistance to UV radiation, ozone, and chemical exposure makes it particularly well-suited for Texas's intense sun and variable weather. Regular inspections and minor maintenance can help achieve maximum service life.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle insurance claims for storm damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we have extensive experience working with insurance companies on storm damage claims in the Amarillo area. Our team provides detailed damage assessments, works directly with adjusters, and can provide emergency temporary repairs to prevent further damage. We understand local insurance requirements and can help navigate the claims process to ensure proper restoration of your commercial roof. Our documentation and reporting meet insurance industry standards.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What maintenance does TPO roofing require?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO roofing requires minimal maintenance compared to other commercial roofing systems. We recommend bi-annual inspections (spring and fall), keeping drains clear of debris, and addressing any punctures or seam issues promptly. The smooth surface makes cleaning easy, and the welded seams typically require no maintenance. Regular maintenance includes checking for loose or damaged membrane, ensuring proper drainage, and maintaining rooftop equipment supports.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can TPO be installed over existing roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In many cases, TPO can be installed over existing roofing systems, which can reduce project costs and minimize business disruption. However, this depends on the condition of the existing roof, local building codes, and structural capacity. We perform thorough evaluations to determine if a recover installation is appropriate, considering factors like moisture content, structural integrity, and compliance with Amarillo building requirements. Complete tear-off may be necessary in cases of significant damage or multiple existing roof layers.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Areas We Serve Around Amarillo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Amarillo Metro</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Amarillo</li>
                  <li>• Medical District</li>
                  <li>• West Amarillo</li>
                  <li>• Southeast Amarillo</li>
                  <li>• I-40 Corridor</li>
                  <li>• Bell Street Commercial</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Surrounding Communities</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Canyon</li>
                  <li>• Claude</li>
                  <li>• Panhandle</li>
                  <li>• White Deer</li>
                  <li>• Wildorado</li>
                  <li>• Washburn</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Extended Service Area</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hereford</li>
                  <li>• Dumas</li>
                  <li>• Pampa</li>
                  <li>• Borger</li>
                  <li>• Childress</li>
                  <li>• Wellington</li>
                </ul>
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
            <div className="text-center mt-6">
              <p className="text-lg text-gray-700 mb-2">📍 2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-lg text-gray-700">📞 (806) 622-6041 | ✉️ info@5starroofingpros.com</p>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Amarillo Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Amarillo commercial property owners. Expert TPO roofing installation with comprehensive warranties, insurance assistance, and local expertise you can trust.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}