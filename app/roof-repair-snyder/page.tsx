import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "Roof Repair Snyder TX | 5 Star Commercial Roofing",
  description: "Professional roof repair services in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairSnyderPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Repair",
                      "url": "/roof-repair/"
              },
              {
                      "name": "Snyder",
                      "url": "/roof-repair-snyder/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.1768,
                "longitude": -101.8590
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Snyder",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional roof repair services in Snyder TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/roof-repair-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/75 to-amber-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Repair in <span className="text-brand-gold-light">Snyder</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Roof Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof repair services in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Snyder's Premier Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Snyder, Texas, positioned at 2,316 feet elevation in Scurry County, faces severe West Texas weather that challenges even the most robust roofing systems. This historic town experiences 7-9 devastating hailstorms annually, with spring supercells producing hail up to golf ball-size. Combined with sustained winds reaching 70+ mph, temperature swings from -8°F to 112°F, and intense solar radiation, Snyder properties demand specialized roofing expertise.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected over 275 properties throughout Snyder and Scurry County with premium materials designed for West Texas extremes. From historic buildings near the Scurry County Museum to modern facilities along Highway 84, we understand the unique combination of agricultural heritage and severe weather that defines Snyder's roofing challenges.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">West Texas Weather Challenges in Snyder</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Snyder's position between the Llano Estacado and rolling plains creates convergence zones where air masses collide, producing intense weather events. The open terrain allows storms to develop rapidly and maintain intensity, creating some of West Texas's most challenging conditions for roofing systems.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Snyder Weather Extremes:</h4>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• <strong>Hail Season:</strong> March-July with devastating spring supercells</li>
                <li>• <strong>Wind Exposure:</strong> Open terrain creates sustained 20-30 mph winds</li>
                <li>• <strong>Temperature Cycling:</strong> Daily swings up to 50°F stress materials</li>
                <li>• <strong>Agricultural Dust:</strong> Seasonal dust storms affect roof systems</li>
                <li>• <strong>Drought/Flood Cycles:</strong> Extreme weather variability</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Comprehensive Roof Repair Services</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Snyder team specializes in addressing West Texas weather damage patterns. From hail impact craters to wind uplift damage, thermal expansion issues to agricultural dust infiltration, we provide complete restoration using materials and methods proven effective in Scurry County's demanding environment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Restoration</h4>
                <p className="text-gray-600 mb-3">Expert repair of West Texas severe weather damage patterns.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Hail damage assessment</li>
                  <li>• Wind uplift reinforcement</li>
                  <li>• Emergency leak repairs</li>
                  <li>• Insurance documentation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Building Services</h4>
                <p className="text-gray-600 mb-3">Specialized solutions for rural and agricultural properties.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Barn and outbuilding repairs</li>
                  <li>• Livestock facility protection</li>
                  <li>• Large-span roof systems</li>
                  <li>• Practical durability focus</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Snyder Area Communities</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our services extend throughout Snyder and surrounding Scurry County agricultural areas. From established residential neighborhoods to working ranches and farms, we've built lasting relationships through reliable service and quality workmanship tailored to each property's specific needs.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Scurry County-Proven Solutions</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Impact-Resistant Materials</h5>
                  <p className="text-sm text-gray-600">Class 4 systems proven against West Texas hail patterns.</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Wind-Rated Systems</h5>
                  <p className="text-sm text-gray-600">Enhanced fastening for sustained wind exposure.</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Agricultural Applications</h5>
                  <p className="text-sm text-gray-600">Practical solutions for working buildings and rural properties.</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-brand-gold">Local Expertise</h5>
                  <p className="text-sm text-gray-600">Deep understanding of Scurry County conditions and needs.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Snyder, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-100.92!3d32.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sSnyder%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Snyder, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  How do West Texas winds affect roofing in Snyder?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Snyder's open terrain creates sustained high winds that constantly test roofing systems. Unlike occasional gusts, these persistent winds gradually work fasteners loose and lift shingles over time. We use enhanced fastening patterns and wind-rated materials specifically designed for West Texas exposure to ensure long-term performance in these challenging conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown">
                  What makes agricultural buildings different for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Agricultural buildings face unique challenges including large spans without interior support, exposure to dust and chemicals, livestock considerations, and cost-effectiveness requirements. We specialize in practical solutions that provide durability while meeting the specific functional needs of working agricultural properties.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free comprehensive inspections for Snyder property owners. Expert roof repair designed for West Texas conditions with extensive warranties and insurance assistance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
