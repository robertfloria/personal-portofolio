import { ValidationResult } from '@portfolio/shared-types';
/**
 * Email validation utility
 */
export declare function validateEmail(email: string): boolean;
/**
 * String length validation
 */
export declare function validateLength(value: string, min: number, max: number): boolean;
/**
 * Contact form validation
 */
export declare function validateContactForm(data: {
    name: string;
    from: string;
    subject: string;
    message: string;
}): ValidationResult;
/**
 * Sanitize HTML string to prevent XSS
 */
export declare function sanitizeHtml(input: string): string;
/**
 * Format date to readable string
 */
export declare function formatDate(date: string): string;
/**
 * Debounce function for performance optimization
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle function for performance optimization
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Calculate age from birth year
 */
export declare function calculateAge(birthYear: number): number;
/**
 * Truncate text with ellipsis
 */
export declare function truncateText(text: string, maxLength: number): string;
/**
 * Generate unique ID
 */
export declare function generateId(): string;
/**
 * Sleep utility for async operations
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * Check if code is running on client side
 */
export declare function isClient(): boolean;
/**
 * Check if code is running on server side
 */
export declare function isServer(): boolean;
/**
 * Get initials from name
 */
export declare function getInitials(name: string): string;
//# sourceMappingURL=index.d.ts.map