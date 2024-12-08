import { describe, test } from 'vitest';
import { render } from '@testing-library/vue';
import CollapseAnimation from './CollapseAnimation.vue';

describe('CollapseAnimation.vue', () => {
  test('renders component', () => {
    const { getByText } = render(CollapseAnimation, {
      slots: {
        default: '<div>foo</div>',
      },
    });

    getByText('foo');
  });
});
