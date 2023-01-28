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
config.global.mocks.$d = (date: string) => new Date(date).toISOString();
config.global.mocks.$n = (number: number) => number;
config.global.mocks.localePath = (path: string) => path;
config.global.stubs['nuxt-link'] = RouterLinkStub;
