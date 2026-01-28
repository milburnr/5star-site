const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// Map of image filenames to descriptive context
const imageDescriptions = {
  'asphaltshingles.jpg': 'Class 4 impact-resistant asphalt shingles - Hail protection roofing',
  'TPO1.jpg': 'TPO commercial roofing installation - White membrane flat roof system',
  'TPO2.jpg': 'TPO roofing membrane - Heat-welded seams for durability',
  'EPDM1.jpg': 'EPDM rubber roofing membrane - Commercial flat roof',
  'EPDM2.jpg': 'EPDM commercial roofing installation - Black rubber membrane',
  'SteelRoofing.jpg': 'Standing seam metal roof - Ultimate hail protection',
  'hail-damage-1.jpg': 'Hail damage roof assessment - Storm damage inspection',
  'hail-damage-2.jpg': 'Hail damage on asphalt shingles - Impact craters from hailstorm',
  'hail-damage-3.jpg': 'Severe hail damage on roof - Insurance claim documentation',
  'logo-black-gold.png': '5 Star Commercial Roofing logo',
  '5-star-with-letters-1.png': '5 Star Commercial Roofing icon',
};

// Determine location from page path
function getLocationFromPath(filePath) {
  const normalized = filePath.toLowerCase();

  // Check for specific city mentions in path
  if (normalized.includes('midland')) return 'Midland';
  if (normalized.includes('odessa')) return 'Odessa';

  // Default to Amarillo for general pages and Texas Panhandle pages
  return 'Amarillo';
}

// Determine service type from page path
function getServiceFromPath(filePath) {
  const normalized = filePath.toLowerCase();

  if (normalized.includes('hail-damage')) return 'Hail damage roof repair';
  if (normalized.includes('wind-damage')) return 'Wind damage roof repair';
  if (normalized.includes('storm-damage')) return 'Storm damage roof repair';
  if (normalized.includes('heavy-rain')) return 'Rain damage roof repair';
  if (normalized.includes('snow-ice')) return 'Snow and ice damage repair';
  if (normalized.includes('roof-rot')) return 'Roof rot damage repair';
  if (normalized.includes('asphalt')) return 'Asphalt roofing';
  if (normalized.includes('tpo')) return 'TPO roofing';
  if (normalized.includes('pvc')) return 'PVC roofing';
  if (normalized.includes('epdm')) return 'EPDM roofing';
  if (normalized.includes('metal')) return 'Metal roofing';
  if (normalized.includes('standing-seam')) return 'Standing seam metal roofing';
  if (normalized.includes('commercial')) return 'Commercial roofing';
  if (normalized.includes('residential')) return 'Residential roofing';
  if (normalized.includes('industrial')) return 'Industrial roofing';
  if (normalized.includes('inspection')) return 'Roof inspection';
  if (normalized.includes('maintenance')) return 'Roof maintenance';
  if (normalized.includes('emergency')) return 'Emergency roof repair';

  return 'Roofing services';
}

// Generate alt text for an image based on context
function generateAltText(imageSrc, filePath) {
  const filename = path.basename(imageSrc);

  // Skip if no description available
  if (!imageDescriptions[filename]) {
    return null;
  }

  const location = getLocationFromPath(filePath);
  const service = getServiceFromPath(filePath);
  const description = imageDescriptions[filename];

  // Format: "[Service] in [City], TX - [Description] - 5 Star Commercial Roofing"
  return `${service} in ${location}, TX - ${description} - 5 Star Commercial Roofing`;
}

// Get all TSX files recursively
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.isFile() && item.name === 'page.tsx') {
      files.push(fullPath);
    }
  }

  return files;
}

// Update image alt text in a file
function updateImageAltText(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all img tags with src="/images/..."
  const imgRegex = /<img\s+([^>]*?)src="(\/images\/[^"]+)"([^>]*?)>/g;

  content = content.replace(imgRegex, (match, before, src, after) => {
    // Check if alt attribute already exists
    const hasAlt = /alt="[^"]*"/.test(before + after);

    const newAlt = generateAltText(src, filePath);

    if (!newAlt) {
      return match; // Skip if no description available
    }

    modified = true;

    if (hasAlt) {
      // Replace existing alt text
      const updated = (before + after).replace(/alt="[^"]*"/, `alt="${newAlt}"`);
      // Ensure proper spacing and self-closing tag
      const attrs = updated.trim();
      return `<img src="${src}" ${attrs} />`;
    } else {
      // Add alt text - proper React syntax
      const attrs = (before + after).trim();
      if (attrs) {
        return `<img src="${src}" alt="${newAlt}" ${attrs} />`;
      } else {
        return `<img src="${src}" alt="${newAlt}" />`;
      }
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

// Main execution
console.log('🖼️  Updating image alt text with location keywords...\n');

const files = getAllTsxFiles(appDir);
let updated = 0;
let errors = 0;

for (const file of files) {
  try {
    if (updateImageAltText(file)) {
      console.log(`✅ Updated: ${path.relative(appDir, file)}`);
      updated++;
    }
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err.message);
    errors++;
  }
}

console.log('\n📊 Summary:');
console.log(`✅ Files updated: ${updated}`);
console.log(`⚠️  Errors: ${errors}`);
console.log('\n✨ Image alt text optimization complete!');
