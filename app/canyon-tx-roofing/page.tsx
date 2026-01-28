import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Canyon TX Roofing | Professional Roofer Serving Canyon,',
  description: 'Trusted roofing contractor serving Canyon, TX from our Amarillo location. hail damage repair, residential & commercial roofing.',
};

export default function CanyonTXRoofingPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Service Areas",
                      "url": "/service-areas/"
              },
              {
                      "name": "Canyon",
                      "url": "/canyon-tx-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Roofing Services in Canyon, Texas
            </h1>
            <p className="hero-subtitle">
              Serving Canyon from Our Nearby Amarillo Location - Just 15 Miles Away
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">
                📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">
                Get Free Inspection
              </a>
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


      <div className="container-custom">
        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Your Local Roofing Partner in Canyon, TX
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Located just 15 miles north of our <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Amarillo headquarters</a>,
                Canyon is home to approximately 15,000 residents who deserve the same exceptional roofing service we provide
                throughout the Texas Panhandle. From the historic homes near the courthouse square to student housing serving
                Texas A&M University, we understand Canyon&apos;s unique roofing needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As Canyon&apos;s trusted roofing contractor, we provide fast, personalized service that only a nearby,
                locally-owned company can deliver. We&apos;re not a national chain - we&apos;re your neighbors down the road
                in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Amarillo</a>,
                committed to protecting Canyon homes and businesses with expert craftsmanship and honest service.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Canyon */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Canyon Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Right Down the Road</h3>
                <p className="text-gray-600">
                  Based in <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a> just
                  15 miles south on I-27. We serve Canyon daily and can typically arrive within 20-30 minutes of your call.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">University Housing Specialists</h3>
                <p className="text-gray-600">
                  Experienced with Canyon&apos;s unique needs - from WTAMU student housing to Canyon ISD facilities.
                  We understand local building codes and requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Small Town Service</h3>
                <p className="text-gray-600">
                  Personal attention and honest pricing. We treat Canyon customers like family because many of you
                  work in Amarillo where we&apos;re based - we see you every day.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Services in Canyon */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Complete Roofing Services in Canyon, Texas</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage Repair */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/hail-damage-3.jpg" alt="Hail damage repair services for Canyon TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Canyon sits in the same hail belt as Amarillo, experiencing frequent severe thunderstorms that can
                      devastate roofs in minutes. From homes near Palo Duro Canyon to the neighborhoods surrounding WTAMU
                      campus, we&apos;ve inspected and repaired hundreds of Canyon roofs after major hail events.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>What we provide:</strong> Free hail damage inspections throughout Canyon, complete photo
                      documentation for insurance claims, direct communication with your adjuster, and full roof replacement
                      with <a href="/asphalt-roofing-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant">Class 4 impact-resistant shingles</a>.
                    </p>
                    <a
                      href="/hail-damage-roof-repair-in-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Learn More About Our Hail Damage Services →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Residential Roofing */}
            <FadeIn delay={0.2}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/ResidentialServices.jpeg" alt="Residential roofing services for Canyon TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Canyon Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a historic home near the Canyon square, a newer build in one of the growing
                      subdivisions, or rental property serving WTAMU students, we provide expert residential roofing
                      throughout Canyon. Our <a href="/residential-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">residential roofing services</a> include
                      everything from minor repairs to complete tear-offs and replacements.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Our residential services:</strong> Complete roof replacement, asphalt shingle installation,
                      roof repairs, ventilation system upgrades, warranty work, and emergency leak repairs. We use only
                      premium materials rated for the harsh Texas Panhandle climate.
                    </p>
                    <a
                      href="/residential-roofing/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Explore Residential Roofing Options →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Commercial Roofing */}
            <FadeIn delay={0.3}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/CommercialRoofing.jpeg" alt="Commercial roofing services for Canyon TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial & Educational Facility Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Canyon&apos;s commercial landscape includes WTAMU campus buildings, Canyon ISD schools, retail
                      establishments on the town square, and businesses serving the growing population. We specialize
                      in <a href="/commercial-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">commercial roofing systems</a> including
                      TPO, EPDM, and built-up roofing for flat and low-slope applications.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial expertise:</strong> Flat roof repair and replacement, preventive maintenance
                      programs, emergency repairs, roof coating systems, and multi-property management. We work around
                      your schedule to minimize disruption to business or educational operations.
                    </p>
                    <a
                      href="/commercial-roofing/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Commercial Roofing Services →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Student Housing Roofing */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8 bg-amber-50">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Student Housing & Multi-Family
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      With Texas A&M University calling Canyon home, student housing and multi-family properties are
                      a major part of the local real estate landscape. We understand the unique needs of property
                      managers and investors who serve the university community.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Multi-family services:</strong> Portfolio property management, scheduled maintenance
                      programs, fast turnaround between semesters, budget-conscious solutions, and long-lasting repairs
                      that protect your investment. We can coordinate multiple properties in a single visit.
                    </p>
                    <a
                      href="/contact/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Get a Multi-Property Quote →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Free Inspections */}
            <FadeIn delay={0.5}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/shutterstock_473737921.jpg" alt="Free roof inspections for Canyon TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Every Canyon property owner deserves peace of mind about their roof&apos;s condition. Our free
                      roof inspections provide comprehensive assessments including hail damage detection, wind damage
                      evaluation, and general wear analysis. We serve all of Canyon from historic downtown to the
                      newest developments.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Inspection includes:</strong> Complete roof surface assessment, attic ventilation check,
                      shingle and flashing condition analysis, detailed photo documentation, and a written report you
                      can use for insurance purposes. 100% free with no obligation.
                    </p>
                    <a
                      href="/roof-inspections-in-amarillo/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Schedule Your Free Canyon Inspection →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Emergency Repairs */}
            <FadeIn delay={0.6}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/images/shutterstock_162724754.jpg" alt="24/7 emergency roofing service for Canyon TX" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      24/7 Emergency Service
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Emergency roofing service for Canyon available around the clock.</strong> Being just 15
                      miles away in <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a> means
                      we can respond to Canyon emergencies fast - typically within 20-30 minutes. Roof leaks, storm
                      damage, and structural issues require immediate attention.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}now for immediate emergency assistance anywhere in Canyon. We provide emergency tarping,
                      temporary leak repairs, and fast permanent solutions.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Canyon-Specific Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Roofing Challenges Unique to Canyon, Texas
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🏜️ Proximity to Palo Duro Canyon</h3>
                <p className="text-gray-700">
                  Canyon&apos;s location near Palo Duro Canyon State Park creates unique wind patterns and weather
                  conditions. The canyon system can funnel winds and create microclimates that accelerate roof wear.
                  Properties on the western side of town often experience more intense wind exposure, requiring
                  premium wind-rated materials and expert installation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🎓 University Impact</h3>
                <p className="text-gray-700">
                  Texas A&M University brings approximately 10,000 students to this town of 15,000, creating a large
                  rental housing market. Student housing requires durable, long-lasting roofing that can handle the
                  increased wear while remaining budget-conscious. We specialize in roofing solutions that balance
                  cost-effectiveness with longevity for landlords and property managers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Same Hail Belt as Amarillo</h3>
                <p className="text-gray-700">
                  Canyon experiences the same severe hail storms as nearby <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a>.
                  The Texas Panhandle sees 8-12 significant hail events annually, with baseball-sized hail not
                  uncommon. Class 4 impact-resistant shingles are essential for protecting your investment and
                  qualifying for insurance discounts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🏛️ Historic Downtown Properties</h3>
                <p className="text-gray-700">
                  Canyon&apos;s historic courthouse square and surrounding neighborhoods contain older homes and
                  buildings with unique roofing requirements. We have extensive experience working with historic
                  properties, ensuring repairs and replacements maintain architectural integrity while upgrading
                  to modern, protective materials.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Panhandle Temperature Extremes</h3>
                <p className="text-gray-700">
                  Like the rest of the Texas Panhandle, Canyon experiences extreme temperature swings - from over
                  100°F in summer to below zero in winter. This constant expansion and contraction cycle stresses
                  roofing materials. We use only materials specifically rated for these conditions, extending your
                  roof&apos;s lifespan and preventing premature failure.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Local */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">The 5 Star Advantage for Canyon Residents</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">We Know the Area</h3>
                <p className="text-gray-600">
                  Being based in <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a> just
                  down I-27 means we serve Canyon daily. We know your neighborhoods, understand local building codes,
                  and have relationships with Canyon ISD and WTAMU facilities departments. Many of our Amarillo
                  customers work in Canyon - we&apos;re truly your local roofer.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fast Response Times</h3>
                <p className="text-gray-600">
                  Unlike national chains or distant contractors, we can be in Canyon within 20-30 minutes of your
                  call. After a hailstorm, every minute counts for documentation. After an emergency, fast response
                  prevents water damage. Our proximity means you get the fastest possible service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Claims Expertise</h3>
                <p className="text-gray-600">
                  We&apos;ve handled hundreds of <a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant">insurance claims</a> in
                  Canyon and throughout the Panhandle. We know exactly what adjusters look for, how to document
                  damage properly, and how to advocate for full coverage. We handle all the paperwork so you don&apos;t
                  have to.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Honest, Transparent Pricing</h3>
                <p className="text-gray-600">
                  Small town values meet professional service. We provide detailed written estimates, explain all
                  your options, and never pressure you into unnecessary work. Our reputation in the community matters
                  more than any single job - we&apos;ll be here for years to come.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Canyon Areas We Serve */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">Serving All of Canyon, Texas</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We provide professional roofing services throughout Canyon and surrounding Randall County, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700 mb-8">
                <ul className="space-y-2">
                  <li>✓ Downtown Canyon</li>
                  <li>✓ WTAMU Campus Area</li>
                  <li>✓ Historic Courthouse Square</li>
                  <li>✓ West Canyon Residential</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ East Canyon Neighborhoods</li>
                  <li>✓ Canyon ISD District</li>
                  <li>✓ Highway 60 Corridor</li>
                  <li>✓ New Subdivisions</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Palo Duro Area</li>
                  <li>✓ Canyon Country Club</li>
                  <li>✓ Student Housing Areas</li>
                  <li>✓ All Surrounding Areas</li>
                </ul>
              </div>
              <p className="text-center text-gray-600">
                Whether you&apos;re on 4th Avenue, near the WTAMU campus, in one of the historic neighborhoods,
                or in a newer development, we serve your area with fast, professional roofing services.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Customer Reviews */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">What Canyon Customers Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;5 Star came down from Amarillo within 30 minutes of my call about a leak. They had it
                  tarped and stopped before any serious water damage. Permanent repair was done the next day.
                  Perfect service!&quot;
                </p>
                <p className="font-semibold text-brand-brown">— Jennifer R., Canyon Homeowner</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;We own several rental properties near WTAMU. 5 Star handles all our roofing needs - they
                  understand student housing and always work within our budget. Highly recommend for landlords.&quot;
                </p>
                <p className="font-semibold text-brand-brown">— David M., Property Manager</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;After hail damaged our historic home near the square, 5 Star replaced our roof while
                  maintaining the original look. They really care about getting it right. Great company.&quot;
                </p>
                <p className="font-semibold text-brand-brown">— Robert T., Historic District</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/reviews/" className="text-brand-gold font-semibold hover:text-brand-gold-vibrant text-lg">
                Read More Reviews →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Our Amarillo Location */}
        <FadeIn>
          <section className="section bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Serving Canyon from Our Amarillo Office
              </h2>
              <p className="text-xl mb-6 leading-relaxed">
                Our main office is located at 2909 S Western St in Amarillo - just 15 miles south of Canyon
                via I-27. This proximity allows us to serve Canyon with the same fast, professional service
                our Amarillo customers enjoy.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
                <div>
                  <h3 className="text-xl font-bold mb-3">📍 Office Location</h3>
                  <p className="mb-2">2909 S Western St</p>
                  <p className="mb-2">Amarillo, TX 79109</p>
                  <p className="mb-2">Just 15 miles from Canyon</p>
                  <p className="text-brand-gold-light">20-30 minute response time to Canyon</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">📞 Contact Information</h3>
                  <p className="mb-2">Phone: <a href="tel:8066226041" className="hover:text-brand-gold-light">(806) 622-6041</a></p>
                  <p className="mb-2">Email: admin@5starroofingpros.com</p>
                  <p className="mb-2">Hours: Mon-Sun 9AM-5PM</p>
                  <p className="text-brand-gold-light">24/7 Emergency Service Available</p>
                </div>
              </div>
              <a
                href="/amarillo-texas-roofing/"
                className="inline-block bg-white text-brand-brown px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-all"
              >
                Visit Our Amarillo Location Page →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Canyon Property?</h2>
            <p className="cta-text">
              Whether you need hail damage assessment, roof replacement, or emergency repairs in Canyon,
              we&apos;re just down the road and ready to help. Fast service, honest pricing, and expert
              craftsmanship - that&apos;s the 5 Star difference.
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

        {/* Nearby Service Areas */}
        <FadeIn>
          <section className="section pb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Also Serving Nearby Texas Panhandle Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Amarillo
              </a>
              <span className="text-gray-400">•</span>
              <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Amarillo Roofing Services
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Bushland
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Hereford
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                View All Service Areas
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/canyon-tx-roofing/",
            "name": "5 Star Commercial Roofing - Serving Canyon, TX",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Canyon, Texas from our Amarillo location. Expert hail damage repair, residential and commercial roofing services for Canyon homes and businesses.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2909 S Western St",
              "addressLocality": "Amarillo",
              "addressRegion": "TX",
              "postalCode": "79109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.1859",
              "longitude": "-101.8313"
            },
            "telephone": "+18066226041",
            "email": "admin@5starroofingpros.com",
            "url": "https://5starroofingpros.com",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "City",
                "name": "Canyon",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Amarillo",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roofing Services in Canyon, TX",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hail Damage Roof Repair in Canyon",
                    "description": "Expert hail damage assessment and repair for Canyon, Texas properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing in Canyon",
                    "description": "Complete residential roof replacement and repair in Canyon, TX"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing in Canyon",
                    "description": "Commercial roofing for Canyon businesses and educational facilities"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Student Housing Roofing",
                    "description": "Roofing services for WTAMU student housing and multi-family properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Roof Inspections",
                    "description": "Comprehensive free roof inspections throughout Canyon, Texas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 Emergency Roof Repair",
                    "description": "Fast emergency roofing service for Canyon from our nearby Amarillo location"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "150"
            }
          })
        }}
      />
    </div>
  );
}
