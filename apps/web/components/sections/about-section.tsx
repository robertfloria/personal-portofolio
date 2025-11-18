'use client';

import React from 'react';
import { Code2, Smartphone, Brain, Rocket, Server, Users } from 'lucide-react';
import { services, personalInfo } from '@/lib/data';
import { useReducedMotion } from '@/hooks';
import { Section, Card, IconBadge } from '@/components/common';

const iconMap = {
  Code2,
  Smartphone,
  Brain,
  Rocket,
  Server,
  Users,
};

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="about">
      <Section.Header animated={!shouldReduceMotion}>
        <div>
          <Section.Title highlightText="Offer">What I</Section.Title>
          <Section.Subtitle>{personalInfo.bio}</Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];

          return (
            <Card
              key={service.id}
              hover="glow"
              padding="lg"
              animated={!shouldReduceMotion}
              animationDelay={index * 0.2}
              className="group"
            >
              <Card.Content className="flex gap-4">
                <IconBadge
                  icon={Icon}
                  variant="gradient"
                  size="lg"
                  iconSize={32}
                  className="group-hover:scale-110 transition-transform flex-shrink-0" //ss
                />

                <div>
                  <Card.Title className="text-2xl group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                    {service.title}
                  </Card.Title>

                  <Card.Description className="leading-relaxed">
                    {service.description}
                  </Card.Description>
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
