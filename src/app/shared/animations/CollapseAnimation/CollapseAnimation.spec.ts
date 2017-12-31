import { mount, createLocalVue } from 'vue-test-utils';
import CollapseAnimation from './CollapseAnimation.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('CollapseAnimation.vue', () => {

  test('should set default before enter values', () => {
    const wrapper = mount(CollapseAnimation,
      {
        localVue,
        mocks: { $style },
        slots: {
          default: '<p>TEST</p>',
        },
      });

    const testElement: HTMLElement = wrapper.find('p').element;

    (wrapper as any).vm.beforeEnter(testElement);

    expect(testElement.style.height).toBe('0px');
    expect(testElement.style.opacity).toBe('0');
    expect(testElement.style.overflow).toBe('hidden');
  });

  test('should animate enter', (done) => {
    const wrapper = mount(CollapseAnimation,
      {
        localVue,
        mocks: { $style },
        slots: {
          default: '<p>TEST</p>',
        },
      });

    const testElement: HTMLElement = wrapper.find('p').element;

    (testElement as any).getClientRects = () => {
      return {
        item: () => {
          return {
            height: 100,
          };
        },
      };
    };

    (wrapper as any).vm.enter(testElement, () => {
      expect(testElement.style.height).toBe('-100px');
      expect(testElement.style.opacity).toBe('1');
      done();
    });
  });

  test('should set default before leave values', () => {
    const wrapper = mount(CollapseAnimation,
      {
        localVue,
        mocks: { $style },
        slots: {
          default: '<p>TEST</p>',
        },
      });

    const testElement: HTMLElement = wrapper.find('p').element;

    (wrapper as any).vm.beforeLeave(testElement);

    expect(testElement.style.height).toBe('');
    expect(testElement.style.opacity).toBe('');
    expect(testElement.style.overflow).toBe('hidden');
  });

  test('should animate enter', (done) => {
    const wrapper = mount(CollapseAnimation,
      {
        localVue,
        mocks: { $style },
        slots: {
          default: '<p>TEST</p>',
        },
      });

    const testElement: HTMLElement = wrapper.find('p').element;

    (testElement as any).getClientRects = () => {
      return {
        item: () => {
          return {
            height: 100,
          };
        },
      };
    };

    (wrapper as any).vm.leave(testElement, () => {
      expect(testElement.style.height).toBe('');
      expect(testElement.style.opacity).toBe('0');
      done();
    });
  });
});
