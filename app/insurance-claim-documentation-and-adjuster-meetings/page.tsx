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
  alternates: {
    canonical:
      "https://5starroofingpros.com/insurance-claim-documentation-and-adjuster-meetings/",
  },
  title: "Roof Insurance Claim Documentation & Adjuster Meetings | Amarillo TX",
  description:
    "What goes in a roof claim file in Amarillo, TX, what happens at the adjuster meeting, how a supplement works, and the deadlines Texas law puts on your carrier. Call (806) 622-6041.",
  openGraph: {
    title: "Roof Insurance Claim Documentation & Adjuster Meetings | Amarillo TX",
    description:
      "What goes in a roof claim file in Amarillo, what happens at the adjuster meeting, how a supplement works, and the deadlines Texas law puts on your carrier.",
    url: "https://5starroofingpros.com/insurance-claim-documentation-and-adjuster-meetings/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Roof Insurance Claim Documentation and Adjuster Meetings in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function InsuranceClaimDocumentationAdjusterMeetingsPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Roof Insurance Claim Documentation and Adjuster Meetings",
            name: "Roof Insurance Claim Documentation and Adjuster Meetings in Amarillo",
            description:
              "Assembling the roof documentation an insurance carrier needs, meeting the field adjuster on site, and working the scope through supplement and settlement on storm-damaged buildings in Amarillo, Texas.",
            url: "https://5starroofingpros.com/insurance-claim-documentation-and-adjuster-meetings/",
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
              name: "Storm Damage Roof Assessment",
              url: "https://5starroofingpros.com/storm-damage-repair/",
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
                name: "Should a roofer be present when the insurance adjuster inspects my roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It helps, because the adjuster is writing a scope from a single visit and a roofer who has already walked and documented the roof can point to the specific findings rather than argue in generalities. We meet the field adjuster on site, walk the same slopes and elevations, and show the test squares and photographs already in the file. The adjuster still writes the scope; our job is to make sure nothing on the roof goes unrecorded.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an insurance company have to pay a roof claim in Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Under the Texas Prompt Payment Act an insurer must acknowledge the claim within 15 days and pay or deny it within 60 days. Delayed payments accrue 18 percent annual interest. You also have a two-year window from the date of loss to file. Those are the deadlines that bind the carrier, and they are the reason we date-stamp every piece of documentation that goes into a claim file.",
                },
              },
              {
                "@type": "Question",
                name: "What is a supplement on a roof insurance claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A supplement is a request to revise an approved scope after something is found that the original estimate did not include. Common triggers are deteriorated decking discovered at tear-off, a layer count nobody knew about, flashing or edge metal the field estimate missed, and code-required items the original scope left out. A supplement is documentation rather than a negotiation, so it is submitted with photographs, measurements and the code reference behind it.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between ACV and RCV on a roof claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Replacement cost value is what it costs to put the roof back today. Actual cash value is that number minus depreciation for the age and condition of the old roof. On a replacement cost policy the carrier usually releases the actual cash value first and holds the depreciation back, then releases it once the work is complete and invoiced. That withheld amount is called recoverable depreciation, and it is recovered by documenting completed work rather than by asking for it.",
                },
              },
              {
                "@type": "Question",
                name: "Can my roofer handle the insurance claim for me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, and be careful with any contractor who says otherwise. In Texas a roofing contractor cannot act as the adjuster on a claim it is also contracted to repair, and nobody should be offering to absorb your deductible. What a roofer can legitimately do is document the roof, provide a line-item estimate, meet the adjuster on site, and submit supplements with evidence. The claim stays yours and the adjusting stays with licensed adjusters.",
                },
              },
              {
                "@type": "Question",
                name: "Why do roofs in Amarillo generate so many insurance claims?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amarillo sits at the center of Hail Alley where dry desert air meets Gulf moisture, and Potter County ranks in the top ten nationally for hail frequency. The county has recorded 131 severe hail days since 2000, the area averages 8 to 12 hailstorms a year, and the largest stone on record here is 4.25 inches from May 2019. Add an annual average wind of 14.3 mph at 3,600 feet of elevation and claim work is simply a normal part of owning a roof here.",
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
        service="Insurance Claim Documentation"
        h1="Roof Insurance Claim Documentation and Adjuster Meetings in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Storm, Hail & Wind", url: "/commercial-storm-hail/" },
          {
            name: "Claim Documentation & Adjuster Meetings",
            url: "/insurance-claim-documentation-and-adjuster-meetings/",
          },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: the <strong>claim itself</strong>: the file you submit, the adjuster meeting on the roof, supplements, and settlement. Finding and proving the damage is a separate step, covered on our <a href="/storm-damage-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">storm damage roof assessment</a> page.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The deadlines are statutory: 15 days to acknowledge, 60 days to pay or deny, 18% annual interest on late payment, two years from the date of loss to file.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Where claims actually go wrong: an incomplete scope at the first inspection, and no evidence trail to support a supplement later.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: call (806) 622-6041 to have us meet your adjuster on site, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              This Page Starts After the Damage Is Documented
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              There are two separate jobs after a storm, and confusing them costs owners money. The
              first is finding out what actually happened to the roof: test squares, photographs,
              moisture readings, a written report. That is an assessment, and we cover it in detail
              on our{" "}
              <a
                href="/storm-damage-repair/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                storm damage roof assessment
              </a>{" "}
              page.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The second job is turning that evidence into a claim a carrier will pay in full: what
              goes in the file, who says what at the adjuster meeting, how the scope gets corrected
              when something is missed, and how the money is released in two pieces rather than one.
              That second job is what this page is about. Almost every underpaid claim we are asked
              to look at failed in the same place, and it was the paperwork, not the roof.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Belongs in a Roof Claim File
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A carrier is not being difficult when it declines to pay for something that was never
              recorded. The file is the claim. Six things carry the weight:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Date of loss, tied to a storm</h3>
                <p className="text-gray-700 leading-relaxed">
                  The claim is filed against a specific weather event, not against a roof that looks
                  bad. Getting the date right matters more here than in most markets, because with 8
                  to 12 hailstorms a year an Amarillo roof may carry damage from more than one event
                  and only one of them is inside your filing window.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Slope-by-slope photographs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every elevation, every penetration, every termination, with a marked test square
                  on each slope so the density of impacts is visible rather than asserted. Wide
                  shots establish the building; close shots establish the damage. A file with only
                  close-ups is a file an adjuster cannot place.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Measurements and roof geometry</h3>
                <p className="text-gray-700 leading-relaxed">
                  Squares, ridge and hip lineal footage, valley footage, perimeter, penetration
                  count, pitch and story height. These are the quantities the carrier's estimating
                  software prices against. Vague quantities produce a vague settlement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">A line-item estimate</h3>
                <p className="text-gray-700 leading-relaxed">
                  Not a lump-sum bid. Tear-off, underlayment, starter, valley metal, drip edge,
                  flashing, ventilation, ridge cap and every penetration priced as separate lines,
                  because that is how the adjuster's own estimate is built and it is the only format
                  the two documents can be compared in.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Collateral and interior evidence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dented gutters, downspouts, fascia, vents, HVAC fins, window screens and soft
                  metals corroborate a hail event and its stone size. Interior staining ties the
                  roof condition to consequential damage. Both are routinely left out and both are
                  payable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">The policy itself</h3>
                <p className="text-gray-700 leading-relaxed">
                  Deductible structure, whether the roof is written on replacement cost or actual
                  cash value, and whether the policy carries a cosmetic damage exclusion or a
                  roof-surfacing schedule. Read this before the adjuster arrives, not after the
                  settlement lands.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>Date-stamp everything.</strong> The Texas deadlines below run from specific
                dates, and a file where nobody can prove when a document was sent is a file that
                loses arguments it should win.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Adjuster Meeting: What Actually Happens
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The field adjuster is not your opponent. They are a person with a route of roofs to
              inspect, a limited window on yours, and an obligation to write what they can
              substantiate. The meeting goes well when the roof has already been documented and
              badly when everyone is discovering it together.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Before they arrive</h3>
                <p className="text-gray-700 leading-relaxed">
                  We confirm the appointment, re-walk the roof if the weather has changed anything,
                  and have the photographs, test squares and line-item estimate ready in the format
                  the carrier uses. Ladders and access are sorted before the adjuster is standing in
                  the parking lot.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. On the roof</h3>
                <p className="text-gray-700 leading-relaxed">
                  We walk every slope with them, not just the worst one, and point to the marked
                  test squares so impact density is counted rather than eyeballed. Where we disagree
                  about a slope, we say so on the roof while it can still be looked at — not in an
                  email three weeks later.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Before they leave</h3>
                <p className="text-gray-700 leading-relaxed">
                  We confirm what is going in the scope and what is not, and ask for anything
                  excluded to be identified so it can be addressed with evidence rather than
                  guessed at. Then we send the documentation package the same way, to the same
                  file, with the date on it.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              One practical note about the Panhandle specifically. After a large regional hail
              event, carriers bring in adjusters from outside the market to work the volume. They
              are competent, but they may not have seen a West Texas roof before yours, and things
              like open valley metal (standard scope here, unusual in some other markets) are
              exactly the sort of line that quietly goes missing. That is not bad faith. It is a
              reason to be on the roof with them.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              When the Scope Is Wrong: How a Supplement Works
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A supplement is a request to revise an approved scope because something was found that
              the original estimate did not account for. It is completely routine, and treating it
              as a fight is the reason owners avoid filing one and eat the difference themselves.
              A supplement needs a photograph, a measurement, and the reason the item is required.
              Persuasion does not come into it.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What usually triggers one</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Deteriorated decking found at tear-off</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A second roof layer nobody knew was there</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Flashing, edge metal or valley metal omitted</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Ventilation replaced like-for-like below code</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Slopes or elevations left out of the measurement</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Code-required upgrades the original scope skipped</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What a supplement must carry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Dated photographs of the actual condition</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The measured quantity, not an estimate of it</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The line item written in the carrier's format</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The code section, where code is the reason</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Submission into the existing claim, dated</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A stop-work note if the finding blocks the job</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              Decking is the one that catches owners out. Nobody can see the condition of a deck
              through a finished roof, so a first-pass scope almost never includes it, and it is
              found on the morning the old roof comes off. Photograph it before it is covered. Once
              new material is down, the evidence is gone.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why the Money Arrives in Two Pieces
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Owners regularly think a claim was underpaid when it was actually paid in the normal
              sequence. Replacement cost value is what it costs to put the roof back today. Actual
              cash value is that figure minus depreciation for the age and condition of the roof
              that was there. On a replacement cost policy the carrier typically releases the actual
              cash value first, less your deductible, and holds the depreciation back.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              That held-back amount is recoverable depreciation, and it is released after the work
              is complete and invoiced, because the policy pays replacement cost only once
              replacement has actually happened. It is recovered by submitting a final invoice that
              matches the approved scope, not by asking nicely. If the invoice and the scope do not
              line up, that is where the recovery stalls.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Two things change the math and both are worth reading in your own policy before a
              storm rather than after one. A roof written on actual cash value never has a
              depreciation release at all. And a cosmetic damage exclusion, common on metal roof
              surfacing, can mean dented panels that still shed water are not payable.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Code Upgrades, and the Line Owners Forget to Ask For
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A policy pays to restore what was there. Current code may not allow what was there to
              be rebuilt the same way: more ventilation, different fastening, drip edge that the
              original roof did not have. That gap is what ordinance or law coverage exists for, and
              whether you carry it is a line in your policy that most owners have never looked at.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This bites hardest on commercial buildings, where a large repair can trip the code
              threshold that forces the whole roof up to current standard rather than back to its
              original one. The upgrade items are legitimate scope, but they only get paid if they
              are identified, cited to the code section, and submitted. We flag them when we write
              the estimate, and we say plainly when your policy does not carry the coverage. That
              is a number you need before you sign anything, not after.
            </p>
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
                  The Deadlines Texas Law Puts on Your Carrier
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  These are statutory, not negotiable. Under the Texas Prompt Payment Act an insurer
                  must acknowledge your claim within <strong>15 days</strong> and pay or deny it
                  within <strong>60 days</strong>. Delayed payments accrue{" "}
                  <strong>18% annual interest</strong>. Separately, you have a{" "}
                  <strong>two-year window from the date of loss</strong> to file at all. The
                  practical deadline is usually much earlier than two years, because proving which
                  storm caused what gets harder every season a roof stays exposed, and in a market
                  averaging 8 to 12 hailstorms a year, seasons stack up quickly.
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
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What We Do, and What We Will Not Do
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Amarillo gets a wave of out-of-state contractors after every large hail event, and
              some of them will offer things a Texas roofer is not permitted to offer. Being clear
              about the boundary is part of the service.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What we do</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Document the roof and build the evidence file</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Provide a line-item estimate in the carrier's format</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Meet the field adjuster on site and walk every slope</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Prepare and submit supplements with evidence</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Invoice to match the approved scope, line for line</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Tell you when we think there is no claim to make</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">What we will not do</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Act as the adjuster on a roof we are contracted to repair. Texas does not allow it</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Offer to absorb, waive or rebate your deductible</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Interpret your policy for you or give legal advice</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Promise an outcome or a settlement figure up front</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Ask you to sign a contract before a scope is approved</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Encourage a claim on a roof with no storm damage on it</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              If the claim needs someone acting on your behalf rather than ours, that is a licensed
              public adjuster or an attorney, and we will say so. Those roles are separate from ours
              for a reason.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where Claim Work Sits in Our Storm Services
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Documentation and adjuster meetings are one stage of a storm job. Our{" "}
              <a
                href="/commercial-storm-hail/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                commercial storm, hail and wind
              </a>{" "}
              page covers the whole sequence (assessment, claim, repair and replacement) and is
              the better place to start if you have not worked out yet what your building needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work claims out of 2909 S Western St in Amarillo and across the surrounding
              Panhandle, including Canyon, Borger, Pampa, Dumas, Hereford, Plainview, Perryton and
              Bushland.
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
                  Should a roofer be present when the insurance adjuster inspects my roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It helps, because the adjuster is writing a scope from a single visit and a roofer
                  who has already walked and documented the roof can point to specific findings
                  rather than argue in generalities. We meet the field adjuster on site, walk the
                  same slopes and elevations, and show the test squares and photographs already in
                  the file. The adjuster still writes the scope; our job is to make sure nothing on
                  the roof goes unrecorded.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does an insurance company have to pay a roof claim in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Under the Texas Prompt Payment Act an insurer must acknowledge the claim within 15
                  days and pay or deny it within 60 days. Delayed payments accrue 18% annual
                  interest. You also have a two-year window from the date of loss to file. Those are
                  the deadlines that bind the carrier, and they are the reason we date-stamp every
                  piece of documentation that goes into a claim file.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is a supplement on a roof insurance claim?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A supplement is a request to revise an approved scope after something is found
                  that the original estimate did not include. Common triggers are deteriorated
                  decking discovered at tear-off, a layer count nobody knew about, flashing or edge
                  metal the field estimate missed, and code-required items the original scope left
                  out. A supplement is documentation rather than a negotiation, so it is submitted
                  with photographs, measurements and the code reference behind it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the difference between ACV and RCV on a roof claim?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Replacement cost value is what it costs to put the roof back today. Actual cash
                  value is that number minus depreciation for the age and condition of the old roof.
                  On a replacement cost policy the carrier usually releases the actual cash value
                  first and holds the depreciation back, then releases it once the work is complete
                  and invoiced. That withheld amount is called recoverable depreciation, and it is
                  recovered by documenting completed work rather than by asking for it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can my roofer handle the insurance claim for me?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  No, and be careful with any contractor who says otherwise. In Texas a roofing
                  contractor cannot act as the adjuster on a claim it is also contracted to repair,
                  and nobody should be offering to absorb your deductible. What a roofer can
                  legitimately do is document the roof, provide a line-item estimate, meet the
                  adjuster on site, and submit supplements with evidence. The claim stays yours and
                  the adjusting stays with licensed adjusters.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do roofs in Amarillo generate so many insurance claims?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo sits at the center of Hail Alley where dry desert air meets Gulf
                  moisture, and Potter County ranks in the top ten nationally for hail frequency.
                  The county has recorded 131 severe hail days since 2000, the area averages 8 to 12
                  hailstorms a year, and the largest stone on record here is 4.25 inches from May
                  2019. Add an annual average wind of 14.3 mph at 3,600 feet of elevation and claim
                  work is simply a normal part of owning a roof here.
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

        <InternalLinks currentCity="amarillo" currentService="storm-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Have Us on the Roof When the Adjuster Is</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free documentation of your roof, a line-item estimate, and we meet your adjuster on
            site. You keep the findings either way.
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

        <RelatedArticles pageSlug="insurance-claim-documentation-and-adjuster-meetings" />
      </div>
    </>
  );
}