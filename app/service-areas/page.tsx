import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { OptimizedImage } from "@/components/OptimizedImage";

export const metadata: Metadata = {
  title: 'Service Areas | Amarillo, Midland, Odessa Roofing | & West',
  description: 'roofing services across West Texas. Serving Amarillo, Midland, Odessa, Lubbock, and 20+ Texas Panhandle cities. Hail damage specialists. Call (806) 622-6041',
};

export default function Page() {
  // JSON-LD Schema for Service Areas
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "5 Star Commercial Roofing",
    "telephone": "+1-806-622-6041",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving West Texas",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.2220,
      "longitude": -101.8313
    },
    "areaServed": [
      { "@type": "City", "name": "Amarillo", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Midland", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Odessa", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Lubbock", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Canyon", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Bushland", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Claude", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Vega", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
      { "@type": "City", "name": "Wildorado", "address": { "@type": "PostalAddress", "addressRegion": "TX" } }
    ],
    "description": "Professional roofing services across West Texas including Amarillo, Midland, Odessa, Lubbock and the entire Texas Panhandle. Hail damage repair specialists.",
    "serviceType": ["Residential Roofing", "Commercial Roofing", "Hail Damage Repair", "Storm Damage Restoration", "Roof Replacement"]
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Service Areas",
                      "url": "/service-areas/"
              }
      ]} />


      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-4xl font-bold mb-6">Serving All of West Texas</h1>

      {/* Hero Image */}
      <OptimizedImage
        src="/images/cover-background-roofing-sunset"
        alt="Roofing services across West Texas - Professional team serving Amarillo Midland Odessa - 5 Star Commercial Roofing"
        className="w-full h-96 object-cover rounded-lg mb-8"
        priority={true}
        sizes="100vw"
      />

      <div className="content-block mb-12">
        <p className="text-lg">
          5 Star Commercial Roofing proudly serves Amarillo and the entire Texas Panhandle, plus Midland, Odessa,
          and surrounding West Texas communities. With over 10 years of experience in the hail belt, we understand
          the unique roofing challenges faced by homes and businesses across this region.
        </p>
      </div>

      {/* Primary Service Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Primary Service Areas</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Amarillo */}
          <a href="/roofing-amarillo-tx/" className="card border-2 border-brand-gold group hover:border-brand-gold-vibrant hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">🏢 Amarillo, TX</h3>
              <p className="text-gray-600 mb-4">
                <strong>Population:</strong> ~200,000<br />
                <strong>Region:</strong> Texas Panhandle<br />
                <strong>Hail Risk:</strong> 8-12 storms/year
              </p>
              <p className="mb-4">
                Our headquarters is located in Amarillo, where we've served hundreds of residential and commercial
                clients with hail damage repair, roof replacements, and insurance claim assistance.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Downtown Amarillo commercial buildings</li>
                <li>Residential neighborhoods throughout Potter & Randall Counties</li>
                <li>Industrial facilities and warehouses</li>
                <li>Churches, schools, and municipal buildings</li>
              </ul>
            </div>
          </a>

          {/* Midland */}
          <a href="/midland-tx-roofing/" className="card border-2 border-brand-gold group hover:border-brand-gold-vibrant hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">🛢️ Midland, TX</h3>
              <p className="text-gray-600 mb-4">
                <strong>Population:</strong> ~146,000<br />
                <strong>Region:</strong> Permian Basin<br />
                <strong>Hail Risk:</strong> 6-10 storms/year
              </p>
              <p className="mb-4">
                Major oil & gas hub requiring specialized commercial and industrial roofing. We provide TPO, PVC,
                and metal roofing for Midland's energy sector facilities, offices, and residential properties.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Oil & gas facilities and refineries</li>
                <li>Commercial office buildings</li>
                <li>Industrial warehouses and distribution centers</li>
                <li>Residential developments</li>
              </ul>
            </div>
          </a>

          {/* Odessa */}
          <a href="/odessa-tx-roofing/" className="card border-2 border-brand-gold group hover:border-brand-gold-vibrant hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">⚙️ Odessa, TX</h3>
              <p className="text-gray-600 mb-4">
                <strong>Population:</strong> ~123,000<br />
                <strong>Region:</strong> Permian Basin<br />
                <strong>Hail Risk:</strong> 6-10 storms/year
              </p>
              <p className="mb-4">
                Adjacent to Midland, Odessa is another major energy industry center. We specialize in chemical-resistant
                PVC roofing for industrial applications and Class 4 impact-resistant residential systems.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Chemical plants and processing facilities</li>
                <li>Manufacturing and production plants</li>
                <li>Commercial and retail buildings</li>
                <li>Residential hail damage repair</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="bg-yellow-50 border-l-4 border-brand-gold p-6">
          <h3 className="font-bold text-lg mb-2">📍 Why These Regions Choose Us</h3>
          <p className="text-gray-700">
            Amarillo, Midland, and Odessa all sit within America's hail belt, requiring specialized roofing expertise.
            We've completed hundreds of insurance claims totaling over $50 million in approved coverage across these markets.
            Our teams understand the specific challenges of West Texas weather and work efficiently to minimize downtime
            for commercial operations.
          </p>
        </div>
      </section>

      {/* Texas Panhandle Cities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Texas Panhandle Service Area</h2>
        <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
          We serve all communities throughout the Texas Panhandle with comprehensive residential, commercial,
          and industrial roofing services.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Canyon, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Randall County</p>
            <p className="text-xs text-gray-500">Home to West Texas A&M University</p>
          </a>

          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Borger, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Hutchinson County</p>
            <p className="text-xs text-gray-500">Oil refining & manufacturing</p>
          </a>

          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Pampa, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Gray County</p>
            <p className="text-xs text-gray-500">Industrial & residential roofing</p>
          </a>

          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Dumas, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Moore County</p>
            <p className="text-xs text-gray-500">Agricultural & commercial center</p>
          </a>

          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Hereford, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Deaf Smith County</p>
            <p className="text-xs text-gray-500">"Beef Capital of the World"</p>
          </a>

          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Childress, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Childress County</p>
            <p className="text-xs text-gray-500">Residential & agricultural</p>
          </a>

          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Dalhart, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Dallam & Hartley Counties</p>
            <p className="text-xs text-gray-500">Northern Panhandle</p>
          </a>

          <a href="/contact/" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">Perryton, TX</h4>
            <p className="text-sm text-gray-600 mb-2">Ochiltree County</p>
            <p className="text-xs text-gray-500">Oil, gas & agriculture</p>
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Also serving:</strong> Bushland, Claude, Fritch, Vega, Tulia, Friona, Muleshoe, Plainview,
            Floydada, and surrounding Panhandle communities
          </p>
        </div>
      </section>

      {/* West Texas & South Plains */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">West Texas & South Plains</h2>
        <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
          Extended service area including Lubbock and the South Plains region, plus West Texas communities
          surrounding the Permian Basin.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="/roofing-services-lubbock-tx/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-xl mb-3 text-brand-brown group-hover:text-brand-gold transition-colors">Lubbock, TX</h4>
            <p className="text-gray-600 mb-2">
              <strong>Population:</strong> ~260,000<br />
              <strong>Region:</strong> South Plains
            </p>
            <p className="text-sm text-gray-600">
              Major commercial and residential market. We provide comprehensive roofing services for homes,
              businesses, Texas Tech facilities, and industrial properties.
            </p>
          </a>

          <a href="/contact/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-xl mb-3 text-brand-brown group-hover:text-brand-gold transition-colors">Big Spring, TX</h4>
            <p className="text-gray-600 mb-2">
              <strong>Population:</strong> ~28,000<br />
              <strong>Region:</strong> West Texas
            </p>
            <p className="text-sm text-gray-600">
              Oil industry town between Midland-Odessa and Abilene. Commercial roofing for industrial
              facilities and residential hail damage repair.
            </p>
          </a>

          <a href="/contact/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-xl mb-3 text-brand-brown group-hover:text-brand-gold transition-colors">Plainview, TX</h4>
            <p className="text-gray-600 mb-2">
              <strong>Population:</strong> ~20,000<br />
              <strong>Region:</strong> South Plains
            </p>
            <p className="text-sm text-gray-600">
              Agricultural hub with commercial warehouses and distribution centers. Residential and
              commercial roofing services available.
            </p>
          </a>

          <a href="/contact/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-xl mb-3 text-brand-brown group-hover:text-brand-gold transition-colors">Levelland, TX</h4>
            <p className="text-gray-600 mb-2">
              <strong>Population:</strong> ~14,000<br />
              <strong>Region:</strong> South Plains
            </p>
            <p className="text-sm text-gray-600">
              Cotton capital with agricultural and commercial roofing needs. Close proximity to Lubbock
              for fast response times.
            </p>
          </a>

          <a href="/contact/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-xl mb-3 text-brand-brown group-hover:text-brand-gold transition-colors">Snyder, TX</h4>
            <p className="text-gray-600 mb-2">
              <strong>Population:</strong> ~11,000<br />
              <strong>Region:</strong> West Texas
            </p>
            <p className="text-sm text-gray-600">
              Oil and agriculture community. Residential hail damage repair and commercial roofing for
              local businesses.
            </p>
          </a>

          <a href="/contact/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 cursor-pointer group">
            <h4 className="font-bold text-xl mb-3 text-brand-brown group-hover:text-brand-gold transition-colors">Lamesa, TX</h4>
            <p className="text-gray-600 mb-2">
              <strong>Population:</strong> ~9,000<br />
              <strong>Region:</strong> West Texas
            </p>
            <p className="text-sm text-gray-600">
              Agricultural center in Dawson County. Residential and agricultural building roofing services.
            </p>
          </a>
        </div>
      </section>

      {/* Why We Cover Such a Large Area */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why We Cover Such a Large Service Area</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-3">🚗 Mobile Expertise</h3>
            <p className="text-gray-600 mb-4">
              West Texas's rural nature means many towns lack specialized hail damage roofing contractors.
              We travel throughout the region to bring expert service to every community, no matter the size.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">🌪️ Storm Response</h3>
            <p className="text-gray-600 mb-4">
              Hailstorms don't respect city limits. When severe weather hits multiple areas simultaneously,
              our teams mobilize across the entire region to provide rapid emergency response.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">📋 Insurance Networks</h3>
            <p className="text-gray-600 mb-4">
              We work with all major insurance companies serving Texas. Our established relationships help
              clients in any location get claims processed efficiently.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">💼 Commercial Clients</h3>
            <p className="text-gray-600 mb-4">
              Many of our commercial and industrial clients have facilities across multiple West Texas
              locations. We provide consistent quality service at all their properties.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Stats */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-brand-gold mb-2">20+</div>
            <div className="text-gray-600">Cities Served</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-brand-gold mb-2">15</div>
            <div className="text-gray-600">Counties Covered</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-brand-gold mb-2">150mi</div>
            <div className="text-gray-600">Service Radius</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-brand-gold mb-2">24/7</div>
            <div className="text-gray-600">Emergency Response</div>
          </div>
        </div>
      </section>

      {/* Complete City Directory */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Complete City Directory</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Click any city below to learn more about our roofing services in that area, including hail damage repair,
          insurance claim assistance, and local project examples.
        </p>
        <div className="grid md:grid-cols-5 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-gold">Major Cities</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/roofing-amarillo-tx/" className="hover:text-brand-gold">Amarillo</a></li>
              <li><a href="/midland-tx-roofing/" className="hover:text-brand-gold">Midland</a></li>
              <li><a href="/odessa-tx-roofing/" className="hover:text-brand-gold">Odessa</a></li>
              <li><a href="/lubbock-tx-roofing/" className="hover:text-brand-gold">Lubbock</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-gold">Amarillo Area</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/canyon-tx-roofing/" className="hover:text-brand-gold">Canyon</a></li>
              <li><a href="/bushland-tx-roofing/" className="hover:text-brand-gold">Bushland</a></li>
              <li><a href="/claude-tx-roofing/" className="hover:text-brand-gold">Claude</a></li>
              <li><a href="/vega-tx-roofing/" className="hover:text-brand-gold">Vega</a></li>
              <li><a href="/wildorado-tx-roofing/" className="hover:text-brand-gold">Wildorado</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-gold">Panhandle Cities</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/borger-texas-roofing/" className="hover:text-brand-gold">Borger</a></li>
              <li><a href="/pampa-texas-roofing/" className="hover:text-brand-gold">Pampa</a></li>
              <li><a href="/dumas-texas-roofing/" className="hover:text-brand-gold">Dumas</a></li>
              <li><a href="/perryton-texas-roofing/" className="hover:text-brand-gold">Perryton</a></li>
              <li><a href="/hereford-texas-roofing/" className="hover:text-brand-gold">Hereford</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-gold">Service Type</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/hail-damage-repair-amarillo-tx/" className="hover:text-brand-gold">Hail Damage - Amarillo</a></li>
              <li><a href="/hail-damage-repair-midland-tx/" className="hover:text-brand-gold">Hail Damage - Midland</a></li>
              <li><a href="/hail-damage-repair-odessa-tx/" className="hover:text-brand-gold">Hail Damage - Odessa</a></li>
              <li><a href="/hail-damage-repair-lubbock-tx/" className="hover:text-brand-gold">Hail Damage - Lubbock</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-brand-gold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/gallery/" className="hover:text-brand-gold">Project Gallery</a></li>
              <li><a href="/blog/" className="hover:text-brand-gold">Roofing Blog</a></li>
              <li><a href="/services/" className="hover:text-brand-gold">All Services</a></li>
              <li><a href="/reviews/" className="hover:text-brand-gold">Customer Reviews</a></li>
              <li><a href="/contact/" className="hover:text-brand-gold">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Find Us in Amarillo</h2>
        <p className="text-center text-gray-600 mb-6">
          5 Star Commercial Roofing - Amarillo Headquarters
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.448294086623!2d-101.92196172298247!3d35.14543897276488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20Star%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1703734967292!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Serving Your Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          No matter where you're located in West Texas or the Panhandle, we're here to help with expert
          roofing services and insurance claim assistance. Call us today for a free inspection.
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
    </div>
  );
}
