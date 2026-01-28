const fs = require('fs');
const path = require('path');

/**
 * Optimize Titles and Meta Descriptions
 * - Titles: Under 60 chars, compelling, unique
 * - Metas: Under 160 chars, CTA-focused
 */

const APP_DIR = './app';
const DRY_RUN = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose');

const stats = {
  totalPages: 0,
  titlesFixed: 0,
  metasFixed: 0,
  errors: []
};

// City abbreviations for shorter titles
const CITY_ABBREV = {
  'Amarillo': 'Amarillo',
  'Midland': 'Midland', 
  'Odessa': 'Odessa',
  'Lubbock': 'Lubbock',
  'Big Spring': 'Big Spring',
  'Andrews': 'Andrews',
  'Borger': 'Borger',
  'Canyon': 'Canyon',
  'Dumas': 'Dumas',
  'Levelland': 'Levelland',
  'Monahans': 'Monahans',
  'Pampa': 'Pampa',
  'Perryton': 'Perryton',
  'Snyder': 'Snyder',
  'Hereford': 'Hereford',
  'Bushland': 'Bushland',
  'Claude': 'Claude'
};

// Service type patterns for title optimization
const SERVICE_PATTERNS = {
  'hail-damage': { short: 'Hail Damage Repair', keyword: 'hail damage' },
  'storm-damage': { short: 'Storm Damage Repair', keyword: 'storm damage' },
  'wind-damage': { short: 'Wind Damage Repair', keyword: 'wind damage' },
  'emergency-roof-repair': { short: 'Emergency Roof Repair', keyword: 'emergency' },
  'commercial-roofing': { short: 'Commercial Roofing', keyword: 'commercial' },
  'residential-roofing': { short: 'Residential Roofing', keyword: 'residential' },
  'roof-repair': { short: 'Roof Repair', keyword: 'repair' },
  'roof-replacement': { short: 'Roof Replacement', keyword: 'replacement' },
  'roof-inspection': { short: 'Roof Inspections', keyword: 'inspection' },
  'metal-roofing': { short: 'Metal Roofing', keyword: 'metal' },
  'asphalt-shingle': { short: 'Asphalt Shingles', keyword: 'asphalt' },
  'tpo-roofing': { short: 'TPO Roofing', keyword: 'tpo' },
  'flat-roof': { short: 'Flat Roof Repair', keyword: 'flat roof' }
};

function extractCityFromPath(filePath) {
  const slug = path.dirname(filePath).split('/').pop();
  
  for (const city of Object.keys(CITY_ABBREV)) {
    if (slug.toLowerCase().includes(city.toLowerCase().replace(' ', '-'))) {
      return city;
    }
  }
  return null;
}

function extractServiceFromPath(filePath) {
  const slug = path.dirname(filePath).split('/').pop();
  
  for (const [pattern, info] of Object.entries(SERVICE_PATTERNS)) {
    if (slug.includes(pattern)) {
      return info;
    }
  }
  return null;
}

function optimizeTitle(currentTitle, filePath) {
  if (!currentTitle || currentTitle.length <= 60) {
    return null; // No change needed
  }
  
  const city = extractCityFromPath(filePath);
  const service = extractServiceFromPath(filePath);
  
  // Build optimized title
  let newTitle = currentTitle;
  
  // Strategy 1: Remove common filler phrases
  newTitle = newTitle
    .replace(/\s*\|\s*Free Inspection Today\s*/gi, '')
    .replace(/\s*\|\s*Insurance Claims?\s*/gi, '')
    .replace(/\s*\|\s*Same-Day Service\s*/gi, '')
    .replace(/\s*\|\s*Call Now\s*/gi, '')
    .replace(/\s*\|\s*Asphalt & Metal\s*/gi, '')
    .replace(/\s*\|\s*24\/7\s*/gi, '')
    .replace(/24\/7 Emergency /gi, 'Emergency ')
    .replace(/ in Texas/gi, '')
    .replace(/ Texas Panhandle/gi, '');
  
  // Strategy 2: Shorten location suffixes
  newTitle = newTitle
    .replace(/ TX$/, '')
    .replace(/ Texas$/, '');
  
  // If still too long, create a fresh optimized title
  if (newTitle.length > 60 && city && service) {
    newTitle = `${service.short} ${city} TX | 5 Star Roofing`;
  } else if (newTitle.length > 60 && city) {
    newTitle = `Roofing Contractor ${city} TX | 5 Star`;
  } else if (newTitle.length > 60) {
    // Last resort: truncate intelligently
    newTitle = newTitle.substring(0, 57) + '...';
  }
  
  // Ensure brand is present
  if (!newTitle.includes('5 Star') && newTitle.length < 50) {
    newTitle += ' | 5 Star';
  }
  
  return newTitle.length <= 60 ? newTitle : newTitle.substring(0, 60);
}

