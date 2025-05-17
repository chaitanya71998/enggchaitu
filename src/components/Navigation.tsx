
import React, { useState, useEffect } from 'react';
import { AtomIcon, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-portfolio-dark/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <AtomIcon className="h-8 w-8 text-portfolio-green" />
            <span className="text-xl font-bold tracking-tight">Chaitanya Terli</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-portfolio-gray hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-portfolio-gray hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-portfolio-gray hover:text-white transition-colors">Contact</a>
          </nav>
          
          <button 
            className="md:hidden text-portfolio-gray p-2" 
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 grid-lines">
          <div className="container mx-auto px-4 py-6 flex justify-end">
            <button 
              className="text-portfolio-gray p-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <a 
              href="#about" 
              className="text-3xl font-bold hover:text-portfolio-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-3xl font-bold hover:text-portfolio-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-3xl font-bold hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
