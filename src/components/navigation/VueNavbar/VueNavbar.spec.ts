import { render, RenderResult } from '@testing-library/vue';
import VueNavbar from './VueNavbar.vue';

describe('VueNavbar.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueNavbar, {
      props: {
        userName: 'foo bar',
      },
      slots: {
        center: ['center content'],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('fb');
    getByText('center content');
  });
});
