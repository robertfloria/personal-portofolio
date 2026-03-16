import { Skill } from '../types/skill';
import { SKILLS_CATEGORIES } from './constants';

export const categories: Record<Skill['category'], string> = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  DevOps: 'Cloud & DevOps',
  AI: 'AI & Automation',
  Tools: 'Tools',
};

export const skills: Skill[] = [
  // Frontend
  { name: 'TypeScript', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Code' },
  { name: 'React', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Fullscreen' },
  { name: 'Next.js', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Layout' },
  { name: 'Redux', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Box' },
  { name: 'TanStack Query', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'RefreshCw' },
  { name: 'Zustand', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Layers' },
  { name: 'Zod', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Shield' },
  { name: 'Tailwind CSS', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Code2' },
  { name: 'React Native', category: SKILLS_CATEGORIES.FRONTEND, iconKey: 'Smartphone' },
  // Backend
  { name: 'Node.js', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'NestJS', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'Express.js', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Server' },
  { name: 'REST / GraphQL', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Share2' },
  { name: 'PostgreSQL', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'MySQL / SQL Server', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'MongoDB', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'Prisma ORM', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Database' },
  { name: 'Redis / BullMQ', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'Zap' },
  { name: 'Jest / Testing Library', category: SKILLS_CATEGORIES.BACKEND, iconKey: 'TestTube' },
  // Cloud & DevOps
  { name: 'AWS', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Cloud' },
  { name: 'Docker', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Box' },
  { name: 'Terraform', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Settings' },
  { name: 'GitHub Actions', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'GitBranch' },
  { name: 'Jenkins', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'GitBranch' },
  { name: 'Vercel / Railway', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Cloud' },
  { name: 'Sentry', category: SKILLS_CATEGORIES.DEVOPS, iconKey: 'Activity' },
  // AI & Automation
  { name: 'OpenAI / Whisper', category: SKILLS_CATEGORIES.AI, iconKey: 'Bot' },
  { name: 'Stripe', category: SKILLS_CATEGORIES.AI, iconKey: 'CreditCard' },
  { name: 'Prompt Engineering', category: SKILLS_CATEGORIES.AI, iconKey: 'Edit3' },
  { name: 'GitHub Copilot', category: SKILLS_CATEGORIES.AI, iconKey: 'Github' },
  { name: 'Claude Code', category: SKILLS_CATEGORIES.AI, iconKey: 'Sparkles' },
  { name: 'MCP Servers', category: SKILLS_CATEGORIES.AI, iconKey: 'Server' },
];
