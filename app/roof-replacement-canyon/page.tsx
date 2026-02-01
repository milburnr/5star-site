import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Replacement Canyon TX | 5 Star Roofing',
  description: "Professional roof replacement in Canyon TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementCanyonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Canyon", url: "/roof-replacement-canyon/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Roof Replacement",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Canyon TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"When should I replace my Canyon roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles (residential) and TPO or metal (commercial) handle Texas hail, wind, and temperature extremes best."}},{"@type":"Question","name":"Will a new roof increase my home value?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI. Class 4 roofs add premium value with insurance discounts and reduced maintenance."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/residential-roofing-5.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Canyon</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Canyon. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Canyon's Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional roof replacement throughout Canyon and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings that characterize this unique university community.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Since 2014, we've served Canyon's 16,457 residents with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation for this growing university town that's home to West Texas A&M University.</p>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">Canyon's University Town Housing Dynamics</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Canyon presents a distinctive housing market shaped by its role as a university community. Home to West Texas A&M University, the city demonstrates unique demographic patterns that create specific roofing opportunities and challenges. The combination of young residents (median age 28.2), steady growth (1.8% annually), and diverse housing needs creates a dynamic market for roof replacement services.</p>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8">
              <h4 className="text-xl font-bold text-emerald-800 mb-2">Canyon University Community Profile</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Population:</strong> 16,457 residents (2024) - growing at 1.8% annually</li>
                <li>• <strong>Median Age:</strong> 28.2 years - young university-influenced community</li>
                <li>• <strong>Median Income:</strong> $68,233 - educated professional workforce</li>
                <li>• <strong>Ethnic Composition:</strong> 75.3% White, 17.8% Hispanic, 3.9% Black</li>
                <li>• <strong>Housing Mix:</strong> University-proximate neighborhoods, faculty housing, family homes</li>
                <li>• <strong>Market Character:</strong> Stable academic economy with professional growth</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-brand-brown">University Town Housing Stock and Investment Patterns</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Canyon's housing market reflects its academic foundation with a mix of historic neighborhoods, modern family developments, and investment properties serving the university community. The presence of West Texas A&M University creates sustained housing demand, making roof replacement investments particularly valuable for property value maintenance and rental income optimization.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-blue-800 mb-3">University-Influenced Housing Zones</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Campus-Adjacent Areas:</strong> Student rental properties requiring durable roofing</li>
                  <li><strong>Faculty Neighborhoods:</strong> Professional homes with quality material preferences</li>
                  <li><strong>Family Developments:</strong> Modern construction with impact-resistance needs</li>
                  <li><strong>Historic Districts:</strong> Older homes requiring architectural compatibility</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-teal-800 mb-3">West Texas Climate Challenges</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Hail Events:</strong> Spring storms bring golf ball to tennis ball-sized hail</li>
                  <li><strong>Wind Patterns:</strong> Open plains create sustained 30-50 mph winds</li>
                  <li><strong>Temperature Swings:</strong> -5°F to 100°F annual range stresses materials</li>
                  <li><strong>UV Exposure:</strong> High plains altitude intensifies solar radiation</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Canyon Roof Replacement Investment Strategy 2025</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Tailored pricing for Canyon's diverse property types, from student housing to executive homes in this thriving university community.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Reliable Protection</h3>
                <div className="text-3xl font-bold text-blue-700 mb-2">$9,000-$14,000</div>
                <p className="text-sm text-blue-600 mb-4">Average 1,500-2,000 sq ft home</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Architectural asphalt shingles</li>
                  <li>• Standard underlayment</li>
                  <li>• Proper ventilation system</li>
                  <li>• 25-year warranty</li>
                  <li>• Rental property friendly</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300 transform scale-105">
                <h3 className="text-2xl font-bold text-green-800 mb-3">Professional Choice</h3>
                <div className="text-3xl font-bold text-green-700 mb-2">$14,000-$21,000</div>
                <p className="text-sm text-green-600 mb-4">Class 4 impact-resistant system</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Class 4 impact-resistant shingles</li>
                  <li>• Synthetic underlayment</li>
                  <li>• Enhanced ridge ventilation</li>
                  <li>• 30-50 year warranties</li>
                  <li>• Insurance premium discounts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Executive Standard</h3>
                <div className="text-3xl font-bold text-purple-700 mb-2">$21,000-$40,000</div>
                <p className="text-sm text-purple-600 mb-4">Premium materials and systems</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Designer architectural shingles</li>
                  <li>• Metal roofing options</li>
                  <li>• Advanced ventilation systems</li>
                  <li>• Lifetime material warranties</li>
                  <li>• Maximum curb appeal enhancement</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-green-800 mb-2">Canyon Market Considerations</h4>
              <p className="text-gray-700 mb-3">University town factors affecting roofing investment decisions:</p>
              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8">
                <li>• <strong>Rental Property ROI:</strong> Quality roofing attracts better tenants, higher rents</li>
                <li>• <strong>Professional Standards:</strong> Faculty and staff expect quality home improvements</li>
                <li>• <strong>Property Value Stability:</strong> University presence maintains consistent demand</li>
                <li>• <strong>Insurance Considerations:</strong> Hail-resistant materials provide significant savings</li>
                <li>• <strong>Resale Market:</strong> Educated buyers value quality materials and warranties</li>
                <li>• <strong>Permit Efficiency:</strong> City process typically 3-5 business days</li>
              </ul>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Roofing Materials for Canyon's Academic Community</h2>
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">Material selection optimized for university town property types, from student housing durability to executive home aesthetics.</p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-emerald-800 mb-4">High-Performance Architectural Shingles - University Standard</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Canyon's diverse property needs, high-performance architectural shingles provide the perfect balance of durability, aesthetics, and value. These shingles meet the demanding requirements of both rental properties and professional residences while providing excellent protection against West Texas weather.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-emerald-700 mb-2">University Town Benefits</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Multiple architectural styles available</li>
                        <li>• Superior granule adhesion reduces maintenance</li>
                        <li>• Enhanced tab bonding for wind resistance</li>
                        <li>• Color options complement campus aesthetics</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-emerald-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Canyon Investment Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Premium Shingles:</span><span>$7.00-$9.50/sq ft</span></div>
                        <div className="flex justify-between"><span>Professional Install:</span><span>$4.50-$6.00/sq ft</span></div>
                        <div className="flex justify-between border-t border-emerald-400 pt-2 font-bold"><span>Complete System:</span><span>$11.50-$15.50/sq ft</span></div>
                      </div>
                      <p className="text-emerald-100 text-sm mt-3">30-40 year lifespan • Wind resistant • Rental property proven</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Metal Roofing - Executive and Investment Property Choice</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">Metal roofing appeals to Canyon's professional community seeking long-term value and minimal maintenance. Particularly popular among faculty homes and high-end rental properties, metal roofing provides unmatched durability and energy efficiency in West Texas conditions.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-slate-700 mb-2">Professional Property Features</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• <strong>Standing Seam Steel:</strong> Clean lines, professional appearance</li>
                        <li>• <strong>Stone-Coated Steel:</strong> Traditional look with metal benefits</li>
                        <li>• <strong>Aluminum Options:</strong> Lightweight, corrosion-resistant</li>
                        <li>• <strong>Energy Efficiency:</strong> Cool roof technology reduces cooling costs</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-slate-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Metal System Investment</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Exposed Fastener:</span><span>$10-$16/sq ft</span></div>
                        <div className="flex justify-between"><span>Standing Seam:</span><span>$16-$24/sq ft</span></div>
                        <div className="flex justify-between"><span>Stone-Coated Steel:</span><span>$14-$22/sq ft</span></div>
                      </div>
                      <p className="text-slate-100 text-sm mt-3">50+ year lifespan • Energy savings • Faculty preferred</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-amber-800 mb-4">Student Housing and Rental Property Systems</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">For Canyon's substantial rental property market serving university students and staff, roofing systems must balance initial cost, durability, and maintenance requirements. Smart material selection maximizes rental property ROI while providing reliable tenant satisfaction.</p>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="text-xl font-bold text-amber-700 mb-2">Rental Property Optimization</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Durable materials reduce maintenance calls</li>
                        <li>• Impact resistance prevents tenant-caused damage</li>
                        <li>• Energy efficiency reduces operating costs</li>
                        <li>• Attractive appearance enhances rental rates</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-amber-600 text-white p-6 rounded-xl">
                      <h4 className="text-2xl font-bold mb-3">Rental ROI Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Standard Upgrade:</span><span>$8.50-$12.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Impact-Resistant:</span><span>$11.00-$16.00/sq ft</span></div>
                        <div className="flex justify-between"><span>Insurance Savings:</span><span>$200-600/year</span></div>
                      </div>
                      <p className="text-amber-100 text-sm mt-3">3-5 year payback • Tenant satisfaction • Property differentiation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-indigo-800 text-center">The Canyon Advantage: Academic Stability Meets Texas Growth</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">University Town Investment Security</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Canyon's foundation as a university community provides unusual stability in the Texas real estate market. The presence of West Texas A&M University ensures consistent demand for quality housing, making roof replacement investments particularly secure with predictable returns on both owner-occupied and rental properties.</p>
                
                <h4 className="text-xl font-bold text-indigo-700 mb-3">Academic Community Benefits</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Stable Demand:</strong> University ensures consistent housing market</li>
                  <li>• <strong>Professional Standards:</strong> Educated community values quality improvements</li>
                  <li>• <strong>Growth Trajectory:</strong> University expansion drives property value increases</li>
                  <li>• <strong>Rental Sustainability:</strong> Student and faculty housing creates year-round demand</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Weather Resilience Planning</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Canyon's position on the Texas High Plains requires roofing systems engineered for extreme weather variability. From spring hailstorms to winter freeze-thaw cycles, successful roofing investment depends on materials and installation designed for long-term climate resilience.</p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-blue-700 mb-3">Seasonal Roofing Strategy</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Spring Planning:</span>
                      <span className="text-blue-600">March-April hail damage assessment</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Summer Installation:</span>
                      <span className="text-blue-600">May-August optimal weather window</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Fall Completion:</span>
                      <span className="text-blue-600">September-October final projects</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Winter Maintenance:</span>
                      <span className="text-blue-600">Emergency repairs and planning</span>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Canyon roof?</AccordionTrigger>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Canyon property owners. Expert roof replacement with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}