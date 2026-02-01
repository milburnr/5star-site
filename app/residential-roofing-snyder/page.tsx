import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Expert Residential Roofing Snyder TX | Rolling Plains Specialists | Oil Field Housing | 5 Star',
  description: "Premier residential roofing services in Snyder TX and Scurry County. Rolling Plains weather specialists, oil industry housing experts, Western Texas College area services. Licensed, bonded, insured. Free estimates, comprehensive warranties, insurance claims assistance.",
};

export default function ResidentialRoofingSnyderPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Snyder", url: "/residential-roofing-snyder/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Snyder TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Snyder?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Snyder typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/ResidentialServices.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Snyder</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing throughout Snyder. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Snyder's Premier Residential Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional residential roofing throughout Snyder and Scurry County, serving West Central Texas with expertise in rolling plains weather patterns. Located between the Panhandle and Hill Country, Snyder presents unique roofing challenges from diverse terrain, oil field operations, and the transition zone between different Texas climate regions.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Snyder's 10,800 residents with expert installations designed for the Rolling Plains environment. Our team understands the specific needs of this historic oil and agricultural community, from established neighborhoods to modern developments supporting the energy sector.</p>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Snyder Housing Market Analysis</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Snyder's housing market reflects its dual identity as an oil industry center and agricultural hub. The median home value is approximately $105,000, with a diverse housing stock ranging from historic downtown properties built during early oil booms to modern subdivisions serving today's energy workers and farming families.</p>
              
              <p className="text-gray-700 leading-relaxed mb-4">The housing inventory includes significant numbers of homes built during the 1970s-1980s oil boom periods, many now requiring comprehensive roof replacement. The Western Texas College area features student housing and faculty residences, while newer developments along Highway 350 showcase modern construction adapted to rolling plains conditions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Snyder Community Profile</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Population: ~10,800 residents</li>
                  <li>• Median home value: $105,000</li>
                  <li>• Oil industry workforce: 30%</li>
                  <li>• Agricultural sector: 20%</li>
                  <li>• Western Texas College impact: 15%</li>
                  <li>• Average home age: 39 years</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-brand-brown mb-3">Rolling Plains Climate</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Elevation: 2,310 feet</li>
                  <li>• Semi-arid climate conditions</li>
                  <li>• Temperature extremes: 5°F to 105°F</li>
                  <li>• Variable precipitation: 18-24 inches</li>
                  <li>• Spring severe weather season</li>
                  <li>• High UV exposure year-round</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Rolling Plains Roofing Solutions</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Traditional Home Roofing</h3>
                <p className="text-gray-700 mb-4">Complete roofing services for Snyder's established neighborhoods and family homes throughout the rolling plains region.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Asphalt shingle installations</li>
                  <li>• Metal roofing for longevity</li>
                  <li>• Energy-efficient systems</li>
                  <li>• Historic home specialization</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🛢️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Oil Industry Housing</h3>
                <p className="text-gray-700 mb-4">Specialized services for energy sector workers and properties supporting Scurry County's ongoing oil production operations.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Worker housing developments</li>
                  <li>• Executive home installations</li>
                  <li>• Industrial environment protection</li>
                  <li>• Rapid project completion</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">College Community Roofing</h3>
                <p className="text-gray-700 mb-4">Comprehensive services for Western Texas College area properties including faculty housing and student residences.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Faculty and staff housing</li>
                  <li>• Student housing properties</li>
                  <li>• Academic calendar coordination</li>
                  <li>• Educational facility experience</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">West Central Texas Roofing Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Rolling Plains Terrain</h4>
                  <p className="text-gray-700 mb-4">The rolling hills and varied elevation create unique wind patterns and micro-climates that affect roofing performance. Our installations account for these local terrain influences on weather exposure.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Oil Field Environment</h4>
                  <p className="text-gray-700">Active oil production creates environmental factors including increased dust, potential chemical exposure, and infrastructure vibrations that influence residential roofing material selection and installation methods.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Climate Transition Zone</h4>
                  <p className="text-gray-700 mb-4">Snyder sits between High Plains and Hill Country weather patterns, experiencing varied precipitation, temperature extremes, and seasonal weather variability requiring adaptable roofing solutions.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Economic Fluctuations</h4>
                  <p className="text-gray-700">Oil market cycles influence local economic conditions and housing maintenance patterns. We offer flexible solutions aligned with community economic realities and seasonal work patterns.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Snyder Residents Choose 5 Star Roofing</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">West Central Texas Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Rolling Plains Knowledge</h4>
                      <p className="text-gray-700">Deep understanding of rolling plains weather patterns, terrain effects, and the unique climate challenges of West Central Texas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Oil Industry Experience</h4>
                      <p className="text-gray-700">Extensive experience with energy sector housing needs and understanding of oil field environmental factors affecting residential properties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-brown mb-1">Community Commitment</h4>
                      <p className="text-gray-700">Long-term commitment to the Snyder community with flexible financing options and understanding of local economic cycles and seasonal patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Scurry County Service Area</h3>
                <p className="text-gray-700 mb-4">Complete residential roofing services throughout Scurry County and surrounding West Central Texas communities:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Snyder historic district</li>
                  <li>• Western Texas College area</li>
                  <li>• Oil field worker housing developments</li>
                  <li>• Rural properties throughout Scurry County</li>
                  <li>• Hermleigh, Ira, and Fluvanna areas</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-brand-brown font-semibold">Flexible scheduling for oil field workers and agricultural operations. Academic calendar coordination for college community properties.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Snyder typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are Class 4 shingles?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does roof replacement take?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Snyder property owners. Expert residential roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}