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
  alternates: { canonical: 'https://5starroofingpros.com/storm-damage-repair/' },
  title: 'Storm Damage Roof Repair Texas | 5 Star Roofing',
  description: "Emergency storm damage roof repair across Texas. Hail, wind, and tornado damage with rapid response, weatherproofing, and insurance coordination.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Storm Damage Roof Repair",
    "provider": {
      "@type": ["LocalBusiness", "RoofingContractor"],
      "name": "5 Star Roofing",
      "telephone": "(806) 622-6041",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Serving West Texas",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": [
      { "@type": "City", "name": "Amarillo", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Andrews", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Big Spring", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Borger", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Canyon", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Dumas", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Levelland", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Lubbock", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Midland", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Monahans", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Odessa", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Pampa", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Perryton", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Snyder", "address": { "@type": "PostalAddress", "addressRegion": "TX" } }
    ],
    "description": "Emergency storm damage roof repair services across Texas. Rapid response for hail, wind, tornado, and flooding damage with temporary weatherproofing and permanent restoration."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I do immediately after a storm damages my roof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, ensure everyone in the home is safe and move away from any areas with active leaks or ceiling sagging. Document the damage with photos and video from the ground level before anything gets cleaned up. Cover any exposed areas inside with tarps or buckets to limit water intrusion. Then call us for an emergency inspection. Do not climb on your roof yourself, especially after a storm when surfaces are wet and potentially weakened. We can typically have a crew on-site within 24-48 hours of a major storm."
        }
      },
      {
        "@type": "Question",
        "name": "How can I tell if storm damage is serious enough to need repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some storm damage is obvious, such as missing shingles, dented gutters, or visible holes. Other damage is harder to spot from the ground. Look for granules collecting in your gutters or at the base of downspouts, dents on metal vents or flashing, cracked or bruised shingles (they may look intact but flex when pressed), and water stains on interior ceilings. After any significant hail event or high-wind storm, a professional inspection is worth the time even if no damage is visible from ground level."
        }
      },
      {
        "@type": "Question",
        "name": "Will my insurance cover storm damage roof repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most homeowner insurance policies in Texas cover storm damage including hail, wind, and tornado damage, minus your deductible. The key is filing your claim promptly and providing thorough documentation. We photograph and document all damage before starting any work, provide detailed damage reports that match what insurance adjusters need, and can meet with your adjuster on-site to walk through findings together. We also file supplemental claims when adjusters miss damage during their initial inspection."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond after a major storm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For emergency situations with active leaks or exposed roof deck, we prioritize temporary weatherproofing within 24 hours when possible. After major regional storms that affect hundreds of properties, response times may extend to 48-72 hours due to demand. We triage based on severity, addressing active leaks and structural exposure first. For non-emergency inspections after a hail event, we typically schedule within one week. We never ask homeowners to sign contracts before performing emergency tarping or temporary repairs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between wind damage and hail damage repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wind damage typically tears, lifts, or removes shingles and flashing, creating visible gaps in the roof surface. Repairs focus on replacing missing components and re-sealing lifted edges. Hail damage is more subtle. It creates dents and bruises in shingles that compromise the granule layer and accelerate aging, even if no shingles are missing. Hail damage often requires full roof replacement because the impact weakens shingles across the entire surface, not just in isolated areas. Insurance adjusters assess these differently, which is why proper documentation matters."
        }
      },
      {
        "@type": "Question",
        "name": "Can storm damage cause hidden problems I cannot see?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Storm damage often creates problems that do not become visible for weeks or months. Hail can crack shingles without displacing them, allowing slow moisture intrusion that leads to deck rot and mold growth in the attic. Wind-driven rain can push water under flashing and into wall cavities. Ice dams from winter storms can force water upward under shingles. A professional inspection after any storm checks for these hidden issues using both visual assessment and, when needed, moisture detection tools."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prevent storm damage to my roof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Complete storm-proofing is not possible in West Texas, but you can significantly reduce your risk. Choose Class 4 impact-resistant shingles rated for 130+ mph winds on your next replacement. Keep trees trimmed away from the roof line. Ensure flashing around vents, chimneys, and skylights is properly sealed. Schedule annual inspections to catch and fix minor wear before it becomes a vulnerability. For commercial buildings, ensure rooftop equipment is properly secured and drainage systems are clear before storm season."
        }
      }
    ]
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

  return (
    <div className="container-custom py-12">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Storm Damage Repair", url: "/storm-damage-repair/" }
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Storm Damage Roof Repair Across Texas
      </h1>

      <img
        src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-22-1280w.webp"
        alt="Storm damage roof repair in West Texas - hail and wind damaged residential roof awaiting restoration"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
      />

      <FadeIn>
        <div className="bg-brand-gold-light p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">What Types of Storm Damage Do Texas Roofs Suffer?</h2>
          <p className="text-lg mb-4">
            Texas storms do not follow a single playbook. From marble-sized hail in the Panhandle to straight-line winds across the Permian Basin, each type of storm creates different damage patterns that require different repair strategies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Hail Damage</h3>
              <p className="text-sm text-gray-600">
                Dented and bruised shingles, cracked tiles, punctured flat roof membranes, and damaged gutters and flashing. Hail damage often requires full roof replacement when impacts cover more than 30% of the surface.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Wind Damage</h3>
              <p className="text-sm text-gray-600">
                Lifted, creased, or missing shingles and ridge caps. High winds exploit weak points at edges, ridges, and around penetrations. Even shingles that remain attached may be compromised if the seal strip has broken.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Tornado and Severe Wind</h3>
              <p className="text-sm text-gray-600">
                Partial or complete roof removal, structural damage to trusses and decking, and widespread debris impact. Tornado repairs often involve structural assessment before roofing work can begin.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Flash Flooding and Ponding</h3>
              <p className="text-sm text-gray-600">
                Standing water on flat roofs causes membrane deterioration, seam failure, and deck rot. Clogged drains during heavy rain events compound the problem by trapping water on the roof surface.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-2">Flying Debris</h3>
              <p className="text-sm text-gray-600">
                Tree branches, loose building materials, and airborne objects create punctures, dents, and tears in roofing systems. Impact damage may be localized but can compromise waterproofing across a wider area.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">How Does Our Emergency Storm Response Work?</h2>
        <p className="mb-6">
          When a storm hits, the priority is stopping water from entering your home or building. Our emergency response process is designed to stabilize the situation quickly while setting up a plan for permanent repairs.
        </p>

        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-1-1280w.webp"
            alt="Storm damage assessment on a Canyon, Texas roof after severe hail event"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-brand-gold mb-2">1</div>
            <h3 className="font-bold text-brand-brown mb-2">Rapid Response</h3>
            <p className="text-gray-600">
              Emergency calls are prioritized by severity. Active leaks and exposed roof deck get addressed first. We dispatch crews for temporary weatherproofing within 24-48 hours of major storm events, installing tarps and emergency patches to stop water intrusion immediately.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-brand-gold mb-2">2</div>
            <h3 className="font-bold text-brand-brown mb-2">Temporary Weatherproofing</h3>
            <p className="text-gray-600">
              Heavy-duty tarps secured to prevent further water intrusion while permanent repairs are planned. For commercial buildings, we install temporary membrane patches over punctures and reinforce vulnerable seams. This buys time without making hasty permanent decisions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-brand-gold mb-2">3</div>
            <h3 className="font-bold text-brand-brown mb-2">Permanent Repairs</h3>
            <p className="text-gray-600">
              Once the emergency is stabilized and insurance documentation is complete, we schedule permanent repair or replacement. Timelines depend on material availability and the scope of damage, but we keep you informed at every step and coordinate directly with your insurance company.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">How Do You File a Storm Damage Insurance Claim?</h2>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="mb-4">
            Filing a storm damage insurance claim can feel overwhelming, especially when you are dealing with water in your home and a damaged roof overhead. We handle the documentation and coordination so you can focus on your family and property.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Documentation</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Detailed photo and video documentation of all damage</li>
                <li>Measurements and damage mapping for the entire roof</li>
                <li>Written damage assessment reports for your insurer</li>
                <li>Before-and-after documentation of emergency repairs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Adjuster Coordination</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>We schedule and attend the adjuster inspection with you</li>
                <li>On-roof walkthrough to point out all damage areas</li>
                <li>Technical explanation of damage that may not be obvious</li>
                <li>Real-time advocacy for fair claim assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-brown mb-2">Supplemental Claims</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Re-inspection requests when initial claims miss damage</li>
                <li>Additional documentation for hidden damage found during repairs</li>
                <li>Code upgrade supplements when repairs require current code compliance</li>
                <li>Depreciation recovery assistance for recoverable depreciation claims</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">How Can You Protect Your Roof Against Future Storms?</h2>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-22-1280w.jpg"
            alt="Completed storm damage roof restoration in Perryton, Texas Panhandle"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-brand-brown mb-2">Impact-Resistant Materials</h3>
            <p className="text-gray-600 mb-3">
              When replacing a storm-damaged roof, upgrading to impact-resistant materials pays for itself over time through reduced damage and lower insurance premiums.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>Class 4 impact-rated shingles withstand 2-inch hailstones</li>
              <li>Standing seam metal roofing resists denting from all but the largest hail</li>
              <li>Impact-resistant materials often qualify for insurance discounts of 10-28%</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-brand-brown mb-2">Proper Installation and Maintenance</h3>
            <p className="text-gray-600 mb-3">
              The best materials underperform when installed incorrectly or neglected. Proper technique and regular maintenance are the foundation of storm resilience.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>Six-nail pattern instead of four for higher wind uplift resistance</li>
              <li>Ice and water shield on all valleys, eaves, and around penetrations</li>
              <li>Annual inspections to catch loose flashing and worn sealants early</li>
              <li>Gutter cleaning and tree trimming to reduce debris risk</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold mt-12 mb-4">When Is Storm Season in West Texas?</h2>
        <div className="bg-brand-gold-light p-6 rounded-lg mb-8">
          <p className="mb-4">
            West Texas storm season runs primarily from March through September, with the highest concentration of severe hail and wind events between April and June. The Texas Panhandle, including Amarillo, Canyon, and Borger, sits in one of the most active hail corridors in the United States, averaging 3-4 significant hail events per year.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-1">Panhandle (Amarillo Area)</h3>
              <p className="text-sm text-gray-600">Peak season April-June. Frequent supercell thunderstorms producing large hail, high winds, and occasional tornadoes. Average of 8-10 severe weather days per year.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-1">Permian Basin (Midland-Odessa)</h3>
              <p className="text-sm text-gray-600">Peak season May-July. Severe thunderstorms with damaging straight-line winds and hail. Dust storms can also abrade roofing surfaces throughout the year.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-1">South Plains (Lubbock Area)</h3>
              <p className="text-sm text-gray-600">Peak season April-June. High tornado risk combined with frequent hail. The transition zone between Panhandle and Permian Basin weather patterns.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Storm Damage Repair Across Texas</h2>
          <p className="mb-4">
            Our storm damage repair crews serve communities across the Texas Panhandle, Permian Basin, and South Plains. Select your city for local availability and response times.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map(city => (
              <a
                key={city.slug}
                href={`/storm-damage-repair-${city.slug}/`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
              >
                <span className="font-semibold text-brand-brown">
                  Storm Damage Repair in {city.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </FadeIn>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions About Storm Damage Repair</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger>What should I do immediately after a storm damages my roof?</AccordionTrigger>
            <AccordionContent>
              First, ensure everyone in the home is safe and move away from any areas with active leaks or ceiling sagging. Document the damage with photos and video from the ground level before anything gets cleaned up. Cover any exposed areas inside with tarps or buckets to limit water intrusion. Then call us for an emergency inspection. Do not climb on your roof yourself, especially after a storm when surfaces are wet and potentially weakened. We can typically have a crew on-site within 24-48 hours of a major storm.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>How can I tell if storm damage is serious enough to need repairs?</AccordionTrigger>
            <AccordionContent>
              Some storm damage is obvious, such as missing shingles, dented gutters, or visible holes. Other damage is harder to spot from the ground. Look for granules collecting in your gutters or at the base of downspouts, dents on metal vents or flashing, cracked or bruised shingles (they may look intact but flex when pressed), and water stains on interior ceilings. After any significant hail event or high-wind storm, a professional inspection is worth the time even if no damage is visible from ground level.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Will my insurance cover storm damage roof repairs?</AccordionTrigger>
            <AccordionContent>
              Most homeowner insurance policies in Texas cover storm damage including hail, wind, and tornado damage, minus your deductible. The key is filing your claim promptly and providing thorough documentation. We photograph and document all damage before starting any work, provide detailed damage reports that match what insurance adjusters need, and can meet with your adjuster on-site to walk through findings together. We also file supplemental claims when adjusters miss damage during their initial inspection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>How quickly can you respond after a major storm?</AccordionTrigger>
            <AccordionContent>
              For emergency situations with active leaks or exposed roof deck, we prioritize temporary weatherproofing within 24 hours when possible. After major regional storms that affect hundreds of properties, response times may extend to 48-72 hours due to demand. We triage based on severity, addressing active leaks and structural exposure first. For non-emergency inspections after a hail event, we typically schedule within one week. We never ask homeowners to sign contracts before performing emergency tarping or temporary repairs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>What is the difference between wind damage and hail damage repairs?</AccordionTrigger>
            <AccordionContent>
              Wind damage typically tears, lifts, or removes shingles and flashing, creating visible gaps in the roof surface. Repairs focus on replacing missing components and re-sealing lifted edges. Hail damage is more subtle. It creates dents and bruises in shingles that compromise the granule layer and accelerate aging, even if no shingles are missing. Hail damage often requires full roof replacement because the impact weakens shingles across the entire surface, not just in isolated areas. Insurance adjusters assess these differently, which is why proper documentation matters.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>Can storm damage cause hidden problems I cannot see?</AccordionTrigger>
            <AccordionContent>
              Yes. Storm damage often creates problems that do not become visible for weeks or months. Hail can crack shingles without displacing them, allowing slow moisture intrusion that leads to deck rot and mold growth in the attic. Wind-driven rain can push water under flashing and into wall cavities. Ice dams from winter storms can force water upward under shingles. A professional inspection after any storm checks for these hidden issues using both visual assessment and, when needed, moisture detection tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7">
            <AccordionTrigger>How do I prevent storm damage to my roof?</AccordionTrigger>
            <AccordionContent>
              Complete storm-proofing is not possible in West Texas, but you can significantly reduce your risk. Choose Class 4 impact-resistant shingles rated for 130+ mph winds on your next replacement. Keep trees trimmed away from the roof line. Ensure flashing around vents, chimneys, and skylights is properly sealed. Schedule annual inspections to catch and fix minor wear before it becomes a vulnerability. For commercial buildings, ensure rooftop equipment is properly secured and drainage systems are clear before storm season.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-12 bg-brand-gold text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Storm Damage? Call Us Now.</h2>
        <p className="mb-6 text-lg">
          Do not wait for a small leak to become a big problem. Whether you need emergency tarping, a damage inspection, or help navigating your insurance claim, we are here to help. Free storm damage inspections for homeowners and businesses.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:8066226041" className="btn-primary bg-white text-brand-brown hover:bg-gray-100">
            Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown">
            Request Emergency Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
