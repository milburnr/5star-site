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
  CloudHail,
  Droplets,
  Flower2,
  Home,
  Leaf,
  Phone,
  Plane,
  Radio,
  Search,
  Snowflake,
  Star,
  Sun,
  Thermometer,
  Tornado,
  Wind,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections-amarillo/" },
  title: "Roof Inspections Amarillo TX | 5 Star Roofing",
  description:
    "Professional roof inspections in Amarillo TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Inspections Amarillo TX | 5 Star Roofing",
    description:
      "Professional roof inspections in Amarillo TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-inspections-amarillo/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofInspectionsAmarilloPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-inspections-amarillo/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
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
            url: "https://5starroofingpros.com/roof-inspections-amarillo/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              name: "Amarillo",
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
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            description:
              "Professional roof inspections in Amarillo TX. Expert installation, warranties, and insurance assistance.",
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
            name: "Roof Inspections in Amarillo",
            description:
              "Professional roof inspections services in Amarillo, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Amarillo",
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
                name: "How much does a roof inspection cost in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide FREE roof inspections in Amarillo with no obligation. Comprehensive reports include photos, damage documentation, and recommendations.",
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
        citySlug="amarillo"
        city="Amarillo"
        service="Roof Inspections"
        h1="Roof Inspections in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Inspections", url: "/roof-inspections/" },
          { name: "Amarillo", url: "/roof-inspections-amarillo/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Inspections for homes and businesses in Amarillo, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Amarillo as part of its West Texas service area.</span></li>
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
              What Does Amarillo's Comprehensive Roof Inspection Experts Involve?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional roof inspections throughout Amarillo and surrounding areas. We understand
              the unique challenges posed by Texas Panhandle weather, from devastating hailstorms to
              80+ mph wind events, extreme temperature fluctuations, and relentless UV exposure that
              can destroy roofs in just a few years.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We've conducted thousands of roof inspections across Amarillo, from
              historic downtown properties to new subdivisions in Southwest Amarillo. Our certified
              inspectors use advanced technology including thermal imaging, moisture meters, and
              high-resolution drone photography to identify problems that ground-level visual
              inspections might miss.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide detailed inspection reports that satisfy insurance requirements, real
              estate transactions, and warranty claims. Every inspection includes digital
              documentation, safety assessments, and prioritized repair recommendations with cost
              estimates.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-slate-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Our Amarillo Roof Inspectors Examine?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Search className="w-6 h-6 inline-block" /> Structural Components
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Roof Decking:</strong> We check for sagging, warping, or water damage in
                    plywood or OSB sheathing
                  </li>
                  <li>
                    <strong>Rafters & Trusses:</strong> Inspection for cracking, splitting, or
                    deflection under load
                  </li>
                  <li>
                    <strong>Support Beams:</strong> Assessment of load-bearing capacity and
                    structural integrity
                  </li>
                  <li>
                    <strong>Ridge Boards:</strong> Examination for proper installation and weather
                    damage
                  </li>
                  <li>
                    <strong>Fascia & Soffit:</strong> Detection of rot, pest damage, or improper
                    ventilation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Home className="w-6 h-6 inline-block" /> Roofing Materials
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Asphalt Shingles:</strong> granule loss, mat exposure, and circular bruising from Panhandle hail on GAF, CertainTeed, and Owens Corning products
                  </li>
                  <li>
                    <strong>Standing Seam and R-Panel Metal:</strong> seam corrosion, loose fasteners, and panel oil-canning from thermal cycling
                  </li>
                  <li>
                    <strong>Concrete and Clay Tile:</strong> cracked or shifted tiles and exposed underlayment around chimneys and valleys
                  </li>
                  <li>
                    <strong>TPO, PVC, and EPDM Membrane:</strong> punctures, seam failures, and UV chalking on commercial low-slope roofs
                  </li>
                  <li>
                    <strong>Built-Up and Modified Bitumen:</strong> alligatoring, blistering, and granule loss on BUR and modified bitumen flood coats
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Droplets className="w-6 h-6 inline-block" /> Water Management
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Gutter Systems:</strong> we check slope toward downspouts, hanger spacing across long Panhandle eaves, and dust buildup that clogs flow during the spring storm cycle
                  </li>
                  <li>
                    <strong>Downspouts:</strong> sizing and discharge routed well away from the foundation, important on Amarillo&apos;s heavy clay soils that swell and shrink with moisture
                  </li>
                  <li>
                    <strong>Drainage Patterns:</strong> standing water mapped on low-slope commercial roofs and tapered insulation called out where ponding is forming
                  </li>
                  <li>
                    <strong>Flashing Details:</strong> chimney, plumbing boot, and skylight flashing checked for ASTM-compliant step-and-counter detail and sealant condition
                  </li>
                  <li>
                    <strong>Ice Dams:</strong> potential formation areas at eaves above poorly insulated soffits during Panhandle freeze-thaw cycles, with peel-and-stick membrane recommended where needed
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Tornado className="w-6 h-6 inline-block" /> Weather Damage Assessment
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Hail Impact:</strong> circular bruising and exposed asphalt mat that meet the patterns insurance adjusters from State Farm, Allstate, and USAA recognize as Hail Alley damage
                  </li>
                  <li>
                    <strong>Wind Damage:</strong> lifted tabs, exposed nails along ridges and rakes, and blown-off shingles from 80+ mph Panhandle gusts
                  </li>
                  <li>
                    <strong>Storm Debris:</strong> tree branches, fence panels, and other wind-driven debris that punctures shingles and dents metal flashing
                  </li>
                  <li>
                    <strong>UV Deterioration:</strong> accelerated aging on south- and west-facing slopes from Amarillo&apos;s open-sky exposure at 3,600 feet of elevation
                  </li>
                  <li>
                    <strong>Thermal Cycling:</strong> seam splits, fastener back-out, and metal panel oil-canning from Panhandle days that swing 50-60°F between morning and afternoon
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Does Insurance Requirements for Amarillo Roof Inspections Involve?
            </h2>
            <div className="bg-amber-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">
                Insurance Company Standards We Meet
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Documentation Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High-resolution photos of every damaged slope, hand-held and aerial</li>
                    <li>• Measured roof diagrams with damage locations marked by elevation</li>
                    <li>• GPS-tagged drone imagery from each cardinal direction</li>
                    <li>• Granule-loss samples and chalk-marked test squares for adjuster reference</li>
                    <li>• Written assessment report with material brand, age, and replacement scope</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Insurance Claim Support</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Direct meetings with adjusters from State Farm, Allstate, USAA, Farmers, and Texas Farm Bureau</li>
                    <li>• Supplemental claims when the initial scope misses code-required upgrades</li>
                    <li>• Advocacy for current Amarillo building code items like ice-and-water shield and drip edge</li>
                    <li>• Scope-of-work line items written in language adjusters and software like Xactimate read cleanly</li>
                    <li>• Material and labor pricing tied to current Panhandle supply-house quotes, not stale software defaults</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">
                Common Insurance Challenges in Amarillo
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Wind vs. Hail Damage Distinction:</strong> Many insurance policies treat
                  wind and hail damage differently. Our inspectors are trained to identify and
                  properly document the specific type of weather damage, ensuring you receive
                  appropriate coverage under your policy terms.
                </p>
                <p className="text-gray-700">
                  <strong>Pre-Existing Condition Claims:</strong> Insurance companies often claim
                  damage was pre-existing. We maintain detailed photographic records and can provide
                  expert testimony about the timeline of damage, especially important in Amarillo
                  where multiple storm events occur each season.
                </p>
                <p className="text-gray-700">
                  <strong>Cosmetic vs. Functional Damage:</strong> Some insurers attempt to classify
                  storm damage as cosmetic. We document how seemingly minor damage affects the
                  roof's waterproofing integrity and long-term performance, particularly crucial
                  given Amarillo's extreme weather cycles.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Does Optimal Timing for Roof Inspections in Amarillo Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Flower2 className="w-6 h-6 inline-block" /> Spring Inspections (March-May)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Peak Storm Season Preparation:</strong> Amarillo's severe weather season
                  typically begins in March and peaks in April-May. Spring inspections identify
                  winter damage and prepare your roof for the coming storm season.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Assessment of winter freeze-thaw damage</li>
                  <li>• Pre-storm structural integrity verification</li>
                  <li>• Gutter and drainage system optimization</li>
                  <li>• Identification of loose or vulnerable materials</li>
                  <li>• Insurance deductible planning before claims season</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Sun className="w-6 h-6 inline-block" /> Summer Inspections (June-August)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Heat Damage Assessment:</strong> Amarillo's intense summer sun and
                  temperatures exceeding 100°F can cause rapid deterioration. Summer inspections
                  focus on heat-related damage and UV degradation.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• UV damage and accelerated aging assessment</li>
                  <li>• Thermal expansion stress evaluation</li>
                  <li>• Attic ventilation efficiency testing</li>
                  <li>• Mid-season storm damage documentation</li>
                  <li>• Energy efficiency optimization recommendations</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Leaf className="w-6 h-6 inline-block" /> Fall Inspections (September-November)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Storm Season Wrap-up:</strong> Fall inspections assess cumulative damage
                  from the storm season and prepare roofs for winter weather, including potential
                  ice events in the Texas Panhandle.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Comprehensive storm season damage assessment</li>
                  <li>• Final insurance claim opportunities</li>
                  <li>• Winter weather preparation</li>
                  <li>• Debris removal and gutter cleaning</li>
                  <li>• Year-end maintenance planning</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Snowflake className="w-6 h-6 inline-block" /> Winter Inspections
                  (December-February)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Structural Assessment:</strong> winter inspections matter most after a Panhandle ice event or for real estate transactions during the slower months, when scheduling is easier and crews are available on shorter notice.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Ice and freeze-thaw damage along eaves, valleys, and chimney flashing</li>
                  <li>• Real estate transaction inspections for buyers and sellers in Potter and Randall counties</li>
                  <li>• Annual maintenance planning for the next storm cycle</li>
                  <li>• Off-season scheduling with shorter lead times and easier permit turnaround in Amarillo</li>
                  <li>• Spring storm prep, including loose fastener resets and sealant top-ups around penetrations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-amber-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Are Amarillo's Unique Weather Challenges?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Tornado className="w-6 h-6 inline-block" /> Severe Hailstorms
                </h3>
                <p className="text-gray-700 mb-3">
                  Amarillo sits in the heart of "Hail Alley," experiencing an average of 9-12
                  significant hail events annually. The Texas Panhandle's geography creates perfect
                  conditions for supercells that produce golf ball to softball-sized hail.
                </p>
                <p className="text-gray-700">
                  <strong>Inspection Focus:</strong> We use specialized techniques to identify
                  subtle hail damage that may not be visible to untrained eyes, including granule
                  loss patterns, mat exposure, and impact fractals that insurance adjusters
                  recognize as legitimate damage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Wind className="w-6 h-6 inline-block" /> Extreme Wind Events
                </h3>
                <p className="text-gray-700 mb-3">
                  Amarillo is consistently ranked among America's windiest cities, with average
                  speeds of 14+ mph and gusts regularly exceeding 80 mph. The flat terrain provides
                  no wind breaks, creating sustained high-velocity conditions.
                </p>
                <p className="text-gray-700">
                  <strong>Inspection Focus:</strong> We examine uplift patterns, fastener integrity,
                  and progressive wind damage that can compromise entire roofing systems over time,
                  even when individual events don't cause obvious damage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">
                  <Thermometer className="w-6 h-6 inline-block" /> Extreme Temperature Variations
                </h3>
                <p className="text-gray-700 mb-3">
                  Amarillo experiences temperature swings of 60+ degrees within 24 hours, with
                  summer highs above 105°F and winter lows below 0°F. This thermal cycling creates
                  expansion and contraction stress that's unique to the region.
                </p>
                <p className="text-gray-700">
                  <strong>Inspection Focus:</strong> We assess thermal movement damage, including
                  fastener backing-out, seam separation, and material fatigue that results from
                  constant expansion and contraction cycles.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Does Advanced Inspection Technology We Use Involve?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">
                  <Radio className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">
                  Thermal Imaging
                </h3>
                <p className="text-gray-700">
                  FLIR thermal cameras pick up moisture trapped under shingles and TPO membrane along with insulation gaps in Amarillo attics that you can&apos;t see from a ladder. Useful for finding the source of slow leaks where chimney flashing or skylights have been quietly failing for a season or two.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">
                  <Plane className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">
                  Drone Photography
                </h3>
                <p className="text-gray-700">
                  Aerial photography from a licensed drone safely documents damage on steep two-story Amarillo homes and on tall commercial parapets that aren&apos;t safe to walk. GPS-tagged images give adjusters exact slope locations for claims with State Farm, USAA, and Farmers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">
                  <Droplets className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">
                  Moisture Detection
                </h3>
                <p className="text-gray-700">
                  Pin and pinless moisture meters pull readings from decking, drywall, and insulation so we can separate active leaks from old stains. That matters in Amarillo, where a wet stretch in May can hide damage that a 100°F July afternoon then bakes invisible.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Does the Step-by-Step Inspection Process Work?
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Phase 1: Exterior Assessment (30-45 minutes)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Ground-Level Survey</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Overall Condition:</strong> Roof shape, ridge alignment, gutter
                        attachment
                      </li>
                      <li>
                        • <strong>Visible Damage:</strong> Missing shingles, obvious impact marks,
                        debris
                      </li>
                      <li>
                        • <strong>Drainage Assessment:</strong> Water flow patterns, ponding areas
                      </li>
                      <li>
                        • <strong>Safety Evaluation:</strong> Structural stability before roof
                        access
                      </li>
                      <li>
                        • <strong>Documentation Setup:</strong> Photo equipment, measurement tools
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      Detailed Roof Access Inspection
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Surface Walking:</strong> Careful examination of every roof
                        section
                      </li>
                      <li>
                        • <strong>Material Testing:</strong> Flexibility, adhesion, granule
                        retention
                      </li>
                      <li>
                        • <strong>Impact Assessment:</strong> Hail damage measurement and
                        documentation
                      </li>
                      <li>
                        • <strong>Flashing Examination:</strong> All penetrations and transitions
                      </li>
                      <li>
                        • <strong>Ventilation Check:</strong> Ridge vents, soffit intake
                        functionality
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Phase 2: Interior Investigation (15-30 minutes)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Attic Space Analysis</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Structural Components:</strong> rafters, engineered trusses, and decking checked for moisture staining around vent boots and valleys
                      </li>
                      <li>
                        • <strong>Insulation Assessment:</strong> R-value loss from settling, displacement around can lights, and rodent damage common in older Amarillo attics
                      </li>
                      <li>
                        • <strong>Ventilation Airflow:</strong> soffit intake checked against ridge or gable exhaust to confirm balanced flow per current code
                      </li>
                      <li>
                        • <strong>Electrical Inspection:</strong> exposed junction boxes, knob-and-tube remnants in pre-1960 homes, and bath fan terminations
                      </li>
                      <li>
                        • <strong>HVAC Equipment:</strong> condensate drips on attic-mounted units, ductwork separations, and insulation crushed under foot traffic
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Moisture & Air Quality</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Active Leaks:</strong> moisture meter readings on decking, drywall, and rafters to confirm current water entry
                      </li>
                      <li>
                        • <strong>Historical Damage:</strong> old stains around chimneys, vent stacks, and skylights showing prior repair attempts
                      </li>
                      <li>
                        • <strong>Mold and Mildew:</strong> growth patterns at cold spots and on the underside of poorly ventilated decking
                      </li>
                      <li>
                        • <strong>Vapor Barriers:</strong> kraft-faced batt and poly barriers checked for tears and improper orientation in Amarillo&apos;s mixed-humid winters
                      </li>
                      <li>
                        • <strong>Pest Evidence:</strong> raccoon, squirrel, or bird entry at gable vents and fascia, with droppings and chewed insulation noted
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Phase 3: Technology Integration (15-20 minutes)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Advanced Detection Methods</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Thermal Imaging:</strong> FLIR camera scans of attic decking and TPO membrane to locate trapped moisture and missing insulation
                      </li>
                      <li>
                        • <strong>Moisture Meters:</strong> percentage readings logged at each suspected leak point for repeatable evidence
                      </li>
                      <li>
                        • <strong>Drone Survey:</strong> 12MP-plus aerial imagery on steep two-story homes and tall commercial parapets that aren&apos;t safe to walk
                      </li>
                      <li>
                        • <strong>Digital Measurement:</strong> chalk-mark test squares and ruler-referenced close-ups that quantify hail strike density per 100 sq ft
                      </li>
                      <li>
                        • <strong>GPS Mapping:</strong> each finding tagged with coordinates and slope direction for adjuster review
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Data Collection & Analysis</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Photo Organization:</strong> imagery grouped by slope and elevation for easy adjuster review
                      </li>
                      <li>
                        • <strong>Measurement Recording:</strong> roof squares calculated from drone imagery and verified on deck for accurate claim scope
                      </li>
                      <li>
                        • <strong>Condition Scoring:</strong> standardized ratings on each system from underlayment up through ridge caps
                      </li>
                      <li>
                        • <strong>Repair Prioritization:</strong> immediate leaks separated from spring-storm-prep items so homeowners know what needs doing this week versus this season
                      </li>
                      <li>
                        • <strong>Cost Estimation:</strong> preliminary pricing built from current Panhandle supply-house quotes rather than stale software defaults
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Amarillo Roof Inspectors Look For?
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Critical Damage Indicators
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      <CloudHail className="w-6 h-6 inline-block" /> Hail Impact Signatures
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Exposed Mat:</strong> Asphalt showing through granule loss
                      </li>
                      <li>
                        • <strong>Circular Bruising:</strong> Rounded impact marks from ice stones
                      </li>
                      <li>
                        • <strong>Soft Spots:</strong> Areas where underlayment is compromised
                      </li>
                      <li>
                        • <strong>Granule Scatter:</strong> Impact pattern distribution
                      </li>
                      <li>
                        • <strong>Edge Damage:</strong> Tab cracking from glancing blows
                      </li>
                      <li>
                        • <strong>Metal Denting:</strong> Flashing, gutters, vents impacted
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      <Wind className="w-6 h-6 inline-block" /> Wind Damage Patterns
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Uplift Marks:</strong> Shingle lifting and resealing
                      </li>
                      <li>
                        • <strong>Fastener Exposure:</strong> Nails or screws visible
                      </li>
                      <li>
                        • <strong>Edge Tearing:</strong> Gutter line and eave damage
                      </li>
                      <li>
                        • <strong>Progressive Failure:</strong> Sequential shingle loss patterns
                      </li>
                      <li>
                        • <strong>Blow-off Damage:</strong> Complete material removal
                      </li>
                      <li>
                        • <strong>Debris Impact:</strong> Projectile damage from wind-borne objects
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      <Sun className="w-6 h-6 inline-block" /> Heat & UV Deterioration
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Granule Migration:</strong> UV-accelerated granule loss
                      </li>
                      <li>
                        • <strong>Thermal Cracking:</strong> Expansion/contraction damage
                      </li>
                      <li>
                        • <strong>Curling & Cupping:</strong> Heat-induced shingle distortion
                      </li>
                      <li>
                        • <strong>Brittleness:</strong> Loss of flexibility from UV exposure
                      </li>
                      <li>
                        • <strong>Color Fading:</strong> Uniform deterioration patterns
                      </li>
                      <li>
                        • <strong>Sealant Failure:</strong> Heat-degraded adhesive compounds
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-6">
                  Structural Integrity Assessment
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Load-Bearing Components</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Roof Decking Evaluation</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Sagging or deflection under load</li>
                          <li>• Water damage and delamination</li>
                          <li>• Fastener withdrawal and loose panels</li>
                          <li>• Age-related deterioration assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Framing System Inspection</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Rafter and truss condition</li>
                          <li>• Connection integrity at joints</li>
                          <li>• Span adequacy for snow loads</li>
                          <li>• Settlement or movement indicators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Weather Resistance Features</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800">Wind Uplift Resistance</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Fastener pattern and spacing compliance</li>
                          <li>• Edge and corner reinforcement</li>
                          <li>• Perimeter securement adequacy</li>
                          <li>• Code compliance for Amarillo wind zones</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">
                          Water Penetration Protection
                        </h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Ice and water shield placement</li>
                          <li>• Underlayment integrity and overlap</li>
                          <li>• Flashing installation quality</li>
                          <li>• Drainage slope adequacy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-amber-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Insurance Documentation Standards?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Professional Photography Requirements
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Standard Documentation Shots</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Four-Corner Overview:</strong> aerial shots from each cardinal direction so adjusters see every Amarillo slope without leaving the office
                      </li>
                      <li>
                        • <strong>Close-up Damage:</strong> individual hail strikes shot with a chalk mark and a ruler or quarter for scale
                      </li>
                      <li>
                        • <strong>Comparative Analysis:</strong> damaged versus undamaged shingle samples photographed side by side to make hail signature obvious
                      </li>
                      <li>
                        • <strong>Context Photography:</strong> damage shown alongside dented gutters, downspouts, and AC fins that confirm storm direction
                      </li>
                      <li>
                        • <strong>Serial Identification:</strong> shingle wrapper, manufacturer stamps, and HVAC nameplates captured for age and brand verification
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Technical Specifications</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>High Resolution:</strong> minimum 12MP capture so detail holds up when adjusters zoom in
                      </li>
                      <li>
                        • <strong>GPS Metadata:</strong> location coordinates embedded in every drone image for slope-by-slope reference
                      </li>
                      <li>
                        • <strong>Timestamp Accuracy:</strong> verified date and time on each photo, useful when tying damage to a specific Panhandle storm event on NOAA records
                      </li>
                      <li>
                        • <strong>Scale References:</strong> a quarter or tape measure included in close-ups so hail strike diameter is unambiguous
                      </li>
                      <li>
                        • <strong>Lighting Standards:</strong> consistent exposure across the roof so the report reads cleanly start to finish
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Report Content Standards
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      Required Documentation Elements
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Damage Inventory:</strong> full catalog of findings by slope and elevation, ready to drop into an Xactimate scope
                      </li>
                      <li>
                        • <strong>Severity Classifications:</strong> active leaks called out separately from cosmetic or long-term wear items
                      </li>
                      <li>
                        • <strong>Material Specifications:</strong> shingle brand, color, manufacturer, and approximate age pulled from wrappers or attic stamps
                      </li>
                      <li>
                        • <strong>Weather Correlation:</strong> storm event tied back to NOAA Storm Events Database date and reported hail size for the Amarillo metro
                      </li>
                      <li>
                        • <strong>Code Compliance:</strong> current Amarillo building code items called out, like drip edge and ice-and-water shield at eaves
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      Professional Assessment Components
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Scope of Work:</strong> line-by-line repair specs the homeowner can hand to any contractor and compare honestly
                      </li>
                      <li>
                        • <strong>Cost Estimates:</strong> material and labor priced against current Panhandle supply-house quotes
                      </li>
                      <li>
                        • <strong>Timeline Projections:</strong> realistic install windows that account for Amarillo&apos;s spring storm queue and supply-chain delays
                      </li>
                      <li>
                        • <strong>Warranty Information:</strong> manufacturer warranty terms from GAF, CertainTeed, or Owens Corning plus the workmanship warranty on the install
                      </li>
                      <li>
                        • <strong>Inspector Credentials:</strong> credentials and Amarillo-area experience listed, so the report carries weight with adjusters
                      </li>
                    </ul>
                  </div>
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
                  How much does a roof inspection cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide FREE roof inspections in Amarillo with no obligation. Comprehensive
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
        <InternalLinks currentCity="amarillo" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Amarillo Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Amarillo property owners. Expert roof inspections with
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
        <RelatedArticles pageSlug="roof-inspections-amarillo" />
      </div>
    </>
  );
}
