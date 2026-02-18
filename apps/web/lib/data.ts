import type { PersonalInfo, SocialLink } from '@/types';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robert.floria@rbx-soft.tech',
} as const;

export const personalInfo: PersonalInfo = {
  name: 'Robert Nicolae Floria',
  title: 'Software Engineer',
  subtitle: 'React.js • React Native • Next.js • NestJS • Node.js • AI Integration',
  bio: 'Full-stack Software Engineer (5 years) delivering production web apps end-to-end. Strong in React/Next.js and Node.js/NestJS (TypeScript), with proven delivery in regulated enterprise environments and SaaS products. Reduced manual effort (~40%) through workflow automation and improved release speed (~30%) via CI/CD. Focus areas: payments (Stripe), AI features (LLM + transcription), security (OAuth2, OWASP), and observability (Sentry). Available B2B (PFA) or Full-time | Remote / Hybrid.',
  about:
    'Full-stack Software Engineer (5 years) delivering production web and mobile apps end-to-end — from architecture to deployment and maintenance. Strong in React 19/Next.js 16, Node.js/NestJS, TypeScript. Proven in regulated enterprise environments and SaaS products, with focus on payments, AI integration, security hardening, and observability.',
  email: 'robert.floria@rbx-soft.tech',
  phone: '+40 745 174 991',
  location: 'Cluj-Napoca, Romania',
  age: '26',
  education: 'Bachelor of Software Engineering',
  university: 'Technical University of Cluj-Napoca',
  profileImage: '/images/profile/profile_rounded_blue.png',
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
