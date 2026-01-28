# Google Indexing API Setup Guide

This guide will help you set up the Google Indexing API to submit your pages for rapid crawling.

## ⚠️ Important Notes

- The Google Indexing API is **officially** intended only for pages with `JobPosting` or `BroadcastEvent` structured data
- Using it for general page indexing is a common "grey hat" SEO practice
- Google may reject submissions for pages without the appropriate structured data
- Use at your own discretion

## Prerequisites

- A Google Cloud account (free tier is sufficient)
- Node.js installed on your machine
- Access to Google Search Console for your domain

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it something like "5-Star-Roofing-Indexing"
4. Click "Create"

### 2. Enable the Indexing API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Indexing API"
3. Click on "Web Search Indexing API" or "Indexing API"
4. Click "Enable"

### 3. Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Name it "indexing-api-bot"
4. Click "Create and Continue"
5. For role, select "Owner" (or you can be more restrictive)
6. Click "Continue" → "Done"

### 4. Create and Download Service Account Key

1. In "Credentials", find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" → "Create new key"
5. Choose "JSON" format
6. Click "Create"
7. **Important:** Save this file as `google-service-account-key.json` in the `new-site` directory

### 5. Add Service Account to Google Search Console

This is **critical** - your service account needs access to your Search Console property:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (5starroofingpros.com)
3. Click "Settings" (gear icon in left sidebar)
4. Click "Users and permissions"
5. Click "Add user"
6. Paste your service account email (looks like: `indexing-api-bot@project-id.iam.gserviceaccount.com`)
7. Choose "Owner" permission
8. Click "Add"

### 6. Install Required Packages

```bash
cd new-site
npm run install-indexing
```

Or manually:
```bash
npm install googleapis
```

### 7. Update Configuration

Edit `submit-to-indexing-api.js` and update the `SITE_URL`:

```javascript
const SITE_URL = 'https://5starroofingpros.com'; // Your actual domain
```

## Usage

### Test with Dry Run (Recommended First)

```bash
node submit-to-indexing-api.js --dry-run
```

This will show you what URLs would be submitted without actually submitting them.

### Submit All Pages

```bash
node submit-to-indexing-api.js
```

This will submit all 264 pages to the Indexing API.

### Submit with Custom Batch Size

```bash
node submit-to-indexing-api.js --batch-size=20
```

Default batch size is 10 URLs at a time with 100ms delay between requests.

## Rate Limits

- **200 requests per day** (free tier)
- If you exceed this, you'll need to upgrade or wait until the next day
- The script has built-in delays (100ms) between requests to avoid hitting rate limits

## Monitoring Results

After submission:

1. Check Google Search Console → "Coverage" or "Pages" report
2. It may take hours to days for Google to process the requests
3. You can also check the Indexing API quota usage in Google Cloud Console

## Troubleshooting

### Error: Service account key not found

Make sure `google-service-account-key.json` is in the `new-site` directory.

### Error: 403 Forbidden

The service account doesn't have access to Search Console. Go back to Step 5 and add the service account as a user.

### Error: 429 Too Many Requests

You've hit the rate limit. Wait until tomorrow or reduce batch size.

### URLs not getting indexed

- The API doesn't guarantee indexing
- Google may ignore requests for low-quality content
- Check Search Console for any manual actions or issues
- Consider adding JobPosting structured data to legitimate job pages

## Best Practices

1. **Don't spam the API** - Submit pages when you genuinely update them or create new ones
2. **Monitor your quota** - Track usage in Google Cloud Console
3. **Check Search Console** - Look for patterns in what gets indexed vs. rejected
4. **Quality matters** - Even with the API, low-quality pages may not get indexed
5. **Use sparingly** - Periodic submissions (weekly/monthly) rather than daily

## Automation (Optional)

You can schedule this script to run periodically:

### Windows Task Scheduler

1. Open Task Scheduler
2. Create Basic Task
3. Set trigger (e.g., weekly)
4. Action: "Start a program"
5. Program: `node`
6. Arguments: `D:\Projects\5-star-roofing\new-site\submit-to-indexing-api.js`
7. Start in: `D:\Projects\5-star-roofing\new-site`

### Linux Cron

```bash
# Run every Sunday at 2 AM
0 2 * * 0 cd /path/to/5-star-roofing/new-site && node submit-to-indexing-api.js
```

## Resources

- [Google Indexing API Documentation](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [API Quotas and Limits](https://developers.google.com/search/apis/indexing-api/v3/quota-pricing)
- [Google Search Console](https://search.google.com/search-console)
