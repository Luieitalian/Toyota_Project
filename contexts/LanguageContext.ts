import {changeLanguage} from 'i18next';
import {createContext} from 'react';

export const LanguageContext = createContext({
  lang: 'en',
  ChangeLanguage: (lang: string) => {
    changeLanguage(lang);
  },
});
