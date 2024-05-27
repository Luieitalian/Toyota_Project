import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enTranslation from './locales/en.json';
import trTranslation from './locales/tr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: true,
  fallbackLng: 'en',
  supportedLngs: ['en', 'tr'],
  resources: {
    en: {
      translation: enTranslation,
    },
    tr: {
      translation: trTranslation,
    },
  },
});
