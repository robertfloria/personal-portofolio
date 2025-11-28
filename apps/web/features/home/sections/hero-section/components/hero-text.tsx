import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button, Card, Heading, Text, IconBadge, DownloadCvButton } from '@/components/common';
import { SocialButton } from '@/components/common/social-button';
import { personalInfo, socialLinks } from '@/lib/data';
import { iconMap } from '../lib/data';

export const HeroText: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="order-2 lg:order-2 justify-center items-center flex"
    >
      <div className="flex flex-col gap-4">
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
          className="flex flex-wrap gap-4 justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contact" className="flex w-full lg:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="flex w-full lg:w-auto"
              leftIcon={<Mail size={20} />}
            >
              Get In Touch
            </Button>
          </a>
          <DownloadCvButton className="flex w-full lg:w-auto" />
          <a href="#projects" className="flex w-full lg:w-auto">
            <Button variant="outline" className="flex w-full lg:w-auto" size="lg">
              View My Work →
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Text variant={'label'}>Connect</Text>
          {socialLinks.map((social, index) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <SocialButton
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  icon={Icon}
                  size={20}
                  variant="outline"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};
