'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useUI } from './contexts/ui-context';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { setTheme: setUITheme } = useUI();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setUITheme(newTheme as 'light' | 'dark');
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-card animate-pulse" />
    );
  }

  return (
    <button
      onClick={handleThemeToggle}
      className="relative w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-card/90 transition-colors"
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
