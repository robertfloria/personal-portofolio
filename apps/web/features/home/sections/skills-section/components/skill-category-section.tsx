import React from 'react';
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
  <div className="flex flex-col gap-3">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {categories[category as keyof typeof categories]}
    </p>
    <div className="flex flex-wrap gap-2">
      {categorySkills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} animationDelay={index * 0.04} />
      ))}
    </div>
  </div>
);

export const SkillCategorySection = React.memo(SkillCategorySectionComponent);
