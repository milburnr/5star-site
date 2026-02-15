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
const issues = {
  noImage: [],
  brokenImage: [],
  noSchema: [],
  noMeta: [],
  longTitle: [],
  shortMeta: []
};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const pageName = file.split('/').slice(-2, -1)[0];
  
  // Check for images
  const hasImage = content.includes('backgroundImage') || content.includes('<img') || content.includes('OptimizedImage') || content.includes('.r2.dev');
  if (!hasImage) {
    issues.noImage.push(pageName);
  }
  
  // Check for broken images (src="" or no src)
  if (content.includes('src=""') || content.includes("src=''")) {
    issues.brokenImage.push(pageName);
  }
  
  // Check for schema
  const hasSchema = content.includes('application/ld+json') || content.includes('@type');
  if (!hasSchema) {
    issues.noSchema.push(pageName);
  }
  
  // Check metadata
  const hasMetadata = content.includes('export const metadata');
  if (!hasMetadata) {
    issues.noMeta.push(pageName);
  }
  
  // Check title length (try to extract)
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch && titleMatch[1].length > 60) {
    issues.longTitle.push(`${pageName} (${titleMatch[1].length} chars)`);
  }
  
  // Check meta description length
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch && descMatch[1].length < 120) {
    issues.shortMeta.push(`${pageName} (${descMatch[1].length} chars)`);
  }
}

console.log('=== PAGE AUDIT RESULTS ===\n');
console.log(`Total pages scanned: ${files.length}\n`);

console.log(`Pages without images: ${issues.noImage.length}`);
if (issues.noImage.length > 0 && issues.noImage.length <= 20) {
  issues.noImage.forEach(p => console.log(`  - ${p}`));
}

console.log(`\nPages with broken images: ${issues.brokenImage.length}`);
if (issues.brokenImage.length > 0) {
  issues.brokenImage.forEach(p => console.log(`  - ${p}`));
}

console.log(`\nPages without schema: ${issues.noSchema.length}`);
if (issues.noSchema.length > 0 && issues.noSchema.length <= 10) {
  issues.noSchema.forEach(p => console.log(`  - ${p}`));
}

console.log(`\nPages without metadata export: ${issues.noMeta.length}`);
if (issues.noMeta.length > 0 && issues.noMeta.length <= 10) {
  issues.noMeta.forEach(p => console.log(`  - ${p}`));
}

console.log(`\nPages with titles > 60 chars: ${issues.longTitle.length}`);
if (issues.longTitle.length > 0 && issues.longTitle.length <= 15) {
  issues.longTitle.forEach(p => console.log(`  - ${p}`));
}

console.log(`\nPages with short meta (<120 chars): ${issues.shortMeta.length}`);
