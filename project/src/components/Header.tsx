import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

interface HeaderProps {
  variant: string;
}

const Header: React.FC<HeaderProps> = ({ variant }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white shadow-md py-2' 
      : variant === 'energetic' 
        ? 'bg-primary/10 py-4' 
        : variant === 'balanced' 
          ? 'bg-dark/10 py-4' 
          : 'bg-offwhite py-4'
  }`;

  const linkClass = `font-medium transition-colors hover:text-primary ${
    isScrolled ? 'text-dark' : variant === 'balanced' ? 'text-white' : 'text-dark'
  }`;

  return (
    <header className={headerClass}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Code size={32} className={`${variant === 'energetic' ? 'text-primary' : 'text-dark'}`} />
          <span className="font-heading font-bold text-xl">FetchIT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className={linkClass}>Services</a>
          <a href="#approach" className={linkClass}>Notre Approche</a>
          <a href="#testimonials" className={linkClass}>Témoignages</a>
          <a href="#contact" className="btn btn-primary">Contact</a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-4">
            <a 
              href="#services" 
              className="py-2 border-b border-gray-100 text-dark hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#approach" 
              className="py-2 border-b border-gray-100 text-dark hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Notre Approche
            </a>
            <a 
              href="#testimonials" 
              className="py-2 border-b border-gray-100 text-dark hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary mt-2 inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;