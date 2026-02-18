'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/common';
import { infoItems } from './lib/data';
import { HeroText, InfoCard, ProfileImage, FloatingShapes } from './components';

export function HeroSection() {
  return (
    <Section
      id="home"
      className="min-h-screen flex items-center justify-center p-section md:p-section-md lg:p-section-lg overflow-hidden relative"
    >
      {/* Subtle animated background particles */}
      <FloatingShapes />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col gap-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid items-center">
          <ProfileImage />
          <HeroText />
        </div>

        {/* Info Cards with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-grid"
        >
          {infoItems.map((item, index) => (
            <InfoCard
              key={item.label}
              label={item.label}
              value={item.value}
              iconKey={item.iconKey}
              animationDelay={index * 0.08}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
