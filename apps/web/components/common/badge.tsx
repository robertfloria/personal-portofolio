import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-secondary/60 dark:bg-secondary/30 text-muted-foreground',
        secondary:
          'bg-accent/60 dark:bg-accent/30 text-muted-foreground',
        success:
          'bg-linear-to-r from-primary to-accent text-primary-foreground',
        warning:
          'bg-overlay text-muted-foreground',
        danger:
          'bg-linear-to-r from-accent to-primary text-primary-foreground',
        gradient:
          'bg-linear-to-r from-primary to-accent text-primary-foreground',
        outline:
          'border-2 border-border text-muted-foreground',
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
