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
  title: 'Residential Roofing Midland TX | 5 Star Roofing',
  description: 'Expert residential roofing in Midland TX. Serving Grassland Estates, Saddle Club, and all Permian Basin neighborhoods. Premium Class 4 shingles for energy executive homes. Free inspections.',
};

export default function ResidentialRoofingMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Midland", url: "/residential-roofing-midland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/residential-roofing-midland/#localbusiness",
            "name": "5 Star Commercial Roofing - Midland Residential Services",
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
            "url": "https://5starroofingpros.com/residential-roofing-midland/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
              "name": "Midland",
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
            "description": "Expert residential roofing services in Midland neighborhoods including Grassland Estates, Saddle Club, and energy executive communities. Specializing in premium Class 4 impact-resistant shingles for Permian Basin weather conditions.",
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
            "name": "Residential Roofing in Midland",
            "description": "Professional residential roofing services in Midland, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Midland",
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
                "name": "How much does residential roof replacement cost in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Costs typically range from $10,000-$35,000 for Midland homes, with Grassland Estates properties ($350K+ median) requiring $15,000-$25,000 for complete replacement. However, most Midland projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500). We maximize insurance coverage for oil industry executives and energy professionals."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Grassland Estates homes unique for roofing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Grassland Estates features premium ranch-style homes from 2,100-5,000 sq ft with complex roof lines and high-end architectural details. These executive homes often have custom features requiring specialized installation techniques. We stock premium Class 4 materials in colors that complement the neighborhood's upscale character and HOA requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why do Midland homes need superior roofing materials?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Midland County has recorded 144 trained spotter hail reports with 125 radar-detected hail occasions. The Permian Basin's geography creates intense weather patterns combining hail, wind, and extreme UV exposure. Class 4 impact-resistant shingles reduce future damage by 90% and qualify for 10-30% insurance premium discounts."
                }
              },
              {
                "@type": "Question",
                "name": "What building permits are required in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All residential roofing projects require building permits from the City of Midland. Only licensed and bonded contractors registered with the city can obtain permits for homeowners. We handle all permit applications and city inspections at no extra charge, ensuring full code compliance."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with energy industry professionals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in serving Midland's energy industry community, from oil executives in Grassland Estates to petroleum engineers throughout the city. We understand the demands of energy professionals' schedules and offer flexible timing, premium materials, and expedited service for busy oil and gas families."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle HOA requirements in upscale neighborhoods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We manage all architectural committee submissions for neighborhoods like Grassland Estates, Saddle Club, and other gated communities. We stock pre-approved premium shingles and understand each community's specific aesthetic requirements. Our process ensures seamless approval without project delays."
                }
              },
              {
                "@type": "Question",
                "name": "What financing options work best for Midland's higher home values?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For Midland's median home values ($350K+), HELOC options are often ideal given substantial equity positions. We also offer 0% financing through our lending partners. Many energy industry professionals prefer to leverage business relationships for preferred rates. We help evaluate the best approach for your financial situation."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-midland-22-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black-900/85 via-gray-800/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Residential Roofing in <span className="text-brand-gold-light">Midland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Serving Oil Country's Premium Homes Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert residential roofing for Grassland Estates, Saddle Club, and all Midland's energy executive communities. With 144 hail reports recorded, our Class 4 impact-resistant shingles protect your premium investment and maintain neighborhood aesthetics.
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
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={600} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Midland Homes Roofed</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">144</div>
                <div className="text-brand-brown font-semibold text-lg">Hail Reports Recorded</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">$350K+</div>
                <div className="text-brand-brown font-semibold text-lg">Median Home Value</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">🛢️</div>
                <div className="text-brand-brown font-semibold text-lg">Oil Country</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Midland's Premier Residential Roofing Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              In the heart of the Permian Basin oil fields, Midland represents Texas energy prosperity with some of the state's most valuable residential real estate. Home to petroleum executives and energy industry leaders, our city demands roofing solutions that match the quality of life oil country provides. With 144 documented hail reports and 125 radar-detected hail occasions, standard roofing materials simply cannot protect Midland's premium homes worth $350,000+.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected over 600 Midland homes with premium Class 4 impact-resistant shingles engineered for Permian Basin weather extremes. From executive estates in Grassland Estates to gated communities like Saddle Club, we serve every prestigious neighborhood in Midland County. We handle 100% of insurance claims paperwork, secure all City of Midland building permits, manage HOA architectural approvals, and deliver expert installation in 1-3 days. Most energy industry professionals pay only their insurance deductible when hail damage is covered—typically $1,000-$2,500 for complete roof replacement worth $15,000-$25,000 on Midland's high-value homes.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Midland's Most Prestigious Neighborhoods
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide expert residential roofing throughout Midland's most exclusive communities, where energy industry success has created Texas's premier residential districts:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border-l-4 border-gray-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Grassland Estates</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Median Home Price:</strong> $837,000<br />
                  <strong>Home Size:</strong> 2,100-5,000 sq ft<br />
                  <strong>Style:</strong> Premium Ranch Estates
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Midland's most sought-after neighborhood features luxury ranch-style homes with complex roof lines, wide tree-lined streets, and expansive lots. These executive properties often have custom architectural details requiring specialized installation techniques. We've completed 150+ Grassland projects, maintaining the community's prestigious character while providing maximum hail protection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border-l-4 border-gray-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Saddle Club Estates</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Location:</strong> North Midland<br />
                  <strong>Type:</strong> Gated Community<br />
                  <strong>Near:</strong> Country Clubs & Polo Club
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exclusive gated community among Midland's most prestigious addresses, close to Midland Country Club and Polo Club. Spacious homes with quiet, sidewalk-lined streets and stringent architectural standards. We manage all HOA approvals and stock materials pre-approved by the architectural review committee.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border-l-4 border-gray-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Petroleum Executive District</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Residents:</strong> Energy Industry Leaders<br />
                  <strong>Properties:</strong> Custom Luxury Homes<br />
                  <strong>Features:</strong> Oil Country Lifestyle
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Custom homes throughout central and west Midland housing petroleum engineers, oil executives, and energy company leadership. These properties often feature unique architectural elements and require materials that reflect the success and sophistication of the Texas energy industry.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Energy Industry Families Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Oil Country Weather Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland County's 144 documented hail reports and 125 radar-detected hail occasions create extreme roofing challenges. The Permian Basin's geography intensifies storm systems, producing devastating hail that can destroy premium homes in minutes. We've weathered every major storm since 2014, protecting energy executives' investments while others suffered costly damage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Premium Materials & Installation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We exclusively install Class 4 impact-resistant shingles from premium manufacturers, available in architectural styles that complement Midland's upscale neighborhoods. These materials reduce future damage by 90% and qualify for substantial insurance premium discounts that typically offset the upgrade cost within 5-7 years.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Energy Industry Scheduling</h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand the demanding schedules of petroleum executives, engineers, and energy professionals. We offer flexible project timing, expedited service for urgent repairs, and can coordinate around travel schedules, business meetings, and industry events. Our team respects the professional demands of oil country success.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Complete Luxury Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  We handle all City of Midland building permits, HOA architectural submissions for gated communities, insurance claim documentation, and code compliance. Licensed and bonded contractors registered with the city manage every aspect, so busy energy professionals can focus on their demanding careers while we protect their homes.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Understanding Midland Building Requirements
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All residential roofing projects in Midland require building permits and licensed contractor installation. We ensure your premium property meets all city standards and maintains insurance coverage validity.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">City of Midland Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Permits:</strong> Required for all roofing projects</li>
                    <li><strong>Contractors:</strong> Must be licensed and bonded</li>
                    <li><strong>Registration:</strong> Contractors registered with city</li>
                    <li><strong>Inspections:</strong> Required for code compliance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Our Complete Service</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>All permits handled</strong> at no extra charge</li>
                    <li>✓ Licensed and bonded Texas contractor</li>
                    <li>✓ City of Midland registered</li>
                    <li>✓ All inspections coordinated</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                We maintain full licensing and insurance to protect your investment and ensure warranty validity on your premium home.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Permian Basin Weather Demands Superior Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Midland County sits at the epicenter of America's most productive oil fields, where geographic conditions that create energy wealth also generate extreme weather patterns. Your premium home faces unique environmental challenges:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Frequent Severe Hail</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>144 documented hail reports</strong> by trained weather spotters, with 125 radar-detected occasions. Permian Basin geography creates supercell corridors that intensify hail formation, producing destructive storms that can total a premium roof in minutes.
                </p>
                <p className="text-gray-600 text-sm">
                  Peak season: April-June. Standard shingles crack and granule strip away, leading to expensive water damage in luxury homes. Class 4 protection is essential for preserving home value.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Oil Field Wind Patterns</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Intense sustained winds</strong> across open petroleum drilling areas create constant stress on roofing systems. Combined with industrial activity and dust, creates accelerated wear patterns unique to oil country environments.
                </p>
                <p className="text-gray-600 text-sm">
                  Flat terrain amplifies wind effects. Industrial dust and drilling activity create additional environmental stress. Premium materials and enhanced installation methods essential for longevity.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Desert Sun & Heat</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Intense UV radiation</strong> in high-altitude desert climate with minimal cloud cover accelerates shingle aging. Temperature extremes from winter freezes to summer heat create thermal stress cycles that damage inferior materials.
                </p>
                <p className="text-gray-600 text-sm">
                  UV exposure more intense than coastal areas. Poor ventilation compounds heat damage in luxury homes. Premium materials and proper ventilation systems critical for protecting high-value properties.
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
                  How much does residential roof replacement cost in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Costs typically range from $10,000-$35,000 for Midland homes, with Grassland Estates properties ($350K+ median) requiring $15,000-$25,000 for complete replacement. However, most Midland projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500). We maximize insurance coverage for oil industry executives and energy professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Grassland Estates homes unique for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Grassland Estates features premium ranch-style homes from 2,100-5,000 sq ft with complex roof lines and high-end architectural details. These executive homes often have custom features requiring specialized installation techniques. We stock premium Class 4 materials in colors that complement the neighborhood's upscale character and HOA requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do Midland homes need superior roofing materials?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland County has recorded 144 trained spotter hail reports with 125 radar-detected hail occasions. The Permian Basin's geography creates intense weather patterns combining hail, wind, and extreme UV exposure. Class 4 impact-resistant shingles reduce future damage by 90% and qualify for 10-30% insurance premium discounts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What building permits are required in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All residential roofing projects require building permits from the City of Midland. Only licensed and bonded contractors registered with the city can obtain permits for homeowners. We handle all permit applications and city inspections at no extra charge, ensuring full code compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work with energy industry professionals?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we specialize in serving Midland's energy industry community, from oil executives in Grassland Estates to petroleum engineers throughout the city. We understand the demands of energy professionals' schedules and offer flexible timing, premium materials, and expedited service for busy oil and gas families.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle HOA requirements in upscale neighborhoods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We manage all architectural committee submissions for neighborhoods like Grassland Estates, Saddle Club, and other gated communities. We stock pre-approved premium shingles and understand each community's specific aesthetic requirements. Our process ensures seamless approval without project delays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What financing options work best for Midland's higher home values?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For Midland's median home values ($350K+), HELOC options are often ideal given substantial equity positions. We also offer 0% financing through our lending partners. Many energy industry professionals prefer to leverage business relationships for preferred rates. We help evaluate the best approach for your financial situation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving All of Midland County</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124932.62304775766!2d-102.12872399999999!3d31.997350000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe0decf8780e23%3A0xf2d5ad4f62e3d82b!2sMidland%2C%20TX!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Based in Amarillo, proudly serving Midland's energy industry communities
            </p>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Midland Investment?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for all Midland neighborhoods—from Grassland Estates to Saddle Club. Premium Class 4 roofing for energy industry executives. Most hail damage covered by insurance—you pay only your deductible.
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
