type ModalContextType = {
  onClose: () => void;
};

const ModalContext = React.createContext<ModalContextType | null>(null);
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';


export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

function ModalBase({ isOpen, onClose, children, className }: ModalProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // focus management and escape handler
  React.useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const container = containerRef.current;
    // find focusable elements inside the modal
    const getFocusable = () => {
      if (!container) return [] as HTMLElement[];
      const nodes = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      return Array.from(nodes).filter((n) => n.offsetParent !== null);
    };

    // focus the first focusable element or the container
    const focusable = getFocusable();
    if (focusable.length > 0) {
      focusable[0].focus();
    } else if (container) {
      container.focus();
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = getFocusable();
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const idx = focusable.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          // move backwards
          if (idx === 0 || document.activeElement === container) {
            focusable[focusable.length - 1].focus();
            e.preventDefault();
          }
        } else {
          // move forwards
          if (idx === focusable.length - 1) {
            focusable[0].focus();
            e.preventDefault();
          }
        }
      }
    }

    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      // restore previous focus
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContext.Provider value={{ onClose }}>
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              'fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--card)/0.72)] dark:bg-[rgba(20,22,34,0.72)] p-4',
              className,
            )}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {children}
          </motion.div>
        </ModalContext.Provider>
      )}
    </AnimatePresence>
  );
}

export const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof motion.div>
>(({ children, className, ...props }, ref) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.16 }}
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        'bg-[hsl(var(--card)/1)] rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[hsl(var(--border)/1)]',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
});

ModalContent.displayName = 'Modal.Content';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showClose?: boolean;
  onClose?: () => void;
}

export function ModalHeader({
  children,
  className = '',
  showClose = false,
  onClose,
  ...props
}: ModalHeaderProps) {
  const ctx = React.useContext(ModalContext);
  const handleClose = onClose ?? ctx?.onClose;
  return (
    <div
      className={cn(
        'sticky top-0 bg-[hsl(var(--card)/1)] border-b border-[hsl(var(--border)/1)] p-6 flex items-center justify-between z-10',
        className,
      )}
      {...props}
    >
      <div>{children}</div>
      {showClose && (
        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-full bg-[hsl(var(--card)/0.9)] text-foreground flex items-center justify-center hover:bg-[hsl(var(--card)/0.8)] hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-primary focus:ring-2 transform transition duration-200"
          aria-label="Close modal"
        >
          {/* Use Lucide X icon if available in this file, otherwise user must pass it in children */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function ModalBody({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 space-y-6', className)} {...props}>
      {children}
    </div>
  );
}

export function ModalFooter({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 border-t border-border text-right', className)} {...props}>
      {children}
    </div>
  );
}


export const Modal = Object.assign(ModalBase, {
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
