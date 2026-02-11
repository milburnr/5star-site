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
  title: 'Residential Roofing Amarillo TX | 5 Star Roofing',
  description: 'Residential Roofing in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function ResidentialRoofingAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Amarillo", url: "/residential-roofing-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/residential-roofing-amarillo/#localbusiness",
            "name": "5 Star Commercial Roofing - Amarillo Residential Services",
            "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
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
            "url": "https://5starroofingpros.com/residential-roofing-amarillo/",
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
              "opens": "09:00",
              "closes": "17:00"
            },
            "description": "Expert residential roofing services in Amarillo neighborhoods including Wolflin Historic District, Westcliff, and Vineyards-Hastings. Specializing in Class 4 impact-resistant shingles and hail damage insurance claims.",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Amarillo",
            "description": "Professional residential roofing services in Amarillo, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Amarillo",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Residential Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
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
                  "text": "Typical costs range from $8,000-$25,000 depending on home size and complexity. However, most Amarillo projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500). We provide free estimates and maximize insurance coverage to minimize out-of-pocket costs."
                }
              },
              {
                "@type": "Question",
                "name": "What are Class 4 shingles and why do I need them in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Class 4 shingles pass UL 2218 impact testing—the highest rating available. They withstand 2-inch hail strikes without cracking. Given Potter County's 131 severe hail days since 2000, Class 4 shingles reduce future damage by 90% and qualify for 10-30% insurance premium discounts. They typically pay for themselves within 5-7 years through avoided claims and premium savings."
                }
              },
              {
                "@type": "Question",
                "name": "Do historic homes in Wolflin neighborhood require special roofing considerations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The Wolflin Historic District features 1920s-era homes with diverse architectural styles including Tudor cottages, Greek Revival, and Mediterranean designs. While historic designation doesn't restrict roofing materials, we match original roof lines and select shingles that complement each home's architectural character. We've completed 100+ Wolflin roofing projects maintaining neighborhood aesthetics while providing modern hail protection."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing permits are required in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All residential roofing projects require City of Amarillo building permits per IRC Section 105.1. Contact Building Safety at (806) 378-3041. We handle all permit applications at no extra charge. Requirements include drip edge installation, proper attic ventilation (1 sq ft per 150 sq ft), and wind resistance standards for 110-125 mph design speeds. Permits typically cost $50-150."
                }
              },
              {
                "@type": "Question",
                "name": "How long does residential roof replacement take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Amarillo homes are completed in 1-3 days depending on size and roof complexity. Single-story homes under 2,000 sq ft take 1-2 days. Two-story homes with steeper pitches require 2-3 days. We work efficiently while maintaining strict quality standards. The insurance claim process typically takes 2-4 weeks before installation begins."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work in all Amarillo neighborhoods including Wolflin and Westcliff?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we serve all Amarillo neighborhoods. We've completed projects throughout the city, from historic Wolflin ($350K median homes) and upscale Westcliff ($311K-$1.1M) to Vineyards-Hastings with Spanish Revival architecture. We're familiar with specific HOA requirements in each area and maintain relationships with local architectural review boards."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with HOA approval for my Amarillo neighborhood?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We handle all HOA architectural committee submissions for neighborhoods like Wolflin, Sleepy Hollow, Westcliff, and The Colonies. We stock pre-approved shingle colors and styles for most Amarillo HOAs and manage the entire approval process, so you don't have to deal with paperwork delays."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-amarillo-40-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/75 to-yellow-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Residential Roofing in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting Texas Panhandle Homes Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert residential roofing in Hail Alley. Potter County has recorded 131 severe hail days since 2000—our Class 4 impact-resistant shingles reduce future damage by 90%. Free inspections and insurance claim assistance included.
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
                  <AnimatedCounter to={1100} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Homes Roofed</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={131} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Hail Days Since 2000</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
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
              Amarillo's Residential Roofing Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Living in the Texas Panhandle means your home faces some of America's most severe weather. Amarillo sits in "Hail Alley" with 131 severe hail days recorded since 2000, intense UV exposure, temperature extremes from 13°F to 99°F, and sustained winds averaging 14.3 mph (highest in Texas). Standard shingles simply don't cut it here—you need roofing materials engineered for Potter County's extreme conditions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected over 1,100 Amarillo homes with Class 4 impact-resistant shingles designed to withstand 2-inch hail strikes. From historic properties in Wolflin Historic District to upscale homes in Westcliff and Spanish Revival architecture in Vineyards-Hastings, we serve every corner of Amarillo. We handle 100% of insurance claims paperwork, pull all City of Amarillo permits, secure HOA approvals, and deliver expert installation in 1-3 days. Most homeowners pay only their deductible when insurance covers hail damage—typically $1,000-$2,500 for a complete roof replacement worth $12,000-$18,000.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Amarillo Neighborhoods We Serve
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide expert residential roofing throughout Amarillo's diverse neighborhoods, each with unique architectural character and roofing needs:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Wolflin Historic District</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Median Home Price:</strong> $350,000<br />
                  <strong>Established:</strong> 1920s<br />
                  <strong>Homeownership:</strong> 73.4%
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  South-Central Amarillo's premier historic neighborhood features Tudor cottages, Greek Revival estates, and Mediterranean-inspired homes with original National Register properties. Towering elm trees and brick streets create distinctive character. We've completed 100+ Wolflin projects matching architectural styles while providing modern Class 4 hail protection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Westcliff</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Home Prices:</strong> $311K-$1.1M<br />
                  <strong>Location:</strong> Northwest Amarillo<br />
                  <strong>Style:</strong> Mixed Suburban to Luxury
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pedestrian-friendly golf cart community with green spaces and tennis courts. Mix of ranch-style and modern homes featuring Spanish, Tudor, and contemporary architecture. Upscale properties require premium roofing systems—we specialize in high-end installations with extended warranties and superior materials.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Vineyards-Hastings</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Location:</strong> Northwest Amarillo<br />
                  <strong>Architecture:</strong> Pueblo & Spanish Revival<br />
                  <strong>Near:</strong> Thompson Park, Zoo
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Distinctive Pueblo design influences and Spanish Revival architecture near Amarillo Zoo and Wonderland Amusement Park. These specialized architectural styles may require clay tile alternatives or Spanish-style shingles. We match existing aesthetics while upgrading to impact-resistant materials engineered for Panhandle hail.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Amarillo Homeowners Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Local Texas Panhandle Experts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Headquartered at 2909 S Western St in Amarillo—not storm chasers from out of state. We've roofed homes in every neighborhood from historic Wolflin to southwest developments near Bell Helicopter, from Sleepy Hollow to properties along the Historic Route 66 district. We understand Texas Panhandle weather patterns, local HOA requirements, and City of Amarillo building codes. When you need warranty service in 5 years, we'll still be here.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Insurance Claim Specialists</h3>
                <p className="text-gray-700 leading-relaxed">
                  85% of residential projects are hail damage insurance claims. We document every impact, meet with adjusters on-site, and advocate for maximum coverage. Our 95%+ approval rate means homeowners get new roofs for only their deductible. We've processed over 1,200 claims with State Farm, Allstate, USAA, and every major carrier.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Class 4 Impact-Resistant Materials</h3>
                <p className="text-gray-700 leading-relaxed">
                  We exclusively install Class 4 shingles rated to withstand 2-inch hail impacts. These premium materials reduce future damage by 90% and qualify for 10-30% insurance premium discounts in Texas. Available from Owens Corning, GAF, and CertainTeed with warranties up to 50 years. Pays for itself through avoided claims and premium savings.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Complete Permit & HOA Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  We handle all City of Amarillo building permits ($50-150), HOA architectural committee approvals, and code compliance at no extra charge. We stock shingles pre-approved by Wolflin, Sleepy Hollow, Westcliff, and Colonies HOAs. All paperwork, inspections, and final approvals managed seamlessly while you focus on color selection.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Understanding Amarillo Building Codes
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All residential roofing projects in Amarillo must comply with local building codes and permit requirements. We handle all permitting and ensure your project meets or exceeds city standards.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Building Safety Department</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Phone:</strong> (806) 378-3041</li>
                    <li><strong>Email:</strong> building@amarillo.gov</li>
                    <li><strong>Location:</strong> Simms Municipal Building<br/>808 S Buchanan St Suite 104</li>
                    <li><strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Key Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>2015 IRC compliance required</strong></li>
                    <li>✓ Drip edge installation mandatory</li>
                    <li>✓ Proper attic ventilation (1:150 ratio)</li>
                    <li>✓ Wind resistance: 110-125 mph standards</li>
                    <li>✓ UL 2218 Class 4 highly recommended</li>
                    <li>✓ Permit display visible from street</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                We handle all permit applications at no extra charge, ensuring code compliance and preserving manufacturer warranties.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Amarillo Homes Need Superior Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Potter County's location in the Texas Panhandle creates one of America's most challenging roofing environments. Your home must withstand extreme conditions year-round:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Extreme Hail Danger</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>131 severe hail days since 2000</strong> - Potter County leads Texas in hail frequency. Amarillo ranks in the Top 10 most hail-prone cities in America, with 438 hail reports within 10 miles in just 12 months.
                </p>
                <p className="text-gray-600 text-sm">
                  Peak season: March-May with secondary fall peak. Standard shingles fail within 5-7 years. Class 4 impact-resistant shingles are essential, not optional.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Relentless Wind</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>14.3 mph average winds</strong> - highest in Texas, #2 in America. At 3,600 feet elevation, Amarillo is exposed to clashing air masses causing extreme gusts exceeding 50 mph annually.
                </p>
                <p className="text-gray-600 text-sm">
                  Peak winds March-April. Improper installation causes shingle blow-offs and water infiltration. We use 6-nail pattern and high-wind rated materials.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>86°F temperature swings</strong> - from 13°F winter lows to 99°F summer highs. This constant thermal cycling causes shingle granule loss and premature aging.
                </p>
                <p className="text-gray-600 text-sm">
                  January averages 38.6°F; July averages 79.6°F. Quality underlayment and proper ventilation critical to extend roof lifespan to 20-25 years.
                </p>
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
                  How much does residential roof replacement cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Typical costs range from $8,000-$25,000 depending on home size and complexity. However, most Amarillo projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500). We provide free estimates and maximize insurance coverage to minimize out-of-pocket costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are Class 4 shingles and why do I need them in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Class 4 shingles pass UL 2218 impact testing—the highest rating available. They withstand 2-inch hail strikes without cracking. Given Potter County's 131 severe hail days since 2000, Class 4 shingles reduce future damage by 90% and qualify for 10-30% insurance premium discounts. They typically pay for themselves within 5-7 years through avoided claims and premium savings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do historic homes in Wolflin neighborhood require special roofing considerations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. The Wolflin Historic District features 1920s-era homes with diverse architectural styles including Tudor cottages, Greek Revival, and Mediterranean designs. While historic designation doesn't restrict roofing materials, we match original roof lines and select shingles that complement each home's architectural character. We've completed 100+ Wolflin roofing projects maintaining neighborhood aesthetics while providing modern hail protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing permits are required in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All residential roofing projects require City of Amarillo building permits per IRC Section 105.1. Contact Building Safety at (806) 378-3041. We handle all permit applications at no extra charge. Requirements include drip edge installation, proper attic ventilation (1 sq ft per 150 sq ft), and wind resistance standards for 110-125 mph design speeds. Permits typically cost $50-150.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does residential roof replacement take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Amarillo homes are completed in 1-3 days depending on size and roof complexity. Single-story homes under 2,000 sq ft take 1-2 days. Two-story homes with steeper pitches require 2-3 days. We work efficiently while maintaining strict quality standards. The insurance claim process typically takes 2-4 weeks before installation begins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work in all Amarillo neighborhoods including Wolflin and Westcliff?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we serve all Amarillo neighborhoods. We've completed projects throughout the city, from historic Wolflin ($350K median homes) and upscale Westcliff ($311K-$1.1M) to Vineyards-Hastings with Spanish Revival architecture. We're familiar with specific HOA requirements in each area and maintain relationships with local architectural review boards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you help with HOA approval for my Amarillo neighborhood?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. We handle all HOA architectural committee submissions for neighborhoods like Wolflin, Sleepy Hollow, Westcliff, and The Colonies. We stock pre-approved shingle colors and styles for most Amarillo HOAs and manage the entire approval process, so you don't have to deal with paperwork delays.
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
          <h2 className="text-4xl font-bold mb-6">Ready for a New Roof?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Amarillo homeowners. Most hail damage repairs covered by insurance—you pay only your deductible.
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
