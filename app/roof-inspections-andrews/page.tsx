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
  title: "Roof Inspections Andrews TX | 5 Star Commercial Roofing",
  description: "Professional roof inspections in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsAndrewsPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspections",
                      "url": "/roof-inspections/"
              },
              {
                      "name": "Andrews",
                      "url": "/roof-inspections-andrews/"
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
            "serviceType": "Roof Inspections",
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
              },
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "name": "Andrews",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional roof inspections in Andrews TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/commercial-roofing-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Andrews</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Roof Inspections Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof inspections in Andrews TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
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
              Andrews's Premier Roof Inspection Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional roof inspections in Andrews, Texas are critical for protecting property investments in the Permian Basin's harsh environment. Andrews County experiences 6-8 devastating hailstorms annually, with supercell thunderstorms producing softball-size hail. Combined with sustained winds exceeding 70 mph, extreme temperature fluctuations from -5°F to 115°F, and intense UV radiation at 3,176 feet elevation, Andrews properties require specialized inspection expertise to identify vulnerabilities before they become costly problems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has performed over 1,200 professional roof inspections throughout Andrews and Andrews County. Our certified inspectors understand Permian Basin weather damage signatures, from subtle hail impact patterns to wind uplift indicators that untrained eyes miss. From oil industry facilities to residential properties near the Andrews County Courthouse, we provide comprehensive assessments that protect your investment.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Comprehensive Inspection Services</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Andrews inspection process utilizes advanced technology including thermal imaging cameras, moisture meters, and drone photography to identify issues surface inspections miss. We provide detailed reports with photographic documentation, priority recommendations, and insurance-grade damage assessments when needed.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Annual Maintenance Inspections</h4>
                <p className="text-gray-600 mb-3">Comprehensive yearly assessments to identify issues before they become major problems.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Complete exterior evaluation</li>
                  <li>• Interior moisture detection</li>
                  <li>• Photo documentation</li>
                  <li>• Repair prioritization</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-brown">Post-Storm Assessments</h4>
                <p className="text-gray-600 mb-3">Emergency inspections following Permian Basin severe weather events.</p>
                <ul className="text-sm text-gray-600">
                  <li>• Hail damage documentation</li>
                  <li>• Wind damage evaluation</li>
                  <li>• Insurance claim preparation</li>
                  <li>• Emergency repair needs</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Advanced Inspection Technology</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We utilize cutting-edge inspection technology to provide Andrews property owners with accurate, comprehensive assessments. Our drone inspections safely access steep slopes and dangerous areas, while thermal imaging detects hidden moisture and energy loss issues.
            </p>
            
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-brand-brown">Why Andrews Properties Need Regular Inspections:</h4>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• <strong>Frequent Large Hail:</strong> 6-8 annual events causing cumulative damage</li>
                <li>• <strong>High Wind Exposure:</strong> Sustained Permian Basin winds stress systems</li>
                <li>• <strong>UV Degradation:</strong> Elevation intensifies material aging</li>
                <li>• <strong>Temperature Cycling:</strong> Rapid expansion/contraction creates stress</li>
                <li>• <strong>Insurance Requirements:</strong> Many policies require regular inspections</li>
              </ul>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Drone Technology</h4>
                <p className="text-gray-600 mb-2">High-resolution aerial photography safely documents your entire roofing system.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Thermal Imaging</h4>
                <p className="text-gray-600 mb-2">Infrared technology detects moisture intrusion and energy loss invisible to visual inspection.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-lg font-bold mb-2 text-brand-brown">Detailed Reporting</h4>
                <p className="text-gray-600 mb-2">Comprehensive documentation with photos, priorities, and cost estimates.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Andrews, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.55!3d32.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sAndrews%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Andrews, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Andrews property owners. Expert roof inspections with comprehensive warranties and insurance claim assistance.
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
