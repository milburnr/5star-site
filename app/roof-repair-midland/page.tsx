import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "Roof Repair Midland TX | Permian Basin Expert Service | Free Inspection",
  description: "Professional roof repair in Midland TX. Desert climate specialists, oil industry housing experts, 24/7 emergency service. Call (806) 622-6041",
};

export default function RoofRepairMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Repair", url: "/roof-repair/" },
        { name: "Midland", url: "/roof-repair-midland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-midland/#localbusiness",
        "name": "5 Star Commercial Roofing - Midland Roof Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/roof-repair-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-repair-midland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": [
          { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Midland,_Texas", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" }},
          { "@type": "AdministrativeArea", "name": "Midland County", "containedInPlace": { "@type": "State", "name": "Texas" }}
        ],
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof repair in Midland TX serving Permian Basin oil industry communities with desert climate expertise and boom-cycle housing specialists."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Roof Repair",
        "provider": {
          "@type": "RoofingContractor", 
          "name": "5 Star Roofing",
          "url": "https://5starroofingpros.com"
        },
        "areaServed": [
          {"@type": "City", "name": "Midland", "containedInPlace": {"@type": "State", "name": "Texas"}},
          {"@type": "AdministrativeArea", "name": "Midland County", "containedInPlace": {"@type": "State", "name": "Texas"}}
        ],
        "description": "Comprehensive roof repair services for Midland's oil boom-era housing from 1970s-1990s, addressing desert climate damage and Permian Basin environmental challenges."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"How does Midland's desert climate affect roof longevity?","acceptedAnswer":{"@type":"Answer","text":"Midland's hot semi-arid climate with temperature extremes causes rapid thermal expansion/contraction, accelerated UV degradation, and brittle material failure. Desert conditions can reduce typical shingle life by 15-25% compared to moderate climates."}},
          {"@type":"Question","name":"What roofing challenges are unique to oil boom neighborhoods like Grassland Estates?","acceptedAnswer":{"@type":"Answer","text":"Oil boom developments from the 1970s-1990s often feature rushed construction with lower-grade materials. These neighborhoods may have inadequate ventilation, inferior flashing, and roofing systems that weren't designed for long-term desert exposure."}},
          {"@type":"Question","name":"Are roof repairs more expensive in Midland due to the oil economy?","acceptedAnswer":{"@type":"Answer","text":"Midland repair costs typically run 10-15% higher than regional averages during oil booms due to increased demand and higher wages. Minor repairs: $400-950, moderate damage: $950-2,900, extensive repairs: $2,900-6,800. During bust cycles, costs may normalize."}},
          {"@type":"Question","name":"How do I know if my Midland roof has desert climate damage?","acceptedAnswer":{"@type":"Answer","text":"Signs include: brittle, easily cracked shingles; excessive granule loss in gutters; curling shingle edges; failed caulk around penetrations; and visible thermal stress cracking. Professional inspection reveals hidden damage not visible from ground level."}},
          {"@type":"Question","name":"What building permits are needed for roof repairs in Midland County?","acceptedAnswer":{"@type":"Answer","text":"Repairs under $1,000 typically don't require permits in Midland. Structural work, electrical/plumbing involvement, or section replacements need city permits. We handle all documentation and ensure compliance with local building codes."}},
          {"@type":"Question","name":"What roofing materials perform best in Midland's desert conditions?","acceptedAnswer":{"@type":"Answer","text":"Cool-roof rated shingles with high solar reflectance perform best. Metal roofing excels in thermal cycling. Clay and concrete tiles work well but need structural support. Avoid dark colors and standard 3-tab shingles which fail quickly in desert heat."}}
        ]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/roof-repair-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Repair in <span className="text-brand-gold-light">Midland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Permian Basin Desert Specialists</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Expert roof repair for Midland's unique desert climate challenges. Serving oil industry communities, executive neighborhoods, and boom-cycle developments with specialized solutions for extreme heat, UV damage, and thermal stress.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">38</div><div className="text-brand-brown font-semibold text-lg">Median Home Age</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">110+</div><div className="text-brand-brown font-semibold text-lg">°F Summer Heat</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">300+</div><div className="text-brand-brown font-semibold text-lg">Sun Days/Year</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">🏜️🛢️☀️</div><div className="text-brand-brown font-semibold text-lg">Desert Oil Hub</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Why Midland Roofs Need Specialized Desert Care</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Midland's position as the Permian Basin's economic hub creates unique roofing challenges. With a median home construction year of 1986, many properties were built during oil boom periods when rapid development sometimes prioritized speed over long-term durability in desert conditions.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">The hot semi-arid climate delivers intense thermal stress with summer temperatures exceeding 110°F and over 300 days of sun annually. This creates rapid expansion and contraction cycles that stress materials, accelerated UV degradation that makes shingles brittle, and extreme heat that can cause premature failure of roofing components not rated for desert conditions.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Oil Boom Construction Issues</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 1970s-1990s rapid development with cost-cutting measures</li>
                  <li>• Inadequate ventilation systems in boom-era construction</li>
                  <li>• Lower-grade materials used during high-demand periods</li>
                  <li>• Executive homes with complex rooflines requiring specialized care</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Desert Climate Challenges</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Extreme thermal cycling causing material fatigue</li>
                  <li>• Intense UV radiation making shingles brittle</li>
                  <li>• Hot, dry winds accelerating granule loss</li>
                  <li>• Minimal precipitation causing drainage system neglect</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Midland Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-8">Each Midland neighborhood reflects different oil boom periods, with distinct roofing challenges based on construction era, material quality, and exposure to desert conditions.</p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Executive Districts</h3>
                <p className="text-gray-600 mb-4">Premium neighborhoods built during oil prosperity</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Grassland Estates - 1990s-2000s custom homes, complex rooflines</li>
                  <li>• Preston Place - Executive properties, premium materials</li>
                  <li>• Fairway Estate - Golf course community, tile roofs</li>
                  <li>• Wedgewood Park - Affluent area, architectural shingles</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Oil Boom Developments</h3>
                <p className="text-gray-600 mb-4">1970s-1980s rapid construction areas</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Northeast Midland - Boom-era housing, maintenance needs</li>
                  <li>• Greenwood - 1980s suburban development</li>
                  <li>• Holiday Hill - Mid-range homes, aging roofing systems</li>
                  <li>• Wilshire Park - Family neighborhoods, ventilation issues</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Modern Communities</h3>
                <p className="text-gray-600 mb-4">2000s+ developments with improved systems</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• The Preserve - Mixed-use development, energy-efficient design</li>
                  <li>• Vintage Park - New construction, proper ventilation</li>
                  <li>• Rock Creek - Contemporary homes, desert-rated materials</li>
                  <li>• Cimmaron - Planned community, HOA maintenance standards</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">Our Desert Climate-Specific Repair Process</h2>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Thermal Stress Analysis</h3>
                <p className="text-gray-700">Comprehensive assessment of expansion/contraction damage, thermal shock cracking, and material fatigue specific to Midland's extreme temperature cycles.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">UV Damage Evaluation</h3>
                <p className="text-gray-700">Specialized inspection for accelerated aging, granule loss, and brittleness caused by intense Permian Basin solar radiation and desert conditions.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Boom-Era Construction Expertise</h3>
                <p className="text-gray-700">Understanding of 1970s-1990s oil boom building practices, identifying common shortcuts and quality issues from rapid development periods.</p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Desert-Rated Solutions</h3>
                <p className="text-gray-700">Implementation of cool-roof technology, high-reflectance materials, and ventilation systems specifically engineered for extreme desert environments.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Common Midland Roof Repairs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Desert Climate Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Thermal Shock Cracking:</strong> Rapid temperature changes causing material failure</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>UV Brittleness:</strong> Shingles becoming fragile and easily damaged</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Granule Loss:</strong> Accelerated degradation from intense solar exposure</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Expansion Joint Failure:</strong> Sealant deterioration from thermal cycling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Boom-Era Construction Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Inadequate Ventilation:</strong> Poor airflow design in rapid-build homes</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Substandard Flashing:</strong> Cost-cutting materials from boom periods</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Fastener Failure:</strong> Incorrect installation during high-demand periods</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-2">•</span><strong>Executive Home Complexity:</strong> Intricate rooflines requiring specialized skills</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">Midland Oil Economy Roofing Costs</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">Midland's roofing costs fluctuate with oil prices and local economic conditions. During boom periods, increased demand and higher wages drive prices above regional averages. Desert-rated materials also command premium pricing.</p>
              
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Minor Repairs</h3>
                  <p className="text-3xl font-bold text-green-800 mb-2">$400-950</p>
                  <p className="text-gray-600">UV damage repair, thermal crack sealing, ventilation fixes</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-2">Moderate Damage</h3>
                  <p className="text-3xl font-bold text-yellow-800 mb-2">$950-2,900</p>
                  <p className="text-gray-600">Section replacement, cooling upgrades, boom-era corrections</p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Extensive Repairs</h3>
                  <p className="text-3xl font-bold text-red-800 mb-2">$2,900-6,800</p>
                  <p className="text-gray-600">Complete system overhaul, executive home restoration</p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Midland Market Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Oil boom periods increase labor costs 15-25% above regional averages</li>
                  <li>• Desert-rated materials command 10-20% premium over standard products</li>
                  <li>• Executive neighborhoods may require specialized contractors</li>
                  <li>• Bust cycles can create opportunities for planned improvements</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does Midland's desert climate affect roof longevity?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Midland's hot semi-arid climate with temperature extremes causes rapid thermal expansion/contraction, accelerated UV degradation, and brittle material failure. Desert conditions can reduce typical shingle life by 15-25% compared to moderate climates.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing challenges are unique to oil boom neighborhoods like Grassland Estates?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Oil boom developments from the 1970s-1990s often feature rushed construction with lower-grade materials. These neighborhoods may have inadequate ventilation, inferior flashing, and roofing systems that weren't designed for long-term desert exposure.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Are roof repairs more expensive in Midland due to the oil economy?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Midland repair costs typically run 10-15% higher than regional averages during oil booms due to increased demand and higher wages. Minor repairs: $400-950, moderate damage: $950-2,900, extensive repairs: $2,900-6,800. During bust cycles, costs may normalize.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Midland roof has desert climate damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Signs include: brittle, easily cracked shingles; excessive granule loss in gutters; curling shingle edges; failed caulk around penetrations; and visible thermal stress cracking. Professional inspection reveals hidden damage not visible from ground level.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What building permits are needed for roof repairs in Midland County?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Repairs under $1,000 typically don't require permits in Midland. Structural work, electrical/plumbing involvement, or section replacements need city permits. We handle all documentation and ensure compliance with local building codes.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials perform best in Midland's desert conditions?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Cool-roof rated shingles with high solar reflectance perform best. Metal roofing excels in thermal cycling. Clay and concrete tiles work well but need structural support. Avoid dark colors and standard 3-tab shingles which fail quickly in desert heat.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Storm Repair</h3>
                <p className="text-gray-600 mb-4">24/7 response for desert storm damage throughout Midland County</p>
                <a href="/emergency-roof-repair-midland/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Flat Roof Repair</h3>
                <p className="text-gray-600 mb-4">Commercial and residential flat roof solutions for oil industry buildings</p>
                <a href="/flat-roof-repair-midland-texas/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Cool Roof Installation</h3>
                <p className="text-gray-600 mb-4">Energy-efficient roofing systems for desert climate conditions</p>
                <a href="/energy-efficient-roofing-midland/" className="text-brand-gold font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving the Permian Basin Hub</h2>
            <p className="text-center text-gray-600 mb-8">Proudly serving Midland and surrounding Permian Basin communities with expert desert climate roofing solutions.</p>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Midland Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let desert climate extremes compromise your home's protection. Expert roof repair with oil industry experience and desert-rated solutions for Midland County properties.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}