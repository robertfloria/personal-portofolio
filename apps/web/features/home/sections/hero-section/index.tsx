'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/common';
import { useReducedMotion } from '@/hooks';
import { infoItems } from './lib/data';
import { HeroText, InfoCard, ProfileImage } from './components';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="home" className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ProfileImage shouldReduceMotion={shouldReduceMotion} />
          <HeroText shouldReduceMotion={shouldReduceMotion} />
        </div>
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 50 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {infoItems.map((item, index) => (
            <InfoCard
              key={item.label}
              label={item.label}
              value={item.value}
              iconKey={item.iconKey}
              animated={!shouldReduceMotion}
              animationDelay={index * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
