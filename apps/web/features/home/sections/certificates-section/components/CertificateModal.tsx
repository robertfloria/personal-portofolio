import React from 'react';
import Image from 'next/image';
import { Award, ExternalLink } from 'lucide-react';
import { Modal } from '@/components/common';
import { Certificate } from '../types/certificate';

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    {certificate && (
      <Modal.Content>
        <Modal.Header showClose onClose={onClose}>
          <h2 className="text-2xl font-bold text-foreground">{certificate.title}</h2>
        </Modal.Header>

        <Modal.Body>
          <div className="flex items-center space-x-4 p-4 bg-linear-to-r from-secondary to-primary rounded-xl">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-secondary to-primary flex items-center justify-center">
              <Award className="w-8 h-8 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{certificate.issuer}</h3>
              <p className="text-muted-foreground">Issued: {certificate.date}</p>
            </div>
          </div>

          {certificate.imageUrl ? (
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border-4 border-border shadow-2xl">
              <Image
                src={certificate.imageUrl}
                alt={certificate.title}
                fill
                className="object-contain bg-[hsl(var(--card)/1)]"
              />
            </div>
          ) : (
            <div className="bg-linear-to-br from-secondary to-primary rounded-xl p-16 text-center text-foreground dark:text-primary-foreground">
              <Award className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-2xl font-semibold">{certificate.title}</p>
              <p className="text-lg opacity-80 mt-2">{certificate.issuer}</p>
            </div>
          )}

          {certificate.credentialUrl && (
            <div className="pt-4">
              <a
                href={certificate.credentialUrl}
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
);
