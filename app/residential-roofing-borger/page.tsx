import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-borger/' },
  title: 'Residential Roofing Borger TX | 5 Star Roofing',
  description: "Professional residential roofing in Borger TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingBorgerPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Borger", url: "/residential-roofing-borger/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Borger TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Borger",
            "description": "Professional residential roofing services in Borger, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Borger",
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
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Borger?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Borger typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Borger</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Northern Panhandle Roofing Excellence</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing serving Borger and Hutchinson County. Expert protection for industrial families with comprehensive warranties, , and specialized knowledge of northern Texas Panhandle weather challenges.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Borger's Industrial Community Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Borger stands as Hutchinson County's industrial powerhouse, home to petrochemical facilities and energy workers who depend on reliable residential protection. Our roofing services understand the unique needs of this hardworking community in the northern Texas Panhandle.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Located just 40 miles northeast of Amarillo, Borger faces the full force of northern plains weather systems. From violent spring tornadoes to devastating hailstorms and arctic winter blasts, Borger homes require roofing systems engineered for extremes. The proximity to Canadian River bottoms creates unique microclimate challenges that demand local expertise.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've protected Borger families through every weather challenge the northern Panhandle can deliver. Our team understands shift work schedules, industrial housing needs, and the rapid response requirements when severe weather threatens this vital Texas community.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-gray-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Northern Panhandle Weather Extremes</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Tornado Alley Position</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Borger sits directly in Tornado Alley's most active zone, where the collision of dry continental air from Canada meets warm, moist air from the Gulf of Mexico. This creates the perfect storm conditions that have historically produced devastating tornadoes in Hutchinson County.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">The April 2015 tornado outbreak that impacted the northern Panhandle reminded Borger residents of nature's power. Our roofing systems are designed to withstand extreme wind events and provide rapid recovery options when the unthinkable occurs.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Peak tornado season: April through June</li>
                  <li>• F2-F4 tornadoes recorded within 25 miles</li>
                  <li>• Straight-line wind events exceeding 100 mph</li>
                  <li>• Multiple severe weather warnings per season</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Extreme Hail Exposure</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Borger's position in the heart of "Hail Alley" means regular encounters with devastating hailstorms. The combination of strong upper-level winds and surface heating creates supercells capable of producing softball-sized hail that can completely destroy standard roofing materials.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">Historical records show Borger experiences significant hail damage every 3-5 years, with smaller events occurring annually. Class 4 impact-resistant materials are not just recommended but essential for long-term property protection in this environment.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Average hail events: 8-12 per year</li>
                  <li>• Largest recorded hail: 4.25 inches (softball)</li>
                  <li>• Significant damage events: every 3-5 years</li>
                  <li>• Peak hail months: May and June</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Arctic Winter Conditions</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Borger's northern latitude and open geography expose it to severe arctic outbreaks that can drive temperatures below zero and bring heavy snow loads. The February 2021 winter storm that crippled Texas infrastructure hit Borger particularly hard.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">These extreme cold events create ice dams, thermal shock stress, and snow loading that challenges roofing systems. Our installations account for thermal movement and include enhanced ice protection for northern Panhandle conditions.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Winter lows: -10°F to -20°F possible</li>
                  <li>• Snow loads: up to 20 pounds per square foot</li>
                  <li>• Ice storm frequency: 2-3 per winter</li>
                  <li>• Freeze/thaw cycles: 50-75 per season</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Environment Impact</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Borger's petrochemical industry creates unique atmospheric conditions that can accelerate roofing material degradation. Chemical emissions, particulate matter, and industrial humidity affect material selection and maintenance requirements.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">We specify materials with enhanced chemical resistance and install protective coatings that resist industrial pollutants while maintaining superior weather protection. Regular maintenance protocols account for industrial exposure effects.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Enhanced chemical resistance required</li>
                  <li>• Accelerated UV degradation in industrial zones</li>
                  <li>• Particulate accumulation management</li>
                  <li>• Specialized ventilation requirements</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Industrial Community-Focused Services</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Shift Worker Accommodation</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Borger's petrochemical workforce operates around the clock, and we understand the challenges of coordinating roofing work with shift schedules. Our flexible scheduling accommodates plant workers, contractors, and their families.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Flexible inspection scheduling</li>
                  <li>• Weekend and evening consultations</li>
                  <li>• Coordination with turnaround schedules</li>
                  <li>• Extended project communication for traveling workers</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Corporate Housing Programs</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Many Borger residents work for major corporations that provide housing assistance or require specific maintenance standards. We work directly with corporate property management and employee housing programs.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Corporate insurance billing</li>
                  <li>• Fleet maintenance programs</li>
                  <li>• Bulk pricing for employee housing</li>
                  <li>• Corporate warranty transfer programs</li>
                  <li>• Property management coordination</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">storm response Network</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Borger's location in severe weather territory requires robust storm response capabilities. our network includes dedicated crews, material stockpiles, and rapid deployment protocols.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pre-positioned materials</li>
                  <li>• Storm tracking and early warning</li>
                  <li>• Community-wide damage assessment</li>
                  <li>• Mass casualty roofing event protocols</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Borger-Specific Installation Expertise</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Hutchinson County Code Compliance</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Borger operates under enhanced building codes that reflect the area's severe weather exposure. Hutchinson County has adopted specific wind load requirements and impact resistance standards following historical storm damage.</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">Our team maintains current certification with local building officials and understands the permit process specific to Borger and unincorporated Hutchinson County areas. We ensure all installations exceed minimum code requirements.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Enhanced wind load calculations (110 mph basic)</li>
                    <li>• Mandatory impact resistance in new construction</li>
                    <li>• Strict installation fastening schedules</li>
                    <li>• Required ventilation standards for energy efficiency</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Canadian River Valley Microclimate</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Borger's proximity to the Canadian River creates unique microclimate conditions with increased humidity, fog events, and temperature inversions that affect roofing material performance and ventilation requirements.</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">We adjust installation techniques and material selection to account for these local conditions, ensuring optimal performance in Borger's specific environmental profile.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Enhanced moisture barriers for humidity control</li>
                    <li>• Improved ventilation systems for fog-prone areas</li>
                    <li>• Anti-condensation measures for temperature inversions</li>
                    <li>• Drainage system optimization for river valley topology</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Northern Panhandle Material Selection</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Class 4 Impact Systems</h3>
                  <p className="text-gray-700 mb-3">Essential protection for Borger's extreme hail exposure. These premium shingles withstand direct impacts from 2-inch hail while maintaining structural integrity and weather seal.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Impact Rating:</div>
                      <div>UL 2218 Class 4</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Insurance Discount:</div>
                      <div>Up to 35% in Borger</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Granule Technology:</div>
                      <div>Advanced polymer matrix</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Wind Resistance:</div>
                      <div>130+ MPH warranty</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Enhanced Wind Resistance</h3>
                  <p className="text-gray-700 mb-3">Borger's exposure to tornado activity and severe thunderstorms requires maximum wind resistance. Our systems exceed standard installation requirements for extreme weather protection.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Fastening:</div>
                      <div>6-nail minimum pattern</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Deck Attachment:</div>
                      <div>8d ring shank nails</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Perimeter Sealing:</div>
                      <div>Enhanced edge protection</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Uplift Rating:</div>
                      <div>150+ MPH tested</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Metal Roofing for Industrial Areas</h3>
                  <p className="text-gray-700 mb-3">Standing seam metal systems provide superior chemical resistance and longevity in Borger's industrial environment while offering excellent hail and wind protection.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Material:</div>
                      <div>26-gauge galvalume</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Chemical Resistance:</div>
                      <div>Kynar coating system</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Lifespan:</div>
                      <div>50+ years in industrial environment</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Energy Efficiency:</div>
                      <div>Cool roof certified</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Arctic-Grade Insulation</h3>
                  <p className="text-gray-700 mb-3">Borger's extreme winter conditions require enhanced insulation systems that maintain performance through severe thermal cycles and heavy snow loading.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">R-Value:</div>
                      <div>R-38 to R-49 recommended</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Moisture Control:</div>
                      <div>Vapor barrier systems</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Ice Protection:</div>
                      <div>Enhanced underlayment</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Ventilation:</div>
                      <div>Continuous ridge/soffit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance & prompt services for Borger</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Severe Weather Claims Expertise</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Borger's location in Tornado Alley means frequent severe weather claims. Our team has extensive experience with catastrophic damage events and works directly with adjusters familiar with northern Panhandle weather patterns.</p>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Catastrophic storm damage documentation and restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>tarping and temporary protection services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Direct billing with major insurance carriers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Supplement negotiation for complete restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Code upgrade coverage maximization</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Workforce Financing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">We understand the financial patterns of industrial workers and offer flexible payment solutions that work with shift schedules, bonus periods, and corporate housing assistance programs.</p>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Turnaround bonus payment timing coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Corporate assistance program integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Extended payment terms for major projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Same-as-cash options for qualified applicants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Union member and veteran discounts</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Borger storm response Statistics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">90min</div>
                    <div className="text-sm opacity-90">average storm response time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">storm season availability</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">82%</div>
                    <div className="text-sm opacity-90">of Borger projects are storm claims</div>
                  </div>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Borger?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Borger typically costs $10,000-$30,000 depending on size, materials, and weather resistance requirements. However, approximately 82% of Borger projects result from storm damage covered by insurance, meaning homeowners pay only their deductible ($1,000-$2,500). Premium materials like Class 4 shingles may have higher initial costs but provide substantial insurance savings and better protection.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Why are Class 4 shingles essential for Borger homes?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Borger sits directly in Tornado Alley's most active hail zone, with significant hail events occurring every 3-5 years and smaller events annually. Class 4 shingles meet UL 2218 impact resistance standards, withstanding 2-inch steel ball impacts without damage. Given Borger's extreme hail exposure, Class 4 materials are essential protection. Texas insurance companies offer premium discounts up to 35% for Class 4 installations in high-risk areas like Borger.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does roof replacement take in Borger?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Borger homes complete roof replacement in 2-4 days, with weather being the primary variable. Single-story homes under 2,000 sq ft typically finish in 2-3 days, while larger or complex roofs require 3-4 days. Borger's volatile spring weather can cause delays, so we monitor conditions closely and maintain flexible scheduling. During severe weather season, urgent projects receive priority scheduling to restore protection quickly.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle Hutchinson County permits and industrial area requirements?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we handle all Hutchinson County permitting and understand Borger's enhanced building code requirements. Permits typically cost $100-300 depending on project scope and location. Borger has adopted stricter wind load requirements (110 mph basic wind speed) following historical storm damage. Industrial areas may have additional requirements for chemical resistance and emissions compliance. We coordinate all permits, inspections, and regulatory requirements.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does Borger's industrial environment affect roofing materials?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Borger's petrochemical industry creates unique atmospheric conditions including chemical emissions, particulate matter, and industrial humidity that can accelerate normal material degradation. We specify enhanced chemical-resistant coatings, improved ventilation systems, and materials designed for industrial exposure. Regular maintenance is also critical to prevent particulate buildup and ensure optimal performance in this challenging environment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide prompt services during severe weather events?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Borger's location in Tornado Alley requires robust storm response capabilities. We provide  with typically 90-minute response times during severe weather events. Our prompt services include immediate tarping, water damage mitigation, structural stabilization, and priority scheduling for permanent repairs. We maintain pre-positioned materials and dedicated our crews during storm season to ensure rapid response when Borger families need protection most.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-2">Serving Borger from our Amarillo headquarters</p>
              <p className="text-gray-600">2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-gray-600">Just 40 miles southwest of Borger via US-287 South</p>
            </div>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Borger homeowners. Expert residential roofing with comprehensive warranties, storm response, and deep understanding of northern Panhandle weather extremes.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}