#!/usr/bin/env node

/**
 * fix-service-schema-gaps.js
 *
 * Finds service-city pages without Service schema and adds it.
 * Also generates a comprehensive schema coverage report.
 *
 * Usage:
 *   node scripts/fix-service-schema-gaps.js --dry-run   # Preview changes
 *   node scripts/fix-service-schema-gaps.js              # Apply changes
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.join(__dirname, '..', 'app');

const CITIES = [
  'amarillo', 'andrews', 'big-spring', 'borger', 'canyon', 'dumas',
  'hereford', 'levelland', 'lubbock', 'midland', 'odessa', 'pampa',
  'perryton', 'snyder'
];

const CITY_DISPLAY = {
  'amarillo': 'Amarillo',
  'andrews': 'Andrews',
  'big-spring': 'Big Spring',
  'borger': 'Borger',
  'canyon': 'Canyon',
  'dumas': 'Dumas',
  'hereford': 'Hereford',
  'levelland': 'Levelland',
  'lubbock': 'Lubbock',
  'midland': 'Midland',
  'odessa': 'Odessa',
  'pampa': 'Pampa',
  'perryton': 'Perryton',
  'snyder': 'Snyder'
};

const SERVICE_TYPES = {
  'roof-repair': 'Roof Repair',
  'roof-replacement': 'Roof Replacement',
  'roof-inspections': 'Roof Inspection',
  'storm-damage-repair': 'Storm Damage Repair',
  'wind-damage-repair': 'Wind Damage Repair',
  'hail-damage-repair': 'Hail Damage Repair',
  'commercial-roofing': 'Commercial Roofing',
  'residential-roofing': 'Residential Roofing',
  'asphalt-shingle-roofing': 'Asphalt Shingle Roofing',
  'metal-roofing': 'Metal Roofing',
  'tpo-roofing': 'TPO Roofing',
  'flat-roof-repair': 'Flat Roof Repair',
  'epdm-roofing': 'EPDM Roofing'
};

function isServiceCityPage(dirname) {
  for (const city of CITIES) {
    if (dirname.endsWith('-' + city)) {
      const servicePart = dirname.slice(0, -(city.length + 1));
      if (SERVICE_TYPES[servicePart]) {
        return { service: servicePart, city };
      }
    }
    // Handle -tx suffix
    if (dirname.endsWith('-' + city + '-tx')) {
      const servicePart = dirname.slice(0, -(city.length + 4));
      if (SERVICE_TYPES[servicePart]) {
        return { service: servicePart, city };
      }
    }
  }
  return null;
}

function generateServiceSchema(serviceType, cityName) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": {
      "@type": "RoofingContractor",
      "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Roofing",
      "telephone": "(806) 622-6041",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    "description": `Professional ${serviceType.toLowerCase()} services in ${cityName}, TX by 5 Star Roofing.`
  };
}

function insertServiceSchema(content, schema) {
  const schemaJSON = JSON.stringify(schema);
  const schemaBlock = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(schema, null, 8).replace(/^/gm, '      ').trim()}) }} />\n`;

  // Find last ld+json script block
  const patterns = [
    /<script\s+type="application\/ld\+json"\s+dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}\s*\/>/g,
    /<script[\s\S]*?type="application\/ld\+json"[\s\S]*?<\/script>/g
  ];

  let lastIndex = -1;
  for (const pattern of patterns) {
    let m;
    while ((m = pattern.exec(content)) !== null) {
      const end = m.index + m[0].length;
      if (end > lastIndex) lastIndex = end;
    }
  }

  if (lastIndex > -1) {
    return content.slice(0, lastIndex) + '\n' + schemaBlock + content.slice(lastIndex);
  }

  return null;
}

function main() {
  console.log(`Service Schema Gap Fixer ${DRY_RUN ? '(DRY RUN)' : '(LIVE)'}`);
  console.log('='.repeat(50));

  // Scan all app directories
  const dirs = fs.readdirSync(APP_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const servicePages = [];
  const gapPages = [];

  for (const dir of dirs) {
    const info = isServiceCityPage(dir);
    if (!info) continue;

    const filePath = path.join(APP_DIR, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, 'utf-8');
    const hasService = content.includes('"@type": "Service"');

    servicePages.push({ dir, ...info, hasService, filePath });
    if (!hasService) {
      gapPages.push({ dir, ...info, filePath, content });
    }
  }

  console.log(`\nService-city pages found: ${servicePages.length}`);
  console.log(`Pages with Service schema: ${servicePages.length - gapPages.length}`);
  console.log(`Gap pages: ${gapPages.length}\n`);

  let fixed = 0;
  for (const page of gapPages) {
    const serviceType = SERVICE_TYPES[page.service];
    const cityName = CITY_DISPLAY[page.city];
    console.log(`  ${page.dir}/page.tsx: ${serviceType} in ${cityName}`);

    const schema = generateServiceSchema(serviceType, cityName);

    if (!DRY_RUN) {
      const newContent = insertServiceSchema(page.content, schema);
      if (newContent) {
        fs.writeFileSync(page.filePath, newContent);
        console.log(`    FIXED: Added Service schema`);
        fixed++;
      } else {
        console.log(`    ERROR: Could not find insertion point`);
      }
    } else {
      fixed++;
    }
  }

  // Count various schema types for report
  const allPages = [];
  for (const dir of dirs) {
    const filePath = path.join(APP_DIR, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf-8');
    allPages.push({ dir, content, filePath });
  }

  const faqContentCount = allPages.filter(p => p.content.includes('<AccordionTrigger ')).length;
  const faqSchemaCount = allPages.filter(p => p.content.includes('"FAQPage"')).length;
  const serviceSchemaCount = allPages.filter(p => p.content.includes('"@type": "Service"')).length + fixed;
  const breadcrumbCount = allPages.filter(p => p.content.includes('<Breadcrumb')).length;
  const localBusinessCount = allPages.filter(p => p.content.includes('LocalBusiness')).length;
  const typeArrayCount = allPages.filter(p => p.content.includes('["LocalBusiness"')).length;
  const homepageHasBreadcrumb = (() => {
    const hp = path.join(APP_DIR, 'page.tsx');
    if (fs.existsSync(hp)) {
      return fs.readFileSync(hp, 'utf-8').includes('<Breadcrumb');
    }
    return false;
  })();

  // Write coverage report
  const report = `Schema Coverage Report
Generated: ${new Date().toISOString().split('T')[0]}
======================

FAQ Schema:
  Pages with FAQ content (AccordionTrigger usage): ${faqContentCount}
  Pages with FAQPage schema: ${faqSchemaCount}
  Gaps remaining: ${Math.max(0, faqContentCount - faqSchemaCount)}

Service Schema:
  Service-city pages identified: ${servicePages.length}
  Pages with Service schema: ${serviceSchemaCount}
  Gaps fixed this run: ${fixed}
  Gaps remaining: ${Math.max(0, servicePages.length - serviceSchemaCount)}

Breadcrumb Schema:
  Pages with Breadcrumb component: ${breadcrumbCount}
  Homepage excluded (correct): ${homepageHasBreadcrumb ? 'no (has breadcrumb)' : 'yes'}
  Coverage: ${breadcrumbCount >= 200 ? 'complete' : breadcrumbCount + ' pages'}

LocalBusiness Schema:
  Pages with LocalBusiness: ${localBusinessCount}
  All use @type array: ${typeArrayCount === localBusinessCount ? 'yes' : 'no (' + typeArrayCount + '/' + localBusinessCount + ' use array)'}

Total pages scanned: ${allPages.length}
`;

  const reportPath = path.join(__dirname, 'schema-audit-report.txt');
  fs.writeFileSync(reportPath, report);
  console.log(`\nCoverage report written to: scripts/schema-audit-report.txt`);

  console.log('\n' + '='.repeat(50));
  console.log(`Summary:`);
  console.log(`  Service pages ${DRY_RUN ? 'to fix' : 'fixed'}: ${fixed}`);
  console.log(`  Total service-city pages: ${servicePages.length}`);
  console.log(`  Service schema coverage: ${serviceSchemaCount}/${servicePages.length}`);
}

main();
