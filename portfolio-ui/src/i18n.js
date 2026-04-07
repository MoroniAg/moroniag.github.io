import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
let defaultLng;
if (saved) {
  defaultLng = saved.toLowerCase();
} else if (typeof navigator !== 'undefined') {
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  defaultLng = nav.startsWith('es') ? 'es' : 'en';
} else {
  defaultLng = 'es';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: defaultLng,
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
  });

export default i18n;
