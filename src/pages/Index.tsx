
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark text-white flex flex-col items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="highlight-text">Chaitanya Sai Terli</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a 
            href="https://linkedin.com/in/your-linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-portfolio-gray/30 rounded-full hover:border-portfolio-green hover:text-portfolio-green transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/your-github" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-portfolio-gray/30 rounded-full hover:border-portfolio-green hover:text-portfolio-green transition-colors"
          >
            <Github size={24} />
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl text-portfolio-gray animate-pulse"
        >
          Complete website coming soon...
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
