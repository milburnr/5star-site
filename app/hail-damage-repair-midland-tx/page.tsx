import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Midland | 5 Star',
  description: "Expert hail damage roof repair in Midland TX. 24/7 emergency service, insurance claim help, Permian Basin specialists. Free inspections. Call 5 Star Roofing (806) 622-6041.",};

export default function HailDamageRepairMidlandPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Midland", url: "/hail-damage-repair-midland-tx/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-midland-30-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Hail Damage Repair in Midland, TX</h1>
            <p className="hero-subtitle">Record-Breaking Hailstorm Specialists | 200+ Midland Insurance Claims Handled</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041 Now</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Hail Damage Inspection</a>
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
              <strong>Midland just experienced history: a 7.25-inch hailstone in May 2024 - one of Texas's largest ever recorded.</strong> If you're a Midland homeowner or business owner, your roof likely sustained significant damage from this storm or the June 2024 event that produced 6.14-inch hailstones. These weren't ordinary hail events - they were catastrophic storms that devastated roofs across Grassland Estates, Green Tree, Club Estates, and neighborhoods throughout Midland County.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              5 Star Commercial Roofing is Midland's trusted hail damage repair specialist. We're a licensed Midland contractor who has handled over 200 insurance claims for local homeowners and businesses. We know Midland building codes, work with all major Midland insurance adjusters, and provide same-day emergency inspections throughout Midland County. <strong>Your roof suffered record-breaking hail damage - let us help you get it properly repaired through your insurance.</strong>
            </p>
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-600">
              <p className="text-lg font-semibold text-red-700 mb-2">URGENT: May &amp; June 2024 Hailstorm Deadlines Approaching</p>
              <p className="text-gray-700 mb-4">
                If your Midland property was damaged by the May 2024 (7.25" hailstone) or June 2024 (6.14" hailstone) storms, your insurance claim deadline is approaching. Texas policies typically give 1-2 years from the storm date, but insurance companies prioritize early filers. The longer you wait, the harder claims become.
              </p>
              <p className="font-semibold text-gray-900">
                Call <a href="tel:8066226041" className="text-brand-gold hover:underline">(806) 622-6041</a> for a free inspection before it's too late.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Why Midland's Hail is Uniquely Destructive */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Why Midland's Hail is Uniquely Destructive</h2>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Midland sits in an especially dangerous section of "Hail Alley" - the corridor from West Texas to Nebraska that experiences the nation's most frequent and severe hailstorms. But Midland's 2024 hail events weren't just severe - they were historic, record-breaking catastrophes that exceeded what most roofing systems are designed to withstand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <InteractiveCard>
                <img src="/images/hail-damage-3.jpg" alt="Record hail damage in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Record-Breaking Hailstone Sizes</h3>
                <p className="text-gray-700 mb-4">
                  <strong>May 2024:</strong> 7.25-inch diameter hailstone - nearly the size of a volleyball. This ranks among the largest hailstones ever recorded in Texas history. Standard roofing shingles are tested to withstand 2-inch hail. At 7.25 inches, these hailstones weren't just damaging roofs - they were punching through them entirely.
                </p>
                <p className="text-gray-700">
                  <strong>June 2024:</strong> 6.14-inch diameter hailstone - grapefruit-sized and equally devastating. Two catastrophic events in less than 60 days means many Midland roofs sustained compounding damage that insurance companies must address.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <img src="/images/storm-damage-roof-repair.jpg" alt="Storm damage to roof in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Terminal Velocity Impact Forces</h3>
                <p className="text-gray-700">
                  When a 7.25-inch hailstone falls from thunderstorm heights (often 30,000+ feet), it reaches terminal velocity of 100+ mph before impact. The kinetic energy from a softball-sized ice ball traveling at highway speeds is enough to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                  <li>Shatter roof shingles completely</li>
                  <li>Dent metal flashing and vents beyond repair</li>
                  <li>Crack roof decking underneath</li>
                  <li>Compromise structural roof integrity</li>
                </ul>
              </InteractiveCard>

              <InteractiveCard>
                <img src="/images/roof-inspection-texas.jpg" alt="Roof inspection in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Midland's Extreme Temperature Cycling</h3>
                <p className="text-gray-700">
                  Midland experiences temperature extremes that accelerate hail damage deterioration. Summer temperatures routinely exceed 100°F, while winter nights can drop below 20°F. Hail-damaged shingles expand and contract in these cycles, causing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                  <li>Rapid crack propagation in bruised areas</li>
                  <li>Accelerated granule loss from impacts</li>
                  <li>Seal failure on damaged shingle tabs</li>
                  <li>Water infiltration during freeze-thaw cycles</li>
                </ul>
              </InteractiveCard>

              <InteractiveCard>
                <img src="/images/asphaltshingles.jpg" alt="Quality roofing shingles for Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brand-brown mb-3">High Wind Exposure in the Permian Basin</h3>
                <p className="text-gray-700">
                  Midland's open Permian Basin geography offers zero wind protection. After hail loosens adhesive strips and compromises shingle integrity, Midland's frequent 40-50 mph winds (and occasional 60-70 mph gusts) tear off damaged shingles that would survive in calmer climates. One hailstorm followed by one windstorm = catastrophic roof failure.
                </p>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Our Comprehensive Hail Damage Repair Process */}
        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Our Midland Hail Damage Repair Process</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Emergency Contact &amp; Scheduling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Call us at <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a> and we'll schedule your free inspection within 24-48 hours. After major Midland hailstorms, we work extended hours including weekends to accommodate everyone. We serve all Midland neighborhoods: Grassland Estates, Green Tree, Club Estates, Fairview Park, Mission Dorado, and throughout Midland County.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Roof Inspection Using Advanced Technology</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our licensed Midland roofing contractors conduct a thorough inspection using drone photography, thermal imaging, and professional-grade equipment. We document every piece of damage - from obvious shingle fractures to subtle granule loss patterns that insurance adjusters require. We inspect shingles, underlayment, flashing, vents, gutters, and the roof structure itself. The inspection typically takes 60-90 minutes and includes an attic assessment to check for water infiltration or structural damage.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Claim Documentation Preparation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We prepare a comprehensive damage report that meets insurance company requirements. This includes aerial drone photos, close-up damage images with measurement markers, wind speed data from the specific storm date, and a detailed scope of work. Having handled 200+ Midland insurance claims, we know exactly what State Farm, Farmers, Allstate, USAA, and other carriers need to approve claims. We work with all major Midland insurance agents including Roy Nelson State Farm, Eddy Ohlenburg State Farm, and local adjusters throughout Midland County.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Adjuster Meeting &amp; Advocacy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We schedule and attend the insurance adjuster's inspection at your Midland property. This is critical - adjusters often miss damage that contractors identify, and having us present ensures nothing gets overlooked. We speak the adjuster's technical language, point out code violations that require upgrades, and advocate for full replacement when damage exceeds thresholds. Many Midland homeowners are surprised to learn their "minor" hail damage qualifies for complete roof replacement coverage.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">5</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Midland Building Permit &amp; Code Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once your claim is approved, we handle all permit requirements with the City of Midland Development Services (432-685-7357, located at 300 N. Loraine St Suite 750). Midland requires building permits for roof replacements, with fees typically ranging from $150-350 depending on project scope. We ensure your new roof meets all Midland County building codes, including wind rating requirements for the Permian Basin's high-wind environment and proper ventilation standards for Texas climate conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">6</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Roof Replacement Installation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We schedule your roof replacement at your convenience, typically completing most Midland residential projects in 1-2 days. We use premium Class 4 impact-resistant shingles specifically rated to withstand future hailstorms - protecting your investment and often qualifying for insurance discounts of 10-30%. For Midland's many high-value oil industry homes, we offer premium architectural shingles with enhanced warranties up to 50 years. All work is performed by licensed, insured crews with 10+ years experience in Permian Basin conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">7</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">City of Midland Final Inspection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We coordinate the final inspection with City of Midland building inspectors to ensure code compliance. The inspection typically occurs within 3-5 business days after completion. We handle all coordination and address any inspector notes. Once approved, we provide you with the signed-off permit documentation, manufacturer warranties (typically 30-50 years on materials), and our workmanship warranty (10 years on installation). Your new roof is fully documented and guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Midland Building Code & Permit Requirements */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Midland Building Code &amp; Permit Requirements</h2>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Understanding Midland's building requirements is crucial for proper hail damage repair. As a licensed Midland contractor, we handle all permit and code compliance requirements to ensure your roof replacement is done legally and correctly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">City of Midland Development Services</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Address:</strong> 300 N. Loraine St, Suite 750, Midland, TX 79701</p>
                  <p><strong>Phone:</strong> <a href="tel:4326857357" className="text-brand-gold hover:underline">(432) 685-7357</a></p>
                  <p><strong>Permit Requirements:</strong> Building permits required for all roof replacements in Midland city limits</p>
                  <p><strong>Typical Permit Costs:</strong> $150-350 depending on project size and scope</p>
                  <p><strong>Processing Time:</strong> 3-5 business days for standard residential permits</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">Midland County Building Codes</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Wind Rating Requirements:</strong> Minimum 110 mph wind rating for Permian Basin exposure</p>
                  <p><strong>Hail Impact Resistance:</strong> Class 4 impact-resistant shingles recommended (often insurance required)</p>
                  <p><strong>Ventilation Standards:</strong> Proper attic ventilation per Texas code (1:150 ratio minimum)</p>
                  <p><strong>Flashing Requirements:</strong> Upgraded flashing around chimneys, vents, valleys per 2021 IBC</p>
                  <p><strong>Inspection Requirements:</strong> Final city inspection required before project sign-off</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold-light p-6 rounded-lg mt-8 max-w-4xl mx-auto">
              <p className="font-semibold text-brand-brown mb-2">We Handle Everything</p>
              <p className="text-gray-700">
                As a licensed Midland contractor, we manage all permit applications, code compliance requirements, and city inspections. You don't have to deal with bureaucracy - we handle the paperwork while you focus on getting your home or business protected. This is included in our service at no additional charge.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Midland Property Owners Choose Us */}
        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Why Midland Property Owners Trust 5 Star Commercial Roofing</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <InteractiveCard>
                <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Licensed Midland Contractor - Not Storm Chasers</h3>
                <p className="text-gray-700">
                  We're a licensed contractor serving Midland for over 10 years. We're not out-of-state storm chasers who disappear after the insurance check clears. We're here for your warranty needs 10, 20, 30 years from now. Our reputation in Midland County matters - we earn it one roof at a time.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <img src="/images/insurance-claims-roofing.jpg" alt="Insurance claims assistance in Midland TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">200+ Midland Insurance Claims Handled</h3>
                <p className="text-gray-700">
                  We've successfully managed over 200 insurance claims for Midland homeowners and businesses. We know how State Farm, Farmers, Allstate, USAA, and every other carrier operates. We work with all major Midland insurance adjusters and agents. Our expertise often gets homeowners MORE coverage than they expected.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Midland Building Code Experts</h3>
                <p className="text-gray-700">
                  We know Midland building codes inside and out. We maintain relationships with City of Midland Development Services inspectors and ensure every project meets or exceeds code requirements. This protects you from future issues and ensures your insurance coverage remains valid.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Same-Day Emergency Response</h3>
                <p className="text-gray-700">
                  After major hailstorms hit Midland, we provide same-day emergency inspections and tarping services. The sooner you file your claim, the sooner you get your new roof. We prioritize Midland residents and work extended hours after storms to accommodate everyone quickly.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Premium Materials for High-Value Midland Homes</h3>
                <p className="text-gray-700">
                  Midland's oil industry creates a substantial population of high-value homes requiring premium roofing. We offer top-tier architectural shingles, designer color options, and enhanced warranties up to 50 years. Class 4 impact-resistant materials protect against future hailstorms and often qualify for 10-30% insurance discounts.
                </p>
              </InteractiveCard>

              <InteractiveCard>
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial &amp; Residential Expertise</h3>
                <p className="text-gray-700">
                  We handle both residential and commercial hail damage throughout Midland. From Grassland Estates homes to downtown Midland office buildings, we have the expertise, equipment, and licensing for projects of any size. Insurance companies trust our commercial documentation and estimates.
                </p>
              </InteractiveCard>
            </div>
          </section>
        </FadeIn>

        {/* Common Hail Damage Issues in Midland */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Common Hail Damage Issues in Midland Properties</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Catastrophic Shingle Fractures from Record Hailstones</h3>
                <p className="text-gray-700">
                  The May 2024 (7.25") and June 2024 (6.14") hailstones didn't just dent shingles - they shattered them. Unlike typical hail damage that creates bruising or granule loss, these record-breaking stones caused complete shingle fractures, exposing underlayment and roof decking. This type of damage requires immediate full roof replacement - partial repairs won't protect your Midland home.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Severe Granule Loss &amp; UV Exposure Acceleration</h3>
                <p className="text-gray-700">
                  Hail impacts knock protective granules off asphalt shingles, exposing the asphalt base layer to Midland's intense UV radiation. With 300+ days of sunshine annually and summer temperatures exceeding 100°F, granule-stripped shingles deteriorate rapidly - often within 12-18 months instead of the normal 15-20 year lifespan. You'll see excessive granules in gutters and bare spots on shingles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Shingle Bruising &amp; Temperature Cycle Cracking</h3>
                <p className="text-gray-700">
                  Large hail creates "bruises" - soft spots where the impact compresses the shingle without immediately breaking through. These bruised areas lose structural integrity and fail when exposed to Midland's extreme temperature cycles (100°F+ summers, below-freezing winters). The expansion/contraction cycles cause bruised areas to crack, allowing water infiltration that leads to interior damage and mold.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Damaged Metal Flashing, Vents &amp; Roof Penetrations</h3>
                <p className="text-gray-700">
                  Roof vents, chimney flashing, pipe boots, and valley flashing are often dented or cracked by large hail. These components are critical for waterproofing - when damaged, they WILL leak. Insurance companies sometimes try to approve only shingle replacement, but we document ALL damaged components to ensure comprehensive coverage. Midland's occasional heavy rain events will find every weakness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Compromised Wind Resistance &amp; Blow-Off Risk</h3>
                <p className="text-gray-700">
                  Even when hail damage isn't immediately visible, impacts loosen the adhesive strips that seal shingles down. With Midland's Permian Basin location offering zero wind protection and frequent 40-50 mph winds (plus occasional 60-70 mph gusts), weakened shingles blow off during the next windstorm. One hailstorm followed by one windstorm = catastrophic roof failure requiring emergency tarping and immediate replacement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hidden Structural Damage from Extreme Impact Forces</h3>
                <p className="text-gray-700">
                  Seven-inch hailstones traveling at terminal velocity can damage more than just shingles. We've seen roof decking cracks, rafter damage, and compromised structural integrity from Midland's 2024 storms. Our inspections include attic assessments and structural evaluations that many contractors skip. If structural damage exists and isn't documented, your insurance claim won't cover the full repair cost.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Pricing & Insurance */}
        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Hail Damage Repair Costs &amp; Insurance Coverage in Midland</h2>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Excellent news for Midland homeowners:</strong> Most hail damage repairs are covered 100% by your homeowner's insurance policy, minus your deductible. After the May 2024 and June 2024 record hailstorms, insurance companies are approving complete roof replacements throughout Midland because the damage exceeds all repair thresholds.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-3">What Insurance Typically Covers:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Complete tear-off and disposal of damaged roofing materials</li>
                  <li>New synthetic underlayment and ice/water shield</li>
                  <li>Premium Class 4 impact-resistant shingles (hail-rated)</li>
                  <li>All metal flashing, pipe boots, roof vents, and accessories</li>
                  <li>Ridge ventilation for proper Midland attic airflow</li>
                  <li>Drip edge and gutter apron installation</li>
                  <li>City of Midland building permit fees</li>
                  <li>Manufacturer and workmanship warranties</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-3">Average Midland Roof Replacement Costs:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Small Home (1,200-1,800 sq ft):</strong><br/>
                    $8,000 - $12,000 total cost
                  </li>
                  <li>
                    <strong>Medium Home (1,800-2,500 sq ft):</strong><br/>
                    $12,000 - $17,000 total cost
                  </li>
                  <li>
                    <strong>Large Home (2,500-3,500 sq ft):</strong><br/>
                    $17,000 - $26,000 total cost
                  </li>
                  <li>
                    <strong>Premium High-Value Home (3,500+ sq ft):</strong><br/>
                    $26,000 - $45,000+ total cost
                  </li>
                </ul>
                <p className="mt-4 italic text-gray-600">
                  Remember: If approved by insurance (which most post-2024 hailstorm claims are), you typically only pay your deductible ($1,000-$2,500 for most policies). Insurance covers the remainder.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg text-brand-brown mb-3">Working with Midland Insurance Agents &amp; Adjusters</h3>
              <p className="text-gray-700 mb-4">
                We work with all major insurance companies and Midland-area agents including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>State Farm:</strong> Roy Nelson Agency, Eddy Ohlenburg Agency, and other Midland State Farm agents</li>
                <li><strong>Farmers Insurance:</strong> Multiple Midland locations</li>
                <li><strong>Allstate, USAA, Nationwide:</strong> All major carriers</li>
                <li><strong>Local Independent Agents:</strong> Throughout Midland County</li>
              </ul>
              <p className="text-gray-700">
                We know what each carrier requires for claim approval and have established relationships with adjusters serving Midland. This expertise translates to faster approvals and more comprehensive coverage for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg mt-6">
              <p className="font-semibold text-brand-brown mb-2">Free Inspection &amp; Insurance Estimate</p>
              <p className="text-gray-700">
                We provide free hail damage inspections and detailed insurance estimates at no cost with zero obligation. If your claim isn't approved, you owe us nothing. We only proceed when your insurance company approves coverage and you choose to work with us. Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a> to schedule.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Emergency Services */}
        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-3xl font-bold mb-6 text-red-700">24/7 Emergency Hail Damage Services in Midland</h2>

            <p className="text-lg text-gray-800 mb-6">
              <strong>Active leak after the May or June 2024 hailstorms?</strong> We provide 24/7 emergency tarping and temporary repairs throughout Midland County. Don't wait - water damage compounds rapidly and can lead to mold growth, ceiling collapse, ruined insulation, and destroyed belongings worth far more than your roof.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-xl text-red-700 mb-3">Emergency Services Include:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>✓ Emergency roof tarping (same-day available)</li>
                  <li>✓ Temporary leak repairs and water diversion</li>
                  <li>✓ Water damage mitigation and containment</li>
                  <li>✓ Emergency board-up for severe roof damage</li>
                  <li>✓ Interior damage documentation for insurance</li>
                  <li>✓ Priority scheduling for permanent repairs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl text-red-700 mb-3">Midland Coverage Area:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>✓ All Midland city neighborhoods</li>
                  <li>✓ Grassland Estates, Green Tree, Club Estates</li>
                  <li>✓ Fairview Park, Mission Dorado, Polo Club</li>
                  <li>✓ All of Midland County</li>
                  <li>✓ Odessa area (20-minute response)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-red-700 mb-2">EMERGENCY: Call Now for Immediate Service</p>
              <p className="text-2xl font-bold text-brand-gold mb-2">
                <a href="tel:8066226041" className="hover:underline">(806) 622-6041</a>
              </p>
              <p className="text-gray-700">Available 24/7/365 for roofing emergencies throughout Midland County</p>
            </div>
          </section>
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Frequently Asked Questions About Midland Hail Damage Repair</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How quickly can you inspect my Midland property after the May or June 2024 hailstorms?</h3>
                <p className="text-gray-700">
                  We typically schedule inspections within 24-48 hours throughout Midland. After the historic May 2024 (7.25" hailstone) and June 2024 (6.14" hailstone) events, we've been working extended hours including weekends to accommodate all Midland homeowners. The inspection takes 60-90 minutes and includes drone photography, attic assessment, and complete damage documentation for your insurance claim.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">My roof looks OK from the ground - do I really have hail damage?</h3>
                <p className="text-gray-700">
                  Almost certainly YES if you're in Midland. The May and June 2024 storms produced record-breaking hailstones that damaged virtually every roof in their paths. Hail damage often isn't visible from the ground - you need to be on the roof with professional training to identify granule loss patterns, shingle bruising, and subtle fractures. Many Midland homeowners who thought they had "no damage" were shocked when our inspection revealed thousands of dollars in hail impacts. Don't leave money on the table - get a free professional inspection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Will filing a hail damage claim raise my Midland insurance rates?</h3>
                <p className="text-gray-700">
                  Weather-related claims (like hail damage) are treated differently than at-fault claims in Texas. Most insurance companies don't penalize homeowners for filing storm damage claims - it's what you pay premiums for. However, failing to repair hail damage and then having a leak or wind blow-off causes much larger claims later, which CAN affect rates. We recommend calling your Midland insurance agent (like Roy Nelson at State Farm or your local Farmers agent) to discuss your specific policy. What we can tell you: Repairing documented hail damage promptly protects both your home and your insurance standing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long do I have to file a hail damage claim in Midland?</h3>
                <p className="text-gray-700">
                  Most Texas homeowner policies give you 1-2 years from the storm date to file claims. For the May 2024 storm, your deadline is approximately May 2025-2026 (depending on your policy). For June 2024, it's June 2025-2026. However, we STRONGLY recommend filing immediately. The sooner you file, the sooner you get your new roof. Plus, if another hailstorm hits Midland before your first claim is resolved, things get extremely complicated with overlapping damage claims. File early to avoid issues and get priority scheduling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do I need to replace my entire roof or can you just repair the damaged sections?</h3>
                <p className="text-gray-700">
                  After the May and June 2024 storms, virtually all Midland roofs with damage require complete replacement - partial repairs aren't viable. Insurance companies approve full replacement when hail damage exceeds thresholds (typically 8-10 impacts per 100 square feet). The 7.25" and 6.14" hailstones caused widespread damage across entire roof planes. Additionally, it's impossible to match 5-10 year old shingles with new ones (different color batches), and partial repairs don't solve underlying structural issues. Insurance knows this - they'll approve full replacement for properly documented claims.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What if my insurance company denies my Midland hail damage claim?</h3>
                <p className="text-gray-700">
                  Denials happen, but they're rarely final - especially for Midland's 2024 record hailstorms. We can request re-inspection with different adjusters, provide additional storm documentation (NOAA reports showing 7.25" hailstones), submit supplemental damage photos, or help you work with a public adjuster if needed. In 10+ years handling Midland insurance claims, we've successfully gotten many initially-denied claims approved by providing the comprehensive evidence insurance companies require. The May and June 2024 storms are well-documented catastrophic events - proper documentation should result in approval.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long does a hail damage roof replacement take in Midland?</h3>
                <p className="text-gray-700">
                  Most residential roof replacements in Midland take 1-2 days once we begin. Larger homes or complex roof designs may require 3 days. We monitor Midland weather forecasts carefully and only start when we have a clear weather window (no rain or high winds predicted). From insurance claim approval to project completion, the entire timeline typically runs 3-5 weeks depending on material delivery, City of Midland permit processing, and scheduling. During peak storm season, timelines may extend due to high demand - another reason to file your claim early.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do you handle commercial hail damage in Midland as well?</h3>
                <p className="text-gray-700">
                  Absolutely. We're licensed for both residential and commercial roofing throughout Midland County. We've handled hail damage claims for office buildings, retail centers, warehouses, and industrial facilities across Midland. Commercial claims require more detailed documentation, engineering assessments, and code compliance - we have the expertise and equipment for projects of any size. Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a> to discuss your commercial property's hail damage needs.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Schedule Your Free Midland Hail Damage Inspection Today</h2>
            <p className="cta-text mb-6">
              The May and June 2024 record hailstorms damaged thousands of Midland roofs. Don't wait until leaks develop or your claim deadline passes. We're Midland's licensed hail damage specialists - we handle everything from inspection to insurance claims to City of Midland permits to final installation.
            </p>
            <p className="cta-text mb-8">
              <strong>Most repairs are covered 100% by insurance (minus your deductible). You have nothing to lose and everything to gain.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule Free Inspection Online
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Related Links */}
        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Midland Roofing Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                All Midland Roofing Services
              </a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Residential Roofing Midland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Commercial Roofing Midland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/flat-roof-repair-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Flat Roof Repair
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Midland",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "telephone": "+18066226041"
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
            "description": "Expert hail damage roof repair in Midland, TX. Specialists in record-breaking 2024 hailstorm damage. Licensed Midland contractor. 200+ insurance claims handled. Free inspections and full insurance claim assistance."
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
                "name": "How quickly can you inspect my Midland property after the May or June 2024 hailstorms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We typically schedule inspections within 24-48 hours throughout Midland. After the historic May 2024 (7.25\" hailstone) and June 2024 (6.14\" hailstone) events, we've been working extended hours including weekends to accommodate all Midland homeowners. The inspection takes 60-90 minutes and includes drone photography, attic assessment, and complete damage documentation for your insurance claim."
                }
              },
              {
                "@type": "Question",
                "name": "Will filing a hail damage claim raise my Midland insurance rates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Weather-related claims (like hail damage) are treated differently than at-fault claims in Texas. Most insurance companies don't penalize homeowners for filing storm damage claims - it's what you pay premiums for. However, failing to repair hail damage and then having a leak or wind blow-off causes much larger claims later, which CAN affect rates."
                }
              },
              {
                "@type": "Question",
                "name": "How long do I have to file a hail damage claim in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Texas homeowner policies give you 1-2 years from the storm date to file claims. For the May 2024 storm, your deadline is approximately May 2025-2026 (depending on your policy). However, we STRONGLY recommend filing immediately. The sooner you file, the sooner you get your new roof."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to replace my entire roof or can you just repair the damaged sections?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "After the May and June 2024 storms, virtually all Midland roofs with damage require complete replacement - partial repairs aren't viable. Insurance companies approve full replacement when hail damage exceeds thresholds (typically 8-10 impacts per 100 square feet). The 7.25\" and 6.14\" hailstones caused widespread damage across entire roof planes."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a hail damage roof replacement take in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most residential roof replacements in Midland take 1-2 days once we begin. Larger homes or complex roof designs may require 3 days. From insurance claim approval to project completion, the entire timeline typically runs 3-5 weeks depending on material delivery, City of Midland permit processing, and scheduling."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
