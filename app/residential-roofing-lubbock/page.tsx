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
  title: 'Residential Roofing Lubbock TX | 5 Star Roofing',
  description: 'Expert residential roofing in Lubbock TX. Serving Tech Terrace, Raider Ranch, and all Texas Tech area neighborhoods. Class 4 impact-resistant shingles for South Plains weather. Free inspections.',
};

export default function ResidentialRoofingLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Lubbock", url: "/residential-roofing-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/residential-roofing-lubbock/#localbusiness",
            "name": "5 Star Commercial Roofing - Lubbock Residential Services",
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
            "url": "https://5starroofingpros.com/residential-roofing-lubbock/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
              "name": "Lubbock",
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
            "description": "Expert residential roofing services in Lubbock neighborhoods including Tech Terrace, Raider Ranch, and university area homes. Specializing in Class 4 impact-resistant shingles for South Plains hail and wind resistance.",
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
            "name": "Residential Roofing in Lubbock",
            "description": "Professional residential roofing services in Lubbock, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lubbock",
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
                "name": "How much does residential roof replacement cost in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typical costs range from $7,000-$22,000 for most Lubbock homes, with the median home ($245,000 value) requiring $12,000-$16,000 for complete replacement. However, most Lubbock projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500). We maximize insurance coverage to minimize out-of-pocket costs."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Tech Terrace homes unique for roofing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tech Terrace, Lubbock's 'Best Square Mile,' features historic 1920s-1950s homes with diverse architectural styles from Craftsman bungalows to Mid-Century Modern. These older homes often need updated ventilation systems and may have unique roof lines. We specialize in matching historical character while upgrading to modern Class 4 impact-resistant materials."
                }
              },
              {
                "@type": "Question",
                "name": "Why do Lubbock homes need Class 4 impact-resistant shingles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lubbock County experiences frequent severe hail, with recent events producing 2.75-4.00 inch hail (baseball to softball size). Class 4 shingles withstand 2-inch impacts without cracking, reducing future damage by 90%. They qualify for 10-30% insurance premium discounts and typically pay for themselves within 5-7 years through avoided claims."
                }
              },
              {
                "@type": "Question",
                "name": "What building permits are required for roofing in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All residential roofing projects within Lubbock city limits require building permits from the City of Lubbock Building Safety Department. We handle all permit applications at no extra charge. Note: Properties in unincorporated Lubbock County have different requirements, as the county doesn't issue building permits."
                }
              },
              {
                "@type": "Question",
                "name": "How long does roof replacement take for Lubbock homes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Lubbock homes are completed in 1-3 days depending on size and complexity. Single-story ranch homes (common in newer subdivisions) take 1-2 days. Older Tech Terrace homes with complex roof lines may require 2-3 days. We coordinate around Texas Tech University schedules to minimize disruption in campus-area neighborhoods."
                }
              },
              {
                "@type": "Question",
                "name": "Do you serve Texas Tech University area neighborhoods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in Texas Tech area neighborhoods including Tech Terrace, University-area rentals, and faculty housing. We understand the unique needs of university housing and work with property managers, landlords, and homeowners. We can coordinate projects around academic calendars and provide fast turnaround for rental properties."
                }
              },
              {
                "@type": "Question",
                "name": "What financing options are available for Lubbock homeowners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For out-of-pocket projects, we offer 0% financing options through our lending partners. Many Tech faculty and staff qualify for educator discounts. Additionally, Lubbock's median home value ($245,000) makes HELOC options attractive, with most homeowners having substantial equity. We help evaluate the best financing approach for your situation."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-red-800/75 to-black-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Residential Roofing in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Serving Texas Tech University Area Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert residential roofing serving Tech Terrace, Raider Ranch, and all Lubbock neighborhoods. Recent hail events produced baseball-size (2.75+ inch) hail—our Class 4 impact-resistant shingles protect your investment and reduce future damage by 90%.
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
        <section className="py-16 bg-gradient-to-b from-red-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={800} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Lubbock Homes Roofed</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">4.00"</div>
                <div className="text-brand-brown font-semibold text-lg">Largest Hail Recorded</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">$245K</div>
                <div className="text-brand-brown font-semibold text-lg">Median Home Value</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">🎓</div>
                <div className="text-brand-brown font-semibold text-lg">Texas Tech Area</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Lubbock's Residential Roofing Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              In the heart of the South Plains, Lubbock faces some of Texas's most challenging weather conditions. Home to Texas Tech University and over 266,000 residents, our city experiences frequent severe hail storms with recent events producing softball-size hail up to 4.00 inches. Standard shingles simply can't withstand this punishment—you need Class 4 impact-resistant materials engineered for South Plains weather.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected over 800 Lubbock homes with premium Class 4 shingles designed to withstand 2-inch hail impacts. From historic Tech Terrace bungalows to modern Raider Ranch estates, we serve every neighborhood in Lubbock County. We handle 100% of insurance claims paperwork, secure all City of Lubbock building permits, and deliver expert installation in 1-3 days. Most homeowners pay only their insurance deductible when hail damage is covered—typically $1,000-$2,500 for a complete roof replacement worth $12,000-$16,000 on Lubbock's median $245,000 homes.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Lubbock Neighborhoods We Serve
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide expert residential roofing throughout Lubbock's diverse neighborhoods, from university areas to established suburban communities:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Tech Terrace</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Median Home Price:</strong> $275,000<br />
                  <strong>Established:</strong> 1920s-1950s<br />
                  <strong>Style:</strong> Historic University District
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lubbock's "Best Square Mile" features tree-lined streets with Craftsman bungalows, Mid-Century Modern, and Colonial Revival homes. Bounded by Indiana Avenue, 34th Street, University Avenue, and 19th Street. These historic homes often need ventilation upgrades and careful architectural matching. We've completed 200+ Tech Terrace projects preserving character while adding modern protection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Raider Ranch</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Home Prices:</strong> $350K-$750K<br />
                  <strong>Location:</strong> Southwest Lubbock<br />
                  <strong>Style:</strong> Upscale Suburban
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Premium golf course community with contemporary and traditional homes featuring complex roof lines and high-end materials. Large estates require specialized installation techniques and extended warranties. We stock premium Class 4 shingles in architectural styles that complement this community's upscale character.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">University Area</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Property Type:</strong> Student & Faculty Housing<br />
                  <strong>Rental Market:</strong> High Density<br />
                  <strong>Average Rent:</strong> $1,129/month
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Surrounding Texas Tech campus with mix of student rentals and faculty housing. Many properties are investment rentals requiring fast turnaround and durable materials. We coordinate with property managers and work around academic schedules. Special educator discounts available for Texas Tech faculty and staff.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Lubbock Homeowners Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">South Plains Weather Specialists</h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand Lubbock County's unique weather patterns—from baseball-size hail to intense UV exposure and temperature extremes. Recent storms produced 4.00-inch hail that destroyed standard shingles but barely scratched our Class 4 installations. We've weathered every major hail event since 2014, protecting hundreds of homes while others required repeated repairs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Texas Tech University Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in university-area properties, from historic Tech Terrace homes to modern faculty housing. We coordinate around academic calendars, offer educator discounts, and understand the unique needs of rental properties and student housing. Fast turnaround times minimize vacancy periods for investment properties.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Insurance Claim Masters</h3>
                <p className="text-gray-700 leading-relaxed">
                  80% of our Lubbock projects are hail damage insurance claims. We document every impact, meet with adjusters on-site, and advocate for maximum coverage. Our 95%+ approval rate means homeowners get new roofs for only their deductible. We've processed over 600 Lubbock claims with all major carriers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Complete Permit & Code Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  We handle all City of Lubbock building permits and code compliance at no extra charge. Important note: Properties in unincorporated Lubbock County have different requirements since the county doesn't issue building permits. We navigate these distinctions expertly, ensuring your project meets all applicable regulations.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Understanding Lubbock Building Requirements
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lubbock has unique building code requirements that differ between city limits and unincorporated county areas. We ensure your project complies with all applicable regulations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">City of Lubbock Building Safety</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Phone:</strong> (806) 775-2673</li>
                    <li><strong>Location:</strong> 1625 13th Street</li>
                    <li><strong>Requirements:</strong> Building permits required</li>
                    <li><strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Lubbock County (Unincorporated)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Building Permits:</strong> Not required by county</li>
                    <li><strong>Regulations:</strong> Subdivision regulations apply</li>
                    <li><strong>Note:</strong> Different rules than city limits</li>
                    <li><strong>HOA:</strong> Private community rules may apply</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                We handle all permitting requirements and navigate these jurisdictional differences at no extra charge, ensuring full compliance and warranty protection.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Lubbock Homes Face Extreme Roofing Challenges
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Lubbock County sits in the heart of the South Plains, where geographic and atmospheric conditions create some of America's most severe weather patterns. Your home faces unique challenges:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Devastating Hail Storms</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Recent 4.00-inch hail recorded</strong> - softball-size impacts that demolish standard roofing. Multiple events annually with baseball-size (2.75+ inch) hail. Lubbock sits in prime "Hail Alley" geography where supercells intensify.
                </p>
                <p className="text-gray-600 text-sm">
                  Peak season: May-June. Standard shingles crack and granules strip away, leading to leaks and replacement within 5-7 years. Class 4 impact resistance is essential protection.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">High Plains Winds</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Sustained high winds year-round</strong> - South Plains geography creates consistent wind patterns that stress roofing systems. Combined with hail, creates worst-case scenarios for roof damage.
                </p>
                <p className="text-gray-600 text-sm">
                  Open terrain amplifies wind speeds. Improper installation leads to shingle blow-offs and water infiltration. We use enhanced nailing patterns and wind-rated materials.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Extreme UV & Temperature</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Intense solar radiation</strong> at 3,200 feet elevation with little atmospheric protection. Temperature swings from winter freezes to summer heat create thermal cycling stress.
                </p>
                <p className="text-gray-600 text-sm">
                  UV radiation accelerates shingle aging and granule loss. Poor ventilation amplifies heat damage. Premium materials and proper ventilation extend roof life significantly.
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
                  How much does residential roof replacement cost in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Typical costs range from $7,000-$22,000 for most Lubbock homes, with the median home ($245,000 value) requiring $12,000-$16,000 for complete replacement. However, most Lubbock projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500). We maximize insurance coverage to minimize out-of-pocket costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Tech Terrace homes unique for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Tech Terrace, Lubbock's "Best Square Mile," features historic 1920s-1950s homes with diverse architectural styles from Craftsman bungalows to Mid-Century Modern. These older homes often need updated ventilation systems and may have unique roof lines. We specialize in matching historical character while upgrading to modern Class 4 impact-resistant materials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do Lubbock homes need Class 4 impact-resistant shingles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock County experiences frequent severe hail, with recent events producing 2.75-4.00 inch hail (baseball to softball size). Class 4 shingles withstand 2-inch impacts without cracking, reducing future damage by 90%. They qualify for 10-30% insurance premium discounts and typically pay for themselves within 5-7 years through avoided claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What building permits are required for roofing in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All residential roofing projects within Lubbock city limits require building permits from the City of Lubbock Building Safety Department. We handle all permit applications at no extra charge. Note: Properties in unincorporated Lubbock County have different requirements, as the county doesn't issue building permits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does roof replacement take for Lubbock homes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Lubbock homes are completed in 1-3 days depending on size and complexity. Single-story ranch homes (common in newer subdivisions) take 1-2 days. Older Tech Terrace homes with complex roof lines may require 2-3 days. We coordinate around Texas Tech University schedules to minimize disruption in campus-area neighborhoods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you serve Texas Tech University area neighborhoods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we specialize in Texas Tech area neighborhoods including Tech Terrace, University-area rentals, and faculty housing. We understand the unique needs of university housing and work with property managers, landlords, and homeowners. We can coordinate projects around academic calendars and provide fast turnaround for rental properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What financing options are available for Lubbock homeowners?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For out-of-pocket projects, we offer 0% financing options through our lending partners. Many Tech faculty and staff qualify for educator discounts. Additionally, Lubbock's median home value ($245,000) makes HELOC options attractive, with most homeowners having substantial equity. We help evaluate the best financing approach for your situation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving All of Lubbock County</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206598.0951796434!2d-101.94746439453125!3d33.57735899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe75b9ae4c4bcd%3A0x73d9c88eeb693d8c!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Based in Amarillo, proudly serving Lubbock and all South Plains communities
            </p>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a New Roof in Lubbock?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for all Lubbock neighborhoods—from Tech Terrace to Raider Ranch. Most hail damage repairs covered by insurance—you pay only your deductible.
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
