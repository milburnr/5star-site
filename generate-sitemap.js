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

const appDir = path.join(__dirname, 'app');
const routes = getAllRoutes(appDir);

const today = new Date().toISOString().split('T')[0];
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

routes.sort();

routes.forEach(route => {
  if (route.includes('_not-found') || route.includes('api/')) return;
  
  const url = route === '/' ? route : route + '/';
  const priority = route === '/' ? '1.0' : '0.6';
  
  sitemap += '  <url>\n';
  sitemap += '    <loc>https://5starroofingpros.com' + url + '</loc>\n';
  sitemap += '    <lastmod>' + today + '</lastmod>\n';
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>' + priority + '</priority>\n';
  sitemap += '  </url>\n';
});

sitemap += '</urlset>\n';

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated with ' + routes.length + ' routes');
