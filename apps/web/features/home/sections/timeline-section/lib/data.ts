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
      'Led frontend development for React.js applications using TypeScript, ensuring scalable and maintainable code. Implemented CI/CD pipelines with Jenkins, reducing deployment time by 30%. Contributed to backend development (ASP.NET Core, Node.js) applying SOLID principles and clean architecture. Integrated AI-assisted coding tools (GitHub Copilot, MCP Servers), accelerating feature delivery by 30% and improving code consistency. Organized internal AI workshops, promoting adoption of modern development practices.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
    current: true,
  },
  {
    id: '5',
    title: 'Software Developer, Self-employed (Contract)',
    organization: 'Self-Employed',
    startDate: 'August 2025',
    endDate: 'Present',
    description:
      'Delivered full-stack web applications (React.js, Next.js, Node.js/NestJS) and cross-platform mobile apps (React Native), published on Google Play & App Store. Implemented AI-powered features and automated workflows, accelerating delivery and enhancing user experience. Built secure authentication and payment systems (OAuth 2.0, Google/Apple Pay, IAP) for subscription models. Designed and optimized relational databases (MySQL, Transact-SQL) for scalability and security. Automated deployments using GitHub Actions, Firebase Hosting, Railway, and Docker for containerized backends.',
    type: 'work',
    location: 'Remote',
    current: true,
  },
  {
    id: '6',
    title: 'Founder & Software Engineer, MentolIQ App (Self-Employed)',
    organization: 'Self-Employed',
    startDate: 'October 2025',
    endDate: 'Present',
    description:
      'Designed and developed a cross-platform mobile application using React Native (Expo), deployed on Google Play and Apple App Store. Integrated AI chatbot (OpenAI API) for personalized mental health guidance. Implemented secure authentication (OAuth for Google & Apple) and payment systems (Google Pay, Apple Pay, IAP). Managed end-to-end lifecycle: architecture, coding, testing, CI/CD, and cloud deployment (Railway, Docker, AWS S3).',
    type: 'work',
    location: 'Remote',
    current: true,
  },
];
