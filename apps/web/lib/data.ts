import type { PersonalInfo, SocialLink } from '@/types';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robert.floria@rbx-soft.tech',
} as const;

export const personalInfo: PersonalInfo = {
  name: 'Robert Nicolae Floria',
  title: 'Full-Stack Engineer | Full-Time & Contract / B2B',
  subtitle: 'TypeScript • React / Next.js • Node.js / NestJS • Cloud, AI & RAG Delivery',
  bio: 'Full-Stack Engineer (5+ years) delivering production web platforms end-to-end in both full-time and contract/B2B engagements. I build with React/Next.js, Node.js/NestJS, PostgreSQL/Prisma, REST/GraphQL, AWS, and production AI patterns including RAG pipelines with pgvector. Strong focus on modular architecture, secure integrations, observability, and CI/CD. Typical outcomes: ~40% workflow automation and ~30% faster deployments.',
  about:
    'I collaborate with teams in full-time employment roles and contract/B2B engagements (full-time, part-time, or project-based). I provide reliable TypeScript delivery across frontend, backend, cloud, and AI-enabled systems with clear milestones, predictable execution, and production-grade quality standards.',
  email: 'robert.floria@rbx-soft.tech',
  phone: '+40 745 174 991',
  location: 'Cluj-Napoca, RO',
  age: '27',
  education: 'Bachelor of Computer Science',
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
