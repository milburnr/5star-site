import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Inspections Odessa TX | 5 Star Roofing',
  description: "Professional roof inspections in Odessa TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Inspections", url: "/roof-inspections/" },
        { name: "Odessa", url: "/roof-inspections-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-odessa/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa Roof Inspections",
        "image": "https://5starroofingpros.com/images/roof-inspection-2.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-inspections-odessa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof inspections in Odessa TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Roof Inspection",
            "name": "Roof Inspections in Odessa",
            "description": "Professional roof inspections services in Odessa, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Odessa",
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
        "mainEntity": [{"@type":"Question","name":"How much does a roof inspection cost in Odessa?","acceptedAnswer":{"@type":"Answer","text":"We provide FREE roof inspections in Odessa with no obligation. Comprehensive reports include photos, damage documentation, and recommendations."}},{"@type":"Question","name":"How long does a roof inspection take?","acceptedAnswer":{"@type":"Answer","text":"Most residential inspections take 30-60 minutes. Commercial buildings require 1-3 hours depending on size and complexity."}},{"@type":"Question","name":"When should I get my roof inspected?","acceptedAnswer":{"@type":"Answer","text":"After any hailstorm, before buying/selling property, annually for maintenance, or if you notice leaks, missing shingles, or interior water stains."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-2-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Inspections in <span className="text-brand-gold-light">Odessa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof inspections throughout Odessa. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Odessa's Comprehensive Roof Inspection Authority</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof inspections serving Odessa, the birthplace of Texas oil. Our expertise extends beyond standard weather damage to include the unique challenges of petroleum refining operations, chemical processing facilities, and the complex mix of industrial and residential properties that define this historic energy hub.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">Our certified inspectors understand how Odessa's petroleum refining heritage affects local air quality and building materials. From the historic downtown district to the sprawling suburban developments in West Odessa, we've assessed roofing systems impacted by everything from refinery emissions to the unique wind patterns created by the Llano Estacado escarpment.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Every inspection addresses Odessa's specific environmental challenges: petrochemical air quality impacts, limestone caliche soil effects on foundation settlement, and the interaction between industrial operations and residential neighborhoods that creates unique maintenance requirements throughout the city.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-purple-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Odessa's Unique Environmental Impact Assessment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏭 Refinery and Chemical Plant Effects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Sulfur Compound Corrosion:</strong> Assessment of refinery emission damage to metal roofing components</li>
                  <li><strong>Petrochemical Deposition:</strong> Detection of hydrocarbon residue buildup on roofing surfaces</li>
                  <li><strong>Acid Rain Impact:</strong> Chemical precipitation effects from industrial stack emissions</li>
                  <li><strong>Catalyst Particulate:</strong> Fine particle contamination from fluid catalytic cracking units</li>
                  <li><strong>Mercaptan Exposure:</strong> Odor compound effects on synthetic roofing materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🪨 Geological Foundation Challenges</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Limestone Caliche Stability:</strong> Foundation movement assessment on West Texas geology</li>
                  <li><strong>Escarpment Wind Effects:</strong> Unique wind loading from Llano Estacado geographic features</li>
                  <li><strong>Soil Alkali Content:</strong> High-pH soil impact on foundation and structural materials</li>
                  <li><strong>Subsurface Oil Activity:</strong> Historical drilling impact on ground stability</li>
                  <li><strong>Aquifer Fluctuations:</strong> Groundwater level changes affecting foundation support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌬️ Air Quality and Visibility Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Particulate Loading:</strong> Industrial dust accumulation on roofing systems</li>
                  <li><strong>Ozone Degradation:</strong> Ground-level ozone effects on rubber and plastic components</li>
                  <li><strong>Visibility Reduction:</strong> Impact assessment during poor air quality episodes</li>
                  <li><strong>Chemical Odor Events:</strong> Acute exposure episodes and material stress testing</li>
                  <li><strong>Stack Plume Direction:</strong> Prevailing wind pattern analysis for contamination sources</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏘️ Mixed-Use Development Impacts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Industrial-Residential Interface:</strong> Differential exposure levels within city limits</li>
                  <li><strong>Transportation Corridor Effects:</strong> Highway and rail traffic vibration and pollution</li>
                  <li><strong>Commercial District Variation:</strong> Different contamination patterns across city zones</li>
                  <li><strong>Historical District Considerations:</strong> Older construction materials and compatibility issues</li>
                  <li><strong>Utility Corridor Access:</strong> Pipeline and electrical right-of-way maintenance impacts</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Insurance Expertise for Odessa Properties</h2>
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Petroleum Industry Insurance Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Environmental Contamination Documentation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Industrial pollution vs. storm damage differentiation</li>
                    <li>• Air quality correlation with material degradation rates</li>
                    <li>• Third-party environmental liability assessment</li>
                    <li>• Refinery incident correlation with property damage</li>
                    <li>• Clean Air Act compliance impact documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Historical District and Zoning Complexity</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mixed commercial-residential coverage requirements</li>
                    <li>• Historic preservation compliance and material restrictions</li>
                    <li>• Petroleum heritage site special considerations</li>
                    <li>• Municipal utility service impact documentation</li>
                    <li>• Economic development zone property value variations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Common Odessa Insurance Claim Challenges</h3>
              <div className="space-y-4">
                <p className="text-gray-700"><strong>Industrial vs. Weather Damage Classification:</strong> Distinguishing between normal industrial exposure and acute weather damage requires specialized documentation. Our inspectors use forensic techniques to identify damage patterns specific to each cause, ensuring proper insurance coverage determination.</p>
                <p className="text-gray-700"><strong>Air Quality Event Correlation:</strong> Odessa occasionally experiences severe air quality episodes that can damage roofing materials. We maintain relationships with local air quality monitoring agencies to correlate material damage with documented pollution events for insurance claims.</p>
                <p className="text-gray-700"><strong>Foundation Settlement vs. Weather Impact:</strong> Odessa's geology can cause foundation movement that affects roof structure. We specialize in differentiating between normal geological settlement and weather-related structural damage to ensure appropriate insurance coverage.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Strategic Inspection Timing for Odessa's Climate and Industry</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌿 Spring Air Quality Assessment (March-May)</h3>
                <p className="text-gray-700 mb-4"><strong>Post-Winter Industrial Restart:</strong> Many industrial facilities undergo maintenance shutdowns in winter, resuming full operations in spring. This creates unique air quality conditions as systems restart.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Winter shutdown maintenance completion verification</li>
                  <li>• Industrial emission resumption impact assessment</li>
                  <li>• Spring storm preparation in industrial environment</li>
                  <li>• Refinery turnaround schedule coordination for maintenance planning</li>
                  <li>• Air quality monitoring correlation with material inspection</li>
                </ul>
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Industry Tip:</strong> Coordinate with refinery maintenance schedules for optimal air quality windows.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">☀️ Summer Heat and Ozone Season (June-August)</h3>
                <p className="text-gray-700 mb-4"><strong>Peak Environmental Stress:</strong> Odessa's summer heat combines with industrial emissions to create high ozone levels that accelerate material degradation. Critical assessment period for cumulative damage.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Heat-accelerated chemical reaction damage assessment</li>
                  <li>• Ozone episode correlation with material degradation</li>
                  <li>• Industrial flare activity impact during peak demand</li>
                  <li>• UV exposure intensification in clear, dry air conditions</li>
                  <li>• Cooling system stress testing and efficiency optimization</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-orange-800"><strong>Environmental Note:</strong> Monitor air quality alerts for optimal inspection timing.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🍂 Fall Comprehensive Evaluation (September-November)</h3>
                <p className="text-gray-700 mb-4"><strong>Industrial Activity Stabilization:</strong> Fall brings more stable industrial operations and moderate weather, ideal for comprehensive annual assessments and major maintenance planning.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Annual cumulative environmental impact assessment</li>
                  <li>• Industrial facility winterization preparation coordination</li>
                  <li>• Property value assessment for tax and insurance purposes</li>
                  <li>• Major maintenance project planning and contractor scheduling</li>
                  <li>• Insurance claim deadline management and documentation review</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Planning Advantage:</strong> Best contractor availability and stable weather conditions.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">❄️ Winter Industry Maintenance Period (December-February)</h3>
                <p className="text-gray-700 mb-4"><strong>Industrial Facility Shutdowns:</strong> Many refineries and chemical plants conduct major maintenance during winter months, providing cleaner air conditions for detailed assessment work.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Clean air condition advantage for detailed material analysis</li>
                  <li>• Major repair and replacement project execution</li>
                  <li>• Industrial facility shutdown coordination for access</li>
                  <li>• Next year's maintenance planning and budget development</li>
                  <li>• Real estate transaction inspection scheduling</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-800"><strong>Air Quality Advantage:</strong> Reduced industrial emissions during maintenance shutdowns.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Odessa's Complex Environmental Landscape</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏭 Historic Petroleum Refining Center</h3>
                <p className="text-gray-700 mb-3">Odessa has been refining petroleum since 1929, creating a unique urban environment where residential neighborhoods exist alongside major industrial facilities. The legacy of decades of industrial operations has created specific air quality challenges that affect building materials differently than normal weathering.</p>
                <p className="text-gray-700"><strong>Specialized Assessment:</strong> We use historical air quality data and industrial incident records to correlate property damage with documented environmental events, providing defensible documentation for insurance claims and environmental liability assessments.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🌋 Llano Estacado Escarpment Effects</h3>
                <p className="text-gray-700 mb-3">Odessa sits on the northern edge of the Llano Estacado, creating unique topographical wind patterns and geological conditions. The escarpment creates wind acceleration zones and differential pressure areas that affect roofing systems differently than flat terrain locations.</p>
                <p className="text-gray-700"><strong>Geographical Analysis:</strong> Our inspections include topographical wind pattern analysis and geological stability assessment specific to escarpment locations, identifying damage patterns unique to Odessa's geographic position.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">🏛️ Historic Downtown Mixed Development</h3>
                <p className="text-gray-700 mb-3">Odessa's downtown combines historic buildings from the oil boom era with modern commercial and residential development. This creates unique challenges in material compatibility, building code compliance, and environmental exposure variations within small geographic areas.</p>
                <p className="text-gray-700"><strong>Heritage Considerations:</strong> We specialize in historic building assessment, material compatibility analysis, and preservation-compliant repair recommendations that maintain historical integrity while addressing modern environmental challenges.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Advanced Environmental Monitoring for Industrial Conditions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🌡️</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Air Quality Correlation Systems</h3>
                <p className="text-gray-700">Real-time air quality monitoring equipment correlates material degradation with documented pollution events. Essential for distinguishing between normal aging and industrial exposure damage in insurance documentation.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">⚗️</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Chemical Residue Analysis</h3>
                <p className="text-gray-700">Specialized laboratory analysis identifies specific industrial contaminants on roofing materials. Provides scientific evidence for environmental damage claims and helps establish liability for contamination sources.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Historical Incident Database</h3>
                <p className="text-gray-700">Comprehensive database of industrial incidents, air quality events, and weather patterns provides timeline correlation for damage assessment. Critical for establishing causation in complex environmental cases.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does a roof inspection cost in Odessa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide FREE roof inspections in Odessa with no obligation. Comprehensive reports include photos, damage documentation, and recommendations.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Odessa property owners. Expert roof inspections with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}