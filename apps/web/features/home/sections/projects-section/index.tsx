'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { useReducedMotion } from '@/hooks';
import { Section, Card, Badge, Modal } from '@/components/common';
import { IconBadge } from '@/components/common';
import { useRef } from 'react';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { Project } from './types/Project';
import { projects } from './lib/data';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shouldReduceMotion = useReducedMotion();

  const modalRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(modalRef as React.RefObject<HTMLElement>, Boolean(selectedProject), () =>
    setSelectedProject(null),
  );

  return (
    <Section id="projects" className="p-4 md:p-6 lg:p-8">
      <Section.Header animated={!shouldReduceMotion}>
        <div className="text-center mx-auto">
          <Section.Title highlightText="Projects">Featured</Section.Title>
          <Section.Subtitle>
            Built full-stack and mobile applications with a focus on performance, maintainability,
            and AI integration.
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            animated={!shouldReduceMotion}
            animationDelay={index * 0.05}
            hover="lift"
            padding="none"
            className="overflow-hidden cursor-pointer group"
            onClick={() => setSelectedProject(project)}
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
        ))}
      </div>

      {/* Project Detail Modal */}
      <Modal isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <Modal.Content ref={modalRef as React.RefObject<HTMLDivElement>} tabIndex={-1}>
            <Modal.Header showClose onClose={() => setSelectedProject(null)}>
              <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
            </Modal.Header>

            <Modal.Body>
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProject.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative h-48 rounded-lg overflow-hidden bg-[hsl(var(--card)/0.9)] cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {selectedProject.description && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              )}

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
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
                  {selectedProject.technologies.map((tech, idx) => (
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

              {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border dark:border-card">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-[hsl(var(--card)/0.9)] text-foreground rounded-xl hover:bg-[hsl(var(--card)/0.8)] transition-all hover:shadow-lg hover:-translate-y-0.5 font-semibold"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
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
        )}
      </Modal>

      {/* Full Image Modal */}
      <Modal isOpen={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <Modal.Content>
            <Modal.Header showClose onClose={() => setSelectedImage(null)}>
              <h2 className="text-lg font-semibold text-foreground">Image Preview</h2>
            </Modal.Header>
            <Modal.Body>
              <div className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Full preview"
                  fill
                  className="object-contain rounded-lg bg-[hsl(var(--card)/1)]"
                />
              </div>
            </Modal.Body>
          </Modal.Content>
        )}
      </Modal>
    </Section>
  );
}
