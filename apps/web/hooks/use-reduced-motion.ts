import { useEffect, useState } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * Respects system accessibility settings
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      // Assume no preference on server-side or unsupported env
      setPrefersReducedMotion(false);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(Boolean(mediaQuery.matches));

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(Boolean(event.matches));
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    // Legacy browsers
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}
