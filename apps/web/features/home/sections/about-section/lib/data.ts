interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Full-Stack Development',
    description:
      'Production web and mobile apps (React/Next.js, NestJS/Node.js) with proven delivery in regulated enterprise environments. Reduced manual effort by ~40% through workflow automation and improved release speed by ~30% via CI/CD optimization.',
    icon: 'Code2',
  },
  {
    id: 2,
    title: 'Payments & Monetization',
    description:
      'Stripe integration (subscriptions, credits, webhooks), Apple Pay, Google Pay, and In-App Purchases (IAP) for mobile apps. Built billing systems for SaaS products with metered usage and subscription tiers.',
    icon: 'CreditCard',
  },
  {
    id: 3,
    title: 'AI & LLM Features',
    description:
      'OpenAI GPT-4o integration for analysis and extraction, Whisper transcription, PII redaction workflows, and structured outputs. Built AI-powered SaaS products from concept to production.',
    icon: 'Brain',
  },
  {
    id: 4,
    title: 'Mobile Development',
    description:
      'Cross-platform apps with React Native (Expo), published to Google Play and App Store. OAuth integration (Google, Apple), push notifications, and IAP for subscription models. Optimized for performance and user experience.',
    icon: 'Smartphone',
  },
  {
    id: 5,
    title: 'DevOps & CI/CD',
    description:
      'Docker containerization, GitHub Actions and Jenkins pipelines, Railway/Vercel deployments. Improved release automation reducing deployment time by ~30% and achieving 99.9% uptime for production services.',
    icon: 'Rocket',
  },
  {
    id: 6,
    title: 'Database & API Design',
    description:
      'PostgreSQL, MySQL, SQL Server with schema design and query optimization. RESTful APIs with NestJS/Express following SOLID principles and clean architecture patterns for regulated environments.',
    icon: 'Database',
  },
];
