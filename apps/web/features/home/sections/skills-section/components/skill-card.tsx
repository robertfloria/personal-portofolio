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
  const Icon = skill.iconKey ? getIcon(skill.iconKey) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: animationDelay, ease: 'easeOut' }}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-xl',
        'border border-border dark:border-card bg-card/60 dark:bg-card/40',
        'text-sm font-medium text-foreground',
        'hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5',
        'cursor-default',
      )}
    >
      {Icon && <Icon size={15} className="text-primary shrink-0" />}
      <span>{skill.name}</span>
    </motion.div>
  );
};

export const SkillCard = React.memo(SkillCardComponent);
