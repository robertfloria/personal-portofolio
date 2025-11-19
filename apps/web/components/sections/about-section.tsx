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
    <Section id="about" className="p-4 md:p-6 lg:p-8">
      <Section.Header animated={!shouldReduceMotion}>
        <div className="text-center mx-auto">
          <Section.Title highlightText="Offer">What I</Section.Title>
          <Section.Subtitle>{personalInfo.bio}</Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];

          return (
            <Card
              key={service.id}
              hover="glow"
              className="group p-4 md:p-6 lg:p-8"
              animated={!shouldReduceMotion}
              animationDelay={index * 0.2}
            >
              <Card.Content className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center md:items-start">
                <IconBadge
                  icon={Icon}
                  variant="gradient"
                  size="lg"
                  iconSize={32}
                  className="group-hover:scale-110 transition-transform shrink-0 mb-2 md:mb-0" //ss
                />

                <div className="text-center md:text-left">
                  <Card.Title className="text-lg md:text-2xl group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
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
