import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";
import {
  BarChart3,
  CheckCircle,
  Clock,
  CloudHail,
  DollarSign,
  Droplets,
  Home,
  Lightbulb,
  Microscope,
  Phone,
  Shield,
  Snowflake,
  Thermometer,
  Wind,
  Wrench,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-snow-and-ice-damage-in-amarillo/" },
  title: "Snow & Ice Roof Repair Amarillo | 5 Star Roofing",
  description:
    "Snow and ice damage roof situation in Amarillo? We respond. Ice dam removal, freeze-thaw damage repair, and weatherproof sheeting. Free post-storm inspections.",
  openGraph: {
    title: "Snow & Ice Roof Repair Amarillo | 5 Star Roofing",
    description:
      "Snow and ice damage roof situation in Amarillo? We respond. Ice dam removal, freeze-thaw damage repair, and weatherproof sheeting. Free post-storm inspections.",
    url: "https://5starroofingpros.com/roof-snow-and-ice-damage-in-amarillo/",
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
    serviceType: "Snow and Ice Damage Roof Repair",
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
      { "@type": "City", name: "Canyon" },
      { "@type": "City", name: "Bushland" },
    ],
    description:
      "Professional snow and ice damage roof repair in Amarillo and Texas Panhandle. Ice dam removal, freeze-thaw damage repair, winter storm restoration.",
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
            name: "Roof Snow And Ice Damage",
            url: "/services/",
          },
          {
            name: "Amarillo",
            url: "/roof-snow-and-ice-damage-in-amarillo/",
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
            "@id":
              "https://5starroofingpros.com/roof-snow-and-ice-damage-in-amarillo/#localbusiness",
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
            url: "https://5starroofingpros.com/roof-snow-and-ice-damage-in-amarillo/",
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
        <h1 className="text-4xl font-bold mb-6">
          Roof Snow and Ice Damage Repair in Amarillo & the Texas Panhandle
        </h1>
      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-4 mb-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: how snow load, ice dams, and freeze-thaw cycles damage Amarillo roofs and what to do about it.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: Amarillo averages 18 inches of snow and 80+ freeze-thaw cycles every winter, more than enough to expose weak flashing and worn underlayment.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Repair scope: leak isolation, flashing rework, partial reroofs, and full replacement where the deck is compromised.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule.</span></li>
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
            <li><a href="/amarillo-weather-impact-on-roofing/" className="text-brand-brown hover:text-brand-gold underline">Amarillo weather impact</a></li>
          </ul>
        </div>
      </aside>
      {/* /auto-link */}
      <div className="content-block">
        <h2 className="content-block-title">Winter Storm Damage in the Texas Panhandle</h2>
        <p className="text-lg">
          While the{" "}
          <a href="/amarillo-tx-roofing/" className="text-brand-gold hover:underline">
            Texas Panhandle
          </a>{" "}
          is better known for{" "}
          <a href="/hail-damage-repair-amarillo/" className="text-brand-gold hover:underline">
            hail
          </a>{" "}
          and high winds, winter storms can cause severe{" "}
          <a href="/roof-repair-amarillo/" className="text-brand-gold hover:underline">
            roof damage
          </a>
          —especially during freeze-thaw cycles common in Amarillo,{" "}
          <a href="/canyon-texas-roofing/" className="text-brand-gold hover:underline">
            Canyon
          </a>
          , and surrounding areas. When temperatures drop below freezing for days at a time (as
          happened during Winter Storm Uri in 2021), snow accumulation, ice dams, and rapid
          temperature changes can compromise even well-maintained roofs.
        </p>
        <p className="text-lg mt-4">
          At 5 Star Commercial Roofing, we specialize in identifying and repairing winter{" "}
          <a href="/storm-damage-repair-amarillo/" className="text-brand-gold hover:underline">
            storm damage
          </a>{" "}
          across the Texas Panhandle. From ice dam removal to freeze-thaw damage repair, we help
          homeowners and businesses recover from winter weather events and prevent future
          cold-weather problems. For severe damage, we also provide{" "}
          <a href="/roof-replacement-amarillo/" className="text-brand-gold hover:underline">
            complete roof replacement
          </a>{" "}
          services.
        </p>
      </div>
      <div className="bg-amber-50 border-l-4 border-brand-gold-vibrant p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-brand-brown">
          <CloudHail className="w-6 h-6 inline-block" /> Texas Panhandle Winter Weather Patterns
        </h3>
        <p className="mb-4">
          Understanding the unique winter climate of the Texas Panhandle is crucial for identifying
          and preventing cold weather roof damage:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-brand-brown">Temperature Extremes</h4>
            <ul className="space-y-1 text-sm">
              <li>• Average winter lows: 22°F to 28°F</li>
              <li>• Extreme cold events: -10°F to -20°F</li>
              <li>• Daily temperature swings: 30-50°F common</li>
              <li>• Freeze-thaw cycles: 40-60 per winter</li>
              <li>• Extended freezes: 3-7 consecutive days</li>
              <li>• First freeze: Mid to late October</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-brand-brown">Snow & Precipitation</h4>
            <ul className="space-y-1 text-sm">
              <li>• Annual snowfall: 15-18 inches average</li>
              <li>• Blizzard conditions: 1-2 events per decade</li>
              <li>• Ice storm frequency: Every 3-5 years</li>
              <li>• Snow density: 10-20 lbs per cubic foot</li>
              <li>• Wind-driven snow accumulation in valleys</li>
              <li>• Rapid melt events create flooding potential</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">The Physics of Winter Roof Damage</h2>
        <p className="text-lg mb-4">
          Winter roof damage across Amarillo, Canyon, and the wider Texas Panhandle comes from
          freeze-thaw cycling, ice dam formation at cold eaves, and thermal contraction at metal
          flashing. Architectural asphalt shingles, standing seam metal panels, and TPO membranes
          each fail in different ways once temperatures drop below 22°F. Recognizing the early
          signs (lifted shingle edges, gaps around chimney flashing, frost on attic rafters)
          lets property owners schedule an inspection before spring rains expose the leak.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Snowflake className="w-6 h-6 inline-block" /> Freeze-Thaw Expansion
            </h3>
            <p className="text-sm mb-3">
              Water expands approximately 9% when it freezes, creating tremendous pressure inside
              small cracks and gaps.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Pressure can exceed 30,000 PSI</li>
              <li>• Widens existing micro-cracks</li>
              <li>• Creates new fractures in brittle materials</li>
              <li>• Accelerates aging of all roof components</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Thermometer className="w-6 h-6 inline-block" /> Thermal Stress
            </h3>
            <p className="text-sm mb-3">
              Amarillo can swing 40°F between a January afternoon and the night that follows.
              Aluminum flashing, asphalt shingles, and wood decking each expand at different
              rates, which loads every fastener and sealant on the roof.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Aluminum flashing contracts faster than asphalt shingles</li>
              <li>• Gaps open at chimney, vent, and skylight seal points</li>
              <li>• Ring-shank nails loosen from repeated cycling</li>
              <li>• Polyurethane sealants lose adhesion and crack</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Droplets className="w-6 h-6 inline-block" /> Capillary Action
            </h3>
            <p className="text-sm mb-3">
              Surface tension pulls meltwater into hairline gaps it has no business reaching.
              On Amarillo roofs we routinely find moisture two layers below the architectural
              shingle, sitting in synthetic underlayment and OSB decking.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Meltwater wicks under shingle tabs at lap seams</li>
              <li>• Penetrates nail penetrations and step flashing</li>
              <li>• Saturates synthetic underlayment and OSB decking</li>
              <li>• Triggers rot, delamination, and rafter damage</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Common Types of Snow & Ice Damage</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Ice Dam Formation</h3>
            <p className="mb-3">
              Warm attic air melts snow over the heated section of an Amarillo or Canyon home.
              The runoff refreezes once it crosses the unheated eave, building a ridge of ice that
              ponds water back under the shingles. Without an ice and water shield extending past
              the wall line, that ponded water finds a nail penetration and travels into the
              ceiling.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Signs:</strong> Icicles along gutters, water stains on exterior walls,
              interior leaks near roof edges
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Freeze-Thaw Cycling</h3>
            <p className="mb-3">
              Across the Texas Panhandle, winter nights drop below freezing while afternoons climb
              into the 40s. Water enters small gaps in step flashing or shingle laps, freezes and
              expands by roughly nine percent, then thaws and travels further the next afternoon.
              Each cycle widens the crack. Over a Llano Estacado winter the same hairline gap can
              grow into an active leak path by March.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Signs:</strong> Cracked or lifted shingles, damaged flashing, separated roof
              seams
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Heavy Snow Load</h3>
            <p className="mb-3">
              While rare, heavy wet snow can accumulate on flat or low-slope commercial roofs. Snow
              weighs 10-20 pounds per cubic foot when wet, potentially exceeding roof load capacity
              on older structures.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Signs:</strong> Sagging roof deck, cracking sounds, doors/windows that
              suddenly stick
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Gutter and Downspout Damage
            </h3>
            <p className="mb-3">
              A 40-foot run of aluminum K-style gutter can hold several hundred pounds of ice after
              a Panhandle ice event. That load pulls the gutter hangers out of the fascia and
              splits the fascia board itself. Frozen downspouts then back water up under the drip
              edge, where it finds the OSB decking.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Signs:</strong> Sagging gutters, separated downspouts, ice formations on
              exterior walls
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Flashing Contraction</h3>
            <p className="mb-3">
              Aluminum and galvanized steel flashing contracts noticeably between an Amarillo
              afternoon at 45°F and a 5 a.m. low of 8°F. That movement pries the metal away from
              brick chimneys, plumbing boots, and skylight curbs. When the snow on top finally
              melts, water runs straight into the gap and onto the interior framing below.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Signs:</strong> Gaps around chimneys/vents, lifted flashing edges, interior
              leaks near roof penetrations
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">Condensation Damage</h3>
            <p className="mb-3">
              On a Panhandle home with blocked soffit vents or an undersized ridge vent, warm
              humid air from the kitchen and bathrooms drifts into the attic and condenses on the
              cold underside of the roof deck. The result looks like a slow leak. We typically
              find frost on the rafters in February and soft, stained OSB by April.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Signs:</strong> Frost on attic rafters, musty odors, water stains on attic
              decking
            </p>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">Advanced Winter Damage Detection & Assessment</h2>
        <p className="text-lg mb-4">
          Winter damage on Amarillo and Canyon roofs often hides for weeks. The shingle looks
          intact from the street, but the underlayment beneath it is saturated and the OSB is
          starting to delaminate. Our assessment pairs a ground-level visual with attic moisture
          checks and roof-level inspection of flashing, vents, and ice and water shield termination
          so the hidden problems surface before the next freeze-thaw cycle widens them.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Microscope className="w-6 h-6 inline-block" /> Thermal Imaging Analysis
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Detect heat loss patterns indicating undersized R-38 attic insulation</li>
              <li>• Identify moisture intrusion in synthetic underlayment and OSB decking</li>
              <li>• Locate thermal bridges that drive ice dam formation at the eaves</li>
              <li>• Map under-ventilated bays starved by blocked soffit vents</li>
              <li>• Document energy efficiency issues for cool-roof rebates</li>
              <li>• Create a baseline image set for State Farm or Allstate claims</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <BarChart3 className="w-6 h-6 inline-block" /> Structural Load Assessment
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Calculate snow and ice load against Texas building code design values</li>
              <li>• Evaluate structural integrity of OSB and plywood roof deck</li>
              <li>• Assess engineered truss webs and rafter connections</li>
              <li>• Identify deflection or sagging along ridge and valley lines</li>
              <li>• Plan a snow removal approach when accumulation exceeds design load</li>
              <li>• Document pre-existing versus current-storm damage for the adjuster</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">Specialized Winter Damage Repair Techniques</h2>
        <p className="text-lg mb-6">
          Winter repairs on Amarillo, Canyon, and Pampa roofs need materials rated for the
          conditions. Standard asphalt cement skins over at 30°F and never bonds. Modified bitumen
          patches that work in July split in February. We use low-temperature sealants, ice and
          water shield rated for cold application, and heated work zones so the repair actually
          ties into the existing system instead of failing at the next freeze.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">
              <Snowflake className="w-6 h-6 inline-block" /> Emergency Ice Dam Removal
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Safe Removal Methods:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Low-pressure steam to melt ice without damaging the granule surface</li>
                  <li>• Calcium chloride de-icing approved for asphalt and metal roofs</li>
                  <li>• Channel cutting along the dam to relieve pressure on shingle laps</li>
                  <li>• Temporary drainage diversion to move water off the eave</li>
                  <li>• Heat cable placement once the immediate ice is gone</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What We DON&apos;T Do:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Never use hammers, picks, or axes on shingles or membrane</li>
                  <li>• Avoid rock salt and corrosive chlorides on metal flashing</li>
                  <li>• Never walk an icy 6/12 or steeper pitch without fall arrest</li>
                  <li>• No heat guns near asphalt felt, foam insulation, or wood trim</li>
                  <li>• No aggressive mechanical chipping on architectural shingles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">
              <Wrench className="w-6 h-6 inline-block" /> Cold-Weather Repair Materials
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Specialty Products:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Low-temperature sealants and adhesives</li>
                  <li>• Modified bitumen for freeze-thaw resistance</li>
                  <li>• Ice and water shield barriers</li>
                  <li>• Thermal barrier insulation materials</li>
                  <li>• Vapor barrier systems for condensation control</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Installation Considerations:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Temperature-adjusted application procedures</li>
                  <li>• Extended cure times for adhesives</li>
                  <li>• Heated work areas for complex repairs</li>
                  <li>• Multi-stage installation processes</li>
                  <li>• Quality testing in cold conditions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-brown">
              <Home className="w-6 h-6 inline-block" /> Structural Reinforcement
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Load-Bearing Improvements:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Sister-rafter installation on damaged 2x6 or 2x8 framing</li>
                  <li>• Roof deck replacement where OSB has delaminated</li>
                  <li>• Engineered truss bracing on long-span Panhandle ranch houses</li>
                  <li>• Top-plate and wall assessment where rafters tie in</li>
                  <li>• Texas-licensed engineer review for modifications beyond simple repair</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Preventive Upgrades:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Snow and ice load calculations to current IBC standards</li>
                  <li>• Drainage improvements at valleys and crickets behind chimneys</li>
                  <li>• Ridge and soffit ventilation redesign for cold-climate balance</li>
                  <li>• R-38 to R-49 attic insulation appropriate for Texas climate zone</li>
                  <li>• Sealing of bathroom and kitchen vent boots to keep humid air out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">
        Historical Texas Panhandle Winter Storm Events
      </h2>
      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-3 text-brand-brown">
            <CloudHail className="w-6 h-6 inline-block" /> Winter Storm Uri (February 2021)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Storm Statistics:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Temperature low: -20°F in Amarillo</li>
                <li>• Duration: 7+ consecutive days below freezing</li>
                <li>• Snowfall: 8-12 inches across region</li>
                <li>• Wind gusts: 45+ mph creating massive drifts</li>
                <li>• Power outages: 85% of Panhandle without power</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Damage Assessment:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 12,000+ homes with ice dam damage</li>
                <li>• 350 commercial roof failures from snow load</li>
                <li>• $2.8 billion in insurance claims across Texas</li>
                <li>• 6 months average repair time due to contractor shortage</li>
                <li>• Many damage discoveries delayed until spring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-3 text-brand-brown">
            <Snowflake className="w-6 h-6 inline-block" /> The Christmas Blizzard (December 2015)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Event Overview:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 18-inch snowfall in 24 hours</li>
                <li>• 65 mph wind gusts creating whiteout conditions</li>
                <li>• Temperature drop from 75°F to 15°F in 12 hours</li>
                <li>• Complete shutdown of Amarillo for 3 days</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Roof Damage Patterns:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Wind-driven snow penetration under shingles</li>
                <li>• Massive ice dam formation on south-facing roofs</li>
                <li>• Gutter systems torn from homes by ice weight</li>
                <li>• Flat roof collapses on older commercial buildings</li>
                <li>• Freeze-thaw damage lasted through February</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-3 text-brand-brown">
            <Snowflake className="w-6 h-6 inline-block" /> Ice Storm of 2013
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Meteorological Conditions:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Freezing rain for 18 consecutive hours</li>
                <li>• Ice accumulation: 1.5-2.5 inches thick</li>
                <li>• Weight loading: 500+ pounds per linear foot</li>
                <li>• Power lines down across entire region</li>
                <li>• Travel impossible for 5 days</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Infrastructure Impact:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 2,400 homes with gutter/fascia damage</li>
                <li>• Tree limb impacts on 950+ roofs</li>
                <li>• Metal roof systems severely dented</li>
                <li>• Skylights shattered from ice loading</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Winter Damage Repair Process</h2>
      <div className="space-y-3 mb-8">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h5 className="step-title">Emergency Ice Dam Removal</h5>
            <p className="step-text">
              Safe removal of ice dams using specialized equipment—never hammers or picks that can
              damage shingles. We create drainage channels to relieve water backup.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5 className="step-title">Interior Damage Assessment</h5>
            <p className="step-text">
              Inspect attic and interior spaces for water damage, insulation saturation, and
              structural issues caused by leaks or condensation.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5 className="step-title">Exterior Roof Inspection</h5>
            <p className="step-text">
              Complete evaluation of shingles, flashing, vents, and roof deck for freeze-thaw
              damage, ice dam damage, and structural integrity issues.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h5 className="step-title">Ventilation & Insulation Evaluation</h5>
            <p className="step-text">
              Assess attic ventilation and insulation to identify the root cause of ice dam
              formation and prevent future winter damage.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h5 className="step-title">Permanent Repairs & Prevention</h5>
            <p className="step-text">
              Fix all winter storm damage and implement preventive measures including improved
              ventilation, additional insulation, and ice/water shield installation at eaves.
            </p>
          </div>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">Comprehensive Winter Roof Protection Strategy</h2>
        <p className="text-lg mb-6">
          Preventing winter damage on a Panhandle roof comes down to three controllable variables:
          the thermal envelope below the deck, the airflow path from soffit to ridge, and the
          waterproof underlayment behind the shingles. We address those three together, sized for
          the temperature swings between Amarillo, Canyon, and Pampa, rather than treating each
          symptom in isolation.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Thermometer className="w-6 h-6 inline-block" /> Thermal Envelope Optimization
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• R-38 to R-49 attic insulation (Texas climate zone)</li>
              <li>• Continuous air barrier installation</li>
              <li>• Thermal bridge elimination</li>
              <li>• Vapor barrier placement and sealing</li>
              <li>• Duct sealing and insulation upgrades</li>
              <li>• Window and door weatherization</li>
              <li>• Attic hatch insulation and sealing</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Wind className="w-6 h-6 inline-block" /> Advanced Ventilation Systems
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Ridge vent with external wind baffle</li>
              <li>• Soffit vents with insulation baffles</li>
              <li>• Powered exhaust fans for problem areas</li>
              <li>• Gable end ventilation for cross-flow</li>
              <li>• Turbine vents for enhanced air movement</li>
              <li>• Ventilation calculation per building codes</li>
              <li>• Seasonal ventilation adjustment protocols</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 text-brand-brown">
              <Shield className="w-6 h-6 inline-block" /> Ice Damage Prevention
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Ice and water shield to 36" above wall line</li>
              <li>• Enhanced underlayment in valleys</li>
              <li>• Drip edge installation at eaves</li>
              <li>• Gutter heating cables for problem areas</li>
              <li>• Snow guards on steep metal roofs</li>
              <li>• Upgraded flashing at all penetrations</li>
              <li>• Emergency snow removal protocols</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-amber-50 border-l-4 border-brand-gold-vibrant p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-brand-brown">
          <DollarSign className="w-6 h-6 inline-block" /> Insurance Considerations for Winter Damage
        </h3>
        <p className="mb-4">
          Winter storm damage coverage varies significantly between insurance policies in Texas.
          Understanding your coverage helps ensure proper protection and claim success.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-brand-brown">Typically Covered Damage</h4>
            <ul className="space-y-1 text-sm">
              <li>• Sudden ice dam formation and resulting leaks</li>
              <li>• Snow load roof collapse (if within code)</li>
              <li>• Freeze burst pipe damage to roof/ceiling</li>
              <li>• Tree limb damage from ice loading</li>
              <li>• Wind-driven snow penetration</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-brand-brown">Often Excluded or Limited</h4>
            <ul className="space-y-1 text-sm">
              <li>• Gradual freeze-thaw deterioration</li>
              <li>• Poor maintenance leading to problems</li>
              <li>• Code compliance upgrades</li>
              <li>• Preventive improvements (insulation, etc.)</li>
              <li>• Damage from roof design inadequacies</li>
              <li>• Long-term condensation issues</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-lg p-4 mt-4">
          <h4 className="font-bold mb-2">
            <Lightbulb className="w-6 h-6 inline-block" /> Pro Tip: Document Everything
          </h4>
          <p className="text-sm">
            Take photos of your roof before winter weather arrives. This documentation can be
            crucial for proving that damage occurred during a specific storm event rather than from
            gradual deterioration.
          </p>
        </div>
      </div>
      <div className="content-block">
        <h2 className="content-block-title">post-storm documentation Protocols</h2>
        <p className="text-lg mb-4">
          When winter storms strike the Texas Panhandle, our roofing service can mean the difference
          between minor repairs and major structural damage. our protocols ensure immediate
          stabilization and damage mitigation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-lg p-6">
            <ul className="space-y-2 text-sm">
              <li>• roofing our roofing teams</li>
              <li>• weatherproof sheeting and stabilization</li>
              <li>• Ice dam removal for active leaks</li>
              <li>• Water extraction and drying services</li>
              <li>• Temporary structural reinforcement</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-green-800">
              <CheckCircle className="w-5 h-5 inline-block text-green-600" /> Safety-First Approach
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• We never put crew safety behind property protection</li>
              <li>• Roof grip cleats and rope-grab systems for icy decking</li>
              <li>• Crews trained for cold-weather work on Panhandle pitches</li>
              <li>• Fall protection compliant with OSHA 1926.501 at every elevation</li>
              <li>• Active monitoring of National Weather Service Amarillo forecasts</li>
              <li>• Family relocation protocols when a roof is structurally compromised</li>
              <li>• Coordination with Xcel Energy or local utilities when service lines are involved</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 text-orange-800">
          <Clock className="w-6 h-6 inline-block" /> Seasonal Maintenance Calendar
        </h3>
        <p className="mb-4">
          Proactive maintenance is the best defense against winter roof damage. Follow this Texas
          Panhandle-specific schedule:
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-orange-700">September</h4>
            <ul className="space-y-1 text-sm">
              <li>• Professional roof inspection</li>
              <li>• Gutter cleaning and repair</li>
              <li>• Seal cracks and gaps</li>
              <li>• Check attic insulation</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-orange-700">October</h4>
            <ul className="space-y-1 text-sm">
              <li>• Trim overhanging branches</li>
              <li>• Install gutter guards</li>
              <li>• Check heating system</li>
              <li>• Weatherize penetrations</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-orange-700">November</h4>
            <ul className="space-y-1 text-sm">
              <li>• Final gutter cleaning</li>
              <li>• Test ice dam prevention</li>
              <li>• Emergency kit preparation</li>
              <li>• Insurance policy review</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold mb-2 text-orange-700">March</h4>
            <ul className="space-y-1 text-sm">
              <li>• Post-winter damage assessment</li>
              <li>• Spring repair planning</li>
              <li>• Ventilation system check</li>
              <li>• Preventive maintenance updates</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-amber-50 border-l-4 border-brand-gold-vibrant p-6 mb-8">
        <h3 className="font-bold mb-3">
          <Snowflake className="w-6 h-6 inline-block" /> Post-Winter Roof Inspection
        </h3>
        <p>
          After a hard winter across Amarillo, Canyon, or anywhere on the Llano Estacado, schedule
          a professional{" "}
          <a
            href="/roof-inspections-amarillo/"
            className="text-brand-brown hover:text-brand-gold underline"
          >
            roof inspection
          </a>{" "}
          even if no damage is obvious from the driveway. Cracked sealant at chimney flashing,
          lifted shingle tabs, and bruised aluminum at vents typically only surface when March
          and April rains push water through the weak spot. An early inspection catches the
          repair while it is still a flashing reseal instead of a deck replacement.
        </p>
      </div>
      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Serving Texas Panhandle</h2>
        <p className="text-lg mb-4">
          Winter storm damage services for{" "}
          <a href="/residential-roofing-amarillo/" className="text-brand-gold hover:underline">
            residential
          </a>{" "}
          and{" "}
          <a href="/commercial-roofing-amarillo/" className="text-brand-gold hover:underline">
            commercial
          </a>{" "}
          properties:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">
            • Midland Winter Damage
          </a>
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">
            • Odessa Ice Damage
          </a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">
            • Lubbock Snow Damage
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
      <RelatedArticles pageSlug="roof-snow-and-ice-damage-in-amarillo" />
    </div>
  );
}
