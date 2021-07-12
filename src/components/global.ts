/**
 * this file is used to register all icons globally to be able to use them as property values
 * for Nuxt and Storybook.
 *
 * INFO: if you add new components please also change the code in @/test/jestsetup.ts
 */
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import Vue from 'vue';

const icons = require.context('./icons', true, /[\w-]+\.vue$/);

icons.keys().forEach((path) => {
  const componentConfig = icons(path);
  const componentName = upperFirst(
    camelCase(
      path
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
