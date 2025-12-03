import React from 'react';
import { Card, Heading, Text, Badge } from '@/components/common';
import { motion } from 'framer-motion';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import { IconBadge } from '@/components/common';
import { Skill } from '../types/skill';

interface SkillCardProps {
  skill: Skill;
  animated?: boolean;
  animationDelay?: number;
}

const SkillCardComponent: React.FC<SkillCardProps> = ({ skill, animationDelay }) => (
  <Card
    key={skill.name}
    animationDelay={animationDelay}
    hover="glow"
    className="group p-card sm:p-card-md md:p-card-lg"
    variant={'glass'}
  >
    <Card.Content>
      <div className="flex flex-col gap-content">
        <div className="flex items-center gap-content">
          {skill.iconKey && (
            <IconBadge
              iconKey={skill.iconKey}
              className="w-12 h-12 group-hover:scale-110 transition-transform"
            />
          )}
          <div className="flex-1">
            <Heading variant="h4" className="text-base sm:text-lg md:text-xl text-foreground">
              {skill.name}
            </Heading>
            {skill.yearsOfExperience && (
              <Text variant="small">{skill.yearsOfExperience}+ years</Text>
            )}
          </div>
          <Badge variant="primary" size="sm">
            {skill.proficiency}%
          </Badge>
        </div>
        <div className="w-full bg-[hsl(var(--card)/1)] rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-linear-to-r from-primary via-primary to-accent h-3 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{
              duration: ANIMATION_DURATIONS.SLOW,
              delay: animationDelay,
              ease: 'easeOut',
            }}
          />
        </div>
      </div>
    </Card.Content>
  </Card>
);

export const SkillCard = React.memo(SkillCardComponent);
