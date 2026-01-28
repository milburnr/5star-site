'use client';

import { usePhoneClickTracking } from '@/hooks/usePhoneClickTracking';

/**
 * Component that tracks phone link clicks and sends them to Google Analytics
 * This component doesn't render anything visible - it just sets up the tracking
 */
export function PhoneClickTracker() {
  usePhoneClickTracking();
  return null;
}
