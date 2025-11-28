import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold', {
  variants: {
    variant: {
      h1: 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl',
      h2: 'text-2xl sm:text-3xl lg:text-4xl',
      h3: 'text-xl sm:text-2xl lg:text-3xl',
      h4: 'text-lg sm:text-xl',
      h5: 'text-base sm:text-lg',
      h6: 'text-sm sm:text-base',
    },
    gradient: {
      true: 'bg-linear-to-r from-primary to-accent bg-clip-text text-transparent',
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

/**
 * Heading component
 *
 * Renders semantic headings (h1-h6) with style variants and optional gradient text.
 *
 * @example
 * <Heading variant="h1" gradient>Title</Heading>
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, gradient, as, children, ...props }, ref) => {
    const Component = as || variant || 'h2';

    return (
      <Component
        className={cn(headingVariants({ variant, gradient }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  },
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

/**
 * Text component
 *
 * Renders styled paragraph text with body, lead, small, muted, and label variants.
 *
 * @example
 * <Text variant="lead">Lead paragraph</Text>
 */
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <p className={cn(textVariants({ variant }), className)} ref={ref} {...props}>
        {children}
      </p>
    );
  },
);

Text.displayName = 'Text';

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
}

/**
 * GradientText component
 *
 * Renders text with a customizable linear gradient.
 *
 * @example
 * <GradientText from="from-primary" to="to-accent">Gradient</GradientText>
 */
export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, from = 'from-primary', to = 'to-accent', children, ...props }, ref) => {
    return (
      <span
        className={cn(`bg-linear-to-r ${from} ${to} bg-clip-text text-transparent`, className)}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  },
);

GradientText.displayName = 'GradientText';
