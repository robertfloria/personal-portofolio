'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import { Button, Card, Heading, Text, IconBadge, Section } from '@/components/common';
import { SocialButton } from '@/components/common/social-button';
import { useReducedMotion } from '@/hooks';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

// Icon keys must match lucide-react PascalCase export names exactly
const infoItems = [
  { iconKey: 'Calendar', label: 'Age', value: personalInfo.age },
  { iconKey: 'MapPin', label: 'Location', value: personalInfo.location },
  { iconKey: 'Briefcase', label: 'Work', value: 'Full-Stack Developer' },
  { iconKey: 'GraduationCap', label: 'Education', value: personalInfo.education },
  { iconKey: 'Phone', label: 'Phone', value: personalInfo.phone },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const imageVariants = shouldReduceMotion
    ? {}
    : {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    };

  const textVariants = shouldReduceMotion
    ? {}
    : {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    };

  return (
    <Section id="home" className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-16 items-center">
          {/* Left Column - Profile Image with Glassmorphism */}
          <motion.div
            {...imageVariants}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative mx-auto w-[calc(70vw)] h-[calc(70vw)] sm:w-100 sm:h-100 lg:w-110 lg:h-110">
              {/* Animated gradient rings */}
              {!shouldReduceMotion && (
                <>
                  <div className="absolute inset-4 rounded-full bg-linear-to-r from-primary via-primary to-accent animate-spin-slow opacity-60 blur-lg" />
                  <div className="absolute inset-6 rounded-full bg-linear-to-r from-secondary via-primary to-primary animate-pulse opacity-10" />
                </>
              )}

              {/* Profile image container with glassmorphism */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl backdrop-blur-xl bg-white/20 dark:bg-black/20  ring-white/30 dark:ring-black/30">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 24rem, (max-width: 1024px) 24rem, 28rem"
                  className="object-cover"
                />
              </div>

              {/* Floating badges */}

              <motion.div
                className="absolute bottom-2 sm:-left-4 glass-zone px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg font-semibold  border border-border flex justify-center lg:justify-start w-full md:w-auto"
                animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              >
                <Text variant="label" className="text-primary">
                  👋 Welcome to my portfolio
                </Text>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            {...textVariants}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-2 justify-center items-center flex"
          >
            {/* Use gap instead of margins for spacing */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Heading
                  variant="h4"
                  className="flex items-center gap-2 justify-start"
                >
                  <IconBadge
                    iconKey="Briefcase"
                    variant="outline"
                    size="sm"
                    iconSize={15}
                    className="shrink-0 text-primary"
                  />
                  {personalInfo.title}
                </Heading>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Text
                  variant="lead"
                  className="flex justify-start text-start text-foreground"
                >
                  {personalInfo.subtitle}
                </Text>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Text
                  variant="body"
                  className="max-w-prose mx-auto flex justify-start text-start text-card-foreground tracking-normal leading-relaxed"
                >
                  {personalInfo.bio}
                </Text>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-start"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
                <a href="#projects" className="flex w-full lg:w-auto">
                  <Button variant="outline" className="flex w-full lg:w-auto" size="lg">
                    View My Work →
                  </Button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-4 justify-center lg:justify-start"
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={shouldReduceMotion ? {} : { opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Text variant={'label'}>Connect</Text>
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={social.platform}
                      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0 }}
                      animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <SocialButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                        icon={Icon}
                        size={20}
                        className="w-12 h-12"
                        variant="outline"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Info Cards Section Below - use gap instead of margin */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 50 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {infoItems.map((item, index) => (
            <Card
              key={item.label}
              hover="glow"
              padding="md"
              animated={!shouldReduceMotion}
              animationDelay={1 + index * 0.1}
              className="group"
            >
              <Card.Content className="flex gap-4">
                <IconBadge
                  iconKey={item.iconKey}
                  variant="solid"
                  size="md"
                  className="group-hover:scale-110 transition-transform shrink-0"
                />
                <div>
                  <Card.Header className="text-lg font-semibold">{item.label}</Card.Header>
                  <Card.Description>{item.value}</Card.Description>
                </div>
              </Card.Content>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
