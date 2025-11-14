'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { removeNotification, type Notification } from '@/store/slices/notification.slice';
import { Toast } from './toast';

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
