import type { PersonalInfo, SocialLink } from '@/types';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/robertfloria',
  LINKEDIN: 'https://www.linkedin.com/in/robert-nicolae-floria-51981920b/',
  EMAIL: 'mailto:robertfloria27@gmail.com',
} as const;

export const personalInfo: PersonalInfo = {
  name: 'Robert Nicolae Floria',
  title: 'Software Engineer',
  subtitle:
    'React.js | React Native (Expo) | Next.js | NestJS | Node.js | TypeScript | AI Integration',
  bio: 'Software Engineer with 3.5+ years of experience in building scalable web and mobile applications and accelerating delivery by up to 30% through AI-powered development tools using React.js, Next.js, React Native (Expo), TypeScript, Node.js, NestJS, and AI-powered features. Skilled in CI/CD automation (GitHub Actions, Jenkins), cloud deployments, and containerization. Passionate about delivering high-performance, user-centric solutions and driving AI adoption in modern development workflows.',
  about:
    'Full-Stack Software Engineer specializing in modern web and mobile development. Experienced in React.js, Next.js, React Native (Expo), and TypeScript, with strong backend skills in Node.js and NestJS. Passionate about integrating AI-powered features, optimizing CI/CD workflows, and deploying scalable solutions to the cloud. Dedicated to delivering innovative, high-performance applications and advancing best practices in software engineering.',
  email: 'robertfloria27@gmail.com',
  phone: '+40 745 174 991',
  location: 'Cluj-Napoca, Romania',
  age: '26',
  education: 'Bachelor of Software Engineering',
  university: 'Technical University of Cluj-Napoca',
  profileImage: '/images/profile/profile.png',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: SOCIAL_LINKS.GITHUB,
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: SOCIAL_LINKS.LINKEDIN,
    icon: 'linkedin',
  },
  {
    platform: 'Email',
    url: SOCIAL_LINKS.EMAIL,
    icon: 'mail',
  },
];
