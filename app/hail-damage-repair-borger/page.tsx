import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Borger TX | 5 Star Roofing',
  description: "Professional hail damage roof repair in Borger TX. Fast emergency response, insurance assistance, quality materials. Serving Hutchinson County. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairBorgerPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Borger", url: "/hail-damage-repair-borger/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.6678, "longitude": -101.3974 },
        "url": "https://5starroofingpros.com/hail-damage-repair-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Borger, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      {/* Schema: Service */}
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
              "url": "https://5starroofingpros.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amarillo",
                "addressRegion": "TX",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Borger",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Hutchinson County, Texas"
              }
            },
            "description": "Expert hail damage roof repair services in Borger, TX. 24/7 emergency response, insurance claim assistance, and Class 4 impact-resistant roof replacements for Hutchinson County properties."
          })
        }}
      />

      {/* Schema: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if my Borger roof has hail damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Signs of hail damage on Borger roofs include granule loss (shiny spots on shingles), dents on metal vents, flashing, and gutters, cracked or missing shingles, and bruised areas that feel soft. Hutchinson County's position in the Texas Panhandle means severe storms are common—schedule a free inspection after any hail event."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover hail damage repair in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas homeowners insurance policies cover hail damage if it occurred during your policy period and you file within 1-2 years. We document every impact with photos and measurements, meet adjusters on-site, and advocate for maximum coverage."
                }
              },
              {
                "@type": "Question",
                "name": "How much does hail damage repair cost in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail damage repair costs in Borger vary based on roof size, material, and damage extent. Most storm-related repairs are covered by insurance with homeowners paying only their deductible. Full roof replacements in Hutchinson County typically range from $7,000-$14,000 for residential properties."
                }
              },
              {
                "@type": "Question",
                "name": "What are Class 4 impact-resistant shingles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 shingles are rated to withstand 2-inch diameter hail strikes under UL 2218 testing. For Borger homes facing frequent Panhandle storms, Class 4 shingles reduce future damage by up to 90% and often qualify for 10-30% insurance premium discounts."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to hail damage in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 24/7 emergency response for Borger properties. Located just 47 miles from our Amarillo headquarters, we can typically reach Borger within 1 hour for emergencies. After major storms, we prioritize emergency tarping to prevent water damage."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/hail-damage-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Borger, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Hutchinson County's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Borger's industrial heart beats with petrochemical production—and those facilities and the homes that surround them all need protection from Texas Panhandle hailstorms. Since 2014, 5 Star Roofing has helped Borger homeowners and businesses recover from storm damage with expert repairs, insurance claim assistance, and Class 4 impact-resistant replacements.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={47} suffix=" mi" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">From Amarillo HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={10} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        {/* Main Content Section */}
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why Borger Properties Need Expert Hail Damage Repair
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Borger, the largest city in Hutchinson County, sits at 3,097 feet elevation in the heart of the Texas Panhandle. With a population of around 12,500, this industrial city is home to some of the world's largest inland petrochemical complexes, including Phillips 66, Chevron-Phillips Chemical, and Solvay. Both the industrial facilities and the residential neighborhoods that support them face the same roofing challenge: severe Panhandle hailstorms.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Texas Panhandle experiences 8-12 significant hail events annually, with storms capable of producing hail larger than golf balls. Borger's proximity to the Canadian River valley can intensify storm systems as they move through the region. These same weather patterns that once earned Borger the nickname "Smokey City" from its carbon black plants now test roofing systems across the community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Borger and Hutchinson County since 2014. Located just 47 miles from our Amarillo headquarters, we can reach Borger quickly for emergencies and provide the same expert service we're known for throughout West Texas. Whether you're protecting a family home, a rental property, or a commercial building, we have the experience and materials to restore your roof properly.
            </p>
          </section>
        </FadeIn>

        {/* Borger Weather Data Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Hutchinson County Weather: Understanding Your Roof's Risks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8-12</div>
                <div className="font-semibold text-gray-700">Hail Events/Year</div>
                <p className="text-sm text-gray-500 mt-2">Panhandle average</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3,097 ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">Increased UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">47 mi</div>
                <div className="font-semibold text-gray-700">From Amarillo</div>
                <p className="text-sm text-gray-500 mt-2">~1 hour response</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Mar-Jun</div>
                <div className="font-semibold text-gray-700">Peak Hail Season</div>
                <p className="text-sm text-gray-500 mt-2">Highest storm frequency</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Borger's location in Hutchinson County places it in one of Texas's most hail-prone regions. The flat terrain of the Panhandle allows storms to build intensity as they approach from the west and southwest. Canadian River valley weather patterns can create localized severe weather that affects Borger while missing nearby communities. This unpredictability makes regular roof inspections and storm-ready materials essential for Borger property owners.
            </p>
          </section>
        </FadeIn>

        {/* Our Process Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Our Borger Hail Damage Repair Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">We thoroughly inspect your Borger property for hail damage, documenting every impact with photos and measurements. Our inspections are always free with no obligation.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claim</h3>
                <p className="text-gray-600">We prepare comprehensive documentation for your claim and meet with your adjuster on-site. We know what insurance adjusters look for and how to maximize your coverage.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Estimate</h3>
                <p className="text-gray-600">We provide a detailed, line-item estimate using Xactimate—the same software insurance companies use. No surprises, no hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Repair</h3>
                <p className="text-gray-600">Our experienced crews install your new roof using premium materials suited to Borger's climate. Most residential repairs complete in 1-3 days.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Final Inspection</h3>
                <p className="text-gray-600">We conduct a thorough final inspection to ensure every detail meets our high standards. You'll receive complete documentation for your records.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Warranty Protection</h3>
                <p className="text-gray-600">Your Borger roof is protected by comprehensive workmanship warranties plus manufacturer warranties up to 50 years on qualifying materials.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Class 4 Shingles Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Class 4 Impact-Resistant Shingles: Ideal for Borger
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              For Borger properties facing the realities of Panhandle weather, Class 4 impact-resistant shingles are an excellent investment. These premium shingles are tested to withstand 2-inch diameter steel ball impacts under UL 2218 standards—providing superior protection against the severe hail common in Hutchinson County storms.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="font-semibold">Damage Reduction</div>
                <p className="text-sm opacity-80 mt-2">vs. standard shingles</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">10-30%</div>
                <div className="font-semibold">Insurance Discount</div>
                <p className="text-sm opacity-80 mt-2">Many Texas carriers</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">50 yr</div>
                <div className="font-semibold">Warranty Available</div>
                <p className="text-sm opacity-80 mt-2">Manufacturer backed</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              Given Borger's hail frequency, the insurance premium savings from Class 4 shingles often pay for the upgrade within just a few years. For a community that knows the value of industrial-strength solutions, Class 4 roofing makes practical sense.
            </p>
          </section>
        </FadeIn>

        {/* Borger Areas Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Serving All of Borger & Hutchinson County
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From downtown Borger's historic brick streets to the residential neighborhoods surrounding the petrochemical facilities, we provide hail damage repair services throughout Hutchinson County:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "Downtown Borger", "Bunavista", "East Borger", "North Borger",
                "South Borger", "West Borger", "Phillips", "Stinnett",
                "Fritch", "Sanford", "Spring Creek", "Plemons"
              ].map((area) => (
                <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium">
                  {area}
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              We serve the entire Hutchinson County area and can reach most Borger locations within about an hour from our Amarillo headquarters. Call (806) 622-6041 to confirm service availability for your area.
            </p>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Borger Hail Damage Repair: Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do I know if my Borger roof has hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Signs of hail damage include: granule loss (dark, shiny spots on shingles), dents on metal vents and flashing, cracked or fractured shingles, dented gutters and downspouts, and damage to outdoor AC units or vehicles. Borger's Panhandle location means severe storms can cause damage that isn't visible from the ground—we recommend a professional inspection after any significant hail event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will my insurance cover hail damage repair in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Texas homeowners policies cover hail damage. Key requirements: the damage must have occurred during your policy period, and you typically need to file within 1-2 years of the event. We document every impact with high-resolution photos, meet with your adjuster on-site, and advocate for full coverage. Most Borger homeowners pay only their deductible for storm-related repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does hail damage repair cost in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Costs vary based on roof size, pitch, materials, and damage extent. For insurance claims, most homeowners pay only their deductible. Full roof replacements in Borger typically range from $7,000-$14,000 for average-sized homes, though costs can be higher for larger or more complex roofs. We provide detailed estimates using Xactimate—the same software insurance companies use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work with industrial and commercial properties in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we serve both residential and commercial properties throughout Borger and Hutchinson County. While petrochemical facilities typically have their own specialized roofing contractors, we work with many of the offices, warehouses, retail buildings, and support facilities in the area. We also serve the rental properties that house workers for the area's industrial employers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to hail damage in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We offer 24/7 emergency response for Borger properties. Our Amarillo headquarters is just 47 miles away, and we can typically reach Borger within about an hour for emergencies. After major storms, we prioritize emergency tarping to prevent water damage before permanent repairs begin. For non-emergencies, we typically schedule inspections within 24-48 hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        {/* Related Services */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Related Services in Borger
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-borger/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-borger/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-borger/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        
        <InternalLinks currentCity="borger" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Borger? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Borger property owners. Expert hail damage repair with comprehensive warranties. Insurance claim assistance from start to finish.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
