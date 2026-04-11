'use client';

import React from 'react';
import { Section } from '@/components/common';
import { projects } from './lib/data';
import { ProjectCard } from './components';
export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section id="projects" className="py-20 md:py-28">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto px-section md:px-section-md lg:px-section-lg">
          <Section.Title highlightText="Work">Selected</Section.Title>
          <Section.Subtitle>
            A curated set of production engagements focused on delivery, reliability, and measurable
            business outcomes.
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 gap-grid px-section md:px-section-md lg:px-section-lg">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} animationDelay={index * 0.05} />
        ))}
      </div>
    </Section>
  );
}
