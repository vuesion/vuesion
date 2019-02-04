import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n);

const calendarFormats: any = {
  calendarHeader: {
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  },
  calendarNav: {
    month: 'long',
    year: 'numeric',
  },
  calendarLabel: {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  },
  datePicker: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  },
};
const dateTimeFormats: VueI18n.DateTimeFormats = {
  en: calendarFormats,
  de: calendarFormats,
};

export const i18n = new VueI18n({
  dateTimeFormats,
});

/* istanbul ignore next */
if (TEST === true) {
  i18n.locale = 'en';
  i18n.fallbackLocale = 'en';
  i18n.setLocaleMessage('en', require('../../../../../i18n/en.json'));
}

const loadedLocales: string[] = [];

const setI18nLocale = (locale: string) => {
  i18n.locale = locale;
  axios.defaults.headers.common['Accept-Language'] = locale;
  document.querySelector('html').setAttribute('lang', locale.substr(0, 2));
  return locale;
};

export const loadLocaleAsync = async (locale: string) => {
  if (i18n.locale !== locale && !loadedLocales.find((l) => l === locale)) {
    const res = await axios.get(`/i18n/${locale}.json`);

    i18n.setLocaleMessage(locale, res.data);
    loadedLocales.push(locale);
    setI18nLocale(locale);
  }
};
