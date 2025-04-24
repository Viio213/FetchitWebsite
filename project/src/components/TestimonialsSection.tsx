import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, name, position, company, image, rating 
}) => {
  return (
    <div className="bg-dark rounded-xl p-8 text-white h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? 'text-primary fill-primary' : 'text-gray-400'} 
          />
        ))}
      </div>
      
      <p className="italic mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <p className="font-heading font-bold">{name}</p>
          <p className="text-sm text-gray-300">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

interface TestimonialsSectionProps {
  variant: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ variant }) => {
  const sectionBg = variant === 'energetic' 
    ? 'bg-gradient-to-br from-primary/20 to-primary/5' 
    : variant === 'balanced' 
      ? 'bg-gradient-to-r from-dark/10 to-dark/5' 
      : 'bg-white';

  const testimonials = [
    {
      quote: "L'équipe de ConsultIT a parfaitement compris nos besoins et nous a proposé une solution innovante qui a transformé notre façon de travailler. Leur approche humaine fait toute la différence.",
      name: "Sophie Martin",
      position: "Directrice Marketing",
      company: "InnovTech",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      quote: "Nous avons apprécié le professionnalisme et la flexibilité de ConsultIT. Ils ont su s'adapter à nos contraintes tout en nous apportant leur expertise technique.",
      name: "Thomas Dubois",
      position: "CTO",
      company: "DataFlux",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4
    },
    {
      quote: "La solution développée a parfaitement répondu à nos attentes et a été livrée dans les délais. Le suivi post-projet est également exemplaire.",
      name: "Claire Leroy",
      position: "Directrice Générale",
      company: "Nexus Group",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className={`py-20 ${sectionBg}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">TÉMOIGNAGES</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-gray-700">
            Découvrez les expériences de nos clients et comment nos solutions ont transformé leur activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;