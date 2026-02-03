import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Odessa | 5 Star',
  description: "Expert hail damage roof repair in Odessa TX. 24/7 emergency service, insurance claim help, Permian Basin specialists. Free inspections. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairOdessaTXPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can you inspect my Odessa roof after a hail storm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide same-day to 24-hour inspections throughout Odessa after major storms. For working families who need quick service, we offer early morning (7 AM) and evening (until 8 PM) inspection times. Our comprehensive inspection includes drone photography, attic assessment, and detailed documentation for your insurance claim."
        }
      },
      {
        "@type": "Question",
        "name": "What should Odessa homeowners know about the 2019 supercell hailstorm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The May 23, 2019 supercell dropped 4.5-inch hail across Odessa, causing over $100 million in damage. Many homeowners didn't realize their roofs were damaged until leaks appeared months later. The storm taught us that even if you don't see obvious damage, professional inspection is critical after any hail event in Odessa."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a building permit for hail damage roof repair in Odessa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, full roof replacements in Odessa require permits from the City of Odessa Building Inspection Department (432-335-4519, 411 W. 8th St). We handle all permit applications for you - no hassle for Odessa homeowners. Permits typically cost $150-400 depending on project scope."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to file a hail damage claim in Odessa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Texas law allows 1-2 years to file after a hail event, but we strongly recommend filing within 60 days. Odessa's frequent storms mean another event could complicate your claim. Plus, undiscovered damage worsens in our extreme heat - what starts as granule loss can become a major leak within months."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Odessa particularly vulnerable to hail damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odessa sits in Hail Alley where warm, moist Gulf air collides with dry desert air from the west. This creates violent updrafts that produce large hail. Combined with Odessa's flat terrain and lack of natural windbreaks, hailstorms can intensify quickly. Neighborhoods like Sherwood, Stonegate, and Mission Dorado have seen multiple severe events."
        }
      },
      {
        "@type": "Question",
        "name": "Will filing a hail damage claim affect my insurance rates in Odessa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weather-related claims typically have less impact than at-fault claims. However, Odessa's high claim frequency means some carriers have increased deductibles. The bigger risk is NOT filing - hidden damage that causes leaks later results in much larger claims that DO affect rates significantly."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hail Damage Roof Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "5 Star Commercial Roofing",
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Odessa",
        "addressRegion": "TX"
      },
      "telephone": "+18066226041",
      "areaServed": {
        "@type": "City",
        "name": "Odessa",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      }
    },
    "description": "Expert hail damage repair in Odessa, TX. Licensed contractor serving 150+ families. Free inspections, insurance assistance, and quality repairs using Class 4 impact-resistant materials.",
    "offers": {
      "@type": "Offer",
      "description": "Free hail damage inspections for Odessa properties"
    }
  };

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Odessa", url: "/hail-damage-repair-odessa-tx/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Hail Damage Repair in Odessa, TX</h1>
            <p className="hero-subtitle">Odessa Licensed Contractor | Served 150+ Families After the 2019 Supercell</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Inspection Today</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Lead Form - Above the Fold */}
      <div className="container-custom">
        <FadeIn>
          <section id="lead-form" className="section -mt-16 relative z-20">
            <div className="max-w-2xl mx-auto">
              <HighLevelForm
                title="Get Your Free Roof Inspection"
                subtitle="Fill out the form below and we'll contact you within 24 hours. No obligation."
              />
            </div>
          </section>
        </FadeIn>
      </div>


      <div className="container-custom py-12">
        {/* Introduction */}
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              <strong>Odessa homeowners know the threat all too well:</strong> In minutes, a Permian Basin supercell can unleash baseball-sized hail that destroys a roof you just paid off. The May 23, 2019 supercell that dropped 4.5-inch hail across Odessa caused over $100 million in damage - and taught us crucial lessons about storm preparedness.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              5 Star Commercial Roofing specializes in hail damage detection, insurance claim advocacy, and complete roof restoration for Odessa properties. As an <strong>Odessa licensed contractor</strong>, we've served over 150 families after major storms, we understand Ector County building codes, and we pull all permits - no hassle for you.
            </p>
            <div className="bg-brand-gold-light p-8 rounded-lg border-l-4 border-brand-gold">
              <p className="text-lg font-semibold text-brand-brown mb-3">Quick Response for Working Families</p>
              <p className="text-gray-700 mb-4">
                Many Odessa residents work in Midland or at Permian Basin oilfields with demanding schedules. We offer early morning (7 AM start) and evening inspections (until 8 PM) to accommodate your schedule. Serving Sherwood, Stonegate, Mission Dorado, and all Odessa neighborhoods.
              </p>
              <p className="text-gray-700">
                Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041)</a> for same-day inspection scheduling.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* The 2019 Supercell Section */}
        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-l-4 border-red-600">
            <h2 className="text-4xl font-bold mb-8 text-red-800">The 2019 Supercell: Lessons for Odessa Homeowners</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">What Happened on May 23, 2019</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At approximately 7:30 PM, a rapidly intensifying supercell moved across Odessa from the southwest. Within 20 minutes, the storm dropped hail ranging from golf ball to softball size (up to 4.5 inches in diameter) across wide swaths of the city. The National Weather Service recorded winds exceeding 70 mph alongside the hail - a devastating combination for roofing systems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Neighborhoods in west and central Odessa bore the brunt of the damage. Vehicles were totaled, windows shattered, and thousands of roofs sustained catastrophic damage. Insurance companies processed over $100 million in claims from this single event, making it one of the costliest hailstorms in Permian Basin history.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Critical Lessons Learned</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-brand-gold font-bold">1.</span>
                    <span><strong>Hidden damage is common:</strong> Many homeowners saw no obvious damage the next day, only to discover leaks 3-6 months later. Granule loss and shingle bruising aren't always visible from the ground but cause rapid failure in Odessa's intense heat.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold font-bold">2.</span>
                    <span><strong>Professional inspection is critical:</strong> Homeowners who delayed inspection often missed their filing window or discovered damage after another storm complicated the claim timeline.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold font-bold">3.</span>
                    <span><strong>Impact-resistant materials matter:</strong> Homes with Class 4 shingles sustained significantly less damage. After experiencing 2019, many Odessa homeowners upgraded to impact-resistant systems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold font-bold">4.</span>
                    <span><strong>Insurance timing is everything:</strong> The claims process was backed up for months. Homeowners who filed quickly got repairs completed before summer heat. Those who waited often faced 6+ month delays.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-gold-light p-6 rounded-lg">
                <p className="text-lg font-semibold text-brand-brown mb-2">Don't Wait for the Next Supercell</p>
                <p className="text-gray-700">
                  Odessa experiences severe hail every 2-3 years on average. Recent 2024 events confirm the pattern continues. After ANY hail event, schedule a professional inspection within 48 hours - even if you don't see obvious damage. Early detection protects your home and simplifies insurance claims.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Our Process */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Our Hail Damage Repair Process in Odessa</h2>

            <div className="space-y-8 max-w-4xl mx-auto">
              <InteractiveCard>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Comprehensive Inspection</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We arrive at your Odessa property within 24 hours (same-day available after major storms). Using professional drone photography, thermal imaging, and hands-on assessment, we document every hail impact, granule loss pattern, and compromised component.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our inspection includes attic assessment for interior damage, checking all flashing and ventilation components, and testing shingle adhesion - crucial in Odessa where high winds follow hail events. This comprehensive inspection is 100% free with zero obligation.
                    </p>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Detailed Insurance Documentation</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We prepare comprehensive damage reports that meet insurance company standards. Our documentation includes aerial imagery with marked damage locations, close-up photos showing granule loss, measurements of impact densities, and detailed scope of required repairs.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Working with Permian Basin Insurance, local State Farm and Farmers agents, and all major carriers, we know exactly what documentation they need. Many Odessa homeowners are surprised to learn their "minor" hail damage qualifies for complete roof replacement under their policy.
                    </p>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Adjuster Meeting & Claim Advocacy</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We meet your insurance adjuster at your Odessa property and walk them through every piece of damage. Having a professional roofing contractor present ensures nothing gets missed or undervalued.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We speak the adjuster's language and understand insurance protocols. If initial estimates seem low, we provide supplemental documentation and advocate for proper coverage. Our goal: get you every dollar your policy provides.
                    </p>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Odessa Building Permits & Code Compliance</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We handle all paperwork with the City of Odessa Building Inspection Department (432-335-4519, 411 W. 8th St). Permits for roof replacement typically cost $150-400 depending on project scope - we include this in your estimate so there are no surprises.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      As an Odessa licensed contractor familiar with Ector County building codes, we ensure your new roof meets all wind rating requirements and passes final inspection. You never have to visit City Hall or worry about code compliance.
                    </p>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">5</div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Roof Replacement</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Once your claim is approved and permits secured, we schedule installation at your convenience. We use Class 4 impact-resistant shingles specifically rated for hail - the same technology that protected homes during the 2019 supercell. These premium materials often qualify for 10-20% insurance discounts.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Most Odessa residential projects complete in 1-2 days. We monitor weather forecasts carefully and only begin when we have a clear window. Our crews clean up thoroughly each evening - important for families with children and pets in neighborhoods like Sherwood and Stonegate.
                    </p>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">6</div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-3">Final City Inspection & Warranty</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We coordinate the final inspection with City of Odessa building officials and ensure your project passes all requirements. You receive complete documentation for your records and future home sales.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Your new roof is backed by manufacturer warranties (up to 50 years on premium products) and our workmanship guarantee. We're a local contractor who'll be here for warranty service - not storm chasers who disappear after the check clears.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us */}
        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Why Odessa Homeowners Trust 5 Star Commercial Roofing</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <InteractiveCard>
                <div className="text-center">
                  <img src="/images/ResidentialServices.jpeg" alt="Licensed roofing contractor in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Odessa Licensed Contractor</h3>
                  <p className="text-gray-700">
                    Fully licensed for work in Odessa and Ector County. We understand local building codes, wind rating requirements, and city inspection procedures. Not storm chasers - we're here for the long term.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-center">
                  <img src="/images/hail-damage-3.jpg" alt="Hail damage repair expertise in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-3">2019 Storm Veterans</h3>
                  <p className="text-gray-700">
                    Served over 150 Odessa families after the May 2019 supercell. We know the unique damage patterns from Permian Basin hailstorms and what it takes to fully restore your roof.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-center">
                  <img src="/images/storm-damage-roof-repair.jpg" alt="Emergency storm response in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Fast Response Times</h3>
                  <p className="text-gray-700">
                    Same-day inspections available after storms. Early morning and evening appointments for working families. We know many Odessa residents commute to Midland - we work around your schedule.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-center">
                  <img src="/images/insurance-claims-roofing.jpg" alt="Insurance claims expertise in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Claim Experts</h3>
                  <p className="text-gray-700">
                    We've handled hundreds of claims with Permian Basin Insurance and all major carriers. We fight to maximize your coverage - many clients receive more than initial estimates.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-center">
                  <img src="/images/roof-inspection-texas.jpg" alt="Professional roof inspection in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-3">We Pull All Permits</h3>
                  <p className="text-gray-700">
                    No hassle for you - we handle all City of Odessa permit applications, inspections, and code compliance. You never have to visit 411 W. 8th St or worry about building department requirements.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-center">
                  <img src="/images/asphaltshingles.jpg" alt="Impact-resistant shingles in Odessa TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Impact-Resistant Materials</h3>
                  <p className="text-gray-700">
                    Class 4 hail-resistant shingles that withstand future Odessa storms. These premium materials qualify for insurance discounts (10-20% typical) and come with enhanced 50-year warranties.
                  </p>
                </div>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Common Damage Types */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Common Hail Damage in Odessa's Climate</h2>
            <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Odessa's combination of intense UV exposure, extreme temperature swings (below zero to 110°F+), and high winds makes hail damage particularly destructive. Here's what we commonly find:
            </p>

            <div className="max-w-4xl mx-auto space-y-6">
              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3 flex items-center gap-3">
                    <span className="text-3xl">🔴</span>
                    Granule Loss & Accelerated Aging
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hail impacts knock protective granules off asphalt shingles, exposing the asphalt layer to Odessa's brutal UV radiation. In milder climates, this might take years to cause problems. In Odessa's intense summer sun (often 40+ days over 100°F), exposed asphalt deteriorates rapidly - sometimes within 6-12 months. You'll see dark spots where granules are gone, and these areas become brittle and crack, leading to leaks.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3 flex items-center gap-3">
                    <span className="text-3xl">🔴</span>
                    Shingle Bruising & Fracturing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Large hail (2 inches+) creates "bruises" - soft spots where the impact compressed the shingle mat. These bruises break the waterproof seal and create weak points. Odessa's extreme temperature cycles cause these damaged areas to expand and contract repeatedly, leading to cracks and complete shingle failure. During the 2019 storm, many roofs had 20+ impacts per square - virtually guaranteeing failure.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3 flex items-center gap-3">
                    <span className="text-3xl">🔴</span>
                    Damaged Flashing, Vents & Penetrations
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Metal roof vents, pipe boots, chimney flashing, and valley flashing all get dented or cracked by hail. These components are critical waterproofing barriers. Even small dents can compromise seals, allowing water infiltration during Odessa's occasional heavy rain events. We've seen minor vent damage cause thousands in interior water damage when homeowners delayed repairs.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3 flex items-center gap-3">
                    <span className="text-3xl">🔴</span>
                    Compromised Wind Resistance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hail impacts loosen the adhesive strips that bond shingles together. This might not be immediately visible, but it's dangerous in Odessa where 50+ mph winds are common (particularly during spring storm season). Weakened shingles blow off during the next windstorm, creating an expensive emergency repair situation and exposing your home to water damage. After the 2019 hail, many Odessa homes experienced additional wind damage in subsequent storms because hail had compromised their roof integrity.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3 flex items-center gap-3">
                    <span className="text-3xl">🔴</span>
                    Hidden Attic & Decking Damage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Severe hail can actually penetrate shingles and damage roof decking underneath. We also find cracked or dislodged attic ventilation that allows superheated air (150°F+ in Odessa attics) to damage insulation and interior ceilings. Thermal imaging during our inspection reveals these hidden issues that adjusters might miss without professional documentation.
                  </p>
                </div>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Odessa Building Permits Section */}
        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Odessa Building Permits & Inspection Process</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">City of Odessa Requirements</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All roof replacements in Odessa require permits from the City of Odessa Building Inspection Department. This ensures your new roof meets Ector County wind ratings and current building codes - critical protection in Hail Alley.
                </p>
                <div className="bg-white p-6 rounded-lg mb-4">
                  <p className="font-semibold text-brand-brown mb-2">City of Odessa Building Inspection</p>
                  <p className="text-gray-700">📍 411 W. 8th Street, Odessa, TX 79761</p>
                  <p className="text-gray-700">📞 (432) 335-4519</p>
                  <p className="text-gray-700">🕐 Monday-Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">What We Handle For You</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Complete permit application:</strong> We submit all required documentation including project scope, materials specifications, and contractor licensing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Code compliance verification:</strong> We ensure your new roof meets current wind load requirements (typically 90+ mph rated for Odessa).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Inspector scheduling:</strong> We coordinate all required inspections and handle any follow-up items.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">✓</span>
                    <span><strong>Final approval documentation:</strong> You receive copies of all permits and final inspection approvals for your records.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-brown mb-3">Typical Permit Costs in Odessa</h3>
                <p className="text-gray-700 mb-3">Residential roof replacement permits typically range from $150-$400 depending on:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Square footage of roof</li>
                  <li>Complexity (multiple levels, steep pitch)</li>
                  <li>Additional structural work required</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  We include permit costs in your estimate - no hidden fees or surprises.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Neighborhood-Specific Insights */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Storm Patterns in Odessa Neighborhoods</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Sherwood</h3>
                  <p className="text-gray-700">
                    This established neighborhood saw heavy damage in 2019 due to older roof systems. Many homes built in the 1960s-70s were due for replacement anyway - the supercell just accelerated the timeline. We've helped dozens of Sherwood families upgrade to modern impact-resistant systems.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Stonegate</h3>
                  <p className="text-gray-700">
                    Higher-value homes in Stonegate often feature architectural shingles and complex roof designs with multiple levels. Hail damage assessment requires extra care in these properties - our drone photography captures every angle that ground inspection might miss.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Mission Dorado</h3>
                  <p className="text-gray-700">
                    Newer construction in Mission Dorado sometimes features builder-grade materials that don't hold up to Permian Basin hail. We help homeowners upgrade to Class 4 systems during insurance replacements - adding decades of protection.
                  </p>
                </div>
              </InteractiveCard>
            </div>

            <div className="mt-8 max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Serving all Odessa areas:</strong> West Odessa, North Odessa, Downtown, Parkway, Greenwood, and surrounding Ector County communities. Many of our clients work in Midland - we coordinate service across both cities for your convenience.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Insurance & Pricing */}
        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Insurance Coverage & Pricing in Odessa</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">What Your Insurance Typically Covers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Good news:</strong> Most hail damage in Odessa is covered 100% by your homeowner's insurance policy (minus your deductible). Texas insurance law requires coverage for weather-related damage, and the 2019 storm proved how seriously carriers take Permian Basin hail claims.
                </p>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-brand-brown mb-3">Standard Coverage Includes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3"><span className="text-brand-gold">✓</span> Complete tear-off and disposal of damaged roofing</li>
                    <li className="flex gap-3"><span className="text-brand-gold">✓</span> Premium underlayment and ice & water shield</li>
                    <li className="flex gap-3"><span className="text-brand-gold">✓</span> Class 4 impact-resistant shingles (upgraded from basic 3-tab)</li>
                    <li className="flex gap-3"><span className="text-brand-gold">✓</span> All flashing replacement (valleys, chimneys, walls)</li>
                    <li className="flex gap-3"><span className="text-brand-gold">✓</span> New roof vents, pipe boots, and ridge ventilation</li>
                    <li className="flex gap-3"><span className="text-brand-gold">✓</span> Odessa building permits and inspection fees</li>
                    <li className="flex gap-3"><span className="text-brand-gold">✓</span> Manufacturer and workmanship warranties</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Average Replacement Costs in Odessa</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-lg">
                    <p className="font-bold text-lg text-brand-brown mb-2">Small Home</p>
                    <p className="text-gray-600 mb-3">1,200-1,800 sq ft</p>
                    <p className="text-2xl font-bold text-brand-gold">$7,000-$11,000</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <p className="font-bold text-lg text-brand-brown mb-2">Medium Home</p>
                    <p className="text-gray-600 mb-3">1,800-2,500 sq ft</p>
                    <p className="text-2xl font-bold text-brand-gold">$11,000-$16,000</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <p className="font-bold text-lg text-brand-brown mb-2">Large Home</p>
                    <p className="text-gray-600 mb-3">2,500-3,500+ sq ft</p>
                    <p className="text-2xl font-bold text-brand-gold">$16,000-$25,000+</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 text-center italic">
                  With insurance approval, you typically pay only your deductible ($1,000-$2,500 for most Odessa policies)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Working with Local Odessa Insurance Agents</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We have established relationships with Permian Basin Insurance and local State Farm, Farmers, and Allstate agents throughout Odessa. This helps streamline the claims process and ensures proper documentation from day one.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you're uncertain about your coverage or concerned about rate impacts, we're happy to discuss the process before you file. Our free inspection means you can get professional assessment before making any commitments.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">How quickly can you inspect my Odessa roof after a hail storm?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide same-day to 24-hour inspections throughout Odessa after major storms. For working families who need quick service, we offer early morning (7 AM) and evening (until 8 PM) inspection times. Our comprehensive inspection includes drone photography, attic assessment, and detailed documentation for your insurance claim. During widespread events (like the 2019 supercell), we expand crews to accommodate everyone quickly.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">What should Odessa homeowners know about the 2019 supercell hailstorm?</h3>
                <p className="text-gray-700 leading-relaxed">
                  The May 23, 2019 supercell dropped 4.5-inch hail across Odessa, causing over $100 million in damage. Many homeowners didn't realize their roofs were damaged until leaks appeared months later - the combination of granule loss and Odessa's intense summer heat accelerated failures. The storm taught us that even if you don't see obvious damage, professional inspection is critical after any hail event. Hidden damage in Odessa's climate can lead to catastrophic failure within 6-12 months.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do I need a building permit for hail damage roof repair in Odessa?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, full roof replacements in Odessa require permits from the City of Odessa Building Inspection Department (432-335-4519, 411 W. 8th St). We handle all permit applications for you - no hassle for Odessa homeowners. Permits typically cost $150-400 depending on project scope and ensure your new roof meets Ector County wind ratings and current building codes. This protects your home and maintains resale value.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long do I have to file a hail damage claim in Odessa?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Texas law allows 1-2 years to file after a hail event, but we strongly recommend filing within 60 days. Odessa's frequent storms mean another event could complicate your claim timeline. Plus, undiscovered damage worsens rapidly in our extreme heat - what starts as granule loss can become a major leak within months. The sooner you file, the sooner you get protection. After the 2019 storm, homeowners who filed quickly were repaired before summer; those who waited faced 6+ month delays.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">What makes Odessa particularly vulnerable to hail damage?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Odessa sits in Hail Alley where warm, moist Gulf air collides with dry desert air from the west. This creates violent updrafts capable of producing softball-sized hail. Combined with Odessa's flat terrain and lack of natural windbreaks, hailstorms can intensify quickly with little warning. Our location in the Permian Basin also means temperature extremes that accelerate hail damage - 110°F summer days cause rapid deterioration of compromised shingles. Neighborhoods like Sherwood, Stonegate, and Mission Dorado have all experienced multiple severe events.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Will filing a hail damage claim affect my insurance rates in Odessa?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Weather-related claims typically have less impact than at-fault claims (like backing into your garage). However, Odessa's high claim frequency means some carriers have increased deductibles or adjusted coverage in recent years. The bigger risk is NOT filing - hidden hail damage that causes interior water damage later results in much larger claims that DO affect rates significantly. We recommend discussing your specific policy with your agent, but in most cases, filing a legitimate hail claim is the right financial decision.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do Class 4 impact-resistant shingles really make a difference in Odessa?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. During the 2019 supercell, homes with Class 4 shingles sustained significantly less damage than those with standard 3-tab or basic architectural shingles. Class 4 materials are tested to withstand 2-inch steel balls dropped from 20 feet - roughly equivalent to large hail impact. They also qualify for 10-20% insurance discounts in most cases. Given Odessa's hail frequency (major events every 2-3 years on average), Class 4 shingles typically pay for themselves within one hail season.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <h3 className="text-xl font-bold text-brand-brown mb-3">I work in Midland but live in Odessa - do you serve both cities?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! Many of our clients work in Midland's energy sector while living in Odessa. We coordinate service across both twin cities and understand the challenges of commuting schedules. That's why we offer early morning and evening inspection appointments. We also serve properties in both locations - if you have a home in Odessa and commercial building in Midland, we can handle both under one service agreement.
                </p>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Emergency Services */}
        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-3xl font-bold mb-6 text-red-700">24/7 Emergency Hail Damage Services in Odessa</h2>

            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              <strong>Active leak after hail storm?</strong> Don't wait - water damage compounds quickly in Odessa's climate. High humidity after storms combined with extreme heat creates perfect conditions for mold growth and structural damage. We provide 24/7 emergency tarping and temporary repairs throughout Odessa and Ector County.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl text-red-700 mb-3">Emergency Services Include:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Same-day emergency tarping (available 24/7)</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Temporary leak repairs and water diversion</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Interior water damage assessment</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Emergency board-up for severe damage</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Priority scheduling for permanent repairs</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Documentation for insurance emergency claims</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl text-red-700 mb-3">Rapid Response Coverage:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex gap-3"><span className="text-red-600">✓</span> All Odessa neighborhoods</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Sherwood, Stonegate, Mission Dorado priority</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> West Odessa and North Odessa</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Midland (twin city coordination)</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> All of Ector County</li>
                  <li className="flex gap-3"><span className="text-red-600">✓</span> Surrounding Permian Basin communities</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-xl font-bold text-red-700 mb-3">Emergency Service Available 24/7</p>
              <p className="text-4xl font-bold text-brand-gold mb-3">
                <a href="tel:8066226041" className="hover:underline">(806) 622-6041</a>
              </p>
              <p className="text-gray-700 text-lg">
                For active leaks or severe storm damage, call immediately - even nights and weekends
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Get Your Free Hail Damage Inspection in Odessa</h2>
            <p className="cta-text max-w-4xl mx-auto">
              Don't let hail damage compromise your Odessa home. As licensed Odessa contractors who served 150+ families after the 2019 supercell, we know Permian Basin storms. We handle everything: inspection, insurance claims, permits, and expert installation. Most repairs are covered by insurance - you typically pay only your deductible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule Free Inspection
              </a>
            </div>
            <p className="text-white/90 mt-6 text-lg">
              Early morning & evening appointments available for working families
            </p>
          </section>
        </FadeIn>

        {/* Related Links */}
        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Odessa Roofing Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/odessa-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                All Odessa Roofing Services
              </a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Residential Roofing
              </a>
              <span className="text-gray-400">•</span>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Midland Roofing (Twin City)
              </a>
              <span className="text-gray-400">•</span>
              <a href="/emergency-roof-repair-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Emergency Repairs
              </a>
              <span className="text-gray-400">•</span>
              <a href="/metal-roof-installation-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Metal Roofing
              </a>
              <span className="text-gray-400">•</span>
              <a href="/blog/how-to-file-hail-damage-insurance-claim/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Filing Insurance Claims
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </div>
  );
}
