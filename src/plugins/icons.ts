/**
 * this file is used to register all icons globally to be able to use them as property values
 * for Nuxt and Storybook.
 *
 * INFO: if you add new components please also change the code in ./.storybook/preview.js
 */
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(({ vueApp }) => {
  const icons = import.meta.glob('../components/icons/Vue*.vue');

  for (const path in icons) {
    icons[path]().then((componentConfig: any) => {
      const componentName = upperFirst(
        camelCase(
          path
            ?.split('/')
            ?.pop()
            ?.replace(/\.\w+$/, ''),
        ),
      );

      vueApp.component(componentName, componentConfig.default || componentConfig);
    });
  }
});
