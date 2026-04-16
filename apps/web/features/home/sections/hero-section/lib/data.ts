import { personalInfo } from '@/lib/data';
import { Github, Globe, Linkedin, Mail } from 'lucide-react';

export const iconMap = {
  globe: Globe,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

// Icon keys must match lucide-react PascalCase export names exactly
export const infoItems = [
  { iconKey: 'Briefcase', label: 'Role', value: 'Full-Stack Engineer' },
  {
    iconKey: 'Layers',
    label: 'Stack',
    value: 'TypeScript | React/Next.js | Node.js/NestJS',
  },
  { iconKey: 'Sparkles', label: 'Specialty', value: 'AI-enabled Product Engineering' },
  {
    iconKey: 'MapPin',
    label: 'Availability',
    value: `${personalInfo.location} | Remote / Hybrid`,
  },
];
