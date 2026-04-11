import { DownloadCvButton } from '@/components/common';
import { ThemeToggle } from '../../theme-toggle';
import React from 'react';

interface NavbarDesktopNavProps {
  navItems: { name: string; href: string }[];
  activeSection: string;
  scrollToSection: (href: string) => void;
}

const NavbarDesktopNavComponent = ({
  navItems,
  activeSection,
  scrollToSection,
}: NavbarDesktopNavProps) => (
  <div className="hidden md:flex items-center gap-grid">
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
          className={`cursor-pointer relative px-3 py-1.5 text-sm font-medium transition-colors ${
            isActive
              ? 'text-primary'
              : 'text-muted-foreground hover:text-foreground'
          }${isActive ? ' after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-px after:bg-primary after:rounded-full' : ''}`}
        >
          {item.name}
        </a>
      );
    })}
    <DownloadCvButton size="sm" textVariant="short" />
    <ThemeToggle />
  </div>
);

export const NavbarDesktopNav = React.memo(NavbarDesktopNavComponent);
