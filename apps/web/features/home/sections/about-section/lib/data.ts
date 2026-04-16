interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'End-to-End Product Engineering',
    description:
      'From early product design and architecture to implementation, CI/CD, and production support across regulated and product environments.',
    icon: 'Code2',
  },
  {
    id: 2,
    title: 'Full-Stack TypeScript Architecture',
    description:
      'Hands-on frontend and backend ownership with React/Next.js and Node.js/NestJS, including modular structure, shared UI, and maintainable service boundaries.',
    icon: 'Layers',
  },
  {
    id: 3,
    title: 'Backend APIs & Integration Patterns',
    description:
      'REST/GraphQL/OpenAPI APIs with OAuth2/JWT, Keycloak, API gateway patterns, webhook idempotency, background jobs, and event-driven workflows.',
    icon: 'Share2',
  },
  {
    id: 4,
    title: 'Cloud, DevOps & Observability',
    description:
      'AWS delivery (Lambda, ECS Fargate, EC2, S3, RDS, CloudWatch, SQS), Docker, Terraform, CI/CD, release automation, secrets management, and Sentry.',
    icon: 'Cloud',
  },
  {
    id: 5,
    title: 'AI & Automation Workflows',
    description:
      'AI/LLM API integrations, Whisper transcription, RAG workflows, and prompt engineering combined with practical AI-assisted delivery processes.',
    icon: 'Brain',
  },
  {
    id: 6,
    title: 'Billing, Queues & Reliability',
    description:
      'Stripe subscriptions and webhook flows, plus resilient async processing with Redis/BullMQ and RabbitMQ, retries/backoff, and real-time progress updates.',
    icon: 'CreditCard',
  },
];
