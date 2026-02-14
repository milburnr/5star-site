import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-canyon/' },
  title: 'Residential Roofing Canyon TX | 5 Star Roofing',
  description: "Professional residential roofing in Canyon TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingCanyonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Canyon", url: "/residential-roofing-canyon/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Canyon TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Canyon",
            "description": "Professional residential roofing services in Canyon, Texas. Expert installation, repair, and maintenance with prompt response.",
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
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Canyon?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Canyon typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Canyon</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">University Town Roofing Excellence</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing serving Canyon and Randall County. Expert protection for university families, faculty, and local residents with comprehensive warranties and  near West Texas A&M University.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Canyon's University Community Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Canyon, home to West Texas A&M University and gateway to Palo Duro Canyon, combines academic excellence with natural beauty in the heart of the Texas Panhandle. This vibrant university town requires roofing solutions that serve diverse housing needs, from faculty homes to student housing, all while withstanding the intense weather conditions characteristic of the Llano Estacado region.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Located just 15 miles south of Amarillo, Canyon experiences the full intensity of Panhandle weather while maintaining its own unique character as an educational and cultural hub. The proximity to Palo Duro Canyon creates interesting microclimates and wind patterns that affect local roofing performance, requiring specialized knowledge of the area's conditions.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've been the trusted roofing partner for Canyon's diverse community – from longtime residents in established neighborhoods to university faculty requiring reliable protection for their homes. Our team understands the seasonal patterns that affect Canyon, from spring severe weather to the extreme heat that radiates from the canyon walls during summer months.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Canyon's Unique Weather & Geographic Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Palo Duro Canyon Wind Effects</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Canyon's proximity to the second-largest canyon in the United States creates unique wind patterns and thermal effects that significantly impact local weather. The canyon acts as a natural wind tunnel and heat amplifier, creating microclimates that standard weather forecasts often miss.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">During spring storms, the canyon's topography can channel and intensify winds, creating localized areas where wind speeds exceed regional averages by 20-30 mph. Summer heat radiating from the canyon walls can push temperatures 5-10 degrees higher than surrounding areas.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Enhanced wind speeds during storm events</li>
                  <li>• Heat island effects from canyon thermal mass</li>
                  <li>• Unique downdraft patterns during thunderstorms</li>
                  <li>• Accelerated UV exposure from canyon reflection</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">University Weather Station Data</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">West Texas A&M University's weather monitoring station provides precise local climate data that reveals Canyon's specific weather patterns. This data shows significant variations from regional forecasts, particularly during severe weather events and extreme temperature periods.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">University research has documented how Canyon's geographic position creates "heat burst" events where overnight temperatures can spike dramatically, and how the canyon's orientation affects hail trajectories during supercell thunderstorms.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Documented heat burst phenomena</li>
                  <li>• Precise hail trajectory mapping</li>
                  <li>• Local temperature variation studies</li>
                  <li>• Wind pattern research data</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Severe Weather Concentration</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Canyon sits at a convergence zone where different air masses regularly collide, creating frequent severe thunderstorms from March through July. The area's elevation changes and canyon proximity often cause storms to intensify as they approach the city from the southwest.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">Historical data shows Canyon experiences above-average hail frequency and intensity, with the geographic features acting to focus and intensify storm energy. The "supercell highway" that runs through the Texas Panhandle frequently targets the Canyon area.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Above-average severe weather frequency</li>
                  <li>• Storm intensification due to topography</li>
                  <li>• Enhanced hail production zones</li>
                  <li>• Frequent tornado watch areas</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Academic Calendar Considerations</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Canyon's identity as a university town creates unique scheduling considerations for roofing projects. The academic calendar affects traffic patterns, noise restrictions, and material delivery logistics, especially in neighborhoods near campus during the active school year.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">We coordinate roofing projects with university schedules to minimize disruption during finals weeks, homecoming events, and other major campus activities. Summer break provides optimal timing for larger projects near campus areas.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Academic calendar project scheduling</li>
                  <li>• Campus area noise considerations</li>
                  <li>• Student housing coordination</li>
                  <li>• Faculty schedule accommodation</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">University Community-Focused Services</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Faculty & Staff Programs</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">West Texas A&M faculty and staff have unique needs including flexible scheduling for academic obligations, understanding of limited summer income periods, and coordination with university benefits programs. We provide specialized service packages for the academic community.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Academic schedule flexibility</li>
                  <li>• Summer payment deferral options</li>
                  <li>• University benefits coordination</li>
                  <li>• Educator discount programs</li>
                  <li>• Sabbatical year planning assistance</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Historic District Preservation</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Canyon's historic downtown and established neighborhoods near the square require specialized roofing approaches that preserve architectural character while providing modern protection. We work with historic preservation guidelines and neighborhood standards.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Historic preservation compliance</li>
                  <li>• Period-appropriate material selection</li>
                  <li>• Architectural review board coordination</li>
                  <li>• Heritage district requirements</li>
                  <li>• Downtown commercial integration</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Student & Young Family Housing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Canyon's growing population includes graduate students, young faculty, and families attracted by the university environment. These residents often need cost-effective roofing solutions with flexible financing that works with academic and early-career budgets.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Graduate student financing options</li>
                  <li>• Young family budget programs</li>
                  <li>• Rental property owner services</li>
                  <li>• First-time homeowner education</li>
                  <li>• Extended warranty programs</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-amber-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Local Canyon Expertise & Research Partnership</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">West Texas A&M Weather Research</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Our partnership with West Texas A&M University's atmospheric science program provides access to cutting-edge weather research and local climate data. This collaboration helps us understand and prepare for Canyon's specific weather patterns better than any other roofing company in the region.</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">University research has helped us identify optimal materials for Canyon's unique thermal cycling, wind load patterns, and hail trajectory data that enables better protection strategies for local homes.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Access to university weather station data</li>
                    <li>• Collaboration with atmospheric research</li>
                    <li>• Local climate pattern analysis</li>
                    <li>• Advanced weather prediction models</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Randall County Building Codes</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Canyon operates under both city and Randall County building requirements, with specific provisions for areas near the canyon and university zones. Our team maintains current knowledge of all local building standards and works directly with city planners and code officials.</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">We understand the permitting process for both residential areas and properties in transitional zones where city and county jurisdictions overlap, ensuring smooth approvals for all projects.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dual jurisdiction expertise (city/county)</li>
                    <li>• University zone special requirements</li>
                    <li>• Historic district code compliance</li>
                    <li>• Canyon area wind load calculations</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown text-center">Canyon Community Involvement</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">🏫</div>
                    <h4 className="font-bold text-brand-brown mb-2">University Partnerships</h4>
                    <p className="text-gray-600 text-sm">Active collaboration with WTAMU research programs and support for university community initiatives.</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🏛️</div>
                    <h4 className="font-bold text-brand-brown mb-2">Historic Preservation</h4>
                    <p className="text-gray-600 text-sm">Dedicated support for Canyon's historic downtown preservation and architectural heritage maintenance.</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎭</div>
                    <h4 className="font-bold text-brand-brown mb-2">Arts Community</h4>
                    <p className="text-gray-600 text-sm">Proud sponsors of Palo Duro Canyon outdoor musical productions and local cultural events.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Canyon Climate-Optimized Materials</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Enhanced Heat Resistance Systems</h3>
                  <p className="text-gray-700 mb-3">Canyon's position near Palo Duro Canyon creates amplified heat conditions where temperatures can exceed surrounding areas by 5-10 degrees. Our materials are specifically selected for extreme thermal performance.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Cool Roof Technology:</div>
                      <div>IR reflective granules</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Thermal Cycling:</div>
                      <div>Enhanced flexibility</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Energy Savings:</div>
                      <div>25-35% cooling reduction</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">UV Resistance:</div>
                      <div>Extended granule life</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">University Standard Compliance</h3>
                  <p className="text-gray-700 mb-3">Properties near campus often must meet enhanced aesthetic and performance standards. We provide roofing systems that complement the university environment while delivering superior protection.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Aesthetic Integration:</div>
                      <div>Campus-appropriate colors</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Noise Reduction:</div>
                      <div>Sound-dampening materials</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Low Maintenance:</div>
                      <div>Academic calendar friendly</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Longevity:</div>
                      <div>Extended warranty options</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Wind-Enhanced Protection</h3>
                  <p className="text-gray-700 mb-3">Canyon's unique topography creates wind amplification effects that require enhanced attachment systems and impact-resistant materials specifically engineered for local conditions.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Fastening System:</div>
                      <div>Canyon-specific pattern</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Wind Rating:</div>
                      <div>130+ MPH warranty</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Edge Protection:</div>
                      <div>Enhanced perimeter sealing</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Impact Resistance:</div>
                      <div>Class 4 hail protection</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Smart Ventilation Systems</h3>
                  <p className="text-gray-700 mb-3">Canyon's heat amplification from the canyon walls requires advanced ventilation systems to maintain comfortable temperatures and prevent ice dam formation during winter weather events.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Airflow Design:</div>
                      <div>Canyon-optimized patterns</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Temperature Control:</div>
                      <div>30°F+ reduction possible</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Moisture Management:</div>
                      <div>Humidity control systems</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Energy Integration:</div>
                      <div>HVAC efficiency boost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Academic Community Insurance & Financing</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">University Employee Benefits Integration</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Many Canyon residents are West Texas A&M employees with specific insurance carriers and benefits programs. We work directly with university-affiliated insurance providers and understand the unique claim processes for academic employees.</p>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>WTAMU employee insurance program expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>State employee benefits coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Faculty housing program integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Academic calendar payment scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Sabbatical year financial planning</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Student & Young Professional Financing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Canyon's university environment attracts graduate students, young faculty, and early-career professionals who need accessible financing options that work with academic timelines and variable income patterns.</p>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Graduate student financing programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Academic year payment plans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>First-time homeowner assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Educator and student discounts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Deferred payment options during summer</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Canyon Project Statistics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">72%</div>
                    <div className="text-sm opacity-90">of projects serve university community</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">$1,200</div>
                    <div className="text-sm opacity-90">average homeowner cost (after insurance)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">customer satisfaction rate</div>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Canyon typically costs $10,000-$26,000 depending on home size, materials, and proximity to the canyon (which may require enhanced wind protection). Most Canyon projects are insurance claims due to severe weather, meaning homeowners pay only their deductible ($1,000-$2,500). We offer special financing programs for university employees and young professionals.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does Canyon's proximity to Palo Duro Canyon affect roofing needs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Palo Duro Canyon creates unique microclimates that amplify heat and wind effects in Canyon. The canyon acts as a heat reservoir, pushing local temperatures 5-10 degrees higher than surrounding areas, and channels wind during storms. This requires enhanced thermal protection, superior ventilation systems, and reinforced wind resistance. We use specialized materials and installation techniques designed specifically for these canyon-influenced conditions.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work around West Texas A&M University's academic schedule?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we understand the academic community's unique needs and coordinate our services around university schedules. We provide flexible appointment times for faculty, avoid noisy work during finals weeks, and offer extended project timelines that work with academic calendars. Summer break provides optimal timing for larger projects near campus, and we offer payment plans that align with academic year income patterns.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle both city and county permits in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Canyon properties may fall under city or Randall County jurisdiction, and we handle permits for both. City permits typically cost $75-150, while county permits range $50-125. We understand the specific requirements for properties near the university, in historic districts, and in transitional zones. Our team coordinates all inspections and ensures compliance with local building codes and wind load requirements specific to the Canyon area.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Canyon's climate?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Canyon's amplified heat and enhanced wind exposure require premium materials. We recommend Class 4 impact-resistant shingles with enhanced thermal cycling properties, cool roof technology to combat canyon heat reflection, and superior ventilation systems. For properties with extreme canyon exposure, metal roofing provides excellent durability and energy efficiency. All installations include enhanced wind protection rated for Canyon's unique wind amplification effects.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you offer special programs for university employees?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we offer comprehensive programs for West Texas A&M faculty and staff including educator discounts, flexible scheduling for academic obligations, payment plans aligned with academic calendars, and coordination with university benefits programs. We understand state employee insurance carriers and can work directly with university-affiliated insurance providers. Special summer payment deferral options are available for faculty on nine-month contracts.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-2">Proudly serving Canyon from our nearby Amarillo headquarters</p>
              <p className="text-gray-600">2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-gray-600">Just 15 miles north of Canyon via I-27 North</p>
            </div>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Canyon homeowners and university community members. Expert residential roofing with comprehensive warranties and deep understanding of local canyon climate effects.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}