import { AboutSection, CertificatesSection, ContactSection, HeroSection, ProjectsSection, SkillsSection, TimelineSection } from "./sections";

export default function HomePage() {
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
};
