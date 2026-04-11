'use client';

import React from 'react';
import { Section } from '@/components/common';
import { timeline } from './lib/data';
import { TimelineList } from './components';

export function TimelineSection() {
  return (
    <Section id="timeline" className="py-20 md:py-28 px-section md:px-section-md lg:px-section-lg">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto">
          <Section.Title highlightText="Experience">Professional</Section.Title>
          <Section.Subtitle>
            Key education and delivery roles across enterprise teams and contractor B2B
            engagements.
          </Section.Subtitle>
        </div>
      </Section.Header>
      <div className="flex justify-center max-w-4xl mx-auto w-full">
        <TimelineList timeline={timeline} />
      </div>
    </Section>
  );
}
