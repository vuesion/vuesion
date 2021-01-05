import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { dateTimeFormats } from '@/plugins/vue-i18n/vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  dateTimeFormats,
  silentTranslationWarn: true,
});

if (process.env.NODE_ENV.toLocaleLowerCase() !== 'test') {
  i18n.locale = 'en';
  i18n.fallbackLocale = 'en';
  i18n.setLocaleMessage('en', require('../../i18n/en.json'));
}
