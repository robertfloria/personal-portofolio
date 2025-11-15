"use client";

import { useEffect, RefObject } from 'react';

function getFocusableElements(element: HTMLElement | null): HTMLElement[] {
  if (!element) return [];
  const selectors = [
    'a[href]',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable]'
  ];
  const nodes = Array.from(element.querySelectorAll<HTMLElement>(selectors.join(',')));
  return nodes.filter((n) => n.offsetWidth > 0 || n.offsetHeight > 0 || n === document.activeElement);
}

export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, active: boolean, onClose?: () => void) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    const previouslyFocused = typeof document !== 'undefined' ? (document.activeElement as HTMLElement | null) : null;

    // focus first focusable element or container
    const focusable = getFocusableElements(container);
    if (focusable.length > 0) focusable[0].focus();
    else if (container) container.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose?.();
        return;
      }

      if (e.key !== 'Tab') return;
      const elements = getFocusableElements(container);
      if (elements.length === 0) {
        e.preventDefault();
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, [containerRef, active, onClose]);
}

export default useFocusTrap;
