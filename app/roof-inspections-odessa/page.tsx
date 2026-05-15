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
  BarChart3,
  Factory,
  FlaskConical,
  Home,
  Landmark,
  Leaf,
  Mountain,
  Phone,
  Snowflake,
  Star,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections-odessa/" },
  title: "Roof Inspections Odessa TX | 5 Star Roofing",
  description:
    "Professional roof inspections in Odessa TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Inspections Odessa TX | 5 Star Roofing",
    description:
      "Professional roof inspections in Odessa TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-inspections-odessa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofInspectionsOdessaPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-inspections-odessa/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$$",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 35.1768, longitude: -101.859 },
            url: "https://5starroofingpros.com/roof-inspections-odessa/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
              name: "Odessa",
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
              "Professional roof inspections in Odessa TX. Expert installation, warranties, and insurance assistance.",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Professional Roof Inspection",
            name: "Roof Inspections in Odessa",
            description:
              "Professional roof inspections services in Odessa, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Odessa",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Roof Inspections Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Roof Inspections Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Roof Inspections Repair" },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does a roof inspection cost in Odessa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide FREE roof inspections in Odessa with no obligation. Comprehensive reports include photos, damage documentation, and recommendations.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a roof inspection take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most residential inspections take 30-60 minutes. Commercial buildings require 1-3 hours depending on size and complexity.",
                },
              },
              {
                "@type": "Question",
                name: "When should I get my roof inspected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "After any hailstorm, before buying/selling property, annually for maintenance, or if you notice leaks, missing shingles, or interior water stains.",
                },
              },
            ],
          }),
        }}
      />

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="odessa"
        city="Odessa"
        service="Roof Inspections"
        h1="Roof Inspections in Odessa, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Inspections", url: "/roof-inspections/" },
          { name: "Odessa", url: "/roof-inspections-odessa/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Inspections for homes and businesses in Odessa, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Odessa as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Inspection scope: visual and drone assessment, photo report, and clear written findings on what needs repair versus replacement.</span></li>
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
              What Does Odessa's Comprehensive Roof Inspection Authority Involve?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional roof inspections serving Odessa, the birthplace of Texas oil. Our
              expertise extends beyond standard weather damage to include the unique challenges of
              petroleum refining operations, chemical processing facilities, and the complex mix of
              industrial and residential properties that define this historic energy hub.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our certified inspectors understand how Odessa's petroleum refining heritage affects
              local air quality and building materials. From the historic downtown district to the
              sprawling suburban developments in West Odessa, we've assessed roofing systems
              impacted by everything from refinery emissions to the unique wind patterns created by
              the Llano Estacado escarpment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every inspection addresses Odessa's specific environmental challenges: petrochemical
              air quality impacts, limestone caliche soil effects on foundation settlement, and the
              interaction between industrial operations and residential neighborhoods that creates
              unique maintenance requirements throughout the city.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-amber-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Are Odessa's Unique Environmental Impact Assessment?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Factory className="w-6 h-6 inline-block" /> Refinery and Chemical Plant Effects
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Sulfur Compound Corrosion:</strong> Assessment of refinery emission
                    damage to metal roofing components
                  </li>
                  <li>
                    <strong>Petrochemical Deposition:</strong> Detection of hydrocarbon residue
                    buildup on roofing surfaces
                  </li>
                  <li>
                    <strong>Acid Rain Impact:</strong> Chemical precipitation effects from
                    industrial stack emissions
                  </li>
                  <li>
                    <strong>Catalyst Particulate:</strong> Fine particle contamination from fluid
                    catalytic cracking units
                  </li>
                  <li>
                    <strong>Mercaptan Exposure:</strong> Odor compound effects on synthetic roofing
                    materials
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  🪨 Geological Foundation Challenges
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Limestone Caliche Stability:</strong> Foundation movement assessment on
                    West Texas geology
                  </li>
                  <li>
                    <strong>Escarpment Wind Effects:</strong> Unique wind loading from Llano
                    Estacado geographic features
                  </li>
                  <li>
                    <strong>Soil Alkali Content:</strong> High-pH soil impact on foundation and
                    structural materials
                  </li>
                  <li>
                    <strong>Subsurface Oil Activity:</strong> Historical drilling impact on ground
                    stability
                  </li>
                  <li>
                    <strong>Aquifer Fluctuations:</strong> Groundwater level changes affecting
                    foundation support
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Wind className="w-6 h-6 inline-block" /> Air Quality and Visibility Issues
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Particulate Loading:</strong> Caliche and oilfield dust that builds
                    on TPO and EPDM membranes near Highway 158
                  </li>
                  <li>
                    <strong>Ozone Degradation:</strong> Ground-level ozone breaking down EPDM
                    seams and plastic vent boots faster than in cleaner air
                  </li>
                  <li>
                    <strong>Visibility During Inspections:</strong> Hazy days from Permian
                    Basin operations can hide flashing detail at distance
                  </li>
                  <li>
                    <strong>Chemical Odor Events:</strong> Notes added to the inspection
                    report when sulfur or hydrocarbon exposure is observed on-site
                  </li>
                  <li>
                    <strong>Prevailing Wind Mapping:</strong> Southwesterly Permian Basin
                    winds direct most fallout, which guides which roof slopes need closer
                    review
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Home className="w-6 h-6 inline-block" /> Mixed-Use Development Impacts
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Industrial-Residential Interface:</strong> Odessa homes adjacent to
                    refineries and tank farms see different exposure than those west of I-20
                  </li>
                  <li>
                    <strong>Transportation Corridor Effects:</strong> Properties along I-20
                    and the Union Pacific rail line see more diesel particulate and vibration
                  </li>
                  <li>
                    <strong>Commercial District Variation:</strong> Downtown Odessa, the
                    Music City district, and the Loop 338 commercial belt each have
                    different roof exposure patterns
                  </li>
                  <li>
                    <strong>Older Construction Notes:</strong> Mid-century homes near the
                    original downtown often have original decking and need careful flashing
                    review
                  </li>
                  <li>
                    <strong>Utility Corridor Access:</strong> Permian Basin pipeline and
                    Oncor electrical easements affect access routes for crews and equipment
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Specialized Insurance Expertise for Odessa Properties?
            </h2>
            <div className="bg-amber-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">
                Petroleum Industry Insurance Considerations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Damage Documentation for Carriers
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Hail and wind damage photos separated from long-term wear</li>
                    <li>• Date-stamped imagery to support claim timing</li>
                    <li>• Notes on adjacent industrial activity when relevant</li>
                    <li>• Material degradation patterns documented per slope</li>
                    <li>• Inspection reports formatted for State Farm, Allstate, USAA,
                      and Texas Farm Bureau adjusters</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Mixed-Use and Older Property Notes
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Coverage notes on shared commercial-residential structures</li>
                    <li>• Older Odessa downtown construction often requires matching
                      historic profiles</li>
                    <li>• Documentation of pre-existing wear on older decking</li>
                    <li>• City of Odessa permit and inspection coordination</li>
                    <li>• Notes on property condition factors that may affect resale</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">
                Common Odessa Insurance Claim Challenges
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Industrial vs. Weather Damage Classification:</strong> Distinguishing
                  between normal industrial exposure and acute weather damage requires specialized
                  documentation. Our inspectors use forensic techniques to identify damage patterns
                  specific to each cause, ensuring proper insurance coverage determination.
                </p>
                <p className="text-gray-700">
                  <strong>Air Quality Event Correlation:</strong> Odessa occasionally experiences
                  severe air quality episodes that can damage roofing materials. We maintain
                  relationships with local air quality monitoring agencies to correlate material
                  damage with documented pollution events for insurance claims.
                </p>
                <p className="text-gray-700">
                  <strong>Foundation Settlement vs. Weather Impact:</strong> Odessa's geology can
                  cause foundation movement that affects roof structure. We specialize in
                  differentiating between normal geological settlement and weather-related
                  structural damage to ensure appropriate insurance coverage.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Does Strategic Inspection Timing for Odessa's Climate and Industry Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Leaf className="w-6 h-6 inline-block" /> Spring Air Quality Assessment
                  (March-May)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Spring Inspection Window:</strong> March through May is hail-season
                  prep across the Permian Basin. We schedule pre-storm inspections so flashing
                  weaknesses and granule loss are documented before the first severe weather.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Pre-hail-season baseline photos for insurance reference</li>
                  <li>• Sealant and flashing review after winter freeze-thaw cycles</li>
                  <li>• Confirm attic ventilation is clear before cooling season</li>
                  <li>• Identify Class 4 hail-rated upgrade candidates ahead of supercell
                    weather</li>
                  <li>• Document existing condition for State Farm and USAA carriers</li>
                </ul>
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Industry Tip:</strong> Coordinate with refinery maintenance schedules
                    for optimal air quality windows.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Sun className="w-6 h-6 inline-block" /> Summer Heat and Ozone Season
                  (June-August)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Peak Environmental Stress:</strong> Odessa's summer heat combines with
                  industrial emissions to create high ozone levels that accelerate material
                  degradation. Critical assessment period for cumulative damage.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Heat-accelerated chemical reaction damage assessment</li>
                  <li>• Ozone episode correlation with material degradation</li>
                  <li>• Industrial flare activity impact during peak demand</li>
                  <li>• UV exposure intensification in clear, dry air conditions</li>
                  <li>• Cooling system stress testing and efficiency optimization</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Environmental Note:</strong> Monitor air quality alerts for optimal
                    inspection timing.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Leaf className="w-6 h-6 inline-block" /> Fall Comprehensive Evaluation
                  (September-November)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Industrial Activity Stabilization:</strong> Fall brings more stable
                  industrial operations and moderate weather, ideal for comprehensive annual
                  assessments and major maintenance planning.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Annual cumulative environmental impact assessment</li>
                  <li>• Industrial facility winterization preparation coordination</li>
                  <li>• Property value assessment for tax and insurance purposes</li>
                  <li>• Major maintenance project planning and contractor scheduling</li>
                  <li>• Insurance claim deadline management and documentation review</li>
                </ul>
                <div className="mt-4 p-4 bg-amber-100 rounded-lg">
                  <p className="text-sm text-brand-brown">
                    <strong>Planning Advantage:</strong> Best contractor availability and stable
                    weather conditions.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Snowflake className="w-6 h-6 inline-block" /> Winter Industry Maintenance Period
                  (December-February)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Off-Season Repair Window:</strong> December through February is the
                  quieter period for severe Permian Basin weather. We use it for non-urgent
                  repairs, full replacements, and detailed inspections that benefit from
                  stable working conditions.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Easier scheduling for full asphalt or metal replacements</li>
                  <li>• Real estate transaction inspections with quicker turnaround</li>
                  <li>• Detailed deck and underlayment evaluation under tear-off</li>
                  <li>• Next-year maintenance planning and budget review</li>
                  <li>• Sealant and flashing repairs before spring hail returns</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Air Quality Advantage:</strong> Reduced industrial emissions during
                    maintenance shutdowns.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-amber-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Are Odessa's Complex Environmental Landscape?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Factory className="w-6 h-6 inline-block" /> Historic Petroleum Refining Center
                </h3>
                <p className="text-gray-700 mb-3">
                  Odessa has been refining petroleum since 1929, creating a unique urban environment
                  where residential neighborhoods exist alongside major industrial facilities. The
                  legacy of decades of industrial operations has created specific air quality
                  challenges that affect building materials differently than normal weathering.
                </p>
                <p className="text-gray-700">
                  <strong>Specialized Assessment:</strong> We use historical air quality data and
                  industrial incident records to correlate property damage with documented
                  environmental events, providing defensible documentation for insurance claims and
                  environmental liability assessments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Mountain className="w-6 h-6 inline-block" /> Llano Estacado Escarpment Effects
                </h3>
                <p className="text-gray-700 mb-3">
                  Odessa sits on the northern edge of the Llano Estacado, creating unique
                  topographical wind patterns and geological conditions. The escarpment creates wind
                  acceleration zones and differential pressure areas that affect roofing systems
                  differently than flat terrain locations.
                </p>
                <p className="text-gray-700">
                  <strong>Geographical Analysis:</strong> Our inspections include topographical wind
                  pattern analysis and geological stability assessment specific to escarpment
                  locations, identifying damage patterns unique to Odessa's geographic position.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Landmark className="w-6 h-6 inline-block" /> Historic Downtown Mixed Development
                </h3>
                <p className="text-gray-700 mb-3">
                  Odessa's downtown combines historic buildings from the oil boom era with modern
                  commercial and residential development. This creates unique challenges in material
                  compatibility, building code compliance, and environmental exposure variations
                  within small geographic areas.
                </p>
                <p className="text-gray-700">
                  <strong>Heritage Considerations:</strong> We specialize in historic building
                  assessment, material compatibility analysis, and preservation-compliant repair
                  recommendations that maintain historical integrity while addressing modern
                  environmental challenges.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Advanced Environmental Monitoring for Industrial Conditions?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">
                  <Thermometer className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">
                  Documentation for Insurance Claims
                </h3>
                <p className="text-gray-700">
                  Detailed photo logs, slope-by-slope condition notes, and timeline references
                  help adjusters from State Farm, Allstate, USAA, Farmers, and Texas Farm
                  Bureau separate storm damage from long-term Permian Basin weathering. The
                  report is delivered before the adjuster site visit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">
                  <FlaskConical className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">
                  Material-Condition Notes
                </h3>
                <p className="text-gray-700">
                  Inspection reports note observable surface conditions on asphalt, TPO, and
                  metal roofing across Odessa properties: granule loss, seam separation,
                  fastener back-out, and oxidation. Where deeper material testing is needed,
                  we coordinate with the homeowner's insurance carrier and licensed
                  engineers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">
                  <BarChart3 className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">
                  Storm Timeline References
                </h3>
                <p className="text-gray-700">
                  When the inspection links damage to a specific event, we reference
                  publicly available NOAA storm reports and Ector County weather records for
                  the date in question. That timeline language is what insurance adjusters
                  rely on to date hail and wind claims accurately.
                </p>
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
                  How much does a roof inspection cost in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide FREE roof inspections in Odessa with no obligation. Comprehensive
                  reports include photos, damage documentation, and recommendations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does a roof inspection take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most residential inspections take 30-60 minutes. Commercial buildings require 1-3
                  hours depending on size and complexity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  When should I get my roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  After any hailstorm, before buying/selling property, annually for maintenance, or
                  if you notice leaks, missing shingles, or interior water stains.
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
        <InternalLinks currentCity="odessa" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Odessa property owners. Expert roof inspections with comprehensive
            warranties and insurance assistance.
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
        <RelatedArticles pageSlug="roof-inspections-odessa" />
      </div>
    </>
  );
}
