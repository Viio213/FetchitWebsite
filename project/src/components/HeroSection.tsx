import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  variant: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ variant }) => {
  const bgClass = variant === 'energetic' 
    ? 'bg-gradient-to-br from-primary/20 to-primary/5' 
    : variant === 'balanced' 
      ? 'bg-gradient-to-br from-dark to-dark/80 text-white' 
      : 'bg-offwhite';

  const imageUrl = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section className={`pt-32 pb-20 ${bgClass}`}>
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
            Solutions IT sur mesure pour votre <span className="text-primary">transformation digitale</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Experts en développement, ERP, DevOps, IA et SEO pour moderniser votre infrastructure technologique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn btn-primary text-lg group">
              Démarrer votre projet
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn btn-secondary text-lg">
              Découvrir nos services
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            
            <img 
              src={imageUrl} 
              alt="Équipe FetchIT en consultation avec un client pour une solution technologique personnalisée" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
              width="800"
              height="600"
              loading="eager"
              fetchpriority="high"
            />
            
            <div className={`absolute -bottom-3 right-8 px-6 py-3 rounded-lg shadow-lg ${
              variant === 'balanced' ? 'bg-primary text-white' : 'bg-white'
            }`}>
              <p className="font-medium">+200 projets réussis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;