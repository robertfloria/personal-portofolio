'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { skills } from '@/lib/data';

const categories = {
  Frontend: 'Frontend Development',
  Backend: 'Backend Development',
  DevOps: 'DevOps & Cloud',
  AI: 'AI & Integration',
  Tools: 'Tools & Productivity',
};

export function SkillsSection() {
  const groupedSkills = {
    Frontend: skills.filter((s) => s.category === 'Frontend'),
    Backend: skills.filter((s) => s.category === 'Backend'),
    DevOps: skills.filter((s) => s.category === 'DevOps'),
    AI: skills.filter((s) => s.category === 'AI'),
    Tools: skills.filter((s) => s.category === 'Tools'),
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
                {categories[category as keyof typeof categories]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {(skill as any).iconKey && (
                        <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-600 border border-gray-300 dark:border-transparent p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {(() => {
                            const IconComponent = (Icons as any)[(skill as any).iconKey] ?? Icons.Code;
                            return <IconComponent className="w-8 h-8 text-gray-800 dark:text-white" />;
                          })()}
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                        {skill.yearsOfExperience && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.yearsOfExperience}+ years
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
