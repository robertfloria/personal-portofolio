import { TimelineItem } from '../types/timeline-item';

export const timeline: TimelineItem[] = [
  {
    id: '1',
    title: 'Bachelor of Computer Science',
    organization: 'Technical University of Cluj-Napoca',
    startDate: 'October 2018',
    endDate: 'October 2022',
    description:
      'Faculty of Automation and Computer Science. Graduated with Software Engineer diploma.',
    type: 'education',
    location: 'Cluj-Napoca, Romania',
  },
  {
    id: '2',
    title: 'Software Developer, Transilvania Bank (Internship)',
    organization: 'Transilvania Bank',
    startDate: 'April 2021',
    endDate: 'June 2021',
    description:
      'Built automated UI tests with Selenium WebDriver + SpecFlow and contributed unit/integration tests in C#. Collaborated with QA and development teams to resolve defects and improve product reliability.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
  },
  {
    id: '3',
    title: 'Software Developer (Full-Time)',
    organization: 'Transilvania Bank',
    startDate: 'June 2021',
    endDate: 'Present',
    description:
      'Owned delivery of features across multiple enterprise React/Next.js + TypeScript + Node.js/NestJS/Express.js applications in a regulated environment, from requirements to release and production support. Contributed to modular frontend architecture with reusable components and shared UI patterns for forms, tables, and complex domain views. Worked on backend services in a microservices-based environment, contributing to API integrations, domain workflows, and reliable inter-service functionality. Increased release confidence with automated tests (Jest + Testing Library) for critical flows. Improved Jenkins/GitHub Actions CI/CD pipelines, cutting deployment time by ~30%.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
    current: true,
  },
  {
    id: '4',
    title: 'Independent Contractor (B2B / PFA)',
    organization: 'Full-Stack Delivery',
    startDate: 'July 2025',
    endDate: 'February 2026',
    description:
      'Delivered B2B web solutions with clear milestones: requirements → implementation → automated tests → deployment → handover docs. Built Next.js/NestJS applications with PostgreSQL/MySQL, secure auth (OAuth2/JWT), and production observability (Sentry + structured logging). Designed backend services using modular and microservices-oriented patterns with reliable async processing via Redis/BullMQ (retries/backoff) and real-time progress via SSE/WebSockets. Cloud delivery on AWS with containerized services (Docker), repeatable CI/CD, IaC via Terraform, environment/secret management, and production monitoring. Stripe subscriptions/credits + webhooks.',
    type: 'work',
    location: 'Remote',
    current: false,
  },
  {
    id: '5',
    title: 'Founder (AI SaaS — Side Project)',
    organization: 'Derisqo',
    startDate: 'November 2025',
    endDate: 'February 2026',
    description:
      'Built and launched an AI SaaS for meeting transcription and contract analysis, including Stripe billing (subscriptions/credits + webhooks). Designed and shipped the end-to-end platform: Next.js frontend + NestJS services/API, deployed on AWS. Architected the backend using microservices-oriented patterns for transcription, contract analysis, billing, and async processing. Provisioned AWS infrastructure using Terraform (IaC) and automated releases via CI/CD; implemented serverless workloads on AWS Lambda with CloudWatch. Built resilient background processing with Redis/BullMQ (ElastiCache/MemoryDB): retries/backoff, idempotency, and real-time progress via SSE. LLM-based contract risk analysis (11 clause categories), action items + sentiment signals (OpenAI GPT-4o). Whisper transcription with automated PII redaction. Live: https://derisqo.rbx-soft.tech/',
    type: 'work',
    location: 'Remote',
    current: false,
  },
];
