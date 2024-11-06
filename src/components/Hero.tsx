import React from 'react';

interface HeroProps {
  translations: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ translations }) => {
  return (
    <section id="home" className="pt-16 md:pt-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              {translations.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {translations.subtitle}
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              {translations.cta}
            </a>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
              alt="Taxi Service"
              className="rounded-lg shadow-xl w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};