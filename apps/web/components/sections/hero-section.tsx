'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Phone,
  GraduationCap,
  Briefcase,
  Download,
} from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import { Button, Card, Heading, Text, IconBadge, Section } from '@/components/common';
import { SocialButton } from '@/components/common/social-button';
import { useReducedMotion } from '@/hooks';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const infoItems = [
  { icon: Calendar, label: 'Age', value: personalInfo.age },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Briefcase, label: 'Work', value: 'Full-Stack Developer' },
  { icon: GraduationCap, label: 'Education', value: personalInfo.education },
  { icon: Phone, label: 'Phone', value: personalInfo.phone },
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
    <Section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Image with Glassmorphism */}
          <motion.div
            {...imageVariants}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Animated gradient rings */}
              {!shouldReduceMotion && (
                <>
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-primary to-accent animate-spin-slow opacity-75 blur-2xl" />
                  <div className="absolute inset-4 rounded-full bg-linear-to-r from-secondary via-primary to-primary animate-pulse opacity-50" />
                </>
              )}

              {/* Profile image container with glassmorphism */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-border glass-strong shadow-2xl">
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
                className="absolute -bottom-4 -left-4 glass-zone text-foreground px-6 py-3 rounded-full shadow-lg font-semibold text-sm border border-border"
                animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              >
                👋 Welcome to my portfolio
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            {...textVariants}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-2"
          >
            {/* Use gap instead of margins for spacing */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Heading variant="h2" className="flex gap-2 flex-wrap">
                  {personalInfo.name.split(' ').slice(0, 2).join(' ')}
                  <span className="bg-linear-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    {personalInfo.name.split(' ').slice(2).join(' ')}
                  </span>
                </Heading>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Heading variant="h4">{personalInfo.title}</Heading>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Text variant="lead">{personalInfo.subtitle}</Text>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Text variant="body" className="max-w-2xl">
                  {personalInfo.bio}
                </Text>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a href="#contact">
                  <Button variant="primary" size="lg" leftIcon={<Mail size={20} />}>
                    Get In Touch
                  </Button>
                </a>
                <a href="#projects">
                  <Button variant="outline" size="lg">
                    View My Work →
                  </Button>
                </a>
                <a href={personalInfo.resumeUrl} download target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" leftIcon={<Download size={18} />}>
                    Download CV
                  </Button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-4"
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={shouldReduceMotion ? {} : { opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-sm text-muted-foreground font-medium">Connect:</span>
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {infoItems.map((item, index) => (
            <Card
              key={item.label}
              variant="glass"
              hover="glow"
              padding="md"
              animated={!shouldReduceMotion}
              animationDelay={1 + index * 0.1}
              className="group"
            >
              <Card.Content className="flex gap-4">
                <IconBadge
                  icon={item.icon}
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
