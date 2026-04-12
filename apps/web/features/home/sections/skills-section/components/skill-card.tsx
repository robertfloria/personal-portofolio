'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Skill } from '../types/skill';

function getIcon(key: string): LucideIcon {
  const Icon = Icons[key as keyof typeof Icons];
  return (Icon as LucideIcon) ?? Icons.Code;
}

interface SkillCardProps {
  skill: Skill;
  animationDelay?: number;
}

const SkillCardComponent: React.FC<SkillCardProps> = ({ skill, animationDelay = 0 }) => {
  const iconComponent = skill.iconKey ? getIcon(skill.iconKey) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: animationDelay, ease: 'easeOut' }}
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl',
        'border border-border/70 bg-card/70 dark:bg-card/50',
        'text-sm font-medium text-foreground/90',
        'hover:border-[hsl(var(--primary)/0.5)] hover:text-primary hover:bg-[hsl(var(--primary)/0.06)] hover:-translate-y-0.5',
        'duration-200 cursor-default',
      )}
    >
      {iconComponent && React.createElement(iconComponent, { size: 15, className: 'text-primary shrink-0' })}
      <span>{skill.name}</span>
    </motion.div>
  );
};

export const SkillCard = React.memo(SkillCardComponent);
