const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// City data for geo coordinates and area served
const cityData = {
  'amarillo': { lat: 35.2220, lon: -101.8313, county: 'Potter', wiki: 'Amarillo,_Texas' },
  'lubbock': { lat: 33.5779, lon: -101.8552, county: 'Lubbock', wiki: 'Lubbock,_Texas' },
  'midland': { lat: 31.9973, lon: -102.0779, county: 'Midland', wiki: 'Midland,_Texas' },
  'odessa': { lat: 31.8457, lon: -102.3676, county: 'Ector', wiki: 'Odessa,_Texas' },
  'canyon': { lat: 34.9803, lon: -101.9188, county: 'Randall', wiki: 'Canyon,_Texas' },
  'borger': { lat: 35.6678, lon: -101.3974, county: 'Hutchinson', wiki: 'Borger,_Texas' },
  'dumas': { lat: 35.8656, lon: -101.9730, county: 'Moore', wiki: 'Dumas,_Texas' },
  'pampa': { lat: 35.5364, lon: -100.9599, county: 'Gray', wiki: 'Pampa,_Texas' },
  'perryton': { lat: 36.4000, lon: -100.8028, county: 'Ochiltree', wiki: 'Perryton,_Texas' },
  'levelland': { lat: 33.5873, lon: -102.3779, county: 'Hockley', wiki: 'Levelland,_Texas' },
  'big-spring': { lat: 32.2504, lon: -101.4787, county: 'Howard', wiki: 'Big_Spring,_Texas' },
  'snyder': { lat: 32.7179, lon: -100.9176, county: 'Scurry', wiki: 'Snyder,_Texas' },
  'monahans': { lat: 31.5943, lon: -102.8927, county: 'Ward', wiki: 'Monahans,_Texas' },
  'andrews': { lat: 32.3187, lon: -102.5454, county: 'Andrews', wiki: 'Andrews,_Texas' },
  'hereford': { lat: 34.8151, lon: -102.3977, county: 'Deaf Smith', wiki: 'Hereford,_Texas' },
  'plainview': { lat: 34.1848, lon: -101.7068, county: 'Hale', wiki: 'Plainview,_Texas' },
  'bushland': { lat: 35.1920, lon: -102.0642, county: 'Potter', wiki: 'Bushland,_Texas' },
  'claude': { lat: 35.1117, lon: -101.3635, county: 'Armstrong', wiki: 'Claude,_Texas' },
  'vega': { lat: 35.2428, lon: -102.4285, county: 'Oldham', wiki: 'Vega,_Texas' },
  'wildorado': { lat: 35.1848, lon: -102.2196, county: 'Oldham', wiki: 'Wildorado,_Texas' },
};

// Service type mapping
const serviceTypes = {
  'residential-roofing': { name: 'Residential Roofing', type: 'Residential Roofing Services' },
  'commercial-roofing': { name: 'Commercial Roofing', type: 'Commercial Roofing Services' },
  'hail-damage-repair': { name: 'Hail Damage Repair', type: 'Hail Damage Roof Repair' },
  'hail-damage': { name: 'Hail Damage Repair', type: 'Hail Damage Roof Repair' },
  'storm-damage-repair': { name: 'Storm Damage Repair', type: 'Storm Damage Roof Repair' },
  'wind-damage-repair': { name: 'Wind Damage Repair', type: 'Wind Damage Roof Repair' },
  'emergency-roof-repair': { name: 'Emergency Roof Repair', type: 'Emergency Roofing Services' },
  'roof-replacement': { name: 'Roof Replacement', type: 'Roof Replacement Services' },
  'roof-repair': { name: 'Roof Repair', type: 'Roof Repair Services' },
  'roof-inspections': { name: 'Roof Inspections', type: 'Professional Roof Inspection' },
  'tpo-roofing': { name: 'TPO Roofing', type: 'TPO Membrane Roofing Installation' },
  'metal-roofing': { name: 'Metal Roofing', type: 'Metal Roofing Installation' },
  'asphalt-shingle-roofing': { name: 'Asphalt Shingle Roofing', type: 'Asphalt Shingle Roofing' },
  'asphalt-roofing': { name: 'Asphalt Roofing', type: 'Asphalt Roofing Services' },
};

