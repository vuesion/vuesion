import type { DateTimeFormatOptions } from '@intlify/core-base';

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
  timeOnlyNumeric: {
    hour: '2-digit',
    minute: '2-digit',
  },
};

export const datetimeFormats = {
  'en-US': datetimeFormatsDefinition,
  'de-DE': datetimeFormatsDefinition,
};
