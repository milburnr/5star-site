import { FadeIn } from "./FadeIn";

interface CityData {
  name: string;
  slug: string;
  nearbyCities: string[];
}

interface ServiceData {
  name: string;
  slug: string;
}

// City data with geographic proximity relationships
const cityData: Record<string, CityData> = {
  'amarillo': {
    name: 'Amarillo',
    slug: 'amarillo',
    nearbyCities: ['canyon', 'borger', 'dumas', 'pampa']
  },
  'canyon': {
    name: 'Canyon',
    slug: 'canyon',
    nearbyCities: ['amarillo', 'lubbock', 'dumas', 'levelland']
  },
  'borger': {
    name: 'Borger',
    slug: 'borger',
    nearbyCities: ['amarillo', 'pampa', 'dumas', 'perryton']
  },
  'dumas': {
    name: 'Dumas',
    slug: 'dumas',
    nearbyCities: ['amarillo', 'borger', 'pampa', 'perryton']
  },
  'pampa': {
    name: 'Pampa',
    slug: 'pampa',
    nearbyCities: ['amarillo', 'borger', 'dumas', 'perryton']
  },
  'perryton': {
    name: 'Perryton',
    slug: 'perryton',
    nearbyCities: ['pampa', 'borger', 'dumas', 'amarillo']
  },
  'lubbock': {
    name: 'Lubbock',
    slug: 'lubbock',
    nearbyCities: ['levelland', 'canyon', 'amarillo', 'snyder']
  },
  'levelland': {
    name: 'Levelland',
    slug: 'levelland',
    nearbyCities: ['lubbock', 'canyon', 'snyder', 'big-spring']
  },
  'midland': {
    name: 'Midland',
    slug: 'midland',
    nearbyCities: ['odessa', 'big-spring', 'monahans', 'andrews']
  },
  'odessa': {
    name: 'Odessa',
    slug: 'odessa',
    nearbyCities: ['midland', 'monahans', 'andrews', 'big-spring']
  },
  'big-spring': {
    name: 'Big Spring',
    slug: 'big-spring',
    nearbyCities: ['midland', 'odessa', 'snyder', 'lubbock']
  },
  'snyder': {
    name: 'Snyder',
    slug: 'snyder',
    nearbyCities: ['big-spring', 'lubbock', 'levelland', 'midland']
  },
  'monahans': {
    name: 'Monahans',
    slug: 'monahans',
    nearbyCities: ['odessa', 'midland', 'andrews', 'big-spring']
  },
  'andrews': {
    name: 'Andrews',
    slug: 'andrews',
    nearbyCities: ['odessa', 'midland', 'monahans', 'big-spring']
  }
};

// All available services
const serviceData: Record<string, ServiceData> = {
  'residential-roofing': {
    name: 'Residential Roofing',
    slug: 'residential-roofing'
  },
  'commercial-roofing': {
    name: 'Commercial Roofing',
    slug: 'commercial-roofing'
  },
  'hail-damage-repair': {
    name: 'Hail Damage Repair',
    slug: 'hail-damage-repair'
  },
  'storm-damage-repair': {
    name: 'Storm Damage Repair',
    slug: 'storm-damage-repair'
  },
  'wind-damage-repair': {
    name: 'Wind Damage Repair',
    slug: 'wind-damage-repair'
  },
  'emergency-roof-repair': {
    name: 'Emergency Roof Repair',
    slug: 'emergency-roof-repair'
  },
  'roof-replacement': {
    name: 'Roof Replacement',
    slug: 'roof-replacement'
  },
  'roof-repair': {
    name: 'Roof Repair',
    slug: 'roof-repair'
  },
  'roof-inspections': {
    name: 'Roof Inspections',
    slug: 'roof-inspections'
  },
  'tpo-roofing': {
    name: 'TPO Roofing',
    slug: 'tpo-roofing'
  },
  'metal-roofing': {
    name: 'Metal Roofing',
    slug: 'metal-roofing'
  },
  'asphalt-shingle-roofing': {
    name: 'Asphalt Shingle Roofing',
    slug: 'asphalt-shingle-roofing'
  }
};

interface InternalLinksProps {
  currentCity: string;
  currentService: string;
}

export function InternalLinks({ currentCity, currentService }: InternalLinksProps) {
  const cityInfo = cityData[currentCity];

  if (!cityInfo) {
    return null;
  }

  // Get nearby cities for same service
  const nearbyCityLinks = cityInfo.nearbyCities
    .filter(citySlug => cityData[citySlug])
    .slice(0, 4); // Limit to 4 nearby cities

  // Get other services in same city (exclude current service)
  const otherServices = Object.keys(serviceData)
    .filter(service => service !== currentService)
    .slice(0, 6); // Limit to 6 related services

  return (
    <FadeIn>
      <section className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-brand-gold/20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Same Service in Nearby Cities */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              {serviceData[currentService]?.name} in Nearby Cities
            </h3>
            <p className="text-gray-600 mb-4">
              We also provide expert {serviceData[currentService]?.name.toLowerCase()} services in these nearby communities:
            </p>
            <div className="grid gap-3">
              {nearbyCityLinks.map(citySlug => (
                <a
                  key={citySlug}
                  href={`/${currentService}-${citySlug}/`}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
                >
                  <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold text-brand-brown">
                    {serviceData[currentService]?.name} in {cityData[citySlug]?.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Other Services in Same City */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              Other Roofing Services in {cityInfo.name}
            </h3>
            <p className="text-gray-600 mb-4">
              Looking for other roofing services? We offer comprehensive roofing solutions in {cityInfo.name}:
            </p>
            <div className="grid gap-3">
              {otherServices.map(serviceSlug => (
                <a
                  key={serviceSlug}
                  href={`/${serviceSlug}-${currentCity}/`}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
                >
                  <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-brand-brown">
                    {serviceData[serviceSlug]?.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
