const fs = require('fs');
const path = require('path');

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

const files = findPageFiles('./app');
let fixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if already using currentCity
  if (content.includes('currentCity=')) {
    continue;
  }
  
  // Check if file has InternalLinks
  if (!content.includes('<InternalLinks')) {
    continue;
  }
  
  // Extract city and service from path
  const pathParts = file.split('/');
  const dirName = pathParts[pathParts.length - 2];
  
  let city = null;
  let service = null;
  
  for (const c of cityPatterns) {
    if (dirName.includes(c)) {
      city = c;
      break;
    }
  }
  
  for (const s of servicePatterns) {
    if (dirName.startsWith(s)) {
      service = s;
      break;
    }
  }
  
  if (city && service) {
    // Match various InternalLinks patterns
    const patterns = [
      // Pattern 1: links={[...]} without title
      /<InternalLinks\s+links=\{[\s\S]*?\}\s*\/>/g,
      // Pattern 2: title="..." links={[...]}
      /<InternalLinks\s+title="[^"]*"\s+links=\{[\s\S]*?\}\s*\/>/g,
      // Pattern 3: links with title and url
      /<InternalLinks\s+links=\{[\s\S]*?\}\s*\/>/g
    ];
    
    const replacement = `<InternalLinks 
              currentCity="${city}"
              currentService="${service}"
            />`;
    
    let newContent = content;
    for (const regex of patterns) {
      newContent = newContent.replace(regex, replacement);
    }
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      console.log(`Fixed: ${file} (city: ${city}, service: ${service})`);
      fixed++;
    }
  }
}

console.log(`\nTotal fixed: ${fixed} files`);
