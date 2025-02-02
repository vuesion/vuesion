import type { DateTimeFormatOptions, NumberFormatOptions } from '@intlify/core-base';

export const datetimeFormatsDefinition: Record<string, DateTimeFormatOptions> = {
  dayMonthYearNumeric: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  },
  dayMonthYearNumericWithTime: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  },
};
export const decimalFormatsDefinition: Record<string, NumberFormatOptions> = {
  integer: {
    style: 'decimal',
    useGrouping: true,
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  },
  decimal: {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    minimumSignificantDigits: 2,
    maximumSignificantDigits: 2,
  },
};
export const datetimeFormats = {
  'en-US': datetimeFormatsDefinition,
  'de-DE': datetimeFormatsDefinition,
};
export const numberFormats = {
  'en-US': decimalFormatsDefinition,
  'de-DE': decimalFormatsDefinition,
};

export default defineI18nConfig(() => {
  return {
    legacy: false,
    datetimeFormats,
    numberFormats,
    fallbackLocale: 'en-US',
    formatFallbackMessages: true,
  };
});
