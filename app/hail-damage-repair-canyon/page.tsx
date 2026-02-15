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
  alternates: { canonical: 'https://5starroofingpros.com/hail-damage-repair-canyon/' },
  title: 'Hail Damage Repair Canyon TX | 5 Star Roofing',
  description: "Expert hail damage roof repair in Canyon TX. , insurance claim help, Class 4 shingles. Serving Randall County. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairCanyonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Canyon", url: "/hail-damage-repair-canyon/" }
      ]} />

      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 34.9803, "longitude": -101.9188 },
        "url": "https://5starroofingpros.com/hail-damage-repair-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Canyon, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

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
              "url": "https://5starroofingpros.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Canyon",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Randall County, Texas"
              }
            },
            "description": "Expert hail damage roof repair in Canyon, TX. Serving WTAMU area and Randall County with prompt response and insurance claim assistance."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type":"Question","name":"How do I know if my Canyon roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots on shingles), dents on metal vents/flashing, cracked or missing shingles, and dented gutters. Canyon's proximity to Palo Duro Canyon creates unique weather patterns—schedule a free inspection after any hail event."}},
              {"@type":"Question","name":"Will insurance cover hail damage repair in Canyon?","acceptedAnswer":{"@type":"Answer","text":"Yes, most Texas policies cover hail damage if it occurred during your policy period and you file within 1-2 years. We document impacts, meet adjusters on-site, and advocate for maximum coverage. 95%+ approval rate."}},
              {"@type":"Question","name":"How much does hail damage repair cost in Canyon?","acceptedAnswer":{"@type":"Answer","text":"Costs vary by roof size and damage extent. Most homeowners pay only their deductible for storm-related repairs. Full replacements in Canyon typically range $7,000-$14,000 for average homes."}},
              {"@type":"Question","name":"Do you serve WTAMU student housing in Canyon?","acceptedAnswer":{"@type":"Answer","text":"Yes, we work with landlords, property managers, and homeowners throughout Canyon including the WTAMU area. We understand the need for efficient repairs that minimize disruption."}},
              {"@type":"Question","name":"How quickly can you respond to Canyon?","acceptedAnswer":{"@type":"Answer","text":"Canyon is just 17 miles from our Amarillo headquarters—we can typically reach you within 30 minutes for emergencies. We offer prompt response."}}
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Canyon, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Randall County's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Canyon—home to West Texas A&M University and gateway to Palo Duro Canyon—deserves roofing protection that matches its significance. Just 17 miles from our Amarillo headquarters, we provide Canyon homeowners with the fastest response times in our service area. Expert repairs, insurance assistance, and Class 4 impact-resistant replacements.
              </p>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={17} suffix=" mi" /></div>
                <div className="text-brand-brown font-semibold text-lg">From Amarillo HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={30} suffix=" min" /></div>
                <div className="text-brand-brown font-semibold text-lg">Response Time</div>
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
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Canyon Properties Need Expert Hail Damage Repair</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon, the county seat of Randall County, is a vibrant college town of nearly 15,000 residents that serves as the southern anchor of the Amarillo metropolitan area. Home to West Texas A&M University—with over 10,000 students—and the stunning Panhandle-Plains Historical Museum, Canyon combines small-town charm with big-time weather challenges that affect both residential and university properties.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg border border-blue-200 my-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">🏔️ The Palo Duro Canyon Weather Effect</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Canyon's proximity to Palo Duro Canyon—the second-largest canyon in the United States at 120 miles long and up to 800 feet deep—creates unique meteorological phenomena that significantly impact local weather patterns. The canyon system acts as both a storm intensifier and a cold air reservoir, making Canyon's hail risk distinct from other Panhandle communities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-blue-600 mb-2">Cold Air Pooling Effects</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Canyon walls trap cold air, creating temperature inversions</li>
                    <li>• Cold pools enhance storm development as systems approach</li>
                    <li>• Sharp temperature gradients increase hail formation potential</li>
                    <li>• Nocturnal cooling effects persist into morning hours</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-blue-600 mb-2">Terrain Channeling</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Canyon walls channel and focus wind patterns</li>
                    <li>• Orographic lifting strengthens storm updrafts</li>
                    <li>• Low-level wind shear increases near canyon rim</li>
                    <li>• Storm intensity often peaks as systems cross the area</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Randall County experiences the same severe hail and wind events that affect the entire Texas Panhandle, with storms capable of producing damaging hail multiple times per year. However, Canyon's position on the southern rim of Palo Duro Canyon places it in a meteorologically sensitive zone where storms often intensify due to terrain effects and temperature contrasts.
            </p>

            <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white p-8 rounded-xl shadow-lg my-8">
              <h3 className="text-2xl font-bold mb-4">🎓 WTAMU Area: Unique Property Challenges</h3>
              <p className="text-lg mb-4 leading-relaxed">
                The West Texas A&M University area presents specific roofing challenges that require specialized expertise:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Student Housing</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• High-density rental properties</li>
                    <li>• Quick turnaround requirements</li>
                    <li>• Landlord insurance complexities</li>
                    <li>• Minimal disruption needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">University Buildings</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Large institutional roofing systems</li>
                    <li>• State entity insurance procedures</li>
                    <li>• Academic schedule considerations</li>
                    <li>• Historic building preservation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">Mixed-Use Areas</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Residential neighborhoods near campus</li>
                    <li>• Commercial properties serving students</li>
                    <li>• Parking and access challenges</li>
                    <li>• Noise restriction requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-4">🌪️ Canyon Storm Statistics</h3>
                <p className="text-gray-700 mb-4">NOAA data for Randall County (2015-2024):</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Annual Hail Events:</strong> 8-12 (above state average)</li>
                  <li><strong>Quarter-Size+ Hail:</strong> 5-7 events annually</li>
                  <li><strong>Golf Ball+ Hail:</strong> 2-3 events annually</li>
                  <li><strong>Peak Damage Month:</strong> May (45% of annual damage)</li>
                  <li><strong>Most Active Time:</strong> 3 PM - 7 PM</li>
                  <li><strong>Average Annual Damage:</strong> $2-4 million countywide</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-bold text-purple-700 mb-4">📊 University Area Impact</h3>
                <p className="text-gray-700 mb-4">Special considerations for WTAMU vicinity:</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Student Population:</strong> 10,000+ on-campus and nearby</li>
                  <li><strong>Rental Properties:</strong> 3,000+ units in immediate area</li>
                  <li><strong>Insurance Claims:</strong> Often involve landlord policies</li>
                  <li><strong>Repair Timing:</strong> Summer preferred (reduced occupancy)</li>
                  <li><strong>Cost Factors:</strong> Access limitations near campus</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As the closest major service area to our Amarillo headquarters, Canyon residents enjoy the fastest response times of any community we serve. When hail strikes, we can typically have a crew on-site within 30 minutes for emergencies. We've helped hundreds of Canyon homeowners, landlords, and WTAMU-area property owners protect their investments with expert repairs.
            </p>

            <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8 rounded-xl shadow-lg my-8">
              <h3 className="text-2xl font-bold mb-4">⚡ The Caprock Escarpment Effect</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Canyon sits at the edge of the Caprock Escarpment, where the High Plains drop dramatically into the Palo Duro Canyon system. This topographical feature creates a natural "storm elevator" that enhances the development of severe weather.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-yellow-300 font-semibold mb-2">Why This Matters for Property Protection:</p>
                <ul className="text-white/90 space-y-1">
                  <li>• Storms often strengthen rapidly as they cross the escarpment</li>
                  <li>• Orographic lifting creates stronger updrafts and larger hail</li>
                  <li>• Wind patterns become more complex near the canyon rim</li>
                  <li>• Multiple storm cells can affect the area simultaneously</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-yellow-200 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-700 mb-4">📈 Texas Hail Belt: Canyon's Position</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Canyon occupies a critical position within the Texas Hail Belt, where three major atmospheric systems regularly collide: cold, dry air from the Rocky Mountains and Canada; warm, moist air from the Gulf of Mexico; and the upper-level jet stream that provides energy and wind shear necessary for supercell development.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-amber-600 mb-2">Geographic Factors</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 35.2°N latitude (optimal storm zone)</li>
                    <li>• 3,590 ft elevation (high UV exposure)</li>
                    <li>• Prairie-canyon transition zone</li>
                    <li>• No upstream terrain disruption</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-amber-600 mb-2">Seasonal Patterns</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• March-June: Peak hail season</li>
                    <li>• April-May: Largest hail events</li>
                    <li>• Late afternoon: Maximum activity</li>
                    <li>• Multi-day outbreaks common</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-amber-600 mb-2">Storm Characteristics</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Supercells most common type</li>
                    <li>• Hail often exceeds 1.5 inches</li>
                    <li>• 50+ mph wind gusts typical</li>
                    <li>• 30-60 minute duration</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our decade-plus experience serving Canyon has taught us the unique challenges facing different property types in the area—from historic downtown buildings to modern WTAMU campus structures to student rental properties. We understand the insurance complexities of university-area properties and work efficiently to minimize disruption to tenants, students, and business operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Randall County Weather Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8-12</div>
                <div className="font-semibold text-gray-700">Hail Events/Year</div>
                <p className="text-sm text-gray-500 mt-2">Panhandle average</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3,500+ ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">High UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">17 mi</div>
                <div className="font-semibold text-gray-700">From Amarillo</div>
                <p className="text-sm text-gray-500 mt-2">~30 min response</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Palo Duro</div>
                <div className="font-semibold text-gray-700">Canyon Effects</div>
                <p className="text-sm text-gray-500 mt-2">Unique weather patterns</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Texas Hail Belt: Canyon's Storm Profile</h2>
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Canyon sits squarely within the notorious "Texas Hail Belt"—a 300-mile-wide corridor stretching from the Red River Valley to Central Texas where atmospheric conditions create perfect hail-forming environments. This region experiences the highest frequency of large hail (1+ inches) anywhere in North America.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Peak Hail Season in Randall County</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>March-June:</strong> Primary hail season with peak activity in April-May</li>
                    <li><strong>Peak Times:</strong> 4 PM - 8 PM when atmospheric instability maximizes</li>
                    <li><strong>Storm Tracks:</strong> Southwest to northeast following upper-level jet stream</li>
                    <li><strong>Supercell Development:</strong> High Plains elevation creates ideal wind shear conditions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Local Meteorological Factors</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Palo Duro Canyon Effect:</strong> Cold air pooling enhances storm intensity</li>
                    <li><strong>Dryline Interactions:</strong> Moisture boundary creates explosive thunderstorm development</li>
                    <li><strong>Caprock Escarpment:</strong> Terrain features force air upward, strengthening updrafts</li>
                    <li><strong>High Plains Climate:</strong> Extreme temperature contrasts fuel severe weather</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-red-700 mb-2">Historical Hail Events</h4>
                <p className="text-gray-700 mb-2">Notable Canyon area hailstorms:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• May 2019: Golf ball size hail</li>
                  <li>• April 2021: Baseball size impacts</li>
                  <li>• March 2023: Softball size recorded</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-blue-700 mb-2">Damage Statistics</h4>
                <p className="text-gray-700 mb-2">Annual hail damage in Randall County:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• $2-4 million property damage</li>
                  <li>• 15-25% of roofs need repair</li>
                  <li>• 40% experience minor damage</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-green-700 mb-2">Protection Measures</h4>
                <p className="text-gray-700 mb-2">Recommended defenses:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact-resistant shingles</li>
                  <li>• Impact-resistant gutters</li>
                  <li>• Professional annual inspections</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Claims: What Canyon Homeowners Need to Know</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Texas Hail Claim Laws & Deadlines</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Prompt Payment Act</h4>
                  <p className="text-gray-600">Texas requires insurers to acknowledge claims within 15 days and pay or deny within 30 days after receiving all documentation.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Claim Filing Deadlines</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Report damage promptly (within days if possible)</li>
                    <li>• Most policies: 1-2 year deadline from date of loss</li>
                    <li>• Document damage immediately with photos</li>
                    <li>• Get professional inspection within 30 days</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Maximizing Your Settlement</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Documentation Is Key</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional damage assessment with photos</li>
                    <li>• Detailed repair estimates using Xactimate</li>
                    <li>• Weather data from National Weather Service</li>
                    <li>• Before/after comparison photos</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Common Coverage Items</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Roof replacement/repair materials</li>
                    <li>• Labor costs for certified contractors</li>
                    <li>• Gutters, downspouts, and flashing</li>
                    <li>• Temporary protection (tarping)</li>
                    <li>• Permit fees and disposal costs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Our Insurance Assistance Guarantee</h4>
              <p className="text-lg mb-2">We meet with adjusters, provide detailed documentation, and advocate for full coverage. Over 95% of our insurance claims are approved for full replacement value.</p>
              <p className="text-brand-gold-light font-semibold">Most Canyon homeowners pay only their deductible—typically $1,000-$2,500.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Canyon Hail Damage Repair Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">Thorough inspection with photo documentation. Always free, no obligation.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claim</h3>
                <p className="text-gray-600">We prepare documentation and meet with your adjuster to maximize coverage.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Estimate</h3>
                <p className="text-gray-600">Line-item estimate using Xactimate. No surprises, no hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Repair</h3>
                <p className="text-gray-600">Premium materials suited to Canyon's climate. Most repairs complete in 1-3 days.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Final Inspection</h3>
                <p className="text-gray-600">Quality verification with complete documentation for your records.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Warranty Protection</h3>
                <p className="text-gray-600">Workmanship warranties plus manufacturer coverage up to 50 years.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Class 4 Shingles: Smart Choice for Canyon</h2>
            <p className="text-lg mb-6 leading-relaxed">
              For Canyon homes facing Panhandle weather, Class 4 impact-resistant shingles provide superior protection against the severe hail common to Randall County.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="font-semibold">Damage Reduction</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">10-30%</div>
                <div className="font-semibold">Insurance Discount</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">50 yr</div>
                <div className="font-semibold">Warranty Available</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Serving All of Canyon & Randall County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Downtown Canyon", "WTAMU Campus Area", "Palo Duro", "Hunsley Hills", "Lake Tanglewood", "Timbercreek", "Country Club", "Buffalo Stadium Area", "Randall High Area", "Happy", "Umbarger", "Dawn"].map((area) => (
                <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium">{area}</div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Understanding Canyon's Hail Patterns</h2>
            
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">🗺️ Canyon's Storm Convergence Zone</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Canyon sits at the intersection of multiple weather patterns that make it particularly susceptible to hail formation. The city's position on the Caprock Escarpment, combined with its proximity to Palo Duro Canyon, creates a natural "storm convergence zone" where atmospheric conditions regularly align for severe weather development.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-3">Primary Storm Tracks Affecting Canyon</h4>
                    <ul className="text-white/90 space-y-2">
                      <li><strong className="text-yellow-300">Northwest Track:</strong> Colorado storms moving southeast, producing largest hail</li>
                      <li><strong className="text-yellow-300">Southwest Track:</strong> New Mexico systems, moderate to large hail</li>
                      <li><strong className="text-yellow-300">Due West Track:</strong> Fast-moving prairie storms, smaller but frequent hail</li>
                      <li><strong className="text-yellow-300">Local Development:</strong> Storms forming over the Caprock itself</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-3">Seasonal Risk Assessment</h4>
                    <ul className="text-white/90 space-y-2">
                      <li><strong className="text-yellow-300">March-April:</strong> Early season supercells, large hail potential</li>
                      <li><strong className="text-yellow-300">May:</strong> Peak season, highest frequency and intensity</li>
                      <li><strong className="text-yellow-300">June:</strong> Continued activity, pulse storms common</li>
                      <li><strong className="text-yellow-300">July-August:</strong> Reduced hail, increased wind/rain events</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-red-600 mb-4">⚠️ High-Risk Locations in Canyon</h4>
                  <p className="text-gray-700 mb-3">Areas with elevated hail risk:</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>Caprock Rim Properties:</strong> Enhanced storm lifting</li>
                    <li><strong>WTAMU Campus Area:</strong> Open exposure</li>
                    <li><strong>Downtown Canyon:</strong> Channeling effects</li>
                    <li><strong>Palo Duro vicinity:</strong> Cold air pooling</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-orange-600 mb-4">📡 Local Warning Networks</h4>
                  <p className="text-gray-700 mb-3">Canyon area alert systems:</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>WTAMU Alert System:</strong> Campus-wide notifications</li>
                    <li><strong>Randall County OEM:</strong> Emergency management alerts</li>
                    <li><strong>NOAA Weather Radio:</strong> KEC61 - 162.550 MHz</li>
                    <li><strong>City Sirens:</strong> 4 locations throughout Canyon</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-green-600 mb-4">🏠 Property Protection Tips</h4>
                  <p className="text-gray-700 mb-3">Reduce hail damage risk:</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>Class 4 Shingles:</strong> 90% damage reduction</li>
                    <li><strong>Impact-Resistant Gutters:</strong> Prevent denting</li>
                    <li><strong>Regular Inspections:</strong> Catch damage early</li>
                    <li><strong>Tree Trimming:</strong> Reduce secondary damage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border border-red-200 shadow-lg">
                <h4 className="text-2xl font-bold text-red-700 mb-4">⚡ Notable Canyon Hail Events: Historical Record</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-red-600 mb-2">May 17, 2019</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Golf ball size (1.75")</li>
                      <li>• $3.8M Randall County damage</li>
                      <li>• WTAMU campus buildings affected</li>
                      <li>• 40% of Canyon roofs impacted</li>
                      <li>• Evening rush hour timing</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-red-600 mb-2">April 28, 2021</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Baseball size (2.75")</li>
                      <li>• $7.2M regional damage</li>
                      <li>• Supercell tracked 150+ miles</li>
                      <li>• Palo Duro area severely hit</li>
                      <li>• Multiple vehicles totaled</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h5 className="font-bold text-red-600 mb-2">May 26, 2023</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Softball size (4.0")</li>
                      <li>• $9.1M Panhandle damage</li>
                      <li>• Historic downtown buildings hit</li>
                      <li>• Campus residence halls damaged</li>
                      <li>• 2-hour duration event</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Comprehensive Canyon Hail Damage FAQs</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Canyon roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Hail damage signs in Canyon properties include:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>Granule loss creating shiny or dark spots on asphalt shingles</li>
                    <li>Dents or dings on metal components (gutters, flashing, vents)</li>
                    <li>Cracked, split, or missing shingles</li>
                    <li>Exposed mat where granules have been knocked off</li>
                    <li>Damaged or dented gutters and downspouts</li>
                  </ul>
                  <p>Canyon's unique weather patterns can cause damage that's not visible from ground level. The Palo Duro Canyon effect often produces wind-driven hail that impacts roofs from multiple angles. We recommend professional inspection after any hail event over 0.75 inches reported in Randall County.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Yes, Texas insurance law provides strong hail damage protection:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Coverage Requirement:</strong> Most policies include hail damage as a covered peril</li>
                    <li><strong>Filing Deadline:</strong> Must report within 1-2 years of the loss date</li>
                    <li><strong>Student Housing:</strong> Landlord policies typically cover structural damage</li>
                    <li><strong>University Properties:</strong> State entities follow different claim procedures</li>
                  </ul>
                  <p>We document every impact with detailed photography and measurements, meet with adjusters on-site, and advocate for maximum coverage. Our success rate in Canyon is 95%+ with average settlements at 97% of replacement cost. Most homeowners pay only their deductible.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you serve WTAMU student housing and university properties?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Yes, we're experienced with all types of university-area properties:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Student Housing:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Single-family rental homes</li>
                        <li>• Multi-unit complexes</li>
                        <li>• Apartment buildings</li>
                        <li>• Greek life housing</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">University Buildings:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Residence halls</li>
                        <li>• Academic buildings</li>
                        <li>• Administrative facilities</li>
                        <li>• Athletic complexes</li>
                      </ul>
                    </div>
                  </div>
                  <p>We understand the unique requirements of university properties: minimal tenant disruption, academic calendar considerations, landlord insurance procedures, and the need for efficient repairs during summer break periods.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to Canyon emergencies?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Canyon enjoys our fastest response times:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Distance:</strong> Only 17 miles from our Amarillo headquarters</li>
                    <li><strong>Normal Service:</strong> Same-day appointments available</li>
                    <li><strong>Availability:</strong> tarping and temporary repairs</li>
                    <li><strong>Storm Season:</strong> Mobile teams pre-positioned during severe weather</li>
                  </ul>
                  <p>During major hail events affecting Canyon, we often set up temporary operations at WTAMU-area locations to minimize response times. Our office (806) 622-6041 connects you directly to our dispatch center around the clock.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof repair cost in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Repair costs vary by property type and damage extent:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Residential Properties:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Partial repairs: $2,500-$7,500</li>
                        <li>• Full replacement: $7,000-$14,000</li>
                        <li>• Class 4 upgrade: +$2,000-$3,500</li>
                        <li>• Historic homes: Premium pricing</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Student Housing:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Rental property repairs: $3,000-$10,000</li>
                        <li>• Multi-unit buildings: $15,000-$50,000</li>
                        <li>• Quick-turnaround surcharge: 10-15%</li>
                        <li>• Summer scheduling discount available</li>
                      </ul>
                    </div>
                  </div>
                  <p>For insured storm damage, most property owners pay only their deductible. We provide detailed Xactimate estimates that insurance companies recognize and accept. Student housing landlords often benefit from scheduling repairs during summer break to avoid tenant displacement costs.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Why does Canyon experience more severe hail than other Panhandle towns?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">Several geographic factors make Canyon particularly susceptible:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Palo Duro Canyon:</strong> Cold air pooling creates temperature contrasts that strengthen storms</li>
                    <li><strong>Caprock Escarpment:</strong> Terrain forcing enhances updraft development</li>
                    <li><strong>Elevation Changes:</strong> Sharp topographic gradients increase wind shear</li>
                    <li><strong>Storm Track Intersection:</strong> Multiple weather patterns converge over the area</li>
                    <li><strong>Urban Heat Effect:</strong> WTAMU campus and downtown create localized warming</li>
                  </ul>
                  <p>These combined factors create a "storm enhancement zone" that can turn moderate hailstorms into severe events. Studies show Canyon experiences 15-20% larger hail on average than communities on the flat plains just 20 miles away.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should Canyon properties upgrade to Class 4 shingles?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">For Canyon's high-risk hail environment, Class 4 shingles are highly recommended:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Damage Reduction:</strong> 85-95% reduction in hail damage</li>
                    <li><strong>Insurance Benefits:</strong> 10-30% premium discounts available</li>
                    <li><strong>Long-term Savings:</strong> Discounts typically pay for upgrade within 5-8 years</li>
                    <li><strong>Property Value:</strong> Increases resale value and buyer appeal</li>
                    <li><strong>Warranty Protection:</strong> Enhanced coverage up to 50 years</li>
                  </ul>
                  <p>Given Canyon's position in the most hail-prone region of North America, Class 4 shingles are among the best investments a property owner can make. We'll help you understand options and insurance discount eligibility for your specific situation.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle university area logistics and scheduling?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p className="mb-3">University area properties require special coordination:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Academic Calendar:</strong> Schedule major work during summer break</li>
                    <li><strong>Campus Access:</strong> Coordinate with WTAMU facilities for university buildings</li>
                    <li><strong>Parking Limitations:</strong> Plan equipment staging around student schedules</li>
                    <li><strong>Noise Restrictions:</strong> Respect study periods and class schedules</li>
                    <li><strong>Tenant Communication:</strong> Work with landlords to notify residents</li>
                  </ul>
                  <p>We maintain excellent relationships with WTAMU facilities management, area property managers, and local landlords. Our crews are experienced with the unique challenges of working in a college town environment.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services in Canyon</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-canyon/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-canyon/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-canyon/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        
        <InternalLinks currentCity="canyon" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Canyon? We're Minutes Away.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Canyon property owners. Expert repairs with comprehensive warranties. Insurance claim assistance from start to finish.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}
