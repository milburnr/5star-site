'use client';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FloatingCTA() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Prevent hydration mismatch by only running on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show button after scrolling 30% down the page
  useEffect(() => {
    if (!isMounted) return;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0.3);
    });
    return () => unsubscribe();
  }, [scrollYProgress, isMounted]);

  // Don't render anything on server to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <motion.a
      href="tel:8066226041"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className="fixed bottom-6 right-6 z-50 bg-brand-gold text-white px-6 py-4 rounded-full shadow-2xl hover:bg-brand-gold-vibrant hover:scale-110 transition-all duration-200 font-bold text-lg flex items-center gap-3 group"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <motion.span
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-2xl"
      >
        📞
      </motion.span>
      <span className="hidden md:inline">Call Now</span>
      <span className="md:hidden">(806) 622-6041</span>
    </motion.a>
  );
}
