'use client';

import React, { useState } from 'react';
import { Section } from '@/components/common';
import { certificates } from './lib/data';
import { CertificateItem } from './types/certificate-item';
import { CertificateCard, CertificateModal } from './components';

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  return (
    <Section id="certificates" className="p-4 md:p-6 lg:p-8">
      <Section.Header>
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
