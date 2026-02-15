const fs = require('fs');
const path = require('path');

// Find all files with wrong InternalLinks usage
const appDir = './app';

function findPageFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}

const files = findPageFiles(appDir);
let fixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Check if file has wrong InternalLinks usage (title= prop)
  if (content.includes('<InternalLinks') && content.includes('title=')) {
    // Extract city and service from path
    const pathParts = file.split('/');
    const dirName = pathParts[pathParts.length - 2]; // e.g., "hail-damage-repair-amarillo"
    
    // Parse service and city from directory name
    // Pattern: service-city or service-city-tx
    const cityPatterns = [
      'amarillo', 'midland', 'odessa', 'lubbock', 'canyon', 'borger', 
      'dumas', 'pampa', 'perryton', 'levelland', 'hereford', 'plainview',
      'andrews', 'big-spring', 'monahans', 'snyder'
    ];
    
    const servicePatterns = [
      'hail-damage-repair', 'storm-damage-repair', 'wind-damage-repair',
      'commercial-roofing', 'residential-roofing', 'metal-roofing',
      'tpo-roofing', 'asphalt-shingle-roofing', 'roof-replacement',
      'roof-inspections', 'roof-repair', 'emergency-roof-repair'
    ];
    
    let city = null;
    let service = null;
    
    for (const c of cityPatterns) {
      if (dirName.includes(c)) {
        city = c;
        break;
      }
    }
    
    for (const s of servicePatterns) {
      if (dirName.includes(s)) {
        service = s;
        break;
      }
    }
    
    if (city && service) {
      // Replace the InternalLinks block
      const regex = /<InternalLinks\s+title="[^"]*"\s+links=\{[\s\S]*?\}\s*\/>/g;
      const replacement = `<InternalLinks \n              currentCity="${city}"\n              currentService="${service}"\n            />`;
      
      const newContent = content.replace(regex, replacement);
      
      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        console.log(`Fixed: ${file} (city: ${city}, service: ${service})`);
        fixed++;
      }
    }
  }
}

console.log(`\nTotal fixed: ${fixed} files`);
