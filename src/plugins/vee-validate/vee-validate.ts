import { extend } from 'vee-validate';
import { required, email, integer, min, min_value as minValue, regex } from 'vee-validate/dist/rules.umd.js';

extend('required', required);
extend('email', email);
extend('integer', integer);
extend('min', min);
extend('min_value', minValue);
extend('regex', regex);
