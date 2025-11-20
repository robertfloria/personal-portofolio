'use client';

import React from 'react';
import type { Skill } from '@/types';
import { skills } from '@/lib/data';
import { useReducedMotion } from '@/hooks';
import { Section, Card, Heading, Text, Badge } from '@/components/common';
import { motion } from 'framer-motion';
import { IconBadge } from '@/components/common';

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
    <Section id="skills" className="p-4 md:p-6 lg:p-8">
      <Section.Header animated={!shouldReduceMotion}>
        <div className="text-center mx-auto">
          <Section.Title highlightText="Expertise">Skills &</Section.Title>
          <Section.Subtitle>
            Technologies and tools I use to build modern web applications
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="flex flex-col gap-12">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="flex flex-col gap-6">
            <Heading variant="h3" className="flex justify-center md:justify-start">
              {categories[category as keyof typeof categories]}
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {categorySkills.map((skill: Skill, index) => (
                <Card
                  key={skill.name}
                  animated={!shouldReduceMotion}
                  animationDelay={index * 0.05}
                  hover="glow"
                  className="group p-3 sm:p-4 md:p-6"
                  variant={'glass'}
                >
                  <Card.Content>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        {skill.iconKey && (
                          <IconBadge iconKey={skill.iconKey} className="w-12 h-12 group-hover:scale-110 transition-transform" />
                        )}
                        <div className="flex-1">
                          <Heading
                            variant="h4"
                            className="text-base sm:text-lg md:text-xl text-foreground"
                          >
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
