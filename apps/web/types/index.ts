export interface PersonalInfo {
  name: string;
  title: string;
  age: number;
  languages: string;
  location: string;
  diploma: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  value: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  images: string[];
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'education' | 'work' | 'certificate';
}

export interface Certificate {
  id: number;
  title: string;
  organization: string;
  organizationIcon: string;
  image: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  from: string;
  subject: string;
  message: string;
}
