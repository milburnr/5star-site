import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Wind Damage Repair Amarillo TX | 5 Star Roofing',
  description: 'Wind Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function WindDamageRepairAmarilloPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Wind Damage Repair",
                      "url": "/wind-damage-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/wind-damage-repair-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Wind Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "+18066226041",
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
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
            "description": "Professional wind damage roof repair in Amarillo, TX with 24/7 emergency service and complete insurance claim assistance."
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
              {
                "@type": "Question",
                "name": "What wind speeds typically cause roof damage in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sustained winds above 45 mph begin lifting shingle tabs on older roofs. Gusts exceeding 60 mph can remove entire shingles even from relatively new roofs if installation quality was poor. Amarillo regularly experiences wind events in this range, especially during spring and fall frontal passages. High-wind rated installation methods dramatically improve performance."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover wind damage to my Amarillo roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homeowner policies cover wind damage when sustained winds or gusts exceed thresholds specified in your policy—typically 50-60 mph. We help document wind speeds from National Weather Service reports and link damage patterns to specific wind events. Our professional documentation improves claim approval rates significantly."
                }
              },
              {
                "@type": "Question",
                "name": "How do you prevent future wind damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "High-wind installation methods are critical in Amarillo. We use 6-nail patterns instead of standard 4-nail, install premium starter strips with enhanced adhesion, seal all flashing with high-grade sealants, and use Class 4 shingles rated for 130 mph winds. These methods reduce wind damage risk by 80-90% compared to standard installations."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you repair wind damage after a storm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide emergency tarping and temporary repairs within hours for actively leaking roofs. Full repair or replacement typically occurs 2-4 weeks after claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle, we work extended hours to accommodate emergency needs."
                }
              },
              {
                "@type": "Question",
                "name": "Should I get a wind damage inspection after every windstorm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph. Even if you see no obvious damage from the ground, lifted shingles and flashing issues may exist. We offer free inspections that identify problems early before they cause leaks. Early detection prevents minor wind damage from becoming major water damage."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/storm-damage-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                High Wind Roofing Experts | 24/7 Emergency Service
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Amarillo's location in the Texas Panhandle creates perfect conditions for extreme winds. Sustained winds of 30-50 mph with gusts exceeding 70 mph damage shingles, flashing, and underlayment. We specialize in wind damage assessment and high-wind roofing systems designed for Panhandle conditions.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  Emergency: (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">70+</div>
                <div className="text-brand-brown font-semibold text-lg">MPH Gusts</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={950} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Wind Claims</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-600">
                <div className="text-4xl font-bold text-brand-gold mb-3">FREE</div>
                <div className="text-brand-brown font-semibold text-lg">Inspections</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Understanding Wind Damage in the Texas Panhandle
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Amarillo's flat, open terrain provides zero windbreaks, allowing unrestricted airflow from the north and west. The city averages 140+ days annually with sustained winds exceeding 15 mph, and strong frontal systems regularly produce gusts of 50-70 mph. Spring and fall transition periods bring the most severe wind events, with occasional gusts exceeding 80 mph during severe thunderstorms.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wind damage differs fundamentally from hail damage. While hail impacts are visible and dramatic, wind damage often appears subtle initially—lifted shingle tabs, exposed nail heads, creased flashing—but accelerates deterioration rapidly. From homes near Cadillac Ranch to properties in Sleepy Hollow, from Downtown Amarillo to areas near the Amarillo Civic Center, we've seen how Texas Panhandle winds affect every neighborhood. A single high-wind event can compromise your roof's water resistance, leading to leaks during the next rainfall. Our specialized wind damage inspections identify problems before they become catastrophic failures.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Common Wind Damage Patterns on Amarillo Roofs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-slate-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Shingle Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Lifted tabs:</strong> Wind gets under shingle edges, breaking adhesive seals and creating water entry points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Missing shingles:</strong> High winds rip entire shingles from roof deck, exposing underlayment to UV and moisture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Creased shingles:</strong> Sustained winds bend shingles repeatedly, creating permanent creases that accelerate failure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold">•</span>
                    <span><strong>Granule displacement:</strong> Wind-driven debris scours protective granules, reducing UV resistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Flashing & Component Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Lifted flashing:</strong> Wind pries metal flashing from chimneys, vents, and valleys—common leak sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Damaged ridge caps:</strong> Peak shingles suffer the most wind stress, often first components to fail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Blown-off vents:</strong> Roof vents, turbines, and caps torn from openings, leaving holes exposed to elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span><strong>Loose gutter systems:</strong> Wind stress pulls gutters from fascia, causing drainage failures</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-3xl font-bold mb-6 text-green-900">
              Our Wind Damage Repair Process
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Comprehensive Wind Damage Assessment</h3>
                    <p className="text-gray-700">
                      Our inspectors examine every vulnerable component—shingles, flashing, vents, gutters, and fascia. We use drone photography to document roof conditions and identify patterns of wind-related failures. Assessment includes attic inspection for water infiltration evidence. Most inspections completed in 60-90 minutes with immediate preliminary findings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Insurance Documentation & Claim Filing</h3>
                    <p className="text-gray-700">
                      Wind damage insurance claims require specific documentation linking damage to covered wind events. We photograph all damage, provide detailed reports, and help you file claims with carriers. Our experience with State Farm, Allstate, USAA, and other insurers ensures proper documentation that supports claim approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Emergency Temporary Repairs</h3>
                    <p className="text-gray-700">
                      If your roof is actively leaking or exposed to elements, we provide emergency tarping and temporary leak repairs within hours. This prevents water damage to interior while insurance claim processes. Emergency service available 24/7 throughout Amarillo and surrounding Potter County communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">High-Wind Roofing System Installation</h3>
                    <p className="text-gray-700">
                      We install roofing systems engineered for high-wind environments. This includes 6-nail installation patterns (vs. standard 4-nail), premium starter strips, high-wind ridge caps, and sealed flashing systems. Class 4 impact-resistant shingles rated for 130 mph winds provide maximum protection for Panhandle conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Quality Inspection & Warranty</h3>
                    <p className="text-gray-700">
                      Final inspection ensures all components meet high-wind installation standards. We provide manufacturer warranties (20-50 years on materials) plus our workmanship warranty. All documentation provided for your records, giving you confidence your Amarillo home can withstand future high-wind events.
                    </p>
                  </div>
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
                  What wind speeds typically cause roof damage in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Sustained winds above 45 mph begin lifting shingle tabs on older roofs. Gusts exceeding 60 mph can remove entire shingles even from relatively new roofs if installation quality was poor. Amarillo regularly experiences wind events in this range, especially during spring and fall frontal passages. High-wind rated installation methods dramatically improve performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover wind damage to my Amarillo roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner policies cover wind damage when sustained winds or gusts exceed thresholds specified in your policy—typically 50-60 mph. We help document wind speeds from National Weather Service reports and link damage patterns to specific wind events. Our professional documentation improves claim approval rates significantly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you prevent future wind damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  High-wind installation methods are critical in Amarillo. We use 6-nail patterns instead of standard 4-nail, install premium starter strips with enhanced adhesion, seal all flashing with high-grade sealants, and use Class 4 shingles rated for 130 mph winds. These methods reduce wind damage risk by 80-90% compared to standard installations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair wind damage after a storm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide emergency tarping and temporary repairs within hours for actively leaking roofs. Full repair or replacement typically occurs 2-4 weeks after claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle, we work extended hours to accommodate emergency needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I get a wind damage inspection after every windstorm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph. Even if you see no obvious damage from the ground, lifted shingles and flashing issues may exist. We offer free inspections that identify problems early before they cause leaks. Early detection prevents minor wind damage from becoming major water damage.
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
          <h2 className="text-4xl font-bold mb-6">Wind Damage Your Amarillo Roof?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free wind damage inspections. 24/7 emergency service. Complete insurance claim assistance. High-wind installation methods that prevent future damage.
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
