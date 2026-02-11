import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Amarillo | 5 Star',
  description: 'Hail Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function HailDamageAmarilloPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Hail Damage Roof Repair",
                      "url": "/hail-damage-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/hail-damage-roof-repair-amarillo-texas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-50-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Hail Damage Roof Repair in Amarillo, TX</h1>
            <p className="hero-subtitle">Expert Storm Damage Assessment & Insurance Claim Assistance</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041 Now</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Schedule Free Inspection</a>
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
              <strong>Did a recent hail storm damage your Amarillo roof?</strong> You're not alone. Amarillo sits in "Hail Alley," experiencing severe hail storms multiple times per year. Even small hail can cause thousands of dollars in damage that leads to leaks, premature aging, and expensive repairs down the road.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              5 Star Commercial Roofing specializes in hail damage detection, insurance documentation, and complete roof restoration for Amarillo homeowners and businesses. <strong>We offer free inspections and handle your entire insurance claim from start to finish.</strong>
            </p>
            <div className="bg-brand-gold-light p-8 rounded-lg border-l-4 border-brand-gold">
              <p className="text-lg font-semibold text-brand-brown mb-2">🚀 Fast Response Throughout Amarillo</p>
              <p className="text-gray-700">
                From Wolflin to Southwest Amarillo, we provide same-day emergency inspections after major storms.
                Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a> to schedule yours now.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Our Process */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Our Hail Damage Repair Process in Amarillo</h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Comprehensive Inspection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We arrive at your Amarillo property within 24-48 hours and conduct a thorough roof inspection. Using drones and professional photography, we document every piece of hail damage - from obvious dents to subtle granule loss that insurance adjusters look for. This inspection is 100% free with no obligation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Claim Documentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We prepare a detailed damage report with aerial photos, measurements, and professional documentation that meets insurance company standards. Many Amarillo homeowners are surprised to learn their "small" hail damage qualifies for a full roof replacement under their insurance policy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Adjuster Meeting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We meet with your insurance adjuster at your Amarillo property and walk them through every piece of damage. Having a professional roofing contractor present ensures nothing gets missed. We speak the adjuster's language and know exactly what evidence they need to approve your claim.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Professional Roof Replacement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once your claim is approved, we schedule your roof replacement at your convenience. We use Class 4 impact-resistant shingles specifically rated for hail - protecting your Amarillo home from future storms. Most projects are completed in 1-2 days with minimal disruption.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">5</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">Final Inspection & Warranty</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct a final quality inspection and provide you with manufacturer and workmanship warranties. Your new roof is backed by industry-leading guarantees, giving you peace of mind for decades to come.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us */}
        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Why Amarillo Homeowners Choose Us for Hail Damage Repair</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Local Amarillo Office</h3>
                <p className="text-gray-700">
                  Located at 2909 S Western St in Amarillo. We're not storm chasers who disappear after the check clears. We've been protecting Amarillo roofs for over 10 years and we'll be here for your warranty needs decades from now.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Claim Experts</h3>
                <p className="text-gray-700">
                  We've handled hundreds of insurance claims in Amarillo. We know what State Farm, Allstate, USAA, and every other carrier looks for. We'll fight to get you every dollar you deserve - many clients get MORE coverage than they expected.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fast Response Time</h3>
                <p className="text-gray-700">
                  After a major hail storm hits Amarillo, insurance companies get backed up with claims. The sooner you file, the sooner you get your new roof. We can often schedule your inspection within 24 hours and have your claim filed within 48.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Impact-Resistant Materials</h3>
                <p className="text-gray-700">
                  We install Class 4 impact-resistant shingles that can withstand future Amarillo hail storms. These premium shingles often qualify for insurance discounts and come with enhanced manufacturer warranties - up to 50 years.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Common Issues */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Common Hail Damage Issues in Amarillo</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🔵 Granule Loss from Shingles</h3>
                <p className="text-gray-700">
                  Hail impacts knock protective granules off asphalt shingles, exposing the asphalt layer underneath. This accelerates aging and leads to leaks. Amarillo's intense UV exposure makes granule loss even more critical - your roof may look fine but could be failing rapidly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🔵 Bruising and Cracking</h3>
                <p className="text-gray-700">
                  Large hail creates soft spots or "bruises" in shingles that break the seal and allow water infiltration. In Amarillo's temperature extremes (100°F+ summers, below-zero winters), these damaged areas crack and fail much faster than in milder climates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🔵 Damaged Flashing and Vents</h3>
                <p className="text-gray-700">
                  Hail doesn't just damage shingles. Roof vents, flashing around chimneys, and pipe boots can all be dented or cracked by hail impacts. These are critical waterproofing components - if they're damaged, you WILL get leaks, especially during Amarillo's occasional heavy rain events.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">🔵 Compromised Wind Resistance</h3>
                <p className="text-gray-700">
                  Even if hail damage isn't immediately visible, impacts can loosen shingle adhesive strips. With Amarillo averaging 13+ mph winds and frequent 50+ mph gusts, weakened shingles can blow off during the next windstorm - leaving your home exposed to water damage.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Pricing */}
        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Hail Damage Repair Pricing in Amarillo</h2>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Good news:</strong> Most hail damage repairs in Amarillo are covered 100% by your homeowner's insurance (minus your deductible). You typically only pay your deductible - insurance covers the rest, including complete roof replacement if needed.
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-2">What Insurance Typically Covers:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Complete tear-off and disposal of damaged roofing</li>
                  <li>New underlayment, ice & water shield</li>
                  <li>Premium Class 4 impact-resistant shingles</li>
                  <li>All flashing, vents, pipe boots, and accessories</li>
                  <li>Ridge ventilation for proper attic airflow</li>
                  <li>Manufacturer and workmanship warranties</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-2">Average Amarillo Roof Replacement Cost:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Small home (1,200-1,800 sq ft):</strong> $7,000 - $11,000</li>
                  <li><strong>Medium home (1,800-2,500 sq ft):</strong> $11,000 - $16,000</li>
                  <li><strong>Large home (2,500-3,500+ sq ft):</strong> $16,000 - $25,000+</li>
                </ul>
                <p className="mt-4 italic">
                  Remember: If approved by insurance, you typically only pay your deductible ($1,000-$2,500 for most policies).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Inspection & Estimate</p>
                <p>
                  We provide free hail damage inspections and detailed estimates for your insurance company at no cost. There's zero obligation - we only proceed if your claim is approved and you choose to work with us.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Emergency Services */}
        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-3xl font-bold mb-6 text-red-700">Emergency Hail Damage Services in Amarillo</h2>

            <p className="text-lg text-gray-800 mb-6">
              <strong>Active leak after hail storm?</strong> We provide 24/7 emergency tarping and temporary repairs throughout Amarillo. Don't wait - water damage compounds quickly and can lead to mold, structural issues, and ruined belongings.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xl text-red-700 mb-3">Emergency Services Include:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>✓ Emergency roof tarping (same-day available)</li>
                  <li>✓ Temporary leak repairs</li>
                  <li>✓ Water damage mitigation</li>
                  <li>✓ Priority scheduling for permanent repairs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl text-red-700 mb-3">Our Coverage Area:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>✓ All Amarillo neighborhoods</li>
                  <li>✓ Wolflin, San Jacinto, Southwest areas</li>
                  <li>✓ Canyon (15-minute response)</li>
                  <li>✓ Potter and Randall counties</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-red-700 mb-2">🚨 Call Now for Emergency Service</p>
              <p className="text-2xl font-bold text-brand-gold">
                <a href="tel:8066226041" className="hover:underline">(806) 622-6041</a>
              </p>
              <p className="text-gray-700 mt-2">Available 24/7 for roofing emergencies in Amarillo</p>
            </div>
          </section>
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How quickly can you inspect my Amarillo roof after a hail storm?</h3>
                <p className="text-gray-700">
                  We typically schedule inspections within 24-48 hours after a storm. During major hail events affecting all of Amarillo, we work extended hours to accommodate everyone. The inspection itself takes 45-90 minutes and includes drone photography, attic inspection, and complete documentation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Will filing a hail damage claim raise my insurance rates?</h3>
                <p className="text-gray-700">
                  Weather-related claims (like hail damage) typically don't raise your rates the same way an at-fault claim would. However, policies vary. We recommend asking your insurance agent directly. What we can tell you: Failing to repair hail damage and then having a leak can lead to much larger claims later - which WILL affect your rates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long do I have to file a hail damage claim in Amarillo?</h3>
                <p className="text-gray-700">
                  Most Texas homeowner policies give you 1-2 years to file after a hail event, but we strongly recommend filing ASAP. The sooner you file, the sooner you get your new roof. Plus, if Amarillo gets hit by another storm before your first claim is resolved, things get complicated. File early to avoid issues.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Do I need to replace my entire roof or just repair damaged sections?</h3>
                <p className="text-gray-700">
                  Insurance companies typically approve full roof replacement when hail damage exceeds a certain threshold (usually 8-10 impacts per 10x10 ft square). They won't pay for partial repairs because it's impossible to match old shingles, and partial repairs don't solve the underlying damage. Most Amarillo hail claims result in full replacement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What if my insurance company denies my hail damage claim?</h3>
                <p className="text-gray-700">
                  Denials happen, but they're not always final. We can request a re-inspection with different adjusters, provide additional documentation, or help you work with a public adjuster if needed. In 10+ years serving Amarillo, we've successfully gotten many initially-denied claims approved by providing the right evidence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">How long does a hail damage roof replacement take in Amarillo?</h3>
                <p className="text-gray-700">
                  Most residential roof replacements in Amarillo take 1-2 days once we start. Larger homes or complex roof designs may take 3 days. We monitor Amarillo weather forecasts carefully and only start when we have a clear weather window. From claim approval to completion, the entire process typically takes 2-4 weeks depending on scheduling and material delivery.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Get Your Free Hail Damage Inspection in Amarillo</h2>
            <p className="cta-text">
              Don't let hail damage compromise your Amarillo home. We handle everything from inspection to insurance claims to final installation. Most repairs are covered by insurance - you only pay your deductible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">
                📞 Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Related Links */}
        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Amarillo Roofing Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                All Amarillo Services
              </a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Residential Roofing
              </a>
              <span className="text-gray-400">•</span>
              <a href="/roof-inspections-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Roof Inspections
              </a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Learn More About Hail Damage
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

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
                "streetAddress": "2909 S Western St",
                "addressLocality": "Amarillo",
                "addressRegion": "TX",
                "postalCode": "79109"
              },
              "telephone": "+18066226041"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert hail damage roof repair in Amarillo, TX. Free inspections, insurance claim assistance, and professional repairs using impact-resistant materials."
          })
        }}
      />
    </div>
  );
}
