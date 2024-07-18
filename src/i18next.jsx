import i18n from 'i18next';

import { initReactI18next, Translation } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from "./../src/locales/uzbek/uzbek.json"
import ruTranslation from "./../src/locales/rus/rus.json"
import enTranslation from "./../src/locales/ingliz/ingliz.json"
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: i18n.language,
    debug: true,
    resources : {
      uz : {translation : uzTranslation },
      ru : {translation : ruTranslation },
      en : {translation : enTranslation }
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;