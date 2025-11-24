export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'AI' | 'Tools';
  proficiency: number;
  icon?: string;
  iconKey?: string;
  yearsOfExperience?: number;
}
