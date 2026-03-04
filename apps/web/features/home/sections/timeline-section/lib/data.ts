import { TimelineItem } from '../types/timeline-item';

export const timeline: TimelineItem[] = [
  {
    id: '1',
    title: 'Computer Science High School',
    organization: 'High School',
    startDate: '2014',
    endDate: '2018',
    description: 'Computer science profile with focus on Mathematics and programming fundamentals.',
    type: 'education',
    location: 'Romania',
  },
  {
    id: '2',
    title: 'Bachelor of Software Engineering',
    organization: 'Technical University of Cluj-Napoca',
    startDate: 'October 2018',
    endDate: 'October 2022',
    description:
      'Faculty of Automation and Computer Science. Graduated with Software Engineer diploma.',
    type: 'education',
    location: 'Cluj-Napoca, Romania',
  },
  {
    id: '3',
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
    id: '4',
    title: 'Software Developer (Full-Time)',
    organization: 'Transilvania Bank',
    startDate: 'June 2021',
    endDate: 'Present',
    description:
      'Owned delivery of features across multiple enterprise React/Next.js + TypeScript + Node.js/NestJS applications in a regulated environment — from requirements to release and production support. Built reusable UI architecture (shared components + patterns for forms/tables/complex views). Improved Jenkins/GitHub Actions CI/CD pipelines, cutting deployment time by ~30%. Delivered and operated services on AWS (Lambda/ECS/EC2, S3, RDS, CloudWatch, Terraform). Increased release confidence with automated tests (Jest + Testing Library). Selected as AI Coach for cross-company workshops (Code Crafters), delivering training on GitHub Copilot and AI-assisted development for React teams.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
    current: true,
  },
  {
    id: '5',
    title: 'Independent Contractor (B2B / PFA)',
    organization: 'Full-Stack Delivery',
    startDate: 'July 2025',
    endDate: 'February 2026',
    description:
      'Delivered B2B web solutions with clear milestones: requirements → implementation → automated tests → deployment → handover docs. Built Next.js/NestJS applications with PostgreSQL/MySQL, secure auth (OAuth2/JWT), and production observability (Sentry + structured logging). Reliable integrations with queues (Redis/BullMQ), retries/backoff, and real-time progress (SSE/WebSockets). Cloud delivery: AWS serverless deployments and containerized services (Docker) with repeatable CI/CD, environment/secret management and production monitoring. Infrastructure as Code via Terraform. Stripe subscriptions/credits + webhooks.',
    type: 'work',
    location: 'Remote',
    current: false,
  },
  {
    id: '6',
    title: 'Founder (AI SaaS — Side Project)',
    organization: 'Derisqo',
    startDate: 'November 2025',
    endDate: 'February 2026',
    description:
      'Built and launched an AI SaaS for meeting transcription and contract analysis, including Stripe billing (subscriptions/credits + webhooks). Designed and shipped the full platform: Next.js frontend + NestJS services/API, deployed on AWS. Provisioned AWS infrastructure using Terraform (IaC) and automated releases via CI/CD; implemented serverless workloads on AWS Lambda with CloudWatch. Built resilient background processing with Redis/BullMQ (ElastiCache/MemoryDB): retries/backoff, idempotency, and real-time progress via SSE. LLM-based contract risk analysis (11 clause categories), action items + sentiment signals (OpenAI GPT-4o). Whisper transcription with automated PII redaction. Status: live in production, maintained part-time.',
    type: 'work',
    location: 'Remote',
    current: false,
  },
];
