'use client';

import { useEffect, useRef } from 'react';

/**
 * Top-of-page scroll-progress bar. Pure CSS transform + rAF-throttled
 * scroll listener. No framer-motion.
 *
 * Writes scaleX directly to the DOM — avoids React re-renders on every
 * scroll tick. Uses passive listener + rAF to keep the main thread clear.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let raf = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      el.style.transform = `scaleX(${progress})`;
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-vibrant to-brand-gold z-50 origin-left pointer-events-none"
      style={{ transform: 'scaleX(0)' }}
      aria-hidden="true"
    />
  );
}
