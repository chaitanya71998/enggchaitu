
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutSection from '@/components/AboutSection';
import ParallaxBackground from '@/components/ParallaxBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-white overflow-hidden">
      <Navigation />
      
      <div className="relative">
        <ParallaxBackground variant="about" />
        
        <motion.div style={{ y }} className="relative z-10">
          <AboutSection />
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
