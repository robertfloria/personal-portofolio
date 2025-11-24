import { TimelineItem } from '../types/timeline-item';

export const timeline: TimelineItem[] = [
  {
    id: '1',
    title: 'Computer Science High School',
    organization: 'High School',
    startDate: '2014',
    endDate: '2018',
    description: 'Computer science profile with focus on programming fundamentals.',
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
    title: 'Full-Stack Software Developer',
    organization: 'Transilvania Bank',
    startDate: 'September 2022',
    endDate: 'Present',
    description:
      'Led frontend development for React.js applications using TypeScript/JavaScript. Implemented CI/CD pipelines with Jenkins, reducing deployment time by 30%. Contributed to ASP.NET Core backend using SOLID principles and clean architecture. Organized AI workshops and promoted GitHub Copilot and MCP servers to accelerate team productivity. Technologies: ReactJS 18, TypeScript, ASP.NET Core 8, SQL Server, JavaScript, HTML5, CSS/SASS.',
    type: 'work',
    location: 'Cluj-Napoca, Romania',
    current: true,
  },
  {
    id: '4',
    title: 'Freelance Software Developer',
    organization: 'Self-Employed',
    startDate: 'August 2025',
    endDate: 'Present',
    description:
      'Delivered cross-platform mobile applications with React Native (Expo), published to Google Play and App Store. Implemented OAuth 2.0 authentication (Firebase) and In-App Purchases for subscription models. Built full-stack web applications with React.js frontend and Node.js/NestJS backends. Designed and optimized relational databases (MySQL, Transact-SQL) and automated deployments with GitHub Actions, Firebase Hosting, Railway, and Docker.',
    type: 'work',
    location: 'Remote',
    current: true,
  },
];
