import { describe, test } from 'vitest';
import { render } from '@testing-library/vue';
import FadeAnimation from './FadeAnimation.vue';

describe('FadeAnimation.vue', () => {
  test('renders component', () => {
    const { getByText } = render(FadeAnimation, {
      slots: {
        default: '<div>foo</div>',
      },
    });

    getByText('foo');
  });
});
