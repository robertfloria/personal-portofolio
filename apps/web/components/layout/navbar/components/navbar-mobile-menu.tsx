import Link from 'next/link';
import React from 'react';

interface NavbarMobileMenuProps {
  navItems: { name: string; href: string }[];
  activeSection: string;
  scrollToSection: (href: string) => void;
}

const NavbarMobileMenuComponent = ({
  navItems,
  activeSection,
  scrollToSection,
}: NavbarMobileMenuProps) => (
  <div id="mobile-menu" className={`md:hidden top-16 left-0 right-0 z-50`}>
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className={`block px-3 py-2 rounded-md cursor-pointer font-medium transition-colors ${
              isActive
                ? 'text-primary dark:text-primary-foreground'
                : 'text-foreground hover:text-primary dark:hover:text-primary-foreground hover:bg-[hsl(var(--card)/0.9)] dark:hover:bg-[hsl(var(--card)/0.8)]'
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  </div>
);

export const NavbarMobileMenu = React.memo(NavbarMobileMenuComponent);
