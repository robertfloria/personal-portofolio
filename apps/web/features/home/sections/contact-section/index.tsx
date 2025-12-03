'use client';

import React from 'react';
import { Section, Card, LottieAnimation } from '@/components/common';
import { contactMethods } from './lib/data';
import { ContactForm, ContactMethodCard } from './components';
import globeAnimation from '../../../../public/lottie/globe.json';

export function ContactSection() {
  return (
    <Section id="contact" className="p-section md:p-section-md lg:p-section-lg">
      <Section.Header>
        <div className="text-center mx-auto">
          <Section.Title highlightText="Touch">Get In</Section.Title>
          <Section.Subtitle>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Section.Subtitle>
        </div>
      </Section.Header>
      <div className="flex justify-center">
        <Card
          variant="default"
          className="p-card sm:p-card-md md:p-card-lg w-full md:w-[70vw] md:max-w-[900px]"
          hover="none"
          animationDelay={0.2}
        >
          <div className="flex items-center justify-center">
            <LottieAnimation animationData={globeAnimation} style={{ width: 150, height: 150 }} />
          </div>
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
