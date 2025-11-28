// use-lock-body-scroll.ts
import * as React from 'react';

/** Returns the width of the vertical scrollbar (if visible). */
function getScrollbarWidth() {
  if (typeof window === 'undefined') return 0;
  return window.innerWidth - document.documentElement.clientWidth;
}

/** Detects iOS devices (including iPadOS which reports as "Mac"). */
function isIOSDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const platform = (navigator.platform || '').toLowerCase();
  const isIOSUA = /iPad|iPhone|iPod/.test(ua);
  const isIPadOS = platform.includes('mac') && (navigator.maxTouchPoints || 0) > 1;
  return isIOSUA || isIPadOS;
}

/**
 * Locks body scroll while `locked` is true.
 * - Desktop/Android: overflow hidden + scrollbar compensation.
 * - iOS: position: fixed; top: -scrollY; width: 100%; (overflow hidden is unreliable).
 * - Restores styles and scroll position on cleanup.
 * - Sets overscroll-behavior on <html> to avoid chaining.
 */
export function useLockBodyScroll(locked: boolean) {
  React.useEffect(() => {
    if (!locked || typeof window === 'undefined') return;

    const body = document.body;
    const docEl = document.documentElement;

    const scrollY = window.scrollY || window.pageYOffset;

    // Reține stilurile existente ca să le poți restaura.
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const prevBodyPaddingRight = body.style.paddingRight;
    const prevHtmlOverscroll = docEl.style.overscrollBehavior;

    const scrollbarWidth = getScrollbarWidth();
    const hasVerticalScrollbar = scrollbarWidth > 0;

    // Evită layout shift atunci când dispare scrollbarul
    if (hasVerticalScrollbar) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const isIOS = isIOSDevice();

    if (isIOS) {
      // iOS fix: "îngheață" body-ul la poziția curentă
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    } else {
      body.style.overflow = 'hidden';
    }

    docEl.style.overscrollBehavior = 'contain';

    return () => {
      // Restore stiluri
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      body.style.paddingRight = prevBodyPaddingRight;
      docEl.style.overscrollBehavior = prevHtmlOverscroll;

      // Restore poziția scroll-ului pentru iOS
      if (isIOS) {
        const prevTop = parseInt(prevBodyTop || '0', 10);
        const y = prevTop ? -prevTop : scrollY;
        window.scrollTo(0, y);
      }
    };
  }, [locked]);
}
