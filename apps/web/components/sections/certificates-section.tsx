"use client";

import React, { useState } from 'react';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award } from 'lucide-react';
import { certificates } from '@/lib/data';
import { Certificate } from '@/types';
import { useReducedMotion } from '@/hooks';
import { Section, Card, Badge } from '@/components/common';

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  useFocusTrap(modalRef as any, Boolean(selectedCertificate), () => setSelectedCertificate(null));

  return (
    <Section id="certificates">
      <Section.Header animated={!shouldReduceMotion}>
        <Section.Title highlightText="Achievements">Certificates &</Section.Title>
        <Section.Subtitle>
          Professional certifications and courses completed to enhance my skills
        </Section.Subtitle>
      </Section.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <Card
            key={certificate.id}
            animated={!shouldReduceMotion}
            animationDelay={index * 0.05}
            hover="lift"
            padding="none"
            className="overflow-hidden cursor-pointer"
            onClick={() => setSelectedCertificate(certificate)}
          >
            <Card.Content className="p-0">
              <div className="relative h-56 bg-linear-to-br from-green-500 via-blue-600 to-purple-600 overflow-hidden">
                  {certificate.imageUrl ? (
                <>
                  <Image
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Award className="w-20 h-20 text-white/30" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg flex items-center gap-2">
                  <Award size={24} />
                  View Certificate
                </span>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              </div>
            </Card.Content>

            <Card.Footer className="flex-col items-start p-6">
              <Card.Title className="text-lg mb-2 line-clamp-2 min-h-14 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {certificate.title}
              </Card.Title>
              <Card.Description className="text-sm font-medium mb-1">
                {certificate.issuer}
              </Card.Description>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {certificate.date}
              </p>
            </Card.Footer>
          </Card>
        ))}
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCertificate.title}
                </h2>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Close certificate details"
                  ref={(el) => { if (el) { el.focus(); } }}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-6" ref={modalRef} tabIndex={-1}>
                <div className="flex items-center space-x-4 p-4 bg-linear-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-green-500 to-blue-600 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {selectedCertificate.issuer}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Issued: {selectedCertificate.date}
                    </p>
                  </div>
                </div>

                {selectedCertificate.imageUrl ? (
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-2xl">
                    <Image
                      src={selectedCertificate.imageUrl}
                      alt={selectedCertificate.title}
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                ) : (
                  <div className="bg-linear-to-br from-green-500 to-blue-600 rounded-xl p-16 text-center text-white">
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
                      className="flex items-center justify-center space-x-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5 font-semibold"
                    >
                      <ExternalLink size={20} />
                      <span>View Credential</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
