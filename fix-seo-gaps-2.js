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
  'roofing': { name: 'Roofing Services', type: 'Professional Roofing Services' },
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
  if (slug.includes('canyon')) return 'canyon';
  if (slug.includes('borger')) return 'borger';
  if (slug.includes('dumas')) return 'dumas';
  if (slug.includes('pampa')) return 'pampa';
  if (slug.includes('perryton')) return 'perryton';
  if (slug.includes('levelland')) return 'levelland';
  if (slug.includes('big-spring')) return 'big-spring';
  if (slug.includes('snyder')) return 'snyder';
  if (slug.includes('monahans')) return 'monahans';
  if (slug.includes('andrews')) return 'andrews';
  if (slug.includes('hereford')) return 'hereford';
  if (slug.includes('plainview')) return 'plainview';
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
  if (slug.includes('roofing')) return 'roofing';
  return 'roofing';
}

function titleCase(str) {
  return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
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
const stats = { schemaAdded: 0, internalLinksAdded: 0, descFixed: 0 };

// Fix remaining Service schemas (where LocalBusiness exists but Service doesn't)
console.log('=== FIXING MISSING SERVICE SCHEMAS ===');
for (const page of gaps.missingSchema) {
  if (!page.hasLocalBusiness || page.hasService) continue; // Only fix pages with LocalBusiness but no Service
  
  const pagePath = path.join(appDir, page.dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  const city = extractCityFromSlug(page.dir);
  const service = extractServiceFromSlug(page.dir);
  
  if (!city) {
    console.log(`Skipping ${page.dir} - could not determine city`);
    continue;
  }
  
  const serviceSchema = generateServiceSchema(page.dir, city, service);
  
  // Find the last </script> after LocalBusiness
  const localBusinessIndex = content.indexOf('LocalBusiness');
  if (localBusinessIndex !== -1) {
    // Find closing script tag after LocalBusiness
    const scriptCloseIndex = content.indexOf('</script>', localBusinessIndex);
    if (scriptCloseIndex !== -1) {
      // Also look for FAQPage script to insert before it
      const faqIndex = content.indexOf('FAQPage', scriptCloseIndex);
      if (faqIndex !== -1) {
        // Insert before FAQPage script
        const faqScriptStart = content.lastIndexOf('<script', faqIndex);
        if (faqScriptStart !== -1 && faqScriptStart > scriptCloseIndex) {
          content = content.slice(0, faqScriptStart) + serviceSchema + '\n\n      ' + content.slice(faqScriptStart);
        }
      } else {
        // Insert after LocalBusiness script
        content = content.slice(0, scriptCloseIndex + 9) + '\n' + serviceSchema + content.slice(scriptCloseIndex + 9);
      }
      
      fs.writeFileSync(pagePath, content);
      stats.schemaAdded++;
      console.log(`✓ Added Service schema to ${page.dir}`);
    }
  }
}

// Fix short description that wasn't fixed
console.log('\n=== FIXING REMAINING SHORT DESCRIPTIONS ===');
const descFix = {
  'amarillo-weather-impact-on-roofing': 'Learn how Amarillo\'s extreme weather impacts your roof. Hail, high winds, and temperature swings cause damage. Expert roofing advice from 5 Star Roofing. Call (806) 622-6041.'
};

for (const [dir, newDesc] of Object.entries(descFix)) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  const descPattern = /description:\s*["']([^"']+)["']/;
  const match = content.match(descPattern);
  
  if (match && match[1].length < 120) {
    content = content.replace(descPattern, `description: "${newDesc}"`);
    fs.writeFileSync(pagePath, content);
    stats.descFixed++;
    console.log(`✓ Fixed description for ${dir}: (${newDesc.length} chars)`);
  }
}

console.log('\n=== SUMMARY ===');
console.log(`Service schemas added: ${stats.schemaAdded}`);
console.log(`Descriptions fixed: ${stats.descFixed}`);
