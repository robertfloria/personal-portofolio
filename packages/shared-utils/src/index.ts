import { ValidationError, ValidationResult } from '@portfolio/shared-types';

/**
 * Email validation utility
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * String length validation
 */
export function validateLength(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max;
}

/**
 * Contact form validation
 */
export function validateContactForm(data: {
  name: string;
  from: string;
  subject: string;
  message: string;
}): ValidationResult {
  const errors: ValidationError[] = [];

  if (!validateLength(data.name, 3, 50)) {
    errors.push({
      field: 'name',
      message: 'Name must be between 3 and 50 characters',
    });
  }

  if (!validateEmail(data.from)) {
    errors.push({
      field: 'from',
      message: 'Invalid email address',
    });
  }

  if (!validateLength(data.subject, 3, 100)) {
    errors.push({
      field: 'subject',
      message: 'Subject must be between 3 and 100 characters',
    });
  }

  if (!validateLength(data.message, 10, 1000)) {
    errors.push({
      field: 'message',
      message: 'Message must be between 10 and 1000 characters',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitize HTML string to prevent XSS
 */
export function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Format date to readable string
 */
export function formatDate(date: string): string {
  if (date.toLowerCase() === 'present' || date.toLowerCase() === 'today') {
    return 'Present';
  }
  return date;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Calculate age from birth year
 */
export function calculateAge(birthYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

/**
 * Generate unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Sleep utility for async operations
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if code is running on client side
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Check if code is running on server side
 */
export function isServer(): boolean {
  return typeof window === 'undefined';
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
