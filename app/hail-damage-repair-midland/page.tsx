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
  title: 'Hail Damage Repair Midland TX | 5 Star Roofing',
  description: "Professional hail damage roof repair in Midland TX. Emergency response, insurance assistance, Class 4 impact-resistant shingles. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Midland", url: "/hail-damage-repair-midland/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-midland/#localbusiness",
        "name": "5 Star Commercial Roofing - Midland Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.9973, "longitude": -102.0779 },
        "url": "https://5starroofingpros.com/hail-damage-repair-midland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Midland,_Texas", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Midland, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "name": "Midland",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Midland County, Texas"
              }
            },
            "description": "Expert hail damage roof repair services in Midland, TX. 24/7 emergency response, insurance claim assistance, and Class 4 impact-resistant roof replacements for Midland County properties."
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
                "name": "How do I know if my Midland roof has hail damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Signs of hail damage on Midland roofs include granule loss (shiny spots on shingles), dents on metal vents, flashing, and gutters, cracked or missing shingles, and bruised areas that feel soft when pressed. Midland's position in the Permian Basin means we see frequent severe storms—schedule a free inspection after any hail event."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover hail damage repair in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas homeowners insurance policies cover hail damage if it occurred during your policy period and you file within your carrier's timeframe (typically 1-2 years). We document every impact with photos and measurements, meet adjusters on-site, and advocate for maximum coverage on your behalf."
                }
              },
              {
                "@type": "Question",
                "name": "How much does hail damage repair cost in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail damage repair costs in Midland vary based on roof size, material, and damage extent. Most storm-related repairs are covered by insurance, with homeowners typically paying only their deductible. Full roof replacements in Midland County average $8,000-$15,000 for residential properties, though insurance often covers most or all of this cost."
                }
              },
              {
                "@type": "Question",
                "name": "What are Class 4 impact-resistant shingles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 shingles are rated to withstand 2-inch diameter hail strikes under UL 2218 testing standards. For Midland properties facing frequent Permian Basin storms, Class 4 shingles reduce future hail damage by up to 90%. Many Texas insurers offer 10-30% premium discounts for Class 4 roofs, often paying for the upgrade over time."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to hail damage in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 24/7 emergency response for Midland properties. Our crews can typically reach Midland from our Amarillo headquarters within 3-4 hours for urgent situations. After major storms, we prioritize emergency tarping to prevent further water damage before permanent repairs."
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
                Hail Damage Repair in <span className="text-brand-gold-light">Midland, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Midland County's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                When Permian Basin storms strike your Midland property, you need a roofing contractor who understands West Texas weather. Since 2014, 5 Star Roofing has helped Midland homeowners and businesses recover from hail damage with expert repairs, insurance claim assistance, and Class 4 impact-resistant replacements.
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
                  <AnimatedCounter to={263} suffix=" mi" />
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
              Why Midland Properties Need Expert Hail Damage Repair
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Midland sits at 2,780 feet elevation in the heart of the Permian Basin, where severe thunderstorms sweep across the West Texas plains with little warning. Midland County experiences an average of 6-8 significant hail events annually, with some storms producing hail exceeding 2 inches in diameter—large enough to cause immediate, catastrophic roof damage.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The combination of Midland's semi-arid climate, extreme temperature swings (from below freezing in winter to over 100°F in summer), and frequent severe weather creates unique challenges for roofing systems. After a hailstorm, damage may not be immediately visible to the untrained eye—but granule loss, micro-fractures, and compromised seals can lead to leaks, mold, and structural damage if left unaddressed.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Midland and the Permian Basin since 2014. We understand the specific roofing challenges that come with West Texas weather, and we know how to document damage for insurance claims effectively. Our team has helped hundreds of Midland property owners recover from storm damage with expert repairs and comprehensive warranty protection.
            </p>
          </section>
        </FadeIn>

        {/* Midland Weather Data Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Midland County Weather: Why Your Roof Is At Risk
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">6-8</div>
                <div className="font-semibold text-gray-700">Hail Events/Year</div>
                <p className="text-sm text-gray-500 mt-2">Midland County average</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2,780 ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">Increased UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12-14 mph</div>
                <div className="font-semibold text-gray-700">Avg Wind Speed</div>
                <p className="text-sm text-gray-500 mt-2">Year-round wind stress</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">80°F+</div>
                <div className="font-semibold text-gray-700">Temp Range</div>
                <p className="text-sm text-gray-500 mt-2">Extreme thermal cycling</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The National Weather Service Midland office tracks severe weather events across the Permian Basin. Midland's location makes it particularly susceptible to supercell thunderstorms that develop over the Llano Estacado. These storms frequently produce damaging hail, high winds, and occasionally tornadoes. After major hail events, we see a surge in roof damage claims across Midland, Odessa, and surrounding communities.
            </p>
          </section>
        </FadeIn>

        {/* Our Process Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Our Midland Hail Damage Repair Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">We thoroughly inspect your Midland property for hail damage, documenting every impact with photos and measurements. Our inspections are always free with no obligation.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claim</h3>
                <p className="text-gray-600">We prepare comprehensive documentation for your insurance claim and meet with your adjuster on-site. We know what Midland-area adjusters look for and how to maximize your coverage.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Estimate</h3>
                <p className="text-gray-600">We provide a detailed, line-item estimate using Xactimate—the same software insurance companies use. No surprises, no hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Repair</h3>
                <p className="text-gray-600">Our experienced crews install your new roof using premium materials suited to Midland's climate. Most residential repairs complete in 1-3 days.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Final Inspection</h3>
                <p className="text-gray-600">We conduct a thorough final inspection to ensure every detail meets our high standards. You'll receive complete documentation for your records.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Warranty Protection</h3>
                <p className="text-gray-600">Your Midland roof is protected by comprehensive workmanship warranties plus manufacturer warranties up to 50 years on qualifying materials.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Class 4 Shingles Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Class 4 Impact-Resistant Shingles: The Smart Choice for Midland
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              After experiencing hail damage, many Midland homeowners upgrade to Class 4 impact-resistant shingles. These premium shingles are tested to withstand 2-inch diameter steel ball impacts under UL 2218 standards—the same size as the largest hail commonly seen in Permian Basin storms.
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
              The insurance premium savings from Class 4 shingles often pay for the upgrade within just a few years. For Midland properties in hail-prone areas, it's one of the smartest investments you can make in your home.
            </p>
          </section>
        </FadeIn>

        {/* Midland Neighborhoods Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Serving All Midland Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From established neighborhoods near downtown to newer developments on the outskirts, we provide hail damage repair services throughout Midland County:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "Grassland Estates", "Saddle Club", "Fairmont Park", "Westridge Park",
                "Briarwood", "Windwood Park", "Camelot", "Brookshire Village",
                "Lincoln Park", "Lynside", "Chalmers", "Chandler Heights",
                "West End", "Midkiff", "Greenwood", "Cotton Flat"
              ].map((neighborhood) => (
                <div key={neighborhood} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium">
                  {neighborhood}
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              Don't see your neighborhood? We serve all of Midland County and surrounding areas including Greenwood, Stanton, and beyond. Call (806) 622-6041 to confirm service availability.
            </p>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Midland Hail Damage Repair: Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do I know if my Midland roof has hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Signs of hail damage include: granule loss (look for dark, shiny spots on shingles), dents on metal vents and flashing, cracked or fractured shingles, dented gutters and downspouts, and damage to outdoor AC units or vehicles. Midland's severe storms can cause damage that isn't visible from the ground—we recommend a professional inspection after any significant hail event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will my insurance cover hail damage repair in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Texas homeowners policies cover hail damage. Key requirements: the damage must have occurred during your policy period, and you typically need to file within 1-2 years of the event. We document every impact with high-resolution photos, meet with your adjuster on-site, and advocate for full coverage. Most Midland homeowners pay only their deductible for storm-related repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does hail damage repair cost in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Costs vary based on roof size, pitch, materials, and damage extent. For insurance claims, most homeowners pay only their deductible. Full roof replacements in Midland typically range from $8,000-$15,000 for average-sized homes, though costs can be higher for larger or more complex roofs. We provide detailed estimates using Xactimate—the same software insurance companies use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I upgrade to Class 4 shingles in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For Midland properties, Class 4 impact-resistant shingles are often worth the investment. They're rated to withstand 2-inch hail impacts and reduce future damage by up to 90%. Many Texas insurers offer 10-30% premium discounts for Class 4 roofs, which can offset the higher upfront cost within a few years. We can help you evaluate whether the upgrade makes sense for your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to hail damage in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We offer 24/7 emergency response for Midland properties. While our headquarters is in Amarillo (about 263 miles away), we maintain crews throughout West Texas and can typically reach Midland within 3-4 hours for emergencies. After major storms, we prioritize emergency tarping to prevent water damage before permanent repairs begin.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        {/* Related Services */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Related Services in Midland
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-midland/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-midland/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-midland/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        
        <InternalLinks currentCity="midland" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Midland? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Midland property owners. Expert hail damage repair with comprehensive warranties. Insurance claim assistance from start to finish.
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
