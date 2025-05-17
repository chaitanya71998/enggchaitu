
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactSection from '@/components/ContactSection';
import ParallaxBackground from '@/components/ParallaxBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-white overflow-hidden">
      <Navigation />
      
      <div className="relative">
        <ParallaxBackground variant="contact" />
        
        <motion.div style={{ y }} className="relative z-10">
          <ContactSection />
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
