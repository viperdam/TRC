import React from 'react';

interface FooterProps {
  translations: {
    rights: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ translations }) => {
  return (
    <footer className="bg-blue-900 text-white py-6 md:py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} TCR Taxicentrale Rotterdam - {translations.rights}</p>
      </div>
    </footer>
  );
};