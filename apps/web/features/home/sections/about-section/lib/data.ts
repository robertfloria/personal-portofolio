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
      'End-to-end delivery of production web platforms (React/Next.js, NestJS/Node.js) — architecture, implementation, testing, CI/CD, and ops. Experienced with modular systems, microservices, and reusable frontend architectures in regulated enterprise environments. ~40% workflow automation, ~30% faster deployments.',
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
      'OpenAI GPT-4o/Whisper for analysis, transcription, and structured outputs. Prompt engineering, AI workflow integration, PII redaction, Claude Code and GitHub Copilot to accelerate delivery. Production-proven AI features embedded in real products.',
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
