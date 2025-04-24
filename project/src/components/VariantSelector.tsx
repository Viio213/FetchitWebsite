import React from 'react';
import { Palette } from 'lucide-react';

interface VariantSelectorProps {
  currentVariant: string;
  onChange: (variant: string) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ currentVariant, onChange }) => {
  return (
    <div className="fixed right-4 bottom-4 z-40">
      <div className="relative group">
        <button 
          className="p-3 bg-dark text-white rounded-full shadow-lg hover:bg-primary transition-colors"
          aria-label="Changer le thème"
        >
          <Palette size={20} />
        </button>
        
        <div className="absolute bottom-full right-0 mb-2 p-3 bg-white rounded-lg shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-48">
          <p className="text-sm font-medium text-gray-700 mb-2">Choisir une variante :</p>
          <div className="space-y-2">
            <button 
              className={`flex items-center gap-2 w-full p-2 rounded text-left ${
                currentVariant === 'energetic' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onChange('energetic')}
            >
              <span 
                className="block w-4 h-4 rounded-full bg-primary"
              ></span>
              Énergique
            </button>
            
            <button 
              className={`flex items-center gap-2 w-full p-2 rounded text-left ${
                currentVariant === 'balanced' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onChange('balanced')}
            >
              <span 
                className="block w-4 h-4 rounded-full bg-dark"
              ></span>
              Équilibre
            </button>
            
            <button 
              className={`flex items-center gap-2 w-full p-2 rounded text-left ${
                currentVariant === 'soft' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onChange('soft')}
            >
              <span 
                className="block w-4 h-4 rounded-full bg-offwhite border border-gray-300"
              ></span>
              Soft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantSelector;