import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Zap } from 'lucide-react';
import { Badge } from '@/components/common';
import { ANIMATION_DURATIONS } from '@/lib/constants';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

const ProjectCardComponent: React.FC<ProjectCardProps> = ({ project, animationDelay }) => {
  const visibleTechnologies = project.technologies;
  const visibleFeatures = (project.features ?? []).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay, duration: ANIMATION_DURATIONS.SLOW }}
      className="group grid grid-cols-1 lg:grid-cols-[2fr_3fr] rounded-2xl border border-border/70 bg-card overflow-hidden hover:border-[hsl(var(--primary)/0.4)] hover:shadow-[0_24px_56px_-16px_hsl(var(--primary)/0.18)]"
    >
      {/* ── Left: image panel ── */}
      <div className="relative min-h-56 lg:min-h-0 bg-secondary/40 dark:bg-muted/20 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            quality={100}
            className="object-cover group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl font-black text-foreground/10">{project.id}</span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[hsl(var(--foreground)/0.55)] via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-[hsl(var(--card)/0.18)]" />

        {/* Badges bottom-left on mobile, top-left on desktop */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {project.category && (
            <Badge variant="secondary" size="sm" className="backdrop-blur-sm bg-card/70 border-border/50 text-foreground/80 text-xs">
              {project.category}
            </Badge>
          )}
          {project.featured && (
            <Badge variant="gradient" size="sm" className="text-xs">
              Featured
            </Badge>
          )}
        </div>

        {/* Live link floating bottom on mobile */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 lg:hidden inline-flex items-center gap-1.5 rounded-lg bg-primary/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary"
          >
            <ArrowUpRight size={13} />
            Live
          </a>
        )}
      </div>

      {/* ── Right: content panel ── */}
      <div className="flex flex-col gap-5 p-6 md:p-8">
        {/* Title + live link */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug group-hover:text-primary">
            {project.title}
          </h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex shrink-0 items-center justify-center w-9 h-9 rounded-xl border border-border/60 bg-secondary/50 text-muted-foreground hover:border-[hsl(var(--primary)/0.5)] hover:text-primary hover:bg-[hsl(var(--primary)/0.08)]"
              aria-label="Open live app"
            >
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>

        {/* Description — clamped */}
        {project.description && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Key highlights */}
        {visibleFeatures.length > 0 && (
          <ul className="space-y-1.5">
            {visibleFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                <Zap size={13} className="mt-0.5 text-primary/80 shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {visibleTechnologies.map((tech, idx) => (
            <span
              key={idx}
              className="inline-block rounded-md border border-border/60 bg-secondary/50 dark:bg-muted/30 px-2.5 py-0.5 text-xs font-medium text-foreground/70"
            >
              {typeof tech === 'string' ? tech : tech.name}
            </span>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/50">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-linear-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:shadow-md hover:shadow-[hsl(var(--primary)/0.3)]"
            >
              <ArrowUpRight size={15} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-border/70 text-foreground/80 hover:border-[hsl(var(--primary)/0.4)] hover:text-primary hover:bg-[hsl(var(--primary)/0.05)]"
            >
              <Github size={15} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectCard = React.memo(ProjectCardComponent);

