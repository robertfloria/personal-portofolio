import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
import { socialLinks } from '@/data/social-links';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Robert Nicolae Floria
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full-Stack Software Developer specializing in modern web technologies.
              Building scalable and maintainable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} Robert Nicolae Floria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
