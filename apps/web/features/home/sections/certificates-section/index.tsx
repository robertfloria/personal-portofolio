'use client';

import React, { useState, useCallback } from 'react';
import { Section } from '@/components/common';
import { certificates } from './lib/data';
import { CertificateItem } from './types/certificate-item';
import { CertificateCard, CertificateModal } from './components';
import { SectionDivider } from '@/components/common/section-divider';

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const handleSelectCertificate = useCallback(
    (certificate: CertificateItem) => {
      setSelectedCertificate(certificate);
    },
    []
  );

  const handleCloseModal = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  return (
    <Section id="certificates" className="bg-divider-section">
      <SectionDivider variant="top" />
      <Section.Header>
        <div className="text-center mx-auto px-4 md:px-6 lg:px-8">
          <Section.Title highlightText="Achievements">Certificates &</Section.Title>
          <Section.Subtitle>
            Professional certifications and courses completed to enhance my skills
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            animationDelay={index * 0.05}
            onClick={() => handleSelectCertificate(certificate)}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={Boolean(selectedCertificate)}
        onClose={handleCloseModal}
      />
      <SectionDivider variant="bottom" />
    </Section>
  );
}