function extractCityFromSlug(slug) {
  for (const city of Object.keys(cityData)) {
    if (slug.endsWith(`-${city}`) || slug.endsWith(`-${city}-tx`) || slug.endsWith(`-${city}-texas`)) {
      return city;
    }
  }
  // Handle special cases
  if (slug.includes('amarillo')) return 'amarillo';
  if (slug.includes('lubbock')) return 'lubbock';
  if (slug.includes('midland')) return 'midland';
  if (slug.includes('odessa')) return 'odessa';
  return null;
}

function extractServiceFromSlug(slug) {
  for (const service of Object.keys(serviceTypes)) {
    if (slug.startsWith(service)) {
      return service;
    }
  }
  // Handle special patterns
  if (slug.includes('hail-damage')) return 'hail-damage-repair';
  if (slug.includes('storm-damage')) return 'storm-damage-repair';
  if (slug.includes('wind-damage')) return 'wind-damage-repair';
  if (slug.includes('emergency')) return 'emergency-roof-repair';
  if (slug.includes('roof-replacement')) return 'roof-replacement';
  if (slug.includes('roof-repair')) return 'roof-repair';
  if (slug.includes('roof-inspection')) return 'roof-inspections';
  if (slug.includes('residential-roofing')) return 'residential-roofing';
  if (slug.includes('commercial-roofing')) return 'commercial-roofing';
  if (slug.includes('tpo-roofing')) return 'tpo-roofing';
  if (slug.includes('metal-roofing')) return 'metal-roofing';
  if (slug.includes('asphalt')) return 'asphalt-shingle-roofing';
  return null;
}

