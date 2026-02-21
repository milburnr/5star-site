const fs = require('fs');
const path = require('path');

function getAllRoutes(dir, baseDir = dir) {
  let routes = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      const fullPath = path.join(dir, item.name);
      const pagePath = path.join(fullPath, 'page.tsx');

      if (fs.existsSync(pagePath)) {
        const route = fullPath.replace(baseDir, '').split(path.sep).join('/');
        routes.push(route || '/');
      }

      routes = routes.concat(getAllRoutes(fullPath, baseDir));
    }
  }

  return routes;
}

// Service hub slugs (no city suffix)
const SERVICE_HUBS = new Set([
  '/roof-repair',
  '/roof-replacement',
  '/hail-damage-repair',
  '/storm-damage-repair',
  '/metal-roofing',
  '/wind-damage-repair',
  '/tpo-roofing',
  '/roof-inspections',
  '/asphalt-shingle-roofing',
]);

// Main navigation hubs
const NAV_HUBS = new Set([
  '/services',
  '/commercial-roofing',
  '/residential-roofing',
  '/service-areas',
]);

// City hub pattern: ends with -texas-roofing or -tx-roofing
const CITY_HUB_RE = /^\/[a-z]+-(?:texas|tx)-roofing$/;

// Service-city spoke pattern: known service prefix + city name
const SERVICE_PREFIXES = [
  'roof-repair-', 'roof-replacement-', 'hail-damage-repair-',
  'storm-damage-repair-', 'metal-roofing-', 'wind-damage-repair-',
  'tpo-roofing-', 'roof-inspections-', 'asphalt-shingle-roofing-',
  'commercial-roofing-', 'residential-roofing-',
];

function isSpokePage(route) {
  return SERVICE_PREFIXES.some(prefix => route.startsWith('/' + prefix));
}

function getPriority(route) {
  if (route === '/') return '1.0';
  if (NAV_HUBS.has(route)) return '0.9';
  if (SERVICE_HUBS.has(route)) return '0.8';
  if (CITY_HUB_RE.test(route)) return '0.8';
  if (isSpokePage(route)) return '0.7';
  return '0.5';
}

function getChangefreq(route) {
  if (route === '/') return 'weekly';
  return 'monthly';
}

const appDir = path.join(__dirname, 'app');
let routes = getAllRoutes(appDir);

// Include root page.tsx (homepage)
if (fs.existsSync(path.join(appDir, 'page.tsx')) && !routes.includes('/')) {
  routes.push('/');
}

routes.sort();

// Filter out _not-found and api routes
const filteredRoutes = routes.filter(route => {
  return !route.includes('_not-found') && !route.includes('api/');
});

const today = new Date().toISOString().split('T')[0];
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Track priority counts
const priorityCounts = { '1.0': 0, '0.9': 0, '0.8': 0, '0.7': 0, '0.5': 0 };

filteredRoutes.forEach(route => {
  const url = route === '/' ? route : route + '/';
  const priority = getPriority(route);
  const changefreq = getChangefreq(route);

  priorityCounts[priority]++;

  sitemap += '  <url>\n';
  sitemap += '    <loc>https://5starroofingpros.com' + url + '</loc>\n';
  sitemap += '    <lastmod>' + today + '</lastmod>\n';
  sitemap += '    <changefreq>' + changefreq + '</changefreq>\n';
  sitemap += '    <priority>' + priority + '</priority>\n';
  sitemap += '  </url>\n';
});

sitemap += '</urlset>\n';

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);

console.log('Sitemap generated with ' + filteredRoutes.length + ' routes');
console.log('  Priority 1.0: ' + priorityCounts['1.0'] + ' (homepage)');
console.log('  Priority 0.9: ' + priorityCounts['0.9'] + ' (main hubs)');
console.log('  Priority 0.8: ' + priorityCounts['0.8'] + ' (service + city hubs)');
console.log('  Priority 0.7: ' + priorityCounts['0.7'] + ' (spoke pages)');
console.log('  Priority 0.5: ' + priorityCounts['0.5'] + ' (other)');
