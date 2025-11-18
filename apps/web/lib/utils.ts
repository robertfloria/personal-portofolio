import * as Icons from 'lucide-react';

// Utility to safely get a valid Lucide icon component
export function getLucideIconComponent(key: string): React.ComponentType<{ className?: string }> {
  const Icon = Icons[key as keyof typeof Icons];
  if (typeof Icon === 'function') {
    return Icon as React.ComponentType<{ className?: string }>;
  }
  return Icons.Code;
}
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
