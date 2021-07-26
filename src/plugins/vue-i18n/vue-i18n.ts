import VueI18n from 'vue-i18n';
const VuesionConfig = require('../../../.vuesion/config.json');

export const dateFormats: any = {
  dayMonthYearNumeric: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  },
};
export const decimalFormats: any = {};
export const dateTimeFormats: VueI18n.DateTimeFormats = {
  en: dateFormats,
  de: dateFormats,
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
