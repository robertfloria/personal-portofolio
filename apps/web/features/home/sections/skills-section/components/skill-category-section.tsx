import React from 'react';
import { Heading } from '@/components/common';
import { Skill } from '../types/skill';
import { SkillCard } from './skill-card';

interface SkillCategorySectionProps {
  category: string;
  categorySkills: Skill[];
  categories: Record<string, string>;
}

const SkillCategorySectionComponent: React.FC<SkillCategorySectionProps> = ({
  category,
  categorySkills,
  categories,
}) => (
  <div key={category} className="flex flex-col gap-component">
    <Heading variant="h3" className="flex justify-center md:justify-start">
      {categories[category as keyof typeof categories]}
    </Heading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid">
      {categorySkills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} animationDelay={index * 0.05} />
      ))}
    </div>
  </div>
);

export const SkillCategorySection = React.memo(SkillCategorySectionComponent);
