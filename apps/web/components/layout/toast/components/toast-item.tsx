import React from 'react';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { NotificationType } from '@/types/notification';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}
const toastConfig = {
  success: {
    icon: CheckCircle,
    bgClass: 'glass-ultra',
    textClass: 'text-muted-foreground',
    iconClass: 'text-primary',
  },
  error: {
    icon: XCircle,
    bgClass: 'glass-ultra',
    textClass: 'text-destructive',
    iconClass: 'text-destructive',
  },
  warning: {
    icon: AlertCircle,
    bgClass: 'glass-ultra',
    textClass: 'text-muted-foreground',
    iconClass: 'text-primary',
  },
  info: {
    icon: Info,
    bgClass: 'glass-ultra',
    textClass: 'text-muted-foreground',
    iconClass: 'text-primary',
  },
};

const ToastItemComponent: React.FC<ToastProps> = ({
  id,
  type,
  message,
  duration = ANIMATION_DURATIONS.TOAST,
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
        'flex items-start gap-content p-card-md rounded-xl border',
        'animate-in fade-in-up duration-300',
        'max-w-md w-auto',
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

export const ToastItem = React.memo(ToastItemComponent);

ToastItem.displayName = 'ToastItem';
