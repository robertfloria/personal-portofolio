import React from 'react';
import Image from 'next/image';
import { Card, Badge } from '@/components/common';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  animated?: boolean;
  animationDelay?: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  animated,
  animationDelay,
  onClick,
}) => (
  <Card
    key={project.id}
    animated={animated}
    animationDelay={animationDelay}
    hover="lift"
    padding="none"
    className="overflow-hidden cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative h-40 sm:h-56 lg:h-64 bg-linear-to-br from-secondary to-accent overflow-hidden">
      {project.imageUrl ? (
        <>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[hsl(var(--card)/0.8)] dark:bg-[hsl(var(--card)/0.6)]" />
        </>
      ) : (
        <div className="flex items-center justify-center h-full bg-[hsl(var(--card)/0.8)] dark:bg-[hsl(var(--card)/0.6)]">
          <div className="text-foreground text-6xl font-bold opacity-20">{project.id}</div>
        </div>
      )}
      <div className="absolute inset-0 glass-zone opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="font-semibold text-lg text-foreground drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
          View Details →
        </span>
      </div>
      {project.featured && (
        <Badge variant="gradient" size="sm" className="absolute top-4 right-4">
          Featured
        </Badge>
      )}
    </div>
    <Card.Footer className="flex flex-col gap-3 items-start p-3 sm:p-4 md:p-6">
      <Card.Title className="text-base sm:text-lg md:text-xl group-hover:text-primary transition-colors">
        {project.title}
      </Card.Title>
      {project.description && (
        <Card.Description className="line-clamp-2">{project.description}</Card.Description>
      )}
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" size="sm">
          {project.category}
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech, idx) => (
          <Badge key={idx} variant="primary" size="sm">
            {typeof tech === 'string' ? tech : tech.name}
          </Badge>
        ))}
        {project.technologies.length > 3 && (
          <Badge variant="outline" size="sm">
            +{project.technologies.length - 3} more
          </Badge>
        )}
      </div>
    </Card.Footer>
  </Card>
);
