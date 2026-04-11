'use client';

import React, { useState, useCallback } from 'react';
import { Section } from '@/components/common';
import { certificates } from './lib/data';
import { CertificateItem } from './types/certificate-item';
import { CertificateCard, CertificateModal } from './components';

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const handleSelectCertificate = useCallback((certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  return (
    <Section id="certificates" className="py-20 md:py-28">
      <Section.Header className="max-w-6xl mx-auto w-full">
        <div className="text-center mx-auto px-section md:px-section-md lg:px-section-lg">
          <Section.Title highlightText="Credentials">Professional</Section.Title>
          <Section.Subtitle>
            Certifications and formal training that support delivery quality and engineering
            discipline.
          </Section.Subtitle>
        </div>
      </Section.Header>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-grid px-section md:px-section-md lg:px-section-lg">
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
    </Section>
  );
}
