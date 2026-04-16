import { Skill } from '../types/skill';
import { SKILLS_CATEGORIES } from './constants';

export const categories: Record<Skill['category'], string> = {
  Frontend: 'Frontend Engineering',
  Backend: 'Backend & API Engineering',
  DevOps: 'Cloud, DevOps & Observability',
  AI: 'AI Product Engineering',
  Tools: 'Data & Specialties',
};

export const skills: Skill[] = [
  // Frontend Engineering
  { name: 'TypeScript', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Code' },
  { name: 'JavaScript', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Code2' },
  { name: 'React', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Fullscreen' },
  { name: 'Next.js', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Layout' },
  { name: 'React Query', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'RefreshCw' },
  { name: 'Redux', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Box' },
  { name: 'Zustand', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Layers' },
  { name: 'Tailwind CSS', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Code2' },
  { name: 'Testing Library', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'TestTube' },
  { name: 'Microfrontends', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'LayoutGrid' },
  { name: 'Module Federation', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'GitBranch' },

  // Backend & API Engineering
  { name: 'Node.js', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'NestJS', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'Express.js', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'REST APIs', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Share2' },
  { name: 'GraphQL', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Share2' },
  { name: 'OpenAPI / Swagger', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'FileText' },
  { name: 'OAuth2 / JWT', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'ShieldCheck' },
  { name: 'Keycloak', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Shield' },
  { name: 'API Gateway Patterns', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Route' },
  { name: 'Webhooks & Idempotency', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Repeat' },
  { name: 'Background Jobs', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Timer' },
  { name: 'Event-Driven Patterns', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Workflow' },
  { name: 'SSE / WebSockets', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Radio' },
  { name: 'Microservices', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Boxes' },

  // Cloud, DevOps & Observability
  {
    name: 'AWS (Lambda, ECS Fargate, EC2, S3, RDS, CloudWatch, SQS)',
    category: SKILLS_CATEGORIES.DEVOPS,
    iconKey: 'Cloud',
  },
  { name: 'Docker', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Box' },
  { name: 'Terraform', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Settings' },
  { name: 'GitHub Actions', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'GitBranch' },
  { name: 'Jenkins', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'GitBranch' },
  { name: 'Vercel', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Cloud' },
  { name: 'Railway', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Cloud' },
  {
    name: 'Environment & Secrets Management',
    category: SKILLS_CATEGORIES.DEVOPS,
    iconKey: 'Shield',
  },
  { name: 'Release Automation', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Workflow' },
  { name: 'Sentry', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Activity' },
  { name: 'Structured Logging', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Activity' },

  // AI Product Engineering
  { name: 'AI/LLM API Integrations', category: SKILLS_CATEGORIES.AI, iconKey: 'Bot' },
  { name: 'Whisper & Transcription Pipelines', category: SKILLS_CATEGORIES.AI, iconKey: 'Mic' },
  { name: 'RAG Workflows', category: SKILLS_CATEGORIES.AI, iconKey: 'Sparkles' },
  { name: 'Prompt Engineering', category: SKILLS_CATEGORIES.AI, iconKey: 'Edit3' },
  { name: 'AI Workflow Integration', category: SKILLS_CATEGORIES.AI, iconKey: 'Wand2' },
  { name: 'AI-Assisted Engineering', category: SKILLS_CATEGORIES.AI, iconKey: 'Github' },

  // Data & Specialties
  { name: 'PostgreSQL', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Database' },
  { name: 'Prisma', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Database' },
  { name: 'MySQL', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Database' },
  { name: 'MongoDB', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Database' },
  { name: 'SQL Server (T-SQL)', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Database' },
  {
    name: 'Schema Design & Query Optimization',
    category: SKILLS_CATEGORIES.TOOLS,
    iconKey: 'Search',
  },
  { name: 'pgvector', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Database' },
  { name: 'Stripe Billing', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'CreditCard' },
  { name: 'Redis / BullMQ', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Zap' },
  { name: 'RabbitMQ', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Rabbit' },
  { name: 'CI/CD', category: SKILLS_CATEGORIES.TOOLS, iconKey: 'Workflow' },
];
