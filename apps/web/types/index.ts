export interface PersonalInfo {
    name: string;
    title: string;
    subtitle?: string;
    bio?: string;
    email: string;
    phone: string;
    location: string;
    age: string;
    education: string;
    university?: string;
    profileImage: string;
    resumeUrl?: string;
}
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'AI' | 'Tools';
  proficiency: number;
  icon?: string;
  iconKey?: string;
  yearsOfExperience?: number;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
    id: string;
    title: string;
    description?: string;
    imageUrl?: string;
    images?: string[];
    technologies: (string | Technology)[];
    features?: string[];
    githubUrl?: string;
    liveUrl?: string;
    category?: string;
    featured?: boolean;
}

export interface TimelineItem {
    id: string;
    title: string;
    organization: string;
    description: string;
    startDate: string;
    endDate?: string;
    type: 'education' | 'work' | 'certificate';
    location?: string;
    current?: boolean;
}

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    imageUrl?: string;
    credentialUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface ContactFormData {
  name: string;
  from: string;
  subject: string;
  message: string;
}
