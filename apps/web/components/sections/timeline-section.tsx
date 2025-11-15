'use client';

import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { timeline } from '@/lib/data';
import { useReducedMotion } from '@/hooks';
import { Section, Card, Heading, Text, Badge } from '@/components/common';

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  certificate: Award,
};

const typeColors = {
  education: 'from-blue-500 to-blue-600',
  work: 'from-purple-500 to-purple-600',
  certificate: 'from-green-500 to-green-600',
};

export function TimelineSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="timeline">
      <div className="max-w-4xl mx-auto">
        <Section.Header animated={!shouldReduceMotion}>
          <Section.Title highlightText="Timeline">Professional</Section.Title>
          <Section.Subtitle>
            Career milestones and roles where I led frontend efforts, built backend services, and promoted AI adoption.
          </Section.Subtitle>
        </Section.Header>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 via-purple-600 to-green-600" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = typeIcons[item.type];
              const colorClass = typeColors[item.type];

              return (
                <div key={item.id} className="relative">
                  {/* Icon (positioned relative to timeline container) */}
                  <div className={`absolute left-8 top-4 -translate-x-1/2 w-16 h-16 rounded-full bg-linear-to-br ${colorClass} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Card shifted to the right of the line */}
                  <Card
                    animated={!shouldReduceMotion}
                    animationDelay={index * 0.1}
                    hover="glow"
                    padding="md"
                    className="ml-20 border-2"
                  >
                    {/* Content */}
                    <Card.Content>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <Card.Title className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
                    <Text variant="body" className="font-semibold mb-2">
                      {item.organization}
                    </Text>
                    {item.location && (
                      <Text variant="small" className="mb-3">
                        📍 {item.location}
                      </Text>
                    )}
                    <Card.Description className="leading-relaxed">
                      {item.description}
                    </Card.Description>
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
