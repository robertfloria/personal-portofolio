import React from 'react';
import { Github, Globe, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { SocialButton } from '@/components/common/social-button';

const iconMap = {
  globe: Globe,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: 'Services', href: '#about' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Selected Work', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border/60 bg-card/40 dark:bg-card/30">
      <div className="max-w-6xl mx-auto px-section sm:px-section-md lg:px-section-lg py-section-md lg:py-section-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid text-center md:text-left">
          <div className="w-auto flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground tracking-tight">Robert Floria</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Engineer focused on TypeScript product delivery across React/Next.js,
              Node.js/NestJS, cloud systems, and AI-enabled workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-auto flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground tracking-tight">Navigation</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
              {quickLinks.map((link) => (
                <li key={link.label} className="inline-block">
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-auto flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground tracking-tight">Connect</h3>
            <div className="flex gap-content justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <SocialButton
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.icon}
                    icon={Icon}
                    size={18}
                    variant="outline"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Robert Floria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
