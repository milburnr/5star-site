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

// Find pages without images
const noImage = [];
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const pageName = file.split('/').slice(-2, -1)[0];
  const hasImage = content.includes('backgroundImage') || content.includes('<img') || content.includes('OptimizedImage') || content.includes('.r2.dev');
  if (!hasImage) {
    noImage.push(pageName);
  }
}

console.log('Pages without any images:');
noImage.forEach(p => console.log(`  ${p}`));

console.log('\n\nLong titles (>60 chars):');
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const pageName = file.split('/').slice(-2, -1)[0];
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch && titleMatch[1].length > 60) {
    console.log(`  ${pageName}: "${titleMatch[1]}" (${titleMatch[1].length})`);
  }
}
