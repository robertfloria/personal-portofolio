'use client';

import React from 'react';
import { services, personalInfo } from '@/lib/data';
import { useReducedMotion } from '@/hooks';
import { Section, Card, IconBadge } from '@/components/common';
import { SectionDivider } from '../../../components/common/section-divider';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="about" className="bg-about-section text-primary-foreground">
      <SectionDivider variant="top" />
      <Section.Header animated={!shouldReduceMotion}>
        <div className="text-center mx-auto px-4 md:px-6 lg:px-8">
          <Section.Title highlightText="Offer">What I</Section.Title>
          <Section.Subtitle>{personalInfo.about}</Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8">
        {services.map((service, index) => {
          const iconKey = service.icon;

          return (
            <Card
              key={service.id}
              hover="glow"
              className="group p-4 md:p-6 lg:p-8"
              animated={!shouldReduceMotion}
              animationDelay={index * 0.05}
            >
              <Card.Content className="flex flex-row gap-4 justify-center items-start">
                <IconBadge
                  iconKey={iconKey}
                  variant="gradient"
                  size="lg"
                  iconSize={32}
                  className="group-hover:scale-110 transition-transform shrink-0 mb-2 md:mb-0"
                />

                <div className="text-left">
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
      <SectionDivider variant="bottom" />
    </Section>
  );
}
