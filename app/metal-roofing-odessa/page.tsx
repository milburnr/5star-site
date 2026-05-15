import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import {
  Check,
  Factory,
  Flame,
  FlaskConical,
  Fuel,
  Gem,
  Phone,
  Star,
  Thermometer,
  Tornado,
  Wrench,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/metal-roofing-odessa/" },
  title: "Metal Roofing Odessa TX | 5 Star Roofing",
  description:
    "Professional metal roofing in Odessa TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Metal Roofing Odessa TX | 5 Star Roofing",
    description:
      "Professional metal roofing in Odessa TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/metal-roofing-odessa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-metal-roof.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MetalRoofingOdessaPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/metal-roofing-odessa/#localbusiness",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-memphis-44-1280w.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 35.1768, longitude: -101.859 },
            url: "https://5starroofingpros.com/metal-roofing-odessa/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
              name: "Odessa",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            description:
              "Professional metal roofing in Odessa TX. Expert installation, warranties, and insurance assistance.",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Metal Roofing Installation",
            name: "Metal Roofing in Odessa",
            description:
              "Professional metal roofing services in Odessa, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Odessa",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Metal Roofing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Metal Roofing Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Metal Roofing Repair" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Free Roof Inspection" },
                },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does metal roofing last in Odessa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing lasts 50+ years in Texas climate. Standing seam systems with proper installation can last 70 years with minimal maintenance.",
                },
              },
              {
                "@type": "Question",
                name: "Is metal roofing noisy during rain and hail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Proper insulation and underlayment make metal roofs as quiet as asphalt shingles. Modern installations are acoustically dampened.",
                },
              },
              {
                "@type": "Question",
                name: "Does metal roofing increase home value?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Metal roofs offer strong long-term value, excellent curb appeal, and energy efficiency, and appeal to buyers seeking low-maintenance, durable roofing.",
                },
              },
            ],
          }),
        }}
      />

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="odessa"
        city="Odessa"
        service="Metal Roofing"
        h1="Metal Roofing in Odessa, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-memphis-44-1280w.jpg"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Metal Roofing", url: "/metal-roofing/" },
          { name: "Odessa", url: "/metal-roofing-odessa/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Metal Roofing for homes and businesses in Odessa, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Odessa as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Materials and systems: standing seam metal, TPO, and PVC membranes engineered for the West Texas climate.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Fast</div>
                <div className="text-brand-brown font-semibold text-lg">Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Class 4</div>
                <div className="text-brand-brown font-semibold text-lg">Hail-Rated</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </div>
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
              What Makes Our Odessa Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional metal roofing throughout Odessa and surrounding areas. We understand
              Texas weather challenges and install roofing systems engineered for extreme conditions
              including hail, high winds, and temperature swings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've served Odessa with expert installations, comprehensive warranties,
              and outstanding customer service. We handle all permits, insurance claims, and
              warranty documentation. Free inspections and estimates available.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-brown">
                  What Are Built for Oil Country's Toughest Conditions?
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Odessa sits at the epicenter of America's oil production, creating the most
                  challenging roofing environment in Texas. Heavy industrial activity, petrochemical
                  processing, and constant drilling operations demand roofing systems engineered for
                  extreme durability.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our metal roofing installations are specifically designed for oil field
                  environments. We use premium corrosion-resistant materials, enhanced fastening
                  systems, and industrial-grade coatings that withstand chemical exposure, hydrogen
                  sulfide emissions, and the relentless dust and debris of active drilling
                  operations.
                </p>
                <div className="bg-black text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Oil Field Durability Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      PVDF (Kynar 500) finishes over G90 galvanized substrate for H2S resistance
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      Standing seam profiles that shed Permian Basin hydrocarbon residue
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      Concealed clip attachment that absorbs drilling-rig vibration without fastener fatigue
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      24-gauge steel decking connections engineered for equipment and snow loads across the Permian Basin
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Industrial Metal Systems</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold">Petrochemical Grade Steel</h4>
                    <p className="text-gray-300">
                      G90 galvanized base steel with an additional zinc-aluminum (Galvalume) layer.
                      This combination resists the sour-gas and hydrocarbon environment around
                      Odessa and Midland production sites where typical G60 steel pits within
                      a few years.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold">PVDF Industrial Coatings</h4>
                    <p className="text-gray-300">
                      PVDF (Kynar 500) fluoropolymer finishes hold color and chalk-resistance
                      ratings under the Permian Basin sun while shrugging off the airborne
                      hydrocarbons that fade standard polyester paint inside five years.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold">Reinforced Panel Design</h4>
                    <p className="text-gray-300">
                      24-gauge standing seam panels with 1.75-inch rib heights and concealed
                      clips. The stiffer profile reduces oil-canning across long Highway 158
                      shop and warehouse runs typical of Odessa industrial buildings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Extreme Wind Performance for Oil Country?
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Odessa's position in the open plains makes it susceptible to severe wind events,
                while industrial activity creates additional structural challenges. Our systems
                exceed all requirements.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    150
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">mph Wind Rating</h3>
                  <p className="text-gray-600">Extreme weather protection</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    20
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Gauge Steel</h3>
                  <p className="text-gray-600">Heavy-duty construction</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    4"
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Fastener Spacing</h3>
                  <p className="text-gray-600">Maximum connection density</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-black text-yellow-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    UL
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Listed</h3>
                  <p className="text-gray-600">Commercial certification</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    Industrial Wind Resistance
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Concealed clip spacing tightened at perimeter and corner zones per UL 580 wind uplift testing</li>
                    <li>• Doubled clip density inside the ASCE 7 corner pressure zones where Permian Basin gusts spike</li>
                    <li>• Floating clip design accommodates thermal movement across long Odessa shop and warehouse runs</li>
                    <li>• Engineered substrate that carries HVAC, satellite, and oilfield monitoring equipment loads</li>
                    <li>• Double-lock mechanical seaming on standing seam panels for 150-mph rated wind uplift performance</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    Environmental Protection
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stainless-steel fasteners with EPDM washers rated for hydrogen sulfide exposure</li>
                    <li>• Butyl-sealed standing seam laps and curb flashings to keep blowing Permian Basin dust out of penetrations</li>
                    <li>• Inspection ports at parapet transitions so corrosion can be spotted before it migrates into the deck</li>
                    <li>• Walkway pad layouts that route service techs clear of seams and roof-mounted oilfield monitoring gear</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Petrochemical Environment Challenges?
            </h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Odessa's massive oil production creates unique environmental stressors that standard
                roofing materials cannot withstand. Our specialized systems address these specific
                challenges.
              </p>
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">
                    <Fuel className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Chemical Exposure</h3>
                  <p className="mb-4">
                    Hydrogen sulfide off Permian Basin sour-gas wells, hydrocarbon vapors, and
                    drilling fluid drift call for materials picked specifically for the chemistry,
                    not generic galvanized steel.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• AMPP/NACE-aligned coating systems for industrial atmospheric corrosion</li>
                    <li>• EPDM gasketed fasteners with stainless heads for H2S service</li>
                    <li>• PVDF (Kynar 500) topcoats that do not soften under hydrocarbon exposure</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">
                    <Tornado className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Industrial Vibration</h3>
                  <p className="mb-4">
                    Pump jacks, compressors, and processing units near Odessa industrial parks
                    transmit low-frequency vibration into building structures. Roof systems have
                    to absorb that motion without backing fasteners out of the deck.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Neoprene isolation pads under rooftop HVAC and compressor curbs</li>
                    <li>• Concealed clip standing seam that lets panels float across thermal and vibration cycles</li>
                    <li>• Fatigue-rated stainless fasteners specified for the connection, not generic field stock</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">
                    <Flame className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Fire & Explosion Risk</h3>
                  <p className="mb-4">
                    Buildings within sight of Permian Basin flares and tank batteries have to
                    treat ember and radiant heat exposure as a real design input, not a
                    formality.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• ASTM E108 / UL 790 Class A fire rated assemblies as the default specification</li>
                    <li>• Mineral wool or polyiso cover boards over the deck for non-combustible separation</li>
                    <li>• Roof-top fall protection and ladder anchor layouts coordinated with local fire-marshal requirements</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown text-center">
                  Odessa Environmental Data
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">8,000+</div>
                    <p className="text-sm text-gray-600">Active Oil Wells</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">365</div>
                    <p className="text-sm text-gray-600">Days/Year Operation</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">2,900</div>
                    <p className="text-sm text-gray-600">Elevation (feet)</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1">120°F</div>
                    <p className="text-sm text-gray-600">Peak Heat Index</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-yellow-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Does This Roofing Improve Energy Efficiency?
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Odessa's combination of industrial heat sources and desert climate creates extreme
                cooling demands. Our metal roofing systems provide maximum energy efficiency.
              </p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                    Advanced Cooling Technology
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-black text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Ultra-High Reflectance</h4>
                        <p className="text-gray-600">
                          Premium cool roof coatings reflect + of solar radiation, critical in
                          Odessa's intense heat environment.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-black text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Radiant Barrier Integration</h4>
                        <p className="text-gray-600">
                          Reflective underlayment systems prevent radiant heat transfer into living
                          spaces.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-black text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Strategic Ventilation</h4>
                        <p className="text-gray-600">
                          Engineered airflow systems remove heat buildup and reduce HVAC loads
                          significantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-brand-brown text-center">
                    Odessa Energy Savings
                  </h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2"></div>
                      <p className="text-gray-700">Peak Cooling Load Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">50°F</div>
                      <p className="text-gray-700">Surface Temperature Difference</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">+</div>
                      <p className="text-gray-700">Annual Savings Potential</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Based on:</strong> Odessa climate extremes, industrial heat island
                      effects, and current AEP energy rates. Larger savings for industrial
                      properties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Odessa Properties Demand Metal Roofing?
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <FlaskConical className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Chemical Resistance
                  </h3>
                  <p className="text-gray-700">
                    Buildings inside the Permian Basin live with H2S off sour-gas wells,
                    hydrocarbon vapor drift, and processing chemicals. PVDF (Kynar 500) topcoats
                    over G90 galvanized steel hold up where standard polyester paint blisters and
                    bare galvanized steel pits within a few years.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Wrench className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Industrial Durability
                  </h3>
                  <p className="text-gray-700">
                    Pump jacks, compressors, and heavy truck traffic off Highway 158 push
                    constant vibration into nearby buildings. 24-gauge standing seam panels
                    with concealed clips and stainless-steel fasteners hold their attachment
                    through years of those cycles.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Thermometer className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Extreme Heat Protection
                  </h3>
                  <p className="text-gray-700">
                    Superior performance in Odessa's combined natural and industrial heat.
                    Reflective systems reduce cooling costs by 30-40% compared to dark roofing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Flame className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Fire Safety
                  </h3>
                  <p className="text-gray-700">
                    UL 790 / ASTM E108 Class A rated metal assemblies pair non-combustible
                    panels with mineral wool or polyiso cover boards. That matters for buildings
                    that sit within sight of Permian Basin flares, tank batteries, and
                    compressor stations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Gem className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Low Maintenance
                  </h3>
                  <p className="text-gray-700">
                    Standing seam panels with PVDF finishes shed Permian Basin caliche dust and
                    hydrocarbon residue with seasonal rinses. There is no granule loss to track,
                    no exposed fasteners to reseal, and no annual recoating cycle to budget
                    around busy oilfield operations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Factory className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Equipment Compatibility
                  </h3>
                  <p className="text-gray-700">
                    Standing seam panels accept S-5! and similar clamp-on mounts for HVAC curbs,
                    cellular and SCADA antennas, fall-protection anchors, and solar racking.
                    That keeps the roof penetration-free where it counts on Odessa industrial
                    and commercial buildings.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does metal roofing handle Odessa's oil field environment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our metal roofing systems are specifically engineered for oil country conditions.
                  We use PVDF coatings that resist H2S emissions, hydrocarbon vapors, and chemical
                  exposure. Enhanced galvanization and specialized fasteners provide long-term
                  protection against corrosion from industrial pollutants common in Odessa's
                  petrochemical environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What energy savings are possible in Odessa's extreme heat?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Odessa properties can save 30-40% on cooling costs with high-reflectance metal
                  roofing. The combination of desert heat and industrial heat islands makes energy
                  efficiency critical. Surface temperatures can be 50°F cooler than dark asphalt,
                  resulting in annual savings exceeding $1,000 for many homes. Industrial heat
                  sources make cool roof technology especially valuable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can metal roofing withstand vibration from drilling operations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our industrial-grade systems are designed for vibration resistance. We use
                  reinforced structural connections, isolation mounting options, and
                  fatigue-resistant fastener systems. The continuous operation of drilling
                  equipment, pumping stations, and processing facilities requires specialized
                  engineering that our installations provide.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What wind resistance is needed in oil country?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our Odessa installations achieve 150+ mph wind ratings with enhanced fastening
                  every 4 inches on-center. The open plains location combined with industrial
                  structures creates complex wind patterns requiring superior uplift resistance. We
                  exceed local building codes with commercial-grade attachment systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you address fire safety concerns near oil operations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All our systems meet Class A fire ratings with non-combustible construction. We
                  integrate emergency access features, use fire-resistant insulation, and coordinate
                  with local fire safety requirements. Metal roofing provides maximum protection in
                  high-risk environments common throughout Odessa's oil field areas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What about equipment mounting for industrial properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We design systems to accommodate HVAC equipment, communications gear, safety
                  systems, and monitoring equipment common in oil field properties. Structural
                  calculations include equipment loads, and we provide proper mounting points with
                  weatherproof penetration sealing for industrial applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long will metal roofing last in Odessa's harsh conditions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  With proper material selection and installation, our metal roofing lasts 50-70
                  years even in Odessa's challenging environment. Premium PVDF coatings resist
                  chemical exposure, enhanced galvanization prevents corrosion, and heavy-gauge
                  substrates withstand industrial stresses. Regular inspection and minimal
                  maintenance ensure maximum lifespan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide specialized systems for different oil field applications?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we offer customized solutions for various applications including residential
                  properties near oil fields, industrial facilities, equipment buildings, and
                  commercial structures. Each installation is engineered for specific environmental
                  exposures, equipment requirements, and safety considerations based on proximity to
                  drilling operations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-black text-white p-12 rounded-3xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                How Does the Odessa Installation Process Work?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Industrial Assessment</h3>
                  <p className="text-sm opacity-90">
                    Environmental exposure evaluation and chemical resistance requirements
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Custom Engineering</h3>
                  <p className="text-sm opacity-90">
                    Structural design for wind loads, equipment, and environmental factors
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Professional Installation</h3>
                  <p className="text-sm opacity-90">
                    Industrial-grade installation with enhanced safety protocols
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Performance Certification</h3>
                  <p className="text-sm opacity-90">
                    Quality verification and industrial warranty activation
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-yellow-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Insurance & Safety Benefits for Oil Country?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Odessa properties face unique insurance challenges due to industrial exposure and
                fire risk. Metal roofing provides significant benefits.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Insurance Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>UL 790 Class A fire rating:</strong> carriers like State Farm,
                        Allstate, and Farmers regularly credit non-combustible roof assemblies
                        near Permian Basin flares and tank batteries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>UL 2218 Class 4 hail rating:</strong> Texas Farm Bureau, USAA,
                        and several Texas carriers apply an impact-resistant roof discount
                        when the assembly is documented at install
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>UL 580 wind uplift documentation:</strong> commercial property
                        underwriters look for tested assemblies on Odessa industrial buildings
                        in open-plain wind exposure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>Cleaner loss history:</strong> PVDF-coated standing seam roofs
                        generate fewer wind-flex and granule-loss claims over their service life
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Safety Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>Non-combustible deck assembly:</strong> 24-gauge steel panels over
                        mineral wool or polyiso cover board for buildings near Permian Basin flares
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>Bonded lightning paths:</strong> standing seam roofs accept
                        UL 96A-listed lightning protection without compromising the weather plane
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>OSHA-compliant roof access:</strong> ladder anchors, walkway
                        pads, and tie-off points laid out for routine inspection and Odessa
                        fire-marshal needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>{" "}
                      <span>
                        <strong>Clamp-on equipment mounting:</strong> S-5! style attachments
                        carry HVAC, SCADA, antennas, and solar racking without piercing the
                        panel
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-black text-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">
                  Comprehensive Protection for Oil Country Living
                </h3>
                <p>
                  Standing seam metal assemblies built around UL 2218 Class 4 hail, UL 580
                  wind uplift, and UL 790 Class A fire testing line up with what State Farm,
                  Allstate, USAA, Farmers, and Texas Farm Bureau actually want to see on
                  Odessa and broader Permian Basin properties.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Visit Our Amarillo Location
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="odessa" currentService="metal-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Odessa property owners. Expert metal roofing with comprehensive
            warranties and insurance assistance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:8066226041"
              className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg"
            >
              Call (806) 622-6041
            </a>
            <a
              href="/contact/"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg"
            >
              Schedule Free Inspection
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="metal-roofing-odessa" />
      </div>
    </>
  );
}
