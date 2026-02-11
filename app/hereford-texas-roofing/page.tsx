import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roofing in Hereford, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Hereford, Texas Panhandle. Residential, commercial, and hail damage repair. Serving Deaf Smith County. Free inspections available.',
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://5starcommercialroofing.com/hereford-texas-roofing/",
  "name": "5 Star Commercial Roofing - Hereford",
  "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
  "telephone": "(806) 622-6041",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2909 S Western St",
    "addressLocality": "Amarillo",
    "addressRegion": "TX",
    "postalCode": "79109",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Hereford",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Deaf Smith County"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Roofing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Roofing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hail Damage Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Metal Roofing Installation"
        }
      }
    ]
  }
};

export default function HerefordRoofingPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Service Areas",
                      "url": "/service-areas/"
              },
              {
                      "name": "Hereford",
                      "url": "/hereford-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="min-h-screen">
        <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-17-1280w.webp)', backgroundPosition: 'center'}}>
          <div className="hero-overlay"></div>
          <FadeIn>
            <div className="hero-content">
              <h1 className="hero-title">Hereford&apos;s Professional Roofing Contractor</h1>
              <p className="hero-subtitle">Serving Hereford, Texas & Deaf Smith County</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Inspection</a>
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
          <FadeIn>
            <section className="section">
              <h2 className="section-title">Professional Roofing Services in Hereford, Texas</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 mb-6">
                  Located in the heart of Deaf Smith County, Hereford faces unique roofing challenges from the Texas Panhandle's severe weather conditions. From intense hailstorms and high winds to extreme temperature swings and UV exposure, your roof takes a beating year-round. At 5 Star Commercial Roofing, we've been protecting Hereford homes and businesses with expert roofing solutions designed specifically for West Texas weather.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you need emergency <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">hail damage repair</a>, a complete roof replacement, or routine maintenance, our experienced team delivers quality workmanship backed by industry-leading warranties. We serve all of Hereford and surrounding communities in Deaf Smith County with the same commitment to excellence.
                </p>
              </div>
            </section>
          </FadeIn>

          <section className="section">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Roofing Services in Hereford</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="card-hover p-6">
                  <div className="text-5xl mb-4">🌨️</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                  <p className="text-gray-600 mb-4">Hereford sits in America's hail belt, experiencing frequent severe storms. Our storm damage specialists provide emergency response, comprehensive damage assessment, and insurance claim support to get your roof restored quickly. We work with all major insurance carriers and document damage thoroughly to maximize your claim.</p>
                  <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold font-semibold">Learn More →</a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="card-hover p-6">
                  <div className="text-5xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing</h3>
                  <p className="text-gray-600 mb-4">From asphalt shingle installation to complete roof replacements, we protect Hereford homes with quality materials rated for extreme Texas Panhandle weather. Our <a href="/residential-roofing-amarillo-texas/" className="text-brand-brown hover:text-brand-gold underline">residential roofing services</a> include impact-resistant shingles, proper ventilation, and energy-efficient solutions that reduce cooling costs.</p>
                  <a href="/residential-roofing-in-amarillo/" className="text-brand-gold font-semibold">Learn More →</a>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="card-hover p-6">
                  <div className="text-5xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                  <p className="text-gray-600 mb-4">Hereford businesses need reliable roofing that protects valuable assets and minimizes downtime. We specialize in TPO, EPDM, and metal roofing systems designed for commercial applications. Our <a href="/commercial-roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">commercial roofing solutions</a> feature long-lasting materials and professional installation.</p>
                  <a href="/services/" className="text-brand-gold font-semibold">Learn More →</a>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="card-hover p-6">
                  <div className="text-5xl mb-4">🔩</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Metal Roofing</h3>
                  <p className="text-gray-600 mb-4">Metal roofs excel in Hereford's harsh climate, offering superior hail resistance, fire protection, and longevity of 40-70 years. Available in various profiles and colors, metal roofing provides energy efficiency and can reduce insurance premiums due to impact resistance ratings.</p>
                  <a href="/services/" className="text-brand-gold font-semibold">Learn More →</a>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="card-hover p-6">
                  <div className="text-5xl mb-4">🛠️</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Roof Repair Services</h3>
                  <p className="text-gray-600 mb-4">Not every problem requires a full replacement. Our expert repair services address leaks, damaged flashing, missing shingles, and storm damage. We provide honest assessments and cost-effective solutions to extend your roof's lifespan.</p>
                  <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold font-semibold">Learn More →</a>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="card-hover p-6">
                  <div className="text-5xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Roof Replacement</h3>
                  <p className="text-gray-600 mb-4">When repairs are no longer cost-effective, complete replacement is the best solution. We remove old roofing materials, inspect and repair decking, and install new roofing systems built to withstand decades of Texas weather.</p>
                  <a href="/roof-replacement-in-amarillo/" className="text-brand-gold font-semibold">Learn More →</a>
                </div>
              </FadeIn>
            </div>
          </section>

          <section className="section bg-gray-50 -mx-4 px-4 py-12 md:-mx-8 md:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">Why Hereford Property Owners Choose 5 Star Commercial Roofing</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl text-brand-brown mb-3">Local Texas Panhandle Expertise</h3>
                    <p className="text-gray-600">We understand Hereford's specific climate challenges. From hailstorms that strike without warning to wind speeds that regularly exceed 40 mph, our installations are engineered for these exact conditions.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl text-brand-brown mb-3">Insurance Claims Specialists</h3>
                    <p className="text-gray-600">We work directly with insurance adjusters, providing detailed damage documentation, drone footage, and expert testimony to ensure you receive the full coverage you deserve for storm damage claims.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl text-brand-brown mb-3">Quality Materials & Workmanship</h3>
                    <p className="text-gray-600">We only install roofing products rated for severe weather conditions, including Class 4 impact-resistant shingles and wind-rated materials. Every installation is backed by manufacturer warranties and our workmanship guarantee.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl text-brand-brown mb-3">Emergency Response Available</h3>
                    <p className="text-gray-600">Storm damage doesn't wait for business hours. Call (806) 622-6041 anytime for emergency tarping and damage assessment. We respond quickly to minimize water damage and begin the restoration process.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl text-brand-brown mb-3">Free Inspections & Estimates</h3>
                    <p className="text-gray-600">Not sure if you need repairs or replacement? We provide complimentary roof inspections with detailed reports on condition, remaining lifespan, and recommended actions. No pressure sales—just honest advice.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl text-brand-brown mb-3">Regional Coverage</h3>
                    <p className="text-gray-600">Based in Amarillo and serving the entire Texas Panhandle and West Texas region, including <a href="/midland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Odessa</a>, and Lubbock.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          <section className="section">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">Understanding Hereford's Roofing Challenges</h2>
              <div className="max-w-4xl mx-auto">
                <div className="card mb-6">
                  <div className="card-body">
                    <h3 className="text-xl font-semibold text-brand-brown mb-3">Severe Hailstorms</h3>
                    <p className="mb-4">
                      Deaf Smith County experiences some of the most frequent hail activity in the United States. The region averages 8-12 hailstorms per year, with stones often exceeding 2 inches in diameter. This constant bombardment creates granule loss, bruising, and fractures in asphalt shingles that compromise waterproofing.
                    </p>
                    <p>
                      Impact-resistant Class 4 shingles can reduce damage significantly and may qualify you for insurance discounts of 10-30% in Hereford.
                    </p>
                  </div>
                </div>

                <div className="card mb-6">
                  <div className="card-body">
                    <h3 className="text-xl font-semibold text-brand-brown mb-3">High Wind Events</h3>
                    <p className="mb-4">
                      The Texas Panhandle's flat terrain creates ideal conditions for sustained high winds. Average wind speeds in Hereford are 12-14 mph, with storm events regularly producing gusts over 60 mph. These winds can lift shingles, tear flashing, and drive rain under roofing materials.
                    </p>
                    <p>
                      Proper installation techniques including adequate nailing patterns and high-wind rated shingles are critical in Hereford to prevent wind damage.
                    </p>
                  </div>
                </div>

                <div className="card mb-6">
                  <div className="card-body">
                    <h3 className="text-xl font-semibold text-brand-brown mb-3">Extreme Temperature Swings</h3>
                    <p className="mb-4">
                      Hereford experiences dramatic temperature fluctuations, from below 0°F in winter to over 100°F in summer. These cycles cause expansion and contraction in roofing materials, leading to cracking, warping, and seal failure over time.
                    </p>
                    <p>
                      Quality roofing materials engineered for thermal cycling perform better and last longer in Hereford's climate than standard products.
                    </p>
                  </div>
                </div>

                <div className="card mb-6">
                  <div className="card-body">
                    <h3 className="text-xl font-semibold text-brand-brown mb-3">Intense UV Exposure</h3>
                    <p>
                      At 3,800 feet elevation with over 260 sunny days per year, Hereford roofs face relentless UV radiation. This exposure degrades asphalt shingles, causing them to become brittle and lose flexibility sooner than in less sunny climates. UV-resistant roofing materials and proper attic ventilation help combat this accelerated aging.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          <section className="section">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">Our Roofing Process in Hereford</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5 className="step-title">Free Inspection</h5>
                    <p className="step-text">We conduct a thorough roof inspection, documenting current condition, identifying damage, and assessing remaining lifespan. For storm damage, we use drone technology to capture detailed imagery for insurance documentation.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5 className="step-title">Detailed Estimate</h5>
                    <p className="step-text">You receive a comprehensive written estimate outlining materials, labor, timeline, and warranty information. We explain all options and answer questions so you can make informed decisions.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5 className="step-title">Insurance Coordination</h5>
                    <p className="step-text">If filing an insurance claim, we meet with your adjuster, provide documentation, and ensure all damage is properly noted. We handle the paperwork and negotiation to maximize your coverage.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h5 className="step-title">Professional Installation</h5>
                    <p className="step-text">Our experienced crews complete your roofing project efficiently while maintaining the highest quality standards. We protect your property, clean up thoroughly, and conduct final inspections to ensure everything meets our specifications.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h5 className="step-title">Warranty & Follow-Up</h5>
                    <p className="step-text">Every project includes manufacturer material warranties and our workmanship guarantee. We provide all documentation and remain available for any questions or concerns after completion.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          <section className="section bg-gray-50 -mx-4 px-4 py-12 md:-mx-8 md:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-brand-brown mb-2">How long does a typical roof last in Hereford?</h3>
                  <p className="text-gray-600">Due to Hereford's harsh climate, standard asphalt shingles typically last 15-20 years, compared to 20-30 years in milder climates. Impact-resistant shingles and metal roofs last longer—metal roofing can last 40-70 years in this climate.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Do you offer financing for roofing projects?</h3>
                  <p className="text-gray-600">Yes, we work with financing partners to offer flexible payment options for qualified customers. Many insurance claims also cover storm damage, which can significantly reduce out-of-pocket costs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-brand-brown mb-2">How quickly can you respond to emergency repairs?</h3>
                  <p className="text-gray-600">We offer 24/7 emergency service for active leaks and storm damage. Call (806) 622-6041 anytime, and we'll dispatch crews to your Hereford location as quickly as possible—often within hours during major storm events.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-brand-brown mb-2">What areas do you serve besides Hereford?</h3>
                  <p className="text-gray-600">We serve the entire Texas Panhandle and West Texas region, including <a href="/roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">Amarillo</a>, Canyon, Dumas, Borger, Plainview, Midland, Odessa, and Lubbock. Our regional coverage ensures consistent service quality across all locations.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          <FadeIn>
            <section className="cta-section my-16">
              <h2 className="cta-title">Protecting Hereford Properties for Years to Come</h2>
              <p className="cta-text">
                Free inspections and expert roofing throughout Deaf Smith County. Emergency service available 24/7.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4 inline-block">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4 inline-block">Request Free Inspection</a>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
