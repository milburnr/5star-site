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
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Repair Amarillo TX | 5 Star Roofing',
  description: 'Hail Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function HailDamageRepairAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        { name: "Amarillo", url: "/hail-damage-repair-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/hail-damage-repair-amarillo/#localbusiness",
            "name": "5 Star Commercial Roofing - Amarillo Hail Damage Repair",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/images/hail-damage-3.jpg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2909 S Western St",
              "addressLocality": "Amarillo",
              "addressRegion": "TX",
              "postalCode": "79109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.1768,
              "longitude": -101.8590
            },
            "url": "https://5starroofingpros.com/hail-damage-repair-amarillo/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "description": "Expert hail damage repair in Amarillo with 24/7 emergency service. Potter County recorded 131 severe hail days since 2000. Complete insurance claim assistance. Free inspections. Call (806) 622-6041"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"How do I know if my Amarillo roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots on shingles), dents on metal vents/flashing, cracked or missing shingles, and dented gutters. Potter County's 131 severe hail days since 2000 mean most Amarillo roofs over 10 years old have some hail damage. We provide free inspections with detailed photo documentation for insurance claims."}},{"@type":"Question","name":"Will insurance cover hail damage repair in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage occurred during your policy period and you file within your carrier's timeframe (typically 1-2 years). We document every impact, meet adjusters on-site, and advocate for maximum coverage. Our 95%+ approval rate means most homeowners pay only their deductible ($1,000-$2,500) for complete roof replacement."}},{"@type":"Question","name":"How long do I have to file a hail damage claim in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Most Texas insurers allow 1-2 years from the storm date, but filing sooner is better. Potter County experiences multiple hail events annually, making it harder to prove which storm caused damage if you wait. We recommend inspection within 2-4 weeks of any hailstorm. Some carriers require filing within 1 year."}},{"@type":"Question","name":"Why does Amarillo get so much hail?","acceptedAnswer":{"@type":"Answer","text":"Amarillo sits in \"Hail Alley\" at 3,600 feet elevation where warm Gulf moisture meets cold Canadian air. This creates severe updrafts suspending water droplets in freezing zones, forming large hailstones. Potter County recorded 131 severe hail days since 2000 - among the highest frequencies in America. Peak season: March-May."}},{"@type":"Question","name":"Should I get Class 4 shingles after hail damage repair?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Class 4 impact-resistant shingles withstand 2-inch hail strikes and reduce future damage by 90%. Given Potter County's extreme hail frequency, they're essential. Many Texas insurers offer 10-30% premium discounts for Class 4 roofs, offsetting the initial cost through avoided future claims and insurance savings."}},{"@type":"Question","name":"How long does hail damage repair take in Amarillo?","acceptedAnswer":{"@type":"Answer","text":"Most Amarillo homes are completed in 1-3 days once insurance approves. The claim process typically takes 2-4 weeks: initial inspection (same day), adjuster meeting (1-2 weeks), approval (3-5 days), then installation (1-3 days). We provide emergency tarping within hours if you have active leaks while waiting for insurance approval."}},{"@type":"Question","name":"Do you provide emergency tarping for hail-damaged roofs?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping service throughout Amarillo. If hailstorms cause active leaks, we respond within hours to install temporary waterproof tarps protecting your home until permanent repairs are completed. Emergency tarping costs are typically covered by insurance as part of your claim."}}]
          })
        }}
      />

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
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Hail Damage Repair in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Response in Hail Alley
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert hail damage repair in Potter County - one of America's most hail-prone regions. Potter County has recorded 131 severe hail days since 2000. We provide 24/7 emergency response, complete insurance claim assistance, and Class 4 impact-resistant replacements.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  131+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Hail Days Since 2000</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">95%+</div>
                <div className="text-brand-brown font-semibold text-lg">Insurance Approval Rate</div>
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
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Amarillo's Climate Demands Expert Hail Damage Repair
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Amarillo's location in the Texas Panhandle creates one of America's most challenging roofing environments. Potter County faces extreme conditions year-round:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Extreme Hail</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>131 severe hail days since 2000</strong> - Potter County leads Texas in hail frequency, ranking in America's Top 10 most hail-prone cities.
                </p>
                <p className="text-gray-600 text-sm">
                  438 hail reports within 10 miles in just 12 months. Peak season March-May with secondary fall peak.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">High Winds</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>14.3 mph average winds</strong> - highest in Texas, #2 in America. Extreme gusts exceed 50 mph annually.
                </p>
                <p className="text-gray-600 text-sm">
                  At 3,600' elevation, clashing air masses create severe wind events. Peak winds March-April.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>86°F temperature range</strong> - from 13°F winter lows to 99°F summer highs causes severe thermal stress.
                </p>
                <p className="text-gray-600 text-sm">
                  Constant expansion/contraction accelerates material degradation and shortens roof lifespan.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Amarillo's Position in the Texas Hail Belt</h2>
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Amarillo sits at the epicenter of "Hail Alley"—a notorious storm corridor where Potter County leads Texas in hail frequency. Since 2000, our area has recorded 131 severe hail days, placing Amarillo among the top 10 most hail-prone cities in America.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Meteorological Perfect Storm</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>3,600-foot Elevation:</strong> High Plains create ideal atmospheric conditions</li>
                    <li><strong>Dryline Position:</strong> Where dry desert air meets moist Gulf air masses</li>
                    <li><strong>Jet Stream Interaction:</strong> Upper-level winds enhance rotation and updrafts</li>
                    <li><strong>Temperature Contrasts:</strong> 50°F+ differences in adjacent air masses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Historical Storm Data</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Largest Recorded:</strong> 4.25" diameter (softball size) in 2019</li>
                    <li><strong>Annual Events:</strong> 8-12 hailstorms causing property damage</li>
                    <li><strong>Peak Activity:</strong> 4-8 PM when atmospheric instability maximizes</li>
                    <li><strong>Supercell Frequency:</strong> 25-30 rotating storms annually</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-red-700 mb-2">Record-Breaking Events</h4>
                <p className="text-gray-700 mb-2">Major hailstorms in Amarillo history:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• May 17, 2019: 4.25" hail, $50M+ damage</li>
                  <li>• April 28, 2021: Baseball size citywide</li>
                  <li>• March 13, 2023: Grapefruit size north side</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-blue-700 mb-2">Economic Impact</h4>
                <p className="text-gray-700 mb-2">Annual hail damage in Potter County:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• $15-25 million property damage</li>
                  <li>• 30-45% of roofs need repair annually</li>
                  <li>• 75% experience some level of damage</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-green-700 mb-2">Protection Strategy</h4>
                <p className="text-gray-700 mb-2">Essential defenses for Amarillo homes:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 4 impact-resistant materials</li>
                  <li>• Annual professional inspections</li>
                  <li>• Prompt post-storm assessments</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Navigating Texas Insurance Claims: Amarillo Expertise</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Texas-Specific Insurance Laws</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Texas Prompt Payment Act</h4>
                  <p className="text-gray-600 mb-2">Insurers must:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Acknowledge claims within 15 days</li>
                    <li>• Request additional info within 30 days</li>
                    <li>• Pay or deny within 60 days of filing</li>
                    <li>• Pay 18% annual interest on delayed payments</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Statute of Limitations</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Most policies: 1-2 years from loss date</li>
                    <li>• Texas Insurance Code: 2 years maximum</li>
                    <li>• Earlier deadlines possible per policy terms</li>
                    <li>• File immediately after discovery</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Our Claim Success Process</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Pre-Adjuster Preparation</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive damage documentation</li>
                    <li>• Detailed Xactimate estimates</li>
                    <li>• Weather verification from NOAA/NWS</li>
                    <li>• Photo evidence of all impacts</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Adjuster Meeting Strategy</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Physical evidence presentation</li>
                    <li>• Code compliance requirements</li>
                    <li>• Matching materials documentation</li>
                    <li>• Upgrade necessity justification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Why 95%+ of Our Claims Succeed</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg mb-2">We've handled over 1,000 Amarillo hail claims since 2014. Our systematic approach ensures maximum coverage.</p>
                </div>
                <div>
                  <p className="text-brand-gold-light font-semibold">Average settlement: 98% of full replacement cost • Most homeowners pay deductible only</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do I know if my Amarillo roof has hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Look for granule loss (shiny spots on shingles), dents on metal vents/flashing, cracked or missing shingles, and dented gutters. Potter County's 131 severe hail days since 2000 mean most Amarillo roofs over 10 years old have some hail damage. We provide free inspections with detailed photo documentation for insurance claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover hail damage repair in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, if damage occurred during your policy period and you file within your carrier's timeframe (typically 1-2 years). We document every impact, meet adjusters on-site, and advocate for maximum coverage. Our 95%+ approval rate means most homeowners pay only their deductible ($1,000-$2,500) for complete roof replacement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long do I have to file a hail damage claim in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Texas insurers allow 1-2 years from the storm date, but filing sooner is better. Potter County experiences multiple hail events annually, making it harder to prove which storm caused damage if you wait. We recommend inspection within 2-4 weeks of any hailstorm. Some carriers require filing within 1 year.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why does Amarillo get so much hail?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo sits in "Hail Alley" at 3,600 feet elevation where warm Gulf moisture meets cold Canadian air. This creates severe updrafts suspending water droplets in freezing zones, forming large hailstones. Potter County recorded 131 severe hail days since 2000 - among the highest frequencies in America. Peak season: March-May.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I get Class 4 shingles after hail damage repair?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Class 4 impact-resistant shingles withstand 2-inch hail strikes and reduce future damage by 90%. Given Potter County's extreme hail frequency, they're essential. Many Texas insurers offer 10-30% premium discounts for Class 4 roofs, offsetting the initial cost through avoided future claims and insurance savings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does hail damage repair take in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Amarillo homes are completed in 1-3 days once insurance approves. The claim process typically takes 2-4 weeks: initial inspection (same day), adjuster meeting (1-2 weeks), approval (3-5 days), then installation (1-3 days). We provide emergency tarping within hours if you have active leaks while waiting for insurance approval.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide emergency tarping for hail-damaged roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, 24/7 emergency tarping service throughout Amarillo. If hailstorms cause active leaks, we respond within hours to install temporary waterproof tarps protecting your home until permanent repairs are completed. Emergency tarping costs are typically covered by insurance as part of your claim.
                </AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Need Hail Damage Repair?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Amarillo property owners. Insurance claim assistance available. Call now for immediate service.
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
