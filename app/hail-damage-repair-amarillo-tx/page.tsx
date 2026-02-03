import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Amarillo | 5 Star',
  description: "Expert hail damage roof repair in Amarillo TX. 24/7 emergency response, insurance claim help, Class 4 impact-resistant shingles. Free inspections. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairAmarilloPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Hail Damage Repair",
                      "url": "/hail-damage-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/hail-damage-repair-amarillo-tx/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-amarillo-tx/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Hail Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/hail-damage-repair-amarillo-tx/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert hail damage repair services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Replacement",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "image": "https://5starroofingpros.com/images/5-star-with-letters-1.png",
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
              }
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
            "description": "Professional hail damage roof replacement services in Amarillo, TX. Free inspections, complete insurance claim assistance, and expert installation with Class 4 impact-resistant materials.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$$",
              "availability": "https://schema.org/InStock"
            }
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
                "name": "What hail size causes roof damage in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail as small as 1 inch (quarter size) can damage standard asphalt shingles. In Amarillo, we frequently see hail ranging from 1.5 to 2.5 inches (golf ball to baseball size), which causes significant roof damage requiring full replacement. The May 2024 and May 2023 storms brought 1.75-2.00 inch hail that damaged thousands of Amarillo roofs."
                }
              },
              {
                "@type": "Question",
                "name": "How long do I have to file an insurance claim for hail damage in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Texas, you typically have up to 2 years to file a hail damage claim, but we strongly recommend filing within 1 year of the storm event. Insurance companies are more likely to approve claims filed promptly, and waiting too long can result in additional weathering that makes it difficult to distinguish new damage from normal aging. Call us within 72 hours of a major hail event for best results."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover my full roof replacement in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Amarillo homeowners' policies cover complete roof replacement if hail damage meets the 'test square' threshold—typically 8 or more hail strikes visible in a 10x10 foot area. We document damage with professional photography and meet with insurance adjusters on-site to ensure nothing is missed. Our 95%+ claim approval rate reflects our expertise in this process. You'll typically pay only your deductible ($1,000-$2,500 for most policies)."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a permit for hail damage roof replacement in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The City of Amarillo Building Safety Department (600 S. Buchanan St, 806-378-3041) requires permits for all roof replacements. Permit costs typically range from $50-150 depending on project size. We handle 100% of the permit process for you—application, fees, inspections, and final approval. This is included in our service at no extra charge."
                }
              },
              {
                "@type": "Question",
                "name": "What building codes apply to roof replacement in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amarillo follows the 2015 International Residential Code (IRC). Key requirements include: complete removal of existing shingles before new installation, proper attic ventilation (1 sq ft per 150 sq ft of attic space), drip edge installation, and wind-rated materials. We install shingles rated for 110-130 mph winds as required for Amarillo's wind zone. All our installations exceed code minimums."
                }
              },
              {
                "@type": "Question",
                "name": "How long does hail damage roof replacement take in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most residential hail damage roof replacements in Amarillo are completed in 1-3 days depending on home size and complexity. The insurance claim process typically takes 2-4 weeks from initial inspection to approval. Once your claim is approved, we typically schedule installation within 1-2 weeks, weather permitting. Emergency tarp service is available same-day if you're experiencing active leaks."
                }
              },
              {
                "@type": "Question",
                "name": "Should I upgrade to Class 4 impact-resistant shingles in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for 10-30% insurance premium discounts in Texas. Given Amarillo's location in 'Hail Alley' with 3-4 significant hail events annually, Class 4 shingles pay for themselves through reduced claims and lower premiums. Most insurance companies in Amarillo now approve Class 4 upgrades for hail damage claims."
                }
              },
              {
                "@type": "Question",
                "name": "Which Amarillo neighborhoods get hit hardest by hail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hail storms in Amarillo can affect any neighborhood, but northwest areas (Tascosa, Wolflin) and southwest neighborhoods (The Colonies, San Jacinto Heights) historically experience higher frequencies due to storm track patterns. However, the May 2023 and June 2024 storms demonstrated that city-wide damage is common. Regardless of location, all Amarillo roofs should use impact-resistant materials."
                }
              },
              {
                "@type": "Question",
                "name": "What insurance companies do you work with in Amarillo for hail claims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with all major insurance providers serving Amarillo including State Farm, Allstate, Farmers Insurance, USAA, Liberty Mutual, Nationwide, Progressive, American Family, Texas Farm Bureau, Shelter Insurance, and dozens of regional carriers. We've attended over 500 adjuster meetings in Amarillo and know exactly what each company's adjusters look for during inspections."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with my Amarillo HOA requirements for roof replacement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Many Amarillo neighborhoods—particularly Wolflin, Sleepy Hollow, and The Colonies—have HOA architectural committees that require approval for roof replacements. We're familiar with local HOA requirements and can help you submit required documentation, color samples, and architectural plans. We stock shingles pre-approved by most Amarillo HOAs."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/hail-damage-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl backdrop-blur-sm bg-gradient-to-r from-black/60 to-transparent p-12 rounded-2xl border-l-4 border-brand-gold">
            <FadeIn>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9)'}}>
                Hail Damage Roof Replacement in <span className="text-brand-gold-light">Amarillo, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                Free Inspection • 95%+ Insurance Claim Approval • Complete Permit Handling
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                Amarillo's #1 hail damage roofing specialists since 2014. We handle 100% of insurance paperwork, pull all permits, and guarantee quality installation with Class 4 impact-resistant materials. Most homeowners pay only their deductible.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  <span className="text-2xl">📞</span> Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown hover:text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl border-2 border-brand-gold">
                  Schedule Free Hail Inspection
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Signals - Hail-Specific */}
      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-blue-50 via-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,116,139,0.1),transparent_50%)]"></div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <FadeIn delay={0.1}>
                <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent mb-3">
                    <AnimatedCounter to={1200} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-lg">Hail Claims Processed</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent mb-3">95%</div>
                  <div className="text-brand-brown font-semibold text-lg">Claim Approval Rate</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent mb-3">
                    <AnimatedCounter to={500} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-lg">Adjuster Meetings</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent mb-3">100%</div>
                  <div className="text-brand-brown font-semibold text-lg">Paperwork Handled</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">

        {/* Introduction */}
        <FadeIn>
          <section className="max-w-5xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              If your Amarillo roof has been damaged by hail, you need more than just a roofing contractor—you need a team that specializes in navigating the complex insurance claims process while delivering expert installation. At 5 Star Commercial Roofing, hail damage roof replacement is our bread-and-butter service. Since 2014, we've helped over 1,200 Amarillo homeowners successfully file insurance claims and replace their damaged roofs, with a 95%+ approval rate.
            </p>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Living in "Hail Alley" means your roof faces constant bombardment from severe weather. The May 18, 2023 storm brought 1.75-2.00 inch hail that devastated Amarillo neighborhoods. The June 2, 2024 event produced 1.75 inch hail across the city. And on May 28-29, 2024, the South Plains region experienced destructive winds and giant hail. These aren't isolated incidents—Amarillo experiences 3-4 significant hail events annually that damage thousands of roofs.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Here's what sets us apart: <strong>We handle 100% of the insurance paperwork, pull all City of Amarillo permits, attend every adjuster meeting, and guarantee quality installation with premium Class 4 impact-resistant materials.</strong> Most homeowners pay only their deductible (typically $1,000-$2,500), with insurance covering the full replacement cost. Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a> for your free hail damage inspection today.
            </p>
          </section>
        </FadeIn>

        {/* Why Amarillo Homeowners Trust 5 Star */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 p-12 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-blue-600 bg-clip-text text-transparent">
                Why Amarillo Homeowners Trust 5 Star for Hail Damage
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🏠 Local Amarillo Experts Since 2014</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're headquartered right here in Amarillo at 2909 S Western St—not storm chasers who disappear after the next weather event. We've documented damage from every major Amarillo hail storm for the past decade. We know exactly what insurance adjusters expect, which neighborhoods experienced the worst damage, and how to maximize your claim approval.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">📋 We Handle All Insurance Paperwork</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This is where we save you countless hours of frustration. We document all damage with professional photography, file your claim with detailed reports, meet with adjusters on-site, negotiate for maximum coverage, and handle supplement requests if additional damage is discovered. You focus on your life—we focus on getting your claim approved.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🏛️ Complete Permit & Code Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The City of Amarillo Building Safety Department (600 S. Buchanan St, 806-378-3041) requires permits for all roof replacements. We handle the entire process—application, fees ($50-150), code compliance documentation, inspections, and final approval. Our installations exceed 2015 IRC requirements including proper ventilation, wind ratings (110+ mph), and drip edge installation.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">⚡ Rapid Response After Storms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When severe weather hits Amarillo, every hour counts. We offer same-day emergency inspections and tarp services to prevent interior water damage. Our typical response time after major storms is 2-4 hours. We document damage immediately—before additional weathering makes it harder to prove storm-related damage versus normal aging.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🛡️ Class 4 Impact-Resistant Materials</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We exclusively recommend Class 4 impact-resistant shingles for Amarillo hail damage replacements. These premium materials withstand 2-inch hail strikes, reduce future damage by 90%, and qualify for 10-30% insurance premium discounts. Most insurance companies now approve Class 4 upgrades at no additional cost to you beyond your deductible.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">💰 95%+ Claim Approval Success Rate</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our expertise in documentation and adjuster communication results in approval rates far above industry averages. We know the "test square" methodology (8+ hail strikes per 10x10 area), understand matching requirements under Texas law, and advocate aggressively for full replacement coverage when warranted. Your success is our success.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Recent Hail Storms in Amarillo */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">Recent Hail Storms in Amarillo</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Amarillo sits in America's "Hail Alley"—one of the highest-risk hail zones in the United States. Here are recent major events that damaged thousands of local roofs:
            </p>

            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🌨️</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-red-900 mb-3">June 2, 2024 - Widespread Damage Event</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Hail Sizes:</strong> 1.00 to 1.75 inches (quarter to golf ball size)
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Timeline:</strong> Multiple hail reports throughout the evening—6:20 PM (1.75"), 6:30 PM (1.25"), and 6:49 PM (1.00") with accumulating hail creating hazardous conditions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Impact:</strong> City-wide damage affecting all Amarillo neighborhoods. Golf ball-size hail caused significant roof damage requiring replacement on most standard asphalt shingle roofs. This was one of 2024's most destructive Amarillo hail events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">⛈️</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">May 28-29, 2024 - South Plains Destructive Storms</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Hail Sizes:</strong> Giant hail reported (2+ inches in surrounding areas)
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Impact:</strong> According to the National Weather Service Lubbock office, these severe storms brought destructive winds and giant hail to the South Plains region including Amarillo. High winds combined with large hail caused extensive damage to roofs, vehicles, and property across the Texas Panhandle.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Insurance Claims:</strong> This event triggered thousands of insurance claims throughout the region. Most standard roofs hit by 2+ inch hail required complete replacement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-lg border-l-4 border-slate-500">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">💨</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">May 12, 2024 - Early Morning Hail</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Hail Sizes:</strong> 1.00 inch (quarter size) with accumulation
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Timeline:</strong> 1:15 AM - Nighttime hail event with accumulating hail up to quarter size.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Damage:</strong> While smaller than other 2024 events, quarter-size hail still causes damage to standard shingles—particularly on roofs already weakened by previous storms. Many homeowners didn't discover damage until later inspections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🏠</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-red-900 mb-3">May 18, 2023 - Severe Damage & Flooding</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Hail Sizes:</strong> 1.50 to 2.00 inches (golf ball to hen egg size)
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Timeline:</strong> Evening storms produced 1.75" hail at 6:04 PM, followed by 2.00" hail at 9:14 PM. The National Weather Service documented extensive damage to a house with all north-facing windows blown out and severe tree damage.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Widespread Impact:</strong> This was one of Amarillo's most destructive hail events in recent years. Baseball-size hail penetrated roofs, destroyed vehicles, and caused tens of millions in insurance claims across the city. If you haven't inspected your roof since May 2023, you may have covered damage that qualifies for insurance replacement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">⚠️ Don't Wait to File Your Claim</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                If your roof was damaged in any of these storms and you haven't filed an insurance claim yet, <strong>time is running out.</strong> Texas law gives you up to 2 years, but insurance companies heavily scrutinize late claims. Additionally, subsequent storms can make it difficult to distinguish new damage from old damage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer <strong>free hail damage inspections</strong> with drone photography and detailed documentation. Even if you're not sure you have damage, a professional inspection costs nothing and could save you thousands. Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a> today.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Our 6-Step Amarillo Hail Damage Process */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Our 6-Step Amarillo Hail Damage Process
            </h2>

            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Professional Inspection & Documentation</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We conduct a thorough roof inspection using drone photography and close-up documentation of all hail damage. We photograph every damaged shingle, measure hail strike diameters, and create detailed reports showing exactly where damage occurred. This professional documentation is critical for insurance approval.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Drone aerial photography showing overall roof condition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Close-up photos of individual hail strikes and damage patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>"Test square" documentation (10x10 areas with 8+ hail strikes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Detailed written report with damage severity assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Inspection of gutters, vents, flashing, and other roof components</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Claim Filing & Paperwork</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We help you file your insurance claim with all necessary documentation. Most homeowners find the claims process confusing and time-consuming—we simplify it completely. We'll contact your insurance company on your behalf (with your authorization) and submit our professional damage report to expedite the process.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Assist with initial claim filing and paperwork</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Submit professional damage documentation to insurance company</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Coordinate adjuster meeting scheduling at your convenience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Explain the claims process timeline and what to expect</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Answer any questions about coverage, deductibles, and payments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Meet with Insurance Adjuster On-Site</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      This is where our expertise makes the biggest difference. We meet with your insurance adjuster on your roof, pointing out every area of damage and ensuring nothing gets missed. Adjusters are trained to minimize claim payouts—we're trained to advocate for full coverage you deserve.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>We meet adjuster on-site (you don't need to be present)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Point out all damage areas to ensure complete documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Demonstrate "test square" methodology for hail damage verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Discuss appropriate repairs vs. full replacement with adjuster</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Ensure adjuster documents all collateral damage (gutters, vents, etc.)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">4</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Amarillo Permit Application & Approval</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The City of Amarillo requires building permits for all roof replacements. We handle 100% of this process—you'll never need to visit City Hall or deal with building department paperwork. This service is included at no additional cost.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span><strong>Contact:</strong> City of Amarillo Building Safety Department</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span><strong>Location:</strong> 600 S. Buchanan St, Amarillo, TX 79101</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span><strong>Phone:</strong> (806) 378-3041 for permit inquiries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span><strong>Permit Cost:</strong> Typically $50-150 depending on project size</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>We submit all required documentation and pay permit fees upfront</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Coordinate required inspections with city building inspectors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">5</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Expert Roof Replacement Installation</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Our factory-certified crews complete most residential roof replacements in 1-3 days. We use only premium materials that exceed Amarillo building codes and manufacturer specifications. Every installation is supervised to ensure quality control at every step.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Complete tear-off of existing roofing (required by Amarillo code)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Inspect and replace damaged roof decking as needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Install ice & water shield, synthetic underlayment, and drip edge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Install Class 4 impact-resistant shingles rated for 110-130 mph winds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Ensure proper attic ventilation (1 sq ft per 150 sq ft minimum)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Replace all damaged roof vents, pipe boots, and flashings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Thorough cleanup with magnetic nail sweeps of entire property</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">6</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">City Inspection & Final Approval</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      After installation is complete, we coordinate the required City of Amarillo building inspection. Our work consistently passes inspection on the first attempt because we exceed code requirements. Once approved, we handle final insurance payment processing.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Schedule final inspection with City of Amarillo building inspector</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Inspector verifies code compliance for ventilation, materials, and installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Receive final permit approval and Certificate of Occupancy if required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Submit completion documentation to insurance for final payment release</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Provide you with warranty documentation and maintenance guidelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>Final walkthrough to ensure your complete satisfaction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-brand-gold-light to-yellow-100 p-8 rounded-lg border-l-4 border-brand-gold text-center">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">You Handle: Nothing. We Handle: Everything.</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
                From the moment you call us until the day your new roof is approved and paid for, we manage every detail. Most homeowners never visit City Hall, never call their insurance company directly, and never worry about inspections. That's our job—and we're excellent at it.
              </p>
              <a href="tel:8066226041" className="btn-primary-hero text-xl">
                Start Your Claim Today: (806) 622-6041
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Working with Amarillo Insurance Companies */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Working with Amarillo Insurance Companies
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We've successfully processed over 1,200 hail damage insurance claims in Amarillo, working with every major insurance provider serving our area. Our 95%+ claim approval rate isn't luck—it's expertise. We know exactly what each insurance company's adjusters look for, how to document damage to meet their standards, and how to advocate for maximum coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Insurance Companies We Work With</h3>
                <p className="text-gray-700 mb-4">We have extensive experience with all major providers serving Amarillo:</p>
                <div className="grid grid-cols-2 gap-3 text-gray-700 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>State Farm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Allstate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Farmers Insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>USAA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Liberty Mutual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Nationwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Progressive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>American Family</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Texas Farm Bureau</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Shelter Insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Travelers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Safeco</span>
                  </div>
                </div>
                <p className="text-gray-600 italic">Plus dozens of regional and local insurance providers throughout the Amarillo area.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">What Makes Our Process Different</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">1.</span>
                    <div>
                      <strong>Professional Documentation:</strong> We use drone photography, detailed measurements, and industry-standard damage assessment protocols that insurance companies respect.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">2.</span>
                    <div>
                      <strong>Adjuster Meetings:</strong> We meet with your adjuster on-site, ensuring all damage is documented. Adjusters often miss damage—we make sure nothing is overlooked.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">3.</span>
                    <div>
                      <strong>Supplement Requests:</strong> If additional damage is discovered during tear-off (like damaged decking), we file supplement requests immediately.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">4.</span>
                    <div>
                      <strong>Matching Law Expertise:</strong> Texas law requires insurance companies to pay for matching materials. If your shingles are discontinued, they must cover the entire roof.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl shadow-lg border-l-4 border-amber-500 mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Understanding Your Insurance Coverage</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2">Replacement Cost Value (RCV) vs. Actual Cash Value (ACV)</h4>
                  <p>
                    Most Amarillo homeowners have RCV policies, meaning insurance pays the full replacement cost. Initial checks may withhold "depreciation," but once work is completed, insurance releases the remainder. We help you collect every dollar owed—including depreciation holdbacks many homeowners don't know about.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Your Deductible</h4>
                  <p>
                    Typical Amarillo homeowners have deductibles of $1,000-$2,500 (1-2% of dwelling coverage). This is your only out-of-pocket expense if your claim is approved. For a roof replacement valued at $15,000-$25,000, you pay your deductible and insurance covers the rest.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Class 4 Shingle Upgrades</h4>
                  <p>
                    Many insurance companies now approve Class 4 impact-resistant shingle upgrades at no additional cost beyond your deductible. These premium materials cost 15-30% more than standard shingles, but insurance recognizes they reduce future claims. Plus, you'll receive 10-30% premium discounts moving forward.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Timeline Expectations</h4>
                  <p>
                    From initial inspection to claim approval typically takes 2-4 weeks. Delays can occur if adjusters are backlogged after major storms (common in Amarillo). We stay on top of your claim, following up with insurance companies to expedite the process. Once approved, installation is typically scheduled within 1-2 weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-900 mb-4">⚠️ Avoid These Common Insurance Claim Mistakes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>
                    <strong>Waiting too long to file:</strong> While Texas gives you 2 years, late claims face higher scrutiny. File within 1 year for best results.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>
                    <strong>Meeting adjusters alone:</strong> Homeowners often don't know what to point out. Adjusters may miss damage—costing you thousands.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>
                    <strong>Accepting initial denials:</strong> Many legitimate claims are initially denied due to poor documentation. We know how to appeal successfully.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>
                    <strong>Not collecting depreciation:</strong> Many homeowners don't realize they're owed additional payments after work is completed. We ensure you collect everything.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>
                    <strong>Hiring storm chasers:</strong> Out-of-state contractors who disappear after the next storm leave you without warranty support. We're Amarillo-based permanently.
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </FadeIn>

        {/* Amarillo Building Code & Permit Requirements */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Amarillo Building Code & Permit Requirements
            </h2>

            <div className="mb-8">
              <img
                src="/photos/tpo-sunset9.jpg"
                alt="Professional commercial roof installation in Amarillo TX meeting building code requirements - TPO flat roof system by 5 Star Commercial Roofing"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                The City of Amarillo takes building code compliance seriously—and for good reason. Proper installation ensures your new roof protects your home for decades. Here's everything you need to know about Amarillo's roofing requirements:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-slate-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">City of Amarillo Building Safety</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>Address:</strong><br />
                    City of Amarillo Building Safety Department<br />
                    600 S. Buchanan St<br />
                    Amarillo, TX 79101
                  </div>
                  <div>
                    <strong>Phone:</strong> (806) 378-3041
                  </div>
                  <div>
                    <strong>Permit Costs:</strong> Typically $50-150 depending on project size
                  </div>
                  <div>
                    <strong>Applicable Code:</strong> 2015 International Residential Code (IRC)
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-2 border-blue-500">
                    <strong>We Handle Everything:</strong> You'll never need to contact the building department. We pull all permits, pay all fees, and coordinate all required inspections at no extra charge.
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-slate-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Code Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <div>
                      <strong>Tear-Off Required:</strong> Existing shingles must be completely removed before new installation (no overlay permitted)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <div>
                      <strong>Drip Edge Mandatory:</strong> Metal drip edge required on all asphalt shingle roofs
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <div>
                      <strong>Ventilation:</strong> Minimum 1 sq ft of ventilation per 150 sq ft of attic space (reduced to 1:300 with balanced soffit/ridge venting)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <div>
                      <strong>Damaged Components:</strong> All damaged vents, flashings, and roof penetrations must be replaced
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <div>
                      <strong>Wind Bracing:</strong> Wind resistance calculations required based on Amarillo's wind zone
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Amarillo Wind Zone Requirements</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Amarillo is located in a high-wind zone requiring special attention to wind resistance. While specific wind speed requirements are determined using the ASCE7 Hazard Tool based on your exact location, Amarillo typically requires roofing materials rated for <strong>110 mph sustained winds or higher</strong>.
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <div>
                    <strong>Our Standard:</strong> We install Class 4 shingles rated for 110-130 mph winds using manufacturer-specified nailing patterns (typically 6 nails per shingle in high-wind zones)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <div>
                    <strong>Enhanced Protection:</strong> We use high-wind starter strips and enhanced ridge cap installation for maximum wind resistance
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <div>
                    <strong>Critical Areas:</strong> Special attention to roof edges, ridges, and gables where wind uplift forces are highest
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">The Inspection Process</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                After your roof installation is complete, a City of Amarillo building inspector will visit your property to verify code compliance. Here's what they'll check:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Inspector Will Verify:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Proper ventilation installation and airflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Drip edge installed correctly on all edges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Appropriate materials for wind zone rating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>All penetrations properly flashed and sealed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>No existing shingles remaining (complete tear-off)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Overall workmanship quality and safety</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">What You Can Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>We coordinate inspection scheduling—you don't need to be present</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Inspections typically take 30-45 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Our work passes inspection on the first attempt 99% of the time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Inspector provides approval stamp on permit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>We provide you with copies of all approved permits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Impact-Resistant Roofing for Amarillo */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">
              Impact-Resistant Roofing for Amarillo
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Given Amarillo's location in "Hail Alley" with 3-4 significant hail events annually, Class 4 impact-resistant roofing isn't a luxury—it's a necessity. Here's why we recommend it for every Amarillo hail damage replacement:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/images/asphaltshingles.jpg" alt="Class 4 impact resistant shingles for Amarillo hail protection" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4">What is Class 4 Rating?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Class 4 is the highest impact-resistance rating awarded by Underwriters Laboratories (UL 2218 test). To earn this rating, shingles must withstand repeated impacts from a 2-inch steel ball dropped from 20 feet—simulating large hail strikes.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Test Standard:</strong> UL 2218 Class 4 certification
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Impact Resistance:</strong> Withstands 2-inch steel ball drops (equivalent to baseball-size hail)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Construction:</strong> Reinforced with SBS polymer-modified asphalt for flexibility and impact absorption
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Manufacturers:</strong> Owens Corning, GAF, CertainTeed all offer excellent Class 4 options
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Financial Benefits in Amarillo</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Class 4 shingles typically cost 15-30% more than standard shingles, but the financial benefits make them cost-neutral or even profitable over time:
                </p>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold mb-2">Insurance Premium Discounts</h4>
                    <p>
                      Texas law requires insurance companies to offer discounts for impact-resistant roofing. Amarillo homeowners typically save <strong>10-30% on premiums</strong>—$200-600+ annually for most homes. Over a 20-year roof lifespan, that's $4,000-$12,000 in savings.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold mb-2">Reduced Future Claims</h4>
                    <p>
                      Class 4 shingles reduce hail damage by 90%. This means fewer future insurance claims, maintaining your favorable rates and avoiding the hassle of repeated roof replacements every 10-15 years after hailstorms.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold mb-2">Insurance-Covered Upgrades</h4>
                    <p>
                      Many insurance companies now approve Class 4 upgrades for hail damage claims at no additional cost beyond your deductible. The upgrade that would cost $2,000-$4,000 out-of-pocket is included in your covered claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6 text-center">Class 4 Shingle Options We Offer</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-brand-gold transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Owens Corning Duration Storm</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Class 4 impact rating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>130 mph wind resistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Limited lifetime warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>SureNail Technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>40+ color options</span>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-brand-gold transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">GAF Timberline HDZ</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Class 4 impact rating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>110-130 mph wind resistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Lifetime limited warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>LayerLock Technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>StrikeZone protection</span>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-brand-gold transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">CertainTeed Northgate</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Class 4 impact rating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>110-130 mph wind resistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>Limited lifetime warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>StreakFighter algae protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-gold">✓</span>
                      <span>30+ designer colors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-l-4 border-brand-gold p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4 text-center">The Bottom Line for Amarillo Homeowners</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                If you're replacing your roof due to hail damage, <strong>there's virtually no reason NOT to choose Class 4 shingles.</strong> Most insurance companies approve the upgrade at no extra cost, you'll receive immediate premium discounts, and you'll dramatically reduce the likelihood of future hail damage. In Amarillo's severe weather climate, Class 4 shingles are simply the smart choice.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Cost & Insurance Coverage */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Cost & Insurance Coverage in Amarillo
            </h2>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The most common question we hear: "How much will this cost me?" The good news is that most Amarillo hail damage roof replacements are fully covered by insurance minus your deductible. Here's a transparent breakdown:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Typical Replacement Costs (Full Price)</h3>
                <p className="text-gray-700 mb-4">If you were paying out-of-pocket without insurance:</p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Small Home (1,200-1,500 sq ft)</span>
                    <span className="text-green-700 font-bold">$8,000-$12,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Medium Home (1,800-2,200 sq ft)</span>
                    <span className="text-green-700 font-bold">$12,000-$18,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Large Home (2,500-3,000 sq ft)</span>
                    <span className="text-green-700 font-bold">$18,000-$25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Complex/Multi-Story</span>
                    <span className="text-green-700 font-bold">$25,000-$35,000+</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic mt-4">
                  Costs include complete tear-off, Class 4 shingles, all materials, labor, permits, and cleanup. Higher costs reflect steep pitches, multiple stories, or complex roof designs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Your Actual Out-of-Pocket Cost</h3>
                <p className="text-gray-700 mb-4">With approved insurance claim:</p>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-300">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-blue-700 mb-2">$1,000 - $2,500</div>
                      <div className="text-lg text-gray-700">Your Insurance Deductible</div>
                      <div className="text-sm text-gray-600 mt-2">(Typical 1-2% of dwelling coverage)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <div>Insurance covers the full replacement cost</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <div>Class 4 upgrade usually covered at no extra cost</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <div>All permits and inspections included (we pay upfront)</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <div>Collateral damage (gutters, vents) typically covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6 text-center">Understanding Insurance Payments</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg">
                  <div className="text-4xl mb-3">💰</div>
                  <h4 className="font-bold text-lg mb-3">Initial Payment (ACV)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Insurance sends initial check for Actual Cash Value—replacement cost minus depreciation. This typically covers 60-80% of total cost. You receive this after claim approval.
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg">
                  <div className="text-4xl mb-3">🏗️</div>
                  <h4 className="font-bold text-lg mb-3">Work Completion</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We complete your roof replacement using the ACV payment. You pay your deductible at this time. We handle all permitting and pass final city inspection.
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg">
                  <div className="text-4xl mb-3">✅</div>
                  <h4 className="font-bold text-lg mb-3">Final Payment (RCV)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    After completion, insurance releases the "recoverable depreciation"—the remaining 20-40%. We help you submit completion documentation to claim this final payment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">💡 Financing Options Available</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                While most hail damage claims are fully covered, we understand some homeowners face situations where financing helps:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <div>Financing your deductible while waiting for insurance payments</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <div>Upgrading to premium materials beyond insurance coverage</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <div>Adding additional improvements (gutters, skylights, etc.)</div>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                We work with multiple financing partners offering competitive rates and flexible terms. Ask about current financing promotions when you call.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Amarillo Neighborhoods We've Served */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">
              Amarillo Neighborhoods We've Served
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              We've completed hail damage roof replacements in every Amarillo neighborhood. From historic homes in Wolflin to new construction in Southwest Amarillo, we know the unique challenges each area faces.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Wolflin</h3>
                <p className="text-gray-600 mb-3">
                  Historic neighborhood with established trees and beautiful older homes. We've replaced 100+ roofs here, many after the May 2023 hailstorm. Wolflin's mature trees provide some hail protection, but golf ball-size hail still causes significant damage.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> HOA requirements, matching discontinued shingles, steep pitches on Tudor-style homes
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Sleepy Hollow</h3>
                <p className="text-gray-600 mb-3">
                  Mid-century ranch homes near Palo Duro Creek. Sleepy Hollow experienced heavy damage in June 2024 storms. We're familiar with the area's unique drainage challenges and HOA architectural review requirements.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> Low-pitch roofs, original 1960s construction details, HOA color approvals
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">The Colonies</h3>
                <p className="text-gray-600 mb-3">
                  Upscale southwest Amarillo neighborhood with premium homes. We've installed numerous high-end architectural shingles and specialty roofing systems here. Insurance claims often include extensive collateral damage due to home values.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> Complex roof designs, premium material matching, strict HOA requirements
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">San Jacinto Heights</h3>
                <p className="text-gray-600 mb-3">
                  Affordable family homes in southwest Amarillo hit hard by recent hail events. We've helped dozens of homeowners here navigate insurance claims and upgrade to Class 4 shingles for future protection.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> Maximizing insurance coverage, budget-conscious upgrades, standard architectural designs
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Tascosa</h3>
                <p className="text-gray-600 mb-3">
                  Northwest Amarillo neighborhood with high wind and hail exposure. Tascosa homes often suffer the worst damage during severe storms. We've completed 80+ replacements here, most with enhanced wind-resistant materials.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> High wind exposure, repeated hail damage, need for maximum impact resistance
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Southwest Amarillo</h3>
                <p className="text-gray-600 mb-3">
                  Rapidly growing area with newer construction (2000s-2020s). We handle both warranty work on newer roofs and complete replacements following hail events. Familiarity with modern building codes and techniques.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> Builder-grade materials, warranty navigation, newer code compliance
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Puckett West</h3>
                <p className="text-gray-600 mb-3">
                  Mid-range homes, many with original roofs approaching end-of-life. We help homeowners determine if recent hail damage qualifies for insurance replacement or if aging is the primary factor.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> Age vs. hail damage determination, maximizing coverage for older roofs
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Paramount-Terrace</h3>
                <p className="text-gray-600 mb-3">
                  Historic district with charming 1920s-1940s homes requiring careful restoration work. We balance modern hail protection with maintaining the neighborhood's historic character.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> Historic preservation, specialty materials, complex architectural details
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hillside</h3>
                <p className="text-gray-600 mb-3">
                  Affordable starter homes where maximizing insurance benefits is critical. We provide honest assessments and work hard to secure full replacement coverage when warranted.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Common issues:</strong> Budget constraints, financing options, maximizing insurance benefits
                </p>
              </div>
            </div>

            <div className="bg-brand-gold-light p-6 rounded-lg border-l-4 border-brand-gold text-center">
              <p className="text-lg text-gray-700">
                <strong>Don't see your neighborhood?</strong> We serve all of Amarillo and surrounding Potter County areas.
                Call <a href="tel:8066226041" className="text-brand-brown font-bold hover:underline">(806) 622-6041</a> to confirm service availability!
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Service Cards - Related Services */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">Related Amarillo Roofing Services</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              In addition to hail damage roof replacement, we offer comprehensive roofing services throughout Amarillo:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <InteractiveCard href="/roofing-amarillo-tx/">
                  <div className="space-y-4">
                    <img src="/images/cover-background-roofing-sunset-1024x683.jpg" alt="Complete roofing services in Amarillo TX" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">Complete Roofing Services</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Full range of residential and commercial roofing services in Amarillo. From new construction to complete replacements, we're your local roofing experts.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">View All Services →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <InteractiveCard href="/residential-roofing/">
                  <div className="space-y-4">
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing Amarillo TX" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">Residential Roofing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Expert residential roofing for Amarillo homes. Specializing in asphalt shingles, metal roofing, and impact-resistant materials designed for Texas Panhandle weather.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Explore Residential Services →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.3}>
                <InteractiveCard href="/contact/">
                  <div className="space-y-4">
                    <img src="/images/shutterstock_473737921.jpg" alt="Free roof inspection Amarillo" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">Free Roof Inspection</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Not sure if you have hail damage? We offer free professional inspections with drone photography and detailed documentation. No obligation, no pressure.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Schedule Inspection →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What hail size causes roof damage in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hail as small as 1 inch (quarter size) can damage standard asphalt shingles. In Amarillo, we frequently see hail ranging from 1.5 to 2.5 inches (golf ball to baseball size), which causes significant roof damage requiring full replacement. The May 2024 and May 2023 storms brought 1.75-2.00 inch hail that damaged thousands of Amarillo roofs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long do I have to file an insurance claim for hail damage in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  In Texas, you typically have up to 2 years to file a hail damage claim, but we strongly recommend filing within 1 year of the storm event. Insurance companies are more likely to approve claims filed promptly, and waiting too long can result in additional weathering that makes it difficult to distinguish new damage from normal aging. Call us within 72 hours of a major hail event for best results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Will insurance cover my full roof replacement in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most Amarillo homeowners' policies cover complete roof replacement if hail damage meets the "test square" threshold—typically 8 or more hail strikes visible in a 10x10 foot area. We document damage with professional photography and meet with insurance adjusters on-site to ensure nothing is missed. Our 95%+ claim approval rate reflects our expertise in this process. You'll typically pay only your deductible ($1,000-$2,500 for most policies).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do I need a permit for hail damage roof replacement in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. The City of Amarillo Building Safety Department (600 S. Buchanan St, 806-378-3041) requires permits for all roof replacements. Permit costs typically range from $50-150 depending on project size. We handle 100% of the permit process for you—application, fees, inspections, and final approval. This is included in our service at no extra charge.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What building codes apply to roof replacement in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo follows the 2015 International Residential Code (IRC). Key requirements include: complete removal of existing shingles before new installation, proper attic ventilation (1 sq ft per 150 sq ft of attic space), drip edge installation, and wind-rated materials. We install shingles rated for 110-130 mph winds as required for Amarillo's wind zone. All our installations exceed code minimums.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long does hail damage roof replacement take in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most residential hail damage roof replacements in Amarillo are completed in 1-3 days depending on home size and complexity. The insurance claim process typically takes 2-4 weeks from initial inspection to approval. Once your claim is approved, we typically schedule installation within 1-2 weeks, weather permitting. Emergency tarp service is available same-day if you're experiencing active leaks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Should I upgrade to Class 4 impact-resistant shingles in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for 10-30% insurance premium discounts in Texas. Given Amarillo's location in "Hail Alley" with 3-4 significant hail events annually, Class 4 shingles pay for themselves through reduced claims and lower premiums. Most insurance companies in Amarillo now approve Class 4 upgrades for hail damage claims.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Which Amarillo neighborhoods get hit hardest by hail?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hail storms in Amarillo can affect any neighborhood, but northwest areas (Tascosa, Wolflin) and southwest neighborhoods (The Colonies, San Jacinto Heights) historically experience higher frequencies due to storm track patterns. However, the May 2023 and June 2024 storms demonstrated that city-wide damage is common. Regardless of location, all Amarillo roofs should use impact-resistant materials.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What insurance companies do you work with in Amarillo for hail claims?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with all major insurance providers serving Amarillo including State Farm, Allstate, Farmers Insurance, USAA, Liberty Mutual, Nationwide, Progressive, American Family, Texas Farm Bureau, Shelter Insurance, and dozens of regional carriers. We've attended over 500 adjuster meetings in Amarillo and know exactly what each company's adjusters look for during inspections.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Can you help with my Amarillo HOA requirements for roof replacement?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. Many Amarillo neighborhoods—particularly Wolflin, Sleepy Hollow, and The Colonies—have HOA architectural committees that require approval for roof replacements. We're familiar with local HOA requirements and can help you submit required documentation, color samples, and architectural plans. We stock shingles pre-approved by most Amarillo HOAs.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Emergency CTA */}
        <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl shadow-lg">
          <div className="flex gap-6 items-center">
            <div className="text-6xl">🚨</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-red-800 mb-3">Storm Just Hit Amarillo? Get Emergency Service Now</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                After severe hail or wind storms, every hour counts. We offer <strong>same-day emergency inspections and tarp services</strong> to prevent interior water damage. Our typical response time is 2-4 hours after major Amarillo storm events. Don't wait for leaks to cause thousands in additional damage—call now.
              </p>
              <a href="tel:8066226041" className="btn-primary-hero bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-4 inline-block hover:scale-110 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300">
                Emergency Hail Damage: (806) 622-6041
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        
        <InternalLinks currentCity="amarillo" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center shadow-2xl">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Ready to File Your Amarillo Hail Damage Claim?</h2>
            <p className="text-2xl mb-4">
              Free Hail Inspections • 95%+ Claim Approval • Complete Permit Handling
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't let hail damage go unchecked. Even if you're not sure you have covered damage, a free professional inspection costs nothing and could save you $10,000-$25,000. We handle all insurance paperwork, permits, and city inspections—you just enjoy your new Class 4 impact-resistant roof.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:8066226041" className="btn-primary-hero text-xl bg-white text-brand-brown hover:bg-gray-100 hover:scale-110 transition-all duration-300 hover:shadow-2xl px-10 py-5">📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero text-xl border-2 border-white hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 px-10 py-5">
                Schedule Free Hail Inspection
              </a>
            </div>
            <p className="text-lg mt-8 opacity-90">
              Amarillo's hail damage experts since 2014 • 1,200+ claims processed • Licensed & Insured • Potter County building code certified
            </p>
          </FadeIn>
        </section>

      </div>
    </>
  );
}
