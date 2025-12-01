/**
 * Application-wide constants
 */

export const APP_NAME = 'Robert Nicolae Floria | Full-Stack Developer';
export const APP_DESCRIPTION =
  'Full-Stack Developer specializing in React, Next.js, NestJS, and TypeScript. Building scalable web and mobile applications with AI integration. View my portfolio, projects, and get in touch.';

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
  EMAIL: 'mailto:robertfloria27@gmail.com',
  PORTFOLIO: 'https://web-production-26d4.up.railway.app',
  GITHUB_REPO: 'https://github.com/robertfloria/personal-portofolio',
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
] as const;
