import { config, RouterLinkStub } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { defineRule } from 'vee-validate';
import { required, email, integer, min, min_value as minValue, regex } from '@vee-validate/rules';
import { datetimeFormats } from '../../../i18n/date-formats';
import { numberFormats } from '../../../i18n/number-formats';

process.env.TZ = 'UTC';

defineRule('required', required);
defineRule('email', email);
defineRule('integer', integer);
defineRule('min', min);
defineRule('min_value', minValue);
defineRule('regex', regex);

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  allowComposition: true,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  formatFallbackMessages: true,
  messages: { 'en-US': {} },
  missingWarn: false,
  fallbackWarn: false,
  datetimeFormats,
  numberFormats,
});

config.global.plugins = [...(config.global.plugins ?? []), i18n];
config.global.stubs['nuxt-link'] = RouterLinkStub;
config.global.stubs.NuxtLink = RouterLinkStub;
config.global.stubs['nuxt-img'] = true;
config.global.mocks.$cdn = (key: string) => key;

Element.prototype.scrollTo = () => {};
(Element.prototype as HTMLDialogElement).showModal = () => {};
(Element.prototype as HTMLDialogElement).show = () => {};
(Element.prototype as HTMLDialogElement).close = () => {};
global.focus = () => {};
global.open = (_?: string | URL | undefined, __?: string | undefined, ___?: string | undefined) => null;

vi.mock('vue-router', () => ({
  useRouter: () => ({
    beforeEach: vi.fn(() => vi.fn()),
  }),
}));

vi.mock('~/constants/transition-duration', () => ({
  TRANSITION_DURATION: 0,
}));
