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
    <Section id="skills" className="py-20 md:py-28 px-section md:px-section-md lg:px-section-lg">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto">
          <Section.Title highlightText="Capabilities">Core</Section.Title>
          <Section.Subtitle>
            Production-ready technologies and engineering practices I use to deliver reliable B2B
            products.
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
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
