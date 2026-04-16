/**
 * Application-wide constants
 */

export const APP_NAME = 'Robert Floria | Full-Stack Engineer';
export const APP_DESCRIPTION =
  'Full-Stack Engineer with 5+ years delivering production web platforms end-to-end with TypeScript, React/Next.js, Node.js/NestJS, cloud delivery, and AI-enabled product engineering.';

// Animation durations
export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.6,
  TOAST: 5000, // ms
  NOTIFICATION: 5000, // ms
  ERROR_NOTIFICATION: 7000, // ms
  LOOP: 3, // seconds
} as const;

// API configuration
export const API_CONFIG = {
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

// Social links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robert.floria@rbx-soft.tech',
  PORTFOLIO: 'https://www.rbx-soft.tech',
  GITHUB_REPO: 'https://github.com/robertfloria/personal-portofolio',
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#about' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Selected Work', href: '#projects' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Credentials', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
] as const;
