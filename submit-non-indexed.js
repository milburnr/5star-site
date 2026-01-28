const fs = require('fs');

// Check if googleapis is installed
let google;
try {
  google = require('googleapis').google;
} catch (error) {
  console.error('❌ Error: googleapis package is not installed');
  console.error('\nPlease run: npm install googleapis');
  process.exit(1);
}

/**
 * Submit specific non-indexed URLs to Google Indexing API
 * Reads from non-indexed.txt and filters out deleted pages
 */

const SERVICE_ACCOUNT_KEY_PATH = './google-service-account-key.json';
const NON_INDEXED_FILE = './non-indexed.txt';
const DRY_RUN = process.argv.includes('--dry-run');
const DELAY_BETWEEN_REQUESTS = 100;

// Tourist pages that were deleted - filter these out
const DELETED_PAGES = [
  'amarillo-botanical-gardens',
  'amarillo-cadillac-ranch',
  'amarillo-martin-road-park',
  'amarillo-quarter-horse-museum',
  'amarillo-whataburger',
  'amarillo-zoo'
];

const stats = {
  total: 0,
  submitted: 0,
  failed: 0,
  filtered: 0,
  errors: []
};

async function getIndexingClient() {
  if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
    throw new Error(`Service account key not found at: ${SERVICE_ACCOUNT_KEY_PATH}`);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  return google.indexing({ version: 'v3', auth: authClient });
}

async function submitUrl(indexing, url) {
  try {
    if (DRY_RUN) {
      console.log(`✓ Would submit: ${url}`);
      stats.submitted++;
      return { success: true };
    }

    await indexing.urlNotifications.publish({
      requestBody: { url: url, type: 'URL_UPDATED' },
    });

    console.log(`✓ Submitted: ${url}`);
    stats.submitted++;
    return { success: true };
  } catch (error) {
    console.error(`❌ Failed: ${url} - ${error.message}`);
    stats.failed++;
    stats.errors.push({ url, error: error.message });
    return { success: false };
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('🚀 Submit Non-Indexed URLs to Google Indexing API\n');
  console.log('='.repeat(60));

  if (DRY_RUN) {
    console.log('🔄 DRY RUN MODE - No URLs will be submitted\n');
  }

  // Read non-indexed URLs
  if (!fs.existsSync(NON_INDEXED_FILE)) {
    console.error(`❌ File not found: ${NON_INDEXED_FILE}`);
    process.exit(1);
  }

  const allUrls = fs.readFileSync(NON_INDEXED_FILE, 'utf8')
    .split('\n')
    .map(url => url.trim())
    .filter(url => url.length > 0);

  stats.total = allUrls.length;
  console.log(`📄 Found ${allUrls.length} URLs in ${NON_INDEXED_FILE}\n`);

  // Filter out deleted tourist pages
  const urls = allUrls.filter(url => {
    for (const deleted of DELETED_PAGES) {
      if (url.includes(deleted)) {
        console.log(`🗑️  Filtered (deleted): ${url}`);
        stats.filtered++;
        return false;
      }
    }
    return true;
  });

  console.log(`\n📤 Submitting ${urls.length} URLs (filtered ${stats.filtered} deleted pages)\n`);

  // Initialize API client
  let indexing;
  if (!DRY_RUN) {
    console.log('🔐 Initializing Google Indexing API client...');
    indexing = await getIndexingClient();
    console.log('✅ Connected!\n');
  }

  // Submit URLs
  const startTime = Date.now();
  for (let i = 0; i < urls.length; i++) {
    await submitUrl(indexing, urls[i]);
    if (i < urls.length - 1) {
      await delay(DELAY_BETWEEN_REQUESTS);
    }
  }
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total in file: ${stats.total}`);
  console.log(`Filtered (deleted): ${stats.filtered}`);
  console.log(`Submitted: ${stats.submitted}`);
  console.log(`Failed: ${stats.failed}`);
  console.log(`Duration: ${duration}s`);

  if (stats.errors.length > 0) {
    console.log('\n❌ Errors:');
    stats.errors.forEach(({ url, error }) => {
      console.log(`  - ${url}: ${error}`);
    });
  }

  if (DRY_RUN) {
    console.log('\n💡 Run without --dry-run to actually submit URLs');
  } else {
    console.log('\n✅ Done! Check Google Search Console in 24-48 hours');
  }
}

main().catch(error => {
  console.error('\n💥 Fatal error:', error);
  process.exit(1);
});
