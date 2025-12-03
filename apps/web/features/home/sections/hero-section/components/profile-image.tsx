import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import { SocialButton } from '@/components/common/social-button';
import { Text } from '@/components/common';
import { personalInfo, socialLinks } from '@/lib/data';
import { iconMap } from '../lib/data';

export const ProfileImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: ANIMATION_DURATIONS.SLOW, type: 'spring' }}
      className="relative order-1 lg:order-1 group"
    >
      {/* Container cu padding pentru glow */}
      <div className="relative mx-auto w-[calc(80vw+2rem)] h-[calc(80vw+2rem)] sm:w-108 sm:h-108 lg:w-120 lg:h-120 p-4">
        {/* Inner container pentru imagine și efecte */}
        <div className="relative w-full h-full">
          {/* Animated ring gradient - outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-60 blur-xl"
            style={{
              background:
                'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Secondary pulsing ring */}
          <motion.div
            className="absolute inset-2 rounded-full bg-linear-to-r from-primary via-accent to-primary opacity-40 blur-lg"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Inner subtle glow */}
          <div className="absolute inset-4 rounded-full bg-linear-to-r from-secondary via-primary to-primary animate-pulse opacity-10" />

          {/* Profile image container with hover effect */}
          <motion.div
            className="absolute inset-6 rounded-full overflow-hidden shadow-2xl ring-2 ring-[hsl(var(--border)/0.2)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              sizes="(max-width: 768px) 24rem, (max-width: 1024px) 24rem, 28rem"
              className="object-cover z-10 transition-transform duration-500 group-hover:scale-105 opacity-90"
              priority
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-[hsl(var(--background)/0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          </motion.div>

          {/* Social buttons with improved styling */}
          <motion.div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-content justify-center items-center z-20"
            aria-label="Profile Social Links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={social.url}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                  whileHover={{ y: -4 }}
                >
                  <SocialButton
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    icon={Icon}
                    size={25}
                    variant="default"
                    className="glass-strong hover:glass-ultra hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.2)] transition-all duration-300"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Available badge with pulse animation - positioned to overlap image edge */}
        <motion.div
          className="absolute top-6 -right-2 sm:top-8 sm:right-0 glass-strong px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-xl border border-[hsl(var(--primary)/0.3)] flex items-center gap-2 backdrop-blur-md z-30"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Pulsing dot indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <Text variant="label" className="text-primary font-semibold">
            Available for work
          </Text>
        </motion.div>
      </div>
    </motion.div>
  );
};
