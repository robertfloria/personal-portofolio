import { PROJECT_CATEGORIES } from '../lib/constants';
interface Technology {
  name: string;
  icon: string;
}
export interface Project {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  images?: string[];
  technologies: (string | Technology)[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: PROJECT_CATEGORIES;
  featured?: boolean;
}
