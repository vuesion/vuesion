import { mount, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import { i18n } from '../../plugins/i18n';
import Components from './Components.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Components.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Components, {
      localVue,
      i18n,
      mocks: {
        $style,
      },
    });

    expect(wrapper.find('h1').text()).toBe('Components');
  });

});
