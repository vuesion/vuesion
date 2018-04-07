import Vue           from 'vue';
import VueI18n       from 'vue-i18n';
import axios         from 'axios';

Vue.use(VueI18n);

let i18n: VueI18n = null;
const dateTimeFormats: VueI18n.DateTimeFormats = {
  en: {
    calendarHeader: {
      month: 'long', weekday: 'long', day: 'numeric',
    },
    calendarNav:    {
      month: 'long', year: 'numeric',
    },
    datePicker:     {
      year: 'numeric', month: '2-digit', day: '2-digit',
    },
  },
  de: {
    calendarHeader: {
      month: 'long', weekday: 'long', day: 'numeric',
    },
    calendarNav:    {
      month: 'long', year: 'numeric',
    },
    datePicker:     {
      year: 'numeric', month: '2-digit', day: '2-digit',
    },
  },
};

export const getI18n = (lang: string = 'en'): VueI18n => {
  const defaultMessages: any = require('../../../../../i18n/en.json');
  const messages: any = {
    en: defaultMessages,
  };

  try {
    messages[lang] = require(`../../../../../i18n/${lang}.json`);
  } catch {
    messages[lang] = defaultMessages;
  }

  return i18n = new VueI18n(
    {
      locale:         lang,
      fallbackLocale: 'en',
      messages,
      dateTimeFormats,
    },
  );
};

const loadedLanguages: string[] = ['en'];

const setI18nLanguage = (lang: string) => {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang.substr(0, 2));
  return lang;
};

export const loadLanguageAsync = (lang: string): Promise<any> => {
  if (i18n.locale !== lang) {

    if (!loadedLanguages.find((l) => l === lang)) {
      return axios.get(`/i18n/${lang}.json`)
                  .then((response: any) => {
                    i18n.setLocaleMessage(lang, response.data);
                    loadedLanguages.push(lang);
                    return setI18nLanguage(lang);
                  });
    }

    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
};
