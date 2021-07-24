import { render } from '@testing-library/vue';
import VueImage from './VueImage.vue';

describe('VueImage.vue', () => {
  test('renders native image', () => {
    const { html } = render(VueImage, {
      props: {
        src: 'foo',
      },
    });
    const actual = html();
    const expected = '<img src="foo">';

    expect(actual).toBe(expected);
  });

  test('renders image as div', () => {
    const { html } = render(VueImage, {
      props: {
        native: false,
        src: 'foo',
      },
    });
    const actual = html();
    const expected = '<div style="background-image: url(foo);"></div>';

    expect(actual).toBe(expected);
  });

  test('renders image via observer', () => {
    let disconnected = false;
    (global as any).IntersectionObserver = class IntersectionObserver {
      public cb: any;
      public options: any;

      constructor(cb: any, options: any) {
        this.cb = cb;
        this.options = options;
      }

      public observe() {
        this.cb([{ intersectionRatio: 0 }, { intersectionRatio: 1 }], this);
      }

      public disconnect() {
        disconnected = true;
      }
    };
    const { html } = render(VueImage, {
      props: {
        src: 'foo',
      },
    });
    let actual: any = html();
    let expected: any = '<img src="foo">';

    expect(actual).toBe(expected);

    actual = disconnected;
    expected = true;

    expect(actual).toBe(expected);
  });
});
