'use client';

import React from 'react';
import type { Skill } from '@/types';
import { skills } from '@/lib/data';
import { useReducedMotion } from '@/hooks';
import { Section, Card, Heading, Text, Badge } from '@/components/common';
import { motion } from 'framer-motion';
import { getLucideIconComponent } from '@/lib/utils';

const categories = {
  Frontend: 'Frontend Development',
  Backend: 'Backend Development',
  DevOps: 'DevOps & Cloud',
  AI: 'AI & Integration',
  Tools: 'Tools & Productivity',
};

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  const groupedSkills = {
    Frontend: skills.filter((s) => s.category === 'Frontend'),
    Backend: skills.filter((s) => s.category === 'Backend'),
    DevOps: skills.filter((s) => s.category === 'DevOps'),
    AI: skills.filter((s) => s.category === 'AI'),
    Tools: skills.filter((s) => s.category === 'Tools'),
  };

  return (
    <Section id="skills">
      <Section.Header animated={!shouldReduceMotion}>
        <Section.Title highlightText="Expertise">Skills &</Section.Title>
        <Section.Subtitle>
          Technologies and tools I use to build modern web applications
        </Section.Subtitle>
      </Section.Header>

      <div className="flex flex-col gap-12">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="flex flex-col gap-6">
            <Heading variant="h3">{categories[category as keyof typeof categories]}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorySkills.map((skill: Skill, index) => (
                <Card
                  key={skill.name}
                  animated={!shouldReduceMotion}
                  animationDelay={index * 0.05}
                  hover="glow"
                  padding="md"
                  className="group"
                  variant={'glass'}
                >
                  <Card.Content>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        {skill.iconKey && (
                          <div className="relative w-12 h-12 rounded-lg bg-linear-to-br from-secondary to-primary dark:from-secondary dark:to-primary border border-border p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {(() => {
                              const IconComponent = getLucideIconComponent(skill.iconKey ?? '');
                              return <IconComponent className="w-8 h-8 text-foreground" />;
                            })()}
                          </div>
                        )}
                        <div className="flex-1">
                          <Heading variant="h4" className="text-lg text-foreground">
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
                            delay: index * 0.05,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
