const fs = require('fs');
const path = require('path');

/**
 * Comprehensive SEO Audit Tool
 * Scans all pages and outputs a CSV with title, meta, H1, issues
 */

const APP_DIR = './app';
const OUTPUT_FILE = './seo-audit-results.csv';
const OUTPUT_JSON = './seo-audit-results.json';

const results = [];
const issues = {
  duplicateTitles: new Map(),
  duplicateMetas: new Map(),
  missingTitles: [],
  missingMetas: [],
  shortTitles: [],
  longTitles: [],
  shortMetas: [],
  longMetas: [],
  duplicateH1s: new Map(),
  cannibalization: []
};

function extractMetadata(content, filePath) {
  const result = {
    path: filePath,
    url: filePathToUrl(filePath),
    title: '',
    metaDescription: '',
    h1: '',
    wordCount: 0,
    hasSchema: false,
    issues: []
  };

  // Extract title from metadata export or generateMetadata
  const titleMatch = content.match(/title:\s*[`"']([^`"']+)[`"']/);
  if (titleMatch) {
    result.title = titleMatch[1].trim();
  }

  // Extract meta description
  const descMatch = content.match(/description:\s*[`"']([^`"']+)[`"']/);
  if (descMatch) {
    result.metaDescription = descMatch[1].trim();
  }

  // Extract H1 (look for <h1> or className patterns)
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i) ||
                  content.match(/className="[^"]*text-4xl[^"]*"[^>]*>([^<]+)</);
  if (h1Match) {
    result.h1 = h1Match[1].trim();
  }

  // Count approximate words in JSX content
  const textContent = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  result.wordCount = textContent.split(' ').filter(w => w.length > 2).length;

  // Check for schema/structured data
  result.hasSchema = content.includes('application/ld+json') || 
                     content.includes('FAQPage') ||
                     content.includes('LocalBusiness');

  return result;
}

function filePathToUrl(filePath) {
  // Convert app/some-page/page.tsx to /some-page/
  let url = filePath
    .replace(APP_DIR, '')
    .replace('/page.tsx', '/')
    .replace('/page.jsx', '/')
    .replace('/page.js', '/');
  
  if (url === '/') url = '/';
  return `https://5starroofingpros.com${url}`;
}

function findPageFiles(dir) {
  const files = [];
  
  function scan(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip special Next.js directories
        if (!entry.name.startsWith('_') && !entry.name.startsWith('.')) {
          scan(fullPath);
        }
      } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx' || entry.name === 'page.js') {
        files.push(fullPath);
      }
    }
  }
  
  scan(dir);
  return files;
}

function analyzePage(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return extractMetadata(content, filePath);
}

function detectCannibalization(results) {
  // Group pages by similar keywords
  const keywordGroups = new Map();
  
  for (const page of results) {
    // Extract location and service from URL
    const urlParts = page.url.split('/').filter(Boolean);
    const slug = urlParts[urlParts.length - 1] || 'home';
    
    // Normalize the slug to detect similar pages
    const normalized = slug
      .replace(/-tx$/, '')
      .replace(/-texas$/, '')
      .replace(/-in-/, '-')
      .replace(/-(services|repair|roofing)$/, '');
    
    if (!keywordGroups.has(normalized)) {
      keywordGroups.set(normalized, []);
    }
    keywordGroups.get(normalized).push(page);
  }
  
  // Find groups with multiple pages (potential cannibalization)
  const cannibalized = [];
  for (const [keyword, pages] of keywordGroups) {
    if (pages.length > 1) {
      cannibalized.push({
        keyword,
        pages: pages.map(p => p.url),
        count: pages.length
      });
    }
  }
  
  return cannibalized.filter(c => c.count > 1).sort((a, b) => b.count - a.count);
}

function checkIssues(result) {
  const pageIssues = [];
  
  // Title checks
  if (!result.title) {
    pageIssues.push('MISSING_TITLE');
    issues.missingTitles.push(result.url);
  } else {
    if (result.title.length < 30) {
      pageIssues.push('SHORT_TITLE');
      issues.shortTitles.push({ url: result.url, title: result.title, length: result.title.length });
    }
    if (result.title.length > 60) {
      pageIssues.push('LONG_TITLE');
      issues.longTitles.push({ url: result.url, title: result.title, length: result.title.length });
    }
    
    // Track duplicates
    if (!issues.duplicateTitles.has(result.title)) {
      issues.duplicateTitles.set(result.title, []);
    }
    issues.duplicateTitles.get(result.title).push(result.url);
  }
  
  // Meta description checks
  if (!result.metaDescription) {
    pageIssues.push('MISSING_META');
    issues.missingMetas.push(result.url);
  } else {
    if (result.metaDescription.length < 120) {
      pageIssues.push('SHORT_META');
      issues.shortMetas.push({ url: result.url, meta: result.metaDescription, length: result.metaDescription.length });
    }
    if (result.metaDescription.length > 160) {
      pageIssues.push('LONG_META');
      issues.longMetas.push({ url: result.url, meta: result.metaDescription, length: result.metaDescription.length });
    }
    
    // Track duplicates
    if (!issues.duplicateMetas.has(result.metaDescription)) {
      issues.duplicateMetas.set(result.metaDescription, []);
    }
    issues.duplicateMetas.get(result.metaDescription).push(result.url);
  }
  
  // Schema check
  if (!result.hasSchema) {
    pageIssues.push('NO_SCHEMA');
  }
  
  result.issues = pageIssues;
  return result;
}

