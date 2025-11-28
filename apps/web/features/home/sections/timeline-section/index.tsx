'use client';

import React from 'react';
import { useBreakpoint, useReducedMotion } from '@/hooks';
import { Section } from '@/components/common';
import { timeline } from './lib/data';
import { TimelineList } from './components';

export function TimelineSection() {
  const shouldReduceMotion = useReducedMotion();
  const isMd = useBreakpoint('md');

  return (
    <Section id="timeline" className="p-4 md:p-6 lg:p-8">
      <Section.Header animated={!shouldReduceMotion}>
        <div className="text-center mx-auto">
          <Section.Title highlightText="Timeline">Professional</Section.Title>
          <Section.Subtitle>
            Career milestones and roles where I led frontend efforts, built backend services, and
            promoted AI adoption.
          </Section.Subtitle>
        </div>
      </Section.Header>
      <div className="flex justify-center">
        <TimelineList timeline={timeline} isMd={isMd} shouldReduceMotion={shouldReduceMotion} />
      </div>
    </Section>
  );
}
