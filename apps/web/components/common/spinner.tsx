/**
 * Spinner component
 *
 * Renders a loading spinner animation.
 * - Accepts size and custom className for styling.
 * - Uses border and spin animation for visual feedback.
 * - Accessible with role="status" and aria-label.
 *
 * @example
 * <Spinner size={32} />
 */
import React from 'react';

export interface SpinnerProps {
  size?: number;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 48, className = '' }) => (
  <div
    className={`animate-spin rounded-full border-t-2 border-b-2 border-[hsl(var(--border))] ${className}`}
    style={{ width: size, height: size }}
    role="status"
    aria-label="Loading"
  />
);
