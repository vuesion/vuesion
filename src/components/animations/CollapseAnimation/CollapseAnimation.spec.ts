import { mount, createLocalVue } from '@vue/test-utils';
import CollapseAnimation from './CollapseAnimation.vue';

const localVue = createLocalVue();

describe('CollapseAnimation.vue', () => {
  test('should set default before enter values', () => {
    const wrapper = mount<any>(CollapseAnimation, {
      localVue,
      slots: {
        default: '<p>TEST</p>',
      },
    });

    const testElement = wrapper.find('p').element as HTMLElement;

    wrapper.vm.beforeEnter(testElement);

    expect(testElement.style.height).toBe('0px');
    expect(testElement.style.opacity).toBe('0');
    expect(testElement.style.overflow).toBe('hidden');
  });

  test('should animate enter', (done) => {
    const wrapper = mount<any>(CollapseAnimation, {
      localVue,
      slots: {
        default: '<p>TEST</p>',
      },
    });

    const testElement = wrapper.find('p').element as HTMLElement;

    (testElement as any).getClientRects = () => {
      return {
        length: 0,
      };
    };

    wrapper.vm.enter(testElement, () => {
      expect(testElement.style.opacity).toBe('1');
      done();
    });
  });

  test('should set default before leave values', () => {
    const wrapper = mount<any>(CollapseAnimation, {
      localVue,
      slots: {
        default: '<p>TEST</p>',
      },
    });

    const testElement = wrapper.find('p').element as HTMLElement;

    wrapper.vm.beforeLeave(testElement);

    expect(testElement.style.height).toBe('');
    expect(testElement.style.opacity).toBe('');
    expect(testElement.style.overflow).toBe('hidden');
  });

  test('should animate leave', (done) => {
    const wrapper = mount<any>(CollapseAnimation, {
      localVue,
      slots: {
        default: '<p>TEST</p>',
      },
    });

    const testElement = wrapper.find('p').element as HTMLElement;

    (testElement as any).getClientRects = () => {
      return {
        item: () => {
          return {
            height: 100,
          };
        },
      };
    };

    wrapper.vm.leave(testElement, () => {
      expect(testElement.style.height).toBe('');
      expect(testElement.style.opacity).toBe('0');
      done();
    });
  });
});
