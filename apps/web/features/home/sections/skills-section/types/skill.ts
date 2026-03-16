import { SKILLS_CATEGORIES } from '../lib/constants';

export interface Skill {
  name: string;
  category: SKILLS_CATEGORIES;
  icon?: string;
  iconKey?: string;
  proficiency?: number;
  yearsOfExperience?: number;
}
