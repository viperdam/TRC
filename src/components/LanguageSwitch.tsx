import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitchProps {
  currentLang: string;
  onSwitch: () => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onSwitch }) => {
  return (
    <button
      onClick={onSwitch}
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
    >
      <Globe size={16} />
      <span className="uppercase">{currentLang}</span>
    </button>
  );
};