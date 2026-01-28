const fs = require('fs');
const path = require('path');

// Service slug to display name mapping
const SERVICE_NAMES = {
  'roof-repair': 'Roof Repair',
  'hail-damage-repair': 'Hail Damage Repair',
  'residential-roofing': 'Residential Roofing',
  'commercial-roofing': 'Commercial Roofing',
  'roof-replacement': 'Roof Replacement',
  'wind-damage-repair': 'Wind Damage Repair',
  'storm-damage-repair': 'Storm Damage Repair',
  'roof-inspections': 'Roof Inspections',
  'asphalt-shingle-roofing': 'Asphalt Shingle Roofing',
  'emergency-roof-repair': 'Emergency Roof Repair',
  'tpo-roofing': 'TPO Roofing',
  'metal-roofing': 'Metal Roofing',
  'pvc-roofing': 'PVC Roofing',
  'industrial-roofing': 'Industrial Roofing',
  'roofing-methods': 'Roofing Methods'
};

// City slug to display name mapping
const CITY_NAMES = {
  'amarillo': 'Amarillo',
  'midland': 'Midland',
  'odessa': 'Odessa',
  'lubbock': 'Lubbock',
  'andrews': 'Andrews',
  'big-spring': 'Big Spring',
  'borger': 'Borger',
  'canyon': 'Canyon',
  'dumas': 'Dumas',
  'levelland': 'Levelland',
  'monahans': 'Monahans',
  'pampa': 'Pampa',
  'perryton': 'Perryton',
  'snyder': 'Snyder',
  'plainview': 'Plainview',
  'hereford': 'Hereford',
  'bushland': 'Bushland',
  'claude': 'Claude',
  'vega': 'Vega',
  'wildorado': 'Wildorado'
};

// Informational pages mapping
const INFORMATIONAL_PAGES = {
  'about': 'About Us',
  'contact': 'Contact',
  'gallery': 'Gallery',
  'reviews': 'Reviews',
  'services': 'Services',
  'service-areas': 'Service Areas',
  'articles': 'Articles'
};

// Amarillo landmark mapping
const AMARILLO_LANDMARKS = {
  'amarillo-zoo': 'Amarillo Zoo',
  'amarillo-cadillac-ranch': 'Cadillac Ranch',
  'amarillo-botanical-gardens': 'Botanical Gardens',
  'amarillo-whataburger': 'Whataburger',
  'amarillo-palo-duro-canyon': 'Palo Duro Canyon',
  'amarillo-wonderland-park': 'Wonderland Park',
  'amarillo-big-texan': 'Big Texan Steak Ranch',
  'amarillo-sixth-street': 'Sixth Street Historic District',
  'amarillo-globe-news-center': 'Globe-News Center',
  'amarillo-discovery-center': 'Don Harrington Discovery Center'
};

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.join(__dirname, 'app');

// Statistics
const stats = {
  totalPages: 0,
  pagesWithBreadcrumbs: 0,
  pagesProcessed: 0,
  edgeCases: [],
  errors: []
};

// Find all page.tsx files
function findAllPages(dir) {
  const pages = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      pages.push(...findAllPages(fullPath));
    } else if (file === 'page.tsx') {
      pages.push(fullPath);
    }
  }

  return pages;
}

// Check if page has breadcrumbs
function hasBreadcrumbs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.includes('import { Breadcrumb }') || content.includes('from "@/components/Breadcrumb"');
}

// Get directory name from file path
function getDirName(filePath) {
  return path.basename(path.dirname(filePath));
}

