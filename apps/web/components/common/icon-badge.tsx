import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

const iconBadgeVariants = cva(
  'flex items-center justify-center rounded-full transition-transform',
  {
    variants: {
      variant: {
        gradient:
          'bg-linear-to-br from-primary to-accent text-primary-foreground',
        solid: 'bg-primary text-primary-foreground',
        outline:
          'border-2 border-border text-muted-foreground',
        light:
          'bg-card/50 dark:bg-card/30 text-muted-foreground',
      },
      size: {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20',
      },
      hover: {
        scale: 'hover:scale-110',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'gradient',
      size: 'md',
      hover: 'scale',
    },
  }
);

export interface IconBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBadgeVariants> {
  icon: LucideIcon;
  iconSize?: number;
}

export const IconBadge = React.forwardRef<HTMLDivElement, IconBadgeProps>(
  (
    {
      className,
      variant,
      size,
      hover,
      icon: Icon,
      iconSize = 20,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(iconBadgeVariants({ variant, size, hover, className }))}
        ref={ref}
        {...props}
      >
        <Icon size={iconSize} />
      </div>
    );
  }
);

IconBadge.displayName = 'IconBadge';
