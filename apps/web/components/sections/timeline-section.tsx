'use client';

import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { timeline } from '@/lib/data';
import { useReducedMotion } from '@/hooks';
import { Section, Card, Text, Badge, IconBadge } from '@/components/common';

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  certificate: Award,
};

const typeColors = {
  education: 'from-primary to-accent',
  work: 'from-secondary to-accent',
  certificate: 'from-accent to-primary',
};

export function TimelineSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="timeline" className="p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Section.Header animated={!shouldReduceMotion}>
          <div className="text-center mx-auto">
            <Section.Title highlightText="Timeline">Professional</Section.Title>
            <Section.Subtitle>
              Career milestones and roles where I led frontend efforts, built backend services, and
              promoted AI adoption.
            </Section.Subtitle>
          </div>
        </Section.Header>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary to-accent" />

          {/* Timeline Items */}
          <div className="space-y-6 sm:space-y-8">
            {timeline.map((item, index) => {
              const iconKey = item.type === 'education' ? 'GraduationCap'
                : item.type === 'work' ? 'Briefcase'
                : item.type === 'certificate' ? 'Award'
                : '';
              const colorClass = typeColors[item.type];

              return (
                <div key={item.id} className="relative">
                  {/* Icon (positioned relative to timeline container) */}
                  <div
                    className={`absolute left-4 sm:left-8 top-4 -translate-x-1/2 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-linear-to-br ${colorClass} flex items-center justify-center shadow-lg`}
                  >
                    <IconBadge
                      iconKey={iconKey}
                      size={item.type === 'certificate' ? 'md' : 'lg'}
                      variant="gradient"
                      // iconSize={item.type === 'certificate' ? 24 : 32}
                      className="text-foreground dark:text-primary-foreground w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>

                  {/* Card shifted to the right of the line */}
                  <Card
                    animated={!shouldReduceMotion}
                    animationDelay={index * 0.1}
                    hover="glow"
                    className="ml-12 sm:ml-20 border-2 group p-3 sm:p-4 md:p-6"
                  >
                    {/* Content */}
                    <Card.Content>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <Card.Title className="text-base sm:text-lg md:text-xl group-hover:text-primary transition-colors">
                            {item.title}
                          </Card.Title>
                          <div className="flex items-center gap-2">
                            <Badge variant="primary" size="sm">
                              {item.startDate} {item.endDate ? `- ${item.endDate}` : ''}
                            </Badge>
                            {item.current && (
                              <Badge variant="success" size="sm">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Text variant="body" className="font-semibold">
                          {item.organization}
                        </Text>
                        {item.location && <Text variant="small">📍 {item.location}</Text>}
                        <Card.Description className="leading-relaxed">
                          {item.description}
                        </Card.Description>
                      </div>
                    </Card.Content>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
