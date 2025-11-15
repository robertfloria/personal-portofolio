import React from 'react';

type SocialButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ElementType;
  size?: number;
  variant?: 'default' | 'ghost' | 'brand';
};

export function SocialButton({ icon: Icon, size = 20, variant = 'default', className = '', ...props }: SocialButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full transition-colors';

  const variants: Record<string, string> = {
    default: 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-blue-600 hover:text-white',
    ghost: 'bg-transparent text-gray-700 dark:text-gray-300 hover:text-blue-600',
    brand: 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:opacity-90',
  };

  return (
    <a {...props} className={`${base} ${variants[variant]} ${className}`.trim()}>
      <Icon size={size} />
    </a>
  );
}

export default SocialButton;
