'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import { Section, Card, IconBadge } from '@/components/common';
import { SectionDivider } from '../../../../components/common/section-divider';
import { services } from './lib/data';

export function AboutSection() {
  return (
    <Section id="about" className="bg-divider-section">
      <SectionDivider variant="top" />
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto px-section md:px-section-md lg:px-section-lg">
          <Section.Title highlightText="Offer">What I</Section.Title>
          <Section.Subtitle>{personalInfo.about}</Section.Subtitle>
        </div>
      </Section.Header>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-grid px-section md:px-section-md lg:px-section-lg">
        {services.map((service, index) => {
          const iconKey = service.icon;

          return (
            <Card
              key={service.id}
              hover="glow"
              className="group p-card md:p-card-md lg:p-card-lg"
              animationDelay={index * 0.05}
            >
              <Card.Content className="flex flex-row gap-content items-start">
                <IconBadge
                  iconKey={iconKey}
                  variant="gradient"
                  size="md"
                  iconSize={22}
                  className="group-hover:scale-110 transition-transform shrink-0 mb-2 md:mb-0"
                />

                <div className="text-left">
                  <Card.Title className="text-base md:text-lg group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
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
