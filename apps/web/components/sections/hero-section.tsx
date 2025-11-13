'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, MapPin, Calendar, Languages, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo } from '@/data/personal-info';
import { socialLinks } from '@/data/social-links';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

const infoItems = [
  { icon: Calendar, label: 'Age', value: personalInfo.age.toString() },
  { icon: Languages, label: 'Languages', value: personalInfo.languages },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Briefcase, label: 'Work', value: personalInfo.title },
  { icon: GraduationCap, label: 'Diploma', value: personalInfo.diploma },
];

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Robert
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all transform hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {item.label}
                </h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
