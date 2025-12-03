import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button, Card, Heading, Text, IconBadge, DownloadCvButton } from '@/components/common';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export const HeroText: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="order-2 lg:order-2 justify-center items-center flex"
    >
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Heading
            variant="h2"
            className="flex gap-1.5 flex-wrap justify-center text-center lg:justify-start lg:text-start"
          >
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {personalInfo.name.split(' ').slice(2).join(' ')}
            </span>
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card hover="glow" padding="md">
            <Card.Content className="flex flex-row gap-4 justify-center items-start">
              <IconBadge iconKey="Briefcase" variant="solid" size="md" className="shrink-0" />
              <div>
                <Card.Header>{personalInfo.title}</Card.Header>
                <Card.Description>{personalInfo.subtitle}</Card.Description>
              </div>
            </Card.Content>
          </Card>
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
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
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
              Get In Touch
            </Button>
          </Link>
          <DownloadCvButton className="flex w-full sm:w-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};
