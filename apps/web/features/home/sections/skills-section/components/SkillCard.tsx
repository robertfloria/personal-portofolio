import React from 'react';
import { Card, Heading, Text, Badge } from '@/components/common';
import { motion } from 'framer-motion';
import { IconBadge } from '@/components/common';
import { Skill } from '../types/skill';

interface SkillCardProps {
  skill: Skill;
  animated?: boolean;
  animationDelay?: number;
  shouldReduceMotion?: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  animated,
  animationDelay,
  shouldReduceMotion,
}) => (
  <Card
    key={skill.name}
    animated={animated}
    animationDelay={animationDelay}
    hover="glow"
    className="group p-3 sm:p-4 md:p-6"
    variant={'glass'}
  >
    <Card.Content>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
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
              duration: shouldReduceMotion ? 0 : 1.2,
              delay: animationDelay,
              ease: 'easeOut',
            }}
          />
        </div>
      </div>
    </Card.Content>
  </Card>
);
