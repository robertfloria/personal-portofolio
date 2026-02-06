import type { PersonalInfo, SocialLink } from '@/types';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robertfloria27@gmail.com',
} as const;

export const personalInfo: PersonalInfo = {
  name: 'Robert Nicolae Floria',
  title: 'Software Engineer',
  subtitle: 'React.js • React Native • Next.js • NestJS • Node.js • AI Integration',
  bio: 'Full-stack Software Engineer (4+ years) delivering production web apps end-to-end: discovery → architecture → implementation → deployment → maintenance. Strong in React/Next.js frontends and Node.js/NestJS backends (TypeScript), with proven delivery in regulated enterprise environments and SaaS product work. Business-focused execution: shipped workflow automation that reduced manual effort (~40%) and improved release speed (~30%) via CI/CD automation. Special focus areas for B2B: payments (Stripe subscriptions/credits, Apple/Google Pay), AI features (LLM + transcription), and scalable API & database design. Available for B2B (PFA) or Full-time (CIM) | Remote / Hybrid.',
  about:
    'Full-stack Software Engineer specializing in modern web and mobile development with proven delivery in regulated enterprise environments and SaaS products. Strong in React/Next.js, TypeScript, Node.js/NestJS with expertise in payments (Stripe, Apple/Google Pay, IAP), AI integration (OpenAI GPT-4o, Whisper, PII redaction), and production-grade architecture. Built workflow automation reducing manual effort by ~40% and CI/CD pipelines improving release speed by ~30%. Focused on scalable APIs, database design (PostgreSQL, MySQL), and shipping business-critical features end-to-end.',
  email: 'robertfloria27@gmail.com',
  phone: '+40 745 174 991',
  location: 'Cluj-Napoca, Romania',
  age: '26',
  education: 'Bachelor of Software Engineering',
  university: 'Technical University of Cluj-Napoca',
  profileImage: '/images/profile/profile.png',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: SOCIAL_LINKS.GITHUB,
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: SOCIAL_LINKS.LINKEDIN,
    icon: 'linkedin',
  },
  {
    platform: 'Email',
    url: SOCIAL_LINKS.EMAIL,
    icon: 'mail',
  },
];
