import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Snyder TX | 5 Star Roofing',
  description: "Professional hail damage repair in Snyder TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function HailDamageRepairSnyderPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        { name: "Snyder", url: "/hail-damage-repair-snyder/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Hail Damage Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/hail-damage-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/hail-damage-repair-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional hail damage repair in Snyder TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How do I know if my Snyder roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance."}},{"@type":"Question","name":"Will insurance cover hail damage in Snyder?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate."}},{"@type":"Question","name":"Should I upgrade to Class 4 shingles after hail damage?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/hail-damage-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Hail Damage Repair in <span className="text-brand-gold-light">Snyder</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional hail damage repair throughout Snyder. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Snyder's Hail Damage Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional hail damage repair throughout Snyder and surrounding areas. We understand Texas weather challenges and specialize in comprehensive hail damage assessment, insurance claims, and expert repair solutions designed for West Texas conditions.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Since 2014, we've served Snyder with expert hail damage repairs, comprehensive insurance claim support, and outstanding customer service. We handle all permits, insurance documentation, and warranty services. Free hail damage inspections available.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Snyder's Hail Risk Profile</h3>
                <p className="text-gray-700 mb-4">Snyder's location in West Texas places it within a high-risk hail zone where significant hail events occur annually. The region experiences hailstones ranging from quarter-size to softball-size, with stones exceeding 2 inches in diameter recorded multiple times per year during peak storm seasons from March through September.</p>
                <p className="text-gray-700 mb-4">Scurry County's position at the intersection of major storm tracks creates conditions for supercell thunderstorms that produce large hail. These storms often move northeast from Mexico across West Texas, intensifying as they encounter atmospheric conditions favorable for hail formation and growth.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Understanding Hail Damage Types</h3>
                <p className="text-gray-700 mb-4">Hail damage varies significantly based on storm intensity, hailstone size, wind patterns, and roofing material types. Professional assessment identifies both obvious damage and subtle impacts that may not cause immediate leaks but compromise long-term roof integrity and warranty coverage.</p>
                <p className="text-gray-700 mb-4">West Texas hail events often include strong winds that create horizontal impact patterns, causing damage to vertical surfaces including siding, windows, and roof edges in addition to traditional top-down impacts on horizontal roof surfaces.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Professional Hail Damage Assessment Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl mb-4 text-blue-600">🔍</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Comprehensive Inspection</h3>
                <p className="text-gray-700 mb-4">Detailed roof surface examination identifying all hail impacts, granule loss patterns, exposed mat areas, and compromised shingle integrity. Professional measurement and documentation of damage severity and extent.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete roof surface inspection and mapping</li>
                  <li>• Impact measurement and severity assessment</li>
                  <li>• Granule loss pattern identification</li>
                  <li>• Flashing and accessory damage evaluation</li>
                  <li>• Interior inspection for leak evidence</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl mb-4 text-green-600">📸</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Professional Documentation</h3>
                <p className="text-gray-700 mb-4">High-resolution photography, detailed measurements, and comprehensive reporting designed for insurance claim submission. Professional-grade documentation ensures maximum claim approval rates.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• High-resolution damage photography</li>
                  <li>• Detailed written assessment reports</li>
                  <li>• Accurate measurements and calculations</li>
                  <li>• Before/after condition documentation</li>
                  <li>• Weather event correlation and verification</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl mb-4 text-orange-600">💼</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Insurance Claim Support</h3>
                <p className="text-gray-700 mb-4">Complete insurance claim assistance including adjuster meetings, supplement negotiations, and advocacy for maximum coverage. Extensive experience with major insurance carriers.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Insurance adjuster coordination and meetings</li>
                  <li>• Detailed repair estimates and specifications</li>
                  <li>• Supplement negotiations for complete coverage</li>
                  <li>• Claim documentation and progress tracking</li>
                  <li>• Deductible assistance when possible</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Types of Hail Damage in Snyder Properties</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Understanding different types of hail damage helps property owners recognize when professional assessment and repair are necessary.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🧊 Asphalt Shingle Damage</h3>
                    <p className="text-gray-700">Hail impacts create granule loss, exposed mat areas, cracking, and bruising. Small hail may only cause granule displacement, while large hail can crack or puncture shingles completely, requiring immediate replacement to prevent water intrusion.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">⚪ Metal Roofing Impact</h3>
                    <p className="text-gray-700">Hail creates dents and dings in metal roofing systems that may not affect functionality immediately but can compromise coatings, leading to premature corrosion and reduced lifespan requiring professional evaluation and potential replacement.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🔧 Flashing and Accessory Damage</h3>
                    <p className="text-gray-700">Roof vents, flashing, gutters, and HVAC units often sustain visible denting from hail impacts. These components are critical for waterproofing and may require replacement even when primary roofing materials appear undamaged.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">💧 Immediate vs. Progressive Damage</h3>
                    <p className="text-gray-700">Some hail damage causes immediate leaks requiring emergency response, while other damage compromises long-term integrity without immediate symptoms. Professional assessment identifies both types for comprehensive repair planning.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🌪️ Wind-Driven Hail Patterns</h3>
                    <p className="text-gray-700">West Texas storms often combine hail with high winds, creating unique damage patterns on vertical surfaces and roof edges. These areas require special attention during assessment to ensure comprehensive damage identification.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">🏠 Interior Impact Assessment</h3>
                    <p className="text-gray-700">Hail damage may cause interior water damage, ceiling stains, insulation damage, and electrical hazards. Comprehensive assessment includes interior inspection to document all related damage for insurance claims.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance Claim Success Strategies</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Maximizing insurance coverage for hail damage requires professional documentation, strategic claim presentation, and experienced adjuster interaction.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Professional Documentation Standards</h3>
                  <p className="text-gray-700 mb-4">Insurance companies require specific documentation standards for hail damage claims. Our professional approach ensures all required evidence is collected and presented in formats that maximize claim approval probability and coverage amounts.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• High-resolution photography with measurement references</li>
                    <li>• Detailed written damage assessments with severity ratings</li>
                    <li>• Weather event documentation and correlation</li>
                    <li>• Material specifications and replacement requirements</li>
                    <li>• Code compliance and upgrade documentation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Adjuster Interaction Expertise</h3>
                  <p className="text-gray-700 mb-4">Successful hail damage claims require effective communication with insurance adjusters and thorough understanding of coverage provisions. Our experience ensures all covered damage is identified and properly valued for maximum compensation.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Direct adjuster coordination and scheduling</li>
                    <li>• On-site damage explanation and demonstration</li>
                    <li>• Coverage provision interpretation and application</li>
                    <li>• Supplement negotiations for missed damage items</li>
                    <li>• Depreciation recovery assistance and guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Impact-Resistant Roofing Upgrades</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Post-hail damage repair presents an opportunity to upgrade to impact-resistant roofing systems that provide superior protection and insurance benefits.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Class 4 Impact Rating</h3>
                  <p className="text-gray-600">UL 2218 Class 4 shingles withstand impacts from 2-inch steel balls, providing maximum hail protection and qualifying for significant insurance premium discounts in Texas.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">%</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Insurance Discounts</h3>
                  <p className="text-gray-600">Class 4 shingles qualify for insurance premium discounts up to 30% in Texas, often paying for upgrade costs through reduced premiums over the roof's lifespan.</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🛡️</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Enhanced Protection</h3>
                  <p className="text-gray-600">Impact-resistant materials reduce future hail damage by up to 90%, protecting property value and minimizing future repair costs and insurance claims.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Snyder roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Look for granule loss (shiny spots on shingles), dents on metal vents and flashing, cracked or split shingles, dented gutters and downspouts, and interior water stains. Hail damage isn't always immediately visible - we provide free professional inspections with detailed photo documentation for insurance claims.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, if damage occurred during your policy period and meets your deductible. We document all impacts, coordinate directly with adjusters, and advocate for maximum coverage. Our professional documentation and claim support result in 95%+ approval rates for legitimate hail damage claims.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles after hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Class 4 impact-resistant shingles reduce future hail damage by up to 90% and qualify for insurance premium discounts up to 30% in Texas. The insurance savings often pay for the upgrade over the roof's lifespan while providing superior protection.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long do I have to file a hail damage claim?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Texas insurance policies require claims within one year of the damage date, but it's best to file within 30-60 days. We help document damage immediately after storms and can assist with claim filing even months later if damage is discovered during routine inspections.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What size hail causes damage to roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Hail as small as 1 inch can cause granule loss and minor damage to standard shingles. Hail 1.25 inches and larger typically causes functional damage requiring repair or replacement. Snyder commonly experiences hail 1.5-2+ inches that creates significant damage requiring immediate professional attention.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can hail damage cause leaks immediately?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Large hail can puncture shingles and create immediate leaks, but most hail damage compromises long-term integrity without immediate water intrusion. However, damaged areas become vulnerable to future storms, making prompt professional assessment and repair essential.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with all insurance companies?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we work with all major insurance carriers including State Farm, Allstate, USAA, Farmers, and many others. Our extensive experience with different carriers' requirements ensures smooth claim processing and maximum coverage regardless of your insurance provider.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Post-Storm Response and Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Understanding the post-storm timeline helps property owners take appropriate action for successful hail damage claims and repairs.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Immediate Response (0-48 Hours)</h3>
                  <p className="text-gray-700 mb-4">Immediately after a hail event, focus on safety and emergency protection. Document visible damage with photos, contact your insurance company to report potential damage, and schedule professional inspection for comprehensive assessment.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Ensure safety and assess immediate hazards</li>
                    <li>• Document visible damage with photos</li>
                    <li>• Contact insurance company to report claim</li>
                    <li>• Schedule professional damage inspection</li>
                    <li>• Protect property from further damage if needed</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Assessment and Claims (3-14 Days)</h3>
                  <p className="text-gray-700 mb-4">Professional assessment, insurance adjuster meetings, and claim documentation occur during this period. Comprehensive damage evaluation ensures all impacts are identified and properly documented for maximum coverage.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive professional damage assessment</li>
                    <li>• Insurance adjuster inspection coordination</li>
                    <li>• Detailed repair estimates and specifications</li>
                    <li>• Supplement negotiations for missed damage</li>
                    <li>• Repair scheduling and material ordering</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose 5 Star Roofing for Hail Damage Repair in Snyder</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Hail Damage Expertise</h3>
                      <p className="text-gray-700">Extensive experience with West Texas hail patterns, damage identification, and repair techniques specific to regional weather challenges and insurance requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Insurance Claim Success</h3>
                      <p className="text-gray-700">95%+ claim approval rate through professional documentation, adjuster coordination, and comprehensive damage assessment ensuring maximum coverage for Snyder property owners.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Advanced Materials</h3>
                      <p className="text-gray-700">Access to latest impact-resistant roofing technologies including Class 4 shingles, advanced metal systems, and innovative materials designed for superior hail protection.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Complete Documentation</h3>
                      <p className="text-gray-700">Professional-grade damage documentation with high-resolution photography, detailed measurements, and comprehensive reporting designed for successful insurance claim submission.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Local Availability</h3>
                      <p className="text-gray-700">Immediate response capability for post-storm assessment and emergency services throughout Snyder and surrounding areas with rapid deployment for time-sensitive situations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Comprehensive Warranties</h3>
                      <p className="text-gray-700">Complete warranty coverage including material warranties, workmanship guarantees, and manufacturer backing providing long-term protection and peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Snyder property owners. Expert hail damage repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}