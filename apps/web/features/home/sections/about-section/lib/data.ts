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
      'Production web and mobile apps (React 19/Next.js 16, NestJS/Node.js) with proven delivery in regulated enterprise environments. Reduced manual effort by ~40% through workflow automation and improved release speed by ~30% via CI/CD optimization.',
    icon: 'Code2',
  },
  {
    id: 2,
    title: 'Security & Auth',
    description:
      'OAuth2 (Google), JWT/HttpOnly cookie auth, OWASP Top 10 mitigations (CSRF/XSS/CSP), rate limiting, secure webhook processing (signature verification, idempotency), audit logging, and secrets management for production systems.',
    icon: 'Shield',
  },
  {
    id: 3,
    title: 'Payments & Billing',
    description:
      'Stripe integration (subscriptions, credits, metered usage, webhooks, idempotency), Apple Pay, Google Pay, and In-App Purchases. Built reliable billing systems for SaaS products with webhook-driven flows and operational tooling.',
    icon: 'CreditCard',
  },
  {
    id: 4,
    title: 'AI & LLM Integration',
    description:
      'OpenAI GPT-4o/Whisper integration for analysis, transcription, and structured outputs. PII redaction workflows (regex + SHA-256 hashing), prompt engineering, and audio compression (FFmpeg/libopus) for production AI features.',
    icon: 'Brain',
  },
  {
    id: 5,
    title: 'Observability & Reliability',
    description:
      'Sentry integration (error tracking + performance monitoring), structured logging, alerting/monitoring, background jobs with Redis/BullMQ (retries/backoff), and real-time features (SSE, WebSockets) for maintainable production systems.',
    icon: 'Activity',
  },
  {
    id: 6,
    title: 'Database & API Design',
    description:
      'PostgreSQL, MongoDB, MySQL with schema design and query optimization. REST & GraphQL APIs with Swagger/OpenAPI documentation, following SOLID principles and clean architecture patterns for regulated environments.',
    icon: 'Database',
  },
];
