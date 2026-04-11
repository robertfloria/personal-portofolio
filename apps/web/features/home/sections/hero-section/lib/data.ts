import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

// Icon keys must match lucide-react PascalCase export names exactly
export const infoItems = [
  { iconKey: 'Briefcase', label: 'Engagement', value: 'Full-Time / Contract / B2B' },
  { iconKey: 'Rocket', label: 'Delivery', value: 'Architecture -> CI/CD -> Ops' },
  { iconKey: 'Layers', label: 'Stack', value: 'React/Next.js + Node/NestJS' },
  { iconKey: 'MapPin', label: 'Location', value: `${personalInfo.location} (Remote/Hybrid)` },
];
