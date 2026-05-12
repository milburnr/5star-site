import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import RelatedArticles from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { AlertTriangle, Check, Phone, Star } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-roofing-midland/" },
  title: "Commercial Roofing Midland TX | 5 Star Roofing",
  description:
    "Expert commercial roofing for Midland TX oil industry. TPO, EPDM, metal roofing for energy headquarters, office buildings. Call (806) 622-6041",
  openGraph: {
    title: "Commercial Roofing Midland TX | 5 Star Roofing",
    description:
      "Expert commercial roofing for Midland TX oil industry. TPO, EPDM, metal roofing for energy headquarters, office buildings. Call (806) 622-6041",
    url: "https://5starroofingpros.com/commercial-roofing-midland/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/midland-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Industrial metal roof installation on West Texas commercial facility — 5 Star Roofing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofingMidlandPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/commercial-roofing-midland/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-20-1280w.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 31.9974,
              longitude: -102.0779,
            },
            url: "https://5starroofingpros.com/commercial-roofing-midland/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
              name: "Midland",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            description:
              "Expert commercial roofing for Midland's energy industry. Serving Permian Basin oil company headquarters, downtown office buildings, and industrial facilities with specialized TPO, EPDM, and metal roofing systems.",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roofing Services",
            name: "Commercial Roofing in Midland",
            description:
              "Professional commercial roofing services in Midland, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Midland",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Commercial Roofing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Commercial Roofing Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Commercial Roofing Repair" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Free Roof Inspection" },
                },
              ],
            },
          }),
        }}
      />

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="midland"
        city="Midland"
        service="Commercial Roofing"
        h1="Commercial Roofing in Midland, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-20-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing/" },
          { name: "Midland", url: "/commercial-roofing-midland/" },
        ]}
    />

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Free</div>
                <div className="text-brand-brown font-semibold text-lg">Inspections</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={144} suffix="" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">
                  Hail Reports (12 Months)
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">3.3M</div>
                <div className="text-brand-brown font-semibold text-lg">Sq Ft Office Space</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing provides commercial roofing for Midland TX businesses TPO, metal panels, flat roof systems, and maintenance contracts for Permian Basin oil field facilities and commercial buildings.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">← All Commercial Roofing</a>
              <a href="/commercial-roofing-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Odessa Commercial</a>
              <a href="/commercial-roofing-andrews/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Andrews Commercial</a>
              <a href="/midland-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">All Midland Services</a>
            </div>
          </section>
        </FadeIn>

        {/* Author byline */}
        <FadeIn>
          <div className="mb-8 max-w-5xl mx-auto flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-white text-xs font-bold flex-shrink-0">BT</div>
            <span>
              Written by <span className="font-semibold text-gray-700">Ben Terhune</span>, Owner — 5 Star Roofing, Amarillo TX
              &nbsp;·&nbsp; Updated May 2026
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Midland Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              As the undisputed capital of the Permian Basin, Midland houses more energy company
              headquarters than any other West Texas city. From downtown's impressive skyline
              featuring over 3.3 million square feet of office space to sprawling oil field
              industrial complexes, commercial buildings in the "Tall City" demand specialized
              roofing expertise engineered for both prestigious corporate facilities and harsh
              petroleum industry operations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With 144 hail reports documented by trained weather spotters in just 12 months,
              Midland County faces intense weather challenges that threaten critical energy
              infrastructure. Corporate headquarters for major oil companies like Diamondback
              Energy, Endeavor Energy Resources, and Permian Resources require reliable roofing
              systems that protect multimillion-dollar operations while maintaining the professional
              appearance expected in the energy capital of America.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our specialized commercial roofing serves the unique demands of Midland's energy
              economy—from Class A office buildings housing Fortune 500 oil companies to industrial
              facilities processing crude oil, from the prestigious Bush Convention Center and Omni
              Midland Hotel to oil field warehouses and equipment yards. Every project includes
              coordination with facility managers, comprehensive permitting through the City of
              Midland, and specialized systems engineered for petroleum industry requirements.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Commercial Roofing Systems for Midland's Energy Industry Involve?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-20-1280w.jpg"
                  alt="TPO membrane roof on Midland oil industry office building - Chemical-resistant system"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Roofing Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Single-ply white membrane roofing ideal for corporate headquarters and office
                  buildings. Energy Star rated reflective surface dramatically reduces cooling costs
                  for large downtown buildings housing energy companies. Chemical-resistant
                  properties withstand petroleum vapors and industrial environments.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    15-25 year warranties for corporate facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Energy-efficient cooling for large office buildings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Chemical resistance for petroleum environments
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Professional appearance for headquarters buildings
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/TPO1-1280w.webp"
                  alt="Massive white single-ply membrane roof with rows of dome skylights under blue sky — strong real TPO/PVC reference. Top scarce-category ca... — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Metal Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Standing seam and R-panel metal roofing for oil field industrial facilities.
                  Superior fire resistance critical for petroleum operations, tank farms, and
                  equipment yards. Wind resistance exceeding 140 mph protects against Permian Basin
                  storms and extreme weather events.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    50+ year lifespan for industrial facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Class A fire rating for petroleum operations
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Wind resistance 140+ mph
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Low maintenance for remote oil field locations
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/borger-hero.jpg"
                  alt="Brick ranch home with dark hipped standing-seam metal roof in oilfield landscape; pumpjack and orange sunset sky in background. Likely AI... — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cost-effective black rubber membrane for oil field support facilities and
                  equipment buildings. Excellent chemical resistance against petroleum products and
                  superior UV stability in Midland's intense sun exposure. Budget-friendly option
                  for warehouses and auxiliary buildings.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    15-30 year lifespan for support facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Chemical resistance against petroleum products
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    UV stability in extreme sun exposure
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Budget-friendly for auxiliary buildings
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Commercial Areas Do We Serve in Midland?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide specialized commercial roofing throughout Midland's energy-focused business
              districts and industrial zones, each requiring unique expertise for oil industry
              operations:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-black/5 to-gray-50 p-6 rounded-xl shadow-md border-l-4 border-black">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">
                  Downtown Energy Corridor
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Over 3.3 million square feet of commercial office space</strong> with
                  98. occupancy in Class A buildings. Corporate headquarters for major energy
                  companies including Diamondback Energy, Endeavor Energy Resources, and Permian
                  Resources require prestigious roofing systems with superior energy efficiency and
                  professional appearance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Bush Convention Center & Hospitality District</strong> - Including the
                  Omni Midland Hotel and Tapestry Hotel complex. These high-profile facilities
                  demand premium commercial roofing with architectural considerations and superior
                  weather resistance for Midland's prominent business district.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">
                  Oil Field Industrial Zones
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Permian Basin Operations Centers</strong> - Industrial facilities,
                  equipment yards, and support buildings for drilling operations. These facilities
                  require fire-resistant metal roofing systems, chemical-resistant materials, and
                  specialized ventilation considerations for petroleum operations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Tank Farms & Processing Facilities</strong> - Critical infrastructure for
                  crude oil storage and processing requiring the highest fire safety ratings,
                  emergency access considerations, and specialized roofing systems engineered for
                  petroleum industry safety standards.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold-vibrant">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">
                  Airport & Logistics Hub
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Midland International Air & Space Port</strong> - Commercial facilities,
                  maintenance hangars, and logistics buildings supporting the energy industry's
                  aviation needs. These facilities require large-span roofing solutions with
                  superior wind resistance and specialized drainage systems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Transportation & Logistics Centers</strong> - Warehouses and distribution
                  facilities supporting the energy supply chain require durable, low-maintenance
                  roofing systems capable of handling heavy equipment and extreme weather
                  conditions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">
                  Retail & Mixed-Use Development
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Energy Sector Retail Centers</strong> - Shopping centers, restaurants, and
                  service businesses catering to Midland's prosperous oil industry workforce. These
                  facilities require attractive, energy-efficient roofing systems that maintain curb
                  appeal while providing reliable weather protection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Professional Services Buildings</strong> - Law firms, engineering
                  companies, financial institutions, and consulting businesses serving the energy
                  industry require professional-grade commercial roofing with superior energy
                  efficiency and minimal maintenance requirements.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Should You Know About Midland Building Codes & Energy Industry Requirements?
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold-vibrant">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Commercial roofing projects in Midland must comply with both city building codes and
                specialized energy industry safety standards. Oil company headquarters, industrial
                facilities, and petroleum operations require enhanced fire resistance, chemical
                compatibility, and storm access considerations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Building Department Contact
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Phone:</strong> (432) 685-7108
                    </li>
                    <li>
                      <strong>Location:</strong> 300 N Loraine St
                    </li>
                    <li>
                      <strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM
                    </li>
                    <li>
                      <strong>Website:</strong> midlandtexas.gov
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Key Code Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <strong>International Building Code (IBC)</strong>
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Wind resistance: 130-145 mph for oil facilities
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Enhanced fire ratings for petroleum operations
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Chemical resistance standards
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Emergency access and ventilation requirements
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Energy efficiency standards for large buildings
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                Energy industry facilities require specialized compliance with petroleum safety
                codes, fire prevention standards, and environmental regulations. We coordinate with
                facility managers and ensure all projects meet both city building codes and energy
                industry safety requirements.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Midland's Permian Basin Climate Demands Specialized Roofing?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Midland's location in the heart of the Permian Basin creates unique challenges for
              commercial roofing. Energy industry facilities face not only extreme weather but also
              specialized operational demands that require engineered roofing solutions:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Severe Hail Activity</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>144 hail reports in 12 months</strong> from trained weather spotters
                  demonstrate Midland County's severe weather challenges. Energy company
                  headquarters and oil field facilities require UL 2218 Class 4 impact-resistant
                  roofing to protect multimillion-dollar operations and equipment.
                </p>
                <p className="text-gray-600 text-sm">
                  Recent severe weather has caused significant damage to commercial buildings. Many
                  oil companies now require impact-resistant roofing for insurance compliance and
                  operational continuity.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">
                  Extreme Heat & UV Exposure
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Summer temperatures exceeding 105°F</strong> combined with intense UV
                  radiation accelerate roofing material degradation. Large office buildings and
                  industrial facilities require reflective roofing systems to reduce cooling costs
                  and extend material lifespan.
                </p>
                <p className="text-gray-600 text-sm">
                  Energy companies with large downtown office buildings report significant cooling
                  cost savings with properly designed reflective roofing systems engineered for
                  Permian Basin conditions.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-brand-gold-vibrant">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Chemical & Industrial Exposure
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Petroleum vapors and industrial chemicals</strong> create unique
                  challenges for oil field facilities and processing plants. Roofing materials must
                  resist chemical degradation while maintaining fire safety ratings critical for
                  petroleum operations.
                </p>
                <p className="text-gray-600 text-sm">
                  Specialized roofing systems engineered for petroleum environments ensure safety
                  compliance and long-term performance in Midland's industrial facilities.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
            <div className="flex gap-6 items-center">
              <div className="text-6xl">
                <AlertTriangle className="w-6 h-6 inline-block text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-800 mb-3">
                  How Does Emergency Commercial Roofing Work?
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Storm damage threatening your oil company operations or energy facilities? We
                  specialize in Midland's energy industry roofing. Critical petroleum
                  operations, corporate headquarters, and industrial facilities require
                  thorough documentation and professional repair to protect operations
                  and equipment.
                </p>
                <a
                  href="tel:8066226041"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300"
                >
                  urgent: (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does commercial roof replacement cost in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs in Midland vary by building size, roof type, and
                  complexity. Energy company headquarters and Class A office buildings typically
                  require TPO installations ($4-$8 per square foot). Industrial facilities and oil
                  field operations benefit from metal roofing ($7-$12 per square foot). We provide
                  free detailed estimates with transparent pricing and financing options for energy
                  sector businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing challenges do Permian Basin oil facilities face?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Oil field facilities in Midland face extreme challenges including 144 hail reports
                  in 12 months, intensive UV radiation, and chemical exposure from petroleum
                  operations. Industrial buildings require chemical-resistant roofing systems,
                  superior fire resistance ratings, and specialized ventilation considerations.
                  Metal and TPO roofing systems provide optimal performance for energy sector
                  operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What permits are required for commercial roofing in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All commercial roofing projects in Midland require permits from the City of
                  Midland Building Department. Energy company headquarters, office buildings, and
                  industrial facilities must meet specific codes including wind resistance
                  standards, fire ratings for petroleum facilities, and environmental compliance. We
                  handle all permit applications and ensure projects meet energy sector
                  requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work around oil company operations and business schedules?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We specialize in energy sector facility roofing, scheduling work during
                  planned shutdowns, after-hours, or weekends to minimize operational disruption.
                  Oil company headquarters, industrial facilities, and energy operations require
                  careful coordination. We work closely with facility managers to meet critical
                  operational requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What commercial roofing is best for downtown Midland office buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Downtown Midland's high-rise office buildings housing energy companies benefit
                  from TPO roofing systems with superior energy efficiency and reflective
                  properties. With over 3.3 million square feet of commercial space and 98.8%
                  occupied Class A office space, buildings require reliable roofing with minimal
                  maintenance and maximum cooling efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you prioritize roofing work for oil industry facilities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we provide commercial roofing throughout Midland County. With frequent hail
                  events and critical oil operations in the area, we prioritize scheduling inspections
                  and coordinating repairs efficiently. We work with insurance adjusters and
                  facility managers to document damage and restore full protection for energy
                  facilities, headquarters buildings, and industrial operations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Visit Our Amarillo Location
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="midland" currentService="commercial-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Midland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Midland property owners. Expert commercial roofing with
            comprehensive warranties.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:8066226041"
              className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg"
            >
              Call (806) 622-6041
            </a>
            <a
              href="/contact/"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg"
            >
              Schedule Free Inspection
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="commercial-roofing-midland" />
      </div>
    </>
  );
}
