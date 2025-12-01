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
      className="relative order-1 lg:order-1"
    >
      <div className="relative mx-auto w-[calc(80vw)] h-[calc(80vw)] sm:w-100 sm:h-100 lg:w-110 lg:h-110">
        <>
          <div className="absolute inset-4 rounded-full bg-linear-to-r from-primary via-primary to-accent animate-spin-slow opacity-60 blur-lg" />
          <div className="absolute inset-6 rounded-full bg-linear-to-r from-secondary via-primary to-primary animate-pulse opacity-10" />
        </>
        <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ">
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            sizes="(max-width: 768px) 24rem, (max-width: 1024px) 24rem, 28rem"
            className="object-cover z-10"
          />
        </div>
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-5 justify-center items-center z-20"
          aria-label="Profile Social Links"
        >
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <SocialButton
                href={social.url}
                key={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                icon={Icon}
                size={25}
                variant="default"
                className="glass-strong"
              />
            );
          })}
        </div>
        <motion.div
          className="absolute top-2 lg:top-5 -right-4 glass-zone px-6 py-3 rounded-full shadow-lg font-semibold border border-border flex justify-start w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Text variant="label" className="text-primary">
            Available for work
          </Text>
        </motion.div>
      </div>
    </motion.div>
  );
};
