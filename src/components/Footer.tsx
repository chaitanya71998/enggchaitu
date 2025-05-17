
import React from 'react';
import { AtomIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 relative bg-black">
      <div className="absolute inset-0 grid-lines opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <AtomIcon className="h-8 w-8 text-portfolio-green" />
            <span className="text-xl font-bold tracking-tight">Chaitanya Terli</span>
          </div>
          
          <nav className="flex gap-x-8">
            <a href="#about" className="text-portfolio-gray hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-portfolio-gray hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-portfolio-gray hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-portfolio-gray mb-4 md:mb-0">
            © 2025 Chaitanya Sai Terli. All rights reserved.
          </p>
          <p className="text-sm text-portfolio-gray">
            Mechanical Engineer + Frontend Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
