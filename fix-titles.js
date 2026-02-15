const fs = require('fs');
const path = require('path');

function findPageFiles(dir) {
  const files = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...findPageFiles(fullPath));
      } else if (entry.name === 'page.tsx') {
        files.push(fullPath);
      }
    }
  } catch (e) {}
  return files;
}

const files = findPageFiles('./app');
let fixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const pageName = file.split('/').slice(-2, -1)[0];
  
  // Find titles over 60 chars
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch && titleMatch[1].length > 60) {
    const oldTitle = titleMatch[1];
    let newTitle = oldTitle;
    
    // Strategy: shorten "| 5 Star Roofing" to "| 5 Star"
    if (newTitle.includes('| 5 Star Roofing')) {
      newTitle = newTitle.replace('| 5 Star Roofing', '| 5 Star');
    }
    
    // If still too long, try other shortenings
    if (newTitle.length > 60) {
      newTitle = newTitle.replace('Expert Installation', 'Installation');
      newTitle = newTitle.replace('Professional Roof Repair', 'Roof Repair');
      newTitle = newTitle.replace('Local Roof Repair & Replacement', 'Roof Services');
      newTitle = newTitle.replace('Roof Repair & Installation', 'Roof Services');
      newTitle = newTitle.replace('Trusted Local Contractors', 'Local Roofers');
      newTitle = newTitle.replace('Repair & Inspection', 'Repair');
      newTitle = newTitle.replace('Installation & Repair', 'Services');
      newTitle = newTitle.replace('Commercial Installation', 'Installation');
      newTitle = newTitle.replace('Seamless Gutters', 'Gutters');
      newTitle = newTitle.replace('Flat Roof & TPO Experts', 'TPO & Flat Roofs');
      newTitle = newTitle.replace('TPO, EPDM, Flat Roofs', 'Flat Roofs');
      newTitle = newTitle.replace('Free Inspections', 'Free Inspection');
    }
    
    if (newTitle !== oldTitle && newTitle.length <= 60) {
      content = content.replace(`title: '${oldTitle}'`, `title: '${newTitle}'`);
      content = content.replace(`title: "${oldTitle}"`, `title: "${newTitle}"`);
      content = content.replace(`title: \`${oldTitle}\``, `title: \`${newTitle}\``);
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${pageName}`);
      console.log(`  Old (${oldTitle.length}): ${oldTitle}`);
      console.log(`  New (${newTitle.length}): ${newTitle}`);
      fixed++;
    } else if (newTitle.length > 60) {
      console.log(`STILL TOO LONG: ${pageName} (${newTitle.length}): ${newTitle}`);
    }
  }
}

console.log(`\nTotal fixed: ${fixed}`);
