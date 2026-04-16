import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button, Heading, Text, DownloadCvButton } from '@/components/common';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export const HeroText: React.FC = () => {
  const nameParts = personalInfo.name.trim().split(/\s+/);
  const highlightedName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
  const mainName = highlightedName ? nameParts.slice(0, -1).join(' ') : personalInfo.name;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="order-2 lg:order-2 justify-center items-center flex"
    >
      <div className="flex flex-col gap-component">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Heading
            variant="h2"
            className="flex gap-1.5 flex-wrap justify-center text-center lg:justify-start lg:text-start"
          >
            {mainName}
            {highlightedName && (
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                {highlightedName}
              </span>
            )}
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="rounded-2xl border border-border/60 bg-secondary/40 dark:bg-muted/30 px-4 py-3">
            <p className="text-sm font-semibold text-foreground">{personalInfo.title}</p>
            <p className="text-sm text-muted-foreground mt-0.5">{personalInfo.subtitle}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Text
            variant="body"
            className="max-w-prose mx-auto flex justify-center text-center lg:justify-start lg:text-start tracking-normal leading-relaxed"
          >
            {personalInfo.bio}
          </Text>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {['Permanent Employment', 'Contract / B2B', 'Remote or Hybrid'].map((label) => (
            <span
              key={label}
              className="rounded-full border border-border/60 bg-secondary/60 dark:bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground tracking-wide"
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-content justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="#contact" className="flex w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="flex w-full sm:w-auto"
              leftIcon={<Mail size={20} />}
            >
              Discuss a Project
            </Button>
          </Link>
          <DownloadCvButton className="flex w-full sm:w-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};
