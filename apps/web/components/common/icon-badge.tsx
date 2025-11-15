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
          'bg-linear-to-br from-blue-500 to-purple-600 text-white',
        solid: 'bg-blue-600 text-white',
        outline:
          'border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400',
        light:
          'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
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
