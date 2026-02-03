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
  title: 'Hail Damage Repair Odessa TX | 5 Star Roofing',
  description: "Professional hail damage roof repair in Odessa TX. Fast emergency response, insurance assistance, quality roofing materials. Free inspections. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Odessa", url: "/hail-damage-repair-odessa/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-odessa/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.8457, "longitude": -102.3676 },
        "url": "https://5starroofingpros.com/hail-damage-repair-odessa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Odessa, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "name": "Odessa",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Ector County, Texas"
              }
            },
            "description": "Expert hail damage roof repair services in Odessa, TX. 24/7 emergency response, insurance claim assistance, and Class 4 impact-resistant roof replacements for Ector County properties."
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
                "name": "How do I know if my Odessa roof has hail damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Signs of hail damage on Odessa roofs include granule loss (shiny spots on shingles), dents on metal vents, flashing, and gutters, cracked or missing shingles, and bruised areas that feel soft. Ector County's position in the Permian Basin means severe storms can develop quickly—schedule a free inspection after any hail event."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover hail damage repair in Odessa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most Texas homeowners insurance policies cover hail damage if it occurred during your policy period and you file within 1-2 years. We document every impact with photos and measurements, meet adjusters on-site, and advocate for maximum coverage."
                }
              },
              {
                "@type": "Question",
                "name": "How much does hail damage repair cost in Odessa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail damage repair costs in Odessa vary based on roof size, material, and damage extent. Most storm-related repairs are covered by insurance with homeowners paying only their deductible. Full roof replacements in Ector County typically range from $8,000-$15,000 for residential properties."
                }
              },
              {
                "@type": "Question",
                "name": "What are Class 4 impact-resistant shingles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 shingles are rated to withstand 2-inch diameter hail strikes under UL 2218 testing. For Odessa homes facing frequent Permian Basin storms, Class 4 shingles reduce future damage by up to 90% and often qualify for 10-30% insurance premium discounts."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to hail damage in Odessa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 24/7 emergency response for Odessa properties. While our headquarters is in Amarillo (about 282 miles away), we maintain crews throughout West Texas and can typically reach Odessa within 4 hours for emergencies."
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
                Hail Damage Repair in <span className="text-brand-gold-light">Odessa, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Odessa's position in the Permian Basin means severe weather is part of life in Ector County. Since 2014, 5 Star Roofing has helped Odessa homeowners and businesses recover from hail damage with expert repairs, insurance claim assistance, and Class 4 impact-resistant replacements built to withstand West Texas storms.
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
                  <AnimatedCounter to={282} suffix=" mi" />
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
              Why Odessa Properties Need Expert Hail Damage Repair
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Odessa, the county seat of Ector County, sits at 2,851 feet elevation in the heart of the Permian Basin—one of America's most productive oil and gas regions. With a population of over 114,000, Odessa experiences the same severe weather patterns that affect the entire West Texas region: sudden thunderstorms, large hail, and damaging winds that can devastate roofs in minutes.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ector County's semi-arid climate averages only about 14 inches of rainfall annually, but when storms do hit, they're often severe. Spring and early summer bring the highest risk of hail damage, with supercells capable of producing hail larger than golf balls. The oil field workforce and associated housing in Odessa means a lot of roofs that need protection and prompt repair when damage occurs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Odessa and the Permian Basin since 2014. We understand the specific roofing challenges that come with West Texas weather and the oil economy. Our team has helped hundreds of Odessa property owners—including many rental properties housing oil field workers—recover from storm damage with expert repairs and comprehensive warranty protection.
            </p>
          </section>
        </FadeIn>

        {/* Odessa Weather Data Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Ector County Weather: Understanding Your Roof's Risks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">14"</div>
                <div className="font-semibold text-gray-700">Annual Rainfall</div>
                <p className="text-sm text-gray-500 mt-2">But storms are severe</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2,851 ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">Intense UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Semi-Arid</div>
                <div className="font-semibold text-gray-700">Climate Type</div>
                <p className="text-sm text-gray-500 mt-2">Hot summers, mild winters</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Apr-Jun</div>
                <div className="font-semibold text-gray-700">Peak Hail Season</div>
                <p className="text-sm text-gray-500 mt-2">Highest storm frequency</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The National Weather Service Midland office monitors severe weather across Ector County and the Permian Basin. While Odessa sees less annual precipitation than many Texas cities, the storms that do occur are often intense. Supercell thunderstorms developing over the region can produce damaging hail, high winds, and occasionally tornadoes. After major storm events, Odessa typically sees a surge in roofing claims across both residential and commercial properties.
            </p>
          </section>
        </FadeIn>

        {/* Our Process Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Our Odessa Hail Damage Repair Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">We thoroughly inspect your Odessa property for hail damage, documenting every impact with photos and measurements. Our inspections are always free with no obligation.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claim</h3>
                <p className="text-gray-600">We prepare comprehensive documentation for your claim and meet with your adjuster on-site. We know what Odessa-area insurance adjusters look for and how to maximize your coverage.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Estimate</h3>
                <p className="text-gray-600">We provide a detailed, line-item estimate using Xactimate—the same software insurance companies use. No surprises, no hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Repair</h3>
                <p className="text-gray-600">Our experienced crews install your new roof using premium materials suited to Odessa's climate. Most residential repairs complete in 1-3 days.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Final Inspection</h3>
                <p className="text-gray-600">We conduct a thorough final inspection to ensure every detail meets our high standards. You'll receive complete documentation for your records.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Warranty Protection</h3>
                <p className="text-gray-600">Your Odessa roof is protected by comprehensive workmanship warranties plus manufacturer warranties up to 50 years on qualifying materials.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Class 4 Shingles Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Class 4 Impact-Resistant Shingles: Smart Protection for Odessa
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              For Odessa properties facing the realities of Permian Basin weather, Class 4 impact-resistant shingles are an excellent investment. These premium shingles are tested to withstand 2-inch diameter steel ball impacts under UL 2218 standards—providing superior protection against the large hail that West Texas storms can produce.
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
              The insurance premium savings from Class 4 shingles often pay for the upgrade within a few years. For Odessa landlords managing rental properties for oil field workers, Class 4 roofs mean less maintenance and fewer storm-related headaches.
            </p>
          </section>
        </FadeIn>

        {/* Odessa Neighborhoods Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Serving All Odessa Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From established neighborhoods in central Odessa to newer developments on the outskirts, we provide hail damage repair services throughout Ector County:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "Sherwood", "Dawn Heights", "Mission Estates", "Eastgate",
                "Westgate", "Ridgemont", "Southgate", "Presidential Estates",
                "Garden Oaks", "Austin Highlands", "Parks Legado", "Sienna Hills",
                "Westridge", "Sage Meadow", "Martin Farms", "West Odessa"
              ].map((neighborhood) => (
                <div key={neighborhood} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium">
                  {neighborhood}
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              We also serve nearby communities including Gardendale, Goldsmith, Notrees, and Penwell. Call (806) 622-6041 to confirm service availability for your area.
            </p>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Odessa Hail Damage Repair: Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do I know if my Odessa roof has hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Signs of hail damage include: granule loss (dark, shiny spots on shingles), dents on metal vents and flashing, cracked or fractured shingles, dented gutters and downspouts, and damage to outdoor AC units or vehicles. Odessa's severe storms can cause damage that isn't visible from the ground—we recommend a professional inspection after any significant hail event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will my insurance cover hail damage repair in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Texas homeowners policies cover hail damage. Key requirements: the damage must have occurred during your policy period, and you typically need to file within 1-2 years of the event. We document every impact with high-resolution photos, meet with your adjuster on-site, and advocate for full coverage. Most Odessa homeowners pay only their deductible for storm-related repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does hail damage repair cost in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Costs vary based on roof size, pitch, materials, and damage extent. For insurance claims, most homeowners pay only their deductible. Full roof replacements in Odessa typically range from $8,000-$15,000 for average-sized homes, though costs can be higher for larger or more complex roofs. We provide detailed estimates using Xactimate—the same software insurance companies use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work with oil field rental properties in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we work with many Odessa landlords and property managers who own rental homes for oil field workers. We understand the need for efficient, quality repairs that minimize vacancy time. Class 4 shingles are particularly valuable for rental properties due to their durability and the insurance savings they provide over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to hail damage in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We offer 24/7 emergency response for Odessa properties. While our headquarters is in Amarillo (about 282 miles away), we maintain crews throughout West Texas and can typically reach Odessa within 4 hours for emergencies. After major storms, we prioritize emergency tarping to prevent water damage before permanent repairs begin.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        {/* Related Services */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Related Services in Odessa
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-odessa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-odessa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-odessa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        
        <InternalLinks currentCity="odessa" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Odessa? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Odessa property owners. Expert hail damage repair with comprehensive warranties. Insurance claim assistance from start to finish.
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
