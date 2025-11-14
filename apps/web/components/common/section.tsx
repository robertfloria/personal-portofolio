import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading, Text } from './typography';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  fullHeight?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, fullHeight, children, ...props }, ref) => {
    return (
      <section
        id={id}
        className={cn(
          'p-20 sm:px-6 lg:px-8',
          fullHeight && 'min-h-screen flex items-center justify-center',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlightText?: string;
  className?: string;
  animated?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  highlightText,
  className,
  animated = true,
}) => {
  const Content = (
    <div className={cn('text-center mb-16', className)}>
      <Heading variant="h2" className="mb-4">
        {title}{' '}
        {highlightText && (
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </Heading>
      {subtitle && (
        <Text variant="lead" className="max-w-2xl mx-auto">
          {subtitle}
        </Text>
      )}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {Content}
      </motion.div>
    );
  }

  return Content;
};
