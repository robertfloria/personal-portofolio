import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

// Icon keys must match lucide-react PascalCase export names exactly
export const infoItems = [
  { iconKey: 'Calendar', label: 'Age', value: personalInfo.age },
  { iconKey: 'MapPin', label: 'Location', value: personalInfo.location },
  { iconKey: 'Briefcase', label: 'Work', value: 'Software Engineer' },
  { iconKey: 'GraduationCap', label: 'Education', value: personalInfo.education },
  { iconKey: 'Phone', label: 'Phone', value: personalInfo.phone },
];
