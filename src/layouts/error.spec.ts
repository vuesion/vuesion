import { render, RenderResult } from '@testing-library/vue';
import Error from '@/layouts/error.vue';

describe('error.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(Error, {
      propsData: {
        error: {
          statusCode: 500,
        },
      },
    });
  });

  test('renders component for error', () => {
    const { getByText } = harness;

    getByText('Error');
  });

  test('renders component for 404', async () => {
    const { getByText, updateProps } = harness;

    await updateProps({
      error: {
        statusCode: 404,
      },
    });

    getByText('404');
  });
});
