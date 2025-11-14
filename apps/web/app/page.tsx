import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section-refactored';
import { ProjectsSection } from '@/components/sections/projects-section-refactored';
import { TimelineSection } from '@/components/sections/timeline-section-refactored';
import { CertificatesSection } from '@/components/sections/certificates-section-refactored';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}

