import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Pampa TX | Gray County Storm Experts | 5 Star Roofing',
  description: "Pampa's trusted hail damage repair specialists. 24/7 emergency response, insurance claim assistance, Class 4 impact-resistant shingles. Serving Gray County since 2014. Free inspections. Call (806) 622-6041.",
};

export default function HailDamageRepairPampaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Pampa", url: "/hail-damage-repair-pampa/" }
      ]} />

      <StickyContactBar />

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
              "name": "Pampa",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Gray County, Texas"
              }
            },
            "description": "Expert hail damage roof repair in Pampa, TX. Serving Gray County with 24/7 emergency response and insurance claim assistance."
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
              {"@type":"Question","name":"How do I know if my Pampa roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss, dents on metal vents/flashing, cracked shingles, and dented gutters. Gray County's Panhandle location means severe storms are common. Schedule a free inspection after any hail event."}},
              {"@type":"Question","name":"Will insurance cover hail damage in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Yes, most Texas policies cover hail damage if it occurred during your policy period. File within 1-2 years. We document impacts and advocate for maximum coverage."}},
              {"@type":"Question","name":"How much does hail damage repair cost in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Costs vary by roof size and damage. Most pay only their deductible for storm repairs. Full replacements in Pampa typically range $7,000-$14,000."}},
              {"@type":"Question","name":"How quickly can you respond to Pampa?","acceptedAnswer":{"@type":"Answer","text":"Pampa is about 55 miles from our Amarillo headquarters. We offer 24/7 emergency response and can typically reach Pampa within 1 hour for urgent situations."}},
              {"@type":"Question","name":"Should I get Class 4 shingles in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Yes, Class 4 shingles reduce future hail damage by 90% and often qualify for 10-30% insurance premium discounts. Excellent investment for Gray County's hail-prone climate."}}
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{ backgroundImage: 'url(/images/hail-damage-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Pampa, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Gray County's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Pampa—the county seat of Gray County and heart of the northern Texas Panhandle—faces some of the region's most severe weather. Since 2014, 5 Star Roofing has helped Pampa homeowners and businesses recover from hail damage with expert repairs, insurance claim assistance, and Class 4 impact-resistant replacements.
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
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={55} suffix=" mi" /></div>
                <div className="text-brand-brown font-semibold text-lg">From Amarillo HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div>
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
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Pampa Properties Need Expert Hail Damage Repair</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa, named from the Quechua word for "plain," lives up to its name—sitting at 3,238 feet elevation on the flat expanses of the Texas Panhandle. With a 2020 population of 16,867 (currently estimated at 16,400), Pampa serves as the county seat of Gray County and the economic hub for the surrounding region. This northern Panhandle location puts Pampa directly in the path of severe weather systems moving across the Great Plains.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Pampa's economy has deep industrial roots, anchored by the Cabot Corporation's carbon black plant—operating since 1926 and acquired by Cabot in 1945. This facility, along with the legacy of the former Celanese Chemical Company plant (which operated from 1952-2009), established Pampa as a significant industrial center. Today, major employers include Pampa Independent School District (serving 3,312 students with 476 staff), oil and gas operations, and various service industries supporting the broader Gray County area.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Gray County experiences a humid subtropical climate with extreme seasonal variations—temperatures ranging from 25°F to 92°F annually, with recorded highs of 109°F. The county experiences 8-12 significant hail events annually, with storms capable of producing damaging hail from March through June. The open terrain allows supercell thunderstorms to develop intensity as they move eastward, often producing their most severe hail as they pass through communities like Pampa.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Pampa and Gray County since 2014. Located about 55 miles from our Amarillo headquarters, we can reach Pampa within approximately one hour for emergency situations. We understand Pampa's unique combination of industrial, residential, and agricultural properties, having helped hundreds of property owners protect their investments with expert repairs and storm-resistant materials.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Gray County Weather Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8-12</div>
                <div className="font-semibold text-gray-700">Hail Events/Year</div>
                <p className="text-sm text-gray-500 mt-2">Panhandle average</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3,238 ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">High UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">55 mi</div>
                <div className="font-semibold text-gray-700">From Amarillo</div>
                <p className="text-sm text-gray-500 mt-2">~1 hour response</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Mar-Jun</div>
                <div className="font-semibold text-gray-700">Peak Hail Season</div>
                <p className="text-sm text-gray-500 mt-2">Highest storm frequency</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Pampa Hail Damage Repair Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">Thorough inspection with photo documentation for your Pampa property. Always free.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claim</h3>
                <p className="text-gray-600">Complete documentation and adjuster meetings to maximize your coverage.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Detailed Estimate</h3>
                <p className="text-gray-600">Line-item Xactimate estimates. No surprises, no hidden costs.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Expert Repair</h3>
                <p className="text-gray-600">Premium materials for Pampa's climate. Most repairs complete in 1-3 days.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. Final Inspection</h3>
                <p className="text-gray-600">Quality verification with complete documentation.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">6. Warranty Protection</h3>
                <p className="text-gray-600">Comprehensive workmanship and manufacturer warranties up to 50 years.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Class 4 Shingles: Essential for Pampa</h2>
            <p className="text-lg mb-6 leading-relaxed">
              For Pampa properties facing Gray County's severe weather, Class 4 impact-resistant shingles provide superior protection against the large hail common to northern Panhandle storms.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
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
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Serving All of Pampa & Gray County</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Pampa Residential Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Downtown Pampa", "North Pampa", "South Pampa", "East Pampa", "West Pampa", "Industrial District", "PISD Area", "Highway 60 Corridor"].map((area) => (
                    <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium text-sm">{area}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Gray County Communities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Lefors", "McLean", "Alanreed", "Kingsmill", "Hoover", "Laketon", "Mobeetie", "Roberts County"].map((area) => (
                    <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium text-sm">{area}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-brown mb-3">Major Employers & Industrial Areas</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Cabot Corporation (Carbon Black)</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Pampa Independent School District</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Oil & gas operations</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Former Celanese plant site</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Industrial manufacturing</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Healthcare facilities</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Government services</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Retail & commercial</li>
                  <li className="flex items-center"><span className="text-brand-gold mr-2">•</span> Agricultural support</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Pampa Hail Damage FAQs</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Pampa roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Signs include granule loss (dark spots on shingles), dents on metal vents and flashing, cracked shingles, and dented gutters. We recommend professional inspection after any hail event in Gray County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Texas policies cover hail damage if it occurred during your policy period. File within 1-2 years. We document every impact and advocate for full coverage. Most homeowners pay only their deductible.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof repair cost in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Costs vary by roof size and damage. For insurance claims, most pay only their deductible. Full replacements in Pampa typically range $7,000-$14,000. We provide detailed Xactimate estimates.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Pampa is about 55 miles from our Amarillo headquarters. We offer 24/7 emergency response and can typically reach Pampa within about 1 hour for urgent situations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">For Pampa's hail-prone climate, Class 4 shingles are an excellent investment. They reduce future damage by 90% and often qualify for insurance discounts of 10-30%.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services in Pampa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-pampa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-pampa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-pampa/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Pampa? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Pampa property owners. Expert repairs with comprehensive warranties. Insurance claim assistance from start to finish.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}
