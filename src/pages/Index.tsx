
import React, { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Lazy load the 3D hero section to improve initial load time
const HeroSection = React.lazy(() => import('@/components/HeroSection'));

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark text-white overflow-hidden">
      <Navigation />
      
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <div className="animate-pulse text-portfolio-green font-bold text-2xl">
            Loading 3D Experience...
          </div>
        </div>
      }>
        <HeroSection />
      </Suspense>
      
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
