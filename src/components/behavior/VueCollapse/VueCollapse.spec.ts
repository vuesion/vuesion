import { render, RenderResult } from '@testing-library/vue';
import VueCollapse from './VueCollapse.vue';

describe('VueCollapse.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCollapse, {
      slots: {
        default: '<h1>content</h1>',
      },
    });
  });

  test('renders component', async () => {
    const { queryAllByText, updateProps } = harness;

    expect(queryAllByText('content')).toHaveLength(1);

    await updateProps({ show: false });

    expect(queryAllByText('content')).toHaveLength(0);
  });
});
