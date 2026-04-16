import { SOCIAL_LINKS } from '@/lib';
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
    iconKey: 'Linkedin',
    label: 'LinkedIn',
    value: 'robert-nicolae-floria-51981920b',
    href: SOCIAL_LINKS.LINKEDIN,
    gradient: 'from-accent to-primary dark:from-accent dark:to-primary',
    border: 'border-border',
  },
];
