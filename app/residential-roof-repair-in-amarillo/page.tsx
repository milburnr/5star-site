import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roof Repair Amarillo TX | 5 Star',
  description: 'Roof Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Roof Repair",
  "provider": {
    "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
    "name": "5 Star Commercial Roofing",
    "telephone": "(806) 622-6041",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2909 S Western St",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79109",
      "addressCountry": "US"
    },
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Amarillo",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Midland",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Odessa",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Lubbock",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Residential Roof Repair Services",
    "itemListElement": [
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
          "name": "Leak Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shingle Replacement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Roof Repair"
        }
      }
    ]
  },
  "url": "https://5starcommercialroofing.com/residential-roof-repair-in-amarillo"
};

export default function Page() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Residential Roof Repair",
                      "url": "/residential-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/residential-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roof-repair-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/residential-roof-repair-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold mb-6">Residential Roof Repair in Amarillo & West Texas</h1>

        <div className="content-block">
          <h2 className="content-block-title">Expert Roof Repair for Amarillo Homes</h2>
          <p className="text-lg">
            When it comes to residential roof repair in Amarillo, homeowners face unique challenges due to the extreme weather conditions in the Texas Panhandle. High winds, frequent hailstorms, intense UV exposure, and dramatic temperature swings can all cause significant damage to roofs. The region sits in America's hail belt, experiencing an average of 8-12 hailstorms per year, making roof maintenance and regular roof inspections essential for catching potential roof leaks before they become major problems.
          </p>
          <p className="text-lg mt-4">
            At 5 Star Commercial Roofing, we provide comprehensive <a href="/residential-roofing-amarillo-texas/" className="text-brand-brown hover:text-brand-gold underline">residential roofing services</a> throughout Amarillo, Midland, Odessa, and Lubbock. Our experienced team understands the specific vulnerabilities that West Texas weather creates, and we deliver prompt, reliable roof repair services to efficiently restore your roof and ensure your home is protected from the elements. Whether you need emergency <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">hail damage repair</a> or routine maintenance, we're here to help 24/7.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Residential Roof Repairs in Amarillo</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Hail Damage Repair</h3>
              <p className="mb-3">
                Hailstorms are the leading cause of roof damage in Amarillo. Even small hailstones can bruise asphalt shingles, causing granule loss and compromising waterproofing. Our technicians are trained to identify all forms of hail damage, including impacts that may not be immediately visible but will lead to leaks in the future.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Comprehensive hail damage assessment</li>
                <li>Insurance claim documentation and support</li>
                <li>Impact-resistant shingle replacement</li>
                <li>Complete roof restoration</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Leak Repair</h3>
              <p className="mb-3">
                Roof leaks can occur from storm damage, failed flashing, aging materials, or improper installation. Left unaddressed, even small leaks lead to water damage, mold growth, and structural deterioration. We use advanced moisture detection technology to locate the source of leaks and provide permanent repairs.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Thermal imaging leak detection</li>
                <li>Emergency tarping service</li>
                <li>Interior damage assessment</li>
                <li>Permanent leak repair solutions</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Wind Damage Repair</h3>
              <p className="mb-3">
                With average wind speeds of 12-14 mph and storm gusts regularly exceeding 60 mph, wind damage is common in Amarillo. High winds can lift shingles, tear flashing, and drive rain under roofing materials. We repair wind damage promptly to prevent secondary water damage.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Missing shingle replacement</li>
                <li>Flashing repair and replacement</li>
                <li>Wind-rated material installation</li>
                <li>Structural damage assessment</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-brand-brown mb-3">Flashing Repairs</h3>
              <p className="mb-3">
                Flashing around chimneys, vents, skylights, and valleys is critical for directing water away from vulnerable areas. Extreme temperature swings in West Texas cause flashing sealant to crack and metal to expand/contract, leading to gaps where water enters. We repair or replace failed flashing with high-quality materials.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Chimney flashing repair</li>
                <li>Valley flashing replacement</li>
                <li>Vent boot replacement</li>
                <li>Skylight re-sealing</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Signs You Need Roof Repair</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="mb-4">Don't wait for obvious leaks to get your roof inspected. Watch for these warning signs that indicate repair needs:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>Missing, cracked, or curling shingles</li>
              <li>Granules accumulating in gutters</li>
              <li>Water stains on ceilings or walls</li>
              <li>Sagging roof deck</li>
              <li>Daylight visible through roof boards</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Increased energy bills from air leaks</li>
              <li>Mold or mildew growth in attic</li>
              <li>Damaged or missing flashing</li>
              <li>Interior musty odors</li>
              <li>Recent hail or wind storm</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Residential Roof Repair Process</h2>
        <div className="space-y-3 mb-8">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h5 className="step-title">Free Inspection & Assessment</h5>
              <p className="step-text">We conduct a thorough inspection of your entire roof, identifying all damage and potential problem areas. For storm damage, we use drone technology to document damage for insurance purposes.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h5 className="step-title">Detailed Repair Estimate</h5>
              <p className="step-text">You receive a comprehensive written estimate outlining all necessary repairs, materials, and costs. We explain your options and answer all questions so you can make informed decisions.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h5 className="step-title">Insurance Claim Assistance</h5>
              <p className="step-text">If filing an insurance claim for storm damage, we provide detailed documentation, meet with your adjuster, and ensure all damage is properly noted to maximize your coverage.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h5 className="step-title">Professional Repairs</h5>
              <p className="step-text">Our experienced crews complete repairs efficiently while maintaining the highest quality standards. We protect your property, clean up thoroughly, and ensure everything meets our specifications.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h5 className="step-title">Final Inspection & Warranty</h5>
              <p className="step-text">We conduct a final inspection to verify all repairs meet our standards and provide warranty documentation for materials and workmanship.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star Commercial Roofing for Repairs</h2>
        <div className="card mb-8">
          <div className="card-body">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600 mb-4">Storm damage doesn't wait for business hours. Call (806) 622-6041 anytime for emergency tarping and leak repair. We respond quickly to minimize interior damage.</p>

                <h3 className="font-bold text-lg text-brand-brown mb-2">Insurance Expertise</h3>
                <p className="text-gray-600 mb-4">We've worked with every major insurance carrier in Texas and know exactly what documentation is needed to get your claim approved quickly.</p>

                <h3 className="font-bold text-lg text-brand-brown mb-2">Quality Materials</h3>
                <p className="text-gray-600">We only use top-rated roofing materials designed for West Texas weather conditions, including Class 4 impact-resistant shingles that may qualify you for insurance discounts.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-2">Local Expertise</h3>
                <p className="text-gray-600 mb-4">We understand Amarillo's specific climate challenges and know which repair solutions work best for this region's unique weather patterns.</p>

                <h3 className="font-bold text-lg text-brand-brown mb-2">Free Inspections</h3>
                <p className="text-gray-600 mb-4">Not sure if you need repairs? We provide complimentary roof inspections with detailed reports on condition and recommended actions. No pressure sales.</p>

                <h3 className="font-bold text-lg text-brand-brown mb-2">Workmanship Guarantee</h3>
                <p className="text-gray-600">Every repair is backed by our workmanship warranty, giving you peace of mind that the job is done right.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Repair vs. Replacement: Making the Right Choice</h2>
        <div className="card mb-8">
          <div className="card-body">
            <p className="mb-4">
              Not every roof problem requires complete replacement. Our honest assessments help you make cost-effective decisions. Here's how we determine whether repair or replacement is the best option:
            </p>
            <h3 className="text-xl font-semibold text-brand-brown mb-3">When Repair Makes Sense</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Roof is less than 15 years old with isolated damage</li>
              <li>Damage is localized to a specific area</li>
              <li>Overall roof condition is good</li>
              <li>Budget constraints require a more economical solution</li>
              <li>Insurance covers specific storm damage repairs</li>
            </ul>
            <h3 className="text-xl font-semibold text-brand-brown mb-3">When Replacement is Better</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Roof is over 20 years old or nearing end of lifespan</li>
              <li>Widespread damage across multiple roof areas</li>
              <li>Multiple layers of existing shingles</li>
              <li>Structural damage to roof decking</li>
              <li>Repeated repair needs indicating systemic failure</li>
            </ul>
            <p className="mt-4">
              We provide honest recommendations based on your specific situation, never pushing unnecessary services. If repair is feasible and cost-effective, we'll tell you. If replacement makes more sense long-term, we'll explain why. For more information on full replacements, visit our <a href="/residential-roof-replacement-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">residential roof replacement</a> page.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Service Areas</h2>
        <div className="card mb-8">
          <div className="card-body">
            <p className="mb-4">
              Our residential roof repair services are available throughout the Texas Panhandle and West Texas region:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold mb-2">Texas Panhandle</h3>
                <ul className="space-y-1">
                  <li><a href="/roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">Amarillo</a></li>
                  <li>Canyon</li>
                  <li>Borger</li>
                  <li>Pampa</li>
                  <li>Dumas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Permian Basin</h3>
                <ul className="space-y-1">
                  <li><a href="/midland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Midland</a></li>
                  <li><a href="/odessa-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">Odessa</a></li>
                  <li>Andrews</li>
                  <li>Big Spring</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">South Plains</h3>
                <ul className="space-y-1">
                  <li>Lubbock</li>
                  <li>Plainview</li>
                  <li>Levelland</li>
                  <li>Brownfield</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-8">
          <div className="card">
            <div className="card-body">
              <h3 className="font-bold mb-2">How quickly can you respond to emergency repairs?</h3>
              <p>We offer 24/7 emergency service for active leaks and storm damage. Call (806) 622-6041 anytime, and we'll dispatch crews to your location as quickly as possible—often within hours during major storm events.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="font-bold mb-2">Will my homeowners insurance cover roof repairs?</h3>
              <p>Most homeowners insurance policies in Texas cover storm damage including hail and wind. We provide detailed documentation to support your claim and work directly with insurance adjusters to ensure all damage is properly noted.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="font-bold mb-2">How long do roof repairs typically take?</h3>
              <p>Simple repairs like replacing a few shingles or fixing flashing can be completed in a few hours. More extensive repairs may take 1-3 days. We provide specific timelines after our inspection.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="font-bold mb-2">Do you offer warranties on repair work?</h3>
              <p>Yes. All our repairs are backed by our workmanship warranty, and materials come with manufacturer warranties. We provide all warranty documentation for your records.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8">
          <h3 className="font-bold mb-3">Don't Wait—Address Roof Damage Promptly</h3>
          <p>Small roof problems become expensive major repairs if left unaddressed. Water damage, mold growth, and structural deterioration can all result from delaying necessary repairs. Schedule your free inspection today to catch problems early and protect your home investment. For comprehensive roofing solutions, explore our full range of <a href="/services/" className="text-brand-brown hover:text-brand-gold underline">roofing services</a>.</p>
        </div>

        <section className="cta-section mt-12">
          <h2 className="cta-title">Schedule Your Free Roof Inspection Today</h2>
          <p className="cta-text">
            Serving Amarillo and the entire Texas Panhandle with expert residential roof repair services. Emergency service available 24/7. Most insurance claims cover storm damage.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">📞 Call (806) 622-6041
            </a>
            <a href="/contact/" className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
              Request Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
