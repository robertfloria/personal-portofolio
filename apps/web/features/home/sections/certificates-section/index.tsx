'use client';

import React, { useState, useCallback } from 'react';
import { Section } from '@/components/common';
import { certificates } from './lib/data';
import { CertificateItem } from './types/certificate-item';
import { CertificateCard, CertificateModal } from './components';
import { SectionDivider } from '@/components/common/section-divider';

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const handleSelectCertificate = useCallback((certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  return (
    <Section id="certificates" className="bg-divider-section">
      <SectionDivider variant="top" />
      <Section.Header className='max-w-7xl mx-auto w-full'>
        <div className="text-center mx-auto px-section md:px-section-md lg:px-section-lg">
          <Section.Title highlightText="Achievements">Certificates &</Section.Title>
          <Section.Subtitle>
            Professional certifications and courses completed to enhance my skills
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid px-section md:px-section-md lg:px-section-lg">
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