function titleCase(str) {
  return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function generateLocalBusinessSchema(slug, city, service) {
  const cityInfo = cityData[city] || cityData['amarillo'];
  const serviceInfo = serviceTypes[service] || { name: 'Roofing', type: 'Roofing Services' };
  
  return `
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/${slug}/#localbusiness",
        "name": "5 Star Commercial Roofing - ${titleCase(city)} ${serviceInfo.name}",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": ${cityInfo.lat}, "longitude": ${cityInfo.lon} },
        "url": "https://5starroofingpros.com/${slug}/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/${cityInfo.wiki}", "name": "${titleCase(city)}", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert ${serviceInfo.name.toLowerCase()} services in ${titleCase(city)}, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />`;
}

function generateServiceSchema(slug, city, service) {
  const cityInfo = cityData[city] || cityData['amarillo'];
  const serviceInfo = serviceTypes[service] || { name: 'Roofing', type: 'Roofing Services' };
  
  return `
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "${serviceInfo.type}",
        "name": "${serviceInfo.name} in ${titleCase(city)}",
        "description": "Professional ${serviceInfo.name.toLowerCase()} services in ${titleCase(city)}, Texas. Expert installation, repair, and maintenance.",
        "provider": { "@type": "RoofingContractor", "name": "5 Star Commercial Roofing", "telephone": "(806) 622-6041", "@id": "https://5starroofingpros.com/#organization" },
        "areaServed": { "@type": "City", "name": "${titleCase(city)}", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "${serviceInfo.name} Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "${serviceInfo.name} Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "${serviceInfo.name} Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
          ]
        }
      }) }} />`;
}

// Load the gaps data
const gaps = JSON.parse(fs.readFileSync('seo-gaps.json', 'utf-8'));
const stats = { schemaAdded: 0, internalLinksAdded: 0, titlesFixed: 0, descriptionsFixed: 0 };

// Skip these directories (non-service pages)
const skipDirs = ['articles', 'blog', 'contact', 'about', 'gallery', 'reviews', 'services', 'service-areas', 'roofing-methods', 'industrial-roofing', 'residential-roofing', 'commercial-roofing'];

// 1. Fix missing schemas
console.log('=== FIXING SCHEMAS ===');
for (const page of gaps.missingSchema) {
  const pagePath = path.join(appDir, page.dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  const city = extractCityFromSlug(page.dir);
  const service = extractServiceFromSlug(page.dir);
  
  if (!city) {
    console.log(`Skipping ${page.dir} - could not determine city`);
    continue;
  }
  
  let modified = false;
  
  // Add LocalBusiness schema if missing
  if (!page.hasLocalBusiness) {
    const localBusinessSchema = generateLocalBusinessSchema(page.dir, city, service);
    
    // Find where to insert - after StickyContactBar or Breadcrumb
    if (content.includes('<StickyContactBar />')) {
      content = content.replace(/<StickyContactBar \/>/, `<StickyContactBar />\n${localBusinessSchema}`);
      modified = true;
    } else if (content.includes('</Breadcrumb>')) {
      // Find the closing of Breadcrumb component
      const breadcrumbEnd = content.indexOf('/>');
      if (breadcrumbEnd !== -1) {
        // Find the next /> after Breadcrumb items
        const match = content.match(/<Breadcrumb[^>]*items=\{[\s\S]*?\}\s*\/>/);
        if (match) {
          content = content.replace(match[0], match[0] + '\n' + localBusinessSchema);
          modified = true;
        }
      }
    }
  }
  
  // Add Service schema if missing
  if (!page.hasService && service) {
    const serviceSchema = generateServiceSchema(page.dir, city, service);
    
    // Find where to insert - after LocalBusiness or StickyContactBar
    if (content.includes('@type": "LocalBusiness"') || content.includes('@type":"LocalBusiness"')) {
      // Find the end of LocalBusiness script tag
      const localBusinessEnd = content.indexOf('</script>', content.indexOf('LocalBusiness'));
      if (localBusinessEnd !== -1) {
        content = content.slice(0, localBusinessEnd + 9) + '\n' + serviceSchema + content.slice(localBusinessEnd + 9);
        modified = true;
      }
    } else if (content.includes('<StickyContactBar />')) {
      content = content.replace(/<StickyContactBar \/>/, `<StickyContactBar />\n${serviceSchema}`);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(pagePath, content);
    stats.schemaAdded++;
    console.log(`✓ Fixed schema for ${page.dir}`);
  }
}

// 2. Fix missing InternalLinks
console.log('\n=== FIXING INTERNAL LINKS ===');

// Map city slugs to internal links city keys
const citySlugToKey = {
  'amarillo': 'amarillo',
  'lubbock': 'lubbock', 
  'midland': 'midland',
  'odessa': 'odessa',
  'canyon': 'canyon',
  'borger': 'borger',
  'dumas': 'dumas',
  'pampa': 'pampa',
  'perryton': 'perryton',
  'levelland': 'levelland',
  'big-spring': 'big-spring',
  'snyder': 'snyder',
  'monahans': 'monahans',
  'andrews': 'andrews',
};

// Map service slugs to internal links service keys
const serviceSlugToKey = {
  'residential-roofing': 'residential-roofing',
  'commercial-roofing': 'commercial-roofing',
  'hail-damage-repair': 'hail-damage-repair',
  'storm-damage-repair': 'storm-damage-repair',
  'wind-damage-repair': 'wind-damage-repair',
  'emergency-roof-repair': 'emergency-roof-repair',
  'roof-replacement': 'roof-replacement',
  'roof-repair': 'roof-repair',
  'roof-inspections': 'roof-inspections',
  'tpo-roofing': 'tpo-roofing',
  'metal-roofing': 'metal-roofing',
  'asphalt-shingle-roofing': 'asphalt-shingle-roofing',
};

for (const dir of gaps.missingInternalLinks) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  const city = extractCityFromSlug(dir);
  const service = extractServiceFromSlug(dir);
  
  // Check if city and service are supported by InternalLinks component
  const cityKey = city ? citySlugToKey[city] : null;
  const serviceKey = service ? serviceSlugToKey[service] : null;
  
  if (!cityKey || !serviceKey) {
    console.log(`Skipping ${dir} - city(${city}/${cityKey}) or service(${service}/${serviceKey}) not in InternalLinks`);
    continue;
  }
  
  // Check if already has InternalLinks import
  const hasImport = content.includes('InternalLinks');
  
  if (!hasImport) {
    // Add import
    if (content.includes('import { Breadcrumb }')) {
      content = content.replace(
        'import { Breadcrumb }',
        'import { InternalLinks } from "@/components/InternalLinks";\nimport { Breadcrumb }'
      );
    } else if (content.includes('import type { Metadata }')) {
      content = content.replace(
        'import type { Metadata }',
        'import { InternalLinks } from "@/components/InternalLinks";\nimport type { Metadata }'
      );
    }
  }
  
  // Add InternalLinks component before the closing CTA section or at end of container
  // Look for the final CTA section (usually has "Protect Your" or "Ready to" in h2)
  const ctaPattern = /<section className="bg-gradient-to-r from-brand-brown to-brand-gold/;
  const match = content.match(ctaPattern);
  
  if (match) {
    const internalLinksComponent = `
        <InternalLinks currentCity="${cityKey}" currentService="${serviceKey}" />

        `;
    
    content = content.replace(ctaPattern, internalLinksComponent + '<section className="bg-gradient-to-r from-brand-brown to-brand-gold');
    
    fs.writeFileSync(pagePath, content);
    stats.internalLinksAdded++;
    console.log(`✓ Added InternalLinks to ${dir}`);
  } else {
    console.log(`⚠ Could not find CTA section in ${dir}`);
  }
}

// 3. Fix long titles
console.log('\n=== FIXING LONG TITLES ===');
const titleFixes = {
  'asphalt-shingle-roofing-amarillo': 'Asphalt Shingle Roofing Amarillo TX | 5 Star Roofing',
  'asphalt-shingle-roofing-lubbock': 'Asphalt Shingle Roofing Lubbock TX | 5 Star Roofing',
  'asphalt-shingle-roofing-midland': 'Asphalt Shingle Roofing Midland TX | 5 Star Roofing',
  'asphalt-shingle-roofing-odessa': 'Asphalt Shingle Roofing Odessa TX | 5 Star Roofing',
  'emergency-roof-repair-midland': 'Emergency Roof Repair Midland TX | 24/7 Service',
  'emergency-roof-repair-odessa': 'Emergency Roof Repair Odessa TX | 24/7 Service',
  'hail-damage-repair-borger': 'Hail Damage Repair Borger TX | 5 Star Roofing',
  'hail-damage-repair-canyon': 'Hail Damage Repair Canyon TX | 5 Star Roofing',
  'hail-damage-repair-dumas': 'Hail Damage Repair Dumas TX | 5 Star Roofing',
  'hail-damage-repair-hereford': 'Hail Damage Repair Hereford TX | 5 Star Roofing',
  'hail-damage-repair-lubbock': 'Hail Damage Repair Lubbock TX | 5 Star Roofing',
  'hail-damage-repair-midland': 'Hail Damage Repair Midland TX | 5 Star Roofing',
  'hail-damage-repair-odessa': 'Hail Damage Repair Odessa TX | 5 Star Roofing',
  'hail-damage-repair-pampa': 'Hail Damage Repair Pampa TX | 5 Star Roofing',
  'hail-damage-repair-plainview': 'Hail Damage Repair Plainview TX | 5 Star Roofing',
  'residential-roof-replacement-in-amarillo': 'Roof Replacement Amarillo TX | 5 Star Roofing',
  'residential-roofing-lubbock': 'Residential Roofing Lubbock TX | 5 Star Roofing',
  'residential-roofing-midland': 'Residential Roofing Midland TX | 5 Star Roofing',
  'residential-roofing-odessa': 'Residential Roofing Odessa TX | 5 Star Roofing',
  'residential-roofing-snyder': 'Residential Roofing Snyder TX | 5 Star Roofing',
  'roof-hail-damage-repair-services-in-amarillo-tx': 'Hail Damage Roof Repair Amarillo | 5 Star Roofing',
  'roof-inspections-big-spring': 'Roof Inspections Big Spring TX | 5 Star Roofing',
  'roof-inspections-in-amarillo': 'Roof Inspections Amarillo TX | 5 Star Roofing',
  'roof-inspections-levelland': 'Roof Inspections Levelland TX | 5 Star Roofing',
  'roof-inspections-monahans': 'Roof Inspections Monahans TX | 5 Star Roofing',
  'roof-repair-lubbock': 'Roof Repair Lubbock TX | Free Inspection | 5 Star',
  'roof-repair-midland': 'Roof Repair Midland TX | Free Inspection | 5 Star',
  'roof-repair-services-in-amarillo': 'Roof Repair Amarillo TX | 5 Star Roofing',
  'roof-replacement-in-amarillo': 'Roof Replacement Amarillo TX | 5 Star Roofing',
  'roofing-repair-services-in-amarillo': 'Roofing Repair Amarillo TX | 5 Star Roofing',
};

for (const item of gaps.longTitles) {
  const pagePath = path.join(appDir, item.dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  const newTitle = titleFixes[item.dir];
  if (!newTitle) {
    console.log(`⚠ No fix defined for ${item.dir}`);
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  const oldTitlePattern = new RegExp(`title:\\s*['"\`]${item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"\`]`);
  
  if (content.match(oldTitlePattern)) {
    content = content.replace(oldTitlePattern, `title: '${newTitle}'`);
    fs.writeFileSync(pagePath, content);
    stats.titlesFixed++;
    console.log(`✓ Fixed title for ${item.dir}: "${newTitle}" (${newTitle.length} chars)`);
  }
}

// 4. Fix short descriptions
console.log('\n=== FIXING SHORT DESCRIPTIONS ===');
const descriptionFixes = {
  'amarillo-weather-impact-on-roofing': 'Explore how Amarillo\'s extreme weather affects your roof. Hail, wind, and temperature swings cause damage. Get expert roofing advice from 5 Star Roofing. Call (806) 622-6041.',
  'amarillos-best-roofer': 'Looking for the best roofer in Amarillo? 5 Star Roofing provides expert residential and commercial roofing services with 10+ years experience. Free inspections. Call (806) 622-6041.',
  'damaged-roof-replacement-in-amarillo': 'Professional damaged roof replacement in Amarillo TX. Storm damage, hail damage, and emergency repairs. Insurance claim assistance. Free inspections. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-amarillo-tx': 'Expert hail damage roof repair in Amarillo TX. 24/7 emergency response, insurance claim help, Class 4 impact-resistant shingles. Free inspections. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-borger': 'Professional hail damage roof repair in Borger TX. Fast emergency response, insurance assistance, quality materials. Serving Hutchinson County. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-canyon': 'Expert hail damage roof repair in Canyon TX. 24/7 emergency service, insurance claim help, Class 4 shingles. Serving Randall County. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-dumas': 'Professional hail damage roof repair in Dumas TX. Emergency response, insurance assistance, quality roofing. Serving Moore County. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-hereford': 'Expert hail damage roof repair in Hereford TX. 24/7 emergency service, insurance claim help, quality materials. Serving Deaf Smith County. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-lubbock': 'Professional hail damage roof repair in Lubbock TX. Fast emergency response, insurance assistance, Class 4 shingles. Free inspections. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-lubbock-tx': 'Expert hail damage roof repair in Lubbock TX. 24/7 emergency service, insurance claim help, quality roofing materials. Free inspections. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-midland': 'Professional hail damage roof repair in Midland TX. Emergency response, insurance assistance, Class 4 impact-resistant shingles. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-midland-tx': 'Expert hail damage roof repair in Midland TX. 24/7 emergency service, insurance claim help, Permian Basin specialists. Free inspections. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-odessa': 'Professional hail damage roof repair in Odessa TX. Fast emergency response, insurance assistance, quality roofing materials. Free inspections. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-odessa-tx': 'Expert hail damage roof repair in Odessa TX. 24/7 emergency service, insurance claim help, Permian Basin specialists. Free inspections. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-pampa': 'Professional hail damage roof repair in Pampa TX. Emergency response, insurance assistance, quality materials. Serving Gray County. Call 5 Star Roofing (806) 622-6041.',
  'hail-damage-repair-plainview': 'Expert hail damage roof repair in Plainview TX. 24/7 emergency service, insurance claim help, quality roofing. Serving Hale County. Call 5 Star Roofing (806) 622-6041.',
  'residential-roofing-amarillo-tx': 'Expert residential roofing services in Amarillo TX. Roof repair, replacement, and inspections. Insurance claim assistance. Free estimates. Call 5 Star Roofing (806) 622-6041.',
};

for (const item of gaps.shortDescriptions) {
  const pagePath = path.join(appDir, item.dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  const newDesc = descriptionFixes[item.dir];
  if (!newDesc) {
    console.log(`⚠ No fix defined for ${item.dir}`);
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  // Match description with various quote styles
  const descPattern = /description:\s*['"`]([^'"`]*)['"`]/;
  const match = content.match(descPattern);
  
  if (match) {
    content = content.replace(descPattern, `description: "${newDesc}"`);
    fs.writeFileSync(pagePath, content);
    stats.descriptionsFixed++;
    console.log(`✓ Fixed description for ${item.dir}: (${newDesc.length} chars)`);
  }
}

console.log('\n=== SUMMARY ===');
console.log(`Schemas added: ${stats.schemaAdded}`);
console.log(`InternalLinks added: ${stats.internalLinksAdded}`);
console.log(`Titles fixed: ${stats.titlesFixed}`);
console.log(`Descriptions fixed: ${stats.descriptionsFixed}`);
