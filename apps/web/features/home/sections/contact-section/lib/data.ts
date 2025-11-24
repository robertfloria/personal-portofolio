import { personalInfo } from '@/lib/data';

export const contactMethods = [
  {
    iconKey: 'Mail',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    gradient: 'from-primary to-accent dark:from-primary dark:to-accent',
    border: 'border-border',
  },
  {
    iconKey: 'Phone',
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    gradient: 'from-secondary to-primary dark:from-secondary dark:to-primary',
    border: 'border-border',
  },
  {
    iconKey: 'MapPin',
    label: 'Location',
    value: personalInfo.location,
    gradient: 'from-accent to-secondary dark:from-accent dark:to-secondary',
    border: 'border-border',
  },
];
