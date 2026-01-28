'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [displayValue, setDisplayValue] = useState(to);
  const count = useMotionValue(to); // Start at 'to' value for SSR
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && isMounted) {
      count.set(from); // Reset to 'from' value before animating
      const controls = animate(count, to, {
        duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, isMounted, count, to, from, duration]);

  // Subscribe to rounded value changes
  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  // Always render the same HTML structure
  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  );
}
