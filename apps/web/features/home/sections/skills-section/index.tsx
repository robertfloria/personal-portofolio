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
    <Section id="skills" className="p-section md:p-section-md lg:p-section-lg">
      <Section.Header className="max-w-7xl mx-auto w-full">
        <div className="text-center mx-auto">
          <Section.Title highlightText="Expertise">Skills &</Section.Title>
          <Section.Subtitle>
            Technologies and tools I use to build modern web applications
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="flex flex-col gap-section max-w-7xl mx-auto w-full">
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
