'use client';
import './style.css';
import React, { useState, useEffect, useCallback } from 'react';
import { useUI } from '../../../store/contexts/ui-context';
import {
  NavbarDesktopNav,
  NavbarLogo,
  NavbarMobileMenu,
  NavbarMobileMenuButton,
} from './components';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const { mobileMenuOpen: isMobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUI();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen, setMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback(
    (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        setMobileMenuOpen(false);
        const isMobile = window.innerWidth < 768;
        const navbar = document.querySelector('nav');
        const navbarHeight = isMobile ? 64 : navbar ? navbar.offsetHeight : 0;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementTop - navbarHeight;
        isProgrammaticScroll.current = true;
        setActiveSection(href);
        window.scroll({ top: offsetPosition, behavior: 'smooth' });
        if (programmaticTimer.current !== null) {
          clearTimeout(programmaticTimer.current);
        }
        programmaticTimer.current = window.setTimeout(() => {
          isProgrammaticScroll.current = false;
          programmaticTimer.current = null;
        }, 700);
      }
    },
    [setMobileMenuOpen, setActiveSection],
  );

  // observe sections and update active nav link
  // refs to manage programmatic scroll state
  const isProgrammaticScroll = React.useRef(false);
  const programmaticTimer = React.useRef<number | null>(null);

  useEffect(() => {
    const ids = navItems.map((n) => n.href);
    const sections = ids.map((id) => document.querySelector(id)).filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // if we are in the middle of a programmatic scroll, ignore observer updates
        if (isProgrammaticScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + (entry.target as Element).id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
      if (programmaticTimer.current !== null) {
        clearTimeout(programmaticTimer.current);
        programmaticTimer.current = null;
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-glass-ultra' : 'bg-[hsl(var(--background)/1)]'} ${isMobileMenuOpen && 'rounded-b-3xl shadow-lg'}`}
    >
      <div className="max-w-7xl mx-auto px-section sm:px-section-md lg:px-section-lg">
        <div className="flex items-center justify-between gap-grid h-16">
          <NavbarLogo scrollToSection={scrollToSection} />
          <NavbarDesktopNav
            navItems={navItems}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <NavbarMobileMenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>
      {isMobileMenuOpen && (
        <NavbarMobileMenu
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}
    </nav>
  );
}
