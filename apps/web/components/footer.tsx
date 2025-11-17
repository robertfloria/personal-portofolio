import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { SocialButton } from '@/components/common/social-button';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/70 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Robert Nicolae Floria</h3>
            <p className="text-muted-foreground">
              Full-Stack Software Developer specializing in modern web technologies. Building
              scalable and maintainable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary dark:hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Connect With Me</h3>
            <div className="flex space-x-4">
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
                    size={20}
                    variant="outline"
                    className="w-10 h-10"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} Robert Nicolae Floria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
