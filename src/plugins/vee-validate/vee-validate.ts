import { extend } from 'vee-validate';
import { required, email, integer, min, regex } from 'vee-validate/dist/rules.umd.js';

extend('required', required);
extend('email', email);
extend('integer', integer);
extend('min', min);
extend('regex', regex);
