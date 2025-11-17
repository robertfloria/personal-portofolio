/**
 * Application-wide constants
 */

export const APP_NAME = 'Robert Nicolae Floria - Portfolio';
export const APP_DESCRIPTION =
  'Full-Stack Software Engineer specializing in React.js, React Native, Node.js, and AI Integration';

export const ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  SKILLS: '#skills',
  PROJECTS: '#projects',
  TIMELINE: '#timeline',
  CERTIFICATES: '#certificates',
  CONTACT: '#contact',
} as const;

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robertfloria27@gmail.com',
} as const;

export const API_ENDPOINTS = {
  SEND_EMAIL: '/email/send',
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.6,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const SKILLS_CATEGORIES = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  DEVOPS: 'DevOps',
  AI: 'AI',
  TOOLS: 'Tools',
} as const;

export const PROJECT_CATEGORIES = {
  WEB: 'Web',
  MOBILE: 'Mobile',
  AI: 'AI',
  DEVOPS: 'DevOps',
} as const;
