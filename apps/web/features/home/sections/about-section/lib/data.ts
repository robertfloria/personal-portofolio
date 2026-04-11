interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'End-to-End Product Delivery',
    description:
      'From requirements and architecture to implementation, testing, CI/CD, and production support. I deliver TypeScript products with predictable milestones and measurable business outcomes.',
    icon: 'Code2',
  },
  {
    id: 2,
    title: 'Architecture & API Engineering',
    description:
      'Design and implementation of modular backend systems with REST/GraphQL APIs, clear boundaries, and scalable patterns for microservices-oriented environments.',
    icon: 'Share2',
  },
  {
    id: 3,
    title: 'Cloud & DevOps Execution',
    description:
      'AWS workloads (Lambda, ECS Fargate, S3, RDS, CloudWatch), Dockerized services, IaC with Terraform, and automated CI/CD pipelines for safer and faster releases.',
    icon: 'Cloud',
  },
  {
    id: 4,
    title: 'Security & Production Hardening',
    description:
      'Secure auth with OAuth2/JWT, webhook verification and idempotency, rate limiting, validation, secrets management, and practical OWASP-aligned protections.',
    icon: 'Shield',
  },
  {
    id: 5,
    title: 'Billing & Event-Driven Workflows',
    description:
      'Stripe subscriptions and credits, resilient webhook handling, and background processing using Redis/BullMQ with retries/backoff and real-time progress updates.',
    icon: 'CreditCard',
  },
  {
    id: 6,
    title: 'AI Workflow Integration',
    description:
      'Production AI features with OpenAI and Whisper, prompt engineering, RAG systems with pgvector retrieval, structured outputs, and privacy-aware workflows (including PII redaction) integrated into real products.',
    icon: 'Brain',
  },
];
