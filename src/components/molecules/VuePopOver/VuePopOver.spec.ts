import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VuePopOver from './VuePopOver.vue';

describe('VuePopOver.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VuePopOver, {
      stubs: ['nuxt-link'],
      slots: {
        default: 'pop-over-content',
      },
    });
  });

  test('renders component', async () => {
    const { getByText, getByTestId } = harness;

    await fireEvent.focus(getByTestId('pop-over'));
    await fireEvent.blur(getByTestId('pop-over'));

    getByText('pop-over-content');
  });
});
