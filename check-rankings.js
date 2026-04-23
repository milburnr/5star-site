const fs = require('fs');
const path = require('path');

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
 * Google Search Console Rank Checker
 * Pulls ranking data for specified keywords across multiple sites
 *
 * Usage:
 *   node check-rankings.js                    # Check all sites
 *   node check-rankings.js --site=5star       # Check specific site
 *   node check-rankings.js --days=7           # Lookback period (default: 7)
 *   node check-rankings.js --output=json      # Output format: json or markdown
 */

// Configuration
const SERVICE_ACCOUNT_KEY_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_KEY || './google-service-account-key.json';
const DAYS_LOOKBACK = parseInt(process.argv.find(arg => arg.startsWith('--days='))?.split('=')[1]) || 7;
const OUTPUT_FORMAT = process.argv.find(arg => arg.startsWith('--output='))?.split('=')[1] || 'markdown';
const TARGET_SITE = process.argv.find(arg => arg.startsWith('--site='))?.split('=')[1];

// Site configurations
const SITES = {
  '5star': {
    name: '5 Star Commercial Roofing',
    url: 'https://5starroofingpros.com',
    siteUrl: 'sc-domain:5starroofingpros.com',
    keywords: [
      'commercial roofing amarillo',
      'roof repair amarillo',
      'roofing contractor amarillo',
      'commercial roofing lubbock',
      'hail damage roof repair',
      'TPO roofing amarillo',
      'metal roofing amarillo',
      'flat roof repair texas'
    ],
    telegramThread: '8'
  },
  'fcs': {
    name: 'Florida Construction Specialists',
    url: 'https://floridaconstructionspecialists.com',
    siteUrl: 'sc-domain:floridaconstructionspecialists.com',
    keywords: [
      'construction company tampa',
      'commercial construction florida',
      'general contractor tampa',
      'building renovation tampa',
      'tenant build out tampa',
      'commercial remodeling florida'
    ],
    telegramThread: '6'
  },
  'lnc': {
    name: 'L&N Construction',
    url: 'https://lnconstructionllc.com',
    siteUrl: 'sc-domain:lnconstructionllc.com',
    keywords: [
      'construction company colorado springs',
      'general contractor colorado springs',
      'home renovation colorado springs',
      'kitchen remodel colorado springs',
      'bathroom remodel colorado springs',
      'home addition colorado springs'
    ],
    telegramThread: '7'
  }
};

/**
 * Authenticate with Google using service account
 */
async function authenticate() {
  const keyPath = path.resolve(SERVICE_ACCOUNT_KEY_PATH);
  
  if (!fs.existsSync(keyPath)) {
    throw new Error(`Service account key not found at ${keyPath}`);
  }

  const credentials = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
  });

  return auth;
}

/**
 * Get search analytics data for a specific keyword
 */
async function getKeywordData(webmasters, siteUrl, keyword, startDate, endDate) {
  try {
    const response = await webmasters.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['query'],
        dimensionFilterGroups: [{
          filters: [{
            dimension: 'query',
            operator: 'contains',
            expression: keyword
          }]
        }],
        rowLimit: 1
      }
    });

    if (response.data.rows && response.data.rows.length > 0) {
      const row = response.data.rows[0];
      return {
        keyword: keyword,
        impressions: row.impressions || 0,
        clicks: row.clicks || 0,
        ctr: row.ctr || 0,
        position: row.position || 0
      };
    }

    return {
      keyword: keyword,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      position: 0,
      notFound: true
    };
  } catch (error) {
    return {
      keyword: keyword,
      error: error.message,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      position: 0
    };
  }
}

/**
 * Get overall site performance data
 */
async function getSiteOverview(webmasters, siteUrl, startDate, endDate) {
  try {
    const response = await webmasters.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: [],
        rowLimit: 1
      }
    });

    if (response.data.rows && response.data.rows.length > 0) {
      const row = response.data.rows[0];
      return {
        totalImpressions: row.impressions || 0,
        totalClicks: row.clicks || 0,
        avgCtr: row.ctr || 0,
        avgPosition: row.position || 0
      };
    }

    return null;
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Get top queries for a site
 */
async function getTopQueries(webmasters, siteUrl, startDate, endDate, limit = 10) {
  try {
    const response = await webmasters.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['query'],
        rowLimit: limit,
        startRow: 0
      }
    });

    return response.data.rows?.map(row => ({
      query: row.keys[0],
      impressions: row.impressions || 0,
      clicks: row.clicks || 0,
      ctr: row.ctr || 0,
      position: row.position || 0
    })) || [];
  } catch (error) {
    return [];
  }
}

