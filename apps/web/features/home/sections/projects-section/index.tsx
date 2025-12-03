'use client';

import React, { useState, useCallback } from 'react';
import { Section } from '@/components/common';
import { projects } from './lib/data';
import { Project } from './types/project';
import { ProjectCard, ProjectImageModal, ProjectModal } from './components';
import { SectionDivider } from '@/components/common/section-divider';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleSelectImage = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  const handleCloseImageModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <Section id="projects" className="bg-divider-section">
      <SectionDivider variant="top" />
      <Section.Header>
        <div className="text-center mx-auto px-section md:px-section-md lg:px-section-lg">
          <Section.Title highlightText="Projects">Featured</Section.Title>
          <Section.Subtitle>
            Built full-stack and mobile applications with a focus on performance, maintainability,
            and AI integration.
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid px-section md:px-section-md lg:px-section-lg">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            animationDelay={index * 0.05}
            onClick={() => handleSelectProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseProjectModal}
        onImageClick={handleSelectImage}
      />

      <ProjectImageModal
        image={selectedImage}
        isOpen={Boolean(selectedImage)}
        onClose={handleCloseImageModal}
      />
      <SectionDivider variant="bottom" />
    </Section>
  );
}
