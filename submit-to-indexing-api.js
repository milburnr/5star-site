const fs = require('fs');
const path = require('path');

// Check if googleapis is installed
let google;
try {
  google = require('googleapis').google;
} catch (error) {
  console.error('❌ Error: googleapis package is not installed');
  console.error('\nPlease run: npm install googleapis');
  console.error('\nOr use the npm script: npm run install-indexing');
  process.exit(1);
}

/**
 * Google Indexing API Script
 * Submits URLs to Google Indexing API for rapid crawling
 *
 * Note: Indexing API is officially for JobPosting and BroadcastEvent structured data,
 * but is commonly used for general page indexing in the pSEO community.
 *
 * Usage:
 *   node submit-to-indexing-api.js                    # Submit all pages
 *   node submit-to-indexing-api.js --dry-run          # Preview without submitting
 *   node submit-to-indexing-api.js --batch-size=10    # Submit in batches of 10
 */

// Configuration
const SITE_URL = 'https://5starroofingpros.com'; // Update with your actual domain
const SERVICE_ACCOUNT_KEY_PATH = './google-service-account-key.json';
const APP_DIR = path.join(__dirname, 'app');
const BATCH_SIZE = parseInt(process.argv.find(arg => arg.startsWith('--batch-size='))?.split('=')[1]) || 10;
const DRY_RUN = process.argv.includes('--dry-run');
const DELAY_BETWEEN_REQUESTS = 100; // milliseconds between API calls

// Statistics
const stats = {
  totalPages: 0,
  submitted: 0,
  failed: 0,
  skipped: 0,
  errors: []
};

/**
 * Find all page.tsx files in the app directory
 */
function findAllPages(dir) {
  const pages = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules, .next, etc
      if (!file.startsWith('.') && !file.startsWith('_') && file !== 'node_modules') {
        pages.push(...findAllPages(fullPath));
      }
    } else if (file === 'page.tsx' || file === 'page.js') {
      pages.push(fullPath);
    }
  }

  return pages;
}

/**
 * Convert file path to URL
 */
function filePathToUrl(filePath) {
  // Remove app directory prefix
  let relativePath = filePath.replace(APP_DIR, '');

  // Remove /page.tsx or /page.js
  relativePath = relativePath.replace(/[\/\\]page\.(tsx|js)$/, '');

  // Convert Windows backslashes to forward slashes
  relativePath = relativePath.replace(/\\/g, '/');

  // Root page becomes just the domain
  if (!relativePath || relativePath === '/') {
    return SITE_URL + '/';
  }

  // Add trailing slash for consistency
  return SITE_URL + relativePath + '/';
}

/**
 * Initialize Google Indexing API client
 */
async function getIndexingClient() {
  try {
    // Check if service account key exists
    if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
      throw new Error(`Service account key not found at: ${SERVICE_ACCOUNT_KEY_PATH}`);
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_KEY_PATH,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({
      version: 'v3',
      auth: authClient,
    });

    return indexing;
  } catch (error) {
    console.error('❌ Failed to initialize Google Indexing API client');
    console.error('Error:', error.message);
    console.error('\nPlease ensure:');
    console.error('1. You have created a Google Cloud project');
    console.error('2. You have enabled the Indexing API');
    console.error('3. You have created a service account with Indexing API permissions');
    console.error('4. You have downloaded the service account key JSON file');
    console.error(`5. The key file is placed at: ${SERVICE_ACCOUNT_KEY_PATH}`);
    process.exit(1);
  }
}

/**
 * Submit a URL to the Indexing API
 */
async function submitUrl(indexing, url) {
  try {
    if (DRY_RUN) {
      console.log(`✓ Would submit: ${url}`);
      stats.submitted++;
      return { success: true, dryRun: true };
    }

    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    });

    console.log(`✓ Submitted: ${url}`);
    stats.submitted++;
    return { success: true, response: response.data };
  } catch (error) {
    console.error(`❌ Failed: ${url}`);
    console.error(`   Error: ${error.message}`);
    stats.failed++;
    stats.errors.push({ url, error: error.message });
    return { success: false, error: error.message };
  }
}

/**
 * Delay execution
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Process URLs in batches with delay
 */
async function submitUrlsInBatches(indexing, urls) {
  console.log(`\n📤 Processing ${urls.length} URLs in batches of ${BATCH_SIZE}...`);
  console.log(`⏱️  Delay between requests: ${DELAY_BETWEEN_REQUESTS}ms\n`);

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
    const positionInBatch = (i % BATCH_SIZE) + 1;

    console.log(`[Batch ${batchNumber}, URL ${positionInBatch}/${BATCH_SIZE}] Processing...`);

    await submitUrl(indexing, url);

    // Delay between requests to avoid rate limiting
    if (i < urls.length - 1) {
      await delay(DELAY_BETWEEN_REQUESTS);
    }

    // Log progress every batch
    if ((i + 1) % BATCH_SIZE === 0 && i < urls.length - 1) {
      console.log(`\n✅ Completed batch ${batchNumber} (${i + 1}/${urls.length} URLs)`);
      console.log(`   Success: ${stats.submitted}, Failed: ${stats.failed}\n`);
    }
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Google Indexing API Submission Script\n');
  console.log('='.repeat(60));

  if (DRY_RUN) {
    console.log('🔄 DRY RUN MODE - No URLs will be submitted\n');
  }

  // Find all pages
  console.log('🔍 Scanning for pages...\n');
  const pageFiles = findAllPages(APP_DIR);
  stats.totalPages = pageFiles.length;

  console.log(`Found ${pageFiles.length} page files\n`);

  // Convert to URLs
  const urls = pageFiles.map(filePathToUrl);

  // Initialize API client
  let indexing;
  if (!DRY_RUN) {
    console.log('🔐 Initializing Google Indexing API client...\n');
    indexing = await getIndexingClient();
    console.log('✅ Connected to Google Indexing API\n');
  }

  // Submit URLs
  const startTime = Date.now();
  await submitUrlsInBatches(indexing, urls);
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total pages found: ${stats.totalPages}`);
  console.log(`Successfully submitted: ${stats.submitted}`);
  console.log(`Failed: ${stats.failed}`);
  console.log(`Duration: ${duration}s`);

  if (stats.errors.length > 0) {
    console.log('\n❌ Errors:');
    stats.errors.forEach(({ url, error }) => {
      console.log(`  - ${url}`);
      console.log(`    ${error}`);
    });
  }

  console.log('\n' + '='.repeat(60));

  if (DRY_RUN) {
    console.log('\n💡 Run without --dry-run to actually submit URLs');
  } else {
    console.log('\n✅ Done! URLs have been submitted to Google Indexing API');
    console.log('⏳ Note: It may take some time for Google to process the requests');
  }
}

// Run the script
main().catch(error => {
  console.error('\n💥 Fatal error:', error);
  process.exit(1);
});
