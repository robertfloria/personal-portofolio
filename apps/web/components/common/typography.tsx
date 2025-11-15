import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold', {
  variants: {
    variant: {
      h1: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
      h2: 'text-4xl sm:text-5xl',
      h3: 'text-2xl sm:text-3xl',
      h4: 'text-xl sm:text-2xl',
      h5: 'text-lg sm:text-xl',
      h6: 'text-base sm:text-lg',
    },
    gradient: {
      true: 'bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
        false: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'h2',
    gradient: false,
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, gradient, as, children, ...props }, ref) => {
    const Component = as || variant || 'h2';

    return (
      <Component
        className={cn(headingVariants({ variant, gradient, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

const textVariants = cva('', {
  variants: {
    variant: {
      body: 'text-base text-muted-foreground',
      lead: 'text-lg text-muted-foreground',
      small: 'text-sm text-muted-foreground',
      muted: 'text-sm text-muted-foreground',
      label: 'text-sm font-medium text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, from = 'from-blue-600', to = 'to-purple-600', children, ...props }, ref) => {
    return (
      <span
        className={cn(`bg-linear-to-r ${from} ${to} bg-clip-text text-transparent`, className)}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';
