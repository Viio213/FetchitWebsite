import React from 'react';
import { Code, Twitter, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  variant: string;
}

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code size={28} className="text-primary" />
              <span className="font-heading font-bold text-xl">FetchIT</span>
            </div>
            <p className="text-gray-300 mb-6">
              Des solutions IT qui s'adaptent à vous, parce que chaque entreprise mérite une approche humaine.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-dark-light rounded-full hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-dark-light rounded-full hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-dark-light rounded-full hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-dark-light rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary">Développement Sur Mesure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Solutions ERP</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">DevOps & Cloud</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Intelligence Artificielle</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Optimisation SEO</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Liens Utiles</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary">À Propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Notre Équipe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Carrières</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">123 Avenue des Consultants<br />75001 Paris, France</li>
              <li><a href="tel:+33123456789" className="text-gray-300 hover:text-primary">+33 1 23 45 67 89</a></li>
              <li><a href="mailto:contact@fetchit.fr" className="text-gray-300 hover:text-primary">contact@fetchit.fr</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 FetchIT. Tous droits réservés.
          </p>
          
          <div className="flex gap-4 items-center">
            <a href="#" className="text-gray-400 hover:text-primary">Mentions Légales</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-primary">Politique de Confidentialité</a>
            <button 
              onClick={scrollToTop}
              className="ml-4 p-2 bg-primary rounded-full hover:bg-primary-light transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;