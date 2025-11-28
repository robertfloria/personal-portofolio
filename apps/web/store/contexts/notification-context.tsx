'use client';

/**
 * NotificationContext & NotificationProvider
 *
 * Provides global notification state and actions via React context.
 * - Supports success, error, warning, and info notifications.
 * - addNotification: Adds a notification with auto-generated ID and duration.
 * - removeNotification: Removes notification by ID.
 * - clearAll: Clears all notifications.
 * - useNotifications: Custom hook to access notification context.
 * - Must be used within NotificationProvider.
 *
 * @example
 * const { addNotification } = useNotifications();
 * addNotification({ type: 'success', message: 'Saved!' });
 */

import React from 'react';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import type { NotificationItem } from '@/types';

interface NotificationContextValue {
  notifications: NotificationItem[];
  addNotification: (n: Omit<NotificationItem, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = React.createContext<NotificationContextValue | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = React.useState<NotificationItem[]>([]);

  const addNotification = React.useCallback((n: Omit<NotificationItem, 'id'>) => {
    const id =
      typeof crypto !== 'undefined' && typeof (crypto as Crypto).randomUUID === 'function'
        ? (crypto as Crypto).randomUUID()
        : Date.now().toString();

    const item: NotificationItem = {
      id,
      ...n,
      duration: n.duration ?? ANIMATION_DURATIONS.NOTIFICATION,
    };
    setNotifications((prev) => [...prev, item]);
  }, []);

  const removeNotification = React.useCallback((id: string) => {
    setNotifications((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clearAll = React.useCallback(() => setNotifications([]), []);

  const value = React.useMemo(
    () => ({ notifications, addNotification, removeNotification, clearAll }),
    [notifications, addNotification, removeNotification, clearAll],
  );

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};

/**
 * useNotifications
 *
 * Custom hook to access notification context.
 * Must be used within NotificationProvider.
 *
 * @throws {Error} If used outside of NotificationProvider.
 * @returns {NotificationContextValue} Notification context value.
 */
export function useNotifications() {
  const ctx = React.useContext(NotificationContext);
  if (!ctx) throw new Error('useNotifications must be used within NotificationProvider');
  return ctx;
}

export default NotificationContext;
