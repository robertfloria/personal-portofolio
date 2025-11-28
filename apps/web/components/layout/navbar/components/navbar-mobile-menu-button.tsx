import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../../theme-toggle';
import { DownloadCvButton } from '@/components/common';
import React from 'react';

interface NavbarMobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export function NavbarMobileMenuButton({
  isMobileMenuOpen,
  toggleMobileMenu,
}: NavbarMobileMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center space-x-4">
      <ThemeToggle />
      <DownloadCvButton className="ml-2" />
      <button
        onClick={toggleMobileMenu}
        className="text-foreground"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
