'use client';

import React, { useState } from 'react';
import { useReducedMotion } from '@/hooks';
import { Section } from '@/components/common';
import { projects } from './lib/data';
import { Project } from './types/project';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { ProjectImageModal } from './components/ProjectImageModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shouldReduceMotion = useReducedMotion();

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
          <ProjectCard
            key={project.id}
            project={project}
            animated={!shouldReduceMotion}
            animationDelay={index * 0.05}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onImageClick={setSelectedImage}
      />

      <ProjectImageModal
        image={selectedImage}
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
      />
    </Section>
  );
}
