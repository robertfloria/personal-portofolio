'use client';

import React from 'react';
import { Section } from '@/components/common';
import { timeline } from './lib/data';
import { TimelineList } from './components';

export function TimelineSection() {
  return (
    <Section id="timeline" className="p-section md:p-section-md lg:p-section-lg">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto">
          <Section.Title highlightText="Timeline">Professional</Section.Title>
          <Section.Subtitle>
            Career milestones and roles where I led frontend efforts, built backend services, and
            promoted AI adoption.
          </Section.Subtitle>
        </div>
      </Section.Header>
      <div className="flex justify-center max-w-4xl mx-auto w-full">
        <TimelineList timeline={timeline} />
      </div>
    </Section>
  );
}
