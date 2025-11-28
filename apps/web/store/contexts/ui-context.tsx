'use client';

/**
 * UIContext & UIProvider
 *
 * Provides global UI state and actions via React context.
 * - Manages theme mode (light/dark), sidebar, and mobile menu state.
 * - setTheme: Sets theme mode.
 * - setSidebarOpen: Controls sidebar visibility.
 * - setMobileMenuOpen: Controls mobile menu visibility.
 * - toggleMobileMenu: Toggles mobile menu state.
 * - useUI: Custom hook to access UI context.
 * - Must be used within UIProvider.
 *
 * @example
 * const { theme, setTheme, sidebarOpen } = useUI();
 */

import React from 'react';
import type { ThemeMode, UIContextValue } from '@/types';

const UIContext = React.createContext<UIContextValue | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeMode>('dark');
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

/**
 * useUI
 *
 * Custom hook to access UI context.
 * Throws an error if used outside of UIProvider.
 *
 * @example
 * const { theme, setTheme } = useUI();
 */

export function useUI() {
  const ctx = React.useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}

export default UIContext;
