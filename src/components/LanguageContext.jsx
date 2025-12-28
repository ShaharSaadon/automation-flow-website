import React, { createContext, useContext } from 'react';
import { useLanguageRouter } from '@/lib/LanguageRouter';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { currentLanguage, changeLanguage } = useLanguageRouter();

  const toggleLanguage = (lang) => {
    changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}