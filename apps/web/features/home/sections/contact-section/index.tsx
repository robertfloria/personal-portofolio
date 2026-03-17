'use client';

import React from 'react';
import { Section, Card, LottieAnimation } from '@/components/common';
import { contactMethods } from './lib/data';
import { ContactForm, ContactMethodCard } from './components';
import globeAnimation from '../../../../public/lottie/globe.json';

export function ContactSection() {
  return (
    <Section id="contact" className="p-section md:p-section-md lg:p-section-lg">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto">
          <div className="relative flex items-center justify-center mb-4">
            <div className="block shrink-0 pointer-events-none select-none">
              <LottieAnimation animationData={globeAnimation} style={{ width: 60, height: 60 }} />
            </div>
            <Section.Title highlightText="Touch" className="mb-0!">
              Get In
            </Section.Title>
          </div>
          <Section.Subtitle>
            Have a project in mind or want to collaborate? Feel free to reach out!
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
              Other Ways to Reach Me
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
