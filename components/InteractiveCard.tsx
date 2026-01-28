'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface InteractiveCardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  tiltEffect?: boolean;
  glowEffect?: boolean;
}

export function InteractiveCard({
  children,
  href,
  className = '',
  tiltEffect = true,
  glowEffect = true,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={
        tiltEffect
          ? {
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.3 },
            }
          : { scale: 1.03 }
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <Card
        className={`overflow-hidden transition-all duration-300 shadow-dual-md hover:shadow-dual-xl bg-depth-3 border-2 ${
          isHovered && glowEffect
            ? 'border-primary/50 shadow-[0_0_30px_rgba(228,198,110,0.3)]'
            : 'border-border'
        }`}
      >
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
