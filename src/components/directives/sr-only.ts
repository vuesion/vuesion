import Vue from 'vue';

Vue.directive('sr-only', (el: HTMLElement) => {
  el.classList.add('sr-only');
});
