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
  title: 'Hail Damage Repair Dumas TX | Moore County Storm Experts | 5 Star Roofing',
  description: "Dumas's trusted hail damage repair specialists. 24/7 emergency response, insurance claim assistance, Class 4 impact-resistant shingles. Serving Moore County since 2014. Free inspections. Call (806) 622-6041.",
};

export default function HailDamageRepairDumasPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Dumas", url: "/hail-damage-repair-dumas/" }
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
              "name": "Dumas",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Moore County, Texas"
              }
            },
            "description": "Expert hail damage roof repair in Dumas, TX. Serving Moore County with 24/7 emergency response and insurance claim assistance."
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
              {"@type":"Question","name":"How do I know if my Dumas roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss, dents on metal components, cracked shingles, and dented gutters. Moore County's northern Panhandle location means severe storms are common. Schedule a free inspection after any hail event."}},
              {"@type":"Question","name":"Will insurance cover hail damage in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Yes, most Texas policies cover hail damage during your policy period. File within 1-2 years. We document impacts and advocate for maximum coverage."}},
              {"@type":"Question","name":"How much does hail damage repair cost in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Costs vary by roof size and damage. Most pay only their deductible for storm repairs. Full replacements in Dumas typically range $7,000-$14,000."}},
              {"@type":"Question","name":"How quickly can you respond to Dumas?","acceptedAnswer":{"@type":"Answer","text":"Dumas is about 49 miles north of our Amarillo headquarters. We offer 24/7 emergency response and can typically reach Dumas within 1 hour."}},
              {"@type":"Question","name":"Should I get Class 4 shingles in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Yes, Class 4 shingles reduce future hail damage by 90% and often qualify for 10-30% insurance discounts. Excellent for Moore County's severe weather."}}
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
                Hail Damage Repair in <span className="text-brand-gold-light">Dumas, TX</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-bold text-brand-gold-light">
                Moore County's Trusted Storm Restoration Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed max-w-3xl">
                Dumas—the county seat of Moore County and a major cattle feeding hub—sits 49 miles north of Amarillo at 3,688 feet elevation. With approximately 180,000 cattle in Moore County ranches and feedlots, ranking 7th in Texas and top 15 nationally for beef production, Dumas faces unique challenges protecting both residential and agricultural infrastructure. Since 2014, 5 Star Roofing has specialized in serving this critical agricultural community's storm damage needs.
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
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={49} suffix=" mi" /></div>
                <div className="text-brand-brown font-semibold text-lg">From Amarillo HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">180K</div>
                <div className="text-brand-brown font-semibold text-lg">Cattle in County</div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Dumas Properties Need Expert Hail Damage Repair</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas, named after its founder Louis Dumas (1856-1923), is the county seat of Moore County with a 2020 population of 14,501. Located approximately 49 miles north of Amarillo at 3,688 feet elevation on the high plains of the Texas Panhandle, Dumas has established itself as one of Texas's most important cattle feeding centers and agricultural hubs.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Moore County ranks 7th in Texas and top 15 nationally for beef production, with approximately 180,000 cattle in ranches and feedlots throughout the county. This massive agricultural operation, combined with significant natural gas production and helium extraction (Moore County produces two-thirds of the nation's helium), creates a unique economic landscape that demands specialized roofing expertise for both residential and commercial agricultural facilities.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dumas experiences a mild climate with an average annual temperature of 60°F, but faces extreme weather variations—from 24°F to 92°F—with hot, clear summers and very cold, snowy, windy winters. The city receives about 20 inches of rainfall and 10 inches of snow annually. The high elevation and open plains location make Dumas particularly vulnerable to severe thunderstorms that develop across the Great Plains, often producing damaging hail as they intensify over the unobstructed terrain.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Dumas and Moore County since 2014, developing expertise in both residential storm damage and the specialized requirements of cattle feeding operations, grain elevators, and agricultural processing facilities. Our team understands that protecting Dumas means safeguarding critical infrastructure that supports one of America's most productive beef production regions.
            </p>
          </section>
        </FadeIn>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The northern Panhandle experiences some of Texas's most severe weather, with Moore County facing 8-12 significant hail events annually. The flat, open terrain allows supercell thunderstorms to develop and intensify as they move across the region, often producing their largest hail as they approach communities like Dumas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has been serving Dumas and Moore County since 2014. Just under an hour from our Amarillo headquarters, we can respond quickly to emergencies and provide the same expert service we're known for throughout the Panhandle. From agricultural buildings to residential neighborhoods, we have the experience to restore your roof properly.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Moore County Weather Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8-12</div>
                <div className="font-semibold text-gray-700">Hail Events/Year</div>
                <p className="text-sm text-gray-500 mt-2">Panhandle average</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3,600+ ft</div>
                <div className="font-semibold text-gray-700">Elevation</div>
                <p className="text-sm text-gray-500 mt-2">High UV exposure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">49 mi</div>
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
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Dumas Hail Damage Repair Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-brand-gold/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-600">Thorough inspection with photo documentation for your Dumas property. Always free.</p>
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
                <p className="text-gray-600">Premium materials for Dumas's climate. Most repairs complete in 1-3 days.</p>
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
            <h2 className="text-3xl font-bold mb-6">Class 4 Shingles: Ideal for Dumas</h2>
            <p className="text-lg mb-6 leading-relaxed">
              For Dumas properties facing Moore County's severe weather, Class 4 impact-resistant shingles provide superior protection against the large hail common to northern Panhandle storms.
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
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Serving All of Dumas & Moore County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Downtown Dumas", "North Dumas", "South Dumas", "East Dumas", "West Dumas", "Cactus", "Sunray", "Masterson", "Etter", "Channing", "Hartley County", "Sherman County"].map((area) => (
                <div key={area} className="bg-gray-50 p-3 rounded-lg text-center text-gray-700 font-medium">{area}</div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Dumas Hail Damage FAQs</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Dumas roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Signs include granule loss (dark spots on shingles), dents on metal components, cracked shingles, and dented gutters. We recommend professional inspection after any hail event in Moore County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Texas policies cover hail damage during your policy period. File within 1-2 years. We document every impact and advocate for full coverage. Most homeowners pay only their deductible.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof repair cost in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Costs vary by roof size and damage. For insurance claims, most pay only their deductible. Full replacements in Dumas typically range $7,000-$14,000. We provide detailed Xactimate estimates.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Dumas is about 49 miles from our Amarillo headquarters. We offer 24/7 emergency response and can typically reach Dumas within about 1 hour for urgent situations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you serve agricultural buildings in Moore County?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we work with both residential and commercial/agricultural properties throughout Moore County. From homes in Dumas to outbuildings and facilities in surrounding areas, we have the experience to handle various roofing types.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services in Dumas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/storm-damage-repair-dumas/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
                <p className="text-gray-600">Wind, rain, and debris damage restoration</p>
              </a>
              <a href="/roof-replacement-dumas/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Roof Replacement</h3>
                <p className="text-gray-600">Complete roof replacement services</p>
              </a>
              <a href="/roof-inspections-dumas/" className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 hover:scale-105">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600">No-obligation damage assessments</p>
              </a>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Hail Damage in Dumas? We're Here to Help.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Dumas property owners. Expert repairs with comprehensive warranties. Insurance claim assistance from start to finish.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}
