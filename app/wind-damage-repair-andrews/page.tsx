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
  alternates: { canonical: 'https://5starroofingpros.com/wind-damage-repair-andrews/' },
  title: "Wind Damage Repair Andrews TX | 5 Star Roofing",
  description: "Expert wind damage roof repair in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Wind Damage Repair Andrews TX | 5 Star Roofing",
    description: "Expert wind damage roof repair in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/wind-damage-repair-andrews/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WindDamageRepairAndrewsPage() {
  const faqItems = [
      {
          "question": "What wind speeds cause roof damage in Andrews County?",
          "answer": "In Andrews County, sustained winds above 45 mph can begin lifting improperly secured shingles, while gusts exceeding 70 mph cause significant damage to most roofing systems. The Permian Basin's flat terrain allows wind events to maintain full intensity across Andrews, with no natural windbreaks to reduce speeds. Our wind damage assessments document exact damage patterns to distinguish between different wind events for insurance purposes."
      },
      {
          "question": "How do Permian Basin dust storms affect roofs in Andrews?",
          "answer": "Andrews experiences frequent dust storms where wind-driven sand particles act as abrasives against roofing materials, accelerating granule loss on shingles and degrading sealant joints. Over time, this sand blasting effect can reduce a roof's lifespan by 20-30% compared to less exposed areas. We recommend impact-resistant materials with enhanced UV coatings that better withstand Andrews' combined wind and sand exposure."
      },
      {
          "question": "Are oil field buildings in Andrews more vulnerable to wind damage?",
          "answer": "Yes, many oil field buildings in Andrews County have large, flat roof profiles that create significant wind uplift forces. Equipment vibrations from nearby operations can also loosen fasteners over time, compounding wind vulnerability. We install mechanically attached systems with enhanced fastening patterns specifically designed for Andrews' industrial properties, exceeding standard wind uplift requirements by 25-40%."
      },
      {
          "question": "What wind speed threshold triggers an insurance claim in Andrews?",
          "answer": "Most insurance policies in Andrews cover wind damage when sustained winds exceed 50 mph or gusts exceed 58 mph, which the National Weather Service classifies as severe thunderstorm winds. However, cumulative damage from repeated moderate wind events may also qualify. We document all wind damage with dated photographs, weather service records, and detailed damage maps to support your Andrews insurance claim."
      },
      {
          "question": "What is FORTIFIED roofing and is it worth it for Andrews properties?",
          "answer": "FORTIFIED roofing is an IBHS certification program that uses enhanced installation techniques to resist severe weather. For Andrews properties facing frequent high-wind events, FORTIFIED designation can reduce insurance premiums by 15-30% while providing substantially better wind resistance. The upgraded edge details, sealed roof deck, and enhanced fastening patterns address the exact failure modes we see most often in Permian Basin wind damage."
      },
      {
          "question": "How quickly can you tarp a wind-damaged roof in Andrews?",
          "answer": "We provide same-day emergency tarping for wind-damaged properties throughout Andrews and Andrews County. Our crews carry commercial-grade tarps sized for both residential and commercial buildings, along with proper anchoring systems that prevent tarp blow-off in ongoing wind conditions. For active storms, we deploy as soon as conditions are safe, typically within 2-4 hours of your call."
      }
  ];

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
                      "name": "Andrews",
                      "url": "/wind-damage-repair-andrews/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "RoofingContractor"],
        "@id": "https://5starroofingpros.com/wind-damage-repair-andrews/#localbusiness",
        "name": "5 Star Roofing",
        "image": "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg",
        "telephone": "(806) 622-6041",
        "email": "admin@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.3187, "longitude": -102.5454 },
        "url": "https://5starroofingpros.com/wind-damage-repair-andrews/",
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Expert wind damage repair services in Andrews, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Wind Damage Roof Repair",
            "provider": {
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Roofing",
              "telephone": "(806) 622-6041",
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
              "name": "Andrews",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert wind damage roof repair in Andrews TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-35-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Andrews</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Wind Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              How Does Andrews's Premier Wind Damage Repair Specialists Affect Your Roof?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Andrews, Texas, positioned in the Permian Basin's open terrain, faces some of West Texas's most severe wind events. Located where multiple weather systems converge, Andrews experiences frequent derechos with sustained winds of 70-90 MPH, supercell thunderstorm complexes producing straight-line winds exceeding 100 MPH, and microbursts that can generate localized winds of 120+ MPH. The flat topography provides no natural windbreaks, allowing these powerful systems to maintain intensity as they sweep across Andrews County, causing significant structural damage to roofing systems year after year.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has specialized in wind damage repair throughout Andrews and Andrews County, understanding the unique patterns that affect this Permian Basin community. From historic properties near the Andrews County Courthouse to modern developments along Highway 385, we've documented and repaired damage from dozens of major wind events including the devastating straight-line wind storms that regularly impact this region. Our expertise covers everything from shingle blow-offs to structural damage, ensuring rapid restoration that meets Texas Building Code requirements and insurance standards.
            </p>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Andrews Wind Damage Patterns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Permian Basin Wind Characteristics</h4>
                  <p className="text-gray-600 mb-4">Andrews's location creates a natural wind corridor where Arctic fronts clash with Gulf moisture, generating severe convective systems. The area experiences an average of 45+ days annually with sustained winds over 25 MPH, with peak wind events typically occurring during spring (March-May) and fall (September-November) transition periods when pressure gradients are strongest.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Common Wind Damage Types</h4>
                  <p className="text-gray-600">Straight-line winds cause uplift damage to shingles, gutters, and flashing. Rotating storms create directional damage patterns affecting specific roof sections. Microbursts generate downburst damage with debris impact. Sustained high winds cause fastener fatigue and progressive material failure over time.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Seasonal Wind Events</h4>
                  <p className="text-gray-600 mb-4">Spring: Supercell complexes with rotating mesocyclones producing 80-120 MPH winds. Summer: Isolated microbursts from afternoon thunderstorms. Fall: Derecho events with sustained 70+ MPH winds over large areas. Winter: Chinook wind events causing rapid pressure changes and thermal stress.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-2">Geographic Risk Factors</h4>
                  <p className="text-gray-600">Open terrain with no windbreaks amplifies wind speeds. Elevation changes create turbulence and unpredictable wind patterns. Oil field infrastructure can channel and accelerate winds. Limited vegetation provides minimal wind reduction.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-brand-brown">Comprehensive Wind Damage Assessment & Repair Services</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-slate-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Wind Damage Response</h4>
                <p className="text-gray-600 mb-3">tarping services and stabilization services for Andrews properties after severe wind events. Our rapid response team secures damaged areas within hours, preventing secondary water damage and protecting your property until permanent repairs begin.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• tarping and board-up</li>
                  <li>• Structural damage assessment</li>
                  <li>• Immediate leak prevention</li>
                  <li>• Insurance documentation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-slate-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Complete Roof Restoration</h4>
                <p className="text-gray-600 mb-3">Full roofing system replacement for severely wind-damaged properties. We upgrade to impact-resistant materials and enhanced fastening systems designed to withstand future Permian Basin wind events while meeting all insurance and building code requirements.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Impact-resistant material upgrades</li>
                  <li>• Enhanced wind-rated systems</li>
                  <li>• Structural reinforcement</li>
                  <li>• Code compliance upgrades</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-slate-500">
                <h4 className="text-xl font-semibold text-brand-brown mb-3">Partial Wind Damage Repair</h4>
                <p className="text-gray-600 mb-3">Targeted repairs for localized wind damage including shingle replacement, flashing repair, and gutter restoration. Our Andrews-specific approach addresses common Permian Basin wind damage patterns while ensuring seamless integration with existing roofing systems.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shingle blow-off replacement</li>
                  <li>• Flashing and trim repair</li>
                  <li>• Gutter and downspout restoration</li>
                  <li>• Ventilation system repair</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">Andrews Wind Damage Expertise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Permian Basin Storm Pattern Recognition</h4>
                  <p className="text-gray-600 mb-4">Our team understands the specific wind damage patterns common to Andrews's geographical location. We can identify damage from straight-line winds versus rotating systems, assess progressive wind damage from multiple events, and determine the difference between acute storm damage and chronic wind wear.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Oil Field Environment Considerations</h4>
                  <p className="text-gray-600">Wind damage repairs account for Andrews's oil field environment including dust infiltration, potential chemical exposure, and vibration impacts. We use materials and techniques that maintain integrity despite ongoing oil field activities and environmental challenges.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Insurance Claim Specialization</h4>
                  <p className="text-gray-600 mb-4">Andrews's frequent wind events require expert insurance navigation. We document wind damage comprehensively, differentiate between storm events for multiple claims, and ensure full coverage for visible and hidden damage common in Permian Basin wind events.</p>
                  
                  <h4 className="text-lg font-semibold text-brand-brown mb-3">Enhanced Wind Resistance</h4>
                  <p className="text-gray-600">All repairs include upgrades designed for Andrews's wind exposure including enhanced fastening patterns, upgraded edge details, and wind-tested materials rated for 130+ MPH sustained winds typical of severe Permian Basin weather systems.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">How Does the Andrews Wind Damage Repair Process Work?</h2>
            
            <div className="space-y-8">
              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-slate-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-slate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">storm response & Damage Assessment</h3>
                  <p className="text-gray-600">Our prompt response team provides immediate property protection after Andrews wind events. We secure damaged areas, document destruction for insurance purposes, and conduct comprehensive assessments to identify all wind-related damage including hidden structural issues common in Permian Basin storms.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-slate-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-slate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Documentation & Claims Support</h3>
                  <p className="text-gray-600">We provide detailed documentation of wind damage including drone photography, moisture detection, and structural analysis. Our Andrews-specific expertise helps insurance adjusters understand local wind patterns and damage characteristics, ensuring full coverage for necessary repairs.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-slate-50 to-white p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-slate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Repair & Restoration</h3>
                  <p className="text-gray-600">Our certified crews execute repairs using premium materials and enhanced techniques designed for Andrews wind exposure. All work meets Texas Building Code requirements while incorporating upgrades to improve future wind resistance based on Permian Basin weather patterns.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-8 bg-gradient-to-r from-white to-slate-50 p-6 rounded-2xl">
                <div className="md:w-16 w-12 h-16 md:h-16 bg-slate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Quality Assurance & Future Protection</h3>
                  <p className="text-gray-600">Final inspections ensure all wind damage repairs meet our high standards and manufacturer specifications. We provide comprehensive warranties and ongoing maintenance guidance to help your Andrews property withstand future Permian Basin wind events.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Andrews Wind Event History & Preparedness?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Recent Major Wind Events</h3>
                <p className="text-gray-600 mb-4">Andrews has experienced numerous significant wind events in recent years, including straight-line wind storms with sustained speeds over 80 MPH, supercell complexes producing damaging microbursts, and derecho events affecting large portions of Andrews County.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spring 2023: 95 MPH straight-line winds</li>
                  <li>• Fall 2022: Derecho with 85 MPH sustained winds</li>
                  <li>• Summer 2022: Multiple microburst events</li>
                  <li>• Spring 2021: Supercell complex damage</li>
                  <li>• Winter 2020: Chinook wind event</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Wind Damage Prevention</h3>
                <p className="text-gray-600 mb-4">Proactive measures help Andrews property owners minimize wind damage. Regular inspections, proper maintenance, and strategic upgrades significantly reduce vulnerability to Permian Basin wind events.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Annual roof inspections before storm season</li>
                  <li>• Enhanced fastening system upgrades</li>
                  <li>• Impact-resistant material installation</li>
                  <li>• Tree trimming and debris removal</li>
                  <li>• Gutter and drainage maintenance</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Serving All Andrews Area Communities</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-slate-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Downtown Andrews Historic District</h4>
                <p className="text-gray-600 text-sm">Historic properties require specialized wind damage repair techniques that maintain architectural integrity while upgrading wind resistance to modern standards for ongoing protection.</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">North Andrews Residential</h4>
                <p className="text-gray-600 text-sm">Modern subdivisions along Highway 385 benefit from enhanced wind-resistant repairs and upgrades designed for maximum protection against future Permian Basin wind events.</p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Rural Andrews County</h4>
                <p className="text-gray-600 text-sm">Country properties face maximum wind exposure requiring specialized repair techniques and enhanced materials designed for extreme West Texas weather conditions.</p>
              </div>
              
              <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Industrial Areas</h4>
                <p className="text-gray-600 text-sm">Properties near oil field operations require specialized consideration for equipment vibrations, dust exposure, and enhanced structural requirements.</p>
              </div>
              
              <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">South Andrews</h4>
                <p className="text-gray-600 text-sm">Established neighborhoods require reliable wind damage repair that maintains property values while providing superior protection against recurring wind events.</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-brand-brown mb-3">Commercial District</h4>
                <p className="text-gray-600 text-sm">Business properties need rapid wind damage restoration to minimize operational disruption while ensuring long-term protection against Permian Basin weather challenges.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Andrews, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.55!3d32.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sAndrews%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Andrews, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="andrews" currentService="wind-damage-repair" />
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Wind Damage Repair in Andrews FAQs
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <AccordionItem key={`faq-${index + 1}`} value={`faq-${index + 1}`} className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>




        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Andrews property owners. Expert wind damage repair with comprehensive warranties and insurance claim assistance.
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
