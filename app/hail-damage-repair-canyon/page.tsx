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
  title: 'Hail Damage Repair Canyon TX | Randall County Experts | 5 Star Roofing',
  description: "Canyon's trusted hail damage repair specialists. 24/7 emergency response, insurance claim assistance, Class 4 impact-resistant shingles. Serving Randall County and WTAMU area since 2014. Free inspections. Call (806) 622-6041.",
};

export default function HailDamageRepairCanyonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Canyon", url: "/hail-damage-repair-canyon/" }
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
              "name": "Canyon",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Randall County, Texas"
              }
            },
            "description": "Expert hail damage roof repair in Canyon, TX. Serving WTAMU area and Randall County with 24/7 emergency response and insurance claim assistance."
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
              {"@type":"Question","name":"How quickly can you respond to Canyon?","acceptedAnswer":{"@type":"Answer","text":"Canyon is just 17 miles from our Amarillo headquarters—we can typically reach you within 30 minutes for emergencies. We offer 24/7 emergency response."}}
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
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Canyon, the county seat of Randall County, is a vibrant college town of nearly 15,000 residents that serves as the southern anchor of the Amarillo metropolitan area. Home to West Texas A&M University and the stunning Panhandle-Plains Historical Museum, Canyon combines small-town charm with big-time weather challenges.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The proximity to Palo Duro Canyon—the second-largest canyon in the United States—creates unique weather dynamics. Cold air pooling in the canyon can intensify storms as they move across the Panhandle. Randall County experiences the same severe hail and wind events that affect the entire region, with storms capable of producing damaging hail multiple times per year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As the closest major service area to our Amarillo headquarters, Canyon residents enjoy the fastest response times of any community we serve. When hail strikes, we can typically have a crew on-site within 30 minutes for emergencies. We've helped hundreds of Canyon homeowners, landlords, and WTAMU-area property owners protect their investments with expert repairs.
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
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Canyon Hail Damage FAQs</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Canyon roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Signs include granule loss, dents on metal components, cracked shingles, and dented gutters. Canyon's weather patterns can cause damage not visible from the ground—we recommend professional inspection after any hail event.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Texas policies cover hail damage. File within 1-2 years of the event. We document every impact and advocate for full coverage. Most homeowners pay only their deductible.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you serve WTAMU student housing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we work with landlords, property managers, and homeowners throughout Canyon including the university area. We understand the need for efficient repairs that minimize disruption to tenants.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Canyon is just 17 miles from our Amarillo headquarters—we can typically reach you within 30 minutes for emergencies. We offer 24/7 emergency response including emergency tarping to prevent water damage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof repair cost in Canyon?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Costs vary by roof size and damage. For insurance claims, most pay only their deductible. Full replacements typically range $7,000-$14,000 for average Canyon homes. We provide detailed Xactimate estimates.</AccordionContent>
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
