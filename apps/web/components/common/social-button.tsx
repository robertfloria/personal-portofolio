import React from 'react';

type SocialButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ElementType;
  size?: number;
  variant?: 'default' | 'ghost' | 'brand' | 'outline';
};

export function SocialButton({ icon: Icon, size = 20, variant = 'default', className = '', ...props }: SocialButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full transition-colors';

  const variants: Record<string, string> = {
    default: 'bg-card dark:bg-card text-foreground dark:text-muted-foreground hover:brightness-105 hover:bg-card/50',
    ghost: 'bg-transparent text-muted-foreground hover:text-primary',
    brand: 'bg-linear-to-r from-primary to-accent text-foreground dark:text-primary-foreground hover:opacity-90',
    outline: 'border-2 border-border text-foreground hover:bg-card/5 dark:hover:bg-card/80 hover:-translate-y-0.5 transition-all',
  };

  return (
    <a {...props} className={`${base} ${variants[variant]} ${className}`.trim()}>
      <Icon size={size} />
    </a>
  );
}

export default SocialButton;
