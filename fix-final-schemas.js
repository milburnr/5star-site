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
  'commercial-roofing': { name: 'Commercial Roofing', type: 'Commercial Roofing Services' },
  'residential-roofing': { name: 'Residential Roofing', type: 'Residential Roofing Services' },
  'hail-damage': { name: 'Hail Damage Repair', type: 'Hail Damage Roof Repair' },
  'flat-roof': { name: 'Flat Roof Repair', type: 'Flat Roof Repair Services' },
  'metal-roof': { name: 'Metal Roofing', type: 'Metal Roofing Installation' },
  'roof-inspection': { name: 'Roof Inspection', type: 'Professional Roof Inspection' },
  'roofing': { name: 'Roofing Services', type: 'Professional Roofing Services' },
};

function extractCity(slug) {
  for (const city of Object.keys(cityData)) {
    if (slug.includes(city)) return city;
  }
  return 'amarillo';
}

function extractService(slug) {
  if (slug.includes('commercial')) return 'commercial-roofing';
  if (slug.includes('residential')) return 'residential-roofing';
  if (slug.includes('hail-damage')) return 'hail-damage';
  if (slug.includes('flat-roof')) return 'flat-roof';
  if (slug.includes('metal-roof') || slug.includes('metal-roofing')) return 'metal-roof';
  if (slug.includes('inspection')) return 'roof-inspection';
  return 'roofing';
}

function generateServiceScript(cityName, svcInfo) {
  return `
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "${svcInfo.type}",
        "name": "${svcInfo.name} in ${cityName}",
        "description": "Professional ${svcInfo.name.toLowerCase()} services in ${cityName}, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
        "provider": { "@type": "RoofingContractor", "name": "5 Star Commercial Roofing", "telephone": "(806) 622-6041", "@id": "https://5starroofingpros.com/#organization" },
        "areaServed": { "@type": "City", "name": "${cityName}", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "${svcInfo.name} Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "${svcInfo.name} Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "${svcInfo.name} Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
          ]
        }
      }) }} />`;
}

// Pages identified as missing Service schema (have LocalBusiness but no standalone Service)
const pagesToFix = [
  'commercial-roofing-lubbock-texas', 'commercial-roofing-midland-texas',
  'flat-roof-repair-midland-texas',
  'hail-damage-roof-repair-lubbock-texas', 'hail-damage-roof-repair-midland-texas', 'hail-damage-roof-repair-odessa-texas',
  'metal-roof-installation-odessa-texas',
  'residential-roofing-amarillo-texas', 'residential-roofing-in-amarillo',
  'residential-roofing-lubbock-texas', 'residential-roofing-midland-texas', 'residential-roofing-odessa-texas',
  'roof-inspection-amarillo-texas'
];

let fixed = 0;

for (const dir of pagesToFix) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.log(`⚠ File not found: ${dir}`);
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  
  // More specific check - look for "Service" as the @type in a schema block
  // Match /"@type":\s*"Service"/ but NOT inside a different context
  const hasServiceSchema = /"@type":\s*"Service"/.test(content) && 
    content.includes('"serviceType"');
  
  if (hasServiceSchema) {
    console.log(`✓ Already has Service schema: ${dir}`);
    continue;
  }
  
  const city = extractCity(dir);
  const service = extractService(dir);
  const svcInfo = serviceTypes[service] || { name: 'Roofing', type: 'Roofing Services' };
  const cityName = cityData[city] || 'Amarillo';
  
  const serviceScript = generateServiceScript(cityName, svcInfo);
  
  // Find insertion point - after parentOrganization line
  const orgIdx = content.indexOf('"parentOrganization"');
  if (orgIdx === -1) {
    console.log(`⚠ No parentOrganization found in: ${dir}`);
    continue;
  }
  
  // Find the closing /> of the script tag
  const scriptCloseIdx = content.indexOf('/>', orgIdx);
  if (scriptCloseIdx === -1) {
    console.log(`⚠ No script close found in: ${dir}`);
    continue;
  }
  
  // Insert after />
  content = content.slice(0, scriptCloseIdx + 2) + '\n' + serviceScript + content.slice(scriptCloseIdx + 2);
  
  fs.writeFileSync(pagePath, content);
  fixed++;
  console.log(`✓ Added Service schema to: ${dir}`);
}

console.log(`\n=== TOTAL: ${fixed} Service schemas added ===`);
