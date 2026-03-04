import type { PersonalInfo, SocialLink } from '@/types';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robert.floria@rbx-soft.tech',
} as const;

export const personalInfo: PersonalInfo = {
  name: 'Robert Nicolae Floria',
  title: 'Software Engineer',
  subtitle: 'React • Next.js • Node.js • NestJS • TypeScript • AI Integration',
  bio: 'Full-Stack Engineer (5+ years) building and shipping production web platforms end-to-end — architecture → delivery → CI/CD → ops. Strong TypeScript stack: React/Next.js + Node/NestJS, PostgreSQL/Prisma, REST/GraphQL, AWS, Vercel, Railway. Delivered ~40% workflow automation and ~30% faster deployments, with production focus on auth, webhooks/idempotency, testing, and observability.',
  about:
    'Full-Stack Engineer (5+ years) building and shipping production web platforms end-to-end. Strong TypeScript stack: React/Next.js, Node.js/NestJS, PostgreSQL/Prisma, REST/GraphQL. Delivered measurable improvements (~40% workflow automation, ~30% faster deployments) with a focus on auth, webhooks/idempotency, testing, and observability. Available B2B (PFA)/CIM | Remote/Hybrid | Full-time/Part-time/Project-based.',
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
