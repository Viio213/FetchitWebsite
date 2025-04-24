import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ApproachSection from './components/ApproachSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VariantSelector from './components/VariantSelector';
import CookieConsent from './components/CookieConsent';

type Variant = 'energetic' | 'balanced' | 'soft';

function App() {
  const [variant, setVariant] = useState<Variant>('balanced');

  return (
    <div className={`variant-${variant}`}>
      <Helmet>
        <title>FetchIT - Solutions informatiques globales</title>
        <meta name="description" content="FetchIT - Experts en solutions informatiques : développement sur mesure, ERP, DevOps, IA, SEO et modernisation de systèmes. Une approche globale pour votre transformation digitale." />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="canonical" href="https://fetchit.fr" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FetchIT",
            "description": "Experts en solutions informatiques : développement sur mesure, ERP, DevOps, IA, SEO et modernisation de systèmes.",
            "url": "https://fetchit.fr",
            "logo": "https://fetchit.fr/logo.png",
            "sameAs": [
              "https://linkedin.com/company/fetchit",
              "https://twitter.com/fetchit"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33-1-23-45-67-89",
              "contactType": "customer service",
              "availableLanguage": ["French", "English"]
            }
          })}
        </script>
      </Helmet>
      
      <Header variant={variant} />
      <main>
        <VariantSelector 
          currentVariant={variant} 
          onChange={(newVariant) => setVariant(newVariant as Variant)} 
        />
        <HeroSection variant={variant} />
        <ServicesSection variant={variant} />
        <ApproachSection variant={variant} />
        <TestimonialsSection variant={variant} />
        <ContactSection variant={variant} />
      </main>
      <Footer variant={variant} />
      <CookieConsent />
    </div>
  );
}

export default App;