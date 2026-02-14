import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-andrews/' },
  title: 'Residential Roofing Andrews TX | 5 Star Roofing',
  description: "Professional residential roofing in Andrews TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingAndrewsPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Andrews", url: "/residential-roofing-andrews/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Andrews TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Andrews",
            "description": "Professional residential roofing services in Andrews, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Andrews",
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
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Andrews?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Andrews typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Andrews</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for West Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing throughout Andrews and Andrews County. Expert installation, comprehensive warranties, and . Specializing in oil industry worker homes and West Texas weather protection.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Andrews's Premier Residential Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Andrews, Texas sits in the heart of the Permian Basin oil region, where hardworking families deserve reliable roofing protection from West Texas weather extremes. Our residential roofing services protect Andrews homes from intense summer heat, sudden thunderstorms, hail, and the sandstorms that sweep across Andrews County's plains.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've been the trusted roofing partner for Andrews families, oil industry workers, and retirees who call this West Texas community home. We understand the unique challenges facing Andrews homeowners – from the extreme temperature swings that cause thermal expansion stress to the sudden severe weather that can roll in from the Llano Estacado.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Located just 30 miles northwest of Midland and serving as Andrews County's seat, Andrews experiences the full force of West Texas weather. Our team specializes in roofing solutions that withstand winds exceeding 70 mph, golf ball-sized hail, and temperature variations that can swing 40 degrees in a single day during spring months.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Andrews Weather Challenges & Roofing Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">West Texas Hail Season Protection</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Andrews sits directly in the heart of "Hail Alley," where spring and early summer storms regularly produce damaging hail. Between March and June, Andrews County experiences some of Texas's most severe hailstorms, with stones frequently reaching golf ball to tennis ball size.</p>
                <p className="text-gray-600 leading-relaxed">Our Class 4 impact-resistant shingles are specifically engineered for Andrews weather patterns. These premium materials can withstand direct impacts from 2-inch hail while maintaining their protective seal and structural integrity. Texas insurance companies offer substantial premium discounts for Class 4 installations – often 10-30% annually.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">High Wind Resistance Systems</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Andrews experiences frequent high winds, especially during spring storm seasons and dry frontal passages. Sustained winds often exceed 40 mph, with gusts reaching 70+ mph during severe thunderstorms and occasional tornado activity in the broader region.</p>
                <p className="text-gray-600 leading-relaxed">We install enhanced wind-resistant systems including upgraded fastening schedules, sealed deck systems, and high-wind rated materials. Our installations exceed Texas building codes and provide superior uplift resistance for Andrews's challenging wind environment.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Extreme Heat & UV Protection</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">West Texas summers are relentless, with Andrews regularly experiencing 100+ consecutive days above 95°F and peak temperatures exceeding 110°F. The intense UV radiation at Andrews's 3,100-foot elevation accelerates normal roofing material degradation.</p>
                <p className="text-gray-600 leading-relaxed">Our reflective roofing systems and premium materials are specifically selected for extreme heat performance. Energy-efficient options can reduce attic temperatures by 20-30°F, significantly lowering cooling costs during Andrews's brutal summer months while extending roof life.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Dust Storm & Abrasion Resistance</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Andrews County's position on the edge of the Llano Estacado means frequent dust storms and sandstorms, particularly during dry spring months and drought periods. Airborne particles can gradually abrade roofing materials and clog ventilation systems.</p>
                <p className="text-gray-600 leading-relaxed">We install enhanced protective coatings and sealed ventilation systems that resist sand infiltration while maintaining proper attic airflow. Our maintenance programs include regular cleaning and inspection services tailored for Andrews's dusty environment.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Comprehensive Residential Roofing Services for Andrews</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Complete Roof Replacement</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Full roof replacement services for Andrews homes using premium materials engineered for West Texas conditions. We handle everything from permits to cleanup, ensuring your project meets all Andrews County building requirements.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Architectural shingle systems</li>
                  <li>• Class 4 impact-resistant options</li>
                  <li>• Metal roofing installations</li>
                  <li>• Energy-efficient solutions</li>
                  <li>• Complete tear-off and disposal</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Storm Damage Restoration</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Emergency repairs and insurance claim assistance for Andrews storm damage. Our team responds quickly to protect your home from further damage while documenting everything needed for successful insurance claims.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• prompt response</li>
                  <li>• Temporary protection services</li>
                  <li>• Insurance claim documentation</li>
                  <li>• Direct insurance billing</li>
                  <li>• Complete damage assessment</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Preventive Maintenance</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Regular maintenance programs designed for Andrews's harsh climate. Preventive care extends roof life significantly and helps identify potential problems before they become costly repairs.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Annual inspection services</li>
                  <li>• Gutter cleaning and maintenance</li>
                  <li>• Ventilation system optimization</li>
                  <li>• Minor repair services</li>
                  <li>• Seasonal preparation checks</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Andrews Community Focus</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Oil Industry Worker Housing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Andrews serves as home base for thousands of Permian Basin oil workers and their families. We understand the unique needs of oil industry households – from accommodating shift schedules for inspections to providing rapid emergency repairs when workers are away on rotation.</p>
                  <p className="text-gray-600 leading-relaxed">Our flexible scheduling and emergency response services ensure Andrews oil families never lose protection, regardless of work schedules. We coordinate with both homeowners and property management companies serving temporary housing needs.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Growing Family Community</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Andrews has experienced significant residential growth as oil industry prosperity draws young families to the area. New subdivisions and established neighborhoods throughout Andrews County rely on our expertise for both new construction and renovation projects.</p>
                  <p className="text-gray-600 leading-relaxed">From starter homes near Andrews High School to executive properties in established neighborhoods, we provide appropriate roofing solutions that match each family's budget and protection needs while meeting Andrews's building standards.</p>
                </div>
              </div>
              <div className="mt-8 bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown text-center">Local Andrews Advantages</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">🏠</div>
                    <h4 className="font-bold text-brand-brown mb-2">Local Knowledge</h4>
                    <p className="text-gray-600 text-sm">Deep understanding of Andrews County building codes, permitting processes, and neighborhood-specific roofing challenges.</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-bold text-brand-brown mb-2">Rapid Response</h4>
                    <p className="text-gray-600 text-sm">Emergency response times under 2 hours for Andrews storm damage, with availability during severe weather events.</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🤝</div>
                    <h4 className="font-bold text-brand-brown mb-2">Community Investment</h4>
                    <p className="text-gray-600 text-sm">Active support of Andrews schools, sports programs, and community events. Your neighbors recommend us because we're neighbors too.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Premium Materials for Andrews Climate</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">GAF Timberline HDZ</h3>
                  <p className="text-gray-700 mb-3">North America's #1 selling shingle, engineered specifically for areas like Andrews with extreme weather exposure. Features LayerLock technology for superior wind resistance.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 130 MPH wind warranty</li>
                    <li>• Class A fire rating</li>
                    <li>• Lifetime limited warranty</li>
                    <li>• Algae protection</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Class 4 Impact Resistant</h3>
                  <p className="text-gray-700 mb-3">Premium hail-resistant shingles that pass UL 2218 Class 4 testing – essential for Andrews's location in West Texas hail country.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Insurance discounts up to 30%</li>
                    <li>• Superior granule retention</li>
                    <li>• Enhanced impact protection</li>
                    <li>• Extended warranty coverage</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Metal Roofing Systems</h3>
                  <p className="text-gray-700 mb-3">Standing seam and panel systems ideal for Andrews's wind exposure and temperature extremes. Superior longevity and energy efficiency.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 50+ year lifespan</li>
                    <li>• Superior wind resistance</li>
                    <li>• Energy-efficient coatings</li>
                    <li>• Low maintenance requirements</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Enhanced Ventilation</h3>
                  <p className="text-gray-700 mb-3">Critical for Andrews homes facing extreme summer heat. Proper ventilation reduces energy costs and extends shingle life significantly.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Ridge vent systems</li>
                    <li>• Soffit ventilation</li>
                    <li>• Attic temperature control</li>
                    <li>• Energy cost reduction</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance Claims & Financing Solutions</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insurance Claim Assistance</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Andrews homeowners frequently deal with storm damage claims due to West Texas weather extremes. Our experienced team guides you through every step of the insurance process, from initial documentation to final settlement.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Direct insurance company communication</li>
                    <li>• Detailed damage documentation</li>
                    <li>• Supplement negotiation</li>
                    <li>• Claim settlement assistance</li>
                    <li>• Depreciation recovery help</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Flexible Financing Options</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">We understand that not every roofing need in Andrews comes from insurance claims. Our financing solutions make it possible to protect your home with premium roofing systems while managing your budget effectively.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Low monthly payment plans</li>
                    <li>• Zero down payment options</li>
                    <li>• Competitive interest rates</li>
                    <li>• Quick approval process</li>
                    <li>• Same-as-cash terms available</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Most Andrews Projects Are Insurance Claims</h3>
                <p className="text-lg mb-4">Due to frequent hail and wind damage, approximately 85% of our Andrews roofing projects are covered by homeowners insurance. Typical out-of-pocket costs are just your deductible amount.</p>
                <p className="text-base opacity-90">We handle all insurance paperwork and communication, making the process stress-free for Andrews homeowners.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Andrews typically costs $8,000-$25,000 depending on size, materials, and complexity. However, most Andrews projects are insurance claims due to storm damage, meaning homeowners pay only their deductible ($1,000-$2,500). Insurance covers the full replacement cost for covered storm damage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are Class 4 shingles and why are they important for Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 shingles pass UL 2218 impact testing—the highest hail rating available. They withstand 2-inch diameter steel balls dropped from 20 feet without cracking. For Andrews homes in West Texas "hail alley," Class 4 shingles are essential protection. Texas insurance companies offer 10-30% premium discounts for Class 4 installations, often saving $200-500 annually.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does roof replacement take in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Andrews homes complete roof replacement in 1-3 days. Single-story homes under 2,000 sq ft typically finish in 1-2 days, while larger or more complex roofs require 2-3 days. Weather delays can extend timelines, but we work efficiently to restore protection quickly. Our Andrews-based crews minimize travel time and maximize productivity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle Andrews County building permits?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we handle all Andrews County permitting requirements. Roof replacement permits in Andrews typically cost $50-150 and require approved contractor licensing, proper insurance documentation, and compliance with current building codes. We submit all paperwork, coordinate inspections, and ensure your project meets Andrews County standards throughout the process.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes Andrews weather particularly challenging for roofs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Andrews sits in the heart of West Texas "hail alley" with frequent severe thunderstorms March through June. The area experiences extreme temperature swings (40+ degrees in a day), sustained winds over 40 mph, regular dust storms, and over 100 days annually above 95°F. This combination creates exceptional stress on roofing materials, requiring premium systems and professional installation to ensure long-term performance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you offer emergency services for Andrews storm damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide prompt response for Andrews storm damage. Our emergency team typically arrives within 2 hours for urgent situations like major leaks or structural damage. We immediately secure your home with temporary protection (tarps, boarding) while documenting damage for insurance claims. Emergency services include water damage mitigation, temporary repairs, and priority scheduling for permanent restoration.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-2">Serving Andrews from our Amarillo headquarters</p>
              <p className="text-gray-600">2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-gray-600">Just 2 hours from Andrews via US-385 North</p>
            </div>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Andrews property owners. Expert residential roofing with comprehensive warranties, insurance assistance, and understanding of West Texas challenges.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}