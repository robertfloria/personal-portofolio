import { HeroSection } from '@/features/portfolio/sections/hero-section';
import { AboutSection } from '@/features/portfolio/sections/about-section';
import { SkillsSection } from '@/features/portfolio/sections/skills-section';
import { ProjectsSection } from '@/features/portfolio/sections/projects-section';
import { TimelineSection } from '@/features/portfolio/sections/timeline-section';
import { CertificatesSection } from '@/features/portfolio/sections/certificates-section';
import { ContactSection } from '@/features/portfolio/sections/contact-section';

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
