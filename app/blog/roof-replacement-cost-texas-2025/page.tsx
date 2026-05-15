import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { AlertTriangle, Calendar, Lightbulb, Phone, XCircle } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/blog/roof-replacement-cost-texas-2025/" },
  title: "Roof Replacement Cost in Texas 2025 | 5 Star Roofing",
  description:
    "How much does roof replacement cost in Texas? Complete 2025 pricing guide with average costs by size, material, and location. Call (806) 622-6041",
  openGraph: {
    title: "Roof Replacement Cost in Texas 2025 | 5 Star Roofing",
    description:
      "How much does roof replacement cost in Texas? Complete 2025 pricing guide with average costs by size, material, and location. Call (806) 622-6041",
    url: "https://5starroofingpros.com/blog/roof-replacement-cost-texas-2025/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-storm.jpg",
        width: 1280,
        height: 720,
        alt: "Newly installed asphalt shingle roof in Texas — 5 Star Roofing roof replacement guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofReplacementCostBlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does Roof Replacement Cost in Texas in 2025?",
    author: {
      "@type": "Organization",
      name: "5 Star Roofing",
    },
    publisher: {
      "@type": "Organization",
      name: "5 Star Roofing",
      logo: {
        "@type": "ImageObject",
        url: "https://5starroofingpros.com/5-star-with-letters-1.png",
      },
    },
    datePublished: "2025-01-01",
    dateModified: "2025-01-15",
    description:
      "Complete pricing guide for Texas roof replacement including average costs by home size, material options, factors affecting price, and how to save money on your roofing project.",
  };

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog/" },
          { name: "Roof Replacement Cost", url: "/blog/roof-replacement-cost-texas-2025/" },
        ]}
      />

      <article className="container-custom py-12">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              A complete 2025 pricing guide for roof replacement in Texas — average costs by home size, material type, and region with tips for saving money on your next roofing project.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-replacement/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Roof Replacement Service</a>
              <a href="/roof-replacement-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Amarillo Replacement</a>
              <a href="/blog/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">More Articles</a>
              <a href="/contact/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Get a Free Estimate</a>
            </div>
          </section>
        </FadeIn>

        {/* Author byline */}
        <FadeIn>
          <div className="mb-8 max-w-5xl mx-auto flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-white text-xs font-bold flex-shrink-0">BT</div>
            <span>
              Written by <span className="font-semibold text-gray-700">Ben Terhune</span>, Owner — 5 Star Roofing, Amarillo TX
              &nbsp;·&nbsp; Updated May 2026
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <header className="max-w-4xl mx-auto mb-12">
            <div className="text-sm text-gray-500 mb-4">
              <a href="/blog/" className="hover:text-brand-gold">
                Blog
              </a>{" "}
              → Pricing Guides
            </div>
            <h1 className="text-5xl font-bold mb-6 text-brand-brown">
              How Much Does Roof Replacement Cost in Texas in 2025?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete pricing guide for Texas roof replacement including average costs by home
              size, material options, factors affecting price, and how to save money on your roofing
              project.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>
                <Calendar className="w-6 h-6 inline-block" /> Updated January 2025
              </span>
              <span>•</span>
              <span>⏱ 7 min read</span>
            </div>
          </header>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                If you're planning a roof replacement in Texas, you're probably wondering: "How much
                is this going to cost?" The answer depends on several factors including your home's
                size, chosen materials, roof complexity, and location. This comprehensive guide
                breaks down 2025 roof replacement costs for Texas homeowners with real pricing data
                from West Texas projects.
              </p>

              <h2>Average Roof Replacement Costs in Texas (2025)</h2>

              <p>
                The average cost to replace a residential roof in Texas ranges from{" "}
                <strong>$7,000 to $25,000+</strong> depending on size and materials. Here's a
                breakdown by common home sizes:
              </p>

              <div className="bg-brand-gold-light p-6 rounded-lg my-8">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  2025 Texas Roof Replacement Costs by Home Size
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-brand-brown">Small Home (1,200-1,800 sq ft)</p>
                    <p className="text-2xl font-bold text-brand-gold">$7,000 - $11,000</p>
                    <p className="text-sm text-gray-600">
                      Typical ranch-style or small 2-bedroom homes
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-brand-brown">
                      Medium Home (1,800-2,500 sq ft)
                    </p>
                    <p className="text-2xl font-bold text-brand-gold">$11,000 - $16,000</p>
                    <p className="text-sm text-gray-600">Standard 3-4 bedroom family homes</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-brand-brown">
                      Large Home (2,500-3,500+ sq ft)
                    </p>
                    <p className="text-2xl font-bold text-brand-gold">$16,000 - $25,000+</p>
                    <p className="text-sm text-gray-600">Two-story or large 4+ bedroom homes</p>
                  </div>
                </div>
              </div>

              <p>
                <em>
                  These estimates include complete tear-off, disposal, new underlayment,
                  architectural asphalt shingles, all materials, and professional installation. Your
                  actual cost may vary based on specific project requirements.
                </em>
              </p>

              <h2>Cost Per Square Foot: The Roofing Industry Standard</h2>

              <p>
                Roofing contractors in Amarillo, Lubbock, Midland, and across Texas price jobs
                by the &quot;square,&quot; which equals 100 square feet of roof surface. A
                typical 2,000 sq ft Amarillo home has somewhere between 20 and 25 squares of
                actual roof area once hips, valleys, and overhangs are measured. Knowing that
                number lets you compare two quotes for the same material on the same roof
                without getting tripped up on different bid formats.
              </p>

              <h3>Average Cost Per Square in Texas (2025):</h3>
              <ul>
                <li>
                  <strong>Asphalt Shingles (3-Tab):</strong> $350-$500 per square ($3.50-$5.00 per
                  sq ft)
                </li>
                <li>
                  <strong>Architectural Shingles:</strong> $450-$650 per square ($4.50-$6.50 per sq
                  ft)
                </li>
                <li>
                  <strong>Impact-Resistant Shingles:</strong> $550-$800 per square ($5.50-$8.00 per
                  sq ft)
                </li>
                <li>
                  <strong>Metal Roofing:</strong> $800-$1,400 per square ($8.00-$14.00 per sq ft)
                </li>
                <li>
                  <strong>TPO/Commercial:</strong> $600-$900 per square ($6.00-$9.00 per sq ft)
                </li>
              </ul>

              <h2>Factors That Affect Your Roof Replacement Cost</h2>

              <h3>1. Roof Size and Complexity</h3>
              <p>Larger roofs cost more—that's obvious. But complexity matters just as much:</p>
              <ul>
                <li>
                  <strong>Simple gable roof:</strong> Easiest and cheapest to replace
                </li>
                <li>
                  <strong>Hip roof:</strong> More complex, requires more materials
                </li>
                <li>
                  <strong>Multiple valleys and dormers:</strong> Increases labor time and material
                  waste
                </li>
                <li>
                  <strong>Complex architecture:</strong> Turrets, multiple levels, and unique
                  designs add 20-30% to costs
                </li>
              </ul>

              <h3>2. Roof Pitch (Steepness)</h3>
              <p>Steeper roofs are harder and more dangerous to work on:</p>
              <ul>
                <li>
                  <strong>Low pitch (4/12 or less):</strong> Standard pricing
                </li>
                <li>
                  <strong>Medium pitch (5/12 to 8/12):</strong> Standard to slightly increased
                </li>
                <li>
                  <strong>Steep pitch (9/12+):</strong> Adds 20-40% due to safety equipment and
                  slower work
                </li>
              </ul>

              <h3>3. Number of Layers to Remove</h3>
              <p>Most Texas homes have 1-2 layers of shingles. Removal affects cost:</p>
              <ul>
                <li>
                  <strong>One layer:</strong> Standard removal cost
                </li>
                <li>
                  <strong>Two layers:</strong> Adds $1,000-$2,500 in disposal fees
                </li>
                <li>
                  <strong>Three layers:</strong> Not allowed by code—must remove all (adds
                  $2,000-$3,500)
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <p className="font-semibold text-gray-800 mb-2">
                  <AlertTriangle className="w-6 h-6 inline-block" /> Important Note:
                </p>
                <p className="text-gray-700">
                  Some contractors offer to "overlay" new shingles on top of old ones to save money.{" "}
                  <strong>We strongly recommend against this.</strong> It voids most manufacturer
                  warranties, hides underlying damage, adds unnecessary weight, and shortens your
                  new roof's lifespan.
                </p>
              </div>

              <h3>4. Material Quality and Type</h3>
              <p>
                Not all roofing materials are created equal. Here's what affects material costs:
              </p>

              <h4>Asphalt Shingle Quality Tiers:</h4>
              <ul>
                <li>
                  <strong>3-Tab Shingles:</strong> $80-$110 per square (basic, 20-25 year life)
                </li>
                <li>
                  <strong>Architectural/Dimensional:</strong> $110-$150 per square (standard, 30-40
                  year life)
                </li>
                <li>
                  <strong>Premium Architectural:</strong> $150-$200 per square (enhanced, 40-50 year
                  life)
                </li>
                <li>
                  <strong>Designer Shingles:</strong> $200-$350 per square (luxury, 50+ year life)
                </li>
              </ul>

              <h4>Impact-Resistant (Class 4) Upgrades:</h4>
              <p>
                For Texas homeowners in hail-prone areas (which is most of us), Class 4
                impact-resistant shingles add $50-$100 per square but:
              </p>
              <ul>
                <li>Withstand larger hail (up to 2" tested)</li>
                <li>Qualify for 10-30% insurance discounts (saves $100-$300/year)</li>
                <li>Backed by stronger warranties</li>
                <li>Pay for themselves in 5-7 years through insurance savings</li>
              </ul>

              <h3>5. Ventilation and Underlayment</h3>
              <p>Proper ventilation and quality underlayment are critical in Texas:</p>
              <ul>
                <li>
                  <strong>Ridge vents:</strong> $3-$7 per linear foot (essential for Texas heat)
                </li>
                <li>
                  <strong>Synthetic underlayment:</strong> Adds $200-$500 (better than felt paper)
                </li>
                <li>
                  <strong>Ice & water shield:</strong> $100-$300 (protects valleys and eaves)
                </li>
                <li>
                  <strong>Attic ventilation upgrades:</strong> $500-$1,500 (reduces cooling costs)
                </li>
              </ul>

              <h3>6. Geographic Location in Texas</h3>
              <p>
                Location affects pricing due to labor costs, material delivery, and local
                competition:
              </p>
              <ul>
                <li>
                  <strong>Major metros (Dallas, Houston, Austin):</strong> Higher labor costs
                  (10-20% above average)
                </li>
                <li>
                  <strong>West Texas (Amarillo, Lubbock, Midland, Odessa):</strong> Average to
                  slightly below average costs
                </li>
                <li>
                  <strong>Rural areas:</strong> May pay premium for travel time or have fewer
                  contractor options
                </li>
              </ul>

              <h2>Cost Breakdown: What You're Actually Paying For</h2>

              <p>Understanding where your money goes helps you evaluate quotes:</p>

              <h3>Typical $15,000 Roof Replacement Breakdown:</h3>
              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <ul className="space-y-2">
                  <li>
                    <strong>Materials (shingles, underlayment, nails, etc.):</strong> $5,000-$6,000
                    (33-40%)
                  </li>
                  <li>
                    <strong>Labor (installation crew):</strong> $5,500-$6,500 (37-43%)
                  </li>
                  <li>
                    <strong>Tear-off and disposal:</strong> $1,500-$2,000 (10-13%)
                  </li>
                  <li>
                    <strong>Permits and fees:</strong> $300-$500 (2-3%)
                  </li>
                  <li>
                    <strong>Overhead and profit:</strong> $1,700-$2,000 (11-13%)
                  </li>
                </ul>
              </div>

              <h2>How to Save Money on Roof Replacement</h2>

              <h3>Smart Ways to Reduce Costs:</h3>

              <ol>
                <li>
                  <strong>File an insurance claim:</strong> If you have hail/wind damage, insurance
                  covers replacement minus your deductible ($1,000-$5,000 typically)
                </li>
                <li>
                  <strong>Get multiple quotes:</strong> Compare 3-4 contractors but don't
                  automatically choose the lowest bid
                </li>
                <li>
                  <strong>Schedule in off-season:</strong> Winter months (Nov-Feb) sometimes have
                  lower rates
                </li>
                <li>
                  <strong>Consider impact-resistant shingles:</strong> Higher upfront cost but
                  insurance discounts provide long-term savings
                </li>
                <li>
                  <strong>Do your own cleanup:</strong> Some contractors will discount if you handle
                  yard cleanup
                </li>
                <li>
                  <strong>Don't upgrade unnecessarily:</strong> Match your current roof quality
                  unless there's a specific reason to upgrade
                </li>
              </ol>

              <h3>DON'T Try to Save Money By:</h3>
              <ul>
                <li>
                  <XCircle className="w-5 h-5 inline-block text-red-600" /> Accepting "layover"
                  instead of tear-off
                </li>
                <li>
                  <XCircle className="w-5 h-5 inline-block text-red-600" /> Hiring unlicensed
                  contractors
                </li>
                <li>
                  <XCircle className="w-5 h-5 inline-block text-red-600" /> Choosing the absolute
                  cheapest materials
                </li>
                <li>
                  <XCircle className="w-5 h-5 inline-block text-red-600" /> Skipping proper
                  ventilation
                </li>
                <li>
                  <XCircle className="w-5 h-5 inline-block text-red-600" /> Accepting a contractor
                  who offers to "waive your deductible" (this is insurance fraud)
                </li>
              </ul>

              <div className="bg-brand-gold-light p-6 rounded-lg my-8">
                <p className="font-semibold text-brand-brown mb-2">
                  <Lightbulb className="w-6 h-6 inline-block" /> Insurance Claims Can Save You
                  Thousands
                </p>
                <p>
                  If your Texas home has hail damage from recent storms, insurance typically covers
                  100% of replacement costs minus your deductible. A $16,000 roof replacement might
                  only cost you $2,000-$4,000 out of pocket.
                </p>
                <p className="mt-4">
                  <a
                    href="/blog/how-to-file-hail-damage-insurance-claim/"
                    className="text-brand-brown font-semibold hover:text-brand-gold hover:underline"
                  >
                    Read our complete guide to filing hail damage insurance claims →
                  </a>
                </p>
              </div>

              <h2>Metal Roofing vs. Asphalt Shingles: Cost Comparison</h2>

              <p>Metal roofing costs 2-3x more upfront but can last 50+ years:</p>

              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h3 className="font-bold text-lg mb-4">
                  2,000 sq ft Home - 40 Year Cost Comparison:
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-brand-brown">Asphalt Shingles:</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Initial cost: $12,000</li>
                      <li>Replacement at 20 years: $14,000 (inflation)</li>
                      <li>Replacement at 40 years: $16,000</li>
                      <li>
                        <strong>Total 40-year cost: $42,000</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-brown">Metal Roofing:</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Initial cost: $22,000</li>
                      <li>No replacements needed (50+ year life)</li>
                      <li>Energy savings: -$50-$100/year in cooling costs</li>
                      <li>
                        <strong>Total 40-year cost: $20,000-$22,000</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-brand-brown">
                  Metal roofing saves $20,000+ over 40 years despite higher initial cost.
                </p>
              </div>

              <h2>Getting Accurate Roof Replacement Quotes</h2>

              <h3>What a Proper Quote Should Include:</h3>
              <ul>
                <li>Measured roof square footage with a slope diagram, not just home square footage</li>
                <li>Material specifications by manufacturer and product line (GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark)</li>
                <li>Full scope: tear-off, dump fees, decking inspection, underlayment, ice-water shield, flashing, installation, and cleanup</li>
                <li>Manufacturer material warranty plus the contractor&apos;s workmanship warranty in writing</li>
                <li>Payment schedule keyed to milestones (deposit, dried-in, final) under the Texas Prompt Payment Act</li>
                <li>Estimated timeline with weather contingency for the West Texas storm season</li>
                <li>Itemized pricing, or at minimum per-square pricing that can be compared across bids</li>
              </ul>

              <h3>Red Flags in Quotes:</h3>
              <ul>
                <li>Vague descriptions like &quot;standard installation&quot; with no material brand or model named</li>
                <li>No warranty information from the manufacturer or the contractor</li>
                <li>Large deposit demand above 30% before any material is delivered to your Amarillo or Lubbock home</li>
                <li>Pressure to sign on the first visit, especially after a hailstorm when storm chasers are working the neighborhood</li>
                <li>Bid dramatically lower than three other quotes, which usually means cheap underlayment, four-nail patterns instead of six, or a layover instead of full tear-off</li>
              </ul>

              <h2>Texas-Specific Roofing Cost Considerations</h2>

              <h3>Hail Damage Impact on Costs</h3>
              <p>Texas leads the nation in hail damage claims. If your roof has hail damage:</p>
              <ul>
                <li>Most insurance covers full replacement</li>
                <li>You typically only pay your wind/hail deductible (1-5% of home value)</li>
                <li>
                  Upgrading to Class 4 impact-resistant shingles often covered at no additional cost
                </li>
              </ul>

              <h3>Energy Efficiency Upgrades</h3>
              <p>Texas heat demands energy-efficient roofing:</p>
              <ul>
                <li>
                  <strong>Cool roof shingles:</strong> Reflect more sunlight, reduce cooling costs
                  10-15%
                </li>
                <li>
                  <strong>Radiant barriers:</strong> $200-$800, reduce attic heat by 30°F+
                </li>
                <li>
                  <strong>Improved ventilation:</strong> $500-$1,500, extends roof life and reduces
                  energy costs
                </li>
              </ul>

              <h2>Frequently Asked Questions</h2>

              <h3>Can I do a roof replacement myself to save money?</h3>
              <p>
                While technically possible, we{" "}
                <strong>strongly discourage DIY roof replacement</strong>:
              </p>
              <ul>
                <li>Roofing is dangerous (falls are a leading cause of construction injuries)</li>
                <li>Mistakes void manufacturer warranties</li>
                <li>Improper installation leads to leaks and premature failure</li>
                <li>Most insurance won't cover DIY work</li>
                <li>Resale value impact if not professionally installed</li>
              </ul>
              <p>The money saved isn't worth the risk. Hire a licensed, insured professional.</p>

              <h3>How do I know if I'm getting a fair price?</h3>
              <p>
                Get 3-4 quotes from licensed contractors. If all quotes are in a similar range
                ($12k-$15k for example), that's market rate. If one is dramatically lower ($8k),
                they're likely:
              </p>
              <ul>
                <li>Using inferior materials</li>
                <li>Cutting corners (skipping ventilation, using cheap underlayment)</li>
                <li>Planning a layover instead of tear-off</li>
                <li>Unlicensed/uninsured</li>
              </ul>

              <h3>Should I finance my roof replacement?</h3>
              <p>Financing options include:</p>
              <ul>
                <li>
                  <strong>Contractor financing:</strong> Many offer 0% for 12-24 months
                </li>
                <li>
                  <strong>Home equity loan/HELOC:</strong> Lower interest rates
                </li>
                <li>
                  <strong>Credit cards:</strong> Last resort (high interest)
                </li>
                <li>
                  <strong>Insurance claim:</strong> Best option if you qualify
                </li>
              </ul>

              <h3>When is the best time of year to replace a roof in Texas?</h3>
              <p>
                <strong>Fall (September through November) and spring (March through May)</strong> are the easiest windows in Amarillo and across West Texas:
              </p>
              <ul>
                <li>Daytime temperatures sit in a range where asphalt shingle seal strips activate properly without softening</li>
                <li>Lower rain frequency than the late summer monsoon pattern across the Panhandle and Permian Basin</li>
                <li>Above freezing on the deck, which avoids brittle shingles and slippery underlayment</li>
              </ul>
              <p>
                That said, emergency replacements after a hailstorm do not wait for perfect weather. Our crews replace storm-damaged roofs in Amarillo, Lubbock, and Midland year-round, adjusting installation pace and sealing techniques to match the conditions on the day.
              </p>

              <div className="bg-gray-800 text-white p-8 rounded-lg my-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Get a Free Roof Replacement Estimate
                </h3>
                <p className="mb-4">
                  5 Star Commercial Roofing provides detailed, no-obligation estimates for all roof
                  replacement projects in West Texas. We'll inspect your roof, provide accurate
                  measurements, and give you a comprehensive quote with no pressure to sign.
                </p>
                <p className="mb-6">
                  <strong>Serving:</strong> Amarillo, Midland, Odessa, Lubbock, Canyon, and all
                  surrounding West Texas areas
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4 text-center">
                    <Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041
                  </a>
                  <a
                    href="/contact/"
                    className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg text-center"
                  >
                    Request Free Estimate
                  </a>
                </div>
              </div>

              <hr className="my-12" />

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-brand-brown mb-2">Related Services</p>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog/" className="text-brand-gold hover:underline">
                      ← Back to Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/residential-roofing-amarillo/"
                      className="text-brand-gold hover:underline"
                    >
                      Residential Roofing in Amarillo
                    </a>
                  </li>
                  <li>
                    <a
                      href="/residential-roofing-lubbock/"
                      className="text-brand-gold hover:underline"
                    >
                      Residential Roofing in Lubbock
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/how-to-file-hail-damage-insurance-claim/"
                      className="text-brand-gold hover:underline"
                    >
                      How to File Hail Damage Insurance Claims
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </article>
    </div>
  );
}
