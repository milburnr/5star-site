# Google Indexing API - Quick Start

Submit all 264 pages to Google Indexing API for rapid crawling.

## ⚠️ Grey Hat Warning
The Indexing API is officially only for JobPosting/BroadcastEvent pages. Using it for general pages is a common but technically against-guidelines practice.

## Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm run install-indexing
```

### 2. Set Up Google Cloud (one-time)
Follow detailed instructions in [INDEXING-API-SETUP.md](./INDEXING-API-SETUP.md)

Quick version:
1. Create Google Cloud project
2. Enable "Indexing API"
3. Create service account
4. Download key as `google-service-account-key.json` (save in this directory)
5. **CRITICAL:** Add service account email to Google Search Console as Owner

### 3. Test (Recommended)
```bash
npm run index:dry-run
```

This shows what will be submitted without actually submitting.

### 4. Submit All Pages
```bash
npm run index:submit
```

Submits all 264 pages with:
- 10 URLs per batch
- 100ms delay between requests
- Rate limit: 200 requests/day (free tier)

## Usage

```bash
# Dry run - preview what will be submitted
npm run index:dry-run

# Submit all pages
npm run index:submit

# Custom batch size
node submit-to-indexing-api.js --batch-size=20
```

## How Often to Run?

**Recommended:** Weekly or monthly, or when you've made significant updates.

**Not recommended:** Daily (wastes quota and looks spammy to Google).

## Monitoring

Check results in:
- Google Search Console → Pages/Coverage report
- Usually takes hours to days for Google to process

## Files

- `submit-to-indexing-api.js` - The submission script
- `google-service-account-key.json` - Your API credentials (DO NOT COMMIT - already in .gitignore)
- `INDEXING-API-SETUP.md` - Detailed setup instructions
- `.gitignore` - Updated to exclude sensitive API keys

## Rate Limits

- **200 URLs per day** (free tier)
- Script has built-in delays to avoid rate limiting
- For 264 pages: Takes ~30 seconds to submit, stays well under limits

## Troubleshooting

**"googleapis package is not installed"**
```bash
npm run install-indexing
```

**"Service account key not found"**
- Make sure `google-service-account-key.json` is in the `new-site` directory

**"403 Forbidden"**
- Add service account to Search Console (Step 5 in setup)

**"429 Too Many Requests"**
- You hit the 200/day limit. Wait until tomorrow.

---

For complete setup instructions, see [INDEXING-API-SETUP.md](./INDEXING-API-SETUP.md)
