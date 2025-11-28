'use client';

import React from 'react';
import { useGroupBy } from '@/hooks';
import { Section } from '@/components/common';
import { categories, skills } from './lib/data';
import { Skill } from './types/skill';
import { SkillCategorySection } from './components';

export function SkillsSection() {
  const groupedSkills = useGroupBy<Skill, 'category'>(skills, 'category');

  return (
    <Section id="skills" className="p-4 md:p-6 lg:p-8">
      <Section.Header>
        <div className="text-center mx-auto">
          <Section.Title highlightText="Expertise">Skills &</Section.Title>
          <Section.Subtitle>
            Technologies and tools I use to build modern web applications
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="flex flex-col gap-12">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <SkillCategorySection
            key={category}
            category={category}
            categorySkills={categorySkills}
            categories={categories}
          />
        ))}
      </div>
    </Section>
  );
}
