import React from 'react';
import { Plane, Building2, Car } from 'lucide-react';

interface ServicesProps {
  translations: {
    title: string;
    airport: string;
    business: string;
    private: string;
  };
}

export const Services: React.FC<ServicesProps> = ({ translations }) => {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {translations.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            icon={<Plane className="w-12 h-12 text-blue-900" />}
            title={translations.airport}
            description="Schiphol, Rotterdam The Hague Airport"
          />
          <ServiceCard
            icon={<Building2 className="w-12 h-12 text-blue-900" />}
            title={translations.business}
            description="Corporate & Business Transport"
          />
          <ServiceCard
            icon={<Car className="w-12 h-12 text-blue-900" />}
            title={translations.private}
            description="24/7 Private Taxi Service"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);