function optimizeMeta(currentMeta, filePath, title) {
  if (!currentMeta || currentMeta.length <= 160) {
    return null; // No change needed
  }
  
  const city = extractCityFromPath(filePath);
  const service = extractServiceFromPath(filePath);
  
  let newMeta = currentMeta;
  
  // Strategy 1: Remove redundant phrases
  newMeta = newMeta
    .replace(/We are the /gi, '')
    .replace(/We offer /gi, '')
    .replace(/Our team provides /gi, '')
    .replace(/professional /gi, '')
    .replace(/expert /gi, '')
    .replace(/experienced /gi, '')
    .replace(/ and surrounding areas/gi, '')
    .replace(/ in the Texas Panhandle/gi, '')
    .replace(/ throughout West Texas/gi, '');
  
  // If still too long, create fresh CTA-focused meta
  if (newMeta.length > 160 && city && service) {
    newMeta = `${service.short} in ${city}, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!`;
  } else if (newMeta.length > 160) {
    // Truncate at sentence boundary if possible
    const sentences = newMeta.split(/\.\s+/);
    newMeta = '';
    for (const sentence of sentences) {
      if ((newMeta + sentence + '. ').length <= 157) {
        newMeta += sentence + '. ';
      } else {
        break;
      }
    }
    newMeta = newMeta.trim();
    if (newMeta.length < 100) {
      newMeta += ' Call for a free quote!';
    }
  }
  
  return newMeta.length <= 160 ? newMeta : newMeta.substring(0, 157) + '...';
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    // Extract current title
    const titleMatch = content.match(/title:\s*(['"`])([^'"`]+)\1/);
    if (titleMatch) {
      const currentTitle = titleMatch[2];
      const newTitle = optimizeTitle(currentTitle, filePath);
      
      if (newTitle && newTitle !== currentTitle) {
        content = content.replace(
          /title:\s*(['"`])[^'"`]+\1/,
          `title: '${newTitle.replace(/'/g, "\\'")}'`
        );
        modified = true;
        stats.titlesFixed++;
        if (VERBOSE) {
          console.log(`📝 Title: ${currentTitle.length}→${newTitle.length} chars`);
          console.log(`   Old: ${currentTitle}`);
          console.log(`   New: ${newTitle}`);
        }
      }
    }
    
    // Extract current meta description
    const metaMatch = content.match(/description:\s*(['"`])([^'"`]+)\1/);
    if (metaMatch) {
      const currentMeta = metaMatch[2];
      const newMeta = optimizeMeta(currentMeta, filePath, titleMatch?.[2]);
      
      if (newMeta && newMeta !== currentMeta) {
        content = content.replace(
          /description:\s*(['"`])[^'"`]+\1/,
          `description: '${newMeta.replace(/'/g, "\\'")}'`
        );
        modified = true;
        stats.metasFixed++;
        if (VERBOSE) {
          console.log(`📝 Meta: ${currentMeta.length}→${newMeta.length} chars`);
        }
      }
    }
    
    // Write changes
    if (modified && !DRY_RUN) {
      fs.writeFileSync(filePath, content);
    }
    
    return modified;
  } catch (error) {
    stats.errors.push({ file: filePath, error: error.message });
    return false;
  }
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

// Main execution
console.log('🔧 Title & Meta Description Optimizer');
console.log('='.repeat(50));
if (DRY_RUN) console.log('⚠️  DRY RUN MODE - No files will be modified\n');

const pageFiles = findPageFiles(APP_DIR);
console.log(`Found ${pageFiles.length} pages to process...\n`);

for (const file of pageFiles) {
  stats.totalPages++;
  processFile(file);
}

console.log('\n' + '='.repeat(50));
console.log('📊 SUMMARY');
console.log('='.repeat(50));
console.log(`Total pages processed: ${stats.totalPages}`);
console.log(`Titles optimized: ${stats.titlesFixed}`);
console.log(`Metas optimized: ${stats.metasFixed}`);
console.log(`Errors: ${stats.errors.length}`);

if (stats.errors.length > 0) {
  console.log('\n❌ Errors:');
  stats.errors.forEach(e => console.log(`   ${e.file}: ${e.error}`));
}

if (DRY_RUN) {
  console.log('\n💡 Run without --dry-run to apply changes');
} else {
  console.log('\n✅ Done! Changes applied.');
}
