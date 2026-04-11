'use client';

import React from 'react';
import { Section, Card, LottieAnimation } from '@/components/common';
import { contactMethods } from './lib/data';
import { ContactForm, ContactMethodCard } from './components';
import globeAnimation from '../../../../public/lottie/globe.json';

export function ContactSection() {
  return (
    <Section id="contact" className="py-20 md:py-28 px-section md:px-section-md lg:px-section-lg">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto">
          <div className="relative flex items-center justify-center mb-4">
            <div className="block shrink-0 pointer-events-none select-none">
              <LottieAnimation animationData={globeAnimation} style={{ width: 60, height: 60 }} />
            </div>
            <Section.Title highlightText="Together" className="mb-0!">
              Let&apos;s Work
            </Section.Title>
          </div>
          <Section.Subtitle>
            Need a delivery-focused contractor for a new product, modernization effort, or
            AI-enabled workflow? Send your scope and timeline.
          </Section.Subtitle>
        </div>
      </Section.Header>
      <div className="max-w-4xl mx-auto w-full flex justify-center">
        <Card
          variant="default"
          className="p-card sm:p-card-md md:p-card-lg w-full"
          hover="none"
          animationDelay={0.2}
        >
          <ContactForm />
          <div className="mt-12 pt-8 border-t border-border dark:border-card">
            <h3 className="text-lg font-semibold mb-6 text-foreground text-center">
              Direct Contact Channels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-component">
              {contactMethods.map((method) => (
                <ContactMethodCard key={method.label} method={method} />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
