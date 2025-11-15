import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
        secondary:
          'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
        success:
          'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
        warning:
          'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
        danger:
          'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
        gradient:
          'bg-linear-to-r from-blue-600 to-purple-600 text-white',
        outline:
          'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <span
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
