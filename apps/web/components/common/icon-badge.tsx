import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

const iconBadgeVariants = cva('flex items-center justify-center rounded-full transition-all', {
  variants: {
    variant: {
      gradient:
        'bg-linear-to-br from-primary to-accent text-foreground dark:text-primary-foreground hover:brightness-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-strong hover:shadow-accent-strong',
      solid:
        'bg-primary text-foreground dark:text-primary-foreground hover:brightness-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-strong',
      outline:
        'border-2 border-[hsl(var(--border)/1)] text-[hsl(var(--muted-foreground)/1)] hover:bg-[hsl(var(--card)/0.05)] hover:-translate-y-0.5',
      light:
        'bg-[hsl(var(--card)/0.5)] dark:bg-[hsl(var(--card)/0.3)] text-[hsl(var(--muted-foreground)/1)] hover:brightness-105 hover:-translate-y-0.5',
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
});

export interface IconBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBadgeVariants> {
  icon: LucideIcon;
  iconSize?: number;
}

export const IconBadge = React.forwardRef<HTMLDivElement, IconBadgeProps>(
  ({ className, variant, size, hover, icon: Icon, iconSize = 20, ...props }, ref) => {
    return (
      <div
        className={cn(iconBadgeVariants({ variant, size, hover }), className)}
        ref={ref}
        {...props}
      >
        <Icon size={iconSize} />
      </div>
    );
  },
);

IconBadge.displayName = 'IconBadge';
