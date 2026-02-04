import React from 'react';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  'w-full border rounded-xl transition-all outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'border-[hsl(var(--border)/1)] bg-[hsl(var(--card)/1)] dark:bg-[hsl(var(--card)/1)] text-[hsl(var(--foreground)/1)]',
        error:
          'border-[hsl(var(--destructive)/1)] bg-[hsl(var(--card)/1)] dark:bg-[hsl(var(--card)/1)] text-[hsl(var(--foreground)/1)] focus:ring-[hsl(var(--destructive)/1)]',
      },
      inputSize: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-4 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  },
);

/**
 * Input component
 *
 * Renders a stylized input field with optional label, error message, and icons.
 * - Uses class-variance-authority for style variants.
 * - Variants: default, error.
 * - Sizes: sm, md, lg.
 * - Supports left/right icons, custom className, and error display.
 *
 * @example
 * <Input label="Email" leftIcon={<MailIcon />} error="Invalid email" />
 */

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, label, error, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const hasError = !!error;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-muted-foreground mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            className={cn(
              inputVariants({
                variant: hasError ? 'error' : variant,
                inputSize,
              }),
              className,
              leftIcon && 'pl-12',
              rightIcon && 'pr-12',
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-destructive dark:text-destructive">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

/**
 * Textarea component
 *
 * Renders a stylized textarea field with optional label and error message.
 * - Supports custom className and error display.
 *
 * @example
 * <Textarea label="Message" error="Required" />
 */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const hasError = !!error;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-muted-foreground mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 border rounded-xl transition-all outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed',
            hasError
              ? 'border-destructive dark:border-destructive focus:ring-destructive'
              : 'border-border',
            'bg-card text-foreground',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
