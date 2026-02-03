const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// Get all page files
const dirs = fs.readdirSync(appDir).filter(d => {
  const stat = fs.statSync(path.join(appDir, d));
  return stat.isDirectory() && !d.startsWith('.');
});

let fixed = 0;

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  
  // Look for corrupted descriptions - pattern: "..." followed by 's without proper quotes
  // The corruption looks like: "...text."s more text"
  const corruptedPattern = /description:\s*"([^"]+)"\s*s\s*[^,]/;
  
  if (corruptedPattern.test(content)) {
    // Extract the good part (before the rogue 's')
    const match = content.match(/description:\s*"([^"]+)"/);
    if (match) {
      const goodDesc = match[1];
      
      // Find the full corrupted line and replace it
      // Match from 'description:' to the next line that starts with valid content
      const lineMatch = content.match(/description:\s*"[^"]+"\s*s[^,\n]+[^}]*/);
      if (lineMatch) {
        content = content.replace(lineMatch[0], `description: "${goodDesc}",`);
        fs.writeFileSync(pagePath, content);
        fixed++;
        console.log(`✓ Fixed: ${dir}`);
      }
    }
  }
}

console.log(`\n=== Fixed ${fixed} files ===`);
