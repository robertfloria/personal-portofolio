import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import { Heading, Text } from './typography';

interface SectionRootProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  fullHeight?: boolean;
}

const SectionRoot = React.forwardRef<HTMLElement, SectionRootProps>(
  ({ className, id, fullHeight, children, ...props }, ref) => {
    return (
      <section
        id={id}
        className={cn(
          fullHeight && 'min-h-screen flex items-center justify-center gap-5',
          'flex flex-col gap-10',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  },
);

SectionRoot.displayName = 'Section.Root';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  // Legacy API support
  title?: string;
  subtitle?: string;
  highlightText?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, animated = true, title, subtitle, highlightText, children, ...props }, ref) => {
    // If using legacy API (with title prop), render old structure
    if (title) {
      const legacyContent = (
        <div ref={ref} className={cn('text-center', className)} {...props}>
          <Heading variant="h2" className="mb-4">
            {title}{' '}
            {highlightText && (
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                {highlightText}
              </span>
            )}
          </Heading>
          {subtitle && (
            <Text variant="lead" className="max-w-2xl mx-auto mb-4">
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
            transition={{ duration: ANIMATION_DURATIONS.NORMAL }}
          >
            {legacyContent}
          </motion.div>
        );
      }

      return legacyContent;
    }

    // New compound component API
    const content = (
      <div ref={ref} className={cn('text-center mb-4', className)} {...props}>
        {children}
      </div>
    );

    if (animated) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_DURATIONS.NORMAL }}
        >
          {content}
        </motion.div>
      );
    }

    return content;
  },
);

SectionHeader.displayName = 'Section.Header';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  highlightText?: string;
}

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, highlightText, children, ...props }, ref) => (
    <div ref={ref} {...props}>
      <Heading variant="h2" className={cn('mb-4', className)}>
        {children}{' '}
        {highlightText && (
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </Heading>
    </div>
  ),
);

SectionTitle.displayName = 'Section.Title';

const SectionSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <Text ref={ref} variant="lead" className={cn('max-w-2xl mx-auto', className)} {...props}>
    {children}
  </Text>
));

SectionSubtitle.displayName = 'Section.Subtitle';

const SectionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('', className)} {...props} />,
);

SectionContent.displayName = 'Section.Content';

// Compound Component Pattern
export const Section = Object.assign(SectionRoot, {
  Root: SectionRoot,
  Header: SectionHeader,
  Title: SectionTitle,
  Subtitle: SectionSubtitle,
  Content: SectionContent,
});

// Export individual components
export { SectionHeader, SectionTitle, SectionSubtitle, SectionContent };
