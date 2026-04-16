import { TimelineItem } from '../types/timeline-item';

export const timeline: TimelineItem[] = [
  {
    id: '1',
    title: 'B.Sc. in Computer Science',
    organization: 'Technical University of Cluj-Napoca',
    startDate: '2018',
    endDate: '2022',
    description: 'Faculty of Automation and Computer Science.',
    type: 'education',
    location: 'Cluj-Napoca, Romania',
  },
  {
    id: '2',
    title: 'Software Developer Intern',
    organization: 'Transilvania Bank',
    startDate: 'Apr 2021',
    endDate: 'Jun 2021',
    description:
      'Built automated UI tests with Selenium WebDriver + SpecFlow and contributed unit and integration tests in C#.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
  },
  {
    id: '3',
    title: 'Software Developer (Full-Time)',
    organization: 'Transilvania Bank',
    startDate: 'Jun 2021',
    endDate: 'Present',
    description:
      'Deliver features across enterprise React/Next.js + TypeScript + Node.js/NestJS/Express.js applications in a regulated environment, from requirements and early design to release and production support. Contribute to reusable frontend architecture, backend integrations in microservices environments, and stronger quality through Jest and Testing Library. Improved Jenkins and GitHub Actions pipelines, cutting deployment time by around 30%.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
    current: true,
  },
  {
    id: '4',
    title: 'Independent Contractor (B2B / PFA)',
    organization: 'Full-Stack Delivery (Part-Time)',
    startDate: 'Jul 2025',
    endDate: 'Feb 2026',
    description:
      'Delivered B2B web solutions from discovery and architecture through implementation, testing, deployment, and handover. Built production systems with Next.js/NestJS, PostgreSQL, OAuth2/JWT, Sentry, and structured logging. Implemented resilient async workflows with Redis/BullMQ, retries/backoff, and real-time progress via SSE/WebSockets, plus AWS, Docker, Terraform, CI/CD, and Stripe billing flows.',
    type: 'work',
    location: 'Remote',
    current: false,
  },
  {
    id: '5',
    title: 'Founder (AI SaaS Side Project, Part-Time)',
    organization: 'Derisqo',
    startDate: 'Nov 2025',
    endDate: 'Feb 2026',
    description:
      'Built and launched an AI-powered meeting and document intelligence platform. Owned product and technical direction end-to-end: frontend, backend boundaries, data model, async-processing, observability, billing, and release automation. Implemented OpenAI + Whisper + pgvector RAG capabilities, resilient Redis/BullMQ and RabbitMQ pipelines, privacy-first processing, and production deployment at https://derisqo.rbx-soft.tech/.',
    type: 'work',
    location: 'Remote',
    current: false,
  },
];
