'use client';

import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppSelector, useAppDispatch } from '@/store';
import { removeNotification, type Notification, type NotificationType } from '@/store/slices/notification.slice';

const toastConfig = {
  success: {
    icon: CheckCircle,
    bgClass: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
    textClass: 'text-green-800 dark:text-green-300',
    iconClass: 'text-green-600 dark:text-green-400',
  },
  error: {
    icon: XCircle,
    bgClass: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800',
    textClass: 'text-red-800 dark:text-red-300',
    iconClass: 'text-red-600 dark:text-red-400',
  },
  warning: {
    icon: AlertCircle,
    bgClass: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800',
    textClass: 'text-yellow-800 dark:text-yellow-300',
    iconClass: 'text-yellow-600 dark:text-yellow-400',
  },
  info: {
    icon: Info,
    bgClass: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
    textClass: 'text-blue-800 dark:text-blue-300',
    iconClass: 'text-blue-600 dark:text-blue-400',
  },
};

interface ToastProps {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  message,
  duration = 5000,
  onClose,
}) => {
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
        'flex items-start gap-3 p-4 rounded-lg border shadow-lg',
        'animate-in slide-in-from-right-full duration-300',
        'max-w-md w-full',
        config.bgClass
      )}
      role="alert"
    >
      <Icon className={cn('w-5 h-5 mt-0.5 shrink-0', config.iconClass)} />
      <p className={cn('flex-1 text-sm font-medium', config.textClass)}>
        {message}
      </p>
      <button
        onClick={() => onClose(id)}
        className={cn(
          'shrink-0 rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors',
          config.textClass
        )}
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

Toast.displayName = 'Toast';

// Toast Container Component
export const ToastContainer: React.FC = () => {
  const notifications = useAppSelector((state) => state.notification.notifications);
  const dispatch = useAppDispatch();

  const handleClose = (id: string) => {
    dispatch(removeNotification(id));
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
        {notifications.map((notification: Notification) => (
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
