import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";
import {
  AlertTriangle,
  Bug,
  Building2,
  CheckCircle,
  Circle,
  Droplets,
  FlaskConical,
  Hammer,
  Home,
  Lightbulb,
  Microscope,
  Phone,
  Radio,
  Search,
  Snowflake,
  Square,
  TrendingDown,
  Wrench,
  XCircle,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-rot-damage-in-amarillo/" },
  title: "Roof Rot Damage Repair in Amarillo TX | 5 Star Roofing",
  description:
    "Roof rot damage repair in Amarillo. Wood rot removal, deck replacement, and moisture solutions. Free inspections and insurance claims help.",
  openGraph: {
    title: "Roof Rot Damage Repair in Amarillo TX | 5 Star Roofing",
    description:
      "Roof rot damage repair in Amarillo. Wood rot removal, deck replacement, and moisture solutions. Free inspections and insurance claims help.",
    url: "https://5starroofingpros.com/roof-rot-damage-in-amarillo/",
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

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Roof Rot Damage Repair",
    provider: {
      "@type": ["LocalBusiness", "RoofingContractor"],
      "@id": "https://5starroofingpros.com/#organization",
      name: "5 Star Roofing",
      telephone: "(806) 622-6041",
      email: "admin@5starroofingpros.com",
      parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "2909 S Western St",
        addressLocality: "Amarillo",
        addressRegion: "TX",
        postalCode: "79109",
      },
    },
    areaServed: [
      { "@type": "City", name: "Amarillo" },
      { "@type": "City", name: "Midland" },
      { "@type": "City", name: "Odessa" },
    ],
    description:
      "Professional roof rot damage repair in Amarillo and West Texas. Wood rot removal, deck replacement, moisture detection, and structural restoration services.",
  };

  return (
    <div className="container-custom py-12">
      {" "}
      <Breadcrumb
        items={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Services",
            url: "/services/",
          },
          {
            name: "Amarillo",
            url: "/roof-rot-damage-in-amarillo/",
          },
        ]}
      />
      {/* Sticky Contact Bar */}
      <StickyContactBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-rot-damage-in-amarillo/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 35.222, longitude: -101.8313 },
            url: "https://5starroofingpros.com/roof-rot-damage-in-amarillo/",
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
            description:
              "Expert roofing services in Amarillo, TX. Free inspections, insurance claim assistance",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
          }),
        }}
      />
      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Roof Rot Damage Repair in Amarillo & West Texas</h1>
      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-4 mb-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: how roof rot starts on Texas Panhandle homes and the inspection and repair steps that stop it.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: Amarillo&apos;s humidity swings and freeze-thaw cycles let small leaks turn into structural rot within a single season if undetected.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Repair scope: rotted decking replacement, ventilation rework, and full reroofs where the damage runs deep.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: call (806) 622-6041 for a free inspection. Same-day scheduling is available after most storms.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>
      {/* auto-link:pass-1 */}
      <aside className="container-custom mt-6 mb-8">
        <div className="max-w-5xl mx-auto bg-white border-l-4 border-brand-brown rounded-r-2xl p-5 text-sm text-gray-700">
          <p className="font-semibold text-brand-brown mb-1">Related on this site</p>
          <p>For the next step, see <a href="/roof-repair/" className="text-brand-brown font-semibold hover:text-brand-gold underline">our roof repair services</a> or <a href="/amarillo-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold underline">Amarillo roofing services</a>.</p>
        </div>
      </aside>
      {/* /auto-link */}


      </FadeIn>

      {/* auto-link:pass-3 */}
      <aside className="container-custom mt-8 mb-10">
        <div className="max-w-5xl mx-auto bg-white border border-brand-gold/30 rounded-2xl p-5">
          <p className="font-semibold text-brand-brown mb-2">You might also find these useful</p>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside text-sm">
            <li><a href="/heavy-rain-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">heavy rain damage</a></li>
            <li><a href="/roof-snow-and-ice-damage-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">snow and ice damage</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}
      <div className="content-block">
        <h2 className="content-block-title">Roof Rot: A Hidden Threat to Texas Panhandle Homes</h2>
        <p className="text-lg">
          Roof rot is one of the most serious—and often overlooked—types of{" "}
          <a href="/roof-repair-amarillo/" className="text-brand-gold hover:underline">
            roof damage
          </a>{" "}
          in{" "}
          <a href="/amarillo-tx-roofing/" className="text-brand-gold hover:underline">
            Amarillo
          </a>
          ,{" "}
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">
            Midland
          </a>
          ,{" "}
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">
            Odessa
          </a>
          , and surrounding areas. Unlike{" "}
          <a href="/hail-damage-repair-amarillo/" className="text-brand-gold hover:underline">
            hail damage
          </a>{" "}
          that appears immediately after a storm, roof rot develops slowly over months or years as
          moisture infiltrates your roof decking, rafters, and sheathing. By the time you notice
          sagging ceilings or visible water stains, the damage may be extensive and costly.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in identifying and repairing roof rot damage
          before it compromises your home's structural integrity. Our comprehensive{" "}
          <a href="/roof-inspections-amarillo/" className="text-brand-gold hover:underline">
            inspections
          </a>{" "}
          use moisture detection technology to find hidden rot, and we work directly with insurance
          companies to ensure coverage for qualifying damage—whether for{" "}
          <a href="/residential-roofing-amarillo/" className="text-brand-gold hover:underline">
            residential
          </a>{" "}
          or{" "}
          <a href="/commercial-roofing-amarillo/" className="text-brand-gold hover:underline">
            commercial properties
          </a>
          .
        </p>
      </div>
      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-amber-800">
          <Bug className="w-6 h-6 inline-block" /> The Science of Wood Rot in Texas Climate
        </h3>
        <p className="mb-4">
          Understanding how wood rot develops in the Texas Panhandle's unique climate helps property
          owners recognize early warning signs and take preventive action:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-amber-700">Fungal Growth Requirements</h4>
            <ul className="space-y-1 text-sm">
              <li>• Moisture content: 19% or higher in wood</li>
              <li>• Temperature range: 40°F to 100°F (ideal: 70-85°F)</li>
              <li>• Oxygen presence: Required for aerobic decomposition</li>
              <li>• pH levels: 3.5 to 7.5 (slightly acidic to neutral)</li>
              <li>• Time factor: 3-6 months for visible damage</li>
              <li>• Wood species: Pine and fir most susceptible</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-amber-700">Texas Panhandle Factors</h4>
            <ul className="space-y-1 text-sm">
              <li>• Summer humidity: 60-80% creates ideal conditions</li>
              <li>• Temperature cycling: Accelerates moisture penetration</li>
              <li>• Hail damage frequency: Creates numerous entry points</li>
              <li>• UV intensity: Weakens wood cell structure</li>
              <li>• Wind-driven rain: Forces water into compromised areas</li>
              <li>• Alkaline soil: pH can affect moisture chemistry</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">Types of Rot Fungi Common in Texas</h2>
        <p className="text-lg mb-6">
          Brown rot, white rot, and soft rot all behave differently inside a roof deck. In
          Amarillo and the broader Texas Panhandle, brown rot is what we pull off most homes.
          It eats the cellulose in plywood and OSB decking and leaves crumbly cube-shaped
          chunks of wood behind. Identifying which kind is present tells us whether we are
          replacing decking only or running structural repairs into the rafters.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <AlertTriangle className="w-6 h-6 inline-block" /> Brown Rot (Dry Rot)
            </h3>
            <p className="text-sm mb-3">
              Most common in Texas. Attacks cellulose, leaving brown, crumbly wood that breaks into
              cube-like pieces.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Causes: Sustained moisture exposure</li>
              <li>• Appearance: Dark brown, cracked wood</li>
              <li>• Risk: High structural damage</li>
              <li>• Timeline: 6-18 months visible damage</li>
              <li>• Repair: Complete removal required</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Square className="w-6 h-6 inline-block text-amber-800" /> White Rot
            </h3>
            <p className="text-sm mb-3">
              Attacks lignin, leaving white, fibrous wood. Less common but equally destructive to
              structural integrity.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Causes: Higher moisture levels</li>
              <li>• Appearance: White, stringy texture</li>
              <li>• Risk: Moderate to high damage</li>
              <li>• Timeline: 4-12 months development</li>
              <li>• Repair: Selective removal possible</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Circle className="w-6 h-6 inline-block text-brand-gold-vibrant" /> Soft Rot
            </h3>
            <p className="text-sm mb-3">
              Surface-level damage common in high-moisture environments. Often precedes deeper rot
              development.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Causes: Fluctuating moisture levels</li>
              <li>• Appearance: Soft, spongy surface</li>
              <li>• Risk: Low initial, escalates quickly</li>
              <li>• Timeline: 2-6 months surface damage</li>
              <li>• Repair: Early intervention effective</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">Advanced Moisture Detection Technology</h2>
        <p className="text-lg mb-4">
          Traditional visual inspections miss up to 70% of moisture-related damage. Walking an
          Amarillo roof, we use infrared cameras to map cold spots that indicate trapped water
          and pin-style and pinless moisture meters to confirm the readings inside the attic.
          That combination finds rot behind shingles and under flashing before a homeowner ever
          sees a ceiling stain.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-green-800">
              <Radio className="w-6 h-6 inline-block" /> Infrared Thermal Imaging
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Reads temperature variations that flag trapped moisture in decking</li>
              <li>• Maps thermal bridges and insulation gaps from inside the attic</li>
              <li>• Builds a moisture map of every slope on the home</li>
              <li>• Provides claim photos that State Farm, USAA, and Farmers accept</li>
              <li>• Works without cutting, drilling, or pulling shingles</li>
              <li>• Walkable on most Amarillo and Canyon homes the same day</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-green-800">
              <Microscope className="w-6 h-6 inline-block" /> Moisture Meters & Probes
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Pin-type meters for surface readings on Amarillo plywood and OSB decking</li>
              <li>• Pinless meters for sub-surface moisture without drilling holes</li>
              <li>• Deep-probe meters reach rafters and the top of wall plates</li>
              <li>• Calibration set for southern yellow pine and OSB used in Panhandle builds</li>
              <li>• Digital readings logged with photos for the claim file</li>
              <li>• Gradient tracking shows whether water is moving toward the eave or ridge</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold mb-3 text-brand-brown">
            <FlaskConical className="w-6 h-6 inline-block" /> Core Sampling Analysis
          </h3>
          <p className="text-sm mb-3">
            For suspected structural damage, we perform minimal core sampling to assess internal
            wood condition:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-1 text-sm">
              <li>• 1-inch diameter core samples</li>
              <li>• Visual examination of wood cell structure</li>
              <li>• Moisture content measurement at depth</li>
              <li>• Fungal identification when present</li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li>• Structural integrity assessment</li>
              <li>• Minimal damage to existing materials</li>
              <li>• Laboratory analysis available for complex cases</li>
              <li>• Results guide repair scope and methods</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">What Causes Roof Rot in West Texas?</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Prolonged Moisture Exposure
            </h3>
            <p className="mb-3">
              When water repeatedly penetrates your roof—from hail damage, failed flashing, or
              clogged gutters—it saturates the wood decking underneath shingles. In Texas humidity
              (especially during summer), this moisture creates perfect conditions for wood-rot
              fungi.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Time to develop:</strong> 3-12 months of consistent moisture exposure
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Poor Attic Ventilation</h3>
            <p className="mb-3">
              The Texas Panhandle sits in America's hail belt, experiencing an average of 8-12
              hailstorms per year. Combined with extreme temperature swings, high winds averaging
              12-14 mph, and intense UV exposure, roofs face some of the harshest conditions in the
              United States. Without proper ventilation, attic temperatures can exceed 160°F in
              summer. This heat combined with moisture from your home creates condensation on the
              underside of roof decking—leading to rot from the inside.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Risk factor:</strong> Homes with inadequate ridge/soffit vents
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Ice Dam Water Intrusion</h3>
            <p className="mb-3">
              During rare but severe winter storms (like Winter Storm Uri in 2021), ice dams trap
              water on your roof for extended periods. This standing water seeps under shingles and
              saturates the wood decking, initiating rot that persists even after ice melts.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Common in:</strong> Texas Panhandle homes with poor insulation
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Unrepaired Hail Damage</h3>
            <p className="mb-3">
              Hail creates granule loss and micro-fractures in asphalt shingles. These compromised
              areas allow water penetration during subsequent rainstorms. Over time, this slow leak
              saturates decking and creates localized rot—often undetected until severe.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Prevention:</strong> Inspect roof within 72 hours after every hailstorm
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Plumbing Vent Failures</h3>
            <p className="mb-3">
              Rubber boots around plumbing vents crack and deteriorate in intense West Texas UV
              exposure. Once cracked, every rainstorm sends water directly onto roof decking around
              the vent pipe—creating a concentrated area of rot.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Lifespan:</strong> Rubber vent boots last 5-10 years in Texas climate
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Valley Leaks</h3>
            <p className="mb-3">
              Valleys carry the runoff from two slopes at once. On Amarillo homes with hip and
              gable combinations, that water moves fast. If the valley metal is bent by hail or
              the W-valley pattern was installed without underlying ice-and-water shield, water
              wicks under the shingles along the edge and feeds a long, narrow line of rot in
              the decking right where the valley empties into the gutter.
            </p>
            <p className="text-sm text-gray-600">
              <strong>High risk:</strong> Complex roof designs with multiple valleys
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Warning Signs of Roof Rot</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="check-item">
          <span className="check-icon text-2xl">
            <TrendingDown className="w-6 h-6 inline-block" />
          </span>
          <div>
            <h3 className="font-bold mb-2">Sagging Roof Line</h3>
            <p className="text-gray-600">
              Visible dips or sagging in roof surface indicating structural wood failure
            </p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">
            <Droplets className="w-6 h-6 inline-block" />
          </span>
          <div>
            <h3 className="font-bold mb-2">Water Stains on Ceilings</h3>
            <p className="text-gray-600">
              Brown or yellow discoloration from water penetrating through rotted decking
            </p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">
            <Bug className="w-6 h-6 inline-block" />
          </span>
          <div>
            <h3 className="font-bold mb-2">Mold/Mildew Odors</h3>
            <p className="text-gray-600">
              Musty smell in attic or upper rooms from fungal growth on damp wood
            </p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">🪵</span>
          <div>
            <h3 className="font-bold mb-2">Soft/Spongy Roof Deck</h3>
            <p className="text-gray-600">
              When walking on roof, areas feel soft or springy underfoot
            </p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">
            <Bug className="w-6 h-6 inline-block" />
          </span>
          <div>
            <h3 className="font-bold mb-2">Visible Wood Decay in Attic</h3>
            <p className="text-gray-600">
              Dark, crumbling, or powdery wood on rafters or decking when inspecting attic
            </p>
          </div>
        </div>
        <div className="check-item">
          <span className="check-icon text-2xl">
            <Bug className="w-6 h-6 inline-block" />
          </span>
          <div>
            <h3 className="font-bold mb-2">Pest Infestations</h3>
            <p className="text-gray-600">
              Carpenter ants or termites attracted to rotted wood in roof structure
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Roof Rot Repair Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Comprehensive Moisture Detection</h5>
            <p className="step-text">
              We use infrared thermal imaging and moisture meters to identify all areas of
              rot—including hidden damage not visible during standard inspections.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Structural Assessment</h5>
            <p className="step-text">
              Our team evaluates whether rafters, trusses, or just decking is affected. This
              determines the scope of repair and ensures structural safety.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Complete Rot Removal</h5>
            <p className="step-text">
              All rotted wood must be removed—not just covered over. We cut out damaged decking and
              framing, disposing of it properly to prevent fungal spore spread.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">New Decking Installation</h5>
            <p className="step-text">
              We install new pressure-treated plywood or OSB decking that meets or exceeds code
              requirements for the Texas Panhandle and West Texas.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">Ventilation & Waterproofing</h5>
            <p className="step-text">
              Fix the root cause by improving attic ventilation, installing ice/water shield, and
              replacing failed flashing to prevent future rot.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h5 className="step-title">Complete Roof Restoration</h5>
            <p className="step-text">
              Install new impact-resistant shingles or{" "}
              <a href="/roof-replacement-amarillo/" className="text-brand-gold hover:underline">
                metal roofing
              </a>{" "}
              designed for extreme weather conditions in the Texas Panhandle and West Texas.
            </p>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">Comprehensive Roof Rot Remediation Process</h2>
        <p className="text-lg mb-6">
          Replacing just the visible rotted shingles does not fix the problem. By the time the
          stain shows on the ceiling, the OSB or plywood decking under that area is usually
          soft for a couple of feet in every direction. Our crews cut back to solid wood, pull
          and replace any compromised rafters, and rework the flashing or ventilation that let
          the water in to start with.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">
              <Search className="w-6 h-6 inline-block" /> Phase 1: Complete Assessment &
              Documentation
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Structural Analysis:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Load check on rafters and trusses around the wet zone</li>
                  <li>• Rafter and truss condition probed for softness</li>
                  <li>• Slope-by-slope deck integrity mapped with moisture readings</li>
                  <li>• Top plate moisture check at the wall to roof transition</li>
                  <li>• Attic floor and insulation scanned for water migration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Documentation Requirements:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Close-up photography of every soft area and stained surface</li>
                  <li>• Moisture meter readings logged with attic location</li>
                  <li>• Thermal imaging report for the claim file</li>
                  <li>• Texas-licensed structural engineer brought in when load is in question</li>
                  <li>• Coordination with State Farm, Allstate, USAA, or Farmers adjuster</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">
              <Wrench className="w-6 h-6 inline-block" /> Phase 2: Safe Rot Removal
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Containment Procedures:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Plastic sheeting to prevent spore spread</li>
                  <li>• HEPA filtration during removal</li>
                  <li>• Negative air pressure systems</li>
                  <li>• Personal protective equipment for workers</li>
                  <li>• Proper disposal of contaminated materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Removal Techniques:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Complete removal to solid wood</li>
                  <li>• 2-foot border beyond visible damage</li>
                  <li>• Cut lines along structural members</li>
                  <li>• Sanitization of adjacent materials</li>
                  <li>• Air quality testing post-removal</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">
              <Hammer className="w-6 h-6 inline-block" /> Phase 3: Structural Reconstruction
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Material Specifications:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Pressure-treated lumber for sill and any framing in contact with masonry</li>
                  <li>• 7/16-inch OSB or 1/2-inch CDX plywood rated for the Panhandle climate</li>
                  <li>• Hurricane clips at rafter-to-top-plate connections</li>
                  <li>• Vapor barrier or proper underlayment where the assembly calls for it</li>
                  <li>• Connections that match Amarillo&apos;s adopted IRC wind-load tables</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Installation Standards:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Decking nailed to manufacturer and code specs for each slope</li>
                  <li>• UL 580 wind-uplift-rated fastener pattern around the perimeter</li>
                  <li>• Soffit and ridge ventilation gaps kept clear of insulation</li>
                  <li>• Thermal bridges sealed with closed-cell foam where rafters meet plate</li>
                  <li>• Two-point inspection: framing nail-off, then dried-in stage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">
              <Droplets className="w-6 h-6 inline-block" /> Phase 4: Moisture Prevention Systems
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Waterproofing Upgrades:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Ice and water shield installation</li>
                  <li>• Enhanced valley flashing systems</li>
                  <li>• Vent boot replacement and sealing</li>
                  <li>• Chimney and penetration re-flashing</li>
                  <li>• Gutter system optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ventilation Improvements:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Ridge vent installation or enhancement</li>
                  <li>• Soffit vent cleaning and upgrading</li>
                  <li>• Attic fan installation (if needed)</li>
                  <li>• Air sealing of penetrations</li>
                  <li>• Insulation baffle installation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">Case Studies: Texas Panhandle Roof Rot Scenarios</h2>
        <p className="text-lg mb-6">
          Real-world examples from our experience repairing roof rot damage throughout the Texas
          Panhandle and West Texas region. These cases illustrate common patterns and successful
          remediation strategies.
        </p>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Home className="w-6 h-6 inline-block" /> Case Study 1: Amarillo Hail Damage
              Progression
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Initial Conditions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 1995 home with original asphalt shingles</li>
                  <li>• April 2022 hailstorm (1.5" hail)</li>
                  <li>• Homeowner delayed claim filing for 8 months</li>
                  <li>• Multiple small leaks developed during summer rains</li>
                  <li>• Discovered ceiling stains in December 2022</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Damage Found:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 40% of roof deck showed moisture damage</li>
                  <li>• Brown rot affecting 12 sheets of decking</li>
                  <li>• 3 rafters with structural compromise</li>
                  <li>• Attic insulation completely saturated</li>
                  <li>• Mold growth on 15% of attic surfaces</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-green-800 mb-2">Solution & Outcome:</h4>
              <p className="text-sm">
                Complete roof replacement covered by insurance ($24,500 claim). Upgraded ventilation
                and insulation prevented recurrence. Total repair time: 5 days.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Building2 className="w-6 h-6 inline-block" /> Case Study 2: Commercial Building Flat
              Roof
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Building Profile:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 1980s warehouse in Canyon, TX</li>
                  <li>• Modified bitumen roofing system</li>
                  <li>• Poor drainage design</li>
                  <li>• Inadequate maintenance history</li>
                  <li>• Evidence of standing water</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rot Discovery:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Soft spots near HVAC units</li>
                  <li>• Moisture detected across 30% of roof</li>
                  <li>• Wood deck delamination</li>
                  <li>• Structural steel corrosion</li>
                  <li>• Interior ceiling damage</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-100 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-brand-brown mb-2">Engineering Solution:</h4>
              <p className="text-sm">
                Selective deck replacement with drainage improvements. TPO membrane with enhanced
                insulation. Total cost: $85,000 (partial insurance coverage).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Snowflake className="w-6 h-6 inline-block" /> Case Study 3: Winter Storm Uri Damage
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Storm Impact:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• February 2021 ice storm event</li>
                  <li>• Ice dams on north-facing slope</li>
                  <li>• Temperatures below -10°F for 5 days</li>
                  <li>• Burst pipes in attic space</li>
                  <li>• Extended moisture exposure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rot Development:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Rapid onset due to saturated conditions</li>
                  <li>• White rot affecting trusses</li>
                  <li>• Insulation replacement required</li>
                  <li>• Interior drywall damage</li>
                  <li>• HVAC system contamination</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-100 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-brand-brown mb-2">Comprehensive Restoration:</h4>
              <p className="text-sm">
                Emergency water extraction, structural drying, selective framing replacement.
                Insurance covered $31,200. Added ice dam prevention systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Insurance Coverage for Roof Rot</h2>
      <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
        <h3 className="font-bold mb-3">When Is Roof Rot Covered by Insurance?</h3>
        <p className="mb-4">
          Insurance coverage for roof rot depends on the cause and timing. Our expertise in
          documentation and claim presentation significantly improves approval rates:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-700">
              <CheckCircle className="w-5 h-5 inline-block text-green-600" /> Typically Covered
            </h4>
            <ul className="space-y-1 text-sm">
              <li>• Rot resulting from sudden storm damage</li>
              <li>• Hidden damage discovered during storm claims</li>
              <li>• Concealed damage not preventable by maintenance</li>
              <li>• Rot caused by ice dams or wind-driven rain</li>
              <li>• Structural damage from plumbing leaks</li>
              <li>• Emergency stabilization costs</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-red-700">
              <XCircle className="w-5 h-5 inline-block text-red-600" /> Usually Not Covered
            </h4>
            <ul className="space-y-1 text-sm">
              <li>• Gradual deterioration over time</li>
              <li>• Damage from deferred maintenance</li>
              <li>• Poor original construction quality</li>
              <li>• Ventilation inadequacies (unless storm-related)</li>
              <li>• Normal wear and aging</li>
              <li>• Code upgrade requirements</li>
            </ul>
          </div>
        </div>
        <div className="bg-brand-gold-light rounded-lg p-4 mt-4">
          <h4 className="font-bold mb-2">
            <Lightbulb className="w-6 h-6 inline-block" /> Maximizing Coverage Success
          </h4>
          <p className="text-sm">
            Our documentation process includes thermal imaging, moisture mapping, and storm
            correlation analysis. We work directly with adjusters to demonstrate that rot resulted
            from covered perils rather than maintenance issues. Success rate: 87% for qualifying
            claims.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Preventing Roof Rot in West Texas</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="feature-box">
          <h3 className="font-bold mb-2">Annual Roof Inspections</h3>
          <p className="text-sm">
            Schedule professional inspections every spring after hail season to catch moisture
            damage early
          </p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Improve Attic Ventilation</h3>
          <p className="text-sm">
            Maintain 1:300 ventilation ratio (1 sq ft vent per 300 sq ft attic) with ridge and
            soffit vents
          </p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Repair Hail Damage Promptly</h3>
          <p className="text-sm">
            File the insurance claim within days of an Amarillo hailstorm. Texas policies
            usually give you one year, but bruised asphalt shingles start leaking inside the
            next rainy season, and that is when decking rot takes hold.
          </p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Replace Plumbing Vent Boots</h3>
          <p className="text-sm">
            Replace rubber vent boots every 5-10 years as preventive maintenance
          </p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Keep Gutters Clean</h3>
          <p className="text-sm">
            Clean gutters twice per year to prevent water backup under shingles
          </p>
        </div>
        <div className="feature-box">
          <h3 className="font-bold mb-2">Address Leaks Immediately</h3>
          <p className="text-sm">
            A brown stain on the bedroom ceiling means water already passed through the
            decking. Call us at (806) 622-6041 the same day. The drywall will dry, but the
            OSB or plywood above it is the part that rots.
          </p>
        </div>
      </div>
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="font-bold mb-3">
          <AlertTriangle className="w-6 h-6 inline-block" /> Roof Rot is a Safety Hazard
        </h3>
        <p>
          Severely rotted OSB or plywood decking can break through under a person&apos;s
          weight. Even Amarillo&apos;s occasional heavy spring snow can be enough to fail a
          weakened slope. If you see daylight in the attic, sagging in the roof line, or feel
          springiness when standing on the roof, stay off it and call (806) 622-6041. Our
          crews carry harness anchors, walk boards, and the experience to assess a structural
          roof safely.
        </p>
      </div>
      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle & West Texas</h2>
        <p className="text-lg mb-4">
          Expert roof rot repair and structural restoration services throughout the region:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/canyon-texas-roofing/" className="text-brand-gold hover:underline">
            • Canyon Roof Rot Repair
          </a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">
            • Lubbock Structural Repairs
          </a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">
            • All Service Areas
          </a>
        </div>
      </section>
      <section className="cta-section mt-12">
        <h2 className="cta-title">Get Your Free Roof Assessment Today</h2>
        <p className="cta-text">
          Serving Amarillo and the entire Texas Panhandle, plus Midland, Odessa, and surrounding
          West Texas communities. Most homeowners insurance policies in Texas cover storm damage,
          and we work directly with all major insurance companies to ensure you receive the full
          coverage you deserve.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="tel:8066226041"
            className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg"
          >
            <Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041
          </a>
          <a
            href="/contact/"
            className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg"
          >
            Request Free Inspection
          </a>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RelatedArticles pageSlug="roof-rot-damage-in-amarillo" />
    </div>
  );
}
