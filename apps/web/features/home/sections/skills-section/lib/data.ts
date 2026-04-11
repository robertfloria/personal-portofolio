import { Skill } from '../types/skill';
import { SKILLS_CATEGORIES } from './constants';

export const categories: Record<Skill['category'], string> = {
  Frontend: 'Core Stack',
  Backend: 'Backend & Architecture',
  DevOps: 'Cloud & Delivery',
  AI: 'AI & Automation',
  Tools: 'Tooling',
};

export const skills: Skill[] = [
  // Core Stack
  { name: 'TypeScript', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Code' },
  { name: 'React', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Fullscreen' },
  { name: 'Next.js', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Layout' },
  { name: 'Redux', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Box' },
  { name: 'TanStack Query', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'RefreshCw' },
  { name: 'Zustand', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Layers' },
  { name: 'Tailwind CSS', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Code2' },
  { name: 'Testing Library', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'TestTube' },
  { name: 'Microfrontends', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'LayoutGrid' },

  // Backend & Architecture
  { name: 'Node.js', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'NestJS', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'Express.js', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'REST API Design', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Share2' },
  { name: 'GraphQL APIs', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Share2' },
  { name: 'PostgreSQL', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'Prisma ORM', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'MySQL / SQL Server', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'MongoDB', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'Redis / BullMQ', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Zap' },
  { name: 'OAuth2 / JWT', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'ShieldCheck' },
  { name: 'Webhooks & Idempotency', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Repeat' },
  { name: 'pgvector / Vector Retrieval', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },

  // Cloud & Delivery
  {
    name: 'AWS (Lambda, ECS Fargate, S3, RDS, CloudWatch)',
    category: SKILLS_CATEGORIES.DEVOPS,
    iconKey: 'Cloud',
  },
  { name: 'Docker', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Box' },
  { name: 'Terraform', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Settings' },
  { name: 'GitHub Actions', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'GitBranch' },
  { name: 'Jenkins', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'GitBranch' },
  { name: 'CI/CD Automation', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Workflow' },
  { name: 'Vercel / Railway', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Cloud' },
  { name: 'Sentry & Observability', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Activity' },

  // AI & Automation
  { name: 'OpenAI (LLM + Whisper)', category: SKILLS_CATEGORIES.AI, iconKey: 'Bot' },
  { name: 'Prompt Engineering', category: SKILLS_CATEGORIES.AI, iconKey: 'Edit3' },
  { name: 'AI Workflow Integration', category: SKILLS_CATEGORIES.AI, iconKey: 'Sparkles' },
  { name: 'RAG Systems', category: SKILLS_CATEGORIES.AI, iconKey: 'Bot' },
  { name: 'GitHub Copilot', category: SKILLS_CATEGORIES.AI, iconKey: 'Github' },
  { name: 'Claude Code', category: SKILLS_CATEGORIES.AI, iconKey: 'Sparkles' },
  { name: 'PII Redaction', category: SKILLS_CATEGORIES.AI, iconKey: 'Shield' },
];
