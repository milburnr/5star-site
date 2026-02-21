import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-repair/" },
  title: "Roof Repair Services West Texas | 5 Star Roofing",
  description:
    "Expert roof leak repair and emergency roofing services across West Texas. Same-day storm response, all materials. Call (806) 622-6041 for a free inspection.",
};

const cities = [
  { name: "Amarillo", slug: "amarillo" },
  { name: "Andrews", slug: "andrews" },
  { name: "Big Spring", slug: "big-spring" },
  { name: "Borger", slug: "borger" },
  { name: "Canyon", slug: "canyon" },
  { name: "Dumas", slug: "dumas" },
  { name: "Levelland", slug: "levelland" },
  { name: "Lubbock", slug: "lubbock" },
  { name: "Midland", slug: "midland" },
  { name: "Monahans", slug: "monahans" },
  { name: "Odessa", slug: "odessa" },
  { name: "Pampa", slug: "pampa" },
  { name: "Perryton", slug: "perryton" },
  { name: "Snyder", slug: "snyder" },
];

const faqItems = [
  {
    question: "How do I know when my roof needs repair instead of replacement?",
    answer:
      "A roof generally needs repair rather than replacement when the damage is isolated to a small area, the roof is less than 15 years old, and the underlying decking is still sound. If more than 30% of the roof surface is damaged, the roof is past its expected lifespan, or you are seeing multiple leak points, a full replacement is usually more cost-effective. We assess both options during every inspection and give you an honest recommendation.",
  },
  {
    question:
      "What are the most common causes of roof leaks in West Texas?",
    answer:
      "The top causes are wind-lifted shingles that expose the underlayment, failed flashing around chimneys and vents, cracked pipe boots, and ponding water on flat roofs. West Texas weather accelerates these issues: daily temperature swings of 30 to 40 degrees cause materials to expand and contract, and sustained winds above 40 mph loosen fasteners over time. Regular inspections catch these problems before they become active leaks.",
  },
  {
    question: "How quickly can you respond to emergency roof repairs?",
    answer:
      "We offer same-day emergency response for active leaks and storm damage across our service area. For tarping and temporary waterproofing, our crews can typically arrive within hours of your call. Permanent repairs are scheduled based on material availability and weather conditions, but we prioritize emergencies to prevent further interior damage to your home.",
  },
  {
    question: "How much does a typical roof repair cost?",
    answer:
      "Minor repairs like replacing a few shingles or resealing flashing typically cost $200 to $600. Moderate repairs involving a larger section of damaged shingles or a flashing replacement run $600 to $1,500. More extensive repairs such as fixing structural decking damage or repairing a large leak area can cost $1,500 to $4,000. We provide free estimates so you know the exact cost before any work begins.",
  },
  {
    question: "Can you repair just a section of my roof?",
    answer:
      "Yes, section repairs are one of our most common services. We match the existing shingle color and style as closely as possible and integrate the repair seamlessly with the surrounding roof. For flat commercial roofs, we can patch individual membrane sections without disturbing the rest of the system. Section repairs are a cost-effective option when the overall roof is in good condition.",
  },
  {
    question: "Do you offer warranties on roof repairs?",
    answer:
      "Yes. All roof repairs from 5 Star Roofing include a workmanship warranty that covers our labor and installation quality. The length depends on the scope of the repair, but most repairs carry a minimum 2-year workmanship warranty. Additionally, any new materials installed carry the manufacturer's product warranty, which ranges from 10 to 50 years depending on the product.",
  },
  {
    question: "How long does a roof repair typically take?",
    answer:
      "Most residential roof repairs are completed in a single day. Simple fixes like replacing a few shingles or resealing flashing take 1 to 3 hours. Larger repairs involving decking replacement or multiple leak sources may take a full day. Commercial flat roof repairs vary based on membrane type and damage extent but typically wrap up within 1 to 2 days.",
  },
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Roof Repair Services",
    provider: {
      "@type": ["LocalBusiness", "RoofingContractor"],
      name: "5 Star Roofing",
      telephone: "(806) 622-6041",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Serving West Texas",
        addressLocality: "Amarillo",
        addressRegion: "TX",
        addressCountry: "US",
      },
      parentOrganization: {
        "@id": "https://5starroofingpros.com/#organization",
      },
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city.name,
      address: { "@type": "PostalAddress", addressRegion: "TX" },
    })),
    description:
      "Professional roof repair services across West Texas. Leak repair, emergency tarping, flashing replacement, and all roofing materials serviced for residential and commercial properties.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roof Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Leak Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Roof Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flashing and Vent Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shingle Repair and Replacement",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="container-custom py-12">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Roof Repair", url: "/roof-repair/" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Expert Roof Repair Services Across West Texas
      </h1>

      <img
        src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.webp"
        alt="Professional roof repair in West Texas - shingle replacement and leak repair by 5 Star Roofing"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
      />

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            Protecting West Texas Homes and Businesses
          </h2>
          <p className="text-lg mb-4">
            Roof damage rarely announces itself conveniently. A missing shingle
            after a windstorm, a slow drip in the attic after heavy rain, or a
            sagging section that appeared overnight -- these problems demand
            prompt, professional attention before they turn into costly interior
            damage.
          </p>
          <p className="text-lg">
            5 Star Roofing provides roof repair services across 14 West Texas
            cities. From quick shingle replacements to emergency leak
            containment, our crews arrive equipped to diagnose the problem and
            fix it right the first time. We work on residential homes,
            commercial buildings, and everything in between.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Common Roof Repair Issues
        </h2>
        <p className="mb-4">
          West Texas weather puts roofs through extreme conditions year-round.
          Here are the most common repair issues we handle:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Roof Leaks
            </h3>
            <p className="text-gray-700">
              Leaks are the number one reason homeowners call us. Common
              leak sources include failed flashing around chimneys and
              skylights, cracked pipe boots, worn valley seals, and
              wind-damaged shingles. We trace every leak to its source using
              moisture detection tools and fix the root cause, not just the
              visible symptom.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Missing and Lifted Shingles
            </h3>
            <p className="text-gray-700">
              West Texas winds regularly exceed 50 mph during spring storms,
              tearing shingles from the roof deck and exposing the
              underlayment. Even a single missing shingle allows water
              penetration that damages decking and insulation. We color-match
              replacement shingles and secure them to withstand future wind
              events.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Flashing Failures
            </h3>
            <p className="text-gray-700">
              Metal flashing around chimneys, dormers, walls, and vent pipes
              degrades over time from thermal cycling and corrosion. Failed
              flashing is responsible for more hidden leaks than any other
              single component. We remove the old flashing, install new
              material with proper step and counter-flashing techniques, and
              seal every joint.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Ponding Water on Flat Roofs
            </h3>
            <p className="text-gray-700">
              Commercial flat roofs develop low spots over time where water
              pools after rain. Standing water accelerates membrane
              deterioration and adds structural load. We correct ponding
              issues with tapered insulation, additional drains, or membrane
              patches depending on the severity and roof type.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Wind Damage
            </h3>
            <p className="text-gray-700">
              Beyond missing shingles, wind damage includes lifted ridge caps,
              torn drip edge, displaced soffit panels, and loosened fascia
              boards. These components work together to keep water out of your
              roof system, and damage to any one of them compromises the whole
              assembly. Our crews inspect and repair every component affected
              by wind events.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Repair vs. Replace: How We Help You Decide
        </h2>
        <p className="mb-4">
          Not every roof problem requires a full replacement. Here are the
          factors we evaluate to give you an honest recommendation:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-brand-gold-light p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-3">
              Repair Makes Sense When:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Damage is limited to less than 30% of the roof surface</li>
              <li>The roof is under 15 years old with no widespread wear</li>
              <li>The underlying decking is solid with no rot or sagging</li>
              <li>The issue is isolated to a specific area like flashing or a vent boot</li>
              <li>Your budget requires a short-term fix before a planned replacement</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-brand-brown mb-3">
              Replacement Makes Sense When:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>The roof is past its expected lifespan (20+ years for shingles)</li>
              <li>Multiple leak points indicate system-wide failure</li>
              <li>Decking is rotted or sagging in multiple areas</li>
              <li>Repair costs approach 50% or more of replacement cost</li>
              <li>You want to upgrade to impact-resistant materials for insurance savings</li>
            </ul>
          </div>
        </div>
        <p className="mb-8 text-gray-700">
          We walk you through both options with transparent pricing. If a $400
          repair will buy you five more years of reliable service, we tell you
          that. If a repair would just be patching over a failing system, we
          tell you that too. See our{" "}
          <a
            href="/roof-replacement-amarillo/"
            className="text-brand-brown hover:text-brand-gold underline font-semibold"
          >
            roof replacement services
          </a>{" "}
          for full replacement options.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Emergency Roof Repair
        </h2>
        <p className="mb-4">
          Active leaks and storm damage cannot wait for a scheduled
          appointment. Our emergency repair service is designed for exactly these
          situations:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">1</div>
            <h3 className="font-bold mb-2 text-brand-brown">Call Us</h3>
            <p className="text-sm text-gray-600">
              Reach us at{" "}
              <a href="tel:8066226041" className="text-brand-brown font-semibold">
                (806) 622-6041
              </a>{" "}
              and describe the situation. We triage based on severity and
              dispatch a crew.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">2</div>
            <h3 className="font-bold mb-2 text-brand-brown">
              Emergency Tarping
            </h3>
            <p className="text-sm text-gray-600">
              For active leaks or exposed decking, we install heavy-duty tarps
              to stop water intrusion immediately and protect your interior from
              further damage.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">3</div>
            <h3 className="font-bold mb-2 text-brand-brown">
              Damage Assessment
            </h3>
            <p className="text-sm text-gray-600">
              Once the immediate threat is contained, we perform a full
              inspection to assess all damage and determine whether a repair
              or replacement is needed.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-brand-gold mb-2">4</div>
            <h3 className="font-bold mb-2 text-brand-brown">
              Permanent Fix
            </h3>
            <p className="text-sm text-gray-600">
              We schedule the permanent repair as soon as weather and materials
              allow. Most emergency repairs are completed within 1 to 3 days
              of the initial response.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Roof Repair for Every Material Type
        </h2>
        <p className="mb-4">
          Different roofing materials require different repair techniques and
          tools. Our crews are trained on every roofing system common in West
          Texas:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Asphalt Shingles
            </h3>
            <p className="text-gray-700">
              We carry a range of shingle brands and colors on our trucks for
              fast repairs. Whether you need a few tabs replaced or a full
              section re-shingled, we match the existing material and integrate
              the repair seamlessly. We install GAF, Owens Corning, and
              CertainTeed products.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Metal Roofing
            </h3>
            <p className="text-gray-700">
              Metal roof repairs include resealing standing seam joints,
              replacing damaged panels, tightening fasteners on exposed-fastener
              systems, and applying sealant to penetration points. We work with
              steel, aluminum, and copper roofing systems.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              TPO and EPDM
            </h3>
            <p className="text-gray-700">
              Single-ply membrane repairs require specialized welding equipment
              and materials. We patch punctures with hot-air welded TPO or
              EPDM-compatible adhesive patches, repair seam separations, and
              address flashing failures around rooftop equipment. Our commercial
              crews handle these systems daily.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-brand-brown mb-3">
              Built-Up and Modified Bitumen
            </h3>
            <p className="text-gray-700">
              Multi-layer BUR and modified bitumen systems develop blisters,
              cracks, and exposed felts over time. We cut out damaged sections,
              install new membrane layers, and apply fresh flood coats or
              granule surfacing to restore full waterproofing performance.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* City Variant Link Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Roof Repair Services Across West Texas
        </h2>
        <p className="mb-4 text-gray-700">
          We provide roof repair services in 14 cities across the Texas
          Panhandle and Permian Basin. Select your city for local service
          details:
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`/roof-repair-${city.slug}/`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
            >
              <span className="font-semibold text-brand-brown">
                Roof Repair in {city.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        Frequently Asked Questions About Roof Repair
      </h2>
      <Accordion type="single" collapsible className="mb-12">
        {faqItems.map((item, index) => (
          <AccordionItem key={`faq-${index + 1}`} value={`faq-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* CTA Section */}
      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Schedule Your Free Roof Inspection
        </h2>
        <p className="mb-6 text-lg">
          Whether you have an active leak or want a professional assessment
          before storm season, 5 Star Roofing is here to help. Call today for a
          free inspection and honest repair estimate.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:8066226041"
            className="btn-primary bg-white text-brand-brown hover:bg-gray-100"
          >
            Call (806) 622-6041
          </a>
          <a
            href="/contact/"
            className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown"
          >
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
