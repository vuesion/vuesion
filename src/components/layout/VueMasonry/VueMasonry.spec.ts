import { fireEvent, render } from '@testing-library/vue';
import VueMasonry from './VueMasonry.vue';

describe('VueMasonry.vue', () => {
  test('renders component with images', async () => {
    const { getByText, getByTestId } = render(VueMasonry, {
      stubs: ['nuxt-link'],
      slots: {
        default:
          '<div><img data-testid="image" alt="test" src="https://images.unsplash.com/photo-1567017469553-d1b219af5831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />VueMasonry</div>',
      },
    });

    getByText('VueMasonry');

    const image = getByTestId('image');

    await fireEvent.load(image);
    expect(image.style.display).toBe('initial');

    await fireEvent.error(image);
    expect(image.style.display).toBe('none');
  });

  test('renders component with images and calls original events', async () => {
    const { getByText, getByTestId } = render(VueMasonry, {
      stubs: ['nuxt-link'],
      slots: {
        default:
          '<div><img data-testid="image" alt="test" src="https://images.unsplash.com/photo-1567017469553-d1b219af5831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" onload="this.style.height=`24px`" onerror="this.style.width=`24px`" />VueMasonry</div>',
      },
    });
    const image = getByTestId('image');

    await fireEvent.load(image);
    await fireEvent.error(image);

    getByText('VueMasonry');

    expect(image.style.height).toBe('24px');
    expect(image.style.width).toBe('24px');
  });
});
