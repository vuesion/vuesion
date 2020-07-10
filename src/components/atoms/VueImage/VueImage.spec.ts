import { createLocalVue, mount } from '@vue/test-utils';
import VueImage from './VueImage.vue';

const localVue = createLocalVue();

describe('VueImage.vue', () => {
  test('renders native image', () => {
    const wrapper = mount<any>(VueImage, {
      localVue,
      propsData: {
        src: 'foo',
      },
    });
    const actual = wrapper.html();
    const expected = '<img src="foo">';

    expect(actual).toBe(expected);
  });

  test('renders image as div', () => {
    const wrapper = mount<any>(VueImage, {
      localVue,
      propsData: {
        src: 'foo',
        native: false,
      },
    });
    const actual = wrapper.html();
    const expected = '<div style="background-image: url(foo);"></div>';

    expect(actual).toBe(expected);
  });

  test('renders image via observer', () => {
    let disconnected = false;
    (window as any).IntersectionObserver = class IntersectionObserver {
      public cb: any;
      public options: any;

      constructor(cb: any, options: any) {
        this.cb = cb;
        this.options = options;
      }

      public observe() {
        this.cb([{ intersectionRatio: 0 }, { intersectionRatio: 1 }]);
      }

      public disconnect() {
        disconnected = true;
      }
    };
    const wrapper = mount<any>(VueImage, {
      localVue,
      propsData: {
        src: 'foo',
      },
    });
    let actual: any = wrapper.html();
    let expected: any = '<img src="foo">';

    wrapper.vm.observer.observe();

    expect(actual).toBe(expected);

    actual = disconnected;
    expected = true;

    expect(actual).toBe(expected);
  });
});
