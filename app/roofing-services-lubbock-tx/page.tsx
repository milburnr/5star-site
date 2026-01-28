import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roofing Contractor Lubbock TX | 5 Star',
  description: 'roofing services in Lubbock, TX. Hail damage repair, storm restoration, Class 4 shingles, TPO, metal roofing. Free inspections. Insurance claims help.',
};

export default function Page() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">Professional Roofing Services in Lubbock, TX</h1>

      <div className="content-block mb-12">
        <h2 className="content-block-title">Protecting Lubbock Homes & Businesses for Over 10 Years</h2>
        <p className="text-lg">
          Lubbock sits in the heart of West Texas hail country, experiencing an average of 6-10 severe
          hailstorms per year. At 5 Star Commercial Roofing, we've spent over a decade helping Lubbock
          homeowners and businesses protect their properties with impact-resistant roofing systems,
          expert hail damage repair, and comprehensive insurance claim assistance.
        </p>
        <p className="text-lg mt-4">
          From residential neighborhoods around Texas Tech to commercial properties throughout the South
          Plains, we understand Lubbock's unique roofing challenges and know exactly how to address them.
        </p>
      </div>

      {/* Emergency Services Banner */}
      <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
        <div className="flex gap-6 items-start">
          <div className="text-5xl">🚨</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-red-800 mb-3">24/7 Emergency Roofing in Lubbock</h2>
            <p className="text-gray-700 mb-4">
              Storm damage doesn't wait for business hours. We offer round-the-clock emergency response
              for Lubbock residents and businesses facing:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Active roof leaks causing interior damage</li>
              <li>Severe hail damage from West Texas storms</li>
              <li>Wind damage from high-speed Panhandle winds</li>
              <li>Missing shingles or exposed roof deck</li>
              <li>Commercial roof failures</li>
            </ul>
            <a href="tel:8066226041" className="btn-primary-hero bg-red-600 hover:bg-red-700 text-white">
              📞 Emergency: (806) 622-6041
            </a>
          </div>
        </div>
      </section>

      {/* Lubbock Hail Statistics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Lubbock Needs Impact-Resistant Roofing</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-brand-gold mb-3">6-10</div>
            <div className="text-xl font-semibold mb-2">Hailstorms Per Year</div>
            <p className="text-gray-600">Lubbock experiences frequent severe hailstorms during spring and summer months</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-brand-gold mb-3">260K</div>
            <div className="text-xl font-semibold mb-2">Population</div>
            <p className="text-gray-600">Third-largest city in West Texas with extensive residential and commercial roofing needs</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-brand-gold mb-3">30%</div>
            <div className="text-xl font-semibold mb-2">Insurance Savings</div>
            <p className="text-gray-600">Class 4 impact-resistant shingles qualify for insurance premium discounts in Lubbock</p>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Residential Roofing Services in Lubbock</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <div className="card">
            <img src="/images/hail-damage-3.jpg" alt="Hail Damage Repair in Lubbock TX" className="card-image" />
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">Hail Damage Roof Repair</h3>
              <p className="mb-4">
                Lubbock's location in the hail belt means your roof takes a beating every spring.
                We specialize in identifying and documenting hail damage for insurance claims.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Free post-storm inspections</li>
                <li>Complete insurance documentation with photos</li>
                <li>Adjuster meeting representation</li>
                <li>Class 4 impact-resistant replacements</li>
                <li>Manufacturers' warranties up to 50 years</li>
              </ul>
              <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                Learn More About Hail Damage Repair →
              </a>
            </div>
          </div>

          <div className="card">
            <img src="/images/asphaltshingles.jpg" alt="Class 4 Impact Resistant Shingles Lubbock" className="card-image" />
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">Class 4 Impact-Resistant Shingles</h3>
              <p className="mb-4">
                UL 2218 Class 4 rated asphalt shingles are tested to withstand 2-inch hail strikes.
                The gold standard for residential roofing in Lubbock's severe weather climate.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Architectural and luxury shingle styles</li>
                <li>20-50 year material warranties</li>
                <li>Wind resistance up to 130 mph</li>
                <li>Multiple color options to match your home</li>
                <li>10-30% insurance premium discounts</li>
              </ul>
              <a href="/asphalt-roofing-in-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                Learn More About Class 4 Shingles →
              </a>
            </div>
          </div>

          <div className="card">
            <img src="/images/SteelRoofing.jpg" alt="Metal Roofing Lubbock TX" className="card-image" />
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">Standing Seam Metal Roofing</h3>
              <p className="mb-4">
                The ultimate hail protection for Lubbock homes. Metal roofing may dent but remains
                watertight even after severe hailstorms. Popular choice for Texas Tech area neighborhoods.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>50+ year lifespan in Lubbock climate</li>
                <li>Energy-efficient reflective coatings</li>
                <li>Class A fire rating</li>
                <li>Wind resistance 140+ mph</li>
                <li>Low maintenance requirements</li>
              </ul>
              <a href="/roofing-methods/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                Learn More About Metal Roofing →
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">Complete Roof Replacement</h3>
              <p className="mb-4">
                When your Lubbock roof has reached the end of its lifespan or sustained severe damage,
                we provide complete tear-off and replacement services with modern, hail-resistant systems.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Free in-home consultations</li>
                <li>Material selection guidance</li>
                <li>Permit handling and HOA coordination</li>
                <li>Professional installation crews</li>
                <li>Thorough cleanup and debris removal</li>
              </ul>
              <a href="/residential-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Commercial Roofing in Lubbock</h2>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          From Texas Tech University facilities to downtown office buildings and South Plains warehouses,
          we provide comprehensive commercial roofing solutions for Lubbock businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <img src="/images/TPO1.jpg" alt="TPO Commercial Roofing Lubbock" className="card-image" />
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">TPO Roofing Systems</h3>
              <p className="mb-4">
                White single-ply membrane roofing for Lubbock's flat and low-slope commercial buildings.
                Energy Star rated to reduce cooling costs in hot West Texas summers.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>15-25 year warranties</li>
                <li>Heat-welded seams (no glue to fail)</li>
                <li>Hail and puncture resistant</li>
                <li>Reflective white surface reduces energy costs</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="/images/EPDM2.jpg" alt="EPDM Commercial Roofing Lubbock" className="card-image" />
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">EPDM Rubber Roofing</h3>
              <p className="mb-4">
                Cost-effective black rubber membrane for commercial applications. Proven track record
                in Lubbock's extreme temperature swings and UV exposure.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>15-30 year lifespan</li>
                <li>Excellent UV resistance</li>
                <li>Temperature stable (-40°F to 300°F)</li>
                <li>Budget-friendly option for warehouses</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">PVC Roofing Systems</h3>
              <p className="mb-4">
                Premium commercial roofing for Lubbock restaurants, retail facilities, and chemical
                storage buildings requiring superior grease and chemical resistance.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>20-30 year warranties</li>
                <li>Chemical and grease resistant</li>
                <li>Class A fire rating</li>
                <li>Energy efficient reflective surface</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-brand-brown mb-3">Built-Up Roofing (BUR)</h3>
              <p className="mb-4">
                Traditional tar and gravel roofing for heavy-duty commercial applications. Multiple
                layers create redundant waterproofing for Lubbock's intense rainstorms.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>15-25 year lifespan</li>
                <li>Excellent waterproofing</li>
                <li>Fire and hail resistant</li>
                <li>Cost-effective for large flat roofs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claims */}
      <section className="mb-16 bg-yellow-50 border-l-4 border-brand-gold p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Insurance Claims Assistance for Lubbock Property Owners</h2>
        <p className="text-lg mb-4">
          Most Lubbock homeowners insurance policies cover hail damage, wind damage, and storm-related
          roof repairs when properly documented. We've helped hundreds of Lubbock clients secure over
          $10 million in approved insurance claims.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-xl mb-3">What We Do:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Free post-storm roof inspections</li>
              <li>Detailed photo documentation of all damage</li>
              <li>Measurements and reports for adjusters</li>
              <li>Meeting with your insurance adjuster on-site</li>
              <li>Supplemental claim filing if needed</li>
              <li>Direct communication with insurance companies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Common Covered Damage:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Hail impact damage to shingles</li>
              <li>Wind damage (missing or lifted shingles)</li>
              <li>Granule loss from hail strikes</li>
              <li>Damaged flashing, vents, and gutters</li>
              <li>Water intrusion from storm damage</li>
              <li>Impact damage from flying debris</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded">
          <p className="font-semibold text-brand-brown">
            ⚠️ Important: Texas insurance law requires you to file hail damage claims within a
            specific timeframe. Call us for a free inspection within 72 hours of any hailstorm.
          </p>
        </div>
      </section>

      {/* Lubbock Neighborhoods */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Serving All Lubbock Neighborhoods</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">Tech Terrace</h4>
            <p className="text-sm text-gray-600">Historic homes near Texas Tech</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">Overton</h4>
            <p className="text-sm text-gray-600">Established neighborhoods</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">South Lubbock</h4>
            <p className="text-sm text-gray-600">New residential developments</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">West Lubbock</h4>
            <p className="text-sm text-gray-600">Growing suburban area</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">Downtown</h4>
            <p className="text-sm text-gray-600">Commercial & historic buildings</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">North Lubbock</h4>
            <p className="text-sm text-gray-600">Mixed residential/commercial</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">Shallowater</h4>
            <p className="text-sm text-gray-600">Northwest suburbs</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h4 className="font-bold mb-2">All Areas</h4>
            <p className="text-sm text-gray-600">Complete Lubbock coverage</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Also serving nearby communities: Wolfforth, Slaton, Idalou, New Deal, Abernathy, and Shallowater
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Lubbock Chooses 5 Star Roofing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="font-bold text-xl mb-3">Local Expertise</h3>
            <p className="text-gray-600">
              Over 10 years serving Lubbock and the South Plains. We understand Texas Tech area
              neighborhoods, local building codes, and South Plains weather patterns.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-bold text-xl mb-3">Insurance Specialists</h3>
            <p className="text-gray-600">
              We've helped Lubbock clients secure over $10 million in insurance approvals.
              We know exactly what adjusters look for and how to document claims properly.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-3">Fast Response</h3>
            <p className="text-gray-600">
              Same-day emergency service available. We're typically on-site within 24-48 hours
              for free inspections after Lubbock hailstorms.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="font-bold text-xl mb-3">Quality Materials</h3>
            <p className="text-gray-600">
              We only install premium Class 4 impact-resistant shingles, commercial-grade TPO/PVC,
              and standing seam metal from top manufacturers.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-bold text-xl mb-3">Licensed & Insured</h3>
            <p className="text-gray-600">
              Fully licensed in Texas with comprehensive general liability and workers' compensation
              insurance for your protection.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="font-bold text-xl mb-3">Proven Track Record</h3>
            <p className="text-gray-600">
              Hundreds of satisfied Lubbock customers. Check our reviews from Tech Terrace,
              Overton, and throughout the South Plains.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Lubbock Roofing FAQs</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">How often does Lubbock get hail?</h3>
            <p className="text-gray-700">
              Lubbock experiences an average of 6-10 hailstorms per year, primarily during spring
              and early summer (April-June). Golf ball to baseball-sized hail is common during severe
              thunderstorms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">Do I need Class 4 shingles in Lubbock?</h3>
            <p className="text-gray-700">
              While not required by code, Class 4 impact-resistant shingles are highly recommended
              in Lubbock due to frequent hail. They provide better protection and qualify you for
              insurance premium discounts (typically 10-30% savings).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">How long does a roof replacement take in Lubbock?</h3>
            <p className="text-gray-700">
              Most residential roof replacements in Lubbock take 1-3 days depending on size and
              complexity. Commercial projects vary based on square footage. We work efficiently
              to minimize disruption, especially important during the school year for homes near Texas Tech.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">Will my insurance cover hail damage in Lubbock?</h3>
            <p className="text-gray-700">
              Most Lubbock homeowners insurance policies cover hail damage when properly documented.
              We provide free inspections, detailed photo documentation, and meet with adjusters to
              ensure your claim is approved. Success rate is over 90% when damage is legitimate.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Protect Your Lubbock Property Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Free inspections for Lubbock homeowners and businesses. Expert hail damage repair,
          Class 4 shingle installation, and full insurance claim assistance. Call now!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero text-lg bg-white text-brand-brown hover:bg-gray-100">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary-hero text-lg border-2 border-white hover:bg-white hover:text-brand-brown">
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
