
import React, { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Lazy load the 3D hero section to improve initial load time
const HeroSection = React.lazy(() => import('@/components/HeroSection'));

const Index = () => {
  const { scrollYProgress } = useScroll();
  const aboutY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
  const experienceY = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);
  const projectsY = useTransform(scrollYProgress, [0.5, 0.7], [100, 0]);
  const contactY = useTransform(scrollYProgress, [0.7, 0.9], [100, 0]);

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
      
      <motion.div style={{ y: aboutY }} className="relative overflow-hidden">
        <AboutSection />
        <div className="text-center mt-6 mb-12">
          <Link to="/about" className="futuristic-border inline-block">
            <span className="relative z-10 px-6 py-2 block">View Full About Page</span>
          </Link>
        </div>
      </motion.div>

      <motion.div style={{ y: experienceY }} className="relative overflow-hidden">
        <ExperienceSection />
        <div className="text-center mt-6 mb-12">
          <Link to="/experience" className="futuristic-border inline-block">
            <span className="relative z-10 px-6 py-2 block">View Full Experience Page</span>
          </Link>
        </div>
      </motion.div>

      <motion.div style={{ y: projectsY }} className="relative overflow-hidden">
        <ProjectsSection />
        <div className="text-center mt-6 mb-12">
          <Link to="/projects" className="futuristic-border inline-block">
            <span className="relative z-10 px-6 py-2 block">View Full Projects Page</span>
          </Link>
        </div>
      </motion.div>

      <motion.div style={{ y: contactY }} className="relative overflow-hidden">
        <ContactSection />
        <div className="text-center mt-6 mb-12">
          <Link to="/contact" className="futuristic-border inline-block">
            <span className="relative z-10 px-6 py-2 block">View Full Contact Page</span>
          </Link>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Index;
