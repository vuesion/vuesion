import { mount, createLocalVue } from '@vue/test-utils';
import Vuex                      from 'vuex';
import Home                      from './Home.vue';
import { i18n }               from '../../shared/plugins/i18n/i18n';

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
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('Vue.js Starter');
  });

});
