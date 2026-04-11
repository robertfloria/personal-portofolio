import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import { IconBadge } from '@/components/common';

interface InfoCardProps {
  label: string;
  value: string;
  iconKey: string;
  animationDelay?: number;
}

export const InfoCard: React.FC<InfoCardProps> = ({ label, value, iconKey, animationDelay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: animationDelay, duration: ANIMATION_DURATIONS.SLOW }}
    className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-card/80 dark:bg-card/60 p-card hover:-translate-y-1 hover:border-[hsl(var(--primary)/0.35)] hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.18)] transition-all duration-300"
  >
    <IconBadge
      iconKey={iconKey}
      variant="solid"
      size="sm"
      className="group-hover:scale-110 transition-transform shrink-0"
    />
    <div>
      <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{value}</p>
    </div>
  </motion.div>
);
