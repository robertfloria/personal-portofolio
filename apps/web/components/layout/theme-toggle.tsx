'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useUI } from '../../store/contexts/ui-context';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { setTheme: setUITheme } = useUI();
  const [mounted, setMounted] = React.useState(false);


  React.useEffect(() => {
    setMounted(true);
    // Populează localStorage cu tema default dacă nu există
    if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme || 'dark');
    }
  }, [theme]);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setUITheme(newTheme as 'light' | 'dark');
  };

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-[hsl(var(--card)/1)] animate-pulse" />;
  }

  return (
    <button
      onClick={handleThemeToggle}
      className="relative w-10 h-10 rounded-full bg-[hsl(var(--card)/1)] flex items-center justify-center hover:bg-[hsl(var(--card)/0.9)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  );
}
