'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar, Phone, GraduationCap, Briefcase } from 'lucide-react';
// import Image from 'next/image'; // Not needed for static images
import { personalInfo, socialLinks } from '@/lib/data';

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

const infoItems = [
  { icon: Calendar, label: 'Age', value: personalInfo.age },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Briefcase, label: 'Work', value: 'Full-Stack Developer' },
  { icon: GraduationCap, label: 'Education', value: personalInfo.education },
  { icon: Phone, label: 'Phone', value: personalInfo.phone },
];

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 opacity-60" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Image with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Animated gradient rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-2xl" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse opacity-50" />
              
              {/* Profile image container with glassmorphism */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-800/20 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                Available for Hire
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm border border-gray-200 dark:border-gray-700"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              >
                3+ Years Experience
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-2"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {personalInfo.name.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-black dark:text-gray-400 mb-6 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-black dark:text-gray-400 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.bio?.split('.')[0]}.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={20} />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-gray-400 dark:border-gray-700 text-black dark:text-white rounded-xl font-bold hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-2"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    aria-label={social.platform}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {Icon && <Icon size={20} />}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Info Cards Section Below */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 transition-all hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                {item.label}
              </h3>
              <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
