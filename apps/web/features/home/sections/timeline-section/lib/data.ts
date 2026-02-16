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
    startDate: 'June 2021',
    endDate: 'July 2021',
    description:
      'Developed automated web tests using Selenium WebDriver and SpecFlow, and implemented unit/integration tests in C# (.NET) to ensure code quality. Collaborated with QA and dev teams to resolve defects and improve product reliability. Gained experience with Agile and CI practices.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
  },
  {
    id: '4',
    title: 'Software Developer',
    organization: 'Transilvania Bank',
    startDate: 'September 2022',
    endDate: 'Present',
    description:
      'Led frontend delivery for multiple React.js applications (TypeScript), building reusable components and maintainable patterns. Implemented and improved Jenkins CI/CD pipelines, reducing deployment time by ~30% via automation and pipeline optimization. Contributed to backend services (ASP.NET Core, Node.js) applying SOLID principles and clean architecture. Delivered features in regulated/enterprise environment with production releases, collaboration across dev/QA, and documentation in Jira/Confluence. Selected as AI Coach for cross-company workshops (Code Crafters partnership), delivering training on prompt engineering, GitHub Copilot integration, and AI-assisted development for React teams (3 sessions, 40+ developers).',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
    current: true,
  },
  {
    id: '5',
    title: 'Software Developer, Freelance',
    organization: 'B2B, Contract',
    startDate: 'July 2025',
    endDate: 'Present',
    description:
      'Delivered full-stack web applications (React.js/Next.js, Node.js/NestJS) and cross-platform mobile apps (React Native). Implemented AI-powered features and automated workflows, accelerating delivery and enhancing user experience. Built secure authentication and payment systems (OAuth 2.0, Google/Apple Pay, IAP) for subscription models. Designed and optimized relational databases (MySQL, Transact-SQL) for scalability and security. CI/CD Automated deployments using GitHub Actions, Firebase Hosting, Railway, and Docker for containerized backends. Enhanced delivery speed by up to 30% through the use of AI-powered development tools.',
    type: 'work',
    location: 'Remote',
    current: true,
  },
  {
    id: '6',
    title: 'Founder & Full-Stack Developer',
    organization: 'Derisqo',
    startDate: 'October 2025',
    endDate: 'Present',
    description:
      'Solo-built AI-powered SaaS platform for meeting transcription and contract analysis. Public beta with Stripe billing integration. Architected and deployed full-stack monorepo (Next.js 16, NestJS 11, PostgreSQL, Prisma) on Railway with CI/CD automation (GitHub Actions, Docker). Integrated OpenAI GPT-4o for contract risk analysis (12 clause types), sentiment detection, and action item extraction with 95%+ accuracy in testing. Implemented Whisper AI transcription supporting 6 audio formats (mp3, wav, m4a, webm, mp4) with automatic PII redaction (GDPR compliant). Built Stripe payment system with credit-based pricing and subscription tiers.',
    type: 'work',
    location: 'Remote',
    current: true,
  },
];
