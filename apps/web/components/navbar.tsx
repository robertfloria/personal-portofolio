'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { useUI } from './contexts/ui-context';

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

  // focus first link when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstLink = document.querySelector('#mobile-menu a');
      if (firstLink instanceof HTMLElement) firstLink.focus();
    }
  }, [isMobileMenuOpen]);

  // close on Escape
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // mark that we're initiating a programmatic smooth scroll
      isProgrammaticScroll.current = true;
      // set active immediately so the UI reflects the user's intent
      setActiveSection(href);
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      // clear the programmatic flag after a short delay (allows smooth scroll to finish)
      if (programmaticTimer.current !== null) {
        clearTimeout(programmaticTimer.current);
      }
      programmaticTimer.current = window.setTimeout(() => {
        isProgrammaticScroll.current = false;
        programmaticTimer.current = null;
      }, 700);
    }
  };

  // observe sections and update active nav link
  // refs to manage programmatic scroll state
  const isProgrammaticScroll = React.useRef(false);
  const programmaticTimer = React.useRef<number | null>(null);

  useEffect(() => {
    const ids = navItems.map((n) => n.href);
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];

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
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-ultra shadow-lg' : 'bg-card'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            <a
              href={personalInfo.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium hover:bg-card/90 dark:hover:bg-card/80"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href={personalInfo.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium hover:bg-card/90 dark:hover:bg-card/80"
            >
              <Download size={16} />
            </a>
            <ThemeToggle />
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
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-card border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
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
                  className={`block px-3 py-2 rounded-md cursor-pointer font-medium transition-colors ${
                    isActive
                      ? 'text-primary dark:text-primary-foreground bg-card bg-opacity-50'
                      : 'text-foreground hover:text-primary dark:hover:text-primary-foreground hover:bg-card/90 dark:hover:bg-card/80'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
