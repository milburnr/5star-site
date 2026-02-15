#!/usr/bin/env node
/**
 * Process and upload categorized images to R2
 * Uses cwebp for WebP conversion, sips for JPG
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const MANIFEST_FILE = path.join(__dirname, '..', 'image-manifest-full.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'processed-categories');
const R2_BUCKET = '5star-images';
const R2_BASE_URL = 'https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev';

const IMAGES_PER_CATEGORY = 50;

const CATEGORIES = [
  { name: 'hail-damage', source: 'hailDamage', subdir: 'hail-damage' },
  { name: 'completed', source: 'completed', subdir: 'completed' },
  { name: 'shingle', source: 'shingleWork', subdir: 'shingle' },
  { name: 'metal', source: 'metalWork', subdir: 'metal' },
  { name: 'commercial', source: 'commercialFlat', subdir: 'commercial' }
];

function getImageDimensions(imgPath) {
  try {
    const result = execSync(`sips -g pixelWidth -g pixelHeight "${imgPath}" 2>/dev/null`, { encoding: 'utf8' });
    const width = parseInt(result.match(/pixelWidth:\s*(\d+)/)?.[1] || '0');
    const height = parseInt(result.match(/pixelHeight:\s*(\d+)/)?.[1] || '0');
    return { width, height, isLandscape: width > height };
  } catch (e) {
    return { width: 0, height: 0, isLandscape: true };
  }
}

function selectBestImages(images, count) {
  const withSize = images.map(img => {
    try {
      const stats = fs.statSync(img.path);
      const dims = getImageDimensions(img.path);
      return { ...img, size: stats.size, ...dims };
    } catch (e) {
      return { ...img, size: 0, width: 0, height: 0, isLandscape: true };
    }
  });
  
  const sorted = withSize
    .filter(img => img.size > 0 && img.isLandscape && img.width >= 1000)
    .sort((a, b) => b.size - a.size);
  
  const byCity = {};
  const selected = [];
  
  for (const img of sorted) {
    if (selected.length >= count) break;
    const cityCount = byCity[img.city] || 0;
    if (cityCount < Math.ceil(count / 8)) {
      selected.push(img);
      byCity[img.city] = cityCount + 1;
    }
  }
  
  for (const img of sorted) {
    if (selected.length >= count) break;
    if (!selected.includes(img)) {
      selected.push(img);
    }
  }
  
  return selected.slice(0, count);
}

function processImage(srcPath, destDir, baseName) {
  const outputs = [];
  const sizes = [
    { width: 1280, suffix: '1280w' },
    { width: 640, suffix: '640w' }
  ];
  
  // First convert source to temp JPG if it's webp
  let tempSrc = srcPath;
  const isWebp = srcPath.toLowerCase().endsWith('.webp');
  
  if (isWebp) {
    tempSrc = path.join(destDir, `${baseName}-source.jpg`);
    execSync(`sips -s format jpeg -s formatOptions 95 "${srcPath}" --out "${tempSrc}" 2>/dev/null`);
  }
  
  for (const size of sizes) {
    // Create resized JPG
    const jpgPath = path.join(destDir, `${baseName}-${size.suffix}.jpg`);
    execSync(`sips -Z ${size.width} -s format jpeg -s formatOptions 85 "${tempSrc}" --out "${jpgPath}" 2>/dev/null`);
    outputs.push({ path: jpgPath, format: 'jpg', width: size.width });
    
    // Convert JPG to WebP using cwebp
    const webpPath = path.join(destDir, `${baseName}-${size.suffix}.webp`);
    execSync(`cwebp -q 80 "${jpgPath}" -o "${webpPath}" 2>/dev/null`);
    outputs.push({ path: webpPath, format: 'webp', width: size.width });
  }
  
  // Clean up temp source
  if (isWebp && fs.existsSync(tempSrc)) {
    fs.unlinkSync(tempSrc);
  }
  
  return outputs;
}

function uploadToR2(localPath, r2Path) {
  try {
    execSync(`wrangler r2 object put "${R2_BUCKET}/${r2Path}" --file="${localPath}" --remote 2>/dev/null`, { timeout: 30000 });
    return true;
  } catch (e) {
    return false;
  }
}

async function processCategory(category, manifest) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Processing: ${category.name}`);
  console.log(`${'='.repeat(60)}`);
  
  const images = manifest.combined[category.source] || [];
  console.log(`  Source pool: ${images.length} images`);
  
  const selected = selectBestImages(images, IMAGES_PER_CATEGORY);
  console.log(`  Selected: ${selected.length} best quality images`);
  
  const catDir = path.join(OUTPUT_DIR, category.subdir);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }
  
  const results = [];
  let processed = 0;
  let uploaded = 0;
  
  for (const img of selected) {
    processed++;
    const baseName = `${category.subdir}-${img.city}-${processed}`;
    
    process.stdout.write(`  [${processed}/${selected.length}] ${img.city}...`);
    
    try {
      const outputs = processImage(img.path, catDir, baseName);
      
      for (const output of outputs) {
        const r2Path = `images/${category.subdir}/${path.basename(output.path)}`;
        if (uploadToR2(output.path, r2Path)) {
          uploaded++;
          results.push({
            city: img.city,
            roofType: img.roofType,
            r2Path,
            url: `${R2_BASE_URL}/${r2Path}`,
            format: output.format,
            width: output.width
          });
        }
      }
      
      console.log(' ✓');
    } catch (e) {
      console.log(` ✗`);
    }
  }
  
  console.log(`  Completed: ${processed} processed, ${uploaded} files uploaded`);
  return results;
}

async function main() {
  console.log('Loading manifest...');
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const allResults = {};
  
  for (const category of CATEGORIES) {
    allResults[category.name] = await processCategory(category, manifest);
  }
  
  const resultsFile = path.join(__dirname, '..', 'r2-image-manifest.json');
  fs.writeFileSync(resultsFile, JSON.stringify(allResults, null, 2));
  
  console.log('\n' + '='.repeat(60));
  console.log('ALL DONE!');
  console.log('='.repeat(60));
  
  let totalUploaded = 0;
  for (const [cat, results] of Object.entries(allResults)) {
    console.log(`  ${cat}: ${results.length} files`);
    totalUploaded += results.length;
  }
  console.log(`\nTotal uploaded: ${totalUploaded} files`);
}

main().catch(console.error);
