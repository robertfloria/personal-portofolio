import type { PersonalInfo, SocialLink } from '@/types';

const SOCIAL_LINKS = {
  PORTFOLIO: 'https://www.rbx-soft.tech',
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robert.floria@rbx-soft.tech',
} as const;

export const personalInfo: PersonalInfo = {
  name: 'Robert Floria',
  title: 'Full-Stack Engineer | TypeScript | React / Next.js | Node.js / NestJS',
  subtitle:
    'AI-enabled Product Engineering | Open to Permanent Employment, Contract / B2B, Remote or Hybrid',
  bio: 'Full-Stack Engineer with 5+ years building and shipping production web platforms end-to-end, from early application design and architecture through implementation, CI/CD, and production support. Strong TypeScript stack across React/Next.js and Node.js/NestJS with measurable outcomes, including around 40% workflow automation and around 30% faster deployments.',
  about:
    'Creative, solution-oriented engineer who contributes ideas early across product design, architecture, integration strategy, and delivery planning. Experienced with AWS, Terraform, PostgreSQL/Prisma, Stripe/webhooks/idempotency, Redis/BullMQ, RabbitMQ, RAG, and production observability.',
  email: 'robert.floria@rbx-soft.tech',
  phone: '+40745174991',
  location: 'Cluj-Napoca, RO',
  age: '27',
  education: 'B.Sc. in Computer Science',
  university: 'Technical University of Cluj-Napoca',
  profileImage: '/images/profile/profile_rounded_blue.png',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'Portfolio',
    url: SOCIAL_LINKS.PORTFOLIO,
    icon: 'globe',
  },
  {
    platform: 'LinkedIn',
    url: SOCIAL_LINKS.LINKEDIN,
    icon: 'linkedin',
  },
  {
    platform: 'GitHub',
    url: SOCIAL_LINKS.GITHUB,
    icon: 'github',
  },
];
