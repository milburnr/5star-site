import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing Dumas TX | 5 Star Roofing',
  description: "Professional residential roofing in Dumas TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingDumasPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Dumas", url: "/residential-roofing-dumas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Dumas TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Dumas typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/ResidentialServices.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Dumas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing throughout Dumas. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Dumas's Premier Residential Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional residential roofing throughout Dumas and Moore County. We understand Texas Panhandle weather challenges and install roofing systems engineered for extreme conditions including hail storms, high winds, and dramatic temperature swings that characterize the High Plains climate.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Dumas homeowners with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Our team understands the unique roofing needs of Dumas's diverse housing stock, from historic homes in the original townsite to modern developments in expanding neighborhoods.</p>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Dumas Housing Market</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Dumas, the county seat of Moore County, serves as a vital agricultural and industrial hub in the Texas Panhandle. With a population of approximately 14,500 residents, the city features a diverse housing landscape that reflects its rich history and ongoing economic growth. The median home value in Dumas is approximately $120,000, making it an affordable market compared to Texas averages.</p>
              
              <p className="text-gray-700 leading-relaxed mb-4">The housing stock in Dumas includes a significant number of homes built between 1950-1980, many requiring roof replacements as they reach the 25-30 year mark. Newer subdivisions like those near Dumas High School and along Highway 287 feature modern construction with updated roofing systems, while historic neighborhoods downtown showcase classic architecture dating to the early 1900s.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Local Housing Statistics</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Median home age: 42 years</li>
                  <li>• Average roof replacement cycle: 25-30 years</li>
                  <li>• Most common roof material: Asphalt shingles</li>
                  <li>• Hail damage claims: 15-20% annually</li>
                  <li>• Wind damage incidents: High frequency</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Climate Considerations</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average annual hail events: 4-6</li>
                  <li>• Peak wind speeds: 70+ mph</li>
                  <li>• Temperature range: -10°F to 105°F</li>
                  <li>• UV exposure: High (elevation 3,668 ft)</li>
                  <li>• Freeze-thaw cycles: 40+ annually</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Comprehensive Residential Roofing Services</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">New Roof Installation</h3>
                <p className="text-gray-700 mb-4">Complete roof replacement for Dumas homes using premium materials designed for Texas Panhandle conditions.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact-resistant shingles</li>
                  <li>• Advanced underlayment systems</li>
                  <li>• Energy-efficient materials</li>
                  <li>• 50-year warranty options</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Storm Damage Repair</h3>
                <p className="text-gray-700 mb-4">Expert restoration services for hail, wind, and severe weather damage common in Moore County.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 emergency response</li>
                  <li>• Insurance claim assistance</li>
                  <li>• Temporary protection services</li>
                  <li>• Complete documentation</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Roof Inspections</h3>
                <p className="text-gray-700 mb-4">Thorough evaluations to identify potential issues before they become costly problems.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comprehensive condition reports</li>
                  <li>• Storm damage assessment</li>
                  <li>• Maintenance recommendations</li>
                  <li>• Insurance documentation</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Dumas-Specific Roofing Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">High Plains Weather</h4>
                  <p className="text-gray-700 mb-4">Dumas sits at 3,668 feet elevation on the High Plains, experiencing extreme temperature variations and frequent severe weather. Our roofing systems are specifically engineered to handle these conditions.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Agricultural Environment</h4>
                  <p className="text-gray-700">The surrounding agricultural operations create unique environmental factors including increased dust exposure and seasonal debris that require specialized roofing considerations.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Economic Factors</h4>
                  <p className="text-gray-700 mb-4">Dumas's economy, centered on agriculture and manufacturing, influences housing patterns and maintenance cycles. We work with homeowners to provide cost-effective solutions that protect their investment.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Historic Preservation</h4>
                  <p className="text-gray-700">Many of Dumas's historic homes require specialized roofing approaches that maintain architectural integrity while providing modern protection.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Dumas Homeowners Choose 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Local Expertise & Understanding</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Moore County Knowledge</h4>
                      <p className="text-gray-700">Deep understanding of local building codes, weather patterns, and architectural styles unique to Dumas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Insurance Expertise</h4>
                      <p className="text-gray-700">Extensive experience with Texas insurance claims and adjuster relationships throughout the Panhandle region.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Quality Materials</h4>
                      <p className="text-gray-700">Premium roofing materials specifically selected for High Plains conditions and extreme weather resistance.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Service Area Coverage</h3>
                <p className="text-gray-700 mb-4">Complete residential roofing services throughout Moore County and surrounding areas:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Dumas historic district</li>
                  <li>• Residential areas near Dumas High School</li>
                  <li>• Highway 287 corridor developments</li>
                  <li>• Rural properties throughout Moore County</li>
                  <li>• Sunray, Cactus, and surrounding communities</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-brand-brown font-semibold">Free estimates and inspections available throughout our service area. Emergency services available 24/7 for storm damage.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions About Dumas Roofing</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Dumas typically costs $8,000-$25,000, depending on home size and material selection. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500). The median home in Dumas (1,400-1,800 sq ft) averages $12,000-$16,000 for complete replacement with Class 4 impact-resistant shingles.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are Class 4 shingles and why are they important in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 shingles pass UL 2218 impact testing—the highest rating available. They withstand 2-inch hail impacts and qualify for 10-30% insurance discounts in Texas. Given Dumas's location in "Hail Alley" with 4-6 hail events annually, Class 4 shingles provide essential protection and significant long-term savings for homeowners.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does roof replacement take in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days. Weather delays are common in the Panhandle, so we plan accordingly and communicate any schedule adjustments immediately.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When is the best time to replace a roof in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Late spring through early fall offers the best weather windows for roofing projects. However, we provide year-round service including emergency repairs. Winter installations are possible during mild periods, though scheduling flexibility is important due to weather variability in the Texas Panhandle.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle insurance claims for Dumas homeowners?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide complete insurance assistance including damage documentation, adjuster meetings, and claim advocacy. Our team has extensive experience with major insurers serving the Panhandle region and understands local claim processes. We help maximize your settlement while ensuring quality repairs.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Dumas's climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Impact-resistant asphalt shingles perform exceptionally well in Dumas's climate, handling hail, wind, and temperature extremes. Metal roofing is also excellent for energy efficiency and longevity. We avoid materials that don't handle freeze-thaw cycles well and recommend UV-resistant options for the high elevation and intense sun exposure.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Dumas home has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Common signs include granule loss on shingles, dented gutters or air conditioning units, cracked or missing shingles, and exposed nail heads. Given Dumas's frequent hail activity, we recommend professional inspections after any significant storm. Our free inspections can identify damage that might not be visible from the ground.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranties do you provide for Dumas installations?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We offer comprehensive warranty packages including manufacturer materials warranties (25-50 years) and our workmanship guarantee (10 years minimum). For Class 4 installations, many manufacturers provide enhanced warranties. All warranty terms are clearly documented and we maintain detailed records for the life of your roof.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Emergency Roofing Services in Dumas</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">24/7 Storm Response</h3>
                <p className="text-gray-700 mb-6">When severe weather strikes Dumas and Moore County, our emergency response team is ready to protect your home and family. We understand that roofing emergencies don't wait for business hours, especially during the active storm season in the Texas Panhandle.</p>
                
                <div className="bg-red-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-brand-brown mb-2">⚠️ When to Call for Emergency Service:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Visible roof damage after hail or wind storms</li>
                    <li>• Water leaks or interior damage</li>
                    <li>• Missing or severely damaged shingles</li>
                    <li>• Structural damage to roof components</li>
                    <li>• Fallen trees or debris on roof</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Temporary Protection Services</h3>
                <p className="text-gray-700 mb-6">Our emergency response includes temporary protection measures to prevent further damage while permanent repairs are arranged. This service is often covered by insurance and can save thousands in additional damage.</p>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-brown mb-2">🛡️ Temporary Protection Includes:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Tarping and weatherproofing</li>
                    <li>• Board-up services for severe damage</li>
                    <li>• Water extraction and drying</li>
                    <li>• Debris removal and cleanup</li>
                    <li>• Damage documentation for insurance</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl inline-block">
                <h3 className="text-2xl font-bold mb-2">Emergency Hotline</h3>
                <p className="text-xl mb-3">Available 24/7 for Storm Damage</p>
                <a href="tel:8066226041" className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                  📞 Call (806) 622-6041 NOW
                </a>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Dumas property owners. Expert residential roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}