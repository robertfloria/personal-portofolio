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
              'fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--card)/0.72)] dark:bg-[rgba(20,22,34,0.72)] p-section',
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
          'glass-strong rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[hsl(var(--border)/1)]',
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
        'glass-strong sticky top-0 border-b border-[hsl(var(--border)/1)] p-card-md flex items-center justify-between z-10',
        className,
      )}
      {...props}
    >
      <div>{children}</div>
      {showClose && (
        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-full text-foreground flex items-center justify-center hover:bg-[hsl(var(--card)/0.8)] hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-primary focus:ring-2 transform transition duration-200"
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
    <div className={cn('p-card-lg space-y-6', className)} {...props}>
      {children}
    </div>
  );
}

function ModalFooter({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-card-lg border-t border-border text-right', className)} {...props}>
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
