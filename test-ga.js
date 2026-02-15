// Test GA4 API access for 5 Star Roofing
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// Use service account credentials
const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: './google-service-account-key.json'
});

async function testGA4() {
  // First, list accessible properties to find the property ID
  console.log('Testing GA4 API access...\n');
  
  // You'll need to replace this with the actual GA4 property ID
  // Format: properties/XXXXXXXXX
  const propertyId = process.argv[2];
  
  if (!propertyId) {
    console.log('Usage: node test-ga.js <property-id>');
    console.log('Example: node test-ga.js 123456789');
    console.log('\nTo find your property ID:');
    console.log('GA4 Admin → Property Settings → Property ID');
    return;
  }

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'city' }],
      metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }],
      limit: 20
    });

    console.log('GA4 API Connected Successfully!\n');
    console.log('Top cities (last 7 days):');
    console.log('─'.repeat(50));
    
    response.rows?.forEach(row => {
      const city = row.dimensionValues[0].value;
      const sessions = row.metricValues[0].value;
      const pageviews = row.metricValues[1].value;
      console.log(`${city}: ${sessions} sessions, ${pageviews} pageviews`);
    });
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.message.includes('permission')) {
      console.log('\nMake sure the service account has Viewer access to this GA4 property.');
    }
  }
}

testGA4();
