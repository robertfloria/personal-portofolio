import Link from 'next/link';
import React from 'react';

interface NavbarLogoProps {
  scrollToSection: (href: string) => void;
}

const NavbarLogoComponent = ({ scrollToSection }: NavbarLogoProps) => (
  <div className="shrink-0">
    <Link
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('#home');
      }}
      className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
    >
      Robert
    </Link>
  </div>
);

export const NavbarLogo = React.memo(NavbarLogoComponent);
