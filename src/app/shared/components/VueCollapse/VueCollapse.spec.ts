import { mount, createLocalVue } from '@vue/test-utils';
import VueCollapse from './VueCollapse.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueCollapse.vue', () => {

  test('renders component', (done) => {
    const wrapper = mount(VueCollapse, {
      localVue,
      mocks: { $style },
      slots: {
        default: '<h1>content</h1>',
      },
    });

    expect(wrapper.find('h1').text()).toBe('content');

    wrapper.setProps({ show: false });
    wrapper.update();

    setTimeout(() => {
      expect(wrapper.findAll('h1')).toHaveLength(0);
      done();
    }, 500);
  });

});
