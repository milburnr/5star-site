const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// City data
const cityData = {
  'amarillo': 'Amarillo', 'lubbock': 'Lubbock', 'midland': 'Midland', 'odessa': 'Odessa',
  'canyon': 'Canyon', 'borger': 'Borger', 'dumas': 'Dumas', 'pampa': 'Pampa',
  'perryton': 'Perryton', 'levelland': 'Levelland', 'big-spring': 'Big Spring',
  'snyder': 'Snyder', 'monahans': 'Monahans', 'andrews': 'Andrews',
  'hereford': 'Hereford', 'plainview': 'Plainview'
};

const serviceTypes = {
  'residential-roofing': { name: 'Residential Roofing', type: 'Residential Roofing Services' },
  'commercial-roofing': { name: 'Commercial Roofing', type: 'Commercial Roofing Services' },
  'hail-damage-repair': { name: 'Hail Damage Repair', type: 'Hail Damage Roof Repair' },
  'storm-damage-repair': { name: 'Storm Damage Repair', type: 'Storm Damage Roof Repair' },
  'wind-damage-repair': { name: 'Wind Damage Repair', type: 'Wind Damage Roof Repair' },
  'emergency-roof-repair': { name: 'Emergency Roof Repair', type: 'Emergency Roofing Services' },
  'roof-replacement': { name: 'Roof Replacement', type: 'Roof Replacement Services' },
  'roof-repair': { name: 'Roof Repair', type: 'Roof Repair Services' },
  'roof-inspections': { name: 'Roof Inspections', type: 'Professional Roof Inspection' },
  'tpo-roofing': { name: 'TPO Roofing', type: 'TPO Membrane Roofing Installation' },
  'metal-roofing': { name: 'Metal Roofing', type: 'Metal Roofing Installation' },
  'asphalt-shingle-roofing': { name: 'Asphalt Shingle Roofing', type: 'Asphalt Shingle Roofing' },
  'roofing': { name: 'Roofing Services', type: 'Professional Roofing Services' },
};

function extractCity(slug) {
  for (const city of Object.keys(cityData)) {
    if (slug.includes(city)) return city;
  }
  return 'amarillo';
}

function extractService(slug) {
  for (const svc of Object.keys(serviceTypes)) {
    if (slug.startsWith(svc) || slug.includes(svc)) return svc;
  }
  if (slug.includes('hail')) return 'hail-damage-repair';
  if (slug.includes('storm')) return 'storm-damage-repair';
  if (slug.includes('wind')) return 'wind-damage-repair';
  if (slug.includes('emergency')) return 'emergency-roof-repair';
  if (slug.includes('replacement')) return 'roof-replacement';
  if (slug.includes('repair')) return 'roof-repair';
  if (slug.includes('inspection')) return 'roof-inspections';
  return 'roofing';
}

// Pages that need Service schema added (have LocalBusiness but no Service)
const pagesToFix = [
  'amarillo-weather-impact-on-roofing', 'amarillos-best-roofer',
  'commercial-roofing-amarillo', 'commercial-roofing-andrews', 'commercial-roofing-big-spring',
  'commercial-roofing-borger', 'commercial-roofing-canyon', 'commercial-roofing-dumas',
  'commercial-roofing-levelland', 'commercial-roofing-lubbock', 'commercial-roofing-lubbock-texas',
  'commercial-roofing-midland', 'commercial-roofing-midland-texas', 'commercial-roofing-monahans',
  'commercial-roofing-odessa', 'commercial-roofing-odessa-texas', 'commercial-roofing-pampa',
  'commercial-roofing-perryton', 'commercial-roofing-snyder',
  'emergency-roof-repair-amarillo', 'emergency-roof-repair-andrews', 'emergency-roof-repair-big-spring',
  'emergency-roof-repair-borger', 'emergency-roof-repair-canyon', 'emergency-roof-repair-dumas',
  'emergency-roof-repair-levelland', 'emergency-roof-repair-lubbock', 'emergency-roof-repair-midland',
  'emergency-roof-repair-monahans', 'emergency-roof-repair-odessa', 'emergency-roof-repair-pampa',
  'emergency-roof-repair-perryton', 'emergency-roof-repair-snyder',
  'metal-roofing-amarillo', 'metal-roofing-lubbock', 'metal-roofing-midland', 'metal-roofing-odessa',
  'residential-roofing-amarillo', 'residential-roofing-andrews', 'residential-roofing-big-spring',
  'residential-roofing-borger', 'residential-roofing-canyon', 'residential-roofing-dumas',
  'residential-roofing-levelland', 'residential-roofing-lubbock', 'residential-roofing-midland',
  'residential-roofing-monahans', 'residential-roofing-odessa', 'residential-roofing-pampa',
  'residential-roofing-perryton', 'residential-roofing-snyder',
  'roof-repair-amarillo', 'roof-replacement-amarillo', 'roof-replacement-andrews',
  'roof-replacement-big-spring', 'roof-replacement-borger', 'roof-replacement-canyon',
  'roof-replacement-dumas', 'roof-replacement-levelland', 'roof-replacement-lubbock',
  'roof-replacement-midland', 'roof-replacement-monahans', 'roof-replacement-odessa',
  'roof-replacement-pampa', 'roof-replacement-perryton', 'roof-replacement-snyder',
  'roof-inspections-amarillo', 'roof-inspections-lubbock', 'roof-inspections-midland', 'roof-inspections-odessa',
  'storm-damage-repair-perryton', 'tpo-roofing-lubbock', 'tpo-roofing-midland'
];

let fixed = 0;

for (const dir of pagesToFix) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.log(`⚠ File not found: ${dir}`);
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  
  // Check if already has Service schema
  if (content.includes('"@type": "Service"') || content.includes('@type":"Service"')) {
    console.log(`✓ Already has Service schema: ${dir}`);
    continue;
  }
  
  const city = extractCity(dir);
  const service = extractService(dir);
  const svcInfo = serviceTypes[service] || { name: 'Roofing', type: 'Roofing Services' };
  const cityName = cityData[city] || 'Amarillo';
  
  const serviceSchema = `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "${svcInfo.type}",
            "name": "${svcInfo.name} in ${cityName}",
            "description": "Professional ${svcInfo.name.toLowerCase()} services in ${cityName}, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "${cityName}",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "${svcInfo.name} Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "${svcInfo.name} Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "${svcInfo.name} Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />`;
  
  // Find where to insert - after the LocalBusiness </script> tag
  // Look for the pattern: }) }}  />  followed by whitespace and then either FAQPage or section
  const localBusinessEnd = content.indexOf('parentOrganization');
  if (localBusinessEnd === -1) {
    console.log(`⚠ Could not find LocalBusiness in: ${dir}`);
    continue;
  }
  
  // Find the closing script tag after parentOrganization
  const closeScriptIndex = content.indexOf('/>', localBusinessEnd);
  if (closeScriptIndex === -1) {
    console.log(`⚠ Could not find script close in: ${dir}`);
    continue;
  }
  
  // Insert after this closing tag
  const insertPoint = closeScriptIndex + 2;
  content = content.slice(0, insertPoint) + '\n' + serviceSchema + content.slice(insertPoint);
  
  fs.writeFileSync(pagePath, content);
  fixed++;
  console.log(`✓ Added Service schema to: ${dir}`);
}

console.log(`\n=== TOTAL: ${fixed} Service schemas added ===`);
