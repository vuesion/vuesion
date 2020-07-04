import { createLocalVue, mount } from '@vue/test-utils';
import FadeAnimation from './FadeAnimation.vue';

const localVue = createLocalVue();

describe('FadeAnimation.vue', () => {
  test('renders component', () => {
    const wrapper = mount(FadeAnimation, {
      localVue,
      slots: {
        default: '<div>foo</div>',
      },
    });

    expect(wrapper.text()).toBe('foo');
  });
});
