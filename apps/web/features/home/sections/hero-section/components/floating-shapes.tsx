'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Subtle floating particles - very minimal to not interfere with section transitions
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
            opacity: 0.15,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
