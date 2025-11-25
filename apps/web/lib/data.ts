interface PersonalInfo {
  name: string;
  title: string;
  subtitle?: string;
  bio?: string;
  about?: string;
  email: string;
  phone: string;
  location: string;
  age: string;
  education: string;
  university?: string;
  profileImage: string;
  resumeUrl?: string;
}
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

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
  bio: 'Innovative Software Engineer with 3+ years of experience in building scalable web and mobile applications using React.js, Next.js, React Native (Expo), TypeScript, Node.js, NestJS, ASP.NET Core, and AI-powered features. Skilled in CI/CD automation (GitHub Actions, Jenkins), cloud deployments (Firebase, Railway, AWS), and containerization (Docker). Passionate about delivering high-performance, user-centric solutions and driving AI adoption in modern development workflows.',
  about:
    'I am a passionate Software Engineer with a strong background in full-stack web and mobile development. My expertise spans React.js, Next.js, React Native (Expo), and TypeScript, complemented by solid experience in backend technologies like Node.js and NestJS. I thrive on building scalable, high-performance applications and integrating AI-powered features to deliver innovative solutions. With a proven track record in CI/CD automation, cloud deployments, and containerization, I am committed to driving modern development practices and creating impactful user experiences.',
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
