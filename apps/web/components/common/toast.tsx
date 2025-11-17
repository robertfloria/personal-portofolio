'use client';

import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  useNotifications,
  type NotificationItem,
} from '@/components/contexts/notification-context';
import { type NotificationType } from '@/components/contexts/notification-context';

const toastConfig = {
  success: {
    icon: CheckCircle,
    bgClass: 'bg-[hsl(var(--foreground)/0.8)] border-[hsl(var(--border)/1)]',
    textClass: 'text-muted-foreground',
    iconClass: 'text-primary',
  },
  error: {
    icon: XCircle,
    bgClass: 'bg-[hsl(var(--foreground)/0.6)] border-[hsl(var(--destructive)/1)]',
    textClass: 'text-destructive',
    iconClass: 'text-destructive',
  },
  warning: {
    icon: AlertCircle,
    bgClass: 'bg-[hsl(var(--foreground)/0.6)] border-[hsl(var(--border)/1)]',
    textClass: 'text-muted-foreground',
    iconClass: 'text-primary',
  },
  info: {
    icon: Info,
    bgClass: 'bg-[hsl(var(--foreground)/0.8)] border-[hsl(var(--border)/1)]',
    textClass: 'text-muted-foreground',
    iconClass: 'text-primary',
  },
};

interface ToastProps {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ id, type, message, duration = 5000, onClose }) => {
  const config = toastConfig[type];
  const Icon = config.icon;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-xl border',
        'animate-in slide-in-from-right-full duration-300',
        'max-w-md w-full',
        config.bgClass,
      )}
      role="alert"
    >
      <Icon className={cn('w-5 h-5 mt-0.5 shrink-0', config.iconClass)} />
      <p className={cn('flex-1 text-sm font-medium', config.textClass)}>{message}</p>
      <button
        onClick={() => onClose(id)}
        className={cn(
          'shrink-0 rounded-md p-1 hover:bg-[hsl(var(--overlay)/0.1)] dark:hover:bg-[hsl(var(--overlay)/0.1)] transition-colors',
          config.textClass,
        )}
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};


Toast.displayName = 'Toast';
export default Toast;

// Toast Container Component
export const ToastContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  const handleClose = (id: string) => {
    removeNotification(id);
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed top-4 right-4 z-50 flex flex-col gap-3 pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex flex-col gap-3 pointer-events-auto">
        {notifications.map((notification: NotificationItem) => (
          <Toast
            key={notification.id}
            id={notification.id}
            type={notification.type}
            message={notification.message}
            duration={notification.duration}
            onClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
};

ToastContainer.displayName = 'ToastContainer';
