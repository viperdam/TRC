import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitch } from './LanguageSwitch';

interface HeaderProps {
  currentLang: 'nl' | 'en';
  onLanguageSwitch: () => void;
  translations: {
    home: string;
    services: string;
    contact: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageSwitch, translations }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-blue-900 text-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">TCR</div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks translations={translations} onClick={() => {}} />
            <LanguageSwitch currentLang={currentLang} onSwitch={onLanguageSwitch} />
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <NavLinks 
              translations={translations} 
              onClick={() => setMenuOpen(false)}
              className="flex flex-col space-y-4" 
            />
            <div className="mt-4">
              <LanguageSwitch currentLang={currentLang} onSwitch={onLanguageSwitch} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks: React.FC<{
  translations: HeaderProps['translations'];
  onClick: () => void;
  className?: string;
}> = ({ translations, onClick, className = "flex space-x-8" }) => (
  <div className={className}>
    <a href="#home" onClick={onClick} className="hover:text-yellow-400 transition-colors">
      {translations.home}
    </a>
    <a href="#services" onClick={onClick} className="hover:text-yellow-400 transition-colors">
      {translations.services}
    </a>
    <a href="#contact" onClick={onClick} className="hover:text-yellow-400 transition-colors">
      {translations.contact}
    </a>
  </div>
);