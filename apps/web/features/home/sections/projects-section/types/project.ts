interface Technology {
    name: string;
    icon: string;
};

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
    category?: string;
    featured?: boolean;
};
