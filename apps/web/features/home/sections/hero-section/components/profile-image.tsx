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
      <div className="relative mx-auto w-[calc(80vw)] h-[calc(80vw)] sm:w-100 sm:h-100 lg:w-110 lg:h-110">
        {/* Animated ring gradient - outer glow */}
        <motion.div
          className="absolute inset-2 rounded-full opacity-60 blur-xl"
          style={{
            background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Secondary pulsing ring */}
        <motion.div
          className="absolute inset-4 rounded-full bg-linear-to-r from-primary via-accent to-primary opacity-40 blur-lg"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Inner subtle glow */}
        <div className="absolute inset-6 rounded-full bg-linear-to-r from-secondary via-primary to-primary animate-pulse opacity-10" />
        
        {/* Profile image container with hover effect */}
        <motion.div
          className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ring-2 ring-[hsl(var(--border)/0.2)]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            sizes="(max-width: 768px) 24rem, (max-width: 1024px) 24rem, 28rem"
            className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        </motion.div>
        
        {/* Social buttons with improved styling */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 justify-center items-center z-20"
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
        
        {/* Available badge with pulse animation */}
        <motion.div
          className="absolute top-2 lg:top-5 -right-4 glass-strong px-5 py-2.5 rounded-full shadow-xl border border-[hsl(var(--primary)/0.3)] flex items-center gap-2 backdrop-blur-md"
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
