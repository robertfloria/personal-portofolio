'use client';

import React from 'react';
import { useReducedMotion } from '@/hooks';
import { Section, Card } from '@/components/common';
import { contactMethods } from './lib/data';
import { ContactForm, ContactMethodCard } from './components';
import LottieAnimation from '@/components/common/lottie-animation';

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <Section id="contact" className="p-4 md:p-6 lg:p-8">
      <Section.Header animated={!shouldReduceMotion}>
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
          className="p-3 sm:p-4 md:p-8 w-full md:w-[70vw] md:max-w-[900px]"
          hover="none"
          animated={!shouldReduceMotion}
          animationDelay={0.2}
        >
          <div className="flex items-center justify-center">
            <LottieAnimation
              animationData={require('../../../../public/lottie/globe.json')}
              style={{ width: 150, height: 150 }}
            />
          </div>
          <ContactForm />
          <div className="mt-12 pt-8 border-t border-border dark:border-card">
            <h3 className="text-lg font-semibold mb-6 text-foreground text-center">
              Other Ways to Reach Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
