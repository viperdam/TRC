import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { translations } from './translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl');
  const t = translations[lang];

  const toggleLang = () => setLang(lang === 'nl' ? 'en' : 'nl');

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Helmet>
          <html lang={lang} />
          <title>{t.hero.title} - {t.hero.subtitle}</title>
          <meta name="description" content={t.services.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        </Helmet>

        <Header currentLang={lang} onLanguageSwitch={toggleLang} translations={t.nav} />
        <main className="flex-grow">
          <Hero translations={t.hero} />
          <Services translations={t.services} />
          <Contact translations={t.contact} />
        </main>
        <Footer translations={t.footer} />
      </div>
    </HelmetProvider>
  );
}