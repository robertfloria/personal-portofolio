/**
 * SocialButton component
 *
 * Renders a stylized anchor button for social links with an icon.
 * - Supports default, ghost, brand, and outline variants.
 * - Accepts icon component, size, and custom className.
 * - Inherits anchor props for href, target, etc.
 *
 * @example
 * <SocialButton icon={FaGithub} href="https://github.com" variant="brand" />
 */
import React from 'react';

export type SocialButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ElementType;
  size?: number;
  variant?: 'default' | 'ghost' | 'brand' | 'outline';
};

export function SocialButton({
  icon: Icon,
  size = 20,
  variant = 'default',
  className = '',
  ...props
}: SocialButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full transition-colors p-4';

  const variants: Record<string, string> = {
    default:
      'bg-[hsl(var(--card)/1)] dark:bg-[hsl(var(--card)/1)] text-foreground dark:text-muted-foreground hover:brightness-105 hover:bg-[hsl(var(--card)/0.5)]',
    ghost: 'bg-transparent text-muted-foreground hover:text-primary',
    brand:
      'bg-linear-to-r from-primary to-accent text-foreground dark:text-primary-foreground hover:opacity-90',
    outline:
      'border-2 border-border text-foreground hover:bg-[hsl(var(--card)/0.05)] dark:hover:bg-[hsl(var(--card)/0.8)] hover:-translate-y-0.5 transition-all',
  };

  return (
    <a {...props} className={`${base} ${variants[variant]} ${className}`.trim()}>
      <Icon size={size} />
    </a>
  );
}
