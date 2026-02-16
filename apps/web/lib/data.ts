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
  bio: 'Full-stack Software Engineer (5 years) delivering production web apps end-to-end: discovery → architecture → implementation → deployment → maintenance. Strong in React/Next.js frontends and Node.js/NestJS backends (TypeScript), with proven delivery in regulated enterprise environments and SaaS product work. Business-focused execution: shipped workflow automation that reduced manual effort (~40%) and improved release speed (~30%) via CI/CD automation. Production-focused: secure auth (OAuth2, JWT), reliable webhook processing (idempotency), and observability (Sentry, structured logging) for maintainable systems. Special focus areas for B2B: payments (Stripe subscriptions/credits), AI features (LLM + transcription), security hardening (OWASP Top 10), and scalable API design. Available for B2B (PFA) or Full-time (CIM) | Remote / Hybrid.',
  about:
    'Full-stack Software Engineer (5 years) specializing in production-grade web and mobile development with proven delivery in regulated enterprise environments and SaaS products. Strong in React 19/Next.js 16, TypeScript, Node.js/NestJS with expertise in payments (Stripe webhooks, subscriptions), AI integration (OpenAI GPT-4o, Whisper), security (OAuth2, JWT, OWASP mitigations), and observability (Sentry, structured logging). Built workflow automation reducing manual effort by ~40% and CI/CD pipelines improving release speed by ~30%. Experienced with background jobs (Redis/BullMQ), real-time features (SSE, WebSockets), and scalable API design (REST, GraphQL) for business-critical systems.',
  email: 'robert.floria@rbx-soft.tech',
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
