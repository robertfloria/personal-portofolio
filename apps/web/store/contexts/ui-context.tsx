'use client';

import React from 'react';

type ThemeMode = 'light' | 'dark';

interface UIContextValue {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  toggleMobileMenu: () => void;
}

const UIContext = React.createContext<UIContextValue | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeMode>('light');
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = React.useCallback(() => setMobileMenuOpen((v) => !v), []);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      sidebarOpen,
      setSidebarOpen,
      mobileMenuOpen,
      setMobileMenuOpen,
      toggleMobileMenu,
    }),
    [theme, sidebarOpen, mobileMenuOpen, toggleMobileMenu],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export function useUI() {
  const ctx = React.useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}

export default UIContext;
