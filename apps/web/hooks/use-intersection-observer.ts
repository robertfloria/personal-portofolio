/**
 * useIntersectionObserver hook
 *
 * Observă dacă un element este vizibil în viewport folosind Intersection Observer API.
 * - Returnează un ref pentru elementul observat și un boolean pentru vizibilitate.
 * - Poate fi configurat cu threshold, root, rootMargin și freezeOnceVisible.
 * - freezeOnceVisible oprește observarea după ce elementul devine vizibil.
 *
 * @param options Opțiuni pentru Intersection Observer
 * @returns [elementRef, isIntersecting]
 *
 * @example
 * const [ref, visible] = useIntersectionObserver({ threshold: 0.5 });
 * <div ref={ref}>...</div>
 */

import { useEffect, useRef, useState } from 'react';

export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && freezeOnceVisible) {
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return [elementRef, isIntersecting];
}
