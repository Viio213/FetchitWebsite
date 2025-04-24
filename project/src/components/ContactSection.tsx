import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

interface ContactSectionProps {
  variant: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ variant }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/<[^>]*>/g, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: sanitizedValue
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Validation
    if (!formState.name || !formState.email || !formState.message) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!validateEmail(formState.email)) {
      alert('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulated API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Formulaire envoyé ! Nous vous contacterons bientôt.');
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionBg = variant === 'energetic' 
    ? 'bg-primary/5' 
    : variant === 'balanced' 
      ? 'bg-dark/5' 
      : 'bg-offwhite';

  const infoBoxBg = variant === 'energetic' 
    ? 'bg-primary text-white' 
    : variant === 'balanced' 
      ? 'bg-dark text-white' 
      : 'bg-white text-dark';

  return (
    <section id="contact" className={`py-20 ${sectionBg}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Parlez-nous de votre projet
          </h2>
          <p className="text-gray-700">
            Nous sommes à votre écoute pour discuter de vos besoins et vous proposer des solutions adaptées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className={`rounded-xl overflow-hidden ${infoBoxBg}`}>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Nos coordonnées
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <MapPin size={20} className={variant === 'soft' ? 'text-primary' : 'text-white'} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <p className={variant === 'soft' ? 'text-gray-700' : 'text-gray-200'}>
                        123 Avenue des Consultants<br />75001 Paris, France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <Phone size={20} className={variant === 'soft' ? 'text-primary' : 'text-white'} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Téléphone</p>
                      <p className={variant === 'soft' ? 'text-gray-700' : 'text-gray-200'}>
                        +33 1 23 45 67 89
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <Mail size={20} className={variant === 'soft' ? 'text-primary' : 'text-white'} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className={variant === 'soft' ? 'text-gray-700' : 'text-gray-200'}>
                        contact@consultit.fr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <img 
                src="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Nos bureaux modernes à Paris" 
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold mb-6">
                Envoyez-nous un message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Votre nom"
                    required
                    maxLength={100}
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="votre@email.com"
                    required
                    maxLength={100}
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Nom de votre entreprise"
                  maxLength={100}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Décrivez votre projet ou besoin..."
                  required
                  maxLength={1000}
                  aria-required="true"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary text-lg w-full md:w-auto group"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;