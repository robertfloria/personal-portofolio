'use client';

import React, { useState } from 'react';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { useReducedMotion } from '@/hooks';
import { Section } from '@/components/common';
import { certificates } from './lib/data';
import { Certificate } from './types/certificate';
import { CertificateCard, CertificateModal } from './components';

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
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            animated={!shouldReduceMotion}
            animationDelay={index * 0.05}
            onClick={() => setSelectedCertificate(certificate)}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
      />
    </Section>
  );
}
