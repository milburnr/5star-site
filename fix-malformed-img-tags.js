const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

// Get all TSX files recursively
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.isFile() && item.name === 'page.tsx') {
      files.push(fullPath);
    }
  }

  return files;
}

// Fix malformed image tags
function fixMalformedImgTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix pattern 1: <img ... / src="..." ...>
  const malformedRegex1 = /<img\s+([^>]*?)\s+\/\s+src="([^"]+)"([^>]*)>/g;
  content = content.replace(malformedRegex1, (match, before, src, after) => {
    modified = true;
    const attrs = (before + ' ' + after).trim();
    return `<img src="${src}" ${attrs} />`;
  });

  // Fix pattern 2: <img ... / />
  const malformedRegex2 = /<img\s+([^>]*?)\s+\/\s+\/>/g;
  content = content.replace(malformedRegex2, (match, attrs) => {
    modified = true;
    return `<img ${attrs.trim()} />`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

// Main execution
console.log('🔧 Fixing malformed image tags...\n');

const files = getAllTsxFiles(appDir);
let fixed = 0;

for (const file of files) {
  try {
    if (fixMalformedImgTags(file)) {
      console.log(`✅ Fixed: ${path.relative(appDir, file)}`);
      fixed++;
    }
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err.message);
  }
}

console.log('\n📊 Summary:');
console.log(`✅ Files fixed: ${fixed}`);
console.log('\n✨ Malformed tags fixed!');
