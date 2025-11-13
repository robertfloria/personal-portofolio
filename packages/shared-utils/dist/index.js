"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = validateEmail;
exports.validateLength = validateLength;
exports.validateContactForm = validateContactForm;
exports.sanitizeHtml = sanitizeHtml;
exports.formatDate = formatDate;
exports.debounce = debounce;
exports.throttle = throttle;
exports.calculateAge = calculateAge;
exports.truncateText = truncateText;
exports.generateId = generateId;
exports.sleep = sleep;
exports.isClient = isClient;
exports.isServer = isServer;
exports.getInitials = getInitials;
/**
 * Email validation utility
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/**
 * String length validation
 */
function validateLength(value, min, max) {
    return value.length >= min && value.length <= max;
}
/**
 * Contact form validation
 */
function validateContactForm(data) {
    const errors = [];
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
function sanitizeHtml(input) {
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
function formatDate(date) {
    if (date.toLowerCase() === 'present' || date.toLowerCase() === 'today') {
        return 'Present';
    }
    return date;
}
/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
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
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
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
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
/**
 * Truncate text with ellipsis
 */
function truncateText(text, maxLength) {
    if (text.length <= maxLength)
        return text;
    return text.substring(0, maxLength - 3) + '...';
}
/**
 * Generate unique ID
 */
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
/**
 * Sleep utility for async operations
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Check if code is running on client side
 */
function isClient() {
    return typeof window !== 'undefined';
}
/**
 * Check if code is running on server side
 */
function isServer() {
    return typeof window === 'undefined';
}
/**
 * Get initials from name
 */
function getInitials(name) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}
