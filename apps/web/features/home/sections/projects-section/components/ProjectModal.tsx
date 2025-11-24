import React, { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Modal } from '@/components/common';
import { IconBadge } from '@/components/common';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onImageClick: (img: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onImageClick,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(modalRef as React.RefObject<HTMLElement>, Boolean(project), onClose);

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={modalRef as React.RefObject<HTMLDivElement>} tabIndex={-1}>
        <Modal.Header showClose onClose={onClose}>
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
        </Modal.Header>
        <Modal.Body>
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-48 rounded-lg overflow-hidden bg-[hsl(var(--card)/0.9)] cursor-pointer"
                  onClick={() => onImageClick(img)}
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
          {project.description && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          )}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <IconBadge iconKey="Check" size="sm" variant="gradient" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-3 bg-linear-to-br from-secondary to-primary dark:from-[hsl(var(--card)/0.5)] dark:to-[hsl(var(--card)/0.3)] rounded-lg border border-border"
                >
                  <span className="text-sm font-medium text-foreground text-center">
                    {typeof tech === 'string' ? tech : tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border dark:border-card">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-[hsl(var(--card)/0.9)] text-foreground rounded-xl hover:bg-[hsl(var(--card)/0.8)] transition-all hover:shadow-lg hover:-translate-y-0.5 font-semibold"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-primary to-accent text-foreground dark:text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary-strong hover:shadow-accent-strong transition-all hover:-translate-y-0.5 font-semibold"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
