import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// We will load translations from JSON files
import translationKZ from './locales/kz/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  kz: {
    translation: translationKZ
  },
  ru: {
    translation: translationRU
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'kz', // use kz if detected lng is not available
    debug: true, // enables logging to console for development
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    }
  });

export default i18n; 