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
  alternates: { canonical: 'https://5starroofingpros.com/hail-damage-repair-lubbock/' },
  title: 'Hail Damage Repair Lubbock TX | 5 Star Roofing',
  description: "Professional hail damage roof repair in Lubbock TX. Fast emergency response, insurance assistance, Class 4 shingles. Free inspections. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Lubbock", url: "/hail-damage-repair-lubbock/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-lubbock/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
        "url": "https://5starroofingpros.com/hail-damage-repair-lubbock/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Lubbock, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "name": "Lubbock",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Lubbock County, Texas"
              }
            },
            "description": "Expert hail damage roof repair services in Lubbock, TX. prompt response, insurance claim assistance, and Class 4 impact-resistant roof replacements for the Hub City."
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
                "name": "How do I know if my Lubbock roof has hail damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Signs of hail damage on Lubbock roofs include granule loss (shiny spots on shingles), dents on metal vents, flashing, and gutters, cracked or missing shingles, and bruised areas that feel soft. Lubbock's position on the Llano Estacado makes it prone to severe spring storms—schedule a free inspection after any hail event."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover hail damage repair in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas homeowners insurance policies cover hail damage if it occurred during your policy period and you file within your carrier's timeframe (typically 1-2 years). We document every impact with photos and measurements, meet adjusters on-site, and advocate for maximum coverage."
                }
              },
              {
                "@type": "Question",
                "name": "How much does hail damage repair cost in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail damage repair costs in Lubbock vary based on roof size, material, and damage extent. Most storm-related repairs are covered by insurance with homeowners paying only their deductible. Full roof replacements in Lubbock County typically range from $8,000-$15,000 for residential properties."
                }
              },
              {
                "@type": "Question",
                "name": "What are Class 4 impact-resistant shingles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 shingles are rated to withstand 2-inch diameter hail strikes under UL 2218 testing. For Lubbock homes facing frequent Tornado Alley storms, Class 4 shingles reduce future damage by up to 90%. Many Texas insurers offer 10-30% premium discounts for Class 4 roofs."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to hail damage in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer prompt response for Lubbock properties. Located just 124 miles from our Amarillo headquarters, our crews can typically reach Lubbock within 2 hours for urgent situations. After major storms, we prioritize emergency tarping to prevent water damage."
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
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-lubbock-45-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Lubbock, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                The Hub City's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Lubbock sits on the southwestern edge of Tornado Alley, making hail damage an annual reality for Hub City property owners. Since 2014, 5 Star Roofing has helped Lubbock homeowners and businesses recover from storm damage with expert repairs, insurance claim assistance, and Class 4 impact-resistant replacements designed for the Llano Estacado's severe weather.
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
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={124} suffix=" mi" />
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
              Why Lubbock Properties Need Expert Hail Damage Repair
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Lubbock, known as the "Hub City," sits at 3,202 feet elevation on the Llano Estacado—the southern end of the Great Plains. This geography places Lubbock directly in the path of severe thunderstorms that develop during spring and early summer. With a population of over 318,000, Lubbock County sees significant storm damage claims every year, particularly during the March-June hail season.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The city's position on the southwestern edge of Tornado Alley means severe weather is a regular occurrence. Supercell thunderstorms that form over the Caprock often produce large hail—sometimes exceeding golf ball size—along with damaging straight-line winds. These storms can cause widespread roof damage in minutes, affecting neighborhoods from the Texas Tech campus to the newer developments in South Lubbock.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Lubbock and the South Plains since 2014. We understand the specific roofing challenges that come with the region's semi-arid climate and severe weather patterns. Our team has helped hundreds of Lubbock property owners—including many Texas Tech rental properties—recover from storm damage with expert repairs and comprehensive warranty protection.
            </p>
          </section>
        </FadeIn>

        {/* Lubbock Weather Data Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Lubbock Weather: Understanding Your Roof's Risks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">Tornado Alley</div>
                <div className="font-semibold text-gray-700">Storm Zone</div>
                <p className="text-sm text-gray-500 mt-2">SW edge of severe corridor</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3,202 ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">Intense UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12+ mph</div>
                <div className="font-semibold text-gray-700">Avg Wind Speed</div>
                <p className="text-sm text-gray-500 mt-2">Constant wind stress</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Mar-Jun</div>
                <div className="font-semibold text-gray-700">Peak Hail Season</div>
                <p className="text-sm text-gray-500 mt-2">Highest storm frequency</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The National Weather Service Lubbock office monitors severe weather across the South Plains region. Lubbock's climate is classified as semi-arid, with hot summers and mild winters. The city averages about 18 inches of precipitation annually, but when storms do hit, they're often severe. Spring supercells can produce hail ranging from pea-size to larger than softballs, causing significant damage to roofs, vehicles, and outdoor equipment.
            </p>
          </section>
        </FadeIn>

        {/* Our Process Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Our Lubbock Hail Damage Repair Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">We thoroughly inspect your Lubbock property for hail damage, documenting every impact with photos and measurements. Our inspections are always free with no obligation.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claim</h3>
                <p className="text-gray-600">We prepare comprehensive documentation for your claim and meet with your adjuster on-site. We know what Lubbock-area insurance adjusters look for and how to maximize your coverage.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Estimate</h3>
                <p className="text-gray-600">We provide a detailed, line-item estimate using Xactimate—the same software insurance companies use. No surprises, no hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Repair</h3>
                <p className="text-gray-600">Our experienced crews install your new roof using premium materials suited to Lubbock's climate. Most residential repairs complete in 1-3 days.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Final Inspection</h3>
                <p className="text-gray-600">We conduct a thorough final inspection to ensure every detail meets our high standards. You'll receive complete documentation for your records.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Warranty Protection</h3>
                <p className="text-gray-600">Your Lubbock roof is protected by comprehensive workmanship warranties plus manufacturer warranties up to 50 years on qualifying materials.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Class 4 Shingles Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Class 4 Impact-Resistant Shingles: Essential for Lubbock
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Given Lubbock's position in Tornado Alley and its history of severe hailstorms, Class 4 impact-resistant shingles are an excellent investment for Hub City homeowners. These premium shingles are tested to withstand 2-inch diameter steel ball impacts under UL 2218 standards—providing superior protection against the large hail common in South Plains storms.
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
              The insurance premium savings from Class 4 shingles often pay for the upgrade within a few years. For Lubbock properties—especially those near Texas Tech where rental property damage is common—it's one of the smartest investments you can make.
            </p>
          </section>
        </FadeIn>

        {/* Lubbock Neighborhoods Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Serving All Lubbock Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From historic neighborhoods near downtown to the growing communities in South and Southwest Lubbock, we provide hail damage repair services throughout Lubbock County and beyond:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "Tech Terrace", "Overton", "Maxey Park", "Preston Smith",
                "South Lubbock", "Southwest Lubbock", "Uplands", "Wheelock",
                "Rush", "Melonie Park", "Bean", "Mackenzie Park",
                "North Overton", "Arnett Benson", "Caprock", "Wolfforth"
              ].map((neighborhood) => (
                <div key={neighborhood} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium">
                  {neighborhood}
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              We also serve surrounding Lubbock County communities including Wolfforth, Shallowater, Idalou, and Slaton. Call (806) 622-6041 to confirm service availability for your area.
            </p>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Lubbock Hail Damage Repair: Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do I know if my Lubbock roof has hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Signs of hail damage include: granule loss (look for dark, shiny spots on shingles), dents on metal vents and flashing, cracked or fractured shingles, dented gutters and downspouts, and damage to outdoor AC units or vehicles. Lubbock's severe spring storms can cause damage that isn't visible from the ground—we recommend a professional inspection after any significant hail event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will my insurance cover hail damage repair in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Texas homeowners policies cover hail damage. Key requirements: the damage must have occurred during your policy period, and you typically need to file within 1-2 years of the event. We document every impact with high-resolution photos, meet with your adjuster on-site, and advocate for full coverage. Most Lubbock homeowners pay only their deductible for storm-related repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does hail damage repair cost in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Costs vary based on roof size, pitch, materials, and damage extent. For insurance claims, most homeowners pay only their deductible. Full roof replacements in Lubbock typically range from $8,000-$15,000 for average-sized homes, though costs can be higher for larger or more complex roofs. We provide detailed estimates using Xactimate—the same software insurance companies use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do Texas Tech rental properties need special roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Rental properties near Texas Tech face the same hail risks as other Lubbock homes, but may experience more frequent claims due to tenant turnover and delayed damage reporting. We work with many Lubbock landlords and property managers to provide efficient, quality repairs that protect their investment. Class 4 shingles are particularly valuable for rental properties due to their durability and insurance savings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to hail damage in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We offer prompt response for Lubbock properties. Our Amarillo headquarters is just 124 miles away, and we can typically reach Lubbock within 2 hours for emergencies. After major storms, we prioritize emergency tarping to prevent water damage before permanent repairs begin. For non-emergencies, we typically schedule inspections within 24-48 hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        {/* Related Services */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Related Services in Lubbock
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-lubbock/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-lubbock/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-lubbock/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        
        <InternalLinks currentCity="lubbock" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Lubbock? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Lubbock property owners. Expert hail damage repair with comprehensive warranties. Insurance claim assistance from start to finish.
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
