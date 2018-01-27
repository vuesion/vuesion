import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n);

let i18n: VueI18n = null;

export const getI18n = (lang: string = 'en-EN'): VueI18n => {
  const messages: any = {
    'en-EN': require('../../../../i18n/en-EN.json'),
  };

  messages[lang] = require(`../../../../i18n/${lang}.json`);

  return i18n = new VueI18n({
    locale: lang,
    fallbackLocale: 'en-EN',
    messages,
  });
};

const loadedLanguages: string[] = ['en-EN'];

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
