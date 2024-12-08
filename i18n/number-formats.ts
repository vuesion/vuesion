import type { NumberFormatOptions } from '@intlify/core-base';

export const decimalFormatsDefinition: Record<string, NumberFormatOptions> = {
  integer: {
    style: 'decimal',
    useGrouping: true,
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  },
  integerSingle: {
    style: 'decimal',
    useGrouping: true,
    minimumIntegerDigits: 1,
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

export const numberFormats = {
  'en-US': decimalFormatsDefinition,
  'de-DE': decimalFormatsDefinition,
};