// Categorize page by pattern
function categorizePage(filePath) {
  const dirname = getDirName(filePath);

  // Root page
  if (dirname === 'app') {
    return { category: 'root', data: {} };
  }

  // Blog pages
  if (dirname === 'blog') {
    return { category: 'blog-main', data: {} };
  }

  // Blog article pages (dynamic route)
  if (filePath.includes('blog') && filePath.includes('[slug]')) {
    return { category: 'blog-article', data: {} };
  }

  // Informational pages
  if (INFORMATIONAL_PAGES[dirname]) {
    return { category: 'informational', data: { pageName: INFORMATIONAL_PAGES[dirname], slug: dirname } };
  }

  // Amarillo landmarks
  if (AMARILLO_LANDMARKS[dirname]) {
    return { category: 'amarillo-landmark', data: { landmarkName: AMARILLO_LANDMARKS[dirname], slug: dirname } };
  }

  // City overview pages: [city]-texas-roofing or [city]-tx-roofing
  const cityOverviewMatch = dirname.match(/^(.+?)-(texas|tx)-roofing$/);
  if (cityOverviewMatch) {
    const city = cityOverviewMatch[1];
    const cityName = CITY_NAMES[city] || city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { category: 'city-overview', data: { cityName, citySlug: city, slug: dirname } };
  }

  // Amarillo special patterns: [service]-amarillo-texas, [service]-amarillo-tx, [service]-in-amarillo
  const amarilloMatch = dirname.match(/^(.+?)-(amarillo|in-amarillo)(-texas|-tx)?$/);
  if (amarilloMatch) {
    const servicePart = amarilloMatch[1];
    let serviceName = SERVICE_NAMES[servicePart];

    // Handle complex service names not in mapping
    if (!serviceName) {
      serviceName = servicePart.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    return {
      category: 'amarillo-special',
      data: { serviceName, serviceSlug: servicePart, slug: dirname }
    };
  }

  // Location-Service pages: [service]-[city]
  const parts = dirname.split('-');

  // Try to identify service and city
  for (let i = 1; i < parts.length; i++) {
    const potentialService = parts.slice(0, i).join('-');
    const potentialCity = parts.slice(i).join('-');

    if (SERVICE_NAMES[potentialService] && CITY_NAMES[potentialCity]) {
      return {
        category: 'location-service',
        data: {
          serviceName: SERVICE_NAMES[potentialService],
          serviceSlug: potentialService,
          cityName: CITY_NAMES[potentialCity],
          citySlug: potentialCity,
          slug: dirname
        }
      };
    }
  }

  // Service category pages (no city)
  if (SERVICE_NAMES[dirname]) {
    return {
      category: 'service-category',
      data: { serviceName: SERVICE_NAMES[dirname], serviceSlug: dirname }
    };
  }

  // Edge case - couldn't categorize
  return { category: 'edge-case', data: { slug: dirname } };
}

// Generate breadcrumbs based on category
function generateBreadcrumbs(category, data) {
  switch (category) {
    case 'root':
      return null; // Home page doesn't need breadcrumbs

    case 'blog-main':
      return [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog/' }
      ];

    case 'blog-article':
      return null; // Will need manual handling for article titles

    case 'informational':
      return [
        { name: 'Home', url: '/' },
        { name: data.pageName, url: `/${data.slug}/` }
      ];

    case 'amarillo-landmark':
      return [
        { name: 'Home', url: '/' },
        { name: 'Amarillo', url: '/amarillo-texas-roofing/' },
        { name: data.landmarkName, url: `/${data.slug}/` }
      ];

    case 'city-overview':
      return [
        { name: 'Home', url: '/' },
        { name: 'Service Areas', url: '/service-areas/' },
        { name: data.cityName, url: `/${data.slug}/` }
      ];

    case 'amarillo-special':
      return [
        { name: 'Home', url: '/' },
        { name: data.serviceName, url: `/${data.serviceSlug}/` },
        { name: 'Amarillo', url: `/${data.slug}/` }
      ];

    case 'location-service':
      return [
        { name: 'Home', url: '/' },
        { name: data.serviceName, url: `/${data.serviceSlug}/` },
        { name: data.cityName, url: `/${data.slug}/` }
      ];

    case 'service-category':
      return [
        { name: 'Home', url: '/' },
        { name: data.serviceName, url: `/${data.serviceSlug}/` }
      ];

    case 'edge-case':
      return null;

    default:
      return null;
  }
}

// Insert breadcrumb into page file
function insertBreadcrumb(filePath, breadcrumbs) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('import { Breadcrumb }')) {
    // Find the last import statement
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
    if (importLines.length > 0) {
      const lastImport = importLines[importLines.length - 1];
      const lastImportIndex = content.indexOf(lastImport) + lastImport.length;
      content = content.slice(0, lastImportIndex) + '\nimport { Breadcrumb } from "@/components/Breadcrumb";' + content.slice(lastImportIndex);
    }
  }

  // Generate breadcrumb JSX
  const breadcrumbJSX = `      <Breadcrumb items={${JSON.stringify(breadcrumbs, null, 8).replace(/\n/g, '\n      ')}} />\n\n`;

  // Find the return statement - handle both fragments and elements
  // Pattern 1: return (<>
  let insertPosition = -1;
  const fragmentMatch = content.match(/return\s*\(\s*<>/);

  if (fragmentMatch) {
    insertPosition = fragmentMatch.index + fragmentMatch[0].length;
  } else {
    // Pattern 2: return (\n      <div ... > or <section ... > etc
    // Find return statement, then find the end of the opening tag
    const returnIndex = content.indexOf('return (');
    if (returnIndex !== -1) {
      // Find the first > after return (
      const searchStart = returnIndex + 'return ('.length;
      const firstCloseAngle = content.indexOf('>', searchStart);
      if (firstCloseAngle !== -1) {
        insertPosition = firstCloseAngle + 1;
      }
    }
  }

  if (insertPosition !== -1) {
    // Check if there's already content right after the opening tag
    const afterTag = content.slice(insertPosition, insertPosition + 10);
    const needsNewline = !afterTag.startsWith('\n');

    content = content.slice(0, insertPosition) +
              (needsNewline ? '\n' : '') +
              breadcrumbJSX +
              content.slice(insertPosition);
  } else {
    throw new Error('Could not find return statement with JSX element in file');
  }

  return content;
}

