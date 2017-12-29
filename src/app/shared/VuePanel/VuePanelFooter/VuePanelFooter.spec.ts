import { mount, createLocalVue } from 'vue-test-utils';
import VuePanelFooter from './VuePanelFooter.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VuePanelFooter.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VuePanelFooter, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.vuePanelFooter}`)).toHaveLength(1);
  });

});
