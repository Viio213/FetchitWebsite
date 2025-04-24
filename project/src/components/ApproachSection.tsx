import React from 'react';
import { Headphones, Palette, Laptop, CheckCheck } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  variant: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  icon, step, title, description, isActive, onClick, variant 
}) => {
  const bgColor = isActive 
    ? variant === 'energetic'
      ? 'bg-primary text-white'
      : variant === 'balanced'
        ? 'bg-dark text-white'
        : 'bg-primary-light text-white'
    : 'bg-white text-dark';

  const stepBg = isActive ? 'bg-white text-primary' : 'bg-primary/10 text-primary';

  return (
    <div 
      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${bgColor} ${
        isActive ? 'shadow-lg' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-full ${stepBg}`}>
          {icon}
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${stepBg}`}>
          Étape {step}
        </div>
      </div>
      <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
      <p className={isActive ? 'opacity-90' : 'text-gray-700'}>{description}</p>
    </div>
  );
};

interface ApproachSectionProps {
  variant: string;
}

const ApproachSection: React.FC<ApproachSectionProps> = ({ variant }) => {
  const [activeStep, setActiveStep] = React.useState(1);
  
  const sectionBg = variant === 'energetic' 
    ? 'bg-white' 
    : variant === 'balanced' 
      ? 'bg-white' 
      : 'bg-offwhite/80';

  const steps = [
    {
      icon: <Headphones size={24} />,
      title: 'Écoute',
      description: 'Nous prenons le temps de comprendre vos besoins, vos objectifs et vos contraintes pour proposer une solution adaptée.',
    },
    {
      icon: <Palette size={24} />,
      title: 'Prototypage',
      description: 'Nous créons rapidement des prototypes pour tester et valider les concepts avant de passer au développement complet.',
    },
    {
      icon: <Laptop size={24} />,
      title: 'Déploiement',
      description: 'Nous mettons en place votre solution avec un accompagnement personnalisé pour assurer une transition en douceur.',
    },
    {
      icon: <CheckCheck size={24} />,
      title: 'Suivi',
      description: 'Nous restons disponibles pour vous accompagner, faire évoluer votre solution et répondre à vos besoins futurs.',
    }
  ];

  return (
    <section id="approach" className={`py-20 ${sectionBg}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">NOTRE APPROCHE</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Une méthodologie centrée sur l'humain
          </h2>
          <p className="text-gray-700">
            Notre approche collaborative garantit des solutions qui correspondent vraiment à vos besoins et s'adaptent à votre culture d'entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <TimelineItem 
              key={index}
              icon={step.icon}
              step={(index + 1).toString()}
              title={step.title}
              description={step.description}
              isActive={activeStep === index + 1}
              onClick={() => setActiveStep(index + 1)}
              variant={variant}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Équipe en réunion collaborative" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Une équipe dédiée à votre réussite
            </h3>
            <p className="text-gray-700">
              Notre équipe de consultants expérimentés travaille en étroite collaboration avec vous à chaque étape du projet. Nous privilégions une communication claire et transparente pour garantir que la solution développée répond parfaitement à vos attentes et s'intègre harmonieusement à votre environnement de travail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;