// Process a single page
function processPage(filePath) {
  try {
    const { category, data } = categorizePage(filePath);
    const breadcrumbs = generateBreadcrumbs(category, data);

    if (!breadcrumbs) {
      if (category === 'edge-case') {
        stats.edgeCases.push({ file: filePath, reason: 'Could not categorize', data });
        console.log(`⚠️  Edge case: ${getDirName(filePath)}`);
      } else if (category === 'blog-article') {
        stats.edgeCases.push({ file: filePath, reason: 'Blog article needs manual title', data });
        console.log(`⚠️  Edge case: Blog article at ${filePath}`);
      }
      return;
    }

    if (DRY_RUN) {
      console.log(`✓ Would add breadcrumbs to: ${getDirName(filePath)}`);
      console.log(`  Category: ${category}`);
      console.log(`  Breadcrumbs: ${breadcrumbs.map(b => b.name).join(' > ')}`);
      stats.pagesProcessed++;
    } else {
      const newContent = insertBreadcrumb(filePath, breadcrumbs);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ Added breadcrumbs to: ${getDirName(filePath)}`);
      stats.pagesProcessed++;
    }
  } catch (error) {
    stats.errors.push({ file: filePath, error: error.message });
    console.error(`❌ Error processing ${getDirName(filePath)}: ${error.message}`);
  }
}

// Main execution
console.log('🔍 Scanning for pages...\n');

const allPages = findAllPages(APP_DIR);
stats.totalPages = allPages.length;

console.log(`Found ${allPages.length} total pages\n`);

// Filter pages without breadcrumbs
const pagesWithoutBreadcrumbs = allPages.filter(page => !hasBreadcrumbs(page));
stats.pagesWithBreadcrumbs = allPages.length - pagesWithoutBreadcrumbs.length;

console.log(`Pages with breadcrumbs: ${stats.pagesWithBreadcrumbs}`);
console.log(`Pages without breadcrumbs: ${pagesWithoutBreadcrumbs.length}\n`);

if (DRY_RUN) {
  console.log('🔄 DRY RUN MODE - No files will be modified\n');
}

console.log('📝 Processing pages...\n');

// Process each page
pagesWithoutBreadcrumbs.forEach(processPage);

// Print summary
console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('='.repeat(60));
console.log(`Total pages: ${stats.totalPages}`);
console.log(`Pages with breadcrumbs before: ${stats.pagesWithBreadcrumbs}`);
console.log(`Pages processed: ${stats.pagesProcessed}`);
console.log(`Edge cases identified: ${stats.edgeCases.length}`);
console.log(`Errors: ${stats.errors.length}`);

if (stats.edgeCases.length > 0) {
  console.log('\n⚠️  Edge Cases:');
  stats.edgeCases.forEach(edge => {
    const dirname = getDirName(edge.file);
    console.log(`  - ${dirname} (${edge.reason})`);
  });
}

if (stats.errors.length > 0) {
  console.log('\n❌ Errors:');
  stats.errors.forEach(err => {
    console.log(`  - ${getDirName(err.file)}: ${err.error}`);
  });
}

console.log('\n' + '='.repeat(60));

if (DRY_RUN) {
  console.log('\n💡 Run without --dry-run flag to apply changes');
} else {
  console.log('\n✅ Done! Pages have been updated.');
  console.log('💡 Next steps:');
  console.log('   1. Review edge cases manually');
  console.log('   2. Run verify-breadcrumbs.js to validate');
  console.log('   3. Test build with: npm run build');
}
