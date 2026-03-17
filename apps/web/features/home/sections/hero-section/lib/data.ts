import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

// Icon keys must match lucide-react PascalCase export names exactly
export const infoItems = [
  { iconKey: 'Briefcase', label: 'Work', value: 'Full-Stack Engineer' },
  { iconKey: 'GraduationCap', label: 'Education', value: personalInfo.education },
  { iconKey: 'MapPin', label: 'Location', value: personalInfo.location },
  { iconKey: 'Phone', label: 'Phone', value: personalInfo.phone },
];
