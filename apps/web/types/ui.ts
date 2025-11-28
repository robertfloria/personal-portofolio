export type ThemeMode = 'light' | 'dark';

export interface UIContextValue {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  toggleMobileMenu: () => void;
}
