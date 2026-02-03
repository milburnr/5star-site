import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { OptimizedImage } from "@/components/OptimizedImage";

export const metadata: Metadata = {
  title: 'Amarillo TX Roofing | Trusted Local Roofers',
  description: "Expert residential roofing services in Amarillo TX. Roof repair, replacement, and inspections. Insurance claim assistance. Free estimates. Call 5 Star Roofing (806) 622-6041.",};

export default function ResidentialRoofingAmarilloPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Residential Roofing",
                      "url": "/residential-roofing/"
              },
              {
                      "name": "Amarillo",
                      "url": "/residential-roofing-amarillo-tx/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-amarillo-tx/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Residential Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/residential-roofing-amarillo-tx/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert residential roofing services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
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
              },
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
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
            "description": "Professional residential roofing services in Amarillo, TX. Specializing in hail damage insurance claims, complete home roof replacements, and Class 4 impact-resistant shingle installations.",
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
                "name": "How much does residential roof replacement cost in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Residential roof replacement in Amarillo typically costs $8,000-$25,000 depending on home size, roof pitch, materials, and complexity. However, most Amarillo residential roofing projects are covered by insurance due to hail damage. With insurance coverage, homeowners typically pay only their deductible ($1,000-$2,500). We provide free estimates and work directly with insurance companies to maximize your coverage."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best roofing material for Amarillo homes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For Amarillo's harsh climate with frequent hail storms, extreme heat, and high winds, Class 4 impact-resistant asphalt shingles are the best choice for most homes. These shingles withstand 2-inch hail strikes, resist winds up to 130 mph, and qualify for 10-30% insurance premium discounts in Texas. For maximum longevity, standing seam metal roofing is also excellent for Amarillo homes, lasting 50+ years."
                }
              },
              {
                "@type": "Question",
                "name": "Will my homeowners insurance cover a new roof in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Amarillo homeowners insurance policies cover complete roof replacement if hail damage is documented. The standard is 8 or more hail strikes visible in a 10x10 foot test square. Given Amarillo's location in Hail Alley with 3-4 significant hail events annually, the majority of homes have covered damage. We provide free inspections to assess whether your roof damage qualifies for insurance replacement."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a residential roof last in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Amarillo's severe weather climate, standard 3-tab asphalt shingles typically last 12-15 years before hail damage or weathering requires replacement. Architectural shingles last 15-20 years. Class 4 impact-resistant shingles can last 25-30 years with proper maintenance. Standing seam metal roofs last 50+ years. However, hail damage is the primary factor limiting roof lifespan in Amarillo—not normal aging."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need HOA approval for roof replacement in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many Amarillo neighborhoods—particularly Wolflin, Sleepy Hollow, The Colonies, and newer subdivisions in southwest Amarillo—have HOA architectural committees requiring approval for roof replacements. HOAs typically regulate shingle color, style, and materials. We're familiar with Amarillo HOA requirements and can help you submit documentation, color samples, and secure approval. We stock shingles pre-approved by most local HOAs."
                }
              },
              {
                "@type": "Question",
                "name": "How long does residential roof replacement take in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most residential roof replacements in Amarillo are completed in 1-3 days depending on home size and roof complexity. A typical single-story 2,000 sq ft home takes 1-2 days. Two-story homes with steeper pitches take 2-3 days. We work efficiently while maintaining quality standards. The insurance claim process typically takes 2-4 weeks from inspection to approval before installation begins."
                }
              },
              {
                "@type": "Question",
                "name": "Should I upgrade to Class 4 shingles for my Amarillo home?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Class 4 impact-resistant shingles reduce future hail damage by 90% and qualify for 10-30% insurance premium discounts in Texas. Given Amarillo's location in Hail Alley, Class 4 shingles typically pay for themselves through avoided future claims and premium savings within 5-7 years. Most insurance companies now approve Class 4 upgrades for hail damage claims at no additional cost beyond your deductible."
                }
              },
              {
                "@type": "Question",
                "name": "Which Amarillo neighborhoods do you serve for residential roofing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all Amarillo neighborhoods including Wolflin, Sleepy Hollow, San Jacinto Heights, Southwest Amarillo, The Colonies, Puckett West, Tascosa, Hillside, South Heights, Paramount-Terrace, and all surrounding areas. We've completed residential roofing projects throughout every corner of Amarillo plus nearby communities like Canyon, Bushland, and Lake Tanglewood."
                }
              },
              {
                "@type": "Question",
                "name": "What permits are required for residential roof replacement in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The City of Amarillo Building Safety Department (600 S. Buchanan St, 806-378-3041) requires permits for all residential roof replacements. Permit costs typically range from $50-150 depending on project size. We handle 100% of the permit process—application, fees, inspections, and final approval—at no additional charge. This is included in our standard residential roofing service."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer financing for residential roof replacement in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! While most of our residential roofing projects are insurance-covered (requiring only your deductible), we offer flexible financing options for out-of-pocket replacements, upgrades beyond insurance coverage, or deductible assistance. We work with multiple lending partners to provide competitive rates and terms that fit your budget. Ask about current financing promotions when you schedule your free estimate."
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
          backgroundImage: 'url(/images/ResidentialServices.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/75 to-yellow-900/70"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl backdrop-blur-sm bg-gradient-to-r from-black/60 to-transparent p-12 rounded-2xl border-l-4 border-brand-gold">
            <FadeIn>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9)'}}>
                Residential Roofing in <span className="text-brand-gold-light">Amarillo, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                Hail Damage Specialists • Insurance Claims Experts • Class 4 Shingles
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                Protecting Amarillo family homes since 2014. Most residential roofs = hail damage claims. We handle 100% of insurance paperwork and guarantee quality installation with premium impact-resistant materials.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  <span className="text-2xl">📞</span> Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown hover:text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl border-2 border-brand-gold">
                  Get Free Roof Inspection
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <FadeIn delay={0.1}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">
                    <AnimatedCounter to={1100} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-lg">Homes Roofed</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">95%</div>
                  <div className="text-brand-brown font-semibold text-lg">Insurance Approval</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">1-3</div>
                  <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                  <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
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
              When it comes to residential roofing in Amarillo, TX, one truth stands out: <strong>the majority of home roof replacements are due to hail damage</strong>, not normal aging. Living in America's "Hail Alley" means your home faces constant bombardment from severe weather. Since 2014, 5 Star Commercial Roofing has helped over 1,100 Amarillo homeowners navigate the insurance claims process and replace their hail-damaged roofs with premium Class 4 impact-resistant materials.
            </p>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We're not your typical residential roofer. We're <strong>insurance claim specialists</strong> who understand that most Amarillo homeowners need more than just quality installation—they need a team that can maximize insurance coverage, handle all paperwork, pull City of Amarillo permits, and deliver expert workmanship. Headquartered right here in Amarillo at 2909 S Western St, we've processed over 1,200 insurance claims with a 95%+ approval rate.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether your home was damaged in the June 2024, May 2024, or May 2023 hail storms—or you're planning a residential roof replacement before the next storm hits—we provide comprehensive service from <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">free hail damage inspection</a> through final installation. Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a> for your free residential roof assessment today.
            </p>
          </section>
        </FadeIn>

        {/* Why Choose 5 Star for Residential Roofing */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.15),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
                Why Amarillo Homeowners Choose 5 Star for Residential Roofing
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🏠 Local Amarillo Residential Experts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're headquartered in Amarillo—not out-of-state storm chasers. We've roofed homes in every Amarillo neighborhood from historic Wolflin to new developments in southwest Amarillo. We understand local HOA requirements, City of Amarillo building codes, and which materials perform best in Texas Panhandle weather. When you need warranty service, we're right here.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">⛈️ Most Residential = Hail Damage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Here's what most homeowners don't realize: <strong>85% of our residential roofing projects are insurance-covered hail damage claims.</strong> With Amarillo experiencing 3-4 significant hail events annually, chances are your roof has covered damage right now. We specialize in identifying hail damage, documenting it properly, and maximizing your insurance claim—often resulting in a new roof for only your deductible.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">📋 Complete Insurance Claims Service</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We handle 100% of insurance paperwork—from initial damage documentation through final claim payment. We meet with adjusters on-site, advocate for maximum coverage, and handle supplement requests if additional damage is discovered during tear-off. Our 95%+ approval rate means you get the new roof you deserve with minimal out-of-pocket cost.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🏛️ City Permits & HOA Approvals</h3>
                  <p className="text-gray-700 leading-relaxed">
                    City of Amarillo requires permits for all residential roof replacements, and many neighborhoods have HOA architectural committees. We handle the entire process—permit applications ($50-150), code compliance, HOA submissions, color approvals, inspections, and final sign-offs. This is included in our service at no extra charge.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🛡️ Class 4 Impact-Resistant Shingles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We exclusively recommend Class 4 shingles for Amarillo homes. These premium materials withstand 2-inch hail strikes, reduce future damage by 90%, and qualify for 10-30% insurance premium discounts in Texas. Available from leading manufacturers (Owens Corning, GAF, CertainTeed) with 20-50 year warranties and dozens of color options.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">⚡ Fast Installation Timeline</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most residential roof replacements are completed in 1-3 days depending on home size. We work efficiently while maintaining strict quality standards—complete tear-off, decking inspection and replacement as needed, proper underlayment, ventilation upgrades, and precise shingle installation. Your family's disruption is minimized while quality is maximized.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Residential Roofing Services */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">Our Amarillo Residential Roofing Services</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Comprehensive residential roofing solutions for Amarillo family homes—from hail damage insurance claims to complete roof replacements and new construction.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <InteractiveCard href="/hail-damage-repair-amarillo-tx/">
                  <div className="space-y-4">
                    <img src="/images/hail-damage-3.jpg" alt="Residential hail damage roof repair in Amarillo TX" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🌨️ Hail Damage Insurance Claims</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our #1 residential specialty. 85% of Amarillo home roof replacements are hail damage claims. Free inspections, complete insurance documentation, adjuster meetings, and guaranteed approval process. Most homeowners pay only their deductible.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Complete Hail Damage Service →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="space-y-4">
                    <img src="/images/asphaltshingles.jpg" alt="Complete residential roof replacement Amarillo Texas" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🔄 Complete Roof Replacement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Full residential roof tear-off and replacement with upgraded Class 4 materials. Complete removal of old shingles, decking inspection and repair, proper ventilation, quality underlayment, and precise installation. 1-3 day completion for most homes.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold">Expert Residential Installation</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="space-y-4">
                    <img src="/images/storm-damage-roof-repair.jpg" alt="Emergency residential roof repair Amarillo" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🚨 Emergency Roof Repairs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      24/7 emergency service for Amarillo homes. Storm damage, active leaks, wind-blown shingles—we respond within 2-4 hours with emergency tarp installation and temporary repairs. Prevents interior water damage while coordinating insurance claims and permanent replacement.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold">24/7 Emergency Response</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="space-y-4">
                    <img src="/images/SteelRoofing.jpg" alt="Metal roofing installation for Amarillo homes" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🏔️ Metal Roofing Installation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Standing seam metal roofing for Amarillo homes seeking maximum longevity and hail protection. 50+ year lifespan, superior energy efficiency, complete hail resistance (dents may occur but roofs remain watertight), and premium curb appeal.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold">Premium Metal Solutions</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="space-y-4">
                    <img src="/images/roof-inspection-texas.jpg" alt="Free residential roof inspection Amarillo TX" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🔍 Free Roof Inspections</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive residential roof inspections using drone photography. Storm damage assessments, pre-purchase home inspections, routine maintenance checks—all completely free. Detailed written reports with honest recommendations and insurance claim guidance.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold">Always Free Inspections</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="space-y-4">
                    <img src="/images/cover-background-roofing-sunset-1024x683.jpg" alt="New construction residential roofing Amarillo" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🏗️ New Construction Roofing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Residential roofing for new home construction throughout Amarillo. We work with custom builders and homeowners to install premium roofing systems—Class 4 shingles or metal roofing—engineered for Texas Panhandle weather. Proper ventilation, quality materials, expert installation.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold">New Home Roofing</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* Amarillo Neighborhoods We Serve */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-slate-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Amarillo Neighborhoods We Serve for Residential Roofing
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              We've completed residential roofing projects in every Amarillo neighborhood. From historic homes to new subdivisions, we understand the unique characteristics and requirements of each area.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Wolflin Historic District</h3>
                <p className="text-gray-600">
                  Amarillo's most prestigious neighborhood features beautiful historic homes with varied architectural styles. We've replaced dozens of roofs here, respecting the area's character while upgrading to Class 4 shingles. HOA approvals handled. Many styles available to match period architecture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Sleepy Hollow Family Homes</h3>
                <p className="text-gray-600">
                  This picturesque neighborhood near Palo Duro Creek features mid-century ranch homes. We understand the unique drainage patterns and have extensive experience with Sleepy Hollow residential roofing—from insurance claims to complete replacements. HOA requirements expertly managed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Southwest Amarillo</h3>
                <p className="text-gray-600">
                  Rapidly growing area with newer construction and modern homes. We handle both warranty work on newer roofs and complete hail damage replacements. Popular area for Class 4 shingle upgrades and metal roofing installations for maximum protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 The Colonies</h3>
                <p className="text-gray-600">
                  Upscale southwest Amarillo homes often featuring premium architectural shingles and complex roof designs. Our expert crews handle high-end residential installations with attention to detail. HOA architectural committee approvals secured. Multiple designer color options available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 San Jacinto Heights</h3>
                <p className="text-gray-600">
                  Affordable family homes in southwest Amarillo frequently affected by hail storms. We specialize in helping homeowners navigate insurance claims and upgrade to Class 4 shingles that qualify for insurance premium discounts—reducing future costs while improving protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Tascosa Northwest</h3>
                <p className="text-gray-600">
                  Northwest neighborhood with high wind and hail exposure. We've replaced numerous roofs here following major storms. Popular area for wind-resistant shingles rated 130+ mph and Class 4 hail protection. Fast insurance claim processing with high approval rates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Puckett West</h3>
                <p className="text-gray-600">
                  Mid-range homes often approaching roof end-of-life. We help homeowners assess whether recent hail damage qualifies for insurance replacement versus out-of-pocket aging roof replacement. Professional inspections determine your best financial path forward.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Paramount-Terrace Historic</h3>
                <p className="text-gray-600">
                  Charming historic district requiring careful roofing work to maintain character. We balance aesthetics with modern hail protection—Class 4 shingles in traditional colors and styles. Experienced with historic district requirements and preservation guidelines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 All Amarillo Areas</h3>
                <p className="text-gray-600">
                  We serve every Amarillo neighborhood—Hillside, South Heights, North Heights, Puckett, Colonies North, and all surrounding areas. Plus nearby communities: <strong>Canyon, Bushland, Lake Tanglewood, Bishop Hills, Timbercreek Canyon.</strong> Same expert service everywhere.
                </p>
              </div>
            </div>

            <div className="bg-brand-gold-light p-6 rounded-lg border-l-4 border-brand-gold text-center">
              <p className="text-lg text-gray-700">
                <strong>Don't see your neighborhood?</strong> We serve all of Amarillo and surrounding areas.
                Call <a href="tel:8066226041" className="text-brand-brown font-bold hover:underline">(806) 622-6041</a> to confirm service availability!
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Hail Damage = Most Residential Projects */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 p-12 rounded-3xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Why Most Amarillo Residential Roofing = Hail Damage Insurance Claims
            </h2>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Here's the reality of residential roofing in Amarillo that many homeowners don't understand: <strong>Your roof's lifespan isn't determined by normal aging—it's determined by the next hail storm.</strong> Amarillo sits squarely in "Hail Alley," experiencing 3-4 significant hail events annually. This fundamentally changes how we approach residential roofing in the Texas Panhandle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">⛈️ The Hail Reality for Amarillo Homes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>85% of our residential projects</strong> are insurance-covered hail damage claims, not age-related replacements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Average roof lifespan in Amarillo:</strong> 12-18 years before hail damage (not the 20-30 year ratings manufacturers advertise)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Most homes have covered damage right now</strong> from June 2024, May 2024, or May 2023 storms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Insurance covers complete replacement</strong> when 8+ hail strikes are visible in test squares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Homeowners typically pay only deductible</strong> ($1,000-$2,500) for complete roof replacement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">💡 What This Means for Your Home</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Don't pay out-of-pocket</strong> for an aging roof—most have covered hail damage that qualifies for insurance replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Free inspections identify covered damage</strong> that homeowners miss—often thousands in hidden hail strikes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Upgrade to Class 4 shingles</strong> during insurance replacement—reduces future damage 90% at minimal cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Premium discounts offset costs</strong>—Class 4 shingles earn 10-30% insurance savings in Texas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Timing matters</strong>—file claims within 1 year of storms for best approval rates</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-l-4 border-brand-gold p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">🎯 Our Residential Roofing Approach</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                When Amarillo homeowners call us for residential roofing, <strong>our first step is always a free hail damage inspection.</strong> Why? Because paying $12,000-$18,000 out-of-pocket for an aging roof doesn't make sense when that same roof likely has $15,000 in covered hail damage. We've helped hundreds of homeowners discover insurance-covered damage they didn't know existed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our residential roofing process starts with honest assessment: <strong>Do you have covered hail damage, or are you facing a legitimate age-related replacement?</strong> If we find covered damage (which we do in 85% of inspections after major storms), we handle 100% of the insurance claim process—documentation, adjuster meetings, negotiations, and supplement requests.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The result? Most Amarillo homeowners get complete residential roof replacements with premium Class 4 materials for only their deductible. That's the difference between paying $1,500 versus $15,000 for the same quality roof. Our expertise in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">hail damage insurance claims</a> is what sets our residential roofing service apart.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Class 4 Shingles for Amarillo Homes */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Class 4 Impact-Resistant Shingles: The Smart Choice for Amarillo Homes
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Living in Hail Alley means standard shingles are obsolete. Class 4 impact-resistant shingles are engineered specifically for severe weather climates like Amarillo—and they pay for themselves.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-lg border-l-4 border-gray-500">
                <img src="/images/asphaltshingles.jpg" alt="Class 4 impact resistant shingles for Amarillo homes" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🛡️ What Are Class 4 Shingles?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Class 4 shingles pass UL 2218 impact resistance testing—the highest rating available. They withstand 2-inch steel balls dropped from 20 feet, simulating large hail strikes. Available from premium manufacturers like Owens Corning, GAF, and CertainTeed.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Hail Protection:</strong> Reduce damage by 90% vs standard shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Wind Rating:</strong> 110-130 mph resistance when properly installed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Warranties:</strong> 20-50 year manufacturer warranties available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Aesthetics:</strong> Dozens of colors and styles for any home</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">💰 The Financial Benefits for Amarillo Homeowners</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg text-green-800 mb-2">Insurance Premium Discounts</h4>
                    <p className="text-gray-600">
                      Texas law allows 10-30% insurance premium discounts for Class 4 roofs. On a $2,000 annual premium, that's $200-$600 saved every year. Over 20 years: <strong>$4,000-$12,000 in savings.</strong>
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg text-green-800 mb-2">Avoid Future Claims</h4>
                    <p className="text-gray-600">
                      Standard shingles in Amarillo average 1-2 hail damage claims over their lifetime. Class 4 shingles reduce future claims by 90%, avoiding deductible payments ($1,000-$2,500 each) and rate increases.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg text-green-800 mb-2">Minimal Upgrade Cost</h4>
                    <p className="text-gray-600">
                      When replacing via insurance claim, most carriers approve Class 4 upgrades at little to no additional cost beyond your deductible. You get superior protection for essentially the same out-of-pocket expense.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg text-green-800 mb-2">ROI: 5-7 Years</h4>
                    <p className="text-gray-600">
                      Between premium discounts and avoided future claims, Class 4 shingles typically pay for any upgrade cost within 5-7 years—then continue saving money for decades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold-light p-8 rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">🏠 Our Recommendation for Every Amarillo Home</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We exclusively recommend Class 4 impact-resistant shingles for residential roofing in Amarillo. Standard 3-tab shingles simply don't make financial sense in Hail Alley. With 3-4 significant hail events annually, standard shingles are virtually guaranteed to fail within 12-18 years—often requiring another insurance claim.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Class 4 shingles break this cycle. They provide superior protection, qualify for insurance discounts, and typically last 25-30 years in Amarillo's climate—even with multiple hail events. When replacing your residential roof (whether insurance-covered or out-of-pocket), Class 4 shingles are the smart long-term investment for your family home.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* City Permits & HOA Requirements */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              City of Amarillo Permits & HOA Requirements for Residential Roofing
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Navigating permits and HOA approvals can be confusing. We handle 100% of this process for every residential roofing project—included in our service at no extra charge.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🏛️ City of Amarillo Building Permits</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The City of Amarillo Building Safety Department (600 S. Buchanan St, 806-378-3041) requires permits for all residential roof replacements. This isn't optional—it's Texas law. Here's what we handle:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Permit Application:</strong> Complete paperwork submission with project details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Permit Fees:</strong> $50-150 depending on home size (we handle payment)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Code Compliance:</strong> 2015 IRC requirements including ventilation, drip edge, wind ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Inspections:</strong> City inspector visit during or after installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Final Approval:</strong> Certificate of completion for your records</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 italic">
                  Working without permits risks fines, insurance claim denial, and complications when selling your home. We ensure full compliance on every project.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">🏘️ HOA Architectural Committee Approvals</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Many Amarillo neighborhoods have HOA architectural committees that regulate roofing materials, colors, and styles. Common in these areas:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Wolflin Historic District</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Sleepy Hollow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>The Colonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Southwest Amarillo subdivisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Newer developments citywide</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>What we handle:</strong> HOA submission paperwork, color samples, material specifications, architectural plans (if required), approval follow-up, and compliance documentation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Our advantage:</strong> We stock shingles pre-approved by most Amarillo HOAs. We know which colors and styles meet architectural guidelines, avoiding delays from rejected submissions.
                </p>
              </div>
            </div>

            <div className="bg-brand-gold-light p-6 rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-xl font-bold text-brand-brown mb-3">✓ Included in Every Residential Roofing Project</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Permit and HOA management is included in our residential roofing service at <strong>no additional charge.</strong> You don't pay extra for paperwork—it's simply part of doing the job right. We handle all bureaucratic requirements while you focus on selecting your new roof color and preparing for installation.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Residential Roofing Process */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Our Amarillo Residential Roofing Process
            </h2>

            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Inspection & Damage Assessment</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Every residential roofing project starts with a comprehensive free inspection. We use drone photography and close-up documentation to identify all damage—hail strikes, wind damage, wear patterns, and problem areas. If we find covered hail damage (85% of homes post-storm), we document it for insurance claims.
                    </p>
                    <p className="text-gray-600 italic">
                      Timeline: Same-day or next-day scheduling available. 30-45 minute inspection with immediate preliminary results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Claim Filing (If Applicable)</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      If we identify covered hail damage, we help you file an insurance claim with complete documentation. We submit professional reports to your insurance company, coordinate adjuster meetings, and advocate for maximum coverage. Our 95%+ approval rate reflects our expertise in this process.
                    </p>
                    <p className="text-gray-600 italic">
                      Timeline: 2-4 weeks from claim filing to approval. We handle all paperwork and communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Material Selection & Permits</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Once approval is secured (or if paying out-of-pocket), we help you select materials—Class 4 shingles in your preferred color, ventilation upgrades, and any additional improvements. We simultaneously pull City of Amarillo permits and secure HOA approvals (if required). All included in our service.
                    </p>
                    <p className="text-gray-600 italic">
                      Timeline: 3-7 days for permits and HOA approvals. Material ordering begins immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">4</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Installation</h3>
                    <OptimizedImage
        src="/images/cover-background-roofing-sunset"
        alt="Professional roofing crew installing residential shingles in Amarillo TX at sunset"
        className="w-full h-64 object-cover rounded-lg mb-6"
        priority={true}
        sizes="100vw"
      />
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Our factory-certified crews complete your residential roof replacement in 1-3 days. Complete tear-off, decking inspection and replacement as needed, quality underlayment, proper ventilation, and precise shingle installation following manufacturer specifications. Daily cleanup keeps your property presentable.
                    </p>
                    <p className="text-gray-600 italic">
                      Timeline: 1 day for single-story homes under 2,000 sq ft. 2-3 days for larger or complex homes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">5</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Final Inspection & Warranty</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      City of Amarillo inspector verifies code compliance (we coordinate scheduling). We conduct our own final quality inspection—ensuring every detail meets our standards. You receive manufacturer warranties (20-50 years), workmanship warranty, and all documentation for your records.
                    </p>
                    <p className="text-gray-600 italic">
                      Timeline: Final inspection within 1-3 days of completion. All paperwork provided immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-brand-gold">6</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Payment Processing</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      For insurance-covered projects, we help you navigate the payment process including recoverable depreciation collection and supplement claims if additional damage was discovered. We ensure you receive every dollar you're entitled to under your policy.
                    </p>
                    <p className="text-gray-600 italic">
                      Timeline: Final payments typically released 7-14 days after completion. We assist with all paperwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Emergency Services */}
        <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl shadow-lg">
          <div className="flex gap-6 items-center">
            <div className="text-6xl">🚨</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-red-800 mb-3">24/7 Emergency Residential Roofing in Amarillo</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Storm damage your Amarillo home? Don't wait for leaks to damage your interior. We provide <strong>24/7 emergency residential roofing services</strong> with 2-4 hour response times throughout Amarillo and surrounding areas.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Emergency services include: <strong>Emergency tarp installation</strong> to prevent water intrusion, <strong>temporary leak repairs</strong> to protect your home, <strong>same-day storm damage inspections</strong>, and <strong>rapid insurance claim initiation</strong>. Fast action minimizes interior damage and simplifies insurance claims.
              </p>
              <a href="tel:8066226041" className="btn-primary-hero bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-4 inline-block hover:scale-110 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300">
                📞 Emergency: (806) 622-6041
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Frequently Asked Questions: Residential Roofing in Amarillo
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How much does residential roof replacement cost in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Residential roof replacement in Amarillo typically costs $8,000-$25,000 depending on home size, roof pitch, materials, and complexity. However, most Amarillo residential roofing projects are covered by insurance due to hail damage. With insurance coverage, homeowners typically pay only their deductible ($1,000-$2,500). We provide free estimates and work directly with insurance companies to maximize your coverage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What is the best roofing material for Amarillo homes?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For Amarillo's harsh climate with frequent hail storms, extreme heat, and high winds, Class 4 impact-resistant asphalt shingles are the best choice for most homes. These shingles withstand 2-inch hail strikes, resist winds up to 130 mph, and qualify for 10-30% insurance premium discounts in Texas. For maximum longevity, standing seam metal roofing is also excellent for Amarillo homes, lasting 50+ years.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Will my homeowners insurance cover a new roof in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most Amarillo homeowners insurance policies cover complete roof replacement if hail damage is documented. The standard is 8 or more hail strikes visible in a 10x10 foot test square. Given Amarillo's location in Hail Alley with 3-4 significant hail events annually, the majority of homes have covered damage. We provide free inspections to assess whether your roof damage qualifies for insurance replacement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long does a residential roof last in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  In Amarillo's severe weather climate, standard 3-tab asphalt shingles typically last 12-15 years before hail damage or weathering requires replacement. Architectural shingles last 15-20 years. Class 4 impact-resistant shingles can last 25-30 years with proper maintenance. Standing seam metal roofs last 50+ years. However, hail damage is the primary factor limiting roof lifespan in Amarillo—not normal aging.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do I need HOA approval for roof replacement in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Many Amarillo neighborhoods—particularly Wolflin, Sleepy Hollow, The Colonies, and newer subdivisions in southwest Amarillo—have HOA architectural committees requiring approval for roof replacements. HOAs typically regulate shingle color, style, and materials. We're familiar with Amarillo HOA requirements and can help you submit documentation, color samples, and secure approval. We stock shingles pre-approved by most local HOAs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long does residential roof replacement take in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most residential roof replacements in Amarillo are completed in 1-3 days depending on home size and roof complexity. A typical single-story 2,000 sq ft home takes 1-2 days. Two-story homes with steeper pitches take 2-3 days. We work efficiently while maintaining quality standards. The insurance claim process typically takes 2-4 weeks from inspection to approval before installation begins.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Should I upgrade to Class 4 shingles for my Amarillo home?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. Class 4 impact-resistant shingles reduce future hail damage by 90% and qualify for 10-30% insurance premium discounts in Texas. Given Amarillo's location in Hail Alley, Class 4 shingles typically pay for themselves through avoided future claims and premium savings within 5-7 years. Most insurance companies now approve Class 4 upgrades for hail damage claims at no additional cost beyond your deductible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do you offer financing for residential roof replacement in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! While most of our residential roofing projects are insurance-covered (requiring only your deductible), we offer flexible financing options for out-of-pocket replacements, upgrades beyond insurance coverage, or deductible assistance. We work with multiple lending partners to provide competitive rates and terms that fit your budget. Ask about current financing promotions when you schedule your free estimate.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Related Services & Internal Links */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Related Amarillo Roofing Services
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Comprehensive roofing solutions for all Amarillo properties—residential, commercial, and specialty services.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="/hail-damage-repair-amarillo-tx/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🌨️ Hail Damage Repair</h3>
                <p className="text-gray-600">
                  Specialized hail damage assessment, insurance claims processing, and complete roof replacement with Class 4 materials. 95%+ approval rate.
                </p>
              </a>

              <a href="/roofing-amarillo-tx/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏢 All Amarillo Services</h3>
                <p className="text-gray-600">
                  Complete overview of our Amarillo roofing services—residential, commercial, emergency, inspections, and storm damage response.
                </p>
              </a>

              <a href="/commercial-roofing/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏭 Commercial Roofing</h3>
                <p className="text-gray-600">
                  TPO, EPDM, metal roofing systems for Amarillo businesses. Flat roof specialists with minimal operational disruption.
                </p>
              </a>

              <a href="/roofing-services-canyon-tx/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Canyon, TX Roofing</h3>
                <p className="text-gray-600">
                  Residential and commercial roofing services in Canyon, TX—just 15 miles south of Amarillo. Same expert service.
                </p>
              </a>

              <a href="/service-areas/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🗺️ All Service Areas</h3>
                <p className="text-gray-600">
                  Serving the entire Texas Panhandle—Amarillo, Canyon, Borger, Pampa, Dumas, and all surrounding communities.
                </p>
              </a>

              <a href="/residential-roofing/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏠 Residential Services</h3>
                <p className="text-gray-600">
                  General residential roofing information—materials, processes, warranties, and what to expect during replacement.
                </p>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        
        <InternalLinks currentCity="amarillo" currentService="residential-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center shadow-2xl">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Ready to Replace Your Amarillo Home's Roof?</h2>
            <p className="text-2xl mb-4">
              Free Hail Inspections • 95% Insurance Approval • Class 4 Shingles • Expert Installation
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Most Amarillo homes have covered hail damage right now. Don't pay out-of-pocket for a new roof when insurance will cover it. Call for your free inspection—we'll identify covered damage, handle all paperwork, and deliver a quality roof for only your deductible.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:8066226041" className="btn-primary-hero text-xl bg-white text-brand-brown hover:bg-gray-100 hover:scale-110 transition-all duration-300 hover:shadow-2xl px-10 py-5">
                📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero text-xl border-2 border-white hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 px-10 py-5">
                Schedule Free Inspection
              </a>
            </div>
            <p className="text-lg mt-8 opacity-90">
              Serving Amarillo families since 2014 • 1,100+ Homes Roofed • Licensed & Insured
            </p>
          </FadeIn>
        </section>

      </div>
    </>
  );
}
