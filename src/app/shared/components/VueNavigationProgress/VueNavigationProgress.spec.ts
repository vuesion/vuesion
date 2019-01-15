import { createLocalVue, mount } from '@vue/test-utils';
import VueNavigationProgress from './VueNavigationProgress.vue';

const localVue = createLocalVue();

describe('VueNavigationProgress.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueNavigationProgress, {
      localVue,
      propsData: {
        isNavigating: false,
      },
    });

    expect(wrapper.classes()).toContain('vueNavigationProgress');
  });

  test('has width when is navigating', (done) => {
    const wrapper = mount(VueNavigationProgress, {
      localVue,
      propsData: {
        isNavigating: true,
      },
    });

    const initialWidth = parseInt(wrapper.element.style.width, 10);
    expect(initialWidth).toBe(0);

    setTimeout(() => {
      const width = parseInt(wrapper.element.style.width, 10);
      expect(width).toBeGreaterThan(0);
      expect(width).toBeLessThan(100);
      done();
    }, 200);
  });

  test('has no width after navigating', (done) => {
    const wrapper = mount(VueNavigationProgress, {
      localVue,
      propsData: {
        isNavigating: true,
      },
    });

    setTimeout(() => {
      expect(parseInt(wrapper.element.style.width, 10)).toBeGreaterThan(0);

      wrapper.setProps({
        isNavigating: false,
      });

      setTimeout(() => {
        expect(parseInt(wrapper.element.style.width, 10)).toBe(0);
        done();
      }, 1100);
    }, 200);
  });
});
