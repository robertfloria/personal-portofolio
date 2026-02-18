/**
 * DownloadCvButton component
 *
 * Renders a link styled as a button that downloads the CV PDF from a static path.
 *
 * @example
 * <DownloadCvButton />
 */
import React from 'react';
import { cn } from '@/lib/utils';
import { DownloadIcon } from 'lucide-react';

const CV_STATIC_PATH = '/cv/robert-floria-cv.pdf';

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export interface DownloadCvButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  textVariant?: 'default' | 'short';
}

export const DownloadCvButton: React.FC<DownloadCvButtonProps> = ({
  className,
  size = 'lg',
  textVariant = 'default',
}) => {
  return (
    <a
      href={CV_STATIC_PATH}
      download="robert-floria-cv.pdf"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all',
        'border-2 border-border dark:border-card text-foreground',
        'hover:bg-[hsl(var(--card)/0.05)] dark:hover:bg-[hsl(var(--card)/0.8)] hover:-translate-y-0.5',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        sizeClasses[size],
        className,
      )}
    >
      <DownloadIcon size={textVariant === 'default' ? 20 : 15} />
      {textVariant === 'default' ? 'Download CV' : 'CV'}
    </a>
  );
};
