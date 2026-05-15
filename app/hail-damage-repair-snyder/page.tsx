import { FadeIn } from "@/components/FadeIn";
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
import {
  Briefcase,
  Camera,
  Check,
  Circle,
  Droplets,
  Home,
  Phone,
  Search,
  Shield,
  Snowflake,
  Star,
  Tornado,
  Wrench,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/hail-damage-repair-snyder/" },
  title: "Hail Damage Repair Snyder TX | 5 Star Roofing",
  description:
    "Professional hail damage repair in Snyder TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Hail Damage Repair Snyder TX | 5 Star Roofing",
    description:
      "Professional hail damage repair in Snyder TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/hail-damage-repair-snyder/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-hail-damage.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HailDamageRepairSnyderPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/hail-damage-repair-snyder/#localbusiness",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-22-1280w.webp",
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
            geo: { "@type": "GeoCoordinates", latitude: 35.1768, longitude: -101.859 },
            url: "https://5starroofingpros.com/hail-damage-repair-snyder/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              name: "Snyder",
              containedInPlace: { "@type": "State", name: "Texas" },
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
              "Professional hail damage repair in Snyder TX. Expert installation, warranties, and insurance assistance.",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Hail Damage Roof Repair",
            name: "Hail Damage Repair in Snyder",
            description:
              "Professional hail damage repair services in Snyder, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Snyder",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Hail Damage Repair Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Hail Damage Repair Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Hail Damage Roof Repair" },
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

      {/* schema-cleanup:faqpage:removed */}

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="midland"
        city="Snyder"
        service="Hail Damage Repair"
        h1="Hail Damage Repair in Snyder, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-midland-15-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
          { name: "Snyder", url: "/hail-damage-repair-snyder/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Hail Damage Repair for homes and businesses in Snyder, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Snyder as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Materials and systems: UL 2218 Class 4 hail-rated options on every replacement, plus full insurance documentation support.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Fast</div>
                <div className="text-brand-brown font-semibold text-lg">Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Class 4</div>
                <div className="text-brand-brown font-semibold text-lg">Hail-Rated</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
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
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Does Snyder's Hail Damage Repair Specialists Look Like?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional hail damage repair throughout Snyder and surrounding areas. We understand
              Texas weather challenges and specialize in comprehensive hail damage assessment,
              insurance claims, and expert repair solutions designed for West Texas conditions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We've served Snyder with expert hail damage repairs, comprehensive
              insurance claim support, and outstanding customer service. We handle all permits,
              insurance documentation, and warranty services. Free hail damage inspections
              available.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Snyder's Hail Risk Profile
                </h3>
                <p className="text-gray-700 mb-4">
                  Snyder's location in West Texas places it within a high-risk hail zone where
                  significant hail events occur annually. The region experiences hailstones ranging
                  from quarter-size to softball-size, with stones exceeding 2 inches in diameter
                  recorded multiple times per year during peak storm seasons from March through
                  September.
                </p>
                <p className="text-gray-700 mb-4">
                  Scurry County's position at the intersection of major storm tracks creates
                  conditions for supercell thunderstorms that produce large hail. These storms often
                  move northeast from Mexico across West Texas, intensifying as they encounter
                  atmospheric conditions favorable for hail formation and growth.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Understanding Hail Damage Types
                </h3>
                <p className="text-gray-700 mb-4">
                  Hail damage varies significantly based on storm intensity, hailstone size, wind
                  patterns, and roofing material types. Professional assessment identifies both
                  obvious damage and subtle impacts that may not cause immediate leaks but
                  compromise long-term roof integrity and warranty coverage.
                </p>
                <p className="text-gray-700 mb-4">
                  West Texas hail events often include strong winds that create horizontal impact
                  patterns, causing damage to vertical surfaces including siding, windows, and roof
                  edges in addition to traditional top-down impacts on horizontal roof surfaces.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Does the Professional Hail Damage Assessment Process Work?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl mb-4 text-brand-gold-vibrant">
                  <Search className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Comprehensive Inspection
                </h3>
                <p className="text-gray-700 mb-4">
                  Our Snyder hail inspection covers every plane of the roof, measuring impact
                  diameter on asphalt shingles, checking for exposed fiberglass mat, and mapping
                  granule loss across slopes facing the prevailing west and southwest winds.
                  We also check accessory metal, vent boots, and attic decking for hidden moisture.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Slope-by-slope surface mapping with chalk-marked impact counts</li>
                  <li>• Impact diameter measured against UL 2218 Class 4 thresholds</li>
                  <li>• Granule loss patterns tied to wind direction during the storm</li>
                  <li>• Flashing, ridge cap, drip edge, and HVAC unit damage check</li>
                  <li>• Attic inspection for daylight, staining, and damp decking</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl mb-4 text-green-600">
                  <Camera className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Professional Documentation
                </h3>
                <p className="text-gray-700 mb-4">
                  Every Snyder claim packet includes close-up impact photos with a coin or chalk
                  circle for scale, a written slope report, and storm-date verification pulled
                  from NOAA records. Adjusters from State Farm, Allstate, USAA, Farmers, and
                  Texas Farm Bureau all work from the same evidence set.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Close-up impact photography with scale reference markers</li>
                  <li>• Written slope-by-slope assessment with severity ratings</li>
                  <li>• Square-footage measurements that match Xactimate line items</li>
                  <li>• Before, during, and after condition photos for every layer</li>
                  <li>• Storm-date verification from NOAA hail swath records</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl mb-4 text-orange-600">
                  <Briefcase className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Insurance Claim Support</h3>
                <p className="text-gray-700 mb-4">
                  We meet the adjuster on the roof in Snyder, walk every impact, and submit
                  supplements for items missed on the first scope. Our team works regularly with
                  State Farm, Allstate, USAA, Farmers, and Texas Farm Bureau, so claim language
                  and code-upgrade questions get answered the same day.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• On-roof adjuster meeting and walkthrough in Snyder</li>
                  <li>• Line-item repair estimate priced for current West Texas labor</li>
                  <li>• Supplements for code-required ice-water shield, decking, and flashing</li>
                  <li>• Claim file kept in one place with every photo and email logged</li>
                  <li>• Help recovering recoverable depreciation after final inspection</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Types of Hail Damage in Snyder Properties Look Like?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Understanding different types of hail damage helps property owners recognize when
                professional assessment and repair are necessary.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">
                      <Snowflake className="w-6 h-6 inline-block" /> Asphalt Shingle Damage
                    </h3>
                    <p className="text-gray-700">
                      On architectural asphalt shingles, hail strips granules off the asphalt mat
                      and leaves dark circular bruises that crush the fiberglass underneath.
                      One-inch stones cause cosmetic granule loss. Stones at 1.5 inches and up
                      typically crack the mat outright, which is the threshold most Texas carriers
                      use to approve full slope replacement.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">
                      <Circle className="w-6 h-6 inline-block" /> Metal Roofing Impact
                    </h3>
                    <p className="text-gray-700">
                      Standing seam metal and R-panel roofs on Scurry County barns, shops, and
                      homes show hail as dents along the flat pan and across the seam ribs.
                      A dented panel still sheds water at first, but the Kynar or SMP coating
                      cracks at the impact and rust works in from there. Most carriers will
                      cover replacement when denting covers a slope at typical Class 4 thresholds.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">
                      <Wrench className="w-6 h-6 inline-block" /> Flashing and Accessory Damage
                    </h3>
                    <p className="text-gray-700">
                      Aluminum roof vents, painted step flashing, drip edge, gutters, and the
                      condenser fins on HVAC units dent before shingles do. Bent flashing
                      breaks the seal at the chimney or sidewall and that is where leaks usually
                      show first in Snyder homes. We document accessory damage as its own line
                      item so the adjuster does not pay only for shingles.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">
                      <Droplets className="w-6 h-6 inline-block" /> Immediate vs. Progressive Damage
                    </h3>
                    <p className="text-gray-700">
                      Some Snyder hail damage leaks the same night. A punctured shingle over the
                      kitchen ceiling tells you fast. Bruised mats, hairline cracks, and dented
                      flashing typically hold water for one or two seasons before the next West
                      Texas storm pulls them apart. We document both so the claim covers what
                      is wet today and what will fail next year.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">
                      <Tornado className="w-6 h-6 inline-block" /> Wind-Driven Hail Patterns
                    </h3>
                    <p className="text-gray-700">
                      Supercells rolling across the Rolling Plains and Llano Estacado drive hail
                      sideways at the south and west elevations of Snyder homes. That blows
                      granules off lower courses, scars vinyl siding, dents garage door panels,
                      and chews up window screens. We walk the perimeter on the ground after
                      every roof inspection to catch this lateral damage for the claim.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-brand-brown flex items-center">
                      <Home className="w-6 h-6 inline-block" /> Interior Impact Assessment
                    </h3>
                    <p className="text-gray-700">
                      Inside the home we look for fresh ceiling stains, sagging drywall, wet
                      blown-in insulation in the attic, and any signs of water at electrical
                      junction boxes. Interior damage is often where carriers add coverage to
                      the claim, but it has to be photographed and tied to the storm date in
                      the same packet as the roof scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Does the Insurance Claims Process Work in Snyder?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Maximizing insurance coverage for hail damage requires professional documentation,
                strategic claim presentation, and experienced adjuster interaction.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                    Professional Documentation Standards
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Texas carriers like State Farm, Allstate, USAA, Farmers, and Texas Farm
                    Bureau each have their own documentation expectations. We put every Snyder
                    claim into one packet that matches Xactimate line items, ties impacts to a
                    storm date from NOAA records, and calls out 2021 IRC code-upgrade items the
                    adjuster has to honor.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Close-up impact photos with chalk circles and scale references</li>
                    <li>• Slope-by-slope assessment with impact counts and severity notes</li>
                    <li>• Storm-date verification from NOAA Storm Events for Scurry County</li>
                    <li>• Material specs that match UL 2218 Class 4 or original equivalent</li>
                    <li>• Code-upgrade line items (ice-water shield, decking, drip edge)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                    Adjuster Interaction Expertise
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We meet the adjuster on the roof in Snyder and walk the slopes together. That
                    one habit settles most coverage disputes before the report is written.
                    When the first scope misses items like step flashing, drip edge, or wind-bent
                    ridge cap, we file a written supplement with photos so the carrier has no
                    reason to deny the addition.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Adjuster meeting scheduled within carrier response windows</li>
                    <li>• On-roof walkthrough pointing out each marked impact</li>
                    <li>• Plain reading of the policy on RCV, ACV, and Class 4 endorsements</li>
                    <li>• Written supplements for items missed on the first scope</li>
                    <li>• Help filing for recoverable depreciation after final inspection</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Impact-Resistant Roofing Upgrades Include?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Post-hail damage repair presents an opportunity to upgrade to impact-resistant
                roofing systems that provide superior protection and insurance benefits.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-brand-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Class 4 Impact Rating</h3>
                  <p className="text-gray-600">
                    UL 2218 Class 4 shingles withstand impacts from 2-inch steel balls, providing
                    maximum hail protection and qualifying for significant insurance premium
                    discounts in Texas.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    %
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Insurance Discounts</h3>
                  <p className="text-gray-600">
                    Class 4 shingles qualify for insurance premium discounts up to 30% in Texas,
                    often paying for upgrade costs through reduced premiums over the roof's
                    lifespan.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    <Shield className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Enhanced Protection</h3>
                  <p className="text-gray-600">
                    UL 2218 Class 4 shingles are tested by dropping a 2-inch steel ball on the
                    same spot twice without cracking the mat. That holds up against the size of
                    hail Snyder sees most often during the March-to-September storm season. Fewer
                    cracked shingles means fewer leak repairs and fewer claims against the policy.
                  </p>
                </div>
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
                  How do I know if my Snyder roof has hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Look for granule loss (shiny spots on shingles), dents on metal vents and
                  flashing, cracked or split shingles, dented gutters and downspouts, and interior
                  water stains. Hail damage isn't always immediately visible - we provide free
                  professional inspections with detailed photo documentation for insurance claims.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover hail damage in Snyder?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, if damage occurred during your policy period and meets your deductible. We
                  document all impacts, coordinate directly with adjusters, and advocate for maximum
                  coverage. Our professional documentation and claim support result in + approval
                  rates for legitimate hail damage claims.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I upgrade to Class 4 shingles after hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Class 4 impact-resistant shingles reduce future hail damage by up to
                  90% and qualify for insurance premium discounts up to 30% in Texas. The insurance
                  savings often pay for the upgrade over the roof's lifespan while providing
                  superior protection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long do I have to file a hail damage claim?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most Texas insurance policies require claims within one year of the damage date,
                  but it's best to file within 30-60 days. We help document damage immediately after
                  storms and can assist with claim filing even months later if damage is discovered
                  during routine inspections.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What size hail causes damage to roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Hail as small as 1 inch can cause granule loss and minor damage to standard
                  shingles. Hail 1.25 inches and larger typically causes functional damage requiring
                  repair or replacement. Snyder commonly experiences hail 1.5-2+ inches that creates
                  significant damage requiring immediate professional attention.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can hail damage cause leaks immediately?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Large hail can puncture shingles and create immediate leaks, but most hail damage
                  compromises long-term integrity without immediate water intrusion. However,
                  damaged areas become vulnerable to future storms, making prompt professional
                  assessment and repair essential.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work with all insurance companies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we work with all major insurance carriers including State Farm, Allstate,
                  USAA, Farmers, and many others. Our extensive experience with different carriers'
                  requirements ensures smooth claim processing and maximum coverage regardless of
                  your insurance provider.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Does Our Post-Storm Process Work in Snyder?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Understanding the post-storm timeline helps property owners take appropriate action
                for successful hail damage claims and repairs.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    First 48 Hours
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Right after a Scurry County hail event, keep family off the roof and check
                    for downed power lines and broken glass on the ground. Take phone photos of
                    dents on the AC unit, gutters, and any hail still on the lawn for size scale.
                    Then call us and your carrier so the inspection gets scheduled before the
                    next storm complicates the claim.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Stay clear of the roof and any downed lines</li>
                    <li>• Photograph dents on metal, gutters, AC fins, and yard hail</li>
                    <li>• Open a claim with State Farm, USAA, Farmers, or your carrier</li>
                    <li>• Schedule a free Snyder inspection at (806) 622-6041</li>
                    <li>• Use tarps or buckets only if there is an active leak</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    Assessment and Claims (3-14 Days)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Most Snyder hail claims settle inside two weeks if the on-roof inspection
                    and the adjuster meeting happen close together. We finish our slope report
                    inside 48 hours of the call, meet the adjuster on the roof, and submit the
                    estimate priced for current West Texas labor and material rates so nothing
                    holds the file up at the carrier.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Slope-by-slope damage report with photos and counts</li>
                    <li>• On-roof adjuster walkthrough scheduled inside the carrier window</li>
                    <li>• Itemized estimate matching Xactimate line items</li>
                    <li>• Supplements filed for items missed on the first scope</li>
                    <li>• Material ordered through GAF, CertainTeed, or Owens Corning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Choose 5 Star Roofing for Hail Damage Repair in Snyder?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-brown text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Hail Damage Expertise
                      </h3>
                      <p className="text-gray-700">
                        From the Caprock and Llano Estacado down through the Rolling Plains, our
                        Amarillo-based crews know how Scurry County storms hit and what damage
                        carriers expect to see in the claim photos. We have been doing hail work
                        out of Amarillo since 2014.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-brown text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Insurance Claim Success
                      </h3>
                      <p className="text-gray-700">
                        
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-brown text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Advanced Materials
                      </h3>
                      <p className="text-gray-700">
                        Access to latest impact-resistant roofing technologies including Class 4
                        shingles, advanced metal systems, and innovative materials designed for
                        superior hail protection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-brown text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Complete Documentation
                      </h3>
                      <p className="text-gray-700">
                        Every Snyder claim packet includes close-up impact photos with scale,
                        a written slope report, square-footage measurements that line up with
                        Xactimate, and storm-date verification from NOAA records. That is what
                        adjusters at State Farm, USAA, and Texas Farm Bureau actually look for.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-brown text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Local Availability
                      </h3>
                      <p className="text-gray-700">
                        Our trucks roll out of Amarillo and run the I-27 and Highway 84 corridor
                        into Snyder, Lubbock, and the rest of Scurry County. After a storm we
                        cluster inspections by neighborhood so homeowners on the same street
                        get on the schedule together instead of waiting weeks for an opening.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-brown text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Comprehensive Warranties
                      </h3>
                      <p className="text-gray-700">
                        Snyder hail replacements come with the manufacturer material warranty
                        from GAF, CertainTeed, or Owens Corning on the shingle itself, plus our
                        own workmanship warranty on the installation. Both stay with the home
                        if you sell, which matters in a market where buyers ask for roof papers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <InternalLinks currentCity="snyder" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Snyder property owners. Expert hail damage repair with
            comprehensive warranties and insurance assistance.
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
        <RelatedArticles pageSlug="hail-damage-repair-snyder" />
      </div>
    </>
  );
}
