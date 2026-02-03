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
  'hail-damage': { name: 'Hail Damage Repair', type: 'Hail Damage Roof Repair' },
  'storm-damage-repair': { name: 'Storm Damage Repair', type: 'Storm Damage Roof Repair' },
  'wind-damage-repair': { name: 'Wind Damage Repair', type: 'Wind Damage Roof Repair' },
  'emergency-roof-repair': { name: 'Emergency Roof Repair', type: 'Emergency Roofing Services' },
  'roof-replacement': { name: 'Roof Replacement', type: 'Roof Replacement Services' },
  'roof-repair': { name: 'Roof Repair', type: 'Roof Repair Services' },
  'flat-roof-repair': { name: 'Flat Roof Repair', type: 'Flat Roof Repair Services' },
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
  if (slug.includes('hail-damage')) return 'hail-damage-repair';
  if (slug.includes('storm-damage')) return 'storm-damage-repair';
  if (slug.includes('wind-damage')) return 'wind-damage-repair';
  if (slug.includes('emergency')) return 'emergency-roof-repair';
  if (slug.includes('flat-roof')) return 'flat-roof-repair';
  if (slug.includes('replacement')) return 'roof-replacement';
  if (slug.includes('repair')) return 'roof-repair';
  if (slug.includes('inspection')) return 'roof-inspections';
  if (slug.includes('commercial-roofing')) return 'commercial-roofing';
  if (slug.includes('residential-roofing')) return 'residential-roofing';
  if (slug.includes('tpo')) return 'tpo-roofing';
  if (slug.includes('metal')) return 'metal-roofing';
  if (slug.includes('asphalt')) return 'asphalt-shingle-roofing';
  return 'roofing';
}

// Remaining pages from analysis
const remainingPages = [
  'commercial-roofing-lubbock-texas', 'commercial-roofing-midland-texas',
  'damaged-roof-replacement-in-amarillo', 'flat-roof-repair-midland-texas',
  'hail-damage-repair-amarillo', 'hail-damage-repair-andrews', 'hail-damage-repair-big-spring',
  'hail-damage-repair-levelland', 'hail-damage-repair-monahans', 'hail-damage-repair-perryton',
  'hail-damage-repair-snyder', 'hail-damage-roof-repair-lubbock-texas',
  'hail-damage-roof-repair-midland-texas', 'hail-damage-roof-repair-odessa-texas',
  'metal-roofing-borger', 'metal-roofing-canyon', 'metal-roofing-dumas',
  'metal-roofing-levelland', 'metal-roofing-monahans', 'metal-roofing-perryton', 'metal-roofing-snyder',
  'residential-roofing-amarillo-texas', 'residential-roofing-in-amarillo',
  'residential-roofing-lubbock-texas', 'residential-roofing-midland-texas', 'residential-roofing-odessa-texas',
  'storm-damage-repair-amarillo', 'tpo-roofing-amarillo', 'tpo-roofing-odessa'
];

let fixed = 0;

for (const dir of remainingPages) {
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
  
  // Check if has LocalBusiness
  if (!content.includes('LocalBusiness')) {
    console.log(`⚠ No LocalBusiness in: ${dir}`);
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
  
  // Find where to insert - after parentOrganization or after LocalBusiness script close
  const insertPatterns = [
    { search: 'parentOrganization', offset: 0 },
    { search: '"@id": "https://5starroofingpros.com/#organization"', offset: 0 }
  ];
  
  let inserted = false;
  for (const pattern of insertPatterns) {
    const idx = content.indexOf(pattern.search);
    if (idx !== -1) {
      // Find next /> after this
      const closeIdx = content.indexOf('/>', idx);
      if (closeIdx !== -1) {
        content = content.slice(0, closeIdx + 2) + '\n' + serviceSchema + content.slice(closeIdx + 2);
        inserted = true;
        break;
      }
    }
  }
  
  if (!inserted) {
    // Try finding after the LocalBusiness script entirely
    const localBizEnd = content.indexOf('</script>', content.indexOf('LocalBusiness'));
    if (localBizEnd !== -1) {
      content = content.slice(0, localBizEnd + 9) + '\n' + serviceSchema + content.slice(localBizEnd + 9);
      inserted = true;
    }
  }
  
  if (inserted) {
    fs.writeFileSync(pagePath, content);
    fixed++;
    console.log(`✓ Added Service schema to: ${dir}`);
  } else {
    console.log(`⚠ Could not find insertion point in: ${dir}`);
  }
}

// Fix the short description
console.log('\n=== FIXING SHORT DESCRIPTION ===');
const descPath = path.join(appDir, 'amarillo-weather-impact-on-roofing', 'page.tsx');
if (fs.existsSync(descPath)) {
  let content = fs.readFileSync(descPath, 'utf-8');
  const newDesc = "Learn how Amarillo's extreme weather impacts your roof. Hail, high winds, and temperature swings cause damage. Get expert roofing advice from 5 Star Roofing. Free inspections. Call (806) 622-6041.";
  
  // Replace with a more thorough regex
  content = content.replace(
    /description:\s*["'][^"']*["']/,
    `description: "${newDesc}"`
  );
  
  fs.writeFileSync(descPath, content);
  console.log(`✓ Fixed description: amarillo-weather-impact-on-roofing (${newDesc.length} chars)`);
}

console.log(`\n=== TOTAL: ${fixed} Service schemas added ===`);
