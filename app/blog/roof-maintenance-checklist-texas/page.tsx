import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/blog/roof-maintenance-checklist-texas/' },
  title: "Roof Maintenance Checklist for Texas Homeowners 2025",
  description: "Complete roof maintenance checklist for Texas homes. Seasonal inspections, preventive care, and expert tips to extend roof life. Free printable checklist.",
};

export default function RoofMaintenanceChecklistPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog/" },
        { name: "Roof Maintenance Checklist", url: "/blog/roof-maintenance-checklist-texas/" }
      ]} />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Roof Maintenance Checklist for Texas 2025</h1>
            <p className="hero-subtitle">Extend Your Roof's Life with Proper Maintenance</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary text-lg px-8 py-4">Schedule Inspection</a>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              <strong>Regular roof maintenance prevents expensive emergencies.</strong> In Texas, where extreme weather damages roofs faster than anywhere else, preventive maintenance isn't optional—it's essential. A well-maintained roof lasts 10-15 years longer than a neglected one.
            </p>
            <p className="text-xl text-gray-600">
              After 10+ years maintaining roofs across West Texas, we've developed this comprehensive checklist. Follow it twice a year (spring and fall) to catch small problems before they become costly disasters.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Quick Maintenance Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="font-bold text-brand-brown mb-2">Twice Yearly</h3>
                <p className="text-gray-700">Complete roof inspection and maintenance (spring and fall)</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-4xl mb-3">⛈️</div>
                <h3 className="font-bold text-brand-brown mb-2">After Major Storms</h3>
                <p className="text-gray-700">Inspect for hail damage, missing shingles, or leaks</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-brand-brown mb-2">Annual Professional Inspection</h3>
                <p className="text-gray-700">Have a professional inspect your roof once a year</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Seasonal Roof Maintenance Checklist</h2>

            {/* Spring Maintenance */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-brand-brown mb-6">🌸 Spring Maintenance (March-April)</h3>
                <p className="text-gray-700 mb-6">
                  Spring inspection is critical after winter weather and before summer heat. This is also when you'll discover hail damage from spring storms.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Inspect for Hail Damage
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Look for dents, bruising, or missing granules on shingles</li>
                      <li>• Check metal flashing, vents, and gutters for dents</li>
                      <li>• Document damage with photos for insurance</li>
                      <li>• Call for professional inspection if hail suspected</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Clean Gutters & Downspouts
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Remove leaves, debris, and sediment from gutters</li>
                      <li>• Check for proper drainage (water flows freely)</li>
                      <li>• Repair sagging or separated gutter sections</li>
                      <li>• Ensure downspouts direct water away from foundation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Inspect Shingles
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Check for curling, cracking, or missing shingles</li>
                      <li>• Look for exposed nails or lifted edges</li>
                      <li>• Inspect for granule loss (bare spots)</li>
                      <li>• Replace damaged shingles immediately</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Check Flashing
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Inspect chimney flashing for gaps or rust</li>
                      <li>• Check valley flashing for separations</li>
                      <li>• Ensure vent pipe boots aren't cracked</li>
                      <li>• Look for caulk failures around penetrations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Trim Overhanging Branches
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Cut branches within 6 feet of roof</li>
                      <li>• Prevents debris accumulation and shingle damage</li>
                      <li>• Reduces risk during storms</li>
                      <li>• Hire professional for large trees</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fall Maintenance */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
                <h3 className="text-3xl font-bold text-brand-brown mb-6">🍂 Fall Maintenance (September-October)</h3>
                <p className="text-gray-700 mb-6">
                  Fall maintenance prepares your roof for winter and assesses damage from summer heat and storms.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Deep Clean Gutters
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Remove all leaves and debris before winter</li>
                      <li>• Install gutter guards if not present</li>
                      <li>• Check for proper pitch (water flows to downspouts)</li>
                      <li>• Seal any leaking seams</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Inspect for Heat Damage
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Check for curled or buckled shingles (heat stress)</li>
                      <li>• Look for accelerated granule loss</li>
                      <li>• Inspect caulk around flashing (may have dried out)</li>
                      <li>• Check attic ventilation (poor ventilation accelerates aging)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Check Attic Ventilation
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Ensure soffit vents aren't blocked by insulation</li>
                      <li>• Check ridge vents for debris</li>
                      <li>• Look for moisture or mold in attic</li>
                      <li>• Proper ventilation extends roof life 10+ years</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Inspect Interior for Leaks
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Check ceilings for water stains or discoloration</li>
                      <li>• Look for mold or musty odors</li>
                      <li>• Inspect attic for water stains on rafters</li>
                      <li>• Address leaks immediately before winter rain</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Professional Inspection
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Schedule annual professional inspection</li>
                      <li>• They can access areas you can't safely reach</li>
                      <li>• Professional equipment detects hidden problems</li>
                      <li>• Maintains warranty compliance for many manufacturers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* After Storm Inspection */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-3xl font-bold text-brand-brown mb-6">⛈️ After Major Storms (Year-Round)</h3>
                <p className="text-gray-700 mb-6">
                  After hail, high winds, or severe storms, inspect your roof immediately. Documenting damage quickly is critical for insurance claims.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Immediate Safety Check
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Look for missing shingles or exposed decking</li>
                      <li>• Check for water intrusion or active leaks</li>
                      <li>• Identify any structural damage or sagging</li>
                      <li>• Call emergency repair if actively leaking</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Document Damage
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Take photos of all visible damage</li>
                      <li>• Document date and time of storm</li>
                      <li>• Check neighbors' roofs (community damage strengthens claims)</li>
                      <li>• Save weather reports showing hail size</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-brown mb-3 flex items-center gap-2">
                      <span className="text-2xl">☐</span> Professional Storm Inspection
                    </h4>
                    <ul className="ml-8 space-y-2 text-gray-700">
                      <li>• Call for free storm damage inspection</li>
                      <li>• Professional documentation for insurance</li>
                      <li>• Detects hidden damage not visible from ground</li>
                      <li>• Helps maximize insurance claim</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Monthly Quick Checks (5 Minutes)</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Do these quick checks monthly—takes just 5 minutes and can catch problems early:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">👁️ Visual Inspection from Ground</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Look for obvious missing or damaged shingles</li>
                    <li>• Check gutters for sagging or separations</li>
                    <li>• Look for debris accumulation</li>
                    <li>• Notice any new stains on soffits</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">🏠 Interior Check</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Walk through home looking at ceilings</li>
                    <li>• Check for new water stains or discoloration</li>
                    <li>• Notice any musty smells (indicates moisture)</li>
                    <li>• Look in attic briefly if accessible</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Warning Signs: Call a Professional Immediately</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">🚨 Active Water Intrusion</h3>
                <p className="text-gray-700">Water actively coming through ceiling or walls. Call emergency repair immediately—continuing leaks cause exponential damage.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">⚠️ Sagging Roof Deck</h3>
                <p className="text-gray-700">Visible sagging or dips in roof line indicate structural damage. This is a safety hazard requiring immediate professional assessment.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">🌪️ Large Missing Sections</h3>
                <p className="text-gray-700">Wind has blown off large sections of roofing. Exposed decking needs emergency tarping to prevent interior damage.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">💧 Multiple New Water Stains</h3>
                <p className="text-gray-700">Multiple new water stains appearing after rain indicate serious leak(s). These will worsen rapidly—call for inspection.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Professional Maintenance Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              DIY maintenance is important, but professional services catch problems you can't see and provide expert repairs:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-brand-brown mb-2">📋 Annual Professional Inspection ($0-$300)</h3>
                <p className="text-gray-700">Professional inspectors safely access all roof areas, use specialized equipment to detect hidden damage, and provide detailed reports. Many roofers (including us) offer free inspections.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-brand-brown mb-2">🧹 Professional Roof Cleaning ($300-$600)</h3>
                <p className="text-gray-700">Removes algae, moss, and debris that accelerate aging. Especially important in humid climates. Done carefully to avoid shingle damage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-brand-brown mb-2">🛡️ Preventive Maintenance Plans</h3>
                <p className="text-gray-700">Annual or bi-annual maintenance contracts include inspections, minor repairs, gutter cleaning, and priority emergency service. Typical cost: $300-$600/year.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Texas-Specific Maintenance Tips</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌡️ Extreme Heat Considerations</h3>
                <p className="text-gray-700">Texas heat accelerates aging. Check attic ventilation regularly—poor ventilation can shorten roof life by 10+ years. Ensure soffit and ridge vents aren't blocked.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">⛈️ Hail Damage Inspections</h3>
                <p className="text-gray-700">After any hail event in Texas, schedule a professional inspection. Even small hail causes damage that worsens over time. Free inspections are common after major storms.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💨 Wind Damage Checks</h3>
                <p className="text-gray-700">West Texas winds are extreme. Check that shingles are properly sealed—wind can lift unsealed edges and cause blow-offs. Look for lifted or loose shingles after wind events.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏜️ Dust Storm Cleanup</h3>
                <p className="text-gray-700">West Texas dust storms deposit debris that clogs gutters and valleys. Clean gutters more frequently (3-4 times per year) if you experience regular dust storms.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Professional Roof Maintenance in Texas</h2>
            <p className="cta-text">Need professional roof maintenance or inspection? We serve all of West Texas with comprehensive maintenance services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Schedule Inspection</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">Related Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/blog/best-roofing-materials-texas-2025/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Best Roofing Materials for Texas</a>
              <span className="text-gray-400">•</span>
              <a href="/blog/roof-replacement-cost-texas-2025/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Replacement Cost</a>
              <span className="text-gray-400">•</span>
              <a href="/blog/how-to-file-hail-damage-insurance-claim/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Filing Hail Damage Claims</a>
              <span className="text-gray-400">•</span>
              <a href="/roof-inspection-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Inspections</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting","headline":"Roof Maintenance Checklist for Texas Homeowners 2025","description":"Complete roof maintenance checklist for Texas homes. Seasonal inspections, preventive care, and expert tips to extend roof life.","author":{"@type":"Organization","name":"5 Star Commercial Roofing"},"datePublished":"2025-01-15","dateModified":"2025-01-15"})}}/>
    </div>
  );
}
