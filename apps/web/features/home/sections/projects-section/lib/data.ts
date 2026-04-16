import { Project } from '../types/project';
import { PROJECT_CATEGORIES } from './constants';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Derisqo - AI Meeting & Document Intelligence Platform',
    description:
      'Built and launched an AI-powered platform that turns recordings, transcripts, and contracts into summaries, action items, key decisions, clause analysis, risk assessments, comparisons, and AI chat workflows.',
    technologies: [
      'Next.js 16',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'pgvector',
      'OpenAI APIs',
      'Whisper',
      'Redis 7',
      'BullMQ',
      'RabbitMQ',
      'Stripe',
      'SSE',
      'Sentry',
      'Docker',
      'Railway',
      'GitHub Actions',
    ],
    features: [
      'End-to-end ownership of product and architecture in a PNPM/Turborepo setup',
      'AI capabilities with OpenAI, Whisper, and pgvector-based RAG chat across resources',
      'Resilient async processing using Redis/BullMQ, RabbitMQ, retries/backoff, and SSE progress',
      'Privacy-first processing with temporary file storage, redaction, RBAC, and AI timeouts',
      'Stripe subscriptions, credits, secure webhooks, observability, and release automation',
      'Production deployment and maintenance: https://derisqo.rbx-soft.tech/',
    ],
    imageUrl: '/images/projects/ai-documents/hero.png',
    githubUrl: '',
    liveUrl: 'https://derisqo.rbx-soft.tech/',
    category: PROJECT_CATEGORIES.AI,
    featured: true,
  },
  {
    id: '2',
    title: 'Guaranteed Loan Portfolio Management',
    description:
      'Enterprise platform for managing guaranteed loan portfolios backed by EU programs and internal funds in a regulated production environment.',
    technologies: [
      'React',
      'TypeScript',
      'NestJS',
      'Jest',
      'Jenkins',
      'Microservices Architecture',
    ],
    features: [
      'Modular, role-oriented UI across EU Funds, Internal Funds, Collections & Payments, and Administration',
      'Workflow automation for origination and repayment tracking, reducing manual workload by around 40%',
      'Reusable workflow patterns and UI structure for consistency across portfolio categories',
      'Automated tests and regulated release flows with Jenkins and enterprise standards',
    ],
    imageUrl: '/images/projects/loan-portfolio/HomePage.png',
    githubUrl: '',
    liveUrl: '',
    category: PROJECT_CATEGORIES.WEB,
    featured: true,
  },
  {
    id: '3',
    title: 'Enterprise Operations Portal Shell',
    description:
      'Contributed to an enterprise portal shell used to host and unify operational applications under a single React-based experience.',
    technologies: [
      'React',
      'TypeScript',
      'Module Federation',
      'Iframe Integrations',
      'Keycloak',
      'API Gateway',
    ],
    features: [
      'Supported multiple integration models: Module Federation and iframe-based onboarding',
      'Helped shape gateway-oriented integration patterns with centralized shell navigation',
      'Worked with Keycloak-based authentication and shared authorization patterns',
      'Contributed ideas for shell architecture, app onboarding, and reusable integration approaches',
    ],
    imageUrl: '/images/projects/banking-app/home.png',
    githubUrl: '',
    liveUrl: '',
    category: PROJECT_CATEGORIES.WEB,
    featured: true,
  },
];

