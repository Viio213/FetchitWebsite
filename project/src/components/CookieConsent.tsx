import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    Cookies.set('cookie-consent', 'all', { expires: 365 });
    Cookies.set('analytics-enabled', 'true', { expires: 365 });
    setShowBanner(false);
  };

  const acceptEssential = () => {
    Cookies.set('cookie-consent', 'essential', { expires: 365 });
    Cookies.set('analytics-enabled', 'false', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6 animate-fade-in">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-grow">
            <h3 className="text-lg font-heading font-bold mb-2">🍪 Nous respectons votre vie privée</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies essentiels sont nécessaires au fonctionnement du site. Les cookies d'analyse nous aident à comprendre comment vous utilisez notre site.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={acceptEssential}
              className="btn bg-gray-200 hover:bg-gray-300 text-dark"
            >
              Cookies essentiels uniquement
            </button>
            <button 
              onClick={acceptAll}
              className="btn btn-primary"
            >
              Accepter tous les cookies
            </button>
          </div>
          
          <button 
            onClick={acceptEssential}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          <p>
            Pour plus d'informations, consultez notre{' '}
            <a href="/privacy" className="text-primary hover:underline">
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;