import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { config, RouterLinkStub } from '@vue/test-utils';
import { defineRule } from 'vee-validate';
import { required, email, integer, min, min_value as minValue, regex } from '@vee-validate/rules';

// define global vee-validate rules
defineRule('required', required);
defineRule('email', email);
defineRule('integer', integer);
defineRule('min', min);
defineRule('min_value', minValue);
defineRule('regex', regex);

config.global.mocks.$t = (key: string) => key;
config.global.mocks.$cdn = (key: string) => key;
config.global.mocks.$d = (date: string) => new Date(date).toISOString();
config.global.mocks.$n = (number: number) => number;
config.global.mocks.localePath = (path: string) => path;
config.global.mocks.setLocale = (locale: string) => locale;
config.global.stubs['nuxt-link'] = RouterLinkStub;
config.global.stubs.NuxtLink = RouterLinkStub;
config.global.stubs['nuxt-img'] = true;

Element.prototype.scrollTo = () => {};
(Element.prototype as HTMLDialogElement).showModal = () => {};
(Element.prototype as HTMLDialogElement).show = () => {};
(Element.prototype as HTMLDialogElement).close = () => {};

global.focus = () => {};
global.open = (_?: string | URL | undefined, __?: string | undefined, ___?: string | undefined) => null;

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
    d: (key: string) => key,
  }),
}));

vi.mock('vue-router', () => {
  return {
    useRouter: () => ({
      beforeEach: vi.fn(() => {
        return vi.fn();
      }),
    }),
  };
});

vi.mock('~/constants/transition-duration', () => ({
  TRANSITION_DURATION: 0,
}));
