'use client';

import React, { useState } from 'react';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import Image from 'next/image';
import { ExternalLink, Award } from 'lucide-react';
import { useReducedMotion } from '@/hooks';
import { Section, Card, Modal } from '@/components/common';
import { Certificate } from './types/Certificate';
import { certificates } from './lib/data';

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  useFocusTrap(modalRef as React.RefObject<HTMLDivElement>, Boolean(selectedCertificate), () =>
    setSelectedCertificate(null),
  );

  return (
    <Section id="certificates" className="p-4 md:p-6 lg:p-8">
      <Section.Header animated={!shouldReduceMotion}>
        <div className="text-center mx-auto">
          <Section.Title highlightText="Achievements">Certificates &</Section.Title>
          <Section.Subtitle>
            Professional certifications and courses completed to enhance my skills
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <Card
            key={certificate.id}
            animated={!shouldReduceMotion}
            animationDelay={index * 0.05}
            hover="lift"
            padding="none"
            className="overflow-hidden cursor-pointer group"
            onClick={() => setSelectedCertificate(certificate)}
          >
            <Card.Content className="p-0">
              <div className="relative h-36 sm:h-56 lg:h-64 bg-linear-to-br from-secondary to-accent overflow-hidden">
                {certificate.imageUrl ? (
                  <>
                    <Image
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[hsl(var(--card)/0.8)] dark:bg-[hsl(var(--card)/0.6)]" />
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full bg-[hsl(var(--card)/0.8)] dark:bg-[hsl(var(--card)/0.6)]">
                    <Award className="w-20 h-20 text-muted-foreground opacity-30" />
                  </div>
                )}
                <div className="absolute inset-0 glass-zone opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-semibold text-lg text-foreground drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-center gap-2">
                    <Award size={24} />
                    View Certificate
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-zone flex items-center justify-center">
                  <Award className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </Card.Content>
            <Card.Footer className="flex flex-col gap-2 items-start p-3 sm:p-4 md:p-6">
              <Card.Title className="text-base sm:text-lg md:text-xl line-clamp-2 min-h-10 sm:min-h-14 group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                {certificate.title}
              </Card.Title>
              <Card.Description className="text-sm font-medium text-foreground">
                {certificate.issuer}
              </Card.Description>
              <p className="text-xs text-muted-foreground">{certificate.date}</p>
            </Card.Footer>
          </Card>
        ))}
      </div>

      <Modal isOpen={Boolean(selectedCertificate)} onClose={() => setSelectedCertificate(null)}>
        {selectedCertificate && (
          <Modal.Content>
            <Modal.Header showClose onClose={() => setSelectedCertificate(null)}>
              <h2 className="text-2xl font-bold text-foreground">{selectedCertificate.title}</h2>
            </Modal.Header>

            <Modal.Body>
              <div className="flex items-center space-x-4 p-4 bg-linear-to-r from-secondary to-primary rounded-xl">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-secondary to-primary flex items-center justify-center">
                  <Award className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {selectedCertificate.issuer}
                  </h3>
                  <p className="text-muted-foreground">Issued: {selectedCertificate.date}</p>
                </div>
              </div>

              {selectedCertificate.imageUrl ? (
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border-4 border-border shadow-2xl">
                  <Image
                    src={selectedCertificate.imageUrl}
                    alt={selectedCertificate.title}
                    fill
                    className="object-contain bg-[hsl(var(--card)/1)]"
                  />
                </div>
              ) : (
                <div className="bg-linear-to-br from-secondary to-primary rounded-xl p-16 text-center text-foreground dark:text-primary-foreground">
                  <Award className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-2xl font-semibold">{selectedCertificate.title}</p>
                  <p className="text-lg opacity-80 mt-2">{selectedCertificate.issuer}</p>
                </div>
              )}

              {selectedCertificate.credentialUrl && (
                <div className="pt-4">
                  <a
                    href={selectedCertificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-8 py-4 bg-linear-to-r from-primary to-accent text-foreground dark:text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary-strong hover:shadow-accent-strong transition-all hover:-translate-y-0.5 font-semibold"
                  >
                    <ExternalLink size={20} />
                    <span>View Credential</span>
                  </a>
                </div>
              )}
            </Modal.Body>
          </Modal.Content>
        )}
      </Modal>
    </Section>
  );
}
