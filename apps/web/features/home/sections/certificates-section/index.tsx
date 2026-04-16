'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, Section } from '@/components/common';
import { certificates } from './lib/data';

export function CertificatesSection() {
  return (
    <Section id="certificates" className="py-20 md:py-28">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto px-section md:px-section-md lg:px-section-lg">
          <Section.Title highlightText="Credentials">Professional</Section.Title>
          <Section.Subtitle>
            Official certifications from Coursera with direct credential verification links.
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-grid px-section md:px-section-md lg:px-section-lg">
        {certificates.map((certificate) => (
          <Card
            key={certificate.id}
            hover="lift"
            className="p-card sm:p-card-md md:p-card-lg border-border/70"
          >
            <Card.Content className="flex flex-col gap-4">
              <div className="space-y-1.5">
                <Card.Title className="text-base sm:text-lg leading-snug">{certificate.title}</Card.Title>
                <Card.Description className="text-sm font-medium text-foreground">
                  {certificate.issuer}
                </Card.Description>
                <p className="text-xs text-muted-foreground">Issued: {certificate.date}</p>
              </div>

              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary dark:hover:text-accent"
              >
                Verify Credential
                <ExternalLink size={16} />
              </a>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Section>
  );
}