function generateReport() {
  console.log('\n📊 SEO AUDIT REPORT FOR 5 STAR ROOFING');
  console.log('='.repeat(50));
  
  console.log(`\n📄 Total Pages Analyzed: ${results.length}`);
  
  // Summary stats
  console.log('\n🔴 CRITICAL ISSUES:');
  console.log(`   Missing Titles: ${issues.missingTitles.length}`);
  console.log(`   Missing Meta Descriptions: ${issues.missingMetas.length}`);
  
  // Duplicate titles
  const dupTitles = [...issues.duplicateTitles.entries()].filter(([_, urls]) => urls.length > 1);
  console.log(`   Duplicate Titles: ${dupTitles.length} titles shared across ${dupTitles.reduce((acc, [_, urls]) => acc + urls.length, 0)} pages`);
  
  // Duplicate metas
  const dupMetas = [...issues.duplicateMetas.entries()].filter(([_, urls]) => urls.length > 1);
  console.log(`   Duplicate Meta Descriptions: ${dupMetas.length} descriptions shared across ${dupMetas.reduce((acc, [_, urls]) => acc + urls.length, 0)} pages`);
  
  console.log('\n🟡 WARNINGS:');
  console.log(`   Short Titles (<30 chars): ${issues.shortTitles.length}`);
  console.log(`   Long Titles (>60 chars): ${issues.longTitles.length}`);
  console.log(`   Short Metas (<120 chars): ${issues.shortMetas.length}`);
  console.log(`   Long Metas (>160 chars): ${issues.longMetas.length}`);
  
  // Cannibalization
  const cannibalized = detectCannibalization(results);
  console.log(`\n🔄 POTENTIAL CANNIBALIZATION: ${cannibalized.length} keyword groups`);
  
  if (cannibalized.length > 0) {
    console.log('\n   Top cannibalization risks:');
    cannibalized.slice(0, 10).forEach(c => {
      console.log(`   - "${c.keyword}": ${c.count} pages`);
      c.pages.forEach(p => console.log(`     • ${p}`));
    });
  }
  
  // Write detailed results
  const report = {
    summary: {
      totalPages: results.length,
      missingTitles: issues.missingTitles.length,
      missingMetas: issues.missingMetas.length,
      duplicateTitles: dupTitles.length,
      duplicateMetas: dupMetas.length,
      shortTitles: issues.shortTitles.length,
      longTitles: issues.longTitles.length,
      shortMetas: issues.shortMetas.length,
      longMetas: issues.longMetas.length,
      cannibalizationGroups: cannibalized.length
    },
    issues: {
      missingTitles: issues.missingTitles,
      missingMetas: issues.missingMetas,
      duplicateTitles: dupTitles.map(([title, urls]) => ({ title, urls })),
      duplicateMetas: dupMetas.map(([meta, urls]) => ({ meta: meta.substring(0, 50) + '...', urls })),
      shortTitles: issues.shortTitles,
      longTitles: issues.longTitles,
      cannibalization: cannibalized
    },
    allPages: results
  };
  
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(report, null, 2));
  console.log(`\n✅ Full report saved to: ${OUTPUT_JSON}`);
  
  // CSV output
  const csvHeader = 'URL,Title,Title Length,Meta Description,Meta Length,Has Schema,Issues\n';
  const csvRows = results.map(r => 
    `"${r.url}","${r.title.replace(/"/g, '""')}",${r.title.length},"${r.metaDescription.replace(/"/g, '""')}",${r.metaDescription.length},${r.hasSchema},"${r.issues.join('; ')}"`
  ).join('\n');
  
  fs.writeFileSync(OUTPUT_FILE, csvHeader + csvRows);
  console.log(`✅ CSV saved to: ${OUTPUT_FILE}`);
}

// Main execution
console.log('🔍 Starting SEO audit...\n');

const pageFiles = findPageFiles(APP_DIR);
console.log(`Found ${pageFiles.length} page files to analyze...`);

for (const file of pageFiles) {
  try {
    const result = analyzePage(file);
    checkIssues(result);
    results.push(result);
  } catch (error) {
    console.error(`Error analyzing ${file}: ${error.message}`);
  }
}

generateReport();
