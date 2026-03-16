import type { PersonalInfo, SocialLink } from '@/types';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robert.floria@rbx-soft.tech',
} as const;

export const personalInfo: PersonalInfo = {
  name: 'Robert Nicolae Floria',
  title: 'Full-Stack Engineer',
  subtitle: 'TypeScript • React / Next.js • Node.js / NestJS • AI-enabled Product Engineering',
  bio: 'Full-Stack Engineer (5+ years) building and shipping production web platforms end-to-end — architecture → delivery → CI/CD → ops. Strong TypeScript stack: React/Next.js, Node/NestJS, PostgreSQL/Prisma, REST/GraphQL, with hands-on experience designing modular systems using microservices and reusable frontend architectures. Cloud-native workloads on AWS (Lambda, ECS Fargate, S3, RDS, CloudWatch) with Terraform, Vercel, Railway. Delivered ~40% workflow automation and ~30% faster deployments.',
  about:
    'Full-Stack Engineer (5+ years) building and shipping production web platforms end-to-end. Strong TypeScript stack: React/Next.js, Node.js/NestJS, PostgreSQL/Prisma, REST/GraphQL. Experienced with modular systems, microservices, cloud-native AWS workloads (Lambda, ECS Fargate, S3, RDS, Terraform), and AI-enabled product development (OpenAI/Whisper, Claude Code, GitHub Copilot). Available for permanent employment, contract/B2B, Remote/Hybrid.',
  email: 'robert.floria@rbx-soft.tech',
  phone: '+40 745 174 991',
  location: 'Cluj-Napoca, Romania',
  age: '27',
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
