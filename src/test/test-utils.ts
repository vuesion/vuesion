import VueI18n from 'vue-i18n';
import { dateTimeFormats } from '@/plugins/vue-i18n/vue-i18n';

export const TestComponent = (setup: (props?: any, options?: any) => void, template = '<div/>'): any => ({
  setup,
  template,
});

export const triggerDocument: any = {};

if (typeof beforeEach !== 'undefined') {
  const addEventListener = document.addEventListener;
  const removeEventListener = document.removeEventListener;
  beforeEach(() => {
    document.addEventListener = jest.fn((event, cb) => {
      triggerDocument[event] = cb;
    });

    document.removeEventListener = jest.fn((event) => {
      delete triggerDocument[event];
    });
  });

  afterEach(() => {
    document.addEventListener = addEventListener;
    document.removeEventListener = removeEventListener;
  });
}

export const i18n = new VueI18n({
  dateTimeFormats,
});

i18n.locale = 'en';
i18n.fallbackLocale = 'en';
i18n.setLocaleMessage('en', require('../../i18n/en.json'));
