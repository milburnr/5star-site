import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Customer Reviews | 5 Star Commercial Roofing Amarillo, Mi...',
  description: 'Read reviews from satisfied customers across West Texas. Call for a free quote!',
};

export default function Page() {
  const reviews = [
    {
      name: "Michael R.",
      location: "Amarillo, TX",
      rating: 5,
      date: "2024",
      text: "After the hailstorm last spring, I called several roofing companies but 5 Star was the only one who really took the time to document everything properly for insurance. They met with the adjuster, handled all the paperwork, and my claim was approved for the full amount. The new Class 4 shingles look great and I got a discount on my insurance premium. Highly recommend!",
      project: "Hail Damage Roof Replacement"
    },
    {
      name: "Sarah T.",
      location: "Midland, TX",
      rating: 5,
      date: "2024",
      text: "We needed TPO roofing for our warehouse facility in Midland. 5 Star's team was professional, efficient, and completed the job ahead of schedule. The heat-welded seams are impressive - no leaks even during the heavy rains we had last month. Their understanding of commercial roofing for the oil & gas industry made a big difference.",
      project: "Commercial TPO Roof Installation"
    },
    {
      name: "David L.",
      location: "Canyon, TX",
      rating: 5,
      date: "2024",
      text: "Best roofing experience I've ever had. They were honest about what needed to be repaired and what could wait. The crew showed up on time every day, cleaned up thoroughly, and the quality of work is excellent. Three months later and no issues whatsoever.",
      project: "Asphalt Shingle Repair"
    },
    {
      name: "Jennifer M.",
      location: "Odessa, TX",
      rating: 5,
      date: "2024",
      text: "Our manufacturing plant needed urgent roof repairs after wind damage. 5 Star responded within hours and had temporary repairs done the same day to prevent water damage to our equipment. The permanent repair was completed quickly and their pricing was very fair. They understand that downtime costs us money.",
      project: "Emergency Commercial Roof Repair"
    },
    {
      name: "Robert K.",
      location: "Amarillo, TX",
      rating: 5,
      date: "2024",
      text: "I was skeptical about metal roofing, but after seeing the hail damage on my neighbors' asphalt roofs every year, I decided to invest in standing seam metal. 5 Star educated me on all my options and the installation was flawless. It's been through two hailstorms already with zero damage. Worth every penny.",
      project: "Standing Seam Metal Roof"
    },
    {
      name: "Amanda P.",
      location: "Lubbock, TX",
      rating: 5,
      date: "2024",
      text: "Free inspection after the storm, clear explanation of the damage, helped us file the insurance claim, and completed the work in just two days. Communication was excellent throughout the entire process. They even followed up a month later to make sure everything was still perfect.",
      project: "Storm Damage Restoration"
    },
    {
      name: "James W.",
      location: "Borger, TX",
      rating: 5,
      date: "2023",
      text: "Had roof rot issues that several other contractors said wasn't covered by insurance. 5 Star's inspector found evidence that it was caused by previous hail damage and documented it properly. Insurance ended up covering the entire deck replacement. These guys know their stuff.",
      project: "Roof Rot Repair & Deck Replacement"
    },
    {
      name: "Maria G.",
      location: "Midland, TX",
      rating: 5,
      date: "2023",
      text: "Our office building needed a complete roof replacement. 5 Star worked around our business hours to minimize disruption. The project manager kept us informed every step of the way. The new PVC roof looks great and we're already seeing lower cooling costs.",
      project: "Commercial Roof Replacement"
    },
    {
      name: "Tom H.",
      location: "Pampa, TX",
      rating: 5,
      date: "2023",
      text: "Honest, reliable, and high quality work. They could have sold me on a full replacement but instead repaired the damaged sections and extended the life of my roof by 10+ years. That kind of integrity is rare these days.",
      project: "Partial Roof Repair"
    },
    {
      name: "Lisa D.",
      location: "Amarillo, TX",
      rating: 5,
      date: "2023",
      text: "The attention to detail was impressive. They noticed and fixed ventilation issues I didn't even know I had, which has made a huge difference in my attic temperature. The crew was respectful, cleaned up daily, and the final result exceeded my expectations.",
      project: "Residential Roof Replacement"
    }
  ];

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Reviews",
                      "url": "/reviews/"
              }
      ]} />


      <h1 className="text-4xl font-bold mb-6 text-center">Customer Reviews</h1>

      <div className="content-block mb-12 text-center">
        <p className="text-lg">
          See what homeowners and businesses across <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">Amarillo</a>, <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:underline">Midland</a>, <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:underline">Odessa</a>, and West Texas
          are saying about their experience with 5 Star Commercial Roofing. Specializing in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage repair</a>, <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacement</a>, and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing</a>.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid md:grid-cols-4 gap-6 mb-12 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl font-bold text-brand-gold mb-2">500+</div>
          <div className="text-gray-600">Satisfied Customers</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl font-bold text-brand-gold mb-2">4.9/5</div>
          <div className="text-gray-600">Average Rating</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl font-bold text-brand-gold mb-2">$50M+</div>
          <div className="text-gray-600">Insurance Claims Approved</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl font-bold text-brand-gold mb-2">10+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
              <div className="text-right">
                <div className="text-brand-gold text-xl mb-1">
                  {"⭐".repeat(review.rating)}
                </div>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
            <p className="text-sm text-brand-brown font-semibold">
              Project: {review.project}
            </p>
          </div>
        ))}
      </div>

      {/* Common Themes */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Appreciate Most</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold mb-2">Insurance Expertise</h3>
            <p className="text-sm text-gray-600">
              We handle the entire insurance claims process, from documentation to final approval.
              Our customers consistently mention this as a major stress reliever.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Fast Response</h3>
            <p className="text-sm text-gray-600">
              Emergency situations get immediate attention. We understand that time is critical
              after storm damage, especially for commercial operations.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-bold mb-2">Quality Workmanship</h3>
            <p className="text-sm text-gray-600">
              Our crews take pride in their work. Clean daily job sites, attention to detail,
              and workmanship warranties give customers peace of mind.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold mb-2">Honest Communication</h3>
            <p className="text-sm text-gray-600">
              We provide realistic timelines, transparent pricing, and won't sell you services
              you don't need. Integrity matters.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold mb-2">Professional Management</h3>
            <p className="text-sm text-gray-600">
              Dedicated project managers keep customers informed throughout the process.
              No surprises, just consistent updates.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold mb-2">Thorough Follow-Up</h3>
            <p className="text-sm text-gray-600">
              We don't disappear after the job is done. Follow-up inspections and warranty
              service ensure long-term satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Serving Customers Across West Texas</h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Our reviews come from satisfied residential and commercial clients throughout the region.
          From Amarillo to Odessa, we bring the same commitment to quality and service.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">Amarillo</span>
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">Midland</span>
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">Odessa</span>
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">Lubbock</span>
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">Canyon</span>
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">Borger</span>
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">Pampa</span>
          <span className="bg-brand-gold-light px-4 py-2 rounded-full text-sm font-semibold">& 15+ more cities</span>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-brand-gold text-white p-8 rounded-lg text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Happy With Our Work?</h2>
        <p className="text-lg mb-6">
          We'd love to hear about your experience! Your feedback helps us improve and helps
          other West Texas property owners make informed decisions about their roofing needs.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.google.com/search?q=5+Star+Commercial+Roofing+Amarillo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-brand-brown hover:bg-gray-100"
          >
            Leave a Google Review
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown">
            Contact Us
          </a>
        </div>
      </section>

      {/* Main CTA */}
      <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Experience 5-Star Service Yourself</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied customers across West Texas. Free inspections, expert repairs,
          and full insurance claim assistance. Call today to get started.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary text-lg bg-white text-brand-brown hover:bg-gray-100">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary text-lg border-2 border-white hover:bg-white hover:text-brand-brown">
            Request Free Inspection
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"500","bestRating":"5","worstRating":"1"},"priceRange":"$$"})}}/>
    </div>
  );
}
