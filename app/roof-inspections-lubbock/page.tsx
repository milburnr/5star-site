import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-lubbock/' },
  title: 'Roof Inspections Lubbock TX | 5 Star Roofing',
  description: "Professional roof inspections in Lubbock TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Inspections", url: "/roof-inspections/" },
        { name: "Lubbock", url: "/roof-inspections-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-lubbock/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Roof Inspections",
        "image": "https://5starroofingpros.com/images/roof-inspection-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-inspections-lubbock/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "description": "Professional roof inspections in Lubbock TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Roof Inspection",
            "name": "Roof Inspections in Lubbock",
            "description": "Professional roof inspections services in Lubbock, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lubbock",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roof Inspections Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspections Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspections Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does a roof inspection cost in Lubbock?","acceptedAnswer":{"@type":"Answer","text":"We provide FREE roof inspections in Lubbock with no obligation. Comprehensive reports include photos, damage documentation, and recommendations."}},{"@type":"Question","name":"How long does a roof inspection take?","acceptedAnswer":{"@type":"Answer","text":"Most residential inspections take 30-60 minutes. Commercial buildings require 1-3 hours depending on size and complexity."}},{"@type":"Question","name":"When should I get my roof inspected?","acceptedAnswer":{"@type":"Answer","text":"After any hailstorm, before buying/selling property, annually for maintenance, or if you notice leaks, missing shingles, or interior water stains."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-38-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Inspections in <span className="text-brand-gold-light">Lubbock</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof inspections throughout Lubbock. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Lubbock's Premier Roof Inspection Service</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof inspections serving Lubbock, the Hub City of the South Plains. Located in the heart of Hail Alley, Lubbock experiences some of Texas's most severe weather patterns, from devastating supercells to relentless dust storms that can compromise roofing systems in ways unique to West Texas.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">Our certified inspectors understand Lubbock's clay soil expansion issues, the impact of Texas Tech University's urban heat island effect, and how the Llano Estacado's flat terrain creates wind patterns that affect roofing differently than other regions. We've inspected thousands of homes from historic Overton to new developments in Southwest Lubbock.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Every inspection meets Texas Department of Insurance requirements and includes specialized assessment protocols for Lubbock's unique challenges: caliche dust infiltration, cotton-farming particulate damage, and the region's famous "blue northers" that can drop temperatures 50 degrees in hours.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Lubbock Roof Inspection Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏚️ Foundation & Settlement Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Clay Soil Movement:</strong> Lubbock's expansive clay soils cause foundation shifts affecting roof structures</li>
                  <li><strong>Differential Settlement:</strong> Assessment of how foundation movement impacts roof plane integrity</li>
                  <li><strong>Structural Stress Points:</strong> Identification of stress concentration areas from soil movement</li>
                  <li><strong>Load Path Analysis:</strong> Verification of proper load transfer from roof to foundation</li>
                  <li><strong>Crack Pattern Assessment:</strong> Documentation of settlement-related damage patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌾 Agricultural Impact Assessment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Cotton Fiber Buildup:</strong> Removal needs and filtration system impacts during harvest season</li>
                  <li><strong>Pesticide Residue:</strong> Chemical impact on roofing materials and protective coatings</li>
                  <li><strong>Dust Accumulation:</strong> Caliche and agricultural dust effects on drainage and ventilation</li>
                  <li><strong>Seasonal Debris:</strong> Assessment of crop-related debris accumulation patterns</li>
                  <li><strong>Air Quality Impact:</strong> How particulate matter affects material degradation rates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌪️ Supercell Damage Detection</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Hail Impact Analysis:</strong> Specialized techniques for identifying softball-sized hail damage</li>
                  <li><strong>Microburst Assessment:</strong> Detection of straight-line wind damage patterns unique to the High Plains</li>
                  <li><strong>Tornado Proximity Effects:</strong> Assessment of pressure differential damage from nearby tornadoes</li>
                  <li><strong>Multiple Storm Events:</strong> Documentation of cumulative damage from Lubbock's active storm season</li>
                  <li><strong>Atmospheric Pressure Changes:</strong> Impact assessment of rapid pressure fluctuations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌡️ Temperature Extreme Analysis</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Rapid Temperature Drops:</strong> Blue norther impact on material expansion and contraction</li>
                  <li><strong>Heat Island Effects:</strong> Urban heat concentration in central Lubbock areas</li>
                  <li><strong>Freeze-Thaw Cycles:</strong> Assessment of moisture damage from ice formation</li>
                  <li><strong>Thermal Shock:</strong> Material stress from extreme temperature variations</li>
                  <li><strong>Solar Radiation:</strong> UV damage assessment in high-altitude, low-humidity conditions</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Claim Expertise for Lubbock Properties</h2>
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Lubbock Insurance Market Knowledge</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Local Adjuster Relationships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Established relationships with Lubbock-based adjusters</li>
                    <li>• Understanding of regional claim processing patterns</li>
                    <li>• Knowledge of local insurance company preferences</li>
                    <li>• Familiarity with Lubbock claim settlement histories</li>
                    <li>• Experience with Texas Windstorm Association requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Lubbock-Specific Damage Documentation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High Plains weather pattern verification</li>
                    <li>• Agricultural impact damage classification</li>
                    <li>• Foundation settlement correlation documentation</li>
                    <li>• Supercell storm tracking and verification</li>
                    <li>• Regional building code compliance verification</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Common Lubbock Insurance Challenges</h3>
              <div className="space-y-4">
                <p className="text-gray-700"><strong>Agricultural vs. Storm Damage:</strong> Insurance companies often attempt to classify damage as pre-existing agricultural impact rather than storm damage. Our inspectors document the specific characteristics of each damage type, ensuring proper coverage under weather-related policy provisions.</p>
                <p className="text-gray-700"><strong>Foundation Settlement Exclusions:</strong> Many policies exclude foundation-related damage. We specialize in distinguishing between weather-caused structural damage and normal foundation movement, ensuring you receive coverage for legitimate storm impacts to your roof structure.</p>
                <p className="text-gray-700"><strong>Dust Storm vs. Hail Damage:</strong> Lubbock's frequent dust storms can mask hail damage or be incorrectly blamed for weather-related damage. We use forensic inspection techniques to properly identify and document the actual cause of roofing damage for insurance purposes.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Strategic Inspection Timing for Lubbock Weather Patterns</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">⛈️ Pre-Storm Season (February-March)</h3>
                <p className="text-gray-700 mb-4"><strong>Critical Preparation Period:</strong> Lubbock's severe weather season typically begins in March with peak activity April-June. Early inspections identify vulnerabilities before the most dangerous period.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Winter damage assessment and repair prioritization</li>
                  <li>• Structural integrity verification before storm season</li>
                  <li>• Insurance deductible and coverage planning</li>
                  <li>• Identification of loose materials that could become projectiles</li>
                  <li>• Drainage system optimization for supercell rainfall</li>
                </ul>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="text-sm text-red-800"><strong>Lubbock Tip:</strong> Schedule before Tech's spring break when contractors become overwhelmed with storm damage calls.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌩️ Peak Storm Season (April-June)</h3>
                <p className="text-gray-700 mb-4"><strong>Active Monitoring Period:</strong> This is Lubbock's most dangerous weather period, with supercells producing giant hail and violent winds. Immediate post-storm inspections are critical.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 24-48 hour post-storm damage inspections</li>
                  <li>• Rapid insurance claim initiation and documentation</li>
                  <li>• Cumulative damage assessment from multiple events</li>
                  <li>• Priority scheduling during high-demand periods</li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-sm text-yellow-800"><strong>Insurance Note:</strong> File claims quickly - Lubbock's high claim volume can slow processing during peak season.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">☀️ Summer Assessment (July-August)</h3>
                <p className="text-gray-700 mb-4"><strong>Heat Damage Evaluation:</strong> Lubbock's intense summer heat and UV exposure cause accelerated aging. This period focuses on thermal damage and energy efficiency.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• UV degradation and thermal cycling damage assessment</li>
                  <li>• Cotton harvest preparation and filtration system check</li>
                  <li>• Energy efficiency optimization for cooling costs</li>
                  <li>• Attic ventilation adequacy in extreme heat</li>
                  <li>• Mid-summer storm damage documentation</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-orange-800"><strong>Lubbock Specialty:</strong> We inspect during cotton harvest season to assess agricultural particulate impacts.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🍂 Post-Season Analysis (September-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Comprehensive Assessment:</strong> Fall inspections evaluate the full impact of storm season and prepare for winter weather, including Lubbock's occasional ice events.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Complete storm season damage compilation</li>
                  <li>• Final insurance claim opportunities before deadlines</li>
                  <li>• Cotton fiber and dust removal from gutters and drains</li>
                  <li>• Winter weather preparation and insulation assessment</li>
                  <li>• Annual maintenance planning and contractor scheduling</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Planning Tip:</strong> Best time to schedule major repairs - mild weather and contractor availability.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Lubbock's Challenging Weather Environment</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌪️ Supercell Capital</h3>
                <p className="text-gray-700 mb-3">Lubbock sits in the most active part of Hail Alley, where the dry line meets moist Gulf air creating explosive thunderstorm development. The city averages 12-15 severe hail events annually, with many producing tennis ball to softball-sized hail.</p>
                <p className="text-gray-700"><strong>Inspection Specialty:</strong> We use meteorological data correlation to verify storm dates and intensities, providing bulletproof documentation for insurance claims that can withstand adjuster scrutiny and potential legal challenges.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">💨 High Plains Wind Corridor</h3>
                <p className="text-gray-700 mb-3">The Llano Estacado's flat terrain creates a natural wind corridor, with Lubbock experiencing sustained winds of 20+ mph regularly and gusts exceeding 100 mph during severe events. The lack of natural windbreaks means every structure faces maximum wind exposure.</p>
                <p className="text-gray-700"><strong>Inspection Focus:</strong> We evaluate wind uplift patterns, edge detail failure, and progressive loosening that occurs over multiple high-wind events. Our assessments include recommendations for enhanced wind-resistance upgrades.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌾 Agricultural Environment Impact</h3>
                <p className="text-gray-700 mb-3">Lubbock County produces more cotton than any other county in America. Harvest season creates airborne fiber and particulate loads that can clog drainage systems, impact air filtration, and accelerate material degradation through chemical exposure.</p>
                <p className="text-gray-700"><strong>Inspection Protocol:</strong> We assess agricultural impact damage separately from weather damage, ensuring proper insurance classification and identifying maintenance needs specific to farming community properties.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Advanced Diagnostic Equipment for Lubbock Conditions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Weather Correlation Systems</h3>
                <p className="text-gray-700">Real-time access to Texas Tech's weather monitoring network provides precise storm timing and intensity data, crucial for correlating damage events with specific weather occurrences in insurance documentation.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🔬</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Particulate Analysis</h3>
                <p className="text-gray-700">Specialized equipment for analyzing agricultural and dust contamination in roofing systems. Essential for distinguishing between environmental wear and storm damage in Lubbock's farming environment.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Foundation Monitoring</h3>
                <p className="text-gray-700">Laser level systems and GPS surveying equipment detect foundation movement and settlement patterns that affect roof structure integrity - critical in Lubbock's expansive clay soil conditions.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does a roof inspection cost in Lubbock?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide FREE roof inspections in Lubbock with no obligation. Comprehensive reports include photos, damage documentation, and recommendations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does a roof inspection take?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most residential inspections take 30-60 minutes. Commercial buildings require 1-3 hours depending on size and complexity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I get my roof inspected?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">After any hailstorm, before buying/selling property, annually for maintenance, or if you notice leaks, missing shingles, or interior water stains.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Lubbock Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Lubbock property owners. Expert roof inspections with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}