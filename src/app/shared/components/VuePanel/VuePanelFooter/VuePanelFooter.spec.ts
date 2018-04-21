import { mount, createLocalVue } from '@vue/test-utils';
import VuePanelFooter            from './VuePanelFooter.vue';

const localVue = createLocalVue();

describe('VuePanelFooter.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VuePanelFooter, { localVue});

    expect(wrapper.findAll(`.vuePanelFooter`)).toHaveLength(1);
  });

});
