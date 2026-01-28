# Phone Click Tracking with Google Analytics

Automatically tracks when visitors click phone number links (tel: links) and sends the data to Google Analytics.

## What's Implemented

### Files Created:
1. **`hooks/usePhoneClickTracking.ts`** - React hook that listens for phone link clicks
2. **`components/PhoneClickTracker.tsx`** - Client component that applies the hook
3. **Updated `app/layout.tsx`** - Added PhoneClickTracker to every page

## How It Works

1. When a user clicks any phone number link (like `<a href="tel:8066226041">`)
2. The click is captured by the tracker
3. An event is sent to Google Analytics with this data:
   - **Event name:** `phone_click`
   - **Phone number:** The actual number clicked
   - **Page title:** Where the click happened
   - **Page path:** The URL path
   - **Element text:** What text the user clicked on

## Viewing in Google Analytics

### Real-Time Testing:
1. Go to Google Analytics → Reports → Realtime
2. Click a phone number on your site
3. You should see a `phone_click` event appear within seconds

### Event Reports:
1. Go to Google Analytics → Reports → Events
2. Look for `phone_click` events
3. You can see:
   - How many phone clicks per day/week/month
   - Which pages generate the most calls
   - What phone numbers are clicked most

### Creating Custom Reports:
1. Go to Explore → Create new exploration
2. Add dimensions: `Page path`, `Event name`
3. Add metrics: `Event count`
4. Filter: Event name equals `phone_click`

## Testing Locally

### 1. Run the development server:
```bash
cd new-site
npm run dev
```

### 2. Open browser console (F12)

### 3. Click any phone number

### 4. Look for console message:
```
📞 Phone click tracked: { phone_number: "8066226041", page: "/about/" }
```

### 5. Check Network tab for GA requests to `google-analytics.com/collect`

## Phone Numbers Being Tracked

All phone links site-wide are automatically tracked:
- Header: (806) 622-6041
- Footer: (806) 622-6041
- All CTA sections with phone buttons
- Any other tel: links throughout the site

## Event Data Structure

```javascript
{
  event: 'phone_click',
  phone_number: '8066226041',
  page_title: 'About 5 Star Commercial Roofing',
  page_path: '/about/',
  element_text: '(806) 622-6041'
}
```

## Conversion Tracking

To track phone clicks as conversions:

1. Go to Google Analytics → Admin
2. Under "Data display" → Events
3. Find `phone_click` event
4. Click "Mark as conversion"
5. Now phone clicks count as goal completions

## Privacy Compliance

This tracking:
- ✅ Doesn't capture personal information
- ✅ Only tracks that a phone link was clicked
- ✅ Uses Google Analytics, which should be in your privacy policy

Make sure your privacy policy mentions:
- Google Analytics usage
- Call tracking/phone link clicks

## Troubleshooting

**No events showing in GA:**
- Check browser console for the "📞 Phone click tracked" message
- Verify GA ID is correct: `G-BHH34LVX73`
- Try in incognito mode (extensions might block GA)
- Wait 24-48 hours for events to appear in standard reports (Real-time is instant)

**TypeScript errors:**
- Run `npm run build` to check for compilation errors
- Make sure all imports are correct

**Events tracked but wrong data:**
- Check the phone link format is `tel:XXXXX`
- Verify gtag is loaded (check Network tab)

## ROI Insights

With this tracking, you can now answer:
- 📊 How many phone calls come from the website?
- 📍 Which pages drive the most calls?
- 📱 What's the click-to-call conversion rate?
- 💰 Which marketing channels drive phone calls?

Combine this with actual call tracking (like CallRail) to get the complete picture of phone lead generation.
