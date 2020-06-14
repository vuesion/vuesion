import Vue from 'vue';
// import { ValidationProvider } from 'vee-validate';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
// import { ValidationProvider, extend } from 'vee-validate';

// Add a rule.
// extend('secret', {
//   validate: (value) => value === 'example',
//   message: 'This is not the magic word',
// });

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
