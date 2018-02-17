import { mount, createLocalVue } from '@vue/test-utils';
import VueFooter                 from './VueFooter.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueFooter.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueFooter, { localVue, mocks: { $style } });

    expect(wrapper.find('small').text()).toMatch('Copyright');
  });

});
