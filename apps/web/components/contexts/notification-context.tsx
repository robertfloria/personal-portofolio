'use client';

import React from 'react';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

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
      typeof crypto !== 'undefined' && typeof (crypto as any).randomUUID === 'function'
        ? (crypto as any).randomUUID()
        : Date.now().toString();

    const item: NotificationItem = { id, ...n, duration: n.duration ?? 5000 };
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

export function useNotifications() {
  const ctx = React.useContext(NotificationContext);
  if (!ctx) throw new Error('useNotifications must be used within NotificationProvider');
  return ctx;
}

export default NotificationContext;
