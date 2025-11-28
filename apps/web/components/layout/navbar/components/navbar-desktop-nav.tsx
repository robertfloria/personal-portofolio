import { DownloadCvButton } from '@/components/common';
import { ThemeToggle } from '../../theme-toggle';
import React from 'react';

interface NavbarDesktopNavProps {
  navItems: { name: string; href: string }[];
  activeSection: string;
  scrollToSection: (href: string) => void;
}

export function NavbarDesktopNav({
  navItems,
  activeSection,
  scrollToSection,
}: NavbarDesktopNavProps) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => {
        const isActive = activeSection === item.href;
        return (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className={`cursor-pointer font-medium transition-colors ${
              isActive
                ? 'text-primary dark:text-primary-foreground underline decoration-2 underline-offset-4'
                : 'text-foreground hover:text-primary dark:hover:text-primary-foreground'
            }`}
          >
            {item.name}
          </a>
        );
      })}
      <DownloadCvButton size="sm" textVariant="short" />
      <ThemeToggle />
    </div>
  );
}
