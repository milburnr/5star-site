import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Amarillo TX Roofing | Trusted Local Roofers',
  description: 'roofing in Amarillo specializing in hail damage repair and storm restoration. Amarillo experiences 8-12 hailstorms annually.',
};

export default function AmarilloRoofingPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roofing",
                      "url": "/roofing/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roofing-amarillo-tx/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roofing-amarillo-tx/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/roofing-amarillo-tx/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "@id": "https://5starroofingpros.com/roofing-amarillo-tx/",
            "name": "5 Star Commercial Roofing",
            "image": "https://5starroofingpros.com/images/5-star-with-letters-1.png",
            "url": "https://5starroofingpros.com/roofing-amarillo-tx/",
            "telephone": "+18066226041",
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
              "latitude": 35.1856,
              "longitude": -101.8358
            },
            "parentOrganization": {
              "@id": "https://5starroofingpros.com/#organization"
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
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://share.google/fl2pyMYIGwDQTd5KX"
            ]
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
                "name": "How often does Amarillo experience hail storms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amarillo experiences 3-4 significant hail events per year on average. The Texas Panhandle sits in America's 'Hail Alley,' with peak hail season running from April through June. Even small hail (golf ball size) can cause thousands of dollars in roof damage that may be covered by insurance."
                }
              },
              {
                "@type": "Question",
                "name": "Will my insurance cover hail damage to my Amarillo roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Amarillo homeowners have insurance policies that cover hail damage roof replacement. Typically, if 8 or more hail strikes are visible in a 10x10 foot 'test square,' insurance companies approve full roof replacement. We provide free inspections and handle all claim documentation to maximize your coverage."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a roof replacement take in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most residential roof replacements in Amarillo are completed in 1-3 days depending on the size of your home and weather conditions. We work efficiently while maintaining quality standards. Commercial projects typically take 3-7 days depending on building size and roofing system complexity."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing materials work best in Amarillo's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For Amarillo's harsh climate with frequent hail, extreme heat, and high winds, we recommend Class 4 impact-resistant asphalt shingles or standing seam metal roofing. These materials withstand 2-inch hail strikes, reflect heat to reduce energy costs, and resist winds up to 130-140 mph. They also qualify for insurance premium discounts in Texas."
                }
              },
              {
                "@type": "Question",
                "name": "Do you serve all Amarillo neighborhoods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We serve all Amarillo neighborhoods including Wolflin, Sleepy Hollow, San Jacinto Heights, Southwest Amarillo, Puckett West, Tascosa, Hillside, South Heights, Colonies, Paramount-Terrace, and all surrounding areas. We also serve nearby communities like Canyon, Bushland, and Lake Tanglewood."
                }
              },
              {
                "@type": "Question",
                "name": "How much does roof replacement cost in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amarillo roof replacement costs typically range from $8,000-$25,000 for residential homes, depending on size, pitch, materials, and complexity. However, most hail damage repairs are fully covered by insurance minus your deductible (usually $1,000-$2,500). We provide free estimates and work directly with insurance companies to minimize your out-of-pocket costs."
                }
              },
              {
                "@type": "Question",
                "name": "What insurance companies do you work with in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with all major insurance companies serving Amarillo including State Farm, Allstate, Farmers Insurance, USAA, Liberty Mutual, Nationwide, Progressive, American Family, Texas Farm Bureau, and local providers. We have extensive experience navigating the claims process and meeting with adjusters to ensure maximum coverage approval."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer emergency roofing services in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We provide 24/7 emergency roofing services throughout Amarillo. After severe storms, we prioritize emergency calls and typically arrive within 2-4 hours for urgent leak repairs and tarp installations. Our rapid response helps minimize interior damage and gets you on the path to a full roof replacement quickly."
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
          backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-orange-900/50 to-yellow-900/40"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl backdrop-blur-sm bg-gradient-to-r from-black/50 to-transparent p-12 rounded-2xl border-l-4 border-brand-gold">
            <FadeIn>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9)'}}>
                Expert Roofing Services in <span className="text-brand-gold-light">Amarillo, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                Your Trusted Local Roofing Contractor Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                Headquartered in Amarillo and specializing in hail damage repair, residential roofing, and commercial roofing throughout the Texas Panhandle. Free inspections and full insurance claim assistance.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  <span className="text-2xl">📞</span> Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown hover:text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl border-2 border-brand-gold">
                  Get Free Inspection
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
                    <AnimatedCounter to={10} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-lg">Years in Amarillo</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">
                    <AnimatedCounter to={1500} suffix="+" />
                  </div>
                  <div className="text-brand-brown font-semibold text-lg">Local Projects</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">24/7</div>
                  <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Welcome to 5 Star Commercial Roofing, Amarillo's premier roofing contractor headquartered right here in the Texas Panhandle. Since 2014, we've been protecting Amarillo homes and businesses from the harsh realities of West Texas weather—particularly the devastating hail storms that strike our region multiple times every year.
            </p>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Located at 2909 S Western St in Amarillo, we're your local roofing experts who understand exactly what your roof faces living in "Hail Alley." From <a href="/hail-damage-roof-repair-amarillo-texas/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">hail damage assessment and insurance claims</a> to complete <a href="/residential-roofing-amarillo-texas/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">residential roof replacement</a> and <a href="/commercial-roofing-amarillo-texas/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">commercial roofing systems</a>, we've completed over 1,500 projects across every Amarillo neighborhood.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              When hail strikes, time is critical. We offer same-day emergency inspections and work directly with your insurance company to maximize coverage—our goal is getting your claim approved and your roof replaced with minimal out-of-pocket expense. Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041)</a> for your free roof inspection today.
            </p>
          </section>
        </FadeIn>

        {/* Why Choose Us for Amarillo */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.15),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
                Why Amarillo Homeowners and Businesses Choose 5 Star Roofing
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🏠 Headquartered in Amarillo</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike out-of-state "storm chasers" who disappear after the next weather event, we're permanently located in Amarillo at 2909 S Western St. We're your neighbors—we shop at the same stores, our kids attend the same schools, and we're invested in this community for the long term. When you need warranty service or have questions, we're right here.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">⛈️ Hail Damage Specialists</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We've assessed and repaired hail damage from every major Amarillo storm since 2014. We know exactly what insurance adjusters look for, how to document damage properly, and which roofing materials provide the best hail protection. Our expertise means higher claim approval rates and faster project completion for you.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">📋 Insurance Claim Experts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We work with every major insurance company serving Amarillo—State Farm, Allstate, Farmers, USAA, Texas Farm Bureau, and more. We handle all the paperwork, meet with adjusters on-site, and advocate for maximum coverage. Most of our clients pay only their deductible (typically $1,000-$2,500) with insurance covering the rest.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">⚡ Rapid Emergency Response</h3>
                  <p className="text-gray-700 leading-relaxed">
                    After severe storms, we prioritize emergency calls with 2-4 hour response times throughout Amarillo. We provide emergency tarp services to prevent interior water damage while coordinating your insurance claim and scheduling permanent repairs. Our 24/7 availability means you're never left waiting during a roofing crisis.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">🏆 Quality Workmanship & Materials</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We exclusively use premium Class 4 impact-resistant shingles from leading manufacturers (Owens Corning, GAF, CertainTeed) backed by 20-50 year warranties. Our installation crews are factory-certified and follow manufacturer specifications precisely—ensuring your warranty remains valid and your roof performs as designed.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">💰 Free Inspections Always</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We never charge for roof inspections—whether you need a storm damage assessment, pre-purchase inspection, or routine maintenance check. Our comprehensive inspections include drone photography, detailed reports, and honest recommendations. No pressure, no obligation, just professional advice you can trust.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Our Amarillo Roofing Services */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">Our Amarillo Roofing Services</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Comprehensive roofing solutions for every Amarillo property—from emergency storm repairs to complete roof replacements for homes and businesses.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <InteractiveCard href="/hail-damage-roof-repair-amarillo-texas/">
                  <div className="space-y-4">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage roof repair in Amarillo TX - Insurance claim assistance" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🌨️ Hail Damage Roof Repair</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our #1 specialty. Free storm damage inspections, complete insurance documentation, adjuster meetings, and full roof replacement with Class 4 impact-resistant materials. Most Amarillo hail damage is covered by insurance.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Learn More About Hail Repair →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <InteractiveCard href="/residential-roofing-amarillo-texas/">
                  <div className="space-y-4">
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services in Amarillo TX - New roof installation" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🏠 Residential Roofing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete roofing solutions for Amarillo homes—new installations, full replacements, repairs, and maintenance. We work with asphalt shingles, metal roofing, and specialty systems tailored to your home's architecture and your budget.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Explore Residential Services →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.3}>
                <InteractiveCard href="/commercial-roofing-amarillo-texas/">
                  <div className="space-y-4">
                    <img src="/images/CommercialRoofing.jpeg" alt="Commercial roofing services in Amarillo TX - TPO and flat roof systems" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🏢 Commercial Roofing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Expert commercial roofing for Amarillo businesses—TPO, PVC, EPDM, modified bitumen, and built-up roofing systems. We handle everything from retail centers to industrial facilities with minimal disruption to your operations.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">View Commercial Solutions →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.4}>
                <InteractiveCard href="/emergency-roof-repair-amarillo-texas/">
                  <div className="space-y-4">
                    <img src="/images/storm-damage-roof-repair.jpg" alt="Emergency roof repair in Amarillo TX - 24/7 storm damage response" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🚨 Emergency Roof Repairs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      24/7 emergency roofing services throughout Amarillo. Active leaks, storm damage, wind-blown shingles—we respond within 2-4 hours with emergency tarps and temporary repairs, then coordinate permanent solutions quickly.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Emergency Service Info →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.5}>
                <InteractiveCard href="/roof-inspection-amarillo-texas/">
                  <div className="space-y-4">
                    <img src="/images/roof-inspection-texas.jpg" alt="Professional roof inspection in Amarillo TX - Free assessment" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🔍 Free Roof Inspections</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive roof inspections using drone technology and professional photography. Storm damage assessments, pre-purchase inspections, routine maintenance checks—all completely free with detailed written reports.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Schedule Inspection →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.6}>
                <InteractiveCard href="/roof-replacement-amarillo-texas/">
                  <div className="space-y-4">
                    <img src="/images/asphaltshingles.jpg" alt="Complete roof replacement in Amarillo TX - Impact resistant shingles" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-bold text-brand-brown">🔄 Complete Roof Replacement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Full roof tear-off and replacement with upgraded materials. We remove old shingles, inspect decking for damage, replace as needed, and install new roofing systems built to withstand decades of Amarillo weather.
                    </p>
                    <div className="pt-4">
                      <span className="text-brand-gold font-bold hover:underline">Replacement Details →</span>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-slate-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Amarillo Neighborhoods We Serve
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              We've completed roofing projects in every corner of Amarillo. Wherever you live in the city or surrounding areas, we're ready to help protect your property.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Wolflin</h3>
                <p className="text-gray-600">
                  One of Amarillo's most established neighborhoods, Wolflin features beautiful historic homes with varied roofing styles. We've replaced dozens of roofs here, respecting the area's architectural character while upgrading to modern hail-resistant materials.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Sleepy Hollow</h3>
                <p className="text-gray-600">
                  This picturesque neighborhood near Palo Duro Creek requires specialized roofing approaches for its mid-century ranch homes. We understand the unique drainage challenges and have extensive experience working on Sleepy Hollow properties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 San Jacinto Heights</h3>
                <p className="text-gray-600">
                  Affordable family homes in this southwest Amarillo neighborhood often face hail damage from severe storms. We work with homeowners here to navigate insurance claims and upgrade to Class 4 shingles that qualify for premium discounts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Southwest Amarillo</h3>
                <p className="text-gray-600">
                  This rapidly growing area features newer construction with modern roofing systems. We handle both warranty repairs on newer homes and complete replacements for properties damaged in recent hailstorms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Puckett West</h3>
                <p className="text-gray-600">
                  These mid-range homes often have original roofs approaching end-of-life. We help Puckett West residents assess whether recent hail damage qualifies for insurance replacement versus paying out-of-pocket for an aging roof.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Tascosa</h3>
                <p className="text-gray-600">
                  This northwest neighborhood experiences significant wind and hail exposure. We've replaced numerous roofs here following major storm events, with many homeowners choosing upgraded wind-resistant shingles rated for 130+ mph winds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Hillside</h3>
                <p className="text-gray-600">
                  These affordable starter homes often require complete roof replacements after hail events. We work closely with Hillside homeowners to maximize insurance coverage and offer financing options when needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 The Colonies</h3>
                <p className="text-gray-600">
                  These upscale homes in southwest Amarillo often feature premium roofing materials and complex designs. Our expert crews handle high-end architectural shingles and specialty installations with attention to detail.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Paramount-Terrace</h3>
                <p className="text-gray-600">
                  This historic district features charming older homes requiring careful roofing work to maintain character while improving performance. We balance aesthetics with modern hail protection in this beloved neighborhood.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 South Heights</h3>
                <p className="text-gray-600">
                  Working-class neighborhoods like South Heights deserve quality roofing too. We provide honest pricing and work with homeowners to maximize insurance benefits, ensuring every Amarillo family gets a solid roof overhead.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">📍 Nearby Communities</h3>
                <p className="text-gray-600">
                  We also serve <strong>Canyon, Bushland, Lake Tanglewood, Bishop Hills, Timbercreek Canyon</strong>, and other communities within 30 miles of Amarillo with the same expert service and rapid response times.
                </p>
              </div>
            </div>

            <div className="bg-brand-gold-light p-6 rounded-lg border-l-4 border-brand-gold text-center">
              <p className="text-lg text-gray-700">
                <strong>Don't see your neighborhood listed?</strong> We serve all of Amarillo and the surrounding Texas Panhandle.
                Call <a href="tel:8066226041" className="text-brand-brown font-bold hover:underline">(806) 622-6041)</a> to confirm we serve your area!
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Amarillo's Climate & Your Roof */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              How Amarillo's Climate Impacts Your Roof
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">⛈️ Hail Damage Risk - Extremely High</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Amarillo sits squarely in America's "Hail Alley," experiencing <strong>3-4 significant hail events per year</strong> on average. The Texas Panhandle ranks among the top 20 locations nationwide for hail frequency and severity.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Peak Hail Season:</strong> April through June, with May being the most active month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Typical Hail Size:</strong> Golf ball to baseball size (1.75-2.75 inches) common during severe storms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Recent Major Events:</strong> May 2021, April 2023, and June 2024 storms caused widespread damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Protection Solution:</strong> Class 4 impact-resistant shingles withstand 2-inch hail strikes and reduce damage by 90%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">☀️ Extreme Heat & UV Damage</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Amarillo summers are brutal on roofing materials. Average high temperatures reach <strong>91-95°F from June through August</strong>, with frequent days exceeding 100°F. Intense UV radiation at our elevation (3,600 feet) accelerates shingle aging.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Temperature Impact:</strong> Roof surface temperatures can reach 150-170°F on sunny days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Shingle Degradation:</strong> UV exposure causes granule loss, brittleness, and cracking over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Energy Costs:</strong> Poor roofing materials increase attic temperatures, raising cooling bills 15-25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Best Materials:</strong> Cool roof technology and reflective coatings reduce heat absorption</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 rounded-xl shadow-lg border-l-4 border-gray-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💨 High Wind Exposure</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The flat, open Texas Panhandle offers little wind protection. Amarillo experiences <strong>average wind speeds of 13.6 mph</strong>, making it one of America's windiest cities. Severe thunderstorms bring 60-80 mph gusts regularly.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span><strong>Wind Statistics:</strong> Sustained winds exceed 30 mph on 35+ days per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span><strong>Storm Damage:</strong> Severe thunderstorms produce 60-80 mph gusts that can blow off improperly installed shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span><strong>Vulnerable Areas:</strong> Ridge caps, roof edges, and gables face highest wind pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span><strong>Wind Resistance:</strong> We install shingles rated for 110-130 mph winds using proper nailing patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-cyan-900 mb-4">❄️ Winter Weather Challenges</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  While less severe than hail, Amarillo winters bring <strong>23 inches of snow annually</strong> plus freeze-thaw cycles that stress roofing systems. Average lows reach 20-25°F from December through February.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span><strong>Ice Dam Risk:</strong> Moderate, particularly on poorly insulated roofs with inadequate attic ventilation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span><strong>Freeze-Thaw Cycles:</strong> 50-60 cycles per winter cause expansion/contraction that stresses shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span><strong>Occasional Blizzards:</strong> Heavy snow and ice accumulation requires structurally sound roofing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span><strong>Prevention:</strong> Proper attic insulation, ventilation, and quality underlayment prevent winter damage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-l-4 border-brand-gold p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">🎯 The Bottom Line for Amarillo Roofs</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Amarillo's climate is among the harshest in America for roofing systems. Your roof faces <strong>frequent hail bombardment, extreme temperature swings (120°F+ annual range), intense UV radiation, and constant high winds</strong>. Standard 3-tab shingles simply don't survive here.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That's why we recommend—and almost exclusively install—<strong>Class 4 impact-resistant architectural shingles</strong> or <strong>standing seam metal roofing</strong> for Amarillo properties. These premium materials are engineered specifically for severe weather climates and typically last 30-50 years versus 12-18 years for standard shingles. Plus, they qualify for <strong>10-30% insurance premium discounts</strong> in Texas, paying for the upgrade over time.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Local Landmarks & Service Areas */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Proudly Serving Homes & Businesses Near Amarillo's Landmarks
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              We're your neighbors in Amarillo. We know this city inside and out—and we've completed roofing projects near every major landmark and throughout all surrounding areas.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🚗 Cadillac Ranch</h3>
                <p className="text-gray-600">
                  Amarillo's most iconic roadside attraction. We serve homes and ranches throughout the I-40 corridor and western Amarillo, just minutes from this famous art installation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏜️ Palo Duro Canyon</h3>
                <p className="text-gray-600">
                  America's second-largest canyon is just 25 miles south. We serve all homes in Canyon, TX and properties throughout Randall County with expert roofing services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🐂 Stockyards Historic District</h3>
                <p className="text-gray-600">
                  We've completed commercial roofing projects throughout downtown Amarillo, including properties near the historic stockyards and Route 66 corridor.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏛️ West Texas A&M University</h3>
                <p className="text-gray-600">
                  Serving student housing, faculty homes, and residential properties throughout Canyon and the Buffalo Stadium area with reliable roofing services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🏥 BSA Health System</h3>
                <p className="text-gray-600">
                  Commercial and residential roofing near Amarillo's major medical facilities. We serve the Medical District and surrounding neighborhoods with rapid response times.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🛍️ Westgate Mall Area</h3>
                <p className="text-gray-600">
                  Extensive experience with commercial flat roofs for retail centers plus residential service throughout west Amarillo's major shopping corridors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">✈️ Rick Husband Amarillo International Airport</h3>
                <p className="text-gray-600">
                  Serving homes and businesses near the airport and throughout east Amarillo with the same expert service our local clients expect.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">⚡ Pantex Plant Area</h3>
                <p className="text-gray-600">
                  We serve residential properties near Pantex and throughout the northeastern Potter County area, providing secure, professional roofing services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🎭 Amarillo Civic Center</h3>
                <p className="text-gray-600">
                  Commercial and residential roofing throughout downtown Amarillo and surrounding neighborhoods near the Civic Center and convention district.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Insurance Claims Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">
              Insurance Claims Assistance in Amarillo
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Navigating insurance claims can be overwhelming, especially after storm damage. We've successfully processed <strong>over 1,200 insurance claims</strong> for Amarillo homeowners and businesses, working with every major insurance company serving our area. Our expertise ensures you receive maximum coverage with minimal hassle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏢 Insurance Companies We Work With</h3>
                <p className="text-gray-600 mb-4">We have extensive experience working with all major insurance providers serving Amarillo:</p>
                <div className="grid grid-cols-2 gap-3 text-gray-700">
                  <div>• State Farm</div>
                  <div>• Allstate</div>
                  <div>• Farmers Insurance</div>
                  <div>• USAA</div>
                  <div>• Liberty Mutual</div>
                  <div>• Nationwide</div>
                  <div>• Progressive</div>
                  <div>• American Family</div>
                  <div>• Texas Farm Bureau</div>
                  <div>• Safeco</div>
                  <div>• Travelers</div>
                  <div>• Shelter Insurance</div>
                </div>
                <p className="text-gray-600 mt-4 italic">Plus dozens of regional and local providers serving the Amarillo market.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">📋 Our Insurance Claim Process</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-gold">1.</span>
                    <span><strong>Free Inspection:</strong> We document all damage with professional photography and measurements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-gold">2.</span>
                    <span><strong>Claim Filing:</strong> We help you file your claim with detailed damage documentation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-gold">3.</span>
                    <span><strong>Adjuster Meeting:</strong> We meet with your insurance adjuster on-site to ensure nothing is missed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-gold">4.</span>
                    <span><strong>Coverage Negotiation:</strong> We advocate for full replacement coverage if warranted</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-gold">5.</span>
                    <span><strong>Approval & Scheduling:</strong> Once approved, we schedule your roof replacement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-gold">6.</span>
                    <span><strong>Completion:</strong> We handle final inspections and supplement requests if needed</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg border-l-4 border-green-500 mb-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">💡 What Amarillo Homeowners Should Know About Insurance Claims</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Timing Matters:</strong> Insurance companies require storm damage claims within 1-2 years of the event. In Texas, you have up to 2 years, but prompt filing increases approval rates. We recommend inspections within 72 hours of major storms.
                </p>
                <p>
                  <strong>Full Replacement Coverage:</strong> If hail damage affects 8+ shingles in a 10x10 test square (industry standard), most policies cover complete roof replacement—not just repairs. We document this properly to justify full replacement claims.
                </p>
                <p>
                  <strong>Matching Requirements:</strong> Texas law requires insurance companies to pay for matching shingles. If your damaged roof is discontinued, they must cover replacement of the entire roof to ensure consistent appearance.
                </p>
                <p>
                  <strong>Your Deductible:</strong> Most Amarillo homeowners have $1,000-$2,500 deductibles (1-2% of dwelling coverage). This is typically your only out-of-pocket expense for insurance-covered roof replacement.
                </p>
                <p>
                  <strong>Depreciation & RCV:</strong> Initial payments may withhold depreciation. Once work is complete, insurance releases "Recoverable Depreciation" payments. We help you collect every dollar you're entitled to.
                </p>
                <p>
                  <strong>Supplement Requests:</strong> If adjusters miss damage or unforeseen issues arise during tear-off (like decking damage), we file supplement requests to ensure full coverage.
                </p>
              </div>
            </div>

            <div className="bg-brand-gold-light p-8 rounded-lg border-l-4 border-brand-gold text-center">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">🎯 Our Claim Approval Success Rate: 95%+</h3>
              <p className="text-lg text-gray-700 mb-6">
                We know what insurance adjusters look for and how to document damage properly. Most Amarillo homeowners are surprised to learn their "minor" hail damage qualifies for full roof replacement under their existing policy.
              </p>
              <a href="/contact/" className="btn-primary text-lg">
                Get Your Free Insurance Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Materials Section */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Premium Roofing Materials for Amarillo
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              We exclusively install premium roofing materials engineered for severe weather climates. Your Amarillo roof deserves materials that can handle hail, heat, wind, and everything the Texas Panhandle throws at it.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/images/asphaltshingles.jpg" alt="Class 4 impact resistant asphalt shingles for Amarillo hail protection" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🛡️ Class 4 Impact-Resistant Shingles</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our #1 recommended material for Amarillo homes. Class 4 shingles pass UL 2218 testing, meaning they withstand 2-inch steel ball drops from 20 feet—simulating large hail impacts. Available from Owens Corning, GAF, and CertainTeed.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Hail Protection:</strong> Reduces hail damage by 90% compared to standard shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Insurance Discounts:</strong> Qualify for 10-30% premium reductions in Texas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Warranties:</strong> 20-50 year manufacturer warranties available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Wind Rating:</strong> 110-130 mph wind resistance when properly installed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Aesthetic Options:</strong> Dozens of colors and styles to match any home</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">
                  Typical cost: $350-$550 per square installed. Most insurance claims cover Class 4 upgrades in Amarillo.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/images/SteelRoofing.jpg" alt="Standing seam metal roofing for maximum Amarillo hail protection" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏔️ Standing Seam Metal Roofing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The ultimate hail protection. Metal roofs may dent from severe hail but remain completely watertight. Increasingly popular in Amarillo for homeowners tired of replacing roofs every 10-15 years after hailstorms.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Longevity:</strong> 50+ year lifespan—likely the last roof you'll ever need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Hail Resistance:</strong> Dents may occur but roofs remain watertight after any hail event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Energy Efficiency:</strong> Reflective coatings reduce cooling costs 15-25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Fire Rating:</strong> Class A fire resistance—important for wildfire-prone areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Wind Rating:</strong> 140+ mph wind resistance with proper installation</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">
                  Typical cost: $800-$1,400 per square installed. Higher upfront cost but lowest lifetime cost due to longevity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/images/TPO1.jpg" alt="TPO commercial roofing system for Amarillo businesses" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏢 TPO Commercial Roofing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Thermoplastic Polyolefin (TPO) is the most popular commercial roofing system for Amarillo businesses. White reflective membrane reduces cooling costs while heat-welded seams create watertight protection.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Energy Savings:</strong> ENERGY STAR rated, reduces commercial cooling costs significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Durability:</strong> Resistant to punctures, tears, hail damage, and UV degradation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Warranties:</strong> 15-25 year manufacturer warranties available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Installation:</strong> Heat-welded seams create strongest bonds (no adhesive failure)</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">
                  Ideal for flat and low-slope commercial buildings throughout Amarillo's retail, industrial, and office sectors.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/images/EPDM2.jpg" alt="EPDM rubber roofing for Amarillo commercial properties" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">⚫ EPDM Rubber Roofing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ethylene Propylene Diene Monomer (EPDM) rubber roofing is a cost-effective commercial solution with excellent performance in Amarillo's extreme temperature swings.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Temperature Tolerance:</strong> Performs from -40°F to 300°F—perfect for Amarillo extremes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Cost-Effective:</strong> Lower installation cost than TPO or PVC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Durability:</strong> 15-30 year lifespan with proper maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>UV Resistance:</strong> Excellent resistance to sun damage and oxidation</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">
                  Popular for warehouses, industrial buildings, and budget-conscious commercial properties in Amarillo.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Emergency Services */}
        <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl shadow-lg">
          <div className="flex gap-6 items-center">
            <div className="text-6xl">🚨</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-red-800 mb-3">24/7 Emergency Roofing Services in Amarillo</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Severe storm just hit Amarillo? Don't wait for leaks to cause interior damage. We offer <strong>24/7 emergency roofing services</strong> throughout Amarillo and the Texas Panhandle with typical response times of 2-4 hours for urgent situations.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our emergency services include: <strong>Emergency tarp installation</strong> to prevent water damage, <strong>temporary leak repairs</strong>, <strong>same-day storm damage inspections</strong>, and <strong>rapid insurance claim initiation</strong>. The faster you act after storm damage, the less interior damage you'll experience—and the easier your insurance claim process.
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
              Frequently Asked Questions About Amarillo Roofing
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How often does Amarillo experience hail storms?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo experiences 3-4 significant hail events per year on average. The Texas Panhandle sits in America's "Hail Alley," with peak hail season running from April through June. Even small hail (golf ball size) can cause thousands of dollars in roof damage that may be covered by insurance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Will my insurance cover hail damage to my Amarillo roof?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most Amarillo homeowners have insurance policies that cover hail damage roof replacement. Typically, if 8 or more hail strikes are visible in a 10x10 foot "test square," insurance companies approve full roof replacement. We provide free inspections and handle all claim documentation to maximize your coverage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long does a roof replacement take in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most residential roof replacements in Amarillo are completed in 1-3 days depending on the size of your home and weather conditions. We work efficiently while maintaining quality standards. Commercial projects typically take 3-7 days depending on building size and roofing system complexity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What roofing materials work best in Amarillo's climate?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For Amarillo's harsh climate with frequent hail, extreme heat, and high winds, we recommend Class 4 impact-resistant asphalt shingles or standing seam metal roofing. These materials withstand 2-inch hail strikes, reflect heat to reduce energy costs, and resist winds up to 130-140 mph. They also qualify for insurance premium discounts in Texas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do you serve all Amarillo neighborhoods?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We serve all Amarillo neighborhoods including Wolflin, Sleepy Hollow, San Jacinto Heights, Southwest Amarillo, Puckett West, Tascosa, Hillside, South Heights, Colonies, Paramount-Terrace, and all surrounding areas. We also serve nearby communities like Canyon, Bushland, and Lake Tanglewood.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How much does roof replacement cost in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo roof replacement costs typically range from $8,000-$25,000 for residential homes, depending on size, pitch, materials, and complexity. However, most hail damage repairs are fully covered by insurance minus your deductible (usually $1,000-$2,500). We provide free estimates and work directly with insurance companies to minimize your out-of-pocket costs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What insurance companies do you work with in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with all major insurance companies serving Amarillo including State Farm, Allstate, Farmers Insurance, USAA, Liberty Mutual, Nationwide, Progressive, American Family, Texas Farm Bureau, and local providers. We have extensive experience navigating the claims process and meeting with adjusters to ensure maximum coverage approval.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do you offer emergency roofing services in Amarillo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We provide 24/7 emergency roofing services throughout Amarillo. After severe storms, we prioritize emergency calls and typically arrive within 2-4 hours for urgent leak repairs and tarp installations. Our rapid response helps minimize interior damage and gets you on the path to a full roof replacement quickly.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Service Area Map */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              Our Amarillo Service Area
            </h2>
            <p className="text-xl text-center text-gray-600 mb-8 max-w-4xl mx-auto">
              Headquartered in Amarillo and serving all of the Texas Panhandle including Canyon, Borger, Pampa, Dumas, and surrounding communities.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-brand-gold">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209268.19780047734!2d-101.94806769724959!3d35.18554876854935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148d4b245cf03%3A0xd0f3d11c6836d2af!2sAmarillo%2C%20TX!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="5 Star Commercial Roofing service area in Amarillo, Texas"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">
                Located at <strong>2909 S Western St, Amarillo, TX 79109</strong>
              </p>
              <a href="https://share.google/fl2pyMYIGwDQTd5KX" target="_blank" rel="noopener noreferrer" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                View on Google Maps →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Nearby Cities */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-brand-brown">
              We Also Serve Nearby Texas Panhandle Communities
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              While headquartered in Amarillo, we provide the same expert roofing services throughout the Texas Panhandle and West Texas.
            </p>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <a href="/roofing-services-canyon-tx/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Canyon, TX</h3>
                <p className="text-gray-600">15 miles south</p>
              </a>
              <a href="/service-areas/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Borger, TX</h3>
                <p className="text-gray-600">45 miles northeast</p>
              </a>
              <a href="/service-areas/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Pampa, TX</h3>
                <p className="text-gray-600">55 miles northeast</p>
              </a>
              <a href="/service-areas/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Dumas, TX</h3>
                <p className="text-gray-600">45 miles north</p>
              </a>
              <a href="/service-areas/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Hereford, TX</h3>
                <p className="text-gray-600">50 miles southwest</p>
              </a>
              <a href="/roofing-services-lubbock-tx/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Lubbock, TX</h3>
                <p className="text-gray-600">120 miles south</p>
              </a>
              <a href="/contact/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Midland, TX</h3>
                <p className="text-gray-600">265 miles south</p>
              </a>
              <a href="/contact/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Odessa, TX</h3>
                <p className="text-gray-600">285 miles south</p>
              </a>
            </div>

            <div className="text-center mt-8">
              <a href="/service-areas/" className="text-brand-gold font-bold text-lg hover:underline">
                View All Service Areas →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Recent Projects Gallery - Before & After */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-brown">
              Recent Amarillo Roofing Projects
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              See the quality craftsmanship and attention to detail that has made us Amarillo's trusted roofing contractor. These real projects showcase our work throughout Amarillo neighborhoods.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <img src="/images/ResidentialServices.jpg" alt="Completed roof replacement in Sleepy Hollow neighborhood Amarillo TX" className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-2">Sleepy Hollow Roof Replacement</h3>
                    <p className="text-gray-600">Complete architectural shingle roof replacement after hail damage.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <img src="/images/ResidentialServices.jpg" alt="High-quality residential roofing installation Amarillo Texas" className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-2">Quality Residential Installation</h3>
                    <p className="text-gray-600">Impact-resistant shingles with enhanced warranty protection.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <img src="/images/Aerialview.jpg" alt="Professional roofing services Amarillo neighborhood" className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-2">Expert Craftsmanship</h3>
                    <p className="text-gray-600">Meticulous attention to detail on every installation.</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.4}>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg overflow-hidden p-6">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4 text-center">Before Repair</h3>
                  <img src="/images/danage.jpg" alt="Hail damaged roof before repair in Amarillo TX" className="w-full h-80 object-cover rounded-lg mb-4 shadow-md" />
                  <p className="text-center text-gray-700 font-semibold">Severe hail damage requiring full replacement</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg overflow-hidden p-6">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4 text-center">After Installation</h3>
                  <img src="/images/ResidentialServices.jpg" alt="Beautiful new roof after professional installation Amarillo" className="w-full h-80 object-cover rounded-lg mb-4 shadow-md" />
                  <p className="text-center text-gray-700 font-semibold">Restored with Class 4 impact-resistant shingles</p>
                </div>
              </FadeIn>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Want to see your property transformed like these Amarillo homes?
              </p>
              <a href="/contact/" className="btn-primary text-lg px-10 py-4 inline-block">
                Schedule Your Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center shadow-2xl">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Amarillo Property?</h2>
            <p className="text-2xl mb-4">
              Free Inspections • Insurance Claims Assistance • Expert Installation
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you need emergency storm repairs, a complete roof replacement, or just want to know if recent hail damaged your roof, we're here to help. Call now or schedule your free inspection online.
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
              Proudly serving Amarillo since 2014 • Licensed & Insured • 5-Star Rated
            </p>
          </FadeIn>
        </section>

      </div>
    </>
  );
}
