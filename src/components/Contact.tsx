import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface ContactProps {
  translations: {
    title: string;
    phone: string;
    whatsapp: string;
  };
}

export const Contact: React.FC<ContactProps> = ({ translations }) => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {translations.title}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{translations.phone}</h3>
            <a 
              href="tel:+31108444184" 
              className="flex items-center justify-center gap-2 text-blue-900 hover:text-blue-700 transition-colors"
            >
              <Phone />
              <span>+31 10 844 4184</span>
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{translations.whatsapp}</h3>
            <WhatsAppButton phoneNumber="0621292782" />
          </div>
        </div>
      </div>
    </section>
  );
};