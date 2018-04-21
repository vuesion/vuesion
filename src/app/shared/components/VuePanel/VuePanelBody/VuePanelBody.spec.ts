import { mount, createLocalVue } from '@vue/test-utils';
import VuePanelBody              from './VuePanelBody.vue';

const localVue = createLocalVue();

describe('VuePanelBody.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VuePanelBody, { localVue });

    expect(wrapper.findAll(`.vuePanelBody`)).toHaveLength(1);
  });

});
