'use client';

import React, { useCallback } from 'react';
import { useNotifications } from '@/store/contexts/notification-context';
import type { NotificationItem } from '@/types/notification';
import { ToastItem } from './components';

export const Toast: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  const handleClose = useCallback(
    (id: string) => {
      removeNotification(id);
    },
    [removeNotification],
  );

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none w-full"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex flex-col gap-component pointer-events-auto">
        {notifications.map((notification: NotificationItem) => (
          <ToastItem
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
