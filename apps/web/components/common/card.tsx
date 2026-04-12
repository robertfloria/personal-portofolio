/**
 * Card component (Compound)
 *
 * Renders a stylized card with configurable variant, hover effect, padding, and optional animation.
 * - Uses class-variance-authority for style variants.
 * - Variants: default, glass.
 * - Hover effects: lift, glow, scale, none.
 * - Padding: none, sm, md, lg.
 * - Supports animated entrance using framer-motion.
 * - Compound pattern: Card.Root, Card.Header, Card.Title, Card.Description, Card.Content, Card.Footer.
 *
 * @example
 * <Card.Root variant="glass" hover="glow" animated>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *     <Card.Description>Description</Card.Description>
 *   </Card.Header>
 *   <Card.Content>Content</Card.Content>
 *   <Card.Footer>Footer</Card.Footer>
 * </Card.Root>
 */
import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ANIMATION_DURATIONS } from '@/lib/constants';

const cardVariants = cva(
  'rounded-2xl border',
  {
    variants: {
      variant: {
        default:
          'bg-card border-border/70 shadow-sm dark:shadow-none',
        glass:
          'glass-strong border-[hsl(var(--border)/0.55)]',
      },
      hover: {
        lift: 'hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_hsl(var(--primary)/0.22)] hover:border-[hsl(var(--primary)/0.35)]',
        glow:
          'hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_hsl(var(--primary)/0.28)] hover:border-[hsl(var(--primary)/0.45)]',
        scale: 'hover:scale-[1.01]',
        none: '',
      },
      padding: {
        none: 'p-0',
        sm: 'p-card',
        md: 'p-card-md',
        lg: 'p-card-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: 'lift',
      padding: 'md',
    },
  },
);

export interface CardRootProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>, VariantProps<typeof cardVariants> {
  animated?: boolean;
  animationDelay?: number;
  children?: React.ReactNode;
}

const CardRoot = React.forwardRef<HTMLDivElement, CardRootProps>(
  (
    { className, variant, hover, padding, animated = true, animationDelay = 0, children, ...props },
    ref,
  ) => {
    if (animated) {
      return (
        <motion.div
          className={cn(cardVariants({ variant, hover, padding }), className)}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: animationDelay, duration: ANIMATION_DURATIONS.SLOW }}
          {...(props as HTMLMotionProps<'div'>)}
        >
          {children as React.ReactNode}
        </motion.div>
      );
    }

    return (
      <div
        className={cn(cardVariants({ variant, hover, padding }), className)}
        ref={ref}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  },
);

CardRoot.displayName = 'Card.Root';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  ),
);
CardHeader.displayName = 'Card.Header';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-xl font-bold text-foreground', className)} {...props} />
  ),
);
CardTitle.displayName = 'Card.Title';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'Card.Description';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('', className)} {...props} />,
);
CardContent.displayName = 'Card.Content';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center pt-4', className)} {...props} />
  ),
);
CardFooter.displayName = 'Card.Footer';

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
