import { mount, createLocalVue } from 'vue-test-utils';
import VuePanelBody from './VuePanelBody.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VuePanelBody.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VuePanelBody, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.vuePanelBody}`)).toHaveLength(1);
  });

});
