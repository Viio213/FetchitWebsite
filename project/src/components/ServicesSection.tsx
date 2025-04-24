import React from 'react';
import { Code, Database, Cloud, Monitor, Lock, BarChart, Cpu, Search, GitBranch, Settings, RefreshCw, Bot } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, variant }) => {
  const cardBg = variant === 'energetic' 
    ? 'bg-primary/5 hover:bg-primary/10' 
    : variant === 'balanced' 
      ? 'bg-white hover:bg-offwhite' 
      : 'bg-white hover:shadow-md';

  return (
    <div className={`p-6 rounded-xl transition-all duration-300 ${cardBg} animate-fade-in group`}>
      <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

interface ServicesSectionProps {
  variant: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ variant }) => {
  const sectionBg = variant === 'energetic' 
    ? 'bg-offwhite' 
    : variant === 'balanced' 
      ? 'bg-offwhite/50' 
      : 'bg-white';

  const services = [
    {
      icon: <Code size={24} />,
      title: 'Développement Sur Mesure',
      description: 'Applications web et mobiles personnalisées, intégrations API et développement de solutions métier spécifiques.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Solutions ERP',
      description: 'Implémentation, personnalisation et optimisation de systèmes ERP adaptés à vos processus métier.',
    },
    {
      icon: <GitBranch size={24} />,
      title: 'DevOps & Cloud',
      description: 'Mise en place de pipelines CI/CD, automatisation des déploiements et gestion d\'infrastructures cloud.',
    },
    {
      icon: <Bot size={24} />,
      title: 'Intelligence Artificielle',
      description: 'Intégration de solutions IA pour l\'automatisation, l\'analyse prédictive et l\'aide à la décision.',
    },
    {
      icon: <Search size={24} />,
      title: 'Optimisation SEO',
      description: 'Amélioration du référencement naturel, audit technique SEO et optimisation des performances.',
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Modernisation IT',
      description: 'Migration de systèmes legacy, mise à niveau technologique et optimisation des performances.',
    },
    {
      icon: <Lock size={24} />,
      title: 'Cybersécurité',
      description: 'Audit de sécurité, mise en conformité RGPD et implémentation de solutions de protection.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Conseil Digital',
      description: 'Accompagnement stratégique dans votre transformation numérique et innovation technologique.',
    }
  ];

  return (
    <section id="services" className={`py-20 ${sectionBg}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">NOS SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Une expertise globale pour votre transformation digitale
          </h2>
          <p className="text-gray-700">
            De la conception à la maintenance, nous vous accompagnons dans tous les aspects de votre évolution technologique avec des solutions innovantes et sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;