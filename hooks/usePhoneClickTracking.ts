import { useEffect } from 'react';

export const usePhoneClickTracking = () => {
  useEffect(() => {
    const handlePhoneClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement;

      // Check if the clicked element is a phone link
      if (target.href?.startsWith('tel:')) {
        const phoneNumber = target.href.replace('tel:', '');

        // Send event to Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'phone_click', {
            phone_number: phoneNumber,
            page_title: document.title,
            page_path: window.location.pathname,
            element_text: target.textContent || '',
          });

          console.log('📞 Phone click tracked:', {
            phone_number: phoneNumber,
            page: window.location.pathname,
          });
        }
      }
    };

    // Add click listener to document (capture all phone link clicks)
    document.addEventListener('click', handlePhoneClick, true);

    // Cleanup function
    return () => {
      document.removeEventListener('click', handlePhoneClick, true);
    };
  }, []);
};
