interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
};

export const services: Service[] = [
    {
        id: 1,
        title: 'Web Development',
        description:
            'Full-stack web applications focused on performance and maintainability, using React.js, Next.js, Node.js, NestJS and modern best practices',
        icon: 'Code2',
    },
    {
        id: 2,
        title: 'Mobile Development',
        description:
            'Cross-platform mobile apps with React Native (Expo), published to Google Play and App Store, including IAP and OAuth integrations',
        icon: 'Smartphone',
    },
    {
        id: 3,
        title: 'AI Integration',
        description: 'Integrate AI features using OpenAI API, MCP servers, and custom AI solutions',
        icon: 'Brain',
    },
    {
        id: 4,
        title: 'CI/CD & DevOps',
        description:
            'Implemented CI/CD pipelines (GitHub Actions, Jenkins) and containerized deployments (Docker) reducing deployment time and improving release reliability',
        icon: 'Rocket',
    },
    {
        id: 5,
        title: 'Backend Development',
        description: 'Scalable backend APIs with Node.js, NestJS, Express.js',
        icon: 'Server',
    },
    {
        id: 6,
        title: 'Technical Consulting',
        description: 'Architecture design, code reviews, and best practices consultation',
        icon: 'Users',
    },
];