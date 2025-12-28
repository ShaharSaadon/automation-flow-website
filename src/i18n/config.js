import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import heTranslation from './locales/he/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  he: {
    translation: heTranslation
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Default language
    debug: false, // Set to true for development

    interpolation: {
      escapeValue: false // React already escapes values
    },

    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language'
    },

    react: {
      useSuspense: false // Set to true if you want to use Suspense
    }
  });

export default i18n;
