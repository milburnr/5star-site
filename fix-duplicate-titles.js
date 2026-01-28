const fs = require('fs');
const path = require('path');

/**
 * Fix Duplicate Titles - Make each title unique based on URL slug
 */

const APP_DIR = './app';
const DRY_RUN = process.argv.includes('--dry-run');

// Title templates for specific page types
const TITLE_TEMPLATES = {
  // Specific service pages
  'asphalt-roofing': 'Asphalt Roofing {city} TX | 5 Star Roofing',
  'asphalt-flat-roof-repair': 'Flat Roof Repair {city} TX | BUR & Asphalt',
  'pvc-roof-repair': 'PVC Roof Repair {city} TX | 5 Star Roofing',
  'pvc-roof-replacement': 'PVC Roof Replacement {city} TX | 5 Star',
  'roof-heavy-rain-damage': 'Rain Damage Roof Repair {city} TX | 5 Star',
  'heavy-rain-damage': 'Rain Damage Roof Repair {city} TX | 5 Star',
  'roofing-services': '{city} TX Roofing Services | 5 Star Roofing',
  'roofing-methods': 'Roofing Methods & Materials {city} TX | 5 Star',
  'roofers-in': 'Best Roofers in {city} TX | 5 Star Roofing',
  'roofing-repair-services': 'Roof Repair Services {city} TX | 5 Star',
  'expert-roofing-services': 'Expert Roofing {city} TX | 5 Star Roofing',
  'amarillos-best-roofer': "Amarillo's Best Roofer | 5 Star Commercial Roofing",
  'damaged-roof-replacement': 'Damaged Roof Replacement {city} TX | 5 Star',
  'residential-roof-repair': 'Residential Roof Repair {city} TX | 5 Star',
  'residential-roof-replacement': 'Residential Roof Replacement {city} TX',
  'commercial-roof-repair': 'Commercial Roof Repair {city} TX | 5 Star',
  'metal-roof-installation': 'Metal Roof Installation {city} TX | 5 Star',
  'roof-inspection': 'Roof Inspection {city} TX | Free Quote | 5 Star',
  'roofing-amarillo-tx': 'Amarillo TX Roofing | Trusted Local Roofers',
  'amarillo-homes-roofing': 'Amarillo Home Roofing | Residential Experts',
  'amarillo-weather-impact': 'Amarillo Weather & Your Roof | 5 Star Roofing',
  
  // City-specific pages
  'amarillo-texas-roofing': 'Amarillo Texas Roofing | Local Hail Experts',
  'midland-texas-roofing': 'Midland Texas Roofing | Local Hail Experts',
  'odessa-texas-roofing': 'Odessa Texas Roofing | Local Hail Experts',
  'lubbock-texas-roofing': 'Lubbock Texas Roofing | Local Hail Experts',
  'borger-texas-roofing': 'Borger Texas Roofing | Hail Damage Experts',
  'dumas-texas-roofing': 'Dumas Texas Roofing | Hail Damage Experts',
  'canyon-texas-roofing': 'Canyon Texas Roofing | Hail Damage Experts',
  'hereford-texas-roofing': 'Hereford Texas Roofing | Hail Damage Experts',
  
  // Blog posts
  'best-roofing-materials': 'Best Roofing Materials for Texas 2025 | 5 Star',
  'how-to-file-hail': 'How to File a Hail Damage Insurance Claim | Guide',
  'roof-maintenance-checklist': 'Roof Maintenance Checklist Texas | 5 Star',
  'roof-replacement-cost': 'Roof Replacement Cost Texas 2025 | Price Guide'
};

// City extraction
const CITIES = ['Amarillo', 'Midland', 'Odessa', 'Lubbock', 'Big Spring', 'Andrews', 
                'Borger', 'Canyon', 'Dumas', 'Levelland', 'Monahans', 'Pampa', 
                'Perryton', 'Snyder', 'Hereford', 'Bushland', 'Claude'];

function extractCity(slug) {
  for (const city of CITIES) {
    if (slug.toLowerCase().includes(city.toLowerCase().replace(' ', '-'))) {
      return city;
    }
  }
  return 'Amarillo'; // Default
}

function getUniqueTitle(slug) {
  // Check for exact match first
  for (const [pattern, template] of Object.entries(TITLE_TEMPLATES)) {
    if (slug.includes(pattern)) {
      const city = extractCity(slug);
      return template.replace('{city}', city);
    }
  }
  return null;
}

function processFile(filePath) {
  const slug = path.dirname(filePath).split('/').pop();
  
  // Skip if not a problem slug
  const problemSlugs = [
    'asphalt-roofing-in-amarillo',
    'roof-heavy-rain-damage-in-amarillo', 
    'roofing-services-in-amarillo-tx',
    'asphalt-flat-roof-repair-in-amarillo',
    'pvc-roof-repair-in-amarillo',
    'commercial-roofing-amarillo-tx',
    'commercial-roofing-odessa-texas',
    'commercial-roofing-lubbock-texas',
    'commercial-roofing-midland-texas',
    'hail-damage-roof-repair-amarillo-texas',
    'hail-damage-roof-repair-in-amarillo',
    'hail-damage-roofs-in-amarillo',
    'roof-hail-damage-repair-services-in-amarillo-tx',
    'hail-damage-repair-amarillo-tx',
    'hail-damage-repair-lubbock-tx',
    'hail-damage-repair-midland-tx',
    'hail-damage-repair-odessa-tx',
    'hail-damage-roof-repair-lubbock-texas',
    'hail-damage-roof-repair-midland-texas',
    'hail-damage-roof-repair-odessa-texas',
    'residential-roofing-amarillo-texas',
    'residential-roofing-amarillo-tx',
    'residential-roofing-in-amarillo',
    'emergency-roof-repair-odessa-texas',
    'amarillo-texas-roofing',
    'roofing-amarillo-tx',
    'amarillo-homes-roofing',
    'roofing-methods-in-amarillo',
    'roofers-in-amarillo',
    'expert-roofing-services-in-amarillo',
    'roofing-repair-services-in-amarillo',
    'damaged-roof-replacement-in-amarillo',
    'residential-roof-repair-in-amarillo',
    'residential-roof-replacement-in-amarillo',
    'pvc-roof-replacement-in-amarillo'
  ];
  
  if (!problemSlugs.includes(slug)) return false;
  
  const newTitle = getUniqueTitle(slug);
  if (!newTitle) {
    // Generate based on slug
    const city = extractCity(slug);
    const words = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1));
    return false;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace title
    const newContent = content.replace(
      /title:\s*(['"`])[^'"`]+\1/,
      `title: '${newTitle.replace(/'/g, "\\'")}'`
    );
    
    if (newContent !== content) {
      if (!DRY_RUN) {
        fs.writeFileSync(filePath, newContent);
      }
      console.log(`✓ ${slug} → "${newTitle}"`);
      return true;
    }
  } catch (e) {
    console.error(`Error: ${slug}: ${e.message}`);
  }
  return false;
}

function findPageFiles(dir) {
  const files = [];
  function scan(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('_') && !entry.name.startsWith('.')) {
        scan(fullPath);
      } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx') {
        files.push(fullPath);
      }
    }
  }
  scan(dir);
  return files;
}

console.log('🔧 Fixing Duplicate Titles');
console.log('='.repeat(50));
if (DRY_RUN) console.log('⚠️  DRY RUN\n');

const pages = findPageFiles(APP_DIR);
let fixed = 0;
for (const page of pages) {
  if (processFile(page)) fixed++;
}

console.log(`\n✅ Fixed ${fixed} titles`);
