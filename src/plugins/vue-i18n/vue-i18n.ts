import VueI18n from 'vue-i18n';

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
export const dateTimeFormats: VueI18n.DateTimeFormats = {
  en: calendarFormats,
  de: calendarFormats,
};

export default function (): any {
  return {
    dateTimeFormats,
  };
}
