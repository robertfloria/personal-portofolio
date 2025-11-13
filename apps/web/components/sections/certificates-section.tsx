'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award } from 'lucide-react';
// import Image from 'next/image'; // Using standard img for static assets
import { certificates } from '@/lib/data';
import type { Certificate } from '@portfolio/shared-types';

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Certificates & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedCertificate(certificate)}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative h-56 bg-gradient-to-br from-green-500 via-blue-600 to-purple-600 overflow-hidden">
                {certificate.imageUrl ? (
                  <>
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {certificate.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {certificate.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {certificate.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCertificate.title}
                </h2>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
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

                {/* Certificate Image */}
                {selectedCertificate.imageUrl ? (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-2xl">
                    <img
                      src={selectedCertificate.imageUrl}
                      alt={selectedCertificate.title}
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-16 text-center text-white">
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
                      className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5 font-semibold"
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
    </section>
  );
}
