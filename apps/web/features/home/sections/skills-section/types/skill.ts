import { SKILLS_CATEGORIES } from "../lib/constants";

export interface Skill {
  name: string;
  category: SKILLS_CATEGORIES;
  proficiency: number;
  icon?: string;
  iconKey?: string;
  yearsOfExperience?: number;
}
