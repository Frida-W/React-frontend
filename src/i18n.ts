import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as en from './locales/en.json';
import * as cn from './locales/cn.json';
// import * as ru from './locales/ru.json';
// import * as ko from './locales/ko.json';
// import * as es from './locales/es.json';
// import * as fr from './locales/fr.json';
// import * as de from './locales/de.json';
// import * as uk from './locales/uk.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  'en-US': {
    translation: {
      ...en,
    },
  },

  'zh-CN': {
    translation: {
      ...cn,
    },
  },

  //   'ru-RU': {
  //     translation: {
  //       ...ru,
  //     },
  //   },
  //   'uk-UA': {
  //     translation: {
  //       ...uk,
  //     },
  //   },
  //   'ko-KR': {
  //     translation: {
  //       ...ko,
  //     },
  //   },
  //   'es-ES': {
  //     translation: {
  //       ...es,
  //     },
  //   },
  //   'fr-FR': {
  //     translation: {
  //       ...fr,
  //     },
  //   },
  //   'de-DE': {
  //     translation: {
  //       ...de,
  //     },
  //   },
};

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'], // determines the order in which language detection methods will be attempted
  caches: ['localStorage'], //specifies whether the detection results should be cached in local storage to speed up future language detection when the user visits the site again.
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    detection: DETECTION_OPTIONS,
    debug: false,
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: 'en-US',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
