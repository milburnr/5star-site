#!/usr/bin/env node
/**
 * Apply custom hero images to pages
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const R2_BASE = 'https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes';

// Custom heroes
const HEROES = {
  home: `${R2_BASE}/hero-home-1920w.webp`,
  residential: [
    `${R2_BASE}/hero-residential-1920w.webp`,
    `${R2_BASE}/hero-residential-2-1920w.webp`,
    `${R2_BASE}/hero-residential-3-1920w.webp`
  ],
  commercial: [
    `${R2_BASE}/hero-commercial-1920w.webp`,
    `${R2_BASE}/hero-commercial-2-1920w.webp`,
    `${R2_BASE}/hero-commercial-3-1920w.webp`,
    `${R2_BASE}/hero-commercial-4-1920w.webp`,
    `${R2_BASE}/hero-commercial-5-1920w.webp`,
    `${R2_BASE}/hero-commercial-6-1920w.webp`,
    `${R2_BASE}/hero-commercial-7-1920w.webp`,
    `${R2_BASE}/hero-commercial-8-1920w.webp`,
    `${R2_BASE}/hero-commercial-9-1920w.webp`,
    `${R2_BASE}/hero-commercial-10-1920w.webp`,
    `${R2_BASE}/hero-commercial-11-1920w.webp`,
    `${R2_BASE}/hero-commercial-12-1920w.webp`
  ]
};

function getHeroForPage(pageName) {
  const name = pageName.toLowerCase();
  
  // Home page
  if (pageName === 'page.tsx' || name === '') {
    return HEROES.home;
  }
  
  // Commercial/TPO pages - rotate through commercial heroes
  if (name.includes('commercial') || name.includes('tpo') || name.includes('flat-roof')) {
    return HEROES.commercial[Math.floor(Math.random() * HEROES.commercial.length)];
  }
  
  // Residential/shingle pages - rotate through residential heroes  
  if (name.includes('residential') || name.includes('shingle') || name.includes('asphalt')) {
    return HEROES.residential[Math.floor(Math.random() * HEROES.residential.length)];
  }
  
  // Default to home hero for other pages
  return null; // Don't change others
}

function updatePage(pagePath, hero) {
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Match backgroundImage URLs
  const bgPattern = /backgroundImage:\s*['"]url\([^)]+\)['"]/g;
  
  if (bgPattern.test(content)) {
    content = content.replace(bgPattern, `backgroundImage: 'url(${hero})'`);
    fs.writeFileSync(pagePath, content);
    return true;
  }
  return false;
}

function main() {
  console.log('Applying custom heroes...\n');
  
  let updated = 0;
  
  // Update home page
  const homePage = path.join(APP_DIR, 'page.tsx');
  if (fs.existsSync(homePage)) {
    const content = fs.readFileSync(homePage, 'utf8');
    if (content.includes('backgroundImage')) {
      const newContent = content.replace(
        /backgroundImage:\s*['"]url\([^)]+\)['"]/g,
        `backgroundImage: 'url(${HEROES.home})'`
      );
      if (newContent !== content) {
        fs.writeFileSync(homePage, newContent);
        console.log('✓ Home page → custom hero');
        updated++;
      }
    }
  }
  
  // Update other pages
  const pages = fs.readdirSync(APP_DIR).filter(f => {
    const stat = fs.statSync(path.join(APP_DIR, f));
    return stat.isDirectory() && !f.startsWith('_') && !f.startsWith('.');
  });
  
  for (const page of pages) {
    const pagePath = path.join(APP_DIR, page, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    
    const hero = getHeroForPage(page);
    if (hero && updatePage(pagePath, hero)) {
      const type = page.includes('commercial') || page.includes('tpo') ? 'commercial' : 'residential';
      console.log(`✓ ${page} → ${type} hero`);
      updated++;
    }
  }
  
  console.log(`\nUpdated ${updated} pages with custom heroes`);
}

main();
