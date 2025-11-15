"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { Project } from '@/types';
import { useReducedMotion } from '@/hooks';
import { Section, SectionHeader, Card, Badge, Button } from '@/components/common';
import { useRef } from 'react';
import { useFocusTrap } from '@/hooks/use-focus-trap';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(modalRef, Boolean(selectedProject), () => setSelectedProject(null));

  return (
    <Section id="projects">
      <Section.Header animated={!shouldReduceMotion}>
        <Section.Title highlightText="Projects">Featured</Section.Title>
        <Section.Subtitle>
          A selection of projects I've worked on, showcasing different technologies and approaches
        </Section.Subtitle>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            animated={!shouldReduceMotion}
            animationDelay={index * 0.1}
            hover="lift"
            padding="none"
            className="overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-56 bg-linear-to-br from-blue-500 to-purple-600 overflow-hidden">
              {project.imageUrl ? (
                <>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.id}
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg">View Details →</span>
              </div>
              {project.featured && (
                <Badge variant="gradient" size="sm" className="absolute top-4 right-4">
                  Featured
                </Badge>
              )}
            </div>

            <Card.Footer className="flex-col items-start p-6">
              <Card.Title className="text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </Card.Title>
              {project.description && (
                <Card.Description className="mb-4 line-clamp-2">
                  {project.description}
                </Card.Description>
              )}

              <div className="flex flex-wrap gap-2 mb-3">
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
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                ref={modalRef}
                tabIndex={-1}
            >
              
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Close project details"
                  ref={(el) => { if (el) { el.focus(); } }}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.images.slice(0, 4).map((img, idx) => (
                      <div key={idx} className="relative h-48 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
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
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                )}

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center p-3 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-700/30 rounded-lg border border-blue-200 dark:border-gray-600"
                      >
                        <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                          {typeof tech === 'string' ? tech : tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t dark:border-gray-700">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:shadow-lg hover:-translate-y-0.5 font-semibold"
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
                        className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5 font-semibold"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
