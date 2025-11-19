import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-linear-to-r from-primary to-accent text-primary-foreground hover:brightness-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-strong hover:shadow-accent-strong',
        secondary:
          'border-2 border-border text-foreground hover:border-[hsl(var(--border)/0.8)] hover:bg-[hsl(var(--card)/0.05)] hover:-translate-y-0.5',
        outline:
          'border-2 border-border dark:border-card text-foreground hover:bg-[hsl(var(--card)/0.05)] dark:hover:bg-[hsl(var(--card)/0.8)] hover:-translate-y-0.5',
        ghost:
          'text-foreground hover:bg-[hsl(var(--card)/0.05)] dark:hover:bg-[hsl(var(--card)/0.8)] hover:-translate-y-0.5',
        link: 'text-primary dark:text-primary-foreground underline-offset-4 hover:underline',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {!isLoading && leftIcon && leftIcon}
        {children}
        {!isLoading && rightIcon && rightIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';
