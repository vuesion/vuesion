import VueI18n from 'vue-i18n';
const VuesionConfig = require('../../../.vuesion/config.json');

export const calendarFormats: any = {
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
export const decimalFormats: any = {};
export const dateTimeFormats: VueI18n.DateTimeFormats = {
  en: calendarFormats,
  de: calendarFormats,
};
export const numberFormats: VueI18n.NumberFormats = {
  en: decimalFormats,
  de: decimalFormats,
};

export default (): any => {
  return {
    dateTimeFormats,
    numberFormats,
    fallbackLocale: VuesionConfig.i18n.defaultLocale,
    formatFallbackMessages: true,
  };
};
