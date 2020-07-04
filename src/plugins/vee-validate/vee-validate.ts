import { extend } from 'vee-validate';
// import { required, email, integer, min } from 'vee-validate/dist/rules';
// this is needed to allow this module to be imported by jest (https://github.com/logaretm/vee-validate/issues/2310)
import { required, email, integer, min } from 'vee-validate/dist/rules.umd.js';

extend('required', required);
extend('email', email);
extend('integer', integer);
extend('min', min);
