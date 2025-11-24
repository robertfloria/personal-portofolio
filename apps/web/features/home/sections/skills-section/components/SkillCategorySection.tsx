import React from 'react';
import { Heading } from '@/components/common';
import { Skill } from '../types/skill';
import { SkillCard } from './SkillCard';

interface SkillCategorySectionProps {
  category: string;
  categorySkills: Skill[];
  categories: Record<string, string>;
  shouldReduceMotion: boolean;
}

export const SkillCategorySection: React.FC<SkillCategorySectionProps> = ({ category, categorySkills, categories, shouldReduceMotion }) => (
  <div key={category} className="flex flex-col gap-6">
    <Heading variant="h3" className="flex justify-center md:justify-start">
      {categories[category as keyof typeof categories]}
    </Heading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categorySkills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          skill={skill}
          animated={!shouldReduceMotion}
          animationDelay={index * 0.05}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  </div>
);