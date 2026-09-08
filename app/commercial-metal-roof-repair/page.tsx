import { FadeIn } from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";
import { AlertTriangle, Check, X } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-metal-roof-repair/" },
  title: "Commercial Metal Roof Repair in Amarillo, TX | 5 Star Roofing",
  description:
    "Repairing an existing metal roof in Amarillo, TX — finding the real leak, replacing a panel mid-run, which sealants belong on Galvalume, and when repair stops being the right money. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Metal Roof Repair in Amarillo, TX | 5 Star Roofing",
    description:
      "Repairing an existing metal roof in Amarillo, TX — finding the real leak, replacing a panel mid-run, which sealants belong on Galvalume, and when repair stops being the right money.",
    url: "https://5starroofingpros.com/commercial-metal-roof-repair/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-8-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Metal Roof Repair in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialMetalRoofRepairPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Metal Roof Repair",
            name: "Commercial Metal Roof Repair in Amarillo",
            description:
              "Diagnosing and repairing leaks, corrosion, storm punctures and failed details on existing commercial metal roofs in Amarillo, Texas, including single-panel replacement and detail rebuilds.",
            url: "https://5starroofingpros.com/commercial-metal-roof-repair/",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2909 S Western St",
                addressLocality: "Amarillo",
                addressRegion: "TX",
                postalCode: "79109",
                addressCountry: "US",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Amarillo",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            isRelatedTo: {
              "@type": "Service",
              name: "Commercial Metal Roofing",
              url: "https://5starroofingpros.com/commercial-metal-roofing/",
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
                name: "How much does it cost to fix a metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends almost entirely on whether the fix is a detail or a panel. Rebuilding a pipe boot, a curb flashing or a failed end lap is a half-day of labor and a small material list. Replacing a panel in the middle of a run means unbuttoning the roof back to a free edge, matching gauge, profile and finish, and reassembling, which is several times the work for the same square footage. We price from the diagnosis, and the estimate shows the repairs as separate line items so you can approve or defer them individually.",
                },
              },
              {
                "@type": "Question",
                name: "Why is the leak nowhere near the wet spot inside?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because water on a metal roof travels. It enters at a fastener, a lap or a seam, runs along the underside of the panel or across the top of a purlin, and drops through the ceiling wherever it finds an opening, often many feet downslope and to one side. This is why chasing a metal roof leak from inside the building almost always produces the wrong repair. We trace the path back uphill, and where the roof will not give up the entry point we water-test the suspect details in sequence.",
                },
              },
              {
                "@type": "Question",
                name: "Can you just caulk a leaking metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Caulk buys a season and hides the evidence. Panels move with every hot day and cold night, and a rigid sealant bead cracks along that movement while the roof looks repaired from the ground. Worse, asphalt-based roof cement should not be smeared on a Galvalume panel. The two do not get along and the coating pays for it. Real metal repairs use a butyl or a compatible high-movement sealant, mechanical fastening, and a cover that is designed to move with the panel rather than fight it.",
                },
              },
              {
                "@type": "Question",
                name: "What is the biggest problem with metal roofs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Movement. A steel panel grows and shrinks measurably between a hot Panhandle afternoon and a cold night, and every detail on the roof either accommodates that movement or slowly fails because of it. That single fact explains most of what we repair: backed-out fasteners with worn holes, split sealant at end laps, cracked pipe boots, and trim that has walked away from its fastening. It is also why a repair that ignores thermal movement comes back.",
                },
              },
              {
                "@type": "Question",
                name: "Is hail damage on a metal roof repairable?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sometimes. A hail strike that fractures the coating without breaching the panel is a corrosion problem starting at that point, and it is typically addressed panel-by-panel or by the coating route rather than by patching. A stone that punctures the steel or splits a seam needs the panel section replaced. Potter County has recorded 131 severe hail days since 2000 and Amarillo averages 8 to 12 hailstorms a year, so we document every strike zone rather than assume the roof got lucky.",
                },
              },
              {
                "@type": "Question",
                name: "When should I stop repairing a metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When the fastener holes are worn oversized across the roof, when corrosion has moved from spots to the eaves and laps generally, or when the repair list stops shrinking after each visit. At that point the money is better spent on a retrofit system over the existing panels or on a full replacement, and we will say so on the assessment rather than sell you another round of patches.",
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
        service="Metal Roof Repair"
        h1="Commercial Metal Roof Repair in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-8-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Metal Roofing", url: "/commercial-metal-roofing/" },
          { name: "Metal Roof Repair", url: "/commercial-metal-roof-repair/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: fixing the metal roof you <strong>already have</strong>: leaks, storm punctures, corroded panels and failed details. Not a new roof, not a recover.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The hard part is the diagnosis, not the patch. Water enters at one place and appears somewhere else entirely, so we trace it uphill before anything is priced.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Panel repairs are not like membrane repairs. A panel in the middle of a run is locked to its neighbors, which is why one square foot of damage can be a real project.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free leak diagnosis with photographs and a line-item repair list. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Repair Means Fixing What Is Up There Now
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              This page is about one thing: your existing commercial metal roof is leaking, or a
              storm hit it, and you want it stopped without replacing the roof. That is a different
              conversation from choosing a new metal system and a different conversation from
              covering the old one. Repair keeps the panels you own, corrects what has actually
              failed, and leaves the rest of the roof alone.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The pattern rarely changes. The steel is usually fine. What has failed is a fastener,
              a lap, a piece of trim or a penetration, small parts doing the hardest job on the
              roof. Find the right one and the repair is quick and cheap. Guess, and you have paid
              for a repair that did not stop the water.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Finding the Actual Leak, Not the Wet Spot
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              On a metal roof, water is a traveler. It gets in at a seam or a screw, runs along the
              underside of a panel or across the top of a purlin, and drops through the ceiling
              wherever it finally finds an opening. The stain in your warehouse can be twenty or
              thirty feet downslope of the hole. Standing under it and pointing up is how the wrong
              repair gets made.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Read it from inside</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start in the building, because the framing tells the story. Rust tracks on
                  purlins, stained insulation facing and the direction of the drip narrow the search
                  to a zone of the roof before anyone climbs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Walk it uphill</h3>
                <p className="text-gray-700 leading-relaxed">
                  Then we work up the slope from that zone, inspecting every fastener, end lap, side
                  lap, curb, boot and trim termination on the way. Every suspect detail gets a
                  photograph and a location, not a note from memory.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Test if the roof hides it</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some leaks only show under a specific wind direction or a certain rain rate. Where
                  the walk does not settle it, we water-test the suspect details one at a time, from
                  the bottom up, until the leak reproduces.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>What you get from the diagnosis:</strong> photographs of every defect with
                its position on the roof, a description of what failed and why, and a repair list
                priced line by line rather than as a lump figure. If several details are failing for
                the same reason, we say that too — it usually changes the right answer.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Actually Fails on an Amarillo Metal Roof
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Almost everything on this list traces back to one property of steel: it moves. A panel
              expands through a hot afternoon and contracts overnight, every day, for decades. At
              3,600 feet with an average wind of 14.3 mph pushing on it, the details either
              accommodate that or they give up.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Backed-out and stripped fasteners</h3>
                <p className="text-gray-700 leading-relaxed">
                  The washer hardens, the screw walks, the hole wears oversized. Individually these
                  are a repair; roof-wide they are a re-fastening job, which we cover on our{" "}
                  <a href="/metal-building-and-r-panel-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    metal building and R-panel page
                  </a>.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Split end laps</h3>
                <p className="text-gray-700 leading-relaxed">
                  Where two panels overlap along the slope, the sealant tape between them is the
                  waterproofing. It fatigues from movement, cracks, and then the lap wicks water
                  every time it rains against the wind.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Failed pipe boots and curbs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rubber boots go hard and split at the collar. Curbs for HVAC and exhaust are
                  frequently the single busiest leak source on a commercial metal roof because
                  service technicians keep walking on them.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Corrosion at eaves, laps and cut edges</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rust starts where water sits or where the coating was broken: trimmed edges,
                  scratched panels, hail strike points. Caught early it is a spot repair. Caught late
                  it is a panel.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Storm punctures and seam damage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Large hail and wind-driven debris can breach a panel outright or open a side lap.
                  These are damage rather than maintenance items, and they usually belong in a
                  claim rather than in your operating budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Trim that has walked</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ridge caps, rake and eave trim and gutter straps take wind load directly. When
                  their fastening loosens, the trim shifts, the sealed line opens, and the roof leaks
                  at the edge where nobody looks.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why Replacing One Panel Is Not a Small Job
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Owners are often surprised that a two-foot puncture is not a two-foot repair. On a
              metal roof, panels lock to their neighbors along the side lap, and each one is
              fastened through or clipped to the purlins beneath it. You cannot lift a panel out of
              the middle of a run the way you cut a patch into a membrane. Reaching it means
              unbuttoning the roof from a free edge (the ridge, the rake or the eave) and then
              putting it all back.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              There is a second problem: matching. The replacement has to match profile, gauge and
              rib spacing exactly or it will not lock in, and it has to match a finish that has been
              weathering in West Texas sun for years. On an older roof, a brand-new panel in the
              middle of a faded field is visible from the parking lot, which matters more on a
              storefront than on a warehouse.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Where a full panel swap is not justified, the honest alternatives are a properly
              engineered panel-over-panel cover section, or accepting the repair as a detail rather
              than a restoration. We will lay out which one applies and what each does to your
              warranty position before you choose.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Repairs That Make the Roof Worse
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A large share of what we are called to fix is a previous repair. These four come up
              often enough on Panhandle buildings that they are worth naming.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Asphalt roof cement on a bare metal panel
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  It is cheap, it is in every hardware store, and it does not belong on a Galvalume
                  panel. It traps moisture against the coating, and when it eventually cracks the
                  corrosion underneath is worse than the leak it was covering.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  A bead of hard caulk over a moving joint
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Panels move every single day. A rigid sealant across that movement splits within a
                  season or two, but the roof looks repaired from the ground the whole time, which
                  is why the leak reappears as a surprise.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  A longer screw into a worn hole
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Length does not help when the hole is oversized; the fix is a larger-diameter
                  fastener that bites fresh material, with a washer rated for the exposure. Driving
                  the same screw harder just crushes the washer and reopens the path.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Patching before the claim is documented
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If storm damage caused it, covering the evidence before it is photographed makes
                  the claim harder to support. Securing loose panels and trim against the next
                  storm is fine and necessary. Permanent repair should wait for documentation.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
            <div className="flex gap-6 items-start">
              <div>
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-800 mb-3">
                  If a Storm Caused It, the Repair Scope Is a Claim Document
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Metal hides damage well. Steel dents and fractures its coating long before it
                  punctures, so a hail-struck roof can look serviceable while corrosion is already
                  starting at every strike point. Amarillo averages{" "}
                  <strong>8 to 12 hailstorms a year</strong>, and the largest stone on record here is{" "}
                  <strong>4.25 inches</strong>. On a metal roof the argument with the carrier is
                  rarely about whether the storm happened. It is about whether dented panels that
                  still shed water are a covered loss, and the answer lives in your policy's cosmetic
                  damage wording. Under the Texas Prompt Payment Act an insurer must acknowledge
                  your claim within <strong>15 days</strong> and pay or deny within{" "}
                  <strong>60 days</strong>, and you have a{" "}
                  <strong>two-year window from the date of loss</strong> to file. We write the
                  repair scope so it reflects the whole strike zone, not only the panel that happens
                  to be dripping.
                </p>
                <a
                  href="tel:8066226041"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300"
                >
                  Talk to us: (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              When Repair Stops Being the Right Money
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Repair is the correct answer while the failures are individual. It stops being the
              correct answer when they are general: when the fastener holes are worn across the
              whole roof rather than in spots, when rust has moved from strike points to the eaves
              and laps everywhere, or when the repair list refuses to get shorter after two or three
              visits.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Still a repair</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A handful of identifiable leak points</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Sound panels with intact coating overall</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Failures concentrated at details and penetrations</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Storm damage confined to a defined area</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Time for a system decision</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Oversized fastener holes across the roof</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Widespread corrosion rather than spots</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Wet insulation or deteriorating purlins below</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A repair bill that keeps returning annually</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              When the roof crosses that line there are two routes worth pricing before you commit
              to a tear-off. A{" "}
              <a href="/metal-roof-retrofit-over-existing-roof/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                metal roof retrofit over the existing roof
              </a>{" "}
              puts a new system on top of what you have without opening the building, and a{" "}
              <a href="/commercial-roof-re-coating/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                fluid-applied re-coating
              </a>{" "}
              can extend a sound but weathered panel roof where the substrate qualifies. We will tell
              you which of the three your roof is actually a candidate for.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where Metal Repair Sits in Our Commercial Metal Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Repair is the entry point to a larger set of metal services. Our{" "}
              <a href="/commercial-metal-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial metal roofing
              </a>{" "}
              page covers the whole range (panel systems, re-fastening, retrofits and new
              installation) and is where to start if you have not decided yet whether you are fixing
              this roof or replacing it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We run metal repair calls from 2909 S Western St in Amarillo to Canyon, Borger,
              Pampa, Dumas, Hereford, Plainview, Bushland and the wider West Texas market.
            </p>
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
                  How much does it cost to fix a metal roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends almost entirely on whether the fix is a detail or a panel. Rebuilding a
                  pipe boot, a curb flashing or a failed end lap is a half-day of labor and a small
                  material list. Replacing a panel in the middle of a run means unbuttoning the roof
                  back to a free edge, matching gauge, profile and finish, and reassembling, which
                  is several times the work for the same square footage. We price from the diagnosis, and the
                  estimate shows the repairs as separate line items so you can approve or defer them
                  individually.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is the leak nowhere near the wet spot inside?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Because water on a metal roof travels. It enters at a fastener, a lap or a seam,
                  runs along the underside of the panel or across the top of a purlin, and drops
                  through the ceiling wherever it finds an opening, often many feet downslope and to
                  one side. This is why chasing a metal roof leak from inside the building almost
                  always produces the wrong repair. We trace the path back uphill, and where the roof
                  will not give up the entry point we water-test the suspect details in sequence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you just caulk a leaking metal roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Caulk buys a season and hides the evidence. Panels move with every hot day and cold
                  night, and a rigid sealant bead cracks along that movement while the roof looks
                  repaired from the ground. Worse, asphalt-based roof cement should not be smeared on
                  a Galvalume panel. The two do not get along and the coating pays for it. Real
                  metal repairs use a butyl or a compatible high-movement sealant, mechanical
                  fastening, and a cover that is designed to move with the panel rather than fight
                  it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the biggest problem with metal roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Movement. A steel panel grows and shrinks measurably between a hot Panhandle
                  afternoon and a cold night, and every detail on the roof either accommodates that
                  movement or slowly fails because of it. That single fact explains most of what we
                  repair: backed-out fasteners with worn holes, split sealant at end laps, cracked
                  pipe boots, and trim that has walked away from its fastening. It is also why a
                  repair that ignores thermal movement comes back.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Is hail damage on a metal roof repairable?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Sometimes. A hail strike that fractures the coating without breaching the panel is
                  a corrosion problem starting at that point, and it is typically addressed
                  panel-by-panel or by the coating route rather than by patching. A stone that
                  punctures the steel or splits a seam needs the panel section replaced. Potter
                  County has recorded 131 severe hail days since 2000 and Amarillo averages 8 to 12
                  hailstorms a year, so we document every strike zone rather than assume the roof got
                  lucky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  When should I stop repairing a metal roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  When the fastener holes are worn oversized across the roof, when corrosion has
                  moved from spots to the eaves and laps generally, or when the repair list stops
                  shrinking after each visit. At that point the money is better spent on a retrofit
                  system over the existing panels or on a full replacement, and we will say so on the
                  assessment rather than sell you another round of patches.
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

        <InternalLinks currentCity="amarillo" currentService="metal-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Find the Leak Before You Pay to Fix It</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free metal roof leak diagnosis with photographs and a repair list you can approve item
            by item, whoever ends up doing the work.
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
              Request Free Estimate
            </a>
          </div>
        </section>

        <RelatedArticles pageSlug="commercial-metal-roof-repair" />
      </div>
    </>
  );
}