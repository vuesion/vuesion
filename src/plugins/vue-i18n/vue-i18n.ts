export const dateFormats = {
  dayMonthYearNumeric: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  },
};
export const decimalFormats = {
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
  'en-US': dateFormats,
  'de-DE': dateFormats,
};
export const numberFormats = {
  'en-US': decimalFormats,
  'de-DE': decimalFormats,
};

export default () => {
  return {
    datetimeFormats,
    numberFormats,
    fallbackLocale: 'en-US',
    formatFallbackMessages: true,
  };
};
