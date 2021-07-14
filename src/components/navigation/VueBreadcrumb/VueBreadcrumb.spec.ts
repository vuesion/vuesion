import { render, RenderResult } from '@testing-library/vue';
import VueBreadcrumb from './VueBreadcrumb.vue';

describe('VueBreadcrumb.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueBreadcrumb, {
      props: {
        items: [
          { label: 'Level 1', value: '/level-1' },
          { label: 'Level 2', value: '/level-2' },
          { label: 'Level 3', value: '/level-3' },
          { label: 'Level 4', value: '/level-4' },
          { label: 'Level 5', value: '/level-5' },
        ],
      },
      stubs: ['nuxt-link'],
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Level 1');
    getByText('Level 2');
    getByText('Level 3');
    getByText('Level 4');
    getByText('Level 5');
  });
});
