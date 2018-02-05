import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from './Home.vue';
import $style from 'identity-obj-proxy';
import { getI18n } from '../../shared/plugins/i18n/i18n';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
      getters: {},
      actions: {},
    });
    const wrapper = mount(Home, {
      store,
      localVue,
      i18n: getI18n(),
      mocks: { $style },
    });

    expect(wrapper.find('h1').text()).toBe('Vue.js Starter');
  });

});
