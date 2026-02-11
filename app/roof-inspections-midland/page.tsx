import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Inspections Midland TX | 5 Star Roofing',
  description: "Professional roof inspections in Midland TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Inspections", url: "/roof-inspections/" },
        { name: "Midland", url: "/roof-inspections-midland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-midland/#localbusiness",
        "name": "5 Star Commercial Roofing - Midland Roof Inspections",
        "image": "https://5starroofingpros.com/images/roof-inspection-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-inspections-midland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Midland,_Texas", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "description": "Professional roof inspections in Midland TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Roof Inspection",
            "name": "Roof Inspections in Midland",
            "description": "Professional roof inspections services in Midland, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Midland",
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
        "mainEntity": [{"@type":"Question","name":"How much does a roof inspection cost in Midland?","acceptedAnswer":{"@type":"Answer","text":"We provide FREE roof inspections in Midland with no obligation. Comprehensive reports include photos, damage documentation, and recommendations."}},{"@type":"Question","name":"How long does a roof inspection take?","acceptedAnswer":{"@type":"Answer","text":"Most residential inspections take 30-60 minutes. Commercial buildings require 1-3 hours depending on size and complexity."}},{"@type":"Question","name":"When should I get my roof inspected?","acceptedAnswer":{"@type":"Answer","text":"After any hailstorm, before buying/selling property, annually for maintenance, or if you notice leaks, missing shingles, or interior water stains."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-5-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Inspections in <span className="text-brand-gold-light">Midland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof inspections throughout Midland. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">24/7</div><div className="text-brand-brown font-semibold text-lg">Emergency Service</div></div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Permian Basin's Premier Roof Inspection Experts</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof inspections serving Midland, the heart of America's most productive oil field. The Permian Basin's industrial environment creates unique roofing challenges, from hydrogen sulfide corrosion to sand abrasion, that require specialized inspection expertise and industry-specific knowledge.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">Our certified inspectors understand how oil and gas operations affect roofing systems, from flare emissions that accelerate material degradation to truck traffic vibrations that compromise structural integrity. We've inspected everything from executive homes in the Grassland Estates to industrial complexes in the Spraberry Trend.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Every inspection includes assessment of industrial contamination impacts, specialized ventilation requirements for oil field worker housing, and compliance with both residential and industrial safety standards required in the Permian Basin's mixed-use development patterns.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Permian Basin Industrial Impact Assessment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏭 Chemical Exposure Analysis</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Hydrogen Sulfide Corrosion:</strong> Assessment of H2S damage to metal roofing and fasteners</li>
                  <li><strong>Petrochemical Residue:</strong> Detection of hydrocarbon contamination on roofing materials</li>
                  <li><strong>Flare Gas Impact:</strong> Heat and chemical damage from nearby well flaring operations</li>
                  <li><strong>VOC Degradation:</strong> Volatile organic compound effects on synthetic roofing materials</li>
                  <li><strong>Salt Water Disposal:</strong> Brine water contamination from disposal well operations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🚛 Industrial Traffic Effects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vibration Damage:</strong> Structural loosening from heavy truck traffic and drilling operations</li>
                  <li><strong>Dust Load Assessment:</strong> Caliche road dust accumulation and filtration impacts</li>
                  <li><strong>Freight Impact:</strong> Damage from oversized load transport on nearby roadways</li>
                  <li><strong>Equipment Noise:</strong> Sound vibration effects on roof attachment systems</li>
                  <li><strong>Air Quality Impact:</strong> Industrial particulate effects on material longevity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌵 Desert Environment Challenges</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Sandstorm Abrasion:</strong> Wind-driven sand damage to protective coatings and surfaces</li>
                  <li><strong>UV Intensification:</strong> High-altitude, low-humidity UV exposure acceleration</li>
                  <li><strong>Thermal Shock:</strong> Extreme temperature swings in desert climate conditions</li>
                  <li><strong>Flash Flood Drainage:</strong> Adequate drainage for sudden desert storm runoff</li>
                  <li><strong>Caliche Dust Infiltration:</strong> Alkaline dust impacts on roofing system components</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">⚡ Infrastructure Stress Factors</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Power Grid Fluctuations:</strong> Electrical surge damage to powered roof components</li>
                  <li><strong>Water Pressure Variations:</strong> Municipal system stress affecting roof-mounted equipment</li>
                  <li><strong>Communication Tower Proximity:</strong> RF interference and guy-wire wind load effects</li>
                  <li><strong>Pipeline Right-of-Way:</strong> Maintenance access impact on property boundaries</li>
                  <li><strong>Utility Overload:</strong> Infrastructure strain from rapid development and population growth</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Insurance Knowledge for Midland Properties</h2>
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Oil Field Industry Insurance Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Industrial Contamination Documentation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Chemical exposure damage vs. normal weathering</li>
                    <li>• Third-party liability for industrial contamination</li>
                    <li>• Environmental impact assessment requirements</li>
                    <li>• Specialized cleaning and restoration protocols</li>
                    <li>• Worker safety compliance during inspection and repair</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Commercial and Residential Coverage</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mixed-use property coverage complexities</li>
                    <li>• High-value home specialization for oil executives</li>
                    <li>• Temporary housing and man camp facility requirements</li>
                    <li>• Rapid appreciation and replacement cost adjustments</li>
                    <li>• Business interruption coverage for rental properties</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Unique Midland Insurance Challenges</h3>
              <div className="space-y-4">
                <p className="text-gray-700"><strong>Industrial vs. Weather Damage:</strong> Distinguishing between normal wear from oil field operations and legitimate storm damage requires specialized knowledge. We document the specific characteristics of each damage type, ensuring you receive proper coverage under appropriate policy provisions.</p>
                <p className="text-gray-700"><strong>Rapid Development Impact:</strong> Midland's explosive growth has led to building code changes and infrastructure challenges that affect coverage. We stay current with local building requirements and help navigate coverage issues related to new construction in established neighborhoods.</p>
                <p className="text-gray-700"><strong>Environmental Contamination Exclusions:</strong> Many standard policies exclude damage from industrial contamination. Our inspections carefully differentiate between covered weather damage and excluded environmental impacts, protecting your claim eligibility.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Optimal Inspection Scheduling for Permian Basin Conditions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌸 Spring Evaluation (March-April)</h3>
                <p className="text-gray-700 mb-4"><strong>Post-Winter Assessment:</strong> Midland's moderate winter still includes freeze-thaw cycles and occasional ice storms. Spring inspections identify winter damage before the intense summer heat begins.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Freeze-thaw cycle damage assessment on desert-adapted materials</li>
                  <li>• Winter wind damage evaluation from high plains storms</li>
                  <li>• Industrial contamination accumulation review</li>
                  <li>• Sandstorm damage from spring weather patterns</li>
                  <li>• Pre-summer maintenance and energy efficiency optimization</li>
                </ul>
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Best Practice:</strong> Schedule before oil field activity peaks with spring drilling campaigns.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">☀️ Summer Monitoring (May-August)</h3>
                <p className="text-gray-700 mb-4"><strong>Extreme Heat Impact:</strong> Midland's summer temperatures regularly exceed 105°F with intense UV exposure accelerated by low humidity and high altitude. Critical period for thermal damage assessment.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Thermal expansion and material fatigue evaluation</li>
                  <li>• UV degradation assessment in desert conditions</li>
                  <li>• Energy efficiency and cooling load optimization</li>
                  <li>• Heat-accelerated chemical contamination effects</li>
                  <li>• Summer storm damage from isolated severe thunderstorms</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-orange-800"><strong>Industry Note:</strong> Coordinate with reduced oil field activity during extreme heat periods.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🍂 Fall Assessment (September-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Annual Comprehensive Review:</strong> Fall provides optimal conditions for thorough inspection with moderate temperatures and reduced industrial activity before winter equipment maintenance begins.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Complete annual damage compilation and trending analysis</li>
                  <li>• Industrial contamination impact assessment</li>
                  <li>• Winter weather preparation in desert climate</li>
                  <li>• End-of-year maintenance planning and budgeting</li>
                  <li>• Insurance claim deadline management and documentation</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Timing Advantage:</strong> Contractor availability improves as summer work demand decreases.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">❄️ Winter Planning (December-February)</h3>
                <p className="text-gray-700 mb-4"><strong>Strategic Maintenance Period:</strong> Midland's mild winters allow for maintenance work that would be impossible in northern climates. Optimal time for major projects and preventive work.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Major repair and replacement project planning</li>
                  <li>• Real estate transaction inspection requirements</li>
                  <li>• Annual maintenance contract establishment</li>
                  <li>• Industrial impact mitigation system installation</li>
                  <li>• Next year's storm season preparation and planning</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-800"><strong>Market Advantage:</strong> Best pricing and availability during oil field maintenance season.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Unique Permian Basin Environmental Factors</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏭 World's Most Active Oil Field</h3>
                <p className="text-gray-700 mb-3">The Permian Basin produces over 5 million barrels per day, creating a unique industrial environment. Hydrogen sulfide gas, benzene vapors, and fine particulate matter from drilling operations create corrosive conditions that accelerate roofing material degradation at rates 3-4 times normal.</p>
                <p className="text-gray-700"><strong>Specialized Assessment:</strong> We use gas detection equipment and chemical analysis to identify industrial contamination damage, ensuring proper documentation for insurance claims and environmental liability protection.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌪️ Desert Sandstorm Environment</h3>
                <p className="text-gray-700 mb-3">Midland experiences frequent sandstorms known locally as "haboobs" that can reduce visibility to zero and drive sand at velocities exceeding 70 mph. The abrasive action strips protective coatings and granules from roofing materials more rapidly than typical wind damage.</p>
                <p className="text-gray-700"><strong>Inspection Focus:</strong> We evaluate sandblasting damage patterns, granule loss acceleration, and coating degradation that's unique to desert environments, documenting the difference between normal aging and accelerated environmental damage.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">💸 Boom-Bust Economic Cycles</h3>
                <p className="text-gray-700 mb-3">Midland's oil-dependent economy creates unique property maintenance challenges. During boom periods, material and labor costs skyrocket while availability plummets. During busts, property values drop but maintenance becomes more critical due to extended ownership periods.</p>
                <p className="text-gray-700"><strong>Strategic Planning:</strong> We help property owners plan maintenance timing based on economic cycles, identifying critical repairs that can't wait and optimizing major projects for cost-effective timing within market cycles.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Equipment for Industrial Environment Assessment</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🔬</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Chemical Contamination Detection</h3>
                <p className="text-gray-700">Advanced chemical analysis equipment detects hydrogen sulfide damage, hydrocarbon residue, and other industrial contamination that affects roofing material integrity and insurance claim validity in oil field environments.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Vibration Monitoring Systems</h3>
                <p className="text-gray-700">Seismic monitoring equipment measures vibration damage from nearby drilling, fracking operations, and heavy truck traffic. Essential for documenting industrial impact on structural integrity in Permian Basin locations.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🌡️</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Environmental Monitoring</h3>
                <p className="text-gray-700">Multi-parameter environmental sensors track temperature, humidity, air quality, and chemical exposure levels. Provides baseline data for correlating environmental conditions with material degradation rates.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does a roof inspection cost in Midland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide FREE roof inspections in Midland with no obligation. Comprehensive reports include photos, damage documentation, and recommendations.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Midland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Midland property owners. Expert roof inspections with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}