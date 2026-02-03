const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const results = {
  missingSchema: [],
  missingInternalLinks: [],
  longTitles: [],
  shortDescriptions: [],
  pagesAnalyzed: 0
};

// Skip these directories
const skipDirs = ['articles', 'blog', 'contact', 'about', 'gallery', 'reviews', 'services', 'service-areas', 'roofing-methods', 'industrial-roofing', 'residential-roofing', 'commercial-roofing'];

// Get all page directories
const dirs = fs.readdirSync(appDir).filter(d => {
  const stat = fs.statSync(path.join(appDir, d));
  return stat.isDirectory() && !d.startsWith('.') && !d.startsWith('tmp') && !skipDirs.includes(d);
});

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  const content = fs.readFileSync(pagePath, 'utf-8');
  results.pagesAnalyzed++;
  
  // Check for schema markup
  const hasLocalBusinessSchema = content.includes('@type": "LocalBusiness"') || content.includes("@type\": 'LocalBusiness'");
  const hasServiceSchema = content.includes('@type": "Service"') || content.includes("@type\": 'Service'");
  
  if (!hasLocalBusinessSchema || !hasServiceSchema) {
    results.missingSchema.push({
      dir,
      hasLocalBusiness: hasLocalBusinessSchema,
      hasService: hasServiceSchema
    });
  }
  
  // Check for InternalLinks
  const hasInternalLinks = content.includes('InternalLinks');
  if (!hasInternalLinks) {
    results.missingInternalLinks.push(dir);
  }
  
  // Check title length
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title.length > 60) {
      results.longTitles.push({ dir, title, length: title.length });
    }
  }
  
  // Check description length  
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch) {
    const desc = descMatch[1];
    if (desc.length < 120) {
      results.shortDescriptions.push({ dir, desc, length: desc.length });
    }
  }
}

console.log('=== SEO ANALYSIS RESULTS ===\n');
console.log(`Pages analyzed: ${results.pagesAnalyzed}`);
console.log(`Missing schema: ${results.missingSchema.length}`);
console.log(`Missing InternalLinks: ${results.missingInternalLinks.length}`);
console.log(`Long titles (>60): ${results.longTitles.length}`);
console.log(`Short descriptions (<120): ${results.shortDescriptions.length}`);

console.log('\n=== MISSING SCHEMA ===');
results.missingSchema.slice(0, 20).forEach(p => {
  console.log(`${p.dir}: LocalBusiness=${p.hasLocalBusiness}, Service=${p.hasService}`);
});
if (results.missingSchema.length > 20) console.log(`... and ${results.missingSchema.length - 20} more`);

console.log('\n=== MISSING INTERNAL LINKS ===');
results.missingInternalLinks.slice(0, 20).forEach(d => console.log(d));
if (results.missingInternalLinks.length > 20) console.log(`... and ${results.missingInternalLinks.length - 20} more`);

console.log('\n=== LONG TITLES ===');
results.longTitles.forEach(t => console.log(`${t.dir}: "${t.title}" (${t.length} chars)`));

console.log('\n=== SHORT DESCRIPTIONS ===');
results.shortDescriptions.forEach(d => console.log(`${d.dir}: "${d.desc}" (${d.length} chars)`));

// Save to JSON for processing
fs.writeFileSync('seo-gaps.json', JSON.stringify(results, null, 2));
console.log('\n\nSaved to seo-gaps.json');
