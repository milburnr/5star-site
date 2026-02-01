import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Levelland TX | 5 Star Roofing',
  description: "Professional roof replacement in Levelland TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementLevellandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Levelland", url: "/roof-replacement-levelland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-levelland/#localbusiness",
        "name": "5 Star Commercial Roofing - Levelland Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-levelland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Levelland,_Texas", "name": "Levelland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Levelland TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"When should I replace my Levelland roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best."}},{"@type":"Question","name":"Will a new roof increase my home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/residential-roofing-5.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Levelland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Levelland. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">24/7</div><div className="text-brand-brown font-semibold text-lg">Emergency Service</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Levelland's Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof replacement throughout Levelland and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings that impact this South Plains community.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Since 2014, we've served Levelland's 12,565 residents with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation for this college town and agricultural center.</p>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Levelland's College Town and Agricultural Heritage</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Levelland combines the stability of a college town (home to South Plains College) with the economic strength of West Texas agriculture. This unique blend creates a diverse housing market serving students, faculty, agricultural professionals, and established families. The median household income of $51,847 reflects this economic diversity, creating varied roofing needs from budget-conscious student housing to quality family homes.</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h4 className="text-xl font-bold text-blue-800 mb-2">Levelland Community Overview</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Population:</strong> 12,565 residents (2023) - stable college and agricultural community</li>
                <li>• <strong>Median Age:</strong> 34.2 years - mix of college students and established families</li>
                <li>• <strong>Median Income:</strong> $51,847 - diverse economy supporting varied housing needs</li>
                <li>• <strong>Education Hub:</strong> South Plains College campus creates consistent housing demand</li>
                <li>• <strong>Agricultural Base:</strong> Cotton farming and related agribusiness drive local economy</li>
                <li>• <strong>Housing Mix:</strong> Student housing, faculty homes, agricultural family properties</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">College Town Housing Dynamics and Investment Opportunities</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Levelland's housing market benefits from the stability of South Plains College while serving the broader agricultural community. This creates unique roofing opportunities, from rental properties requiring durable, low-maintenance systems to family homes needing long-term value and protection in the challenging South Plains climate.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-yellow-800 mb-3">College-Influenced Housing Sectors</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Student Housing Areas:</strong> Rental properties requiring durable, maintainable systems</li>
                  <li><strong>Faculty/Staff Neighborhoods:</strong> Professional homes with quality material expectations</li>
                  <li><strong>Agricultural Family Properties:</strong> Rural and suburban homes with larger lots</li>
                  <li><strong>Historic Downtown:</strong> Older properties requiring sensitive renovation approaches</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-red-800 mb-3">South Plains Climate Factors</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Hail Alley Location:</strong> Frequent large hail events damage standard roofing</li>
                  <li><strong>Cotton Harvest Dust:</strong> Agricultural dust affects roof system ventilation</li>
                  <li><strong>High Wind Events:</strong> Open plains create sustained 40-60 mph winds</li>
                  <li><strong>Temperature Cycling:</strong> Daily 30-40°F swings stress roofing materials</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Levelland Roof Replacement Planning Guide 2025</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Strategic roofing solutions for Levelland's diverse property types, from college rental investments to agricultural family homes.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border-2 border-cyan-200">
                <h3 className="text-2xl font-bold text-cyan-800 mb-3">Practical Choice</h3>
                <div className="text-3xl font-bold text-cyan-700 mb-2">$8,500-$13,000</div>
                <p className="text-sm text-cyan-600 mb-4">Average 1,400-1,800 sq ft home</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Quality architectural shingles</li>
                  <li>• Standard synthetic underlayment</li>
                  <li>• Efficient ventilation system</li>
                  <li>• 25-30 year warranty</li>
                  <li>• Rental property suitable</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border-2 border-teal-300 transform scale-105">
                <h3 className="text-2xl font-bold text-teal-800 mb-3">Smart Investment</h3>
                <div className="text-3xl font-bold text-teal-700 mb-2">$13,000-$19,500</div>
                <p className="text-sm text-teal-600 mb-4">Class 4 impact-resistant upgrade</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Class 4 impact-resistant shingles</li>
                  <li>• Premium synthetic underlayment</li>
                  <li>• Advanced ridge ventilation</li>
                  <li>• 40-50 year warranties</li>
                  <li>• Insurance premium discounts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border-2 border-indigo-300">
                <h3 className="text-2xl font-bold text-indigo-800 mb-3">Premium Protection</h3>
                <div className="text-3xl font-bold text-indigo-700 mb-2">$19,500-$35,000</div>
                <p className="text-sm text-indigo-600 mb-4">Metal and luxury materials</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Standing seam metal roofing</li>
                  <li>• Designer architectural options</li>
                  <li>• Premium ventilation systems</li>
                  <li>• Lifetime material warranties</li>
                  <li>• Maximum weather resistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-teal-800 mb-2">Levelland Market Considerations</h4>
              <p className="text-gray-700 mb-3">College town and agricultural factors affecting roofing investment decisions:</p>
              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8">
                <li>• <strong>Rental Property ROI:</strong> Durable systems reduce maintenance calls, attract tenants</li>
                <li>• <strong>College Market Stability:</strong> South Plains College ensures steady housing demand</li>
                <li>• <strong>Agricultural Economy Support:</strong> Cotton and crop production maintain local economic base</li>
                <li>• <strong>Insurance Benefits:</strong> Hail-resistant roofs essential for premium reduction</li>
                <li>• <strong>Energy Efficiency Value:</strong> Improved insulation attracts faculty and professional tenants</li>
                <li>• <strong>Maintenance Simplicity:</strong> Low-maintenance systems ideal for rental property management</li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Roofing Materials for South Plains Conditions</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Material selection optimized for Levelland's college town needs and challenging South Plains agricultural environment.</p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-teal-800 mb-4">Class 4 Shingles - College Town Proven</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Levelland's mix of rental properties and family homes, Class 4 impact-resistant shingles provide essential protection against the frequent hailstorms that impact the South Plains. These shingles offer the durability needed for rental property management while providing the quality expected in faculty and professional neighborhoods.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-teal-700 mb-2">College Town Applications</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Rental property durability and low maintenance</li>
                        <li>• Impact resistance against frequent South Plains hail</li>
                        <li>• Professional appearance for faculty neighborhoods</li>
                        <li>• Enhanced granule adhesion reduces maintenance needs</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-teal-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Levelland Pricing Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Class 4 Shingles:</span><span>$6.75-$8.75/sq ft</span></div>
                        <div className="flex justify-between"><span>Expert Installation:</span><span>$4.25-$5.75/sq ft</span></div>
                        <div className="flex justify-between border-t border-teal-400 pt-2 font-bold"><span>Total Investment:</span><span>$11.00-$14.50/sq ft</span></div>
                      </div>
                      <p className="text-teal-100 text-sm mt-3">30-40 year lifespan • Rental property ideal • Faculty preferred</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Metal Roofing - Agricultural Durability</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">Metal roofing appeals to Levelland property owners seeking maximum durability and minimal maintenance. Particularly popular for agricultural properties and investment properties, metal roofing provides superior performance against South Plains weather while reducing long-term operating costs.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-slate-700 mb-2">Agricultural Property Benefits</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• <strong>Standing Seam Steel:</strong> No exposed fasteners, maximum durability</li>
                        <li>• <strong>Agricultural Coating:</strong> Enhanced protection against agricultural chemicals</li>
                        <li>• <strong>Energy Efficiency:</strong> Cool roof technology reduces cooling costs</li>
                        <li>• <strong>Low Maintenance:</strong> Minimal upkeep for busy agricultural operations</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-slate-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Metal System Investment</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Exposed Fastener:</span><span>$9.50-$15.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Standing Seam:</span><span>$15.00-$22.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Agricultural Grade:</span><span>$16.00-$25.00/sq ft</span></div>
                      </div>
                      <p className="text-slate-100 text-sm mt-3">50+ year lifespan • Agricultural proven • Investment grade</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-amber-800 mb-4">Rental Property Optimization Systems</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Levelland's substantial rental property market serving South Plains College students and agricultural workers, roofing system selection must balance initial investment, maintenance requirements, and tenant satisfaction. Smart choices maximize rental property ROI while ensuring reliable protection.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-amber-700 mb-2">Rental Property Optimization</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Impact-resistant materials prevent tenant damage claims</li>
                        <li>• Enhanced ventilation reduces humidity and maintenance issues</li>
                        <li>• Quality materials attract better tenants, higher rents</li>
                        <li>• Warranty coverage protects investment returns</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-amber-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Rental ROI Calculator</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Standard Upgrade:</span><span>$9.00-$13.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Impact-Resistant:</span><span>$11.00-$16.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Maintenance Reduction:</span><span>40-60% fewer calls</span></div>
                      </div>
                      <p className="text-amber-100 text-sm mt-3">3-4 year payback • Tenant satisfaction • Property differentiation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-emerald-800 text-center">The Levelland Advantage: College Stability Meets Agricultural Strength</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Educational Institution Stability</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">South Plains College provides Levelland with unusual economic stability for a community of its size. The college ensures consistent demand for quality housing, making roof replacement investments particularly secure. Faculty and staff maintain high standards for housing quality, while students create dependable rental demand.</p>
                
                <h4 className="text-xl font-bold text-emerald-700 mb-3">College Community Benefits</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Stable Rental Market:</strong> Consistent student demand supports property values</li>
                  <li>• <strong>Professional Standards:</strong> Faculty expect quality home improvements and maintenance</li>
                  <li>• <strong>Economic Diversification:</strong> College buffers agricultural economic cycles</li>
                  <li>• <strong>Quality Workforce:</strong> Educational professionals value property improvements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Agricultural Climate Resilience</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Levelland's position in the heart of South Plains cotton country requires roofing systems designed for agricultural environments. From dust management to chemical resistance, successful roofing investment accounts for the unique challenges of agricultural community living.</p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-green-700 mb-3">Agricultural Season Planning</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Spring Preparation:</span>
                      <span className="text-green-600">Pre-storm season readiness</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Summer Installation:</span>
                      <span className="text-green-600">Between cotton planting and harvest</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Fall Completion:</span>
                      <span className="text-green-600">Post-harvest project finishing</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Winter Planning:</span>
                      <span className="text-green-600">Next year preparation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Levelland roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will a new roof increase my home value?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Levelland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Levelland property owners. Expert roof replacement with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}