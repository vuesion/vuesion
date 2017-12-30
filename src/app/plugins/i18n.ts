import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('../../../i18n/en.json'),
  },
});

const loadedLanguages: string[] = ['en'];

const setI18nLanguage = (lang: string) => {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
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
