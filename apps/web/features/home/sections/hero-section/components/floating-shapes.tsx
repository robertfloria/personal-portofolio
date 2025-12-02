'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Subtle floating particles
const particles = [
  { size: 4, x: '15%', y: '25%', delay: 0, duration: 15 },
  { size: 3, x: '75%', y: '15%', delay: 1, duration: 18 },
  { size: 5, x: '85%', y: '45%', delay: 2, duration: 20 },
  { size: 3, x: '25%', y: '65%', delay: 0.5, duration: 16 },
  { size: 4, x: '65%', y: '75%', delay: 1.5, duration: 17 },
];

export const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle floating particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            background: 'hsl(var(--primary))',
            opacity: 0.5,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Top fade gradient - blends into background */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />

      {/* Bottom fade gradient - blends into background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};
