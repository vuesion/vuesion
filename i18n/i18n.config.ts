import { datetimeFormats } from './date-formats';
import { numberFormats } from './number-formats';

export default defineI18nConfig(() => {
  return {
    legacy: false,
    datetimeFormats,
    numberFormats,
    fallbackLocale: 'de-DE',
    formatFallbackMessages: true,
  };
});