/**
 * Format date for API
 */
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(results) {
  const now = new Date().toISOString().split('T')[0];
  let report = `# Weekly Rank Check Report\n\n**Date:** ${now}\n**Period:** Last ${DAYS_LOOKBACK} days\n\n`;

  for (const [siteKey, siteData] of Object.entries(results)) {
    report += `## ${siteData.name}\n\n`;
    report += `**URL:** ${siteData.url}\n\n`;

    if (siteData.overview) {
      report += `### Overall Performance\n`;
      report += `- **Total Impressions:** ${siteData.overview.totalImpressions?.toLocaleString() || 'N/A'}\n`;
      report += `- **Total Clicks:** ${siteData.overview.totalClicks?.toLocaleString() || 'N/A'}\n`;
      report += `- **Average CTR:** ${siteData.overview.avgCtr ? (siteData.overview.avgCtr * 100).toFixed(2) + '%' : 'N/A'}\n`;
      report += `- **Average Position:** ${siteData.overview.avgPosition?.toFixed(1) || 'N/A'}\n\n`;
    }

    report += `### Tracked Keywords\n\n`;
    report += `| Keyword | Position | Impressions | Clicks | CTR |\n`;
    report += `|---------|----------|-------------|--------|-----|\n`;

    for (const kw of siteData.keywords) {
      const pos = kw.position > 0 ? kw.position.toFixed(1) : 'Not ranked';
      const imp = kw.impressions?.toLocaleString() || '0';
      const clk = kw.clicks?.toLocaleString() || '0';
      const ctr = kw.ctr ? (kw.ctr * 100).toFixed(2) + '%' : '0%';
      report += `| ${kw.keyword} | ${pos} | ${imp} | ${clk} | ${ctr} |\n`;
    }

    report += `\n`;

    if (siteData.topQueries && siteData.topQueries.length > 0) {
      report += `### Top Performing Queries\n\n`;
      report += `| Query | Position | Impressions | Clicks |\n`;
      report += `|-------|----------|-------------|--------|\n`;
      
      for (const q of siteData.topQueries.slice(0, 5)) {
        const pos = q.position > 0 ? q.position.toFixed(1) : 'N/A';
        report += `| ${q.query} | ${pos} | ${q.impressions?.toLocaleString()} | ${q.clicks?.toLocaleString()} |\n`;
      }
      report += `\n`;
    }

    // Flag significant changes
    const opportunities = siteData.keywords.filter(k => k.impressions > 100 && k.ctr < 0.02);
    if (opportunities.length > 0) {
      report += `### 🎯 CTR Opportunities\n`;
      report += `Keywords with high impressions but low CTR:\n`;
      for (const opp of opportunities) {
        report += `- **${opp.keyword}** - ${opp.impressions} impressions, ${(opp.ctr * 100).toFixed(2)}% CTR\n`;
      }
      report += `\n`;
    }

    report += `---\n\n`;
  }

  return report;
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Weekly Rank Check');
  console.log(`📅 Period: Last ${DAYS_LOOKBACK} days\n`);

  try {
    const auth = await authenticate();
    const webmasters = google.webmasters({ version: 'v3', auth });

    const endDate = formatDate(new Date());
    const startDate = formatDate(new Date(Date.now() - DAYS_LOOKBACK * 24 * 60 * 60 * 1000));

    const results = {};
    const sitesToCheck = TARGET_SITE ? { [TARGET_SITE]: SITES[TARGET_SITE] } : SITES;

    for (const [siteKey, siteConfig] of Object.entries(sitesToCheck)) {
      if (!siteConfig) {
        console.error(`❌ Unknown site: ${siteKey}`);
        continue;
      }

      console.log(`\n📊 Checking ${siteConfig.name}...`);
      
      const siteData = {
        name: siteConfig.name,
        url: siteConfig.url,
        siteUrl: siteConfig.siteUrl,
        telegramThread: siteConfig.telegramThread,
        keywords: [],
        overview: null,
        topQueries: []
      };

      // Get overview
      siteData.overview = await getSiteOverview(webmasters, siteConfig.siteUrl, startDate, endDate);
      
      // Get tracked keywords data
      for (const keyword of siteConfig.keywords) {
        process.stdout.write(`  Checking "${keyword}"... `);
        const kwData = await getKeywordData(webmasters, siteConfig.siteUrl, keyword, startDate, endDate);
        siteData.keywords.push(kwData);
        
        if (kwData.error) {
          console.log(`❌ ${kwData.error}`);
        } else if (kwData.notFound) {
          console.log('Not ranked');
        } else {
          console.log(`Position ${kwData.position.toFixed(1)}`);
        }
      }

      // Get top queries
      siteData.topQueries = await getTopQueries(webmasters, siteConfig.siteUrl, startDate, endDate, 10);

      results[siteKey] = siteData;
    }

    // Generate output
    if (OUTPUT_FORMAT === 'json') {
      console.log('\n📄 JSON Output:');
      console.log(JSON.stringify(results, null, 2));
    } else {
      const report = generateMarkdownReport(results);
      
      // Save to file
      const reportDir = path.join(__dirname, 'reports');
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      const reportPath = path.join(reportDir, `rank-check-${formatDate(new Date())}.md`);
      fs.writeFileSync(reportPath, report);
      console.log(`\n✅ Report saved to: ${reportPath}`);
      
      // Also output to console
      console.log('\n' + report);
    }

    return results;

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, SITES };
