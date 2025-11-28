/**
 * Modal component (Compound)
 *
 * Renders an accessible modal dialog with focus trap, scroll blocking, and animation.
 * - Uses framer-motion for entrance/exit animations.
 * - Blocks background scroll when open.
 * - Traps focus within modal and restores on close.
 * - Closes on overlay click or Escape key.
 * - Compound pattern: Modal.Content, Modal.Header, Modal.Body, Modal.Footer.
 *
 * @example
 * <Modal isOpen={open} onClose={close}>
 *   <Modal.Content>
 *     <Modal.Header showClose>Title</Modal.Header>
 *     <Modal.Body>Body</Modal.Body>
 *     <Modal.Footer>Footer</Modal.Footer>
 *   </Modal.Content>
 * </Modal>
 */
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React from 'react';
import { useLockBodyScroll } from '@/hooks';
type ModalContextType = {
  onClose: () => void;
};

const ModalContext = React.createContext<ModalContextType | null>(null);

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

function ModalBase({ isOpen, onClose, children, className }: ModalProps) {
  useLockBodyScroll(isOpen);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const container = containerRef.current;

    const getFocusable = () => {
      if (!container) return [] as HTMLElement[];
      const nodes = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      return Array.from(nodes).filter((n) => n.offsetParent !== null);
    };

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
          if (idx === 0 || document.activeElement === container) {
            focusable[focusable.length - 1].focus();
            e.preventDefault();
          }
        } else {
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

const ModalContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div>>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: ANIMATION_DURATIONS.FAST }}
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
  },
);

ModalContent.displayName = 'Modal.Content';

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showClose?: boolean;
  onClose?: () => void;
}

function ModalHeader({
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
        'sticky top-0 bg-[hsl(var(--card)/1)] border-b border-[hsl(var(--border)/1)] p-4 flex items-center justify-between z-10',
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

function ModalBody({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 space-y-6', className)} {...props}>
      {children}
    </div>
  );
}

function ModalFooter({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
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
